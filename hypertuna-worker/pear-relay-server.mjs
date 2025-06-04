// ./hypertuna-worker/pear-relay-server.mjs - Enhanced relay server with comprehensive debug logging
import Hyperswarm from 'hyperswarm';
import { RelayProtocol } from './relay-protocol-enhanced.mjs';
import { promises as fs } from 'bare-fs';
import { join } from 'bare-path';
import crypto from 'hypercore-crypto';
import { setTimeout, setInterval, clearInterval } from 'bare-timers';
import https from 'bare-https';
import { URL } from 'bare-url';

// Import relay management functions
import {
  createRelay as createRelayManager,
  joinRelay as joinRelayManager,
  disconnectRelay as disconnectRelayManager,
  getRelayProfiles,
  autoConnectStoredRelays,
  handleRelayMessage,
  handleRelaySubscription,
  getActiveRelays,
  cleanupRelays,
  updateRelaySubscriptions
} from './hypertuna-relay-manager-adapter.mjs';

// Global state
let config = null;
let swarm = null;
let gatewayRegistrationInterval = null;
let gatewayConnection = null;
let pendingRegistrations = []; // Queue registrations until gateway connects
let connectedPeers = new Map(); // Track all connected peers

// Enhanced health state tracking
let healthState = {
  startTime: Date.now(),
  lastCheck: Date.now(),
  status: 'initializing',
  activeRelaysCount: 0,
  metrics: {
    totalRequests: 0,
    successfulRequests: 0,
    failedRequests: 0,
    lastMetricsReset: Date.now()
  },
  services: {
    hyperswarmStatus: 'initializing',
    protocolStatus: 'initializing',
    gatewayStatus: 'disconnected'
  }
};

// Initialize with enhanced config
export async function initializeRelayServer(customConfig = {}) {
  console.log('[RelayServer] ========================================');
  console.log('[RelayServer] Initializing with Hyperswarm support...');
  console.log('[RelayServer] Timestamp:', new Date().toISOString());
  
  // Merge with defaults
  config = {
    userKey: customConfig.userKey,  // Preserve user key
    port: 1945,
    nostr_pubkey_hex: customConfig.nostr_pubkey_hex || generateHexKey(),
    nostr_nsec_hex: customConfig.nostr_nsec_hex || generateHexKey(),
    proxy_privateKey: customConfig.proxy_privateKey || generateHexKey(),
    proxy_publicKey: customConfig.proxy_publicKey || generateHexKey(),
    proxy_seed: customConfig.proxy_seed || generateHexKey(),
    proxy_server_address: customConfig.proxy_server_address || 'hypertuna.com',
    gatewayUrl: customConfig.gatewayUrl || 'https://hypertuna.com',
    registerWithGateway: customConfig.registerWithGateway ?? true,
    registerInterval: customConfig.registerInterval || 60000,
    relays: customConfig.relays || [],
    storage: customConfig.storage || (global.Pear?.config.storage || './data'),
    // Add gateway public key if known (optional)
    gatewayPublicKey: customConfig.gatewayPublicKey || null,
    ...customConfig
  };
  
  console.log('[RelayServer] Configuration:', {
    proxy_server_address: config.proxy_server_address,
    gatewayUrl: config.gatewayUrl,
    registerWithGateway: config.registerWithGateway,
    registerInterval: config.registerInterval,
    gatewayPublicKey: config.gatewayPublicKey ? config.gatewayPublicKey.substring(0, 8) + '...' : 'not set',
    storage: config.storage,
    userKey: config.userKey ? config.userKey.substring(0, 8) + '...' : 'not set'
  });
  
  // Save config to storage
  await saveConfig(config);
  
  // Start Hyperswarm server
  await startHyperswarmServer();
  
  // Auto-connect to stored relays
  try {
    console.log('[RelayServer] Starting auto-connection to stored relays...');
    const connectedRelays = await autoConnectStoredRelays(config);
    console.log(`[RelayServer] Auto-connected to ${connectedRelays.length} relays`);
    
    // Update health state after auto-connect
    await updateHealthState();
    
    // If we have relays and gateway registration is enabled, register them
    if (connectedRelays.length > 0 && config.registerWithGateway) {
        console.log('[RelayServer] Registering auto-connected relays with gateway...');
        
        // Register each connected relay
        for (const relayKey of connectedRelays) {
            try {
                const profile = await getRelayProfileByKey(relayKey);
                if (profile) {
                    await registerWithGateway(profile);
                    
                    // Send registration complete message
                    if (global.sendMessage) {
                        global.sendMessage({
                            type: 'relay-registration-complete',
                            relayKey: relayKey,
                            gatewayUrl: `wss://${config.proxy_server_address}/${relayKey}`,
                            timestamp: new Date().toISOString()
                        });
                    }
                }
            } catch (regError) {
                console.error(`[RelayServer] Failed to register relay ${relayKey}:`, regError);
            }
        }
    }
} catch (error) {
    console.error('[RelayServer] Error during auto-connection:', error);
}
  
  // Start internal health monitoring
  startHealthMonitoring();
  
  // Set up periodic registration attempts if enabled
  if (config.registerWithGateway) {
    console.log('[RelayServer] Gateway registration is ENABLED');
    
    // Try to register immediately if we have pending registrations
    processPendingRegistrations();
    
    // Set up periodic registration
    gatewayRegistrationInterval = setInterval(() => {
      console.log('[RelayServer] Periodic registration check...');
      if (gatewayConnection) {
        console.log('[RelayServer] Gateway connected, performing registration');
        registerWithGateway();
      } else {
        console.log('[RelayServer] No gateway connection for periodic registration');
        console.log('[RelayServer] Connected peers:', Array.from(connectedPeers.keys()).map(k => k.substring(0, 8) + '...'));
      }
    }, config.registerInterval);
  } else {
    console.log('[RelayServer] Gateway registration is DISABLED');
  }
  
  console.log('[RelayServer] Initialization complete');
  console.log('[RelayServer] ========================================');
  
  // Trigger initial registration via HTTP after a delay
  setTimeout(async () => {
    console.log('[RelayServer] Performing initial HTTP registration with gateway...');
    await registerWithGateway();
  }, 2000); // Give everything time to stabilize
  
  return true;
}

