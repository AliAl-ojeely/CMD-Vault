const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getCommands: () => ipcRenderer.invoke('get-commands'),
    loadSettings: () => ipcRenderer.invoke('load-settings'),
    saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
    checkUpdate: () => ipcRenderer.invoke('check-update'),
    resizeWindow: (width, height) => ipcRenderer.send('resize-window', width, height),
    getWindowSize: () => ipcRenderer.invoke('get-window-size'),
    openExternal: (url) => ipcRenderer.invoke('open-external', url),
});