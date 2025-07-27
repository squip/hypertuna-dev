// this is the script for /backend/hypertuna-relay-helper.mjs:
import Autobase from 'autobase';
import b4a from 'b4a';
import Hyperbee from 'hyperbee';
import Hyperblobs from 'hyperblobs';

export default class Autobee extends Autobase {
  constructor (store, bootstrap, handlers = {}) {
    if (bootstrap && typeof bootstrap !== 'string' && !b4a.isBuffer(bootstrap)) {
      handlers = bootstrap
      bootstrap = null
    }

    const open = (viewStore) => {
      const core = viewStore.get('autobee')
      const bee = new Hyperbee(core, {
        ...handlers,
        extension: false
      })
      const blobs = new Hyperblobs(viewStore.get('relay-blobs'))
      return { bee, blobs }
    }

    const apply = 'apply' in handlers ? handlers.apply : Autobee.apply;

    try {
        super(store, bootstrap, { ...handlers, open, apply });

        // this.bee = this.view.bee;
        // this.blobs = this.view.blobs;

        if (!this.subscriptions) {
          this.subscriptions = new Map();
        }
  
        this.cleanupInterval = setInterval(() => this.cleanupSubscriptions(), 5 * 60 * 1000);
      } catch (error) {
        console.error('Error initializing Autobee:', error);
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
    const b = view.bee.batch({ update: false })
    const decodeKey = (x) => b4a.isBuffer(x) && view.bee.keyEncoding
      ? view.bee.keyEncoding.decode(x)
      : x
  
    try {
      for (const node of batch) {
        const op = node.value
        if (op.type === 'put') {
          const encKey = decodeKey(op.key)
          await b.put(encKey, op.value, op.opts)
        } else if (op.type === 'del') {
          const encKey = decodeKey(op.key)
          await b.del(encKey, op.opts)
        } else {
          console.warn(`Unknown operation type: ${op.type}`)
        }
      }
  
      await b.flush()
    } catch (error) {
      console.error('Error applying batch:', error)
      throw error // Re-throw the error to be handled by the caller
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
    try {
      await super.append(value);
      return this._bump(); // Ensure we return the Promise from _bump()
    } catch (error) {
      console.error('Error in append operation:', error);
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

  // Add getters for bee and blobs views
  get bee() {
    return this.view?.bee;
  }

  get blobs() {
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
