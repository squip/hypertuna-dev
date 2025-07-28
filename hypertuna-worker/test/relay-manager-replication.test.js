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
