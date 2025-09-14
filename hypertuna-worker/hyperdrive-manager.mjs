// hypertuna-worker/hyperdrive-manager.mjs

import Corestore from 'corestore'
import Hyperdrive from 'hyperdrive'
import crypto from 'bare-crypto'

let store = null
let drive = null

export function getCorestore() {
  return store
}

export function normalizeRelayKey(key) {
  if (!key) return ''
  if (typeof key === 'string') return key.toLowerCase()
  if (key instanceof Uint8Array || Buffer.isBuffer(key)) {
    return Buffer.from(key).toString('hex')
  }
  return String(key)
}

export const relayPath = (relayKey) => `/${normalizeRelayKey(relayKey)}`
export const relayFilePath = (relayKey, fileHash) => `${relayPath(relayKey)}/${fileHash}`

export async function ensureRelayFolder(relayKey) {
  const path = relayPath(relayKey)
  try {
    if (!(await drive.exists(path))) {
      await drive.mkdir(path)
    }
  } catch (_) {}
}

/**
 * Initialize a Hyperdrive instance for this worker.
 * @param {object} config - Worker configuration including storage path.
 * @returns {Promise<void>}
 */
export async function initializeHyperdrive(config) {
  store = new Corestore(config.storage)
  drive = new Hyperdrive(store)
  await drive.ready()
  config.driveKey = drive.key.toString('hex')

  if (Array.isArray(config.relays)) {
    for (const relay of config.relays) {
      const relayKey = relay?.relayKey || relay
      if (!relayKey) continue
      await ensureRelayFolder(relayKey)
    }
  }
}

/**
 * Store a file and its metadata under the relay's directory.
 * @param {string} relayKey - Hex string identifying the relay.
 * @param {string} fileHash - Hash of the file's raw data.
 * @param {Uint8Array|Buffer} data - Raw file data.
 * @param {object} metadata - Additional metadata (e.g. mime type).
 */
export async function storeFile(relayKey, fileHash, data, metadata) {
  const hash = crypto.createHash('sha256').update(data).digest('hex')
  if (hash !== fileHash) {
    throw new Error('Hash mismatch')
  }

  const path = relayFilePath(relayKey, fileHash)
  if (await drive.exists(path)) return

  await drive.put(path, data, { metadata })
}

/**
 * Fetch a file from the local Hyperdrive instance.
 * @param {string} relayKey - Relay folder name.
 * @param {string} fileHash - Identifier of the file.
 * @returns {Promise<Uint8Array|null>}
 */
export async function getFile(relayKey, fileHash) {
  const entry = await drive.get(relayFilePath(relayKey, fileHash))
  return entry ? entry.value : null
}

export async function fetchFileFromDrive(driveKey, relayKey, fileHash) {
  const remote = new Hyperdrive(store, driveKey)
  await remote.ready()
  try {
    const entry = await remote.get(relayFilePath(relayKey, fileHash))
    return entry ? entry.value : null
  } catch (_) {
    return null
  } finally {
    try {
      await remote.close()
    } catch (_) {}
  }
}

export function watchDrive (onChange) {
  if (!drive) throw new Error('Hyperdrive not initialized')
  const watcher = drive.watch('/')
  ;(async () => {
    for await (const [curr, prev] of watcher) {
      for await (const diff of curr.diff(prev)) {
        const entry = diff.right || diff.left
        if (!entry) continue
        const type = diff.right && !diff.left ? 'add' : diff.left && !diff.right ? 'del' : 'update'
        try {
          await onChange({ type, path: entry.key })
        } catch (err) {
          console.error('[Hyperdrive] watch callback error:', err)
        }
      }
    }
  })().catch(err => console.error('[Hyperdrive] watch error:', err))
  return watcher
}

