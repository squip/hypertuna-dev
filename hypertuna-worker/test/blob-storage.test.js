import test from 'brittle'
import NostrRelay from '../hypertuna-relay-event-processor.mjs'

// Ensure calling putBlob twice with the same data only stores one entry

export default test('putBlob avoids duplicate uploads', async t => {
  const relay = new NostrRelay(null, null, { verifyEvent: async () => true })
  const data = 'hello world'

  // first upload
  const hash1 = await relay.putBlob(data)

  // track additional append calls
  let appendCount = 0
  const origAppend = relay.append.bind(relay)
  relay.append = async op => {
    appendCount++
    return origAppend(op)
  }

  const hash2 = await relay.putBlob(data)

  t.is(hash1, hash2)
  t.is(appendCount, 0)
})
