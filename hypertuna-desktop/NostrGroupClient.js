/**
 * NostrGroupClient.js
 * Client for managing nostr groups (NIP-29)
 * With improved filtering to avoid excessive subscription load
 * Enhanced to support Hypertuna relay groups
 */

import WebSocketRelayManager from './WebSocketRelayManager.js';
import NostrEvents from './NostrEvents.js';
import { NostrUtils } from './NostrUtils.js';

class NostrGroupClient {
    constructor(debugMode = true) {
        this.relayManager = new WebSocketRelayManager();
        this.user = null;
        this.groups = new Map(); // Map of groupId -> group metadata
        this.groupMembers = new Map(); // Map of groupId -> member list
        this.groupAdmins = new Map(); // Map of groupId -> admin list
        this.groupMessages = new Map(); // Map of groupId -> messages
        this.groupInvites = new Map(); // Map of groupId -> invite codes
        this.eventListeners = new Map(); // Map of event type -> array of callbacks
        this.cachedProfiles = new Map(); // Map of pubkey -> profile metadata
        this.follows = new Set(); // Set of pubkeys the user follows (kind 3)
        this.relevantPubkeys = new Set(); // Set of pubkeys relevant to the user
        this.activeSubscriptions = new Set(); // Keep track of active subscription IDs
        this.eventCallbacks = []; // Array of callbacks for received events
        this.hypertunaGroups = new Map(); // Map of hypertunaId -> groupId
        this.groupHypertunaIds = new Map(); // Map of groupId -> hypertunaId
        this.hypertunaRelayUrls = new Map(); // Map of groupId -> relay URL
        this.userRelayListEvent = null; // latest kind 10009 event
        this.userRelayIds = new Set(); // Set of hypertuna relay ids user belongs to
        this.relayListLoaded = false; // flag indicating relay list has been parsed
        this.debugMode = debugMode;
        this.groupRelayUrls = new Map(); // Map of groupId -> relay URL
        this.isInitialized = false;
        this.pendingRelayConnections = new Map(); // Track pending connections
        this.relayConnectionAttempts = new Map(); // Track retry attempts
        this.maxRetryAttempts = 3;
        // Mapping between public identifiers and internal relay keys (if available)
        this.publicToInternalMap = new Map();
        this.internalToPublicMap = new Map();

        // Setup default event handlers
        this._setupEventHandlers();
        
        // Add debug event handling if debug mode is enabled
        if (this.debugMode) {
            // Add a relay event handler that logs all events
            this.relayManager.onEvent((event, relayUrl) => {
                console.log(`DEBUG - Received event kind ${event.kind} from ${relayUrl}:`, {
                    id: event.id.substring(0, 8) + '...',
                    pubkey: event.pubkey.substring(0, 8) + '...',
                    created_at: event.created_at,
                    tags: event.tags.map(t => t[0]).join(',')
                });
            });
        }
    }
    
    /**
     * Initialize the client
     * @param {Object} user - User object with privateKey and pubkey
     * @param {Array} relayUrls - Array of relay URLs to connect to
     * @returns {Promise} - Resolves when initialized
     */
    async init(user, relayUrls) {
        // Save user
        this.user = user;
        
        // Add user's pubkey to relevant pubkeys
        this.relevantPubkeys.add(user.pubkey);
        
        // Connect to relays
        const connPromises = relayUrls.map(url => this.relayManager.addRelay(url));
        await Promise.allSettled(connPromises);
        
        // Get user profile if not set
        if (!user.name && user.pubkey) {
            await this.fetchUserProfile(user.pubkey);
        }
        
        // Fetch user's follows
        await this.fetchUserFollows();

        // Fetch or create the user's relay list event
        await this.fetchUserRelayList();
        
        // Create subscriptions
        this._createSubscriptions();
        
        return this;
    }

    /**
     * Initialize with discovery relays only
     */
    async initWithDiscoveryRelays(user, discoveryRelays) {
        this.user = user;
        this.relevantPubkeys.add(user.pubkey);
        
        // Connect only to discovery relays initially
        for (const url of discoveryRelays) {
            await this.relayManager.addTypedRelay(url, 'discovery');
        }
        
        // Fetch user profile and follows
        await this.fetchUserProfile(user.pubkey);
        await this.fetchUserFollows();
        await this.fetchUserRelayList();
        
        // Setup minimal subscriptions for discovery
        this._createDiscoverySubscriptions();
        
        this.isInitialized = true;
        return this;
    }

    /**
     * Create discovery-only subscriptions
     */
    _createDiscoverySubscriptions() {
        const discoveryRelays = Array.from(this.relayManager.discoveryRelays);
        
        // Subscribe to user's relay list updates
        this.relayManager.subscribeWithRouting('user-relaylist-discovery', [
            { kinds: [NostrEvents.KIND_USER_RELAY_LIST], authors: [this.user.pubkey], limit: 1 }
        ], (event) => {
            this.userRelayListEvent = event;
            this._parseRelayListEvent(event);
            this._connectToUserRelays(); // Auto-connect to user's relays
        }, { targetRelays: discoveryRelays });
        
        // Subscribe to group metadata for discovery
        this.relayManager.subscribeWithRouting('group-discovery', [
            { kinds: [NostrEvents.KIND_GROUP_METADATA], "#i": ["hypertuna:relay"] },
            { kinds: [NostrEvents.KIND_HYPERTUNA_RELAY], "#i": ["hypertuna:relay"] }
        ], (event) => {
            if (event.kind === NostrEvents.KIND_GROUP_METADATA) {
                this._processGroupMetadataEvent(event);
            } else if (event.kind === NostrEvents.KIND_HYPERTUNA_RELAY) {
                this._processHypertunaRelayEvent(event);
            }
        }, { targetRelays: discoveryRelays });
    }

    /**
     * Connect to user's relay groups from kind 10009
     */
    async _connectToUserRelays() {
        if (!this.userRelayListEvent) return;
        
        const relayUrls = new Set();
        const identifierMap = new Map(); // Map URL -> public identifier

        // Parse public relays from tags
        this.userRelayListEvent.tags.forEach(tag => {
            if (tag[0] === 'group' && tag[4] === 'hypertuna:relay') {
                const identifier = tag[1];
                const url = tag[2];
                relayUrls.add(url);
                identifierMap.set(url, identifier);
            } else if (tag[0] === 'r' && tag[1] && tag[2] === 'hypertuna:relay') {
                const url = tag[1];
                relayUrls.add(url);
                if (!identifierMap.has(url)) {
                    const parts = url.split('/').filter(Boolean);
                    if (parts.length >= 2) {
                        const identifier = `${parts[parts.length - 2]}:${parts[parts.length - 1]}`;
                        identifierMap.set(url, identifier);
                    }
                }
            }
        });
        
        // Parse private relays from content
        if (this.userRelayListEvent.content) {
            try {
                const decrypted = NostrUtils.decrypt(
                    this.user.privateKey,
                    this.user.pubkey,
                    this.userRelayListEvent.content
                );
                const privateTags = JSON.parse(decrypted);

                privateTags.forEach(tag => {
                    if (Array.isArray(tag) && tag[0] === 'group' && tag[4] === 'hypertuna:relay') {
                        const identifier = tag[1];
                        const url = tag[2];
                        relayUrls.add(url);
                        identifierMap.set(url, identifier);
                    } else if (Array.isArray(tag) && tag[0] === 'r' && tag[1] && tag[2] === 'hypertuna:relay') {
                        const url = tag[1];
                        relayUrls.add(url);
                        if (!identifierMap.has(url)) {
                            const parts = url.split('/').filter(Boolean);
                            if (parts.length >= 2) {
                                const identifier = `${parts[parts.length - 2]}:${parts[parts.length - 1]}`;
                                identifierMap.set(url, identifier);
                            }
                        }
                    }
                });
            } catch (e) {
                console.error('Error parsing private relay list:', e);
            }
        }
        
        console.log(`[NostrGroupClient] Found ${relayUrls.size} relay URLs to connect`);
        
        // Queue all relay connections
        for (const relayUrl of relayUrls) {
            const identifier = identifierMap.get(relayUrl);
            if (identifier) {
                console.log(`[NostrGroupClient] Queuing connection for ${identifier} at ${relayUrl}`);
                this.queueRelayConnection(identifier, relayUrl);
            }
        }
        
        // Start processing the queue
        this.processRelayConnectionQueue();
    }

    /**
     * Queue a relay connection attempt
     */
    queueRelayConnection(publicIdentifier, relayUrl) {
        if (!this.pendingRelayConnections.has(publicIdentifier)) {
            this.pendingRelayConnections.set(publicIdentifier, {
                identifier: publicIdentifier,
                relayUrl,
                attempts: 0,
                status: 'pending'
            });
            console.log(`[NostrGroupClient] Queued connection for relay ${publicIdentifier}`);
        }
    }

