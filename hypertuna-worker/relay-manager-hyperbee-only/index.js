#!/usr/bin/env node
// ./hypertuna-worker/index.js
//
// Enhanced Pear worker with Hyperswarm support instead of hypertele
/** @typedef {import('pear-interface')} */ 

/* global Pear */
import process from 'bare-process'
import { promises as fs } from 'bare-fs'
import { join } from 'bare-path'
import crypto from 'bare-crypto'
import {
  getAllRelayProfiles,
  getRelayProfileByKey,
  saveRelayProfile,
  removeRelayAuth, // <-- NEW IMPORT
  updateRelayMembers, // This is likely not used directly anymore for member_adds/removes
  updateRelayAuthToken, // <-- NEW IMPORT
  updateRelayMemberSets,
  calculateMembers,
  calculateAuthorizedUsers
} from '../hypertuna-relay-profile-manager-bare.mjs'
import { loadRelayKeyMappings } from '../hypertuna-relay-manager-adapter.mjs'
import {
  queuePendingAuthUpdate,
  applyPendingAuthUpdates
} from './pending-auth.mjs';

// In Pear, use the config.dir for the application directory
const __dirname = Pear.config.dir || '.'

// Variable to store the relay server module
let relayServer = null
let isShuttingDown = false
// Map of relayKey -> members array
const relayMembers = new Map()
const relayMemberAdds = new Map()
const relayMemberRemoves = new Map()
let config = null

// Store configuration received from the parent process
let configReceived = false
let storedParentConfig = null


function getUserKey(config) {
    // If storage path contains /users/, extract the key
    if (config.storage && config.storage.includes('/users/')) {
      const match = config.storage.match(/\/users\/([a-f0-9]{64})/);
      if (match) {
        return match[1];
      }
    }
    
    // Otherwise, generate from nostr_nsec_hex
    if (config.nostr_nsec_hex) {
      return crypto.createHash('sha256')
        .update(config.nostr_nsec_hex)
        .digest('hex');
    }
    
    throw new Error('Unable to determine user key from config');
  }
  
// Load or create configuration
async function loadOrCreateConfig() {
  const configDir = Pear.config.storage || __dirname
  await fs.mkdir(configDir, { recursive: true })

  const configPath = join(configDir, 'relay-config.json')

  const defaultConfig = {
    port: 1945,
    gatewayUrl: 'https://hypertuna.com',
    proxy_server_address: 'hypertuna.com',
    registerWithGateway: true,
    registerInterval: 300000,
    relays: []
  }

  try {
    const configData = await fs.readFile(configPath, 'utf8')
    console.log('[Worker] Loaded existing config from:', configPath)
    return JSON.parse(configData)
  } catch (err) {
    console.log('[Worker] Creating new config at:', configPath)
    defaultConfig.storage = configDir
    await fs.writeFile(configPath, JSON.stringify(defaultConfig, null, 2))
    return defaultConfig
  }
}

// Load member lists from saved relay profiles
async function loadRelayMembers() {
  try {
    const profiles = await getAllRelayProfiles(global.userConfig?.userKey)
    for (const profile of profiles) {
      if (profile.relay_key) {
        const members = calculateMembers(profile.member_adds || [], profile.member_removes || [])
        relayMembers.set(profile.relay_key, members)
        relayMemberAdds.set(profile.relay_key, profile.member_adds || [])
        relayMemberRemoves.set(profile.relay_key, profile.member_removes || [])
        if (profile.public_identifier) {
          relayMembers.set(profile.public_identifier, members)
          relayMemberAdds.set(profile.public_identifier, profile.member_adds || [])
          relayMemberRemoves.set(profile.public_identifier, profile.member_removes || [])
        }
      }
    }
    console.log(`[Worker] Loaded members for ${relayMembers.size} relays`)
  } catch (err) {
    console.error('[Worker] Failed to load relay members:', err)
  }
}

// Handle worker communication
const workerPipe = Pear.worker.pipe()
console.log('[Worker] Pipe object:', workerPipe ? 'exists' : 'null')

