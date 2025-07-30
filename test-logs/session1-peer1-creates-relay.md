Pure JavaScript secp256k1 with AES-256-CBC and ECDH loaded successfully
[Worker] Pipe object: exists
[Worker] Connected to parent via pipe
[Worker] Sending message: {"type":"status","message":"Relay worker starting..."}
[Worker] Hypertuna Relay Worker starting...
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: {
  type: 'config',
  data: {
    nostr_pubkey_hex: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
    nostr_nsec_hex: 'cb46096ec24a7d41d3a2dd6b47a5980556b41097231b21a4f2af118b89de53c1',
    nostr_npub: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr',
    nostr_nsec: 'nsec1edrqjmkzff75r5azm4450fvcq4ttgyyhyvdjrf8j4ugchzw720qs62xfrn',
    proxy_privateKey: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
    proxy_publicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
    proxy_seed: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
    swarmPublicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
    proxy_server_address: 'hypertuna.com',
    gatewayUrl: 'https://hypertuna.com',
    registerWithGateway: true,
    registerInterval: 300000,
    apiUrl: 'http://localhost:1945'
  }
}
[Worker] Stored parent config: {
  nostr_pubkey_hex: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
  nostr_nsec_hex: 'cb46096ec24a7d41d3a2dd6b47a5980556b41097231b21a4f2af118b89de53c1',
  nostr_npub: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr',
  nostr_nsec: 'nsec1edrqjmkzff75r5azm4450fvcq4ttgyyhyvdjrf8j4ugchzw720qs62xfrn',
  proxy_privateKey: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
  proxy_publicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
  proxy_seed: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
  swarmPublicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
  proxy_server_address: 'hypertuna.com',
  gatewayUrl: 'https://hypertuna.com',
  registerWithGateway: true,
  registerInterval: 300000,
  apiUrl: 'http://localhost:1945'
}
[Worker] Loaded existing config from: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/relay-config.json
[Worker] Using previously received parent config
[Worker] User key: fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273
[Worker] Merged config with user-specific storage: {
  port: 1945,
  nostr_pubkey_hex: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
  nostr_nsec_hex: 'cb46096ec24a7d41d3a2dd6b47a5980556b41097231b21a4f2af118b89de53c1',
  proxy_privateKey: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
  proxy_publicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
  proxy_seed: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
  proxy_server_address: 'hypertuna.com',
  gatewayUrl: 'https://hypertuna.com',
  registerWithGateway: true,
  registerInterval: 300000,
  relays: [],
  storage: '/Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273',
  gatewayPublicKey: null,
  apiUrl: 'http://localhost:1945',
  swarmPublicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
  subnetHash: 'c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c',
  nostr_npub: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr',
  nostr_nsec: 'nsec1edrqjmkzff75r5azm4450fvcq4ttgyyhyvdjrf8j4ugchzw720qs62xfrn',
  userKey: 'fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273'
}
[Worker] Set global user config for profile operations
[ProfileManager] Created relay profiles storage file at /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[Worker] Loaded members for 0 relays
[Worker] Sending message: {"type":"status","message":"Loading relay server...","config":{"port":1945,"proxy_server_address":"hypertuna.com","gatewayUrl":"https://hypertuna.com","registerWithGateway":true}}
[Worker] Importing Hyperswarm relay server module...
Crypto libraries loaded successfully:
[Worker] Initializing relay server...
[RelayServer] ========================================
[RelayServer] Initializing with Hyperswarm support...
[RelayServer] Timestamp: 2025-07-30T04:29:07.995Z
[RelayServer] Configuration: {
  proxy_server_address: 'hypertuna.com',
  gatewayUrl: 'https://hypertuna.com',
  registerWithGateway: true,
  registerInterval: 300000,
  gatewayPublicKey: 'not set',
  storage: '/Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273',
  userKey: 'fa92c28d...'
}
[RelayServer] Config saved to: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-config.json
[RelayServer] ----------------------------------------
[RelayServer] Starting Hyperswarm server...
[RelayServer] Config saved to: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-config.json
[RelayServer] Generated keypair from seed: 7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf
[RelayServer] Hyperswarm Peer Public key: 67a735053324909bc3a88d6ec1079f7024c4e8d31da8856e0ec9ee8726917b73
[RelayServer] Hyperswarm instance created with options: { maxPeers: 64, maxClientConnections: 32, maxServerConnections: 32 }
[RelayServer] Joining swarm with topic: hypertuna-relay-network
[RelayServer] Topic hash: d65146229ec407141842845e8dcbe8d7bef761ae0599ec88b1dcd1756d855d5e
[RelayServer] Waiting for topic announcement...
[Worker] Received from parent: {
  type: 'config',
  data: {
    nostr_pubkey_hex: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
    nostr_nsec_hex: 'cb46096ec24a7d41d3a2dd6b47a5980556b41097231b21a4f2af118b89de53c1',
    nostr_npub: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr',
    nostr_nsec: 'nsec1edrqjmkzff75r5azm4450fvcq4ttgyyhyvdjrf8j4ugchzw720qs62xfrn',
    proxy_privateKey: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
    proxy_publicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
    proxy_seed: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
    swarmPublicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
    proxy_server_address: 'hypertuna.com',
    gatewayUrl: 'https://hypertuna.com',
    registerWithGateway: true,
    registerInterval: 300000,
    apiUrl: 'http://localhost:1945'
  }
}
[Worker] Received configuration: {
  nostr_pubkey_hex: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
  nostr_nsec_hex: 'cb46096ec24a7d41d3a2dd6b47a5980556b41097231b21a4f2af118b89de53c1',
  nostr_npub: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr',
  nostr_nsec: 'nsec1edrqjmkzff75r5azm4450fvcq4ttgyyhyvdjrf8j4ugchzw720qs62xfrn',
  proxy_privateKey: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
  proxy_publicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
  proxy_seed: '7b20cb7f6d195f65eef9bb405ba354a01738059c5768ffa4f4a2fde39f2a85cf',
  swarmPublicKey: 'd66030d0c134a1f64560c6615cca3b428893c5ce6f490b965ac58065ecfdb206',
  proxy_server_address: 'hypertuna.com',
  gatewayUrl: 'https://hypertuna.com',
  registerWithGateway: true,
  registerInterval: 300000,
  apiUrl: 'http://localhost:1945'
}
[RelayServer] Topic fully announced to DHT
[RelayServer] Hyperswarm server started successfully
[RelayServer] Listening for connections...
[RelayServer] ----------------------------------------
[RelayServer] Notifying worker of Hyperswarm status
[Worker] Sending message: {"type":"status","message":"Hyperswarm server connected","swarmKey":"67a735053324909bc3a88d6ec1079f7024c4e8d31da8856e0ec9ee8726917b73"}
[RelayServer] Initializing challenge manager...
[ChallengeManager] Initialized with relay pubkey: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[RelayServer] Auth store initialized
[RelayServer] Starting auto-connection to stored relays...
[RelayAdapter] Starting auto-connection to stored relays for user: fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273
[RelayAdapter] No stored relay profiles found
[Worker] Sending message: {"type":"all-relays-initialized","count":0,"message":"No stored relays to initialize"}
[RelayServer] Auto-connected to 0 relays
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'initializing',
    gatewayStatus: 'disconnected'
  }
}
[RelayServer] Starting health monitoring (30s interval)
[RelayServer] Gateway registration is ENABLED
[RelayServer] Cannot process pending registrations - no gateway connection
[RelayServer] Initialization complete
[RelayServer] ========================================
[Worker] Relay server started successfully with Hyperswarm
[Worker] Sending message: {"type":"status","message":"Relay server running with Hyperswarm","initialized":true,"config":{"port":1945,"proxy_server_address":"hypertuna.com","gatewayUrl":"https://hypertuna.com","registerWithGateway":true,"relayCount":0,"mode":"hyperswarm"}}
[Worker] Sent status message with initialized=true
[RelayServer] Performing initial HTTP registration with gateway...
[RelayServer] ========================================
[RelayServer] GATEWAY REGISTRATION ATTEMPT (HTTP)
[RelayServer] Timestamp: 2025-07-30T04:29:12.210Z
[RelayServer] Sending HTTP registration to gateway
[RelayServer] Registration URL: https://hypertuna.com/register
[RelayServer] Registration data: {
  publicKey: '67a73505...',
  relayCount: 0,
  address: 'hypertuna.com:1945',
  hasNewRelay: false,
  mode: 'hyperswarm'
}
[RelayServer] Gateway HTTP registration response: {
  message: 'Registered successfully (Hyperswarm mode)',
  driveKey: '6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274',
  status: 'active',
  mode: 'hyperswarm',
  timestamp: '2025-07-30T04:29:12.364Z'
}
[RelayServer] Registration SUCCESSFUL
[RelayServer] Notifying worker of successful registration
[Worker] Sending message: {"type":"gateway-registered","data":{"message":"Registered successfully (Hyperswarm mode)","driveKey":"6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274","status":"active","mode":"hyperswarm","timestamp":"2025-07-30T04:29:12.364Z"}}
[RelayServer] ========================================
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] ========================================
[RelayServer] NEW PEER CONNECTION RECEIVED
[RelayServer] Peer public key: 2ea4b330b48474198b093c5a51c4abeb2475deef0344f72361205472198e21d6
[RelayServer] Connection time: 2025-07-30T04:29:14.661Z
[RelayServer] Total connected peers: 1
[RelayServer] Setting up protocol for peer: 2ea4b330b48474198b093c5a51c4abeb2475deef0344f72361205472198e21d6
[RelayServer] Setting up protocol handlers
[RelayServer] Protocol handlers setup complete
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849755210,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Channel opened with handshake: {
  version: '2.0',
  isServer: false,
  isGateway: true,
  capabilities: [ 'http', 'websocket', 'health' ]
}
[RelayServer] ----------------------------------------
[RelayServer] PROTOCOL OPENED
[RelayServer] Peer: 2ea4b330...
[RelayServer] Handshake received: {
  "version": "2.0",
  "isServer": false,
  "isGateway": true,
  "capabilities": [
    "http",
    "websocket",
    "health"
  ]
}
[RelayServer] >>> GATEWAY IDENTIFIED FROM HANDSHAKE <<<
[RelayServer] ========================================
[RelayServer] GATEWAY CONNECTION ESTABLISHED
[RelayServer] Gateway public key: 2ea4b330b48474198b093c5a51c4abeb2475deef0344f72361205472198e21d6
[RelayServer] Connection time: 2025-07-30T04:29:15.374Z
[RelayServer] ========================================
[RelayServer] Notifying worker of gateway connection
[Worker] Sending message: {"type":"gateway-connected","gatewayPublicKey":"2ea4b330b48474198b093c5a51c4abeb2475deef0344f72361205472198e21d6"}
[RelayServer] No pending registrations to process
[RelayServer] Starting keepalive for 2ea4b330...
[RelayServer] ----------------------------------------
[RelayProtocol] Received request: POST /identify-gateway
[RelayServer] Generic request received: POST /identify-gateway
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849760211,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849765211,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849770212,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849775212,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753849780210,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849780213,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849785214,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849790216,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849795217,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849800218,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849805219,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753849810209,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849810220,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849815221,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849820224,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849825225,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849830226,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849835227,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753849840211,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849840228,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849845229,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849850229,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849855229,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849860229,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849865229,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753849870213,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849870229,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849875230,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849880231,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849885232,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849890232,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849895233,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753849900214,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849900234,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849905235,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849910236,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849915238,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849920239,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849925240,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753849930215,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849930242,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849935243,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849940244,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849945245,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849950245,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849955247,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753849960216,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849960247,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849965249,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849970250,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849975250,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849980251,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849985251,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753849990217,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849990251,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753849995251,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850000254,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850005255,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850010256,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850015257,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753850020219,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850020257,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850025258,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850030259,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850035260,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850040260,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850045260,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[RelayServer] Periodic registration check...
[RelayServer] Gateway connected, performing registration
[RelayServer] ========================================
[RelayServer] GATEWAY REGISTRATION ATTEMPT (HTTP)
[RelayServer] Timestamp: 2025-07-30T04:34:10.210Z
[RelayServer] Sending HTTP registration to gateway
[RelayServer] Registration URL: https://hypertuna.com/register
[RelayServer] Registration data: {
  publicKey: '67a73505...',
  relayCount: 0,
  address: 'hypertuna.com:1945',
  hasNewRelay: false,
  mode: 'hyperswarm'
}
[RelayServer] Health state updated: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'ready',
  activeRelays: 0,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753850050220,"status":"ready","activeRelaysCount":0,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850050262,"status":"running","mode":"hyperswarm"}
[RelayServer] Gateway HTTP registration response: {
  message: 'Registered successfully (Hyperswarm mode)',
  driveKey: '6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274',
  status: 'active',
  mode: 'hyperswarm',
  timestamp: '2025-07-30T04:34:10.317Z'
}
[RelayServer] Registration SUCCESSFUL
[RelayServer] Notifying worker of successful registration
[Worker] Sending message: {"type":"gateway-registered","data":{"message":"Registered successfully (Hyperswarm mode)","driveKey":"6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274","status":"active","mode":"hyperswarm","timestamp":"2025-07-30T04:34:10.317Z"}}
[RelayServer] ========================================
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
[Worker] Received from parent: {
  type: 'create-relay',
  data: {
    name: 'el sans serifo',
    description: 'no me gusta los times new romanos',
    isPublic: true,
    isOpen: true,
    fileSharing: false
  }
}
[Worker] Create relay requested: {
  name: 'el sans serifo',
  description: 'no me gusta los times new romanos',
  isPublic: true,
  isOpen: true,
  fileSharing: false
}
[RelayServer] Creating relay via adapter: {
  name: 'el sans serifo',
  description: 'no me gusta los times new romanos',
  isPublic: true,
  isOpen: true,
  fileSharing: false
}
Initializing relay with bootstrap: null
Acquired lock for storage directory: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relays/relay-1753850054979
[2025-07-30T04:34:15.010Z] NostrRelay: Initialized
Hyperbee view is ready
Relay public key: 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
Joining swarm with discovery key: 17e538e033a891d1d57f4c7f94267ed994afa9e81d67d57908fc1837df29d440
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850055261,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Sending message: {"type":"relay-update","relays":[]}
Initializing relay
Initialized event (before publishing): {
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753850057,
  "tags": [],
  "pubkey": "50e96b029d6008fad2a391a129ea5d1a8d09e189e1a330a79790dd4902b1e37b",
  "id": "5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6",
  "sig": "c774ef56310a616c1eaeb2b3c087bae3c78b4364001858431c34bd184e1662cb63fd1a571fd077a61190891de02c94ae540edc77b07ebcdc0f1cac64628eac22"
}
Serialized event: [0,"50e96b029d6008fad2a391a129ea5d1a8d09e189e1a330a79790dd4902b1e37b",1753850057,0,[],"Relay initialized"]
Event hash: 5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6
[2025-07-30T04:34:17.827Z] publishEvent: Attempting to publish event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753850057,
  "tags": [],
  "pubkey": "50e96b029d6008fad2a391a129ea5d1a8d09e189e1a330a79790dd4902b1e37b",
  "id": "5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6",
  "sig": "c774ef56310a616c1eaeb2b3c087bae3c78b4364001858431c34bd184e1662cb63fd1a571fd077a61190891de02c94ae540edc77b07ebcdc0f1cac64628eac22"
}
Verifying Event Signature ===
Serialized Event: [0,"50e96b029d6008fad2a391a129ea5d1a8d09e189e1a330a79790dd4902b1e37b",1753850057,0,[],"Relay initialized"]
Event Hash: 5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6
Verification Details:
Public Key: 50e96b029d6008fad2a391a129ea5d1a8d09e189e1a330a79790dd4902b1e37b
Signature: c774ef56310a616c1eaeb2b3c087bae3c78b4364001858431c34bd184e1662cb63fd1a571fd077a61190891de02c94ae540edc77b07ebcdc0f1cac64628eac22
Verification Result: true
[2025-07-30T04:34:17.847Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:17.847Z] publishEvent: Publishing event with ID: 5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6
[2025-07-30T04:34:17.849Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:17.849Z] validateEvent: Validating event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753850057,
  "tags": [],
  "pubkey": "50e96b029d6008fad2a391a129ea5d1a8d09e189e1a330a79790dd4902b1e37b",
  "id": "5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6",
  "sig": "c774ef56310a616c1eaeb2b3c087bae3c78b4364001858431c34bd184e1662cb63fd1a571fd077a61190891de02c94ae540edc77b07ebcdc0f1cac64628eac22"
}
[2025-07-30T04:34:17.849Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:17.849Z] NostrRelay.apply: Storing event with ID: 5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6
[2025-07-30T04:34:17.849Z] NostrRelay.apply: Storing kind index for event 5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6 under key: kind:00000:created_at:1753850057:id:5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6
[2025-07-30T04:34:17.849Z] NostrRelay.apply: Storing pubkey index for event 5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6 under key: pubkey:50e96b029d6008fad2a391a129ea5d1a8d09e189e1a330a79790dd4902b1e37b:created_at:1753850057:id:5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6
[2025-07-30T04:34:17.849Z] NostrRelay.apply: Storing created_at index for event 5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6 under key: created_at:1753850057:id:5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6
[2025-07-30T04:34:17.849Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 5
[2025-07-30T04:34:17.859Z] publishEvent: Event published successfully: 5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6
Relay initialized with event ID: [
  'OK',
  '5cf2f100e3b178710365a86b45cffbc923824654f8c0822d7bcbce7ce7090aa6',
  true,
  ''
]
Released lock for storage directory: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relays/relay-1753850054979
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: { name: 'el sans serifo', auto_connect: true, updated_at: undefined }
[ProfileManager] Loaded 0 existing profiles
[ProfileManager] Adding new profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] Created relay: 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] Connect at: wss://hypertuna.com/5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] createRelay() -> Sending relay-initialized for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd with URL wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo
[Worker] Sending message: {"type":"relay-initialized","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","gatewayUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo","name":"el sans serifo","isNew":true,"timestamp":"2025-07-30T04:34:17.860Z"}
[RelayServer] Health state updated: {
  status: 'healthy',
  activeRelays: 1,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayAuthStore] Added auth for 3b81e5a0... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:34:17.860Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 3b81e5a0... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 3b81e5a0... on relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Publishing kind 9000 event for 3b81e5a0...
