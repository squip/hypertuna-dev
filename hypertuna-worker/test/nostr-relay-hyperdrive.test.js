import test from 'brittle'
import fs from 'fs/promises'
import os from 'os'
import path from 'path'
import Corestore from 'corestore'
import b4a from 'b4a'
import NostrRelay from '../hypertuna-relay-event-processor.mjs'
import { RelayManager } from '../hypertuna-relay-manager-bare.mjs'
import { activeRelays, writeFile } from '../hypertuna-relay-manager-adapter.mjs'

class TestRelayManager extends RelayManager {
  constructor (dir) {
    super(dir, null)
  }

  setupSwarmListeners () {}
  async initRelay () { return null }

  async initialize () {
    this.store = new Corestore(this.storageDir)
    this.relay = new NostrRelay(this.store, null, {
      open: viewStore => {
        this.drive = this._createHyperdriveView(viewStore, null, null)
        return this.drive
      },
      verifyEvent: async () => true
    })
    await this.relay.ready()
    await this.relay.update()
  }
}

test('NostrRelay with Hyperdrive view publishes events and files', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'relaytest-'))
  const mgr = new TestRelayManager(dir)
  await mgr.initialize()

  const relay = mgr.relay
  t.ok(relay.view.db, 'hyperdrive view created')

  const event = { id: 'a'.repeat(64), pubkey: 'b'.repeat(64), created_at: Math.floor(Date.now()/1000), kind: 1, tags: [], content: '', sig: 'c'.repeat(128) }
  await relay.publishEvent(event)
  const stored = await relay.getEvent(event.id)
  t.alike(stored, event)

  const relayKey = mgr.getPublicKey()
  activeRelays.set(relayKey, mgr)

  const filePath = path.join(dir, 'hello.txt')
  await fs.writeFile(filePath, 'hello')
  await writeFile(relayKey, filePath, 'hello.txt')

  const fetched = await mgr.drive.get('hello.txt')
  t.is(b4a.toString(fetched), 'hello')

  activeRelays.clear()
  await fs.rm(dir, { recursive: true, force: true })
})