    /**
     * Process pending relay connections with worker readiness check
     */
    async processRelayConnectionQueue() {
        for (const [identifier, connection] of this.pendingRelayConnections) {
            if (connection.status === 'connecting' || connection.status === 'connected') {
                continue;
            }
            
            connection.status = 'connecting';
            
            try {
                // Wait for relay to be ready in worker
                console.log(`[NostrGroupClient] Waiting for relay ${identifier} to be ready...`);
                
                if (window.waitForRelayReady) {
                    try {
                        await window.waitForRelayReady(identifier, 15000); // 15 second timeout
                        console.log(`[NostrGroupClient] Relay ${identifier} is ready, connecting...`);
                    } catch (e) {
                        console.log(`[NostrGroupClient] Relay ${identifier} not ready yet: ${e.message}`);
                        connection.status = 'pending';
                        connection.attempts++;
                        
                        // Retry later if under max attempts
                        if (connection.attempts < this.maxRetryAttempts) {
                            setTimeout(() => {
                                this.processRelayConnectionQueue();
                            }, 5000 * connection.attempts); // Exponential backoff
                        } else {
                            connection.status = 'failed';
                            console.error(`[NostrGroupClient] Failed to connect to relay ${identifier} after ${this.maxRetryAttempts} attempts`);
                        }
                        continue;
                    }
                }
                
                // Now try to connect
                await this.connectToGroupRelay(connection.identifier, connection.relayUrl);
                connection.status = 'connected';
                this.pendingRelayConnections.delete(identifier);
                
            } catch (e) {
                console.error(`[NostrGroupClient] Error connecting to relay ${identifier}:`, e);
                connection.status = 'failed';
            }
        }
        
        // Check if there are still pending connections
        const pendingCount = Array.from(this.pendingRelayConnections.values())
            .filter(c => c.status === 'pending').length;
            
        if (pendingCount > 0) {
            console.log(`[NostrGroupClient] ${pendingCount} relays still pending, will retry...`);
            setTimeout(() => {
                this.processRelayConnectionQueue();
            }, 5000);
        }
    }

    /**
     * Handle relay ready notification from worker
     */
    handleRelayReady(identifier, gatewayUrl) {
        console.log(`[NostrGroupClient] Relay ${identifier} is now ready at ${gatewayUrl}`);
        
        // Check if this relay is in our pending connections
        const pending = this.pendingRelayConnections.get(identifier);
        if (pending && pending.status === 'pending') {
            console.log(`[NostrGroupClient] Found pending connection for ${identifier}, processing...`);
            this.processRelayConnectionQueue();
        }
    }

    /**
     * Handle all relays ready notification
     */
    handleAllRelaysReady() {
        console.log(`[NostrGroupClient] All stored relays are ready`);
        
        // Process any remaining pending connections
        this.processRelayConnectionQueue();
        
        // Emit event that we're fully initialized
        this.emit('relays:ready');
    }

    /**
     * Connect to a specific group relay
     */
    async connectToGroupRelay(publicIdentifier, relayUrl) {
        try {
            console.log(`[NostrGroupClient] Connecting to group relay: ${relayUrl}`);
            
            // Add with retry logic
            let connected = false;
            let attempts = 0;
            
            while (!connected && attempts < 3) {
                try {
                    await this.relayManager.addTypedRelay(relayUrl, 'group', publicIdentifier);
                    connected = true;
                } catch (e) {
                    attempts++;
                    if (attempts < 3) {
                        console.log(`[NostrGroupClient] Connection attempt ${attempts} failed, retrying...`);
                        await new Promise(resolve => setTimeout(resolve, 2000));
                    } else {
                        throw e;
                    }
                }
            }
            
            this.groupRelayUrls.set(publicIdentifier, relayUrl);
            
            // Subscribe to group-specific events only on this relay
            this._subscribeToGroupOnRelay(publicIdentifier, relayUrl);
            
            console.log(`[NostrGroupClient] Successfully connected to group relay: ${relayUrl}`);
            
            // Emit event for UI update
            this.emit('relay:connected', { groupId: publicIdentifier, relayUrl });
            
        } catch (e) {
            console.error(`[NostrGroupClient] Failed to connect to group relay ${relayUrl}:`, e);
            
            // Emit failure event
            this.emit('relay:failed', { groupId: publicIdentifier, relayUrl, error: e.message });
            
            throw e;
        }
    }

    /**
     * Subscribe to group events only on the group's relay
     */
    _subscribeToGroupOnRelay(publicIdentifier, relayUrl) {
        // Subscribe to group metadata
        this.relayManager.subscribeWithRouting(`group-meta-${publicIdentifier}`, [
            { kinds: [NostrEvents.KIND_GROUP_METADATA], "#d": [publicIdentifier] },
            { kinds: [NostrEvents.KIND_GROUP_MEMBER_LIST], "#d": [publicIdentifier] },
            { kinds: [NostrEvents.KIND_GROUP_ADMIN_LIST], "#d": [publicIdentifier] }
        ], (event) => {
            this._processEvent(event, relayUrl);
        }, { targetRelays: [relayUrl] });

        // Subscribe to group messages
        this.relayManager.subscribeWithRouting(`group-messages-${publicIdentifier}`, [
            { kinds: [NostrEvents.KIND_TEXT_NOTE], "#h": [publicIdentifier] }
        ], (event) => {
            this._processGroupMessageEvent(event);
        }, { targetRelays: [relayUrl] });
    }
    
    /**
     * Set up event handlers
     * @private
     */
    _setupEventHandlers() {
        // Handle relay connections
        this.relayManager.onConnect((relayUrl) => {
            this.emit('relay:connect', { relayUrl });
        });
        
        // Handle relay disconnections
        this.relayManager.onDisconnect((relayUrl) => {
            this.emit('relay:disconnect', { relayUrl });
        });
        
        // Handle all events
        this.relayManager.onEvent((event, relayUrl) => {
            // Skip processing events from irrelevant pubkeys
            if (this._shouldProcessEvent(event)) {
                this._processEvent(event, relayUrl);
            }
        });
    }

    /**
     * Enhanced NostrGroupClient.js _handleRelayMessage method
     * Replace this method in NostrGroupClient.js for better message logging
     */
    _handleRelayMessage(relayUrl, message) {
        if (!Array.isArray(message)) {
            return;
        }

        const messageType = message[0];
        
        console.log(`Received ${messageType} message from ${relayUrl}`);
        
        if (messageType === 'EVENT') {
            // ["EVENT", <subscription_id>, <event>]
            if (message.length < 3) {
                console.warn(`Invalid EVENT message, missing data`);
                return;
            }
            
            const shortSubId = message[1];
            const event = message[2];
            
            console.log(`Received event kind ${event.kind} for subscription ${shortSubId}`, {
                id: event.id.substring(0, 8) + '...',
                pubkey: event.pubkey.substring(0, 8) + '...',
                created_at: event.created_at
            });
            
            // Find the original subscription ID from the short ID
            let originalSubId = null;
            this.globalSubscriptions.forEach((subData, subId) => {
                if (subData.shortId === shortSubId) {
                    originalSubId = subId;
                }
            });
            
            // If we can't find the subscription, ignore the event
            if (!originalSubId) {
                console.warn(`Unknown subscription ID: ${shortSubId}`);
                return;
            }
            
            console.log(`Mapped short subscription ID ${shortSubId} to original ID ${originalSubId}`);
            
            // Notify global subscription callbacks
            const subscription = this.globalSubscriptions.get(originalSubId);
            if (subscription) {
                const callbackCount = subscription.callbacks.length;
                console.log(`Notifying ${callbackCount} subscription callbacks`);
                
                subscription.callbacks.forEach(callback => {
                    try {
                        callback(event, relayUrl, originalSubId);
                    } catch (e) {
                        console.error('Error in subscription callback:', e);
                    }
                });
            }
            
            // Notify global event listeners
            console.log(`Notifying ${this.eventCallbacks.length} global event listeners`);
            this.eventCallbacks.forEach(callback => {
                try {
                    callback(event, relayUrl, originalSubId);
                } catch (e) {
                    console.error('Error in event callback:', e);
                }
            });
        }
        else if (messageType === 'EOSE') {
            // ["EOSE", <subscription_id>]
            // End of stored events
            console.log(`End of stored events for subscription ${message[1]} from ${relayUrl}`);
        }
        else if (messageType === 'NOTICE') {
            // ["NOTICE", <message>]
            console.log(`Notice from ${relayUrl}: ${message[1]}`);
        }
        else if (messageType === 'OK') {
            // ["OK", <event_id>, <success>, <message>]
            if (message.length >= 3) {
                const eventId = message[1];
                const success = message[2];
                const errorMsg = message.length > 3 ? message[3] : '';
                
                console.log(`Received OK from ${relayUrl} for event ${eventId.substring(0, 8)}... - Success: ${success}${errorMsg ? ', Message: ' + errorMsg : ''}`);
            } else {
                console.log(`Received incomplete OK message from ${relayUrl}:`, message);
            }
        }
    }
    