function generateHexKey() {
  return crypto.randomBytes(32).toString('hex');
}

async function saveConfig(configData) {
  const configPath = join(config.storage || '.', 'relay-config.json');
  await fs.writeFile(configPath, JSON.stringify(configData, null, 2));
  console.log('[RelayServer] Config saved to:', configPath);
}

// Start Hyperswarm server
async function startHyperswarmServer() {
  try {
    console.log('[RelayServer] ----------------------------------------');
    console.log('[RelayServer] Starting Hyperswarm server...');
    
    // Create key pair from seed
    const keyPair = crypto.keyPair(Buffer.from(config.proxy_seed, 'hex'));
    config.swarmPublicKey = keyPair.publicKey.toString('hex');
    // Persist the generated public key so it can be read on next start
    await saveConfig(config);
    
    console.log('[RelayServer] Generated keypair from seed:', config.proxy_seed);
    console.log('[RelayServer] Hyperswarm Peer Public key:', config.swarmPublicKey);
    
    // Initialize Hyperswarm
    swarm = new Hyperswarm({
      keyPair,
      // Limit connections for stability
      maxPeers: 64,
      maxClientConnections: 32,
      maxServerConnections: 32
    });
    
    console.log('[RelayServer] Hyperswarm instance created with options:', {
      maxPeers: 64,
      maxClientConnections: 32,
      maxServerConnections: 32
    });
    
    // Handle incoming connections
    swarm.on('connection', (stream, peerInfo) => {
      const peerKey = peerInfo.publicKey.toString('hex');
      console.log('[RelayServer] ========================================');
      console.log('[RelayServer] NEW PEER CONNECTION RECEIVED');
      console.log('[RelayServer] Peer public key:', peerKey);
      console.log('[RelayServer] Connection time:', new Date().toISOString());
      console.log('[RelayServer] Total connected peers:', connectedPeers.size + 1);
      handlePeerConnection(stream, peerInfo);
    });
    
    // Join the swarm with a well-known topic
    const topicString = 'hypertuna-relay-network';
    const topic = crypto.hash(Buffer.from(topicString));
    console.log('[RelayServer] Joining swarm with topic:', topicString);
    console.log('[RelayServer] Topic hash:', topic.toString('hex'));
    
    const discovery = swarm.join(topic, { server: true, client: false });
    console.log('[RelayServer] Waiting for topic announcement...');
    
    await discovery.flushed();
    
    console.log('[RelayServer] Topic fully announced to DHT');
    console.log('[RelayServer] Hyperswarm server started successfully');
    console.log('[RelayServer] Listening for connections...');
    console.log('[RelayServer] ----------------------------------------');
    
    healthState.services.hyperswarmStatus = 'connected';
    
    // Update worker status
    if (global.sendMessage) {
      console.log('[RelayServer] Notifying worker of Hyperswarm status');
      global.sendMessage({
        type: 'status',
        message: 'Hyperswarm server connected',
        swarmKey: config.swarmPublicKey
      });
    }
    
  } catch (error) {
    console.error('[RelayServer] Failed to start Hyperswarm server:', error);
    console.error('[RelayServer] Error stack:', error.stack);
    healthState.services.hyperswarmStatus = 'error';
    throw error;
  }
}

