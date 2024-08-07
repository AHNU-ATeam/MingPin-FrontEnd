"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  methods: {
    //   goToPage(pageName) {
    //     // 导航到指定页面的函数，需要根据实际页面路径进行调整
    //     wx.navigateTo({
    //       url: `/pages/${pageName}/${pageName}`
    //     });
    //   },
    //   feedback() {
    //     // 打开问题反馈页面或弹出反馈窗口的函数
    //     wx.navigateTo({
    //       url: '/pages/feedback/feedback'
    //     });
    //   }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_assets._imports_1$1,
    c: common_assets._imports_2$1,
    d: common_assets._imports_3,
    e: common_assets._imports_4,
    f: common_vendor.o(($event) => _ctx.goToPage("班级")),
    g: common_assets._imports_5,
    h: common_vendor.o(($event) => _ctx.goToPage("反馈")),
    i: common_assets._imports_5,
    j: common_vendor.o(($event) => _ctx.goToPage("动态")),
    k: common_assets._imports_5,
    l: common_vendor.o(($event) => _ctx.goToPage("订单")),
    m: common_assets._imports_5,
    n: common_vendor.o(($event) => _ctx.goToPage("设置")),
    o: common_assets._imports_5,
    p: common_assets._imports_6
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