    /**
     * Fetch the user's follows (kind 3 contact list)
     * @private
     */
    async fetchUserFollows() {
        if (!this.user || !this.user.pubkey) return;
        
        // Create a temporary subscription for the user's contact list
        return new Promise((resolve) => {
            const subId = `contacts-${this.user.pubkey.substring(0, 8)}`;
            
            // Set a timeout for this operation
            const timeoutId = setTimeout(() => {
                this.relayManager.unsubscribe(subId);
                resolve(); // Resolve anyway if timeout occurs
            }, 5000);
            
            // Subscribe to the user's contacts
            this.relayManager.subscribe(subId, [
                { kinds: [3], authors: [this.user.pubkey], limit: 1 }
            ], (event) => {
                if (event.kind === 3 && event.pubkey === this.user.pubkey) {
                    // Extract all followed pubkeys from p tags
                    event.tags.forEach(tag => {
                        if (tag[0] === 'p' && tag[1]) {
                            this.follows.add(tag[1]);
                            this.relevantPubkeys.add(tag[1]);
                        }
                    });
                    
                    // Clean up
                    clearTimeout(timeoutId);
                    this.relayManager.unsubscribe(subId);
                    resolve();
                }
            });
        });
    }

    /**
 * Discover relays from follows
 * @returns {Promise<Map>} - Map of groupId -> {group, followers}
 */
    async discoverRelaysFromFollows() {
        console.log('Starting relay discovery from follows...');
        
        // Get follows excluding current user
        const followsPubkeys = Array.from(this.follows).filter(pubkey => pubkey !== this.user.pubkey);
        
        if (followsPubkeys.length === 0) {
            console.log('No follows found to discover relays from');
            return new Map();
        }
        
        // Step 1: Fetch kind 10009 events from follows
        const relayListSubId = `discover-relay-lists-${Date.now()}`;
        const hypertunaGroupsMap = new Map(); // Map of groupId -> Set of pubkeys
        
        await new Promise((resolve) => {
            let receivedCount = 0;
            const expectedCount = followsPubkeys.length;
            
            const timeoutId = setTimeout(() => {
                this.relayManager.unsubscribe(relayListSubId);
                resolve();
            }, 5000);
            
            this.relayManager.subscribe(relayListSubId, [
                { 
                    kinds: [NostrEvents.KIND_USER_RELAY_LIST], 
                    authors: followsPubkeys,
                    limit: followsPubkeys.length
                }
            ], (event) => {
                receivedCount++;
                
                // Process the relay list event
                event.tags.forEach(tag => {
                    if (tag[0] === 'group' && tag[tag.length - 1] === 'hypertuna:relay') {
                        const groupId = tag[1];
                        if (!hypertunaGroupsMap.has(groupId)) {
                            hypertunaGroupsMap.set(groupId, new Set());
                        }
                        hypertunaGroupsMap.get(groupId).add(event.pubkey);
                    }
                });
                
                if (receivedCount >= expectedCount) {
                    clearTimeout(timeoutId);
                    this.relayManager.unsubscribe(relayListSubId);
                    resolve();
                }
            }, { suppressGlobalEvents: true }); // Add this option
        });
        
        console.log(`Found ${hypertunaGroupsMap.size} unique Hypertuna groups from follows`);
        
        if (hypertunaGroupsMap.size === 0) {
            return new Map();
        }
        
        // Step 2: Fetch profiles for follows
        const profilesMap = await this.fetchMultipleProfiles(followsPubkeys);
        
        // Step 3: Fetch group metadata for discovered groups
        const groupIds = Array.from(hypertunaGroupsMap.keys());
        const discoveredRelays = new Map();
        
        const metadataSubId = `discover-metadata-${Date.now()}`;
        
        await new Promise((resolve) => {
            let groupsProcessed = 0;
            
            const timeoutId = setTimeout(() => {
                this.relayManager.unsubscribe(metadataSubId);
                resolve();
            }, 5000);
            
            this.relayManager.subscribe(metadataSubId, [
                { 
                    kinds: [NostrEvents.KIND_GROUP_METADATA],
                    "#d": groupIds,
                    limit: groupIds.length
                },
                {
                    kinds: [NostrEvents.KIND_HYPERTUNA_RELAY],
                    "#h": groupIds,
                    limit: groupIds.length
                }
            ], (event) => {
                if (event.kind === NostrEvents.KIND_GROUP_METADATA) {
                    const groupData = NostrEvents.parseGroupMetadata(event);
                    if (groupData && hypertunaGroupsMap.has(groupData.id)) {
                        const followerPubkeys = Array.from(hypertunaGroupsMap.get(groupData.id));
                        const followers = followerPubkeys.map(pubkey => ({
                            pubkey,
                            profile: profilesMap.get(pubkey) || { name: `User_${NostrUtils.truncatePubkey(pubkey)}` }
                        }));
                        
                        discoveredRelays.set(groupData.id, {
                            group: groupData,
                            followers: followers,
                            followerCount: followers.length
                        });
                        
                        groupsProcessed++;
                    }
                } else if (event.kind === NostrEvents.KIND_HYPERTUNA_RELAY) {
                    // Process Hypertuna relay event if needed
                    const groupId = NostrEvents._getTagValue(event, 'h');
                    if (groupId && discoveredRelays.has(groupId)) {
                        const relayUrl = NostrEvents._getTagValue(event, 'd');
                        if (relayUrl) {
                            discoveredRelays.get(groupId).relayUrl = relayUrl;
                        }
                    }
                }
                
                if (groupsProcessed >= groupIds.length) {
                    clearTimeout(timeoutId);
                    this.relayManager.unsubscribe(metadataSubId);
                    resolve();
                }
            }, { suppressGlobalEvents: true }); // Add this option
        });
        
        return discoveredRelays;
    }

/**
 * Fetch multiple user profiles
 * @param {Array<string>} pubkeys - Array of pubkeys
 * @returns {Promise<Map>} - Map of pubkey -> profile
 */
async fetchMultipleProfiles(pubkeys) {
    const profilesMap = new Map();
    
    // Check cache first
    pubkeys.forEach(pubkey => {
        if (this.cachedProfiles.has(pubkey)) {
            profilesMap.set(pubkey, this.cachedProfiles.get(pubkey));
        }
    });
    
    // Fetch missing profiles
    const missingPubkeys = pubkeys.filter(pubkey => !profilesMap.has(pubkey));
    
    if (missingPubkeys.length === 0) {
        return profilesMap;
    }
    
    const profileSubId = `profiles-${Date.now()}`;
    
    await new Promise((resolve) => {
        const timeoutId = setTimeout(() => {
            this.relayManager.unsubscribe(profileSubId);
            resolve();
        }, 3000);
        
        this.relayManager.subscribe(profileSubId, [
            { 
                kinds: [NostrEvents.KIND_METADATA], 
                authors: missingPubkeys,
                limit: missingPubkeys.length
            }
        ], (event) => {
            try {
                const profile = JSON.parse(event.content);
                const fullProfile = {
                    ...profile,
                    pubkey: event.pubkey,
                    updated_at: event.created_at
                };
                
                this.cachedProfiles.set(event.pubkey, fullProfile);
                profilesMap.set(event.pubkey, fullProfile);
            } catch (e) {
                console.error('Error parsing profile:', e);
            }
        }, { suppressGlobalEvents: true }); // Add this option for profile fetching too
    });
    
    // Add default profiles for any still missing
    missingPubkeys.forEach(pubkey => {
        if (!profilesMap.has(pubkey)) {
            const defaultProfile = {
                name: `User_${NostrUtils.truncatePubkey(pubkey)}`,
                pubkey
            };
            profilesMap.set(pubkey, defaultProfile);
        }
    });
    
    return profilesMap;
}

    /**
     * Fetch the user's relay list event (kind 10009) or create one if missing
     */
    async fetchUserRelayList() {
        if (!this.user || !this.user.pubkey) return;

        return new Promise((resolve) => {
            const subId = `relaylist-${this.user.pubkey.substring(0,8)}`;
            let received = false;

            const timeoutId = setTimeout(async () => {
                this.relayManager.unsubscribe(subId);
                if (!received) {
                    await this._createEmptyRelayList();
                }
                console.log('Fetched user relay list event:', this.userRelayListEvent);
                resolve();
            }, 5000);

            this.relayManager.subscribe(subId, [
                { kinds: [NostrEvents.KIND_USER_RELAY_LIST], authors: [this.user.pubkey], limit: 1 }
            ], (event) => {
                received = true;
                clearTimeout(timeoutId);
                this.relayManager.unsubscribe(subId);
                this.userRelayListEvent = event;
                this._parseRelayListEvent(event);
                resolve();
            });
        });
    }

