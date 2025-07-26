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
```

The `_createHyperdriveView` helper constructs a `Hyperdrive` with an internal `Hyperbee` database and `Hyperblobs` store. After `update()` the drive is ready for reads and writes.

## Multiwriter Replication Configuration

For multiwriter setups, each peer must know about the other writers. `RelayManager` listens for `addWriter` operations in the `apply` hook and calls `base.addWriter()` accordingly. When spawning a `RelayManager` instance you can pass an existing drive key and discovery key to reuse a drive.

```javascript
const relayManager = new RelayManager(storageDir, bootstrap, driveKey, driveDiscoveryKey)
await relayManager.initialize()
```

When multiple writers replicate the same drive, ensure that each peer's `bootstrap` array includes a writable peer or that peers manually exchange writer keys.

