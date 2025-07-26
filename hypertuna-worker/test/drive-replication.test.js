import test from 'brittle'
import { EventEmitter } from 'events'
import { RelayManager } from '../hypertuna-relay-manager-bare.mjs'

class TestRelayManager extends RelayManager {
  constructor() {
    super('.', [])
  }

  // override to avoid hyperswarm usage
  initializeFake() {
    this.swarm = new EventEmitter()
    this.drive = {
      ready: async () => {},
      replicate: () => {}
    }
    this.relay = { replicate: () => {} }
    this.peers = new Map()
    this.setupSwarmListeners()
  }
}

test('drive replicates after ready on peer connection', async t => {
  const manager = new TestRelayManager()
  manager.initializeFake()

  let readyCalled = false
  let replicateCalled = false

  manager.drive.ready = async () => {
    readyCalled = true
  }
  manager.drive.replicate = () => {
    replicateCalled = true
    t.ok(readyCalled, 'drive.ready called before replicate')
  }

  const handler = manager.swarm.listeners('connection')[0]
  await handler({}, { publicKey: Buffer.alloc(32) })

  t.ok(replicateCalled)
})
