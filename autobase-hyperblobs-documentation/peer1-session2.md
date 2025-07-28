peer 1 log: (process when peer 1 relaunches app, initializes relay from storage. no other peers online)


[RelayManager] ========================================
[RelayManager] INITIALIZING RELAY
[RelayManager] Bootstrap: cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayManager] Storage directory: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/61317c7d578ea346d4dd0add06a2bd0369aa62ff6c6e74c70c7550b88d3f98e5/relays/relay-1753658518015
[RelayManager] ========================================
[RelayManager] Acquired lock for storage directory: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/61317c7d578ea346d4dd0add06a2bd0369aa62ff6c6e74c70c7550b88d3f98e5/relays/relay-1753658518015
[RelayManager] Corestore initialized
[RelayManager] Creating NostrRelay instance...
[NostrRelay] ========================================
[NostrRelay] CONSTRUCTOR
[NostrRelay] Bootstrap: cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[NostrRelay] ========================================
[Autobee] ========================================
[Autobee] CONSTRUCTOR
[Autobee] Bootstrap: cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[Autobee] Has custom handlers: true
[Autobee] ========================================
[Autobee] Calling parent Autobase constructor...
[Autobee] Opening view store...
[Autobee] Got autobee core
[Autobee] Created Hyperbee instance
[Autobee] Created Hyperblobs instance
[Autobee] Parent constructor completed
[Autobee] Initial state:
[Autobee] - Key: cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[Autobee] - Writable: false
[Autobee] - Has view: true
[Autobee] Constructor completed successfully
[NostrRelay] Constructor completed
[NostrRelay] Initial state:
[NostrRelay] - Writable: false
[NostrRelay] - Has view: true
[RelayManager] NostrRelay instance created
[RelayManager] Initial relay state:
[RelayManager] - Key: cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayManager] - Discovery key: not available yet
[RelayManager] - Writable: false
[RelayManager] Performing initial relay update...
[Autobee] Hyperblobs is ready
[Autobee] - Core length: 6
[Autobee] Hyperbee is ready
[Autobee] - Version: 1443
[Autobee] - Feed length: 1443
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'e901e646...', kind: 0, pubkey: '94469d58...' }
[2025-07-28T02:50:31.193Z] validateEvent: Validating event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753662783,
  "tags": [],
  "pubkey": "94469d58064db2d7cb74b1a186657c2db564f8c1af52c6db7830fa7d13fd58a2",
  "id": "e901e646497371fbb5d9c8588598f60f7a6ae772ad4422549d305564974f0e86",
  "sig": "8ab6bdd33e202ef5bca5581d0bc8287a30b5cf3991d9557f65c662730dca98ad279f4542a0d757c6ff320040154a0d918fb7c310c512249f44f140c68c805fe5"
}
[2025-07-28T02:50:31.194Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: e901e646497371fbb5d9c8588598f60f7a6ae772ad4422549d305564974f0e86
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.198Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'c4dc2d98...', kind: 9000, pubkey: 'ab1fdcb1...' }
[2025-07-28T02:50:31.212Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba with auth token",
  "created_at": 1753662783,
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member",
      "f4b09cb4a35c2ba6e098fe4218124df42aa80f85ec20395071737e923855f4e6",
      "0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"
    ]
  ],
  "pubkey": "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
  "id": "c4dc2d984308841ddaab0e0775b6e9a47a4cc06b3d4a9eb8c02ecdc78c83d1f7",
  "sig": "4d6a3d9366dbf2d757119c475d75c04f52df5aabb0e367b2df9dcfcc56a65ddaa93ebfd7a4af6fa7ee4a50737f7fb87388fb39e0880e1c898fe188e905baf901"
}
[2025-07-28T02:50:31.212Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: c4dc2d984308841ddaab0e0775b6e9a47a4cc06b3d4a9eb8c02ecdc78c83d1f7
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'c4dc2d98...', kind: 9000, pubkey: 'ab1fdcb1...' }
[2025-07-28T02:50:31.214Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba with auth token",
  "created_at": 1753662783,
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member",
      "f4b09cb4a35c2ba6e098fe4218124df42aa80f85ec20395071737e923855f4e6",
      "0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"
    ]
  ],
  "pubkey": "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
  "id": "c4dc2d984308841ddaab0e0775b6e9a47a4cc06b3d4a9eb8c02ecdc78c83d1f7",
  "sig": "4d6a3d9366dbf2d757119c475d75c04f52df5aabb0e367b2df9dcfcc56a65ddaa93ebfd7a4af6fa7ee4a50737f7fb87388fb39e0880e1c898fe188e905baf901"
}
[2025-07-28T02:50:31.214Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: c4dc2d984308841ddaab0e0775b6e9a47a4cc06b3d4a9eb8c02ecdc78c83d1f7
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'c4dc2d98...', kind: 9000, pubkey: 'ab1fdcb1...' }
[2025-07-28T02:50:31.214Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba with auth token",
  "created_at": 1753662783,
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member",
      "f4b09cb4a35c2ba6e098fe4218124df42aa80f85ec20395071737e923855f4e6",
      "0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"
    ]
  ],
  "pubkey": "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
  "id": "c4dc2d984308841ddaab0e0775b6e9a47a4cc06b3d4a9eb8c02ecdc78c83d1f7",
  "sig": "4d6a3d9366dbf2d757119c475d75c04f52df5aabb0e367b2df9dcfcc56a65ddaa93ebfd7a4af6fa7ee4a50737f7fb87388fb39e0880e1c898fe188e905baf901"
}
[2025-07-28T02:50:31.214Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: c4dc2d984308841ddaab0e0775b6e9a47a4cc06b3d4a9eb8c02ecdc78c83d1f7
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.214Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '4461634f...', kind: 0, pubkey: '386e81f8...' }
[2025-07-28T02:50:31.215Z] validateEvent: Validating event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753668959,
  "tags": [],
  "pubkey": "386e81f88062131a4af938e9e4dca13e4d7265189c1b1583b22618336ff14b45",
  "id": "4461634f0b3f8631f99d5c76eff4931f9031c180e486880c87ff811b6f638853",
  "sig": "57902d46d99b03e51b0bc96607e0afed58c26e4221b3f8a3662f6c27d6db4e52e2d8abdcac7dba017a2eb66606b2717a9f48dedc52d3b1f199e3442b0735e5c5"
}
[2025-07-28T02:50:31.215Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 4461634f0b3f8631f99d5c76eff4931f9031c180e486880c87ff811b6f638853
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.216Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.216Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.216Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.216Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.217Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 7
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 7
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '1ddd82d1...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.217Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ]
  ],
  "created_at": 1753668971,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389",
  "sig": "7fcb26bfd3d34228b2eeb3600926db0e04d9142a5cc2f09563d81e65eb03020399a967aa61eec29c7be438b936b8830d757c72de5d955531d881fee1303809c5"
}
[2025-07-28T02:50:31.217Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '1ddd82d1...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.218Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ]
  ],
  "created_at": 1753668971,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389",
  "sig": "7fcb26bfd3d34228b2eeb3600926db0e04d9142a5cc2f09563d81e65eb03020399a967aa61eec29c7be438b936b8830d757c72de5d955531d881fee1303809c5"
}
[2025-07-28T02:50:31.218Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '1ddd82d1...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.218Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ]
  ],
  "created_at": 1753668971,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389",
  "sig": "7fcb26bfd3d34228b2eeb3600926db0e04d9142a5cc2f09563d81e65eb03020399a967aa61eec29c7be438b936b8830d757c72de5d955531d881fee1303809c5"
}
[2025-07-28T02:50:31.218Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '1ddd82d1...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.218Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ]
  ],
  "created_at": 1753668971,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389",
  "sig": "7fcb26bfd3d34228b2eeb3600926db0e04d9142a5cc2f09563d81e65eb03020399a967aa61eec29c7be438b936b8830d757c72de5d955531d881fee1303809c5"
}
[2025-07-28T02:50:31.218Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '1ddd82d1...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.218Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ]
  ],
  "created_at": 1753668971,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389",
  "sig": "7fcb26bfd3d34228b2eeb3600926db0e04d9142a5cc2f09563d81e65eb03020399a967aa61eec29c7be438b936b8830d757c72de5d955531d881fee1303809c5"
}
[2025-07-28T02:50:31.218Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '1ddd82d1...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.218Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ]
  ],
  "created_at": 1753668971,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389",
  "sig": "7fcb26bfd3d34228b2eeb3600926db0e04d9142a5cc2f09563d81e65eb03020399a967aa61eec29c7be438b936b8830d757c72de5d955531d881fee1303809c5"
}
[2025-07-28T02:50:31.218Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '1ddd82d1...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.218Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ]
  ],
  "created_at": 1753668971,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389",
  "sig": "7fcb26bfd3d34228b2eeb3600926db0e04d9142a5cc2f09563d81e65eb03020399a967aa61eec29c7be438b936b8830d757c72de5d955531d881fee1303809c5"
}
[2025-07-28T02:50:31.218Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 1ddd82d1e56cec1d52377d23f661b17e357a11ca3e1c3bb7c36e2e7666c3f389
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.219Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 8
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 8
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.219Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "e612879641589d8c20e3d449cb8c882213b05686a01cfb40efdb95fae8e72e4b89f5eceba5c370456474517d9084afbdae69e1f71922bd9f244bdf2d05d2585a"
}
[2025-07-28T02:50:31.219Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.219Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "e612879641589d8c20e3d449cb8c882213b05686a01cfb40efdb95fae8e72e4b89f5eceba5c370456474517d9084afbdae69e1f71922bd9f244bdf2d05d2585a"
}
[2025-07-28T02:50:31.219Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.220Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "e612879641589d8c20e3d449cb8c882213b05686a01cfb40efdb95fae8e72e4b89f5eceba5c370456474517d9084afbdae69e1f71922bd9f244bdf2d05d2585a"
}
[2025-07-28T02:50:31.220Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.220Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "e612879641589d8c20e3d449cb8c882213b05686a01cfb40efdb95fae8e72e4b89f5eceba5c370456474517d9084afbdae69e1f71922bd9f244bdf2d05d2585a"
}
[2025-07-28T02:50:31.220Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.220Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "e612879641589d8c20e3d449cb8c882213b05686a01cfb40efdb95fae8e72e4b89f5eceba5c370456474517d9084afbdae69e1f71922bd9f244bdf2d05d2585a"
}
[2025-07-28T02:50:31.220Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.220Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "e612879641589d8c20e3d449cb8c882213b05686a01cfb40efdb95fae8e72e4b89f5eceba5c370456474517d9084afbdae69e1f71922bd9f244bdf2d05d2585a"
}
[2025-07-28T02:50:31.220Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.220Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "e612879641589d8c20e3d449cb8c882213b05686a01cfb40efdb95fae8e72e4b89f5eceba5c370456474517d9084afbdae69e1f71922bd9f244bdf2d05d2585a"
}
[2025-07-28T02:50:31.220Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.220Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "e612879641589d8c20e3d449cb8c882213b05686a01cfb40efdb95fae8e72e4b89f5eceba5c370456474517d9084afbdae69e1f71922bd9f244bdf2d05d2585a"
}
[2025-07-28T02:50:31.220Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.220Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 8
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 8
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.221Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "6824e80f93e2986f068b1a01e6cc8db78f4ad26539020596b62a60968fdc9024aedd8753fc5a3d920fa75e583a0373ffa597c3c96fe6963656d6067882092dc8"
}
[2025-07-28T02:50:31.221Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.221Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "6824e80f93e2986f068b1a01e6cc8db78f4ad26539020596b62a60968fdc9024aedd8753fc5a3d920fa75e583a0373ffa597c3c96fe6963656d6067882092dc8"
}
[2025-07-28T02:50:31.221Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.221Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "6824e80f93e2986f068b1a01e6cc8db78f4ad26539020596b62a60968fdc9024aedd8753fc5a3d920fa75e583a0373ffa597c3c96fe6963656d6067882092dc8"
}
[2025-07-28T02:50:31.221Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.221Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "6824e80f93e2986f068b1a01e6cc8db78f4ad26539020596b62a60968fdc9024aedd8753fc5a3d920fa75e583a0373ffa597c3c96fe6963656d6067882092dc8"
}
[2025-07-28T02:50:31.221Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.221Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "6824e80f93e2986f068b1a01e6cc8db78f4ad26539020596b62a60968fdc9024aedd8753fc5a3d920fa75e583a0373ffa597c3c96fe6963656d6067882092dc8"
}
[2025-07-28T02:50:31.221Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.221Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "6824e80f93e2986f068b1a01e6cc8db78f4ad26539020596b62a60968fdc9024aedd8753fc5a3d920fa75e583a0373ffa597c3c96fe6963656d6067882092dc8"
}
[2025-07-28T02:50:31.221Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.221Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "6824e80f93e2986f068b1a01e6cc8db78f4ad26539020596b62a60968fdc9024aedd8753fc5a3d920fa75e583a0373ffa597c3c96fe6963656d6067882092dc8"
}
[2025-07-28T02:50:31.221Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.222Z] validateEvent: Validating event:
{
  "kind": 39002,
  "content": "Member list update for group: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs",
  "tags": [
    [
      "d",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "hypertuna",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "i",
      "hypertuna:relay"
    ],
    [
      "p",
      "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
      "admin"
    ],
    [
      "p",
      "6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411",
      "member"
    ],
    [
      "p",
      "d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524",
      "member"
    ],
    [
      "p",
      "37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f",
      "member"
    ],
    [
      "p",
      "ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba",
      "member"
    ]
  ],
  "created_at": 1753668972,
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2",
  "sig": "6824e80f93e2986f068b1a01e6cc8db78f4ad26539020596b62a60968fdc9024aedd8753fc5a3d920fa75e583a0373ffa597c3c96fe6963656d6067882092dc8"
}
[2025-07-28T02:50:31.222Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.222Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 8
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 8
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '43711ebf...', kind: 39002, pubkey: '7c039d34...' }
...
...
[2025-07-28T02:50:31.232Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 43711ebfbe8974f9a855b7dec19f43a28b16205fc6276eec7813535eb32521e2
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.232Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.233Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.233Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.233Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.233Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.233Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.233Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.233Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.233Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.233Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.234Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 2
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 2
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '3241a839...', kind: 9021, pubkey: '983bec97...' }
[2025-07-28T02:50:31.234Z] validateEvent: Validating event:
{
  "kind": 9021,
  "content": "Request to join the group",
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ]
  ],
  "created_at": 1753669056,
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b",
  "sig": "0660ad2868943c10c909eace1337c47c44e7fbae0186d3139144d11e4cb494796dfea43b196fc9de780d007e9e42ae7842d3e07768452750cb5d9e23f1950d41"
}
[2025-07-28T02:50:31.234Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '3241a839...', kind: 9021, pubkey: '983bec97...' }
[2025-07-28T02:50:31.235Z] validateEvent: Validating event:
{
  "kind": 9021,
  "content": "Request to join the group",
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ]
  ],
  "created_at": 1753669056,
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b",
  "sig": "0660ad2868943c10c909eace1337c47c44e7fbae0186d3139144d11e4cb494796dfea43b196fc9de780d007e9e42ae7842d3e07768452750cb5d9e23f1950d41"
}
[2025-07-28T02:50:31.235Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.235Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '911a77be...', kind: 9000, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.235Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token",
  "created_at": 1753669056,
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "p",
      "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
      "member",
      "0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802",
      "0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"
    ]
  ],
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa",
  "sig": "1e7be5ffcfc80b92b4a75dbe8d96b311695954a45c29a61ffd529f1f5e8762fb7d8217f72e776e23c01e7f41256c993086ed9789fa51b0ed7bf2311cb4230c14"
}
[2025-07-28T02:50:31.235Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '911a77be...', kind: 9000, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.236Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token",
  "created_at": 1753669056,
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "p",
      "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
      "member",
      "0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802",
      "0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"
    ]
  ],
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa",
  "sig": "1e7be5ffcfc80b92b4a75dbe8d96b311695954a45c29a61ffd529f1f5e8762fb7d8217f72e776e23c01e7f41256c993086ed9789fa51b0ed7bf2311cb4230c14"
}
[2025-07-28T02:50:31.236Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '911a77be...', kind: 9000, pubkey: '7c039d34...' }
[2025-07-28T02:50:31.236Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token",
  "created_at": 1753669056,
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "p",
      "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
      "member",
      "0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802",
      "0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"
    ]
  ],
  "pubkey": "7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",
  "id": "911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa",
  "sig": "1e7be5ffcfc80b92b4a75dbe8d96b311695954a45c29a61ffd529f1f5e8762fb7d8217f72e776e23c01e7f41256c993086ed9789fa51b0ed7bf2311cb4230c14"
}
[2025-07-28T02:50:31.236Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.236Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing addWriter for key: ab718c284c921a92f5b7909171aef082305bda5df6cd5a9958200513ac7e763c
[NostrRelay] Current writers before add: 0
[NostrRelay] Calling base.addWriter()...
[NostrRelay] Successfully added writer: ab718c284c921a92f5b7909171aef082305bda5df6cd5a9958200513ac7e763c
[NostrRelay] Current writers after add: 0
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: addWriter
[NostrRelay] Skipping addWriter operation (should be handled by custom apply)
[2025-07-28T02:50:31.236Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[Autobee] Update event - writable: true writers: 0
[RelayManager] Relay update event
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'eed59878...', kind: 9000, pubkey: '983bec97...' }
[2025-07-28T02:50:31.242Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token",
  "created_at": 1753669061,
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "p",
      "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
      "member",
      "0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802",
      "0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"
    ]
  ],
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857",
  "sig": "6098e838083feaae0e3299ec868ae9202749fcd5a1509dc03785c298b531fcb0536a3331288329f11df36d6a36b3682e667657bc33bbd44fa33fe4ef76749ac7"
}
[2025-07-28T02:50:31.242Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'eed59878...', kind: 9000, pubkey: '983bec97...' }
[2025-07-28T02:50:31.242Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token",
  "created_at": 1753669061,
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "p",
      "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
      "member",
      "0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802",
      "0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"
    ]
  ],
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857",
  "sig": "6098e838083feaae0e3299ec868ae9202749fcd5a1509dc03785c298b531fcb0536a3331288329f11df36d6a36b3682e667657bc33bbd44fa33fe4ef76749ac7"
}
[2025-07-28T02:50:31.242Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'eed59878...', kind: 9000, pubkey: '983bec97...' }
[2025-07-28T02:50:31.242Z] validateEvent: Validating event:
{
  "kind": 9000,
  "content": "Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token",
  "created_at": 1753669061,
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "p",
      "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
      "member",
      "0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802",
      "0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"
    ]
  ],
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857",
  "sig": "6098e838083feaae0e3299ec868ae9202749fcd5a1509dc03785c298b531fcb0536a3331288329f11df36d6a36b3682e667657bc33bbd44fa33fe4ef76749ac7"
}
[2025-07-28T02:50:31.242Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.242Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.246Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.246Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.246Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.246Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.246Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.246Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.246Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.246Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.247Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.248Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.249Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.249Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.249Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.250Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.250Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.250Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.250Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.250Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.250Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.250Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 2
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 2
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '5c2f12b4...', kind: 1, pubkey: '983bec97...' }
[2025-07-28T02:50:31.251Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "bonjour, wooooow that is very sexy pic of ur bobs ;)",
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "previous",
      "98ebf4d6"
    ],
    [
      "previous",
      "40945ee9"
    ]
  ],
  "created_at": 1753669104,
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "5c2f12b487051f75c1482b377dd35435b70fd521913d6ace02b52e2faaa670e0",
  "sig": "ae30c5fa353930c43ed8daf1fe5af5c7fc24d9993c2b68ffd3fbfce52c2aea7c41c44cd310215c3be6bd2b7fc2b1f6e5b3844aad47c1e932ef2ba3e572b75bc5"
}
[2025-07-28T02:50:31.251Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 5c2f12b487051f75c1482b377dd35435b70fd521913d6ace02b52e2faaa670e0
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '5c2f12b4...', kind: 1, pubkey: '983bec97...' }
[2025-07-28T02:50:31.251Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "bonjour, wooooow that is very sexy pic of ur bobs ;)",
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "previous",
      "98ebf4d6"
    ],
    [
      "previous",
      "40945ee9"
    ]
  ],
  "created_at": 1753669104,
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "5c2f12b487051f75c1482b377dd35435b70fd521913d6ace02b52e2faaa670e0",
  "sig": "ae30c5fa353930c43ed8daf1fe5af5c7fc24d9993c2b68ffd3fbfce52c2aea7c41c44cd310215c3be6bd2b7fc2b1f6e5b3844aad47c1e932ef2ba3e572b75bc5"
}
[2025-07-28T02:50:31.251Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 5c2f12b487051f75c1482b377dd35435b70fd521913d6ace02b52e2faaa670e0
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.251Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.251Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.251Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.252Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.252Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.252Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.252Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.252Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.252Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.252Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.252Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: blob-store
[NostrRelay] Processing blob-store operation for hash: 36de3e872443c090...
[NostrRelay] Blob size: 288444 bytes
[NostrRelay] Has blobs view: true
[NostrRelay] Decoded blob data, size: 288444 bytes
[NostrRelay] Storing blob in Hyperblobs...
[NostrRelay] Stored in Hyperblobs with ID: { byteOffset: 336632, blockOffset: 6, blockLength: 5, byteLength: 288444 }
[NostrRelay] Writer key: unknown...
[NostrRelay] Stored blob metadata under key: blob:hash:36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36
[NostrRelay] Created uploader index: blob:uploader:ab718c284c921a92f5b7909171aef082305bda5df6cd5a9958200513ac7e763c:36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36
[NostrRelay] Created type index: blob:type:image-png:36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36
[NostrRelay] Blob processing completed successfully
[2025-07-28T02:50:31.254Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 4
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 4
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'a33b0f36...', kind: 1, pubkey: '983bec97...' }
[2025-07-28T02:50:31.254Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "here is mine ;) https://hypertuna.com/drive/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs/36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36.png",
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "previous",
      "98ebf4d6"
    ],
    [
      "previous",
      "40945ee9"
    ],
    [
      "r",
      "https://hypertuna.com/drive/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs/36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36.png",
      "hypertuna:drive"
    ],
    [
      "i",
      "hypertuna:drive"
    ]
  ],
  "created_at": 1753669156,
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "a33b0f36ba76d633feac223b568e829c7ad6ffe80aaebabee2188ccac3d12b2c",
  "sig": "471f148da0920b34efd5a0173ee6b548b1bc90a169b728c1b67112aa937bf0cc02725bd46c0d84f31380db5d1bf1c41c621c6ad35bb490c0b3bd01912cba2db1"
}
[2025-07-28T02:50:31.254Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: a33b0f36ba76d633feac223b568e829c7ad6ffe80aaebabee2188ccac3d12b2c
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'a33b0f36...', kind: 1, pubkey: '983bec97...' }
[2025-07-28T02:50:31.254Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "here is mine ;) https://hypertuna.com/drive/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs/36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36.png",
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "previous",
      "98ebf4d6"
    ],
    [
      "previous",
      "40945ee9"
    ],
    [
      "r",
      "https://hypertuna.com/drive/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs/36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36.png",
      "hypertuna:drive"
    ],
    [
      "i",
      "hypertuna:drive"
    ]
  ],
  "created_at": 1753669156,
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "a33b0f36ba76d633feac223b568e829c7ad6ffe80aaebabee2188ccac3d12b2c",
  "sig": "471f148da0920b34efd5a0173ee6b548b1bc90a169b728c1b67112aa937bf0cc02725bd46c0d84f31380db5d1bf1c41c621c6ad35bb490c0b3bd01912cba2db1"
}
[2025-07-28T02:50:31.254Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: a33b0f36ba76d633feac223b568e829c7ad6ffe80aaebabee2188ccac3d12b2c
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'a33b0f36...', kind: 1, pubkey: '983bec97...' }
[2025-07-28T02:50:31.254Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "here is mine ;) https://hypertuna.com/drive/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs/36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36.png",
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "previous",
      "98ebf4d6"
    ],
    [
      "previous",
      "40945ee9"
    ],
    [
      "r",
      "https://hypertuna.com/drive/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs/36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36.png",
      "hypertuna:drive"
    ],
    [
      "i",
      "hypertuna:drive"
    ]
  ],
  "created_at": 1753669156,
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "a33b0f36ba76d633feac223b568e829c7ad6ffe80aaebabee2188ccac3d12b2c",
  "sig": "471f148da0920b34efd5a0173ee6b548b1bc90a169b728c1b67112aa937bf0cc02725bd46c0d84f31380db5d1bf1c41c621c6ad35bb490c0b3bd01912cba2db1"
}
[2025-07-28T02:50:31.254Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: a33b0f36ba76d633feac223b568e829c7ad6ffe80aaebabee2188ccac3d12b2c
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'a33b0f36...', kind: 1, pubkey: '983bec97...' }
[2025-07-28T02:50:31.254Z] validateEvent: Validating event:
{
  "kind": 1,
  "content": "here is mine ;) https://hypertuna.com/drive/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs/36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36.png",
  "tags": [
    [
      "h",
      "npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"
    ],
    [
      "previous",
      "98ebf4d6"
    ],
    [
      "previous",
      "40945ee9"
    ],
    [
      "r",
      "https://hypertuna.com/drive/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs/36de3e872443c090cf2b2840309673103ffbcdf34d8e98d37bd0dcd928853d36.png",
      "hypertuna:drive"
    ],
    [
      "i",
      "hypertuna:drive"
    ]
  ],
  "created_at": 1753669156,
  "pubkey": "983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",
  "id": "a33b0f36ba76d633feac223b568e829c7ad6ffe80aaebabee2188ccac3d12b2c",
  "sig": "471f148da0920b34efd5a0173ee6b548b1bc90a169b728c1b67112aa937bf0cc02725bd46c0d84f31380db5d1bf1c41c621c6ad35bb490c0b3bd01912cba2db1"
}
[2025-07-28T02:50:31.254Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: a33b0f36ba76d633feac223b568e829c7ad6ffe80aaebabee2188ccac3d12b2c
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:31.254Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.255Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.255Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.255Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.255Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:50:31.256Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:50:31.256Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[Autobee] Update event - writable: true writers: 0
[RelayManager] Relay update event
[RelayManager] Initial update completed
[RelayManager] State after update:
[RelayManager] - Key: cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayManager] - Discovery key: 9a7120dcb2bf66816fd7bc94e967803e9225dcbe1143f1319e6e3ffcf3b43bd4
[RelayManager] - Writable: true
[RelayManager] View is ready
[RelayManager] - Bee available: true
[RelayManager] - Blobs available: true
[RelayManager] Attached bee append listener
[RelayManager] Joining swarm with discovery key: 9a7120dcb2bf66816fd7bc94e967803e9225dcbe1143f1319e6e3ffcf3b43bd4
[RelayManager] Swarm joined successfully
[RelayManager] Relay is writable, initializing...
Initialized event (before publishing): {
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753671033,
  "tags": [],
  "pubkey": "1f7e61f63a22dc3503f61c65b49f83a3b79515a3bbf76e963316cb0859fbde89",
  "id": "dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33",
  "sig": "7665ac712038cb669935d1a479c71033713b465e6e29ffeed460ae463c3367b5c245ac69c5e47865a8aa44f4c4bf3357d7e6bd5bb255ccbee5974fe69b72c4fe"
}
Serialized event: [0,"1f7e61f63a22dc3503f61c65b49f83a3b79515a3bbf76e963316cb0859fbde89",1753671033,0,[],"Relay initialized"]
Event hash: dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33
[2025-07-28T02:50:33.612Z] publishEvent: Attempting to publish event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753671033,
  "tags": [],
  "pubkey": "1f7e61f63a22dc3503f61c65b49f83a3b79515a3bbf76e963316cb0859fbde89",
  "id": "dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33",
  "sig": "7665ac712038cb669935d1a479c71033713b465e6e29ffeed460ae463c3367b5c245ac69c5e47865a8aa44f4c4bf3357d7e6bd5bb255ccbee5974fe69b72c4fe"
}
Verifying Event Signature ===
Serialized Event: [0,"1f7e61f63a22dc3503f61c65b49f83a3b79515a3bbf76e963316cb0859fbde89",1753671033,0,[],"Relay initialized"]
Event Hash: dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33
Verification Details:
Public Key: 1f7e61f63a22dc3503f61c65b49f83a3b79515a3bbf76e963316cb0859fbde89
Signature: 7665ac712038cb669935d1a479c71033713b465e6e29ffeed460ae463c3367b5c245ac69c5e47865a8aa44f4c4bf3357d7e6bd5bb255ccbee5974fe69b72c4fe
Verification Result: true
[2025-07-28T02:50:33.631Z] publishEvent: Event verification result:
true
[2025-07-28T02:50:33.631Z] publishEvent: Publishing event with ID: dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33
[NostrRelay] ========================================
[NostrRelay] APPEND OVERRIDE
[NostrRelay] Value: [{"type":"event","event":"{\"kind\":0,\"content\":\"Relay initialized\",\"created_at\":1753671033,\"tags\":[],\"pubkey\":\"1f7e61f63a22dc3503f61c65b49f83a3b79515a3bbf76e963316cb0859fbde89\",\"id\":\"dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33\",\"sig\":\"7665ac712038cb669935d1a479c71033713b465e6e29ffeed460ae463c3367b5c245ac69c5e47865a8aa44f4c4bf3357d7e6bd5bb255ccbee5974fe69b72c4fe\"}"}]
[NostrRelay] ========================================
[NostrRelay] Calling parent append...
[Autobee] ========================================
[Autobee] APPEND OPERATION
[Autobee] Value type: array
[Autobee] Current writable state: true
[Autobee] ========================================
[Autobee] Calling parent append...
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: true
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'dd317c27...', kind: 0, pubkey: '1f7e61f6...' }
[2025-07-28T02:50:33.632Z] validateEvent: Validating event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753671033,
  "tags": [],
  "pubkey": "1f7e61f63a22dc3503f61c65b49f83a3b79515a3bbf76e963316cb0859fbde89",
  "id": "dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33",
  "sig": "7665ac712038cb669935d1a479c71033713b465e6e29ffeed460ae463c3367b5c245ac69c5e47865a8aa44f4c4bf3357d7e6bd5bb255ccbee5974fe69b72c4fe"
}
[2025-07-28T02:50:33.632Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:50:33.632Z] NostrRelay.apply: Flushing batch
[RelayManager] Bee append - version: 2491
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[Autobee] Update event - writable: true writers: 0
[RelayManager] Relay update event
[Autobee] Parent append completed
[Autobee] Calling _bump()...
[Autobee] _bump() completed
[NostrRelay] Parent append completed
[2025-07-28T02:50:33.633Z] publishEvent: Event published successfully: dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33
[RelayManager] Relay initialized with event ID: [
  'OK',
  'dd317c27ad24d85c8d338ef051baefc8fcc1db71f74c5baba009cf5a8bc9af33',
  true,
  ''
]
[RelayManager] Released lock for storage directory: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/61317c7d578ea346d4dd0add06a2bd0369aa62ff6c6e74c70c7550b88d3f98e5/relays/relay-1753658518015
[RelayManager] ========================================
[RelayManager] INITIALIZATION COMPLETE
[RelayManager] ========================================
[ProfileManager] Saving relay profile for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78: {
  name: 'HOUSE OF BLOBS',
  auto_connect: true,
  updated_at: '2025-07-28T02:17:42.243Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/61317c7d578ea346d4dd0add06a2bd0369aa62ff6c6e74c70c7550b88d3f98e5/relay-profiles.json
[ProfileManager] Successfully saved relay profile for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayAdapter] Joined relay: cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[ProfileManager] Saving relay profile for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78: {
  name: 'HOUSE OF BLOBS',
  auto_connect: true,
  updated_at: '2025-07-28T02:17:42.243Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/61317c7d578ea346d4dd0add06a2bd0369aa62ff6c6e74c70c7550b88d3f98e5/relay-profiles.json
[ProfileManager] Successfully saved relay profile for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayAdapter] Successfully connected to relay cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayAdapter] Found auth token for user 7c039d34... on relay cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayAdapter] [2] autoConnectStoredRelays() -> Sending relay-initialized for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78 with URL wss://hypertuna.com/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty/houseOfBlobs?token=a77edc54f69caf88764718c4ce1dbc356ce1dfde4b7376fc9cfc97b5bec72e2f
[Worker] Sending message: {"type":"relay-initialized","relayKey":"cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78","publicIdentifier":"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs","gatewayUrl":"wss://hypertuna.com/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty/houseOfBlobs?token=a77edc54f69caf88764718c4ce1dbc356ce1dfde4b7376fc9cfc97b5bec72e2f","name":"HOUSE OF BLOBS","connectionUrl":"wss://hypertuna.com/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty/houseOfBlobs?token=a77edc54f69caf88764718c4ce1dbc356ce1dfde4b7376fc9cfc97b5bec72e2f","requiresAuth":true,"userAuthToken":"a77edc54f69caf88764718c4ce1dbc356ce1dfde4b7376fc9cfc97b5bec72e2f","timestamp":"2025-07-28T02:50:33.636Z"}
[RelayAdapter] Auto-connection complete:
[RelayAdapter] - Connected: 1 relays
[RelayAdapter] - Failed: 0 relays
[RelayAdapter] - Auth-protected: 1 relays
[Worker] Sending message: {"type":"all-relays-initialized","count":1,"connected":["cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78"],"failed":[],"total":1,"authProtectedCount":1,"timestamp":"2025-07-28T02:50:33.636Z"}
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
[RelayServer] Timestamp: 2025-07-28T02:50:33.637Z
[RelayServer] Sending HTTP registration to gateway
[RelayServer] Registration URL: https://hypertuna.com/register
[RelayServer] Registration data: {
  publicKey: 'd7a63f75...',
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
  timestamp: '2025-07-28T02:50:33.776Z',
  subnetHash: 'c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c'
}
[RelayServer] Registration SUCCESSFUL
[RelayServer] Config saved to: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/61317c7d578ea346d4dd0add06a2bd0369aa62ff6c6e74c70c7550b88d3f98e5/relay-config.json
[RelayServer] Stored subnet hash: c5f7979a...
[RelayServer] Notifying worker of successful registration
[Worker] Sending message: {"type":"gateway-registered","data":{"message":"Registered successfully (Hyperswarm mode)","driveKey":"6cc70aee172393da2a2be85e6a031447e2a4a153969a6760400022024d133274","status":"active","mode":"hyperswarm","timestamp":"2025-07-28T02:50:33.776Z","subnetHash":"c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c"}}
[RelayServer] ========================================
[Worker] Sending message: {"type":"relay-registration-complete","relayKey":"cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78","publicIdentifier":"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs","gatewayUrl":"wss://hypertuna.com/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty/houseOfBlobs?token=a77edc54f69caf88764718c4ce1dbc356ce1dfde4b7376fc9cfc97b5bec72e2f","authToken":"a77edc54f69caf88764718c4ce1dbc356ce1dfde4b7376fc9cfc97b5bec72e2f","timestamp":"2025-07-28T02:50:33.787Z"}
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
[RelayServer] Peer public key: 92ace0641bd482705a641e9f44d7366de7446bba931e6362a8e25ad4ac904288
[RelayServer] Connection time: 2025-07-28T02:50:34.382Z
[RelayServer] Total connected peers: 1
[RelayServer] Setting up protocol for peer: 92ace0641bd482705a641e9f44d7366de7446bba931e6362a8e25ad4ac904288
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
[RelayServer] Peer: 92ace064...
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
[RelayServer] Gateway public key: 92ace0641bd482705a641e9f44d7366de7446bba931e6362a8e25ad4ac904288
[RelayServer] Connection time: 2025-07-28T02:50:35.349Z
[RelayServer] ========================================
[RelayServer] Notifying worker of gateway connection
[Worker] Sending message: {"type":"gateway-connected","gatewayPublicKey":"92ace0641bd482705a641e9f44d7366de7446bba931e6362a8e25ad4ac904288"}
[RelayServer] No pending registrations to process
[RelayServer] Starting keepalive for 92ace064...
[RelayServer] ----------------------------------------
[RelayProtocol] Received request: POST /identify-gateway
[RelayServer] Generic request received: POST /identify-gateway
[RelayProtocol] Received health check
[RelayServer] Performing initial HTTP registration with gateway...
[RelayServer] ========================================
[RelayServer] GATEWAY REGISTRATION ATTEMPT (HTTP)
[RelayServer] Timestamp: 2025-07-28T02:50:35.789Z
[RelayServer] Sending HTTP registration to gateway
[RelayServer] Registration URL: https://hypertuna.com/register
[RelayServer] Registration data: {
  publicKey: 'd7a63f75...',
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
  timestamp: '2025-07-28T02:50:35.920Z',
  subnetHash: 'c5f7979a65e566163486c02a1721b2f1531a2d16b2de41cfa22bc21bb8a62e1c'
}
[RelayServer] Registration SUCCESSFUL
[RelayServer] Config saved to: /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/61317c7d578ea346d4dd0add06a2bd0369aa62ff6c6e74c70c7550b88d3f98e5/relay-config.json
[RelayServer] Stored subnet hash: c5f7979a...
[RelayServer] Notifying worker of successful registration
