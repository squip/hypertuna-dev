/**
 * WebSocketRelayManager.js
 * Handles connections to nostr relays and their lifecycle
 */

class WebSocketRelayManager {
    constructor() {
        this.relays = new Map(); // Map of relay URL -> {conn: WebSocket, status: 'connecting'|'open'|'closed', subscriptions: Map}
        this.globalSubscriptions = new Map(); // Map of subscriptionId -> {filters, callbacks}
        this.eventCallbacks = []; // Array of callbacks for received events
        this.connectCallbacks = []; // Callbacks for relay connections
        this.disconnectCallbacks = []; // Callbacks for relay disconnections
        
        // Rate limiting between messages for each relay
        this.minTimeBetweenRequests = 250; // ms between messages per relay

        // Retry configuration for publishes that get rate limited
        this.maxPublishRetries = 2;
        this.retryDelay = 2000; // starting delay in ms for rate-limit retries
    }

    /**
     * Add a relay to the connection pool
     * @param {string} url - The relay URL (e.g., wss://relay.damus.io)
     * @returns {Promise} - Resolves when connected
     */
    addRelay(url) {
        // Normalize URL
        if (!url.startsWith('wss://') && !url.startsWith('ws://')) {
            url = 'wss://' + url;
        }

        // Check if already connected
        if (this.relays.has(url)) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            try {
                const ws = new WebSocket(url);
                const relayData = {
                    conn: ws,
                    status: 'connecting',
                    subscriptions: new Map(),
                    pendingMessages: [],
                    requestQueue: [],
                    processingQueue: false,
                    lastRequestTime: 0
                };
                
                this.relays.set(url, relayData);

                ws.onopen = () => {
                    console.log(`Connected to relay: ${url}`);
                    relayData.status = 'open';
                    
                    // Send any pending messages with rate limiting
                    if (relayData.pendingMessages.length > 0) {
                        relayData.pendingMessages.forEach(msg => {
                            this._queueRelayRequest(url, () => {
                                if (ws.readyState === WebSocket.OPEN) {
                                    ws.send(msg);
                                }
                            });
                        });
                        relayData.pendingMessages = [];
                    }
                    
                    // Apply global subscriptions to this relay
                    this.globalSubscriptions.forEach((subData, subId) => {
                        this._subscribeOnRelay(url, subId, subData.filters);
                    });
                    
                    // Notify connect listeners
                    this.connectCallbacks.forEach(callback => callback(url));
                    
                    resolve();
                };

                ws.onclose = () => {
                    console.log(`Disconnected from relay: ${url}`);
                    relayData.status = 'closed';
                    
                    // Notify disconnect listeners
                    this.disconnectCallbacks.forEach(callback => callback(url));
                    
                    // Only attempt reconnection if not explicitly prevented
                    if (!relayData.preventReconnect) {
                        // Attempt reconnection after delay
                        setTimeout(() => {
                            this.addRelay(url).catch(console.error);
                        }, 5000);
                    } else {
                        // Clean up the relay from our map
                        this.relays.delete(url);
                    }
                };

                ws.onerror = (error) => {
                    console.error(`Error with relay ${url}:`, error);
                    // If still connecting, reject the promise
                    if (relayData.status === 'connecting') {
                        reject(error);
                    }
                };

                ws.onmessage = (event) => {
                    try {
                        const data = JSON.parse(event.data);
                        this._handleRelayMessage(url, data);
                    } catch (e) {
                        console.error(`Error parsing message from ${url}:`, e);
                    }
                };
            } catch (e) {
                console.error(`Error connecting to ${url}:`, e);
                reject(e);
            }
        });
    }

    /**
     * Process the queue for a specific relay with rate limiting
     * @param {string} relayUrl - Relay identifier
     * @private
     */
    _processRelayQueue(relayUrl) {
        const relay = this.relays.get(relayUrl);
        if (!relay) return;

        if (relay.requestQueue.length === 0) {
            relay.processingQueue = false;
            return;
        }

        relay.processingQueue = true;
        const now = Date.now();
        const timeSinceLast = now - relay.lastRequestTime;

        if (timeSinceLast < this.minTimeBetweenRequests) {
            setTimeout(() => this._processRelayQueue(relayUrl),
                this.minTimeBetweenRequests - timeSinceLast);
            return;
        }

        const request = relay.requestQueue.shift();
        relay.lastRequestTime = Date.now();

        try {
            request();
        } catch (e) {
            console.error(`Error processing request for ${relayUrl}:`, e);
        }

        if (relay.requestQueue.length > 0) {
            setTimeout(() => this._processRelayQueue(relayUrl),
                this.minTimeBetweenRequests);
        } else {
            relay.processingQueue = false;
        }
    }

    // Add this method to WebSocketRelayManager class
