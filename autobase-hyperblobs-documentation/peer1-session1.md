peer 1 - session 1 log: (process when peer 2 intiates join request to relay instance)


[RelayProtocol] Received request: POST /post/join/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs
[RelayServer] Join request for relay: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs
[RelayServer] Publishing event to relay npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs: {
  kind: 9021,
  content: 'Request to join the group',
  tags: [ [Array] ],
  created_at: 1753669056,
  pubkey: '983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a',
  id: '3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b',
  sig: '0660ad2868943c10c909eace1337c47c44e7fbae0186d3139144d11e4cb494796dfea43b196fc9de780d007e9e42ae7842d3e07768452750cb5d9e23f1950d41'
}
[2025-07-28T02:17:36.516Z] publishEvent: Attempting to publish event:
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
Verifying Event Signature ===
Serialized Event: [0,"983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a",1753669056,9021,[["h","npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"]],"Request to join the group"]
Event Hash: 3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b
Verification Details:
Public Key: 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a
Signature: 0660ad2868943c10c909eace1337c47c44e7fbae0186d3139144d11e4cb494796dfea43b196fc9de780d007e9e42ae7842d3e07768452750cb5d9e23f1950d41
Verification Result: true
[2025-07-28T02:17:36.535Z] publishEvent: Event verification result:
true
[2025-07-28T02:17:36.535Z] publishEvent: Publishing event with ID: 3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b
[NostrRelay] ========================================
[NostrRelay] APPEND OVERRIDE
[NostrRelay] Value: [{"type":"event","event":"{\"kind\":9021,\"content\":\"Request to join the group\",\"tags\":[[\"h\",\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"]],\"created_at\":1753669056,\"pubkey\":\"983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a\",\"id\":\"3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b\",\"sig\":\"0660ad2868943c10c909eace1337c47c44e7fbae0186d3139144d11e4cb494796dfea43b196fc9de780d007e9e42ae7842d3e07768452750cb5d9e23f1950d41\"}"},{"type":"event","key":"tagKey:h:tagValue:npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs:created_at:1753669056:id:3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b","event":"{\"kind\":9021,\"content\":\"Request to join the group\",\"tags\":[[\"h\",\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"]],\"created_at\":1753669056,\"pubkey\":\"983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a\",\"id\":\"3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b\",\"sig\":\"0660ad2868943c10c909eace1337c47c44e7fbae0186d3139144d11e4cb494796dfea43b196fc9de780d007e9e42ae7842d3e07768452750cb5d9e23f1950d41\"}"}]
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
[2025-07-28T02:17:36.535Z] validateEvent: Validating event:
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
[2025-07-28T02:17:36.535Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '3241a839...', kind: 9021, pubkey: '983bec97...' }
[2025-07-28T02:17:36.536Z] validateEvent: Validating event:
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
[2025-07-28T02:17:36.536Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:17:36.536Z] NostrRelay.apply: Flushing batch
[RelayManager] Bee append - version: 2364
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[Autobee] Update event - writable: true writers: 0
[RelayManager] Relay update event
[Autobee] Parent append completed
[Autobee] Calling _bump()...
[Autobee] _bump() completed
[NostrRelay] Parent append completed
[2025-07-28T02:17:36.536Z] publishEvent: Event published successfully: 3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b
[RelayServer] Event published successfully: [
  'OK',
  '3241a8393f00063cf8014f6e1212a884ba2c97dcbda3381477d74ae1d270206b',
  true,
  ''
]
[RelayServer] Published kind 9021 join request event
[ChallengeStore] Stored challenge for 983bec97...
[RelayServer] Generated challenge for 983bec97...
[RelayProtocol] Received request: POST /verify-ownership
[RelayServer] ========================================
[RelayServer] VERIFY OWNERSHIP REQUEST
[RelayServer] Verifying for pubkey: 983bec97...
[RelayServer] Ciphertext length: 108
[RelayServer] IV length: 24
[ChallengeManager] Verifying challenge for 983bec97...
[ChallengeManager] Shared key: f2bde7013af00cdd...
[ChallengeManager] Decrypted: 04710577cea3d649b8ec8de37a7c155ad0aac0fbbfaab9cc41670b4bce609e9c
[ChallengeManager] Expected: 04710577cea3d649b8ec8de37a7c155ad0aac0fbbfaab9cc41670b4bce609e9c
[ChallengeManager] Challenge verified successfully
[RelayServer] Verification SUCCESSFUL
[RelayServer] Token: 0d4f532a6aed9adf...
[RelayServer] Identifier: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs
[RelayServer] ========================================
[RelayProtocol] Received request: POST /finalize-auth
[RelayServer] ========================================
[RelayServer] FINALIZE AUTH REQUEST
[RelayServer] Resolved public identifier npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs to internal relay key cb2518ea...
[RelayServer] Finalizing for pubkey: 983bec97...
[RelayServer] Identifier: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs
[RelayServer] Subnet hash: 0317ffd2...
[RelayAuthStore] Added auth for 983bec97... on relay cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[ProfileManager] Saving relay profile for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78: {
  name: 'HOUSE OF BLOBS',
  auto_connect: true,
  updated_at: '2025-07-28T02:17:36.672Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/61317c7d578ea346d4dd0add06a2bd0369aa62ff6c6e74c70c7550b88d3f98e5/relay-profiles.json
[ProfileManager] Successfully saved relay profile for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayAuthStore] Added auth for 983bec97... on relay cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayAuthStore] Added auth for 983bec97... on relay npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs
[ProfileManager] Saving relay profile for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78: {
  name: 'HOUSE OF BLOBS',
  auto_connect: true,
  updated_at: '2025-07-28T02:17:36.673Z'
}
[ProfileManager] Loaded 1 existing profiles
[ProfileManager] Updating existing profile at index 0 for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[ProfileManager] Writing 1 profiles to /Users/essorensen/Library/Application Support/pear/app-storage/by-dkey/f855d697e2fc5436a1e6eb70ccdd067cbabc382aaf80eccd7d22c238448a094a/users/61317c7d578ea346d4dd0add06a2bd0369aa62ff6c6e74c70c7550b88d3f98e5/relay-profiles.json
[ProfileManager] Successfully saved relay profile for cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayServer] Publishing kind 9000 event for 983bec97...
[RelayServer] Publishing event to relay npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs: {
  kind: 9000,
  content: 'Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token',
  created_at: 1753669056,
  tags: [ [Array], [Array] ],
  pubkey: '7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902',
  id: '911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa',
  sig: '1e7be5ffcfc80b92b4a75dbe8d96b311695954a45c29a61ffd529f1f5e8762fb7d8217f72e776e23c01e7f41256c993086ed9789fa51b0ed7bf2311cb4230c14'
}
[2025-07-28T02:17:36.694Z] publishEvent: Attempting to publish event:
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
Verifying Event Signature ===
Serialized Event: [0,"7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902",1753669056,9000,[["h","npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs"],["p","983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a","member","0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802","0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741"]],"Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token"]
Event Hash: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
Verification Details:
Public Key: 7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902
Signature: 1e7be5ffcfc80b92b4a75dbe8d96b311695954a45c29a61ffd529f1f5e8762fb7d8217f72e776e23c01e7f41256c993086ed9789fa51b0ed7bf2311cb4230c14
Verification Result: true
[2025-07-28T02:17:36.714Z] publishEvent: Event verification result:
true
[2025-07-28T02:17:36.714Z] publishEvent: Publishing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] ========================================
[NostrRelay] APPEND OVERRIDE
[NostrRelay] Value: [{"type":"event","event":"{\"kind\":9000,\"content\":\"Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token\",\"created_at\":1753669056,\"tags\":[[\"h\",\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"],[\"p\",\"983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a\",\"member\",\"0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802\",\"0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741\"]],\"pubkey\":\"7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902\",\"id\":\"911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa\",\"sig\":\"1e7be5ffcfc80b92b4a75dbe8d96b311695954a45c29a61ffd529f1f5e8762fb7d8217f72e776e23c01e7f41256c993086ed9789fa51b0ed7bf2311cb4230c14\"}"},{"type":"event","key":"tagKey:h:tagValue:npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs:created_at:1753669056:id:911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa","event":"{\"kind\":9000,\"content\":\"Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token\",\"created_at\":1753669056,\"tags\":[[\"h\",\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"],[\"p\",\"983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a\",\"member\",\"0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802\",\"0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741\"]],\"pubkey\":\"7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902\",\"id\":\"911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa\",\"sig\":\"1e7be5ffcfc80b92b4a75dbe8d96b311695954a45c29a61ffd529f1f5e8762fb7d8217f72e776e23c01e7f41256c993086ed9789fa51b0ed7bf2311cb4230c14\"}"},{"type":"event","key":"tagKey:p:tagValue:983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a:created_at:1753669056:id:911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa","event":"{\"kind\":9000,\"content\":\"Adding user 983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a with auth token\",\"created_at\":1753669056,\"tags\":[[\"h\",\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"],[\"p\",\"983bec97fdb10be12b92a19577820740cb75865bceb7188db3e823246eade24a\",\"member\",\"0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802\",\"0317ffd2a5a65f920ee4e3c0a4e5601168d03762399a10ff4cfe46075722b741\"]],\"pubkey\":\"7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902\",\"id\":\"911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa\",\"sig\":\"1e7be5ffcfc80b92b4a75dbe8d96b311695954a45c29a61ffd529f1f5e8762fb7d8217f72e776e23c01e7f41256c993086ed9789fa51b0ed7bf2311cb4230c14\"}"}]
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
[2025-07-28T02:17:36.714Z] validateEvent: Validating event:
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
[2025-07-28T02:17:36.714Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '911a77be...', kind: 9000, pubkey: '7c039d34...' }
[2025-07-28T02:17:36.714Z] validateEvent: Validating event:
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
[2025-07-28T02:17:36.714Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: '911a77be...', kind: 9000, pubkey: '7c039d34...' }
[2025-07-28T02:17:36.714Z] validateEvent: Validating event:
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
[2025-07-28T02:17:36.714Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:17:36.714Z] NostrRelay.apply: Flushing batch
[RelayManager] Bee append - version: 2382
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[Autobee] Update event - writable: true writers: 0
[RelayManager] Relay update event
[Autobee] Parent append completed
[Autobee] Calling _bump()...
[Autobee] _bump() completed
[NostrRelay] Parent append completed
[2025-07-28T02:17:36.715Z] publishEvent: Event published successfully: 911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa
[RelayServer] Event published successfully: [
  'OK',
  '911a77bee45f098cc42d7ded81f70c4446b1239d9e5ce11dbaa43032562be5fa',
  true,
  ''
]
[RelayServer] Published kind 9000 event: 911a77be...
[RelayServer] Auth finalized successfully
[RelayServer] Relay URL: wss://hypertuna.com/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs?token=0d4f532a6aed9adf341d0b2ffa589c116da943d6863d7a14cae0727eca1f5802
[RelayServer] ========================================

