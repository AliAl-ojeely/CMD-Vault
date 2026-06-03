const { app, BrowserWindow, ipcMain, Menu, globalShortcut } = require('electron');
const path = require('path');
const { shell } = require('electron');
const fs = require('fs-extra');
const { loadCommands } = require('../modules/database');
const { detectDistro } = require('../modules/distro-detector');
const { checkGitHubReleases } = require('../modules/updater');

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    // Optionally show a message box before exiting
    app.quit();
});

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: '#0a0a0a',
        icon: path.join(__dirname, '..', 'assets', 'icon.png'),
        autoHideMenuBar: true,          // change to false so menu bar is visible (optional)
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });
    mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));

    // Auto‑save window size on every resize
    mainWindow.on('resize', () => {
        const [width, height] = mainWindow.getSize();
        const settingsPath = getSettingsPath();
        try {
            let current = {};
            if (fs.existsSync(settingsPath)) {
                const raw = fs.readFileSync(settingsPath, 'utf-8');
                current = JSON.parse(raw);
            }
            const updated = { ...defaultSettings, ...current, windowWidth: width, windowHeight: height };
            fs.writeFileSync(settingsPath, JSON.stringify(updated, null, 2));
        } catch (err) {
            // ignore
        }
    });
}

// ─── Application Menu (includes reload shortcuts) ──────────
function createApplicationMenu() {
    const template = [
        {
            label: 'View',
            submenu: [
                { role: 'reload' },          // Ctrl+R (or Cmd+R on macOS)
                { role: 'forceReload' },     // Ctrl+Shift+R (or Cmd+Shift+R)
                { type: 'separator' },
                { role: 'toggleDevTools' },  // F12 / Ctrl+Shift+I
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        // Optional: add an Edit menu for copy/paste (useful in forms)
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'selectAll' }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

process.on('uncaughtException', (error) => {
    console.error('FATAL:', error);
    app.quit();
});

app.whenReady().then(() => {
    createWindow();
    createApplicationMenu();    // ← replaces Menu.setApplicationMenu(null)

    // Keep your existing DevTools global shortcuts
    globalShortcut.register('F12', () => {
        if (mainWindow) mainWindow.webContents.toggleDevTools();
    });
    globalShortcut.register('CommandOrControl+Shift+I', () => {
        if (mainWindow) mainWindow.webContents.toggleDevTools();
    });
});

// (The rest of your IPC handlers remain unchanged)
ipcMain.on('resize-window', (event, width, height) => {
    if (mainWindow) mainWindow.setSize(width, height);
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

ipcMain.handle('get-commands', async () => {
    try {
        return await loadCommands();
    } catch (err) {
        console.error('Failed to load commands:', err);
        return [];
    }
});

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