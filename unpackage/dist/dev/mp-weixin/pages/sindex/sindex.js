"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      Sname: "乐乐",
      type: 1e3,
      NumberBeaut: 0,
      NumberMenu: 0,
      sex: 1,
      score: 0
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_assets._imports_0$3,
    b: common_assets._imports_1$3,
    c: common_assets._imports_2$3,
    d: $data.sex == 1
  }, $data.sex == 1 ? {
    e: common_assets._imports_3$2,
    f: common_vendor.t($data.Sname),
    g: common_assets._imports_4$2,
    h: common_vendor.t($data.score),
    i: common_assets._imports_5$2
  } : {
    j: common_assets._imports_6$2,
    k: common_vendor.t($data.Sname),
    l: common_assets._imports_4$2,
    m: common_vendor.t($data.score),
    n: common_assets._imports_5$2
  }, {
    o: common_assets._imports_7$1,
    p: common_assets._imports_8$1,
    q: common_assets._imports_9$1,
    r: common_assets._imports_10$1,
    s: common_assets._imports_11$1,
    t: common_assets._imports_12,
    v: common_vendor.o(($event) => $data.type = 1e3),
    w: common_vendor.o(($event) => $data.type = 2e3),
    x: common_vendor.o(($event) => $data.type = 3e3),
    y: $data.type == 1e3
  }, $data.type == 1e3 ? common_vendor.e({
    z: $data.NumberBeaut == 0
  }, $data.NumberBeaut == 0 ? {
    A: common_assets._imports_13
  } : {}) : $data.type == 2e3 ? common_vendor.e({
    C: $data.NumberMenu == 0
  }, $data.NumberMenu == 0 ? {
    D: common_assets._imports_13
  } : {}) : {}, {
    B: $data.type == 2e3,
    E: $data.type == 3e3
  }, $data.type == 3e3 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