// Helper function to send messages with newline delimiter
const sendMessage = (message) => {
  if (workerPipe && !isShuttingDown) {
    const messageStr = JSON.stringify(message) + '\n'
    console.log('[Worker] Sending message:', messageStr.trim())
    try {
      workerPipe.write(messageStr)
    } catch (err) {
      console.error('[Worker] Error writing to pipe:', err)
    }
  } else {
    console.log('[Worker] Cannot send message - pipe:', workerPipe ? 'exists' : 'null', 'shuttingDown:', isShuttingDown)
  }
}

function addMembersToRelays(relays) {
  return relays.map(r => ({
    ...r,
    members: relayMembers.get(r.relayKey) || []
  }))
}

async function addAuthInfoToRelays(relays) {
  try {
    const profiles = await getAllRelayProfiles(global.userConfig?.userKey)
    return relays.map(r => {
      const profile = profiles.find(p => p.relay_key === r.relayKey) || {}

      let token = null
      if (profile.auth_config?.requiresAuth && config.nostr_pubkey_hex) {
        // Calculate authorized users from auth_adds and auth_removes
        // const { calculateAuthorizedUsers } = require('../hypertuna-relay-profile-manager-bare.mjs')
        const authorizedUsers = calculateAuthorizedUsers(
          profile.auth_config.auth_adds || [],
          profile.auth_config.auth_removes || []
        )
        
        const userAuth = authorizedUsers.find(
          u => u.pubkey === config.nostr_pubkey_hex
        )
        token = userAuth?.token || null
        
        if (!token && profile.auth_tokens && profile.auth_tokens[config.nostr_pubkey_hex]) {
          // Fallback to legacy auth_tokens if present
          token = profile.auth_tokens[config.nostr_pubkey_hex]
        }
        
        if (token) {
          console.log(`[Worker] Found auth token for user on relay ${r.relayKey}`)
        } else {
          console.log(`[Worker] No auth token found for user on relay ${r.relayKey}`)
        }
      }

      const identifierPath = profile.public_identifier
        ? profile.public_identifier.replace(':', '/')
        : r.relayKey

      const baseUrl = `wss://${config.proxy_server_address}/${identifierPath}`
      const connectionUrl = token ? `${baseUrl}?token=${token}` : baseUrl

      return {
        ...r,
        publicIdentifier: profile.public_identifier || null,
        connectionUrl,
        userAuthToken: token,
        requiresAuth: profile.auth_config?.requiresAuth || false
      }
    })
  } catch (err) {
    console.error('[Worker] Failed to add auth info to relays:', err)
    return relays
  }
}

// Make pipe and sendMessage globally available for the relay server
global.workerPipe = workerPipe
global.sendMessage = sendMessage

