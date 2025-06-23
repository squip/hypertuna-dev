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
  updateRelayMembers
} from './hypertuna-relay-profile-manager-bare.mjs'

// In Pear, use the config.dir for the application directory
const __dirname = Pear.config.dir || '.'

// Variable to store the relay server module
let relayServer = null
let isShuttingDown = false
// Map of relayKey -> members array
const relayMembers = new Map()


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

// Generate a default configuration that matches the expected format
// function generateDefaultConfig() {
//   return {
//     "nostr_pubkey_hex": "f9c91021ab6074cf4f95f479e364c1c7091dbdf63eb4de70bade343cc16e0455",
//     "nostr_nsec_hex": "531b76e21f83cf4e795664afbf355e9da6e844179b888e3b9db787af602c6682",
//     "proxy_privateKey": "d79f4d7cdd1174009b5a07bacc71eaf78624451d51da1f96b48f9a942360a19e",
//     "proxy_publicKey": "186385f20cd512a177e71f18616b8633f5ed4cc55ad34b285db4365ecdbfb2b8",
//     "proxy_seed": "d79f4d7cdd1174009b5a07bacc71eaf78624451d51da1f96b48f9a942360a19e",
//     "proxy_server_address": "hypertuna.com",
//     "gatewayUrl": "https://hypertuna.com",
//     "port": 1945,
//     "relays": [],
//     "registerWithGateway": true,
//     "registerInterval": 300000
//   }
// }

// Load or create configuration
async function loadOrCreateConfig() {
  const configDir = Pear.config.storage || __dirname
  await fs.mkdir(configDir, { recursive: true })
  
  const configPath = join(configDir, 'relay-config.json')
  
  try {
    // Try to load existing config
    const configData = await fs.readFile(configPath, 'utf8')
    console.log('[Worker] Loaded existing config from:', configPath)
    return JSON.parse(configData)
  } catch (err) {
    // Create new config
    console.log('[Worker] Creating new config at:', configPath)
    // const config = generateDefaultConfig()
    // Add storage path from Pear
    // config.storage = configDir
    // await fs.writeFile(configPath, JSON.stringify(config, null, 2))
    // return config
  }
}

// Load member lists from saved relay profiles
async function loadRelayMembers() {
  try {
    const profiles = await getAllRelayProfiles(global.userConfig?.userKey)
    for (const profile of profiles) {
      if (profile.relay_key && Array.isArray(profile.members)) {
        relayMembers.set(profile.relay_key, profile.members)
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
  
  // Set up a flag to track config receipt
  let configReceived = false;
  let parentConfig = null;
  
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
            parentConfig = message.data;
            console.log('[Worker] Stored parent config:', parentConfig);
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
                  const result = await relayServer.createRelay(message.data)

                  sendMessage({
                    type: 'relay-created',
                    data: {
                      ...result,
                      members: relayMembers.get(result.relayKey) || []
                    }
                  })

                  // Send updated relay list
                  const relays = await relayServer.getActiveRelays()
                  sendMessage({
                    type: 'relay-update',
                    relays: addMembersToRelays(relays)
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
                  const result = await relayServer.joinRelay(message.data)

                  sendMessage({
                    type: 'relay-joined',
                    data: {
                      ...result,
                      members: relayMembers.get(result.relayKey) || []
                    }
                  })

                  // Send updated relay list
                  const relays = await relayServer.getActiveRelays()
                  sendMessage({
                    type: 'relay-update',
                    relays: addMembersToRelays(relays)
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
                  sendMessage({
                    type: 'relay-update',
                    relays: addMembersToRelays(relays)
                  })
                } catch (err) {
                  sendMessage({
                    type: 'error',
                    message: `Failed to disconnect relay: ${err.message}`
                  })
                }
              }
              break

            case 'update-members':
              if (relayServer) {
                try {
                  const { relayKey, members } = message.data
                  await updateRelayMembers(relayKey, members)
                  sendMessage({ type: 'members-updated', relayKey })
                } catch (err) {
                  sendMessage({ type: 'error', message: `Failed to update members: ${err.message}` })
                }
              }
              break
              
            case 'get-relays':
              console.log('[Worker] Get relays requested')
              if (relayServer) {
                try {
                  // Get the active relays
                  const relays = await relayServer.getActiveRelays()
                  sendMessage({
                    type: 'relay-update',
                    relays: addMembersToRelays(relays)
                  })
                } catch (err) {
                  sendMessage({
                    type: 'error',
                    message: `Failed to get relays: ${err.message}`
                  })
                }
              }
              break
              
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
      let config = await loadOrCreateConfig()
      
      // Wait for config from parent if available
      if (workerPipe) {
        console.log('[Worker] Waiting for parent config...');
        
        const parentConfig = await new Promise((resolve) => {
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
      
      if (parentConfig) {
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
      }
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
      relayServer = await import('./pear-relay-server.mjs')
      
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
