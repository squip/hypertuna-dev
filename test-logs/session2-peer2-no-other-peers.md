[779454:0730/043700.249978:ERROR:viz_main_impl.cc(181)] Exiting GPU process due to errors during initialization
[779539:0730/043700.474308:ERROR:viz_main_impl.cc(181)] Exiting GPU process due to errors during initialization
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
    nostr_pubkey_hex: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
    nostr_nsec_hex: '5fd4c7e7780fce7e8e0f51fa95222e3f002127765310dba79a5f6d01481877bb',
    nostr_npub: 'npub1v8v9t35rr66722e0ajp2x6sxd4a4tu6cqfr9avvsvl2qpmrzfy2qc9lxrx',
    nostr_nsec: 'nsec1tl2v0emcpl88ars028af2g3w8uqzzfmk2vgdhfu6takszjqcw7asm74lyp',
    proxy_privateKey: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
    proxy_publicKey: '498be5e001f45f213b8694fce1ed96938729f18fe240ed95bbf279bb7cecad97',
    proxy_seed: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
    swarmPublicKey: 'e07ffd4d65b9e79f2e808d9fd764ab774848230dcab6b7329cffdff130251961',
    proxy_server_address: 'hypertuna.com',
    gatewayUrl: 'https://hypertuna.com',
    registerWithGateway: true,
    registerInterval: 300000,
    apiUrl: 'http://localhost:1945'
  }
}
[Worker] Stored parent config: {
  nostr_pubkey_hex: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
  nostr_nsec_hex: '5fd4c7e7780fce7e8e0f51fa95222e3f002127765310dba79a5f6d01481877bb',
  nostr_npub: 'npub1v8v9t35rr66722e0ajp2x6sxd4a4tu6cqfr9avvsvl2qpmrzfy2qc9lxrx',
  nostr_nsec: 'nsec1tl2v0emcpl88ars028af2g3w8uqzzfmk2vgdhfu6takszjqcw7asm74lyp',
  proxy_privateKey: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
  proxy_publicKey: '498be5e001f45f213b8694fce1ed96938729f18fe240ed95bbf279bb7cecad97',
  proxy_seed: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
  swarmPublicKey: 'e07ffd4d65b9e79f2e808d9fd764ab774848230dcab6b7329cffdff130251961',
  proxy_server_address: 'hypertuna.com',
  gatewayUrl: 'https://hypertuna.com',
  registerWithGateway: true,
  registerInterval: 300000,
  apiUrl: 'http://localhost:1945'
}
[Worker] Loaded existing config from: /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/relay-config.json
[Worker] Using previously received parent config
[Worker] User key: 988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969
[Worker] Merged config with user-specific storage: {
  port: 9342,
  nostr_pubkey_hex: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
  nostr_nsec_hex: '5fd4c7e7780fce7e8e0f51fa95222e3f002127765310dba79a5f6d01481877bb',
  proxy_privateKey: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
  proxy_publicKey: '498be5e001f45f213b8694fce1ed96938729f18fe240ed95bbf279bb7cecad97',
  proxy_seed: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
  proxy_server_address: 'hypertuna.com',
  gatewayUrl: 'https://hypertuna.com',
  registerWithGateway: true,
  registerInterval: 300000,
  relays: [],
  storage: '/home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969',
  gatewayPublicKey: null,
  swarmPublicKey: 'e07ffd4d65b9e79f2e808d9fd764ab774848230dcab6b7329cffdff130251961',
  subnetHash: '0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741',
  nostr_npub: 'npub1v8v9t35rr66722e0ajp2x6sxd4a4tu6cqfr9avvsvl2qpmrzfy2qc9lxrx',
  nostr_nsec: 'nsec1tl2v0emcpl88ars028af2g3w8uqzzfmk2vgdhfu6takszjqcw7asm74lyp',
  apiUrl: 'http://localhost:1945',
  userKey: '988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969'
}
[Worker] Set global user config for profile operations
[Worker] Loaded members for 2 relays
[Worker] Sending message: {"type":"status","message":"Loading relay server...","config":{"port":9342,"proxy_server_address":"hypertuna.com","gatewayUrl":"https://hypertuna.com","registerWithGateway":true}}
[Worker] Importing Hyperswarm relay server module...
Crypto libraries loaded successfully:
[Worker] Initializing relay server...
[RelayServer] ========================================
[RelayServer] Initializing with Hyperswarm support...
[RelayServer] Timestamp: 2025-07-30T04:37:07.487Z
[RelayServer] Configuration: {
  proxy_server_address: 'hypertuna.com',
  gatewayUrl: 'https://hypertuna.com',
  registerWithGateway: true,
  registerInterval: 300000,
  gatewayPublicKey: 'not set',
  storage: '/home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969',
  userKey: '98802281...'
}
[Worker] Received from parent: {
  type: 'config',
  data: {
    nostr_pubkey_hex: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
    nostr_nsec_hex: '5fd4c7e7780fce7e8e0f51fa95222e3f002127765310dba79a5f6d01481877bb',
    nostr_npub: 'npub1v8v9t35rr66722e0ajp2x6sxd4a4tu6cqfr9avvsvl2qpmrzfy2qc9lxrx',
    nostr_nsec: 'nsec1tl2v0emcpl88ars028af2g3w8uqzzfmk2vgdhfu6takszjqcw7asm74lyp',
    proxy_privateKey: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
    proxy_publicKey: '498be5e001f45f213b8694fce1ed96938729f18fe240ed95bbf279bb7cecad97',
    proxy_seed: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
    swarmPublicKey: 'e07ffd4d65b9e79f2e808d9fd764ab774848230dcab6b7329cffdff130251961',
    proxy_server_address: 'hypertuna.com',
    gatewayUrl: 'https://hypertuna.com',
    registerWithGateway: true,
    registerInterval: 300000,
    apiUrl: 'http://localhost:1945'
  }
}
[Worker] Received configuration: {
  nostr_pubkey_hex: '61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914',
  nostr_nsec_hex: '5fd4c7e7780fce7e8e0f51fa95222e3f002127765310dba79a5f6d01481877bb',
  nostr_npub: 'npub1v8v9t35rr66722e0ajp2x6sxd4a4tu6cqfr9avvsvl2qpmrzfy2qc9lxrx',
  nostr_nsec: 'nsec1tl2v0emcpl88ars028af2g3w8uqzzfmk2vgdhfu6takszjqcw7asm74lyp',
  proxy_privateKey: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
  proxy_publicKey: '498be5e001f45f213b8694fce1ed96938729f18fe240ed95bbf279bb7cecad97',
  proxy_seed: '0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57',
  swarmPublicKey: 'e07ffd4d65b9e79f2e808d9fd764ab774848230dcab6b7329cffdff130251961',
  proxy_server_address: 'hypertuna.com',
  gatewayUrl: 'https://hypertuna.com',
  registerWithGateway: true,
  registerInterval: 300000,
  apiUrl: 'http://localhost:1945'
}
[RelayServer] Config saved to: /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969/relay-config.json
[RelayServer] ----------------------------------------
[RelayServer] Starting Hyperswarm server...
[RelayServer] Config saved to: /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969/relay-config.json
[RelayServer] Generated keypair from seed: 0192daa9ffeb2df574518c1a84a5f6ea795a317ad19cf55bd61d650b4d59ac57
[RelayServer] Hyperswarm Peer Public key: e07ffd4d65b9e79f2e808d9fd764ab774848230dcab6b7329cffdff130251961
[RelayServer] Hyperswarm instance created with options: { maxPeers: 64, maxClientConnections: 32, maxServerConnections: 32 }
[RelayServer] Joining swarm with topic: hypertuna-relay-network
[RelayServer] Topic hash: d65146229ec407141842845e8dcbe8d7bef761ae0599ec88b1dcd1756d855d5e
[RelayServer] Waiting for topic announcement...
[RelayServer] Topic fully announced to DHT
[RelayServer] Hyperswarm server started successfully
[RelayServer] Listening for connections...
[RelayServer] ----------------------------------------
[RelayServer] Notifying worker of Hyperswarm status
[Worker] Sending message: {"type":"status","message":"Hyperswarm server connected","swarmKey":"e07ffd4d65b9e79f2e808d9fd764ab774848230dcab6b7329cffdff130251961"}
[RelayServer] Initializing challenge manager...
[ChallengeManager] Initialized with relay pubkey: 61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914
[RelayServer] Auth store initialized
[RelayServer] Starting auto-connection to stored relays...
[RelayAdapter] Starting auto-connection to stored relays for user: 988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969
[RelayAdapter] Found 1 stored relay profiles
[RelayAdapter] Attempting to connect to relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd...
[RelayAdapter] Loading auth configuration for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Imported 2 auths for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Imported 2 auths for relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayAdapter] Imported 2 auth entries for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
Initializing relay with bootstrap: 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
Acquired lock for storage directory: /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969/relays/5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[2025-07-30T04:37:09.868Z] NostrRelay: Initialized
[2025-07-30T04:37:09.907Z] NostrRelay.apply: Applying batch
[2025-07-30T04:37:09.907Z] NostrRelay.apply: Processing subscription data:
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
[2025-07-30T04:37:09.907Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:37:09.917Z] NostrRelay.apply: Flushing batch
[2025-07-30T04:37:09.918Z] NostrRelay.apply: Applying batch
[2025-07-30T04:37:09.918Z] validateEvent: Validating event:
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
[2025-07-30T04:37:09.918Z] validateEvent: Event passed all validation checks
[2025-07-30T04:37:09.918Z] NostrRelay.apply: Storing event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.918Z] NostrRelay.apply: Storing kind index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: kind:00001:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.920Z] NostrRelay.apply: Storing pubkey index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.921Z] NostrRelay.apply: Storing created_at index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.922Z] NostrRelay.apply: Storing tag index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.925Z] validateEvent: Validating event:
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
[2025-07-30T04:37:09.925Z] validateEvent: Event passed all validation checks
[2025-07-30T04:37:09.925Z] NostrRelay.apply: Storing event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.925Z] NostrRelay.apply: Storing kind index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: kind:00001:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.925Z] NostrRelay.apply: Storing pubkey index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.925Z] NostrRelay.apply: Storing created_at index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.925Z] NostrRelay.apply: Storing tag index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:37:09.925Z] NostrRelay.apply: Flushing batch
[2025-07-30T04:37:09.926Z] NostrRelay.apply: Applying batch
[2025-07-30T04:37:09.926Z] NostrRelay.apply: Processing subscription data:
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
[2025-07-30T04:37:09.926Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:37:09.926Z] NostrRelay.apply: Flushing batch
[2025-07-30T04:37:09.927Z] NostrRelay.apply: Applying batch
[2025-07-30T04:37:09.927Z] NostrRelay.apply: Processing subscription data:
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
[2025-07-30T04:37:09.927Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:37:09.928Z] NostrRelay.apply: Flushing batch
Hyperbee view is ready
Joining swarm with discovery key: 17e538e033a891d1d57f4c7f94267ed994afa9e81d67d57908fc1837df29d440
Initializing relay
Initialized event (before publishing): {
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753850232,
  "tags": [],
  "pubkey": "c70fce891cf39798ea463ebf1f89ed8871e095ce52eaba3ab8c42b4f07ebb29c",
  "id": "f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013",
  "sig": "a61e04e20cedec120ed581c295b15ff778548d53bbc7c0b403b38977cf7a5b9db5741772b7f30927d096b45fdd95c08a7e4430b7ef6cdf4831ddc7383876505d"
}
Serialized event: [0,"c70fce891cf39798ea463ebf1f89ed8871e095ce52eaba3ab8c42b4f07ebb29c",1753850232,0,[],"Relay initialized"]
Event hash: f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013
[2025-07-30T04:37:12.678Z] publishEvent: Attempting to publish event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753850232,
  "tags": [],
  "pubkey": "c70fce891cf39798ea463ebf1f89ed8871e095ce52eaba3ab8c42b4f07ebb29c",
  "id": "f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013",
  "sig": "a61e04e20cedec120ed581c295b15ff778548d53bbc7c0b403b38977cf7a5b9db5741772b7f30927d096b45fdd95c08a7e4430b7ef6cdf4831ddc7383876505d"
}
Verifying Event Signature ===
Serialized Event: [0,"c70fce891cf39798ea463ebf1f89ed8871e095ce52eaba3ab8c42b4f07ebb29c",1753850232,0,[],"Relay initialized"]
Event Hash: f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013
Verification Details:
Public Key: c70fce891cf39798ea463ebf1f89ed8871e095ce52eaba3ab8c42b4f07ebb29c
Signature: a61e04e20cedec120ed581c295b15ff778548d53bbc7c0b403b38977cf7a5b9db5741772b7f30927d096b45fdd95c08a7e4430b7ef6cdf4831ddc7383876505d
Verification Result: true
[2025-07-30T04:37:12.704Z] publishEvent: Event verification result:
true
[2025-07-30T04:37:12.704Z] publishEvent: Publishing event with ID: f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013
[2025-07-30T04:37:12.705Z] NostrRelay.apply: Applying batch
[2025-07-30T04:37:12.705Z] validateEvent: Validating event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753850232,
  "tags": [],
  "pubkey": "c70fce891cf39798ea463ebf1f89ed8871e095ce52eaba3ab8c42b4f07ebb29c",
  "id": "f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013",
  "sig": "a61e04e20cedec120ed581c295b15ff778548d53bbc7c0b403b38977cf7a5b9db5741772b7f30927d096b45fdd95c08a7e4430b7ef6cdf4831ddc7383876505d"
}
[2025-07-30T04:37:12.705Z] validateEvent: Event passed all validation checks
[2025-07-30T04:37:12.705Z] NostrRelay.apply: Storing event with ID: f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013
[2025-07-30T04:37:12.706Z] NostrRelay.apply: Storing kind index for event f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013 under key: kind:00000:created_at:1753850232:id:f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013
[2025-07-30T04:37:12.706Z] NostrRelay.apply: Storing pubkey index for event f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013 under key: pubkey:c70fce891cf39798ea463ebf1f89ed8871e095ce52eaba3ab8c42b4f07ebb29c:created_at:1753850232:id:f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013
[2025-07-30T04:37:12.706Z] NostrRelay.apply: Storing created_at index for event f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013 under key: created_at:1753850232:id:f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013
[2025-07-30T04:37:12.706Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 283
[2025-07-30T04:37:12.722Z] publishEvent: Event published successfully: f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013
Relay initialized with event ID: [
  'OK',
  'f43a19f4688db20e3fa78a023f83f736c29e86bebca5712eb95ceeb2a4b4b013',
  true,
  ''
]
Released lock for storage directory: /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969/relays/5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'Joined Relay 5162c641',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:41.687Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] Joined relay: 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'Joined Relay 5162c641',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:41.687Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] Successfully connected to relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] Found auth token for user 61d855c6... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] [2] autoConnectStoredRelays() -> Sending relay-initialized for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd with URL wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0
[Worker] Sending message: {"type":"relay-initialized","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","gatewayUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","name":"Joined Relay 5162c641","connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","timestamp":"2025-07-30T04:37:12.725Z"}
[RelayAdapter] Auto-connection complete:
[RelayAdapter] - Connected: 1 relays
[RelayAdapter] - Failed: 0 relays
[RelayAdapter] - Auth-protected: 1 relays
[Worker] Sending message: {"type":"all-relays-initialized","count":1,"connected":["5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd"],"failed":[],"total":1,"authProtectedCount":1,"timestamp":"2025-07-30T04:37:12.726Z"}
[RelayServer] Auto-connected to 1 relays
[RelayServer] Health state updated: {
  status: 'healthy',
  activeRelays: 1,
  services: {
    hyperswarmStatus: 'connected',
    protocolStatus: 'initializing',
    gatewayStatus: 'disconnected'
  }
}
[RelayServer] Registering auto-connected relays with gateway...
[RelayServer] ========================================
[RelayServer] GATEWAY REGISTRATION ATTEMPT (HTTP)
[RelayServer] Timestamp: 2025-07-30T04:37:12.729Z
[RelayServer] Sending HTTP registration to gateway
[RelayServer] Registration URL: https://hypertuna.com/register
[RelayServer] Registration data: {
  publicKey: 'e07ffd4d...',
  relayCount: 1,
  address: 'hypertuna.com:9342',
  hasNewRelay: true,
  mode: 'hyperswarm'
}
[RelayServer] Gateway HTTP registration response: {
  message: 'Registered successfully (Hyperswarm mode)',
  driveKey: '6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274',
  status: 'active',
  mode: 'hyperswarm',
  timestamp: '2025-07-30T04:37:12.775Z'
}
[RelayServer] Registration SUCCESSFUL
[RelayServer] Notifying worker of successful registration
[Worker] Sending message: {"type":"gateway-registered","data":{"message":"Registered successfully (Hyperswarm mode)","driveKey":"6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274","status":"active","mode":"hyperswarm","timestamp":"2025-07-30T04:37:12.775Z"}}
[RelayServer] ========================================
[Worker] Sending message: {"type":"relay-registration-complete","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","gatewayUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","authToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","timestamp":"2025-07-30T04:37:12.778Z"}
[RelayServer] Starting health monitoring (30s interval)
[RelayServer] Gateway registration is ENABLED
[RelayServer] Cannot process pending registrations - no gateway connection
[RelayServer] Initialization complete
[RelayServer] ========================================
[Worker] Relay server started successfully with Hyperswarm
[RelayServer] ========================================
[RelayServer] NEW PEER CONNECTION RECEIVED
[RelayServer] Peer public key: ce3a5f57027fe7bcce20d4a84a39036cabfb5d76bf2874c7854f397ee3fff9bb
[RelayServer] Connection time: 2025-07-30T04:37:13.098Z
[RelayServer] Total connected peers: 1
[RelayServer] Setting up protocol for peer: ce3a5f57027fe7bcce20d4a84a39036cabfb5d76bf2874c7854f397ee3fff9bb
[RelayServer] Setting up protocol handlers
[RelayServer] Protocol handlers setup complete
[Worker] Sending message: {"type":"status","message":"Relay server running with Hyperswarm","initialized":true,"config":{"port":9342,"proxy_server_address":"hypertuna.com","gatewayUrl":"https://hypertuna.com","registerWithGateway":true,"relayCount":0,"mode":"hyperswarm"}}
[Worker] Sent status message with initialized=true
[RelayProtocol] Channel opened with handshake: {
  version: '2.0',
  isServer: false,
  isGateway: true,
  capabilities: [ 'http', 'websocket', 'health' ]
}
[RelayServer] ----------------------------------------
[RelayServer] PROTOCOL OPENED
[RelayServer] Peer: ce3a5f57...
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
[RelayServer] Gateway public key: ce3a5f57027fe7bcce20d4a84a39036cabfb5d76bf2874c7854f397ee3fff9bb
[RelayServer] Connection time: 2025-07-30T04:37:14.414Z
[RelayServer] ========================================
[RelayServer] Notifying worker of gateway connection
[Worker] Sending message: {"type":"gateway-connected","gatewayPublicKey":"ce3a5f57027fe7bcce20d4a84a39036cabfb5d76bf2874c7854f397ee3fff9bb"}
[RelayServer] No pending registrations to process
[RelayServer] Starting keepalive for ce3a5f57...
[RelayServer] ----------------------------------------
[RelayProtocol] Received request: POST /identify-gateway
[RelayServer] Generic request received: POST /identify-gateway
[RelayProtocol] Received health check
[RelayServer] Performing initial HTTP registration with gateway...
[RelayServer] ========================================
[RelayServer] GATEWAY REGISTRATION ATTEMPT (HTTP)
[RelayServer] Timestamp: 2025-07-30T04:37:14.778Z
[RelayServer] Sending HTTP registration to gateway
[RelayServer] Registration URL: https://hypertuna.com/register
[RelayServer] Registration data: {
  publicKey: 'e07ffd4d...',
  relayCount: 1,
  address: 'hypertuna.com:9342',
  hasNewRelay: false,
  mode: 'hyperswarm'
}
[RelayServer] Gateway HTTP registration response: {
  message: 'Registered successfully (Hyperswarm mode)',
  driveKey: '6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274',
  status: 'active',
  mode: 'hyperswarm',
  timestamp: '2025-07-30T04:37:14.813Z'
}
[RelayServer] Registration SUCCESSFUL
[RelayServer] Notifying worker of successful registration
[Worker] Sending message: {"type":"gateway-registered","data":{"message":"Registered successfully (Hyperswarm mode)","driveKey":"6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274","status":"active","mode":"hyperswarm","timestamp":"2025-07-30T04:37:14.813Z"}}
[RelayServer] ========================================
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[RelayProtocol] Received health check
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850237779,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850242780,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850247780,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for ce3a5f57...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850252781,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850257782,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
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
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753850227486,"lastCheck":1753850262778,"status":"healthy","activeRelaysCount":1,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753850227486},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850262782,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for ce3a5f57...
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 61d855c6...
[2025-07-30T04:37:44.919Z] handleSubscription: Handling subscription for connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.920Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.920Z] getSubscriptions: Converted key: 5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 61d855c6...
[2025-07-30T04:37:44.921Z] handleMessage: Received message:
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
[2025-07-30T04:37:44.921Z] handleMessage: Processing REQ message for client connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.921Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.921Z] getSubscriptions: Converted key: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.921Z] getSubscriptions: No subscriptions found for connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.921Z] publishSubscription: Attempting to publish subscription:
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
[2025-07-30T04:37:44.921Z] validateFilters: Validating filters:
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
[2025-07-30T04:37:44.922Z] validateFilters: All filters are valid
[2025-07-30T04:37:44.922Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:37:44.922Z] NostrRelay.apply: Applying batch
[2025-07-30T04:37:44.922Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "5f2381d0e87abd2b8489cdfa9ee3485e",
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
[2025-07-30T04:37:44.922Z] NostrRelay.apply: Storing subscription data for connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.922Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 284
[2025-07-30T04:37:44.923Z] getSubscriptions: No subscriptions found for connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.923Z] handleSubscription: No active subscriptions for connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Found 0 events for connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.925Z] publishSubscription: Published subscription for connection: 5f2381d0e87abd2b8489cdfa9ee3485e, subscriptionId: sub7
[2025-07-30T04:37:44.925Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub7 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 61d855c6...
[2025-07-30T04:37:44.931Z] handleMessage: Received message:
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
[2025-07-30T04:37:44.931Z] handleMessage: Processing REQ message for client connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.931Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.931Z] getSubscriptions: Converted key: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.931Z] getSubscriptions: Subscriptions found for connection 5f2381d0e87abd2b8489cdfa9ee3485e: {"seq":283,"key":{"0":95,"1":35,"2":129,"3":208,"4":232,"5":122,"6":189,"7":43,"8":132,"9":137,"10":205,"11":250,"12":158,"13":227,"14":72,"15":94},"value":"{\"connection\":\"5f2381d0e87abd2b8489cdfa9ee3485e\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:37:44.931Z] publishSubscription: Attempting to publish subscription:
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
[2025-07-30T04:37:44.931Z] validateFilters: Validating filters:
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
[2025-07-30T04:37:44.931Z] validateFilters: All filters are valid
[2025-07-30T04:37:44.931Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:37:44.931Z] NostrRelay.apply: Applying batch
[2025-07-30T04:37:44.932Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "5f2381d0e87abd2b8489cdfa9ee3485e",
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
[2025-07-30T04:37:44.932Z] NostrRelay.apply: Storing subscription data for connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.932Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 285
[2025-07-30T04:37:44.934Z] publishSubscription: Published subscription for connection: 5f2381d0e87abd2b8489cdfa9ee3485e, subscriptionId: sub12
[2025-07-30T04:37:44.934Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub12 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 61d855c6...
[2025-07-30T04:37:44.938Z] handleMessage: Received message:
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
[2025-07-30T04:37:44.938Z] handleMessage: Processing REQ message for client connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.938Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.938Z] getSubscriptions: Converted key: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.938Z] getSubscriptions: Subscriptions found for connection 5f2381d0e87abd2b8489cdfa9ee3485e: {"seq":284,"key":{"0":95,"1":35,"2":129,"3":208,"4":232,"5":122,"6":189,"7":43,"8":132,"9":137,"10":205,"11":250,"12":158,"13":227,"14":72,"15":94},"value":"{\"connection\":\"5f2381d0e87abd2b8489cdfa9ee3485e\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:37:44.938Z] publishSubscription: Attempting to publish subscription:
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
[2025-07-30T04:37:44.938Z] validateFilters: Validating filters:
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
[2025-07-30T04:37:44.938Z] validateFilters: All filters are valid
[2025-07-30T04:37:44.938Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:37:44.938Z] NostrRelay.apply: Applying batch
[2025-07-30T04:37:44.938Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "5f2381d0e87abd2b8489cdfa9ee3485e",
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
[2025-07-30T04:37:44.938Z] NostrRelay.apply: Storing subscription data for connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:44.939Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 286
[2025-07-30T04:37:44.943Z] publishSubscription: Published subscription for connection: 5f2381d0e87abd2b8489cdfa9ee3485e, subscriptionId: sub13
[2025-07-30T04:37:44.943Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub13 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850267782,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850272783,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 61d855c6...
[2025-07-30T04:37:54.927Z] handleSubscription: Handling subscription for connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:54.927Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:54.928Z] getSubscriptions: Converted key: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:37:54.928Z] getSubscriptions: Subscriptions found for connection 5f2381d0e87abd2b8489cdfa9ee3485e: {"seq":285,"key":{"0":95,"1":35,"2":129,"3":208,"4":232,"5":122,"6":189,"7":43,"8":132,"9":137,"10":205,"11":250,"12":158,"13":227,"14":72,"15":94},"value":"{\"connection\":\"5f2381d0e87abd2b8489cdfa9ee3485e\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:37:54.928Z] handleSubscription: Active subscriptions:
{
  "connection": "5f2381d0e87abd2b8489cdfa9ee3485e",
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
[2025-07-30T04:37:54.928Z] handleSubscription: Processing subscription sub7 with last timestamp: undefined
[2025-07-30T04:37:54.928Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:37:54.928Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:37:54.928Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:37:54.928Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:37:54.928Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:37:54.928Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:37:54.928Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:37:54.928Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:37:54.928Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:37:54.928Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:37:54.928Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:37:54.928Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:37:54.928Z] queryEvents: Constructed query groups
[2025-07-30T04:37:54.929Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:37:54.929Z] executeQueries: Processing group 1/2
[2025-07-30T04:37:54.929Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:37:54.929Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:0000000000:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:37:54.929Z] executeQueries:   starting read stream
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850277784,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for ce3a5f57...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850282785,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850287785,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
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
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753850227486,"lastCheck":1753850292778,"status":"healthy","activeRelaysCount":1,"metrics":{"totalRequests":4,"successfulRequests":4,"failedRequests":0,"lastMetricsReset":1753850227486},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850292785,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for ce3a5f57...
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850297785,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850302785,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850307786,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for ce3a5f57...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850312786,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850317786,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 61d855c6...
[2025-07-30T04:38:39.930Z] handleSubscription: Handling subscription for connection: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:38:39.930Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:38:39.930Z] getSubscriptions: Converted key: 5f2381d0e87abd2b8489cdfa9ee3485e
[2025-07-30T04:38:39.930Z] getSubscriptions: Subscriptions found for connection 5f2381d0e87abd2b8489cdfa9ee3485e: {"seq":285,"key":{"0":95,"1":35,"2":129,"3":208,"4":232,"5":122,"6":189,"7":43,"8":132,"9":137,"10":205,"11":250,"12":158,"13":227,"14":72,"15":94},"value":"{\"connection\":\"5f2381d0e87abd2b8489cdfa9ee3485e\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:38:39.930Z] handleSubscription: Active subscriptions:
{
  "connection": "5f2381d0e87abd2b8489cdfa9ee3485e",
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
[2025-07-30T04:38:39.930Z] handleSubscription: Processing subscription sub7 with last timestamp: undefined
[2025-07-30T04:38:39.930Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:38:39.930Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:38:39.930Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:38:39.930Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:38:39.930Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:38:39.930Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:38:39.930Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:38:39.930Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:38:39.930Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:38:39.930Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:38:39.930Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:38:39.930Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:38:39.930Z] queryEvents: Constructed query groups
[2025-07-30T04:38:39.930Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:38:39.930Z] executeQueries: Processing group 1/2
[2025-07-30T04:38:39.930Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:38:39.930Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:0000000000:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:38:39.930Z] executeQueries:   starting read stream
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
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
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753850227486,"lastCheck":1753850322779,"status":"healthy","activeRelaysCount":1,"metrics":{"totalRequests":4,"successfulRequests":4,"failedRequests":0,"lastMetricsReset":1753850227486},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850322786,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for ce3a5f57...
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850327787,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850332787,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850337787,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for ce3a5f57...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"Joined Relay 5162c641","description":"Relay joined on Wed Jul 30 2025 04:35:29 GMT+0000 (UTC)","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","createdAt":"2025-07-30T04:35:29.239Z","isActive":true,"userAuthToken":"e5971038b867cf5160fbcd188bcfc8f0040d71221aed6d176d41955fac316ab0","requiresAuth":true,"members":["61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"]}]}
[Worker] Teardown initiated
[Worker] Stopping relay server...
[RelayServer] ========================================
[RelayServer] SHUTTING DOWN
[RelayServer] Timestamp: 2025-07-30T04:39:02.534Z
[RelayAdapter] Cleaning up all active relays...
Closing relay for /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969/relays/5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Received from parent: { type: 'shutdown' }
[Worker] Shutdown requested
[Worker] Cannot send message - pipe: exists shuttingDown: true
[Worker] Stopping relay server...
[RelayServer] ========================================
[RelayServer] SHUTTING DOWN
[RelayServer] Timestamp: 2025-07-30T04:39:02.536Z
[RelayAdapter] Cleaning up all active relays...
File /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/988022812ce1565e9f060c43288d7ef370c6fc3d0e908b269cee040108b82969/relays/5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd-close is locked, retrying in 500ms (attempt 1/5)
[RelayServer] Destroying Hyperswarm instance