[RelayServer] Publishing event to relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo: {
  kind: 9000,
  content: 'Adding user 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182 with auth token',
  created_at: 1753850057,
  tags: [ [Array], [Array] ],
  pubkey: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
  id: '29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee',
  sig: 'b51ff5c20d81c873688864093f070f35461a0279427326addd12dd4c0e61306846a9e2939f3137ea45c670abbb6c626bda8d442454f90a2bad7295c661e2e673'
}
[2025-07-30T04:34:17.908Z] publishEvent: Attempting to publish event:
{
  "kind": 9000,
  "content": "Adding user 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182 with auth token",
  "created_at": 1753850057,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin",
      "0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76",
      "c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c"
    ]
  ],
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee",
  "sig": "b51ff5c20d81c873688864093f070f35461a0279427326addd12dd4c0e61306846a9e2939f3137ea45c670abbb6c626bda8d442454f90a2bad7295c661e2e673"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850057,9000,[["h","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["p","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","admin","0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c"]],"Adding user 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182 with auth token"]
Event Hash: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: b51ff5c20d81c873688864093f070f35461a0279427326addd12dd4c0e61306846a9e2939f3137ea45c670abbb6c626bda8d442454f90a2bad7295c661e2e673
Verification Result: true
[2025-07-30T04:34:17.928Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:17.928Z] publishEvent: Publishing event with ID: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.928Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:17.928Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182 with auth token",
  "created_at": 1753850057,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin",
      "0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76",
      "c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c"
    ]
  ],
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee",
  "sig": "b51ff5c20d81c873688864093f070f35461a0279427326addd12dd4c0e61306846a9e2939f3137ea45c670abbb6c626bda8d442454f90a2bad7295c661e2e673"
}
[2025-07-30T04:34:17.928Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:17.928Z] NostrRelay.apply: Storing event with ID: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing kind index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: kind:09000:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing pubkey index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing created_at index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing tag index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing tag index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182 with auth token",
  "created_at": 1753850057,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin",
      "0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76",
      "c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c"
    ]
  ],
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee",
  "sig": "b51ff5c20d81c873688864093f070f35461a0279427326addd12dd4c0e61306846a9e2939f3137ea45c670abbb6c626bda8d442454f90a2bad7295c661e2e673"
}
[2025-07-30T04:34:17.929Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing event with ID: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing kind index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: kind:09000:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing pubkey index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing created_at index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing tag index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing tag index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182 with auth token",
  "created_at": 1753850057,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin",
      "0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76",
      "c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c"
    ]
  ],
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee",
  "sig": "b51ff5c20d81c873688864093f070f35461a0279427326addd12dd4c0e61306846a9e2939f3137ea45c670abbb6c626bda8d442454f90a2bad7295c661e2e673"
}
[2025-07-30T04:34:17.929Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing event with ID: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing kind index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: kind:09000:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing pubkey index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing created_at index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing tag index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Storing tag index for event 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850057:id:29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:17.929Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 23
[2025-07-30T04:34:17.931Z] publishEvent: Event published successfully: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[RelayServer] Event published successfully: [
  'OK',
  '29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee',
  true,
  ''
]
[RelayServer] Published kind 9000 event: 29582b4c...
[RelayServer] Auto-authorized creator 3b81e5a0...
[RelayServer] ========================================
[RelayServer] GATEWAY REGISTRATION ATTEMPT (HTTP)
[RelayServer] Timestamp: 2025-07-30T04:34:17.932Z
[RelayServer] Sending HTTP registration to gateway
[RelayServer] Registration URL: https://hypertuna.com/register
[RelayServer] Registration data: {
  publicKey: '67a73505...',
  relayCount: 1,
  address: 'hypertuna.com:1945',
  hasNewRelay: true,
  mode: 'hyperswarm'
}
[RelayServer] Gateway HTTP registration response: {
  message: 'Registered successfully (Hyperswarm mode)',
  driveKey: '6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274',
  status: 'active',
  mode: 'hyperswarm',
  timestamp: '2025-07-30T04:34:18.018Z'
}
[RelayServer] Registration SUCCESSFUL
[RelayServer] Notifying worker of successful registration
[Worker] Sending message: {"type":"gateway-registered","data":{"message":"Registered successfully (Hyperswarm mode)","driveKey":"6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274","status":"active","mode":"hyperswarm","timestamp":"2025-07-30T04:34:18.018Z"}}
[RelayServer] ========================================
[Worker] Sending message: {"type":"relay-created","data":{"success":true,"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo","authToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","relayUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","profile":{"name":"el sans serifo","description":"no me gusta los times new romanos","nostr_pubkey_hex":"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","admin_pubkey":"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"],"member_adds":[{"pubkey":"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","ts":1753850057859}],"member_removes":[],"relay_nostr_id":null,"relay_key":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","public_identifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","relay_storage":"/Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relays/relay-1753850054979","created_at":"2025-07-30T04:34:17.859Z","auto_connect":true,"is_active":true,"isPublic":true,"isOpen":true,"fileSharing":false,"auth_config":{"requiresAuth":true,"tokenProtected":true,"authorizedUsers":[{"pubkey":"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","token":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","ts":1753850057860}],"auth_adds":[{"pubkey":"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","token":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","ts":1753850057860}],"auth_removes":[]},"auth_tokens":{},"updated_at":"2025-07-30T04:34:17.860Z"},"storageDir":"/Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relays/relay-1753850054979","gatewayRegistration":"success","members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}}
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:34:19.399Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.399Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.399Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.399Z] getSubscriptions: No subscriptions found for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.399Z] handleSubscription: No active subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[RelayServer] Found 0 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:34:19.445Z] handleMessage: Received message:
[
  "REQ",
  "sub12",
  {
    "kinds": [
      39000
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:34:19.445Z] handleMessage: Processing REQ message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.445Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.445Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.445Z] getSubscriptions: No subscriptions found for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.445Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub12",
  {
    "kinds": [
      39000
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:34:19.445Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39000
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:34:19.445Z] validateFilters: All filters are valid
[2025-07-30T04:34:19.445Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:34:19.445Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:19.445Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:34:19.445Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.445Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 24
[2025-07-30T04:34:19.448Z] publishSubscription: Published subscription for connection: ededb4f3552662d898979b34ba408d3b, subscriptionId: sub12
[2025-07-30T04:34:19.448Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub12 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:34:19.489Z] handleMessage: Received message:
[
  "REQ",
  "sub13",
  {
    "kinds": [
      1
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:34:19.489Z] handleMessage: Processing REQ message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.489Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.489Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.489Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":23,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:34:19.489Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub13",
  {
    "kinds": [
      1
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:34:19.489Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      1
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:34:19.489Z] validateFilters: All filters are valid
[2025-07-30T04:34:19.489Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:34:19.489Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:19.489Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:34:19.489Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.489Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 25
[2025-07-30T04:34:19.491Z] publishSubscription: Published subscription for connection: ededb4f3552662d898979b34ba408d3b, subscriptionId: sub13
[2025-07-30T04:34:19.491Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub13 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:34:19.780Z] handleMessage: Received message:
[
  "REQ",
  "sub14",
  {
    "kinds": [
      39002,
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      9000,
      9001,
      9021
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:34:19.780Z] handleMessage: Processing REQ message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.780Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.780Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.781Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":24,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:34:19.781Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub14",
  {
    "kinds": [
      39002,
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      9000,
      9001,
      9021
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:34:19.781Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39002,
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      9000,
      9001,
      9021
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:34:19.781Z] validateFilters: All filters are valid
[2025-07-30T04:34:19.781Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:34:19.781Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:19.781Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:34:19.781Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.781Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 26
[2025-07-30T04:34:19.796Z] publishSubscription: Published subscription for connection: ededb4f3552662d898979b34ba408d3b, subscriptionId: sub14
[2025-07-30T04:34:19.796Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub14 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:34:19.835Z] handleMessage: Received message:
[
  "EVENT",
  {
    "kind": 9007,
    "content": "Created group: el sans serifo",
    "tags": [
      [
        "h",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "name",
        "el sans serifo"
      ],
      [
        "about",
        "no me gusta los times new romanos"
      ],
      [
        "hypertuna",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "i",
        "hypertuna:relay"
      ],
      [
        "public"
      ],
      [
        "open"
      ],
      [
        "file-sharing-off"
      ]
    ],
    "created_at": 1753850059,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525",
    "sig": "d67b607eb9fe528d74dcc49568ceaa0b299679321483f276271200ac674e8351086cb26bc28d5dbd7ff1c6b54856951e44ba7c55fc2126dfea5ca2107a5d11a3"
  }
]
[2025-07-30T04:34:19.835Z] handleMessage: Processing EVENT message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.835Z] publishEvent: Attempting to publish event:
{
  "kind": 9007,
  "content": "Created group: el sans serifo",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "name",
      "el sans serifo"
    ],
    [
      "about",
      "no me gusta los times new romanos"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "public"
    ],
    [
      "open"
    ],
    [
      "file-sharing-off"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525",
  "sig": "d67b607eb9fe528d74dcc49568ceaa0b299679321483f276271200ac674e8351086cb26bc28d5dbd7ff1c6b54856951e44ba7c55fc2126dfea5ca2107a5d11a3"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850059,9007,[["h","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["name","el sans serifo"],["about","no me gusta los times new romanos"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["i","hypertuna:relay"],["public"],["open"],["file-sharing-off"]],"Created group: el sans serifo"]
Event Hash: 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: d67b607eb9fe528d74dcc49568ceaa0b299679321483f276271200ac674e8351086cb26bc28d5dbd7ff1c6b54856951e44ba7c55fc2126dfea5ca2107a5d11a3
Verification Result: true
[2025-07-30T04:34:19.854Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:19.854Z] publishEvent: Publishing event with ID: 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.854Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:19.854Z] validateEvent: Validating event:
{
  "kind": 9007,
  "content": "Created group: el sans serifo",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "name",
      "el sans serifo"
    ],
    [
      "about",
      "no me gusta los times new romanos"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "public"
    ],
    [
      "open"
    ],
    [
      "file-sharing-off"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525",
  "sig": "d67b607eb9fe528d74dcc49568ceaa0b299679321483f276271200ac674e8351086cb26bc28d5dbd7ff1c6b54856951e44ba7c55fc2126dfea5ca2107a5d11a3"
}
[2025-07-30T04:34:19.854Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:19.854Z] NostrRelay.apply: Storing event with ID: 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing kind index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: kind:09007:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing pubkey index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing created_at index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing tag index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing tag index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] validateEvent: Validating event:
{
  "kind": 9007,
  "content": "Created group: el sans serifo",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "name",
      "el sans serifo"
    ],
    [
      "about",
      "no me gusta los times new romanos"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "public"
    ],
    [
      "open"
    ],
    [
      "file-sharing-off"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525",
  "sig": "d67b607eb9fe528d74dcc49568ceaa0b299679321483f276271200ac674e8351086cb26bc28d5dbd7ff1c6b54856951e44ba7c55fc2126dfea5ca2107a5d11a3"
}
[2025-07-30T04:34:19.855Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing event with ID: 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing kind index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: kind:09007:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing pubkey index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing created_at index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing tag index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing tag index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] validateEvent: Validating event:
{
  "kind": 9007,
  "content": "Created group: el sans serifo",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "name",
      "el sans serifo"
    ],
    [
      "about",
      "no me gusta los times new romanos"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "public"
    ],
    [
      "open"
    ],
    [
      "file-sharing-off"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525",
  "sig": "d67b607eb9fe528d74dcc49568ceaa0b299679321483f276271200ac674e8351086cb26bc28d5dbd7ff1c6b54856951e44ba7c55fc2126dfea5ca2107a5d11a3"
}
[2025-07-30T04:34:19.855Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing event with ID: 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing kind index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: kind:09007:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing pubkey index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing created_at index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing tag index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Storing tag index for event 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525 under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.855Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 44
[2025-07-30T04:34:19.867Z] publishEvent: Event published successfully: 407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525
[2025-07-30T04:34:19.868Z] handleMessage: EVENT publish result:
[
  "OK",
  "407580099ab94932c3a175a5593e625bbcc66c0c36322dbdba5c0621ea4de525",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:34:19.922Z] handleMessage: Received message:
[
  "EVENT",
  {
    "kind": 39000,
    "content": "Group metadata for: el sans serifo",
    "tags": [
      [
        "d",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "name",
        "el sans serifo"
      ],
      [
        "about",
        "no me gusta los times new romanos"
      ],
      [
        "hypertuna",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "i",
        "hypertuna:relay"
      ],
      [
        "public"
      ],
      [
        "open"
      ],
      [
        "file-sharing-off"
      ]
    ],
    "created_at": 1753850059,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d",
    "sig": "775a0810f9c0917db9f7c736f828c6489fbef54bac16a92e2573550c6cf1bbb7c83c303ee54b20e250ef0e6a9741e9a674f27e50c468199abc78af3e7acd42b7"
  }
]
[2025-07-30T04:34:19.922Z] handleMessage: Processing EVENT message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.922Z] publishEvent: Attempting to publish event:
{
  "kind": 39000,
  "content": "Group metadata for: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "name",
      "el sans serifo"
    ],
    [
      "about",
      "no me gusta los times new romanos"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "public"
    ],
    [
      "open"
    ],
    [
      "file-sharing-off"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d",
  "sig": "775a0810f9c0917db9f7c736f828c6489fbef54bac16a92e2573550c6cf1bbb7c83c303ee54b20e250ef0e6a9741e9a674f27e50c468199abc78af3e7acd42b7"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850059,39000,[["d","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["name","el sans serifo"],["about","no me gusta los times new romanos"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["i","hypertuna:relay"],["public"],["open"],["file-sharing-off"]],"Group metadata for: el sans serifo"]
Event Hash: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: 775a0810f9c0917db9f7c736f828c6489fbef54bac16a92e2573550c6cf1bbb7c83c303ee54b20e250ef0e6a9741e9a674f27e50c468199abc78af3e7acd42b7
Verification Result: true
[2025-07-30T04:34:19.942Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:19.942Z] publishEvent: Publishing event with ID: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.942Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:19.942Z] validateEvent: Validating event:
{
  "kind": 39000,
  "content": "Group metadata for: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "name",
      "el sans serifo"
    ],
    [
      "about",
      "no me gusta los times new romanos"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "public"
    ],
    [
      "open"
    ],
    [
      "file-sharing-off"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d",
  "sig": "775a0810f9c0917db9f7c736f828c6489fbef54bac16a92e2573550c6cf1bbb7c83c303ee54b20e250ef0e6a9741e9a674f27e50c468199abc78af3e7acd42b7"
}
[2025-07-30T04:34:19.942Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:19.942Z] NostrRelay.apply: Storing event with ID: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing kind index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: kind:39000:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing pubkey index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing created_at index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing tag index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing tag index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] validateEvent: Validating event:
{
  "kind": 39000,
  "content": "Group metadata for: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "name",
      "el sans serifo"
    ],
    [
      "about",
      "no me gusta los times new romanos"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "public"
    ],
    [
      "open"
    ],
    [
      "file-sharing-off"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d",
  "sig": "775a0810f9c0917db9f7c736f828c6489fbef54bac16a92e2573550c6cf1bbb7c83c303ee54b20e250ef0e6a9741e9a674f27e50c468199abc78af3e7acd42b7"
}
[2025-07-30T04:34:19.943Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing event with ID: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing kind index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: kind:39000:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing pubkey index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing created_at index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing tag index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing tag index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] validateEvent: Validating event:
{
  "kind": 39000,
  "content": "Group metadata for: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "name",
      "el sans serifo"
    ],
    [
      "about",
      "no me gusta los times new romanos"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "public"
    ],
    [
      "open"
    ],
    [
      "file-sharing-off"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d",
  "sig": "775a0810f9c0917db9f7c736f828c6489fbef54bac16a92e2573550c6cf1bbb7c83c303ee54b20e250ef0e6a9741e9a674f27e50c468199abc78af3e7acd42b7"
}
[2025-07-30T04:34:19.943Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing event with ID: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing kind index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: kind:39000:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing pubkey index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing created_at index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing tag index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Storing tag index for event 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.943Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 62
[2025-07-30T04:34:19.945Z] publishEvent: Event published successfully: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:19.945Z] handleMessage: EVENT publish result:
[
  "OK",
  "4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:34:19.989Z] handleMessage: Received message:
[
  "EVENT",
  {
    "kind": 30166,
    "content": "Hypertuna relay for group: el sans serifo",
    "tags": [
      [
        "d",
        "wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo"
      ],
      [
        "hypertuna",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "h",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "i",
        "hypertuna:relay"
      ]
    ],
    "created_at": 1753850059,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf",
    "sig": "625799c7c8d7e5007c6f4f10e0e1894e341f24b34db648795011eb60ebf1cd691ae1afc89def7ab37feb5843b0daeb3fc5dfe3be6d9339d75afdadca6dc2438a"
  }
]
[2025-07-30T04:34:19.989Z] handleMessage: Processing EVENT message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:19.989Z] publishEvent: Attempting to publish event:
{
  "kind": 30166,
  "content": "Hypertuna relay for group: el sans serifo",
  "tags": [
    [
      "d",
      "wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf",
  "sig": "625799c7c8d7e5007c6f4f10e0e1894e341f24b34db648795011eb60ebf1cd691ae1afc89def7ab37feb5843b0daeb3fc5dfe3be6d9339d75afdadca6dc2438a"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850059,30166,[["d","wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["h","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["i","hypertuna:relay"]],"Hypertuna relay for group: el sans serifo"]
Event Hash: 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: 625799c7c8d7e5007c6f4f10e0e1894e341f24b34db648795011eb60ebf1cd691ae1afc89def7ab37feb5843b0daeb3fc5dfe3be6d9339d75afdadca6dc2438a
Verification Result: true
[2025-07-30T04:34:20.010Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:20.010Z] publishEvent: Publishing event with ID: 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.010Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:20.010Z] validateEvent: Validating event:
{
  "kind": 30166,
  "content": "Hypertuna relay for group: el sans serifo",
  "tags": [
    [
      "d",
      "wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf",
  "sig": "625799c7c8d7e5007c6f4f10e0e1894e341f24b34db648795011eb60ebf1cd691ae1afc89def7ab37feb5843b0daeb3fc5dfe3be6d9339d75afdadca6dc2438a"
}
[2025-07-30T04:34:20.010Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.010Z] NostrRelay.apply: Storing event with ID: 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.010Z] NostrRelay.apply: Storing kind index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: kind:30166:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing pubkey index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing created_at index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:d:tagValue:wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] validateEvent: Validating event:
{
  "kind": 30166,
  "content": "Hypertuna relay for group: el sans serifo",
  "tags": [
    [
      "d",
      "wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf",
  "sig": "625799c7c8d7e5007c6f4f10e0e1894e341f24b34db648795011eb60ebf1cd691ae1afc89def7ab37feb5843b0daeb3fc5dfe3be6d9339d75afdadca6dc2438a"
}
[2025-07-30T04:34:20.011Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing event with ID: 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing kind index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: kind:30166:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing pubkey index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing created_at index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:d:tagValue:wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] validateEvent: Validating event:
{
  "kind": 30166,
  "content": "Hypertuna relay for group: el sans serifo",
  "tags": [
    [
      "d",
      "wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf",
  "sig": "625799c7c8d7e5007c6f4f10e0e1894e341f24b34db648795011eb60ebf1cd691ae1afc89def7ab37feb5843b0daeb3fc5dfe3be6d9339d75afdadca6dc2438a"
}
[2025-07-30T04:34:20.011Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing event with ID: 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing kind index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: kind:30166:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing pubkey index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing created_at index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:d:tagValue:wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] validateEvent: Validating event:
{
  "kind": 30166,
  "content": "Hypertuna relay for group: el sans serifo",
  "tags": [
    [
      "d",
      "wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ]
  ],
  "created_at": 1753850059,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf",
  "sig": "625799c7c8d7e5007c6f4f10e0e1894e341f24b34db648795011eb60ebf1cd691ae1afc89def7ab37feb5843b0daeb3fc5dfe3be6d9339d75afdadca6dc2438a"
}
[2025-07-30T04:34:20.011Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing event with ID: 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing kind index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: kind:30166:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing pubkey index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing created_at index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:d:tagValue:wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Storing tag index for event 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850059:id:2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.011Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 90
[2025-07-30T04:34:20.013Z] publishEvent: Event published successfully: 2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf
[2025-07-30T04:34:20.014Z] handleMessage: EVENT publish result:
[
  "OK",
  "2fa2191441f4c5cf9d717ec2854b0b3ea911a73402d5f3242a05268bff9c4bcf",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received health check
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:34:20.162Z] handleMessage: Received message:
[
  "EVENT",
  {
    "kind": 39001,
    "content": "Admin list for group: el sans serifo",
    "tags": [
      [
        "d",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "hypertuna",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "p",
        "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
        "admin"
      ]
    ],
    "created_at": 1753850060,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e",
    "sig": "0ad434ce43ea85c47cac08d80c0fd5e4114bd777f1b55beee8d954af661302eff0fa15c3809650a87b7dbce44f0c4a3d442e0d93765cd46283c24650485a8446"
  }
]
[2025-07-30T04:34:20.162Z] handleMessage: Processing EVENT message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:20.162Z] publishEvent: Attempting to publish event:
{
  "kind": 39001,
  "content": "Admin list for group: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin"
    ]
  ],
  "created_at": 1753850060,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e",
  "sig": "0ad434ce43ea85c47cac08d80c0fd5e4114bd777f1b55beee8d954af661302eff0fa15c3809650a87b7dbce44f0c4a3d442e0d93765cd46283c24650485a8446"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850060,39001,[["d","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["p","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","admin"]],"Admin list for group: el sans serifo"]
Event Hash: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: 0ad434ce43ea85c47cac08d80c0fd5e4114bd777f1b55beee8d954af661302eff0fa15c3809650a87b7dbce44f0c4a3d442e0d93765cd46283c24650485a8446
Verification Result: true
[2025-07-30T04:34:20.180Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:20.180Z] publishEvent: Publishing event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.180Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:20.180Z] validateEvent: Validating event:
{
  "kind": 39001,
  "content": "Admin list for group: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin"
    ]
  ],
  "created_at": 1753850060,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e",
  "sig": "0ad434ce43ea85c47cac08d80c0fd5e4114bd777f1b55beee8d954af661302eff0fa15c3809650a87b7dbce44f0c4a3d442e0d93765cd46283c24650485a8446"
}
[2025-07-30T04:34:20.180Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.180Z] NostrRelay.apply: Storing event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.180Z] NostrRelay.apply: Storing kind index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: kind:39001:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.180Z] NostrRelay.apply: Storing pubkey index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.180Z] NostrRelay.apply: Storing created_at index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.180Z] NostrRelay.apply: Storing tag index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.180Z] NostrRelay.apply: Storing tag index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.180Z] validateEvent: Validating event:
{
  "kind": 39001,
  "content": "Admin list for group: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin"
    ]
  ],
  "created_at": 1753850060,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e",
  "sig": "0ad434ce43ea85c47cac08d80c0fd5e4114bd777f1b55beee8d954af661302eff0fa15c3809650a87b7dbce44f0c4a3d442e0d93765cd46283c24650485a8446"
}
[2025-07-30T04:34:20.180Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.180Z] NostrRelay.apply: Storing event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.180Z] NostrRelay.apply: Storing kind index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: kind:39001:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing pubkey index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing created_at index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing tag index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing tag index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] validateEvent: Validating event:
{
  "kind": 39001,
  "content": "Admin list for group: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin"
    ]
  ],
  "created_at": 1753850060,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e",
  "sig": "0ad434ce43ea85c47cac08d80c0fd5e4114bd777f1b55beee8d954af661302eff0fa15c3809650a87b7dbce44f0c4a3d442e0d93765cd46283c24650485a8446"
}
[2025-07-30T04:34:20.181Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing kind index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: kind:39001:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing pubkey index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing created_at index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing tag index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Storing tag index for event bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.181Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 108
[2025-07-30T04:34:20.182Z] publishEvent: Event published successfully: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:20.182Z] handleMessage: EVENT publish result:
[
  "OK",
  "bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850060262,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:34:20.282Z] handleMessage: Received message:
[
  "EVENT",
  {
    "kind": 39002,
    "content": "Member list for group: el sans serifo",
    "tags": [
      [
        "d",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "hypertuna",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "p",
        "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
        "admin"
      ]
    ],
    "created_at": 1753850060,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d",
    "sig": "c80eb5ab7963a53cc88d9bdf51afc8f08b6b3c7414703f19d9548914bec2fbd09d01daad41ccbce74c51636303d12b96fdd590d875c87f561b4700a53857dc23"
  }
]
[2025-07-30T04:34:20.282Z] handleMessage: Processing EVENT message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:20.282Z] publishEvent: Attempting to publish event:
{
  "kind": 39002,
  "content": "Member list for group: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin"
    ]
  ],
  "created_at": 1753850060,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d",
  "sig": "c80eb5ab7963a53cc88d9bdf51afc8f08b6b3c7414703f19d9548914bec2fbd09d01daad41ccbce74c51636303d12b96fdd590d875c87f561b4700a53857dc23"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850060,39002,[["d","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["p","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","admin"]],"Member list for group: el sans serifo"]
Event Hash: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: c80eb5ab7963a53cc88d9bdf51afc8f08b6b3c7414703f19d9548914bec2fbd09d01daad41ccbce74c51636303d12b96fdd590d875c87f561b4700a53857dc23
Verification Result: true
[2025-07-30T04:34:20.301Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:20.301Z] publishEvent: Publishing event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.301Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:20.301Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list for group: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin"
    ]
  ],
  "created_at": 1753850060,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d",
  "sig": "c80eb5ab7963a53cc88d9bdf51afc8f08b6b3c7414703f19d9548914bec2fbd09d01daad41ccbce74c51636303d12b96fdd590d875c87f561b4700a53857dc23"
}
[2025-07-30T04:34:20.301Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.301Z] NostrRelay.apply: Storing event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.301Z] NostrRelay.apply: Storing kind index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: kind:39002:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing pubkey index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing created_at index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing tag index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing tag index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list for group: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin"
    ]
  ],
  "created_at": 1753850060,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d",
  "sig": "c80eb5ab7963a53cc88d9bdf51afc8f08b6b3c7414703f19d9548914bec2fbd09d01daad41ccbce74c51636303d12b96fdd590d875c87f561b4700a53857dc23"
}
[2025-07-30T04:34:20.302Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing kind index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: kind:39002:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing pubkey index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing created_at index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing tag index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing tag index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list for group: el sans serifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "admin"
    ]
  ],
  "created_at": 1753850060,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d",
  "sig": "c80eb5ab7963a53cc88d9bdf51afc8f08b6b3c7414703f19d9548914bec2fbd09d01daad41ccbce74c51636303d12b96fdd590d875c87f561b4700a53857dc23"
}
[2025-07-30T04:34:20.302Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing kind index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: kind:39002:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing pubkey index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing created_at index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing tag index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Storing tag index for event 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850060:id:7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.302Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 126
[2025-07-30T04:34:20.304Z] publishEvent: Event published successfully: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:20.304Z] handleMessage: EVENT publish result:
[
  "OK",
  "7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:34:20.431Z] handleMessage: Received message:
[
  "REQ",
  "sub15",
  {
    "kinds": [
      1
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ]
  }
]
[2025-07-30T04:34:20.431Z] handleMessage: Processing REQ message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:20.431Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:20.431Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:20.431Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":25,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:34:20.431Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub15",
  {
    "kinds": [
      1
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ]
  }
]
[2025-07-30T04:34:20.431Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      1
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ]
  }
]
[2025-07-30T04:34:20.431Z] validateFilters: All filters are valid
[2025-07-30T04:34:20.431Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:34:20.432Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:20.432Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:34:20.432Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:20.432Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 127
[2025-07-30T04:34:20.433Z] publishSubscription: Published subscription for connection: ededb4f3552662d898979b34ba408d3b, subscriptionId: sub15
[2025-07-30T04:34:20.433Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub15 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:34:24.113Z] handleMessage: Received message:
[
  "REQ",
  "sub16",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:34:24.113Z] handleMessage: Processing REQ message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:24.113Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:24.113Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:24.117Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":126,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}]}}}"}
