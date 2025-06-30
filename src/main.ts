import { app, BrowserWindow } from "electron";
// import { updateElectronApp, UpdateSourceType } from "update-electron-app";
import path from "node:path";
import started from "electron-squirrel-startup";

if (started) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "ACARS Client by Zeep Fly",
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }
};

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// updateElectronApp({
//   updateSource: {
//     type: UpdateSourceType.ElectronPublicUpdateService,
//     repo: "AeroNav-Sim/zeep-fly-acars-client",
//   },
//   updateInterval: "1 hour",
//   logger: {
//     log: (message) => console.log(message),
//     info: (message) => console.log(message),
//     error: (message) => console.error(message),
//     warn: (message) => console.warn(message),
//   },
// });
