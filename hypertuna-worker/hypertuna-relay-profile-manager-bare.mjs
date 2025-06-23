// ./relay-worker/hypertuna-relay-profile-manager-bare.mjs
// Bare-compatible version of the relay profile manager

import { promises as fs } from 'bare-fs';
import { join, dirname } from 'bare-path';

// Constants
const RELAY_PROFILES_FILE = 'relay-profiles.json';

// Get storage directory from Pear config or use default
function getStorageDir(userKey = null) {
    const baseDir = global.Pear?.config.storage || './data';
    
    // If we have a userKey from config, use user-specific directory
    if (userKey || global.userConfig?.userKey) {
        const key = userKey || global.userConfig.userKey;
        return join(baseDir, 'users', key);
    }
    
    // Fallback to base directory (but log a warning)
    console.warn('[ProfileManager] No user key available, using base storage directory');
    return baseDir;
}

// Get full path to relay profiles file
function getRelayProfilesPath(userKey = null) {
    return join(getStorageDir(userKey), RELAY_PROFILES_FILE);
}

/**
 * Initialize the relay profiles storage file if it doesn't exist
 * @returns {Promise<void>}
 */
export async function initRelayProfilesStorage(userKey = null) {
    try {
        const profilesPath = getRelayProfilesPath(userKey);
        
        // Ensure directory exists
        const dir = dirname(profilesPath);
        await fs.mkdir(dir, { recursive: true });
        
        // Check if the file exists
        try {
            await fs.access(profilesPath);
            // File exists, no need to create
        } catch {
            // File doesn't exist, create it with an empty array
            await fs.writeFile(profilesPath, JSON.stringify({ relays: [] }, null, 2));
            console.log(`[ProfileManager] Created relay profiles storage file at ${profilesPath}`);
        }
    } catch (error) {
        console.error(`[ProfileManager] Error initializing relay profiles storage: ${error.message}`);
        throw error;
    }
}

/**
 * Load all relay profiles from the storage file
 * @returns {Promise<Array>} - Array of relay profiles
 */
export async function getAllRelayProfiles(userKey = null) {
    try {
        // Ensure the storage file exists
        await initRelayProfilesStorage(userKey);
        
        const profilesPath = getRelayProfilesPath(userKey);

        
        // Read and parse the file
        const data = await fs.readFile(profilesPath, 'utf8');
        const profiles = JSON.parse(data);
        return profiles.relays || [];
    } catch (error) {
        console.error(`[ProfileManager] Error loading relay profiles: ${error.message}`);
        return [];
    }
}

/**
 * Get a relay profile by its key
 * @param {string} relayKey - The relay key to look for
 * @returns {Promise<Object|null>} - The relay profile or null if not found
 */
export async function getRelayProfileByKey(relayKey) {
    try {
        const profiles = await getAllRelayProfiles();
        return profiles.find(profile => profile.relay_key === relayKey) || null;
    } catch (error) {
        console.error(`[ProfileManager] Error getting relay profile for key ${relayKey}: ${error.message}`);
        return null;
    }
}

/**
 * Add or update a relay profile in the storage file
 * @param {Object} relayProfile - The relay profile to add or update
 * @returns {Promise<boolean>} - True if successful, false otherwise
 */
export async function saveRelayProfile(relayProfile) {
    try {
        if (!relayProfile || !relayProfile.relay_key) {
            console.error('[ProfileManager] Invalid relay profile data:', relayProfile);
            throw new Error('Invalid relay profile data');
        }
        
        console.log(`[ProfileManager] Saving relay profile for ${relayProfile.relay_key}:`, {
            name: relayProfile.name,
            auto_connect: relayProfile.auto_connect,
            updated_at: relayProfile.updated_at
        });
        
        // Ensure auto_connect is set (default to true if not specified)
        if (relayProfile.auto_connect === undefined) {
            relayProfile.auto_connect = true;
            console.log(`[ProfileManager] Auto-connect not specified, defaulting to true for ${relayProfile.relay_key}`);
        }
        
        // Load existing profiles
        let profiles = await getAllRelayProfiles();
        console.log(`[ProfileManager] Loaded ${profiles.length} existing profiles`);
        
        // Check if profile already exists
        const existingIndex = profiles.findIndex(p => p.relay_key === relayProfile.relay_key);
        
        if (existingIndex >= 0) {
            // Update existing profile, preserving auto_connect setting if not explicitly changed
            if (relayProfile.auto_connect === undefined) {
                relayProfile.auto_connect = profiles[existingIndex].auto_connect !== false;
                console.log(`[ProfileManager] Preserving existing auto_connect value: ${relayProfile.auto_connect}`);
            }
            
            console.log(`[ProfileManager] Updating existing profile at index ${existingIndex} for ${relayProfile.relay_key}`);
            profiles[existingIndex] = {...profiles[existingIndex], ...relayProfile};
        } else {
            // Add new profile
            console.log(`[ProfileManager] Adding new profile for ${relayProfile.relay_key}`);
            profiles.push(relayProfile);
        }
        
        // Write updated profiles back to file
        const profilesPath = getRelayProfilesPath();
        console.log(`[ProfileManager] Writing ${profiles.length} profiles to ${profilesPath}`);
        await fs.writeFile(profilesPath, JSON.stringify({ relays: profiles }, null, 2));
        console.log(`[ProfileManager] Successfully saved relay profile for ${relayProfile.relay_key}`);

        // Update in-memory relay members map in adapter
        try {
            const { setRelayMembers } = await import('./hypertuna-relay-manager-adapter.mjs');
            if (relayProfile.members) {
                setRelayMembers(relayProfile.relay_key, relayProfile.members);
                if (relayProfile.public_identifier) {
                    setRelayMembers(relayProfile.public_identifier, relayProfile.members);
                }
            }
        } catch (err) {
            console.error('[ProfileManager] Failed to update relayMembers map:', err);
        }

        return true;
    } catch (error) {
        console.error(`[ProfileManager] Error saving relay profile:`, error);
        console.error(error.stack);
        return false;
    }
}