[2025-07-30T04:34:24.117Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub16",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:34:24.117Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:34:24.117Z] validateFilters: All filters are valid
[2025-07-30T04:34:24.117Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:34:24.117Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:24.117Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    },
    "sub16": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ]
    }
  }
}
[2025-07-30T04:34:24.117Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:24.117Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 128
[2025-07-30T04:34:24.169Z] publishSubscription: Published subscription for connection: ededb4f3552662d898979b34ba408d3b, subscriptionId: sub16
[2025-07-30T04:34:24.169Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub16 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850065263,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:34:29.448Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.448Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.448Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.448Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":127,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}]},\"sub16\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]}}}"}
[2025-07-30T04:34:29.448Z] handleSubscription: Active subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    },
    "sub16": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ]
    }
  }
}
[2025-07-30T04:34:29.448Z] handleSubscription: Processing subscription sub12 with last timestamp: undefined
[2025-07-30T04:34:29.448Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:29.449Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.449Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:29.449Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.449Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:29.449Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:29.449Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:34:29.449Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:29.449Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:29.449Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:29.449Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:29.449Z] queryEvents: Constructed query groups
[2025-07-30T04:34:29.449Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:29.449Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:29.449Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:29.449Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:0000000000:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.449Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.452Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:34:29.452Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:34:29.452Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:29.452Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:29.452Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.452Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.452Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:34:29.452Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:34:29.453Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:29.453Z] findCommonIds: Processing result set 2, size: 3
[2025-07-30T04:34:29.453Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:34:29.453Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:34:29.453Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:34:29.453Z] getEvent: Attempting to retrieve event with ID: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:29.453Z] getEvent: Converted key: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:29.453Z] getEvent: Event found for ID 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:34:29.453Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:34:29.453Z] queryEvents: Raw query results count:
1
[2025-07-30T04:34:29.453Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub12:
{
  "new": 1753850059
}
[2025-07-30T04:34:29.453Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:29.453Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.453Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:29.453Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.453Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:29.453Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:29.453Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:34:29.453Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:29.453Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:29.453Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:29.453Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:29.453Z] queryEvents: Constructed query groups
[2025-07-30T04:34:29.453Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:29.453Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:29.453Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:29.453Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:0000000000:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.453Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.454Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:34:29.454Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:34:29.454Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:29.454Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:29.454Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.454Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.454Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:34:29.454Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:34:29.454Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:29.454Z] findCommonIds: Processing result set 2, size: 3
[2025-07-30T04:34:29.454Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:34:29.454Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:34:29.454Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:34:29.454Z] getEvent: Attempting to retrieve event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:29.454Z] getEvent: Converted key: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:29.454Z] getEvent: Event found for ID 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:29.454Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:34:29.454Z] queryEvents: Raw query results count:
1
[2025-07-30T04:34:29.455Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub12:
{
  "new": 1753850060
}
[2025-07-30T04:34:29.455Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:29.455Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.455Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:29.455Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.455Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:29.455Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:29.455Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:34:29.455Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:29.455Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:29.455Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:29.455Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:29.455Z] queryEvents: Constructed query groups
[2025-07-30T04:34:29.455Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:29.455Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:29.455Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:29.455Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:0000000000:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.455Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.455Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:34:29.455Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:34:29.455Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:29.455Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:29.455Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.455Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.455Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:34:29.455Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:34:29.455Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:29.455Z] findCommonIds: Processing result set 2, size: 3
[2025-07-30T04:34:29.455Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:34:29.455Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:34:29.455Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:34:29.455Z] getEvent: Attempting to retrieve event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:29.455Z] getEvent: Converted key: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:29.455Z] getEvent: Event found for ID bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:29.455Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:34:29.455Z] queryEvents: Raw query results count:
1
[2025-07-30T04:34:29.455Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub12:
{
  "new": 1753850060
}
[2025-07-30T04:34:29.455Z] handleSubscription: Processing subscription sub13 with last timestamp: undefined
[2025-07-30T04:34:29.455Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:29.455Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.455Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:29.455Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.455Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:29.455Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:29.455Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:34:29.455Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:29.455Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:29.455Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:29.455Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:29.455Z] queryEvents: Constructed query groups
[2025-07-30T04:34:29.455Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:29.455Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:29.455Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:29.455Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:0000000000:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.455Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.455Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:29.455Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:29.455Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:29.455Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:29.455Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.455Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.456Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:34:29.456Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:34:29.456Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:29.456Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:29.456Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:29.456Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:29.456Z] queryEvents: Raw query results count:
[2025-07-30T04:34:29.456Z] handleSubscription: Processing subscription sub14 with last timestamp: undefined
[2025-07-30T04:34:29.456Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:29.456Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.456Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:29.456Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.456Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:29.456Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:29.456Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:34:29.456Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:34:29.456Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:29.456Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:29.456Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:29.456Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:29.456Z] queryEvents: Constructed query groups
[2025-07-30T04:34:29.456Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:29.456Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:29.456Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:34:29.456Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:0000000000:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.456Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.456Z] executeQueries:  Query 1/2 in group 1 finished with 1 entries
[2025-07-30T04:34:29.456Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:34:29.456Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:0000000000:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.456Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.456Z] executeQueries:  Query 2/2 in group 1 finished with 1 entries
[2025-07-30T04:34:29.456Z] executeQueries: Group 1 produced 2 unique IDs
[2025-07-30T04:34:29.456Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:29.456Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:29.456Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.456Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.456Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:34:29.456Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:34:29.456Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:29.456Z] findCommonIds: Processing result set 2, size: 3
[2025-07-30T04:34:29.456Z] findCommonIds: After intersection with set 2: reduced from 2 to 2 common IDs
[2025-07-30T04:34:29.456Z] findCommonIds: Final common ID count: 2
[2025-07-30T04:34:29.456Z] executeQueries: Found 2 common IDs across all groups
[2025-07-30T04:34:29.456Z] getEvent: Attempting to retrieve event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:29.456Z] getEvent: Converted key: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:29.456Z] getEvent: Event found for ID 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:29.456Z] getEvent: Attempting to retrieve event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:29.456Z] getEvent: Converted key: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:29.456Z] getEvent: Event found for ID bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:29.456Z] executeQueries: Successfully retrieved 2 full events
[2025-07-30T04:34:29.456Z] queryEvents: Raw query results count:
2
[2025-07-30T04:34:29.457Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub14:
{
  "new": 1753850060
}
[2025-07-30T04:34:29.457Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:29.457Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.457Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:29.457Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:29.457Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:29.457Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:29.457Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:34:29.457Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:34:29.457Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:34:29.457Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:29.457Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:29.457Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:29.457Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:29.457Z] queryEvents: Constructed query groups
[2025-07-30T04:34:29.457Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:29.457Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:29.457Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:34:29.457Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:0000000000:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.457Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.457Z] executeQueries:  Query 1/3 in group 1 finished with 1 entries
[2025-07-30T04:34:29.457Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:34:29.457Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:0000000000:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.457Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.457Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:34:29.457Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:34:29.457Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:0000000000:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.457Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.457Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:34:29.457Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:34:29.457Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:29.457Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:29.457Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.457Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.457Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:34:29.457Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:34:29.457Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:29.457Z] findCommonIds: Processing result set 2, size: 3
[2025-07-30T04:34:29.457Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:34:29.457Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:34:29.457Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:34:29.457Z] getEvent: Attempting to retrieve event with ID: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:29.457Z] getEvent: Converted key: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:29.457Z] getEvent: Event found for ID 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:34:29.457Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:34:29.457Z] queryEvents: Raw query results count:
1
[2025-07-30T04:34:29.457Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub14:
{
  "new": 1753850057
}
[2025-07-30T04:34:29.457Z] handleSubscription: Processing subscription sub15 with last timestamp: undefined
[2025-07-30T04:34:29.457Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:29.457Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:34:29.457Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:29.457Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:34:29.457Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:29.457Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:29.457Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:34:29.457Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:34:29.457Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:29.457Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:29.457Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:29.457Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:34:29.457Z] queryEvents: Constructed query groups
[2025-07-30T04:34:29.457Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:34:29.457Z] executeQueries: Processing group 1/3
[2025-07-30T04:34:29.457Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:29.457Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:0000000000:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.457Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:29.458Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:29.458Z] executeQueries: Processing group 2/3
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:29.458Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:0000000000:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.458Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 2 finished with 6 entries
[2025-07-30T04:34:29.458Z] executeQueries: Group 2 produced 6 unique IDs
[2025-07-30T04:34:29.458Z] executeQueries: Processing group 3/3
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:34:29.458Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.458Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 3 finished with 3 entries
[2025-07-30T04:34:29.458Z] executeQueries: Group 3 produced 3 unique IDs
[2025-07-30T04:34:29.458Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:34:29.458Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:29.458Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:29.458Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:29.458Z] queryEvents: Raw query results count:
[2025-07-30T04:34:29.458Z] handleSubscription: Processing subscription sub16 with last timestamp: undefined
[2025-07-30T04:34:29.458Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:29.458Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ],
  "limit": 1
}
[2025-07-30T04:34:29.458Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:29.458Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ],
  "limit": 1
}
[2025-07-30T04:34:29.458Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:29.458Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:29.458Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:34:29.458Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:34:29.458Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:29.458Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:29.458Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:29.458Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:34:29.458Z] queryEvents: Constructed query groups
[2025-07-30T04:34:29.458Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:34:29.458Z] executeQueries: Processing group 1/3
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:29.458Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:0000000000:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.458Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:34:29.458Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:34:29.458Z] executeQueries: Processing group 2/3
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:29.458Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:0000000000:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.458Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 2 finished with 6 entries
[2025-07-30T04:34:29.458Z] executeQueries: Group 2 produced 6 unique IDs
[2025-07-30T04:34:29.458Z] executeQueries: Processing group 3/3
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:34:29.458Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:29.458Z] executeQueries:   starting read stream
[2025-07-30T04:34:29.458Z] executeQueries:  Query 1/1 in group 3 finished with 3 entries
[2025-07-30T04:34:29.458Z] executeQueries: Group 3 produced 3 unique IDs
[2025-07-30T04:34:29.458Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:34:29.458Z] findCommonIds: Processing result set 2, size: 6
[2025-07-30T04:34:29.458Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:34:29.459Z] findCommonIds: Processing result set 3, size: 3
[2025-07-30T04:34:29.459Z] findCommonIds: After intersection with set 3: reduced from 1 to 1 common IDs
[2025-07-30T04:34:29.459Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:34:29.459Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:34:29.459Z] getEvent: Attempting to retrieve event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:29.459Z] getEvent: Converted key: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:29.459Z] getEvent: Event found for ID 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:29.459Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:34:29.459Z] queryEvents: Raw query results count:
1
[2025-07-30T04:34:29.459Z] queryEvents: Results truncated to limit:
1
[2025-07-30T04:34:29.459Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub16:
{
  "new": 1753850060
}
[2025-07-30T04:34:29.459Z] handleSubscription: Total events and EOSE messages for client:
12
[RelayServer] Found 12 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Updating subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.459Z] RelayManager: Updating subscriptions for connection ededb4f3552662d898979b34ba408d3b
Updated subscription data: {
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850057
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    },
    "sub16": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ],
      "last_returned_event_timestamp": 1753850060
    }
  }
}
[2025-07-30T04:34:29.459Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850057
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    },
    "sub16": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ],
      "last_returned_event_timestamp": 1753850060
    }
  }
}
[2025-07-30T04:34:29.459Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:29.459Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850057
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    },
    "sub16": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ],
      "last_returned_event_timestamp": 1753850060
    }
  }
}
[2025-07-30T04:34:29.459Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.459Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 129
[2025-07-30T04:34:29.461Z] updateSubscriptions: Updated subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.461Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Received from parent: {
  type: 'update-auth-data',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    pubkey: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
    token: '0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76'
  }
}
[Worker] Update auth data requested: {
  relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
  publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
  pubkey: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
  token: '0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76'
}
[Worker] Received from parent: {
  type: 'update-auth-data',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    pubkey: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
    token: '0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76'
  }
}
[Worker] Update auth data requested: {
  relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
  publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
  pubkey: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
  token: '0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76'
}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:34:29.807Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 3b81e5a0... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 3b81e5a0... on relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[Worker] Sending message: {"type":"auth-data-updated","identifier":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","pubkey":"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:34:29.809Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 3b81e5a0... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 3b81e5a0... on relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[Worker] Sending message: {"type":"auth-data-updated","identifier":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","pubkey":"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[2025-07-30T04:34:29.884Z] handleMessage: Received message:
[
  "CLOSE",
  "sub16"
]
[2025-07-30T04:34:29.884Z] handleMessage: Processing CLOSE message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.884Z] unsubscribe: Removing subscription sub16 for connection ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.884Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.884Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.884Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":128,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850057},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}]},\"sub16\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}],\"last_returned_event_timestamp\":1753850060}}}"}
[2025-07-30T04:34:29.884Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:29.884Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850057
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:34:29.884Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.884Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 130
[2025-07-30T04:34:29.886Z] unsubscribe: Successfully removed subscription sub16
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:34:29.886Z] handleMessage: Closed subscription sub16
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:34:29.937Z] handleMessage: Received message:
[
  "EVENT",
  {
    "kind": 39002,
    "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
    "tags": [
      [
        "d",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "hypertuna",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "i",
        "hypertuna:relay"
      ],
      [
        "p",
        "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
        "member"
      ]
    ],
    "created_at": 1753850069,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a",
    "sig": "87d9b7eca1fa77170856f0da71b8cdc686e3b5f7f4d976fc4868f8c7a4cc4803e77e98f672a89648cbc1a6f75a58f6ce7e6bf3d4b59c6218462da0241d701d38"
  }
]
[2025-07-30T04:34:29.937Z] handleMessage: Processing EVENT message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:29.937Z] publishEvent: Attempting to publish event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850069,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a",
  "sig": "87d9b7eca1fa77170856f0da71b8cdc686e3b5f7f4d976fc4868f8c7a4cc4803e77e98f672a89648cbc1a6f75a58f6ce7e6bf3d4b59c6218462da0241d701d38"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850069,39002,[["d","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["i","hypertuna:relay"],["p","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","member"]],"Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"]
Event Hash: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: 87d9b7eca1fa77170856f0da71b8cdc686e3b5f7f4d976fc4868f8c7a4cc4803e77e98f672a89648cbc1a6f75a58f6ce7e6bf3d4b59c6218462da0241d701d38
Verification Result: true
[2025-07-30T04:34:29.960Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:29.960Z] publishEvent: Publishing event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.960Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:29.960Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850069,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a",
  "sig": "87d9b7eca1fa77170856f0da71b8cdc686e3b5f7f4d976fc4868f8c7a4cc4803e77e98f672a89648cbc1a6f75a58f6ce7e6bf3d4b59c6218462da0241d701d38"
}
[2025-07-30T04:34:29.960Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:29.960Z] NostrRelay.apply: Storing event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.960Z] NostrRelay.apply: Storing kind index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: kind:39002:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.960Z] NostrRelay.apply: Storing pubkey index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.960Z] NostrRelay.apply: Storing created_at index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850069,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a",
  "sig": "87d9b7eca1fa77170856f0da71b8cdc686e3b5f7f4d976fc4868f8c7a4cc4803e77e98f672a89648cbc1a6f75a58f6ce7e6bf3d4b59c6218462da0241d701d38"
}
[2025-07-30T04:34:29.961Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing kind index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: kind:39002:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing pubkey index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing created_at index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850069,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a",
  "sig": "87d9b7eca1fa77170856f0da71b8cdc686e3b5f7f4d976fc4868f8c7a4cc4803e77e98f672a89648cbc1a6f75a58f6ce7e6bf3d4b59c6218462da0241d701d38"
}
[2025-07-30T04:34:29.961Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing kind index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: kind:39002:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing pubkey index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing created_at index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850069,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a",
  "sig": "87d9b7eca1fa77170856f0da71b8cdc686e3b5f7f4d976fc4868f8c7a4cc4803e77e98f672a89648cbc1a6f75a58f6ce7e6bf3d4b59c6218462da0241d701d38"
}
[2025-07-30T04:34:29.961Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing kind index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: kind:39002:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing pubkey index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing created_at index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Storing tag index for event 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850069:id:18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.961Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 158
[2025-07-30T04:34:29.963Z] publishEvent: Event published successfully: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:29.963Z] handleMessage: EVENT publish result:
[
  "OK",
  "18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: {
  type: 'update-members',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    members: [Array],
    member_adds: [Array],
    member_removes: [Array]
  }
}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:34:29.996Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"members-updated","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:34:30.047Z] handleMessage: Received message:
[
  "REQ",
  "sub17",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:34:30.047Z] handleMessage: Processing REQ message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:30.047Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:30.047Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:30.047Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":129,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850057},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}]}}}"}
