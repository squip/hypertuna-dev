/**
 * LEGACY VERSION: HypertunaUtils.js
 * Utility functions for Hypertuna relay server integration
 * Implements key derivation logic from hypertuna-start-relay-server.mjs
 * Uses hypercore-crypto for ED25519 key generation
 */

import { NostrUtils } from './NostrUtils.js';

// Import hypercore-crypto library
// Note: Make sure to add "hypercore-crypto": "^3.5.0" to your package.json dependencies
const hypercoreCrypto = window.hypercoreCrypto || null;

export class HypertunaUtils {
    /**
     * Default context string for key derivation
     */
    static DEFAULT_CONTEXT = 'hypertuna-relay-peer';
    
    /**
     * Default gateway URL
     */
    static DEFAULT_GATEWAY_URL = 'https://hypertuna.com';
    
    /**
     * LocalStorage key for Hypertuna configuration
     */
    static STORAGE_KEY = 'hypertuna_config';
    
    /**
     * Decode a base32 NOSTR private key (nsec)
     * @param {string} nsec - NOSTR private key in hex format
     * @returns {string} - Hex encoded private key
     */
    static decodeNsec(nsec) {
        // For now, we're assuming the nsec is already in hex format
        // In a real implementation, you would use a base32 decoder here
        return nsec;
    }
    
    /**
     * Convert hex string to Uint8Array
     * @param {string} hex - Hex string
     * @returns {Uint8Array} - Byte array
     */
    static hexToBytes(hex) {
        // Ensure hex string has even length
        if (hex.length % 2 !== 0) {
            hex = '0' + hex;
        }
        
        const bytes = new Uint8Array(hex.length / 2);
        for (let i = 0; i < hex.length; i += 2) {
            bytes[i/2] = parseInt(hex.substring(i, i + 2), 16);
        }
        return bytes;
    }
    
    /**
     * Convert Uint8Array to hex string
     * @param {Uint8Array} bytes - Byte array
     * @returns {string} - Hex string
     */
    static bytesToHex(bytes) {
        return Array.from(bytes)
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join('');
    }
    
