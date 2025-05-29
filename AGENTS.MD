# Hypertuna Relay Pear Architecture Guide

## Overview

This guide explains the architecture of the Hypertuna Relay application built on Pear, a peer-to-peer application platform. The application consists of two main components:

1. **Desktop Application** (GUI) - User interface for relay management
2. **Terminal Worker** (Backend) - Runs the relay server as a headless process

## Key Pear Concepts

### 1. Pear Application Types

Pear supports two types of applications:

- **Desktop Applications**: GUI applications that run with Electron-like capabilities
- **Terminal Applications**: Headless applications that run on Bare (a minimal JavaScript runtime)

We use both types to separate concerns:
- Desktop app handles UI/UX
- Terminal app handles server operations

### 2. Bare vs Node.js

**Critical Understanding**: Pear Terminal applications run on Bare, not Node.js. This has significant implications:

```javascript
// ❌ Node.js modules won't work in Bare
import fs from 'fs'           // Will fail
import crypto from 'crypto'   // Will fail
import express from 'express' // Will fail (uses Node.js internals)

// ✅ Bare modules must be used instead
import fs from 'bare-fs'
import crypto from 'bare-crypto'
import http from 'bare-http'
```

**Why this matters**: Many npm packages assume Node.js APIs. We had to:
1. Replace Express with a custom HTTP server using `bare-http`
2. Replace axios with custom HTTP client using `bare-https`/`bare-http`
3. Use Bare-specific modules throughout the worker

### 3. Pear Worker Architecture

**Key Design Decision**: Desktop apps cannot run Node.js processes directly, but they can spawn Pear Terminal applications as workers.

```javascript
// Desktop app spawns terminal worker
const workerPipe = Pear.worker.run(workerLink, [])
```

This creates a bidirectional communication pipe between the desktop app and worker.

## Application Structure

### Directory Layout
```
hypertuna-desktop-app/
├── hypertuna-desktop/          # Pear Desktop Application
│   ├── package.json       # Desktop app config
│   ├── index.html         # UI entry point
│   ├── styles.css         # UI entry point
│   ├── main.js         # UI entry point
│   ├── app.js             # Desktop app logic
│   ├── AppIntegration.js             # Desktop app logic
│   ├── HypertunaUtils.js             # Desktop app logic
│   ├── NostrEvents.js             # Desktop app logic
│   ├── NostrGroupClient.js             # Desktop app logic
│   ├── NostrIntegration.js             # Desktop app logic
│   ├── NostrUtils.js             # Desktop app logic
│   ├── WebSocketRelayManager.js             # Desktop app logic
│   ├── browser-compat.js             # Desktop app logic
│   ├── crypto-libraries.js             # Desktop app logic
│   └── hypercore-crypto-loader.js             # Desktop app logic
│   
└── hypertuna-worker/          # Pear Terminal Application
    ├── hypertuna-relay-event-processor.mjs     
    ├── hypertuna-relay-helper.mjs              
    ├── hypertuna-relay-manager-bare.mjs             
    ├── hypertuna-relay-profile-manager-bare.mjs    
    ├── hypertuna-relay-manager-adapter.mjs
    ├── pure-secp256k1-bare.js        
    ├── crypto-libraries.js      
    ├── nostr-utils.js      
    ├── package.json       # Worker config
    ├── index.js           # Worker entry point
    └── pear-relay-server.mjs  # Relay server implementation
```

## Critical Configuration Details

### 1. Worker Staging and Linking

**Problem**: Workers must be referenced by `pear://` links, not file paths.

**Solution**: Stage the worker first to get its link:
```bash
cd hypertuna-worker
pear stage dev
# Outputs: pear://abc123...
```

Then reference it in desktop app's `package.json`:
```json
{
  "pear": {
    "links": {
      "relayWorker": "pear://abc123...",
      "api": "http://localhost:1945"
    }
  }
}
```

**Why**: Pear's security model requires explicit trust relationships. The `links` field declares which external resources the app can access.

### 2. Process Communication

**Problem**: Worker and desktop app run as separate processes.

**Solution**: Use Pear's worker pipe for IPC (Inter-Process Communication):

```javascript
// Worker side
const workerPipe = Pear.worker.pipe()
workerPipe.write(JSON.stringify(message) + '\n')

// Desktop side
workerPipe.on('data', (data) => {
  // Parse line-delimited JSON
})
```

**Critical Detail**: Messages must be newline-delimited to prevent concatenation issues.

### 3. Storage and Configuration

**Problem**: Each Pear app has its own isolated storage.

**Solution**: Use `Pear.config.storage` for persistent data:

```javascript
// Worker stores config in its own storage directory
const configPath = join(Pear.config.storage, 'relay-config.json')
```

**Why**: Pear apps are sandboxed. Each app (desktop and worker) has separate storage areas.

### 4. Module Compatibility

**Problem**: `process.argv` is read-only in Bare (unlike Node.js).

**Original Issue**:
```javascript
// ❌ This fails in Bare
process.argv = ['node', 'script.js', configFile]
```

**Solution**: Redesigned relay server to accept configuration as function parameter:
```javascript
// ✅ Pass config directly
await initializeRelayServer(config)
```

### 5. relay-protocol-enhanced.mjs - implemented custom protocol for full HTTP-like communication

**Design Principle**: Type-based message routing for extensibility.

### State Synchronization

**Challenge**: Keep desktop UI in sync with worker state.

**Solution**: 
1. Worker sends updates when state changes
2. Desktop can poll API for current state
3. Heartbeat messages confirm worker is alive

## Security Considerations

### 1. Pear Links Configuration

```json
{
  "pear": {
    "links": [
      "http://localhost:1945",  // Allow API access
      "https://*"               // Allow HTTPS requests
    ]
  }
}
```

**Critical**: Only declared links/domains are accessible. This is Pear's security model.

### 2. Worker Isolation

- Worker runs as separate process
- Cannot access desktop app's storage
- Communication only through defined pipe

## Development Workflow

### 1. Development Mode

```bash
# Terminal 1: Run worker application
cd hypertuna-worker
pear run --dev .

# Terminal 2: Run desktop application
cd hypertuna-desktop
pear run --dev .
```

### 2. Testing Worker Separately

The worker can be tested independently:
```bash
# Test API endpoints
curl http://localhost:1945/health
```

### 3. Debugging

**Worker Logs**: Output to terminal when run with `pear run --dev`
**Desktop Logs**: Shown in DevTools console
**Communication**: Can log all pipe messages for debugging


## Common Pitfalls and Solutions

### 1. Module Not Found Errors

**Problem**: `Cannot find module 'crypto'`
**Solution**: Replace with `bare-crypto`

### 2. Process is Not Defined

**Problem**: Libraries expecting Node.js globals
**Solution**: Use Bare-compatible alternatives or polyfills

### 3. Worker Not Starting

**Problem**: Worker link not properly configured
**Solution**: Ensure worker is staged and link is updated

### 4. JSON Parse Errors

**Problem**: Multiple messages concatenated
**Solution**: Use newline-delimited JSON

## Summary

This architecture leverages Pear's unique capabilities:
- **Process Isolation**: Separate UI from backend logic
- **P2P Native**: Built for peer-to-peer applications
- **Security**: Sandboxed with explicit permissions
- **Cross-Platform**: Runs on Windows, Mac, Linux

The key insight is understanding that Pear Desktop apps use web technologies (like Electron) while Pear Terminal apps use Bare (a minimal JS runtime). This separation allows for clean architecture but requires careful attention to module compatibility and inter-process communication.

The relay server can now be enhanced with the full Hypertuna functionality while maintaining this clean separation of concerns.

### PEAR REFERENCE DOCUMENTATION and EXAMPLES:
# Application Programming Interface (API)

<mark style="background-color: #8484ff;">**experimental**</mark>

The Pear API enables applications to interact with Pear platform features.

Most application peer-to-peer functionality is provided by ecosystem modules rather than the API.

Platform APIs are unchangeable. Compatibility cannot break. So the Pear API surface aims to be (and remain)
as small as possible.

## `global.Pear`

The Pear Platform API is made available globally as `Pear`.

The `Pear` API is designed to be small and immutable.

Any future changes to the `Pear` API will be non-breaking additions.

## `Pear.config <Object>`

Contains application configuration data.

### `Pear.config.key <Object|null>`

The `config.key` object holds both Hexadecimal and Z-Base-32 encodings of the key, and is of the form `{ z32: <String>, hex: <String> }`,

### `Pear.config.dev <Boolean>`

Whether the application is in development mode.

### `Pear.config.tier <String>`

Runtime scenario (dev, staging or production)

### `Pear.config.storage <String>`

Application storage path

### `Pear.config.name <String>`

Application name

### `Pear.config.main <String>`

Application entry file

### `Pear.config.channel <String|null>`

Application release/staging channel.

### `Pear.config.options <Object>`

Configuration options.
The `pear` configuration object as supplied via an applications `package.json` file.

**References**

* [Configuration](./configuration.md)

### `Pear.config.env <Object>`

The environment variables that an application was started with, as key-value pairs in an object.

### `Pear.config.cwd <String>`

The current working directory that an application was started from.

### `Pear.config.flags <Object>`

Parsed command-line flag values as supplied when an application was started.

### `Pear.config.tools <Boolean>`

Indicates whether or not Devtools is enabled.

### `Pear.config.watch <Boolean>`

Indicates whether or not Watch-Reload functionality is enabled.

### `Pear.config.storage <String>`

Application storage path.

### `Pear.config.args <Array>`

Command-line application arguments passed like `pear run --dev . --some arg`.

### `Pear.config.release <Number>`

The current release length as marked by the `pear release` command.

**References**

* [`pear release`](./cli.md)

### `Pear.config.link <String>`

Pear application link. Can be a `pear://` link or a local directory.

Can include a fragment link eg. `pear://link#fragment`.