[2025-07-30T04:34:30.047Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub17",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:34:30.047Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:34:30.047Z] validateFilters: All filters are valid
[2025-07-30T04:34:30.047Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:34:30.047Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:30.047Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850057
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    },
    "sub17": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ]
    }
  }
}
[2025-07-30T04:34:30.047Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:30.047Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 159
[2025-07-30T04:34:30.049Z] publishSubscription: Published subscription for connection: ededb4f3552662d898979b34ba408d3b, subscriptionId: sub17
[2025-07-30T04:34:30.049Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub17 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850070263,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:34:30.845Z] handleMessage: Received message:
[
  "EVENT",
  {
    "kind": 39002,
    "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
    "tags": [
      [
        "d",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "hypertuna",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "i",
        "hypertuna:relay"
      ],
      [
        "p",
        "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
        "member"
      ]
    ],
    "created_at": 1753850070,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b",
    "sig": "ed833c4d56900494998108b223bedac4b52b84955701151bb6cb8daa3363fe83df2cdbb71758d9faa9422f23d36b7545747da1f336db1d9e74b8b0d9820d7c5d"
  }
]
[2025-07-30T04:34:30.845Z] handleMessage: Processing EVENT message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:30.845Z] publishEvent: Attempting to publish event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850070,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b",
  "sig": "ed833c4d56900494998108b223bedac4b52b84955701151bb6cb8daa3363fe83df2cdbb71758d9faa9422f23d36b7545747da1f336db1d9e74b8b0d9820d7c5d"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850070,39002,[["d","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["i","hypertuna:relay"],["p","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","member"]],"Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"]
Event Hash: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: ed833c4d56900494998108b223bedac4b52b84955701151bb6cb8daa3363fe83df2cdbb71758d9faa9422f23d36b7545747da1f336db1d9e74b8b0d9820d7c5d
Verification Result: true
[2025-07-30T04:34:30.865Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:30.865Z] publishEvent: Publishing event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.865Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:30.865Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850070,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b",
  "sig": "ed833c4d56900494998108b223bedac4b52b84955701151bb6cb8daa3363fe83df2cdbb71758d9faa9422f23d36b7545747da1f336db1d9e74b8b0d9820d7c5d"
}
[2025-07-30T04:34:30.865Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:30.865Z] NostrRelay.apply: Storing event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.865Z] NostrRelay.apply: Storing kind index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: kind:39002:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.865Z] NostrRelay.apply: Storing pubkey index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.865Z] NostrRelay.apply: Storing created_at index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.865Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850070,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b",
  "sig": "ed833c4d56900494998108b223bedac4b52b84955701151bb6cb8daa3363fe83df2cdbb71758d9faa9422f23d36b7545747da1f336db1d9e74b8b0d9820d7c5d"
}
[2025-07-30T04:34:30.866Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing kind index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: kind:39002:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing pubkey index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing created_at index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850070,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b",
  "sig": "ed833c4d56900494998108b223bedac4b52b84955701151bb6cb8daa3363fe83df2cdbb71758d9faa9422f23d36b7545747da1f336db1d9e74b8b0d9820d7c5d"
}
[2025-07-30T04:34:30.866Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing kind index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: kind:39002:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing pubkey index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing created_at index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo",
  "tags": [
    [
      "d",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "hypertuna",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
      "member"
    ]
  ],
  "created_at": 1753850070,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b",
  "sig": "ed833c4d56900494998108b223bedac4b52b84955701151bb6cb8daa3363fe83df2cdbb71758d9faa9422f23d36b7545747da1f336db1d9e74b8b0d9820d7c5d"
}
[2025-07-30T04:34:30.866Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing kind index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: kind:39002:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing pubkey index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing created_at index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Storing tag index for event 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850070:id:5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.866Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 187
[2025-07-30T04:34:30.867Z] publishEvent: Event published successfully: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:30.867Z] handleMessage: EVENT publish result:
[
  "OK",
  "5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: {
  type: 'update-members',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    members: [Array],
    member_adds: [Array],
    member_removes: [Array]
  }
}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:34:30.891Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"members-updated","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:34:31.959Z] handleMessage: Received message:
[
  "EVENT",
  {
    "kind": 1,
    "content": "bonjour",
    "tags": [
      [
        "h",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ]
    ],
    "created_at": 1753850071,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8",
    "sig": "5aca58a9a44a2a4d2c21bc1a129ee63c9e0c579650aec0aef40c52f010ba1e50627beb11f23fa952fc1ba7fc6274b5a7abe947875620ddb81d791762913bd170"
  }
]
[2025-07-30T04:34:31.959Z] handleMessage: Processing EVENT message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:31.959Z] publishEvent: Attempting to publish event:
{
  "kind": 1,
  "content": "bonjour",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  ],
  "created_at": 1753850071,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8",
  "sig": "5aca58a9a44a2a4d2c21bc1a129ee63c9e0c579650aec0aef40c52f010ba1e50627beb11f23fa952fc1ba7fc6274b5a7abe947875620ddb81d791762913bd170"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850071,1,[["h","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"]],"bonjour"]
Event Hash: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: 5aca58a9a44a2a4d2c21bc1a129ee63c9e0c579650aec0aef40c52f010ba1e50627beb11f23fa952fc1ba7fc6274b5a7abe947875620ddb81d791762913bd170
Verification Result: true
[2025-07-30T04:34:31.992Z] publishEvent: Event verification result:
true
[2025-07-30T04:34:31.992Z] publishEvent: Publishing event with ID: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.992Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:31.993Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "bonjour",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  ],
  "created_at": 1753850071,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8",
  "sig": "5aca58a9a44a2a4d2c21bc1a129ee63c9e0c579650aec0aef40c52f010ba1e50627beb11f23fa952fc1ba7fc6274b5a7abe947875620ddb81d791762913bd170"
}
[2025-07-30T04:34:31.993Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing event with ID: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing kind index for event def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8 under key: kind:00001:created_at:1753850071:id:def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing pubkey index for event def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8 under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850071:id:def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing created_at index for event def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8 under key: created_at:1753850071:id:def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing tag index for event def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "bonjour",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  ],
  "created_at": 1753850071,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8",
  "sig": "5aca58a9a44a2a4d2c21bc1a129ee63c9e0c579650aec0aef40c52f010ba1e50627beb11f23fa952fc1ba7fc6274b5a7abe947875620ddb81d791762913bd170"
}
[2025-07-30T04:34:31.993Z] validateEvent: Event passed all validation checks
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing event with ID: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing kind index for event def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8 under key: kind:00001:created_at:1753850071:id:def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing pubkey index for event def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8 under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850071:id:def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing created_at index for event def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8 under key: created_at:1753850071:id:def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Storing tag index for event def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.993Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 197
[2025-07-30T04:34:31.994Z] publishEvent: Event published successfully: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:31.994Z] handleMessage: EVENT publish result:
[
  "OK",
  "def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[2025-07-30T04:34:33.007Z] handleMessage: Received message:
[
  "CLOSE",
  "sub17"
]
[2025-07-30T04:34:33.008Z] handleMessage: Processing CLOSE message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:33.008Z] unsubscribe: Removing subscription sub17 for connection ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:33.008Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:33.008Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:33.008Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":158,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850057},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}]},\"sub17\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]}}}"}
[2025-07-30T04:34:33.008Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:33.008Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850057
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:34:33.008Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:33.008Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 198
[2025-07-30T04:34:33.010Z] unsubscribe: Successfully removed subscription sub17
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:34:33.010Z] handleMessage: Closed subscription sub17
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850075264,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:34:39.564Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.564Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.564Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.565Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":197,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850057},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}]}}}"}
[2025-07-30T04:34:39.565Z] handleSubscription: Active subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850057
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:34:39.565Z] handleSubscription: Processing subscription sub12 with last timestamp: 1753850060
[2025-07-30T04:34:39.565Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850060
[2025-07-30T04:34:39.565Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.565Z] queryEvents: Last returned event timestamp:
1753850060
[2025-07-30T04:34:39.565Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.565Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850060
[2025-07-30T04:34:39.565Z] constructQueries: Using time range - since: 1753850061, until: 9999999999
[2025-07-30T04:34:39.565Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:34:39.565Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:39.565Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:39.565Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:39.565Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:39.565Z] queryEvents: Constructed query groups
[2025-07-30T04:34:39.565Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:39.565Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:39.565Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:39.565Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850061:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.565Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.565Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:39.565Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:39.565Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:39.565Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:39.565Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850061:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.565Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.565Z] executeQueries:  Query 1/1 in group 2 finished with 2 entries
[2025-07-30T04:34:39.565Z] executeQueries: Group 2 produced 2 unique IDs
[2025-07-30T04:34:39.565Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:39.565Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:39.565Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:39.565Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:39.565Z] queryEvents: Raw query results count:
[2025-07-30T04:34:39.565Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850060
[2025-07-30T04:34:39.565Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.565Z] queryEvents: Last returned event timestamp:
1753850060
[2025-07-30T04:34:39.565Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.565Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850060
[2025-07-30T04:34:39.565Z] constructQueries: Using time range - since: 1753850061, until: 9999999999
[2025-07-30T04:34:39.565Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:34:39.565Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:39.565Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:39.565Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:39.565Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:39.565Z] queryEvents: Constructed query groups
[2025-07-30T04:34:39.565Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:39.565Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:39.565Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:39.565Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850061:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.565Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 1 finished with 2 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 1 produced 2 unique IDs
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850061:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2 finished with 2 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 2 produced 2 unique IDs
[2025-07-30T04:34:39.566Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:39.566Z] findCommonIds: Processing result set 2, size: 2
[2025-07-30T04:34:39.566Z] findCommonIds: After intersection with set 2: reduced from 2 to 2 common IDs
[2025-07-30T04:34:39.566Z] findCommonIds: Final common ID count: 2
[2025-07-30T04:34:39.566Z] executeQueries: Found 2 common IDs across all groups
[2025-07-30T04:34:39.566Z] getEvent: Attempting to retrieve event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:39.566Z] getEvent: Converted key: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:39.566Z] getEvent: Event found for ID 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:39.566Z] getEvent: Attempting to retrieve event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:39.566Z] getEvent: Converted key: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:39.566Z] getEvent: Event found for ID 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:39.566Z] executeQueries: Successfully retrieved 2 full events
[2025-07-30T04:34:39.566Z] queryEvents: Raw query results count:
2
[2025-07-30T04:34:39.566Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub12:
{
  "previous": 1753850060,
  "new": 1753850070
}
[2025-07-30T04:34:39.566Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850060
[2025-07-30T04:34:39.566Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.566Z] queryEvents: Last returned event timestamp:
1753850060
[2025-07-30T04:34:39.566Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.566Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850060
[2025-07-30T04:34:39.566Z] constructQueries: Using time range - since: 1753850061, until: 9999999999
[2025-07-30T04:34:39.566Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:39.566Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:39.566Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:39.566Z] queryEvents: Constructed query groups
[2025-07-30T04:34:39.566Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850061:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850061:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2 finished with 2 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 2 produced 2 unique IDs
[2025-07-30T04:34:39.566Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:39.566Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:39.566Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:39.566Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:39.566Z] queryEvents: Raw query results count:
[2025-07-30T04:34:39.566Z] handleSubscription: Processing subscription sub13 with last timestamp: undefined
[2025-07-30T04:34:39.566Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:39.566Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.566Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:39.566Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.566Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:39.566Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:39.566Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:39.566Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:39.566Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:39.566Z] queryEvents: Constructed query groups
[2025-07-30T04:34:39.566Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:0000000000:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2 finished with 4 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 2 produced 4 unique IDs
[2025-07-30T04:34:39.566Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:39.566Z] findCommonIds: Processing result set 2, size: 4
[2025-07-30T04:34:39.566Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:34:39.566Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:34:39.566Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:34:39.566Z] getEvent: Attempting to retrieve event with ID: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:39.566Z] getEvent: Converted key: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:39.566Z] getEvent: Event found for ID def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:39.566Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:34:39.566Z] queryEvents: Raw query results count:
1
[2025-07-30T04:34:39.566Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub13:
{
  "new": 1753850071
}
[2025-07-30T04:34:39.566Z] handleSubscription: Processing subscription sub14 with last timestamp: 1753850057
[2025-07-30T04:34:39.566Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850057
[2025-07-30T04:34:39.566Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.566Z] queryEvents: Last returned event timestamp:
1753850057
[2025-07-30T04:34:39.566Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.566Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850057
[2025-07-30T04:34:39.566Z] constructQueries: Using time range - since: 1753850058, until: 9999999999
[2025-07-30T04:34:39.566Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:34:39.566Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:39.566Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:39.566Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:39.566Z] queryEvents: Constructed query groups
[2025-07-30T04:34:39.566Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850058:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/2 in group 1 finished with 3 entries
[2025-07-30T04:34:39.566Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850058:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 2/2 in group 1 finished with 1 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 1 produced 4 unique IDs
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850058:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2 finished with 5 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 2 produced 5 unique IDs
[2025-07-30T04:34:39.566Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:39.566Z] findCommonIds: Processing result set 2, size: 5
[2025-07-30T04:34:39.566Z] findCommonIds: After intersection with set 2: reduced from 4 to 4 common IDs
[2025-07-30T04:34:39.566Z] findCommonIds: Final common ID count: 4
[2025-07-30T04:34:39.566Z] executeQueries: Found 4 common IDs across all groups
[2025-07-30T04:34:39.566Z] getEvent: Attempting to retrieve event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:39.566Z] getEvent: Converted key: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:39.566Z] getEvent: Event found for ID 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:34:39.566Z] getEvent: Attempting to retrieve event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:39.566Z] getEvent: Converted key: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:39.566Z] getEvent: Event found for ID 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:34:39.566Z] getEvent: Attempting to retrieve event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:39.566Z] getEvent: Converted key: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:39.566Z] getEvent: Event found for ID 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:34:39.566Z] getEvent: Attempting to retrieve event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:39.566Z] getEvent: Converted key: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:39.566Z] getEvent: Event found for ID bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:34:39.566Z] executeQueries: Successfully retrieved 4 full events
[2025-07-30T04:34:39.566Z] queryEvents: Raw query results count:
4
[2025-07-30T04:34:39.566Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub14:
{
  "previous": 1753850057,
  "new": 1753850070
}
[2025-07-30T04:34:39.566Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850057
[2025-07-30T04:34:39.566Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.566Z] queryEvents: Last returned event timestamp:
1753850057
[2025-07-30T04:34:39.566Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:39.566Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850057
[2025-07-30T04:34:39.566Z] constructQueries: Using time range - since: 1753850058, until: 9999999999
[2025-07-30T04:34:39.566Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:34:39.566Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:34:39.566Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:39.566Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:39.566Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:39.566Z] queryEvents: Constructed query groups
[2025-07-30T04:34:39.566Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850058:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/3 in group 1 finished with 0 entries
[2025-07-30T04:34:39.566Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850058:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:34:39.566Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850058:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850058:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:34:39.566Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:39.566Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:39.566Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:39.566Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:39.566Z] queryEvents: Raw query results count:
[2025-07-30T04:34:39.566Z] handleSubscription: Processing subscription sub15 with last timestamp: undefined
[2025-07-30T04:34:39.566Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:34:39.566Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:34:39.566Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:34:39.566Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:34:39.566Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:34:39.566Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:34:39.566Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:34:39.566Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:39.566Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:39.566Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:39.566Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:34:39.566Z] queryEvents: Constructed query groups
[2025-07-30T04:34:39.566Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 1/3
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:0000000000:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:34:39.566Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:34:39.566Z] executeQueries: Processing group 2/3
[2025-07-30T04:34:39.566Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:39.566Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:0000000000:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.566Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.567Z] executeQueries:  Query 1/1 in group 2 finished with 9 entries
[2025-07-30T04:34:39.567Z] executeQueries: Group 2 produced 9 unique IDs
[2025-07-30T04:34:39.567Z] executeQueries: Processing group 3/3
[2025-07-30T04:34:39.567Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:34:39.567Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:39.567Z] executeQueries:   starting read stream
[2025-07-30T04:34:39.567Z] executeQueries:  Query 1/1 in group 3 finished with 4 entries
[2025-07-30T04:34:39.567Z] executeQueries: Group 3 produced 4 unique IDs
[2025-07-30T04:34:39.567Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:34:39.567Z] findCommonIds: Processing result set 2, size: 9
[2025-07-30T04:34:39.567Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:34:39.567Z] findCommonIds: Processing result set 3, size: 4
[2025-07-30T04:34:39.567Z] findCommonIds: After intersection with set 3: reduced from 1 to 1 common IDs
[2025-07-30T04:34:39.567Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:34:39.567Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:34:39.567Z] getEvent: Attempting to retrieve event with ID: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:39.567Z] getEvent: Converted key: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:39.567Z] getEvent: Event found for ID def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:34:39.567Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:34:39.567Z] queryEvents: Raw query results count:
1
[2025-07-30T04:34:39.567Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub15:
{
  "new": 1753850071
}
[2025-07-30T04:34:39.567Z] handleSubscription: Total events and EOSE messages for client:
12
[RelayServer] Found 12 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Updating subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.567Z] RelayManager: Updating subscriptions for connection ededb4f3552662d898979b34ba408d3b
Updated subscription data: {
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:39.567Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:39.567Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:39.567Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:39.567Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.567Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 199
[2025-07-30T04:34:39.569Z] updateSubscriptions: Updated subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.569Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:34:39.856Z] handleMessage: Received message:
[
  "REQ",
  "sub18",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:34:39.856Z] handleMessage: Processing REQ message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.856Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.856Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.856Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":198,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:34:39.856Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub18",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:34:39.856Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:34:39.856Z] validateFilters: All filters are valid