    /**
     * Derive a Hypertuna keypair from a NOSTR private key
     * Based on the implementation in hypertuna-start-relay-server.mjs
     * @param {string} privateKeyHex - Hex encoded private key
     * @param {string} context - Context string for derivation (salt)
     * @returns {Promise<Object>} - Derived keypair with privateKey, publicKey, and seed
     */
    static async deriveHypertunaKeypair(privateKeyHex, context = this.DEFAULT_CONTEXT) {
        try {
            // Check if hypercore-crypto is available
            if (hypercoreCrypto) {
                console.log('Using hypercore-crypto for key derivation');
                
                // First use PBKDF2 to derive a seed from the private key and context
                const privateKeyBytes = this.hexToBytes(privateKeyHex);
                const contextBytes = new TextEncoder().encode(context);
                
                // Import the private key as a raw key
                const keyMaterial = await window.crypto.subtle.importKey(
                    'raw',
                    privateKeyBytes,
                    { name: 'PBKDF2' },
                    false,
                    ['deriveBits']
                );
                
                // Derive bits using PBKDF2
                const derivedBits = await window.crypto.subtle.deriveBits(
                    {
                        name: 'PBKDF2',
                        salt: contextBytes,
                        iterations: 100000,
                        hash: 'SHA-256'
                    },
                    keyMaterial,
                    256 // 32 bytes (256 bits)
                );
                
                // Convert the derived bits to a byte array to use as a seed
                const seedBytes = new Uint8Array(derivedBits);
                
                // Use the seedBytes with hypercore-crypto to generate an ED25519 keypair
                // hypercore-crypto.keyPair([seed]) - generates an ED25519 keypair from an optional seed
                const keypair = hypercoreCrypto.keyPair(seedBytes);
                
                // Convert the keypair to hex strings
                const derivedPrivateKey = this.bytesToHex(keypair.secretKey);
                const derivedPublicKey = this.bytesToHex(keypair.publicKey);
                const seedHex = this.bytesToHex(seedBytes);
                
                return {
                    privateKey: derivedPrivateKey,
                    publicKey: derivedPublicKey,
                    seed: seedHex
                };
            } else {
                console.log('hypercore-crypto not available, using WebCrypto API');
                
                // Use SubtleCrypto API for PBKDF2 key derivation, which is available in browsers
                const privateKeyBytes = this.hexToBytes(privateKeyHex);
                const contextBytes = new TextEncoder().encode(context);
                
                // Import the private key as a raw key
                const keyMaterial = await window.crypto.subtle.importKey(
                    'raw',
                    privateKeyBytes,
                    { name: 'PBKDF2' },
                    false,
                    ['deriveBits']
                );
                
                // Derive bits using PBKDF2
                const derivedBits = await window.crypto.subtle.deriveBits(
                    {
                        name: 'PBKDF2',
                        salt: contextBytes,
                        iterations: 100000,
                        hash: 'SHA-256'
                    },
                    keyMaterial,
                    256 // 32 bytes (256 bits)
                );
                
                // Convert the derived bits to a byte array and hex string
                const derivedKey = new Uint8Array(derivedBits);
                const derivedKeyHex = this.bytesToHex(derivedKey);
                
                // Since we don't have hypercore-crypto's ED25519 implementation,
                // we'll use the NostrUtils.getPublicKey which should work with the derived key
                const publicKey = NostrUtils.getPublicKey(derivedKeyHex.substring(0, 64));
                
                return {
                    privateKey: derivedKeyHex,
                    publicKey: publicKey,
                    seed: derivedKeyHex.substring(0, 64) // First 32 bytes as seed
                };
            }
        } catch (e) {
            console.error('Error deriving Hypertuna keypair:', e);
            
            // Provide a fallback in case of error
            return this.fallbackKeyPair(privateKeyHex);
        }
    }
    
    /**
     * Fallback method for key derivation if the primary methods fail
     * @param {string} privateKeyHex - Original private key
     * @returns {Object} - A keypair derived from the original key
     */
    static fallbackKeyPair(privateKeyHex) {
        // Use a simplified derivation that will always be valid
        const derivedPrivateKey = this.fallbackDeriveKey(privateKeyHex, this.DEFAULT_CONTEXT);
        
        // Generate the public key from the derived private key
        const publicKey = NostrUtils.getPublicKey(derivedPrivateKey);
        
        return {
            privateKey: derivedPrivateKey,
            publicKey: publicKey,
            seed: derivedPrivateKey.substring(0, 64)
        };
    }
    
    /**
     * Fallback method for key derivation if WebCrypto is not available
     * @param {string} privateKeyHex - Hex encoded private key
     * @param {string} context - Context string for derivation
     * @returns {string} - A deterministic but simplified derived key
     */
    static fallbackDeriveKey(privateKeyHex, context) {
        // Create a simple hash of the privateKey and context
        let hash = 0;
        const input = privateKeyHex + context;
        
        for (let i = 0; i < input.length; i++) {
            const char = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32-bit integer
        }
        
        // Create a deterministic hex string from the hash
        let derivedKey = Math.abs(hash).toString(16);
        
        // Pad to ensure it's long enough for a private key
        while (derivedKey.length < 64) {
            derivedKey += derivedKey;
        }
        
        // Return the first 64 chars (32 bytes) as the private key
        return derivedKey.substring(0, 64);
    }
    
