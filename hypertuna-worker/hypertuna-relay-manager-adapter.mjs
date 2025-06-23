// ./relay-worker/hypertuna-relay-manager-adapter.mjs
// Adapter to integrate legacy RelayManager functionality into Pear worker

import { promises as fs } from 'bare-fs';
import { join } from 'bare-path';
import crypto from 'bare-crypto';

// Import the legacy modules (these need to be adapted for Bare)
// We'll need to update their imports to use bare- modules
import { RelayManager } from './hypertuna-relay-manager-bare.mjs';
import { 
    initRelayProfilesStorage, 
    getAllRelayProfiles, 
    getRelayProfileByKey, 
    saveRelayProfile, 
    removeRelayProfile,
    importLegacyRelayProfiles 
} from './hypertuna-relay-profile-manager-bare.mjs';

// Store active relay managers
const activeRelays = new Map();

// Store relay members keyed by relay key or public identifier
const relayMembers = new Map();

export function getRelayMembers(relayKey) {
    return relayMembers.get(relayKey) || [];
}

export function setRelayMembers(relayKey, members = []) {
    relayMembers.set(relayKey, members);
}

// Store config reference
let globalConfig = null;
let globalUserKey = null;

// Initialize profile storage on module load
let profilesInitialized = false;

async function ensureProfilesInitialized(userKey = null) {
    if (!profilesInitialized) {
        await initRelayProfilesStorage(userKey || globalUserKey);
        profilesInitialized = true;
    }
}

/**
 * Create a new relay
 * @param {Object} options - Creation options
 * @param {string} options.name - Relay name
 * @param {string} options.description - Relay description
 * @param {string} options.storageDir - Optional storage directory
 * @param {Object} options.config - Configuration object
 * @returns {Promise<Object>} - Result object with relay information
 */
