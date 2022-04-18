Ext.define("App.view.Viewport", {
    extend: "Ext.Viewport",
    requires: ["App.ViewController"],
    controller: "app-controller",
    config: {
        items: [
            {
                xtype: "panel",
                title: "Test app",
                tbar: [{text: "Click", handler: "onclick"}],
            },
        ],
    },
});
