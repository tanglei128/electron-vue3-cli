// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // 预加载脚本
            contextIsolation: true,
            enableRemoteModule: false,
        },
    });

    // 加载 Vite 开发服务器地址
    win.loadURL('http://localhost:5173'); // Vite 默认端口
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});