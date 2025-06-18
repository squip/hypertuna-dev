// ./hypertuna-desktop/app.js
//
// For interactive documentation and code auto-completion in editor
/** @typedef {import('pear-interface')} */ 

/* global Pear */
import { promises as fs } from 'fs'
import { join } from 'path'
import { ConfigLogger } from './ConfigLogger.js';

console.log('[App] app.js loading started at:', new Date().toISOString());

// Application state
let workerPipe = null
let workerStatus = 'stopped'
let logs = []
let relays = []
let pollingInterval = null
let healthState = null
let gatewayRegistered = false
let relayCreateResolvers = []
let relayReadyResolvers = new Map() // Add this to track relay readiness promises
let initializedRelays = new Set() // Track which relays are ready

// Promise resolution for swarm key
let swarmKeyPromise = null
let swarmKeyResolver = null

// Track initialization state
let isInitialized = false
let eventListenersAttached = false

// DOM elements - Initialize after DOM is ready
let workerStatusIndicator = null
let workerStatusText = null
let startButton = null
let stopButton = null
let createRelayButton = null
let logsContainer = null
let relayList = null
let clearLogsButton = null
let exportLogsButton = null
let joinRelayButton = null

// Log functions
function addLog(message, type = 'info') {
  const timestamp = new Date().toLocaleTimeString()
  const logEntry = {
    timestamp,
    message,
    type
  }
  logs.push(logEntry)
  
  // Keep only last 1000 logs
  if (logs.length > 1000) {
    logs = logs.slice(-1000)
  }
  
  // Update UI if container exists
  if (logsContainer) {
    const logElement = document.createElement('div')
    logElement.className = `log-entry ${type}`
    logElement.textContent = `[${timestamp}] ${message}`
    logsContainer.appendChild(logElement)
    
    // Auto-scroll to bottom
    logsContainer.scrollTop = logsContainer.scrollHeight
  }
  
  // Also log to console for debugging
  console.log(`[Log ${type}] ${message}`)
}

// Update worker status UI
function updateWorkerStatus(status, text) {
  console.log(`[App] Updating worker status to: ${status} - ${text}`)
  workerStatus = status
  
  if (workerStatusText) {
    workerStatusText.textContent = text
  }
  
  // Update indicator
  if (workerStatusIndicator) {
    workerStatusIndicator.classList.remove('active', 'inactive', 'pending')
    
    switch (status) {
      case 'running':
        workerStatusIndicator.classList.add('active')
        if (startButton) startButton.disabled = true
        if (stopButton) stopButton.disabled = false
        if (createRelayButton) createRelayButton.disabled = false
        if (joinRelayButton) joinRelayButton.disabled = false
        break
      case 'stopped':
        workerStatusIndicator.classList.add('inactive')
        if (startButton) startButton.disabled = false
        if (stopButton) stopButton.disabled = false
        if (createRelayButton) createRelayButton.disabled = true
        if (joinRelayButton) joinRelayButton.disabled = true
        break
      case 'starting':
      case 'stopping':
        workerStatusIndicator.classList.add('pending')
        if (startButton) startButton.disabled = true
        if (stopButton) stopButton.disabled = true
        if (createRelayButton) createRelayButton.disabled = true
        if (joinRelayButton) joinRelayButton.disabled = true
        break
    }
  }
}