    _parseRelayListEvent(event) {
        this.userRelayIds.clear();
        if (!event) return;
        
        event.tags.forEach(t => {
            if (t[0] === 'group' && t[1] && t[t.length - 1] === 'hypertuna:relay') {
                this.userRelayIds.add(t[1]);
            }
        });
    
        if (!event.content) {
            this.relayListLoaded = true;  // ADD THIS LINE
            console.log('Parsed relay list. Current user relay IDs:', Array.from(this.userRelayIds));
            this.emit('relaylist:update', { ids: Array.from(this.userRelayIds) });
            return;
        }
    
        let decoded = null;
        try {
            decoded = NostrUtils.decrypt(this.user.privateKey, this.user.pubkey, event.content);
        } catch (e) {
            try {
                decoded = event.content;
            } catch {}
        }
    
        if (decoded) {
            try {
                const arr = JSON.parse(decoded);
                arr.forEach(t => {
                    if (Array.isArray(t) && t[0] === 'group' && t[1] && t[t.length - 1] === 'hypertuna:relay') {
                        this.userRelayIds.add(t[1]);
                    }
                });
            } catch {}
        }
        
        this.relayListLoaded = true;  // ADD THIS LINE
        console.log('Parsed relay list. Current user relay IDs:', Array.from(this.userRelayIds));
        this.emit('relaylist:update', { ids: Array.from(this.userRelayIds) });
    }

    async _createEmptyRelayList() {
        const event = await NostrEvents.createUserRelayListEvent([], [], this.user.privateKey);
        await this.relayManager.publish(event);
        this.userRelayListEvent = event;
        this.userRelayIds.clear();
        this.relayListLoaded = true;
        this.emit('relaylist:update', { ids: Array.from(this.userRelayIds) });
        console.log('Created empty user relay list event');
    }

    async updateUserRelayList(publicIdentifier, gatewayUrl, isPublic, add = true) {
        if (!this.userRelayListEvent) {
            await this._createEmptyRelayList();
        }
    
        const tags = [...this.userRelayListEvent.tags];
        let contentArr = [];
        if (this.userRelayListEvent.content) {
            try {
                const dec = NostrUtils.decrypt(this.user.privateKey, this.user.pubkey, this.userRelayListEvent.content);
                contentArr = JSON.parse(dec);
            } catch (e) {
                try { contentArr = JSON.parse(this.userRelayListEvent.content); } catch { contentArr = []; }
            }
        }

        const groupName = (this.groups.get(publicIdentifier)?.name) || '';
    
        // Update tag format to use public identifier
        const groupTag = ['group', publicIdentifier, `${gatewayUrl}`, groupName, 'hypertuna:relay'];
        const rTag = ['r', `${gatewayUrl}`, 'hypertuna:relay'];


        const remove = (arr, tag) => {
            const idx = arr.findIndex(t => JSON.stringify(t) === JSON.stringify(tag));
            if (idx > -1) arr.splice(idx,1);
        };

        if (add) {
            if (isPublic) {
                tags.push(groupTag, rTag);
            } else {
                contentArr.push(groupTag, rTag);
            }
            this.userRelayIds.add(publicIdentifier);
            console.log('Added relay to user list:', publicIdentifier, { groupTag, rTag });
        } else {
            if (isPublic) {
                remove(tags, groupTag);
                remove(tags, rTag);
            } else {
                remove(contentArr, groupTag);
                remove(contentArr, rTag);
            }
            this.userRelayIds.delete(publicIdentifier);
            console.log('Removed relay from user list:', publicIdentifier);
        }

        const newEvent = await NostrEvents.createUserRelayListEvent(tags, contentArr, this.user.privateKey);
        this.userRelayListEvent = newEvent;
        
        // Always publish to discovery relays only
        const discoveryRelays = Array.from(this.relayManager.discoveryRelays);
        await this.relayManager.publishToRelays(newEvent, discoveryRelays);
        
        console.log('Published user relay list to discovery relays');
        
        // If adding a relay, connect to it
        if (add && gatewayUrl) {
            const groupId = this.hypertunaGroups.get(publicIdentifier);
            if (groupId) {
                await this.connectToGroupRelay(publicIdentifier, gatewayUrl);
            }
        }
        
        this.emit('relaylist:update', { ids: Array.from(this.userRelayIds) });
    }
    
    /**
     * Determine if an event should be processed based on relevance
     * @param {Object} event - Nostr event
     * @returns {boolean} - Whether to process this event
     * @private
     */
    _shouldProcessEvent(event) {
        // Always process events from the current user
        if (event.pubkey === this.user.pubkey) {
            return true;
        }
        
        // Process group metadata events (kind 39000) from any pubkey
        if (event.kind === NostrEvents.KIND_GROUP_METADATA) {
            // Check if this is a Hypertuna event
            const hypertunaId = NostrEvents._getTagValue(event, 'hypertuna');
            if (hypertunaId) {
                // Process if it's from the user or someone they follow
                return event.pubkey === this.user.pubkey || this.follows.has(event.pubkey);
            }
            return true;
        }
        
        // Process Hypertuna relay events (kind 30166)
        if (event.kind === NostrEvents.KIND_HYPERTUNA_RELAY) {
            return true;
        }
        
        // Process events from pubkeys we follow
        if (this.follows.has(event.pubkey)) {
            return true;
        }
        
        // Process events from pubkeys in groups the user is a member of
        if (this.relevantPubkeys.has(event.pubkey)) {
            return true;
        }
        
        // Process group membership events if they involve the user
        if ((event.kind === NostrEvents.KIND_GROUP_MEMBER_LIST || 
             event.kind === NostrEvents.KIND_GROUP_ADMIN_LIST) && 
            event.tags.some(tag => tag[0] === 'p' && tag[1] === this.user.pubkey)) {
            return true;
        }
        
        // Skip all other events
        return false;
    }
    
    /**
     * Create subscriptions with appropriate filters
     * @private
     */
    _createSubscriptions() {
        if (!this.user || !this.user.pubkey) return;
        
        // Clean up any existing subscriptions
        this.activeSubscriptions.forEach(subId => {
            this.relayManager.unsubscribe(subId);
        });
        this.activeSubscriptions.clear();
        
        // Subscribe to user's own profile data
        const profileSubId = this.relayManager.subscribe('user-profile', [
            { kinds: [0], authors: [this.user.pubkey] }
        ], (event) => {
            this._processProfileEvent(event);
        });
        this.activeSubscriptions.add(profileSubId);
        
        // Subscribe to Hypertuna group metadata (kind 39000 with identifier tag)
        // Only from the user's pubkey and followed pubkeys
        const followsArray = [...this.follows];
        const authorsToFollow = [this.user.pubkey, ...followsArray];
        
        // Updated to use 'i' tag with 'hypertuna:relay' value
        const hypertunaGroupSubId = this.relayManager.subscribe('hypertuna-groups', [
            { 
                kinds: [NostrEvents.KIND_GROUP_METADATA],
                "#i": ["hypertuna:relay"],
                authors: authorsToFollow
            }
        ], (event) => {
            console.log("Received group metadata event:", {
                id: event.id.substring(0, 8) + "...",
                pubkey: event.pubkey.substring(0, 8) + "...",
                tags: event.tags.map(t => t[0]).join(',')
            });
            
            this._processGroupMetadataEvent(event);
            
            // Extract group ID from this event
            const groupId = event.tags.find(tag => tag[0] === 'd')?.[1];
            if (groupId) {
                // Store the hypertuna ID for this group
                const hypertunaId = event.tags.find(tag => tag[0] === 'hypertuna')?.[1];
                if (hypertunaId) {
                    this.hypertunaGroups.set(hypertunaId, groupId);
                    this.groupHypertunaIds.set(groupId, hypertunaId);
                }
                
                // Subscribe to membership events for this group
                this._subscribeToGroupMembership(groupId);
            }
        });
        this.activeSubscriptions.add(hypertunaGroupSubId);
        
        // Subscribe to Hypertuna relay events (kind 30166)
        // Using the 'i' tag filter instead of 'hypertuna'
        const hypertunaRelaySubId = this.relayManager.subscribe('hypertuna-relays', [
            { kinds: [NostrEvents.KIND_HYPERTUNA_RELAY], "#i": ["hypertuna:relay"], authors: authorsToFollow }
        ], (event) => {
            console.log("Received hypertuna relay event:", {
                id: event.id.substring(0, 8) + "...",
                pubkey: event.pubkey.substring(0, 8) + "...",
                tags: event.tags.map(t => t[0]).join(',')
            });
            
            this._processHypertunaRelayEvent(event);
        });
        this.activeSubscriptions.add(hypertunaRelaySubId);

        // Subscribe to user's relay list (kind 10009)
        const relayListSub = this.relayManager.subscribe('user-relaylist', [
            { kinds: [NostrEvents.KIND_USER_RELAY_LIST], authors: [this.user.pubkey], limit: 1 }
        ], (event) => {
            this.userRelayListEvent = event;
            this._parseRelayListEvent(event);
        });
        this.activeSubscriptions.add(relayListSub);
        
        // Subscribe to group membership changes affecting user
        const membershipSubId = this.relayManager.subscribe('user-groups', [
            { 
                kinds: [
                    NostrEvents.KIND_GROUP_MEMBER_LIST,
                    NostrEvents.KIND_GROUP_ADMIN_LIST
                ],
                "#p": [this.user.pubkey]
            }
        ], (event) => {
            this._processGroupMembershipEvent(event);
            
            // Add all pubkeys from this group to relevant pubkeys
            event.tags.forEach(tag => {
                if (tag[0] === 'p' && tag[1]) {
                    this.relevantPubkeys.add(tag[1]);
                }
            });
            
            // Extract group ID
            const groupId = event.tags.find(tag => tag[0] === 'd')?.[1];
            if (groupId) {
                // Subscribe to this group's events
                this._subscribeToGroupContent(groupId);
            }
        });
        this.activeSubscriptions.add(membershipSubId);
    }
    
