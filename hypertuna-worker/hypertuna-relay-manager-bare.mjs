// ./relay-worker/hypertuna-relay-manager-bare.mjs
// Bare-compatible version of the relay manager

import Corestore from 'corestore';
import Hyperswarm from 'hyperswarm';
import Hyperbee from 'hyperbee';
import { promises as fs } from 'bare-fs';
import NostrRelay from './hypertuna-relay-event-processor.mjs';
import b4a from 'b4a';
import c from 'compact-encoding';
import Protomux from 'protomux';
import { nobleSecp256k1 } from './crypto-libraries.js';
import { NostrUtils } from './nostr-utils.js';
import { setTimeout } from 'bare-timers';

// File locking utility to handle concurrent access
const fileLocks = new Map();

async function acquireFileLock(filePath, maxRetries = 5, retryDelay = 500) {
  let retries = 0;
  
  while (retries < maxRetries) {
    if (!fileLocks.has(filePath)) {
      // Acquire the lock
      fileLocks.set(filePath, true);
      return true;
    }
    
    // Wait before retrying
    console.log(`File ${filePath} is locked, retrying in ${retryDelay}ms (attempt ${retries + 1}/${maxRetries})`);
    await setTimeout(retryDelay);
    retries++;
  }
  
  // Failed to acquire lock after max retries
  throw new Error(`Failed to acquire lock for ${filePath} after ${maxRetries} attempts`);
}

function releaseFileLock(filePath) {
  fileLocks.delete(filePath);
}

async function verifyEventSignature(event) {
  try {
      console.log('Verifying Event Signature ===');
      const serialized = serializeEvent(event);
      console.log('Serialized Event:', serialized);
      
      // Use sha256 which returns Uint8Array
      const hashBytes = await nobleSecp256k1.utils.sha256(b4a.from(serialized, 'utf8'));
      const hashHex = NostrUtils.bytesToHex(hashBytes);
      console.log('Event Hash:', hashHex);
      
      console.log('Verification Details:');
      console.log('Public Key:', event.pubkey);
      console.log('Signature:', event.sig);
      
      // schnorr.verify expects the signature, hash, and pubkey
      // Our pure implementation handles string/Uint8Array conversion internally
      const isValid = await nobleSecp256k1.schnorr.verify(
        event.sig,  // hex string
        hashHex,    // hex string
        event.pubkey // hex string (x-only pubkey, 32 bytes)
      );
      
      console.log('Verification Result:', isValid);
      return isValid;
  } catch (err) {
      console.error('Error verifying event signature:', err);
      return false;
  }
}

function serializeEvent(event) {
  return JSON.stringify([0, event.pubkey, event.created_at, event.kind, event.tags, event.content]);
}

async function getEventHash(event) {
  const serialized = JSON.stringify([0, event.pubkey, event.created_at, event.kind, event.tags, event.content]);
  const hashBytes = await nobleSecp256k1.utils.sha256(b4a.from(serialized, 'utf8'));
  return NostrUtils.bytesToHex(hashBytes);
}

function validateEvent(event) {
  if (typeof event.kind !== 'number') return false;
  if (typeof event.content !== 'string') return false;
  if (typeof event.created_at !== 'number') return false;
  if (typeof event.pubkey !== 'string') return false;
  if (!event.pubkey.match(/^[a-f0-9]{64}$/)) return false;

  if (!Array.isArray(event.tags)) return false;
  for (let tag of event.tags) {
    if (!Array.isArray(tag)) return false;
    for (let item of tag) {
      if (typeof item === 'object') return false;
    }
  }

  return true;
}

export class RelayManager {
  constructor(storageDir, bootstrap) {
    this.storageDir = storageDir;
    this.bootstrap = bootstrap;
    this.store = null;  // Initialize in the initialize method
    this.relay = null;
    this.blobs = null;
    this.swarm = null;
    this.peers = new Map(); // Track connected peers
  }

