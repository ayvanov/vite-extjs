import "../resources/css/ext/classic/theme-triton/theme-triton-all-debug.css";

Ext.Loader.setConfig({
    disableCaching: false,
    scriptType: "module",
    scriptFileExt: "ts",
});

Ext.application({
    name: "App",
    appFolder: "src",
    autoCreateViewport: true,
});
