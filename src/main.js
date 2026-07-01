const { app, BrowserWindow, ipcMain, Menu, globalShortcut, Tray, shell } = require('electron');
const path = require('path');
const fs = require('fs-extra');
const { loadCommands } = require('../modules/database');
const { detectDistro } = require('../modules/distro-detector');
const { checkGitHubReleases } = require('../modules/updater');

// ──────────────────────────────────────────────
//  SINGLE INSTANCE LOCK – Prevent multiple copies
// ──────────────────────────────────────────────
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
    // Another instance is already running – quit immediately
    app.quit();
} else {
    // This is the first instance – listen for second‑instance attempts
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        // If the window exists, restore and focus it
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            if (!mainWindow.isVisible()) mainWindow.show();
            mainWindow.focus();
        }
    });

    // ── The rest of your original code stays inside this block ──
    process.on('uncaughtException', (error) => {
        console.error('Uncaught Exception:', error);
        app.quit();
    });

    let mainWindow;
    let tray = null;
    let isQuitting = false;

    // Default settings
    const defaultSettings = {
        lang: 'ar',
        theme: 'dark',
        windowWidth: 1200,
        windowHeight: 800,
        windowX: undefined,
        windowY: undefined,
        minimizeToTray: true,
    };

    let currentSettings = { ...defaultSettings };

    function getSettingsPath() {
        return path.join(app.getPath('userData'), 'settings.json');
    }

    function createWindow() {
        const settingsPath = getSettingsPath();

        try {
            if (fs.existsSync(settingsPath)) {
                const raw = fs.readFileSync(settingsPath, 'utf-8');
                currentSettings = { ...defaultSettings, ...JSON.parse(raw) };
            }
        } catch (err) {
            console.error('Failed to read settings on startup:', err);
        }

        const windowOptions = {
            width: currentSettings.windowWidth,
            height: currentSettings.windowHeight,
            backgroundColor: '#0a0a0a',
            icon: path.join(__dirname, '..', 'assets', 'icon.png'),
            autoHideMenuBar: true,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                contextIsolation: true,
                nodeIntegration: false,
            },
        };

        if (currentSettings.windowX !== undefined && currentSettings.windowY !== undefined) {
            windowOptions.x = currentSettings.windowX;
            windowOptions.y = currentSettings.windowY;
        }

        mainWindow = new BrowserWindow(windowOptions);
        mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));

        const saveBounds = () => {
            if (!mainWindow) return;
            const bounds = mainWindow.getBounds();
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
                currentSettings = updated;
            } catch (err) {
                // ignore
            }
        };

        mainWindow.on('close', (event) => {
            if (currentSettings.minimizeToTray && !isQuitting) {
                event.preventDefault();
                mainWindow.hide();
            }
        });

        mainWindow.on('resized', saveBounds);
        mainWindow.on('moved', saveBounds);
    }

    function createTray() {
        if (tray) return;
        const iconPath = path.join(__dirname, '..', 'assets', 'icon.png');
        tray = new Tray(iconPath);

        const contextMenu = Menu.buildFromTemplate([
            {
                label: 'Show CMD Vault',
                click: () => mainWindow.show()
            },
            {
                label: 'Hide',
                click: () => mainWindow.hide()
            },
            { type: 'separator' },
            {
                label: 'Quit',
                click: () => {
                    isQuitting = true;
                    app.quit();
                }
            }
        ]);

        tray.setToolTip('CMD Vault');
        tray.setContextMenu(contextMenu);

        tray.on('click', () => {
            if (mainWindow.isVisible()) {
                mainWindow.hide();
            } else {
                mainWindow.show();
                mainWindow.focus();
            }
        });
    }

    function destroyTray() {
        if (tray) {
            tray.destroy();
            tray = null;
        }
    }

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

        if (currentSettings.minimizeToTray) {
            createTray();
        }

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
                currentSettings = { ...defaultSettings, ...JSON.parse(raw) };
                return currentSettings;
            }
        } catch (err) {
            console.error('Failed to load settings:', err);
        }
        await fs.writeFile(filePath, JSON.stringify(defaultSettings, null, 2));
        currentSettings = { ...defaultSettings };
        return currentSettings;
    });

    ipcMain.handle('save-settings', async (event, newSettings) => {
        const filePath = getSettingsPath();
        const merged = { ...defaultSettings, ...currentSettings, ...newSettings };
        try {
            await fs.writeFile(filePath, JSON.stringify(merged, null, 2));

            if (merged.minimizeToTray && !tray) {
                createTray();
            } else if (!merged.minimizeToTray && tray) {
                destroyTray();
            }

            currentSettings = merged;
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
}