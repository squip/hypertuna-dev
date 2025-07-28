# hypertuna-relay-manager-client
a simple NOSTR client app for creating, joining, and managing your Hypertuna Relay instances

When peers connect, replicate the relay to synchronize all data:

```javascript
swarm.on('connection', conn => relay.replicate(conn))
```

`relay.replicate` automatically synchronizes the Corestore and Autobase. Because Hyperblobs uses a Hypercore stored in the same Corestore, blobs are replicated through that stream as well. See the usage guides in `autobase-hyperblobs-documentation` for details.