// Start the worker
async function startWorker() {
    console.log('[App] startWorker() called at:', new Date().toISOString());
    // Prepare promise that resolves when swarm key is received
    swarmKeyPromise = new Promise((resolve) => {
    swarmKeyResolver = resolve;
    });
    // Prevent multiple simultaneous starts
    if (workerStatus !== 'stopped') {
        console.log('[App] Worker already starting/running, ignoring duplicate call');
        if (swarmKeyResolver) swarmKeyResolver(null);
        return swarmKeyPromise;
    }
    
    try {
        addLog('Starting relay worker...', 'status')
        updateWorkerStatus('starting', 'Starting...')
        
        // Get the worker link from config
        const workerLink = Pear.config.links?.relayWorker
        
        if (!workerLink || workerLink === 'pear://dev') {
            addLog('ERROR: Worker link not configured', 'error')
            addLog('1. Stage the worker: cd ../relay-worker && pear stage dev', 'error')
            addLog('2. Update this app\'s package.json with the worker\'s pear:// link', 'error')
            addLog('3. Restart this desktop app', 'error')
            updateWorkerStatus('stopped', 'Setup Required')
            return
        }
        
        addLog(`Using worker link: ${workerLink}`, 'info')
        
        // Start the worker process
        workerPipe = Pear.worker.run(workerLink, [])
        
        // IMPORTANT: Get the current user's config from localStorage instead of file
        let configToUse = {}

        // First, check localStorage for the current user's Hypertuna config
        const hypertunaConfigStr = localStorage.getItem('hypertuna_config');
        if (hypertunaConfigStr) {
            try {
                configToUse = JSON.parse(hypertunaConfigStr);
                
                ConfigLogger.log('LOAD', {
                    module: 'app.js',
                    method: 'startWorker',
                    filepath: 'localStorage',
                    key: 'hypertuna_config',
                    success: true,
                    dataSize: hypertunaConfigStr.length
                });
                
                console.log('[App] Using Hypertuna config from localStorage for current user');
            } catch (e) {
                console.error('[App] Failed to parse localStorage hypertuna_config:', e);
            }
        }
        
        // If no localStorage config, try file system (but verify it matches current user)
        if (!configToUse.nostr_pubkey_hex) {
          try {
              const configPath = join(Pear.config.storage || '.', 'relay-config.json')
              
              ConfigLogger.log('LOAD', {
                  module: 'app.js',
                  method: 'startWorker',
                  filepath: configPath,
                  attempting: true
              });
              
              const file = await fs.readFile(configPath, 'utf8')
              const fileConfig = JSON.parse(file)
              
              ConfigLogger.log('LOAD', {
                  module: 'app.js',
                  method: 'startWorker',
                  filepath: configPath,
                  success: true,
                  dataSize: file.length
              });
              
              // CRITICAL: Verify the file config matches current user
              const currentUserStr = localStorage.getItem('nostr_user');
              if (currentUserStr) {
                  const currentUser = JSON.parse(currentUserStr);
                  
                  if (fileConfig.nostr_pubkey_hex === currentUser.pubkey) {
                      console.log('[App] File config matches current user, using it');
                      configToUse = fileConfig;
                  } else {
                      console.warn('[App] File config is for different user!');
                      console.warn(`  File user: ${fileConfig.nostr_pubkey_hex?.substring(0, 8)}...`);
                      console.warn(`  Current user: ${currentUser.pubkey?.substring(0, 8)}...`);
                      
                      // Use the current user's config from localStorage instead
                      if (currentUser.hypertunaConfig) {
                          configToUse = currentUser.hypertunaConfig;
                          console.log('[App] Using current user\'s Hypertuna config from memory');
                          
                          // Save the correct config to file for next time
                          try {
                              await fs.writeFile(configPath, JSON.stringify(configToUse, null, 2));
                              console.log('[App] Updated relay-config.json with current user\'s config');
                              
                              ConfigLogger.log('SAVE', {
                                  module: 'app.js',
                                  method: 'startWorker',
                                  filepath: configPath,
                                  success: true,
                                  dataSize: JSON.stringify(configToUse).length
                              });
                          } catch (saveErr) {
                              console.error('[App] Failed to save updated config:', saveErr);
                          }
                      }
                  }
              } else {
                  // No current user in localStorage, use file config
                  configToUse = fileConfig;
              }
          } catch (e) {
              ConfigLogger.log('LOAD', {
                  module: 'app.js',
                  method: 'startWorker',
                  filepath: join(Pear.config.storage || '.', 'relay-config.json'),
                  success: false,
                  error: e.message
              });
              console.error('[App] Failed to load stored config:', e)
          }
        }

        // IMPORTANT: Ensure bech32 values are present before sending to worker
        // Import HypertunaUtils at the top of app.js if not already imported
        if (configToUse.nostr_pubkey_hex || configToUse.nostr_nsec_hex) {
          // Add bech32 values if missing
          if (!configToUse.nostr_npub && configToUse.nostr_pubkey_hex) {
              try {
                  // Use dynamic import to avoid circular dependencies
                  const { NostrUtils } = await import('./NostrUtils.js');
                  configToUse.nostr_npub = NostrUtils.hexToNpub(configToUse.nostr_pubkey_hex);
                  console.log('[App] Generated npub for worker config');
              } catch (e) {
                  console.error('[App] Failed to generate npub:', e);
              }
          }
          
          if (!configToUse.nostr_nsec && configToUse.nostr_nsec_hex) {
              try {
                  const { NostrUtils } = await import('./NostrUtils.js');
                  configToUse.nostr_nsec = NostrUtils.hexToNsec(configToUse.nostr_nsec_hex);
                  console.log('[App] Generated nsec for worker config');
              } catch (e) {
                  console.error('[App] Failed to generate nsec:', e);
              }
          }
        }

        // Merge with apiUrl from package links
        const configMessage = {
            type: 'config',
            data: {
                ...configToUse,
                apiUrl: Pear.config.links?.api || 'http://localhost:1945'
            }
        }
        
        console.log('[App] Config to send to worker:', {
          pubkey: configMessage.data.nostr_pubkey_hex?.substring(0, 8) + '...',
          npub: configMessage.data.nostr_npub?.substring(0, 8) + '...',
          proxy_pubkey: configMessage.data.proxy_publicKey?.substring(0, 8) + '...',
          hasStorage: !!configMessage.data.storage,
          hasBech32: !!(configMessage.data.nostr_npub && configMessage.data.nostr_nsec)
      });
        
        // Send config right away
        setTimeout(() => {
            if (workerPipe) {
                console.log('[App] Sending config to worker:', configMessage);
                workerPipe.write(JSON.stringify(configMessage) + '\n');
            }
        }, 100); // Small delay to ensure pipe is ready
        
        // Handle worker messages
        let buffer = ''
        workerPipe.on('data', (data) => {
            // Convert buffer/Uint8Array to string
            let dataStr = ''
            if (data instanceof Uint8Array || data instanceof Buffer) {
                // Convert byte array to string
                dataStr = new TextDecoder().decode(data)
            } else {
                dataStr = data.toString()
            }
            
            console.log('[App] Raw data from worker (decoded):', dataStr)
            buffer += dataStr
            const lines = buffer.split('\n')
            buffer = lines.pop() // Keep the incomplete line in buffer
            
            for (const line of lines) {
                if (line.trim()) {
                    try {
                        console.log('[App] Parsing line:', line)
                        const message = JSON.parse(line)
                        handleWorkerMessage(message)
                    } catch (err) {
                        addLog(`Error parsing worker message: ${err.message}`, 'error')
                        addLog(`Invalid message: ${line}`, 'error')
                    }
                }
            }
        })
        
        // Handle worker errors
        workerPipe.on('error', (err) => {
            addLog(`Worker error: ${err.message}`, 'error')
            updateWorkerStatus('stopped', 'Error')
            stopPolling()
        })
        
        // Handle worker close
        workerPipe.on('close', () => {
            addLog('Worker process closed', 'status')
            updateWorkerStatus('stopped', 'Stopped')
            workerPipe = null
            stopPolling()
        })
        
        // Send initial configuration again after a short delay
        setTimeout(() => {
            if (workerPipe) {
                workerPipe.write(JSON.stringify(configMessage) + '\n')
            }
        }, 1000)
        
        // Start polling for relay updates
        startPolling()
        startHealthPolling()

    } catch (error) {
        addLog(`Failed to start worker: ${error.message}`, 'error')
        updateWorkerStatus('stopped', 'Failed')
        stopPolling()
        if (swarmKeyResolver) swarmKeyResolver(null)
        return swarmKeyPromise
    }
    return swarmKeyPromise
}
    


