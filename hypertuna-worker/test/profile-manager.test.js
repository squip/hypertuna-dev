import test from 'brittle'
import fs from 'fs/promises'
import path from 'path'
import os from 'os'

import { updateRelayAuthToken, updateRelayMemberSets, getAllRelayProfiles } from '../hypertuna-relay-profile-manager-bare.mjs'

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

async function setupProfile() {
  const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'relaytest-'))
  global.Pear = { config: { storage: tmp } }
  const profile = {
    relay_key: 'relay1',
    admin_pubkey: 'admin',
    members: ['admin'],
    auth_config: { requiresAuth: true, tokenProtected: true, authorizedUsers: [], auth_adds: [], auth_removes: [] }
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

test('concurrent updates merge nested fields', async t => {
  const tmp = await setupProfile()

  await updateRelayAuthToken('relay1', 'admin', 'admintoken')

  await Promise.all([
    updateRelayAuthToken('relay1', 'invitee', 'invtoken'),
    updateRelayMemberSets('relay1', [{ pubkey: 'invitee', ts: Date.now() }], [])
  ])

  const profiles = await getAllRelayProfiles()
  const authPubs = profiles[0].auth_config.authorizedUsers.map(a => a.pubkey).sort()
  t.alike(authPubs, ['admin', 'invitee'])
  await fs.rm(tmp, { recursive: true, force: true })
})

test('concurrent auth token updates do not lose updates', async t => {
  const tmp = await setupProfile()

  await Promise.all([
    updateRelayAuthToken('relay1', 'user1', 'tok1'),
    updateRelayAuthToken('relay1', 'user2', 'tok2')
  ])

  const profiles = await getAllRelayProfiles()
  const pubs = profiles[0].auth_config.authorizedUsers.map(a => a.pubkey).sort()
  t.alike(pubs, ['user1', 'user2'])
  await fs.rm(tmp, { recursive: true, force: true })
})

test('concurrent member set updates do not lose updates', async t => {
  const tmp = await setupProfile()

  await Promise.all([
    updateRelayMemberSets('relay1', [{ pubkey: 'alice', ts: 1 }], []),
    updateRelayMemberSets('relay1', [{ pubkey: 'bob', ts: 2 }], [])
  ])

  const profiles = await getAllRelayProfiles()
  const members = profiles[0].members.sort()
  t.alike(members, ['alice', 'bob'])
  await fs.rm(tmp, { recursive: true, force: true })
})