  async initialize() {
    console.log('[RelayManager] ========================================');
    console.log('[RelayManager] INITIALIZING RELAY');
    console.log('[RelayManager] Bootstrap:', this.bootstrap || 'none');
    console.log('[RelayManager] Storage directory:', this.storageDir);
    console.log('[RelayManager] ========================================');
  
    try {
      // Acquire lock for the storage directory
      await acquireFileLock(this.storageDir);
      console.log(`[RelayManager] Acquired lock for storage directory: ${this.storageDir}`);
      
      // Initialize Corestore after acquiring the lock
      this.store = new Corestore(this.storageDir);
      console.log('[RelayManager] Corestore initialized');
  
      // Initialize NostrRelay with enhanced logging
      console.log('[RelayManager] Creating NostrRelay instance...');
      this.relay = new NostrRelay(this.store, this.bootstrap, {
        valueEncoding: c.any,
        verifyEvent: this.verifyEvent.bind(this)
      });

      // Wait for the relay to finish opening its view
      await this.relay.ready();
  
      // Monitor relay events
      this.relay.on('error', (err) => {
        console.error('[RelayManager] Relay error:', err);
      });
  
      this.relay.on('append', () => {
        console.log('[RelayManager] Relay append event');
      });
  
      this.relay.on('update', () => {
        console.log('[RelayManager] Relay update event');
      });
  
      console.log('[RelayManager] NostrRelay instance created');
      console.log('[RelayManager] Initial relay state:');
      
      // Safe logging with null checks
      if (this.relay.key) {
        console.log('[RelayManager] - Key:', b4a.toString(this.relay.key, 'hex'));
      } else {
        console.log('[RelayManager] - Key: not available yet');
      }
      
      if (this.relay.discoveryKey) {
        console.log('[RelayManager] - Discovery key:', b4a.toString(this.relay.discoveryKey, 'hex'));
      } else {
        console.log('[RelayManager] - Discovery key: not available yet');
      }
      
      console.log('[RelayManager] - Writable:', this.relay.writable);
  
      // Initial update with logging
      console.log('[RelayManager] Performing initial relay update...');
      await this.relay.update();

      // Wait for the underlying Hyperbee/Hyperblobs views to be ready
      if (this.relay.view?.bee) {
        await this.relay.view.bee.ready();
        console.log('[RelayManager] View bee is ready');
      }
      if (this.relay.view?.blobs && typeof this.relay.view.blobs.ready === 'function') {
        await this.relay.view.blobs.ready();
        console.log('[RelayManager] View blobs are ready');
      }

      console.log('[RelayManager] Initial update completed');
      
      // Log state after update
      console.log('[RelayManager] State after update:');
      if (this.relay.key) {
        console.log('[RelayManager] - Key:', b4a.toString(this.relay.key, 'hex'));
      }
      if (this.relay.discoveryKey) {
        console.log('[RelayManager] - Discovery key:', b4a.toString(this.relay.discoveryKey, 'hex'));
      }
      console.log('[RelayManager] - Writable:', this.relay.writable);
  
      // Monitor view readiness
      if (this.relay.view) {
        console.log('[RelayManager] View is ready');
        console.log('[RelayManager] - Bee available:', !!this.relay.view.bee);
        console.log('[RelayManager] - Blobs available:', !!this.relay.view.blobs);
        
        // Attach append listener
        if (this.relay.view.bee && this.relay.view.bee.core) {
          this.relay.view.bee.core.on('append', async () => {
            if (this.relay.view.bee.version === 1) return;
            console.log('[RelayManager] Bee append - version:', this.relay.view.bee.version);
          });
          console.log('[RelayManager] Attached bee append listener');
        }
      } else {
        console.warn('[RelayManager] View not ready after initial update');
        
        // Monitor for view readiness
        const viewCheckInterval = setInterval(async () => {
          if (this.relay.view) {
            console.log('[RelayManager] View became ready!');
            console.log('[RelayManager] - Bee available:', !!this.relay.view.bee);
            console.log('[RelayManager] - Blobs available:', !!this.relay.view.blobs);
            clearInterval(viewCheckInterval);
          }
        }, 1000);
        
        // Clean up after 30 seconds
        setTimeout(() => clearInterval(viewCheckInterval), 30000);
      }
  
      if (!this.bootstrap) {
        console.log('[RelayManager] No bootstrap - this is a new relay');
        if (this.relay.key) {
          console.log('[RelayManager] Relay public key:', b4a.toString(this.relay.key, 'hex'));
        }
      }
  
      // Initialize and join swarm
      this.swarm = new Hyperswarm();
      this.setupSwarmListeners();
  
      // Wait for discovery key to be available
      if (!this.relay.discoveryKey) {
        console.log('[RelayManager] Waiting for discovery key...');
        // For bootstrapped relays, the discovery key might not be available immediately
        let attempts = 0;
        while (!this.relay.discoveryKey && attempts < 10) {
          await new Promise(resolve => setTimeout(resolve, 100));
          await this.relay.update();
          attempts++;
        }
        
        if (!this.relay.discoveryKey) {
          throw new Error('Discovery key not available after waiting');
        }
      }
  
      console.log('[RelayManager] Joining swarm with discovery key:', b4a.toString(this.relay.discoveryKey, 'hex'));
      const discovery = this.swarm.join(this.relay.discoveryKey);
      await discovery.flushed();
      // Wait for all currently discoverable peers to connect
      await this.swarm.flush();
      console.log('[RelayManager] Swarm joined and flushed successfully');
  
      // Initialize relay if writable
      if (this.relay.writable) {
        try {
          console.log('[RelayManager] Relay is writable, initializing...');
          const initEventId = await this.initRelay();
          console.log('[RelayManager] Relay initialized with event ID:', initEventId);
        } catch (error) {
          console.error('[RelayManager] Failed to initialize relay:', error);
        }
      } else {
        console.log('[RelayManager] Relay is not writable yet');
        console.log('[RelayManager] Waiting for writer to be added...');
        if (this.relay.local && this.relay.local.key) {
          console.log('[RelayManager] Local writer key:', b4a.toString(this.relay.local.key, 'hex'));
        } else {
          console.log('[RelayManager] Local writer key not available yet');
        }
      }
      
      // Release the lock after initialization
      releaseFileLock(this.storageDir);
      console.log(`[RelayManager] Released lock for storage directory: ${this.storageDir}`);
      
      console.log('[RelayManager] ========================================');
      console.log('[RelayManager] INITIALIZATION COMPLETE');
      console.log('[RelayManager] ========================================');
      
      return this;
    } catch (error) {
      // Make sure to release the lock in case of errors
      releaseFileLock(this.storageDir);
      console.error(`[RelayManager] Initialization error: ${error.message}`);
      console.error('[RelayManager] Stack trace:', error.stack);
      throw error;
    }
  }

