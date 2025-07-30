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
    swarmPublicKey: '67a735053324909bc3a88d6ec1079f7024c4e8d31da8856e0ec9ee8726917b73',
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
  swarmPublicKey: '67a735053324909bc3a88d6ec1079f7024c4e8d31da8856e0ec9ee8726917b73',
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
  swarmPublicKey: '67a735053324909bc3a88d6ec1079f7024c4e8d31da8856e0ec9ee8726917b73',
  subnetHash: 'c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c',
  nostr_npub: 'npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr',
  nostr_nsec: 'nsec1edrqjmkzff75r5azm4450fvcq4ttgyyhyvdjrf8j4ugchzw720qs62xfrn',
  userKey: 'fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273'
}
[Worker] Set global user config for profile operations
[Worker] Loaded members for 2 relays
[Worker] Sending message: {"type":"status","message":"Loading relay server...","config":{"port":1945,"proxy_server_address":"hypertuna.com","gatewayUrl":"https://hypertuna.com","registerWithGateway":true}}
[Worker] Importing Hyperswarm relay server module...
Crypto libraries loaded successfully:
[Worker] Initializing relay server...
[RelayServer] ========================================
[RelayServer] Initializing with Hyperswarm support...
[RelayServer] Timestamp: 2025-07-30T04:39:27.641Z
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
    swarmPublicKey: '67a735053324909bc3a88d6ec1079f7024c4e8d31da8856e0ec9ee8726917b73',
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
  swarmPublicKey: '67a735053324909bc3a88d6ec1079f7024c4e8d31da8856e0ec9ee8726917b73',
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
[RelayAdapter] Found 1 stored relay profiles
[RelayAdapter] Attempting to connect to relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd...
[RelayAdapter] Loading auth configuration for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Imported 2 auths for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Imported 2 auths for relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayAdapter] Imported 2 auth entries for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
Initializing relay with bootstrap: 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
Acquired lock for storage directory: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relays/relay-1753850054979
[2025-07-30T04:39:30.131Z] NostrRelay: Initialized
[2025-07-30T04:39:30.149Z] NostrRelay.apply: Applying batch
[2025-07-30T04:39:30.149Z] NostrRelay.apply: Processing subscription data:
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
[2025-07-30T04:39:30.149Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:39:30.150Z] NostrRelay.apply: Flushing batch
[2025-07-30T04:39:30.150Z] NostrRelay.apply: Applying batch
[2025-07-30T04:39:30.150Z] validateEvent: Validating event:
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
[2025-07-30T04:39:30.150Z] validateEvent: Event passed all validation checks
[2025-07-30T04:39:30.150Z] NostrRelay.apply: Storing event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.150Z] NostrRelay.apply: Storing kind index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: kind:00001:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.151Z] NostrRelay.apply: Storing pubkey index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.151Z] NostrRelay.apply: Storing created_at index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Storing tag index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.152Z] validateEvent: Validating event:
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
[2025-07-30T04:39:30.152Z] validateEvent: Event passed all validation checks
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Storing event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Storing kind index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: kind:00001:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Storing pubkey index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: pubkey:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Storing created_at index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Storing tag index for event fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915 under key: tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850147:id:fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Flushing batch
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Applying batch
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Processing subscription data:
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
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Storing subscription data for connection: ededb4f3552662d898979b34ba408d3b
[2025-07-30T04:39:30.152Z] NostrRelay.apply: Flushing batch
[2025-07-30T04:39:30.153Z] NostrRelay.apply: Applying batch
[2025-07-30T04:39:30.153Z] NostrRelay.apply: Processing subscription data:
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
[2025-07-30T04:39:30.153Z] NostrRelay.apply: Storing subscription data for connection: cd834f23bf1d91c65409ac747b5b3abc
[2025-07-30T04:39:30.153Z] NostrRelay.apply: Flushing batch
Hyperbee view is ready
Joining swarm with discovery key: 17e538e033a891d1d57f4c7f94267ed994afa9e81d67d57908fc1837df29d440
Initializing relay
Initialized event (before publishing): {
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753850372,
  "tags": [],
  "pubkey": "d8f177f93cc05730424abbb4cafc1484dc677269f8268b641c0aa32432a1c99e",
  "id": "d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274",
  "sig": "3fed0a707681873720f6b1e65e96e14b6a51acd6e8bc63f25fd9763d386dbcf3a6dd1238f5928ee49c1c3dcf30451249a708c6603bf9a77770a34bfc66e2c38e"
}
Serialized event: [0,"d8f177f93cc05730424abbb4cafc1484dc677269f8268b641c0aa32432a1c99e",1753850372,0,[],"Relay initialized"]
Event hash: d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274
[2025-07-30T04:39:32.447Z] publishEvent: Attempting to publish event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753850372,
  "tags": [],
  "pubkey": "d8f177f93cc05730424abbb4cafc1484dc677269f8268b641c0aa32432a1c99e",
  "id": "d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274",
  "sig": "3fed0a707681873720f6b1e65e96e14b6a51acd6e8bc63f25fd9763d386dbcf3a6dd1238f5928ee49c1c3dcf30451249a708c6603bf9a77770a34bfc66e2c38e"
}
Verifying Event Signature ===
Serialized Event: [0,"d8f177f93cc05730424abbb4cafc1484dc677269f8268b641c0aa32432a1c99e",1753850372,0,[],"Relay initialized"]
Event Hash: d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274
Verification Details:
Public Key: d8f177f93cc05730424abbb4cafc1484dc677269f8268b641c0aa32432a1c99e
Signature: 3fed0a707681873720f6b1e65e96e14b6a51acd6e8bc63f25fd9763d386dbcf3a6dd1238f5928ee49c1c3dcf30451249a708c6603bf9a77770a34bfc66e2c38e
Verification Result: true
[2025-07-30T04:39:32.468Z] publishEvent: Event verification result:
true
[2025-07-30T04:39:32.468Z] publishEvent: Publishing event with ID: d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274
[2025-07-30T04:39:32.469Z] NostrRelay.apply: Applying batch
[2025-07-30T04:39:32.469Z] validateEvent: Validating event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753850372,
  "tags": [],
  "pubkey": "d8f177f93cc05730424abbb4cafc1484dc677269f8268b641c0aa32432a1c99e",
  "id": "d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274",
  "sig": "3fed0a707681873720f6b1e65e96e14b6a51acd6e8bc63f25fd9763d386dbcf3a6dd1238f5928ee49c1c3dcf30451249a708c6603bf9a77770a34bfc66e2c38e"
}
[2025-07-30T04:39:32.469Z] validateEvent: Event passed all validation checks
[2025-07-30T04:39:32.469Z] NostrRelay.apply: Storing event with ID: d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274
[2025-07-30T04:39:32.469Z] NostrRelay.apply: Storing kind index for event d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274 under key: kind:00000:created_at:1753850372:id:d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274
[2025-07-30T04:39:32.469Z] NostrRelay.apply: Storing pubkey index for event d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274 under key: pubkey:d8f177f93cc05730424abbb4cafc1484dc677269f8268b641c0aa32432a1c99e:created_at:1753850372:id:d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274
[2025-07-30T04:39:32.469Z] NostrRelay.apply: Storing created_at index for event d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274 under key: created_at:1753850372:id:d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274
[2025-07-30T04:39:32.469Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 283
[2025-07-30T04:39:32.472Z] publishEvent: Event published successfully: d8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274
Relay initialized with event ID: [
  'OK',
  'd8d3762fad42c0ff184074356a35e0fc8acfd538a63c91943285f4c356bc1274',
  true,
  ''
]
Released lock for storage directory: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relays/relay-1753850054979
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:39.949Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] Joined relay: 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:35:39.949Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] Successfully connected to relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] Found auth token for user 3b81e5a0... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAdapter] [2] autoConnectStoredRelays() -> Sending relay-initialized for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd with URL wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76
[Worker] Sending message: {"type":"relay-initialized","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","gatewayUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","name":"el sans serifo","connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","timestamp":"2025-07-30T04:39:32.477Z"}
[RelayAdapter] Auto-connection complete:
[RelayAdapter] - Connected: 1 relays
[RelayAdapter] - Failed: 0 relays
[RelayAdapter] - Auth-protected: 1 relays
[Worker] Sending message: {"type":"all-relays-initialized","count":1,"connected":["5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd"],"failed":[],"total":1,"authProtectedCount":1,"timestamp":"2025-07-30T04:39:32.477Z"}
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
[RelayServer] Timestamp: 2025-07-30T04:39:32.478Z
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
  timestamp: '2025-07-30T04:39:32.584Z'
}
[RelayServer] Registration SUCCESSFUL
[RelayServer] Notifying worker of successful registration
[Worker] Sending message: {"type":"gateway-registered","data":{"message":"Registered successfully (Hyperswarm mode)","driveKey":"6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274","status":"active","mode":"hyperswarm","timestamp":"2025-07-30T04:39:32.584Z"}}
[RelayServer] ========================================
[Worker] Sending message: {"type":"relay-registration-complete","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","gatewayUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","authToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","timestamp":"2025-07-30T04:39:32.604Z"}
[RelayServer] Starting health monitoring (30s interval)
[RelayServer] Gateway registration is ENABLED
[RelayServer] Cannot process pending registrations - no gateway connection
[RelayServer] Initialization complete
[RelayServer] ========================================
[Worker] Relay server started successfully with Hyperswarm
[Worker] Sending message: {"type":"status","message":"Relay server running with Hyperswarm","initialized":true,"config":{"port":1945,"proxy_server_address":"hypertuna.com","gatewayUrl":"https://hypertuna.com","registerWithGateway":true,"relayCount":0,"mode":"hyperswarm"}}
[Worker] Sent status message with initialized=true
[RelayServer] ========================================
[RelayServer] NEW PEER CONNECTION RECEIVED
[RelayServer] Peer public key: 9bf770297655e4549f5e8b217ab4db65755aceea95ae996d70a23c0829f0c402
[RelayServer] Connection time: 2025-07-30T04:39:34.006Z
[RelayServer] Total connected peers: 1
[RelayServer] Setting up protocol for peer: 9bf770297655e4549f5e8b217ab4db65755aceea95ae996d70a23c0829f0c402
[RelayServer] Setting up protocol handlers
[RelayServer] Protocol handlers setup complete
[RelayProtocol] Channel opened with handshake: {
  version: '2.0',
  isServer: false,
  isGateway: true,
  capabilities: [ 'http', 'websocket', 'health' ]
}
[RelayServer] ----------------------------------------
[RelayServer] PROTOCOL OPENED
[RelayServer] Peer: 9bf77029...
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
[RelayServer] Gateway public key: 9bf770297655e4549f5e8b217ab4db65755aceea95ae996d70a23c0829f0c402
[RelayServer] Connection time: 2025-07-30T04:39:34.197Z
[RelayServer] ========================================
[RelayServer] Notifying worker of gateway connection
[Worker] Sending message: {"type":"gateway-connected","gatewayPublicKey":"9bf770297655e4549f5e8b217ab4db65755aceea95ae996d70a23c0829f0c402"}
[RelayServer] No pending registrations to process
[RelayServer] Starting keepalive for 9bf77029...
[RelayServer] ----------------------------------------
[RelayProtocol] Received request: POST /identify-gateway
[RelayServer] Generic request received: POST /identify-gateway
[RelayProtocol] Received health check
[RelayServer] Performing initial HTTP registration with gateway...
[RelayServer] ========================================
[RelayServer] GATEWAY REGISTRATION ATTEMPT (HTTP)
[RelayServer] Timestamp: 2025-07-30T04:39:34.604Z
[RelayServer] Sending HTTP registration to gateway
[RelayServer] Registration URL: https://hypertuna.com/register
[RelayServer] Registration data: {
  publicKey: '67a73505...',
  relayCount: 1,
  address: 'hypertuna.com:1945',
  hasNewRelay: false,
  mode: 'hyperswarm'
}
[RelayServer] Gateway HTTP registration response: {
  message: 'Registered successfully (Hyperswarm mode)',
  driveKey: '6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274',
  status: 'active',
  mode: 'hyperswarm',
  timestamp: '2025-07-30T04:39:34.711Z'
}
[RelayServer] Registration SUCCESSFUL
[RelayServer] Notifying worker of successful registration
[Worker] Sending message: {"type":"gateway-registered","data":{"message":"Registered successfully (Hyperswarm mode)","driveKey":"6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274","status":"active","mode":"hyperswarm","timestamp":"2025-07-30T04:39:34.711Z"}}
[RelayServer] ========================================
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850377607,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850382607,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850387607,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 9bf77029...
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850392613,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850397613,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
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
[Worker] Sending message: {"type":"health-update","healthState":{"startTime":1753850367641,"lastCheck":1753850402607,"status":"healthy","activeRelaysCount":1,"metrics":{"totalRequests":0,"successfulRequests":0,"failedRequests":0,"lastMetricsReset":1753850367641},"services":{"hyperswarmStatus":"connected","protocolStatus":"connected","gatewayStatus":"connected"}}}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850402613,"status":"running","mode":"hyperswarm"}
[RelayServer] Keepalive check for 9bf77029...
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/0b2d739f6b73480f4181f838395040e7
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:40:04.697Z] handleSubscription: Handling subscription for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.697Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.697Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:40:04.697Z] handleMessage: Received message:
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
[2025-07-30T04:40:04.697Z] handleMessage: Processing REQ message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.697Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.697Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.699Z] getSubscriptions: No subscriptions found for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.699Z] publishSubscription: Attempting to publish subscription:
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
[2025-07-30T04:40:04.699Z] validateFilters: Validating filters:
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
[2025-07-30T04:40:04.699Z] validateFilters: All filters are valid
[2025-07-30T04:40:04.699Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:40:04.699Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:04.700Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
[2025-07-30T04:40:04.700Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.700Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 284
[2025-07-30T04:40:04.700Z] getSubscriptions: No subscriptions found for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.700Z] handleSubscription: No active subscriptions for connection: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Found 0 events for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.701Z] publishSubscription: Published subscription for connection: 0b2d739f6b73480f4181f838395040e7, subscriptionId: sub7
[2025-07-30T04:40:04.701Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub7 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:40:04.730Z] handleMessage: Received message:
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
[2025-07-30T04:40:04.730Z] handleMessage: Processing REQ message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.730Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.730Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.730Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":283,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:40:04.730Z] publishSubscription: Attempting to publish subscription:
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
[2025-07-30T04:40:04.730Z] validateFilters: Validating filters:
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
[2025-07-30T04:40:04.730Z] validateFilters: All filters are valid
[2025-07-30T04:40:04.730Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:40:04.730Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:04.730Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
[2025-07-30T04:40:04.730Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.730Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 285
[2025-07-30T04:40:04.732Z] publishSubscription: Published subscription for connection: 0b2d739f6b73480f4181f838395040e7, subscriptionId: sub12
[2025-07-30T04:40:04.732Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub12 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:40:04.771Z] handleMessage: Received message:
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
[2025-07-30T04:40:04.771Z] handleMessage: Processing REQ message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.771Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.771Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.771Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":284,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:40:04.771Z] publishSubscription: Attempting to publish subscription:
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
[2025-07-30T04:40:04.771Z] validateFilters: Validating filters:
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
[2025-07-30T04:40:04.771Z] validateFilters: All filters are valid
[2025-07-30T04:40:04.771Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:40:04.771Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:04.771Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
[2025-07-30T04:40:04.771Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.771Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 286
[2025-07-30T04:40:04.772Z] publishSubscription: Published subscription for connection: 0b2d739f6b73480f4181f838395040e7, subscriptionId: sub13
[2025-07-30T04:40:04.772Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub13 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:40:04.799Z] handleMessage: Received message:
[
  "REQ",
  "sub14",
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
[2025-07-30T04:40:04.799Z] handleMessage: Processing REQ message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.799Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.799Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.800Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":285,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]}}}"}
[2025-07-30T04:40:04.800Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub14",
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
[2025-07-30T04:40:04.800Z] validateFilters: Validating filters:
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
[2025-07-30T04:40:04.800Z] validateFilters: All filters are valid
[2025-07-30T04:40:04.800Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:40:04.800Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:04.800Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
    },
    "sub14": {
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
[2025-07-30T04:40:04.800Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.800Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 287
[2025-07-30T04:40:04.801Z] publishSubscription: Published subscription for connection: 0b2d739f6b73480f4181f838395040e7, subscriptionId: sub14
[2025-07-30T04:40:04.801Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub14 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:40:04.841Z] handleMessage: Received message:
[
  "REQ",
  "sub15",
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
[2025-07-30T04:40:04.841Z] handleMessage: Processing REQ message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.841Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.841Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.841Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":286,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}]}}}"}
[2025-07-30T04:40:04.841Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub15",
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
[2025-07-30T04:40:04.841Z] validateFilters: Validating filters:
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
[2025-07-30T04:40:04.841Z] validateFilters: All filters are valid
[2025-07-30T04:40:04.841Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:40:04.841Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:04.841Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
    },
    "sub14": {
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
    "sub15": {
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
[2025-07-30T04:40:04.842Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.842Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 288
[2025-07-30T04:40:04.843Z] publishSubscription: Published subscription for connection: 0b2d739f6b73480f4181f838395040e7, subscriptionId: sub15
[2025-07-30T04:40:04.843Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub15 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[2025-07-30T04:40:04.885Z] handleMessage: Received message:
[
  "CLOSE",
  "sub15"
]
[2025-07-30T04:40:04.885Z] handleMessage: Processing CLOSE message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.885Z] unsubscribe: Removing subscription sub15 for connection 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.885Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.885Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.885Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":287,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}]},\"sub15\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]}}}"}
[2025-07-30T04:40:04.885Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:04.885Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
    },
    "sub14": {
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
[2025-07-30T04:40:04.885Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:04.885Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 289
[2025-07-30T04:40:04.886Z] unsubscribe: Successfully removed subscription sub15
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:40:04.886Z] handleMessage: Closed subscription sub15
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850407614,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received health check
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850412614,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/0b2d739f6b73480f4181f838395040e7
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:40:14.733Z] handleSubscription: Handling subscription for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:14.733Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:14.733Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:14.733Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":288,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}]},\"sub14\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}]}}}"}
[2025-07-30T04:40:14.733Z] handleSubscription: Active subscriptions:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
    },
    "sub14": {
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
[2025-07-30T04:40:14.733Z] handleSubscription: Processing subscription sub7 with last timestamp: undefined
[2025-07-30T04:40:14.733Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:40:14.733Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.733Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:40:14.733Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.733Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:40:14.733Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:40:14.733Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:40:14.733Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:40:14.733Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:14.733Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:14.733Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:14.733Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:14.733Z] queryEvents: Constructed query groups
[2025-07-30T04:40:14.733Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:14.733Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:14.733Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:40:14.733Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:0000000000:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.733Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.735Z] executeQueries:  Query 1/2 in group 1 finished with 3 entries
[2025-07-30T04:40:14.735Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:40:14.735Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:0000000000:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.735Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.735Z] executeQueries:  Query 2/2 in group 1 finished with 1 entries
[2025-07-30T04:40:14.735Z] executeQueries: Group 1 produced 4 unique IDs
[2025-07-30T04:40:14.735Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:14.735Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:14.735Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.735Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.736Z] executeQueries:  Query 1/1 in group 2 finished with 5 entries
[2025-07-30T04:40:14.736Z] executeQueries: Group 2 produced 5 unique IDs
[2025-07-30T04:40:14.736Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:14.736Z] findCommonIds: Processing result set 2, size: 5
[2025-07-30T04:40:14.736Z] findCommonIds: After intersection with set 2: reduced from 4 to 4 common IDs
[2025-07-30T04:40:14.736Z] findCommonIds: Final common ID count: 4
[2025-07-30T04:40:14.736Z] executeQueries: Found 4 common IDs across all groups
[2025-07-30T04:40:14.736Z] getEvent: Attempting to retrieve event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:40:14.736Z] getEvent: Converted key: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:40:14.736Z] getEvent: Event found for ID 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:40:14.736Z] getEvent: Attempting to retrieve event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:40:14.736Z] getEvent: Converted key: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:40:14.736Z] getEvent: Event found for ID 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:40:14.736Z] getEvent: Attempting to retrieve event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:40:14.736Z] getEvent: Converted key: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:40:14.737Z] getEvent: Event found for ID 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:40:14.737Z] getEvent: Attempting to retrieve event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:40:14.737Z] getEvent: Converted key: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:40:14.737Z] getEvent: Event found for ID bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:40:14.737Z] executeQueries: Successfully retrieved 4 full events
[2025-07-30T04:40:14.737Z] queryEvents: Raw query results count:
4
[2025-07-30T04:40:14.737Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub7:
{
  "new": 1753850070
}
[2025-07-30T04:40:14.737Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:40:14.737Z] queryEvents: Starting query with filter:
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
[2025-07-30T04:40:14.737Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:40:14.737Z] constructQueries: Constructing queries for filter:
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
[2025-07-30T04:40:14.737Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:40:14.737Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:40:14.737Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:40:14.737Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:40:14.737Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:40:14.737Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:14.737Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:14.737Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:14.737Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:14.737Z] queryEvents: Constructed query groups
[2025-07-30T04:40:14.737Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:14.737Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:14.737Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:40:14.737Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:0000000000:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.737Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.737Z] executeQueries:  Query 1/3 in group 1 finished with 3 entries
[2025-07-30T04:40:14.737Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:40:14.737Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:0000000000:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.737Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.737Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:40:14.737Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:40:14.737Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:0000000000:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.737Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.737Z] executeQueries:  Query 3/3 in group 1 finished with 1 entries
[2025-07-30T04:40:14.737Z] executeQueries: Group 1 produced 4 unique IDs
[2025-07-30T04:40:14.737Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:14.737Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:14.737Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.737Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.738Z] executeQueries:  Query 1/1 in group 2 finished with 8 entries
[2025-07-30T04:40:14.738Z] executeQueries: Group 2 produced 8 unique IDs
[2025-07-30T04:40:14.738Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:14.738Z] findCommonIds: Processing result set 2, size: 8
[2025-07-30T04:40:14.738Z] findCommonIds: After intersection with set 2: reduced from 4 to 4 common IDs
[2025-07-30T04:40:14.738Z] findCommonIds: Final common ID count: 4
[2025-07-30T04:40:14.738Z] executeQueries: Found 4 common IDs across all groups
[2025-07-30T04:40:14.738Z] getEvent: Attempting to retrieve event with ID: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:40:14.738Z] getEvent: Converted key: 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:40:14.738Z] getEvent: Event found for ID 29582b4c4ae69b024523bc669827aae250be081d24990e28325f6d1675d9dcee
[2025-07-30T04:40:14.738Z] getEvent: Attempting to retrieve event with ID: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:40:14.738Z] getEvent: Converted key: 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:40:14.738Z] getEvent: Event found for ID 8eeb926af1ed54d3a6c4f961ee4f80ff72056aa3ef1d359e871293ec6024c2ac
[2025-07-30T04:40:14.738Z] getEvent: Attempting to retrieve event with ID: 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:40:14.738Z] getEvent: Converted key: 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:40:14.738Z] getEvent: Event found for ID 554e5f93367dbcdb7c78368ad2c68d66d505314e253e1dd6b199929f29d34fb3
[2025-07-30T04:40:14.738Z] getEvent: Attempting to retrieve event with ID: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:40:14.738Z] getEvent: Converted key: a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:40:14.738Z] getEvent: Event found for ID a9fa0bb7c0f557acc55778ea5f62a45f1888c09cd7eb8fe6c1667a690cd7c137
[2025-07-30T04:40:14.738Z] executeQueries: Successfully retrieved 4 full events
[2025-07-30T04:40:14.738Z] queryEvents: Raw query results count:
4
[2025-07-30T04:40:14.738Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub7:
{
  "new": 1753850129
}
[2025-07-30T04:40:14.738Z] handleSubscription: Processing subscription sub12 with last timestamp: undefined
[2025-07-30T04:40:14.738Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:40:14.738Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.738Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:40:14.738Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.738Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:40:14.738Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:40:14.738Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:40:14.738Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:14.738Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:14.738Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:14.738Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:14.738Z] queryEvents: Constructed query groups
[2025-07-30T04:40:14.738Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:14.738Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:14.738Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:14.738Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:0000000000:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.738Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.738Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:40:14.738Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:40:14.738Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:14.738Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:14.738Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.738Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.738Z] executeQueries:  Query 1/1 in group 2 finished with 5 entries
[2025-07-30T04:40:14.738Z] executeQueries: Group 2 produced 5 unique IDs
[2025-07-30T04:40:14.738Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:14.738Z] findCommonIds: Processing result set 2, size: 5
[2025-07-30T04:40:14.738Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:40:14.738Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:40:14.738Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:40:14.738Z] getEvent: Attempting to retrieve event with ID: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:40:14.738Z] getEvent: Converted key: 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:40:14.739Z] getEvent: Event found for ID 4f5080fde35fab4d525d43362a66e0d23dc5294c47dec70ef1886038addfe20d
[2025-07-30T04:40:14.739Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:40:14.739Z] queryEvents: Raw query results count:
1
[2025-07-30T04:40:14.739Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub12:
{
  "new": 1753850059
}
[2025-07-30T04:40:14.739Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:40:14.739Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.739Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:40:14.739Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.739Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:40:14.739Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:40:14.739Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:40:14.739Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:14.739Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:14.739Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:14.739Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:14.739Z] queryEvents: Constructed query groups
[2025-07-30T04:40:14.739Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:14.739Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:14.739Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:0000000000:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.739Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 1 finished with 3 entries
[2025-07-30T04:40:14.739Z] executeQueries: Group 1 produced 3 unique IDs
[2025-07-30T04:40:14.739Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:14.739Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.739Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 2 finished with 5 entries
[2025-07-30T04:40:14.739Z] executeQueries: Group 2 produced 5 unique IDs
[2025-07-30T04:40:14.739Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:14.739Z] findCommonIds: Processing result set 2, size: 5
[2025-07-30T04:40:14.739Z] findCommonIds: After intersection with set 2: reduced from 3 to 3 common IDs
[2025-07-30T04:40:14.739Z] findCommonIds: Final common ID count: 3
[2025-07-30T04:40:14.739Z] executeQueries: Found 3 common IDs across all groups
[2025-07-30T04:40:14.739Z] getEvent: Attempting to retrieve event with ID: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:40:14.739Z] getEvent: Converted key: 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:40:14.739Z] getEvent: Event found for ID 7e98acf96167a1148e001bb40ed76c211cd20f7cd77a56e28345f09466f6526d
[2025-07-30T04:40:14.739Z] getEvent: Attempting to retrieve event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:40:14.739Z] getEvent: Converted key: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:40:14.739Z] getEvent: Event found for ID 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:40:14.739Z] getEvent: Attempting to retrieve event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:40:14.739Z] getEvent: Converted key: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:40:14.739Z] getEvent: Event found for ID 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:40:14.739Z] executeQueries: Successfully retrieved 3 full events
[2025-07-30T04:40:14.739Z] queryEvents: Raw query results count:
3
[2025-07-30T04:40:14.739Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub12:
{
  "new": 1753850070
}
[2025-07-30T04:40:14.739Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:40:14.739Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.739Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:40:14.739Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.739Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:40:14.739Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:40:14.739Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:40:14.739Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:14.739Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:14.739Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:14.739Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:14.739Z] queryEvents: Constructed query groups
[2025-07-30T04:40:14.739Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:14.739Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:14.739Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:0000000000:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.739Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:40:14.739Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:40:14.739Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:14.739Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.739Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 2 finished with 5 entries
[2025-07-30T04:40:14.739Z] executeQueries: Group 2 produced 5 unique IDs
[2025-07-30T04:40:14.739Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:14.739Z] findCommonIds: Processing result set 2, size: 5
[2025-07-30T04:40:14.739Z] findCommonIds: After intersection with set 2: reduced from 1 to 1 common IDs
[2025-07-30T04:40:14.739Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:40:14.739Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:40:14.739Z] getEvent: Attempting to retrieve event with ID: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:40:14.739Z] getEvent: Converted key: bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:40:14.739Z] getEvent: Event found for ID bddefe4ab8c332d2cc52ffd2238d04c32c44151bfd8fd817b0c93a49a2db9f3e
[2025-07-30T04:40:14.739Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:40:14.739Z] queryEvents: Raw query results count:
1
[2025-07-30T04:40:14.739Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub12:
{
  "new": 1753850060
}
[2025-07-30T04:40:14.739Z] handleSubscription: Processing subscription sub13 with last timestamp: undefined
[2025-07-30T04:40:14.739Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:40:14.739Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.739Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:40:14.739Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:14.739Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:40:14.739Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:40:14.739Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:40:14.739Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:14.739Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:14.739Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:14.739Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:14.739Z] queryEvents: Constructed query groups
[2025-07-30T04:40:14.739Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:14.739Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:14.739Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:0000000000:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.739Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 1 finished with 2 entries
[2025-07-30T04:40:14.739Z] executeQueries: Group 1 produced 2 unique IDs
[2025-07-30T04:40:14.739Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:14.739Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.739Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.739Z] executeQueries:  Query 1/1 in group 2 finished with 8 entries
[2025-07-30T04:40:14.739Z] executeQueries: Group 2 produced 8 unique IDs
[2025-07-30T04:40:14.739Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:14.739Z] findCommonIds: Processing result set 2, size: 8
[2025-07-30T04:40:14.739Z] findCommonIds: After intersection with set 2: reduced from 2 to 2 common IDs
[2025-07-30T04:40:14.739Z] findCommonIds: Final common ID count: 2
[2025-07-30T04:40:14.739Z] executeQueries: Found 2 common IDs across all groups
[2025-07-30T04:40:14.739Z] getEvent: Attempting to retrieve event with ID: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:40:14.739Z] getEvent: Converted key: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:40:14.740Z] getEvent: Event found for ID def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:40:14.740Z] getEvent: Attempting to retrieve event with ID: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:40:14.740Z] getEvent: Converted key: fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:40:14.740Z] getEvent: Event found for ID fcaceed65a74e38144797ef944cee31016745e4b1c0291e3517984145200b915
[2025-07-30T04:40:14.740Z] executeQueries: Successfully retrieved 2 full events
[2025-07-30T04:40:14.740Z] queryEvents: Raw query results count:
2
[2025-07-30T04:40:14.740Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub13:
{
  "new": 1753850147
}
[2025-07-30T04:40:14.740Z] handleSubscription: Processing subscription sub14 with last timestamp: undefined
[2025-07-30T04:40:14.740Z] handleSubscription: Processing filter with last_returned_event_timestamp:
[2025-07-30T04:40:14.740Z] queryEvents: Starting query with filter:
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
[2025-07-30T04:40:14.740Z] queryEvents: Last returned event timestamp:
[2025-07-30T04:40:14.740Z] constructQueries: Constructing queries for filter:
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
[2025-07-30T04:40:14.740Z] constructQueries: Using timestamp:
filter.since: 0
[2025-07-30T04:40:14.740Z] constructQueries: Using time range - since: 0, until: 9999999999
[2025-07-30T04:40:14.740Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:40:14.740Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:40:14.740Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:14.740Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:14.740Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:14.740Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:40:14.740Z] queryEvents: Constructed query groups
[2025-07-30T04:40:14.740Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:40:14.740Z] executeQueries: Processing group 1/3
[2025-07-30T04:40:14.740Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:14.740Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:0000000000:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.740Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.740Z] executeQueries:  Query 1/1 in group 1 finished with 2 entries
[2025-07-30T04:40:14.740Z] executeQueries: Group 1 produced 2 unique IDs
[2025-07-30T04:40:14.740Z] executeQueries: Processing group 2/3
[2025-07-30T04:40:14.740Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:14.740Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:0000000000:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.740Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.741Z] executeQueries:  Query 1/1 in group 2 finished with 10 entries
[2025-07-30T04:40:14.741Z] executeQueries: Group 2 produced 10 unique IDs
[2025-07-30T04:40:14.741Z] executeQueries: Processing group 3/3
[2025-07-30T04:40:14.741Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:40:14.741Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:0000000000:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:14.741Z] executeQueries:   starting read stream
[2025-07-30T04:40:14.741Z] executeQueries:  Query 1/1 in group 3 finished with 8 entries
[2025-07-30T04:40:14.741Z] executeQueries: Group 3 produced 8 unique IDs
[2025-07-30T04:40:14.741Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:40:14.741Z] findCommonIds: Processing result set 2, size: 10
[2025-07-30T04:40:14.741Z] findCommonIds: After intersection with set 2: reduced from 2 to 1 common IDs
[2025-07-30T04:40:14.741Z] findCommonIds: Processing result set 3, size: 8
[2025-07-30T04:40:14.741Z] findCommonIds: After intersection with set 3: reduced from 1 to 1 common IDs
[2025-07-30T04:40:14.741Z] findCommonIds: Final common ID count: 1
[2025-07-30T04:40:14.741Z] executeQueries: Found 1 common IDs across all groups
[2025-07-30T04:40:14.741Z] getEvent: Attempting to retrieve event with ID: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:40:14.741Z] getEvent: Converted key: def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:40:14.741Z] getEvent: Event found for ID def207275cbbad3e2c8b0da63884b6105cbcf42385004cc095ad60a6c058a4d8
[2025-07-30T04:40:14.741Z] executeQueries: Successfully retrieved 1 full events
[2025-07-30T04:40:14.741Z] queryEvents: Raw query results count:
1
[2025-07-30T04:40:14.741Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub14:
{
  "new": 1753850071
}
[2025-07-30T04:40:14.741Z] handleSubscription: Total events and EOSE messages for client:
20
[RelayServer] Found 20 events for connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Updating subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:14.741Z] RelayManager: Updating subscriptions for connection 0b2d739f6b73480f4181f838395040e7
Updated subscription data: {
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
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
[2025-07-30T04:40:14.741Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
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
[2025-07-30T04:40:14.741Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:14.741Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
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
[2025-07-30T04:40:14.741Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:14.741Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 290
[2025-07-30T04:40:14.742Z] updateSubscriptions: Updated subscriptions for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:14.742Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
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
  updated_at: '2025-07-30T04:40:14.855Z'
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
  updated_at: '2025-07-30T04:40:14.859Z'
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
  updated_at: '2025-07-30T04:40:14.860Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 3b81e5a0... on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[RelayAuthStore] Added auth for 3b81e5a0... on relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[Worker] Sending message: {"type":"auth-data-updated","identifier":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","pubkey":"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182"}
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
  updated_at: '2025-07-30T04:40:14.862Z'
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
  updated_at: '2025-07-30T04:40:14.863Z'
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
  updated_at: '2025-07-30T04:40:14.863Z'
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
  updated_at: '2025-07-30T04:40:14.864Z'
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
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:40:14.906Z] handleMessage: Received message:
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
    "created_at": 1753850414,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001",
    "sig": "7b0718b39d7e33aab86ecc7defd5d7ca7b89853b4d8c1cef7186f280fedfb2c9727b809c4c3db3e34e24234011b6193d6d30311758a74fa2879d693a32bdf8d9"
  }
]
[2025-07-30T04:40:14.906Z] handleMessage: Processing EVENT message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:14.906Z] publishEvent: Attempting to publish event:
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
  "created_at": 1753850414,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001",
  "sig": "7b0718b39d7e33aab86ecc7defd5d7ca7b89853b4d8c1cef7186f280fedfb2c9727b809c4c3db3e34e24234011b6193d6d30311758a74fa2879d693a32bdf8d9"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850414,39002,[["d","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["i","hypertuna:relay"],["p","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","member"]],"Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"]
Event Hash: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: 7b0718b39d7e33aab86ecc7defd5d7ca7b89853b4d8c1cef7186f280fedfb2c9727b809c4c3db3e34e24234011b6193d6d30311758a74fa2879d693a32bdf8d9
Verification Result: true
[2025-07-30T04:40:14.924Z] publishEvent: Event verification result:
true
[2025-07-30T04:40:14.925Z] publishEvent: Publishing event with ID: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.925Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:14.925Z] validateEvent: Validating event:
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
  "created_at": 1753850414,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001",
  "sig": "7b0718b39d7e33aab86ecc7defd5d7ca7b89853b4d8c1cef7186f280fedfb2c9727b809c4c3db3e34e24234011b6193d6d30311758a74fa2879d693a32bdf8d9"
}
[2025-07-30T04:40:14.925Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:14.925Z] NostrRelay.apply: Storing event with ID: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.925Z] NostrRelay.apply: Storing kind index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: kind:39002:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.925Z] NostrRelay.apply: Storing pubkey index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.925Z] NostrRelay.apply: Storing created_at index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.925Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.925Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.925Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] validateEvent: Validating event:
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
  "created_at": 1753850414,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001",
  "sig": "7b0718b39d7e33aab86ecc7defd5d7ca7b89853b4d8c1cef7186f280fedfb2c9727b809c4c3db3e34e24234011b6193d6d30311758a74fa2879d693a32bdf8d9"
}
[2025-07-30T04:40:14.926Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing event with ID: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing kind index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: kind:39002:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing pubkey index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing created_at index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] validateEvent: Validating event:
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
  "created_at": 1753850414,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001",
  "sig": "7b0718b39d7e33aab86ecc7defd5d7ca7b89853b4d8c1cef7186f280fedfb2c9727b809c4c3db3e34e24234011b6193d6d30311758a74fa2879d693a32bdf8d9"
}
[2025-07-30T04:40:14.926Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing event with ID: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing kind index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: kind:39002:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing pubkey index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing created_at index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] validateEvent: Validating event:
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
  "created_at": 1753850414,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001",
  "sig": "7b0718b39d7e33aab86ecc7defd5d7ca7b89853b4d8c1cef7186f280fedfb2c9727b809c4c3db3e34e24234011b6193d6d30311758a74fa2879d693a32bdf8d9"
}
[2025-07-30T04:40:14.926Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing event with ID: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing kind index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: kind:39002:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing pubkey index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing created_at index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Storing tag index for event 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001 under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850414:id:706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.926Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 318
[2025-07-30T04:40:14.927Z] publishEvent: Event published successfully: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:14.927Z] handleMessage: EVENT publish result:
[
  "OK",
  "706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001",
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
  updated_at: '2025-07-30T04:40:14.958Z'
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
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:40:15.162Z] handleMessage: Received message:
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
[2025-07-30T04:40:15.162Z] handleMessage: Processing REQ message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.162Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.162Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.162Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":289,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850129},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850147},\"sub14\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:40:15.162Z] publishSubscription: Attempting to publish subscription:
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
[2025-07-30T04:40:15.162Z] validateFilters: Validating filters:
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
[2025-07-30T04:40:15.162Z] validateFilters: All filters are valid
[2025-07-30T04:40:15.162Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:40:15.162Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:15.162Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
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
[2025-07-30T04:40:15.162Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.162Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 319
[2025-07-30T04:40:15.165Z] publishSubscription: Published subscription for connection: 0b2d739f6b73480f4181f838395040e7, subscriptionId: sub16
[2025-07-30T04:40:15.165Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub16 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
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
  updated_at: '2025-07-30T04:40:15.355Z'
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
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing REQ message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] REQ authenticated for 3b81e5a0...
[2025-07-30T04:40:15.453Z] handleMessage: Received message:
[
  "REQ",
  "sub17",
  {
    "kinds": [
      0
    ],
    "authors": [
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"
    ]
  }
]
[2025-07-30T04:40:15.453Z] handleMessage: Processing REQ message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.453Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.453Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.455Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":318,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850129},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850147},\"sub14\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071},\"sub16\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]}}}"}
[2025-07-30T04:40:15.455Z] publishSubscription: Attempting to publish subscription:
[
  "REQ",
  "sub17",
  {
    "kinds": [
      0
    ],
    "authors": [
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"
    ]
  }
]
[2025-07-30T04:40:15.455Z] validateFilters: Validating filters:
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
[2025-07-30T04:40:15.455Z] validateFilters: All filters are valid
[2025-07-30T04:40:15.455Z] publishSubscription: Filters validation result:
true
[2025-07-30T04:40:15.456Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:15.456Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
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
    },
    "sub17": {
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
[2025-07-30T04:40:15.456Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.456Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 320
[2025-07-30T04:40:15.458Z] publishSubscription: Published subscription for connection: 0b2d739f6b73480f4181f838395040e7, subscriptionId: sub17
[2025-07-30T04:40:15.458Z] handleMessage: REQ publish result:
[
  "NOTICE",
  "Subscription sub17 created/updated successfully"
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:40:15.870Z] handleMessage: Received message:
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
        "admin"
      ],
      [
        "p",
        "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
        "member"
      ]
    ],
    "created_at": 1753850415,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
    "sig": "1d66fb0332bcf025f2308eba8a9b9b1e7a70c1aef0b1db54df348907f91a779b7987606651d6c370746da071cf82ba02fae634812bcdb6a7b9fd66977741178a"
  }
]
[2025-07-30T04:40:15.871Z] handleMessage: Processing EVENT message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.871Z] publishEvent: Attempting to publish event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "1d66fb0332bcf025f2308eba8a9b9b1e7a70c1aef0b1db54df348907f91a779b7987606651d6c370746da071cf82ba02fae634812bcdb6a7b9fd66977741178a"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850415,39002,[["d","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["i","hypertuna:relay"],["p","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","admin"],["p","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","member"]],"Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"]
Event Hash: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: 1d66fb0332bcf025f2308eba8a9b9b1e7a70c1aef0b1db54df348907f91a779b7987606651d6c370746da071cf82ba02fae634812bcdb6a7b9fd66977741178a
Verification Result: true
[2025-07-30T04:40:15.891Z] publishEvent: Event verification result:
true
[2025-07-30T04:40:15.891Z] publishEvent: Publishing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:15.892Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "1d66fb0332bcf025f2308eba8a9b9b1e7a70c1aef0b1db54df348907f91a779b7987606651d6c370746da071cf82ba02fae634812bcdb6a7b9fd66977741178a"
}
[2025-07-30T04:40:15.892Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "1d66fb0332bcf025f2308eba8a9b9b1e7a70c1aef0b1db54df348907f91a779b7987606651d6c370746da071cf82ba02fae634812bcdb6a7b9fd66977741178a"
}
[2025-07-30T04:40:15.892Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "1d66fb0332bcf025f2308eba8a9b9b1e7a70c1aef0b1db54df348907f91a779b7987606651d6c370746da071cf82ba02fae634812bcdb6a7b9fd66977741178a"
}
[2025-07-30T04:40:15.892Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "1d66fb0332bcf025f2308eba8a9b9b1e7a70c1aef0b1db54df348907f91a779b7987606651d6c370746da071cf82ba02fae634812bcdb6a7b9fd66977741178a"
}
[2025-07-30T04:40:15.892Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "1d66fb0332bcf025f2308eba8a9b9b1e7a70c1aef0b1db54df348907f91a779b7987606651d6c370746da071cf82ba02fae634812bcdb6a7b9fd66977741178a"
}
[2025-07-30T04:40:15.892Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.892Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.893Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.893Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.893Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.893Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 360
[2025-07-30T04:40:15.893Z] publishEvent: Event published successfully: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.894Z] handleMessage: EVENT publish result:
[
  "OK",
  "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
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
  updated_at: '2025-07-30T04:40:15.920Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"members-updated","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd"}
[ProfileManager] Saving relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: {
  name: 'el sans serifo',
  auto_connect: true,
  updated_at: '2025-07-30T04:40:15.921Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"members-updated","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd"}
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
  updated_at: '2025-07-30T04:40:15.922Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relay-profiles.json
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[ProfileManager] Successfully saved relay profile for 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"members-updated","relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd"}
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:40:15.928Z] handleMessage: Received message:
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
        "admin"
      ],
      [
        "p",
        "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
        "member"
      ]
    ],
    "created_at": 1753850415,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
    "sig": "0469a3452e41399c6b02b2b8bb571278c7957d55460dfb31537140c09b139bc875fc7078c1d920db94cb5febd52738773ad0363f599967a226dadfcb6bbc9f44"
  }
]
[2025-07-30T04:40:15.928Z] handleMessage: Processing EVENT message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.928Z] publishEvent: Attempting to publish event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "0469a3452e41399c6b02b2b8bb571278c7957d55460dfb31537140c09b139bc875fc7078c1d920db94cb5febd52738773ad0363f599967a226dadfcb6bbc9f44"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850415,39002,[["d","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["i","hypertuna:relay"],["p","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","admin"],["p","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","member"]],"Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"]
Event Hash: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: 0469a3452e41399c6b02b2b8bb571278c7957d55460dfb31537140c09b139bc875fc7078c1d920db94cb5febd52738773ad0363f599967a226dadfcb6bbc9f44
Verification Result: true
[2025-07-30T04:40:15.955Z] publishEvent: Event verification result:
true
[2025-07-30T04:40:15.955Z] publishEvent: Publishing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.955Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:15.956Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "0469a3452e41399c6b02b2b8bb571278c7957d55460dfb31537140c09b139bc875fc7078c1d920db94cb5febd52738773ad0363f599967a226dadfcb6bbc9f44"
}
[2025-07-30T04:40:15.956Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.956Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.957Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.958Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.958Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.958Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.958Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.958Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.962Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.962Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "0469a3452e41399c6b02b2b8bb571278c7957d55460dfb31537140c09b139bc875fc7078c1d920db94cb5febd52738773ad0363f599967a226dadfcb6bbc9f44"
}
[2025-07-30T04:40:15.962Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.962Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.962Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "0469a3452e41399c6b02b2b8bb571278c7957d55460dfb31537140c09b139bc875fc7078c1d920db94cb5febd52738773ad0363f599967a226dadfcb6bbc9f44"
}
[2025-07-30T04:40:15.963Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.963Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "0469a3452e41399c6b02b2b8bb571278c7957d55460dfb31537140c09b139bc875fc7078c1d920db94cb5febd52738773ad0363f599967a226dadfcb6bbc9f44"
}
[2025-07-30T04:40:15.968Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "0469a3452e41399c6b02b2b8bb571278c7957d55460dfb31537140c09b139bc875fc7078c1d920db94cb5febd52738773ad0363f599967a226dadfcb6bbc9f44"
}
[2025-07-30T04:40:15.968Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.968Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.969Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.969Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.969Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.969Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.969Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.969Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.969Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 400
[2025-07-30T04:40:15.971Z] publishEvent: Event published successfully: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:15.971Z] handleMessage: EVENT publish result:
[
  "OK",
  "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing EVENT message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] EVENT authenticated and authorized for 3b81e5a0...
[2025-07-30T04:40:15.998Z] handleMessage: Received message:
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
        "admin"
      ],
      [
        "p",
        "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
        "member"
      ]
    ],
    "created_at": 1753850415,
    "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
    "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
    "sig": "c1d7e978a02af579a2173d0b371384f556e80587e9e502dd36b60571a5045cdcc10bf18005cb10ab10be004c4d2b04a3f3adb76db8959cb490a29e7e4d863eed"
  }
]
[2025-07-30T04:40:15.998Z] handleMessage: Processing EVENT message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:15.998Z] publishEvent: Attempting to publish event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "c1d7e978a02af579a2173d0b371384f556e80587e9e502dd36b60571a5045cdcc10bf18005cb10ab10be004c4d2b04a3f3adb76db8959cb490a29e7e4d863eed"
}
Verifying Event Signature ===
Serialized Event: [0,"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",1753850415,39002,[["d","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["hypertuna","npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"],["i","hypertuna:relay"],["p","3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","admin"],["p","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914","member"]],"Member list update for group: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"]
Event Hash: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
Verification Details:
Public Key: 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
Signature: c1d7e978a02af579a2173d0b371384f556e80587e9e502dd36b60571a5045cdcc10bf18005cb10ab10be004c4d2b04a3f3adb76db8959cb490a29e7e4d863eed
Verification Result: true
[2025-07-30T04:40:16.017Z] publishEvent: Event verification result:
true
[2025-07-30T04:40:16.017Z] publishEvent: Publishing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:16.017Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "c1d7e978a02af579a2173d0b371384f556e80587e9e502dd36b60571a5045cdcc10bf18005cb10ab10be004c4d2b04a3f3adb76db8959cb490a29e7e4d863eed"
}
[2025-07-30T04:40:16.017Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "c1d7e978a02af579a2173d0b371384f556e80587e9e502dd36b60571a5045cdcc10bf18005cb10ab10be004c4d2b04a3f3adb76db8959cb490a29e7e4d863eed"
}
[2025-07-30T04:40:16.017Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "c1d7e978a02af579a2173d0b371384f556e80587e9e502dd36b60571a5045cdcc10bf18005cb10ab10be004c4d2b04a3f3adb76db8959cb490a29e7e4d863eed"
}
[2025-07-30T04:40:16.017Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "c1d7e978a02af579a2173d0b371384f556e80587e9e502dd36b60571a5045cdcc10bf18005cb10ab10be004c4d2b04a3f3adb76db8959cb490a29e7e4d863eed"
}
[2025-07-30T04:40:16.017Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] validateEvent: Validating event:
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
      "admin"
    ],
    [
      "p",
      "61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914",
      "member"
    ]
  ],
  "created_at": 1753850415,
  "pubkey": "3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182",
  "id": "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  "sig": "c1d7e978a02af579a2173d0b371384f556e80587e9e502dd36b60571a5045cdcc10bf18005cb10ab10be004c4d2b04a3f3adb76db8959cb490a29e7e4d863eed"
}
[2025-07-30T04:40:16.017Z] validateEvent: Event passed all validation checks
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing kind index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: kind:39002:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing pubkey index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing created_at index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:i:tagValue:hypertuna:relay:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Storing tag index for event 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c under key: tagKey:p:tagValue:61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914:created_at:1753850415:id:2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.017Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 440
[2025-07-30T04:40:16.018Z] publishEvent: Event published successfully: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:16.018Z] handleMessage: EVENT publish result:
[
  "OK",
  "2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c",
  true,
  ""
]
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: OK message
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850417614,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[2025-07-30T04:40:18.147Z] handleMessage: Received message:
[
  "CLOSE",
  "sub16"
]
[2025-07-30T04:40:18.147Z] handleMessage: Processing CLOSE message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:18.147Z] unsubscribe: Removing subscription sub16 for connection 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:18.147Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:18.147Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:18.147Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":319,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850129},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850147},\"sub14\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071},\"sub16\":{\"filters\":[{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"],\"limit\":1}]},\"sub17\":{\"filters\":[{\"kinds\":[0],\"authors\":[\"61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914\"]}]}}}"}
[2025-07-30T04:40:18.148Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:18.148Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
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
    "sub17": {
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
[2025-07-30T04:40:18.148Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:18.148Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 441
[2025-07-30T04:40:18.150Z] unsubscribe: Successfully removed subscription sub16
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:40:18.150Z] handleMessage: Closed subscription sub16
[RelayServer] Handled message, 1 responses queued
[RelayServer] Keepalive check for 9bf77029...
[RelayProtocol] Received request: POST /post/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[RelayServer] Relay message for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Auth token present: true
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Processing CLOSE message
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth: true
[RelayServer] Authorized pubkeys count: 2
[2025-07-30T04:40:20.440Z] handleMessage: Received message:
[
  "CLOSE",
  "sub17"
]
[2025-07-30T04:40:20.440Z] handleMessage: Processing CLOSE message for client connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:20.440Z] unsubscribe: Removing subscription sub17 for connection 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:20.440Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:20.440Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:20.440Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":440,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850129},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850147},\"sub14\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071},\"sub17\":{\"filters\":[{\"kinds\":[0],\"authors\":[\"61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914\"]}]}}}"}
[2025-07-30T04:40:20.440Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:20.440Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
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
[2025-07-30T04:40:20.440Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:20.440Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 442
[2025-07-30T04:40:20.441Z] unsubscribe: Successfully removed subscription sub17
[RelayServer] Queueing response for relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd: NOTICE message
[2025-07-30T04:40:20.441Z] handleMessage: Closed subscription sub17
[RelayServer] Handled message, 1 responses queued
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850422617,"status":"running","mode":"hyperswarm"}
[RelayProtocol] Received request: GET /get/relay/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo/0b2d739f6b73480f4181f838395040e7
[RelayServer] Checking subscriptions for identifier: npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo, connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Resolved public identifier npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo to relay key 5162c641...
[RelayServer] Relay npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo requires auth for read: true
[RelayServer] Authorized pubkeys count: 2
[RelayServer] Read access authenticated for 3b81e5a0...
[2025-07-30T04:40:24.824Z] handleSubscription: Handling subscription for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:24.824Z] getSubscriptions: Attempting to retrieve subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:24.824Z] getSubscriptions: Converted key: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:24.824Z] getSubscriptions: Subscriptions found for connection 0b2d739f6b73480f4181f838395040e7: {"seq":441,"key":{"0":11,"1":45,"2":115,"3":159,"4":107,"5":115,"6":72,"7":15,"8":65,"9":129,"10":248,"11":56,"12":57,"13":80,"14":64,"15":231},"value":"{\"connection\":\"0b2d739f6b73480f4181f838395040e7\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850129},\"sub12\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39002],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]},{\"kinds\":[39001],\"#d\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850060},\"sub13\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"]}],\"last_returned_event_timestamp\":1753850147},\"sub14\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo\"],\"authors\":[\"3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182\"]}],\"last_returned_event_timestamp\":1753850071}}}"}
[2025-07-30T04:40:24.824Z] handleSubscription: Active subscriptions:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      ],
      "last_returned_event_timestamp": 1753850147
    },
    "sub14": {
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
[2025-07-30T04:40:24.824Z] handleSubscription: Processing subscription sub7 with last timestamp: 1753850129
[2025-07-30T04:40:24.824Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850129
[2025-07-30T04:40:24.824Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.824Z] queryEvents: Last returned event timestamp:
1753850129
[2025-07-30T04:40:24.824Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002,
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.824Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850129
[2025-07-30T04:40:24.824Z] constructQueries: Using time range - since: 1753850130, until: 9999999999
[2025-07-30T04:40:24.824Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:40:24.824Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:40:24.824Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:24.824Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:24.824Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:24.824Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:24.824Z] queryEvents: Constructed query groups
[2025-07-30T04:40:24.824Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:24.824Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:24.824Z] executeQueries:  Query 1/2 in group 1
[2025-07-30T04:40:24.824Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850130:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.824Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.824Z] executeQueries:  Query 1/2 in group 1 finished with 2 entries
[2025-07-30T04:40:24.824Z] executeQueries:  Query 2/2 in group 1
[2025-07-30T04:40:24.824Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850130:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.824Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.824Z] executeQueries:  Query 2/2 in group 1 finished with 0 entries
[2025-07-30T04:40:24.824Z] executeQueries: Group 1 produced 2 unique IDs
[2025-07-30T04:40:24.824Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:24.824Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:24.824Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850130:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.824Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 2 finished with 2 entries
[2025-07-30T04:40:24.825Z] executeQueries: Group 2 produced 2 unique IDs
[2025-07-30T04:40:24.825Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:24.825Z] findCommonIds: Processing result set 2, size: 2
[2025-07-30T04:40:24.825Z] findCommonIds: After intersection with set 2: reduced from 2 to 2 common IDs
[2025-07-30T04:40:24.825Z] findCommonIds: Final common ID count: 2
[2025-07-30T04:40:24.825Z] executeQueries: Found 2 common IDs across all groups
[2025-07-30T04:40:24.825Z] getEvent: Attempting to retrieve event with ID: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:24.825Z] getEvent: Converted key: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:24.825Z] getEvent: Event found for ID 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:24.825Z] getEvent: Attempting to retrieve event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:24.825Z] getEvent: Converted key: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:24.825Z] getEvent: Event found for ID 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:24.825Z] executeQueries: Successfully retrieved 2 full events
[2025-07-30T04:40:24.825Z] queryEvents: Raw query results count:
2
[2025-07-30T04:40:24.825Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub7:
{
  "previous": 1753850129,
  "new": 1753850415
}
[2025-07-30T04:40:24.825Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850129
[2025-07-30T04:40:24.825Z] queryEvents: Starting query with filter:
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
[2025-07-30T04:40:24.825Z] queryEvents: Last returned event timestamp:
1753850129
[2025-07-30T04:40:24.825Z] constructQueries: Constructing queries for filter:
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
[2025-07-30T04:40:24.825Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850129
[2025-07-30T04:40:24.825Z] constructQueries: Using time range - since: 1753850130, until: 9999999999
[2025-07-30T04:40:24.825Z] constructQueries: Constructed kind query for 9000
[2025-07-30T04:40:24.825Z] constructQueries: Constructed kind query for 9001
[2025-07-30T04:40:24.825Z] constructQueries: Constructed kind query for 9021
[2025-07-30T04:40:24.825Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:24.825Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:24.825Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:24.825Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:24.825Z] queryEvents: Constructed query groups
[2025-07-30T04:40:24.825Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:24.825Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/3 in group 1
[2025-07-30T04:40:24.825Z] executeQueries:   range
{
  "gte": "kind:09000:created_at:1753850130:id:",
  "lte": "kind:09000:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.825Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/3 in group 1 finished with 0 entries
[2025-07-30T04:40:24.825Z] executeQueries:  Query 2/3 in group 1
[2025-07-30T04:40:24.825Z] executeQueries:   range
{
  "gte": "kind:09001:created_at:1753850130:id:",
  "lte": "kind:09001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.825Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.825Z] executeQueries:  Query 2/3 in group 1 finished with 0 entries
[2025-07-30T04:40:24.825Z] executeQueries:  Query 3/3 in group 1
[2025-07-30T04:40:24.825Z] executeQueries:   range
{
  "gte": "kind:09021:created_at:1753850130:id:",
  "lte": "kind:09021:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.825Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.825Z] executeQueries:  Query 3/3 in group 1 finished with 0 entries
[2025-07-30T04:40:24.825Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:40:24.825Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:24.825Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850130:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.825Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 2 finished with 1 entries
[2025-07-30T04:40:24.825Z] executeQueries: Group 2 produced 1 unique IDs
[2025-07-30T04:40:24.825Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:24.825Z] findCommonIds: No IDs in first result set
[2025-07-30T04:40:24.825Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:40:24.825Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:40:24.825Z] queryEvents: Raw query results count:
[2025-07-30T04:40:24.825Z] handleSubscription: Processing subscription sub12 with last timestamp: 1753850060
[2025-07-30T04:40:24.825Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850060
[2025-07-30T04:40:24.825Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.825Z] queryEvents: Last returned event timestamp:
1753850060
[2025-07-30T04:40:24.825Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39000
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.825Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850060
[2025-07-30T04:40:24.825Z] constructQueries: Using time range - since: 1753850061, until: 9999999999
[2025-07-30T04:40:24.825Z] constructQueries: Constructed kind query for 39000
[2025-07-30T04:40:24.825Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:24.825Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:24.825Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:24.825Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:24.825Z] queryEvents: Constructed query groups
[2025-07-30T04:40:24.825Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:24.825Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:24.825Z] executeQueries:   range
{
  "gte": "kind:39000:created_at:1753850061:id:",
  "lte": "kind:39000:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.825Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:40:24.825Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:40:24.825Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:24.825Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850061:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.825Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 2 finished with 4 entries
[2025-07-30T04:40:24.825Z] executeQueries: Group 2 produced 4 unique IDs
[2025-07-30T04:40:24.825Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:24.825Z] findCommonIds: No IDs in first result set
[2025-07-30T04:40:24.825Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:40:24.825Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:40:24.825Z] queryEvents: Raw query results count:
[2025-07-30T04:40:24.825Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850060
[2025-07-30T04:40:24.825Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.825Z] queryEvents: Last returned event timestamp:
1753850060
[2025-07-30T04:40:24.825Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39002
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.825Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850060
[2025-07-30T04:40:24.825Z] constructQueries: Using time range - since: 1753850061, until: 9999999999
[2025-07-30T04:40:24.825Z] constructQueries: Constructed kind query for 39002
[2025-07-30T04:40:24.825Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:24.825Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:24.825Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:24.825Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:24.825Z] queryEvents: Constructed query groups
[2025-07-30T04:40:24.825Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:24.825Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:24.825Z] executeQueries:   range
{
  "gte": "kind:39002:created_at:1753850061:id:",
  "lte": "kind:39002:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.825Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 1 finished with 4 entries
[2025-07-30T04:40:24.825Z] executeQueries: Group 1 produced 4 unique IDs
[2025-07-30T04:40:24.825Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:24.825Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850061:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.825Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.825Z] executeQueries:  Query 1/1 in group 2 finished with 4 entries
[2025-07-30T04:40:24.825Z] executeQueries: Group 2 produced 4 unique IDs
[2025-07-30T04:40:24.825Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:24.825Z] findCommonIds: Processing result set 2, size: 4
[2025-07-30T04:40:24.825Z] findCommonIds: After intersection with set 2: reduced from 4 to 4 common IDs
[2025-07-30T04:40:24.825Z] findCommonIds: Final common ID count: 4
[2025-07-30T04:40:24.825Z] executeQueries: Found 4 common IDs across all groups
[2025-07-30T04:40:24.825Z] getEvent: Attempting to retrieve event with ID: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:40:24.825Z] getEvent: Converted key: 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:40:24.825Z] getEvent: Event found for ID 18bf42b33d51871af781a520d987cf38e5431d69c84a46626ab1d317350ed89a
[2025-07-30T04:40:24.825Z] getEvent: Attempting to retrieve event with ID: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:40:24.825Z] getEvent: Converted key: 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:40:24.825Z] getEvent: Event found for ID 5885ed26a7701606cf955153aa7671a63f1eba62086e8a2264fdf4d6bea0df0b
[2025-07-30T04:40:24.825Z] getEvent: Attempting to retrieve event with ID: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:24.825Z] getEvent: Converted key: 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:24.825Z] getEvent: Event found for ID 706580ad23a1bcacd9a4adc4b2cfae2466053a95c71e1747bb48f3c98644a001
[2025-07-30T04:40:24.825Z] getEvent: Attempting to retrieve event with ID: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:24.825Z] getEvent: Converted key: 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:24.825Z] getEvent: Event found for ID 2989e4ceedc6da2b3ce7b8f062934bfedcf3642a5217748ea2a3be7a1f57016c
[2025-07-30T04:40:24.825Z] executeQueries: Successfully retrieved 4 full events
[2025-07-30T04:40:24.825Z] queryEvents: Raw query results count:
4
[2025-07-30T04:40:24.825Z] handleSubscription: Updating last_returned_event_timestamp for subscription sub12:
{
  "previous": 1753850060,
  "new": 1753850415
}
[2025-07-30T04:40:24.825Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850060
[2025-07-30T04:40:24.825Z] queryEvents: Starting query with filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.825Z] queryEvents: Last returned event timestamp:
1753850060
[2025-07-30T04:40:24.825Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    39001
  ],
  "#d": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.825Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850060
[2025-07-30T04:40:24.825Z] constructQueries: Using time range - since: 1753850061, until: 9999999999
[2025-07-30T04:40:24.825Z] constructQueries: Constructed kind query for 39001
[2025-07-30T04:40:24.825Z] constructTagQueries: Constructed query for tag d=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:24.825Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:24.825Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:24.825Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:24.826Z] queryEvents: Constructed query groups
[2025-07-30T04:40:24.826Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:24.826Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:24.826Z] executeQueries:   range
{
  "gte": "kind:39001:created_at:1753850061:id:",
  "lte": "kind:39001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.826Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:40:24.826Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:40:24.826Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:24.826Z] executeQueries:   range
{
  "gte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850061:id:",
  "lte": "tagKey:d:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.826Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 2 finished with 4 entries
[2025-07-30T04:40:24.826Z] executeQueries: Group 2 produced 4 unique IDs
[2025-07-30T04:40:24.826Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:24.826Z] findCommonIds: No IDs in first result set
[2025-07-30T04:40:24.826Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:40:24.826Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:40:24.826Z] queryEvents: Raw query results count:
[2025-07-30T04:40:24.826Z] handleSubscription: Processing subscription sub13 with last timestamp: 1753850147
[2025-07-30T04:40:24.826Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850147
[2025-07-30T04:40:24.826Z] queryEvents: Starting query with filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.826Z] queryEvents: Last returned event timestamp:
1753850147
[2025-07-30T04:40:24.826Z] constructQueries: Constructing queries for filter:
{
  "kinds": [
    1
  ],
  "#h": [
    "npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo"
  ]
}
[2025-07-30T04:40:24.826Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850147
[2025-07-30T04:40:24.826Z] constructQueries: Using time range - since: 1753850148, until: 9999999999
[2025-07-30T04:40:24.826Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:40:24.826Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:24.826Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:24.826Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:24.826Z] constructQueries: Constructed 2 query groups
[2025-07-30T04:40:24.826Z] queryEvents: Constructed query groups
[2025-07-30T04:40:24.826Z] executeQueries: Starting execution of 2 query groups
[2025-07-30T04:40:24.826Z] executeQueries: Processing group 1/2
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:24.826Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850148:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.826Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 1 finished with 0 entries
[2025-07-30T04:40:24.826Z] executeQueries: Group 1 produced 0 unique IDs
[2025-07-30T04:40:24.826Z] executeQueries: Processing group 2/2
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:24.826Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850148:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.826Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 2 finished with 0 entries
[2025-07-30T04:40:24.826Z] executeQueries: Group 2 produced 0 unique IDs
[2025-07-30T04:40:24.826Z] findCommonIds: Starting to process 2 result sets
[2025-07-30T04:40:24.826Z] findCommonIds: No IDs in first result set
[2025-07-30T04:40:24.826Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:40:24.826Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:40:24.826Z] queryEvents: Raw query results count:
[2025-07-30T04:40:24.826Z] handleSubscription: Processing subscription sub14 with last timestamp: 1753850071
[2025-07-30T04:40:24.826Z] handleSubscription: Processing filter with last_returned_event_timestamp:
1753850071
[2025-07-30T04:40:24.826Z] queryEvents: Starting query with filter:
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
[2025-07-30T04:40:24.826Z] queryEvents: Last returned event timestamp:
1753850071
[2025-07-30T04:40:24.826Z] constructQueries: Constructing queries for filter:
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
[2025-07-30T04:40:24.826Z] constructQueries: Using timestamp:
last_returned_event_timestamp: 1753850071
[2025-07-30T04:40:24.826Z] constructQueries: Using time range - since: 1753850072, until: 9999999999
[2025-07-30T04:40:24.826Z] constructQueries: Constructed kind query for 1
[2025-07-30T04:40:24.826Z] constructQueries: Constructed author query for 3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182
[2025-07-30T04:40:24.826Z] constructTagQueries: Constructed query for tag h=npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo
[2025-07-30T04:40:24.826Z] constructTagQueries: Constructed 1 tag queries in 1 groups
[2025-07-30T04:40:24.826Z] constructQueries: Adding 1 tag-based query groups
[2025-07-30T04:40:24.826Z] constructQueries: Constructed 3 query groups
[2025-07-30T04:40:24.826Z] queryEvents: Constructed query groups
[2025-07-30T04:40:24.826Z] executeQueries: Starting execution of 3 query groups
[2025-07-30T04:40:24.826Z] executeQueries: Processing group 1/3
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 1
[2025-07-30T04:40:24.826Z] executeQueries:   range
{
  "gte": "kind:00001:created_at:1753850072:id:",
  "lte": "kind:00001:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.826Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 1 finished with 1 entries
[2025-07-30T04:40:24.826Z] executeQueries: Group 1 produced 1 unique IDs
[2025-07-30T04:40:24.826Z] executeQueries: Processing group 2/3
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 2
[2025-07-30T04:40:24.826Z] executeQueries:   range
{
  "gte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:1753850072:id:",
  "lte": "pubkey:3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.826Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 2 finished with 3 entries
[2025-07-30T04:40:24.826Z] executeQueries: Group 2 produced 3 unique IDs
[2025-07-30T04:40:24.826Z] executeQueries: Processing group 3/3
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 3
[2025-07-30T04:40:24.826Z] executeQueries:   range
{
  "gte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:1753850072:id:",
  "lte": "tagKey:h:tagValue:npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo:created_at:9999999999:id:#"
}
[2025-07-30T04:40:24.826Z] executeQueries:   starting read stream
[2025-07-30T04:40:24.826Z] executeQueries:  Query 1/1 in group 3 finished with 4 entries
[2025-07-30T04:40:24.826Z] executeQueries: Group 3 produced 4 unique IDs
[2025-07-30T04:40:24.826Z] findCommonIds: Starting to process 3 result sets
[2025-07-30T04:40:24.826Z] findCommonIds: Processing result set 2, size: 3
[2025-07-30T04:40:24.826Z] findCommonIds: After intersection with set 2: reduced from 1 to 0 common IDs
[2025-07-30T04:40:24.826Z] findCommonIds: No common IDs remain, exiting early
[2025-07-30T04:40:24.826Z] executeQueries: Found 0 common IDs across all groups
[2025-07-30T04:40:24.826Z] executeQueries: Successfully retrieved 0 full events
[2025-07-30T04:40:24.826Z] queryEvents: Raw query results count:
[2025-07-30T04:40:24.826Z] handleSubscription: Total events and EOSE messages for client:
10
[RelayServer] Found 10 events for connectionKey: 0b2d739f6b73480f4181f838395040e7
[RelayServer] Updating subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:24.826Z] RelayManager: Updating subscriptions for connection 0b2d739f6b73480f4181f838395040e7
Updated subscription data: {
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      "last_returned_event_timestamp": 1753850415
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
      ],
      "last_returned_event_timestamp": 1753850415
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
[2025-07-30T04:40:24.826Z] updateSubscriptions: Updating subscriptions:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      "last_returned_event_timestamp": 1753850415
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
      ],
      "last_returned_event_timestamp": 1753850415
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
[2025-07-30T04:40:24.826Z] NostrRelay.apply: Applying batch
[2025-07-30T04:40:24.826Z] NostrRelay.apply: Processing subscription data:
{
  "connection": "0b2d739f6b73480f4181f838395040e7",
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
      "last_returned_event_timestamp": 1753850415
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
      ],
      "last_returned_event_timestamp": 1753850415
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
[2025-07-30T04:40:24.826Z] NostrRelay.apply: Storing subscription data for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:24.826Z] NostrRelay.apply: Flushing batch

Relay event appended. Current version: 443
[2025-07-30T04:40:24.828Z] updateSubscriptions: Updated subscriptions for connection: 0b2d739f6b73480f4181f838395040e7
[2025-07-30T04:40:24.828Z] RelayManager: Successfully updated subscriptions
[RelayServer] Successfully updated subscriptions for connectionKey: 0b2d739f6b73480f4181f838395040e7
[Worker] Received from parent: { type: 'get-health' }
[Worker] Get health requested
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay 5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"5162c641bd9d24b8a1a8baf2e9bb6e77e23a403ed806b2aca7529ca5d0ea65dd","publicIdentifier":"npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr:elSansSerifo","peerCount":0,"name":"el sans serifo","description":"no me gusta los times new romanos","fileSharing":false,"connectionUrl":"wss://hypertuna.com/npub18wq7tgp9z0erpfp0l53dnxky5uwm58ydw54v2mtqtuye6dxv2xpq2afyyr/elSansSerifo?token=0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","createdAt":"2025-07-30T04:34:17.859Z","isActive":true,"userAuthToken":"0760e0893d8103bfd60c6146de3cb44b478f07685a503e63f2a30cc373b54d76","requiresAuth":true,"members":["3b81e5a02513f230a42ffd22d99ac4a71dba1c8d752ac56d605f099d34cc5182","61d855c6831eb5e52b2fec82a36a066d7b55f35802465eb19067d400ec624914"]}]}
[Worker] Sending message: {"type":"heartbeat","timestamp":1753850427618,"status":"running","mode":"hyperswarm"}
[Worker] Teardown initiated
[Worker] Stopping relay server...
[RelayServer] ========================================
[RelayServer] SHUTTING DOWN
[RelayServer] Timestamp: 2025-07-30T04:40:29.661Z
[RelayAdapter] Cleaning up all active relays...
Closing relay for /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/fa92c28ded5fadf3186cb01578c0d02e183a40f94aae2b92184d86c41c927273/relays/relay-1753850054979
[Worker] Received from parent: { type: 'shutdown' }
[Worker] Shutdown requested
[Worker] Cannot send message - pipe: exists shuttingDown: true
[Worker] Stopping relay server...
[RelayServer] ========================================
[RelayServer] SHUTTING DOWN
[RelayServer] Timestamp: 2025-07-30T04:40:29.763Z
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