_validateEvent(event) {
    // Check required fields
    if (!event || !event.id || !event.pubkey || !event.sig) {
        return { valid: false, reason: 'Missing required fields (id, pubkey, or sig)' };
    }
    
    // Check for valid timestamps
    if (!event.created_at || typeof event.created_at !== 'number') {
        return { valid: false, reason: 'Invalid or missing created_at timestamp' };
    }
    
    // Check event kind
    if (typeof event.kind !== 'number') {
        return { valid: false, reason: 'Invalid or missing event kind' };
    }
    
    // Check that tags is an array
    if (!Array.isArray(event.tags)) {
        return { valid: false, reason: 'Tags must be an array' };
    }
    
    // Validate signature length
    if (event.sig.length !== 128) {
        return { valid: false, reason: `Invalid signature length: ${event.sig.length}, expected 128` };
    }
    
    return { valid: true };
}

    /**
     * Queue a request to be sent to a relay with rate limiting
     * @param {Function} request - Function to execute
     * @private
     */
    _queueRelayRequest(relayUrl, request) {
        const relay = this.relays.get(relayUrl);
        if (!relay) return;

        relay.requestQueue.push(request);

        if (!relay.processingQueue) {
            this._processRelayQueue(relayUrl);
        }
    }

    /**
     * Remove a relay from the connection pool
     * @param {string} url - The relay URL
     */
    removeRelay(url) {
        if (!this.relays.has(url)) {
            return;
        }

        const relay = this.relays.get(url);
        if (relay.conn && relay.conn.readyState !== WebSocket.CLOSED) {
            relay.conn.close();
        }
        
        this.relays.delete(url);
    }

    /**
     * Get all connected relays
     * @returns {Array} - Array of relay URLs
     */
    getRelays() {
        return Array.from(this.relays.keys());
    }

    /**
     * Get relay connection status
     * @param {string} url - The relay URL
     * @returns {string|null} - Status or null if relay not found
     */
    getRelayStatus(url) {
        if (!this.relays.has(url)) {
            return null;
        }
        return this.relays.get(url).status;
    }

    /**
     * Generate a shorter subscription ID based on the original and index
     * @param {string} subscriptionId - The original subscription ID
     * @returns {string} - A shorter subscription ID
     * @private
     */
    _shortenSubscriptionId(subscriptionId) {
        // If already short enough, return as is
        if (subscriptionId.length <= 8) {
            return subscriptionId;
        }
        
        // Otherwise generate a short ID based on the first 8 characters
        return subscriptionId.substring(0, 8);
    }

    /**
     * Create a subscription for events matching the given filters
     * @param {string} subscriptionId - A unique ID for this subscription
     * @param {Array} filters - Array of filter objects
     * @param {Function} callback - Function to call when events arrive
     */
    subscribe(subscriptionId, filters, callback, options = {}) {
        // Create a shorter subscription ID for the wire protocol
        const shortSubId = this._shortenSubscriptionId(subscriptionId);
    
        // Check for existing subscription with same filters
        if (this.globalSubscriptions.has(subscriptionId)) {
            const existing = this.globalSubscriptions.get(subscriptionId);
            if (JSON.stringify(existing.filters) === JSON.stringify(filters)) {
                console.log(`Subscription ${subscriptionId} already exists, skipping`);
                if (callback) existing.callbacks.push(callback);
                return subscriptionId;
            }
    
            // Filters changed - unsubscribe first
            this.unsubscribe(subscriptionId);
        }
    
        console.log(`Creating subscription: ${subscriptionId} (${shortSubId})`);
        console.log(`Subscription filters:`, JSON.stringify(filters));
        console.log(`Subscription options:`, options);
    
        // Add to global subscriptions with the original ID as key
        this.globalSubscriptions.set(subscriptionId, {
            shortId: shortSubId,
            filters,
            callbacks: callback ? [callback] : [],
            suppressGlobalEvents: options.suppressGlobalEvents || false // Add this
        });
    
        // Apply to all connected relays
        this.relays.forEach((relay, url) => {
            if (relay.status === 'open') {
                console.log(`Sending subscription to relay: ${url}`);
                this._subscribeOnRelay(url, subscriptionId, filters);
            }
        });
    
        return subscriptionId;
    }
    
    
    /**
     * Internal method to subscribe on a specific relay
     * @private
     */
    _subscribeOnRelay(relayUrl, subscriptionId, filters) {
        const relay = this.relays.get(relayUrl);
        if (!relay || relay.status !== 'open') {
            console.log(`Cannot subscribe to ${relayUrl}, relay not connected`);
            return;
        }
    
        // Get the short ID for this subscription
        const shortSubId = this.globalSubscriptions.get(subscriptionId).shortId;
    
        // Avoid duplicate subscriptions on the relay
        if (relay.subscriptions.has(subscriptionId)) {
            const existing = relay.subscriptions.get(subscriptionId);
            if (JSON.stringify(existing.filters) === JSON.stringify(filters)) {
                console.log(`Relay ${relayUrl} already has subscription ${subscriptionId}`);
                return;
            }
        }

        // Create a REQ message
        const reqMsg = JSON.stringify(['REQ', shortSubId, ...filters]);
        console.log(`REQ message to ${relayUrl}:`, reqMsg);
        
        // Queue the subscription request for this relay
        this._queueRelayRequest(relayUrl, () => {
            if (relay.status === 'open') {
                relay.conn.send(reqMsg);
                console.log(`Subscription ${shortSubId} sent to ${relayUrl}`);
                
                // Track subscription on this relay using the original ID as key
                relay.subscriptions.set(subscriptionId, {
                    shortId: shortSubId,
                    filters: filters
                });
            } else {
                console.log(`Relay ${relayUrl} not open, queueing subscription`);
                relay.pendingMessages.push(reqMsg);
            }
        });
    }

    /**
     * Close a subscription
     * @param {string} subscriptionId - The subscription ID to close
     */
    unsubscribe(subscriptionId) {
        // Remove from global subscriptions
        const subData = this.globalSubscriptions.get(subscriptionId);
        if (!subData) return;
        
        const shortSubId = subData.shortId;
        this.globalSubscriptions.delete(subscriptionId);

        // Send CLOSE to all relays that have this subscription
        this.relays.forEach((relay, url) => {
            if (relay.status === 'open' && relay.subscriptions.has(subscriptionId)) {
                const closeMsg = JSON.stringify(['CLOSE', shortSubId]);
                
                this._queueRelayRequest(url, () => {
                    if (relay.status === 'open') {
                        relay.conn.send(closeMsg);
                    }
                });
                
                relay.subscriptions.delete(subscriptionId);
            }
        });
    }

    /**
     * Publish an event to all connected relays
     * @param {Object} event - Signed nostr event object
     * @returns {Promise} - Resolves when published to at least one relay
     */
    publish(event) {
        // Validate event has required fields
        const validation = this._validateEvent(event);
        if (!validation.valid) {
            console.error('Invalid event:', validation.reason, event);
            return Promise.reject(new Error(`Invalid event: ${validation.reason}`));
        }
        
        console.log('Publishing event:', {
            id: event.id,
            kind: event.kind,
            created_at: event.created_at,
            pubkey: event.pubkey.substring(0, 8) + '...',
            sig_length: event.sig ? event.sig.length : 0,
            content_length: event.content ? event.content.length : 0,
            tags_count: event.tags ? event.tags.length : 0
        });
        
        // Create EVENT message
        const eventMsg = JSON.stringify(['EVENT', event]);
        const truncatedMsg = eventMsg.length > 200 ? 
            eventMsg.substring(0, 197) + '...' : 
            eventMsg;
        console.log(`EVENT message to publish: ${truncatedMsg}`);
        
        // Create OK promises for each relay
        const publishPromises = [];
    
        this.relays.forEach((relay, url) => {
            console.log(`Attempting to publish to relay: ${url}`);

            const sendWithRetries = (attempt = 0) => {
                return new Promise((resolve) => {
                    const timeout = setTimeout(() => {
                        if (okHandler) {
                            relay.conn.removeEventListener('message', okHandler);
                        }
                        console.warn(`Publish to ${url} timed out for event ${event.id.substring(0, 8)}...`);
                        resolve({ url, success: false, error: 'timeout' });
                    }, 10000);

                    const okHandler = (msgEvent) => {
                        try {
                            const data = JSON.parse(msgEvent.data);
                            if (Array.isArray(data) && data[0] === 'OK' && data[1] === event.id) {
                                clearTimeout(timeout);
                                relay.conn.removeEventListener('message', okHandler);

                                if (data.length > 2 && data[2] === true) {
                                    console.log(`Success publish to ${url} for event ${event.id.substring(0, 8)}...`);
                                    resolve({ url, success: true });
                                } else {
                                    const errorMsg = data.length > 3 ? data[3] : 'Unknown error';
                                    console.warn(`Failed publish to ${url}: ${errorMsg}`);

                                    if (errorMsg.toLowerCase().includes('rate-limited') && attempt < this.maxPublishRetries) {
                                        const delay = this.retryDelay * (attempt + 1);
                                        console.warn(`Rate limited by ${url}, retrying in ${delay}ms`);
                                        setTimeout(() => {
                                            this._queueRelayRequest(url, () => {
                                                sendWithRetries(attempt + 1).then(resolve);
                                            });
                                        }, delay);
                                    } else {
                                        resolve({ url, success: false, error: errorMsg });
                                    }
                                }
                            }
                        } catch (e) {
                            console.warn(`Error parsing message from ${url}:`, e, msgEvent.data);
                        }
                    };

                    if (relay.status === 'open') {
                        try {
                            relay.conn.addEventListener('message', okHandler);
                            this._queueRelayRequest(url, () => {
                                try {
                                    if (relay.conn.readyState === WebSocket.OPEN) {
                                        relay.conn.send(eventMsg);
                                        console.log(`Event sent to ${url}`);
                                    } else {
                                        console.log(`Relay ${url} disconnected, queueing event`);
                                        relay.pendingMessages.push(eventMsg);
                                        resolve({ url, success: true, queued: true });
                                    }
                                } catch (err) {
                                    console.warn(`Error sending to ${url}:`, err);
                                    resolve({ url, success: false, error: err.message });
                                }
                            });
                        } catch (err) {
                            console.warn(`Error setting up publish to ${url}:`, err);
                            resolve({ url, success: false, error: err.message });
                        }
                    } else {
                        console.log(`Relay ${url} not open, queueing message`);
                        relay.pendingMessages.push(eventMsg);
                        resolve({ url, success: true, queued: true });
                    }
                });
            };

            publishPromises.push(sendWithRetries());
        });
    
        // Return a promise that resolves when published to at least one relay
        return Promise.allSettled(publishPromises).then(results => {
            const successful = results.filter(r => r.status === 'fulfilled' && (r.value.success || r.value.queued));
            const queued = results.filter(r => r.status === 'fulfilled' && r.value.queued);
            
            if (successful.length > 0) {
                console.log(`Event ${event.id.substring(0, 8)}... published to ${successful.length} relays`);
                return { 
                    success: true, 
                    count: successful.length,
                    relays: successful.map(r => r.value.url),
                    queued: queued.length > 0
                };
            } else {
                // Log failed publish attempts for debugging
                console.error('Failed to publish to any relays, attempts:', 
                    results.map(r => ({
                        status: r.status,
                        value: r.status === 'fulfilled' ? r.value : r.reason
                    }))
                );
                return Promise.reject(new Error('Failed to publish to any relays'));
            }
        });
    }

    /**
     * Add a callback for received events
     * @param {Function} callback - Function to call with the event
     */
    onEvent(callback) {
        if (typeof callback === 'function') {
            this.eventCallbacks.push(callback);
        }
    }

    // Add this function to test basic connectivity