  setupSwarmListeners() {
    this.swarm.on('connection', async (connection, peerInfo) => {
      const peerKey = b4a.toString(peerInfo.publicKey, 'hex');
      console.log('\r[RelayManager] ========================================');
      console.log('[RelayManager] NEW PEER CONNECTION');
      console.log('[RelayManager] Peer key:', peerKey.substring(0, 16));
      console.log('[RelayManager] Connection time:', new Date().toISOString());
      console.log('[RelayManager] ========================================');
      
      try {
        // Track peer
        this.peers.set(peerKey, {
          connection,
          connectedAt: new Date(),
          info: peerInfo
        });
        console.log('[RelayManager] Peer tracked successfully');
        
        // Test connection object
        console.log('[RelayManager] Connection object type:', typeof connection);
        console.log('[RelayManager] Connection readable:', connection.readable);
        console.log('[RelayManager] Connection writable:', connection.writable);
        
        // Create Protomux with error handling
        console.log('[RelayManager] Creating Protomux instance...');
        let mux;
        try {
          mux = new Protomux(connection);
          console.log('[RelayManager] Protomux created successfully');
        } catch (muxError) {
          console.error('[RelayManager] Failed to create Protomux:', muxError);
          console.error('[RelayManager] Stack:', muxError.stack);
          return;
        }
        
        console.log('[RelayManager] Initialized Protomux on the connection');
  
        // Add connection state tracking
        connection.on('error', (err) => {
          console.error(`[RelayManager] Connection error with peer ${peerKey.substring(0, 16)}:`, err);
        });
  
        connection.on('close', () => {
          console.log(`[RelayManager] Connection closed with peer ${peerKey.substring(0, 16)}`);
          this.peers.delete(peerKey);
        });
  
        // Establish replication with the peer
        console.log('[RelayManager] Starting replication...');
        let replicationStream;
        try {
          replicationStream = this.relay.replicate(connection);
          console.log('[RelayManager] relay.replicate() called successfully');
          // this.relay.replicate(connection) replicates both Corestore and
          // Hyperblobs in a single stream. See the Corestore guide
          // documentation (autobase-hyperblobs-documentation/corestore-guide.md
          // lines 45-50) and the Autobase guide API section
          // (autobase-hyperblobs-documentation/autobase-guide-api.md
          // lines 211-221).
        } catch (replError) {
          console.error('[RelayManager] Failed to create replication stream:', replError);
          console.error('[RelayManager] Stack:', replError.stack);
          return;
        }

        if (replicationStream) {
          replicationStream.on('error', (err) => {
            console.error('[RelayManager] Replication error:', err);
          });

          replicationStream.on('sync', () => {
            console.log('[RelayManager] Replication synced!');
          });

          console.log('[RelayManager] Replication stream established');
        } else {
          console.error('[RelayManager] Failed to create replication stream - returned null');
        }
  
        // Add writer protocol with enhanced error handling
        console.log('[RelayManager] Creating add-writer protocol channel...');
        let addWriterProtocol;
        try {
          addWriterProtocol = mux.createChannel({
            protocol: 'add-writer',
            onopen: () => {
              console.log('[RelayManager] add-writer protocol opened!');
            },
            onclose: () => {
              console.log('[RelayManager] add-writer protocol closed!');
              this.peers.delete(peerKey);
            }
          });
        } catch (chanError) {
          console.error('[RelayManager] Failed to create add-writer channel:', chanError);
          console.error('[RelayManager] Stack:', chanError.stack);
          return;
        }
        
        if (!addWriterProtocol) {
          console.error('[RelayManager] Failed to create add-writer protocol channel - returned null');
          return;
        }
        
        console.log('[RelayManager] add-writer protocol channel created');
        
        // Create message handler
        console.log('[RelayManager] Adding message handler...');
        let addWriterMessage;
        try {
          addWriterMessage = addWriterProtocol.addMessage({
            encoding: c.string,
            onmessage: async (message) => {
              const writerKey = message.toString();
              console.log('[RelayManager] ========================================');
              console.log('[RelayManager] RECEIVED WRITER KEY');
              console.log('[RelayManager] Writer key:', writerKey);
              console.log('[RelayManager] From peer:', peerKey.substring(0, 16));
              console.log('[RelayManager] ========================================');
              
              try {
                console.log('[RelayManager] Attempting to add writer...');
                await this.addWriter(writerKey);
                console.log('[RelayManager] Writer key added successfully');
                
                // Log the current state after adding writer
                console.log('[RelayManager] Current relay state:');
                console.log('[RelayManager] - Writable:', this.relay.writable);
                console.log('[RelayManager] - Writers count:', this.relay.writers?.length || 0);
                console.log('[RelayManager] - View ready:', !!this.relay.view);
                
                addWriterProtocol.close();
              } catch (error) {
                console.error('[RelayManager] Error adding writer key:', error);
                console.error('[RelayManager] Stack trace:', error.stack);
                addWriterProtocol.close();
              }
            }
          });
        } catch (msgError) {
          console.error('[RelayManager] Failed to add message handler:', msgError);
          console.error('[RelayManager] Stack:', msgError.stack);
          return;
        }
        
        console.log('[RelayManager] Message handler added');
        
        // Open the protocol
        console.log('[RelayManager] Opening add-writer protocol...');
        try {
          addWriterProtocol.open();
          console.log('[RelayManager] Opened add-writer protocol');
        } catch (openError) {
          console.error('[RelayManager] Failed to open protocol:', openError);
          console.error('[RelayManager] Stack:', openError.stack);
          return;
        }
        
        // Send our writer key to the peer - with null check and error handling
        console.log('[RelayManager] Checking local writer key...');
        if (this.relay.local && this.relay.local.key) {
          const writerKey = b4a.toString(this.relay.local.key, 'hex');
          console.log('[RelayManager] Sending writer key:', writerKey);
          try {
            addWriterMessage.send(writerKey);
            console.log('[RelayManager] Writer key sent successfully');
          } catch (sendError) {
            console.error('[RelayManager] Failed to send writer key:', sendError);
            console.error('[RelayManager] Stack:', sendError.stack);
          }
        } else {
          console.warn('[RelayManager] Local writer key not available, cannot send to peer');
          console.log('[RelayManager] relay.local:', this.relay.local);
          console.log('[RelayManager] relay.local?.key:', this.relay.local?.key);
        }
  
  
        // Add periodic status logging
        const statusInterval = setInterval(() => {
          if (!this.peers.has(peerKey)) {
            clearInterval(statusInterval);
            return;
          }
          
          console.log('[RelayManager] ========================================');
          console.log('[RelayManager] REPLICATION STATUS CHECK');
          console.log('[RelayManager] Peer:', peerKey.substring(0, 16));
          console.log('[RelayManager] Relay writable:', this.relay.writable);
          console.log('[RelayManager] Writers count:', this.relay.writers?.length || 0);
          console.log('[RelayManager] View status:', this.relay.view ? 'ready' : 'not ready');
          if (this.relay.view) {
            console.log('[RelayManager] - Bee status:', this.relay.view.bee ? 'ready' : 'not ready');
            console.log('[RelayManager] - Blobs status:', this.relay.view.blobs ? 'ready' : 'not ready');
          }
          console.log('[RelayManager] ========================================');
        }, 10000); // Every 10 seconds
  
        // Clean up interval on disconnect
        connection.on('close', () => {
          clearInterval(statusInterval);
        });
        
        console.log('[RelayManager] Connection handler completed successfully');
        
      } catch (error) {
        console.error('[RelayManager] FATAL ERROR in connection handler:', error);
        console.error('[RelayManager] Error name:', error.name);
        console.error('[RelayManager] Error message:', error.message);
        console.error('[RelayManager] Stack trace:', error.stack);
        
        // Clean up on error
        this.peers.delete(peerKey);
      }
    });
    
    // Add swarm error handler
    this.swarm.on('error', (err) => {
      console.error('[RelayManager] Swarm error:', err);
    });
  }

