import test from 'brittle'

// dynamic import after setting window

// simple private key for signing
const privKey = '1'.repeat(64)

// ensure window exists before importing modules


test('group message content URLs generate r tags', async t => {
  global.window = {}
  const { default: NostrEvents } = await import('../NostrEvents.js')
  const { event } = await NostrEvents.createGroupMessage('group1', 'hello https://example.com/page', [], privKey)
  const hasTag = event.tags.some(tag => tag[0] === 'r' && tag[1] === 'https://example.com/page')
  t.ok(hasTag)
})

test('parseGroupMetadata detects file sharing tags', async t => {
  global.window = {}
  const { default: NostrEvents } = await import('../NostrEvents.js')
  const eventOn = {
    kind: NostrEvents.KIND_GROUP_METADATA,
    created_at: 0,
    tags: [
      ['d', 'group1'],
      ['file-sharing-on']
    ]
  }
  const eventOff = {
    kind: NostrEvents.KIND_GROUP_METADATA,
    created_at: 0,
    tags: [
      ['d', 'group2'],
      ['file-sharing-off']
    ]
  }

  const groupOn = NostrEvents.parseGroupMetadata(eventOn)
  const groupOff = NostrEvents.parseGroupMetadata(eventOff)

  t.ok(groupOn.fileSharing)
  t.absent(groupOff.fileSharing)
})