/**
 * Remove a relay profile from the storage file
 * @param {string} relayKey - The relay key to remove
 * @returns {Promise<boolean>} - True if successful, false otherwise
 */
export async function removeRelayProfile(relayKey) {
    try {
        // Load existing profiles
        let profiles = await getAllRelayProfiles();
        
        // Filter out the profile to remove
        const newProfiles = profiles.filter(profile => profile.relay_key !== relayKey);
        
        // Write updated profiles back to file
        const profilesPath = getRelayProfilesPath();
        await fs.writeFile(profilesPath, JSON.stringify({ relays: newProfiles }, null, 2));
        
        return true;
    } catch (error) {
        console.error(`[ProfileManager] Error removing relay profile: ${error.message}`);
        return false;
    }
}

/**
 * Import legacy relay profile files into the consolidated storage
 * @returns {Promise<number>} - Number of profiles imported
 */
export async function importLegacyRelayProfiles() {
    try {
        const storageDir = getStorageDir();
        
        // Get all files in the storage directory
        const files = await fs.readdir(storageDir);
        
        // Filter for relay profile files
        const profileFiles = files.filter(file => file.startsWith('relay-profile-') && file.endsWith('.json'));
        
        let importedCount = 0;
        
        // Process each legacy file
        for (const file of profileFiles) {
            try {
                // Read and parse the legacy file
                const data = await fs.readFile(join(storageDir, file), 'utf8');
                const profile = JSON.parse(data);
                
                // Save to consolidated storage
                if (profile && profile.relay_key) {
                    await saveRelayProfile(profile);
                    importedCount++;
                    
                    // Optionally backup and remove the old file
                    const backupDir = join(storageDir, 'legacy-profiles-backup');
                    await fs.mkdir(backupDir, { recursive: true });
                    
                    const backupFile = join(backupDir, file);
                    await fs.copyFile(join(storageDir, file), backupFile);
                    await fs.unlink(join(storageDir, file));
                }
            } catch (fileError) {
                console.error(`[ProfileManager] Error processing legacy profile file ${file}: ${fileError.message}`);
            }
        }
        
        console.log(`[ProfileManager] Imported ${importedCount} legacy relay profiles into consolidated storage`);
        return importedCount;
    } catch (error) {
        console.error(`[ProfileManager] Error importing legacy relay profiles: ${error.message}`);
        return 0;
    }
}

/**
 * Update the auto-connect setting for a relay profile
 * @param {string} relayKey - The relay key
 * @param {boolean} autoConnect - Whether to auto-connect on startup
 * @returns {Promise<boolean>} - True if successful, false otherwise
 */
export async function updateAutoConnectSetting(relayKey, autoConnect) {
    try {
        console.log(`[ProfileManager] updateAutoConnectSetting called for ${relayKey} with value ${autoConnect}`);
        
        // Get the existing profile
        const profile = await getRelayProfileByKey(relayKey);
        if (!profile) {
            console.error(`[ProfileManager] Profile not found for relay key: ${relayKey}`);
            return false;
        }
        
        console.log(`[ProfileManager] Found existing profile for ${relayKey}:`, {
            name: profile.name,
            currentAutoConnect: profile.auto_connect,
            isActive: profile.is_active
        });
        
        // Update the auto_connect setting
        profile.auto_connect = !!autoConnect; // Convert to boolean
        profile.updated_at = new Date().toISOString();
        
        // Save the updated profile
        const success = await saveRelayProfile(profile);
        console.log(`[ProfileManager] Profile save result for ${relayKey}: ${success}`);
        
        return success;
    } catch (error) {
        console.error(`[ProfileManager] Error updating auto-connect setting for ${relayKey}:`, error);
        console.error(error.stack);
        return false;
    }
}

/**
 * Get the auto-connect settings for all relay profiles
 * @returns {Promise<Array>} - Array of profiles with auto-connect info
 */
export async function getAutoConnectSettings() {
    try {
        const profiles = await getAllRelayProfiles();
        console.log(`[ProfileManager] Retrieved ${profiles.length} profiles for auto-connect settings`);
        
        const settings = profiles.map(profile => {
            const setting = {
                relay_key: profile.relay_key,
                name: profile.name || 'Unnamed Relay',
                auto_connect: profile.auto_connect !== false, // Default to true if not set
                is_active: profile.is_active || false,
                storage_dir: profile.relay_storage
            };
            
            console.log(`[ProfileManager] Auto-connect setting for ${profile.relay_key}:`, setting);
            return setting;
        });
        
        return settings;
    } catch (error) {
        console.error(`[ProfileManager] Error getting auto-connect settings:`, error);
        console.error(error.stack);
        return [];
    }
}
