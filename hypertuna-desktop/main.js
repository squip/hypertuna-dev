/**
 * main.js
 * Main entry point for the Hypertuna Relay Nostr Client app
 * Enhanced with Hypertuna relay support
 */

// Import crypto libraries first to ensure they're available
import './crypto-libraries.js';
// Import the hypercore-crypto loader
import './hypercore-crypto-loader.js';

// Import required modules
import { NostrUtils } from './NostrUtils.js';
import NostrEvents from './NostrEvents.js';
import WebSocketRelayManager from './WebSocketRelayManager.js';
import NostrGroupClient from './NostrGroupClient.js';
import NostrIntegration from './NostrIntegration.js';
import integrateNostrRelays from './AppIntegration.js';
import { HypertunaUtils } from './HypertunaUtils.js'; // Import our new Hypertuna utilities

// Define default relays
const DEFAULT_RELAYS = [
    'wss://relay.damus.io',
    'wss://nos.lol'
];

// Wait for DOM to be fully loaded and hypercore-crypto to be available
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Nostr Groups app with Hypertuna support...');
    
    // Set up App in the global context if it's not already defined
    if (typeof window.App === 'undefined') {
        console.log('Creating App in window context...');
        // Initialize the App with all required methods
        window.App = {
            currentPage: 'auth',
            currentUser: null,
            currentGroup: null,
            currentGroupId: null,
            relay: null,
            
            init() {
                this.setupEventListeners();
                this.loadUserFromLocalStorage();
                this.updateUIState();
            },
            
            // The placeholder methods will be replaced by our implementations
            loadUserFromLocalStorage() {},
            saveUserToLocalStorage() {},
            setupEventListeners() {},
            updateUIState() {},
            updateProfileDisplay() {},
            navigateTo() {},
            switchTab() {},
            login() {},
            logout() {},
            connectRelay() {},
            generatePrivateKey() {},
            updateHypertunaDisplay() {},
            updateHypertunaSettings() {}
        };
    }
    
    // Access the App object
    const App = window.App;
    
    // Replace the placeholder methods with our enhanced implementations
    // These would typically be done by loading/evaluating the code from our artifact files
    
    // Initialize the app
    App.init();
    
    // Then integrate with real nostr relays
    integrateNostrRelays(App);
    
    // Initialize with default relays if user is already logged in
    if (App.currentUser && App.currentUser.privateKey) {
        // Set up Hypertuna configuration if not already present
        if (!App.currentUser.hypertunaConfig) {
            try {
                // We need to use an async IIFE here since setupUserConfig is async
                (async () => {
                    App.currentUser.hypertunaConfig = await HypertunaUtils.setupUserConfig(App.currentUser);
                    App.saveUserToLocalStorage();
                    console.log('Initialized Hypertuna configuration for existing user');
                })().catch(e => {
                    console.error('Error initializing Hypertuna configuration:', e);
                });
            } catch (e) {
                console.error('Error initializing Hypertuna configuration:', e);
            }
        }
        
        if (App.nostr) {
            // Set default relays in the UI
            const relayUrlsInput = document.getElementById('relay-urls');
            if (relayUrlsInput) {
                relayUrlsInput.value = DEFAULT_RELAYS.join('\n');
            }
            
            const profileRelayUrlsInput = document.getElementById('profile-relay-urls');
            if (profileRelayUrlsInput) {
                profileRelayUrlsInput.value = DEFAULT_RELAYS.join('\n');
            }
            
            // Connect to default relays
            App.nostr.updateRelays(DEFAULT_RELAYS)
                .then(() => console.log('Connected to default relays'))
                .catch(error => console.error('Error connecting to default relays:', error));
        }
    }
    
    console.log('Nostr Groups app with Hypertuna support initialized');
});

// Export the modules for use in the app
export {
    NostrUtils,
    NostrEvents,
    WebSocketRelayManager,
    NostrGroupClient,
    NostrIntegration,
    integrateNostrRelays,
    HypertunaUtils
};
