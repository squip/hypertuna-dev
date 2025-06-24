import { NostrUtils } from "./NostrUtils.js";
export default class MembersList {
  constructor(container, client, currentUserPubkey) {
    this.container = container;
    this.client = client;
    this.currentUserPubkey = currentUserPubkey;
  }

  setUserPubkey(pubkey) {
    this.currentUserPubkey = pubkey;
  }

  async render(members = [], admins = []) {
    if (!this.container) return;
    this.container.innerHTML = '';

    // Create a map to ensure unique members
    const uniqueMembers = new Map();
    
    // Add members first
    members.forEach(m => {
        if (m && m.pubkey && !uniqueMembers.has(m.pubkey)) {
            uniqueMembers.set(m.pubkey, { 
                pubkey: m.pubkey, 
                roles: m.roles || ['member'] 
            });
        }
    });
    
    // Update roles for admins
    admins.forEach(a => {
        if (a && a.pubkey) {
            const existing = uniqueMembers.get(a.pubkey);
            if (existing) {
                // Merge roles, ensuring 'admin' is included
                const roles = new Set([...(existing.roles || []), ...(a.roles || ['admin'])]);
                if (!roles.has('admin')) roles.add('admin');
                existing.roles = Array.from(roles);
            } else {
                uniqueMembers.set(a.pubkey, {
                    pubkey: a.pubkey,
                    roles: a.roles || ['admin']
                });
            }
        }
    });
    
    const membersList = Array.from(uniqueMembers.values());
    
    if (membersList.length === 0) {
        this.container.innerHTML = `
            <div class="empty-state">
                <p>No members in this relay yet</p>
            </div>
        `;
        return;
    }

    // Fetch profiles for all members
    const profiles = {};
    const memberPubkeys = membersList.map(m => m.pubkey); // This was the missing variable
    
    for (const pk of memberPubkeys) {
        try {
            const profile = await this.client.fetchUserProfile(pk);
            profiles[pk] = profile || {};
        } catch {
            profiles[pk] = {};
        }
    }

    const isCurrentUserAdmin = admins.some(a => a.pubkey === this.currentUserPubkey);

    // Render each member
    for (const member of membersList) {
        const pk = member.pubkey;
        const profile = profiles[pk];
        const roles = member.roles || ['member'];
        const npub = NostrUtils.hexToNpub(pk);
        const displayPub = NostrUtils.truncateNpub(npub);
        const name = profile.name || "User_" + NostrUtils.truncatePubkey(pk);
        const first = name.charAt(0).toUpperCase();
        const roleText = roles.includes('admin') ? 'Admin' : 'Member';
        const roleClass = roles.includes('admin') ? 'admin' : '';

        const item = document.createElement('div');
        item.className = 'member-item';
        item.innerHTML = `
            <div class="member-avatar">${profile.picture ? `<img src="${profile.picture}" alt="${name}">` : `<span>${first}</span>`}</div>
            <div class="member-info">
                <div class="member-name">${name}</div>
                <div class="member-pubkey">${displayPub}</div>
            </div>
            <span class="member-role ${roleClass}">${roleText}</span>`;

        if (isCurrentUserAdmin && pk !== this.currentUserPubkey) {
            const actions = document.createElement('div');
            actions.className = 'member-actions';

            if (!roles.includes('admin')) {
                const promote = document.createElement('button');
                promote.className = 'btn btn-secondary btn-small';
                promote.dataset.action = 'promote';
                promote.dataset.pubkey = pk;
                promote.textContent = 'Make Admin';
                promote.addEventListener("click", () => {
                    this.container.dispatchEvent(new CustomEvent("promote", { detail: { pubkey: pk } }));
                });
                actions.appendChild(promote);
            }

            const remove = document.createElement('button');
            remove.className = 'btn btn-danger btn-small';
            remove.addEventListener("click", () => {
                this.container.dispatchEvent(new CustomEvent("remove", { detail: { pubkey: pk } }));
            });
            remove.dataset.action = 'remove';
            remove.dataset.pubkey = pk;
            remove.textContent = 'Remove';
            actions.appendChild(remove);

            item.appendChild(actions);
        }

        this.container.appendChild(item);
    }
}
}
