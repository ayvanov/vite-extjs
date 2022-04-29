/// <reference types="vite/client" />

interface Controller extends Ext.app.ViewController {
    fetchTabsConfig();

    addTabs(tabsConfig: Map<string, Record<string, any>>): void;
}

const xtype = "app-tabs";

Ext.define("App.view.Tabs", {
    extend: "Ext.tab.Panel",
    xtype,
    listeners: {
        beforerender: "fetchTabsConfig",
    },
    viewModel: {
        data: {
            billFactors: ["T1PSNIP"],
            tabsConfig: new Map(),
        },
    },
    controller: <Controller>{
        async fetchTabsConfig() {
            const authUser = import.meta.env.VITE_API_USERNAME;
            const authPasswd = import.meta.env.VITE_API_PASSWD;
            const vm = this.getViewModel();
            await fetch(
                `/api/ajaxLogin.do?userName=${authUser}&password=${authPasswd}`,
                {
                    method: "GET",
                    mode: "no-cors",
                    credentials: "include",
                }
            );
            const billFactors = vm.get("billFactors");
            const tabsConfig = vm.get("tabsConfig") as Map<
                string,
                Record<string, any>
            >;

            if (Array.isArray(billFactors)) {
                for (const code of billFactors) {
                    const respParams = new FormData();
                    respParams.append("startDate", new Date().toUTCString());
                    respParams.append("multidimensionalBillFactor", code);

                    const resp = await fetch(
                        "/api/PricesAction/getMetadata.do",
                        {
                            method: "POST",
                            mode: "no-cors",
                            credentials: "include",
                            body: respParams,
                        }
                    );
                    if (resp.status === 200) {
                        const json = await resp.json();
                        tabsConfig.set(code, json["root"]);
                    }
                }
            }
            this.addTabs(tabsConfig);
        },
        addTabs(tabsConfig) {
            tabsConfig.forEach((v) => {
                console.log(v);
            });
        },
    },
});
export default xtype;
