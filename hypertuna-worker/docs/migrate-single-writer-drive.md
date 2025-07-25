# Migrating a Single Writer Drive

This worker originally stored relay files in a single‑writer Hyperdrive. Recent
versions use a multiwriter drive so that multiple peers can append data. Existing
drives can be migrated by re-uploading each file to the new multiwriter drive.

1.  Join your relay using the current worker so it creates a new profile with a
    multiwriter drive.
2.  For every file from the old drive, call the `writeFile` helper exposed by the
    worker:

    ```js
    import { writeFile } from './hypertuna-relay-manager-adapter.mjs'

    // relayKey is the key of the relay profile
    // localPath points to the file on disk
    // fileId is the identifier used when serving the file
    await writeFile(relayKey, localPath, fileId)
    ```

    This method appends an `add-file` operation to the multiwriter drive.
3.  Once all files are uploaded you can remove the old single-writer drive.

The `writeFile` API ensures the HTTP retrieval key matches the stored key and
can be used repeatedly to populate a new drive from existing content.