    /**
     * Generate Hypertuna configuration for a user
     * @param {string} privateKeyHex - User's private key in hex format
     * @param {string} publicKeyHex - User's public key in hex format 
     * @param {string} gatewayUrl - Gateway URL (optional)
     * @returns {Promise<Object>} - Hypertuna configuration
     */
    static async generateHypertunaConfig(privateKeyHex, publicKeyHex, gatewayUrl = this.DEFAULT_GATEWAY_URL) {
        try {
            // Derive the keypair for Hypertuna relay
            const derivedKeypair = await this.deriveHypertunaKeypair(privateKeyHex);
            
            // Extract the hostname from the gateway URL
            let hostname = gatewayUrl;
            try {
                const url = new URL(gatewayUrl);
                hostname = url.hostname;
            } catch (e) {
                // If URL parsing fails, just use the raw value
                console.warn('Failed to parse gateway URL, using raw value');
            }
            
            // Create the full configuration
            return {
                nostr_pubkey_hex: publicKeyHex,
                nostr_nsec_hex: privateKeyHex,
                proxy_privateKey: derivedKeypair.privateKey,
                proxy_publicKey: derivedKeypair.publicKey,
                proxy_seed: derivedKeypair.seed,
                swarmPublicKey: derivedKeypair.publicKey,
                proxy_server_address: hostname,
                gatewayUrl: gatewayUrl,
                registerWithGateway: true,
                registerInterval: 300000
            };
        } catch (error) {
            console.error('Error generating Hypertuna config:', error);
            
            // Return a valid but fallback config if derivation fails
            const fallbackKeypair = this.fallbackKeyPair(privateKeyHex);
            
            return {
                nostr_pubkey_hex: publicKeyHex,
                nostr_nsec_hex: privateKeyHex,
                proxy_privateKey: fallbackKeypair.privateKey,
                proxy_publicKey: fallbackKeypair.publicKey,
                proxy_seed: fallbackKeypair.seed,
                swarmPublicKey: fallbackKeypair.publicKey,
                proxy_server_address: new URL(gatewayUrl).hostname || 'hypertuna.com',
                gatewayUrl: gatewayUrl,
                registerWithGateway: true,
                registerInterval: 300000
            };
        }
    }
    
    /**
     * Save Hypertuna configuration to localStorage
     * @param {Object} config - Hypertuna configuration
     */
    static async saveConfig(config) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(config));

        if (typeof Pear !== 'undefined' && Pear.config && Pear.config.storage) {
            try {
                const { promises: fs } = await import('fs');
                const { join } = await import('path');
                await fs.mkdir(Pear.config.storage, { recursive: true });
                const filePath = join(Pear.config.storage, 'relay-config.json');
                await fs.writeFile(filePath, JSON.stringify(config, null, 2));
            } catch (e) {
                console.error('Failed to persist Hypertuna config to file:', e);
            }
        }
    }
    
    /**
     * Load Hypertuna configuration from localStorage
     * @returns {Object|null} - Hypertuna configuration or null if not found
     */
    static async loadConfig() {
        let config = null;
        if (typeof Pear !== 'undefined' && Pear.config && Pear.config.storage) {
            try {
                const { promises: fs } = await import('fs');
                const { join } = await import('path');
                const filePath = join(Pear.config.storage, 'relay-config.json');
                const data = await fs.readFile(filePath, 'utf8');
                config = JSON.parse(data);
            } catch {
                // fall back to localStorage
            }
        }
        if (!config) {
            const local = localStorage.getItem(this.STORAGE_KEY);
            config = local ? JSON.parse(local) : null;
        }
        return config;
    }
    
    /**
     * Create or update Hypertuna configuration for a user
     * @param {Object} user - User object with privateKey and pubkey
     * @param {string} gatewayUrl - Gateway URL (optional)
     * @returns {Promise<Object>} - Hypertuna configuration
     */
    static async setupUserConfig(user, gatewayUrl = this.DEFAULT_GATEWAY_URL) {
        if (!user || !user.privateKey || !user.pubkey) {
            throw new Error('Invalid user object');
        }
        
        const config = await this.generateHypertunaConfig(
            user.privateKey,
            user.pubkey,
            gatewayUrl
        );
        
        await this.saveConfig(config);
        return config;
    }
}
