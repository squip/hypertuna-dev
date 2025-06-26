// ./hypertuna-worker/pear-relay-server.mjs - Enhanced relay server with comprehensive debug logging
import Hyperswarm from 'hyperswarm';
import { RelayProtocol } from './relay-protocol-enhanced.mjs';
import { promises as fs } from 'bare-fs';
import { join } from 'bare-path';
import crypto from 'hypercore-crypto';
import { setTimeout, setInterval, clearInterval } from 'bare-timers';
import https from 'bare-https';
import { URL } from 'bare-url';
import { initializeChallengeManager, getChallengeManager } from './challenge-manager.mjs';
import { getRelayAuthStore } from './relay-auth-store.mjs';

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
  updateRelaySubscriptions,
  getRelayMembers
} from './hypertuna-relay-manager-adapter.mjs';

import { 
  findRelayByPublicIdentifier, 
  getRelayKeyFromPublicIdentifier,
  isRelayActiveByPublicIdentifier 
} from './relay-lookup-utils.mjs';

import { 
  updateRelayMemberSets,
  getRelayProfileByKey,
  getRelayProfileByPublicIdentifier
} from './hypertuna-relay-profile-manager-bare.mjs';
import { NostrUtils } from './nostr-utils.js';
import NostrEvents from '../hypertuna-desktop/NostrEvents.js'; // We'll need to adapt this for Bare


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

  // Initialize challenge manager with relay private key
  console.log('[RelayServer] Initializing challenge manager...');
  initializeChallengeManager(config.proxy_privateKey);
  
  // Initialize auth store
  const authStore = getRelayAuthStore();
  console.log('[RelayServer] Auth store initialized');
  
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
        const activeRelays = await getActiveRelays();
        const profiles = await getRelayProfiles();
        
        const relayList = activeRelays.map(relay => {
            const profile = profiles.find(p => p.relay_key === relay.relayKey) || {};
            
            // Use public identifier in the connection URL if available
            const connectionUrl = profile.public_identifier ? 
                `wss://${config.proxy_server_address}/${profile.public_identifier.replace(':', '/')}` :
                `wss://${config.proxy_server_address}/${relay.relayKey}`;
            
            return {
                relayKey: relay.relayKey, // Still include for backward compatibility
                publicIdentifier: profile.public_identifier || null, // Include public identifier
                connectionUrl: connectionUrl,
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

  // Handle join requests
  protocol.handle('/post/join/:identifier', async (request) => {
    const identifier = request.params.identifier;
    console.log(`[RelayServer] Join request for relay: ${identifier}`);
    
    try {
      const body = JSON.parse(request.body.toString());
      const { event, requesterSubnetHash, callbackUrls } = body;
      
      if (!event || !requesterSubnetHash) {
        updateMetrics(false);
        return {
          statusCode: 400,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify({ error: 'Missing required fields' }))
        };
      }
      
      // Verify this is a kind 9021 event
      if (event.kind !== 9021) {
        updateMetrics(false);
        return {
          statusCode: 400,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify({ error: 'Invalid event kind' }))
        };
      }
      
      try {
        await publishEventToRelay(identifier, event);
        console.log(`[RelayServer] Published kind 9021 join request event`);
      } catch (publishError) {
        console.error(`[RelayServer] Failed to publish join request:`, publishError);
        // Continue anyway - the auth process can still work
      }

      // Generate challenge
      const challengeManager = getChallengeManager();
      const { challenge, relayPubkey } = challengeManager.createChallenge(event.pubkey, identifier);
      
      console.log(`[RelayServer] Generated challenge for ${event.pubkey.substring(0, 8)}...`);
      
      // Prepare response with callback URLs
      const response = {
        challenge,
        relayPubkey,
        verifyUrl: callbackUrls?.verifyUrl || `/verify-ownership`,
        finalUrl: callbackUrls?.finalUrl || `/finalize-auth`
      };
      
      updateMetrics(true);
      return {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify(response))
      };
      
    } catch (error) {
      console.error(`[RelayServer] Error processing join request:`, error);
      updateMetrics(false);
      return {
        statusCode: 500,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: error.message }))
      };
    }
  });

  // Handle verify ownership
  protocol.handle('/verify-ownership', async (request) => {
    console.log(`[RelayServer] ========================================`);
    console.log(`[RelayServer] VERIFY OWNERSHIP REQUEST`);
    
    try {
      const body = JSON.parse(request.body.toString());
      const { pubkey, ciphertext, iv } = body;
      
      if (!pubkey || !ciphertext || !iv) {
        console.error(`[RelayServer] Missing required fields`);
        updateMetrics(false);
        return {
          statusCode: 400,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify({ error: 'Missing required fields' }))
        };
      }
      
      console.log(`[RelayServer] Verifying for pubkey: ${pubkey.substring(0, 8)}...`);
      console.log(`[RelayServer] Ciphertext length: ${ciphertext.length}`);
      console.log(`[RelayServer] IV length: ${iv.length}`);
      
      // Verify the challenge
      const challengeManager = getChallengeManager();
      const result = await challengeManager.verifyChallenge(pubkey, ciphertext, iv);
      
      if (!result.success) {
        console.error(`[RelayServer] Verification failed: ${result.error}`);
        updateMetrics(false);
        return {
          statusCode: 400,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify({ error: result.error }))
        };
      }
      
      console.log(`[RelayServer] Verification SUCCESSFUL`);
      console.log(`[RelayServer] Token: ${result.token.substring(0, 16)}...`);
      console.log(`[RelayServer] Identifier: ${result.identifier}`);
      console.log(`[RelayServer] ========================================`);
      
      updateMetrics(true);
      return {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({
          success: true,
          token: result.token,
          identifier: result.identifier
        }))
      };
      
    } catch (error) {
      console.error(`[RelayServer] ========================================`);
      console.error(`[RelayServer] VERIFY OWNERSHIP ERROR`);
      console.error(`[RelayServer] Error:`, error.message);
      console.error(`[RelayServer] Stack:`, error.stack);
      console.error(`[RelayServer] ========================================`);
      
      updateMetrics(false);
      return {
        statusCode: 500,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: error.message }))
      };
    }
  });

  protocol.handle('/finalize-auth', async (request) => {
    console.log(`[RelayServer] ========================================`);
    console.log(`[RelayServer] FINALIZE AUTH REQUEST`);
    
    try {
      const body = JSON.parse(request.body.toString());
      const { pubkey, token, identifier, subnetHash } = body;
      
      if (!pubkey || !token || !identifier || !subnetHash) {
        console.error(`[RelayServer] Missing required fields`);
        updateMetrics(false);
        return {
          statusCode: 400,
          headers: { 'content-type': 'application/json' },
          body: Buffer.from(JSON.stringify({ error: 'Missing required fields' }))
        };
      }
      
      console.log(`[RelayServer] Finalizing for pubkey: ${pubkey.substring(0, 8)}...`);
      console.log(`[RelayServer] Identifier: ${identifier}`);
      console.log(`[RelayServer] Subnet hash: ${subnetHash.substring(0, 8)}...`);
      
      // Get auth store
      const authStore = getRelayAuthStore();
      
      // Store the authentication
      authStore.addAuth(identifier, pubkey, token, subnetHash);
      
      // Get relay profile to update members
      let profile = await getRelayProfileByKey(identifier);
      if (!profile) {
        profile = await getRelayProfileByPublicIdentifier(identifier);
      }
      
      if (profile) {
        // Update profile with auth token
        const { updateRelayAuthToken } = await import('./hypertuna-relay-profile-manager-bare.mjs');
        await updateRelayAuthToken(identifier, pubkey, token, subnetHash);
        // Update member lists
        const currentAdds = profile.member_adds || [];
        const currentRemoves = profile.member_removes || [];
        
        // Add new member
        const memberAdd = {
          pubkey: pubkey,
          ts: Date.now()
        };
        
        // Check if already in adds
        const existingIndex = currentAdds.findIndex(m => m.pubkey === pubkey);
        if (existingIndex >= 0) {
          currentAdds[existingIndex] = memberAdd;
        } else {
          currentAdds.push(memberAdd);
        }
        
        // Update profile
        await updateRelayMemberSets(identifier, currentAdds, currentRemoves);
        
        // Publish kind 9000 event
        await publishMemberAddEvent(identifier, pubkey, token, subnetHash);
      }
      
      // Generate relay connection URL
      const relayUrl = `wss://${config.proxy_server_address}/${identifier}?token=${token}`;
      
      console.log(`[RelayServer] Auth finalized successfully`);
      console.log(`[RelayServer] Relay URL: ${relayUrl}`);
      console.log(`[RelayServer] ========================================`);
      
      updateMetrics(true);
      return {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({
          success: true,
          relayKey: identifier,
          authToken: token,
          relayUrl: relayUrl
        }))
      };
      
    } catch (error) {
      console.error(`[RelayServer] ========================================`);
      console.error(`[RelayServer] FINALIZE AUTH ERROR`);
      console.error(`[RelayServer] Error:`, error.message);
      console.error(`[RelayServer] Stack:`, error.stack);
      console.error(`[RelayServer] ========================================`);
      
      updateMetrics(false);
      return {
        statusCode: 500,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: error.message }))
      };
    }
  });

  
  // Add authorize endpoint for mobile subnet addition
