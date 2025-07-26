import test from 'brittle'
import NostrRelay from '../hypertuna-relay-event-processor.mjs'

// Ensure that a custom open function passed to the constructor is executed.
test('custom open function is executed', async t => {
  let called = false
  const relay = new NostrRelay(null, null, {
    open () {
      called = true
      return { ready: async () => {} }
    },
    verifyEvent: async () => true
  })

  await relay.ready()
  t.ok(called)
})
