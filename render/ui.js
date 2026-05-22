// render/ui.js
let currentLang = 'ar';

export function t(key) {
    return (dictionary[currentLang] && dictionary[currentLang][key]) || key;
}

export function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Automatically update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[currentLang][key]) {
            el.textContent = dictionary[currentLang][key];
        }
    });

    // Automatically update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dictionary[currentLang][key]) {
            el.placeholder = dictionary[currentLang][key];
        }
    });

    // ── Update dynamic sidebar buttons ─────────────────
    // All Commands (keep icon)
    const allBtn = document.querySelector('.category-all');
    if (allBtn) {
        allBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${t('allCategories')}`;
    }

    // Favorites (keep icon)
    const favBtn = document.querySelector('.category-favorites');
    if (favBtn) {
        favBtn.innerHTML = `<i class="fa-solid fa-heart"></i> ${t('favorite')}`;
    }

    // Collapsible group headers (they use data-i18n-group)
    document.querySelectorAll('[data-i18n-group]').forEach(span => {
        const key = span.getAttribute('data-i18n-group');
        if (dictionary[currentLang][key]) {
            span.textContent = dictionary[currentLang][key];
        }
    });
}

export function showModal(message) {
    document.getElementById('modal-message').textContent = message;
    document.getElementById('modal-overlay').classList.remove('hidden');
}

// Show a friendly toast notification
export function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = document.createElement('i');
    if (type === 'success') {
        icon.className = 'fa-solid fa-circle-check';
    } else if (type === 'error') {
        icon.className = 'fa-solid fa-circle-exclamation';
    } else if (type === 'info') {
        icon.className = 'fa-solid fa-circle-info';
    } else {
        icon.className = 'fa-solid fa-bell';
    }

    const msgSpan = document.createElement('span');
    msgSpan.className = 'toast-msg';
    msgSpan.textContent = message;

    toast.appendChild(icon);
    toast.appendChild(msgSpan);
    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 3000);
}

export function showInfoModal(title, contentHTML) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').innerHTML = contentHTML;
    document.getElementById('modal-overlay').classList.remove('hidden');
}

export function hideModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
}

export function renderCategories(categories, onCategorySelect) {
    const list = document.getElementById('categories-list');
    list.innerHTML = '';

    // ── Favorites, All Commands, Settings ─────────────
    const topBtns = document.createElement('div');
    topBtns.className = 'sidebar-top-btns';

    const favBtn = document.createElement('button');
    favBtn.className = 'category-item category-favorites';
    favBtn.innerHTML = `<i class="fa-solid fa-heart"></i> ${t('favorite')}`;
    favBtn.addEventListener('click', () => onCategorySelect('favorites'));
    topBtns.appendChild(favBtn);

    const allBtn = document.createElement('button');
    allBtn.className = 'category-item category-all';
    allBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${t('allCategories')}`;
    allBtn.addEventListener('click', () => onCategorySelect('all'));
    topBtns.appendChild(allBtn);

    // Separator
    const sep = document.createElement('div');
    sep.className = 'sidebar-separator';
    topBtns.appendChild(sep);

    // Settings button (ID used by delegated listener)
    const settingsBtn = document.createElement('button');
    settingsBtn.id = 'open-settings-btn';
    settingsBtn.className = 'category-item';
    settingsBtn.innerHTML = `<i class="fa-solid fa-sliders"></i> ${t('settings')}`;
    topBtns.appendChild(settingsBtn);

    list.appendChild(topBtns);

    // ── Group definitions (unchanged) ─────────────────
    const groups = [
        {
            key: 'group_system', icon: 'fa-solid fa-desktop',
            categories: ['System Info', 'System Configuration', 'System Maintenance', 'System Management', 'System Update', 'Hardware Info']
        },
        {
            key: 'group_network', icon: 'fa-solid fa-network-wired',
            categories: ['Networking', 'Network Diagnostics', 'File Sharing', 'Wireless']
        },
        {
            key: 'group_files', icon: 'fa-solid fa-folder-tree',
            categories: ['File Management', 'Disk Management', 'File Transfer', 'Permissions', 'Data Recovery']
        },
        {
            key: 'group_processes', icon: 'fa-solid fa-microchip',
            categories: ['Process Management', 'Performance Monitoring', 'Service Management', 'Task Scheduling']
        },
        {
            key: 'group_security', icon: 'fa-solid fa-shield-halved',
            categories: ['Security', 'User Management', 'Power Management', 'Backup']
        },
        {
            key: 'group_productivity', icon: 'fa-solid fa-rocket',
            categories: ['Productivity', 'Customization', 'Package Management', 'Help']
        }
    ];

    const otherCategories = [];
    categories.forEach(cat => {
        let found = false;
        for (const group of groups) {
            if (group.categories.includes(cat)) found = true;
        }
        if (!found) otherCategories.push(cat);
    });
    if (otherCategories.length > 0) {
        groups.push({ key: 'group_other', icon: 'fa-solid fa-ellipsis', categories: otherCategories });
    }

    // ── Render groups ─────────────────────────────────
    groups.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'sidebar-group';

        const header = document.createElement('div');
        header.className = 'sidebar-group-header';
        header.innerHTML = `<i class="${group.icon}"></i> <span data-i18n-group="${group.key}">${t(group.key)}</span> <i class="fas fa-chevron-down sidebar-chevron"></i>`;
        header.addEventListener('click', () => {
            groupDiv.classList.toggle('collapsed');
        });
        groupDiv.appendChild(header);

        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'sidebar-group-items';

        group.categories.forEach(cat => {
            if (categories.includes(cat)) {
                const btn = document.createElement('button');
                btn.className = 'category-item';
                btn.textContent = cat;
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    onCategorySelect(cat);
                });
                itemsDiv.appendChild(btn);
            }
        });

        groupDiv.appendChild(itemsDiv);
        list.appendChild(groupDiv);
    });
}

export function renderCommandList(commands, favorites = []) {
    const container = document.getElementById('commands-container');
    container.innerHTML = '';

    if (commands.length === 0) {
        container.innerHTML = `<div class="no-results">${t('noResults')}</div>`;
        return;
    }

    commands.forEach(cmd => {
        const isFav = favorites.includes(cmd.command);
        container.appendChild(createCommandCard(cmd, isFav));
    });
}

export function showView(view) {
    const commandsView = document.getElementById('commands-view');
    const settingsView = document.getElementById('settings-view');
    const searchBox = document.getElementById('search-box');
    const categoriesList = document.getElementById('categories-list');
    const openSettingsBtn = document.getElementById('open-settings-btn');

    if (view === 'commands') {
        commandsView.style.display = 'block';
        settingsView.style.display = 'none';
        searchBox.style.display = 'block';
        categoriesList.style.display = 'block';
        if (openSettingsBtn) openSettingsBtn.style.display = 'flex';
    } else if (view === 'settings') {
        commandsView.style.display = 'none';
        settingsView.style.display = 'block';
        searchBox.style.display = 'none';
        categoriesList.style.display = 'none';
        if (openSettingsBtn) openSettingsBtn.style.display = 'none';
    }
}

function setupModalCloseOnOverlay() {
    const overlays = document.querySelectorAll('#modal-overlay, #devModal');
    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.add('hidden');
                if (overlay.id === 'devModal') overlay.style.display = 'none';
            }
        });
    });
    const closeDevBtn = document.getElementById('closeDevModal');
    if (closeDevBtn) {
        closeDevBtn.addEventListener('click', () => {
            document.getElementById('devModal').style.display = 'none';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupModalCloseOnOverlay();
});

import { createCommandCard } from './command-card.js';