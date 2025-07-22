export const pendingAuthUpdates = new Map();

export function queuePendingAuthUpdate(identifier, pubkey, token, subnetHashes) {
  if (!pendingAuthUpdates.has(identifier)) {
    pendingAuthUpdates.set(identifier, []);
  }
  pendingAuthUpdates.get(identifier).push({ pubkey, token, subnetHashes });
}

export async function applyPendingAuthUpdates(updateFn, ...identifiers) {
  for (const id of identifiers) {
    const updates = pendingAuthUpdates.get(id);
    if (updates) {
      for (const { pubkey, token, subnetHashes } of updates) {
        await updateFn(id, pubkey, token, subnetHashes);
      }
      pendingAuthUpdates.delete(id);
    }
  }
}