[RelayManager] ========================================
[RelayManager] NEW PEER CONNECTION
[RelayManager] Peer key: 422e3a32dfcf2438
[RelayManager] Connection time: 2025-07-28T02:17:39.524Z
[RelayManager] ========================================
[RelayManager] Peer tracked successfully
[RelayManager] Connection object type: object
[RelayManager] Connection readable: true
[RelayManager] Connection writable: true
[RelayManager] Creating Protomux instance...
[RelayManager] Protomux created successfully
[RelayManager] Initialized Protomux on the connection
[RelayManager] Creating corestore replication stream...
[RelayManager] Corestore replicate() called successfully
[RelayManager] Corestore replication stream established
[RelayManager] Creating add-writer protocol channel...
[RelayManager] add-writer protocol channel created
[RelayManager] Adding message handler...
[RelayManager] Message handler added
[RelayManager] Opening add-writer protocol...
[RelayManager] Opened add-writer protocol
[RelayManager] Checking local writer key...
[RelayManager] Sending writer key: cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[RelayManager] Writer key sent successfully
[RelayManager] Starting Autobase replication...
[RelayManager] relay.replicate() called successfully
[RelayManager] Autobase replication initiated
[RelayManager] Starting Hyperblobs replication...
[RelayManager] Failed to create Hyperblobs replication: TypeError: blobCore.replicate is not a function
    at Hyperswarm.<anonymous> (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/hypertuna-relay-manager-bare.mjs:488:35)
    at EventListener.emit (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-events/index.js:59:12)
    at Hyperswarm.emit (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-events/index.js:143:40)
    at Hyperswarm._handleServerConnection (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/hyperswarm/index.js:357:10)
    at EventListener.emit (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-events/index.js:59:12)
    at Server.emit (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-events/index.js:143:40)
    at Server.onconnection (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/hyperdht/lib/server.js:59:10)
    at hs.onsocket (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/hyperdht/lib/server.js:318:16)
    at UDXStream.firewall [as _firewall] (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/hyperdht/lib/server.js:284:14)
    at UDXStream._onfirewall (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/udx-native/lib/stream.js:434:17)