[2025-07-30T04:34:39.856Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:34:39.856Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:39.856Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub18": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ]
    }
  }
}
[2025-07-30T04:34:39.856Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:39.856Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 200
[2025-07-30T04:34:39.858Z] publishSubscription: Published subscription for connection: ededb4f3552662d898979b34ba408d3b, subscriptionId: sub18
[2025-07-30T04:34:39.858Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub18 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayServer] Health state updated: {
  status: 'healthy',
  activeRelays: 1,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'healthy',
  activeRelays: 1,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753850080221,"status":"healthy","activeRelaysCount":1,"metrics":{"totalRequests":20,"successfulRequests":20,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850080265,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 1
[2025-07-30T04:34:42.840Z] handleMessage: Received message:
[
  "CLOSE",
  "sub18"
]
[2025-07-30T04:34:42.840Z] handleMessage: Processing CLOSE message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:42.840Z] unsubscribe: Removing subscription sub18 for connection ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:42.840Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:42.840Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:42.841Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":199,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071},\"sub18\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]}}}"}
[2025-07-30T04:34:42.841Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:42.841Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:42.841Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:42.841Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 201
[2025-07-30T04:34:42.843Z] unsubscribe: Successfully removed subscription sub18
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:34:42.843Z] handleMessage: Closed subscription sub18
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850085273,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:34:49.664Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:49.664Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:49.664Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:49.664Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":200,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:34:49.664Z] handleSubscription: Active subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:49.664Z] handleSubscription: Processing subscription sub12 with last timestamp: 1753850070
[2025-07-30T04:34:49.664Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:49.664Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.664Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:49.664Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.664Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:49.664Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:49.664Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:34:49.664Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:49.664Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:49.664Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:49.664Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:49.664Z] queryEvents: Constructed query groups
[2025-07-30T04:34:49.664Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:49.664Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:49.664Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850071:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.664Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:49.664Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:49.664Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:49.664Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.664Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:49.664Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:49.664Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:49.664Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:49.664Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:49.664Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:49.664Z] queryEvents: Raw query results count:
[2025-07-30T04:34:49.664Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:49.664Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.664Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:49.664Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.664Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:49.664Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:49.664Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:34:49.664Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:49.664Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:49.664Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:49.664Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:49.664Z] queryEvents: Constructed query groups
[2025-07-30T04:34:49.664Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:49.664Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:49.664Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.664Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:49.664Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:49.664Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:49.664Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.664Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:49.664Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:49.664Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:49.664Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:49.664Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:49.664Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:49.664Z] queryEvents: Raw query results count:
[2025-07-30T04:34:49.664Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:49.664Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.664Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:49.664Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.664Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:49.664Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:49.664Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:34:49.664Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:49.664Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:49.664Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:49.664Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:49.664Z] queryEvents: Constructed query groups
[2025-07-30T04:34:49.664Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:49.664Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:49.664Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.664Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:49.664Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:49.664Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:49.664Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.664Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.664Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:49.664Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:49.664Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:49.664Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:49.664Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:49.664Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:49.664Z] queryEvents: Raw query results count:
[2025-07-30T04:34:49.664Z] handleSubscription: Processing subscription sub13 with last timestamp: 1753850071
[2025-07-30T04:34:49.664Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:34:49.664Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.664Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:34:49.664Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.664Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:34:49.664Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:34:49.664Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:34:49.664Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:49.664Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:49.664Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:49.664Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:49.664Z] queryEvents: Constructed query groups
[2025-07-30T04:34:49.664Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:49.664Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:49.665Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:49.665Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:49.665Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:49.665Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:49.665Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:49.665Z] queryEvents: Raw query results count:
[2025-07-30T04:34:49.665Z] handleSubscription: Processing subscription sub14 with last timestamp: 1753850070
[2025-07-30T04:34:49.665Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:49.665Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.665Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:49.665Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.665Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:49.665Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:49.665Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:34:49.665Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:34:49.665Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:49.665Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:49.665Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:49.665Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:49.665Z] queryEvents: Constructed query groups
[2025-07-30T04:34:49.665Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:49.665Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/2 in group 1 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 2/2 in group 1 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:49.665Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:49.665Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:49.665Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:49.665Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:49.665Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:49.665Z] queryEvents: Raw query results count:
[2025-07-30T04:34:49.665Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:49.665Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.665Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:49.665Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:49.665Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:49.665Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:49.665Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:34:49.665Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:34:49.665Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:34:49.665Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:49.665Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:49.665Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:49.665Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:49.665Z] queryEvents: Constructed query groups
[2025-07-30T04:34:49.665Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:49.665Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850071:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/3 in group 1 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850071:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850071:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:49.665Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:34:49.665Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:34:49.665Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:49.665Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:49.665Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:49.665Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:49.665Z] queryEvents: Raw query results count:
[2025-07-30T04:34:49.665Z] handleSubscription: Processing subscription sub15 with last timestamp: 1753850071
[2025-07-30T04:34:49.665Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:34:49.665Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:34:49.665Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:34:49.665Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:34:49.665Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:34:49.665Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:34:49.665Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:34:49.665Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:34:49.665Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:49.665Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:49.665Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:49.665Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:34:49.665Z] queryEvents: Constructed query groups
[2025-07-30T04:34:49.665Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:34:49.665Z] executeQueries: Processing group 1/3
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:49.665Z] executeQueries: Processing group 2/3
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850072:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:49.665Z] executeQueries: Processing group 3/3
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:34:49.665Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:49.665Z] executeQueries:   starting read stream
[2025-07-30T04:34:49.665Z] executeQueries:  Query 1/1 in group 3 finished with 0 entries
[2025-07-30T04:34:49.665Z] executeQueries: Group 3 produced 0 unique IDs
[2025-07-30T04:34:49.665Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:34:49.665Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:49.665Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:49.665Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:49.665Z] queryEvents: Raw query results count:
[2025-07-30T04:34:49.665Z] handleSubscription: Total events and EOSE messages for client:
4
[RelayServer] Found 4 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Updating subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:49.665Z] RelayManager: Updating subscriptions for connection ededb4f3552662d898979b34ba408d3b
Updated subscription data: {
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:49.665Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:49.665Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:49.665Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:49.665Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:49.665Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 202
[2025-07-30T04:34:49.668Z] updateSubscriptions: Updated subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:49.668Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850090273,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850095275,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:34:59.706Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:59.706Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:59.707Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:59.711Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":201,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:34:59.711Z] handleSubscription: Active subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:59.711Z] handleSubscription: Processing subscription sub12 with last timestamp: 1753850070
[2025-07-30T04:34:59.711Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:59.711Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.711Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:59.711Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.711Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:59.711Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:59.711Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:34:59.711Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:59.711Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:59.711Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:59.711Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:59.711Z] queryEvents: Constructed query groups
[2025-07-30T04:34:59.711Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:59.711Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:59.711Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:59.711Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850071:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.711Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.711Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:59.712Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:59.712Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:59.712Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.712Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:59.712Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:59.712Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:59.712Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:59.712Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:59.712Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:59.712Z] queryEvents: Raw query results count:
[2025-07-30T04:34:59.712Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:59.712Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.712Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:59.712Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.712Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:59.712Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:59.712Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:34:59.712Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:59.712Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:59.712Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:59.712Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:59.712Z] queryEvents: Constructed query groups
[2025-07-30T04:34:59.712Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:59.712Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:59.712Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.712Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:59.712Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:59.712Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:59.712Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.712Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:59.712Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:59.712Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:59.712Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:59.712Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:59.712Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:59.712Z] queryEvents: Raw query results count:
[2025-07-30T04:34:59.712Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:59.712Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.712Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:59.712Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.712Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:59.712Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:59.712Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:34:59.712Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:59.712Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:59.712Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:59.712Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:59.712Z] queryEvents: Constructed query groups
[2025-07-30T04:34:59.712Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:59.712Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:59.712Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.712Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:59.712Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:59.712Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:59.712Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.712Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:59.712Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:59.712Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:59.712Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:59.712Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:59.712Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:59.712Z] queryEvents: Raw query results count:
[2025-07-30T04:34:59.712Z] handleSubscription: Processing subscription sub13 with last timestamp: 1753850071
[2025-07-30T04:34:59.712Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:34:59.712Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.712Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:34:59.712Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.712Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:34:59.712Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:34:59.712Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:34:59.712Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:59.712Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:59.712Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:59.712Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:59.712Z] queryEvents: Constructed query groups
[2025-07-30T04:34:59.712Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:59.712Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:59.712Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.712Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:59.712Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:59.712Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:59.712Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.712Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.712Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:59.712Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:59.712Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:59.712Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:59.712Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:59.712Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:59.712Z] queryEvents: Raw query results count:
[2025-07-30T04:34:59.712Z] handleSubscription: Processing subscription sub14 with last timestamp: 1753850070
[2025-07-30T04:34:59.712Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:59.713Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.713Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:59.713Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.713Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:59.713Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:59.713Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:34:59.713Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:34:59.713Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:59.713Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:59.713Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:59.713Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:59.713Z] queryEvents: Constructed query groups
[2025-07-30T04:34:59.713Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:59.713Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:34:59.713Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.713Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/2 in group 1 finished with 0 entries
[2025-07-30T04:34:59.713Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:34:59.713Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.713Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.713Z] executeQueries:  Query 2/2 in group 1 finished with 0 entries
[2025-07-30T04:34:59.713Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:59.713Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:59.713Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.713Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:59.713Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:59.713Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:59.713Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:59.713Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:59.713Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:59.713Z] queryEvents: Raw query results count:
[2025-07-30T04:34:59.713Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:34:59.713Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.713Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:34:59.713Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:34:59.713Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:34:59.713Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:34:59.713Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:34:59.713Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:34:59.713Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:34:59.713Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:59.713Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:59.713Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:59.713Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:34:59.713Z] queryEvents: Constructed query groups
[2025-07-30T04:34:59.713Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:34:59.713Z] executeQueries: Processing group 1/2
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:34:59.713Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850071:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.713Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/3 in group 1 finished with 0 entries
[2025-07-30T04:34:59.713Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:34:59.713Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850071:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.713Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.713Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:34:59.713Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:34:59.713Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850071:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.713Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.713Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:34:59.713Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:59.713Z] executeQueries: Processing group 2/2
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:59.713Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.713Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:34:59.713Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:34:59.713Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:34:59.713Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:59.713Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:59.713Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:59.713Z] queryEvents: Raw query results count:
[2025-07-30T04:34:59.713Z] handleSubscription: Processing subscription sub15 with last timestamp: 1753850071
[2025-07-30T04:34:59.713Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:34:59.713Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:34:59.713Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:34:59.713Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:34:59.713Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:34:59.713Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:34:59.713Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:34:59.713Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:34:59.713Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:34:59.713Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:34:59.713Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:34:59.713Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:34:59.713Z] queryEvents: Constructed query groups
[2025-07-30T04:34:59.713Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:34:59.713Z] executeQueries: Processing group 1/3
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:34:59.713Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.713Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:34:59.713Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:34:59.713Z] executeQueries: Processing group 2/3
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:34:59.713Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850072:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.713Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:34:59.713Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:34:59.713Z] executeQueries: Processing group 3/3
[2025-07-30T04:34:59.713Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:34:59.714Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:34:59.714Z] executeQueries:   starting read stream
[2025-07-30T04:34:59.714Z] executeQueries:  Query 1/1 in group 3 finished with 0 entries
[2025-07-30T04:34:59.714Z] executeQueries: Group 3 produced 0 unique IDs
[2025-07-30T04:34:59.714Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:34:59.714Z] findCommonIds: No IDs in first result set
[2025-07-30T04:34:59.714Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:34:59.714Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:34:59.714Z] queryEvents: Raw query results count:
[2025-07-30T04:34:59.714Z] handleSubscription: Total events and EOSE messages for client:
4
[RelayServer] Found 4 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Updating subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:59.714Z] RelayManager: Updating subscriptions for connection ededb4f3552662d898979b34ba408d3b
Updated subscription data: {
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:59.714Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:59.714Z] NostrRelay.apply: Applying batch
[2025-07-30T04:34:59.714Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:34:59.714Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:59.714Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 203
[2025-07-30T04:34:59.719Z] updateSubscriptions: Updated subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:34:59.719Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850100276,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850105277,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:35:09.754Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:09.754Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:09.754Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:09.754Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":202,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:35:09.754Z] handleSubscription: Active subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:09.754Z] handleSubscription: Processing subscription sub12 with last timestamp: 1753850070
[2025-07-30T04:35:09.754Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:09.754Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.754Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:09.754Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.754Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:09.754Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:09.754Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:35:09.754Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:09.754Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:09.754Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:09.754Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:09.754Z] queryEvents: Constructed query groups
[2025-07-30T04:35:09.754Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:09.754Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:09.754Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:09.754Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850071:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.754Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.754Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:09.754Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:09.754Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:09.754Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:09.754Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.754Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:09.755Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:09.755Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:09.755Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:09.755Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:09.755Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:09.755Z] queryEvents: Raw query results count:
[2025-07-30T04:35:09.755Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:09.755Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.755Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:09.755Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.755Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:09.755Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:09.755Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:09.755Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:09.755Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:09.755Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:09.755Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:09.755Z] queryEvents: Constructed query groups
[2025-07-30T04:35:09.755Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:09.755Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:09.755Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.755Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:09.755Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:09.755Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:09.755Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.755Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:09.755Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:09.755Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:09.755Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:09.755Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:09.755Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:09.755Z] queryEvents: Raw query results count:
[2025-07-30T04:35:09.755Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:09.755Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.755Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:09.755Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.755Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:09.755Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:09.755Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:09.755Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:09.755Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:09.755Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:09.755Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:09.755Z] queryEvents: Constructed query groups
[2025-07-30T04:35:09.755Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:09.755Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:09.755Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.755Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:09.755Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:09.755Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:09.755Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.755Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:09.755Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:09.755Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:09.755Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:09.755Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:09.755Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:09.755Z] queryEvents: Raw query results count:
[2025-07-30T04:35:09.755Z] handleSubscription: Processing subscription sub13 with last timestamp: 1753850071
[2025-07-30T04:35:09.755Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:09.755Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.755Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:09.755Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.755Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:09.755Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:09.755Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:09.755Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:09.755Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:09.755Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:09.755Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:09.755Z] queryEvents: Constructed query groups
[2025-07-30T04:35:09.755Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:09.755Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:09.755Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.755Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:09.755Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:09.755Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:09.755Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:09.755Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.755Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.756Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:09.756Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:09.756Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:09.756Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:09.756Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:09.756Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:09.756Z] queryEvents: Raw query results count:
[2025-07-30T04:35:09.756Z] handleSubscription: Processing subscription sub14 with last timestamp: 1753850070
[2025-07-30T04:35:09.756Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:09.756Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.756Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:09.756Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.756Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:09.756Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:09.756Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:09.756Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:09.756Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:09.756Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:09.756Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:09.756Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:09.756Z] queryEvents: Constructed query groups
[2025-07-30T04:35:09.756Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:09.756Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:09.756Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:35:09.756Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.756Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.756Z] executeQueries:  Query 1/2 in group 1 finished with 0 entries
[2025-07-30T04:35:09.756Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:35:09.756Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.756Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.756Z] executeQueries:  Query 2/2 in group 1 finished with 0 entries
[2025-07-30T04:35:09.756Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:09.756Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:09.756Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:09.756Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.756Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.756Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:09.756Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:09.756Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:09.756Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:09.756Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:09.756Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:09.756Z] queryEvents: Raw query results count:
[2025-07-30T04:35:09.756Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:09.756Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.756Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:09.756Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:09.756Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:09.756Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:09.756Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:35:09.756Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:35:09.756Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:35:09.756Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:09.756Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:09.756Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:09.756Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:09.756Z] queryEvents: Constructed query groups
[2025-07-30T04:35:09.756Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:09.756Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:09.756Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:35:09.756Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850071:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.756Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.756Z] executeQueries:  Query 1/3 in group 1 finished with 0 entries
[2025-07-30T04:35:09.756Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:35:09.756Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850071:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.756Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.757Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:35:09.757Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:35:09.757Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850071:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.757Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.757Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:35:09.757Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:09.757Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:09.757Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:09.757Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.757Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.757Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:35:09.757Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:35:09.757Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:09.757Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:09.757Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:09.757Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:09.757Z] queryEvents: Raw query results count:
[2025-07-30T04:35:09.757Z] handleSubscription: Processing subscription sub15 with last timestamp: 1753850071
[2025-07-30T04:35:09.757Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:09.757Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:09.757Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:09.757Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:09.757Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:09.757Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:09.757Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:09.757Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:35:09.757Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:09.757Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:09.757Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:09.757Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:35:09.757Z] queryEvents: Constructed query groups
[2025-07-30T04:35:09.757Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:35:09.757Z] executeQueries: Processing group 1/3
[2025-07-30T04:35:09.757Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:09.757Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.757Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.757Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:09.757Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:09.757Z] executeQueries: Processing group 2/3
[2025-07-30T04:35:09.757Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:09.757Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850072:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.757Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.757Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:09.757Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:09.757Z] executeQueries: Processing group 3/3
[2025-07-30T04:35:09.757Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:35:09.757Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:09.757Z] executeQueries:   starting read stream
[2025-07-30T04:35:09.757Z] executeQueries:  Query 1/1 in group 3 finished with 0 entries
[2025-07-30T04:35:09.757Z] executeQueries: Group 3 produced 0 unique IDs
[2025-07-30T04:35:09.757Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:35:09.757Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:09.757Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:09.757Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:09.757Z] queryEvents: Raw query results count:
[2025-07-30T04:35:09.757Z] handleSubscription: Total events and EOSE messages for client:
4
[RelayServer] Found 4 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Updating subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:09.757Z] RelayManager: Updating subscriptions for connection ededb4f3552662d898979b34ba408d3b
Updated subscription data: {
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:09.757Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:09.758Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:09.758Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:09.758Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:09.758Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 204
[2025-07-30T04:35:09.762Z] updateSubscriptions: Updated subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:09.762Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[RelayServer] Health state updated: {
  status: 'healthy',
  activeRelays: 1,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'healthy',
  activeRelays: 1,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753850110222,"status":"healthy","activeRelaysCount":1,"metrics":{"totalRequests":24,"successfulRequests":24,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850110278,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850115279,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 1
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:35:19.797Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:19.797Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:19.797Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:19.798Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":203,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:35:19.798Z] handleSubscription: Active subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:19.798Z] handleSubscription: Processing subscription sub12 with last timestamp: 1753850070
[2025-07-30T04:35:19.798Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:19.798Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.798Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:19.798Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.798Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:19.798Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:19.798Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:35:19.798Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:19.798Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:19.798Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:19.798Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:19.798Z] queryEvents: Constructed query groups
[2025-07-30T04:35:19.798Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:19.798Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:19.798Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:19.798Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850071:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.798Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.798Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:19.798Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:19.798Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:19.798Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:19.799Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.799Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.799Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:19.799Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:19.799Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:19.799Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:19.799Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:19.799Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:19.799Z] queryEvents: Raw query results count:
[2025-07-30T04:35:19.799Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:19.799Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.799Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:19.799Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.799Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:19.799Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:19.799Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:19.799Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:19.799Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:19.799Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:19.799Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:19.799Z] queryEvents: Constructed query groups
[2025-07-30T04:35:19.799Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:19.799Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:19.799Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:19.799Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.799Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.799Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:19.799Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:19.799Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:19.799Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:19.799Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.799Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.799Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:19.799Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:19.799Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:19.799Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:19.799Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:19.799Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:19.799Z] queryEvents: Raw query results count:
[2025-07-30T04:35:19.799Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:19.799Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.799Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:19.799Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.799Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:19.799Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:19.799Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:19.799Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:19.799Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:19.799Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:19.799Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:19.799Z] queryEvents: Constructed query groups
[2025-07-30T04:35:19.799Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:19.799Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:19.799Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:19.799Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.799Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.799Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:19.799Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:19.799Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:19.799Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:19.799Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.799Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.800Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:19.800Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:19.800Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:19.800Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:19.800Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:19.800Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:19.800Z] queryEvents: Raw query results count:
[2025-07-30T04:35:19.800Z] handleSubscription: Processing subscription sub13 with last timestamp: 1753850071
[2025-07-30T04:35:19.800Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:19.800Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.800Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:19.800Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.800Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:19.800Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:19.800Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:19.800Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:19.800Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:19.800Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:19.800Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:19.800Z] queryEvents: Constructed query groups
[2025-07-30T04:35:19.800Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:19.800Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:19.800Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:19.800Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.800Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.800Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:19.800Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:19.800Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:19.800Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:19.800Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.800Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.801Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:19.801Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:19.801Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:19.801Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:19.801Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:19.801Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:19.801Z] queryEvents: Raw query results count:
[2025-07-30T04:35:19.801Z] handleSubscription: Processing subscription sub14 with last timestamp: 1753850070
[2025-07-30T04:35:19.801Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:19.801Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.801Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:19.801Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.801Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:19.801Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:19.801Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:19.801Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:19.801Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:19.801Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:19.801Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:19.801Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:19.801Z] queryEvents: Constructed query groups
[2025-07-30T04:35:19.801Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:19.801Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:19.801Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:35:19.801Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.801Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.801Z] executeQueries:  Query 1/2 in group 1 finished with 0 entries
[2025-07-30T04:35:19.801Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:35:19.801Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.801Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.802Z] executeQueries:  Query 2/2 in group 1 finished with 0 entries
[2025-07-30T04:35:19.802Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:19.802Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:19.802Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:19.802Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.802Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.802Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:19.802Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:19.802Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:19.802Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:19.802Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:19.802Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:19.802Z] queryEvents: Raw query results count:
[2025-07-30T04:35:19.802Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:19.802Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.802Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:19.802Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:19.802Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:19.802Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:19.802Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:35:19.802Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:35:19.802Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:35:19.802Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:19.802Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:19.802Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:19.802Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:19.802Z] queryEvents: Constructed query groups
[2025-07-30T04:35:19.802Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:19.802Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:19.802Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:35:19.802Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850071:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.802Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.802Z] executeQueries:  Query 1/3 in group 1 finished with 0 entries
[2025-07-30T04:35:19.802Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:35:19.802Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850071:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.802Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.802Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:35:19.802Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:35:19.802Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850071:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.802Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.802Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:35:19.802Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:19.802Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:19.802Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:19.802Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.802Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.802Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:35:19.802Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:35:19.802Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:19.802Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:19.802Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:19.802Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:19.802Z] queryEvents: Raw query results count:
[2025-07-30T04:35:19.802Z] handleSubscription: Processing subscription sub15 with last timestamp: 1753850071
[2025-07-30T04:35:19.802Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:19.802Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:19.802Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:19.802Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:19.802Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:19.802Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:19.802Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:19.802Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:35:19.802Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:19.802Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:19.802Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:19.802Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:35:19.802Z] queryEvents: Constructed query groups
[2025-07-30T04:35:19.802Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:35:19.802Z] executeQueries: Processing group 1/3
[2025-07-30T04:35:19.802Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:19.802Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.802Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.803Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:19.803Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:19.803Z] executeQueries: Processing group 2/3
[2025-07-30T04:35:19.803Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:19.803Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850072:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.803Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.803Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:19.803Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:19.803Z] executeQueries: Processing group 3/3
[2025-07-30T04:35:19.803Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:35:19.803Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:19.803Z] executeQueries:   starting read stream
[2025-07-30T04:35:19.803Z] executeQueries:  Query 1/1 in group 3 finished with 0 entries
[2025-07-30T04:35:19.803Z] executeQueries: Group 3 produced 0 unique IDs
[2025-07-30T04:35:19.803Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:35:19.803Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:19.803Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:19.803Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:19.803Z] queryEvents: Raw query results count:
[2025-07-30T04:35:19.803Z] handleSubscription: Total events and EOSE messages for client:
4
[RelayServer] Found 4 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Updating subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:19.803Z] RelayManager: Updating subscriptions for connection ededb4f3552662d898979b34ba408d3b
Updated subscription data: {
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:19.803Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:19.803Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:19.803Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:19.803Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:19.803Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 205
[2025-07-30T04:35:19.807Z] updateSubscriptions: Updated subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:19.807Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850120280,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850125282,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: POST /post/join/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Join request for relay: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Publishing event to relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo: {
  kind: 9021,
  content: 'Request to join the group',
  tags: [ [Array] ],
  created_at: 1753850125,
  pubkey: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
  id: 'a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137',
  sig: 'b8388200a8b8768bb76a9cdbfb22fe0f2adbd156156096b4bf9cf7200379fb58c2b581c0ebca2ff1bfbafd394e43575b75f6897fe3ec9258295c43adecb31f75'
}
[2025-07-30T04:35:25.756Z] publishEvent: Attempting to publish event:
{
  "kind": 9021,
  "content": "Request to join the group",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  ],
  "created_at": 1753850125,
  "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
  "id": "a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137",
  "sig": "b8388200a8b8768bb76a9cdbfb22fe0f2adbd156156096b4bf9cf7200379fb58c2b581c0ebca2ff1bfbafd394e43575b75f6897fe3ec9258295c43adecb31f75"
}
Verifying Event Signature ===
Serialized Event: [0,"61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",1753850125,9021,[["h","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"]],"Request to join the group"]
Event Hash: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
Verification Details:
Public Key: 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914
Signature: b8388200a8b8768bb76a9cdbfb22fe0f2adbd156156096b4bf9cf7200379fb58c2b581c0ebca2ff1bfbafd394e43575b75f6897fe3ec9258295c43adecb31f75
Verification Result: true
[2025-07-30T04:35:25.778Z] publishEvent: Event verification result:
true
[2025-07-30T04:35:25.778Z] publishEvent: Publishing event with ID: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:25.778Z] validateEvent: Validating event:
{
  "kind": 9021,
  "content": "Request to join the group",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  ],
  "created_at": 1753850125,
  "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
  "id": "a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137",
  "sig": "b8388200a8b8768bb76a9cdbfb22fe0f2adbd156156096b4bf9cf7200379fb58c2b581c0ebca2ff1bfbafd394e43575b75f6897fe3ec9258295c43adecb31f75"
}
[2025-07-30T04:35:25.778Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing event with ID: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing kind index for event a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137 under key: kind:09021:created_at:1753850125:id:a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing pubkey index for event a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850125:id:a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing created_at index for event a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137 under key: created_at:1753850125:id:a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing tag index for event a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850125:id:a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] validateEvent: Validating event:
{
  "kind": 9021,
  "content": "Request to join the group",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  ],
  "created_at": 1753850125,
  "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
  "id": "a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137",
  "sig": "b8388200a8b8768bb76a9cdbfb22fe0f2adbd156156096b4bf9cf7200379fb58c2b581c0ebca2ff1bfbafd394e43575b75f6897fe3ec9258295c43adecb31f75"
}
[2025-07-30T04:35:25.778Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing event with ID: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing kind index for event a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137 under key: kind:09021:created_at:1753850125:id:a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing pubkey index for event a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850125:id:a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing created_at index for event a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137 under key: created_at:1753850125:id:a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Storing tag index for event a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850125:id:a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:25.778Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 215
[2025-07-30T04:35:25.781Z] publishEvent: Event published successfully: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[RelayServer] Event published successfully: [
  'OK',
  'a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137',
  true,
  ''
]
[RelayServer] Published kind 9021 join request event
[ChallengeStore] Stored challenge for 61d855c6...
[RelayServer] Generated challenge for 61d855c6...
[RelayProtocol] Received request: POST /verify-ownership
[RelayServer] ========================================
[RelayServer] VERIFY OWNERSHIP REQUEST
[RelayServer] Verifying for pubkey: 61d855c6...
[RelayServer] Ciphertext length: 108
[RelayServer] IV length: 24
[ChallengeManager] Verifying challenge for 61d855c6...
[ChallengeManager] Shared key: 684d14ad6cc5d8ef...
[ChallengeManager] Decrypted: 441784ff5bbfa4217f67fff2b9646236990407c2fe60d62995e3c74a5caf4c92
[ChallengeManager] Expected: 441784ff5bbfa4217f67fff2b9646236990407c2fe60d62995e3c74a5caf4c92
[ChallengeManager] Challenge verified successfully
[RelayServer] Verification SUCCESSFUL
[RelayServer] Token: e5971038b867cf51...
[RelayServer] Identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayAuthStore] Added auth for 61d855c6... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:25.856Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:25.856Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayServer] Publishing kind 9000 event for 61d855c6...
[RelayServer] Publishing event to relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo: {
  kind: 9000,
  content: 'Adding user 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914 with auth token',
  created_at: 1753850125,
  tags: [ [Array], [Array] ],
  pubkey: '3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182',
  id: '8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac',
  sig: '2ca18a30de74df069cb044ec8ff7739c5b9890dd1cc03d1476d146857f9669611f411ba84789aa56d9425a670c9cadf8e70884c6b9858c25e3c6f9eafcf1a43e'
}
[2025-07-30T04:35:25.876Z] publishEvent: Attempting to publish event:
{
  "kind": 9000,
  "content": "Adding user 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914 with auth token",
  "created_at": 1753850125,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member",
      "e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0"
    ]
  ],
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac",
  "sig": "2ca18a30de74df069cb044ec8ff7739c5b9890dd1cc03d1476d146857f9669611f411ba84789aa56d9425a670c9cadf8e70884c6b9858c25e3c6f9eafcf1a43e"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850125,9000,[["h","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["p","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","member","e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0"]],"Adding user 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914 with auth token"]
Event Hash: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: 2ca18a30de74df069cb044ec8ff7739c5b9890dd1cc03d1476d146857f9669611f411ba84789aa56d9425a670c9cadf8e70884c6b9858c25e3c6f9eafcf1a43e
Verification Result: true
[2025-07-30T04:35:25.927Z] publishEvent: Event verification result:
true
[2025-07-30T04:35:25.927Z] publishEvent: Publishing event with ID: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.927Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:25.927Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914 with auth token",
  "created_at": 1753850125,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member",
      "e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0"
    ]
  ],
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac",
  "sig": "2ca18a30de74df069cb044ec8ff7739c5b9890dd1cc03d1476d146857f9669611f411ba84789aa56d9425a670c9cadf8e70884c6b9858c25e3c6f9eafcf1a43e"
}
[2025-07-30T04:35:25.927Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:25.927Z] NostrRelay.apply: Storing event with ID: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.927Z] NostrRelay.apply: Storing kind index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: kind:09000:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing pubkey index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing created_at index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing tag index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing tag index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914 with auth token",
  "created_at": 1753850125,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member",
      "e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0"
    ]
  ],
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac",
  "sig": "2ca18a30de74df069cb044ec8ff7739c5b9890dd1cc03d1476d146857f9669611f411ba84789aa56d9425a670c9cadf8e70884c6b9858c25e3c6f9eafcf1a43e"
}
[2025-07-30T04:35:25.928Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing event with ID: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing kind index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: kind:09000:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing pubkey index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing created_at index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing tag index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing tag index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914 with auth token",
  "created_at": 1753850125,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member",
      "e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0"
    ]
  ],
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac",
  "sig": "2ca18a30de74df069cb044ec8ff7739c5b9890dd1cc03d1476d146857f9669611f411ba84789aa56d9425a670c9cadf8e70884c6b9858c25e3c6f9eafcf1a43e"
}
[2025-07-30T04:35:25.928Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing event with ID: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing kind index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: kind:09000:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing pubkey index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing created_at index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing tag index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Storing tag index for event 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850125:id:8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:25.928Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 233
[2025-07-30T04:35:25.930Z] publishEvent: Event published successfully: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[RelayServer] Event published successfully: [
  'OK',
  '8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac',
  true,
  ''
]
[RelayServer] Published kind 9000 event: 8eeb926a...
[RelayServer] Auth finalized successfully

Peer joined 07ff57c801c6056a
Initialized Protomux on the connection
Opened add-writer protocol
Sent writer key: 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
add-writer protocol opened!
Received new writer key: 9a6c9f7430927abe994ff4e2c6ba658db61dbd0e9d5e0f37dcc9a6a0ad046340
Adding writer: 9a6c9f7430927abe994ff4e2c6ba658db61dbd0e9d5e0f37dcc9a6a0ad046340

Adding writer 9a6c9f7430927abe994ff4e2c6ba658db61dbd0e9d5e0f37dcc9a6a0ad046340
[2025-07-30T04:35:29.209Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:29.209Z] NostrRelay.apply: Flushing batch
Writer key added successfully
add-writer protocol closed!
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:35:29.847Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:29.847Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:29.847Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:29.847Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":204,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:35:29.847Z] handleSubscription: Active subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:29.847Z] handleSubscription: Processing subscription sub12 with last timestamp: 1753850070
[2025-07-30T04:35:29.847Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:29.847Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.847Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:29.847Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.847Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:29.847Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:29.847Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:35:29.847Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:29.847Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:29.847Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:29.847Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:29.847Z] queryEvents: Constructed query groups
[2025-07-30T04:35:29.847Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:29.847Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:29.847Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:29.847Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850071:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.847Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:29.848Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:29.848Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:29.848Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:29.848Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:29.848Z] queryEvents: Raw query results count:
[2025-07-30T04:35:29.848Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:29.848Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:29.848Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:29.848Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:29.848Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:29.848Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:29.848Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:29.848Z] queryEvents: Constructed query groups
[2025-07-30T04:35:29.848Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:29.848Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:29.848Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:29.848Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:29.848Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:29.848Z] queryEvents: Raw query results count:
[2025-07-30T04:35:29.848Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:29.848Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:29.848Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:29.848Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:29.848Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:29.848Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:29.848Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:29.848Z] queryEvents: Constructed query groups
[2025-07-30T04:35:29.848Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:29.848Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:29.848Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:29.848Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:29.848Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:29.848Z] queryEvents: Raw query results count:
[2025-07-30T04:35:29.848Z] handleSubscription: Processing subscription sub13 with last timestamp: 1753850071
[2025-07-30T04:35:29.848Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:29.848Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:29.848Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:29.848Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:29.848Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:29.848Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:29.848Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:29.848Z] queryEvents: Constructed query groups
[2025-07-30T04:35:29.848Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2 finished with 2 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 2 produced 2 unique IDs
[2025-07-30T04:35:29.848Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:29.848Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:29.848Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:29.848Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:29.848Z] queryEvents: Raw query results count:
[2025-07-30T04:35:29.848Z] handleSubscription: Processing subscription sub14 with last timestamp: 1753850070
[2025-07-30T04:35:29.848Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:29.848Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:29.848Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:29.848Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:29.848Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:29.848Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:29.848Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:29.848Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:29.848Z] queryEvents: Constructed query groups
[2025-07-30T04:35:29.848Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/2 in group 1 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 2/2 in group 1 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:29.848Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:29.848Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:29.848Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:29.848Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:29.848Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:29.848Z] queryEvents: Raw query results count:
[2025-07-30T04:35:29.848Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:29.848Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:29.848Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:29.848Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:29.848Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:29.848Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:35:29.848Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:35:29.848Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:29.848Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:29.848Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:29.848Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:29.848Z] queryEvents: Constructed query groups
[2025-07-30T04:35:29.848Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:29.848Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:35:29.848Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850071:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.848Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.848Z] executeQueries:  Query 1/3 in group 1 finished with 1 entries
[2025-07-30T04:35:29.848Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:35:29.849Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850071:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.849Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.849Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:35:29.849Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:35:29.849Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850071:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.849Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.849Z] executeQueries:  Query 3/3 in group 1 finished with 1 entries
[2025-07-30T04:35:29.849Z] executeQueries: Group 1 produced 2 unique IDs
[2025-07-30T04:35:29.849Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:29.849Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:29.849Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.849Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.849Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:35:29.849Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:35:29.849Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:29.849Z] findCommonIds: Processing result set 2, size: 3
[2025-07-30T04:35:29.849Z] findCommonIds: After intersection with set 2: reduced from 2 to 2 common IDs
[2025-07-30T04:35:29.849Z] findCommonIds: Final common ID count: 2
[2025-07-30T04:35:29.849Z] executeQueries: Found 2 common IDs across all groups
[2025-07-30T04:35:29.849Z] getEvent: Attempting to retrieve event with ID: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:29.849Z] getEvent: Converted key: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:29.849Z] getEvent: Event found for ID 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:29.849Z] getEvent: Attempting to retrieve event with ID: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:29.849Z] getEvent: Converted key: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:29.849Z] getEvent: Event found for ID a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:29.849Z] executeQueries: Successfully retrieved 2 full events
[2025-07-30T04:35:29.849Z] queryEvents: Raw query results count:
2
[2025-07-30T04:35:29.849Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub14:
{
  "previous": 1753850070,
  "new": 1753850125
}
[2025-07-30T04:35:29.849Z] handleSubscription: Processing subscription sub15 with last timestamp: 1753850071
[2025-07-30T04:35:29.849Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:29.849Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:29.849Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:29.849Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:29.849Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:29.849Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:29.849Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:29.849Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:35:29.849Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:29.849Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:29.849Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:29.849Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:35:29.849Z] queryEvents: Constructed query groups
[2025-07-30T04:35:29.849Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:35:29.849Z] executeQueries: Processing group 1/3
[2025-07-30T04:35:29.849Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:29.849Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.849Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.849Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:29.849Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:29.849Z] executeQueries: Processing group 2/3
[2025-07-30T04:35:29.849Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:29.849Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850072:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.849Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.849Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:35:29.849Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:35:29.849Z] executeQueries: Processing group 3/3
[2025-07-30T04:35:29.849Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:35:29.849Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:29.849Z] executeQueries:   starting read stream
[2025-07-30T04:35:29.849Z] executeQueries:  Query 1/1 in group 3 finished with 2 entries
[2025-07-30T04:35:29.849Z] executeQueries: Group 3 produced 2 unique IDs
[2025-07-30T04:35:29.849Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:35:29.849Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:29.849Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:29.849Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:29.849Z] queryEvents: Raw query results count:
[2025-07-30T04:35:29.849Z] handleSubscription: Total events and EOSE messages for client:
6
[RelayServer] Found 6 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Updating subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:29.849Z] RelayManager: Updating subscriptions for connection ededb4f3552662d898979b34ba408d3b
Updated subscription data: {
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850125
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:29.849Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850125
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:29.849Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:29.849Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850125
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:29.849Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:29.849Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 234
[2025-07-30T04:35:29.851Z] updateSubscriptions: Updated subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:29.851Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[Worker] Received from parent: {
  type: 'update-auth-data',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    pubkey: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
    token: 'e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0'
  }
}
[Worker] Update auth data requested: {
  relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
  publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
  pubkey: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
  token: 'e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0'
}
[Worker] Received from parent: {
  type: 'update-members',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    members: [Array],
    member_adds: [Array],
    member_removes: [Array]
  }
}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:29.887Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[Worker] Sending message: {"type":"auth-data-updated","identifier":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","pubkey":"61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:29.889Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"members-updated","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd"}
[Worker] Received from parent: {
  type: 'update-auth-data',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    pubkey: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
    token: 'e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0'
  }
}
[Worker] Update auth data requested: {
  relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
  publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
  pubkey: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
  token: 'e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0'
}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:29.890Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[Worker] Sending message: {"type":"auth-data-updated","identifier":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","pubkey":"61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[2025-07-30T04:35:30.022Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:30.022Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914 with auth token",
  "created_at": 1753850129,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member",
      "e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0"
    ]
  ],
  "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
  "id": "554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3",
  "sig": "3985f5fc2076310dd2b2aa6b30650be00c4fa06ccd5753f7b87a4b5dd125af47fe136a444be0ce181a12daec4c4d48882205d1a6821a6752cf25e2a73270e4ab"
}
[2025-07-30T04:35:30.022Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:30.022Z] NostrRelay.apply: Storing event with ID: 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.022Z] NostrRelay.apply: Storing kind index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: kind:09000:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.022Z] NostrRelay.apply: Storing pubkey index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.022Z] NostrRelay.apply: Storing created_at index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.022Z] NostrRelay.apply: Storing tag index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.022Z] NostrRelay.apply: Storing tag index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.022Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914 with auth token",
  "created_at": 1753850129,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member",
      "e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0"
    ]
  ],
  "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
  "id": "554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3",
  "sig": "3985f5fc2076310dd2b2aa6b30650be00c4fa06ccd5753f7b87a4b5dd125af47fe136a444be0ce181a12daec4c4d48882205d1a6821a6752cf25e2a73270e4ab"
}
[2025-07-30T04:35:30.022Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing event with ID: 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing kind index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: kind:09000:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing pubkey index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing created_at index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing tag index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing tag index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914 with auth token",
  "created_at": 1753850129,
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member",
      "e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0"
    ]
  ],
  "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
  "id": "554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3",
  "sig": "3985f5fc2076310dd2b2aa6b30650be00c4fa06ccd5753f7b87a4b5dd125af47fe136a444be0ce181a12daec4c4d48882205d1a6821a6752cf25e2a73270e4ab"
}
[2025-07-30T04:35:30.023Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing event with ID: 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing kind index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: kind:09000:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing pubkey index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing created_at index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing tag index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Storing tag index for event 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3 under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850129:id:554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:30.023Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 252
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:35:30.091Z] handleMessage: Received message:
[
  "REQ",
  "sub19",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:30.091Z] handleMessage: Processing REQ message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:30.091Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:30.091Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:30.091Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":233,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850125},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:35:30.091Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub19",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:30.092Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:30.092Z] validateFilters: All filters are valid
