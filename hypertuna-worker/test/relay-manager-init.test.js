import test from 'brittle'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'
import { RelayManager } from '../hypertuna-relay-manager-bare.mjs'

class TestRelayManager extends RelayManager {
  setupSwarmListeners () {
    // override to avoid hyperswarm usage during tests
  }
  async initRelay () {
    // skip initialization events
    return null
  }
}

test('initialize creates a drive', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'relaymgr-'))
  const mgr = new TestRelayManager(dir, [])
  await mgr.initialize()
  t.ok(mgr.drive)
  await fs.rm(dir, { recursive: true, force: true })
})
