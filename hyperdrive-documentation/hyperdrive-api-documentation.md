# Hyperdrive

Hyperdrive is a secure, real-time distributed file system designed for easy P2P file sharing. We use it extensively inside Holepunch; apps like Keet are distributed to users as Hyperdrives, as is the Holepunch platform itself.

Notable features include:

* Uses Hyperbee internally for storing file metadata
* Major API simplification. Instead of mirroring POSIX APIs, the new API better captures the core requirements of P2P file transfer.
* Auxiliary tools, [`localdrive`](../helpers/localdrive) and [`mirrordrive`](../helpers/mirrordrive), that streamline import/export flows and make it easy to mirror drives to and from the local filesystem.

> [GitHub (Hyperdrive)](https://github.com/holepunchto/hyperdrive)

* [Hyperdrive](hyperdrive)
  * [Create a new instance](#installation)
  * Basic:
    * Properties:
      * [drive.corestore](#drive.corestore)
      * [drive.db](#drive.db)
      * [drive.core](#drive.core)
      * [drive.id](#drive.id)
      * [drive.key](#drive.key)
      * [drive.writable](#drive.writable)
      * [drive.readable](#drive.readable)
      * [drive.discoveryKey](#drive.discoverykey)
      * [drive.contentKey](#drive.contentkey)
      * [drive.version](#drive.version)
      * [drive.supportsMetadata](#drive.supportsmetadata)
    * Methods:
      * [drive.ready()](#drive.ready)
      * [drive.close()](#drive.close)
      * [drive.put(path, buffer, \[options\])](#drive.put)
      * [drive.get(path, \[options\])](#drive.get)
      * [drive.entry(path, \[options\])](#drive.entry)
      * [drive.exists(path)](#drive.exists)
      * [drive.del(path)](#drive.del)
      * [drive.compare(entryA, entryB)](#drive.compare)
      * [drive.clear(path, \[options\])](#drive.clear)
      * [drive.clearAll(\[options\])](#drive.clearall)
      * [drive.purge()](#drive.purge)
      * [drive.symlink(path, linkname)](#drive.symlink)
      * [drive.batch()](#drive.batch)
        * [batch.flush()](#drive.batch)
      * [drive.list(folder, \[options\])](#drive.list)
      * [drive.readdir(folder)](#drive.readdir)
      * [drive.entries(\[range\], \[options\])](#drive.entries)
      * [drive.mirror(out, \[options\])](#drive.mirror)
      * [drive.watch(\[folder\])](#drive.watch)
      * [drive.createReadStream(path, \[options\])](#drive.createreadstream)
      * [drive.createWriteStream(path, \[options\])](#drive.createwritestream)
      * [drive.download(folder, \[options\])](#drive.download)
      * [drive.checkout(version)](#drive.checkout)
      * [drive.diff(version, folder, \[options\])](#drive.diff)
      * [drive.downloadDiff(version, folder, \[options\])](#drive.downloaddiff)
      * [drive.downloadRange(dbRanges, blobRanges)](#drive.downloadrange)
      * [drive.findingPeers()](#drive.findingpeers)
      * [drive.replicate(isInitiatorOrStream)](#drive.replicate)
      * [drive.update(\[options\])](#drive.update)
      * [drive.getBlobs()](#drive.getblobs)

### Installation

Install with [npm](https://www.npmjs.com/):

```bash
npm install hyperdrive
```

### API

#### **`const drive = new Hyperdrive(store, [key])`**

Creates a new Hyperdrive instance. `store` must be an instance of [`Corestore`](../helpers/corestore).

By default, it uses the core at `{ name: 'db' }` from `store`, unless the public `key` is set.

#### Properties

#### **`drive.corestore`** <a href="#drive.corestore" id="drive.corestore"></a>

The Corestore instance used as storage.

#### **`drive.db`** <a href="#drive.db" id="drive.db"></a>

The underlying Hyperbee backing the drive file structure.

#### **`drive.core`** <a href="#drive.core" id="drive.core"></a>

The Hypercore used for `drive.db`.

#### **`drive.id`** <a href="#drive.id" id="drive.id"></a>

String containing the id (z-base-32 of the public key) identifying this drive.

#### **`drive.key`** <a href="#drive.key" id="drive.key"></a>

The public key of the Hypercore backing the drive.

#### **`drive.writable`** <a href="#drive.writable" id="drive.writable"></a>

Boolean indicating if we can write or delete data in this drive.

#### **`drive.readable`** <a href="#drive.readable" id="drive.readable"></a>

Boolean indicating if we can read from this drive. After closing the drive this will be `false`.

#### **`drive.discoveryKey`** <a href="#drive.discoverykey" id="drive.discoverykey"></a>

The hash of the public key of the Hypercore backing the drive. It can be used as a `topic` to seed the drive using Hyperswarm.

#### **`drive.contentKey`** <a href="#drive.contentkey" id="drive.contentkey"></a>

The public key of the [Hyperblobs](https://github.com/holepunchto/hyperblobs) instance holding blobs associated with entries in the drive.

#### **`drive.version`** <a href="#drive.version" id="drive.version"></a>

The number that indicates how many modifications were made, it is useful as a version identifier.

#### **`drive.supportsMetadata`** <a href="#drive.supportsmetadata" id="drive.supportsmetadata"></a>

Boolean indicating if the drive handles or not metadata. Always `true`.

#### Methods

#### **`await drive.ready()`** <a href="#drive.ready" id="drive.ready"></a>

Waits until the internal state is loaded.

Use it once before reading synchronous properties like `drive.discoveryKey`. If any of the other APIs are called first they will wait for readiness so this is only needed to lookup synchronous properties before any API call.

#### **`await drive.close()`** <a href="#drive.close" id="drive.close"></a>

Fully close this drive, including its underlying Hypercore backed data structures.

#### **`await drive.put(path, buffer, [options])`** <a href="#drive.put" id="drive.put"></a>

Creates a file at `path` in the drive. `options` are the same as in `createWriteStream`.

#### **`const buffer = await drive.get(path, [options])`** <a href="#drive.get" id="drive.get"></a>

Returns the blob at `path` in the drive. If no blob exists, returns `null`.

It also returns `null` for symbolic links.

`options` include:

```js
{
  follow: false, // Follow symlinks, 16 max or throws an error
  wait: true, // Wait for block to be downloaded
  timeout: 0 // Wait at max some milliseconds (0 means no timeout)
}
```

#### **`const entry = await drive.entry(path, [options])`** <a href="#drive.entry" id="drive.entry"></a>

Returns the entry at `path` in the drive. It looks like this:

```javascript
{
  seq: Number,
  key: String,
  value: {
    executable: Boolean, // Whether the blob at path is an executable
    linkname: null, // If entry not symlink, otherwise a string to the entry this links to
    blob: { // Hyperblobs id that can be used to fetch the blob associated with this entry
      blockOffset: Number,
      blockLength: Number,
      byteOffset: Number,
      byteLength: Number
    },
    metadata: null
  }
}
```

`options` include:

```js
{
  follow: false, // Follow symlinks, 16 max or throws an error
  wait: true, // Wait for block to be downloaded
  timeout: 0 // Wait at max some milliseconds (0 means no timeout)
}
```

#### `const exists = await drive.exists(path)` <a href="#drive.exists" id="drive.exists"></a>

Returns `true` if the entry at `path` does exists, otherwise `false`.

#### **`await drive.del(path)`** <a href="#drive.del" id="drive.del"></a>

Deletes the file at `path` from the drive.

> ℹ️ The underlying blob is not deleted, only the reference in the file structure.

#### **`const comparison = drive.compare(entryA, entryB)`** <a href="#drive.compare" id="drive.compare"></a>

Returns `0` if entries are the same, `1` if `entryA` is older, and `-1` if `entryB` is older.

#### **`const cleared = await drive.clear(path, [options])`** <a href="#drive.clear" id="drive.clear"></a>

Deletes the blob from storage to free up space, but the file structure reference is kept.

`options` include:

| Property   | Description                                            | Type    | Default |
| ---------- | ------------------------------------------------------ | ------- | ------- |
| **`diff`** | Returned `cleared` bytes object is null unless enabled | Boolean | `false` |

#### `const cleared = await drive.clearAll([options])` <a href="#drive.clearall" id="drive.clearall"></a>

Deletes all the blobs from storage to free up space, similar to how `drive.clear()` works.

`options` include:

| Property   | Description                                            | Type    | Default |
| ---------- | ------------------------------------------------------ | ------- | ------- |
| **`diff`** | Returned `cleared` bytes object is null unless enabled | Boolean | `false` |

#### `await drive.purge()` <a href="#drive.purge" id="drive.purge"></a>

Purges both cores (db and blobs) from storage, completely removing all the drive's data.

#### **`await drive.symlink(path, linkname)`** <a href="#drive.symlink" id="drive.symlink"></a>

Creates an entry in drive at `path` that points to the entry at `linkname`.

If a blob entry currently exists at `path` then it will get overwritten and `drive.get(key)` will return `null`, while `drive.entry(key)` will return the entry with symlink information.

#### **`const batch = drive.batch()`** <a href="#drive.batch" id="drive.batch"></a>

Useful for atomically mutating the drive, has the same interface as Hyperdrive.

#### **`await batch.flush()`** <a href="#drive.flush" id="drive.flush"></a>

Commit a batch of mutations to the underlying drive.

#### **`const stream = drive.list(folder, [options])`** <a href="#drive.list" id="drive.list"></a>

Returns a stream of all entries in the drive at paths prefixed with `folder`.

`options` include:

| Property        | Description                                   | Type    | Default |
| --------------- | --------------------------------------------- | ------- | ------- |
| **`recursive`** | whether to descend into all subfolders or not | Boolean | `true`  |

#### **`const stream = drive.readdir(folder)`** <a href="#drive.readdir" id="drive.readdir"></a>

Returns a stream of all subpaths of entries in the drive stored at paths prefixed by `folder`.

#### **`const stream = await drive.entries([range], [options])`** <a href="#drive.entries" id="drive.entries"></a>

Returns a read stream of entries in the drive.

`options` are the same as `Hyperbee().createReadStream([range], [options])`.

#### **`const mirror = drive.mirror(out, [options])`** <a href="#drive.mirror" id="drive.mirror"></a>

Mirrors this drive into another. Returns a [`MirrorDrive`](../helpers/mirrordrive) instance constructed with `options`.

Call `await mirror.done()` to wait for the mirroring to finish.

#### **`const watcher = drive.watch([folder])`** <a href="#drive.watch" id="drive.watch"></a>

Returns an iterator that listens on `folder` to yield changes, by default on `/`.

Usage example:

```javascript
for await (const [current, previous] of watcher) {
  console.log(current.version)
  console.log(previous.version)
}
```

> `current` and `previous` are the snapshots that are auto-closed before next value.
>
> Do not close those snapshots as they're used internally, let them be auto-closed.

Methods:

`await watcher.ready()`

Waits until the watcher is loaded and detecting changes.

`await watcher.destroy()`

Stops the watcher. I can also be stopped by using `break` in the `for await` loop.

#### **`const rs = drive.createReadStream(path, [options])`** <a href="#drive.createreadstream" id="drive.createreadstream"></a>

Returns a stream to read out the blob stored in the drive at `path`.

`options` include:

```javascript
{
  start: Number, // `start` and `end` are inclusive
  end: Number,
  length: Number, // `length` overrides `end`, they're not meant to be used together
  wait: true, // Wait for blocks to be downloaded
  timeout: 0 // Wait at max some milliseconds (0 means no timeout)
}
```

#### **`const ws = drive.createWriteStream(path, [options])`** <a href="#drive.createwritestream" id="drive.createwritestream"></a>

Stream a blob into the drive at `path`.

`options` include:

| Property         | Description                                          | Type    | Default |
| ---------------- | ---------------------------------------------------- | ------- | ------- |
| **`executable`** | whether the blob is executable or not                | Boolean | `true`  |
| **`metadata`**   | Extended file information i.e., arbitrary JSON value | Object  | `null`  |

#### **`await drive.download(folder, [options])`** <a href="#drive.download" id="drive.download"></a>

Downloads the blobs corresponding to all entries in the drive at paths prefixed with `folder`.

`options` are the same as those for `drive.list(folder, [options])`.

#### **`const snapshot = drive.checkout(version)`** <a href="#drive.checkout" id="drive.checkout"></a>

Gets a read-only snapshot of a previous version.

#### **`const stream = drive.diff(version, folder, [options])`** <a href="#drive.diff" id="drive.diff"></a>

Creates a stream of shallow changes to `folder` between `version` and `drive.version`.

Each entry is sorted by key and looks like this:

```javascript
{
  left: Object, // Entry in folder at drive.version for some path
  right: Object // Entry in folder at drive.checkout(version) for some path
}
```

> ℹ️ If an entry exists in `drive.version` of the `folder` but not in `version`, then `left` is set and `right` will be `null`, and vice versa.

#### **`await drive.downloadDiff(version, folder, [options])`** <a href="#drive.downloaddiff" id="drive.downloaddiff"></a>

Downloads all the blobs in `folder` corresponding to entries in `drive.checkout(version)` that are not in `drive.version`.

In other words, downloads all the blobs added to `folder` up to `version` of the drive.

#### **`await drive.downloadRange(dbRanges, blobRanges)`** <a href="#drive.downloadrange" id="drive.downloadrange"></a>

Downloads the entries and blobs stored in the [ranges](https://github.com/holepunchto/hypercore#const-range--coredownloadrange) `dbRanges` and `blobRanges`.

#### **`const done = drive.findingPeers()`** <a href="#drive.findingpeers" id="drive.findingpeers"></a>

Indicates to Hyperdrive that users are finding peers in the background, requests will be on hold until this is done.

Call `done()` when the current discovery iteration is done, i.e., after `swarm.flush()` finishes.

#### **`const stream = drive.replicate(isInitiatorOrStream)`** <a href="#drive.replicate" id="drive.replicate"></a>

Usage example:

```javascript
const swarm = new Hyperswarm()
const done = drive.findingPeers()
swarm.on('connection', (socket) => drive.replicate(socket))
swarm.join(drive.discoveryKey)
swarm.flush().then(done, done)
```

Learn more about how replicate works at [corestore.replicate](https://github.com/holepunchto/corestore#const-stream--storereplicateoptsorstream).

#### **`const updated = await drive.update([options])`** <a href="#drive.update" id="drive.update"></a>

Waits for initial proof of the new drive version until all `findingPeers` are done.

`options` include:

```javascript
{
  wait: false
}
```

Use `drive.findingPeers()` or `{ wait: true }` to make await `drive.update()` blocking.

#### **`const blobs = await drive.getBlobs()`** <a href="#drive.getblobs" id="drive.getblobs"></a>

Returns the [Hyperblobs](https://github.com/holepunchto/hyperblobs) instance storing the blobs indexed by drive entries.

```javascript
await drive.put('/file.txt', Buffer.from('hi'))

const buffer1 = await drive.get('/file.txt')

const blobs = await drive.getBlobs()
const entry = await drive.entry('/file.txt')
const buffer2 = await blobs.get(entry.value.blob)

// => buffer1 and buffer2 are equals
```