// Handle incoming peer connections
function handlePeerConnection(stream, peerInfo) {
  const publicKey = peerInfo.publicKey.toString('hex');
  console.log('[RelayServer] Setting up protocol for peer:', publicKey);
  
  // Track the peer
  connectedPeers.set(publicKey, {
    connectedAt: Date.now(),
    peerInfo,
    protocol: null,
    identified: false
  });
  
  // Create relay protocol handler
  const protocol = new RelayProtocol(stream, true);
  
  // Store protocol reference
  connectedPeers.get(publicKey).protocol = protocol;
  
  protocol.on('open', (handshake) => {
    console.log('[RelayServer] ----------------------------------------');
    console.log('[RelayServer] PROTOCOL OPENED');
    console.log('[RelayServer] Peer:', publicKey.substring(0, 8) + '...');
    console.log('[RelayServer] Handshake received:', JSON.stringify(handshake, null, 2));
    
    healthState.services.protocolStatus = 'connected';
    
    // Check if this is the gateway based on handshake
    if (handshake && handshake.isGateway) {
      console.log('[RelayServer] >>> GATEWAY IDENTIFIED FROM HANDSHAKE <<<');
      setGatewayConnection(protocol, publicKey);
    }
    // Or check if it matches known gateway public key
    else if (config.gatewayPublicKey && publicKey === config.gatewayPublicKey) {
      console.log('[RelayServer] >>> GATEWAY IDENTIFIED BY PUBLIC KEY <<<');
      setGatewayConnection(protocol, publicKey);
    } else {
      console.log('[RelayServer] Regular peer connection (not gateway)');
    }
    console.log('[RelayServer] ----------------------------------------');
  });
  
  protocol.on('close', () => {
    console.log('[RelayServer] ----------------------------------------');
    console.log('[RelayServer] PROTOCOL CLOSED');
    console.log('[RelayServer] Peer:', publicKey.substring(0, 8) + '...');
    
    // Remove from connected peers
    connectedPeers.delete(publicKey);
    
    if (gatewayConnection === protocol) {
      console.log('[RelayServer] >>> GATEWAY CONNECTION LOST <<<');
      gatewayConnection = null;
      healthState.services.gatewayStatus = 'disconnected';
    }
    
    console.log('[RelayServer] Remaining connected peers:', connectedPeers.size);
    console.log('[RelayServer] ----------------------------------------');
  });
  
  // Set up request handlers
  setupProtocolHandlers(protocol);
  
  // Handle gateway identification via registration endpoint
  protocol.on('request', (request) => {
    console.log('[RelayServer] Generic request received:', request.method, request.path);
    
    // If this is a registration request from the gateway, identify it
    if (request.path === '/identify-gateway' && !gatewayConnection) {
      console.log('[RelayServer] >>> GATEWAY IDENTIFICATION REQUEST RECEIVED <<<');
      setGatewayConnection(protocol, publicKey);
      
      protocol.sendResponse({
        id: request.id,
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ 
          status: 'identified',
          relayPublicKey: config.swarmPublicKey
        }))
      });
    }
  });
}