    /**
     * Subscribe to group membership events for a specific group
     * @param {string} groupId - Group ID
     * @private
     */
    _subscribeToGroupMembership(publicIdentifier) {
        if (!publicIdentifier) return;
        
        const subId = `group-members-${publicIdentifier}`;
        
        if (this.activeSubscriptions.has(subId)) {
            return;
        }
        
        // Subscribe to group member and admin lists using public identifier
        const actualSubId = this.relayManager.subscribe(subId, [
            { 
                kinds: [
                    NostrEvents.KIND_GROUP_MEMBER_LIST,
                    NostrEvents.KIND_GROUP_ADMIN_LIST
                ],
                "#d": [publicIdentifier] // Use public identifier in 'd' tag
            }
        ], (event) => {
            // Add all member pubkeys to relevant pubkeys
            event.tags.forEach(tag => {
                if (tag[0] === 'p' && tag[1]) {
                    this.relevantPubkeys.add(tag[1]);
                }
            });
            
            // Process the event
            if (event.kind === NostrEvents.KIND_GROUP_MEMBER_LIST) {
                this._processGroupMemberListEvent(event);
            } else if (event.kind === NostrEvents.KIND_GROUP_ADMIN_LIST) {
                this._processGroupAdminListEvent(event);
            }
        });
        
        this.activeSubscriptions.add(actualSubId);
    }
    
    /**
     * Subscribe to group content for a specific group
     * @param {string} groupId - Group ID
     * @private
     */
    _subscribeToGroupContent(groupId) {
        if (!groupId) return;
        
        const subId = `group-content-${groupId.substring(0, 8)}`;
        
        // Check if we're already subscribed
        if (this.activeSubscriptions.has(subId)) {
            return;
        }
        
        // Get relevant pubkeys for this group
        const members = this.getGroupMembers(groupId);
        const memberPubkeys = members.map(m => m.pubkey);
        
        // Add all members to relevant pubkeys
        memberPubkeys.forEach(pubkey => {
            this.relevantPubkeys.add(pubkey);
        });
        
        // Filter to only include pubkeys we're following or group members
        const relevantAuthors = [...memberPubkeys, this.user.pubkey];
        
        // Subscribe to group messages from relevant authors
        const actualSubId = this.relayManager.subscribe(subId, [
            { 
                kinds: [NostrEvents.KIND_TEXT_NOTE],
                "#h": [groupId],
                authors: relevantAuthors
            }
        ], (event) => {
            this._processGroupMessageEvent(event);
        });
        
        this.activeSubscriptions.add(actualSubId);
    }
    
    /**
     * Process an incoming event
     * @param {Object} event - Nostr event
     * @param {string} relayUrl - Source relay URL
     * @private
     */
    _processEvent(event, relayUrl) {
        console.log(`Processing event kind ${event.kind} with ID ${event.id.substring(0, 8)}...`);
        switch (event.kind) {
            case NostrEvents.KIND_METADATA:
                this._processProfileEvent(event);
                break;
                
            case NostrEvents.KIND_TEXT_NOTE:
                this._processGroupMessageEvent(event);
                break;
                
            case NostrEvents.KIND_GROUP_METADATA:
                this._processGroupMetadataEvent(event);
                break;
                
            case NostrEvents.KIND_GROUP_MEMBER_LIST:
                this._processGroupMemberListEvent(event);
                break;
                
            case NostrEvents.KIND_GROUP_ADMIN_LIST:
                this._processGroupAdminListEvent(event);
                break;
                
            case NostrEvents.KIND_HYPERTUNA_RELAY:
                this._processHypertunaRelayEvent(event);
                break;

            case NostrEvents.KIND_USER_RELAY_LIST:
                this.userRelayListEvent = event;
                this._parseRelayListEvent(event);
                break;
        }
        
        // Emit event for any listeners
        this.emit('event', { event, relayUrl });
        this.emit(`event:kind:${event.kind}`, { event, relayUrl });
    }
    
    /**
     * Process a profile metadata event with enhanced logging
     * @param {Object} event - Profile event (kind 0)
     * @private
     */
    _processProfileEvent(event) {
        try {
            console.log(`Processing profile event:`, {
                pubkey: event.pubkey.substring(0, 8) + '...',
                created_at: event.created_at,
                content_length: event.content.length
            });
            
            const profile = JSON.parse(event.content);
            console.log(`Parsed profile data:`, {
                name: profile.name,
                about: profile.about ? profile.about.substring(0, 30) + '...' : undefined,
                picture: profile.picture ? 'present' : undefined
            });
            
            this.cachedProfiles.set(event.pubkey, {
                ...profile,
                pubkey: event.pubkey,
                updated_at: event.created_at
            });
            
            // Update current user if it's our profile
            if (this.user && event.pubkey === this.user.pubkey) {
                console.log(`Updating current user profile`);
                this.user = {
                    ...this.user,
                    ...profile
                };
                this.emit('user:update', { user: this.user });
            }
            
            this.emit('profile:update', { 
                pubkey: event.pubkey, 
                profile 
            });
        } catch (e) {
            console.error('Error processing profile event:', e);
        }
    }
    
    /**
     * Process a group metadata event
     * @param {Object} event - Group metadata event (kind 39000)
     * @private
     */
     _processGroupMetadataEvent(event) {
        console.log(`Processing group metadata event with ID: ${event.id.substring(0, 8)}... and kind: ${event.kind}`);
        console.log(`Event content: ${event.content}`);
        console.log(`Event tags:`, JSON.stringify(event.tags));
        
        // Check if this is a Hypertuna event by looking for the identifier tag
        const isHypertunaEvent = event.tags.some(tag => tag[0] === 'i' && tag[1] === 'hypertuna:relay');
        console.log(`Is Hypertuna event: ${isHypertunaEvent}`);
        
        const groupData = NostrEvents.parseGroupMetadata(event);
        if (!groupData) {
            console.warn(`Failed to parse group metadata from event: ${event.id.substring(0, 8)}...`);
            return;
        }

        // The groupData.id will now be the public identifier
        const publicIdentifier = groupData.id;
        
        console.log(`Parsed group data with public identifier: ${publicIdentifier}`);
        
        console.log(`Parsed group data:`, {
            id: groupData.id,
            name: groupData.name,
            hypertunaId: groupData.hypertunaId,
            createdAt: groupData.createdAt,
            pubkey: groupData.event?.pubkey?.substring(0, 8) + '...'
        });
        
        // Check if this is a Hypertuna group
        const hypertunaId = NostrEvents._getTagValue(event, 'hypertuna');
        console.log(`Extracted hypertunaId: ${hypertunaId}`);
        
        // Only process the most recent event for each group ID
        const existingGroup = this.groups.get(groupData.id);
        if (existingGroup && existingGroup.createdAt > groupData.createdAt) {
            console.log(`Skipping older metadata event for group ${groupData.id}`);
            return;
        }
        
        // Update or add group
        this.groups.set(groupData.id, groupData);
        console.log(`Group ${groupData.id} added to groups map. Total groups: ${this.groups.size}`);
        
        // Store hypertuna mapping if available
        if (groupData.hypertunaId) {
            this.hypertunaGroups.set(groupData.hypertunaId, publicIdentifier);
            this.groupHypertunaIds.set(publicIdentifier, groupData.hypertunaId);
            console.log(`Stored hypertuna mapping: ${hypertunaId} -> ${groupData.id}`);
        }
        
        // Emit event
        this.emit('group:metadata', { 
            groupId: publicIdentifier, // Now using public identifier
            group: groupData 
        });
        
        // Subscribe to membership events for this group
        this._subscribeToGroupMembership(publicIdentifier);
    }
    
