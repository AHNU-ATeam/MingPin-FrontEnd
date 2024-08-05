"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "navbarVue",
  props: {
    title: {
      type: String || Number,
      default: ""
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.setHeaderHeight();
  },
  setup(props, context) {
    let statusBarHeight = common_vendor.ref(0);
    let titleBarHeight = common_vendor.ref(0);
    let tabBarHeight = common_vendor.ref(60);
    const setHeaderHeight = () => {
      common_vendor.index.getSystemInfo({
        success: (e) => {
          let statusBar = 0;
          let customBar = 0;
          let navbar = 0;
          statusBar = e.statusBarHeight;
          customBar = e.statusBarHeight + 45;
          if (e.platform === "android") {
            customBar = e.statusBarHeight + 50;
          }
          statusBar = e.statusBarHeight;
          const custom = common_vendor.wx$1.getMenuButtonBoundingClientRect();
          customBar = custom.bottom + custom.top - e.statusBarHeight;
          navbar = (custom.top - e.statusBarHeight) * 2 + custom.height;
          titleBarHeight.value = navbar || customBar;
          statusBarHeight.value = statusBar;
        }
      });
    };
    const cTitle = common_vendor.computed({
      get: () => {
        return props.title;
      },
      set: () => {
      }
    });
    const backPage = () => {
      common_vendor.index.navigateBack({
        //关闭当前页面，返回上一页面或多级页面。
        delta: 1
      });
    };
    return {
      setHeaderHeight,
      statusBarHeight,
      titleBarHeight,
      tabBarHeight,
      cTitle,
      backPage
    };
  }
};
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  _component_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.s("height:" + $setup.statusBarHeight + "px"),
    b: $props.back
  }, $props.back ? {
    c: common_vendor.o($setup.backPage),
    d: common_vendor.p({
      type: "back",
      size: "30"
    })
  } : {}, {
    e: common_vendor.t($setup.cTitle),
    f: common_vendor.s("height:" + $setup.titleBarHeight + "px"),
    g: common_vendor.s("padding-top:" + ($setup.statusBarHeight + $setup.titleBarHeight) + "px;")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