// Stop the worker
async function stopWorker() {
  console.log('[App] stopWorker() called at:', new Date().toISOString());
  console.log('[App] Current workerPipe status:', workerPipe ? 'exists' : 'null');
  console.log('[App] Current workerStatus:', workerStatus);
  
  try {
    if (!workerPipe) {
      addLog('Worker not running', 'error')
      console.log('[App] stopWorker: Worker not running, returning');
      return
    }
    
    addLog('Stopping relay worker...', 'status')
    updateWorkerStatus('stopping', 'Stopping...')
    
    // Stop polling
    stopPolling()
    
    // Send shutdown message
    console.log('[App] Sending shutdown message to worker');
    workerPipe.write(JSON.stringify({ type: 'shutdown' }) + '\n')
    
    // Give it time to shutdown gracefully, then force close if needed
    setTimeout(() => {
      if (workerPipe) {
        console.log('[App] Force closing worker after timeout');
        addLog('Force closing worker...', 'status')
        workerPipe.end()
        workerPipe = null
        updateWorkerStatus('stopped', 'Stopped')
      }
    }, 3000)
    
  } catch (error) {
    console.error('[App] Error in stopWorker:', error);
    addLog(`Error stopping worker: ${error.message}`, 'error')
    updateWorkerStatus('stopped', 'Error')
  }
}