    /**
     * Process a Hypertuna relay event
     * @param {Object} event - Hypertuna relay event (kind 30166)
     * @private
     */
    _processHypertunaRelayEvent(event) {
        console.log(`Processing Hypertuna relay event with ID: ${event.id.substring(0, 8)}...`);
        
        // Check for the identifier tag
        const isHypertunaRelay = event.tags.some(tag => tag[0] === 'i' && tag[1] === 'hypertuna:relay');
        console.log(`Has hypertuna:relay identifier: ${isHypertunaRelay}`);
        
        // Extract hypertuna ID from the event
        const hypertunaId = NostrEvents._getTagValue(event, 'hypertuna');
        if (!hypertunaId) {
            console.warn('Hypertuna relay event missing hypertuna tag');
            return;
        }
        
        // Extract group ID from the event
        const groupId = NostrEvents._getTagValue(event, 'h');
        if (!groupId) {
            console.warn('Hypertuna relay event missing h tag');
            return;
        }

        const relayUrl = NostrEvents._getTagValue(event, 'd');
        if (relayUrl) {
            this.hypertunaRelayUrls.set(groupId, relayUrl);
        }
        
        console.log(`Processing Hypertuna relay event for group ${groupId} with hypertuna ID ${hypertunaId}`);
        
        // Store mappings
        this.hypertunaGroups.set(hypertunaId, groupId);
        this.groupHypertunaIds.set(groupId, hypertunaId);
        
        // Emit event
        this.emit('hypertuna:relay', {
            hypertunaId,
            groupId,
            event
        });
        
        // Force a check for the associated metadata event
        const existingGroups = this.getGroups();
        console.log(`After processing relay event - Current groups: ${existingGroups.length}`);
    }
    
    /**
     * Process a group member list event
     * @param {Object} event - Group member list event (kind 39002)
     * @private
     */
    _processGroupMemberListEvent(event) {
        // Extract public identifier from 'd' tag
        const publicIdentifier = NostrEvents._getTagValue(event, 'd');
        if (!publicIdentifier) return;
        
        const members = NostrEvents.parseGroupMembers(event);
        this.groupMembers.set(publicIdentifier, members);
        
        // Add all member pubkeys to relevant pubkeys
        members.forEach(member => {
            this.relevantPubkeys.add(member.pubkey);
        });
        
        // Emit events
        this.emit('group:members', { 
            groupId: publicIdentifier, // Using public identifier
            members 
        });
        
        // Check if current user is a member
        if (this.user) {
            const isMember = members.some(m => m.pubkey === this.user.pubkey);
            this.emit('group:membership', { 
                groupId: publicIdentifier,
                isMember 
            });
            
            if (isMember) {
                this._subscribeToGroupContent(publicIdentifier);
            }
        }
    }
    
    /**
     * Process a group admin list event
     * @param {Object} event - Group admin list event (kind 39001)
     * @private
     */
    _processGroupAdminListEvent(event) {
        const groupId = NostrEvents._getTagValue(event, 'd');
        if (!groupId) return;
        
        const admins = NostrEvents.parseGroupAdmins(event);
        this.groupAdmins.set(groupId, admins);
        
        // Add all admin pubkeys to relevant pubkeys
        admins.forEach(admin => {
            this.relevantPubkeys.add(admin.pubkey);
        });
        
        // Emit events
        this.emit('group:admins', { 
            groupId, 
            admins 
        });
        
        // Check if current user is an admin
        if (this.user) {
            const isAdmin = admins.some(a => a.pubkey === this.user.pubkey);
            this.emit('group:admin', { 
                groupId, 
                isAdmin 
            });
        }
    }
    
    /**
     * Process a group message event
     * @param {Object} event - Message event (kind 1 with h tag)
     * @private
     */
    _processGroupMessageEvent(event) {
        // Check if it's a group message (has h tag)
        const groupId = event.tags.find(tag => tag[0] === 'h')?.[1];
        if (!groupId) return;
        
        // Add to group messages
        if (!this.groupMessages.has(groupId)) {
            this.groupMessages.set(groupId, []);
        }
        
        const messages = this.groupMessages.get(groupId);
        
        // Check if we already have this message
        if (!messages.some(m => m.id === event.id)) {
            messages.push(event);
            messages.sort((a, b) => a.created_at - b.created_at);
            
            // Emit event
            this.emit('group:message', { 
                groupId, 
                message: event 
            });
        }
    }
    
    /**
     * Process any group membership event
     * @param {Object} event - Group membership event
     * @private
     */
    _processGroupMembershipEvent(event) {
        if (event.kind === NostrEvents.KIND_GROUP_MEMBER_LIST) {
            this._processGroupMemberListEvent(event);
        } else if (event.kind === NostrEvents.KIND_GROUP_ADMIN_LIST) {
            this._processGroupAdminListEvent(event);
        }
    }
    
    /**
     * Subscribe to all events for a specific group
     * @param {string} groupId - Group ID
     * @returns {string} - Subscription ID
     */
    subscribeToGroup(groupId) {
        if (!groupId) return null;
        
        // Subscribe to group metadata, membership and content
        this._subscribeToGroupMembership(groupId);
        this._subscribeToGroupContent(groupId);
        
        return groupId;
    }
    
    /**
     * Unsubscribe from a group
     * @param {string} groupId - Group ID
     */
    unsubscribeFromGroup(groupId) {
        if (!groupId) return;
        
        // Find and remove subscriptions related to this group
        const subscriptionsToRemove = [];
        
        this.activeSubscriptions.forEach(subId => {
            if (subId.includes(groupId) || 
                subId.includes(`group-members-${groupId.substring(0, 8)}`) ||
                subId.includes(`group-content-${groupId.substring(0, 8)}`)) {
                subscriptionsToRemove.push(subId);
            }
        });
        
        // Unsubscribe from each found subscription
        subscriptionsToRemove.forEach(subId => {
            this.relayManager.unsubscribe(subId);
            this.activeSubscriptions.delete(subId);
        });
    }
    
    /**
     * Fetch user profile with improved handling of profile picture
     * @param {string} pubkey - Public key
     * @returns {Promise<Object>} - Profile data
     */
    async fetchUserProfile(pubkey) {
        // Check cache first
        if (this.cachedProfiles.has(pubkey)) {
            const cachedProfile = this.cachedProfiles.get(pubkey);
            console.log(`Using cached profile for ${pubkey.substring(0, 8)}...`, cachedProfile);
            return cachedProfile;
        }
        
        // Create a temporary subscription for this profile
        const subId = `profile-${pubkey.substring(0, 8)}`;
        
        console.log(`Creating subscription for profile: ${pubkey.substring(0, 8)}...`);
        
        return new Promise((resolve) => {
            let timeoutId;
            
            const handleProfileEvent = (event) => {
                if (event.kind === 0 && event.pubkey === pubkey) {
                    console.log(`Received profile event for ${pubkey.substring(0, 8)}:`, {
                        id: event.id.substring(0, 8) + '...',
                        created_at: event.created_at,
                        content_length: event.content.length
                    });
                    
                    try {
                        const profile = JSON.parse(event.content);
                        console.log(`Parsed profile data for ${pubkey.substring(0, 8)}:`, profile);
                        
                        this.cachedProfiles.set(pubkey, {
                            ...profile,
                            pubkey,
                            updated_at: event.created_at
                        });
                        
                        // Clean up
                        clearTimeout(timeoutId);
                        this.relayManager.unsubscribe(subId);
                        
                        resolve(profile);
                    } catch (e) {
                        console.error('Error parsing profile:', e);
                    }
                }
            };
            
            this.relayManager.subscribe(subId, [
                { kinds: [0], authors: [pubkey] }
            ], handleProfileEvent);
            
            // Set a timeout to resolve with default profile if no profile found
            timeoutId = setTimeout(() => {
                this.relayManager.unsubscribe(subId);
                const defaultProfile = { 
                    name: `User_${NostrUtils.truncatePubkey(pubkey)}`,
                    pubkey
                };
                console.log(`Profile fetch timeout for ${pubkey.substring(0, 8)}, using default:`, defaultProfile);
                this.cachedProfiles.set(pubkey, defaultProfile);
                resolve(defaultProfile);
            }, 5000);
        });
    }
    
