import test from 'brittle'
import { RelayManager } from '../hypertuna-relay-manager-bare.mjs'
import b4a from 'b4a'

class FakeProtomux {
  constructor () {}
  createChannel () {
    return {
      addMessage () {
        return { send () {} }
      },
      open () {},
      close () {}
    }
  }
}

// Basic event emitter for connection stubs
class FakeConnection {
  constructor () {
    this.handlers = {}
    this.readable = true
    this.writable = true
  }
  on (event, fn) {
    this.handlers[event] = fn
  }
}

// Test replication behavior on new peer connection
export default test('replicates store once per peer', async t => {
  let storeReplicateCount = 0
  const store = {
    replicate () {
      storeReplicateCount++
      return { on () {} }
    }
  }

  let blobReplicateCount = 0
  const blobCore = {
    replicate () {
      blobReplicateCount++
      return { on () {} }
    }
  }

  const relay = {
    replicate (conn) {
      return store.replicate(conn)
    },
    view: { blobs: { core: blobCore } },
    local: { key: b4a.alloc(32) },
    writable: false,
    writers: [],
    update: async () => {}
  }

  const manager = new RelayManager('/tmp/test', null)
  manager.store = store
  manager.relay = relay
  manager.swarm = {
    handler: null,
    on (event, fn) {
      if (event === 'connection') this.handler = fn
    }
  }

  // Inject mock Protomux
  manager.Protomux = FakeProtomux
  manager.setupSwarmListeners()

  const conn = new FakeConnection()
  const peerInfo = { publicKey: b4a.alloc(32) }
  await manager.swarm.handler(conn, peerInfo)

  t.is(storeReplicateCount, 1)
  t.is(blobReplicateCount, 0)
})

export default test('multiple connections each replicate once', async t => {
  let storeReplicateCount = 0
  const store = {
    replicate () {
      storeReplicateCount++
      return { on () {} }
    }
  }

  const relay = {
    replicate (conn) {
      return store.replicate(conn)
    },
    view: {},
    local: { key: b4a.alloc(32) },
    writable: false,
    writers: [],
    update: async () => {}
  }

  const manager = new RelayManager('/tmp/test', null)
  manager.store = store
  manager.relay = relay
  manager.swarm = {
    handler: null,
    on (event, fn) {
      if (event === 'connection') this.handler = fn
    }
  }

  manager.Protomux = FakeProtomux
  manager.setupSwarmListeners()

  const c1 = new FakeConnection()
  const c2 = new FakeConnection()
  const p1 = { publicKey: b4a.alloc(32) }
  const p2 = { publicKey: b4a.alloc(32) }

  await manager.swarm.handler(c1, p1)
  await manager.swarm.handler(c2, p2)

  t.is(storeReplicateCount, 2)
})

export default test('non-writable peer skips addWriter but syncs later', async t => {
  let appendCount = 0
  let updateCount = 0
  const relay = {
    append: async () => { appendCount++ },
    update: async () => { updateCount++ },
    writable: false,
    writers: [],
    local: { key: b4a.alloc(32) }
  }

  const manager = new RelayManager('/tmp/test', null)
  manager.relay = relay

  const writerKey = 'a'.repeat(64)

  await manager.addWriter(writerKey)

  t.is(appendCount, 0)
  t.is(updateCount, 0)
  t.ok(manager.pendingWriterKeys.includes(writerKey))

  // simulate remote append replication
  relay.writers.push({ key: b4a.from(writerKey, 'hex') })
  await relay.update()

  t.is(relay.writers.length, 1)
})