// Handle messages from worker
function handleWorkerMessage(message) {
  console.log('[App] Received worker message:', message)
  
  switch (message.type) {
    case 'status':
        addLog(`Worker: ${message.message}`, 'status')
            if (message.swarmKey) {
            try {
                const stored = localStorage.getItem('hypertuna_config')
                const cfg = stored ? JSON.parse(stored) : {}
                cfg.swarmPublicKey = message.swarmKey
                localStorage.setItem('hypertuna_config', JSON.stringify(cfg))
                if (window.App && window.App.currentUser && window.App.currentUser.hypertunaConfig) {
                    window.App.currentUser.hypertunaConfig.swarmPublicKey = message.swarmKey
                if (typeof window.App.updateHypertunaDisplay === 'function') {
                    window.App.updateHypertunaDisplay()
                    }
                }
                if (swarmKeyResolver) {
                    swarmKeyResolver(message.swarmKey)
                    swarmKeyResolver = null
                  }
            } catch (e) {
                console.error('[App] Failed to store swarm key', e)
            }
        }
        if (message.initialized) {
                updateWorkerStatus('running', 'Running')
        }
        break
      
    case 'heartbeat':
      // Update last heartbeat time
      updateWorkerStatus('running', `Running (${new Date(message.timestamp).toLocaleTimeString()})`)
      break
      
    case 'error':
      addLog(`Worker error: ${message.message}`, 'error')
      break
      
    case 'relay-update':
      updateRelayList(message.relays)
      break

    case 'relay-initialized':
      // New message type when a relay is fully ready
      if (message.relayKey) {
        console.log(`[App] Relay initialized: ${message.relayKey}`)
        initializedRelays.add(message.relayKey)
        
        // Resolve any waiting promises for this relay
        const resolver = relayReadyResolvers.get(message.relayKey)
        if (resolver) {
          resolver(true)
          relayReadyResolvers.delete(message.relayKey)
        }
        
        // Notify the UI that this relay is ready
        if (window.App && window.App.nostr) {
          const identifier = message.publicIdentifier || message.relayKey
          window.App.nostr.handleRelayReady(identifier, message.gatewayUrl)
        }
      }
      break
      
    case 'relay-registration-complete':
      // When a relay has been registered with gateway
      if (message.relayKey) {
        console.log(`[App] Relay registered with gateway: ${message.relayKey}`)
        addLog(`Relay ${message.relayKey} registered with gateway`, 'status')
      }
      break
      
    case 'all-relays-initialized':
      // When all stored relays have been initialized
      console.log('[App] All stored relays initialized')
      if (window.App && window.App.nostr) {
        window.App.nostr.handleAllRelaysReady()
      }
      break
    
    case 'relay-initialized':
      // New message type when a relay is fully ready
      if (message.relayKey) {
        console.log(`[App] Relay initialized: ${message.relayKey}`)
        initializedRelays.add(message.relayKey)
          
        // Resolve any waiting promises for this relay
        const resolver = relayReadyResolvers.get(message.relayKey)
        if (resolver) {
          resolver(true)
          relayReadyResolvers.delete(message.relayKey)
        }
          
        // Notify the UI that this relay is ready
        if (window.App && window.App.nostr) {
          const identifier = message.publicIdentifier || message.relayKey
          window.App.nostr.handleRelayReady(identifier, message.gatewayUrl)
        }
      }
      break
        
      case 'relay-registration-complete':
        // When a relay has been registered with gateway
        if (message.relayKey) {
          console.log(`[App] Relay registered with gateway: ${message.relayKey}`)
          addLog(`Relay ${message.relayKey} registered with gateway`, 'status')
        }
        break
        
      case 'all-relays-initialized':
        // When all stored relays have been initialized
        console.log('[App] All stored relays initialized')
        if (window.App && window.App.nostr) {
          window.App.nostr.handleAllRelaysReady()
        }
        break
      
    case 'relay-created':
      const resolver = relayCreateResolvers.shift()
      if (resolver) resolver(message)
      if (message.data.success) {
        addLog(`Relay created successfully: ${message.data.relayKey}`, 'status')
      } else {
        addLog(`Failed to create relay: ${message.data.error}`, 'error')
      }
      break
      
    case 'relay-joined':
      if (message.data.success) {
        addLog(`Joined relay successfully: ${message.data.relayKey}`, 'status')
      } else {
        addLog(`Failed to join relay: ${message.data.error}`, 'error')
      }
      break
      
    case 'relay-disconnected':
      if (message.data.success) {
        addLog(`Disconnected from relay successfully`, 'status')
      } else {
        addLog(`Failed to disconnect: ${message.data.error}`, 'error')
      }
      break

    case 'health-update':
      updateHealthStatus(message.healthState)
      break
      
    case 'gateway-registered':
      gatewayRegistered = true
      addLog('Successfully registered with gateway', 'status')
      updateHealthStatus(healthState) // Update display
      break

      
    default:
      addLog(`Unknown worker message: ${JSON.stringify(message)}`, 'info')
  }
}

