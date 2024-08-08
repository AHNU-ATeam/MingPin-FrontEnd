"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/chooseIdentity/chooseIdentity.js";
  "./pages/index/index.js";
  "./pages/contact/contact.js";
  "./pages/profile/profile.js";
  "./pages/hprofile/hprofile.js";
  "./pages/tindex/tindex.js";
  "./pages/login/login.js";
  "./pages/sindex/sindex.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(common_vendor.uviewPlus);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