// Set gateway connection and process pending registrations
function setGatewayConnection(protocol, publicKey) {
  gatewayConnection = protocol;
  healthState.services.gatewayStatus = 'connected';
  
  // Mark peer as identified
  const peer = connectedPeers.get(publicKey);
  if (peer) {
    peer.identified = true;
    peer.isGateway = true;
  }
  
  console.log('[RelayServer] ========================================');
  console.log('[RelayServer] GATEWAY CONNECTION ESTABLISHED');
  console.log('[RelayServer] Gateway public key:', publicKey);
  console.log('[RelayServer] Connection time:', new Date().toISOString());
  console.log('[RelayServer] ========================================');
  
  // Update worker status
  if (global.sendMessage) {
    console.log('[RelayServer] Notifying worker of gateway connection');
    global.sendMessage({
      type: 'gateway-connected',
      gatewayPublicKey: publicKey
    });
  }
  
  // Process any pending registrations
  processPendingRegistrations();
}

// Process pending registrations
async function processPendingRegistrations() {
  if (!gatewayConnection) {
    console.log('[RelayServer] Cannot process pending registrations - no gateway connection');
    return;
  }
  
  if (pendingRegistrations.length === 0) {
    console.log('[RelayServer] No pending registrations to process');
    return;
  }
  
  console.log('[RelayServer] ----------------------------------------');
  console.log(`[RelayServer] Processing ${pendingRegistrations.length} pending registrations`);
  
  while (pendingRegistrations.length > 0) {
    const registration = pendingRegistrations.shift();
    console.log('[RelayServer] Processing pending registration:', registration ? 'with profile' : 'general update');
    await registerWithGateway(registration);
  }
  
  // Also do a fresh registration with current state
  console.log('[RelayServer] Sending fresh registration with current state');
  await registerWithGateway();
  console.log('[RelayServer] ----------------------------------------');
}