export async function createRelay(options = {}) {
    const { name, description, storageDir, config } = options;
    
    // Store config and user key globally if provided
    if (config) {
        globalConfig = config;
        globalUserKey = config.userKey;
    }
    
    try {
        await ensureProfilesInitialized(globalUserKey);
        
        // Generate relay key components
        const timestamp = Date.now();
        const userStorageBase = join(config.storage || './data', 'relays');
        const defaultStorageDir = storageDir || join(userStorageBase, `relay-${timestamp}`);
        
        // Ensure storage directory exists
        await fs.mkdir(defaultStorageDir, { recursive: true });
        
        // Create relay manager instance
        const relayManager = new RelayManager(defaultStorageDir, null);
        await relayManager.initialize();
        
        const relayKey = relayManager.getPublicKey();
        activeRelays.set(relayKey, relayManager);
        
        // Generate public identifier
        const npub = config.nostr_npub || (config.nostr_pubkey_hex ? 
            NostrUtils.hexToNpub(config.nostr_pubkey_hex) : null);
        
        const publicIdentifier = npub && name ? 
            generatePublicIdentifier(npub, name) : null;
        
        // Create relay profile with both internal and public identifiers
        const profileInfo = {
            name: name || `Relay ${relayKey.substring(0, 8)}`,
            description: description || `Created on ${new Date().toLocaleString()}`,
            nostr_pubkey_hex: config.nostr_pubkey_hex || generateHexKey(),
            relay_nostr_id: null,
            relay_key: relayKey, // Internal key
            public_identifier: publicIdentifier, // New public-facing identifier
            relay_storage: defaultStorageDir,
            created_at: new Date().toISOString(),
            auto_connect: true,
            is_active: true,
            members: []
        };
        
        // Save relay profile
        const saved = await saveRelayProfile(profileInfo);
        if (!saved) {
            console.log('[RelayAdapter] Warning: Failed to save relay profile');
        }

        // Load members into in-memory map
        setRelayMembers(relayKey, profileInfo.members || []);
        if (publicIdentifier) {
            setRelayMembers(publicIdentifier, profileInfo.members || []);
        }
        
        console.log('[RelayAdapter] Created relay:', relayKey);
        console.log(`[RelayAdapter] Connect at: wss://${config.proxy_server_address}/${relayKey}`);
        
        // Send relay initialized message for newly created relay
        if (global.sendMessage) {
            global.sendMessage({
                type: 'relay-initialized',
                relayKey: relayKey, // Internal key for worker
                publicIdentifier: publicIdentifier, // Public identifier for external use
                gatewayUrl: publicIdentifier ? 
                    `wss://${config.proxy_server_address}/${npub}/${name.replace(/\s+/g, '')}` :
                    `wss://${config.proxy_server_address}/${relayKey}`,
                name: profileInfo.name,
                isNew: true,
                timestamp: new Date().toISOString()
            });
        }
        
        return {
            success: true,
            relayKey,
            publicIdentifier,
            connectionUrl: publicIdentifier ? 
                `wss://${config.proxy_server_address}/${npub}/${name.replace(/\s+/g, '')}` :
                `wss://${config.proxy_server_address}/${relayKey}`,
            profile: profileInfo,
            storageDir: defaultStorageDir
        };
        
    } catch (error) {
        console.error('[RelayAdapter] Error creating relay:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Helper function to generate public identifier
function generatePublicIdentifier(npub, relayName) {
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

/**
 * Join an existing relay
 * @param {Object} options - Join options
 * @param {string} options.relayKey - The relay key to join
 * @param {string} options.name - Optional name for the relay
 * @param {string} options.description - Optional description
 * @param {string} options.storageDir - Optional storage directory
 * @param {Object} options.config - Configuration object
 * @returns {Promise<Object>} - Result object with relay information
 */
export async function joinRelay(options = {}) {
    const { relayKey, name, description, storageDir, config } = options;
    
    // Store config globally if provided
    if (config) {
        globalConfig = config;
        globalUserKey = config.userKey;
    }
    
    if (!relayKey) {
        return {
            success: false,
            error: 'Relay key is required'
        };
    }
    
    try {
        await ensureProfilesInitialized(globalUserKey);
        
        // Check if already connected
        if (activeRelays.has(relayKey)) {
            console.log(`[RelayAdapter] Already connected to relay ${relayKey}`);
            
            // Still send initialized message since the UI might be waiting
            if (global.sendMessage) {
                global.sendMessage({
                    type: 'relay-initialized',
                    relayKey: relayKey,
                    gatewayUrl: `wss://${config.proxy_server_address}/${relayKey}`,
                    alreadyActive: true,
                    timestamp: new Date().toISOString()
                });
            }
            
            return {
                success: false,
                error: 'Already connected to this relay'
            };
        }
        
        // Set default storage directory
        const defaultStorageDir = storageDir || join(config.storage || './data', 'relays', relayKey);
        
        // Ensure storage directory exists
        await fs.mkdir(defaultStorageDir, { recursive: true });
        
        // Create relay manager instance
        const relayManager = new RelayManager(defaultStorageDir, relayKey);
        await relayManager.initialize();
        
        activeRelays.set(relayKey, relayManager);
        
        // Check if profile already exists
        let profileInfo = await getRelayProfileByKey(relayKey);

        if (!profileInfo) {
            // Create new profile
            profileInfo = {
                name: name || `Joined Relay ${relayKey.substring(0, 8)}`,
                description: description || `Relay joined on ${new Date().toLocaleString()}`,
                nostr_pubkey_hex: config.nostr_pubkey_hex || generateHexKey(),
                relay_nostr_id: null,
                relay_key: relayKey,
                relay_storage: defaultStorageDir,
                joined_at: new Date().toISOString(),
                auto_connect: true,
                is_active: true,
                members: []
            };

            await saveRelayProfile(profileInfo);
        } else {
            // Update existing profile
            profileInfo.relay_storage = defaultStorageDir;
            profileInfo.last_joined_at = new Date().toISOString();
            profileInfo.is_active = true;
            if (name) profileInfo.name = name;
            if (description) profileInfo.description = description;
            if (!profileInfo.members) profileInfo.members = [];

            await saveRelayProfile(profileInfo);
        }

        // Load members into in-memory map
        setRelayMembers(relayKey, profileInfo.members || []);
        if (profileInfo.public_identifier) {
            setRelayMembers(profileInfo.public_identifier, profileInfo.members || []);
        }
        
        console.log('[RelayAdapter] Joined relay:', relayKey);
        
        // Send relay initialized message for joined relay
        if (global.sendMessage) {
            global.sendMessage({
                type: 'relay-initialized',
                relayKey: relayKey,
                gatewayUrl: `wss://${config.proxy_server_address}/${relayKey}`,
                name: profileInfo.name,
                connectionUrl: `wss://${config.proxy_server_address}/${relayKey}`,
                isJoined: true,
                timestamp: new Date().toISOString()
            });
        }
        
        return {
            success: true,
            relayKey,
            connectionUrl: `wss://${config.proxy_server_address}/${relayKey}`,
            profile: profileInfo,
            storageDir: defaultStorageDir
        };
        
    } catch (error) {
        console.error('[RelayAdapter] Error joining relay:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Disconnect from a relay
 * @param {string} relayKey - The relay key to disconnect from
 * @returns {Promise<Object>} - Result object
 */
export async function disconnectRelay(relayKey) {
    if (!relayKey) {
        return {
            success: false,
            error: 'Relay key is required'
        };
    }
    
    const relayManager = activeRelays.get(relayKey);
    if (!relayManager) {
        return {
            success: false,
            error: 'Relay not active'
        };
    }
    
    try {
        await ensureProfilesInitialized();
        
        // Close the relay
        await relayManager.close();
        activeRelays.delete(relayKey);
        relayMembers.delete(relayKey);
        const profileInfo = await getRelayProfileByKey(relayKey);
        if (profileInfo && profileInfo.public_identifier) {
            relayMembers.delete(profileInfo.public_identifier);
        }
        // Update profile
        if (profileInfo) {
            profileInfo.last_disconnected_at = new Date().toISOString();
            profileInfo.is_active = false;
            await saveRelayProfile(profileInfo);
        }
        
        console.log('[RelayAdapter] Disconnected from relay:', relayKey);
        
        return {
            success: true,
            message: `Disconnected from relay ${relayKey}`
        };
        
    } catch (error) {
        console.error('[RelayAdapter] Error disconnecting relay:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Get all relay profiles
 * @returns {Promise<Array>} - Array of relay profiles
 */
export async function getRelayProfiles() {
    await ensureProfilesInitialized(globalUserKey);
    return getAllRelayProfiles(globalUserKey);
}

/**
 * Auto-connect to stored relays
 * @param {Object} config - Configuration object
 * @returns {Promise<Array>} - Array of connected relay keys
 */
export async function autoConnectStoredRelays(config) {
    try {
        // Extract user key from config
        const userKey = config.userKey;
        await ensureProfilesInitialized(userKey);
        
        console.log('[RelayAdapter] Starting auto-connection to stored relays for user:', userKey);
        
        const relayProfiles = await getAllRelayProfiles(userKey);
        if (!relayProfiles || relayProfiles.length === 0) {
            console.log('[RelayAdapter] No stored relay profiles found');
            
            // Notify that there are no relays to initialize
            if (global.sendMessage) {
                global.sendMessage({
                    type: 'all-relays-initialized',
                    count: 0,
                    message: 'No stored relays to initialize'
                });
            }
            return [];
        }
        
        console.log(`[RelayAdapter] Found ${relayProfiles.length} stored relay profiles`);
        
        const connectedRelays = [];
        const failedRelays = [];
        
        // Process each relay profile
        for (const profile of relayProfiles) {
            try {
                // Skip if already active or auto-connect disabled
                if (activeRelays.has(profile.relay_key)) {
                    console.log(`[RelayAdapter] Relay ${profile.relay_key} already active, skipping`);
                    connectedRelays.push(profile.relay_key);
                    
                    // Send initialized message for already active relay
                    if (global.sendMessage) {
                        global.sendMessage({
                            type: 'relay-initialized',
                            relayKey: profile.relay_key,
                            gatewayUrl: `wss://${config.proxy_server_address}/${profile.relay_key}`,
                            name: profile.name,
                            alreadyActive: true
                        });
                    }
                    continue;
                }
                
                if (profile.auto_connect === false) {
                    console.log(`[RelayAdapter] Auto-connect disabled for relay ${profile.relay_key}, skipping`);
                    continue;
                }
                
                console.log(`[RelayAdapter] Attempting to connect to relay ${profile.relay_key}...`);
                
                const result = await joinRelay({
                    relayKey: profile.relay_key,
                    name: profile.name,
                    description: profile.description,
                    storageDir: profile.relay_storage,
                    config
                });
                
                if (result.success) {
                    connectedRelays.push(profile.relay_key);
                    profile.auto_connected = true;
                    profile.last_connected_at = new Date().toISOString();
                    await saveRelayProfile(profile);
                    
                    console.log(`[RelayAdapter] Successfully connected to relay ${profile.relay_key}`);
                    
                    // Send relay initialized message
                    if (global.sendMessage) {
                        global.sendMessage({
                            type: 'relay-initialized',
                            relayKey: profile.relay_key,
                            gatewayUrl: `wss://${config.proxy_server_address}/${profile.relay_key}`,
                            name: profile.name || `Relay ${profile.relay_key.substring(0, 8)}`,
                            connectionUrl: result.connectionUrl,
                            timestamp: new Date().toISOString()
                        });
                    }
                } else {
                    console.error(`[RelayAdapter] Failed to connect to relay ${profile.relay_key}: ${result.error}`);
                    failedRelays.push({
                        relayKey: profile.relay_key,
                        error: result.error
                    });
                    
                    // Send relay initialization failed message
                    if (global.sendMessage) {
                        global.sendMessage({
                            type: 'relay-initialization-failed',
                            relayKey: profile.relay_key,
                            error: result.error,
                            timestamp: new Date().toISOString()
                        });
                    }
                }
            } catch (error) {
                console.error(`[RelayAdapter] Error auto-connecting to ${profile.relay_key}:`, error);
                failedRelays.push({
                    relayKey: profile.relay_key,
                    error: error.message
                });
                
                // Send relay initialization failed message
                if (global.sendMessage) {
                    global.sendMessage({
                        type: 'relay-initialization-failed',
                        relayKey: profile.relay_key,
                        error: error.message,
                        timestamp: new Date().toISOString()
                    });
                }
            }
        }
        
        console.log(`[RelayAdapter] Auto-connection complete:`);
        console.log(`[RelayAdapter] - Connected: ${connectedRelays.length} relays`);
        console.log(`[RelayAdapter] - Failed: ${failedRelays.length} relays`);
        
        // Send all-relays-initialized message
        if (global.sendMessage) {
            global.sendMessage({
                type: 'all-relays-initialized',
                count: connectedRelays.length,
                connected: connectedRelays,
                failed: failedRelays,
                total: relayProfiles.length,
                timestamp: new Date().toISOString()
            });
        }
        
        return connectedRelays;
        
    } catch (error) {
        console.error('[RelayAdapter] Error during auto-connection:', error);
        
        // Send error message
        if (global.sendMessage) {
            global.sendMessage({
                type: 'relay-auto-connect-error',
                error: error.message,
                timestamp: new Date().toISOString()
            });
        }
        
        return [];
    }
}

/**
 * Handle relay messages
 * @param {string} relayKey - The relay key
 * @param {Array} message - The NOSTR message
 * @param {Function} sendResponse - Response callback
 * @param {string} connectionKey - Connection identifier
 * @returns {Promise<void>}
 */
export async function handleRelayMessage(relayKey, message, sendResponse, connectionKey) {
    const relayManager = activeRelays.get(relayKey);
    if (!relayManager) {
        throw new Error(`Relay not found: ${relayKey}`);
    }
    
    return relayManager.handleMessage(message, sendResponse, connectionKey);
}

/**
 * Handle relay subscription
 * @param {string} relayKey - The relay key
 * @param {string} connectionKey - Connection identifier
 * @returns {Promise<Array>}
 */
export async function handleRelaySubscription(relayKey, connectionKey) {
    const relayManager = activeRelays.get(relayKey);
    if (!relayManager) {
        throw new Error(`Relay not found: ${relayKey}`);
    }
    
    return relayManager.handleSubscription(connectionKey);
}

/**
 * Update relay subscription
 */
export async function updateRelaySubscriptions(relayKey, connectionKey, activeSubscriptionsUpdated) {
    const relayManager = activeRelays.get(relayKey);
    if (!relayManager) {
      throw new Error(`Relay not found: ${relayKey}`);
    }
    
    return relayManager.updateSubscriptions(connectionKey, activeSubscriptionsUpdated);
  }

/**
 * Get active relays information with full details
 * @returns {Promise<Array>} - Array of active relay information
 */
export async function getActiveRelays() {
    await ensureProfilesInitialized();
    
    const activeRelayList = [];
    const profiles = await getAllRelayProfiles();
    
    for (const [key, manager] of activeRelays.entries()) {
        // Get peer count if available
        let peerCount = 0;
        if (manager && manager.peers && manager.peers.size) {
            peerCount = manager.peers.size;
        }
        
        // Find the profile for this relay
        const profile = profiles.find(p => p.relay_key === key);
        
        activeRelayList.push({
            relayKey: key,
            peerCount,
            name: profile?.name || `Relay ${key.substring(0, 8)}`,
            description: profile?.description || '',
            connectionUrl: `wss://${globalConfig?.proxy_server_address || 'localhost'}/${key}`,
            createdAt: profile?.created_at || profile?.joined_at || null,
            isActive: true
        });
    }
    
    return activeRelayList;
}

/**
 * Cleanup all active relays
 * @returns {Promise<void>}
 */
export async function cleanupRelays() {
    console.log('[RelayAdapter] Cleaning up all active relays...');
    
    for (const [key, manager] of activeRelays.entries()) {
        try {
            await manager.close();
            console.log(`[RelayAdapter] Closed relay: ${key}`);
        } catch (error) {
            console.error(`[RelayAdapter] Error closing relay ${key}:`, error);
        }
    }
    
    activeRelays.clear();
}

// Helper function to generate hex keys
function generateHexKey() {
    return crypto.randomBytes(32).toString('hex');
}

// Export the active relays map for direct access if needed
export { activeRelays, relayMembers };
