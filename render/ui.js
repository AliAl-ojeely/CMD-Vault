// render/ui.js
let currentLang = 'ar';

export function t(key) {
    return (dictionary[currentLang] && dictionary[currentLang][key]) || key;
}

export function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    const backToCommandsSpan = document.querySelector('#settings-back-btn span[data-i18n="back_to_commands"]');
    if (backToCommandsSpan) backToCommandsSpan.textContent = t('back_to_commands');

    document.getElementById('app-title').textContent = t('appTitle');
    document.getElementById('search-input').placeholder = t('searchPlaceholder');
    const catAll = document.querySelector('.category-all');
    if (catAll) catAll.textContent = t('allCategories');
    const backLabel = document.querySelector('.back-btn .back-label');
    if (backLabel) backLabel.textContent = t('changeOS');
    const settingsLabel = document.getElementById('settings-label');
    if (settingsLabel) settingsLabel.textContent = t('settings');

    // Update settings page texts (if they exist)
    const titleSettings = document.querySelector('#settings-view [data-i18n="title_settings"]');
    if (titleSettings) titleSettings.textContent = t('title_settings');
    const setLangLabel = document.querySelector('#settings-view [data-i18n="set_lang"]');
    if (setLangLabel) setLangLabel.textContent = t('set_lang');
    const updatesLabel = document.querySelector('#settings-view [data-i18n="check_updates_title"]');
    if (updatesLabel) updatesLabel.textContent = t('check_updates_title');
    const updatesBtn = document.querySelector('#settings-view [data-i18n="btn_check_updates"]');
    if (updatesBtn) updatesBtn.textContent = t('btn_check_updates');
    const saveBtn = document.querySelector('#settings-view [data-i18n="btn_save_settings"]');
    if (saveBtn) saveBtn.textContent = t('btn_save_settings');
    const saveMsg = document.querySelector('#save-message [data-i18n="settings_saved"]');
    if (saveMsg) saveMsg.textContent = t('settings_saved');
}

export function showModal(message) {
    document.getElementById('modal-message').textContent = message;
    document.getElementById('modal-overlay').classList.remove('hidden');
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

    const allBtn = document.createElement('button');
    allBtn.className = 'category-item category-all';
    allBtn.textContent = t('allCategories');
    allBtn.addEventListener('click', () => onCategorySelect('all'));
    list.appendChild(allBtn);

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-item';
        btn.textContent = cat;
        btn.addEventListener('click', () => onCategorySelect(cat));
        list.appendChild(btn);
    });
}

export function renderCommandList(commands) {
    const container = document.getElementById('commands-container');
    container.innerHTML = '';

    if (commands.length === 0) {
        container.innerHTML = `<div class="no-results">${t('noResults')}</div>`;
        return;
    }

    commands.forEach(cmd => {
        container.appendChild(createCommandCard(cmd));
    });
}

export function showView(view) {
    const commandsView = document.getElementById('commands-view');
    const settingsView = document.getElementById('settings-view');
    const searchBox = document.getElementById('search-box');
    const categoriesList = document.getElementById('categories-list');
    const openSettingsBtn = document.getElementById('open-settings-btn');
    const settingsBackBtn = document.getElementById('settings-back-btn');   // new

    if (view === 'commands') {
        commandsView.style.display = 'block';
        settingsView.style.display = 'none';
        searchBox.style.display = 'block';
        categoriesList.style.display = 'block';
        if (openSettingsBtn) openSettingsBtn.style.display = 'flex';
        if (settingsBackBtn) settingsBackBtn.classList.add('hidden-btn');   // hide back button
    } else if (view === 'settings') {
        commandsView.style.display = 'none';
        settingsView.style.display = 'block';
        searchBox.style.display = 'none';
        categoriesList.style.display = 'none';
        if (openSettingsBtn) openSettingsBtn.style.display = 'none';
        if (settingsBackBtn) settingsBackBtn.classList.remove('hidden-btn'); // show back button
    }
}

// Close any open modal when clicking overlay background
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
    // Also handle the close button inside devModal
    const closeDevBtn = document.getElementById('closeDevModal');
    if (closeDevBtn) {
        closeDevBtn.addEventListener('click', () => {
            document.getElementById('devModal').style.display = 'none';
        });
    }
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setupModalCloseOnOverlay();
});

// Import at bottom to avoid circular dependency
import { createCommandCard } from './command-card.js';