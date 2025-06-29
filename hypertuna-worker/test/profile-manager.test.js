import test from 'brittle'
import fs from 'fs/promises'
import path from 'path'
import os from 'os'

import { updateRelayAuthToken, getAllRelayProfiles } from '../hypertuna-relay-profile-manager-bare.mjs'

// Helper to create temporary storage and seed legacy profile
async function setupLegacyProfile() {
  const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'relaytest-'))
  global.Pear = { config: { storage: tmp } }
  const profile = {
    relay_key: 'relay1',
    name: 'Legacy',
    auth_adds: [{ pubkey: 'pub1', token: 'old', subnets: [], ts: 1 }],
    auth_removes: [],
    auth_config: { requiresAuth: true, tokenProtected: true }
  }
  await fs.mkdir(tmp, { recursive: true })
  await fs.writeFile(path.join(tmp, 'relay-profiles.json'), JSON.stringify({ relays: [profile] }, null, 2))
  return tmp
}

test('updateRelayAuthToken migrates legacy auth fields', async t => {
  const tmp = await setupLegacyProfile()
  await updateRelayAuthToken('relay1', 'pub1', 'new', ['sub1'])
  const profiles = await getAllRelayProfiles()
  t.is(profiles[0].auth_adds, undefined)
  t.is(profiles[0].auth_removes, undefined)
  t.alike(profiles[0].auth_config.auth_adds, [{ pubkey: 'pub1', token: 'new', subnets: ['sub1'], ts: profiles[0].auth_config.auth_adds[0].ts }])
  await fs.rm(tmp, { recursive: true, force: true })
})
