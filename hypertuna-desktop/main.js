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
    
    // Check if App already exists (it should from index.html)
    if (typeof window.App === 'undefined') {
        console.error('[Main] App object not found! This should have been created by index.html');
        return;
    }
    
    // Access the App object
    const App = window.App;
    
    // The App should already be initialized by index.html
    // Just handle any additional setup for returning users
    if (App.currentUser && App.currentUser.privateKey) {
        // Set up Hypertuna configuration if not already present
        if (!App.currentUser.hypertunaConfig) {
            (async () => {
                try {
                    App.currentUser.hypertunaConfig = await HypertunaUtils.setupUserConfig(App.currentUser);
                    App.saveUserToLocalStorage();
                    console.log('Initialized Hypertuna configuration for existing user');
                } catch (e) {
                    console.error('Error initializing Hypertuna configuration:', e);
                }
            })();
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
