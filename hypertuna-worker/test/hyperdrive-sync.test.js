import test from 'brittle'
import fs from 'fs/promises'
import path from 'path'
import os from 'os'
import crypto from 'crypto'
import Hyperdrive from 'hyperdrive'

import {
  initializeHyperdrive,
  ensureRelayFolder,
  storeFile,
  getFile,
  fetchFileFromDrive,
  relayPath,
  relayFilePath,
  getCorestore
} from '../hyperdrive-manager.mjs'

test('fetchFileFromDrive retrieves and stores file', async t => {
  const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'sync-'))
  global.Pear = { config: { storage: tmp } }
  const config = { storage: tmp, relays: [] }
  await initializeHyperdrive(config)

  const store = getCorestore()
  const remote = new Hyperdrive(store)
  await remote.ready()

  const relayKey = 'relay1'
  await remote.mkdir(relayPath(relayKey))
  const data = Buffer.from('hello world')
  const hash = crypto.createHash('sha256').update(data).digest('hex')
  await remote.put(relayFilePath(relayKey, hash), data)

  const fetched = await fetchFileFromDrive(remote.key.toString('hex'), relayKey, hash)
  t.alike(fetched, data)

  await ensureRelayFolder(relayKey)
  await storeFile(relayKey, hash, fetched, {})
  const stored = await getFile(relayKey, hash)
  t.alike(stored, data)

  // Second store should be a no-op and not throw
  await storeFile(relayKey, hash, fetched, {})

  await remote.close()
  await fs.rm(tmp, { recursive: true, force: true })
})
