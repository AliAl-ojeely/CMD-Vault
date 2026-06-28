const { app, BrowserWindow, ipcMain, Menu, globalShortcut } = require('electron');
const path = require('path');
const { shell } = require('electron');
const fs = require('fs-extra');
const { loadCommands } = require('../modules/database');
const { detectDistro } = require('../modules/distro-detector');
const { checkGitHubReleases } = require('../modules/updater');

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    app.quit();
});

let mainWindow;

// Default settings moved to the top so they can be accessed by createWindow
const defaultSettings = {
    lang: 'ar',
    theme: 'dark',
    windowWidth: 1200,
    windowHeight: 800,
    windowX: undefined, // Store X position
    windowY: undefined  // Store Y position
};

function getSettingsPath() {
    return path.join(app.getPath('userData'), 'settings.json');
}

function createWindow() {
    // 1. Read existing settings BEFORE creating the window
    const settingsPath = getSettingsPath();
    let savedSettings = { ...defaultSettings };

    try {
        if (fs.existsSync(settingsPath)) {
            const raw = fs.readFileSync(settingsPath, 'utf-8');
            savedSettings = { ...defaultSettings, ...JSON.parse(raw) };
        }
    } catch (err) {
        console.error('Failed to read settings on startup:', err);
    }

    // 2. Apply saved size and position
    const windowOptions = {
        width: savedSettings.windowWidth,
        height: savedSettings.windowHeight,
        backgroundColor: '#0a0a0a',
        icon: path.join(__dirname, '..', 'assets', 'icon.png'),
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
    };

    // Only apply X/Y if they exist, otherwise OS will center it by default
    if (savedSettings.windowX !== undefined && savedSettings.windowY !== undefined) {
        windowOptions.x = savedSettings.windowX;
        windowOptions.y = savedSettings.windowY;
    }

    mainWindow = new BrowserWindow(windowOptions);
    mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));

    // 3. Helper function to save bounds (size + position)
    const saveBounds = () => {
        if (!mainWindow) return;
        const bounds = mainWindow.getBounds(); // Gets x, y, width, height
        try {
            let current = {};
            if (fs.existsSync(settingsPath)) {
                const raw = fs.readFileSync(settingsPath, 'utf-8');
                current = JSON.parse(raw);
            }
            const updated = {
                ...defaultSettings,
                ...current,
                windowWidth: bounds.width,
                windowHeight: bounds.height,
                windowX: bounds.x,
                windowY: bounds.y
            };
            fs.writeFileSync(settingsPath, JSON.stringify(updated, null, 2));
        } catch (err) {
            // ignore
        }
    };

    // Listen to both resize and move events
    mainWindow.on('resized', saveBounds);
    mainWindow.on('moved', saveBounds);
}

// ─── Application Menu (includes reload shortcuts) ──────────
function createApplicationMenu() {
    const template = [
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { type: 'separator' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
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
    createApplicationMenu();

    globalShortcut.register('F12', () => {
        if (mainWindow) mainWindow.webContents.toggleDevTools();
    });
    globalShortcut.register('CommandOrControl+Shift+I', () => {
        if (mainWindow) mainWindow.webContents.toggleDevTools();
    });
});

ipcMain.on('resize-window', (event, width, height) => {
    if (mainWindow) mainWindow.setSize(width, height);
});

ipcMain.handle('get-window-size', () => {
    if (mainWindow) {
        const bounds = mainWindow.getBounds();
        return { width: bounds.width, height: bounds.height };
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