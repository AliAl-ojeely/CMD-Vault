const { app, BrowserWindow, ipcMain, Menu, globalShortcut } = require('electron');
const path = require('path');
const { shell } = require('electron');
const fs = require('fs-extra');
const { loadCommands } = require('../modules/database');
const { detectDistro } = require('../modules/distro-detector');
const { checkGitHubReleases } = require('../modules/updater');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: '#0a0a0a',
        icon: path.join(__dirname, '..', 'assets', 'icon.png'),
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });
    mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));

    // ── Auto‑save window size on every resize ──────────────
    mainWindow.on('resize', () => {
        const [width, height] = mainWindow.getSize();
        const settingsPath = getSettingsPath();
        try {
            // Read existing settings to preserve language, etc.
            let current = {};
            if (fs.existsSync(settingsPath)) {
                const raw = fs.readFileSync(settingsPath, 'utf-8');
                current = JSON.parse(raw);
            }
            // Merge with new size and defaults
            const updated = { ...defaultSettings, ...current, windowWidth: width, windowHeight: height };
            fs.writeFileSync(settingsPath, JSON.stringify(updated, null, 2));
        } catch (err) {
            // Silently ignore; the resize still works, just won't save
        }
    });
}

app.whenReady().then(() => {
    createWindow();
    Menu.setApplicationMenu(null);

    globalShortcut.register('F12', () => {
        if (mainWindow) mainWindow.webContents.toggleDevTools();
    });
    globalShortcut.register('CommandOrControl+Shift+I', () => {
        if (mainWindow) mainWindow.webContents.toggleDevTools();
    });
});

ipcMain.on('resize-window', (event, width, height) => {
    if (mainWindow) {
        mainWindow.setSize(width, height);
    }
});

ipcMain.handle('get-window-size', () => {
    if (mainWindow) {
        const [width, height] = mainWindow.getSize();
        return { width, height };
    }
    return { width: 1200, height: 800 };
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// IPC: get all commands
ipcMain.handle('get-commands', async () => {
    try {
        return await loadCommands();
    } catch (err) {
        console.error('Failed to load commands:', err);
        return [];
    }
});

// ─── Settings persistence ──────────────────────
function getSettingsPath() {
    return path.join(app.getPath('userData'), 'settings.json');
}

const defaultSettings = {
    lang: 'ar',
    windowWidth: 1200,
    windowHeight: 800,
};

ipcMain.handle('load-settings', async () => {
    const filePath = getSettingsPath();
    try {
        if (await fs.pathExists(filePath)) {
            const raw = await fs.readFile(filePath, 'utf-8');
            return { ...defaultSettings, ...JSON.parse(raw) };
        }
    } catch (err) {
        console.error('Failed to load settings:', err);
    }
    await fs.writeFile(filePath, JSON.stringify(defaultSettings, null, 2));
    return { ...defaultSettings };
});

ipcMain.handle('save-settings', async (event, newSettings) => {
    const filePath = getSettingsPath();
    const merged = { ...defaultSettings, ...newSettings };
    try {
        await fs.writeFile(filePath, JSON.stringify(merged, null, 2));
        return { success: true };
    } catch (err) {
        console.error('Failed to save settings:', err);
        return { success: false, error: err.message };
    }
});

// ─── Update check ──────────────────────────────
ipcMain.handle('check-update', async () => {
    try {
        return await checkGitHubReleases();
    } catch (err) {
        return { error: err.message };
    }
});

ipcMain.handle('open-external', async (event, url) => {
    if (typeof url === 'string' && url.startsWith('https://')) {
        await shell.openExternal(url);
        return { success: true };
    }
    return { success: false, error: 'Invalid URL' };
});