  async addWriter(key) {
    console.log('[RelayManager] ========================================');
    console.log('[RelayManager] ADD WRITER OPERATION');
    console.log('[RelayManager] Writer key:', key);
    console.log('[RelayManager] Current writable state:', this.relay.writable);
    console.log('[RelayManager] ========================================');
    
    // Validate the key format
    if (!key || typeof key !== 'string' || !/^[a-f0-9]{64}$/.test(key)) {
      throw new Error('Invalid writer key format');
    }
    
    // Make sure the relay is ready and writable
    if (!this.relay) {
      throw new Error('Relay not initialized');
    }
    
    if (!this.relay.writable) {
      console.warn('[RelayManager] Warning: Relay is not writable, but attempting to add writer anyway');
    }
    
    try {
      console.log('[RelayManager] Appending addWriter operation to oplog...');
      
      // Append the addWriter operation
      const result = await this.relay.append({
        type: 'addWriter',
        key
      });
      
      console.log('[RelayManager] addWriter operation appended successfully');
      console.log('[RelayManager] Append result:', result);
      
      // Force an update to process the addWriter
      console.log('[RelayManager] Forcing relay update...');
      await this.relay.update();
      console.log('[RelayManager] Relay update completed');
      
      // Log the new state
      console.log('[RelayManager] Post-addWriter state:');
      console.log('[RelayManager] - Writable:', this.relay.writable);
      console.log('[RelayManager] - Writers count:', this.relay.writers?.length || 0);
      console.log('[RelayManager] - Writers:', this.relay.writers?.map(w => b4a.toString(w.key, 'hex').substring(0, 16) + '...'));
      
      return result;
    } catch (error) {
      console.error('[RelayManager] Error in addWriter:', error);
      console.error('[RelayManager] Stack trace:', error.stack);
      throw error;
    }
  }