if (workerPipe) {
  console.log('[Worker] Connected to parent via pipe')
  
  // Test the pipe immediately
  sendMessage({ 
    type: 'status', 
    message: 'Relay worker starting...' 
  })
  
  // Configuration may have been sent before initialization
  
  // Handle messages from parent
  let buffer = ''
  workerPipe.on('data', async (data) => {
    buffer += data.toString()
    const lines = buffer.split('\n')
    buffer = lines.pop() // Keep the incomplete line in buffer
    
    for (const line of lines) {
      if (line.trim()) {
        try {
          const message = JSON.parse(line)
          console.log('[Worker] Received from parent:', message)
          
          // Handle config message specially
          if (message.type === 'config' && !configReceived) {
            configReceived = true;
            storedParentConfig = message.data;
            console.log('[Worker] Stored parent config:', storedParentConfig);
            continue; // Don't process other messages yet
          }
          
          switch (message.type) {
            case 'shutdown':
              console.log('[Worker] Shutdown requested')
              isShuttingDown = true
              sendMessage({
                type: 'status',
                message: 'Shutting down...'
              })
              await cleanup()
              process.exit(0)
              break
              
            case 'config':
              console.log('[Worker] Received configuration:', message.data)
              // Handle configuration updates if needed
              break
              
            case 'create-relay':
              console.log('[Worker] Create relay requested:', message.data)
              if (relayServer) {
                try {
                  // Call the relay server's create relay function
                  const { fileSharing = false, ...options } = message.data || {};
                  const result = await relayServer.createRelay({ ...options, fileSharing });
                  relayMembers.set(result.relayKey, result.profile?.members || [])
                  await applyPendingAuthUpdates(updateRelayAuthToken, result.relayKey, result.profile?.public_identifier);

                  sendMessage({
                    type: 'relay-created',
                    data: {
                      ...result,
                      members: relayMembers.get(result.relayKey) || []
                    }
                  })

                  // Send updated relay list
                  const relays = await relayServer.getActiveRelays()
                  const relaysAuth = await addAuthInfoToRelays(relays)
                  sendMessage({
                    type: 'relay-update',
                    relays: addMembersToRelays(relaysAuth)
                  })
                } catch (err) {
                  sendMessage({
                    type: 'error',
                    message: `Failed to create relay: ${err.message}`
                  })
                }
              } else {
                sendMessage({
                  type: 'error',
                  message: 'Relay server not initialized'
                })
              }
              break
              
            case 'join-relay':
              console.log('[Worker] Join relay requested:', message.data)
              if (relayServer) {
                try {
                  // Call the relay server's join relay function
                  const { fileSharing: joinFileSharing = false, ...joinOpts } = message.data || {};
                  const result = await relayServer.joinRelay({ ...joinOpts, fileSharing: joinFileSharing })
                  relayMembers.set(result.relayKey, result.profile?.members || [])
                  await applyPendingAuthUpdates(updateRelayAuthToken, result.relayKey, result.profile?.public_identifier);

                  sendMessage({
                    type: 'relay-joined',
                    data: {
                      ...result,
                      members: relayMembers.get(result.relayKey) || []
                    }
                  })

                  // Send updated relay list
                  const relays = await relayServer.getActiveRelays()
                  const relaysAuth = await addAuthInfoToRelays(relays)
                  sendMessage({
                    type: 'relay-update',
                    relays: addMembersToRelays(relaysAuth)
                  })
                } catch (err) {
                  sendMessage({
                    type: 'error',
                    message: `Failed to join relay: ${err.message}`
                  })
                }
              }
              break
              
            case 'disconnect-relay':
              console.log('[Worker] Disconnect relay requested:', message.data)
              if (relayServer) {
                try {
                  // Call the relay server's disconnect relay function
                  const result = await relayServer.disconnectRelay(message.data.relayKey)
                  
                  sendMessage({
                    type: 'relay-disconnected',
                    data: result
                  })
                  
                  // Send updated relay list
                  const relays = await relayServer.getActiveRelays()
                  const relaysAuth = await addAuthInfoToRelays(relays)
                  sendMessage({
                    type: 'relay-update',
                    relays: addMembersToRelays(relaysAuth)
                  })
                } catch (err) {
                  sendMessage({
                    type: 'error',
                    message: `Failed to disconnect relay: ${err.message}`
                  })
                }
              }
              break

            case 'start-join-flow':
              console.log('[Worker] Start join flow requested:', message.data);
              if (relayServer) {
                try {
                  // The startJoinAuthentication function will handle sending progress messages back
                  await relayServer.startJoinAuthentication(message.data);
                } catch (err) {
                  // Send an error message back to the desktop app
                  sendMessage({
                    type: 'join-auth-error',
                    data: {
                      publicIdentifier: message.data.publicIdentifier,
                      error: `Failed to start join flow: ${err.message}`
                    }
                  });
                }
              } else {
                sendMessage({
                  type: 'join-auth-error',
                  data: { publicIdentifier: message.data.publicIdentifier, error: 'Relay server not initialized' }
                });
              }
              break;

            case 'update-members':
              if (relayServer) {
                try {
                  const { relayKey, publicIdentifier, members, member_adds, member_removes } = message.data
                  const id = relayKey || publicIdentifier
                  let profile
                  if (member_adds || member_removes) {
                    profile = await updateRelayMemberSets(id, member_adds || [], member_removes || [])
                  } else {
                    profile = await updateRelayMembers(id, members)
                  }
                  if (profile) {
                    const finalMembers = profile.members || members
                    relayMembers.set(profile.relay_key, finalMembers)
                    relayMemberAdds.set(profile.relay_key, profile.member_adds || [])
                    relayMemberRemoves.set(profile.relay_key, profile.member_removes || [])
                    if (profile.public_identifier) {
                      relayMembers.set(profile.public_identifier, finalMembers)
                      relayMemberAdds.set(profile.public_identifier, profile.member_adds || [])
                      relayMemberRemoves.set(profile.public_identifier, profile.member_removes || [])
                    }
                    sendMessage({ type: 'members-updated', relayKey: profile.relay_key })
                  } else {
                    sendMessage({ type: 'error', message: 'Relay profile not found' })
                  }
                } catch (err) {
                  sendMessage({ type: 'error', message: `Failed to update members: ${err.message}` })
                }
              }
              break

            case 'update-auth-data':
              console.log('[Worker] Update auth data requested:', message.data);
              if (relayServer) {
                try {
                  const { relayKey, publicIdentifier, pubkey, token, subnetHashes } = message.data;
                  const identifier = relayKey || publicIdentifier;
                  if (!identifier) {
                    throw new Error('No identifier provided for auth data update');
                  }
                  const hashes = Array.isArray(subnetHashes) ? subnetHashes : (subnetHashes ? [subnetHashes] : []);
                  const updated = await updateRelayAuthToken(identifier, pubkey, token, hashes);
                  if (!updated) {
                    queuePendingAuthUpdate(identifier, pubkey, token, hashes);
                    console.log(`[Worker] Queued pending auth update for ${identifier}`);
                  }
                  sendMessage({
                    type: 'auth-data-updated',
                    identifier: identifier,
                    pubkey: pubkey
                  });
                } catch (err) {
                  sendMessage({
                    type: 'error',
                    message: `Failed to update auth data: ${err.message}`
                  });
                }
              }
              break;
              
            case 'get-relays':
              console.log('[Worker] Get relays requested')
              if (relayServer) {
                try {
                  // Get the active relays
                  const relays = await relayServer.getActiveRelays()
                  const relaysAuth = await addAuthInfoToRelays(relays)
                  sendMessage({
                    type: 'relay-update',
                    relays: addMembersToRelays(relaysAuth)
                  })
                } catch (err) {
                  sendMessage({
                    type: 'error',
                    message: `Failed to get relays: ${err.message}`
                  })
                }
              }
              break

            case 'remove-auth-data':
              console.log('[Worker] Remove auth data requested:', message.data);
              if (relayServer) {
                try {
                  const { relayKey, publicIdentifier, pubkey } = message.data;
                  const identifier = relayKey || publicIdentifier;
                  if (!identifier) {
                    throw new Error('No identifier provided for auth data removal');
                  }
                  // Call the new function to remove auth
                  await removeRelayAuth(identifier, pubkey);
                  // Also remove from in-memory auth store if it's there
                  const authStore = getRelayAuthStore();
                  authStore.removeAuth(identifier, pubkey);

                  sendMessage({
                    type: 'auth-data-removed',
                    identifier: identifier,
                    pubkey: pubkey
                  });
                } catch (err) {
                  sendMessage({
                    type: 'error',
                    message: `Failed to remove auth data: ${err.message}`
                  });
                }
              }
              break;
              
            case 'get-health':
              console.log('[Worker] Get health requested')
              // The relay server will send health updates automatically
              break
              
            default:
              console.log('[Worker] Unknown message type:', message.type)
          }
        } catch (err) {
          console.error('[Worker] Error parsing message:', err)
        }
      }
    }
  })
  
  // Handle pipe close
  workerPipe.on('close', () => {
    console.log('[Worker] Pipe closed by parent')
    isShuttingDown = true
    cleanup().then(() => process.exit(0))
  })
  
  // Handle pipe error
  workerPipe.on('error', (err) => {
    console.error('[Worker] Pipe error:', err)
    isShuttingDown = true
  })
}