**References**
* [Pear.config.linkData](#pearconfiglinkdata-string)
* [`pear run`](./cli.md)

### `Pear.config.links <Object|Array>`

Holds trusted Pear application links and domains as specified in the `links` field inside `package.json`.

**References**
* [pear.links](./configuration.md#pearlinks-objectarray)
* [`pear run`](./cli.md)

### `Pear.config.linkData <String>`

Holds just the data portion of a Pear link.

The Pear link of an application. Takes the form `pear://<key>/<data>`.

In development, `pear://dev/<data>`.

**References**

* [Pear.config.link](#pearconfiglink-string)
* [`pear run`](./cli.md)


### `Pear.config.checkpoint <Any>`

Holds state as set by `Pear.checkpoint()`. When an application restarts it will hold the most recent value passed to `Pear.checkpoint()`.

Stores state that will be available as `Pear.config.checkpoint` next time the application starts.

The `Pear.config.checkpoint` property immediately reflects the latest checkpoint.

The returned `Promise` will resolve once the checkpoint has been successfully stored.

**References**

* [Pear.checkpoint()](#pear-checkpoint-any)

### `Pear.config.release <Integer>`

Application release sequence integer.

### `Pear.config.flags <Object>`

Parsed runtime flags. For internal/advanced use.

### `Pear.config.applink <String>`

Pear application link. May be a `pear://` link or a local directory.
Can also include entrypoint and fragment eg. `pear://link#fragment`.

### `Pear.config.dependencies <Object>`

Application dependencies.

### `Pear.config.dir <String>`

Root directory of project.

### `Pear.config.pearDir <String>`

Directory for Pear runtime.

### `Pear.config.dht.nodes <Array<Object>>`

A list of known [DHT](../../building-blocks/hyperdht.md) nodes of the form `{ host: <String>, port: <Number> }`. The nodes are set when the Pear application is started.

Unless started with a custom set of bootstrap nodes, Pear caches known nodes to speed up connecting to the swarm and to make it more resilient.

### `Pear.config.dht.bootstrap <Array<Object>>`

A list of custom bootstrap nodes Pear is started with of the form `{ host: <String>, port: <Number> }`.

## `Pear.checkpoint(<Any>) => Promise`

Stores state that will be available as `Pear.config.checkpoint` next time the application starts.

The `Pear.config.checkpoint` property immediately reflects the latest checkpoint.

The returned `Promise` will resolve once the checkpoint has been successfully stored.

**References**

* [Pear.config.checkpoint()](#pear--config-checkpoint-any)


## Pear.messages([ pattern ], [ listener ]) -> Iterable

A function which accepts a pattern object and returns an [`Iambus`](https://github.com/holepunchto/iambus) subscriber (which inherits from [`streamx`](https://github.com/mafintosh/streamx) `Readable`) which emits message objects matching a provided pattern object.

If no pattern object or an empty pattern object is provided all messages will be emitted. A pattern object is an object (typically) containing a subset of matching values for a given target object. Message objects can be user generated or platform generated.

The subscriber stream has a `data` event which can be listened to, it can also be consumed with `for await` and an listener function can be passed in addition to pattern (`message(pattern, listener)`) or as a single argument (`messages(listener)`) (indicating a catch-all pattern).

A message object may have any properties. Platform-generated messages are given a `type` property.

### Examples:

Listen for an internal platform message using a pattern object and listener function:

```js
const { messages } = Pear

messages({ type: 'pear/wakeup' }, ({ data, link }) => {
  console.log('pear/wakeup', data, link)
})
```

Tiny utility module which logs all messages using `for await`:

```js
const { messages } = Pear

for await (const message of messages()) {
  if (global.LOGBUS) console.log('BUS:', message)
}
```

Use `message` to create an application message:

```js
const { message, messages } = Pear

const ctaClicks = messages({ type: 'my-app/user-cta' })

ctaClicks.on('data', (msg) => { console.log('cta click', msg) })

// elsewhere
onUserClickCta((event, data) => {
  message({ type: 'my-app/user-cta', event, data })
})
```

## `await Pear.message(<Object>)`

Send a message which will be:

```js
const { message, messages } = Pear

async function logMessages () {
  for await (const message of messages()) console.log(message)
}

logMessages().catch(console.error)

let count = 0
do {
  await message({ type: 'tick', count })
  await new Promise((resolve) => setTimeout(resolve, 1000))
} while (count++ < 1000)
```

## `Pear.worker <Object>`

Pear Worker is used to spawn processes and facilitate communication between the parent and child processes in the Pear Runtime.

The spawned worker process inherits standard input, output, and error from the parent process.

A bidirectional pipe is also created which enables communication between the parent and worker process.

Reference counting is handled automatically to manage the sidecar lifecycle.

### `const pipe = Pear.worker.run(link <String>, args <Array<String>>)`

Runs a Pear Worker by spawning a Pear Terminal Application process from the specified `link` parameter. The Worker uses the flags of the parent application but any application arguments must be passed using the `args` parameter, the `args` parameter also sets `Pear.config.args`. Returns a pipe (a [`streamx`](https://github.com/mafintosh/streamx) `Duplex` stream) for Worker communication. 

### `const pipe = Pear.worker.pipe()`

Returns the pipe (a [`streamx`](https://github.com/mafintosh/streamx) `Duplex` stream) created to the worker process.

## `Pear.media <Object>`

Media interface

### `const status = await Pear.media.status.microphone()`

Resolves to: `<String>`

If access to the microphone is available, resolved value will be `'granted'`.

Any other string indicates lack of permission. Possible values are `'granted'`, `'not-determined'`, `'denied'`, `'restricted'`, `'unknown'`.

### `const status = await Pear.media.status.camera()`

Resolves to: `<String>`

If access to the camera is available, resolved value will be `'granted'`.

Any other string indicates lack of permission. Possible values are `'granted'`, `'not-determined'`, `'denied'`, `'restricted'`, `'unknown'`.

### `const status = await Pear.media.status.screen()`

Resolves to: `<String>`

If access to the screen is available, resolved value will be `'granted'`.

Any other string indicates lack of permission. Possible values are `'granted'`, `'not-determined'`, `'denied'`, `'restricted'`, `'unknown'`.

### `const success = await Pear.media.access.microphone()`

Resolves to: `<Boolean>`

Request access to the microphone. Resolves to `true` if permission is granted.

### `const success = await Pear.media.access.camera()`

Resolves to: `<Boolean>`

Request access to the camera. Resolves to `true` if permission is granted.

### `const success = await Pear.media.access.screen()`

Resolves to: `<Boolean>`

Request access to screen sharing. Resolves to `true` if permission is granted.

### `const sources = await Pear.media.desktopSources(options <Object>)`

Captures available desktop sources. Resolves to an array of objects with shape `{ id <String>, name <String>, thumbnail <NativeImage>, display_id <String>, appIcon <NativeImage> }`. The `id` is the window or screen identifier. The `name` is the window title or `'Screen <index>'` in multiscreen scenarios or else `Entire Screen`. The `display_id` identifies the screen. The thumbnail is a scaled down screen capture of the window/screen.

**Options**

* `types <Array<String>>` - Default: `['screen', 'window']`. Filter by types. Types are `'screen'` and `'window'`.
* `thumbnailSize <Object>` - Default: `{width: 150, height: 150}`. Set thumbnail scaling (pixels)
* `fetchWindowIcons <Boolean>` - Default: `false`. Populate `appIcon` with Window icons, or else `null`.

**References**

* https://www.electronjs.org/docs/latest/api/desktop-capturer#desktopcapturergetsourcesoptions
* https://www.electronjs.org/docs/latest/api/structures/desktop-capturer-source
* [`<NativeImage>`](https://www.electronjs.org/docs/latest/api/native-image)

### `const path = Pear.media.getPathForFile(file <File>)`

Accepts a web [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File/File) object and returns the file system path for that file as a `String`. In cases where the `file` argument is not a `File` object an exception is thrown. In the case that the `file` is constructed in JS and is not backed by a file on disk an empty string is returned.

Available in Desktop Applications only.

**References**

* https://www.electronjs.org/docs/latest/api/web-utils#webutilsgetpathforfilefile

### `Pear.versions <Async Function>`

Function that returns a promise which resolves to a Pear versions object with the shape `{ fork <Integer>, length <Integer>, key <Buffer> }`.

The `key` is a Buffer of the run key. The `length` is the size of the relevant Hypercore. The `fork` property is determined by data truncation.

These three properties together are a unique identifier for the entire state of both applications and the Pear platform.

### `Pear.versions.platform { fork <Integer>, length <Integer>, key <Buffer> }`

The platform version.

### `Pear.versions.app { fork <Integer>, length <Integer>, key <Buffer> }`

The application version.

### `Pear.versions.runtimes { bare <Integer>, electron <Integer>, pear <Integer> }`

The versions of runtimes.

**References**

* [Pear.config.key](#pearconfigkey-objectnull)


### `Pear.teardown(fn <Async Function|Function>)`

Register application clean-up handlers to be called when an application begins to unload.

May be called multiple times to register multiple teardown handlers.

Functions supplied to teardown will be executed in order of registration when
an application begins to unload. Any promise returned from each supplied function
will be waited upon until resolution before calling the next teardown handler.

### Pear.reload()

Refresh application in Desktop applications. Not available in terminal
applications.

### `Pear.restart()`

Restart the application. Desktop Applications only.

### `Pear.exit(code)`

Exits the process with the provided exit code.

### `Pear.updates(listener <Async Function|Function>) => streamx.Readable`

The `listener` function is called for every incoming update with an `update` object of the form:

```js
{
  type: 'pear/updates',
  version: { fork <Integer>, length <Integer>, key <String(hex)>,  } | null,
  app <Boolean>,
  diff <Array <String> >,
}
```

* `version` is a Pear version object holding incoming version information
* `app` indicates whether the update represents an application (`true`) or platform (`false`) update
* `diff` requires `--update-diffs` flag (else `null`). An array of objects of form `{ type, key}`.
  * `type` `<String>` - Operation type `update` or `delete`
  * `key` `<String>` - Drive key for a given updated file e.g. `/path/to/file.txt`

Also returns a [`streamx`](https://github.com/mafintosh/streamx) `Readable`) stream.

### `Pear.wakeups(listener <Async Function|Function>) => streamx.Readable`

A wakeup occurs in the following cases:

* when a trusted `pear://` link is clicked and the application for that link is already open
* when used with `pear run --detached pear://<key>[/data]`

The `listener` function is called for every incoming wakeup with a `wakeup` object of the form:

```js
{
  type: 'pear/wakeup',
  link: <String>,
  linkData: <String>,
  fragment: <String>,
  entrypoint: <String>
}
```

* `link` is the `pear://` link for the application receiving the wakeup
* `linkData` is everything after the key in the `pear://` link - this would be `pathname` of a [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) object but without the leading slash (`/`). Given `pear://8ts9yz9dtucxzwbxafygnjasqe9ti3dt3w7rm6sbiu8prmidacao/some/more/stuff` the `data` string would hold `some/more/stuff`.
* `fragment` is the `fragment` part of `pear://link#fragment` (location hash without the `#` prefix).
* `entrypoint` includes `entrypoint` of `pear://link/some/entry/point` (URL pathname).

Also returns a [`streamx`](https://github.com/mafintosh/streamx) `Readable`) stream.

### `Pear.badge(count <Integer|null>) => Promise<Boolean>`

Set the badge number for the application on desktop for Linux & MacOS. Setting the `count` to `0` will hide the badge while `null` will display a plain dot on MacOS only.

Returns a `Boolean` promise for whether the call succeeded.

Desktop Applications only.

### `Pear.tray(options <Object>, listener <Async Function|Function>) => Promise<untray()>`

Configure a tray icon for the application. This method will return a promise which resolves to an `untray()` function for removing the tray.

The `listener` function is triggered whenever a menu item or the tray icon is clicked. It receives a single argument `key` that represents the menu item `key` that was clicked or the special value of `'click'` for when the menu icon itself was clicked. If no `listener` function is provided, a default listener will show the application window when triggered with `'click'` or `'show'` and quits with `'quit'`.

A Pear application must be `hideable` to support adding a tray (see [`pear.gui.hideable`](./configuration.md#pear.gui.hideable-less-than-boolean-greater-than-default-false)).

WARNING: Linux tray support varies which can cause scenarios where the application's tray doesn't work and closing the app will be hidden and inaccessible. Using a tray and `hideable` on Linux is not recommended.

Desktop Applications only.

**Options**

* `icon <String>` Default: The Pear icon - The path for icon for the tray
  relative to the project root. Supported formats: PNG & JPEG
* `menu <Object>` Default: ``{ show: `Show ${Pear.config.name}`, quit: 'Quit' }`` - The
  tray menu items. Each property of the object is the `key` passed to the
  `listener` and whose value is the text displayed in the menu.
* `os <Object>` Default: `{ win32: true, linux: true, darwin: true  }` - which
  platforms support using the tray menu. The platform is checked via the
  `process.platform` value.

### `const win = new Pear.Window(entry <String>, options <Object>)`

Desktop Applications only.

Create a new `Window` instance.

**Options**

* `show <Boolean>` Default: `true` - show the window as soon as it has been opened
* `x <Integer>` - the horizontal position of left side of the window (pixels)
* `y <Integer>` - vertical window position (pixels)
* `width <Integer>` - the width of the window (pixels)
* `height <Integer>` - the height of the window (pixels)
* `animate <Boolean>` Default: `false` - animate the dimensional change. MacOS only, ignored on other OS's.
* `center <Boolean` - center the window upon opening
* `minWidth <Integer>` - window minimum width (pixels)
* `minHeight <Integer>` - window minimum height (pixels)
* `maxWidth <Integer>` - window maximum width (pixels)
* `maxHeight <Integer>` - window maximum height (pixels)
* `resizable <Boolean>` - window resizability
* `movable <Boolean>` - window movability
* `minimizable <Boolean>` - window minimizability
* `maximizable <Boolean>` - window maximizability
* `closable <Boolean>` - window closability
* `focusable <Boolean>` - window focusability
* `alwaysOnTop <Boolean>` - Set window to always be on top
* `fullscreen <Boolean>` - Set window to fullscreen upon open
* `kiosk <Boolean>` - Set window to enter kiosk mode upon open
* `autoHideMenuBar <Boolean>` - Hide menu bar unless Alt key is pressed (Linux, Windows)
* `hasShadow <Boolean>` - Set window shadow
* `opacity <Number>` - Set window opacity (0.0 - 1.0) (Windows, macOS)
* `transparent <Boolean>` - Set window transparency
* `backgroundColor <String>` Default: `'#FFF'` - window default background color. Hex, RGB, RGBA, HSL HSLA, CSS color

### `win.on[ce]('message', (...args) => { })`
### `for await (const [ ...args ] of win)`

Receive a message from the window. The received `args` array is deserialized via `JSON.parse`.

**References**

* [`win.send()`](#await-winsendargs)

### `const success = await win.open(options <Object>)`

Resolves to: `<Boolean>`

Open the window.

**Options**

* `show` Default: `true` - show the window as soon as it has been opened
* `x <Integer>` - the horizontal position of left side of the window (pixels)
* `y <Integer>` - vertical window position (pixels)
* `width <Integer>` - the width of the window (pixels)
* `height <Integer>` - the height of the window (pixels)
* `animate <Boolean>` Default: `false` - animate the dimensional change. MacOS only, ignored on other OS's.
* `center <Boolean` - center the window upon opening
* `minWidth <Integer>` - window minimum width (pixels)
* `minHeight <Integer>` - window minimum height (pixels)
* `maxWidth <Integer>` - window maximum width (pixels)
* `maxHeight <Integer>` - window maximum height (pixels)
* `resizable <Boolean>` - window resizability
* `movable <Boolean>` - window movability
* `minimizable <Boolean>` - window minimizability
* `maximizable <Boolean>` - window maximizability
* `closable <Boolean>` - window closability
* `focusable <Boolean>` - window focusability
* `alwaysOnTop <Boolean>` - Set window to always be on top
* `fullscreen <Boolean>` - Set window to fullscreen upon open
* `kiosk <Boolean>` - Set window to enter kiosk mode upon open
* `autoHideMenuBar <Boolean>` - Hide menu bar unless Alt key is pressed (Linux, Windows)
* `hasShadow <Boolean>` - Set window shadow
* `opacity <Number>` - Set window opacity (0.0 - 1.0) (Windows, macOS)
* `transparent <Boolean>` - Set window transparency
* `backgroundColor <String>` Default: `'#FFF'` - window default background color. Hex, RGB, RGBA, HSL HSLA, CSS color

### `const success = await win.close()`

Resolves to: `<Boolean>`

Close the window.

### `const success = await win.show()`

Resolves to: `<Boolean>`

Show the window.

### `const success = await win.hide()`

Resolves to: `<Boolean>`

Hide the window.

### `const success = await win.focus()`

Resolves to: `<Boolean>`

Focus the window.

### `const success = await win.blur()`

Resolves to: `<Boolean>`

Blur the window.

### `const success = await win.minimize()`

Resolves to: `<Boolean>`

Minimize the window.

### `const success = await win.maximize()`

Resolves to: `<Boolean>`

Maximize the window.

### `const success = await win.restore()`

Resolves to: `<Boolean>`

Unmaximize/unminimize the window if it is currently maximized/minimized.

### `await win.send(...args)`

Send arguments to the window. They will be serialized with `JSON.stringify`.


### `const dimensions = await win.dimensions()`

Resolves to: `{x <Integer>, y <Integer>, width <Integer>, height <Integer>} | null`.

The height, width, horizontal (`x`), vertical (`y`) position of the window relative to the screen.

All units are (pixels)

If the window is closed this will resolve to `null`.

**References**

* [await win.dimensions(options)](#await-windimensionsoptions-object)

### `await win.dimensions(options <Object>)`

```js
const win = new Pear.Window('./some.html', {
  x: 10,
  y: 450,
  width: 300,
  height: 350
})

await win.open()
await new Promise((resolve) => setTimeout(resolve, 1000))

await win.dimensions({
  x: 20,
  y: 50,
  width: 550,
  height: 300,
  animate: true // only has an effect on macOS
})

```

Sets the dimensions of the window.

**Options**

* `x <Integer>` - the horizontal position of left side of the window (pixels)
* `y <Integer>` - the vertical position of the top of the window (pixels)
* `width <Integer>` - the width of the window (pixels)
* `height <Integer>` - the height of the window (pixels)
* `animate <Boolean>` Default: `false` - animate the dimensional change. MacOS only, ignored on other OS's.
* `position <String>` - may be `'center'` to set the window in the center of the screen or else `undefined`.

**References**

* [const dimensions = await win.dimensions()](#const-dimensions-await-windimensions)


### `const visible = await win.isVisible()`

Resolves to: `<Boolean>`

Whether the window is visible.

### `const minimized = await win.isMinimized()`

Resolves to: `<Boolean>`

Whether the window is minimized.

### `const maximized = await win.isMaximized()`

Resolves to: `<Boolean>`

Whether the window is maximized.

### `const closed = await win.isClosed()`

Resolves to: `<Boolean>`

Whether the window is closed.

### `const view = new Pear.View(options <Object>)`

Desktop Applications only.

Create a new `View` instance. Views provide isolated content views. Frameless, chromeless windows that can be embedded inside other windows and views.

**Options**

* `x <Integer>` - the horizontal position of left side of the view (pixels)
* `y <Integer>` - vertical view position (pixels)
* `width <Integer>` - the width of the view (pixels)
* `height <Integer>` - the height of the view (pixels)
* `backgroundColor <String>` Default: `'#FFF'` - view default background color. Hex, RGB, RGBA, HSL HSLA, CSS color
* `autoresize <Object>` Default `{ width=true, height=true, vertical=false, horizontal=false }` - dimensions for the view to autoresize alongside. For example, if `width` is `true` and the view container increases/decreases in width, the view will increase/decrease in width at the same rate.

**References**

* https://www.electronjs.org/docs/latest/api/browser-view#viewsetautoresizeoptions-experimental
* https://www.electronjs.org/docs/latest/api/browser-view#viewsetbackgroundcolorcolor-experimental

### `view.on[ce]('message', (...args) => { })`
### `for await (const [ ...args ] of view)`

Receive a message from the view. The received `args` array is deserialized via `JSON.parse`.

**References**

* [`view.send()`](#await-viewsendargs)

### `const success = await view.open(options <Object>)`

Resolves to: `<Boolean>`

Open the view.

**Options**

* `x <Integer>` - the horizontal position of left side of the view (pixels)
* `y <Integer>` - vertical view position (pixels)
* `width <Integer>` - the width of the view (pixels)
* `height <Integer>` - the height of the view (pixels)
* `backgroundColor <String>` Default: `'#FFF'` - view default background color. Hex, RGB, RGBA, HSL HSLA, CSS color
* `autoresize <Object>` Default `{ width=true, height=true, vertical=false, horizontal=false }` - dimensions for the view to autoresize alongside. For example, if `width` is `true` and the view container increases/decreases in width, the view will increase/decrease in width at the same rate.

### `const success = await view.close()`

Resolves to: `<Boolean>`

Close the view.

### `const success = await view.show()`

Resolves to: `<Boolean>`

Show the view.

### `const success = await view.hide()`

Resolves to: `<Boolean>`

Hide the view.

### `const success = await view.focus()`

Resolves to: `<Boolean>`

Focus the view.

### `const success = await view.blur()`

Resolves to: `<Boolean>`

Blur the view.

### `await view.send(...args)`

Send arguments to the view. They will be serialized with `JSON.stringify`.

### `const dimensions = await view.dimensions()`

Resolves to: `{x <Integer>, y <Integer>, width <Integer>, height <Integer>} | null`.

The height, width, horizontal (`x`), vertical (`y`) position of the window relative to the screen.

All units are (pixels)

If the Window is closed this will resolve to `null`.

**References**

* [await view.dimensions(options)](#await-viewdimensionsoptions-object)

### `await view.dimensions(options <Object>)`

```js
const view = new Pear.View('./some.html', {
  x: 10,
  y: 450,
  width: 300,
  height: 350
})

await view.open()
await new Promise((resolve) => setTimeout(resolve, 1000))

await view.dimensions({
  x: 20,
  y: 50,
  width: 550,
  height: 300
})
```

Sets the dimensions of the view.

**Options**

* `x <Integer>` - the horizontal position of left side of the window (pixels)
* `y <Integer>` - the vertical position of the top of the window (pixels)
* `width <Integer>` - the width of the window (pixels)
* `height <Integer>` - the height of the window (pixels)


**References**

* [const dimensions = await view.dimensions()](#const-dimensions--await-viewdimensions)

### `const visible = await view.isVisible()`

Resolves to: `<Boolean>`

Whether the view is visible.

### `const closed = await view.isClosed()`

Resolves to: `<Boolean>`

Whether the view is closed.

### `const { self } = Pear.Window`  `const { self } = Pear.View`

### `const success = await self.focus()`

Resolves to: `<Boolean>`

Focus current view or window.

### `const success = await self.blur()`

Resolves to: `<Boolean>`

Blur current view or window.

### `const success = await self.show()`

Resolves to: `<Boolean>`

Show current view or window.

### `const success = await self.hide()`

Resolves to: `<Boolean>`

Hide current view or window.

### `const success = await self.minimize()`

Resolves to: `<Boolean>`

Minimize current window.

Throws a `TypeError` if `self` is a view.

### `const success = await self.maximize()`

Resolves to: `<Boolean>`

Maximize current window.

Throws a `TypeError` if `self` is a view.

### `const success = await self.restore()`

Resolves to: `<Boolean>`

Unmaximize/unminimize the current window if it is currently maximized/minimized.

Throws a `TypeError` if `self` is a view.


### `const success = await self.close()`

Resolves to: `<Boolean>`

Closes the current view or window.


### `const isVisible = await self.isVisible()`

Resolves to: `<Boolean>`

Whether the current window or view is visible.

### `const isMaximized = await self.isMaximized()`
Resolves to: `<Boolean>`

Whether the current window is maximized. Throws a `TypeError` if `self` is a view.


### `const isMinimized = await self.isMinimized()`

Resolves to: `<Boolean>`

Whether the current window is minimized. Throws a `TypeError` if `self` is a view.

### `const { parent } = Pear.Window`  `const { parent } = Pear.View`

### `parent.on[ce]('message', (...args) => { })`
### `for await (const [ ...args ] of parent)`

Receive a message from the parent window or view. The received `args` array is deserialized via `JSON.parse`.

### `await parent.send(...args)`

Send arguments to the parent view or window. They will be serialized with `JSON.stringify`.


### `const success = await parent.focus()`

Resolves to: `<Boolean>`

Focus parent view or window.

### `const success = await parent.blur()`

Resolves to: `<Boolean>`

Blur parent view or window.

### `const success = await parent.show()`

Resolves to: `<Boolean>`

Show parent view or window.

### `const success = await parent.hide()`

Resolves to: `<Boolean>`

Hide parent view or window.

### `const success = await parent.minimize()`

Resolves to: `<Boolean>`

Minimize parent window.

Throws a `TypeError` if `parent` is a view.

### `const success = await parent.maximize()`

Resolves to: `<Boolean>`

Maximize parent window.

Throws a `TypeError` if `parent` is a view.

### `const success = await parent.restore()`

Resolves to: `<Boolean>`

Unmaximize/unminimize the parent window if it is currently maximized/minimized.

Throws a `TypeError` if `parent` is a view.

### `const success = await parent.close()`

Resolves to: `<Boolean>`

Closes the parent view or window.

### `const isVisible = await parent.isVisible()`

Resolves to: `<Boolean>`

Whether the parent window or view is visible.

### `const isMaximized = await parent.isMaximized()`
Resolves to: `<Boolean>`

Whether the parent window is maximized. Throws a `TypeError` if `parent` is a view.


### `const isMinimized = await parent.isMinimized()`

Resolves to: `<Boolean>`

Whether the parent window is minimized. Throws a `TypeError` if `parent` is a view.


## Web APIs

Most [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) will work as-is.

This section details deviations in behavior from and notable aspects of Web APIs as they relate to Pear.

### `window.open`

The [`window.open`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) Web API function will ignore all arguments except for the URL parameter.

In browsers, `window.open` opens a new browser window. The opened window belongs to the same browser from which `window.open` is called.

In Pear, `window.open` loads the URL in the **default system browser**. It does *not* create a new application window (use `Pear.Window` to create application windows).

Therefore Pear's `window.open` only supports a single URL argument. The `target` and `windowFeatures` parameters that browsers support are discarded.

### Scripts and Modules

Like browsers, there is no support for CommonJS (e.g. the `require` function as used by Node.js is not supported in Pear Applications).

Like browsers, there is support for native EcmaScript Modules (ESM). A JavaScript Script has no module capabilities. A JavaScript Module has ESM capabilities.

Use `<script type="module" src="path/to/my-file.js">` to load a JavaScript Module.

Use `<script src="path/to/my-file.js">` to load a JavaScript Script.

# Command Line Interface (CLI) 

<mark style="background-color: #8484ff;">**experimental**</mark>

The Command Line Interface is the primary interface for Pear Development.

## `pear init [flags] <link|type=desktop> [dir]`

Create initial project files.

Template Types: desktop, terminal, terminal-node

> Default Project directory path is `.`

Template can also be initialized from a pear:// link, the template should contain a `_template.json` file. This file defines the prompts which are converted to locals that are injected into the template.

```
--yes|-y                  Autoselect all defaults
--type|-t=type            Template type. Overrides <link|type>
--force|-f                Force overwrite existing files
--with|-w=name            Additional functionality. Available: node
--no-ask                  Suppress permissions dialogs
--help|-h                 Show help
```
  
## `pear dev [flags] [dir] [...app-args]`

Run a project in development mode from disk.

> `pear dev` has been deprecated, use `pear run --dev` instead.

Alias for: `pear run --dev <dir>`

```
--link=url          Simulate deep-link click open
--store|-s=path     Set the Application Storage path
--tmp-store|-t      Automatic new tmp folder as store path
```  
## `pear stage <channel|link> [dir]`

Synchronize local changes to channel or key.

Channel name must be specified on first stage, in order to generate the initial key. This key is unique to the combination of the application name, the channel name and the device's unique corestore key. This means the key does not change after the first time the channel is staged.

Outputs diff information and project link.

Each time new changes are staged, the length for the channel / link will update, hence updating the version. This change can be replicated to any peer who know the link and is connected. If they run `pear info <link>`, they will see the `length` update even if the application is not being seeded. Connections can potentially linger after seeding an application but will eventually close.

```
  --json                      Newline delimited JSON output
  --dry-run|-d                Execute a stage without writing
  --ignore <list>             Comma separated file path ignore list
  --truncate <n>              Advanced. Truncate to version length n
  --name                      Advanced. Override app name
  --no-ask                    Suppress permissions dialogs
  --help|-h                   Show help
```
  
## `pear seed <channel|link> [dir]`

Seed project or reseed key.

Specify channel or link to seed a project or a remote link to reseed.

Seeding will sparsely replicate the application. This means the entire history of the channel or link is available, but most likely only the most recent version will be replicated. For more info, read ["Lazy loading large files & sparse replication"](./guides/sharing-a-pear-app#lazy-loading-large-files-and-sparse-replication) section in the "Sharing a Pear Application" guide.

```
  --json                    Newline delimited JSON output
  --name                    Advanced. Override app name
  --verbose|-v              Additional output
  --no-ask                  Suppress permissions dialogs
  --help|-h                 Show help
```
  
## `pear run [flags] <link|dir> [...app-args]`

Run an application from a link or dir.

|       |                                                   |
|-------|---------------------------------------------------|
| link  | `pear://<key>`  \| `pear://<alias>`                |
| dir   | `file://<absolute-path>` \| `<absolute-path>` \| `<relative-path>` |


```
  --dev|-d                       Enable --devtools & --updates-diff
  --devtools                     Open devtools with application [Desktop]
  --updates-diff                 Enable diff computation for Pear.updates
  --no-updates                   Disable updates firing via Pear.updates
  --link=url                     Simulate deep-link click open
  --store|-s=path                Set the Application Storage path
  --tmp-store|-t                 Automatic new tmp folder as store path
  --links <kvs>                  Override configured links with comma-separated key-values
  --chrome-webrtc-internals      Enable chrome://webrtc-internals
  --unsafe-clear-app-storage     Clear app storage
  --appling=path                 Set application shell path
  --checkout=n                   Run a checkout, n is version length
  --checkout=release             Run checkout from marked released length
  --checkout=staged              Run checkout from latest version length
  --detached                     Wakeup existing app or run detached
  --no-ask                       Suppress permissions dialogs
  --help|-h                      Show help
```

### Examples 

```
pear run pear://u6c6it1hhb5serppr3tghdm96j1gprtesygejzhmhnk5xsse8kmy
```

```
pear run -s /tmp/app-storage path/to/an-app-folder some --app args
```

```
pear run -t file://path/to/an-app-folder --some app --args
```

```
pear run pear://keet
```

## `pear release <channel|link> [dir]`

Set production release version.

Set the release pointer against a version (default latest).

Use this to indicate production release points. Once a channel or link has been released (setting a pointer for a given version) running the application (via `pear run <link>`) will load the application at the released version even if more changes were staged.

```
  --json                   Newline delimited JSON output
  --checkout=n|current     Set a custom release length (version)
  --help|-h                Show help
```

### Release rollbacks

Releases can generally be rolled back in one of two ways. First by updating the release pointer to a previous length using the `--checkout` flag. For example:

- Release "A" for channel `production` was at length `500`
- Release "B" for channel `production` was at length `505`

The release can be rolled back to "A" (aka length `500`) via the following command:

```console
pear release --checkout 500 production
```

This method doesn't add any file changes so will not show update diffs from the previous release version.

The second approach is dumping the files from the previous version and staging and rereleasing the new version. This appends file changes so is heavier than just changing the release pointer, but shows update diffs and fits the [dump-stage-release strategy](../../guide/releasing-a-pear-app.md) approach since updates to the `production` channel are applied by dumping from another channel or link.

## `pear info [link|channel]`

Read project information.

Supply a link or channel to view application information.

Supply no argument to view platform information.

```
  --changelog               View changelog only
  --full-changelog          Full record of changes
  --metadata                View metadata only
  --key                     View link only
  --json                    Newline delimited JSON output
  --no-ask                  Suppress permissions dialogs
  --help|-h                 Show help
```
  
## `pear dump [flags] <link> <dir>`

Synchronize files from link to dir.

> To dump to stdout use `-` in place of `<dir>`

`<link>` can contain a path portion to dump a subset of the files for the Pear application. For example, to dump only the `CHANGELOG.md` from Keet into a `dump-dir` directory run:

```
pear dump pear://keet/CHANGELOG.md dump-dir/
```

```
  --dry-run|-d              Execute a dump without writing
  --checkout=n              Dump from specified checkout, n is version length
  --json                    Newline delimited JSON output
  --force|-f                Force overwrite existing files
  --no-ask                  Suppress permissions dialogs
  --help|-h                 Show help
```
  
## `pear touch [flags] [channel]`

Create Pear link

Creates a Pear Link using channel name if provided or else a randomly generated channel name.

This command is useful for creating links for automations that use `pear stage <link>`, `pear release <link>` or `pear seed <link>`.

```
  --json      Newline delimited JSON output
  --help|-h   Show help
```

## `pear sidecar`

The Pear Sidecar is a local-running HTTP and IPC server which
provides access to corestores.

This command instructs any existing sidecar process to shutdown
and then becomes the sidecar.

```
  --mem                 memory mode: RAM corestore
  --log-level <level>   Level to log at. 0,1,2,3 (OFF,ERR,INF,TRC)
  --log-labels <list>   Labels to log (internal, always logged)
  --log-fields <list>   Show/hide: date,time,h:level,h:label,h:delta
  --log-stacks          Add a stack trace to each log message
  --log                 Label:sidecar Level:2 Fields: h:level,h:label
  --key <key>           Advanced. Switch release lines
  --help|-h             Show help
```

## `pear versions`

Output version information.

```
--json        Single JSON object
--help|-h     Show help
```

## `pear shift [flags] <source> <destination>`

Move user application storage between applications.

`<source>` and `<destination>` are links.

```
--force     Overwrite existing application storage if present
--json      Newline delimited JSON output
```

## `pear reset [flags] <link>`

Advanced. Reset an application to initial state

Clears application storage for a given application link.

WARNING: Confirmation will be requested as the storage will be deleted permanently and cannot be recovered. Use with caution.

```
--json      Newline delimited JSON output
--help|-h   Show help
```

## `pear gc [flags] [command]`

Perform garbage collection and remove unused resources.

| Commands      |           Description                                        |
|-------|---------------------------------------------------|
| releases   | Clear inactive releases                       |
| sidecars   |  Clear running sidecars                       |

```
  --json        Newline delimited JSON output
  --help|-h     Show help
```

## `pear data [flags] [command]`

View database contents.

The database contains metadata stored on this device used by the Pear runtime.

| Commands   | Description                |
| ---------- | -------------------------- |
| apps       | Installed apps             |
| dht        | DHT known-nodes cache      |
| gc         | Garbage collection records |

```
--secrets   Show sensitive information, i.e. encryption-keys
--json      Newline delimited JSON output
--help|-h   Show help
```

### `pear data apps [flags] [link]`

List installed apps, filtered by `[link]` if provided.

# Configuration

<mark style="background-color: #8484ff;">**experimental**</mark>

## The `package.json` file

A Pear project **must** have a `package.json` file and a main entry file.

The `package.json` file **must** have either a `name` property or `pear` object with a `name` property.

The `package.json` `name` field must be lowercase and one word, and may contain letters, numbers, hyphens (`-`), underscores (`_`), forward slashes (`/`) and asperands (`@`).

The `package.json` file may also contain a `main` field, which typically should point to an HTML file. If omitted, `index.html` or `index.js` is the default entry file depending on application type.

Any other fields (such as `dependencies`) may also be present in the `package.json` file.

The `package.json` `pear` object contains application configuration and is exposed via the API as `pear.config.options`.

Pear versioning is automatic. The `package.json` file does **not** require a version field, the version field will be ignored.

## The `package.json` `pear` field.

### `pear.name <String>`

The name of the application. Overrides `package.json` `name`.

### `pear.gui <Object>`

Graphical User Interface configuration options.

#### `pear.gui[platform] <Object>`

Platform specific options can be set by nesting options under the platform name. For example the following sets the macOS version to not be resizable:

```json
{
  "pear": {
    "gui": {
      "darwin": {
        "resizable": false
      }
    }
  }
}
```

The following `platform`s are supported:

- `darwin`
- `linux`
- `win32`

### `pear.gui.name <String>`

Override the app name which otherwise defaults to [name](#pear.name-less-than-string-greater-than).

#### `pear.gui.width <Number>`

Window width (pixels).

#### `pear.gui.height <Number>`

Window height (pixels).

#### `pear.gui.x <Number>`

Horizontal window position (pixels).

#### `pear.gui.y <Number>`

Vertical window position (pixels).

#### `pear.gui.minWidth <Number>`

Window minimum width (pixels).

#### `pear.gui.minHeight <Number>`

Window minimum height (pixels).

#### `pear.gui.maxWidth <Number>`

Window maximum width (pixels).

#### `pear.gui.maxHeight <Number>`

Window maximum height (pixels).

#### `pear.gui.center <Boolean>` (default: `false`)

Center window.

#### `pear.gui.resizable <Boolean>` (default: `true`)

Window resizability.

#### `pear.gui.movable <Boolean>` (default: `true`)

Window movability.

#### `pear.gui.minimizable <Boolean>` (default: `true`)

Window minimizability.

#### `pear.gui.maximizable <Boolean>` (default: `true`)

Window maximizability.

#### `pear.gui.closable <Boolean>` (default: `true`)

Window closability.

#### `pear.gui.focusable <Boolean>` (default: `true`)

Window focusability.

#### `pear.gui.alwaysOnTop <Boolean>` (default: `false`)

Set window to always be on top.

#### `pear.gui.fullscreen <Boolean>` (default: `false`)

Set window to fullscreen on start.

#### `pear.gui.kiosk <Boolean>` (default: `false`)

Set window to enter kiosk mode on start.

#### `pear.gui.autoHideMenuBar <Boolean>` (default: `false`)

Hide menu bar unless Alt key is pressed (Linux, Windows).

#### `pear.gui.hasShadow <Boolean>` (default: `true`)

Window shadow.

#### `pear.gui.opacity <Number>` (default: `1`)

Set window opacity (0.0 - 1.0) (Windows, macOS).

#### `pear.gui.transparent <Boolean>` (default: `false`)

Enable transparency. Must be set for opacity to work.

#### `pear.gui.hideable <Boolean>` (default: `false`)

Keep app running when all windows are closed.

WARNING: Linux tray support varies which can cause scenarios where the application's tray doesn't work and closing the app will be hidden and inaccessible. Using a tray and `hideable` on Linux is not recommended.

#### `pear.gui.backgroundColor <String>` (default: "#000" non-transparent, "#00000000" transparent)

Background color (Hex, RGB, RGBA, HSL, HSLA, CSS color).

###  `pear.links <Object|Array>` 

Storing and managing Pear application links and domains.

`links` can be an object or an array. If it's an object, naming the key makes it easy to reference from [`Pear.config.links`](./api.md#pearconfiglinks-objectarray)

By default in Pear apps, only requests to the sidecar host (127.0.0.1:9342) are allowed. Additional hosts and trusted keys must be added in `pear.links` to allow access.

Any Pear links that the app trusts to run (eg as a worker) must be added and any http(s) domains that the app wants to access must also be added, including localhost.

Adding `"https://*"` or `"http://*"` will trust all domains based on their respective protocol.

Note that this is only for requests that the Pear app makes itself such as loading assets.

```json
{
  // ...
  "pear": {
    // accessed at runtime using Pear.config.links[index] eg. Pear.config.links[0] for pear://somePearKey
    "links": [ 
      "pear://somePearKey", 
      "https://example.com" 
    ]
    // OR
    // accessed at runtime using Pear.config.links.name eg. Pear.config.links.myWorker for myWorker
    "links": {
      "myWorker": "pear://somePearKey",
      "host": "https://example.com"
    }
  }
}
```

### `pear.userAgent <string>` (default: `Pear ${Pear.#state.id}`)

User Agent to use when Pear makes web requests. Pear will use the default `userAgent` when making requests to the Sidecar.

Desktop Applications only.

### `pear.stage <Object>`

Staging configuration options.

#### `pear.stage.entrypoints <Array>`

An array of entrypoint paths as staging start-points in addition to (deduped) main entry point.

#### `pear.stage.prefetch <Array>`

An array of file paths to the warmup during staging in addition to all entry points. This is useful for loading assets needed to start the application quickly.

#### `pear.stage.ignore <Array>`

An array of file paths to ignore relative to `package.json` file.

# Troubleshooting Applications

The article aims to help troubleshooting confusing scenarios while developing Pear applications.

## `Pear.teardown` Callback Fires But Worker Keeps Running

The `Pear.teardown(cb)` callback is triggered whenever the Pear app start to unload. If it is not exiting, then something is keeping the applications event loop running. A common cause of this is not cleaning up the [worker pipe](./api.md#const-pipe-pear.worker.pipe) by calling `pipe.end()` to gracefully end the writable part of the stream.

## `pear run` Exits Without Running the Application

If after debugging an application it seems the issue is happening in the Pear platform itself, try the following steps to debug the issue:

1. Run pear app with logs enabled `pear --log run .`.
2. If no helpful info, run sidecar with logs `pear sidecar --log-level 3`.  
   If the `pear sidecar` stops after printing `Closing any current Sidecar clients...`, then the current Pear Sidecar process is hanging. Check the next steps for forensics that might explain why, but then kill existing Pear processes.  
   _Note_ that this will close any running pear applications such as Keet.
3. If still no helpful info, check that there are still pear processes running via `ps aux | grep pear` or equivalent method for finding processes by name.
4. Finally check the crash logs in platform's `current` directory.
   - For sidecar: `sidecar.crash.log`
   - For electron: `electron-main.crash.log`
   - For pear cli: `cli.crash.log`

## You get a `Error: While lock File .. Resource temporarily unavailable`

The Error:
```
Uncaught (in promise) Error: While lock file: ./pear/app-storage/by-random/.../db/LOCK: Resource temporarily unavailable
    at Object.onopen (pear://dev/node_modules/rocksdb-native/lib/state.js:155:27)
```

Means the application is trying to open a RockDB instance on files currently
locked by another process. This means either:

- An application is trying to open the same storage twice.  
  If using `Corestore`, it is recommended to only create only one instance and
  reusing it.
- There are multiple of processes running for the same application.

## Joining a Hyperswarm Topic takes a long time

There can be many reasons but here are a few common reasons:

- Random NAT networks can take longer as another node may be needed to facility the connection.
- Not destroying the hyperswarm instance in the `Pear.teardown()` callback so
  Hyperswarm can unannounce and clean up the DHT.  
  It's recommended to clean up the hyperswarm instance with `swarm.destroy()` before exiting the application. This prevents conflicting records in the DHT for the application's peer which cause it take longer to join a topic.  

  Example:
  ```js
  Pear.teardown(() => swarm.destroy())
  ```

  Make sure to unregister the teardown callback if the swarm is destroyed
  prematurely.

- A firewall is blocking the traffic.  
  Please let Holepunch know if this is the case.

## Running Bare modules in Pear Desktop Applications

For now this is not possible because Pear desktop applications run in Electron which uses Node.js integration. Pear v2 will unify running Pear applications in Bare with Electron as a UI module. This way the main application will be defined as a "Pear-end" process that can be shared across different versions of the application such as CLI, GUI, mobile, etc.

Running a Bare module will give you one of the following errors:

- `Uncaught TypeError: require.addon is not a function`
- `Uncaught ReferenceError: Bare is not defined`

To support both Bare and Node.js compatible modules, import maps can be defined
so a module `fs` can be resolved to `bare-fs` on Bare and `fs` on Node.js.

```
{
  "imports": {
    "fs": {
      "bare": "bare-fs",
      "default": "fs"
    },
    "fs/*": {
      "bare": "bare-fs/*",
      "default": "fs/*"
    }
  },
  "dependencies": {
    "bare-fs": "^2.1.5"
  }
}
```

See [`bare-node`'s "Import maps"](https://github.com/holepunchto/bare-node?tab=readme-ov-file#import-maps) for more details.
  


# Creating a Pear Init Template

This guides describes how to create a [`pear init`](../reference/pear/cli.md#pear-init-flags-linktypedesktop-dir) template which can be used to initialize a new Pear application. 

## Folder Structure

A template can be initialized from a local directory or P2P (Peer-to-Peer) using a `pear://` link.

A template folder should contain : 
* a `_template.json` file which describes the prompt structure.
* a `package.json` file which contains config parameters to be populated from the prompts.

> Note that optionally, if the `package.json` of the parent contains a `main` field it should specify a `__main__` file and a `main` parameter in the `_template.json` file. 

Create a template folder called `example` in the project directory, inside the folder create the new files. 

```bash
mkdir example
cd example
touch index.html package.json _template.json
```

## Template Structure 

Let's define the prompt structure in `_template.json`

### Parameter Object

Each parameter object in the `params` array defines a specific input parameter. 

```json
{
  "params": [
      {
        "name": "name",
        "prompt": "name"
      }
    // parameter objects....
  ]
}
```

Here are the possible fields for a parameter object:

### Required Fields

- `name` (string): The identifier for the parameter. This should be unique within the template.
- `prompt` (string): The text prompt that will be displayed to the user when asking for input for this parameter.

### Optional Fields

- `default` (any): The default value for the parameter if no input is provided.
- `validation` (string): A JavaScript function as a string that validates the input. It should return `true` for valid input and `false` for invalid input.
- `msg` (string): An error message to display if the validation fails.

### Example

Here's an example of a complete parameter object:

```json
{
  "name": "main",
  "default": "index.html",
  "prompt": "Enter the main HTML file name",
  "validation": "(value) => value.endsWith('.html')",
  "msg": "must have an .html file extension"
}
```

This parameter:
- Has the name "main"
- Defaults to "index.html" if no input is provided
- Prompts the user to enter the main HTML file name
- Validates that the input ends with ".html"
- Displays an error message if the validation fails

Replace the contents of `_template.json` with 

```json
{
  "params": [
    {
      "name": "name",
      "prompt": "name"
    },
    {
      "name": "main",
      "default": "index.html",
      "prompt": "main",
      "validation": "(value) => value.endsWith('.html')",
      "msg": "must have an .html file extension"
    },
    {
      "name": "height",
      "validation": "(value) => Number.isInteger(+value)",
      "prompt": "height",
      "msg": "must be an integer"
    },
    {
      "name": "width",
      "validation": "(value) => Number.isInteger(+value)",
      "prompt": "width",
      "msg": "must be an integer"
    },
    {
      "name": "license",
      "default": "Apache-2.0",
      "prompt": "license"
    }
  ]
}
```

## App Content

Replace the contents of `index.html` file with :

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body > h1:nth-of-type(1) {
      cursor: pointer
    }

    body {
      --title-bar-height: 42px;
      padding-top: var(--title-bar-height);
      background-color: #001601;
      font-family: monospace;
    }

    h1 {
      color: antiquewhite;
    }

    #bar {
      background: rgba(55, 60, 72, 0.6);
      backdrop-filter: blur(64px);
      -webkit-app-region: drag;
      height: var(--title-bar-height);
      padding: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      color: #FFF;
      white-space: nowrap;
      box-sizing: border-box;
      position: fixed;
      z-index: 2;
      width: 100%;
      left: 0;
      top: 0;
    }

    pear-ctrl[data-platform=darwin] {
      margin-top: 18px;
      margin-left: 12px;
    }
  </style>
</head>
<body>
  <div id="bar"><pear-ctrl></pear-ctrl></div>
  <h1>Initialized from a Pear Template</h1>
</body>
</html>
```

Temporarily set the contents of `package.json` to:

```json
{
  "pear": {
    "name": "pear-init-template-tutorial",
    "type": "desktop"
  }
}
```

This is the minimal requirements for a Pear Application `package.json` to run.
This will allow us to test the template's `index.html` as a pear desktop
app.

Run the application using:

```bash
pear run --dev .
```

![Layout of the app](../assets/pear-init.png)

## Config file

Replace the contents of `package.json` with :

```json
{
  "name": "__name__",
  "pear": {
    "name": "__name__",
    "type": "desktop",
    "gui": {
      "backgroundColor": "#1F2430",
      "height": "__height__",
      "width": "__width__"
    }
  },
  "type": "module",
  "license": "__license__",
  "scripts": {
    "dev": "pear run -d .",
    "test": "brittle test/*.test.js"
  },
  "devDependencies": {
    "brittle": "^3.0.0",
    "pear-interface": "^1.0.0"
  }
}
```
> Note that any field that is supposed to be populated from the prompts has the value surrounded by double underscores i.e `__fieldName__`

## Initializing a new project

Go to a new project directory and use `pear init` to initialize from the created template.

Run the following command :

```bash
pear init [dir]
```

Here replace `[dir]` with the local template directory path. This can also be a `pear://` link.

This should now initialize a new Pear project from the created template.

# Debugging A Pear Terminal Application

Debugging Pear Terminal Applications is different than debugging Desktop Applications because they do not come with a UI. Instead a few steps are needed.

Use [Pear Inspect](https://github.com/holepunchto/pear-inspect) together with the Pear Runtime Desktop and use any tool that supports DevTools like Chrome.

## Step 1. Install pear-inspect

First install `pear-inspect`:

```
npm install pear-inspect
```

## Step 2. Add Code

This code should run as the first thing in the application:

``` js
if (Pear.config.dev) {
  const { Inspector } = await import('pear-inspect')
  const inspector = await new Inspector()
  const key = await inspector.enable()
  console.log(`Debug with pear://runtime/devtools/${key.toString('hex')}`)
}
```

## Step 3. Run In Dev Mode

As the code specifies, `pear-inspect` is only running when in dev mode, so start the app:

```
pear run --dev .
```

The application will output something similar to:

```
Debug with pear://runtime/devtools/a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2
```

## Step 4. Add to Pear Runtime Desktop

Open the Pear Runtime Desktop app by running `pear run pear://runtime`. Then go to `Developer Tooling` and paste in the key.

Note that the key can also be sent to someone else and they can debug the app remotely.

## Step 5. Open in Chrome

Click on `Open in Chrome` or copy the link into a tool that support DevTools.

# Getting Started with Pear

Pear Runtime can be installed via [npm](https://www.npmjs.com/).

Since `npm` (or equivalent package manager) is needed to install application dependencies this guide will walk through installing `pear` with `npm`.

{% embed url="https://www.youtube.com/watch?v=y2G97xz78gU" %} Build with Pear - Episode 01: Developing with Pear {% embeded %}

## Requirements

Pear runs on Windows, Mac and Linux.

The `pear` CLI can be installed from [npm](https://www.npmjs.com/), which comes with [`node`](https://nodejs.org/en/about).

The `npm` package manager can also be used to install application dependencies later on.

On MacOS and Linux, we recommend installing `node` using [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating)

On Windows we recommend installing `node` with [`nvs`](https://github.com/jasongin/nvs#setup).

> The Pear Runtime does not rely on `node`, `node` is only needed to install and run the `npm` package manager.

## Setup

To install Pear run the following command:

```sh
npm i -g pear
```

To complete the setup, run the `pear` command.

```
pear
```

If a Pear application, such as [Keet](https://keet.io), is already installed then the Pear platform is already available. In this case, running `pear` should show help output.

If not, the first run of `pear` will fetch the platform from peers, after which running `pear` again should output help information.

To check that Pear is fully working, try the following command:

```
pear run pear://keet
```

Pear loads applications from peers, so this command should open [Keet](https://keet.io) whether or not it was downloaded and installed beforehand.


## Next

* [Starting a Pear Desktop Project](./starting-a-pear-desktop-project.md)
* [Starting a Pear Terminal Project](./starting-a-pear-terminal-project.md)

# Making a Pear Desktop Application

This guide demonstrates how to build a peer-to-peer chat application.

It continues where [Starting a Pear Desktop Project](./starting-a-pear-desktop-project.md) left off.

{% embed url="https://www.youtube.com/watch?v=y2G97xz78gU" %} Build with Pear - Episode 01: Developing with Pear {% embeded %}

## Step 1. HTML Structure and CSS Styles

The project folder should contain:

- `package.json`
- `index.html`
- `app.js`
- `test/index.test.js`

Start by defining the app's layout in `index.html`:

``` html
<!DOCTYPE html>
<html>
  <head>
    <style>
      pear-ctrl[data-platform="darwin"] { margin-top: 12px; margin-left: 10px; }

      #titlebar {
        -webkit-app-region: drag;
        height: 30px;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: #B0D94413;
        filter: drop-shadow(2px 10px 6px #888);
      }

      button, input {
        all: unset;
        border: 1px ridge #B0D944;
        background: #000;
        color: #B0D944;
        padding: .45rem;
        font-family: monospace;
        font-size: 1rem;
        line-height: 1rem;
      }

      body {
        background-color: #001601;
        font-family: monospace;
        margin: 0;
        padding: 0;
      }

      main {
        display: flex;
        height: 100vh;
        color: white;
        justify-content: center;
        margin: 0;
        padding: 0;
      }

      .hidden {
        display: none !important;
      }

      #or {
        margin: 1.5rem auto;
      }

      #setup {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      #loading {
        align-self: center;
      }

      #chat {
        display: flex;
        flex-direction: column;
        width: 100vw;
        padding: .75rem;
      }

      #header {
        margin-top: 2.2rem;
        margin-bottom: 0.75rem;
      }

      #details {
        display: flex;
        justify-content: space-between;
      }

      #messages {
        flex: 1;
        font-family: 'Courier New', Courier, monospace;
        overflow-y: scroll;
      }

      #message-form {
        display: flex;
      }

      #message {
        flex: 1;
      }
    </style>
    <script type='module' src='./app.js'></script>
  </head>
  <body>
    <div id="titlebar">
      <pear-ctrl></pear-ctrl>
    </div>
    <main>
      <div id="setup">
        <div>
          <button id="create-chat-room">Create</button>
        </div>
        <div id="or">
          - or -
        </div>
        <form id="join-form">
          <button type="submit" id="join-chat-room">Join</button>
          <input required id="join-chat-room-topic" type="text" placeholder="Chat room Topic" />
        </form>
      </div>
      <div id="loading" class="hidden">Loading ...</div>
      <div id="chat" class="hidden">
        <div id="header">
          <div id="details">
            <div>
              Topic: <span id="chat-room-topic"></span>
            </div>
            <div>
              Peers: <span id="peers-count">0</span>
            </div>
          </div>
        </div>
        <div id="messages"></div>
        <form id="message-form">
          <input id="message" type="text" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </main>
  </body>
</html>
```

**Note**: To make the `<pear-ctrl>` element draggable in Pear applications, wrap it in another element that uses the following CSS property: 
```css
-webkit-app-region : drag;
``` 
This non-standard CSS property tells the application that this element should act as a draggable region for the entire window.

Running `pear run --dev .` should show

![Layout of the app](../assets/chat-app-3.png)


## Step 2. Module dependencies

**Note**: Close the app before installing dependencies. If dependencies are installed while the app is running, an error is thrown.

Install the development dependencies using:
```
npm install
```
This will install the following: 
- [pear-interface](https://github.com/holepunchto/pear-interface) for documentation and auto-completion inside editor.
- [brittle](https://github.com/holepunchto/brittle) a TAP framework for testing.

The app uses these modules:

- [hyperswarm](https://www.npmjs.com/package/hyperswarm) to connect peers on a "topic".
- [hypercore-crypto](https://www.npmjs.com/package/hypercore-crypto) for basic cryptography.
- [b4a](https://www.npmjs.com/package/b4a) to manipulate buffers.

Install the dependencies with:

```
npm install hyperswarm hypercore-crypto b4a
```


## Step 3. JavaScript

Replace `app.js` with

``` js

// For interactive documentation and code auto-completion in editor
/** @typedef {import('pear-interface')} */ 

/* global Pear */
import Hyperswarm from 'hyperswarm'   // Module for P2P networking and connecting peers
import crypto from 'hypercore-crypto' // Cryptographic functions for generating the key in app
import b4a from 'b4a'                 // Module for buffer-to-string and vice-versa conversions 
const { teardown, updates } = Pear    // Functions for cleanup and updates

const swarm = new Hyperswarm()

// Unannounce the public key before exiting the process
// (This is not a requirement, but it helps avoid DHT pollution)
teardown(() => swarm.destroy())

// Enable automatic reloading for the app
// This is optional but helpful during production
updates(() => Pear.reload())

// When there's a new connection, listen for new messages, and add them to the UI
swarm.on('connection', (peer) => {
  // name incoming peers after first 6 chars of its public key as hex
  const name = b4a.toString(peer.remotePublicKey, 'hex').substr(0, 6)
  peer.on('data', message => onMessageAdded(name, message))
  peer.on('error', e => console.log(`Connection error: ${e}`))
})

// When there's updates to the swarm, update the peers count
swarm.on('update', () => {
  document.querySelector('#peers-count').textContent = swarm.connections.size
})

document.querySelector('#create-chat-room').addEventListener('click', createChatRoom)
document.querySelector('#join-form').addEventListener('submit', joinChatRoom)
document.querySelector('#message-form').addEventListener('submit', sendMessage)

async function createChatRoom() {
  // Generate a new random topic (32 byte string)
  const topicBuffer = crypto.randomBytes(32)
  joinSwarm(topicBuffer)
}

async function joinChatRoom (e) {
  e.preventDefault()
  const topicStr = document.querySelector('#join-chat-room-topic').value
  const topicBuffer = b4a.from(topicStr, 'hex')
  joinSwarm(topicBuffer)
}

async function joinSwarm (topicBuffer) {
  document.querySelector('#setup').classList.add('hidden')
  document.querySelector('#loading').classList.remove('hidden')

  // Join the swarm with the topic. Setting both client/server to true means that this app can act as both.
  const discovery = swarm.join(topicBuffer, { client: true, server: true })
  await discovery.flushed()

  const topic = b4a.toString(topicBuffer, 'hex')
  document.querySelector('#chat-room-topic').innerText = topic
  document.querySelector('#loading').classList.add('hidden')
  document.querySelector('#chat').classList.remove('hidden')
}

function sendMessage (e) {
  const message = document.querySelector('#message').value
  document.querySelector('#message').value = ''
  e.preventDefault()

  onMessageAdded('You', message)

  // Send the message to all peers (that you are connected to)
  const peers = [...swarm.connections]
  for (const peer of peers) peer.write(message)
}

// appends element to #messages element with content set to sender and message
function onMessageAdded (from, message) {
  const $div = document.createElement('div')
  $div.textContent = `<${from}> ${message}`
  document.querySelector('#messages').appendChild($div)
}
```

> Note that the `pear` dependency is used, even though it was not installed. This is the [Pear API](../reference/pear/api.md), available to any Pear project.


## Step 4. Chat

Open two app instances by running `pear run --dev .` in two terminals. 

In the first app, click on `Create`. A random topic will appear at the top.

Note that topics consist of 64 hexadecimal characters (32 bytes).

<p align="center">
  <img src="../assets/chat-app-4a.png" alt="The first app, with the topic">
</p>

Paste the topic into the second app, then click on `Join`.

<p align="center">
  <img src="../assets/chat-app-4b.png" alt="Second app, using topic from the first">
</p>

Once connected, messages can be sent between each chat application.

<p align="center">
  <img src="../assets/chat-app-5a.png" alt="View from the first app"> <img src="../assets/chat-app-5b.png" alt="View from the second app">
</p>

### Discussion

#### Chatting With Another Machine

The two application instances used Hyperswarm's distributed hash table (DHT) to connect with each other.

The DHT enables connections across different machines, so chatting with other people is also possible, as long as they run the same application.

One option is to copy the code, but it is also possible to distribute the application itself over the DHT. This is the topic of [Sharing a Pear Application](./sharing-a-pear-app.md).

#### Joining Topics VS Joining Servers

In a traditional client-server setup, the server is hosted at an IP address (or hostname) and a port, e.g. `http://localhost:3000`. This is what clients use to connect to the server.

The code in `app.js` contains the line `swarm.join(topicBuffer, { client: true, server: true })`.

`topicBuffer` is the invitation: anyone who knows this topic can join the room and message the other members.

Note that all members are equal: there is no separate client or server. If the room creator goes offline, or even deletes the room from their machine, the other members can continue chatting.

#### Frontend Frameworks

Any frontend framework can be used with Pear.

## Next

* [Starting a Pear Terminal Project](./starting-a-pear-terminal-project.md)
* [Sharing a Pear Application](./sharing-a-pear-app.md)

# Making a Pear Terminal Application

This guide demonstrates how to build a peer-to-peer chat application.

It continues where [Starting a Pear Terminal Project](./starting-a-pear-terminal-project.md) left off.

{% embed url="https://www.youtube.com/watch?v=UoGJ7PtAwtI" %} Build with Pear - Episode 04: Pear Terminal Applications {% embeded %}

## Step 1. Install modules

Install the development dependencies using:
```
npm install
```
This will install the following: 
- [pear-interface](https://github.com/holepunchto/pear-interface) for documentation and auto-completion inside editors.
- [brittle](https://github.com/holepunchto/brittle) a TAP framework for testing.

For the chat part of the app, the same modules are needed as in [Making a Pear Desktop Application](./making-a-pear-desktop-app.md), `hyperswarm`, `b4a` and  `hypercore-crypto`.

Pear runs on [`Bare`](https://github.com/holepunchto/bare), a lightweight JavaScript runtime which is similar to Node.js but comes with very few internal modules. Almost all Bare functionality comes from dependencies. Pear Terminal Applications are Bare applications so we will need `bare-readline` and `bare-tty` to read user input.


```
npm i bare-readline bare-tty bare-process hyperswarm b4a hypercore-crypto
```

## Step 2. JavaScript

Replace `index.js` with

``` js

// For interactive documentation and code auto-completion in editor
/** @typedef {import('pear-interface')} */ 

/* global Pear */
import Hyperswarm from 'hyperswarm'   // Module for P2P networking and connecting peers
import b4a from 'b4a'                 // Module for buffer-to-string and vice-versa conversions 
import crypto from 'hypercore-crypto' // Cryptographic functions for generating the key in app
import readline from 'bare-readline'  // Module for reading user input in terminal
import tty from 'bare-tty'            // Module to control terminal behavior
import process from 'bare-process'    // Process control for Bare


const { teardown, config, updates } = Pear    // Import configuration options, updates and cleanup functions from Pear
const key = config.args.pop()       // Retrieve a potential chat room key from command-line arguments
const shouldCreateSwarm = !key      // Flag to determine if a new chat room should be created
const swarm = new Hyperswarm()

// Unannounce the public key before exiting the process
// (This is not a requirement, but it helps avoid DHT pollution)
teardown(() => swarm.destroy())

// Enable automatic reloading for the app
// This is optional but helpful during production
updates(() => Pear.reload())

const rl = readline.createInterface({
  input: new tty.ReadStream(0),
  output: new tty.WriteStream(1)
})

// When there's a new connection, listen for new messages, and output them to the terminal
swarm.on('connection', peer => {
  const name = b4a.toString(peer.remotePublicKey, 'hex').substr(0, 6)
  console.log(`[info] New peer joined, ${name}`)
  peer.on('data', message => appendMessage({ name, message }))
  peer.on('error', e => console.log(`Connection error: ${e}`))
})

// When there's updates to the swarm, update the peers count
swarm.on('update', () => {
  console.log(`[info] Number of connections is now ${swarm.connections.size}`)
})

if (shouldCreateSwarm) {
  await createChatRoom()
} else {
  await joinChatRoom(key)
}

rl.input.setMode(tty.constants.MODE_RAW) // Enable raw input mode for efficient key reading
rl.on('data', line => {
  sendMessage(line)
  rl.prompt()
})
rl.prompt()

rl.on('close', () => {
  process.kill(process.pid, 'SIGINT')
})

async function createChatRoom () {
  // Generate a new random topic (32 byte string)
  const topicBuffer = crypto.randomBytes(32)
  // Create a new chat room for the topic
  await joinSwarm(topicBuffer)
  const topic = b4a.toString(topicBuffer, 'hex')
  console.log(`[info] Created new chat room: ${topic}`)
}

async function joinChatRoom (topicStr) {
  const topicBuffer = b4a.from(topicStr, 'hex')
  await joinSwarm(topicBuffer)
  console.log(`[info] Joined chat room`)
}

async function joinSwarm (topicBuffer) {
  // Join the swarm with the topic. Setting both client/server to true means that this app can act as both.
  const discovery = swarm.join(topicBuffer, { client: true, server: true })
  await discovery.flushed()
}

function sendMessage (message) {
  // Send the message to all peers (that you are connected to)
  const peers = [...swarm.connections]
  for (const peer of peers) peer.write(message)
}

function appendMessage ({ name, message }) {
  // Output chat msgs to terminal
  console.log(`[${name}] ${message}`)
}
```

## Step 3. Run in dev mode

To test this chat app, in one terminal run `pear run --dev .`

The app will output something similar to:

```
[info] Created new chat room: a1b2c35fbeb452bc900c5a1c00306e52319a3159317312f54fe5a246d634f51a
```

In another terminal use this key as input, `pear run --dev . a1b2c35fbeb452bc900c5a1c00306e52319a3159317312f54fe5a246d634f51a`

The app will output:

```
[info] Number of connections is now 0
[info] New peer joined, 6193ec
[info] Number of connections is now 1
[info] Joined chat room
```

Type something in one of the applications. Two Terminal Applications are now connected peer-to-peer.

## Next

* [Sharing a Pear Application](./sharing-a-pear-app.md)

# Starting a Pear Desktop Project

This section shows how to generate, configure, and develop a Pear desktop project, in preparation for [Making a Pear Desktop Application](./making-a-pear-desktop-app.md).

{% embed url="https://www.youtube.com/watch?v=y2G97xz78gU" %} Build with Pear - Episode 01: Developing with Pear {% embeded %}

## Step 1. Initialization

Use `pear init` to create a new Pear project.

```
mkdir chat
cd chat
pear init --yes
```

This creates the base project structure.

- `package.json`. App configuration. Notice the `pear` property.
- `index.html`. App entrypoint.
- `app.js`. Main code.
- `test/index.test.js`. Test skeleton.

## Step 2. Verify Everything Works

Use `pear run` to verify everything works as expected.

```
pear run --dev .
```

> A directory or link needs to be specified with `pear run`, here `.` denotes the current Project directory.

The app should open in development mode. In this mode developer tools are also opened.

![Running pear run --dev .](../assets/chat-app-1.png)

## Step 3. Automatic Reload

To enable automatic reloading, add the following lines to `app.js` :

```js
Pear.updates(() => Pear.reload())
```

Run the app again using:

```js
pear run --dev .
```

Now Pear watches project files. When they change, the app is automatically reloaded.

While keeping the `pear run --dev .` command running, open `index.html` in an editor.

Change `<h1>desktop</h1>` to `<h1>Hello world</h1>`.

The app should now show:

![Automatic reload](../assets/chat-app-2.png)

> Live reload with hot-module reloading is possible by using the `pear.watch` configuration and the [`pear.updates`](../reference/pear/api.md#pearupdateslistener-async-functionfunction) API. The [pear-hotmods](https://github.com/holepunchto/pear-hotmods) convenience module can also be used.

## Step 4. Configuration

Application configuration is under the `pear` property in `package.json`

Open `package.json` and update it to:

```
{
  ...
  "pear": {
    "gui": {
      "height": 400,
      "width": 700
    }
  }
  ...
}
```

Close the app and re-run `pear run --dev .` to see the changes, the initial window size is different now.

See the [Configuration Documentation](../reference/pear/configuration.md) for all options.


## Next

* [Making a Pear Desktop Application](./making-a-pear-desktop-app.md)

# Starting a Pear Terminal Project

{% embed url="https://www.youtube.com/watch?v=UoGJ7PtAwtI" %} Build with Pear - Episode 04: Pear Terminal Applications {% embeded %}

## Step 1. Init

First create a new project using `pear init --type terminal`.

```
mkdir chat-app
cd chat-app
pear init --yes --type terminal
```

This creates the base project structure.

- `package.json`. App configuration. Notice the `pear` property.
- `index.js`. App entrypoint.
- `test/index.test.js`. Test skeleton.

## Step 2. Verify Everything Works

Use `pear run` to see that it works.

```
pear run --dev .
```

> A directory or link needs to be specified with `pear run`, here `.` denotes the current Project directory.

The app will now run. That's all there is to getting a Pear Terminal project started.


## Next

* [Making a Pear Terminal Application](./making-a-pear-terminal-app.md)
