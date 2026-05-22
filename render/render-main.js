// render/render-main.js
import { setLanguage as uiSetLanguage, renderCategories, renderCommandList, hideModal, showView } from './ui.js';
import { initSearch, filterByCategory, setupSearchListeners, setSearchLanguage } from './search.js';
import { updateAllDescriptions, setLanguage as cardSetLanguage } from './command-card.js';

let currentLang = 'ar';
let selectedOS = null;
let selectedDistro = null;        // for Linux
let currentSettings = null;

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

// ── Linux distro selection (only inside the distro page) ──
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

// ── Settings button ──
document.getElementById('open-settings-btn')?.addEventListener('click', async () => {
    showView('settings');
    await loadSettingsIntoForm();
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

        // Filter by OS
        let commands = allCommands.filter(cmd => cmd.platform === 'all' || cmd.platform === selectedOS);

        if (commands.length === 0) {
            document.getElementById('commands-container').innerHTML = `<div class="error">No commands found.</div>`;
            return;
        }

        const categories = [...new Set(commands.map(c => c.category))];

        initSearch(commands, currentLang);
        renderCategories(categories, (cat) => filterByCategory(cat));

        uiSetLanguage(currentLang);
        cardSetLanguage(currentLang);
        updateAllDescriptions(currentLang);
        renderCommandList(commands);
        setupSearchListeners();
    } catch (error) {
        console.error(error);
        document.getElementById('commands-container').innerHTML = `<div class="error">Failed to load commands.</div>`;
    }
}

// ── Language toggles (sidebar) ──
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
    const s = await loadSettings();               // saved preferences
    document.getElementById('langSetting').value = s.lang;

    // Always show the **current** window size (not the saved one)
    if (window.api && window.api.getWindowSize) {
        const size = await window.api.getWindowSize();
        document.getElementById('windowWidthInput').value = size.width;
        document.getElementById('windowHeightInput').value = size.height;
    } else {
        // fallback to saved values
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

    // Show translated save message
    const msg = document.getElementById('save-message');
    if (msg) {
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 2000);
    }
});

// ── Update check ──
document.getElementById('checkForUpdatesBtn')?.addEventListener('click', async () => {
    const resultEl = document.getElementById('update-result');
    resultEl.style.display = 'block';
    resultEl.textContent = 'Checking for updates...';

    try {
        const result = await window.api.checkUpdate();
        if (result.error) {
            resultEl.textContent = `Error: ${result.error}`;
        } else if (result.hasUpdate) {
            resultEl.innerHTML = `New version available: <strong>${result.latestVersion}</strong> (current: ${result.currentVersion}). <a href="${result.downloadUrl}" target="_blank">Download</a>`;
        } else {
            resultEl.textContent = `You are up to date (v${result.currentVersion}).`;
        }
    } catch (err) {
        resultEl.textContent = 'Update check failed.';
    }
});

// ── Apply settings on startup ──
window.addEventListener('load', async () => {
    const saved = await loadSettings();
    applySettings(saved);

    // Always synchronize the UI language with the saved (or default) language
    currentLang = saved.lang || currentLang;
    uiSetLanguage(currentLang);
    cardSetLanguage(currentLang);
    setSearchLanguage(currentLang);
    updateAllDescriptions(currentLang);
});