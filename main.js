const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 1366, height: 768})
    win.maximize()
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }

  app.on('ready', createWindow)
