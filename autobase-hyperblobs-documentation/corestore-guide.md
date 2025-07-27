# How to work with many Hypercores using Corestore

An append-only log is powerful on its own, but it's most useful as a building block for constructing larger data structures, such as databases or filesystems. Building these data structures often requires many cores, each with different responsibilities. For example, Hyperdrive uses one core to store file metadata and another to store file contents.

[`Corestore`](../helpers/corestore.md) is a Hypercore factory that makes it easier to manage large collections of named Hypercores. This how-to demonstrates a pattern often in use: co-replicating many cores using Corestore, where several 'internal cores' are linked to from a primary core. Only the primary core is announced on the swarm -- the keys for the others are recorded inside of that core.

In [How to replicate and persist with Hypercore](./replicate-and-persist-with-hypercore.md), only single Hypercore instance was replicated. But in this how-to, we will replicate a single Corestore instance, which will internally manage the replication of a collection of Hypercores. We will achieve this with two Pear Terminal Applications: `multicore-writer-app` and `multicore-reader-app`.

> Only one Corestore per application is needed. This is the recommended best practices to make managing Hypercores efficient and to avoid pitfalls from having multiple Corestores. A single Corestore will:
> - Manage multiple sessions for the same Hypercore.
> - Requires only one replication stream per peer connection.
> - Simplifies referring to Hypercores by a name.

Create the `multicore-writer-app` project with these commands:

```
mkdir multicore-writer-app
cd multicore-writer-app
pear init -y -t terminal
npm install bare-process corestore hyperswarm b4a
```

Alter the generated `multicore-writer-app/index.js` file to the following

```javascript
import Hyperswarm from 'hyperswarm'
import Corestore from 'corestore'
import b4a from 'b4a'
import process from 'bare-process'

const store = new Corestore(Pear.config.storage)
const swarm = new Hyperswarm()
Pear.teardown(() => swarm.destroy())

// A name is a purely-local, and maps to a key pair. It's not visible to readers.
// Since a name always corresponds to a key pair, these are all writable
const core1 = store.get({ name: 'core-1', valueEncoding: 'json' })
const core2 = store.get({ name: 'core-2' })
const core3 = store.get({ name: 'core-3' })
await Promise.all([core1.ready(), core2.ready(), core3.ready()])

console.log('main core key:', b4a.toString(core1.key, 'hex'))

// Here we'll only join the swarm with the core1's discovery key
// We don't need to announce core2 and core3, because they'll be replicated with core1
swarm.join(core1.discoveryKey)

// Corestore replication internally manages to replicate every loaded core
// Corestore *does not* exchange keys (read capabilities) during replication.
swarm.on('connection', (conn) => store.replicate(conn))

// Since Corestore does not exchange keys, they need to be exchanged elsewhere.
// Here, we'll record the other keys in the first block of core1.
if (core1.length === 0) {
  await core1.append({
    otherKeys: [core2, core3].map((core) => b4a.toString(core.key, 'hex'))
  })
}

// Record all short messages in core2, and all long ones in core3
process.stdin.on('data', (data) => {
  if (data.length < 5) {
    console.log('appending short data to core2')
    core2.append(data)
  } else {
    console.log('appending long data to core3')
    core3.append(data)
  }
})
```

The `multicore-writer-app` uses a Corestore instance to create three Hypercores, which are then replicated with other peers using `Hyperswarm`. The keys for the second and third cores are stored in the first core (the first core bootstraps the system). Messages entered into the command line are written into the second and third cores, depending on the length of the message. The main core key logged into the command line so that it can be passed to the `multicore-reader-app`.

The `multicore-reader-app` connects to the previous peer with `Hyperswarm` and replicates the local `Corestore` instance to receive the data from it. This requires the copied key to be supplied as an argument when executing the file, which will then be used to create a core with the same public key as the other peer (i.e., the same discovery key for both the reader and writer peers).

```
mkdir multicore-reader-app
cd multicore-reader-app
pear init -y -t terminal
npm install corestore hyperswarm b4a
```

