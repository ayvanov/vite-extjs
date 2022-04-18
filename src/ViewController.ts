import { Controller } from "./Controller";

Ext.define("App.ViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.app-controller",
  onclick: Controller.onButtonClick,
});
