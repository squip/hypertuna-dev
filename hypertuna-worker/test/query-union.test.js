import test from 'brittle'
import NostrRelay from '../hypertuna-relay-event-processor.mjs'

// Basic unit test for the two-level union/intersection logic used when applying filters

test('filter union across same attribute values', t => {
  const relay = new NostrRelay(null, null, { verifyEvent: async () => true })

  // Simulate query results
  const kindUnion = new Set(['id1']) // results for kinds 9000/9001 (9001 has no events)
  const tagResults = new Set(['id1'])

  const ids = relay.findCommonIds([kindUnion, tagResults])
  t.alike(Array.from(ids), ['id1'])
})
