// hypertuna-worker/hyperdrive-manager.mjs

import Corestore from 'corestore'
import Hyperdrive from 'hyperdrive'
import crypto from 'bare-crypto'

let store = null
let drive = null

export const relayPath = (relayKey) => `/${relayKey}`
export const relayFilePath = (relayKey, fileHash) => `${relayPath(relayKey)}/${fileHash}`

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
    for (const { relayKey } of config.relays) {
      if (!relayKey) continue
      try {
        await drive.mkdir(relayPath(relayKey))
      } catch (_) {}
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

