// render/render-main.js
import { setLanguage as uiSetLanguage, renderCategories, renderCommandList, hideModal, showView, showToast, t } from './ui.js';
import { initSearch, filterByCategory, setupSearchListeners, setSearchLanguage, setFavorites } from './search.js';
import { updateAllDescriptions, setLanguage as cardSetLanguage, setToggleFavoriteCallback } from './command-card.js';
import { initShortcuts } from './shortcuts.js';

let currentLang = 'ar';
let selectedOS = null;
let selectedDistro = null;
let currentSettings = null;
let currentCategory = 'all';
let favorites = JSON.parse(localStorage.getItem('cmdvault-favorites')) || [];

// Provide the toggle function to command-card.js immediately
setToggleFavoriteCallback(toggleFavorite);

// ── Landing (only inside the landing page) ──
document.querySelectorAll('#landing-page .os-card').forEach(card => {
    card.addEventListener('click', () => {
        selectedOS = card.dataset.os;
        if (selectedOS === 'linux') {
            document.getElementById('landing-page').style.display = 'none';
            document.getElementById('linux-distro-page').style.display = 'flex';
        } else {
            document.getElementById('landing-page').style.display = 'none';
            document.getElementById('app-main').style.display = 'flex';
            showView('commands');
            initApp();
        }
    });
});

// ── Linux distro selection ──
document.querySelectorAll('#linux-distro-page .os-card').forEach(card => {
    card.addEventListener('click', () => {
        selectedDistro = card.dataset.distro;
        document.getElementById('linux-distro-page').style.display = 'none';
        document.getElementById('app-main').style.display = 'flex';
        showView('commands');
        initApp();
    });
});

document.getElementById('back-from-distro')?.addEventListener('click', () => {
    document.getElementById('linux-distro-page').style.display = 'none';
    document.getElementById('landing-page').style.display = 'flex';
    selectedOS = null;
    selectedDistro = null;
});

// ── Back to landing (Change OS) ──
document.getElementById('back-to-landing')?.addEventListener('click', () => {
    document.getElementById('app-main').style.display = 'none';
    document.getElementById('landing-page').style.display = 'flex';
    selectedOS = null;
    selectedDistro = null;
});

// ── Settings button (delegated, works with dynamic button) ──
document.getElementById('sidebar')?.addEventListener('click', async (e) => {
    if (e.target.closest('#open-settings-btn')) {
        showView('settings');
        await loadSettingsIntoForm();
    }
});

// ── Back to commands from settings ──
document.getElementById('settings-back-btn')?.addEventListener('click', () => {
    showView('commands');
});

// ── Dev modal ──
document.getElementById('sidebar-header')?.addEventListener('click', () => {
    document.getElementById('devModal').style.display = 'flex';
});

document.getElementById('github-profile-link')?.addEventListener('click', () => {
    window.api.openExternal('https://github.com/AliAl-ojeely');
});

// ── Init app ──
async function initApp() {
    try {
        const allCommands = await window.api.getCommands();
        if (!allCommands || allCommands.length === 0) {
            document.getElementById('commands-container').innerHTML = `<div class="error">No commands available.</div>`;
            return;
        }

        let commands = allCommands.filter(cmd => cmd.platform === 'all' || cmd.platform === selectedOS);

        if (commands.length === 0) {
            document.getElementById('commands-container').innerHTML = `<div class="error">No commands found.</div>`;
            return;
        }

        const categories = [...new Set(commands.map(c => c.category))];

        initSearch(commands, currentLang, favorites);
        renderCategories(categories, (cat) => {
            currentCategory = cat;
            filterByCategory(cat);
        });

        uiSetLanguage(currentLang);
        cardSetLanguage(currentLang);
        updateAllDescriptions(currentLang);
        renderCommandList(commands, favorites);        // pass favorites
        setupSearchListeners();
    } catch (error) {
        console.error(error);
        document.getElementById('commands-container').innerHTML = `<div class="error">Failed to load commands.</div>`;
    }
}

window.addEventListener('load', () => {
    initShortcuts();
});