protocol.handle('/authorize', async (request) => {
  console.log(`[RelayServer] ========================================`);
  console.log(`[RelayServer] AUTHORIZE REQUEST (Mobile subnet)`);
  
  try {
    const body = JSON.parse(request.body.toString());
    const { token, relayKey, subnetHash } = body;
    
    if (!token) {
      console.error(`[RelayServer] Missing token`);
      updateMetrics(false);
      return {
        statusCode: 400,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: 'Missing token' }))
      };
    }
    
    console.log(`[RelayServer] Token: ${token.substring(0, 16)}...`);
    console.log(`[RelayServer] Relay: ${relayKey || 'not specified'}`);
    console.log(`[RelayServer] Subnet: ${subnetHash?.substring(0, 8)}...`);
    
    const authStore = getRelayAuthStore();
    
    // Find the auth entry by token
    let foundAuth = null;
    let foundRelay = null;
    
    if (relayKey) {
      // Check specific relay
      const auth = authStore.verifyAuth(relayKey, token, subnetHash);
      if (auth) {
        foundAuth = auth;
        foundRelay = relayKey;
      }
    } else {
      // Search all relays (less efficient but supports QR code without relay info)
      const activeRelays = await getActiveRelays();
      for (const relay of activeRelays) {
        const auth = authStore.getAuthByToken(relay.relayKey, token);
        if (auth) {
          foundAuth = auth;
          foundRelay = relay.relayKey;
          break;
        }
      }
    }
    
    if (!foundAuth) {
      console.error(`[RelayServer] Invalid token`);
      updateMetrics(false);
      return {
        statusCode: 403,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: 'Invalid token' }))
      };
    }
    
    // Add the new subnet
    const added = authStore.addSubnet(foundRelay, foundAuth.pubkey, subnetHash);
    
    if (added) {
      console.log(`[RelayServer] Added subnet for ${foundAuth.pubkey.substring(0, 8)}...`);
      console.log(`[RelayServer] ========================================`);
      
      updateMetrics(true);
      return {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({
          success: true,
          message: 'Mobile device authorized'
        }))
      };
    } else {
      updateMetrics(false);
      return {
        statusCode: 400,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify({ error: 'Failed to add subnet' }))
      };
    }
    
  } catch (error) {
    console.error(`[RelayServer] ========================================`);
    console.error(`[RelayServer] AUTHORIZE ERROR`);
    console.error(`[RelayServer] Error:`, error.message);
    console.error(`[RelayServer] ========================================`);
    
    updateMetrics(false);
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: Buffer.from(JSON.stringify({ error: error.message }))
    };
  }
});

  // Disconnect from relay
  protocol.handle('/relay/:identifier/disconnect', async (request) => {
    const identifier = request.params.identifier;
    console.log('[RelayServer] Disconnect relay requested for identifier:', identifier);
    
    try {
        // Resolve public identifier to relay key if needed
        let relayKey = identifier;
        if (identifier.includes(':')) {
            relayKey = await getRelayKeyFromPublicIdentifier(identifier);
            if (!relayKey) {
                console.error(`[RelayServer] No relay found for public identifier: ${identifier}`);
                updateMetrics(false);
                return {
                    statusCode: 404,
                    headers: { 'content-type': 'application/json' },
                    body: Buffer.from(JSON.stringify({ error: 'Relay not found' }))
                };
            }
            console.log(`[RelayServer] Resolved public identifier ${identifier} to relay key ${relayKey.substring(0, 8)}...`);
        }
        
        const result = await disconnectRelayManager(relayKey);
        
        if (result.success) {
            console.log('[RelayServer] Disconnected from relay successfully');
            await updateHealthState();
            
            // Send update to parent
            if (global.sendMessage) {
                const activeRelays = await getActiveRelays();
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
  protocol.handle('/post/relay/:identifier', async (request) => {
    const identifier = request.params.identifier;
    const { message, connectionKey } = JSON.parse(request.body.toString());
    
    console.log(`[RelayServer] Relay message for identifier: ${identifier}, connectionKey: ${connectionKey}`);
    
    try {
      // Extract auth token and subnet hash from request headers
      const authToken = request.headers['x-auth-token'];
      const subnetHash = request.headers['x-subnet-hash'];
      
      console.log(`[RelayServer] Auth token present: ${!!authToken}, Subnet hash present: ${!!subnetHash}`);
      
      // Check if identifier is a public identifier or relay key
      let relayKey = identifier;
      if (identifier.includes(':')) {
        relayKey = await getRelayKeyFromPublicIdentifier(identifier);
        if (!relayKey) {
          console.error(`[RelayServer] No relay found for public identifier: ${identifier}`);
          updateMetrics(false);
          return {
            statusCode: 404,
            headers: { 'content-type': 'application/json' },
            body: Buffer.from(JSON.stringify({ error: 'Relay not found' }))
          };
        }
        console.log(`[RelayServer] Resolved public identifier ${identifier} to relay key ${relayKey.substring(0, 8)}...`);
      }
      
      // Parse the message
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
  
      console.log(`[RelayServer] Processing ${nostrMessage[0]} message`);
  
      // Get auth store and check if relay is protected
      const authStore = getRelayAuthStore();
      const authorizedPubkeys = authStore.getAuthorizedPubkeys(relayKey);
      
      // Get relay profile to check auth configuration
      let profile = await getRelayProfileByKey(relayKey);
      if (!profile && identifier !== relayKey) {
        profile = await getRelayProfileByPublicIdentifier(identifier);
      }
      
      const requiresAuth = authorizedPubkeys.length > 0 || 
                          profile?.auth_config?.requiresAuth || 
                          false;
      
      console.log(`[RelayServer] Relay ${identifier} requires auth: ${requiresAuth}`);
      console.log(`[RelayServer] Authorized pubkeys count: ${authorizedPubkeys.length}`);
  
      // Handle authentication for protected relays
      if (requiresAuth) {
        // For REQ (subscription) messages, check if read access requires auth
        if (nostrMessage[0] === 'REQ') {
          // Some relays might allow public read access
          // You can customize this based on your requirements
          if (profile?.auth_config?.publicRead !== true) {
            if (!authToken || !subnetHash) {
              console.warn(`[RelayServer] Missing auth for REQ on protected relay`);
              updateMetrics(false);
              return {
                statusCode: 403,
                headers: { 'content-type': 'application/json' },
                body: Buffer.from(JSON.stringify([
                  ['NOTICE', 'Authentication required for read access']
                ]))
              };
            }
            
            // Verify auth for REQ
            const auth = authStore.verifyAuth(relayKey, authToken, subnetHash);
            if (!auth) {
              console.warn(`[RelayServer] Invalid auth for REQ`);
              updateMetrics(false);
              return {
                statusCode: 403,
                headers: { 'content-type': 'application/json' },
                body: Buffer.from(JSON.stringify([
                  ['NOTICE', 'Invalid authentication']
                ]))
              };
            }
            
            console.log(`[RelayServer] REQ authenticated for ${auth.pubkey.substring(0, 8)}...`);
          }
        }
        
        // For EVENT messages, always require auth
        if (nostrMessage[0] === 'EVENT') {
          const event = nostrMessage.length === 2 ? nostrMessage[1] : nostrMessage[2];
          
          if (!authToken || !subnetHash) {
            console.warn(`[RelayServer] Missing auth token or subnet hash for EVENT`);
            updateMetrics(false);
            
            // Return proper NOSTR OK response with auth error
            const okResponse = ['OK', event?.id || '', false, 'error: authentication required'];
            return {
              statusCode: 200, // Still 200 because it's a valid NOSTR response
              headers: { 'content-type': 'application/json' },
              body: Buffer.from(JSON.stringify(okResponse))
            };
          }
          
          // Verify the auth
          const auth = authStore.verifyAuth(relayKey, authToken, subnetHash);
          if (!auth) {
            console.warn(`[RelayServer] Invalid auth token or subnet`);
            updateMetrics(false);
            
            const okResponse = ['OK', event?.id || '', false, 'error: invalid authentication'];
            return {
              statusCode: 200,
              headers: { 'content-type': 'application/json' },
              body: Buffer.from(JSON.stringify(okResponse))
            };
          }
          
          // Check if the event pubkey matches the authenticated user
          if (event && event.pubkey !== auth.pubkey) {
            console.warn(`[RelayServer] Event pubkey ${event.pubkey} doesn't match auth pubkey ${auth.pubkey}`);
            updateMetrics(false);
            
            const okResponse = ['OK', event.id, false, 'error: pubkey mismatch - event must be signed by authenticated user'];
            return {
              statusCode: 200,
              headers: { 'content-type': 'application/json' },
              body: Buffer.from(JSON.stringify(okResponse))
            };
          }
          
          // Get current member list to verify membership
          const members = await getRelayMembers(relayKey);
          if (!members.includes(auth.pubkey)) {
            console.warn(`[RelayServer] Authenticated pubkey ${auth.pubkey} is not a member`);
            updateMetrics(false);
            
            const okResponse = ['OK', event.id, false, 'error: not a member of this relay'];
            return {
              statusCode: 200,
              headers: { 'content-type': 'application/json' },
              body: Buffer.from(JSON.stringify(okResponse))
            };
          }
          
          console.log(`[RelayServer] EVENT authenticated and authorized for ${auth.pubkey.substring(0, 8)}...`);
          
          // Update last used timestamp
          auth.lastUsed = Date.now();
        }
      } else {
        // For non-protected relays, still check member list for EVENT messages
        if (nostrMessage[0] === 'EVENT') {
          const event = nostrMessage.length === 2 ? nostrMessage[1] : nostrMessage[2];
          const members = await getRelayMembers(relayKey);
          
          // If relay has members defined, check membership
          if (members.length > 0 && event && !members.includes(event.pubkey)) {
            console.warn(`[RelayServer] Non-member ${event.pubkey} attempting to publish to relay with member list`);
            updateMetrics(false);
            
            const okResponse = ['OK', event.id, false, 'error: not a member of this relay'];
            return {
              statusCode: 200,
              headers: { 'content-type': 'application/json' },
              body: Buffer.from(JSON.stringify(okResponse))
            };
          }
        }
      }
      
      // Process the message through relay manager
      const responses = [];
      const sendResponse = (response) => {
        console.log(`[RelayServer] Queueing response for relay ${relayKey}:`, 
          Array.isArray(response) ? `${response[0]} message` : 'unknown response');
        responses.push(response);
      };
      
      await handleRelayMessage(relayKey, nostrMessage, sendResponse, connectionKey);
      
      console.log(`[RelayServer] Handled message, ${responses.length} responses queued`);
      
      // Format responses for return
      const responseBody = responses.length > 0 
        ? responses.map(r => JSON.stringify(r)).join('\n')
        : '';
      
      updateMetrics(true);
      return {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(responseBody)
      };
      
    } catch (error) {
      console.error(`[RelayServer] Error processing message:`, error);
      console.error(`[RelayServer] Stack trace:`, error.stack);
      updateMetrics(false);
      
      // Return NOTICE with error
      return {
        statusCode: 200, // Still 200 for valid NOSTR error response
        headers: { 'content-type': 'application/json' },
        body: Buffer.from(JSON.stringify([
          ['NOTICE', `Error: ${error.message}`]
        ]))
      };
    }
  });
  
  // Handle relay subscriptions (from gateway)
  protocol.handle('/get/relay/:identifier/:connectionKey', async (request) => {
    const identifier = request.params.identifier;
    const connectionKey = request.params.connectionKey;
    
    console.log(`[RelayServer] Checking subscriptions for identifier: ${identifier}, connectionKey: ${connectionKey}`);
    
    try {
        // Resolve public identifier to relay key if needed
        let relayKey = identifier;
        if (identifier.includes(':')) {
            relayKey = await getRelayKeyFromPublicIdentifier(identifier);
            if (!relayKey) {
                console.error(`[RelayServer] No relay found for public identifier: ${identifier}`);
                updateMetrics(false);
                return {
                    statusCode: 404,
                    headers: { 'content-type': 'application/json' },
                    body: Buffer.from(JSON.stringify(['NOTICE', 'Relay not found']))
                };
            }
            console.log(`[RelayServer] Resolved public identifier ${identifier} to relay key ${relayKey.substring(0, 8)}...`);
        }
        
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

// Helper function to publish member add event (kind 9000)
async function publishMemberAddEvent(identifier, pubkey, token, subnetHash) {
  try {
    console.log(`[RelayServer] Publishing kind 9000 event for ${pubkey.substring(0, 8)}...`);
    
    // Create the event
    const event = {
      kind: 9000,
      content: `Adding user ${pubkey} with auth token`,
      created_at: Math.floor(Date.now() / 1000),
      tags: [
        ['h', identifier],
        ['p', pubkey, 'member', token, subnetHash]
      ],
      pubkey: config.nostr_pubkey_hex
    };
    
    // Sign the event
    const eventId = await getEventHash(event);
    event.id = eventId;
    
    const signature = await signEvent(event, config.nostr_nsec_hex);
    event.sig = signature;
    
    // Publish to the relay
    await publishEventToRelay(identifier, event);
    
    console.log(`[RelayServer] Published kind 9000 event: ${event.id.substring(0, 8)}...`);
    
  } catch (error) {
    console.error(`[RelayServer] Error publishing member add event:`, error);
  }
}

async function isRelayAuthProtected(identifier) {
  try {
    // Check auth store first
    const authStore = getRelayAuthStore();
    let relayKey = identifier;
    
    if (identifier.includes(':')) {
      relayKey = await getRelayKeyFromPublicIdentifier(identifier);
    }
    
    const authorizedPubkeys = authStore.getAuthorizedPubkeys(relayKey);
    if (authorizedPubkeys.length > 0) {
      return true;
    }
    
    // Check profile configuration
    let profile = await getRelayProfileByKey(relayKey);
    if (!profile) {
      profile = await getRelayProfileByPublicIdentifier(identifier);
    }
    
    return profile?.auth_config?.requiresAuth || false;
  } catch (error) {
    console.error(`[RelayServer] Error checking auth status:`, error);
    return false;
  }
}

// Helper function to get event hash
async function getEventHash(event) {
  const serialized = JSON.stringify([
    0,
    event.pubkey,
    event.created_at,
    event.kind,
    event.tags,
    event.content
  ]);
  
  const hash = crypto.createHash('sha256').update(serialized).digest();
  return Buffer.from(hash).toString('hex');
}

// Helper function to sign event
async function signEvent(event, privateKey) {
  const { nobleSecp256k1 } = await import('./pure-secp256k1-bare.js');
  
  const signature = await nobleSecp256k1.schnorr.sign(event.id, privateKey);
  return Buffer.from(signature).toString('hex');
}

// Helper function to publish event to relay
async function publishEventToRelay(identifier, event) {
  try {
    console.log(`[RelayServer] Publishing event to relay ${identifier}:`, event);
    
    // Resolve public identifier to relay key if needed
    let relayKey = identifier;
    if (identifier.includes(':')) {
      relayKey = await getRelayKeyFromPublicIdentifier(identifier);
      if (!relayKey) {
        throw new Error(`No relay found for identifier: ${identifier}`);
      }
    }
    
    // Get the relay manager from activeRelays (imported from adapter)
    const { activeRelays } = await import('./hypertuna-relay-manager-adapter.mjs');
    const relayManager = activeRelays.get(relayKey);
    
    if (!relayManager) {
      throw new Error(`Relay manager not found for key: ${relayKey}`);
    }
    
    // Publish the event
    const result = await relayManager.publishEvent(event);
    console.log(`[RelayServer] Event published successfully:`, result);
    
    return result;
  } catch (error) {
    console.error(`[RelayServer] Error publishing event to relay:`, error);
    throw error;
  }
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
      const activeRelays = await getActiveRelays();
      const profiles = await getRelayProfiles();
      const publicKey = config.swarmPublicKey;
      
      // Build relay list with public identifiers
      const relayList = [];
      for (const relay of activeRelays) {
          const profile = profiles.find(p => p.relay_key === relay.relayKey);
          if (profile) {
              relayList.push({
                  identifier: profile.public_identifier || relay.relayKey,
                  name: profile.name || 'Unnamed Relay',
                  connectionUrl: profile.public_identifier ? 
                      `wss://${config.proxy_server_address}/${profile.public_identifier.replace(':', '/')}` :
                      `wss://${config.proxy_server_address}/${relay.relayKey}`
              });
          }
      }
      
      const registrationData = {
          publicKey,  // Hyperswarm public key for P2P connection
          relays: relayList, // List with public identifiers
          address: `${config.proxy_server_address}:${config.port}`,
          mode: 'hyperswarm',
          timestamp: new Date().toISOString()
      };
      
      if (relayProfileInfo) {
          // If registering a specific relay, include its public identifier
          registrationData.newRelay = {
              identifier: relayProfileInfo.public_identifier || relayProfileInfo.relay_key,
              name: relayProfileInfo.name,
              description: relayProfileInfo.description
          };
      }
      
      console.log('[RelayServer] Sending HTTP registration to gateway');
      console.log('[RelayServer] Registration URL:', `${config.gatewayUrl}/register`);
      console.log('[RelayServer] Registration data:', {
          publicKey: publicKey.substring(0, 8) + '...',
          relayCount: registrationData.relays.length,
          address: registrationData.address,
          hasNewRelay: !!registrationData.newRelay,
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
