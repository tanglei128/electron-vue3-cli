// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // 这里可以定义要暴露给渲染进程的API
});