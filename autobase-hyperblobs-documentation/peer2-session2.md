peer 2 - session 2 log: (process when peer 2 relaunches app, initializes relay from storage. no other peers online)


[RelayServer] ----------------------------------------
[RelayServer] Notifying worker of Hyperswarm status
[Worker] Sending message: {"type":"status","message":"Hyperswarm server connected","swarmKey":"1b171e8f6ca8bcc6279a3a8d0f549787dfc70e06684652e88b3762e9117bb3cb"}
[RelayServer] Initializing challenge manager...
[ChallengeManager] Initialized with relay pubkey: 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a
[RelayServer] Auth store initialized
[RelayServer] Starting auto-connection to stored relays...
[RelayAdapter] Starting auto-connection to stored relays for user: 0ba165c41e8bcba714b2d677ea5dd25a00e754ff974c4fb3e51a97a2f269b007
[RelayAdapter] Found 1 stored relay profiles
[RelayAdapter] Attempting to connect to relay cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78...
[RelayAdapter] Loading auth configuration for relay cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayAuthStore] Imported 6 auths for relay cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayAuthStore] Imported 6 auths for relay npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs
[RelayAdapter] Imported 6 auth entries for relay cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayManager] ========================================
[RelayManager] INITIALIZING RELAY
[RelayManager] Bootstrap: cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayManager] Storage directory: /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/0ba165c41e8bcba714b2d677ea5dd25a00e754ff974c4fb3e51a97a2f269b007/relays/cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayManager] ========================================
[RelayManager] Acquired lock for storage directory: /home/squip/.config/pear/app-storage/by-dkey/487c4d4e446bf80bb9dcd788acb1bcd884d9be2a634ea68d9430eecfd9a9bf18/users/0ba165c41e8bcba714b2d677ea5dd25a00e754ff974c4fb3e51a97a2f269b007/relays/cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
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
[Autobee] - Version: 1447
[Autobee] - Feed length: 1447
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Base writable: false
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'c4dc2d98...', kind: 9000, pubkey: 'ab1fdcb1...' }
[2025-07-28T02:27:58.630Z] validateEvent: Validating event:
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
[2025-07-28T02:27:58.630Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: c4dc2d984308841ddaab0e0775b6e9a47a4cc06b3d4a9eb8c02ecdc78c83d1f7
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'c4dc2d98...', kind: 9000, pubkey: 'ab1fdcb1...' }
[2025-07-28T02:27:58.643Z] validateEvent: Validating event:
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
[2025-07-28T02:27:58.643Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: c4dc2d984308841ddaab0e0775b6e9a47a4cc06b3d4a9eb8c02ecdc78c83d1f7
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'c4dc2d98...', kind: 9000, pubkey: 'ab1fdcb1...' }
[2025-07-28T02:27:58.644Z] validateEvent: Validating event:
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
[2025-07-28T02:27:58.644Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: c4dc2d984308841ddaab0e0775b6e9a47a4cc06b3d4a9eb8c02ecdc78c83d1f7
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:27:58.644Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: false
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '4461634f...', kind: 0, pubkey: '386e81f8...' }
[2025-07-28T02:27:58.647Z] validateEvent: Validating event:
{
  "kind": 0,
  "content": "Relay initialized",
  "created_at": 1753668959,
  "tags": [],
  "pubkey": "386e81f88062131a4af938e9e4dca13e4d7265189c1b1583b22618336ff14b45",
  "id": "4461634f0b3f8631f99d5c76eff4931f9031c180e486880c87ff811b6f638853",
  "sig": "57902d46d99b03e51b0bc96607e0afed58c26e4221b3f8a3662f6c27d6db4e52e2d8abdcac7dba017a2eb66606b2717a9f48dedc52d3b1f199e3442b0735e5c5"
}
[2025-07-28T02:27:58.647Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 4461634f0b3f8631f99d5c76eff4931f9031c180e486880c87ff811b6f638853
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:27:58.651Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: false
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:27:58.653Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: false
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:27:58.654Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: false
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:27:58.656Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: false
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0...
[2025-07-28T02:27:58.656Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 7
[NostrRelay] Base writable: false
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 7
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
...
...

[line 5300]

[2025-07-28T02:27:58.723Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Base writable: false
[NostrRelay] ========================================
[NostrRelay] Processing remaining operations through NostrRelay.apply...
[NostrRelay] ========================================
[NostrRelay] STATIC APPLY
[NostrRelay] Batch size: 3
[NostrRelay] Processing batch for event storage
[NostrRelay] ========================================
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '911a77be...', kind: 9000, pubkey: '7c039d34...' }
[2025-07-28T02:27:58.724Z] validateEvent: Validating event:
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
[2025-07-28T02:27:58.724Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '911a77be...', kind: 9000, pubkey: '7c039d34...' }
[2025-07-28T02:27:58.726Z] validateEvent: Validating event:
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
[2025-07-28T02:27:58.726Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '911a77be...', kind: 9000, pubkey: '7c039d34...' }
[2025-07-28T02:27:58.726Z] validateEvent: Validating event:
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
[2025-07-28T02:27:58.726Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:27:58.726Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[NostrRelay] ========================================
[NostrRelay] CUSTOM APPLY
[NostrRelay] Batch size: 1
[NostrRelay] Base writable: false
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
[2025-07-28T02:27:58.728Z] NostrRelay.apply: Flushing batch
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
[NostrRelay] Processing EVENT: { id: 'eed59878...', kind: 9000, pubkey: '983bec97...' }
[2025-07-28T02:27:58.728Z] validateEvent: Validating event:
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
[2025-07-28T02:27:58.728Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'eed59878...', kind: 9000, pubkey: '983bec97...' }
[2025-07-28T02:27:58.729Z] validateEvent: Validating event:
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
[2025-07-28T02:27:58.729Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'eed59878...', kind: 9000, pubkey: '983bec97...' }
[2025-07-28T02:27:58.729Z] validateEvent: Validating event:
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
[2025-07-28T02:27:58.729Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:27:58.729Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.747Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.747Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.747Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.748Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.748Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.748Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.749Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.749Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.749Z] NostrRelay.apply: Flushing batch
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
[2025-07-28T02:27:58.750Z] NostrRelay.apply: Flushing batch
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
[NostrRelay] Processing subscription data for connection: b517cb3d7080dff0..