// Setup protocol handlers for all endpoints
function setupProtocolHandlers(protocol) {
  console.log('[RelayServer] Setting up protocol handlers');
  
  // Health endpoint
  protocol.handle('/health', async () => {
    console.log('[RelayServer] Health check requested');
    await updateHealthState(); // Added await
    
    const activeRelays = await getActiveRelays(); // Added declaration with await
    const healthResponse = {
      status: healthState.status,
      uptime: Date.now() - healthState.startTime,
      lastCheck: healthState.lastCheck,
      activeRelays: {
        count: healthState.activeRelaysCount,
        keys: activeRelays.map(r => r.relayKey) // Use the awaited value
      },
      services: healthState.services,
      metrics: {
        ...healthState.metrics,
        successRate: healthState.metrics.totalRequests === 0 ? 100 : 
          (healthState.metrics.successfulRequests / healthState.metrics.totalRequests) * 100
      },
      config: {
        port: config.port,
        proxy_server_address: config.proxy_server_address,
        gatewayUrl: config.gatewayUrl,
        publicKey: config.swarmPublicKey
      },
      timestamp: new Date().toISOString()
    };
    
    updateMetrics(true);
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: Buffer.from(JSON.stringify(healthResponse))
    };
  });
  
  // Get relay list
  protocol.handle('/relays', async () => {
    console.log('[RelayServer] Relay list requested');
    try {
      const activeRelays = await getActiveRelays(); // Added await
      const profiles = await getRelayProfiles();
      
      const relayList = activeRelays.map(relay => {
        const profile = profiles.find(p => p.relay_key === relay.relayKey) || {};
        return {
          relayKey: relay.relayKey,
          connectionUrl: `wss://${config.proxy_server_address}/${relay.relayKey}`,
          name: profile.name || 'Unnamed Relay',
          description: profile.description || '',
          createdAt: profile.created_at || profile.joined_at || null,
          peerCount: relay.peerCount || 0
        };
      });
      
      console.log(`[RelayServer] Returning ${relayList.length} relays`);
      updateMetrics(true);
      return {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({
          relays: relayList,
          count: relayList.length
        }))
      };
    } catch (error) {
      console.error('[RelayServer] Error getting relay list:', error);
      updateMetrics(false);
      return {
        statusCode: 500,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: error.message }))
      };
    }
  });
  
  // Create relay
  protocol.handle('/relay/create', async (request) => {
    console.log('[RelayServer] Create relay requested');
    const body = JSON.parse(request.body.toString());
    const { name, description } = body;
    
    console.log('[RelayServer] Creating relay:', { name, description });
    
    if (!name) {
      updateMetrics(false);
      return {
        statusCode: 400,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: 'Relay name is required' }))
      };
    }
    
    try {
      const result = await createRelayManager({
        name,
        description,
        config
      });
      
      if (result.success) {
        console.log('[RelayServer] Relay created successfully:', result.relayKey);
        await updateHealthState();
        
        // Send update to parent if connected
        if (global.sendMessage) {
          const activeRelays = await getActiveRelays();
          global.sendMessage({
            type: 'relay-update',
            relays: activeRelays
          });
        }
        
        // ALWAYS register with gateway via HTTP if enabled
        if (config.registerWithGateway) {
          console.log('[RelayServer] Registering new relay with gateway via HTTP');
          try {
            await registerWithGateway(result.profile);
            console.log('[RelayServer] Successfully registered new relay with gateway');
          } catch (regError) {
            console.error('[RelayServer] Failed to register new relay with gateway:', regError.message);
            // Don't fail the relay creation, just log the error
          }
          
          // Still queue for P2P registration if gateway connects later
          if (!gatewayConnection) {
            console.log('[RelayServer] Queueing for P2P registration when gateway connects');
            pendingRegistrations.push(result.profile);
          }
        }
        
        updateMetrics(true);
        return {
          statusCode: 200,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify(result))
        };
      } else {
        console.error('[RelayServer] Failed to create relay:', result.error);
        updateMetrics(false);
        return {
          statusCode: 500,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify({ error: result.error }))
        };
      }
    } catch (error) {
      console.error('[RelayServer] Error creating relay:', error);
      updateMetrics(false);
      return {
        statusCode: 500,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: error.message }))
      };
    }
  });
  
  // Join relay
  protocol.handle('/relay/join', async (request) => {
    console.log('[RelayServer] Join relay requested');
    const body = JSON.parse(request.body.toString());
    const { relayKey, name, description } = body;
    
    console.log('[RelayServer] Joining relay:', { relayKey, name, description });
    
    if (!relayKey) {
      updateMetrics(false);
      return {
        statusCode: 400,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: 'Relay key is required' }))
      };
    }
    
    try {
      const result = await joinRelayManager({
        relayKey,
        name,
        description,
        config
      });
      
      if (result.success) {
        console.log('[RelayServer] Joined relay successfully');
        await updateHealthState();
        
        // Send update to parent
        if (global.sendMessage) {
          const activeRelays = await getActiveRelays();
          global.sendMessage({
            type: 'relay-update',
            relays: activeRelays
          });
        }
        
        // ALWAYS register with gateway via HTTP if enabled
        if (config.registerWithGateway) {
          console.log('[RelayServer] Registering joined relay with gateway via HTTP');
          try {
            // For join, we register all relays since we don't have specific profile for joined relay
            await registerWithGateway();
            console.log('[RelayServer] Successfully registered joined relay with gateway');
          } catch (regError) {
            console.error('[RelayServer] Failed to register joined relay with gateway:', regError.message);
            // Don't fail the relay join, just log the error
          }
          
          // Still queue for P2P registration if gateway connects later
          if (!gatewayConnection) {
            console.log('[RelayServer] Queueing for P2P registration when gateway connects');
            pendingRegistrations.push(null); // null means register all relays
          }
        }
        
        updateMetrics(true);
        return {
          statusCode: 200,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify(result))
        };
      } else {
        console.error('[RelayServer] Failed to join relay:', result.error);
        updateMetrics(false);
        return {
          statusCode: 500,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify({ error: result.error }))
        };
      }
    } catch (error) {
      console.error('[RelayServer] Error joining relay:', error);
      updateMetrics(false);
      return {
        statusCode: 500,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: error.message }))
      };
    }
  });
  
  // Disconnect from relay
  protocol.handle('/relay/:relayKey/disconnect', async (request) => {
    const relayKey = request.params.relayKey;
    console.log('[RelayServer] Disconnect relay requested:', relayKey);
    
    try {
      const result = await disconnectRelayManager(relayKey);
      
      if (result.success) {
        console.log('[RelayServer] Disconnected from relay successfully');
        await updateHealthState(); // Added await
        
        // Send update to parent
        if (global.sendMessage) {
          const activeRelays = await getActiveRelays(); // Added await
          global.sendMessage({
            type: 'relay-update',
            relays: activeRelays
          });
        }
        
        // Update gateway if connected
        if (config.registerWithGateway && gatewayConnection) {
          console.log('[RelayServer] Updating gateway after relay disconnect');
          await registerWithGateway();
        }
        
        updateMetrics(true);
        return {
          statusCode: 200,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify(result))
        };
      } else {
        console.error('[RelayServer] Failed to disconnect relay:', result.error);
        updateMetrics(false);
        return {
          statusCode: 404,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify({ error: result.error }))
        };
      }
    } catch (error) {
      console.error('[RelayServer] Error disconnecting relay:', error);
      updateMetrics(false);
      return {
        statusCode: 500,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: error.message }))
      };
    }
  });
  
  // Handle relay messages (from gateway)
  protocol.handle('/post/relay/:relayKey', async (request) => {
    const relayKey = request.params.relayKey;
    const { message, connectionKey } = JSON.parse(request.body.toString());
    
    console.log(`[RelayServer] Relay message for ${relayKey}, connectionKey: ${connectionKey}`);
    
    try {
      let nostrMessage;
      if (message && message.type === 'Buffer' && Array.isArray(message.data)) {
        const messageStr = Buffer.from(message.data).toString('utf8');
        try {
          nostrMessage = JSON.parse(messageStr);
        } catch (parseError) {
          throw new Error(`Failed to parse NOSTR message: ${parseError.message}`);
        }
      } else {
        nostrMessage = message;
      }

      if (!Array.isArray(nostrMessage)) {
        throw new Error('Invalid NOSTR message format - expected array');
      }

      if (nostrMessage.length < 2) {
        throw new Error('Invalid NOSTR message format - insufficient elements');
      }
      
      const responses = [];
      const sendResponse = (response) => {
        console.log(`[RelayServer] Queueing response for relay ${relayKey}`);
        responses.push(response);
      };
      
      await handleRelayMessage(relayKey, nostrMessage, sendResponse, connectionKey);
      
      console.log(`[RelayServer] Handled message, ${responses.length} responses queued`);
      updateMetrics(true);
      return {
        statusCode: 200,
        headers: { 'content-type': 'text/plain' },
        body: Buffer.from(responses.map(r => JSON.stringify(r)).join('\n'))
      };
      
    } catch (error) {
      console.error(`[RelayServer] Error processing message:`, error);
      updateMetrics(false);
      return {
        statusCode: 500,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify([['NOTICE', `Error: ${error.message}`]]))
      };
    }
  });
  
  // Handle relay subscriptions (from gateway)
  protocol.handle('/get/relay/:relayKey/:connectionKey', async (request) => {
    const relayKey = request.params.relayKey;
    const connectionKey = request.params.connectionKey;
    
    console.log(`[RelayServer] Checking subscriptions for relay ${relayKey}, connectionKey: ${connectionKey}`);
    
    try {
      const [events, activeSubscriptionsUpdated] = await handleRelaySubscription(relayKey, connectionKey);
      
      if (!Array.isArray(events)) {
        console.log(`[RelayServer] Invalid response format from handleSubscription`);
        updateMetrics(false);
        return {
          statusCode: 500,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify(['NOTICE', 'Internal server error: Invalid response format']))
        };
      }
  
      console.log(`[RelayServer] Found ${events.length} events for connectionKey: ${connectionKey}`);
      
      // Update subscriptions if needed
      if (activeSubscriptionsUpdated) {
        try {
          console.log(`[RelayServer] Updating subscriptions for connectionKey: ${connectionKey}`);
          await updateRelaySubscriptions(relayKey, connectionKey, activeSubscriptionsUpdated);
          console.log(`[RelayServer] Successfully updated subscriptions for connectionKey: ${connectionKey}`);
        } catch (updateError) {
          console.log(`[RelayServer] Warning: Failed to update subscriptions for connectionKey: ${connectionKey}:`, updateError.message);
          // Don't fail the entire request, just log the warning
        }
      }
      
      updateMetrics(true);
      return {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify(events))
      };
      
    } catch (error) {
      console.error(`[RelayServer] Error processing subscription:`, error);
      updateMetrics(false);
      return {
        statusCode: 500,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify(['NOTICE', `Error: ${error.message}`]))
      };
    }
  });
  
  // Registration endpoint (for gateway to call)
  protocol.handle('/register', async (request) => {
    const registrationData = JSON.parse(request.body.toString());
    console.log('[RelayServer] Registration endpoint called by gateway');
    console.log('[RelayServer] Registration data:', registrationData);
    
    // Handle any registration response from gateway
    updateMetrics(true);
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: Buffer.from(JSON.stringify({ 
        status: 'acknowledged',
        timestamp: new Date().toISOString()
      }))
    };
  });
  
  console.log('[RelayServer] Protocol handlers setup complete');
}

