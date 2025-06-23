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

    const rolesMap = {};
    members.forEach(m => { rolesMap[m.pubkey] = ['member']; });
    admins.forEach(a => { rolesMap[a.pubkey] = a.roles || ['admin']; });

    const pubkeys = Object.keys(rolesMap);
    if (pubkeys.length === 0) {
      this.container.innerHTML = `\n        <div class="empty-state">\n          <p>No members in this relay yet</p>\n        </div>\n      `;
      return;
    }

    const profiles = {};
    for (const pk of pubkeys) {
      try {
        const profile = await this.client.fetchUserProfile(pk);
        profiles[pk] = profile || {};
      } catch {
        profiles[pk] = {};
      }
    }

    const isCurrentUserAdmin = admins.some(a => a.pubkey === this.currentUserPubkey);

    for (const pk of pubkeys) {
      const profile = profiles[pk];
      const roles = rolesMap[pk] || ['member'];
      const npub = NostrUtils.hexToNpub(pk);
      const displayPub = NostrUtils.truncateNpub(npub);
      const name = profile.name || "User_" + NostrUtils.truncatePubkey(pk);
      const first = name.charAt(0).toUpperCase();
      const roleText = roles.includes('admin') ? 'Admin' : 'Member';
      const roleClass = roles.includes('admin') ? 'admin' : '';

      const item = document.createElement('div');
      item.className = 'member-item';
      item.innerHTML = `\n        <div class="member-avatar">${profile.picture ? `<img src="${profile.picture}" alt="${name}">` : `<span>${first}</span>`}</div>\n        <div class="member-info">\n          <div class="member-name">${name}</div>\n          <div class="member-pubkey">${displayPub}</div>\n        </div>\n        <span class="member-role ${roleClass}">${roleText}</span>`;

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