// Setup teardown handler
Pear.teardown(async () => {
  console.log('[Worker] Teardown initiated')
  isShuttingDown = true
  await cleanup()
})

// Cleanup function
async function cleanup() {
  if (workerPipe && !isShuttingDown) {
    sendMessage({ 
      type: 'status', 
      message: 'Worker shutting down...' 
    })
  }
  
  if (relayServer && relayServer.shutdownRelayServer) {
    console.log('[Worker] Stopping relay server...')
    await relayServer.shutdownRelayServer()
  }
  
  if (workerPipe) {
    workerPipe.end()
  }
}

// Main function to start the relay server
async function main() {
    try {
      console.log('[Worker] Hypertuna Relay Worker starting...')
      
      // Load or create configuration
      config = await loadOrCreateConfig()
      
      // Wait for config from parent if available
      let parentConfig = storedParentConfig
      if (!parentConfig && workerPipe) {
        console.log('[Worker] Waiting for parent config...');

        parentConfig = await new Promise((resolve) => {
            const timeout = setTimeout(() => {
            console.log('[Worker] Config timeout - using default config');
            resolve(null);
            }, 3000);
            
            // Temporary listener for config
            const handleData = (data) => {
            try {
                const lines = data.toString().split('\n');
                for (const line of lines) {
                if (line.trim()) {
                    const message = JSON.parse(line);
                    if (message.type === 'config' && message.data) {
                        console.log('[Worker] Received config from parent');
                        clearTimeout(timeout);
                        workerPipe.off('data', handleData); // Remove this listener
                        resolve(message.data);
                        return;
                    }
                }
            }
          } catch (err) {
            console.error('[Worker] Error parsing config message:', err);
          }
        };
        
        workerPipe.on('data', handleData);
      });
      } else if (parentConfig) {
        console.log('[Worker] Using previously received parent config');
      }

      if (parentConfig) {
        storedParentConfig = parentConfig;
        configReceived = true;
        // Get user key from parent config
        const userKey = getUserKey(parentConfig);
        console.log('[Worker] User key:', userKey);
        
        // Create user-specific storage path in worker's directory
        const workerBaseStorage = Pear.config.storage || './data';
        const userSpecificStorage = join(workerBaseStorage, 'users', userKey);
        
        // Ensure user directory exists
        await fs.mkdir(userSpecificStorage, { recursive: true });
        
        // Merge parent config with loaded config
        config = {
          ...config,
          ...parentConfig,
          storage: userSpecificStorage,  // Use user-specific path in worker's storage
          userKey: userKey  // Store for reference
        };
        
        console.log('[Worker] Merged config with user-specific storage:', {
          ...config,
          storage: config.storage,
          userKey: config.userKey
        });

        // Set global user config for profile manager
        global.userConfig = {
            userKey: config.userKey,
            storage: config.storage
        };

        console.log('[Worker] Set global user config for profile operations');

        await loadRelayMembers();
        await loadRelayKeyMappings();
      }
    
    if (workerPipe) {
      sendMessage({ 
        type: 'status', 
        message: 'Loading relay server...',
        config: {
          port: config.port,
          proxy_server_address: config.proxy_server_address,
          gatewayUrl: config.gatewayUrl,
          registerWithGateway: config.registerWithGateway
        }
      })
    }
    
    // Import and initialize the Hyperswarm-based relay server
    try {
      console.log('[Worker] Importing Hyperswarm relay server module...')
      relayServer = await import('../pear-relay-server.mjs')
      
      console.log('[Worker] Initializing relay server...')
      await relayServer.initializeRelayServer(config)
      
      console.log('[Worker] Relay server started successfully with Hyperswarm')
      
      // Send initialization complete message with a small delay to ensure parent is ready
      setTimeout(() => {
        if (workerPipe) {
          sendMessage({ 
            type: 'status', 
            message: `Relay server running with Hyperswarm`,
            initialized: true,
            config: {
              port: config.port,
              proxy_server_address: config.proxy_server_address,
              gatewayUrl: config.gatewayUrl,
              registerWithGateway: config.registerWithGateway,
              relayCount: config.relays.length,
              mode: 'hyperswarm'
            }
          })
          
          // Also log that we're sending the message
          console.log('[Worker] Sent status message with initialized=true')
        }
      }, 500)
      
    } catch (error) {
      console.error('[Worker] Failed to start relay server:', error)
      console.log('[Worker] Make sure pear-relay-server.mjs is in the worker directory')
      
      if (workerPipe) {
        sendMessage({ 
          type: 'error', 
          message: `Failed to start relay server: ${error.message}` 
        })
      }
    }
    
    // Keep the process alive with heartbeat
    const heartbeatInterval = setInterval(() => {
      if (isShuttingDown) {
        clearInterval(heartbeatInterval)
        return
      }
      
      if (workerPipe) {
        sendMessage({ 
          type: 'heartbeat', 
          timestamp: Date.now(),
          status: 'running',
          mode: 'hyperswarm'
        })
      }
    }, 5000)
    
  } catch (error) {
    console.error('[Worker] Error starting relay server:', error)
    if (workerPipe) {
      sendMessage({ 
        type: 'error', 
        message: error.message 
      })
    }
    process.exit(1)
  }
}

// Start the worker
main().catch(console.error)
