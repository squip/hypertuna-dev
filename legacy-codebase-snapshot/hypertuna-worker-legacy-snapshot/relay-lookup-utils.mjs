// hypertuna-worker/relay-lookup-utils.mjs
import { activeRelays, getRelayProfiles } from './hypertuna-relay-manager-adapter.mjs';

/**
 * Find a relay by its public identifier
 * @param {string} publicIdentifier - The public identifier (npub:relayName)
 * @returns {Promise<Object|null>} - Relay profile with relay_key or null
 */
export async function findRelayByPublicIdentifier(publicIdentifier) {
    const profiles = await getRelayProfiles();
    return profiles.find(p => p.public_identifier === publicIdentifier) || null;
}

/**
 * Get relay key from public identifier
 * @param {string} publicIdentifier - The public identifier
 * @returns {Promise<string|null>} - The internal relay key or null
 */
export async function getRelayKeyFromPublicIdentifier(publicIdentifier) {
    const profile = await findRelayByPublicIdentifier(publicIdentifier);
    return profile ? profile.relay_key : null;
}

/**
 * Check if a relay is active by public identifier
 * @param {string} publicIdentifier - The public identifier
 * @returns {Promise<boolean>} - Whether the relay is active
 */
export async function isRelayActiveByPublicIdentifier(publicIdentifier) {
    const relayKey = await getRelayKeyFromPublicIdentifier(publicIdentifier);
    return relayKey ? activeRelays.has(relayKey) : false;
}

/**
 * Generate public identifier from components
 * @param {string} npub - User's bech32 public key
 * @param {string} relayName - Relay name
 * @returns {string} - Public identifier
 */
export function generatePublicIdentifier(npub, relayName) {
    const camelCaseName = relayName
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
    
    return `${npub}:${camelCaseName}`;
}