// Update health state
async function updateHealthState() {
  const now = Date.now();
  healthState.lastCheck = now;
  const activeRelays = await getActiveRelays(); // Added await
  healthState.activeRelaysCount = activeRelays.length;
  
  if (healthState.activeRelaysCount > 0 && healthState.services.hyperswarmStatus === 'connected') {
    healthState.status = 'healthy';
  } else if (healthState.services.hyperswarmStatus === 'connected') {
    healthState.status = 'ready';
  } else {
    healthState.status = 'degraded';
  }
  
  console.log('[RelayServer] Health state updated:', {
    status: healthState.status,
    activeRelays: healthState.activeRelaysCount,
    services: healthState.services
  });
}

// Start health monitoring
function startHealthMonitoring() {
  console.log('[RelayServer] Starting health monitoring (30s interval)');
  
  setInterval(async () => { // Made async
    await updateHealthState(); // Added await
    
    // Check if health state is stale
    const now = Date.now();
    if (now - healthState.lastCheck > 30000) {
      healthState.status = 'warning';
    }
    
    console.log('[RelayServer] Periodic health check:', {
      status: healthState.status,
      activeRelays: healthState.activeRelaysCount,
      services: healthState.services,
      connectedPeers: connectedPeers.size,
      gatewayConnected: !!gatewayConnection
    });
    
    // Send health update to parent
    if (global.sendMessage) {
      global.sendMessage({
        type: 'health-update',
        healthState
      });
    }
  }, 30000); // Every 30 seconds
}

