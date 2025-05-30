/**
 * AppIntegration.js
 * Modifies the existing App to use real nostr relays
 * Enhanced with support for Hypertuna relay groups
 */

import NostrIntegration from './NostrIntegration.js';
import { NostrUtils } from './NostrUtils.js';
import { HypertunaUtils } from './HypertunaUtils.js';

/**
 * This function modifies the existing App object to use real nostr relays
 * Call this function after the App has been initialized
 * @param {Object} App - The existing App object
 */
function integrateNostrRelays(App) {
    console.log('Integrating nostr relays with Hypertuna support...');
    
    // Save original methods before replacing them - check if they exist first
    const originalMethods = {};
    
    // Define a list of methods to potentially save
    const methodsToSave = [
        'connectRelay', 'loadGroups', 'loadGroupDetails', 'loadGroupMessages',
        'loadGroupMembers', 'createGroup', 'joinGroup', 'leaveGroup',
        'sendMessage', 'createInvite', 'addMember', 'updateMemberRole',
        'removeMember', 'saveGroupSettings', 'deleteGroup', 'updateProfile',
        'login', 'generatePrivateKey', 'saveUserToLocalStorage', 
        'loadUserFromLocalStorage', 'updateProfileDisplay'
    ];
    
    // Save methods that exist
    methodsToSave.forEach(method => {
        if (typeof App[method] === 'function') {
            originalMethods[method] = App[method].bind(App);
        }
    });
    
    // Create nostr integration
    App.nostr = new NostrIntegration(App);
    

    
    /**
     * Enhanced login method with Hypertuna support
     * Generate and store Hypertuna keypair during login
     */
    App.login = async function() {
        const privateKey = document.getElementById('privateKey').value.trim();
        
        if (!privateKey) {
            alert('Please enter a valid private key or generate a new one.');
            return;
        }
        
        try {
            const pubkey = NostrUtils.getPublicKey(privateKey);
            
            this.currentUser = {
                privateKey,
                pubkey,
                name: 'User_' + NostrUtils.truncatePubkey(pubkey),
                about: ''
            };
            
            // Generate and save Hypertuna configuration
            try {
                // Setup Hypertuna configuration with default gateway
                const hypertunaConfig = await HypertunaUtils.setupUserConfig(this.currentUser);
                
                // Add Hypertuna configuration to user object for easy access
                this.currentUser.hypertunaConfig = hypertunaConfig;
                
                console.log('Hypertuna configuration generated:', {
                    pubkey: hypertunaConfig.nostr_pubkey_hex.substring(0, 8) + '...',
                    proxy_pubkey: hypertunaConfig.proxy_publicKey.substring(0, 8) + '...',
                    proxy_server: hypertunaConfig.proxy_server_address,
                    gatewayUrl: hypertunaConfig.gatewayUrl
                });
            } catch (e) {
                console.error('Error generating Hypertuna configuration:', e);
                // Continue with login even if Hypertuna config fails
            }
            
            // Save the user data to localStorage
            this.saveUserToLocalStorage();
            this.updateProfileDisplay();
            
            // Initialize nostr integration if login was successful
            try {
                await this.nostr.init(this.currentUser);
                console.log('Nostr integration initialized');
                if (window.startWorker) {
                    try {
                        await window.startWorker();
                    } catch (err) {
                        console.error('Failed to start worker:', err);
                    }
                }
            } catch (e) {
                console.error('Error initializing nostr integration:', e);
            }
            
            // Connect to relay if not already connected
            if ((!this.relay || !this.relay.isConnected()) && (!this.nostr)) {
                this.connectRelay();
            } else {
                this.updateUIState();
            }
        } catch (e) {
            console.error('Error logging in:', e);
            alert('Error: Invalid private key format.');
        }
    };
    
    /**
     * Enhanced key generation method with Hypertuna preview
     */
    App.generatePrivateKey = async function() {
        const newPrivateKey = NostrUtils.generatePrivateKey();
        document.getElementById('privateKey').value = newPrivateKey;
        
        // Preview Hypertuna configuration
        try {
            const pubkey = NostrUtils.getPublicKey(newPrivateKey);
            
            // Generate preview config without saving
            const previewConfig = await HypertunaUtils.generateHypertunaConfig(newPrivateKey, pubkey);
            
            console.log('Hypertuna preview configuration generated:', {
                pubkey: previewConfig.nostr_pubkey_hex.substring(0, 8) + '...',
                proxy_pubkey: previewConfig.proxy_publicKey.substring(0, 8) + '...',
                proxy_server: previewConfig.proxy_server_address,
                gatewayUrl: previewConfig.gatewayUrl
            });
        } catch (e) {
            console.error('Error generating Hypertuna preview configuration:', e);
        }
    };
    
    /**
     * Enhanced saveUserToLocalStorage method
     * Save Hypertuna configuration separately
     */
    App.saveUserToLocalStorage = function() {
        if (this.currentUser) {
            // Create a clean copy of the user object without any circular references
            const userToSave = {
                privateKey: this.currentUser.privateKey,
                pubkey: this.currentUser.pubkey,
                name: this.currentUser.name,
                about: this.currentUser.about
            };
            
            // If there's Hypertuna configuration, add it to the saved user
            if (this.currentUser.hypertunaConfig) {
                userToSave.hypertunaConfig = this.currentUser.hypertunaConfig;
            }
            
            // Save user data to localStorage
            localStorage.setItem('nostr_user', JSON.stringify(userToSave));
            
            // If the user has Hypertuna configuration, also save it separately
            if (this.currentUser.hypertunaConfig) {
                localStorage.setItem('hypertuna_config', JSON.stringify(this.currentUser.hypertunaConfig));
            }
        } else {
            // Remove user data from localStorage
            localStorage.removeItem('nostr_user');
            // Don't remove Hypertuna config when logging out to persist settings
        }
    };
    
    /**
     * Enhanced loadUserFromLocalStorage method
     * Load and check for Hypertuna configuration
     */
    App.loadUserFromLocalStorage = async function() {
        const savedUser = localStorage.getItem('nostr_user');
        if (savedUser) {
            try {
                this.currentUser = JSON.parse(savedUser);
                
                // Check for Hypertuna configuration
                const hypertunaConfig = localStorage.getItem('hypertuna_config');
                if (hypertunaConfig) {
                    this.currentUser.hypertunaConfig = JSON.parse(hypertunaConfig);
                    console.log('Loaded Hypertuna configuration from localStorage:', {
                        pubkey: this.currentUser.hypertunaConfig.nostr_pubkey_hex.substring(0, 8) + '...',
                        proxy_pubkey: this.currentUser.hypertunaConfig.proxy_publicKey.substring(0, 8) + '...',
                        proxy_server: this.currentUser.hypertunaConfig.proxy_server_address,
                        gatewayUrl: this.currentUser.hypertunaConfig.gatewayUrl
                    });
                } else {
                    // If no Hypertuna config exists, generate it now
                    try {
                        this.currentUser.hypertunaConfig = await HypertunaUtils.setupUserConfig(this.currentUser);
                        console.log('Generated new Hypertuna configuration for existing user');
                        this.saveUserToLocalStorage();
                    } catch (e) {
                        console.error('Error generating Hypertuna configuration for existing user:', e);
                    }
                }
                
                this.updateProfileDisplay();
                
                // Initialize nostr integration for logged-in user
                if (this.nostr) {
                    try {
                        await this.nostr.init(this.currentUser);
                        console.log('Nostr integration initialized for existing user');
                    } catch (e) {
                        console.error('Error initializing nostr integration for existing user:', e);
                    }
                }
            } catch (e) {
                console.error('Error loading user data:', e);
                localStorage.removeItem('nostr_user');
            }
        }
    };
    
    /**
     * Enhanced updateProfileDisplay method
     * Display Hypertuna configuration in profile
     */
    App.updateProfileDisplay = function() {
        if (!this.currentUser) return;
        
        // Try to get profile from nostr client cache
        let profile = null;
        if (this.nostr && this.nostr.client) {
            profile = this.nostr.client.cachedProfiles.get(this.currentUser.pubkey);
        }
        
        // If no profile found, use basic info
        if (!profile) {
            profile = {
                name: this.currentUser.name || 'User_' + NostrUtils.truncatePubkey(this.currentUser.pubkey),
                about: this.currentUser.about || '',
                picture: null
            };
        }
        
        const name = profile.name || 'User_' + NostrUtils.truncatePubkey(this.currentUser.pubkey);
        
        console.log('Updating profile display with:', {
            name: profile.name,
            about: profile.about ? profile.about.substring(0, 30) + '...' : undefined,
            picture: profile.picture ? 'present' : undefined
        });
        
        // Update profile display on auth page with null checks
        const profileNameElement = document.getElementById('profile-name');
        if (profileNameElement) {
            profileNameElement.textContent = name;
        }
        
        const profilePubkeyElement = document.getElementById('profile-pubkey');
        if (profilePubkeyElement) {
            profilePubkeyElement.textContent = this.currentUser.pubkey;
        }
        
        // Update profile page with null checks
        const profileDisplayName = document.getElementById('profile-display-name');
        if (profileDisplayName) {
            profileDisplayName.textContent = name;
        }
        
        const profileDisplayPubkey = document.getElementById('profile-display-pubkey');
        if (profileDisplayPubkey) {
            profileDisplayPubkey.textContent = this.currentUser.pubkey;
        }
        
        const profileNameInput = document.getElementById('profile-name-input');
        if (profileNameInput) {
            profileNameInput.value = profile.name || '';
        }
        
        const profileAboutInput = document.getElementById('profile-about-input');
        if (profileAboutInput) {
            profileAboutInput.value = profile.about || '';
        }
        
        const profilePubkeyDisplay = document.getElementById('profile-pubkey-display');
        if (profilePubkeyDisplay) {
            profilePubkeyDisplay.value = this.currentUser.pubkey;
        }
        
        const profilePrivkeyDisplay = document.getElementById('profile-privkey-display');
        if (profilePrivkeyDisplay) {
            profilePrivkeyDisplay.value = this.currentUser.privateKey;
        }
        
        // Update profile picture if available
        const updateProfilePicture = (selector) => {
            const avatar = document.querySelector(selector);
            if (avatar) {
                if (profile.picture) {
                    console.log(`Setting profile picture from URL: ${profile.picture}`);
                    // Replace the text content with an image
                    avatar.innerHTML = `<img src="${profile.picture}" alt="${name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
                } else {
                    console.log(`Using initials for profile avatar: ${name.charAt(0).toUpperCase()}`);
                    // Use first character of name as avatar
                    avatar.innerHTML = `<span>${name.charAt(0).toUpperCase()}</span>`;
                }
            }
        };
        
        // Update profile pictures in all locations
        updateProfilePicture('#profile-display .profile-avatar-large');
        updateProfilePicture('.page#page-profile .profile-avatar-large');
        
        // Populate relay list if using real relays
        if (this.nostr && this.nostr.client) {
            const profileRelayUrls = document.getElementById('profile-relay-urls');
            if (profileRelayUrls) {
                profileRelayUrls.value = this.nostr.client.relayManager.getRelays().join('\n');
            }
        }
        
        // Update Hypertuna configuration if available
        if (this.currentUser.hypertunaConfig) {
            this.updateHypertunaDisplay();
        }
        
        console.log('Profile display updated successfully');
    };
    
    /**
     * New method to update Hypertuna configuration display
     */
    App.updateHypertunaDisplay = function() {
        if (!this.currentUser || !this.currentUser.hypertunaConfig) return;
        
        const config = this.currentUser.hypertunaConfig;
        
        // Find or create the Hypertuna section in the profile page
        let hypertunaSection = document.getElementById('hypertuna-config-section');
        
        if (!hypertunaSection) {
            // Create the section if it doesn't exist
            const profilePage = document.querySelector('#page-profile .profile-container');
            if (!profilePage) return;
            
            hypertunaSection = document.createElement('div');
            hypertunaSection.id = 'hypertuna-config-section';
            hypertunaSection.className = 'profile-section';
            hypertunaSection.innerHTML = `
                <h3>Hypertuna Relay Node Configuration</h3>
                <div class="form-group">
                    <label>Peer Public Key</label>
                    <div class="key-display">
                        <input type="text" id="hypertuna-pubkey-display" class="form-input" readonly>
                        <button class="copy-btn" data-copy="hypertuna-pubkey-display">Copy</button>
                    </div>
                </div>
                <div class="form-group">
                    <label>Peer Private Key</label>
                    <div class="key-display">
                        <input type="password" id="hypertuna-privkey-display" class="form-input" readonly>
                        <button id="btn-toggle-hypertuna-privkey" class="icon-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </button>
                        <button class="copy-btn" data-copy="hypertuna-privkey-display">Copy</button>
                    </div>
                </div>
                <div class="form-group hidden">
                    <label>Proxy Seed</label>
                    <div class="key-display">
                        <input type="password" id="hypertuna-seed-display" class="form-input" readonly>
                        <button id="btn-toggle-hypertuna-seed" class="icon-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </button>
                        <button class="copy-btn" data-copy="hypertuna-seed-display">Copy</button>
                    </div>
                </div>
                <div class="form-group">
                    <label for="hypertuna-gateway-url">Gateway Server Address</label>
                    <input type="text" id="hypertuna-gateway-url" class="form-input" placeholder="https://hypertuna.com">
                </div>
                <button id="btn-update-hypertuna" class="btn btn-primary">Update Hypertuna Settings</button>
            `;
            
            // Add the section before the last section (relay configuration)
            const relaySection = profilePage.querySelector('.profile-section:last-child');
            if (relaySection) {
                profilePage.insertBefore(hypertunaSection, relaySection);
            } else {
                profilePage.appendChild(hypertunaSection);
            }
            
            // Add event listeners for the toggle buttons
            document.getElementById('btn-toggle-hypertuna-privkey').addEventListener('click', () => {
                const input = document.getElementById('hypertuna-privkey-display');
                input.type = input.type === 'password' ? 'text' : 'password';
            });
            
            document.getElementById('btn-toggle-hypertuna-seed').addEventListener('click', () => {
                const input = document.getElementById('hypertuna-seed-display');
                input.type = input.type === 'password' ? 'text' : 'password';
            });
            
            // Add event listener for the update button
            document.getElementById('btn-update-hypertuna').addEventListener('click', () => {
                this.updateHypertunaSettings();
            });
            
            // Add event listeners for copy buttons
            hypertunaSection.querySelectorAll('.copy-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const targetId = btn.dataset.copy;
                    const target = document.getElementById(targetId);
                    if (target) {
                        const isPassword = target.type === 'password';
                        if (isPassword) target.type = 'text';
                        target.select();
                        document.execCommand('copy');
                        if (isPassword) target.type = 'password';
                        
                        // Show feedback
                        const originalText = btn.textContent;
                        btn.textContent = 'Copied!';
                        setTimeout(() => {
                            btn.textContent = originalText;
                        }, 2000);
                    }
                });
            });
        }
        
        // Populate the fields with the current configuration
        const pubkeyInput = document.getElementById('hypertuna-pubkey-display');
        if (pubkeyInput) pubkeyInput.value = config.swarmPublicKey || config.proxy_publicKey;
        
        const privkeyInput = document.getElementById('hypertuna-privkey-display');
        if (privkeyInput) privkeyInput.value = config.proxy_privateKey;
        
        const seedInput = document.getElementById('hypertuna-seed-display');
        if (seedInput) seedInput.value = config.proxy_seed;
        
        const gatewayInput = document.getElementById('hypertuna-gateway-url');
        if (gatewayInput) gatewayInput.value = config.gatewayUrl;
    };
    
    /**
     * New method to update Hypertuna settings
     */
    App.updateHypertunaSettings = async function() {
        if (!this.currentUser || !this.currentUser.hypertunaConfig) return;
        
        const gatewayUrl = document.getElementById('hypertuna-gateway-url').value.trim();
        
        if (!gatewayUrl) {
            alert('Please enter a valid gateway URL');
            return;
        }
        
        // Extract the hostname from the gateway URL
        let hostname;
        try {
            const url = new URL(gatewayUrl);
            hostname = url.hostname;
        } catch (e) {
            console.warn('Failed to parse gateway URL, using raw value');
            hostname = gatewayUrl;
        }
        
        // Update the configuration
        this.currentUser.hypertunaConfig.gatewayUrl = gatewayUrl;
        this.currentUser.hypertunaConfig.proxy_server_address = hostname;
        
        // Save the updated configuration
        localStorage.setItem('hypertuna_config', JSON.stringify(this.currentUser.hypertunaConfig));
        
        // Save the user data with the updated configuration
        this.saveUserToLocalStorage();
        
        alert('Hypertuna configuration updated successfully');
    };
    
 
    /**
     * Public Relay connection method
     * Uses real WebSocket connections to nostr relays
     */
    App.connectRelay = async function() {
        try {
            if (!this.currentUser) {
                throw new Error('User not logged in');
            }
            
            // If we're using the local relay, switch to real relays
            if (this.relay && this.relay.isConnected()) {
                this.relay.disconnect();
            }
            
            // Initialize the nostr client
            await this.nostr.connectRelay();
            
            document.getElementById('relay-status').className = 'alert alert-success';
            document.getElementById('relay-status').innerHTML = 'Connected to nostr relays';
            
            this.updateUIState();
        } catch (e) {
            console.error('Error connecting to relays:', e);
            
            document.getElementById('relay-status').className = 'alert alert-error';
            document.getElementById('relay-status').textContent = 'Error connecting to relays: ' + e.message;
        }
    };
    
    /**
     * Replace load groups method
     * Gets Hypertuna groups from the nostr client
     */
    App.loadGroups = async function() {
        if (!this.currentUser) return;
        
        const groupsList = document.getElementById('groups-list');
        groupsList.innerHTML = '<div class="loading">Loading relays...</div>';
        
        try {
            // Get groups from the nostr client - filtered for Hypertuna groups
            const groups = this.nostr.getGroups();
            
            if (groups.length === 0) {
                groupsList.innerHTML = `
                    <div class="empty-state">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                        <p>No Hypertuna relays found</p>
                        <p>Create your first relay to get started!</p>
                    </div>
                `;
                return;
            }
            
            groupsList.innerHTML = '';
            
            groups.forEach(group => {
                // Skip deleted groups
                if (group.event && group.event.markedAsDeleted) return;
                
                const groupElement = document.createElement('a');
                groupElement.href = '#';
                groupElement.className = 'group-item';
                
                // Create avatar with first letter of group name
                const firstLetter = group.name ? group.name.charAt(0).toUpperCase() : 'G';
                
                // Use hypertunaId as an additional identifier
                const hypertunaId = group.hypertunaId || '';
                
                groupElement.innerHTML = `
                    <div class="group-avatar">${firstLetter}</div>
                    <div class="group-info">
                        <div class="group-name">${group.name || 'Unnamed Relay'}</div>
                        <div class="group-description">${group.about || 'No description available'}</div>
                    </div>
                    <div class="group-meta-badges">
                        <span class="meta-badge">${group.isPublic ? 'Public' : 'Private'}</span>
                        <span class="meta-badge">${group.isOpen ? 'Open' : 'Closed'}</span>
                    </div>
                `;
                
                groupElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.currentGroupId = group.id;
                    this.currentHypertunaId = hypertunaId;
                    this.navigateTo('group-detail');
                });
                
                groupsList.appendChild(groupElement);
            });
        } catch (e) {
            console.error('Error loading groups:', e);
            groupsList.innerHTML = `
                <div class="status-message error">
                    Error loading relays. Please try again.
                </div>
            `;
        }
    };
    
    /**
     * Replace load group details method
     * Gets group details from the nostr client
     */
    App.loadGroupDetails = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            // Subscribe to this group's events
            this.nostr.client.subscribeToGroup(this.currentGroupId);
            
            // Load group data
            const group = this.nostr.getGroupById(this.currentGroupId);
            if (!group || (group.event && group.event.markedAsDeleted)) {
                alert('Group not found or has been deleted');
                this.navigateTo('groups');
                return;
            }
            
            this.currentGroup = group;
            this.currentHypertunaId = group.hypertunaId;
            
            // Update group header with null checks
            const groupNameElement = document.getElementById('group-detail-name');
            if (groupNameElement) {
                groupNameElement.textContent = group.name || 'Unnamed Relay';
            }
            
            const groupVisibilityElement = document.getElementById('group-detail-visibility');
            if (groupVisibilityElement) {
                groupVisibilityElement.textContent = group.isPublic ? 'Public' : 'Private';
            }
            
            const groupJoinTypeElement = document.getElementById('group-detail-join-type');
            if (groupJoinTypeElement) {
                groupJoinTypeElement.textContent = group.isOpen ? 'Open' : 'Closed';
            }
            
            const groupDescriptionElement = document.getElementById('group-detail-description');
            if (groupDescriptionElement) {
                groupDescriptionElement.textContent = group.about || 'No description available.';
            }
            
            // Load members and check if user is a member/admin - with retries
            await this.loadGroupMembers();
            
            // Check if creator of group is automatically admin and member
            const isCreator = group.event && group.event.pubkey === this.currentUser.pubkey;
            console.log(`Current user is group creator: ${isCreator}`);
            
            // If they're the creator, force-add them to admin and member lists if not already there
            if (isCreator) {
                if (!this.nostr.isGroupAdmin(this.currentGroupId, this.currentUser.pubkey)) {
                    console.log('Group creator not in admin list, adding manually');
                    this.nostr.client.groupAdmins.set(
                        this.currentGroupId, 
                        [...(this.nostr.client.groupAdmins.get(this.currentGroupId) || []),
                        { pubkey: this.currentUser.pubkey, roles: ['admin'] }]
                    );
                }
                
                if (!this.nostr.isGroupMember(this.currentGroupId, this.currentUser.pubkey)) {
                    console.log('Group creator not in member list, adding manually');
                    this.nostr.client.groupMembers.set(
                        this.currentGroupId, 
                        [...(this.nostr.client.groupMembers.get(this.currentGroupId) || []),
                        { pubkey: this.currentUser.pubkey, roles: ['member'] }]
                    );
                }
            }
            
            // Re-check member and admin status
            const isMember = this.nostr.isGroupMember(this.currentGroupId, this.currentUser.pubkey);
            const isAdmin = this.nostr.isGroupAdmin(this.currentGroupId, this.currentUser.pubkey);
            
            console.log(`Final status checks - isMember: ${isMember}, isAdmin: ${isAdmin}`);
            
            // Update join/leave buttons
            const joinButton = document.getElementById('btn-join-group');
            const leaveButton = document.getElementById('btn-leave-group');
            if (joinButton) joinButton.classList.toggle('hidden', isMember);
            if (leaveButton) leaveButton.classList.toggle('hidden', !isMember);
            
            // Load messages if user is a member
            if (isMember) {
                this.loadGroupMessages();
            } else {
                const messageList = document.getElementById('message-list');
                if (messageList) {
                    messageList.innerHTML = `
                        <div class="empty-state">
                            <p>Join this relay to view messages</p>
                        </div>
                    `;
                }
                const messageInput = document.getElementById('message-input');
                const sendButton = document.getElementById('btn-send-message');
                if (messageInput) messageInput.disabled = true;
                if (sendButton) sendButton.disabled = true;
            }
            
            // Update admin panel visibility
            const adminPanel = document.getElementById('admin-panel');
            if (adminPanel) {
                adminPanel.classList.toggle('hidden', !isAdmin);
            }
            
            // Update settings form
            const settingsForm = document.getElementById('group-settings-form');
            const noPermissionMsg = document.getElementById('group-settings-no-permission');
            
            if (isAdmin && settingsForm && noPermissionMsg) {
                settingsForm.classList.remove('hidden');
                noPermissionMsg.classList.add('hidden');
                
                // Populate settings form with null checks
                const editNameInput = document.getElementById('edit-group-name');
                if (editNameInput) editNameInput.value = group.name || '';
                
                const editDescInput = document.getElementById('edit-group-description');
                if (editDescInput) editDescInput.value = group.about || '';
                
                const editPublicCheckbox = document.getElementById('edit-group-public');
                if (editPublicCheckbox) editPublicCheckbox.checked = group.isPublic;
                
                const editOpenCheckbox = document.getElementById('edit-group-open');
                if (editOpenCheckbox) editOpenCheckbox.checked = group.isOpen;
            } else if (settingsForm && noPermissionMsg) {
                settingsForm.classList.add('hidden');
                noPermissionMsg.classList.remove('hidden');
            }
        } catch (e) {
            console.error('Error loading group details:', e);
            alert('Error loading group details');
        }
    };
    
    /**
     * Replace load group messages method
     * Gets messages from the nostr client
     */
    App.loadGroupMessages = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            const isMember = this.nostr.isGroupMember(this.currentGroupId, this.currentUser.pubkey);
            if (!isMember) return;
            
            const messageList = document.getElementById('message-list');
            messageList.innerHTML = '';
            
            // Get messages for the group
            const messages = this.nostr.getGroupMessages(this.currentGroupId);
            
            if (messages.length === 0) {
                messageList.innerHTML = `
                    <div class="empty-state">
                        <p>No messages yet</p>
                        <p>Be the first to send a message!</p>
                    </div>
                `;
                return;
            }
            
            // Get profiles for all message authors
            const profiles = {};
            const authors = [...new Set(messages.map(msg => msg.pubkey))];
            
            // Fetch profiles for each author
            for (const pubkey of authors) {
                try {
                    const profile = await this.nostr.client.fetchUserProfile(pubkey);
                    profiles[pubkey] = profile;
                } catch (e) {
                    profiles[pubkey] = { name: 'User_' + NostrUtils.truncatePubkey(pubkey) };
                }
            }
            
            // Display messages
            messages.forEach(message => {
                const author = profiles[message.pubkey] || { name: 'User_' + NostrUtils.truncatePubkey(message.pubkey) };
                const isCurrentUser = message.pubkey === this.currentUser.pubkey;
                
                const messageElement = document.createElement('div');
                messageElement.className = `message ${isCurrentUser ? 'own' : ''}`;
                
                messageElement.innerHTML = `
                    <div class="message-bubble">
                        <div class="message-content">${this.escapeHtml(message.content)}</div>
                    </div>
                    <div class="message-meta">
                        <span>${author.name || 'Unknown'}</span>
                        <span>${this.formatTime(message.created_at)}</span>
                    </div>
                `;
                
                messageList.appendChild(messageElement);
            });
            
            // Scroll to bottom
            messageList.scrollTop = messageList.scrollHeight;
            
            // Enable message input
            document.getElementById('message-input').disabled = false;
            document.getElementById('btn-send-message').disabled = false;
            
        } catch (e) {
            console.error('Error loading messages:', e);
            document.getElementById('message-list').innerHTML = `
                <div class="status-message error">
                    Error loading messages. Please try again.
                </div>
            `;
        }
    };
    
    
    /**
     * Replace load group members method
     * Gets members from the nostr client
     */
    App.loadGroupMembers = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            const memberList = document.getElementById('member-list');
            memberList.innerHTML = '';
            
            // Get members and admins
            const members = this.nostr.getGroupMembers(this.currentGroupId);
            const admins = this.nostr.getGroupAdmins(this.currentGroupId);
            
            // Create a mapping of pubkeys to roles
            const memberRoles = {};
            
            members.forEach(member => {
                memberRoles[member.pubkey] = ['member'];
            });
            
            admins.forEach(admin => {
                memberRoles[admin.pubkey] = admin.roles || ['admin'];
            });
            
            // Get profiles for all members
            const profiles = {};
            const pubkeys = Object.keys(memberRoles);
            
            // Fetch profiles for each member
            for (const pubkey of pubkeys) {
                try {
                    const profile = await this.nostr.client.fetchUserProfile(pubkey);
                    profiles[pubkey] = profile;
                } catch (e) {
                    profiles[pubkey] = { name: 'User_' + NostrUtils.truncatePubkey(pubkey) };
                }
            }
            
            // Display members
            if (pubkeys.length === 0) {
                memberList.innerHTML = `
                    <div class="empty-state">
                        <p>No members in this relay yet</p>
                    </div>
                `;
                return;
            }
            
            const isAdmin = this.nostr.isGroupAdmin(this.currentGroupId, this.currentUser.pubkey);
            
            pubkeys.forEach(pubkey => {
                const profile = profiles[pubkey] || {};
                const roles = memberRoles[pubkey] || ['member'];
                const isCurrentUser = pubkey === this.currentUser.pubkey;
                
                const memberElement = document.createElement('div');
                memberElement.className = 'member-item';
                
                const name = profile.name || 'User_' + NostrUtils.truncatePubkey(pubkey);
                const firstLetter = name.charAt(0).toUpperCase();
                const roleText = roles.includes('admin') ? 'Admin' : 'Member';
                const roleClass = roles.includes('admin') ? 'admin' : '';
                
                let memberHTML = `
                    <div class="member-avatar">
                        ${profile.picture ? 
                            `<img src="${profile.picture}" alt="${name}">` : 
                            `<span>${firstLetter}</span>`
                        }
                    </div>
                    <div class="member-info">
                        <div class="member-name">${name}</div>
                        <div class="member-pubkey">${NostrUtils.truncatePubkey(pubkey)}</div>
                    </div>
                    <span class="member-role ${roleClass}">${roleText}</span>
                `;
                
                // Add admin actions if current user is an admin and this isn't the current user
                if (isAdmin && !isCurrentUser) {
                    memberHTML += `<div class="member-actions">`;
                    
                    // Promote to admin button
                    if (!roles.includes('admin')) {
                        memberHTML += `
                            <button class="btn btn-secondary btn-small" data-action="promote" data-pubkey="${pubkey}">
                                Make Admin
                            </button>
                        `;
                    }
                    
                    // Remove member button
                    memberHTML += `
                        <button class="btn btn-danger btn-small" data-action="remove" data-pubkey="${pubkey}">
                            Remove
                        </button>
                    `;
                    
                    memberHTML += `</div>`;
                }
                
                memberElement.innerHTML = memberHTML;
                
                // Add event listeners for admin actions
                if (isAdmin && !isCurrentUser) {
                    const promoteBtn = memberElement.querySelector('[data-action="promote"]');
                    if (promoteBtn) {
                        promoteBtn.addEventListener('click', () => {
                            this.updateMemberRole(pubkey, ['admin']);
                        });
                    }
                    
                    const removeBtn = memberElement.querySelector('[data-action="remove"]');
                    if (removeBtn) {
                        removeBtn.addEventListener('click', () => {
                            this.removeMember(pubkey);
                        });
                    }
                }
                
                memberList.appendChild(memberElement);
            });
            
        } catch (e) {
            console.error('Error loading members:', e);
            document.getElementById('member-list').innerHTML = `
                <div class="status-message error">
                    Error loading members. Please try again.
                </div>
            `;
        }
    };

    App.escapeHtml = function(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };
    
    // Add this helper method for formatting time
    App.formatTime = function(timestamp) {
        const date = new Date(timestamp * 1000);
        const now = new Date();
        const diff = now - date;
        
        // If less than 24 hours ago, show time
        if (diff < 24 * 60 * 60 * 1000) {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        
        // If less than 7 days ago, show day and time
        if (diff < 7 * 24 * 60 * 60 * 1000) {
            return date.toLocaleDateString([], { weekday: 'short' }) + ' ' + 
                   date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        
        // Otherwise show full date
        return date.toLocaleDateString();
    };
    
    /**
     * Replace create group method
     * Creates a group via the nostr client with Hypertuna events
     */
    App.createGroup = async function() {
        if (!this.currentUser) return;
        
        const name = document.getElementById('new-group-name').value.trim();
        const about = document.getElementById('new-group-description').value.trim();
        const isPublic = document.getElementById('new-group-public').checked;
        const isOpen = document.getElementById('new-group-open').checked;
        
        if (!name) {
            alert('Please enter a group name.');
            return;
        }
        
        try {
            console.log("Creating group with parameters:", { name, about, isPublic, isOpen });

            let relayKey = null;
            if (window.createRelayInstance) {
                try {
                    relayKey = await window.createRelayInstance(name, about);
                } catch (err) {
                    console.error('Failed to create relay instance:', err);
                }
            }

            const proxyServer = this.currentUser?.hypertunaConfig?.proxy_server_address || '';

            const eventsCollection = await this.nostr.createGroup(name, about, isPublic, isOpen, relayKey, proxyServer);
            
            console.log(`Group created successfully with ID: ${eventsCollection.groupId}`);
            console.log(`Hypertuna ID: ${eventsCollection.hypertunaId}`);
            
            // Store the Hypertuna ID for future use
            this.currentHypertunaId = eventsCollection.hypertunaId;
            
            // Give the relays time to process the events
            console.log("Waiting for relays to process events...");
            await new Promise(resolve => setTimeout(resolve, 5000));
            
            // Force-load the groups to ensure the new group appears
            console.log("Force reloading groups list...");
            this.loadGroups();
            
            alert('Group created successfully!');
            this.navigateTo('groups');
        } catch (e) {
            console.error('Error creating group:', e);
            alert('Error creating group: ' + e.message);
        }
    };
    
    /**
     * Replace join group method
     * Joins a group via the nostr client
     */
    App.joinGroup = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            const group = this.nostr.getGroupById(this.currentGroupId);
            if (!group) return;
            
            if (group.isOpen) {
                // For open groups, create join request
                await this.sendJoinRequest();
            } else {
                // For closed groups, show invite code modal
                this.showJoinModal();
            }
        } catch (e) {
            console.error('Error joining group:', e);
            alert('Error joining group: ' + e.message);
        }
    };
    
    /**
     * Replace send join request method
     * Sends a join request via the nostr client
     */
    App.sendJoinRequest = async function(inviteCode = null) {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            await this.nostr.joinGroup(this.currentGroupId, inviteCode);
            
            // Reload group details to reflect membership changes
            setTimeout(() => {
                this.loadGroupDetails();
            }, 1000);
            
        } catch (e) {
            console.error('Error sending join request:', e);
            alert('Error joining group: ' + e.message);
            throw e;
        }
    };
    
    /**
     * Replace leave group method
     * Leaves a group via the nostr client
     */
    App.leaveGroup = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            await this.nostr.leaveGroup(this.currentGroupId);
            
            // Reload group details to reflect membership changes
            setTimeout(() => {
                this.loadGroupDetails();
            }, 1000);
            
        } catch (e) {
            console.error('Error leaving group:', e);
            alert('Error leaving group: ' + e.message);
        }
    };
    
    /**
     * Replace send message method
     * Sends a message via the nostr client
     */
    App.sendMessage = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('btn-send-message');
        const messageText = messageInput.value.trim();
        
        if (!messageText) return;
        
        try {
            // Disable input and button while sending
            messageInput.disabled = true;
            sendButton.disabled = true;
            
            await this.nostr.sendGroupMessage(this.currentGroupId, messageText);
            
            // Clear input
            messageInput.value = '';
            messageInput.style.height = 'auto';
            
            // Reload messages
            this.loadGroupMessages();
            
        } catch (e) {
            console.error('Error sending message:', e);
            alert('Error sending message: ' + e.message);
        } finally {
            // Re-enable input and button
            messageInput.disabled = false;
            sendButton.disabled = false;
            messageInput.focus();
        }
    };
    
    
    /**
     * Replace create invite method
     * Creates an invite code via the nostr client
     */
    App.createInvite = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            await this.nostr.createGroupInvite(this.currentGroupId);
            
            // Generate invite code (in real implementation, this would come from the relay response)
            const inviteCode = NostrUtils.generateInviteCode();
            
            // Show invite code in modal
            this.showInviteCodeModal(inviteCode);
            
        } catch (e) {
            console.error('Error creating invite code:', e);
            alert('Error creating invite code: ' + e.message);
        }
    };
    
    /**
     * Replace add member method
     * Adds a member via the nostr client
     */
    App.addMember = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        const memberPubkey = document.getElementById('add-member-pubkey').value.trim();
        const role = document.getElementById('add-member-role').value;
        
        if (!memberPubkey) {
            alert('Please enter a valid public key.');
            return;
        }
        
        try {
            await this.nostr.addGroupMember(this.currentGroupId, memberPubkey, [role]);
            
            // Close modal and reload members
            this.closeAddMemberModal();
            setTimeout(() => {
                this.loadGroupMembers();
            }, 1000);
            
        } catch (e) {
            console.error('Error adding member:', e);
            alert('Error adding member: ' + e.message);
        }
    };
    
    /**
     * Replace update member role method
     * Updates a member's role via the nostr client
     */
    App.updateMemberRole = async function(pubkey, roles) {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            await this.nostr.addGroupMember(this.currentGroupId, pubkey, roles);
            
            // Reload members to reflect changes
            setTimeout(() => {
                this.loadGroupMembers();
            }, 1000);
            
        } catch (e) {
            console.error('Error updating member role:', e);
            alert('Error updating member role: ' + e.message);
        }
    };
    
    /**
     * Replace remove member method
     * Removes a member via the nostr client
     */
    App.removeMember = async function(pubkey) {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            await this.nostr.removeGroupMember(this.currentGroupId, pubkey);
            
            // Reload members to reflect changes
            setTimeout(() => {
                this.loadGroupMembers();
            }, 1000);
            
        } catch (e) {
            console.error('Error removing member:', e);
            alert('Error removing member: ' + e.message);
        }
    };
    
    /**
     * Replace save group settings method
     * Updates group settings via the nostr client with metadata events
     */
    App.saveGroupSettings = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        const name = document.getElementById('edit-group-name').value.trim();
        const about = document.getElementById('edit-group-description').value.trim();
        const isPublic = document.getElementById('edit-group-public').checked;
        const isOpen = document.getElementById('edit-group-open').checked;
        
        if (!name) {
            alert('Please enter a group name.');
            return;
        }
        
        try {
            // Update group metadata with both kind 9002 and 39000 events
            const events = await this.nostr.updateGroupMetadata(this.currentGroupId, {
                name,
                about,
                isPublic,
                isOpen
            });
            
            // Reload group details to reflect changes
            setTimeout(() => {
                this.loadGroupDetails();
            }, 1000);
            
            alert('Group settings updated successfully!');
            
        } catch (e) {
            console.error('Error updating group settings:', e);
            alert('Error updating group settings: ' + e.message);
        }
    };
    
    /**
     * Replace delete group method
     * Deletes a group via the nostr client
     */
    App.deleteGroup = async function() {
        if (!this.currentUser || !this.currentGroupId) return;
        
        try {
            await this.nostr.deleteGroup(this.currentGroupId);
            
            this.closeConfirmationModal();
            alert('Group deletion request sent! The group will be removed once relays process the event.');
            
            // Navigate back to groups list
            setTimeout(() => {
                this.navigateTo('groups');
            }, 1000);
            
        } catch (e) {
            console.error('Error deleting group:', e);
            alert('Error deleting group: ' + e.message);
        }
    };
    
    /**
     * Replace update profile method
     * Updates user profile via the nostr client
     */
    App.updateProfile = async function() {
        if (!this.currentUser) return;
        
        const name = document.getElementById('profile-name-input').value.trim();
        const about = document.getElementById('profile-about-input').value.trim();
        
        try {
            await this.nostr.updateProfile({
                name,
                about
            });
            
            // Update user profile metadata
            this.currentUser.name = name;
            this.currentUser.about = about;
            
            // Save to localStorage
            this.saveUserToLocalStorage();
            
            // Update profile display
            this.updateProfileDisplay();
            
            alert('Profile updated successfully');
        } catch (e) {
            console.error('Error updating profile:', e);
            alert('Error updating profile: ' + e.message);
        }
    };
    
    // Add method to configure relays
    App.configureRelays = function(relayUrls) {
        if (!this.nostr) return;
        
        // Update relay URLs
        this.nostr.updateRelays(relayUrls);
    };
    
    // Add method to track Hypertuna ID 
    App.setCurrentHypertunaId = function(hypertunaId) {
        this.currentHypertunaId = hypertunaId;
    };
    
    // Method to confirm join group with invite code
    App.confirmJoinGroup = async function() {
        if (!this.currentUser || !this.currentGroupId) {
            this.closeJoinModal();
            return;
        }
        
        const inviteCode = document.getElementById('invite-code-input').value.trim();
        if (!inviteCode) {
            alert('Please enter an invite code.');
            return;
        }
        
        try {
            await this.sendJoinRequest(inviteCode);
            this.closeJoinModal();
        } catch (e) {
            console.error('Error joining group with invite code:', e);
            // Don't close the modal in case of error, so the user can try again
        }
    };
    
    // Initialize nostr integration if user is already logged in
    if (App.currentUser && App.currentUser.privateKey) {
        // Generate Hypertuna configuration if it doesn't exist
        if (!App.currentUser.hypertunaConfig) {
            // We need to use an async IIFE here since setupUserConfig is async
            (async () => {
                try {
                    App.currentUser.hypertunaConfig = await HypertunaUtils.setupUserConfig(App.currentUser);
                    App.saveUserToLocalStorage();
                    console.log('Generated new Hypertuna configuration for existing user');
                } catch (e) {
                    console.error('Error initializing Hypertuna configuration:', e);
                }
            })();
        }
        
        App.nostr.init(App.currentUser)
            .then(async () => {
                console.log('Nostr integration initialized');
                
                // Auto-connect to default relays for returning users
                const defaultRelays = [
                    'wss://relay.damus.io',
                    'wss://relay.nostr.band',
                    'wss://nos.lol'
                ];
                
                // Set default relays in the UI
                const relayListElement = document.getElementById('relay-list');
                if (relayListElement) {
                    relayListElement.value = defaultRelays.join('\n');
                }
                const profileRelayUrlsElement = document.getElementById('profile-relay-urls');
                if (profileRelayUrlsElement) {
                    profileRelayUrlsElement.value = defaultRelays.join('\n');
                }
                
                // Connect to relays
                await App.nostr.connectRelay();
                console.log('Connected to default relays for returning user');
                
                // Start worker if available
                if (window.startWorker) {
                    try {
                        await window.startWorker();
                        console.log('Worker started for returning user');
                    } catch (err) {
                        console.error('Failed to start worker:', err);
                    }
                }
            })
            .catch(e => console.error('Error initializing nostr integration:', e));
    }
    
    return App;
}


export default integrateNostrRelays;