[2025-07-30T04:35:30.092Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:35:30.107Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:30.107Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850125
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ]
    }
  }
}
[2025-07-30T04:35:30.107Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:30.107Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 253
[2025-07-30T04:35:30.108Z] publishSubscription: Published subscription for connection: ededb4f3552662d898979b34ba408d3b, subscriptionId: sub19
[2025-07-30T04:35:30.108Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub19 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850130283,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: {
  type: 'update-members',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    members: [Array]
  }
}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:30.392Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"members-updated","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[RelayServer] Keepalive check for 2ea4b330...
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 61d855c6...
[2025-07-30T04:35:30.993Z] handleSubscription: Handling subscription for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:30.993Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:30.993Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:30.993Z] getSubscriptions: No subscriptions found for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:30.993Z] handleSubscription: No active subscriptions for connection: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Found 0 events for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 61d855c6...
[2025-07-30T04:35:31.002Z] handleMessage: Received message:
[
  "REQ",
  "sub7",
  {
    "kinds": [
      39002,
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      9000,
      9001,
      9021
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:35:31.002Z] handleMessage: Processing REQ message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.002Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.002Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.003Z] getSubscriptions: No subscriptions found for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.003Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub7",
  {
    "kinds": [
      39002,
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      9000,
      9001,
      9021
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:35:31.003Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39002,
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      9000,
      9001,
      9021
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:35:31.003Z] validateFilters: All filters are valid
[2025-07-30T04:35:31.003Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:35:31.003Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:31.003Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:35:31.003Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.003Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 254
[2025-07-30T04:35:31.004Z] publishSubscription: Published subscription for connection: cd834f23bf1d91c65409ac747b5b3abc, subscriptionId: sub7
[2025-07-30T04:35:31.004Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub7 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 61d855c6...
[2025-07-30T04:35:31.051Z] handleMessage: Received message:
[
  "REQ",
  "sub19",
  {
    "kinds": [
      39000
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:35:31.051Z] handleMessage: Processing REQ message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.051Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.051Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.051Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":253,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:35:31.051Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub19",
  {
    "kinds": [
      39000
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:35:31.051Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39000
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  },
  {
    "kinds": [
      39001
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:35:31.051Z] validateFilters: All filters are valid
[2025-07-30T04:35:31.051Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:35:31.051Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:31.051Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:35:31.051Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.051Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 255
[2025-07-30T04:35:31.052Z] publishSubscription: Published subscription for connection: cd834f23bf1d91c65409ac747b5b3abc, subscriptionId: sub19
[2025-07-30T04:35:31.052Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub19 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 61d855c6...
[2025-07-30T04:35:31.101Z] handleMessage: Received message:
[
  "REQ",
  "sub20",
  {
    "kinds": [
      1
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:35:31.101Z] handleMessage: Processing REQ message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.101Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.101Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.101Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":254,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:35:31.101Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub20",
  {
    "kinds": [
      1
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:35:31.101Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      1
    ],
    "#h": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ]
  }
]
[2025-07-30T04:35:31.101Z] validateFilters: All filters are valid
[2025-07-30T04:35:31.101Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:35:31.101Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:31.101Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:35:31.101Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.101Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 256
[2025-07-30T04:35:31.102Z] publishSubscription: Published subscription for connection: cd834f23bf1d91c65409ac747b5b3abc, subscriptionId: sub20
[2025-07-30T04:35:31.102Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub20 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 61d855c6...
[2025-07-30T04:35:31.665Z] handleMessage: Received message:
[
  "REQ",
  "sub21",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:31.665Z] handleMessage: Processing REQ message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.665Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.665Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.665Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":255,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub20\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:35:31.665Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub21",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:31.665Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:31.665Z] validateFilters: All filters are valid
[2025-07-30T04:35:31.665Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:35:31.666Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:31.666Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub21": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ]
    }
  }
}
[2025-07-30T04:35:31.666Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:31.666Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 257
[2025-07-30T04:35:31.669Z] publishSubscription: Published subscription for connection: cd834f23bf1d91c65409ac747b5b3abc, subscriptionId: sub21
[2025-07-30T04:35:31.669Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub21 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[2025-07-30T04:35:33.079Z] handleMessage: Received message:
[
  "CLOSE",
  "sub19"
]
[2025-07-30T04:35:33.079Z] handleMessage: Processing CLOSE message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:33.079Z] unsubscribe: Removing subscription sub19 for connection ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:33.079Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:33.079Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:33.080Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":252,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850125},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071},\"sub19\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]}}}"}
[2025-07-30T04:35:33.080Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:33.080Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850125
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:33.080Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:33.080Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 258
[2025-07-30T04:35:33.081Z] unsubscribe: Successfully removed subscription sub19
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:35:33.081Z] handleMessage: Closed subscription sub19
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:35:33.191Z] handleMessage: Received message:
[
  "REQ",
  "sub20",
  {
    "kinds": [
      0
    ],
    "authors": [
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"
    ]
  }
]
[2025-07-30T04:35:33.191Z] handleMessage: Processing REQ message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:33.191Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:33.192Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:33.192Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":257,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850125},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:35:33.192Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub20",
  {
    "kinds": [
      0
    ],
    "authors": [
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"
    ]
  }
]
[2025-07-30T04:35:33.192Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      0
    ],
    "authors": [
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"
    ]
  }
]
[2025-07-30T04:35:33.192Z] validateFilters: All filters are valid
[2025-07-30T04:35:33.192Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:35:33.192Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:33.192Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850125
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            0
          ],
          "authors": [
            "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:35:33.192Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:33.192Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 259
[2025-07-30T04:35:33.192Z] publishSubscription: Published subscription for connection: ededb4f3552662d898979b34ba408d3b, subscriptionId: sub20
[2025-07-30T04:35:33.192Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub20 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[2025-07-30T04:35:34.656Z] handleMessage: Received message:
[
  "CLOSE",
  "sub21"
]
[2025-07-30T04:35:34.656Z] handleMessage: Processing CLOSE message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:34.656Z] unsubscribe: Removing subscription sub21 for connection cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:34.656Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:34.656Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:34.656Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":256,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub20\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub21\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]}}}"}
[2025-07-30T04:35:34.656Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:34.656Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:35:34.656Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:34.656Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 260
[2025-07-30T04:35:34.658Z] unsubscribe: Successfully removed subscription sub21
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:35:34.658Z] handleMessage: Closed subscription sub21
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850135284,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 61d855c6...
[2025-07-30T04:35:36.577Z] handleMessage: Received message:
[
  "REQ",
  "sub22",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:36.577Z] handleMessage: Processing REQ message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:36.577Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:36.577Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:36.578Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":259,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub20\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:35:36.578Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub22",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:36.578Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:36.578Z] validateFilters: All filters are valid
[2025-07-30T04:35:36.578Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:35:36.578Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:36.578Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub22": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ]
    }
  }
}
[2025-07-30T04:35:36.578Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:36.578Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 261
[2025-07-30T04:35:36.580Z] publishSubscription: Published subscription for connection: cd834f23bf1d91c65409ac747b5b3abc, subscriptionId: sub22
[2025-07-30T04:35:36.580Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub22 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[2025-07-30T04:35:38.095Z] handleMessage: Received message:
[
  "CLOSE",
  "sub20"
]
[2025-07-30T04:35:38.095Z] handleMessage: Processing CLOSE message for client connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:38.095Z] unsubscribe: Removing subscription sub20 for connection ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:38.095Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:38.095Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:38.095Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":258,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850125},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071},\"sub20\":{\"filters\":[{\"kinds\":[0],\"authors\":[\"61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914\"]}]}}}"}
[2025-07-30T04:35:38.095Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:38.095Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850125
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:38.095Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:38.096Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 262
[2025-07-30T04:35:38.096Z] unsubscribe: Successfully removed subscription sub20
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:35:38.096Z] handleMessage: Closed subscription sub20
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[2025-07-30T04:35:39.573Z] handleMessage: Received message:
[
  "CLOSE",
  "sub22"
]
[2025-07-30T04:35:39.573Z] handleMessage: Processing CLOSE message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:39.573Z] unsubscribe: Removing subscription sub22 for connection cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:39.573Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:39.573Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:39.573Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":260,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub20\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub22\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]}}}"}
[2025-07-30T04:35:39.573Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:39.573Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:35:39.573Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:39.573Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 263
[2025-07-30T04:35:39.574Z] unsubscribe: Successfully removed subscription sub22
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:35:39.574Z] handleMessage: Closed subscription sub22
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:35:39.886Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:39.886Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:39.886Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:39.886Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":261,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850125},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:35:39.886Z] handleSubscription: Active subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850125
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:39.886Z] handleSubscription: Processing subscription sub12 with last timestamp: 1753850070
[2025-07-30T04:35:39.886Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:39.886Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.886Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:39.886Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.886Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:39.886Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:39.886Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:35:39.886Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:39.886Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:39.886Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:39.886Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:39.886Z] queryEvents: Constructed query groups
[2025-07-30T04:35:39.886Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:39.886Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:39.886Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:39.886Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850071:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.886Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.887Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:39.887Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:39.887Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:39.887Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:39.887Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.887Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.887Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:39.887Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:39.887Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:39.887Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:39.887Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:39.887Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:39.887Z] queryEvents: Raw query results count:
[2025-07-30T04:35:39.887Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:39.887Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.887Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:39.887Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.887Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:39.887Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:39.887Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:39.887Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:39.887Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:39.887Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:39.887Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:39.887Z] queryEvents: Constructed query groups
[2025-07-30T04:35:39.887Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:39.887Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:39.887Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:39.887Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.887Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.887Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:39.887Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:39.887Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:39.887Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:39.887Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.887Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:39.888Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:39.888Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:39.888Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:39.888Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:39.888Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:39.888Z] queryEvents: Raw query results count:
[2025-07-30T04:35:39.888Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:39.888Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.888Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:39.888Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.888Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:39.888Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:39.888Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:39.888Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:39.888Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:39.888Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:39.888Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:39.888Z] queryEvents: Constructed query groups
[2025-07-30T04:35:39.888Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:39.888Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:39.888Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.888Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:39.888Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:39.888Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:39.888Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.888Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:39.888Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:39.888Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:39.888Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:39.888Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:39.888Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:39.888Z] queryEvents: Raw query results count:
[2025-07-30T04:35:39.888Z] handleSubscription: Processing subscription sub13 with last timestamp: 1753850071
[2025-07-30T04:35:39.888Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:39.888Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.888Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:39.888Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.888Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:39.888Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:39.888Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:39.888Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:39.888Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:39.888Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:39.888Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:39.888Z] queryEvents: Constructed query groups
[2025-07-30T04:35:39.888Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:39.888Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:39.888Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.888Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:39.888Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:39.888Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:39.888Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.888Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:35:39.888Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:35:39.888Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:39.888Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:39.888Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:39.888Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:39.888Z] queryEvents: Raw query results count:
[2025-07-30T04:35:39.888Z] handleSubscription: Processing subscription sub14 with last timestamp: 1753850125
[2025-07-30T04:35:39.888Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850125
[2025-07-30T04:35:39.888Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.888Z] queryEvents: Last returned event timestamp:
1753850125
[2025-07-30T04:35:39.888Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.888Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850125
[2025-07-30T04:35:39.888Z] constructQueries: Using time range - since: 1753850126, until: 9999999999
[2025-07-30T04:35:39.888Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:39.888Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:39.888Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:39.888Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:39.888Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:39.888Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:39.888Z] queryEvents: Constructed query groups
[2025-07-30T04:35:39.888Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:39.888Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:35:39.888Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850126:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.888Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/2 in group 1 finished with 0 entries
[2025-07-30T04:35:39.888Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:35:39.888Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850126:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.888Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.888Z] executeQueries:  Query 2/2 in group 1 finished with 0 entries
[2025-07-30T04:35:39.888Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:39.888Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:39.888Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850126:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.888Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:39.888Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:39.888Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:39.888Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:39.888Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:39.888Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:39.888Z] queryEvents: Raw query results count:
[2025-07-30T04:35:39.888Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850125
[2025-07-30T04:35:39.888Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.888Z] queryEvents: Last returned event timestamp:
1753850125
[2025-07-30T04:35:39.888Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:39.888Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850125
[2025-07-30T04:35:39.888Z] constructQueries: Using time range - since: 1753850126, until: 9999999999
[2025-07-30T04:35:39.888Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:35:39.888Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:35:39.888Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:35:39.888Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:39.888Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:39.888Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:39.888Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:39.888Z] queryEvents: Constructed query groups
[2025-07-30T04:35:39.888Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:39.888Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:35:39.888Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850126:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.888Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.888Z] executeQueries:  Query 1/3 in group 1 finished with 1 entries
[2025-07-30T04:35:39.888Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:35:39.888Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850126:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.888Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.889Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:35:39.889Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:35:39.889Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850126:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.889Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.889Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:35:39.889Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:35:39.889Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:39.889Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:39.889Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850126:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.889Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.889Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:35:39.889Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:35:39.889Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:39.889Z] findCommonIds: Processing result set 2, size: 1
[2025-07-30T04:35:39.889Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:35:39.889Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:35:39.889Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:35:39.889Z] getEvent: Attempting to retrieve event with ID: 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:39.889Z] getEvent: Converted key: 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:39.889Z] getEvent: Event found for ID 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:39.889Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:35:39.889Z] queryEvents: Raw query results count:
1
[2025-07-30T04:35:39.889Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub14:
{
  "previous": 1753850125,
  "new": 1753850129
}
[2025-07-30T04:35:39.889Z] handleSubscription: Processing subscription sub15 with last timestamp: 1753850071
[2025-07-30T04:35:39.889Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:39.889Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:39.889Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:39.889Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:39.889Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:39.889Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:39.889Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:39.889Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:35:39.889Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:39.889Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:39.889Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:39.889Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:35:39.889Z] queryEvents: Constructed query groups
[2025-07-30T04:35:39.889Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:35:39.889Z] executeQueries: Processing group 1/3
[2025-07-30T04:35:39.889Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:39.889Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.889Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.889Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:39.889Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:39.889Z] executeQueries: Processing group 2/3
[2025-07-30T04:35:39.889Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:39.889Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850072:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.889Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.889Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:35:39.889Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:35:39.889Z] executeQueries: Processing group 3/3
[2025-07-30T04:35:39.889Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:35:39.889Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:39.889Z] executeQueries:   starting read stream
[2025-07-30T04:35:39.889Z] executeQueries:  Query 1/1 in group 3 finished with 3 entries
[2025-07-30T04:35:39.889Z] executeQueries: Group 3 produced 3 unique IDs
[2025-07-30T04:35:39.889Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:35:39.889Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:39.889Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:39.889Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:39.889Z] queryEvents: Raw query results count:
[2025-07-30T04:35:39.889Z] handleSubscription: Total events and EOSE messages for client:
5
[RelayServer] Found 5 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Updating subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:39.889Z] RelayManager: Updating subscriptions for connection ededb4f3552662d898979b34ba408d3b
Updated subscription data: {
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:39.889Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:39.889Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:39.889Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:39.889Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:39.890Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 264
[2025-07-30T04:35:39.891Z] updateSubscriptions: Updated subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:39.891Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[Worker] Received from parent: {
  type: 'update-auth-data',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    pubkey: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
    token: 'e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0'
  }
}
[Worker] Update auth data requested: {
  relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
  publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
  pubkey: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
  token: 'e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0'
}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:39.946Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[Worker] Sending message: {"type":"auth-data-updated","identifier":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","pubkey":"61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"}
[Worker] Received from parent: {
  type: 'update-auth-data',
  data: {
    relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
    publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
    pubkey: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
    token: 'e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0'
  }
}
[Worker] Update auth data requested: {
  relayKey: '5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd',
  publicIdentifier: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo',
  pubkey: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
  token: 'e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0'
}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:39.949Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 61d855c6... on relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[Worker] Sending message: {"type":"auth-data-updated","identifier":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","pubkey":"61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"}
[RelayServer] Health state updated: {
  status: 'healthy',
  activeRelays: 1,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  }
}
[RelayServer] Periodic health check: {
  status: 'healthy',
  activeRelays: 1,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'connected',
    gatewayStatus: 'connected'
  },
  connectedPeers: 1,
  gatewayConnected: true
}
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753849747995,"lastCheck":1753850140229,"status":"healthy","activeRelaysCount":1,"metrics":{"totalRequests":41,"successfulRequests":41,"failedRequests":0,"lastMetricsReset":1753849747995},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850140285,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 61d855c6...
[2025-07-30T04:35:41.023Z] handleSubscription: Handling subscription for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.023Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.023Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.023Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":262,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub20\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:35:41.023Z] handleSubscription: Active subscriptions:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ]
    }
  }
}
[2025-07-30T04:35:41.023Z] handleSubscription: Processing subscription sub7 with last timestamp: undefined
[2025-07-30T04:35:41.023Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:35:41.023Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.023Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:35:41.023Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.023Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:35:41.023Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:35:41.023Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:41.023Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:41.023Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:41.023Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:41.023Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:41.023Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:41.023Z] queryEvents: Constructed query groups
[2025-07-30T04:35:41.023Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:41.023Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:41.023Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:35:41.023Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:0000000000:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.023Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.023Z] executeQueries:  Query 1/2 in group 1 finished with 3 entries
[2025-07-30T04:35:41.023Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:35:41.023Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:0000000000:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.023Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.023Z] executeQueries:  Query 2/2 in group 1 finished with 1 entries
[2025-07-30T04:35:41.023Z] executeQueries: Group 1 produced 4 unique IDs
[2025-07-30T04:35:41.023Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:41.023Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:41.023Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.023Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.024Z] executeQueries:  Query 1/1 in group 2 finished with 5 entries
[2025-07-30T04:35:41.024Z] executeQueries: Group 2 produced 5 unique IDs
[2025-07-30T04:35:41.024Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:41.024Z] findCommonIds: Processing result set 2, size: 5
[2025-07-30T04:35:41.024Z] findCommonIds: After intersection with set 2: reduced from 4 to 4 common IDs
[2025-07-30T04:35:41.024Z] findCommonIds: Final common ID count: 4
[2025-07-30T04:35:41.024Z] executeQueries: Found 4 common IDs across all groups
[2025-07-30T04:35:41.024Z] getEvent: Attempting to retrieve event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:35:41.024Z] getEvent: Converted key: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:35:41.024Z] getEvent: Event found for ID 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:35:41.024Z] getEvent: Attempting to retrieve event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:35:41.024Z] getEvent: Converted key: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:35:41.024Z] getEvent: Event found for ID 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:35:41.024Z] getEvent: Attempting to retrieve event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:35:41.024Z] getEvent: Converted key: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:35:41.024Z] getEvent: Event found for ID 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:35:41.024Z] getEvent: Attempting to retrieve event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:35:41.024Z] getEvent: Converted key: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:35:41.024Z] getEvent: Event found for ID bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:35:41.024Z] executeQueries: Successfully retrieved 4 full events
[2025-07-30T04:35:41.024Z] queryEvents: Raw query results count:
4
[2025-07-30T04:35:41.024Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub7:
{
  "new": 1753850070
}
[2025-07-30T04:35:41.024Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:35:41.024Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.024Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:35:41.024Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.024Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:35:41.024Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:35:41.024Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:35:41.024Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:35:41.024Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:35:41.024Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:41.024Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:41.024Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:41.024Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:41.024Z] queryEvents: Constructed query groups
[2025-07-30T04:35:41.024Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:41.024Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:41.024Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:35:41.024Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:0000000000:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.024Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.024Z] executeQueries:  Query 1/3 in group 1 finished with 3 entries
[2025-07-30T04:35:41.024Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:35:41.024Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:0000000000:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.024Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.024Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:35:41.024Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:35:41.024Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:0000000000:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.024Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.024Z] executeQueries:  Query 3/3 in group 1 finished with 1 entries
[2025-07-30T04:35:41.024Z] executeQueries: Group 1 produced 4 unique IDs
[2025-07-30T04:35:41.024Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:41.024Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:41.024Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.024Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.024Z] executeQueries:  Query 1/1 in group 2 finished with 7 entries
[2025-07-30T04:35:41.024Z] executeQueries: Group 2 produced 7 unique IDs
[2025-07-30T04:35:41.024Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:41.024Z] findCommonIds: Processing result set 2, size: 7
[2025-07-30T04:35:41.024Z] findCommonIds: After intersection with set 2: reduced from 4 to 4 common IDs
[2025-07-30T04:35:41.024Z] findCommonIds: Final common ID count: 4
[2025-07-30T04:35:41.024Z] executeQueries: Found 4 common IDs across all groups
[2025-07-30T04:35:41.024Z] getEvent: Attempting to retrieve event with ID: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:35:41.024Z] getEvent: Converted key: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:35:41.024Z] getEvent: Event found for ID 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:35:41.024Z] getEvent: Attempting to retrieve event with ID: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:41.024Z] getEvent: Converted key: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:41.024Z] getEvent: Event found for ID 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:35:41.024Z] getEvent: Attempting to retrieve event with ID: 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:41.024Z] getEvent: Converted key: 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:41.024Z] getEvent: Event found for ID 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:35:41.024Z] getEvent: Attempting to retrieve event with ID: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:41.024Z] getEvent: Converted key: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:41.024Z] getEvent: Event found for ID a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:35:41.024Z] executeQueries: Successfully retrieved 4 full events
[2025-07-30T04:35:41.024Z] queryEvents: Raw query results count:
4
[2025-07-30T04:35:41.024Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub7:
{
  "new": 1753850129
}
[2025-07-30T04:35:41.024Z] handleSubscription: Processing subscription sub19 with last timestamp: undefined
[2025-07-30T04:35:41.024Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:35:41.024Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.024Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:35:41.024Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.024Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:35:41.024Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:35:41.024Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:35:41.024Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:41.024Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:41.024Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:41.024Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:41.024Z] queryEvents: Constructed query groups
[2025-07-30T04:35:41.024Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:41.024Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:41.024Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:41.024Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:0000000000:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.024Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.024Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:35:41.024Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:35:41.024Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:41.024Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:41.024Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.024Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.024Z] executeQueries:  Query 1/1 in group 2 finished with 5 entries
[2025-07-30T04:35:41.024Z] executeQueries: Group 2 produced 5 unique IDs
[2025-07-30T04:35:41.024Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:41.024Z] findCommonIds: Processing result set 2, size: 5
[2025-07-30T04:35:41.024Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:35:41.024Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:35:41.024Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:35:41.024Z] getEvent: Attempting to retrieve event with ID: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:35:41.024Z] getEvent: Converted key: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:35:41.024Z] getEvent: Event found for ID 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:35:41.024Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:35:41.024Z] queryEvents: Raw query results count:
1
[2025-07-30T04:35:41.024Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub19:
{
  "new": 1753850059
}
[2025-07-30T04:35:41.024Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:35:41.024Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.024Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:35:41.024Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.024Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:35:41.025Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:35:41.025Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:41.025Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:41.025Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:41.025Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:41.025Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:41.025Z] queryEvents: Constructed query groups
[2025-07-30T04:35:41.025Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:41.025Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:41.025Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:0000000000:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.025Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 1 finished with 3 entries
[2025-07-30T04:35:41.025Z] executeQueries: Group 1 produced 3 unique IDs
[2025-07-30T04:35:41.025Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:41.025Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.025Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 2 finished with 5 entries
[2025-07-30T04:35:41.025Z] executeQueries: Group 2 produced 5 unique IDs
[2025-07-30T04:35:41.025Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:41.025Z] findCommonIds: Processing result set 2, size: 5
[2025-07-30T04:35:41.025Z] findCommonIds: After intersection with set 2: reduced from 3 to 3 common IDs
[2025-07-30T04:35:41.025Z] findCommonIds: Final common ID count: 3
[2025-07-30T04:35:41.025Z] executeQueries: Found 3 common IDs across all groups
[2025-07-30T04:35:41.025Z] getEvent: Attempting to retrieve event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:35:41.025Z] getEvent: Converted key: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:35:41.025Z] getEvent: Event found for ID 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:35:41.025Z] getEvent: Attempting to retrieve event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:35:41.025Z] getEvent: Converted key: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:35:41.025Z] getEvent: Event found for ID 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:35:41.025Z] getEvent: Attempting to retrieve event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:35:41.025Z] getEvent: Converted key: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:35:41.025Z] getEvent: Event found for ID 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:35:41.025Z] executeQueries: Successfully retrieved 3 full events
[2025-07-30T04:35:41.025Z] queryEvents: Raw query results count:
3
[2025-07-30T04:35:41.025Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub19:
{
  "new": 1753850070
}
[2025-07-30T04:35:41.025Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:35:41.025Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.025Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:35:41.025Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.025Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:35:41.025Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:35:41.025Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:41.025Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:41.025Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:41.025Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:41.025Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:41.025Z] queryEvents: Constructed query groups
[2025-07-30T04:35:41.025Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:41.025Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:41.025Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:0000000000:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.025Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:35:41.025Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:35:41.025Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:41.025Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.025Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 2 finished with 5 entries
[2025-07-30T04:35:41.025Z] executeQueries: Group 2 produced 5 unique IDs
[2025-07-30T04:35:41.025Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:41.025Z] findCommonIds: Processing result set 2, size: 5
[2025-07-30T04:35:41.025Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:35:41.025Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:35:41.025Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:35:41.025Z] getEvent: Attempting to retrieve event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:35:41.025Z] getEvent: Converted key: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:35:41.025Z] getEvent: Event found for ID bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:35:41.025Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:35:41.025Z] queryEvents: Raw query results count:
1
[2025-07-30T04:35:41.025Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub19:
{
  "new": 1753850060
}
[2025-07-30T04:35:41.025Z] handleSubscription: Processing subscription sub20 with last timestamp: undefined
[2025-07-30T04:35:41.025Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:35:41.025Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.025Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:35:41.025Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:41.025Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:35:41.025Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:35:41.025Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:41.025Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:41.025Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:41.025Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:41.025Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:41.025Z] queryEvents: Constructed query groups
[2025-07-30T04:35:41.025Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:41.025Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:41.025Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:0000000000:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.025Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:35:41.025Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:35:41.025Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:41.025Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:41.025Z] executeQueries:   starting read stream
[2025-07-30T04:35:41.025Z] executeQueries:  Query 1/1 in group 2 finished with 7 entries
[2025-07-30T04:35:41.025Z] executeQueries: Group 2 produced 7 unique IDs
[2025-07-30T04:35:41.025Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:41.025Z] findCommonIds: Processing result set 2, size: 7
[2025-07-30T04:35:41.025Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:35:41.025Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:35:41.025Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:35:41.025Z] getEvent: Attempting to retrieve event with ID: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:35:41.025Z] getEvent: Converted key: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:35:41.025Z] getEvent: Event found for ID def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:35:41.025Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:35:41.025Z] queryEvents: Raw query results count:
1
[2025-07-30T04:35:41.025Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub20:
{
  "new": 1753850071
}
[2025-07-30T04:35:41.025Z] handleSubscription: Total events and EOSE messages for client:
17
[RelayServer] Found 17 events for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Updating subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.025Z] RelayManager: Updating subscriptions for connection cd834f23bf1d91c65409ac747b5b3abc
Updated subscription data: {
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:41.025Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:41.025Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:41.025Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:41.025Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.025Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 265
[2025-07-30T04:35:41.026Z] updateSubscriptions: Updated subscriptions for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.026Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 61d855c6...
[2025-07-30T04:35:41.472Z] handleMessage: Received message:
[
  "REQ",
  "sub23",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:41.472Z] handleMessage: Processing REQ message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.472Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.472Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.472Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":264,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850129},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub20\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:35:41.472Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub23",
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:41.472Z] validateFilters: Validating filters:
[
  {
    "kinds": [
      39002
    ],
    "#d": [
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    "authors": [
      "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
    ],
    "limit": 1
  }
]
[2025-07-30T04:35:41.472Z] validateFilters: All filters are valid
[2025-07-30T04:35:41.472Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:35:41.472Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:41.472Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub23": {
      "filters": [
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ],
          "limit": 1
        }
      ]
    }
  }
}
[2025-07-30T04:35:41.472Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:41.472Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 266
[2025-07-30T04:35:41.473Z] publishSubscription: Published subscription for connection: cd834f23bf1d91c65409ac747b5b3abc, subscriptionId: sub23
[2025-07-30T04:35:41.473Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub23 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[2025-07-30T04:35:44.464Z] handleMessage: Received message:
[
  "CLOSE",
  "sub23"
]
[2025-07-30T04:35:44.464Z] handleMessage: Processing CLOSE message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:44.464Z] unsubscribe: Removing subscription sub23 for connection cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:44.464Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:44.464Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:44.464Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":265,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850129},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub20\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub23\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]}}}"}
[2025-07-30T04:35:44.464Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:44.464Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:44.464Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:44.464Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 267
[2025-07-30T04:35:44.467Z] unsubscribe: Successfully removed subscription sub23
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:35:44.467Z] handleMessage: Closed subscription sub23
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850145286,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 2ea4b330...
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] EVENT authenticated and authorized for 61d855c6...
[2025-07-30T04:35:47.469Z] handleMessage: Received message:
[
  "EVENT",
  {
    "kind": 1,
    "content": "bonjour",
    "tags": [
      [
        "h",
        "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
      ],
      [
        "previous",
        "def20727"
      ]
    ],
    "created_at": 1753850147,
    "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
    "id": "fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915",
    "sig": "366b4d35192993355c23c691a660d33837475190d1ebd7100ad619e4258f6b99e9ac40af71e94c1f497d3e9bb3f67b0d30ea7cb2fd10cd90ed76effa938da7c5"
  }
]
[2025-07-30T04:35:47.469Z] handleMessage: Processing EVENT message for client connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:47.469Z] publishEvent: Attempting to publish event:
{
  "kind": 1,
  "content": "bonjour",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "previous",
      "def20727"
    ]
  ],
  "created_at": 1753850147,
  "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
  "id": "fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915",
  "sig": "366b4d35192993355c23c691a660d33837475190d1ebd7100ad619e4258f6b99e9ac40af71e94c1f497d3e9bb3f67b0d30ea7cb2fd10cd90ed76effa938da7c5"
}
Verifying Event Signature ===
Serialized Event: [0,"61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",1753850147,1,[["h","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["previous","def20727"]],"bonjour"]
Event Hash: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
Verification Details:
Public Key: 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914
Signature: 366b4d35192993355c23c691a660d33837475190d1ebd7100ad619e4258f6b99e9ac40af71e94c1f497d3e9bb3f67b0d30ea7cb2fd10cd90ed76effa938da7c5
Verification Result: true
[2025-07-30T04:35:47.496Z] publishEvent: Event verification result:
true
[2025-07-30T04:35:47.496Z] publishEvent: Publishing event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:47.497Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "bonjour",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "previous",
      "def20727"
    ]
  ],
  "created_at": 1753850147,
  "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
  "id": "fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915",
  "sig": "366b4d35192993355c23c691a660d33837475190d1ebd7100ad619e4258f6b99e9ac40af71e94c1f497d3e9bb3f67b0d30ea7cb2fd10cd90ed76effa938da7c5"
}
[2025-07-30T04:35:47.497Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing kind index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: kind:00001:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing pubkey index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing created_at index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing tag index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "bonjour",
  "tags": [
    [
      "h",
      "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
    ],
    [
      "previous",
      "def20727"
    ]
  ],
  "created_at": 1753850147,
  "pubkey": "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
  "id": "fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915",
  "sig": "366b4d35192993355c23c691a660d33837475190d1ebd7100ad619e4258f6b99e9ac40af71e94c1f497d3e9bb3f67b0d30ea7cb2fd10cd90ed76effa938da7c5"
}
[2025-07-30T04:35:47.497Z] validateEvent: Event passed all validation checks
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing kind index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: kind:00001:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing pubkey index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing created_at index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Storing tag index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.497Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 277
[2025-07-30T04:35:47.498Z] publishEvent: Event published successfully: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:47.498Z] handleMessage: EVENT publish result:
[
  "OK",
  "fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/ededb4f3552662d898979b34ba408d3b
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:35:49.925Z] handleSubscription: Handling subscription for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:49.925Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:49.925Z] getSubscriptions: Converted key: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:49.925Z] getSubscriptions: Subscriptions found for connection ededb4f3552662d898979b34ba408d3b: {"seq":263,"key":{"0":237,"1":237,"2":180,"3":243,"4":85,"5":38,"6":98,"7":216,"8":152,"9":151,"10":155,"11":52,"12":186,"13":64,"14":141,"15":59},"value":"{\"connection\":\"ededb4f3552662d898979b34ba408d3b\",\"subscriptions\":{\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850070},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071},\"sub14\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850129},\"sub15\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:35:49.925Z] handleSubscription: Active subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:49.925Z] handleSubscription: Processing subscription sub12 with last timestamp: 1753850070
[2025-07-30T04:35:49.925Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:49.925Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.925Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:49.925Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.925Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:49.925Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:49.925Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:35:49.925Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:49.925Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:49.925Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:49.925Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:49.925Z] queryEvents: Constructed query groups
[2025-07-30T04:35:49.925Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:49.925Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:49.925Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:49.925Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850071:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.925Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:49.926Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:49.926Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:49.926Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.926Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:49.926Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:49.926Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:49.926Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:49.926Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:49.926Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:49.926Z] queryEvents: Raw query results count:
[2025-07-30T04:35:49.926Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:49.926Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.926Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:49.926Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.926Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:49.926Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:49.926Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:49.926Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:49.926Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:49.926Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:49.926Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:49.926Z] queryEvents: Constructed query groups
[2025-07-30T04:35:49.926Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:49.926Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:49.926Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850071:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.926Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:49.926Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:49.926Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:49.926Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.926Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:49.926Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:49.926Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:49.926Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:49.926Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:49.926Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:49.926Z] queryEvents: Raw query results count:
[2025-07-30T04:35:49.926Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850070
[2025-07-30T04:35:49.926Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.926Z] queryEvents: Last returned event timestamp:
1753850070
[2025-07-30T04:35:49.926Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.926Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850070
[2025-07-30T04:35:49.926Z] constructQueries: Using time range - since: 1753850071, until: 9999999999
[2025-07-30T04:35:49.926Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:49.926Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:49.926Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:49.926Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:49.926Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:49.926Z] queryEvents: Constructed query groups
[2025-07-30T04:35:49.926Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:49.926Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:49.926Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850071:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.926Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:49.926Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:49.926Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:49.926Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850071:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.926Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:49.926Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:49.926Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:49.926Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:49.926Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:49.926Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:49.926Z] queryEvents: Raw query results count:
[2025-07-30T04:35:49.926Z] handleSubscription: Processing subscription sub13 with last timestamp: 1753850071
[2025-07-30T04:35:49.926Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:49.926Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.926Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:49.926Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.926Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:49.926Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:49.926Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:49.926Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:49.926Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:49.926Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:49.926Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:49.926Z] queryEvents: Constructed query groups
[2025-07-30T04:35:49.926Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:49.926Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:49.926Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.926Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:35:49.926Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:35:49.926Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:49.926Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:49.926Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.926Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.927Z] executeQueries:  Query 1/1 in group 2 finished with 4 entries
[2025-07-30T04:35:49.927Z] executeQueries: Group 2 produced 4 unique IDs
[2025-07-30T04:35:49.927Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:49.927Z] findCommonIds: Processing result set 2, size: 4
[2025-07-30T04:35:49.927Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:35:49.927Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:35:49.927Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:35:49.927Z] getEvent: Attempting to retrieve event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:49.927Z] getEvent: Converted key: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:49.927Z] getEvent: Event found for ID fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:49.927Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:35:49.927Z] queryEvents: Raw query results count:
1
[2025-07-30T04:35:49.927Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub13:
{
  "previous": 1753850071,
  "new": 1753850147
}
[2025-07-30T04:35:49.927Z] handleSubscription: Processing subscription sub14 with last timestamp: 1753850129
[2025-07-30T04:35:49.927Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850129
[2025-07-30T04:35:49.927Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.927Z] queryEvents: Last returned event timestamp:
1753850129
[2025-07-30T04:35:49.927Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.927Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850129
[2025-07-30T04:35:49.927Z] constructQueries: Using time range - since: 1753850130, until: 9999999999
[2025-07-30T04:35:49.927Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:49.927Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:49.927Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:49.927Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:49.927Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:49.927Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:49.927Z] queryEvents: Constructed query groups
[2025-07-30T04:35:49.927Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:49.927Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:49.927Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:35:49.927Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850130:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.927Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.927Z] executeQueries:  Query 1/2 in group 1 finished with 0 entries
[2025-07-30T04:35:49.927Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:35:49.927Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850130:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.927Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.927Z] executeQueries:  Query 2/2 in group 1 finished with 0 entries
[2025-07-30T04:35:49.927Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:49.927Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:49.927Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:49.927Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850130:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.927Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.927Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:49.927Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:49.927Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:49.927Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:49.927Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:49.927Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:49.927Z] queryEvents: Raw query results count:
[2025-07-30T04:35:49.927Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850129
[2025-07-30T04:35:49.927Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.927Z] queryEvents: Last returned event timestamp:
1753850129
[2025-07-30T04:35:49.927Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:49.927Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850129
[2025-07-30T04:35:49.927Z] constructQueries: Using time range - since: 1753850130, until: 9999999999
[2025-07-30T04:35:49.927Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:35:49.927Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:35:49.927Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:35:49.927Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:49.927Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:49.927Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:49.927Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:49.927Z] queryEvents: Constructed query groups
[2025-07-30T04:35:49.927Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:49.927Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:49.927Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:35:49.927Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850130:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.927Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.927Z] executeQueries:  Query 1/3 in group 1 finished with 0 entries
[2025-07-30T04:35:49.927Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:35:49.927Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850130:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.927Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.927Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:35:49.927Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:35:49.927Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850130:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.927Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.927Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:35:49.927Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:49.927Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:49.927Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:49.927Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850130:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.927Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.927Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:35:49.927Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:35:49.927Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:49.927Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:49.927Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:49.927Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:49.927Z] queryEvents: Raw query results count:
[2025-07-30T04:35:49.927Z] handleSubscription: Processing subscription sub15 with last timestamp: 1753850071
[2025-07-30T04:35:49.927Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:49.927Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:49.927Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:49.927Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ],
  "authors": [
    "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
  ]
}
[2025-07-30T04:35:49.927Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:49.927Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:49.927Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:49.927Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:35:49.927Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:49.928Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:49.928Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:49.928Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:35:49.928Z] queryEvents: Constructed query groups
[2025-07-30T04:35:49.928Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:35:49.928Z] executeQueries: Processing group 1/3
[2025-07-30T04:35:49.928Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:49.928Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.928Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.928Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:35:49.928Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:35:49.928Z] executeQueries: Processing group 2/3
[2025-07-30T04:35:49.928Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:49.928Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850072:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.928Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.928Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:35:49.928Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:35:49.928Z] executeQueries: Processing group 3/3
[2025-07-30T04:35:49.928Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:35:49.928Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:49.928Z] executeQueries:   starting read stream
[2025-07-30T04:35:49.928Z] executeQueries:  Query 1/1 in group 3 finished with 4 entries
[2025-07-30T04:35:49.928Z] executeQueries: Group 3 produced 4 unique IDs
[2025-07-30T04:35:49.928Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:35:49.928Z] findCommonIds: Processing result set 2, size: 1
[2025-07-30T04:35:49.928Z] findCommonIds: After intersection with set 2: reduced from 1 to 0 common IDs
[2025-07-30T04:35:49.928Z] findCommonIds: No common IDs remain, exiting early
[2025-07-30T04:35:49.928Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:49.928Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:49.928Z] queryEvents: Raw query results count:
[2025-07-30T04:35:49.928Z] handleSubscription: Total events and EOSE messages for client:
5
[RelayServer] Found 5 events for connectionKey: ededb4f3552662d898979b34ba408d3b
[RelayServer] Updating subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:49.928Z] RelayManager: Updating subscriptions for connection ededb4f3552662d898979b34ba408d3b
Updated subscription data: {
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:49.928Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:49.928Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:49.928Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "ededb4f3552662d898979b34ba408d3b",
  "subscriptions": {
    "sub12": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub13": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub15": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ],
          "authors": [
            "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:49.928Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:49.928Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 278
[2025-07-30T04:35:49.930Z] updateSubscriptions: Updated subscriptions for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:35:49.930Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: ededb4f3552662d898979b34ba408d3b
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850150288,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 61d855c6...
[2025-07-30T04:35:51.176Z] handleSubscription: Handling subscription for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:51.176Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:51.176Z] getSubscriptions: Converted key: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:51.176Z] getSubscriptions: Subscriptions found for connection cd834f23bf1d91c65409ac747b5b3abc: {"seq":266,"key":{"0":205,"1":131,"2":79,"3":35,"4":191,"5":29,"6":145,"7":198,"8":84,"9":9,"10":172,"11":116,"12":123,"13":91,"14":58,"15":188},"value":"{\"connection\":\"cd834f23bf1d91c65409ac747b5b3abc\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850129},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub20\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:35:51.176Z] handleSubscription: Active subscriptions:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850060
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850071
    }
  }
}
[2025-07-30T04:35:51.176Z] handleSubscription: Processing subscription sub7 with last timestamp: 1753850129
[2025-07-30T04:35:51.176Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850129
[2025-07-30T04:35:51.176Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.176Z] queryEvents: Last returned event timestamp:
1753850129
[2025-07-30T04:35:51.176Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.176Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850129
[2025-07-30T04:35:51.176Z] constructQueries: Using time range - since: 1753850130, until: 9999999999
[2025-07-30T04:35:51.176Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:51.176Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:51.176Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:51.176Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:51.176Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:51.176Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:51.176Z] queryEvents: Constructed query groups
[2025-07-30T04:35:51.176Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:51.176Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850130:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/2 in group 1 finished with 0 entries
[2025-07-30T04:35:51.176Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850130:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 2/2 in group 1 finished with 0 entries
[2025-07-30T04:35:51.176Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:51.176Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850130:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:35:51.176Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:35:51.176Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:51.176Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:51.176Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:51.176Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:51.176Z] queryEvents: Raw query results count:
[2025-07-30T04:35:51.176Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850129
[2025-07-30T04:35:51.176Z] queryEvents: Starting query with filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.176Z] queryEvents: Last returned event timestamp:
1753850129
[2025-07-30T04:35:51.176Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    9000,
    9001,
    9021
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.176Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850129
[2025-07-30T04:35:51.176Z] constructQueries: Using time range - since: 1753850130, until: 9999999999
[2025-07-30T04:35:51.176Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:35:51.176Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:35:51.176Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:35:51.176Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:51.176Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:51.176Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:51.176Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:51.176Z] queryEvents: Constructed query groups
[2025-07-30T04:35:51.176Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:51.176Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850130:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/3 in group 1 finished with 0 entries
[2025-07-30T04:35:51.176Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850130:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:35:51.176Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850130:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:35:51.176Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:51.176Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850130:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:35:51.176Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:35:51.176Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:51.176Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:51.176Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:51.176Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:51.176Z] queryEvents: Raw query results count:
[2025-07-30T04:35:51.176Z] handleSubscription: Processing subscription sub19 with last timestamp: 1753850060
[2025-07-30T04:35:51.176Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850060
[2025-07-30T04:35:51.176Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.176Z] queryEvents: Last returned event timestamp:
1753850060
[2025-07-30T04:35:51.176Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.176Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850060
[2025-07-30T04:35:51.176Z] constructQueries: Using time range - since: 1753850061, until: 9999999999
[2025-07-30T04:35:51.176Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:35:51.176Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:51.176Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:51.176Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:51.176Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:51.176Z] queryEvents: Constructed query groups
[2025-07-30T04:35:51.176Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:51.176Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850061:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:51.176Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:51.176Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850061:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 2 finished with 2 entries
[2025-07-30T04:35:51.176Z] executeQueries: Group 2 produced 2 unique IDs
[2025-07-30T04:35:51.176Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:51.176Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:51.176Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:51.176Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:51.176Z] queryEvents: Raw query results count:
[2025-07-30T04:35:51.176Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850060
[2025-07-30T04:35:51.176Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.176Z] queryEvents: Last returned event timestamp:
1753850060
[2025-07-30T04:35:51.176Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.176Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850060
[2025-07-30T04:35:51.176Z] constructQueries: Using time range - since: 1753850061, until: 9999999999
[2025-07-30T04:35:51.176Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:35:51.176Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:51.176Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:51.176Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:51.176Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:51.176Z] queryEvents: Constructed query groups
[2025-07-30T04:35:51.176Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:51.176Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850061:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 1 finished with 2 entries
[2025-07-30T04:35:51.176Z] executeQueries: Group 1 produced 2 unique IDs
[2025-07-30T04:35:51.176Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:51.176Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:51.176Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850061:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.176Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.177Z] executeQueries:  Query 1/1 in group 2 finished with 2 entries
[2025-07-30T04:35:51.177Z] executeQueries: Group 2 produced 2 unique IDs
[2025-07-30T04:35:51.177Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:51.177Z] findCommonIds: Processing result set 2, size: 2
[2025-07-30T04:35:51.177Z] findCommonIds: After intersection with set 2: reduced from 2 to 2 common IDs
[2025-07-30T04:35:51.177Z] findCommonIds: Final common ID count: 2
[2025-07-30T04:35:51.177Z] executeQueries: Found 2 common IDs across all groups
[2025-07-30T04:35:51.177Z] getEvent: Attempting to retrieve event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:35:51.177Z] getEvent: Converted key: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:35:51.177Z] getEvent: Event found for ID 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:35:51.177Z] getEvent: Attempting to retrieve event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:35:51.177Z] getEvent: Converted key: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:35:51.177Z] getEvent: Event found for ID 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:35:51.177Z] executeQueries: Successfully retrieved 2 full events
[2025-07-30T04:35:51.177Z] queryEvents: Raw query results count:
2
[2025-07-30T04:35:51.177Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub19:
{
  "previous": 1753850060,
  "new": 1753850070
}
[2025-07-30T04:35:51.177Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850060
[2025-07-30T04:35:51.177Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.177Z] queryEvents: Last returned event timestamp:
1753850060
[2025-07-30T04:35:51.177Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.177Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850060
[2025-07-30T04:35:51.177Z] constructQueries: Using time range - since: 1753850061, until: 9999999999
[2025-07-30T04:35:51.177Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:35:51.177Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:51.177Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:51.177Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:51.177Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:51.177Z] queryEvents: Constructed query groups
[2025-07-30T04:35:51.177Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:51.177Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:51.177Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:51.177Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850061:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.177Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.177Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:35:51.177Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:35:51.177Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:51.177Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:51.177Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850061:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.177Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.177Z] executeQueries:  Query 1/1 in group 2 finished with 2 entries
[2025-07-30T04:35:51.177Z] executeQueries: Group 2 produced 2 unique IDs
[2025-07-30T04:35:51.177Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:51.177Z] findCommonIds: No IDs in first result set
[2025-07-30T04:35:51.177Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:35:51.177Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:35:51.177Z] queryEvents: Raw query results count:
[2025-07-30T04:35:51.177Z] handleSubscription: Processing subscription sub20 with last timestamp: 1753850071
[2025-07-30T04:35:51.177Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:35:51.177Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.177Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:35:51.177Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:35:51.177Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:35:51.177Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:35:51.177Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:35:51.177Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:35:51.177Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:35:51.177Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:35:51.177Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:35:51.177Z] queryEvents: Constructed query groups
[2025-07-30T04:35:51.177Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:35:51.177Z] executeQueries: Processing group 1/2
[2025-07-30T04:35:51.177Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:35:51.177Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.177Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.177Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:35:51.177Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:35:51.177Z] executeQueries: Processing group 2/2
[2025-07-30T04:35:51.177Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:35:51.177Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:35:51.177Z] executeQueries:   starting read stream
[2025-07-30T04:35:51.177Z] executeQueries:  Query 1/1 in group 2 finished with 4 entries
[2025-07-30T04:35:51.177Z] executeQueries: Group 2 produced 4 unique IDs
[2025-07-30T04:35:51.177Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:35:51.177Z] findCommonIds: Processing result set 2, size: 4
[2025-07-30T04:35:51.177Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:35:51.177Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:35:51.177Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:35:51.177Z] getEvent: Attempting to retrieve event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:51.177Z] getEvent: Converted key: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:51.177Z] getEvent: Event found for ID fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:35:51.177Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:35:51.177Z] queryEvents: Raw query results count:
1
[2025-07-30T04:35:51.177Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub20:
{
  "previous": 1753850071,
  "new": 1753850147
}
[2025-07-30T04:35:51.177Z] handleSubscription: Total events and EOSE messages for client:
6
[RelayServer] Found 6 events for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[RelayServer] Updating subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:51.177Z] RelayManager: Updating subscriptions for connection cd834f23bf1d91c65409ac747b5b3abc
Updated subscription data: {
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850147
    }
  }
}
[2025-07-30T04:35:51.177Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850147
    }
  }
}
[2025-07-30T04:35:51.177Z] NostrRelay.apply: Applying batch
[2025-07-30T04:35:51.177Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "cd834f23bf1d91c65409ac747b5b3abc",
  "subscriptions": {
    "sub7": {
      "filters": [
        {
          "kinds": [
            39002,
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            9000,
            9001,
            9021
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850129
    },
    "sub19": {
      "filters": [
        {
          "kinds": [
            39000
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39002
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        },
        {
          "kinds": [
            39001
          ],
          "#d": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850070
    },
    "sub20": {
      "filters": [
        {
          "kinds": [
            1
          ],
          "#h": [
            "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
          ]
        }
      ],
      "last_returned_event_timestamp": 1753850147
    }
  }
}
[2025-07-30T04:35:51.177Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:51.177Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 279
[2025-07-30T04:35:51.178Z] updateSubscriptions: Updated subscriptions for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:35:51.178Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: cd834f23bf1d91c65409ac747b5b3abc
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850155288,"status":"running","mode":"hyperswarm"}
[Worker] Teardown initiated
[Worker] Stopping relay server...
[RelayServer] ========================================
[RelayServer] SHUTTING DOWN
[RelayServer] Timestamp: 2025-07-30T04:35:56.450Z
[RelayAdapter] Cleaning up all active relays...
Closing relay for /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relays/relay-1753850054979
[Worker] Received from parent: { type: 'shutdown' }
[Worker] Shutdown requested
[Worker] Cannot send message - pipe: exists shuttingDown: true
[Worker] Stopping relay server...
[RelayServer] ========================================
[RelayServer] SHUTTING DOWN
[RelayServer] Timestamp: 2025-07-30T04:35:56.569Z
[RelayAdapter] Cleaning up all active relays...
File /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relays/relay-1753850054979-close is locked, retrying in 500ms (attempt 1/5)
Error closing relay: Callback must be a function
[RelayAdapter] Error closing relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: TypeError: Callback must be a function
    at typeError (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-timers/index.js:410:17)
    at queueTimer (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-timers/index.js:331:11)
    at setTimeout (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-timers/index.js:368:10)
    at acquireFileLock (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/relay-manager-hyperbee-only/hypertuna-relay-manager-bare.mjs:29:11)
    at RelayManager.close (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/relay-manager-hyperbee-only/hypertuna-relay-manager-bare.mjs:448:15)
    at cleanupRelays (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/hypertuna-relay-manager-adapter.mjs:936:27)
    at Module.shutdownRelayServer (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/pear-relay-server.mjs:2164:9)
    at cleanup (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/index.js:558:23)
    at Pipe.<anonymous> (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/index.js:239:21)
    at EventListener.emit (file:///Users/essorensen/Library/Application%20Support/pear/by-dkey/7216eeac5c879a2ca1dcff14bb8c1ad47d188a8c17b13e66f36d354ea8bd3b28/1/boot.bundle/node_modules/bare-events/index.js:59:12) {
  code: 'ERR_INVALID_CALLBACK'
}
[RelayServer] Destroying Hyperswarm instance