// Add function to wait for a specific relay to be ready
window.waitForRelayReady = function(relayKey, timeout = 30000) {
  // If already initialized, resolve immediately
  if (initializedRelays.has(relayKey)) {
    return Promise.resolve(true)
  }
  
  // Otherwise, create a promise that resolves when the relay is ready
  return new Promise((resolve, reject) => {
    // Store the resolver
    relayReadyResolvers.set(relayKey, resolve)
    
    // Set timeout
    setTimeout(() => {
      if (relayReadyResolvers.has(relayKey)) {
        relayReadyResolvers.delete(relayKey)
        reject(new Error(`Timeout waiting for relay ${relayKey} to initialize`))
      }
    }, timeout)
  })
}

// Add function to check if a relay is ready
window.isRelayReady = function(relayKey) {
  return initializedRelays.has(relayKey)
}

function startHealthPolling() {
  // Initial health check
  if (workerPipe) {
    workerPipe.write(JSON.stringify({ type: 'get-health' }) + '\n')
  }
  
  // Poll every 30 seconds
  setInterval(() => {
    if (workerStatus === 'running' && workerPipe) {
      workerPipe.write(JSON.stringify({ type: 'get-health' }) + '\n')
    }
  }, 30000)
}


function updateHealthStatus(health) {
  healthState = health
  
  if (!health) return
  
  // Update status
  const statusEl = document.getElementById('health-status')
  if (statusEl) {
    statusEl.textContent = health.status || 'Unknown'
    statusEl.style.color = health.status === 'healthy' ? 'var(--success-color)' : 
                          health.status === 'ready' ? 'var(--text-primary)' : 
                          'var(--error-color)'
  }
  
  // Update uptime
  const uptimeEl = document.getElementById('health-uptime')
  if (uptimeEl && health.uptime) {
    const hours = Math.floor(health.uptime / (1000 * 60 * 60))
    const minutes = Math.floor((health.uptime % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((health.uptime % (1000 * 60)) / 1000)
    uptimeEl.textContent = `${hours}h ${minutes}m ${seconds}s`
  }
  
  // Update success rate - handle both old and new formats
  const successRateEl = document.getElementById('health-success-rate')
  if (successRateEl && health.metrics) {
    let successRate = 100; // Default
    
    // Check if successRate is already calculated
    if (typeof health.metrics.successRate === 'number') {
      successRate = health.metrics.successRate;
    } else if (health.metrics.totalRequests > 0) {
      // Calculate it ourselves
      successRate = (health.metrics.successfulRequests / health.metrics.totalRequests) * 100;
    }
    
    successRateEl.textContent = `${successRate.toFixed(1)}%`
  }
  
  // Update service statuses
  if (health.services) {
    const hyperteleEl = document.getElementById('hypertele-status')
    if (hyperteleEl) {
      hyperteleEl.textContent = health.services.hyperteleStatus || 'Unknown'
      hyperteleEl.style.color = health.services.hyperteleStatus === 'connected' ? 
                               'var(--success-color)' : 'var(--error-color)'
    }
  }
  
  // Update gateway status
  const gatewayEl = document.getElementById('gateway-status')
  if (gatewayEl) {
    gatewayEl.textContent = gatewayRegistered ? 'Registered' : 'Not Registered'
    gatewayEl.style.color = gatewayRegistered ? 'var(--success-color)' : 'var(--text-secondary)'
  }
}

// Start polling for relay updates
function startPolling() {
  // Initial fetch
  fetchRelays()
  
  // Poll every 5 seconds
  pollingInterval = setInterval(() => {
    if (workerStatus === 'running') {
      fetchRelays()
    }
  }, 5000)
}

// Stop polling
function stopPolling() {
  if (pollingInterval) {
    clearInterval(pollingInterval)
    pollingInterval = null
  }
}

// Fetch relays from API
async function fetchRelays() {
  if (workerStatus !== 'running' || !workerPipe) return
  
  try {
    // Send message to worker to get relays
    workerPipe.write(JSON.stringify({ type: 'get-relays' }) + '\n')
  } catch (error) {
    addLog(`Failed to fetch relays: ${error.message}`, 'error')
  }
}

// Update relay list
function updateRelayList(relayData) {
  if (!relayList) return;
  
  relays = relayData || [];
  
  if (relays.length === 0) {
    relayList.innerHTML = '<p style="color: var(--text-secondary); font-size: 12px;">No active relays</p>';
    return;
  }
  
  relayList.innerHTML = '';
  relays.forEach(relay => {
    const relayElement = document.createElement('div');
    relayElement.className = 'relay-item';
    
    // Use public identifier if available, fallback to relay key
    const displayKey = relay.publicIdentifier || relay.relayKey || 'unknown';
    const truncatedKey = displayKey.length > 30 ? 
      displayKey.substring(0, 30) + '...' : displayKey;
    
    // Create relay item with disconnect button
    relayElement.innerHTML = `
      <div style="flex: 1;">
        <div><strong>${relay.name || 'Unnamed Relay'}</strong></div>
        <div class="relay-key">${truncatedKey}</div>
        <div style="font-size: 11px; color: var(--text-secondary);">
          Peers: ${relay.peerCount || 0}
        </div>
        <div style="font-size: 10px; color: var(--text-secondary); margin-top: 2px;">
          ${relay.connectionUrl ? 'URL: ' + relay.connectionUrl : ''}
        </div>
      </div>
      <button class="disconnect-btn" data-relay-identifier="${relay.publicIdentifier || relay.relayKey}">
        Disconnect
      </button>
    `;
    
    // Add disconnect handler
    const disconnectBtn = relayElement.querySelector('.disconnect-btn');
    disconnectBtn.addEventListener('click', () => 
      disconnectRelay(relay.publicIdentifier || relay.relayKey)
    );
    
    relayList.appendChild(relayElement);
  });
}

// Update disconnect function to handle public identifiers
async function disconnectRelay(identifier) {
  if (!workerPipe) {
    addLog('Worker not running', 'error');
    return;
  }
  
  const displayName = identifier.length > 30 ? 
    identifier.substring(0, 30) + '...' : identifier;
  
  if (confirm(`Are you sure you want to disconnect from relay ${displayName}?`)) {
    addLog(`Disconnecting from relay ${displayName}`, 'status');
    
    workerPipe.write(JSON.stringify({
      type: 'disconnect-relay',
      data: { 
        relayKey: identifier, // Can be either public identifier or relay key
        identifier: identifier 
      }
    }) + '\n');
  }
}

// Create a new relay
async function createRelay() {
  const nameInput = document.getElementById('relay-name')
  const descriptionInput = document.getElementById('relay-description')
  
  if (!nameInput || !descriptionInput) {
    addLog('Form elements not found', 'error')
    return
  }
  
  const name = nameInput.value.trim()
  const description = descriptionInput.value.trim()
  
  if (!name) {
    addLog('Please enter a relay name', 'error')
    return
  }
  
  try {
    addLog(`Creating relay: ${name}`, 'status')
    
    // Send create relay command to worker
    if (workerPipe) {
      workerPipe.write(JSON.stringify({
        type: 'create-relay',
        data: { name, description }
      }) + '\n')
    }
    
    // Clear inputs
    nameInput.value = ''
    descriptionInput.value = ''
    
  } catch (error) {
    addLog(`Failed to create relay: ${error.message}`, 'error')
  }
}

// Create a relay instance with provided parameters and return relay key
async function createRelayInstance(name, description) {
  return new Promise((resolve, reject) => {
    if (!workerPipe) {
      addLog('Worker not running', 'error')
      return reject(new Error('Worker not running'))
    }

    relayCreateResolvers.push((msg) => {
      if (msg.data.success) resolve(msg.data.relayKey)
      else reject(new Error(msg.data.error))
    })

    workerPipe.write(JSON.stringify({
      type: 'create-relay',
      data: { name, description }
    }) + '\n')
  })
}

// Join an existing relay
async function joinRelay() {
  const keyInput = document.getElementById('join-relay-key')
  const nameInput = document.getElementById('join-relay-name')
  const descriptionInput = document.getElementById('join-relay-description')
  
  if (!keyInput || !nameInput || !descriptionInput) {
    addLog('Form elements not found', 'error')
    return
  }
  
  const relayKey = keyInput.value.trim()
  const name = nameInput.value.trim()
  const description = descriptionInput.value.trim()
  
  if (!relayKey) {
    addLog('Please enter a relay key', 'error')
    return
  }
  
  // Validate relay key format (64 hex characters)
  if (!/^[a-fA-F0-9]{64}$/.test(relayKey)) {
    addLog('Invalid relay key format. Must be 64 hexadecimal characters', 'error')
    return
  }
  
  try {
    addLog(`Joining relay: ${relayKey.substring(0, 16)}...`, 'status')
    
    // Send join relay command to worker
    if (workerPipe) {
      workerPipe.write(JSON.stringify({
        type: 'join-relay',
        data: { relayKey, name, description }
      }) + '\n')
    }
    
    // Clear inputs
    keyInput.value = ''
    nameInput.value = ''
    descriptionInput.value = ''
    
  } catch (error) {
    addLog(`Failed to join relay: ${error.message}`, 'error')
  }
}

// Clear logs
function clearLogs() {
  logs = []
  if (logsContainer) {
    logsContainer.innerHTML = ''
  }
  addLog('Logs cleared', 'status')
}

// Export logs
function exportLogs() {
  const logText = logs.map(log => `[${log.timestamp}] [${log.type.toUpperCase()}] ${log.message}`).join('\n')
  const blob = new Blob([logText], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `relay-logs-${new Date().toISOString().slice(0, 10)}.txt`
  a.click()
  URL.revokeObjectURL(url)
  addLog('Logs exported', 'status')
}

// Setup event listeners - ONLY CALL ONCE
function setupEventListeners() {
  if (eventListenersAttached) {
    console.log('[App] Event listeners already attached, skipping');
    return;
  }
  
  console.log('[App] setupEventListeners called at:', new Date().toISOString());
  console.log('[App] Current DOM readyState:', document.readyState);
  
  eventListenersAttached = true;
  
  // Button event listeners with debugging
  if (startButton) {
    console.log('[App] Adding listener to startButton:', startButton);
    startButton.addEventListener('click', (e) => {
      console.log('[App] Start button clicked event fired');
      e.preventDefault();
      e.stopPropagation();
      startWorker();
    });
    console.log('[App] Start button listener added successfully');
  } else {
    console.error('[App] Start button not found during setupEventListeners');
  }
  
  if (stopButton) {
    console.log('[App] Adding listener to stopButton:', stopButton);
    stopButton.addEventListener('click', (e) => {
      console.log('[App] Stop button clicked event fired');
      e.preventDefault();
      e.stopPropagation();
      stopWorker();
    });
    console.log('[App] Stop button listener added successfully');
  } else {
    console.error('[App] Stop button not found during setupEventListeners');
  }
  
  if (createRelayButton) {
    createRelayButton.addEventListener('click', createRelay)
    console.log('[App] Create relay button listener added')
  }
  
  if (clearLogsButton) {
    clearLogsButton.addEventListener('click', clearLogs)
    console.log('[App] Clear logs button listener added')
  }
  
  if (exportLogsButton) {
    exportLogsButton.addEventListener('click', exportLogs)
    console.log('[App] Export logs button listener added')
  }
  
  if (joinRelayButton) {
    joinRelayButton.addEventListener('click', joinRelay)
    console.log('[App] Join relay button listener added')
  }
  
  // Input field event listeners
  const relayNameInput = document.getElementById('relay-name')
  if (relayNameInput) {
    relayNameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && createRelayButton && !createRelayButton.disabled) {
        createRelay()
      }
    })
  }
  
  const joinRelayKeyInput = document.getElementById('join-relay-key')
  if (joinRelayKeyInput) {
    joinRelayKeyInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && joinRelayButton && !joinRelayButton.disabled) {
        joinRelay()
      }
    })
  }
}

