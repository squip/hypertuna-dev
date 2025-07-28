// this is the script for /backend/hypertuna-relay-helper.mjs:
import Autobase from 'autobase';
import b4a from 'b4a';
import Hyperbee from 'hyperbee';
import Hyperblobs from 'hyperblobs';

export default class Autobee extends Autobase {
  constructor (store, bootstrap, handlers = {}) {
    console.log('[Autobee] ========================================');
    console.log('[Autobee] CONSTRUCTOR');
    console.log('[Autobee] Bootstrap:', bootstrap || 'none');
    console.log('[Autobee] Has custom handlers:', !!handlers);
    console.log('[Autobee] ========================================');
    
    if (bootstrap && typeof bootstrap !== 'string' && !b4a.isBuffer(bootstrap)) {
      handlers = bootstrap
      bootstrap = null
    }

    const open = async (viewStore) => {
      console.log('[Autobee] Opening view store...');
      
      const core = viewStore.get('autobee')
      console.log('[Autobee] Got autobee core');
      
      const bee = new Hyperbee(core, {
        ...handlers,
        extension: false
      })
      console.log('[Autobee] Created Hyperbee instance');
      
      const blobSession = viewStore.get('relay-blobs')
      const blobs = new Hyperblobs(blobSession)
      if (typeof blobSession?.ready === 'function') {
        blobs.ready = blobSession.ready.bind(blobSession)
      }
      console.log('[Autobee] Created Hyperblobs instance');

      try {
        await bee.ready()
        console.log('[Autobee] Hyperbee is ready')
        console.log('[Autobee] - Version:', bee.version)
        console.log('[Autobee] - Feed length:', bee.feed?.length || 0)
      } catch (err) {
        console.error('[Autobee] Hyperbee ready error:', err)
      }

      try {
        await blobs.ready()
        console.log('[Autobee] Hyperblobs is ready')
        console.log('[Autobee] - Core length:', blobs.core?.length || 0)
      } catch (err) {
        console.error('[Autobee] Hyperblobs ready error:', err)
      }

      return { bee, blobs }
    }

    const apply = 'apply' in handlers ? handlers.apply : Autobee.apply;

    try {
      console.log('[Autobee] Calling parent Autobase constructor...');
      super(store, bootstrap, { ...handlers, open, apply });
      console.log('[Autobee] Parent constructor completed');
      
      // Log initial state
      console.log('[Autobee] Initial state:');
      console.log('[Autobee] - Key:', this.key ? b4a.toString(this.key, 'hex') : 'not set');
      console.log('[Autobee] - Writable:', this.writable);
      console.log('[Autobee] - Has view:', !!this.view);
      
      // Monitor state changes
      this.on('update', () => {
        console.log('[Autobee] Update event - writable:', this.writable, 'writers:', this.writers?.length || 0);
      });
      
      this.on('append', () => {
        console.log('[Autobee] Append event');
      });

      if (!this.subscriptions) {
        this.subscriptions = new Map();
      }

      this.cleanupInterval = setInterval(() => this.cleanupSubscriptions(), 5 * 60 * 1000);
      
      console.log('[Autobee] Constructor completed successfully');
    } catch (error) {
      console.error('[Autobee] Constructor error:', error);
      console.error('[Autobee] Stack trace:', error.stack);
      throw error;
    }
  }
  

  cleanupSubscriptions() {
    const now = Date.now();
    for (const [subscriptionId, subscription] of this.subscriptions) {
      if (now - subscription.lastActivity > 30 * 60 * 1000) { // 30 minutes
        this.unsubscribe(subscriptionId);
      }
    }
  }