// Update metrics
function updateMetrics(success = true) {
  healthState.metrics.totalRequests++;
  if (success) {
    healthState.metrics.successfulRequests++;
  } else {
    healthState.metrics.failedRequests++;
  }
  
  // Reset metrics every hour
  if (Date.now() - healthState.metrics.lastMetricsReset > 60 * 60 * 1000) {
    console.log('[RelayServer] Resetting hourly metrics');
    healthState.metrics.totalRequests = 0;
    healthState.metrics.successfulRequests = 0;
    healthState.metrics.failedRequests = 0;
    healthState.metrics.lastMetricsReset = Date.now();
  }
}

// Register with gateway using HTTP
async function registerWithGateway(relayProfileInfo = null) {
  console.log('[RelayServer] ========================================');
  console.log('[RelayServer] GATEWAY REGISTRATION ATTEMPT (HTTP)');
  console.log('[RelayServer] Timestamp:', new Date().toISOString());
  
  if (!config.registerWithGateway) {
    console.log('[RelayServer] Gateway registration is DISABLED in config');
    console.log('[RelayServer] ========================================');
    return;
  }
  
  try {
    const activeRelays = await getActiveRelays(); // Added await here
    const publicKey = config.swarmPublicKey; // This is our Hyperswarm public key
    
    const registrationData = {
      publicKey,  // Hyperswarm public key for P2P connection
      relays: activeRelays.map(r => r.relayKey),
      address: `${config.proxy_server_address}:${config.port}`,
      mode: 'hyperswarm' // Indicate we're using Hyperswarm
    };
    
    if (relayProfileInfo) {
      registrationData.relayProfileInfo = relayProfileInfo;
    }
    
    console.log('[RelayServer] Sending HTTP registration to gateway');
    console.log('[RelayServer] Registration URL:', `${config.gatewayUrl}/register`);
    console.log('[RelayServer] Registration data:', {
      publicKey: publicKey.substring(0, 8) + '...',
      relayCount: registrationData.relays.length,
      address: registrationData.address,
      hasProfileInfo: !!relayProfileInfo,
      mode: registrationData.mode
    });
    
    // Make HTTP request to gateway
    const postData = JSON.stringify(registrationData);
    
    const url = new URL(config.gatewayUrl);
    const options = {
      hostname: url.hostname,
      port: url.port || 443,
      path: '/register',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      rejectUnauthorized: false // For self-signed certs
    };
    
    const response = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk.toString());
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            resolve(data);
          }
        });
      });
      
      req.on('error', reject);
      req.write(postData);
      req.end();
    });
    
    console.log('[RelayServer] Gateway HTTP registration response:', response);
    console.log('[RelayServer] Registration SUCCESSFUL');
    
    // Notify parent process
    if (global.sendMessage) {
      console.log('[RelayServer] Notifying worker of successful registration');
      global.sendMessage({
        type: 'gateway-registered',
        data: response
      });
    }
  } catch (error) {
    console.error('[RelayServer] Gateway HTTP registration FAILED:', error.message);
    console.error('[RelayServer] Error stack:', error.stack);
  }
  
  console.log('[RelayServer] ========================================');
}