// Debug function to check button state
function debugButtonState() {
  console.log('[App Debug] Button state check:');
  console.log('- startButton:', startButton, 'disabled:', startButton?.disabled);
  console.log('- stopButton:', stopButton, 'disabled:', stopButton?.disabled);
  console.log('- workerStatus:', workerStatus);
  console.log('- workerPipe:', workerPipe ? 'exists' : 'null');
  console.log('- isInitialized:', isInitialized);
  console.log('- eventListenersAttached:', eventListenersAttached);
  
  // Check event listeners
  if (typeof getEventListeners !== 'undefined') {
    console.log('- stopButton listeners:', getEventListeners(stopButton));
  }
}

// Initialize DOM elements and setup - ONLY CALL ONCE
function initializeDOMElements() {
  if (isInitialized) {
    console.log('[App] Already initialized, skipping');
    return;
  }
  
  console.log('[App] Initializing DOM elements at:', new Date().toISOString());
  isInitialized = true;
  
  // Initialize DOM elements
  workerStatusIndicator = document.getElementById('worker-status-indicator')
  workerStatusText = document.getElementById('worker-status-text')
  startButton = document.getElementById('start-worker')
  stopButton = document.getElementById('stop-worker')
  createRelayButton = document.getElementById('create-relay')
  logsContainer = document.getElementById('logs')
  relayList = document.getElementById('relay-list')
  clearLogsButton = document.getElementById('clear-logs')
  exportLogsButton = document.getElementById('export-logs')
  joinRelayButton = document.getElementById('join-relay')
  
  // Log element status
  const elements = {
    workerStatusIndicator,
    workerStatusText,
    startButton,
    stopButton,
    createRelayButton,
    logsContainer,
    relayList,
    clearLogsButton,
    exportLogsButton,
    joinRelayButton
  }
  
  console.log('[App] Element initialization results:');
  for (const [name, element] of Object.entries(elements)) {
    console.log(`- ${name}:`, element ? 'found' : 'NOT FOUND');
  }
  
  // Set up event listeners
  setupEventListeners();
  
  // Initialize UI state
  updateWorkerStatus('stopped', 'Not Started');
  addLog('Hypertuna Relay Desktop initialized', 'status');
  addLog('Click "Start" to launch the relay worker', 'info');
  
  // Debug button state after initialization
  debugButtonState();
}