  async removeWriter(key) {
    console.log('Removing writer:', key);
    
    if (!this.relay) {
      throw new Error('Relay not initialized');
    }
    
    if (!this.relay.writable) {
      throw new Error('Cannot remove writer - relay is not writable');
    }
    
    return await this.relay.append({
      type: 'removeWriter',
      key
    });
  }

  async writeFile(localPath, fileId) {
    if (!this.relay) {
      throw new Error('Relay not initialized');
    }
  
    console.log(`[RelayManager] writeFile called with ${localPath} -> ${fileId}`);
    
    const data = await fs.readFile(localPath);
    console.log(`[RelayManager] Read ${data.length} bytes from ${localPath}`);
  
    try {
      // Use the putBlob method from NostrRelay
      const hash = await this.relay.putBlob(data, {
        filename: fileId,
        uploadedBy: this.relay.local?.key ? 
          b4a.toString(this.relay.local.key, 'hex') : 
          'unknown',
        mimeType: this.getMimeType(fileId)
      });
      
      console.log(`[RelayManager] Stored file with hash: ${hash}`);
      return hash;
    } catch (err) {
      console.error('[RelayManager] Error storing file:', err);
      throw err;
    }
  }
  
  // Helper method to determine MIME type from filename
  getMimeType(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const mimeTypes = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'webp': 'image/webp',
      'pdf': 'application/pdf',
      'txt': 'text/plain',
      'json': 'application/json',
      'html': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript'
    };
    return mimeTypes[ext] || 'application/octet-stream';
  }

  async handleMessage(message, sendResponse, connectionKey) {
    if (!this.relay) {
      throw new Error('Relay not initialized');
    }
    return this.relay.handleMessage(message, sendResponse, connectionKey);
  }

  async handleSubscription(connectionKey) {
    if (!this.relay) {
      throw new Error('Relay not initialized');
    }
    return this.relay.handleSubscription(connectionKey);
  }        

  async updateSubscriptions(connectionKey, activeSubscriptionsUpdated) {
    try {
      if (!this.relay) {
        throw new Error('Relay not initialized');
      }
      
      console.log(`[${new Date().toISOString()}] RelayManager: Updating subscriptions for connection ${connectionKey}`);
      console.log('Updated subscription data:', JSON.stringify(activeSubscriptionsUpdated, null, 2));
      
      const result = await this.relay.updateSubscriptions(connectionKey, activeSubscriptionsUpdated);
      console.log(`[${new Date().toISOString()}] RelayManager: Successfully updated subscriptions`);
      
      return result;
    } catch (error) {
      console.error(`[${new Date().toISOString()}] RelayManager: Error updating subscriptions:`, error);
      throw error;
    }
  }

  async initRelay() {
    // Generate a new private key
    const privateKey = NostrUtils.generatePrivateKey(); // Returns hex string
    const publicKey = NostrUtils.getPublicKey(privateKey); // Returns hex string (x-only, 32 bytes)
    
    const event = {
      kind: 0,
      content: 'Relay initialized',
      created_at: Math.floor(Date.now() / 1000),
      tags: [],
      pubkey: publicKey, // Already the x-only coordinate without prefix
    };
    
    const serializedEvent = serializeEvent(event);
    const eventHashBytes = await nobleSecp256k1.utils.sha256(b4a.from(serializedEvent, 'utf8'));
    event.id = NostrUtils.bytesToHex(eventHashBytes);
    
    // Sign the event - schnorr.sign returns Uint8Array
    const signatureBytes = await nobleSecp256k1.schnorr.sign(event.id, privateKey);
    event.sig = NostrUtils.bytesToHex(signatureBytes);
    
    console.log('Initialized event (before publishing):', JSON.stringify(event, null, 2));
    console.log('Serialized event:', serializedEvent);
    console.log('Event hash:', event.id);
    
    return this.relay.publishEvent(event);
  }

  // ... rest of the methods remain the same ...

  async listAllEvents() {
    try {
      await acquireFileLock(`${this.storageDir}-read`);
      
      let count = 0;
      const events = [];
      for await (const node of this.relay.bee.createReadStream()) {
        try {
          const event = JSON.parse(node.value);
          events.push({
            id: node.key.toString('hex'),
            event
          });
          count++;
        } catch (error) {
          console.error('Error parsing event:', error);
        }
      }
      console.log(`Total events: ${count}`);
      
      releaseFileLock(`${this.storageDir}-read`);
      return events;
    } catch (error) {
      releaseFileLock(`${this.storageDir}-read`);
      console.error(`Error listing events: ${error.message}`);
      return [];
    }
  }

  async verifyEvent(event) {
    const isValid = validateEvent(event) && await verifyEventSignature(event);
    return isValid;
  }

  async publishEvent(event) {
    if (!this.relay) {
      throw new Error('Relay not initialized');
    }
    
    if (!validateEvent(event)) {
      throw new Error('Invalid event format');
    }
    
    try {
      await acquireFileLock(`${this.storageDir}-write`);
      const result = await this.relay.publishEvent(event);
      releaseFileLock(`${this.storageDir}-write`);
      return result;
    } catch (error) {
      releaseFileLock(`${this.storageDir}-write`);
      throw error;
    }
  }

  async getEvent(eventId) {
    if (!this.relay) {
      throw new Error('Relay not initialized');
    }
    
    try {
      await acquireFileLock(`${this.storageDir}-read`);
      const result = await this.relay.getEvent(eventId);
      releaseFileLock(`${this.storageDir}-read`);
      return result;
    } catch (error) {
      releaseFileLock(`${this.storageDir}-read`);
      throw error;
    }
  }

  async queryEvents(filters) {
    if (!this.relay) {
      throw new Error('Relay not initialized');
    }
    
    try {
      await acquireFileLock(`${this.storageDir}-read`);
      const result = await this.relay.queryEvents(filters);
      releaseFileLock(`${this.storageDir}-read`);
      return result;
    } catch (error) {
      releaseFileLock(`${this.storageDir}-read`);
      throw error;
    }
  }

  async deleteEvent(eventId) {
    if (!this.relay) {
      throw new Error('Relay not initialized');
    }
    
    try {
      await acquireFileLock(`${this.storageDir}-write`);
      const result = await this.relay.deleteEvent(eventId);
      releaseFileLock(`${this.storageDir}-write`);
      return result;
    } catch (error) {
      releaseFileLock(`${this.storageDir}-write`);
      throw error;
    }
  }

  getPublicKey() {
    if (this.relay && this.relay.key) {
      return b4a.toString(this.relay.key, 'hex');
    }
    console.warn('[RelayManager] getPublicKey called but relay key not available');
    return null;
  }

  async flushSubscriptionQueue(subscriptionId) {
    try {
      await acquireFileLock(`${this.storageDir}-flush`);
      const result = await this.relay.flushSubscriptionQueue(subscriptionId);
      releaseFileLock(`${this.storageDir}-flush`);
      return result;
    } catch (error) {
      releaseFileLock(`${this.storageDir}-flush`);
      throw error;
    }
  }

  async close() {
    try {
      // Acquire lock for cleanup
      await acquireFileLock(`${this.storageDir}-close`);
      console.log(`Closing relay for ${this.storageDir}`);
      
      if (this.relay) {
        await this.relay.close();
      }
      if (this.swarm) {
        await this.swarm.destroy();
      }
      
      // Release lock when done
      releaseFileLock(`${this.storageDir}-close`);
      console.log(`Released lock for ${this.storageDir}`);
    } catch (error) {
      releaseFileLock(`${this.storageDir}-close`);
      console.error(`Error closing relay: ${error.message}`);
      throw error;
    }
  }
}

// Generate a random public key (potentially used for testing)
export function generateRandomPubkey() {
  const privateKey = NostrUtils.generatePrivateKey(); // Returns hex string
  const publicKey = NostrUtils.getPublicKey(privateKey); // Returns hex string (x-only)
  return publicKey; // Already the correct format, no need to slice
}