[RelayManager] Stack: TypeError: blobCore.replicate is not a function
    at Hyperswarm.<anonymous> (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/hypertuna-relay-manager-bare.mjs:488:35)
    at EventListener.emit (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-events/index.js:59:12)
    at Hyperswarm.emit (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-events/index.js:143:40)
    at Hyperswarm._handleServerConnection (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/hyperswarm/index.js:357:10)
    at EventListener.emit (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-events/index.js:59:12)
    at Server.emit (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/bare-events/index.js:143:40)
    at Server.onconnection (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/hyperdht/lib/server.js:59:10)
    at hs.onsocket (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/hyperdht/lib/server.js:318:16)
    at UDXStream.firewall [as _firewall] (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/hyperdht/lib/server.js:284:14)
    at UDXStream._onfirewall (pear://wiujz4kupgj68gazw14d5k1y4bpmwo6q61ecee4hmcd1iosb974o/node_modules/udx-native/lib/stream.js:434:17)
[RelayManager] Hyperblobs replication stream is null
[RelayManager] Connection handler completed successfully
[RelayManager] add-writer protocol opened!
[RelayManager] ========================================
[RelayManager] RECEIVED WRITER KEY
[RelayManager] Writer key: ab718c284c921a92f5b7909171aef082305bda5df6cd5a9958200513ac7e763c
[RelayManager] From peer: 422e3a32dfcf2438
[RelayManager] ========================================
[RelayManager] Attempting to add writer...
[RelayManager] ========================================
[RelayManager] ADD WRITER OPERATION
[RelayManager] Writer key: ab718c284c921a92f5b7909171aef082305bda5df6cd5a9958200513ac7e763c
[RelayManager] Current writable state: true
[RelayManager] ========================================
[RelayManager] Appending addWriter operation to oplog...
[NostrRelay] ========================================
[NostrRelay] APPEND OVERRIDE
[NostrRelay] Value: {"type":"addWriter","key":"ab718c284c921a92f5b7909171aef082305bda5df6cd5a9958200513ac7e763c"}
[NostrRelay] ========================================
[NostrRelay] Appending addWriter operation for key: ab718c284c921a92f5b7909171aef082305bda5df6cd5a9958200513ac7e763c
[NostrRelay] Calling parent append...
[Autobee] ========================================
[Autobee] APPEND OPERATION
[Autobee] Value type: addWriter
[Autobee] Operation type: addWriter
[Autobee] AddWriter key: ab718c284c921a92f5b7909171aef082305bda5df6cd5a9958200513ac7e763c
[Autobee] Current writable state: true
[Autobee] ========================================
[Autobee] Calling parent append...
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
[2025-07-28T02:17:39.528Z] NostrRelay.apply: Flushing batch
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[Autobee] Update event - writable: true writers: 0
[RelayManager] Relay update event
[Autobee] Parent append completed
[Autobee] Calling _bump()...
[Autobee] _bump() completed
[NostrRelay] Parent append completed
[NostrRelay] addWriter operation appended successfully
[NostrRelay] Triggering update to ensure new writer is recognized...
[NostrRelay] Update completed
[NostrRelay] Current state after addWriter:
[NostrRelay] - Writable: true
[NostrRelay] - Writers count: 0
[RelayManager] addWriter operation appended successfully
[RelayManager] Append result: undefined
[RelayManager] Forcing relay update...
[RelayManager] Relay update completed
[RelayManager] Post-addWriter state:
[RelayManager] - Writable: true
[RelayManager] - Writers count: 0
[RelayManager] - Writers: undefined
[RelayManager] Writer key added successfully
[RelayManager] Current relay state:
[RelayManager] - Writable: true
[RelayManager] - Writers count: 0
[RelayManager] - View ready: true
[RelayManager] add-writer protocol closed!
[Worker] Sending message: {"type":"heartbeat","timestamp":1753669059923,"status":"running","mode":"hyperswarm"}
[Worker] Received from parent: { type: 'get-relays' }
[Worker] Get relays requested
[Worker] Found auth token for user on relay cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78
[Worker] Sending message: {"type":"relay-update","relays":[{"relayKey":"cb2518ea3bf849acb8adfba787e0585745e39af592f47bc5b216e2973c99da78","publicIdentifier":"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs","peerCount":0,"name":"HOUSE OF BLOBS","description":"in this house, we show blobs.","connectionUrl":"wss://hypertuna.com/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty/houseOfBlobs?token=a77edc54f69caf88764718c4ce1dbc356ce1dfde4b7376fc9cfc97b5bec72e2f","createdAt":"2025-07-27T23:22:00.453Z","isActive":true,"userAuthToken":"a77edc54f69caf88764718c4ce1dbc356ce1dfde4b7376fc9cfc97b5bec72e2f","requiresAuth":true,"members":["7c039d34916bf18004db47a3ddd7658b2ecadabf5733e258649d7ffb86561902","6458727ad9728b83ff0323cc856cf496839ffb488985e7e7a77fc5b5d948b411","d97e5d2784c3e9ea7344e36f6b5e7ed4cfdf9689990a691663da8ac4f2e3c524","37f31d998e84f7494fbf762479f11b5eec0a2d962d60360e27fa43862874669f","ab1fdcb1e85238b6fd262e1dc7d5d6f68673efd685181ac55c62a04ded99c2ba"]}]}
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
[2025-07-28T02:17:41.587Z] validateEvent: Validating event:
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
[2025-07-28T02:17:41.587Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'eed59878...', kind: 9000, pubkey: '983bec97...' }
[2025-07-28T02:17:41.587Z] validateEvent: Validating event:
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
[2025-07-28T02:17:41.587Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[NostrRelay] Processing operation type: event
[NostrRelay] Processing EVENT: { id: 'eed59878...', kind: 9000, pubkey: '983bec97...' }
[2025-07-28T02:17:41.587Z] validateEvent: Validating event:
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
[2025-07-28T02:17:41.587Z] validateEvent: Event passed all validation checks
[NostrRelay] Storing event with ID: eed598783e8f13b46fdbf52c5f84f9d558cb9a3c3089ebd3faabfc884493a857
[NostrRelay] Creating indexes for event...
[NostrRelay] Event and indexes stored successfully
[2025-07-28T02:17:41.587Z] NostrRelay.apply: Flushing batch
[RelayManager] Bee append - version: 2400
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[Autobee] Update event - writable: true writers: 0
[RelayManager] Relay update event
[RelayProtocol] Received request: GET /get/relay/npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs/b517cb3d7080dff0e099d9e9ee5b1e30
[RelayServer] Checking subscriptions for identifier: npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs, connectionKey: b517cb3d7080dff0e099d9e9ee5b1e30
[RelayServer] Resolved public identifier npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs to relay key cb2518ea...
[RelayServer] Relay npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs requires auth for read: true
[RelayServer] Authorized pubkeys count: 6
[RelayServer] Read access authenticated for 7c039d34...
...
...

[NostrRelay] ========================================
[NostrRelay] APPEND OVERRIDE
[NostrRelay] Value: {"type":"subscriptions","subscriptions":"{\"connection\":\"c4fe571eb7ca33120ef48c462b300c5c\",\"subscriptions\":{\"sub7\":{\"filters\":[{\"kinds\":[39002,39001],\"#d\":[\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"]},{\"kinds\":[9000,9001,9021],\"#h\":[\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"]}],\"last_returned_event_timestamp\":1753669061},\"sub19\":{\"filters\":[{\"kinds\":[39000],\"#d\":[\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"]},{\"kinds\":[39002],\"#d\":[\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"]},{\"kinds\":[39001],\"#d\":[\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"]}],\"last_returned_event_timestamp\":1753668972},\"sub20\":{\"filters\":[{\"kinds\":[1],\"#h\":[\"npub10spe6dy3d0ccqpxmg73am4m93vhv4k4l2ue7ykryn4llhpjkrypqtastty:houseOfBlobs\"]}],\"last_returned_event_timestamp\":1753669104}}}"}
[NostrRelay] ========================================
[NostrRelay] Calling parent append...
[Autobee] ========================================
[Autobee] APPEND OPERATION
[Autobee] Value type: subscriptions
[Autobee] Operation type: subscriptions
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
[NostrRelay] Processing operation type: subscriptions
[NostrRelay] Processing subscription data for connection: c4fe571eb7ca3312...
[2025-07-28T02:19:03.000Z] NostrRelay.apply: Flushing batch
[RelayManager] Bee append - version: 2448
[NostrRelay] Batch flushed successfully
[NostrRelay] ========================================
[NostrRelay] Custom apply completed
[Autobee] Update event - writable: true writers: 0
[RelayManager] Relay update event
[Autobee] Parent append completed
[Autobee] Calling _bump()...
[Autobee] _bump() completed
[NostrRelay] Parent append completed