    /**
     * Get all available groups filtered for Hypertuna groups
     * @returns {Array} - Array of groups
     */
    getGroups() {
        // Get all groups
        const allGroups = Array.from(this.groups.values());
        console.log(`Total groups in map: ${allGroups.length}`);
        
        if (allGroups.length > 0) {
            console.log('Groups in map:', allGroups.map(g => ({
                id: g.id,
                name: g.name,
                hypertunaId: g.hypertunaId,
                content: g.event?.content,
                pubkey: g.event?.pubkey?.substring(0, 8) + '...',
                createdAt: g.createdAt
            })));
        } else {
            console.log('No groups found in the map');
        }
        
        // For debugging, return all groups regardless of filters
        if (allGroups.length === 0) {
            console.log('Returning all groups for debugging');
            return allGroups;
        }
        
        // Filter for Hypertuna groups using the identifier tag
        const hypertunaGroups = allGroups.filter(group => {
            // Check if this is a Hypertuna relay group using the identifier tag
            const isHypertunaRelay = group.isHypertunaRelay || 
                                  (group.event && group.event.tags.some(tag => 
                                      tag[0] === 'i' && tag[1] === 'hypertuna:relay'));
            
            // Check if it has a hypertuna ID
            const hasHypertunaId = !!group.hypertunaId;
            
            console.log(`Group ${group.id}: isHypertunaRelay=${isHypertunaRelay}, hasHypertunaId=${hasHypertunaId}`);
            
            // For debugging, include all groups to see what's available
            return true;
        });
        
        console.log(`Filtered groups: ${hypertunaGroups.length}`);
        
        if (hypertunaGroups.length > 0) {
            console.log('Filtered groups:', hypertunaGroups.map(g => g.name));
        }
        
        // Sort by creation date (newest first)
        hypertunaGroups.sort((a, b) => b.createdAt - a.createdAt);
        
        return hypertunaGroups;
    }
    
    /**
     * Get a specific group by ID
     * @param {string} groupId - Group ID
     * @returns {Object|null} - Group data or null if not found
     */
    getGroupById(groupId) {
        return this.groups.get(groupId) || null;
    }
    
    /**
     * Get members of a group
     * @param {string} groupId - Group ID
     * @returns {Array} - Array of member objects
     */
    getGroupMembers(groupId) {
        return this.groupMembers.get(groupId) || [];
    }
    
    /**
     * Get admins of a group
     * @param {string} groupId - Group ID
     * @returns {Array} - Array of admin objects
     */
    getGroupAdmins(groupId) {
        return this.groupAdmins.get(groupId) || [];
    }
    
    /**
     * Check if a user is a member of a group
     * @param {string} groupId - Group ID
     * @param {string} pubkey - Public key
     * @returns {boolean} - Whether the user is a member
     */
    isGroupMember(groupId, pubkey) {
        const members = this.groupMembers.get(groupId) || [];
        const isMember = members.some(member => member.pubkey === pubkey);
        
        console.log(`Checking if ${pubkey.substring(0, 8)}... is member of ${groupId.substring(0, 8)}...`, {
            result: isMember,
            totalMembers: members.length,
            memberPubkeys: members.map(m => m.pubkey.substring(0, 8) + '...')
        });
        
        return isMember;
    }
    
    /**
     * Check if a user is an admin of a group
     * @param {string} groupId - Group ID
     * @param {string} pubkey - Public key
     * @returns {boolean} - Whether the user is an admin
     */
    isGroupAdmin(groupId, pubkey) {
        const admins = this.groupAdmins.get(groupId) || [];
        const isAdmin = admins.some(admin => admin.pubkey === pubkey);
        
        console.log(`Checking if ${pubkey.substring(0, 8)}... is admin of ${groupId.substring(0, 8)}...`, {
            result: isAdmin,
            totalAdmins: admins.length,
            adminPubkeys: admins.map(a => a.pubkey.substring(0, 8) + '...')
        });
        
        return isAdmin;
    }
    
    
    /**
     * Get messages for a group
     * @param {string} groupId - Group ID
     * @returns {Array} - Array of message events
     */
    getGroupMessages(groupId) {
        return this.groupMessages.get(groupId) || [];
    }

    getUserRelayGroupIds() {
        return Array.from(this.userRelayIds).filter(Boolean);
    }

    isRelayListReady() {
        return this.relayListLoaded;
    }
    
    /**
     * Create a new group
     * @param {Object} groupData - Group data
     * @param {string} groupData.name - Group name
     * @param {string} groupData.about - Group description
     * @param {boolean} groupData.isPublic - Whether the group is public
     * @param {boolean} groupData.isOpen - Whether the group is open to join
     * @returns {Promise<Object>} - Collection of created events
     */
    async createGroup(groupData) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        // Get npub if not provided
        const npub = groupData.npub || NostrUtils.hexToNpub(this.user.pubkey);
        // Validate groupData
        if (!groupData.name || typeof groupData.name !== 'string') {
            throw new Error('Group name is required and must be a string');
        }
        
        // Normalize groupData to ensure all values are of the expected types
        const normalizedData = {
            name: String(groupData.name),
            about: groupData.about ? String(groupData.about) : '',
            isPublic: Boolean(groupData.isPublic),
            isOpen: Boolean(groupData.isOpen),
            identifier: groupData.identifier || null,
            proxyServer: groupData.proxyServer || ''
        };
        
        console.log('Creating group with normalized data:', normalizedData);
        
        // Create all three events for the group creation
        const eventsCollection = await NostrEvents.createGroupCreationEvent(
            normalizedData.name,
            normalizedData.about,
            normalizedData.isPublic,
            normalizedData.isOpen,
            this.user.privateKey,
            normalizedData.identifier,
            normalizedData.proxyServer,
            npub
        );
        
        const {
            groupCreateEvent,
            metadataEvent,
            hypertunaEvent,
            groupId,
            hypertunaId
        } = eventsCollection;
        
        // Extract relay URL from hypertuna event
        const relayUrl = NostrEvents._getTagValue(hypertunaEvent, 'd');
        
        if (normalizedData.isPublic) {
            // PUBLIC RELAY: Publish to discovery relays first
            const discoveryRelays = Array.from(this.relayManager.discoveryRelays);
            
            await Promise.all([
                this.relayManager.publishToRelays(groupCreateEvent, discoveryRelays),
                this.relayManager.publishToRelays(metadataEvent, discoveryRelays),
                this.relayManager.publishToRelays(hypertunaEvent, discoveryRelays)
            ]);
            
            console.log('Published public relay events to discovery relays');
        }
        
        // Update user relay list (always goes to discovery relays)
        if (relayUrl) {
            await this.updateUserRelayList(hypertunaId, relayUrl, normalizedData.isPublic, true);
        }
        
        // Connect to the new group relay
        if (relayUrl) {
            await this.connectToGroupRelay(groupId, relayUrl);
            
            // Publish events to the group relay itself
            await Promise.all([
                this.relayManager.publishToRelays(groupCreateEvent, [relayUrl]),
                this.relayManager.publishToRelays(metadataEvent, [relayUrl]),
                this.relayManager.publishToRelays(hypertunaEvent, [relayUrl])
            ]);
            
            console.log('Published relay events to group relay itself');
        }
        
        // Also create and publish member and admin list events
        console.log('Creating admin and member list events');
        
        try {
            // Create admin list event
            const adminEvent = await NostrEvents.createEvent(
                NostrEvents.KIND_GROUP_ADMIN_LIST,
                `Admin list for group: ${groupData.name}`,
                [
                    ['d', groupId],
                    ['hypertuna', groupId],
                    ['p', this.user.pubkey, 'admin']
                ],
                this.user.privateKey
            );
            
            // Create member list event
            const memberEvent = await NostrEvents.createEvent(
                NostrEvents.KIND_GROUP_MEMBER_LIST,
                `Member list for group: ${groupData.name}`,
                [
                    ['d', groupId],
                    ['hypertuna', groupId],
                    ['p', this.user.pubkey, 'member']
                ],
                this.user.privateKey
            );
            
            // Publish both events
            await Promise.all([
                this.relayManager.publish(adminEvent),
                this.relayManager.publish(memberEvent)
            ]);
            
            console.log('Admin and member list events published');
        } catch (e) {
            console.error('Error publishing admin/member events:', e);
            // Continue even if this fails
        }
        
        // Subscribe to this group
        this.subscribeToGroup(groupId);

        if (relayUrl) {
            await this.updateUserRelayList(hypertunaId, relayUrl, normalizedData.isPublic, true);
        }