async testPublish() {
    if (this.relays.size === 0) {
        console.error('No relays connected');
        return;
    }
    
    // Create a minimal test event
    const testEvent = {
        id: '0'.repeat(64),  // All zeros, just for testing
        pubkey: '0'.repeat(64),
        created_at: Math.floor(Date.now() / 1000),
        kind: 1,
        tags: [],
        content: 'Test event from relay manager',
        sig: '0'.repeat(128) // Invalid signature, but correct length
    };
    
    console.log('Publishing test event...');
    try {
        await this.publish(testEvent);
        console.log('Test publish completed');
    } catch (error) {
        console.error('Test publish failed:', error);
    }
}

    /**
     * Add a callback for relay connections
     * @param {Function} callback - Function to call with the relay URL
     */
    onConnect(callback) {
        if (typeof callback === 'function') {
            this.connectCallbacks.push(callback);
        }
    }

    /**
     * Add a callback for relay disconnections
     * @param {Function} callback - Function to call with the relay URL
     */
    onDisconnect(callback) {
        if (typeof callback === 'function') {
            this.disconnectCallbacks.push(callback);
        }
    }

    /**
     * Handle message from a relay
     * @private
     */
    _handleRelayMessage(relayUrl, message) {
        if (!Array.isArray(message)) {
            return;
        }
    
        const messageType = message[0];
    
        console.log(`Relay message from ${relayUrl}: ${messageType}`, message);
    
        if (messageType === 'EVENT') {
            // ["EVENT", <subscription_id>, <event>]
            if (message.length < 3) return;
            
            const shortSubId = message[1];
            const event = message[2];
            
            // Find the original subscription ID from the short ID
            let originalSubId = null;
            this.globalSubscriptions.forEach((subData, subId) => {
                if (subData.shortId === shortSubId) {
                    originalSubId = subId;
                }
            });
            
            // If we can't find the subscription, ignore the event
            if (!originalSubId) return;
            
            // Notify global subscription callbacks
            const subscription = this.globalSubscriptions.get(originalSubId);
            if (subscription) {
                // Always call subscription-specific callbacks
                subscription.callbacks.forEach(callback => {
                    try {
                        callback(event, relayUrl, originalSubId);
                    } catch (e) {
                        console.error('Error in subscription callback:', e);
                    }
                });
                
                // Only notify global event listeners if not suppressed
                if (!subscription.suppressGlobalEvents) {
                    this.eventCallbacks.forEach(callback => {
                        try {
                            callback(event, relayUrl, originalSubId);
                        } catch (e) {
                            console.error('Error in event callback:', e);
                        }
                    });
                } else {
                    console.log(`Global events suppressed for subscription ${originalSubId}`);
                }
            }
        }
        else if (messageType === 'EOSE') {
            // ["EOSE", <subscription_id>]
            // End of stored events, we could notify listeners if needed
            // console.log(`End of stored events for subscription ${message[1]} from ${relayUrl}`);
        }
        else if (messageType === 'NOTICE') {
            // ["NOTICE", <message>]
            console.log(`Notice from ${relayUrl}: ${message[1]}`);
        }
        else if (messageType === 'OK') {
            // ["OK", <event_id>, <success>, <message>]
            // We handle these in the publish method
        }
    }
}

// Export the class
export default WebSocketRelayManager;