Alter the generated `multicore-reader-app/index.js` file to the following

```javascript
import Corestore from 'corestore'
import Hyperswarm from 'hyperswarm'
import b4a from 'b4a'

if (!Pear.config.args[0]) throw new Error('provide a key')

const key = b4a.from(Pear.config.args[0], 'hex')

const store = new Corestore(Pear.config.storage)
await store.ready()

const swarm = new Hyperswarm()
Pear.teardown(() => swarm.destroy())

// replication of corestore instance on every connection
swarm.on('connection', (conn) => store.replicate(conn))

// creation/getting of a hypercore instance using the key passed
const core = store.get({ key, valueEncoding: 'json' })
// wait till all the properties of the hypercore instance are initialized
await core.ready()

swarm.join(core.discoveryKey)
await swarm.flush()

// update the meta-data of the hypercore instance
await core.update()

if (core.length === 0) {
  throw new Error('Could not connect to the writer peer')
}

// getting cores using the keys stored in the first block of main core
const { otherKeys } = await core.get(0)
for (const key of otherKeys) {
  const core = store.get({ key: b4a.from(key, 'hex') })
  // on every append to the hypercore, 
  // download the latest block of the core and log it to the console
  core.on('append', () => {
    const seq = core.length - 1
    core.get(seq).then(block => {
      console.log(`Block ${seq} in Core ${key}: ${block}`) 
    })
  })
}
```

In one terminal, open `multicore-writer-app` with `pear run --dev .`.

```
cd  multicore-writer-app
pear run --dev .
```

The `multicore-writer-app` will output the main core key.

In another terminal, open the `multicore-reader-app` and pass it the key:

```
cd multicore-reader-app
pear run --dev . <SUPPLY THE KEY HERE>
```

As inputs are made to the terminal running the writer application, outputs should be shown in the terminal running the reader application.

# Corestore

<mark style="background-color:green;">**stable**</mark>

Corestore is a Hypercore factory that makes it easier to manage large collections of named Hypercores. It is designed to efficiently store and replicate multiple sets of interlinked [`Hypercore`](../building-blocks/hypercore.md)(s), such as those used by [`Hyperdrive`](../building-blocks/hyperdrive.md), removing the responsibility of managing custom storage/replication code from these higher-level modules.

