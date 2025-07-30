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

// ============================================
// CONFIG LOGGING UTILITY FUNCTIONS
// ============================================
// These functions are attached to window for easy console access

// Function to export all config logs
window.exportConfigLogs = function() {
    const logs = localStorage.getItem('config_logs');
    if (!logs) {
        console.log('No config logs found');
        return;
    }
    
    const blob = new Blob([logs], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `config-logs-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    console.log('Config logs exported');
};

// Function to clear config logs
window.clearConfigLogs = function() {
    localStorage.removeItem('config_logs');
    console.log('Config logs cleared');
};

// Function to view recent config operations
window.viewRecentConfigOps = function(count = 10) {
    const logs = JSON.parse(localStorage.getItem('config_logs') || '[]');
    const recent = logs.slice(-count);
    console.table(recent);
};

// Function to view config operations by module
window.viewConfigOpsByModule = function(moduleName) {
    const logs = JSON.parse(localStorage.getItem('config_logs') || '[]');
    const filtered = logs.filter(log => log.module === moduleName);
    console.table(filtered);
};

// Function to view failed config operations
window.viewFailedConfigOps = function() {
    const logs = JSON.parse(localStorage.getItem('config_logs') || '[]');
    const failed = logs.filter(log => log.success === false);
    if (failed.length === 0) {
        console.log('No failed config operations found');
    } else {
        console.table(failed);
    }
};

// Function to get config stats
window.getConfigStats = function() {
    const logs = JSON.parse(localStorage.getItem('config_logs') || '[]');
    const stats = {
        total: logs.length,
        saves: logs.filter(l => l.operation === 'SAVE').length,
        loads: logs.filter(l => l.operation === 'LOAD').length,
        updates: logs.filter(l => l.operation === 'UPDATE').length,
        deletes: logs.filter(l => l.operation === 'DELETE').length,
        failures: logs.filter(l => l.success === false).length,
        modules: [...new Set(logs.map(l => l.module))]
    };
    console.table(stats);
    return stats;
};

// ============================================
// CONSOLE HELPER MESSAGE
// ============================================
console.log(`
%c=== CONFIG LOGGING ENABLED ===`, 'color: #00ff00; font-weight: bold');
console.log(`
Available debugging commands:
%c• exportConfigLogs()%c - Export all config logs to file
%c• clearConfigLogs()%c - Clear all stored config logs  
%c• viewRecentConfigOps(n)%c - View last n config operations (default: 10)
%c• viewConfigOpsByModule('moduleName')%c - View operations by specific module
%c• viewFailedConfigOps()%c - View only failed operations
%c• getConfigStats()%c - View statistics of all config operations

%cConfig operations are logged with:
%c• Green [CONFIG SAVE]%c for save operations
%c• Cyan [CONFIG LOAD]%c for load operations
%c• Yellow [CONFIG UPDATE]%c for update operations
%c• Red [CONFIG DELETE]%c for delete operations
`,
'color: #00ff00', 'color: inherit',
'color: #00ff00', 'color: inherit',
'color: #00ff00', 'color: inherit',
'color: #00ff00', 'color: inherit',
'color: #00ff00', 'color: inherit',
'color: #00ff00', 'color: inherit',
'color: #888',
'color: #00ff00', 'color: inherit',
'color: #00ffff', 'color: inherit',
'color: #ffff00', 'color: inherit',
'color: #ff0000', 'color: inherit'
);
console.log('%c=============================', 'color: #00ff00; font-weight: bold');

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
    
    // Log initial config stats
    console.log('Initial config stats:');
    window.getConfigStats();
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