// ── Favorites toggle ──────────────────────────────
function toggleFavorite(rawCommand) {
    const index = favorites.indexOf(rawCommand);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(rawCommand);
    }
    // Save deduplicated
    localStorage.setItem('cmdvault-favorites', JSON.stringify([...new Set(favorites)]));

    // Update the heart icon on the clicked card
    const btn = document.querySelector(`.btn-favorite[data-command="${rawCommand}"]`);
    if (btn) {
        const isFav = favorites.includes(rawCommand);
        btn.innerHTML = isFav
            ? '<i class="fa-solid fa-heart"></i>'
            : '<i class="fa-regular fa-heart"></i>';
        btn.title = isFav ? t('remove_from_favorites') : t('add_to_favorites');
    }

    // If we're currently viewing favorites, re-apply filter
    if (currentCategory === 'favorites') {
        setFavorites(favorites);
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.dispatchEvent(new Event('input'));
    }
}

// ── Language toggles ──
document.getElementById('lang-en')?.addEventListener('click', () => applyLanguageChange('en'));
document.getElementById('lang-ar')?.addEventListener('click', () => applyLanguageChange('ar'));

function applyLanguageChange(lang) {
    currentLang = lang;
    uiSetLanguage(lang);
    cardSetLanguage(lang);
    setSearchLanguage(lang);
    updateAllDescriptions(lang);
    document.getElementById('search-input')?.dispatchEvent(new Event('input'));
}

document.getElementById('modal-close')?.addEventListener('click', hideModal);

// ─── Settings persistence ───
async function loadSettings() {
    currentSettings = await window.api.loadSettings();
    return currentSettings;
}

async function saveSettings(settings) {
    const result = await window.api.saveSettings(settings);
    if (result.success) {
        currentSettings = { ...currentSettings, ...settings };
    } else {
        console.error('Failed to save settings:', result.error);
    }
    return result;
}

function applySettings(settings) {
    if (window.api && window.api.resizeWindow) {
        window.api.resizeWindow(settings.windowWidth, settings.windowHeight);
    }
}

async function loadSettingsIntoForm() {
    const s = await loadSettings();
    document.getElementById('langSetting').value = s.lang;

    if (window.api && window.api.getWindowSize) {
        const size = await window.api.getWindowSize();
        document.getElementById('windowWidthInput').value = size.width;
        document.getElementById('windowHeightInput').value = size.height;
    } else {
        document.getElementById('windowWidthInput').value = s.windowWidth || 1200;
        document.getElementById('windowHeightInput').value = s.windowHeight || 800;
    }
}

document.getElementById('saveGeneralSettings')?.addEventListener('click', async () => {
    const settings = {
        lang: document.getElementById('langSetting').value,
        windowWidth: parseInt(document.getElementById('windowWidthInput').value, 10) || 1200,
        windowHeight: parseInt(document.getElementById('windowHeightInput').value, 10) || 800,
    };

    await saveSettings(settings);
    applySettings(settings);

    if (settings.lang !== currentLang) {
        applyLanguageChange(settings.lang);
    }

    showToast(t('settings_saved'), 'success');
});

// ── Update check ──
document.getElementById('checkForUpdatesBtn')?.addEventListener('click', async () => {
    showToast(t('checking_updates'), 'info');
    try {
        const result = await window.api.checkUpdate();
        if (result.error) {
            showToast(`${t('update_error')}: ${result.error}`, 'error');
        } else if (result.hasUpdate) {
            showToast(`${t('new_version_available')}: ${result.latestVersion}`, 'info');
        } else {
            showToast(`${t('up_to_date')} (v${result.currentVersion})`, 'success');
        }
    } catch (err) {
        showToast(t('update_failed'), 'error');
    }
});

// ── Apply settings on startup ──
window.addEventListener('load', async () => {
    const saved = await loadSettings();
    applySettings(saved);

    currentLang = saved.lang || currentLang;
    uiSetLanguage(currentLang);
    cardSetLanguage(currentLang);
    setSearchLanguage(currentLang);
    updateAllDescriptions(currentLang);
});