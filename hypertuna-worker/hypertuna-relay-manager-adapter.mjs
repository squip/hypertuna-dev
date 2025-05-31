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
        
        // Create relay profile
        const profileInfo = {
            name: name || `Relay ${relayKey.substring(0, 8)}`,
            description: description || `Created on ${new Date().toLocaleString()}`,
            nostr_pubkey_hex: config.nostr_pubkey_hex || generateHexKey(),
            relay_nostr_id: null,
            relay_key: relayKey,
            relay_storage: defaultStorageDir,
            created_at: new Date().toISOString(),
            auto_connect: true,
            is_active: true
        };
        
        // Save relay profile
        const saved = await saveRelayProfile(profileInfo);
        if (!saved) {
            console.log('[RelayAdapter] Warning: Failed to save relay profile');
        }
        
        console.log('[RelayAdapter] Created relay:', relayKey);
        console.log(`[RelayAdapter] Connect at: wss://${config.proxy_server_address}/${relayKey}`);
        
        return {
            success: true,
            relayKey,
            connectionUrl: `wss://${config.proxy_server_address}/${relayKey}`,
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
    }
    
    if (!relayKey) {
        return {
            success: false,
            error: 'Relay key is required'
        };
    }
    
    try {
        await ensureProfilesInitialized();
        
        // Check if already connected
        if (activeRelays.has(relayKey)) {
            return {
                success: false,
                error: 'Already connected to this relay'
            };
        }
        
        // Set default storage directory
        const defaultStorageDir = storageDir || join(config.storage || './data', relayKey);
        
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
                is_active: true
            };
            
            await saveRelayProfile(profileInfo);
        } else {
            // Update existing profile
            profileInfo.relay_storage = defaultStorageDir;
            profileInfo.last_joined_at = new Date().toISOString();
            profileInfo.is_active = true;
            if (name) profileInfo.name = name;
            if (description) profileInfo.description = description;
            
            await saveRelayProfile(profileInfo);
        }
        
        console.log('[RelayAdapter] Joined relay:', relayKey);
        
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
        
        // Update profile
        const profileInfo = await getRelayProfileByKey(relayKey);
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
            return [];
        }
        
        const connectedRelays = [];
        
        for (const profile of relayProfiles) {
            try {
                // Skip if already active or auto-connect disabled
                if (activeRelays.has(profile.relay_key) || profile.auto_connect === false) {
                    continue;
                }
                
                const result = await joinRelay({
                    relayKey: profile.relay_key,
                    storageDir: profile.relay_storage,
                    config
                });
                
                if (result.success) {
                    connectedRelays.push(profile.relay_key);
                    profile.auto_connected = true;
                    await saveRelayProfile(profile);
                }
            } catch (error) {
                console.error(`[RelayAdapter] Error auto-connecting to ${profile.relay_key}:`, error);
            }
        }
        
        console.log(`[RelayAdapter] Auto-connected to ${connectedRelays.length} relays`);
        return connectedRelays;
        
    } catch (error) {
        console.error('[RelayAdapter] Error during auto-connection:', error);
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
export { activeRelays };