// Export relay management functions for worker access
export async function createRelay(options) {
  console.log('[RelayServer] Creating relay via adapter:', options);
  const result = await createRelayManager({
    ...options,
    config
  });
  
  if (result.success) {
    await updateHealthState();
    
    // ALWAYS register with gateway via HTTP if enabled
    let registrationStatus = 'disabled';
    if (config.registerWithGateway) {
      try {
        await registerWithGateway(result.profile);
        registrationStatus = 'success';
      } catch (regError) {
        registrationStatus = 'failed';
        result.registrationError = regError.message;
      }
    }
    result.gatewayRegistration = registrationStatus;
  }
  
  return result;
}

export async function joinRelay(options) {
  console.log('[RelayServer] Joining relay via adapter:', options);
  const result = await joinRelayManager({
    ...options,
    config
  });
  
  if (result.success) {
    await updateHealthState();
    
    // ALWAYS register with gateway via HTTP if enabled
    let registrationStatus = 'disabled';
    if (config.registerWithGateway) {
      try {
        await registerWithGateway(result.profile);
        registrationStatus = 'success';
      } catch (regError) {
        registrationStatus = 'failed';
        result.registrationError = regError.message;
      }
    }
    result.gatewayRegistration = registrationStatus;
  }
  
  return result;
}

export async function disconnectRelay(relayKey) {
  console.log('[RelayServer] Disconnecting relay via adapter:', relayKey);
  const result = await disconnectRelayManager(relayKey);
  
  if (result.success) {
    await updateHealthState(); // Added await
    
    // Update gateway if connected
    if (config.registerWithGateway && gatewayConnection) {
      await registerWithGateway();
    }
  }
  
  return result;
}

export async function shutdownRelayServer() {
  console.log('[RelayServer] ========================================');
  console.log('[RelayServer] SHUTTING DOWN');
  console.log('[RelayServer] Timestamp:', new Date().toISOString());
  
  // Clear registration interval
  if (gatewayRegistrationInterval) {
    clearInterval(gatewayRegistrationInterval);
    gatewayRegistrationInterval = null;
  }
  
  // Clean up all active relays
  await cleanupRelays();
  
  // Destroy swarm
  if (swarm) {
    console.log('[RelayServer] Destroying Hyperswarm instance');
    await swarm.destroy();
    swarm = null;
  }
  
  console.log('[RelayServer] Shutdown complete');
  console.log('[RelayServer] ========================================');
}

// Export for testing
export { config, healthState, getActiveRelays };
