if (typeof Ext["Boot"] === "object") {
    if (typeof Ext["Boot"].Entry === "function") {
        Ext["Boot"].Entry.prototype.getElement = function (tag) {
            let me = this,
                el = me.el;
            if (!el) {
                if (me.isCss()) {
                    tag = tag || "link";
                    el = document.createElement(tag);
                    if (tag == "link") {
                        el.rel = "stylesheet";
                        me.prop = "href";
                    } else {
                        me.prop = "textContent";
                    }
                    el.type = "text/css";
                } else {
                    tag = tag || "script";
                    el = document.createElement(tag);
                    el.type = Ext.Loader.getConfig("scriptType") || "text/javascript";
                    me.prop = "src";
                    if (me.charset) {
                        el.charset = me.charset;
                    }
                    if (Ext["Boot"].hasAsync) {
                        el.async = false;
                    }
                }
                me.el = el;
            }
            const scriptFileExt = String(Ext.Loader.getConfig("scriptFileExt"));
            if (scriptFileExt.length && scriptFileExt !== "js") {
                el.src = el.src.replace(".js", "." + scriptFileExt);
            }
            return el;
        };
    }
}