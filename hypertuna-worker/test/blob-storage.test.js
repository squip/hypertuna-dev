import test from 'brittle'
import NostrRelay from '../hypertuna-relay-event-processor.mjs'
import b4a from 'b4a'

// Ensure calling putBlob twice with the same data only stores one entry

export default test('putBlob avoids duplicate uploads', async t => {
  const relay = new NostrRelay(null, null, { verifyEvent: async () => true })
  await relay.ready()
  const data = b4a.from('hello world')

  const metadata = { uploadedBy: 'tester' }

  const hash1 = await relay.putBlob(data, metadata)
  await relay.update()

  const blob = await relay.getBlob(hash1)
  t.ok(blob)
  t.ok(blob.data.equals(data))
  t.alike(blob.metadata.uploadedBy, 'tester')
  t.is(blob.size, data.length)

  let appendCount = 0
  const origAppend = relay.append.bind(relay)
  relay.append = async op => {
    appendCount++
    return origAppend(op)
  }

  const hash2 = await relay.putBlob(data, metadata)

  t.is(hash1, hash2)
  t.is(appendCount, 0)
})