// Wait for DOM to be ready - SINGLE HANDLER
if (document.readyState === 'loading') {
  console.log('[App] DOM is loading, setting up DOMContentLoaded listener');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('[App] DOMContentLoaded event fired');
    initializeDOMElements();
  });
} else {
  console.log('[App] DOM already ready, initializing immediately');
  initializeDOMElements();
}

// Enable automatic reloading
// Pear.updates(() => Pear.reload())

// Cleanup on teardown
Pear.teardown(async () => {
  addLog('Application shutting down...', 'status')
  stopPolling()
  
  if (workerPipe) {
    workerPipe.write(JSON.stringify({ type: 'shutdown' }) + '\n')
    await new Promise(resolve => setTimeout(resolve, 1000))
    workerPipe.end()
  }
})

// Add CSS dynamically
const style = document.createElement('style')
style.textContent = `
.relay-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.disconnect-btn {
  padding: 4px 12px;
  font-size: 11px;
  background-color: var(--error-color);
  border-color: var(--error-color);
  margin-left: 10px;
}

.disconnect-btn:hover:not(:disabled) {
  background-color: #ff4444;
  color: white;
}
`
document.head.appendChild(style)

// Expose controls for integration - do this immediately
console.log('[App] Exposing window functions');
window.startWorker = startWorker;
window.stopWorker = stopWorker;
window.createRelayInstance = createRelayInstance;
window.disconnectRelayInstance = disconnectRelay;
window.debugButtonState = debugButtonState;

console.log('[App] app.js loading completed at:', new Date().toISOString());
