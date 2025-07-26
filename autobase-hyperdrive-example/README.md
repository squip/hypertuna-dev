# Autobase Hyperdrive Example

This directory contains example code and documentation around using Autobase with Hyperdrive-based views. It demonstrates multiwriter replication and how to integrate these pieces within the Hypertuna project.

## Customizing the Autobee `open` Handler

`Autobee` extends `Autobase` and can accept a custom `open` function when instantiated. The handler receives a `viewStore` that should be used to create and return the view object (usually a `Hyperbee` or `Hyperdrive`).

```javascript
import Autobee from './hypertuna-relay-helper.mjs'

const base = new Autobee(store, bootstrap, {
  open: (viewStore) => {
    // create a Hyperbee view by default
    const core = viewStore.get('autobee')
    return new Hyperbee(core, { extension: false })
  }
})
```

Providing an `open` callback allows applications to completely control how the underlying view is created. This is useful when you want to back the autobase with a Hyperdrive or add custom Hyperbee options.

## RelayManager Hyperdrive Initialization

`RelayManager` uses `NostrRelay` (which extends `Autobee`) with a custom `open` handler to initialize its Hyperdrive view. During `initialize()` the manager assigns the returned drive to `this.drive` so it can be reused later.

```javascript
this.relay = new NostrRelay(this.store, this.bootstrap, {
  open: (viewStore) => {
    this.drive = this._createHyperdriveView(
      viewStore,
      this.driveKey,
      this.driveDiscoveryKey
    )
    return this.drive
  },
  apply: async (batch, view, base) => {
    for (const node of batch) {
      if (node.value.type === 'addWriter') {
        await base.addWriter(b4a.from(node.value.key, 'hex'))
        continue
      }
    }
    await NostrRelay.apply(batch, view, base)
  },
  valueEncoding: c.any,
  verifyEvent: this.verifyEvent.bind(this)
})

await this.relay.ready()
await this.relay.update() // ensures open() runs
// replicate the drive with a peer before awaiting drive.ready()
```

The `_createHyperdriveView` helper constructs a `Hyperdrive` with an internal `Hyperbee` database and `Hyperblobs` store. The drive must replicate with a peer to fetch its header before `await drive.ready()` will succeed.

## Multiwriter Replication Configuration

For multiwriter setups, each peer must know about the other writers. `RelayManager` listens for `addWriter` operations in the `apply` hook and calls `base.addWriter()` accordingly. When spawning a `RelayManager` instance you can pass an existing drive key and discovery key to reuse a drive.

```javascript
const relayManager = new RelayManager(storageDir, bootstrap, driveKey, driveDiscoveryKey)
await relayManager.initialize()
```

When multiple writers replicate the same drive, ensure that each peer's `bootstrap` array includes a writable peer or that peers manually exchange writer keys.

## Hyperdrive View Usage

`RelayManager` passes the Hyperdrive instance returned from the `open` handler to `NostrRelay`. The drive exposes an internal Hyperbee database available at `drive.db`. Events are persisted in this database while the drive itself is used for file blobs via `drive.put()`/`drive.get()`.

Because a drive's header is only fetched through replication, you must replicate with a peer **before** awaiting `drive.ready()`. Peers need the writer public keys (hex encoded) to replicate each other's drives.

Below is a simplified example of `NostrRelay.apply` demonstrating how the view's database and file storage are accessed:

```javascript
static async apply (batch, view) {
  const store = view.db || view
  const b = store.batch({ update: false })

  for (const node of batch) {
    const op = node.value
    if (op.type === 'event') {
      const event = JSON.parse(op.event)
      await b.put(b4a.from(event.id, 'hex'), op.event)
    } else if (op.type === 'add-file') {
      await view.put(op.record.key, b4a.from(op.record.data, 'base64'))
    }
  }

  await b.flush()
}
```