        return eventsCollection;
    }
    
    /**
     * Join a group
     * @param {string} groupId - Group ID
     * @param {string} inviteCode - Optional invite code for closed groups
     * @returns {Promise<Object>} - Join request event
     */
    async joinGroup(groupId, inviteCode = null) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        
        const event = await NostrEvents.createGroupJoinRequest(
            groupId,
            inviteCode,
            this.user.privateKey
        );
        
        // Publish the event
        await this.relayManager.publish(event);
        
        // Add this group to subscriptions
        this.subscribeToGroup(groupId);

        const hypertunaId = this.groupHypertunaIds.get(groupId);
        const relayUrl = this.hypertunaRelayUrls.get(groupId) || '';
        const group = this.groups.get(groupId);
        const isPublic = group ? group.isPublic : true;
        if (hypertunaId && relayUrl) {
            await this.updateUserRelayList(hypertunaId, relayUrl, isPublic, true);
        }

        return event;
    }
    
    /**
     * Leave a group
     * @param {string} groupId - Group ID
     * @returns {Promise<Object>} - Leave request event
     */
    async leaveGroup(groupId) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        
        const event = await NostrEvents.createGroupLeaveRequest(
            groupId,
            this.user.privateKey
        );
        
        // Publish the event
        await this.relayManager.publish(event);
        
        // Remove this group from subscriptions
        this.unsubscribeFromGroup(groupId);

        const hypertunaId = this.groupHypertunaIds.get(groupId);
        const relayUrl = this.hypertunaRelayUrls.get(groupId) || '';
        const group = this.groups.get(groupId);
        const isPublic = group ? group.isPublic : true;
        if (hypertunaId && relayUrl) {
            await this.updateUserRelayList(hypertunaId, relayUrl, isPublic, false);
        }

        return event;
    }
    
    /**
     * Send a message to a group
     * @param {string} groupId - Group ID
     * @param {string} content - Message content
     * @returns {Promise<Object>} - Message event
     */
    async sendGroupMessage(groupId, content) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        
        // Check if user is a member
        if (!this.isGroupMember(groupId, this.user.pubkey)) {
            throw new Error('You must be a member of the group to send messages');
        }
        
        // Get previous events for timeline references
        const previousMessages = this.getGroupMessages(groupId);
        const previousRefs = NostrUtils.getPreviousEventRefs(
            previousMessages,
            this.user.pubkey
        );
        
        // Create message event
        const event = await NostrEvents.createGroupMessage(
            groupId,
            content,
            previousRefs,
            this.user.privateKey
        );
        
        // Publish only to the group's relay
        const groupRelayUrl = this.groupRelayUrls.get(groupId);
        if (groupRelayUrl) {
            await this.relayManager.publishToRelays(event, [groupRelayUrl]);
        } else {
            throw new Error('Group relay not connected');
        }
        
        return event;
    }
    
    /**
     * Create an invite code for a group
     * @param {string} groupId - Group ID
     * @returns {Promise<Object>} - Invite creation event
     */
    async createGroupInvite(groupId) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        
        // Check if user is an admin
        if (!this.isGroupAdmin(groupId, this.user.pubkey)) {
            throw new Error('You must be an admin to create invite codes');
        }
        
        const event = await NostrEvents.createGroupInviteEvent(
            groupId,
            this.user.privateKey
        );
        
        // Publish the event
        await this.relayManager.publish(event);
        
        return event;
    }
    
    /**
     * Add a member to a group or update their role
     * @param {string} groupId - Group ID
     * @param {string} pubkey - Public key of the user to add
     * @param {Array} roles - Array of roles to assign
     * @returns {Promise<Object>} - Put user event
     */
    async addGroupMember(publicIdentifier, pubkey, roles = ['member']) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        
        // Check if user is an admin using public identifier
        if (!this.isGroupAdmin(publicIdentifier, this.user.pubkey)) {
            throw new Error('You must be an admin to add members');
        }
        
        const event = await NostrEvents.createPutUserEvent(
            publicIdentifier, // Pass public identifier
            pubkey,
            roles,
            this.user.privateKey
        );
        
        // Add this pubkey to relevant pubkeys
        this.relevantPubkeys.add(pubkey);
        
        // Publish the event
        await this.relayManager.publish(event);
        
        return event;
    }
    
    /**
     * Remove a member from a group
     * @param {string} groupId - Group ID
     * @param {string} pubkey - Public key of the user to remove
     * @returns {Promise<Object>} - Remove user event
     */
    async removeGroupMember(publicIdentifier, pubkey) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        
        // Check if user is an admin
        if (!this.isGroupAdmin(publicIdentifier, this.user.pubkey)) {
            throw new Error('You must be an admin to remove members');
        }
        
        const event = await NostrEvents.createRemoveUserEvent(
            publicIdentifier,
            pubkey,
            this.user.privateKey
        );
        
        await this.relayManager.publish(event);
        return event;
    }
    
    /**
     * Update group metadata
     * @param {string} groupId - Group ID
     * @param {Object} metadata - Updated metadata
     * @returns {Promise<Object>} - Collection of edit metadata events
     */
    async updateGroupMetadata(publicIdentifier, metadata) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        
        // Check if user is an admin
        if (!this.isGroupAdmin(publicIdentifier, this.user.pubkey)) {
            throw new Error('You must be an admin to update group settings');
        }
        
        const events = await NostrEvents.createGroupMetadataEditEvents(
            publicIdentifier,
            metadata,
            this.user.privateKey
        );
        
        // Publish both events
        await Promise.all([
            this.relayManager.publish(events.editEvent),
            this.relayManager.publish(events.updatedMetadataEvent)
        ]);
        
        // Process the updated metadata event to update local state
        this._processGroupMetadataEvent(events.updatedMetadataEvent);
        
        return events;
    }
    
    /**
     * Delete a group
     * @param {string} groupId - Group ID
     * @returns {Promise<Object>} - Delete group event
     */
    async deleteGroup(groupId) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        
        // Check if user is an admin
        if (!this.isGroupAdmin(groupId, this.user.pubkey)) {
            throw new Error('You must be an admin to delete the group');
        }
        
        const event = await NostrEvents.createGroupDeleteEvent(
            groupId,
            this.user.privateKey
        );
        
        // Publish the event
        await this.relayManager.publish(event);

        // Remove subscriptions for this group
        this.unsubscribeFromGroup(groupId);

        const hypertunaId = this.groupHypertunaIds.get(groupId);
        const relayUrl = this.hypertunaRelayUrls.get(groupId) || '';
        const group = this.groups.get(groupId);
        const isPublic = group ? group.isPublic : true;
        if (hypertunaId && relayUrl) {
            await this.updateUserRelayList(hypertunaId, relayUrl, isPublic, false);
        }

        return event;
    }
    
    /**
     * Update user profile
     * @param {Object} profile - Profile data
     * @returns {Promise<Object>} - Profile event
     */
    async updateProfile(profile) {
        if (!this.user || !this.user.privateKey) {
            throw new Error('User not logged in');
        }
        
        const event = await NostrEvents.createProfileEvent(
            profile,
            this.user.privateKey
        );
        
        // Publish the event
        await this.relayManager.publish(event);
        
        // Update local user data
        this.user = {
            ...this.user,
            ...profile
        };
        
        return event;
    }

    /**
     * Cleanup and disconnect all resources
     */
    cleanup() {
        // Clear all subscriptions
        this.activeSubscriptions.forEach(subId => {
            this.relayManager.unsubscribe(subId);
        });
        this.activeSubscriptions.clear();
        
        // Clear all cached data
        this.groups.clear();
        this.groupMembers.clear();
        this.groupAdmins.clear();
        this.groupMessages.clear();
        this.groupInvites.clear();
        this.cachedProfiles.clear();
        this.follows.clear();
        this.relevantPubkeys.clear();
        this.hypertunaGroups.clear();
        this.groupHypertunaIds.clear();
        this.hypertunaRelayUrls.clear();
        this.userRelayIds.clear();
        this.userRelayListEvent = null;
        
        // Clear event listeners
        this.eventListeners.clear();
        this.eventCallbacks = [];
    }
    
    /**
     * Add event listener
     * @param {string} eventName - Event name
     * @param {Function} callback - Callback function
     */
    on(eventName, callback) {
        if (!this.eventListeners.has(eventName)) {
            this.eventListeners.set(eventName, []);
        }
        
        this.eventListeners.get(eventName).push(callback);
    }
    
    /**
     * Remove event listener
     * @param {string} eventName - Event name
     * @param {Function} callback - Callback function
     */
    off(eventName, callback) {
        if (!this.eventListeners.has(eventName)) {
            return;
        }
        
        const listeners = this.eventListeners.get(eventName);
        const index = listeners.indexOf(callback);
        
        if (index !== -1) {
            listeners.splice(index, 1);
        }
    }
    
    /**
     * Emit an event
     * @param {string} eventName - Event name
     * @param {Object} data - Event data
     * @private
     */
    emit(eventName, data) {
        if (!this.eventListeners.has(eventName)) {
            return;
        }
        
        const listeners = this.eventListeners.get(eventName);
        listeners.forEach(callback => {
            try {
                callback(data);
            } catch (e) {
                console.error(`Error in event listener for ${eventName}:`, e);
            }
        });
    }
}

export default NostrGroupClient;
