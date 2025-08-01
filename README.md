# Hypertuna Development Repository

This repository contains the source code for Hypertuna's relay system, including the desktop management client, worker code, and related tooling.

## Writer Promotion Sync

When a peer first joins a relay as a reader, it only replicates the relay's history. If that peer later becomes a writer, Autobase must rebuild the local history so the peer can append events. To trigger this rebuild, the application reconnects once after the writer promotion.

Recent updates automate this process during the first session: when the relay becomes writable, the client restarts itself one time so Autobase can resync from scratch. After the restart completes, normal operation resumes without further restarts.

Two profile flags ensure this only happens once:

- `isWriter` – records whether the peer is currently a writer for the relay.
- `initialSyncComplete` – indicates that the initial writer sync and restart have finished.

With these flags, the application skips the reconnect step on subsequent launches, preventing repeated restarts.
