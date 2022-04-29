import tabs from "./Tabs";

export default Ext.define("App.view.Viewport", {
    extend: "Ext.Viewport",
    config: {
        items: [
            {
                xtype: tabs,
                reference: "tab-panel",
            },
        ],
    },
});