  // Add this method to properly clean up when the instance is no longer needed
  close() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    // Add any other necessary cleanup logic here
  }

  static async apply (batch, view, base) {
    console.log('[Autobee] ========================================');
    console.log('[Autobee] APPLY BATCH');
    console.log('[Autobee] Batch size:', batch.length);
    console.log('[Autobee] Has view:', !!view);
    console.log('[Autobee] View has bee:', !!view?.bee);
    console.log('[Autobee] View has blobs:', !!view?.blobs);
    console.log('[Autobee] ========================================');
    
    const b = view.bee.batch({ update: false })
    const decodeKey = (x) => b4a.isBuffer(x) && view.bee.keyEncoding
      ? view.bee.keyEncoding.decode(x)
      : x

    try {
      for (const node of batch) {
        const op = node.value
        console.log('[Autobee] Processing operation:', op.type);
        
        if (op.type === 'put') {
          const encKey = decodeKey(op.key)
          console.log('[Autobee] PUT operation - key:', 
            typeof encKey === 'string' ? encKey.substring(0, 50) + '...' : 'buffer');
          await b.put(encKey, op.value, op.opts)
        } else if (op.type === 'del') {
          const encKey = decodeKey(op.key)
          console.log('[Autobee] DEL operation - key:', 
            typeof encKey === 'string' ? encKey.substring(0, 50) + '...' : 'buffer');
          await b.del(encKey, op.opts)
        } else {
          console.warn(`[Autobee] Unknown operation type: ${op.type}`);
        }
      }

      console.log('[Autobee] Flushing batch...');
      await b.flush()
      console.log('[Autobee] Batch applied successfully');
    } catch (error) {
      console.error('[Autobee] Error applying batch:', error)
      console.error('[Autobee] Stack trace:', error.stack)
      throw error
    }
  }

  _getEncodedKey (key, opts) {
    // Apply keyEncoding option if provided.
    // The key is preencoded so that the encoding survives being deserialized
    // from the input core
    const encKey = opts && opts.keyEncoding
      ? opts.keyEncoding.encode(key)
      : key

    // Clear keyEncoding from options as it has now been applied
    if (opts && opts.keyEncoding) {
      delete opts.keyEncoding
    }

    return encKey
  }

  async append(value) {
    console.log('[Autobee] ========================================');
    console.log('[Autobee] APPEND OPERATION');
    console.log('[Autobee] Value type:', Array.isArray(value) ? 'array' : (value?.type || 'unknown'));
    if (value?.type) {
      console.log('[Autobee] Operation type:', value.type);
      if (value.type === 'addWriter') {
        console.log('[Autobee] AddWriter key:', value.key);
      }
    }
    console.log('[Autobee] Current writable state:', this.writable);
    console.log('[Autobee] ========================================');
    
    try {
      console.log('[Autobee] Calling parent append...');
      const result = await super.append(value);
      console.log('[Autobee] Parent append completed');
      
      console.log('[Autobee] Calling _bump()...');
      const bumpResult = await this._bump();
      console.log('[Autobee] _bump() completed');
      
      return bumpResult;
    } catch (error) {
      console.error('[Autobee] Error in append operation:', error);
      console.error('[Autobee] Stack trace:', error.stack);
      throw error;
    }
  }
  

  async put(key, value, opts) {
    try {
      await this.append({
        type: 'put',
        key: this._getEncodedKey(key, opts),
        value,
        opts
      });
    } catch (error) {
      console.error('Error in put operation:', error);
      throw error; // Re-throw or handle as appropriate
    }
  }

  async del(key, opts) {
    try {
      const encKey = this._getEncodedKey(key, opts);
      await this.append({
        type: 'del',
        key: encKey,
        opts
      });
    } catch (error) {
      console.error('Error in del operation:', error);
      throw error;
    }
  }

  // Add getters with logging
  get bee() {
    const hasBee = !!this.view?.bee;
    if (!hasBee) {
      console.warn('[Autobee] Bee getter called but bee not available');
    }
    return this.view?.bee;
  }

  get blobs() {
    const hasBlobs = !!this.view?.blobs;
    if (!hasBlobs) {
      console.warn('[Autobee] Blobs getter called but blobs not available');
    }
    return this.view?.blobs;
  }


  get (key, opts) {
    return this.view.bee.get(key, opts)
  }

  peek (opts) {
    return this.view.bee.peek(opts)
  }

  createReadStream(range, opts) {
    if (!this.view || !this.view.bee) {
      throw new Error('View is not initialized');
    }
    return this.view.bee.createReadStream(range, opts);
  }
}
