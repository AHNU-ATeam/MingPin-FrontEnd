"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "chooseIdentity",
  setup(__props) {
    const navigateToLog = (role) => {
      console.log(role);
      common_vendor.index.navigateTo({
        url: `/pages/login/login?role=${role}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => navigateToLog("家长")),
        b: common_vendor.o(($event) => navigateToLog("老师")),
        c: common_vendor.o(($event) => navigateToLog("校长"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3b796ba6"]]);
wx.createPage(MiniProgramPage);