> [GitHub (Corestore)](https://github.com/holepunchto/corestore)

* [Corestore](corestore.md#installation)
  * [Create a new instance](corestore.md#store-new)
  * Basic:
    * Methods:
      * [store.get(key | { key, name, exclusive, \[options\] })](corestore.md#store.get)
      * [store.replicate(options|stream)](corestore.md#store.replicate)
      * [store.namespace(name)](corestore.md#store.namespace)
      * [store.session(\[options\])](corestore.md#store.sesssion)

### Installation

Install with [npm](https://www.npmjs.com/):

```bash
npm install corestore
```

### API

#### **`const store = new Corestore(storage, [options])`** {#store-new}

Creates a new Corestore instance.

`storage` can be either a random-access-storage module, a string, or a function that takes a path and returns a random-access-storage instance.

```javascript
const Corestore = require('corestore')
const store = new Corestore('./my-storage')
```

`options` can include:

| Property         | Description                                              | Type   | Default                                                   |
| ---------------- | -------------------------------------------------------- | ------ | --------------------------------------------------------- |
| **`primaryKey`** | The primary key used to generate new Hypercore key pairs | Buffer | Randomly generated and persisted in the storage directory |

#### **`const core = store.get(key | { key, name, exclusive, [options] })`** {#store.get}

Loads a Hypercore, either by name (if the `name` option is provided), or from the provided key (if the first argument is a Buffer or String with hex/z32 key, or if the `key` option is set).

If that Hypercore has previously been loaded, subsequent calls to `get` will return a new Hypercore session on the existing core.

If the `exclusive` option is set and a writable session is opened, it will wait for all other exclusive writable to close before
opening the Hypercore. In other words, any operation on the core will wait until it is exclusive.

All other options besides `name` and `key` and `exclusive` will be forwarded to the Hypercore constructor.

```javascript
// assuming store is a Corestore instance
const core1 = store.get({ name: 'my-core-1' })
const core2 = store.get({ name: 'my-core-2' })

// awaiting ready so that we can access core1.key
await core1.ready()
const core3 = store.get({ key: core1.key }) // will open another session on core1

// assuming otherKey is the key to a non-writable core
// these are equivalent and will both return sessions on that same non-writable core
const core4 = store.get({ key: otherKey })
const core5 = store.get(otherKey)
```

> The names provided are only relevant **locally**, in that they are used to deterministically generate key pairs. Whenever a core is loaded by name, that core will be writable. Names are not shared with remote peers.

#### **`const stream = store.replicate(options|stream)`** {#store.replicate}

Creates a replication stream that's capable of replicating all Hypercores that are managed by the Corestore, assuming the remote peer has the correct capabilities.

`options` will be forwarded to Hypercore's `replicate` function.

Corestore replicates in an 'all-to-all' fashion, meaning that when replication begins, it will attempt to replicate every Hypercore that's currently loaded and in memory. These attempts will fail if the remote side doesn't have a Hypercore's capability -- Corestore replication does not exchange Hypercore keys.

If the remote side dynamically adds a new Hypercore to the replication stream (by opening that core with a `get` on their Corestore, for example), Corestore will load and replicate that core if possible.

Using [`Hyperswarm`](../building-blocks/hyperswarm.md) one can replicate Corestores as follows:

```javascript
const swarm = new Hyperswarm()
// join the relevant topic
swarm.join(...)
// simply pass the connection stream to corestore
swarm.on('connection', conn => store.replicate(conn))
```

As with Hypercore, users can also create new protocol streams by treating `options` as the `isInitiator` boolean and then replicate these streams over a transport layer of their choosing:

```javascript
// assuming store1 and store2 are corestore instances
const s1 = store1.replicate(true)
const s2 = store2.replicate(false)
s1.pipe(s2).pipe(s1)
```

#### **`const store = store.namespace(name)`** {#store.namespace}

Creates a new namespaced Corestore. Namespacing is useful for sharing a single Corestore instance between many applications or components, as it prevents name collisions.

Namespaces can be chained:

```javascript
const ns1 = store.namespace('a')
const ns2 = ns1.namespace('b')
const core1 = ns1.get({ name: 'main' }) // These will load different Hypercores
const core2 = ns2.get({ name: 'main' })
```

Namespacing is particularly useful if an application needs to create many different data structures, such as [`Hyperdrive`](../building-blocks/hyperdrive.md)s, that all share a common storage location:

```javascript
const store = new Corestore('./my-storage-dir')

// Neither drive1 nor drive2 care that they're being passed a namespaced store.
// But the top-level application can safely reuse my-storage-dir between both.
const drive1 = new Hyperdrive(store.namespace('drive-a'))
const drive2 = new Hyperdrive(store.namespace('drive-b'))
```

#### `const session = store.session([options])` {#store.session}

Creates a new Corestore that shares resources with the original, like cache, cores, replication streams, and storage, while optionally resetting the namespace, overriding `primaryKey`. Useful when an application needs to accept an optional Corestore, but needs to maintain a predictable key derivation.

`options` are the same as the constructor options:

| Property         | Description                                                                             | Type   | Default                          |
| ---------------- | --------------------------------------------------------------------------------------- | ------ | -------------------------------- |
| **`primaryKey`** | Overrides the default `primaryKey` for this session                                     | Buffer | The store's current `primaryKey` |
| **`namespace`**  | Overrides the namespace for this session. If `null`, the default namespace will be used. | Buffer | The store's current namespace.   |
| **`detach`**    | By disabling this, closing the session will also close the store that created the session. | Boolean | `true`   |
