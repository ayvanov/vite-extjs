import "./Tabs";

export default Ext.define("App.view.Viewport", {
    extend: "Ext.Viewport",
    config: {
        items: [
            {
                xtype: "app-tabs",
                reference: "tab-panel",
            },
        ],
    },
});
