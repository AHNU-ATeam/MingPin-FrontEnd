"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500,
      attendedpeo: 0,
      not_attendedpeo: 12,
      tabs: ["晚托班", "全托班", "午托班", "日托班", "暑假托班"],
      activeTab: "暑假托班",
      areaManageList: [
        {
          iconurl: "iconfont icon-jiaoshitongji-01",
          text: "员工信息",
          badge: "0"
        },
        {
          iconurl: "iconfont icon-banjiguanli-",
          text: "班级管理",
          badge: "1"
        },
        {
          iconurl: "iconfont icon-yixietubiao-",
          text: "考勤设置",
          badge: "99",
          type: "warning"
        },
        {
          iconurl: "iconfont icon-renliandaka",
          text: "人脸打卡",
          badge: "2",
          type: "error"
        },
        {
          iconurl: "iconfont icon-gengduo",
          text: "更多"
        }
      ],
      areaInfoList: [
        {
          number: 13,
          label: "员工"
        },
        {
          number: 22,
          label: "班级"
        },
        {
          number: 59,
          label: "在托学员"
        }
      ],
      list: [
        {
          iconurl: "iconfont icon-Group-copy",
          text: "带班管理",
          url: ""
        },
        {
          iconurl: "iconfont icon-xueyuanguanli",
          text: "学员管理",
          url: ""
        },
        {
          iconurl: "iconfont icon-banjikaoqin",
          text: "班级考勤",
          url: ""
        },
        {
          iconurl: "iconfont icon-banjixiangce",
          text: "班级相册",
          url: ""
        },
        {
          iconurl: "iconfont icon-banjidongtai",
          text: "班级动态",
          url: ""
        },
        {
          iconurl: "iconfont icon-meirishipu",
          text: "每日食谱",
          url: ""
        },
        {
          iconurl: "iconfont icon-xueqingfankui",
          text: "学情反馈",
          url: ""
        },
        {
          iconurl: "iconfont icon-jifenfafang",
          text: "积分发放",
          url: ""
        },
        {
          iconurl: "iconfont icon-shouzhiguanli",
          text: "收支管理",
          url: ""
        },
        {
          iconurl: "iconfont icon-gengduo1",
          text: "更多",
          url: ""
        }
      ]
    };
  },
  methods: {
    change(e) {
      let {
        index
      } = e.detail;
      this.list[index].badge && this.list[index].badge++;
      common_vendor.index.showToast({
        title: `点击第${index + 1}个宫格`,
        icon: "none"
      });
      if (index === 0) {
        common_vendor.index.navigateTo({
          url: `/pages/employee_management/employee_management`
        });
      }
    },
    add() {
      if (this.dynamicList.length < 9) {
        this.dynamicList.push({
          url: `/static/c${this.dynamicList.length + 1}.png`,
          text: `Grid ${this.dynamicList.length + 1}`,
          color: this.dynamicList.length % 2 === 0 ? "#f5f5f5" : "#fff"
        });
      } else {
        common_vendor.index.showToast({
          title: "最多添加9个",
          icon: "none"
        });
      }
    },
    del() {
      this.dynamicList.splice(this.dynamicList.length - 1, 1);
    },
    selectTab(tab) {
      this.activeTab = tab;
    }
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_card2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_section2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_assets._imports_2,
    d: $data.indicatorDots,
    e: $data.autoplay,
    f: $data.interval,
    g: $data.duration,
    h: common_vendor.p({
      ["is-full"]: true,
      ["is-shadow"]: false
    }),
    i: common_vendor.f($data.areaManageList, (item, index, i0) => {
      return {
        a: common_vendor.n(item.iconurl),
        b: common_vendor.t(item.text),
        c: index,
        d: "716682b4-4-" + i0 + ",716682b4-3",
        e: common_vendor.p({
          index
        })
      };
    }),
    j: common_vendor.o($options.change),
    k: common_vendor.p({
      column: 5,
      highlight: true,
      showBorder: false
    }),
    l: common_vendor.p({
      title: "校区管理",
      type: "line"
    }),
    m: common_vendor.p({
      ["is-shadow"]: false,
      margin: "6px"
    }),
    n: common_vendor.f($data.areaInfoList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.number),
        b: common_vendor.t(item.label),
        c: index,
        d: "716682b4-8-" + i0 + ",716682b4-7",
        e: common_vendor.p({
          index
        })
      };
    }),
    o: common_vendor.p({
      column: 3,
      highlight: false,
      showBorder: false
    }),
    p: common_vendor.p({
      title: "校区信息",
      type: "line"
    }),
    q: common_vendor.p({
      ["is-shadow"]: false,
      margin: "6px"
    }),
    r: common_vendor.p({
      title: "当日学员考勤",
      type: "line"
    }),
    s: common_vendor.f($data.tabs, (tab, k0, i0) => {
      return {
        a: common_vendor.t(tab),
        b: tab,
        c: common_vendor.n({
          active: $data.activeTab === tab
        }),
        d: common_vendor.o(($event) => $options.selectTab(tab), tab)
      };
    }),
    t: common_vendor.p({
      ["is-shadow"]: false,
      margin: "6px"
    }),
    v: common_vendor.p({
      title: "当日员工考勤",
      type: "line"
    }),
    w: common_vendor.t($data.attendedpeo),
    x: common_vendor.t($data.not_attendedpeo),
    y: common_vendor.p({
      ["is-shadow"]: false,
      margin: "6px"
    }),
    z: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.n(item.iconurl),
        b: common_vendor.t(item.text),
        c: index,
        d: "716682b4-15-" + i0 + ",716682b4-14",
        e: common_vendor.p({
          index
        })
      };
    }),
    A: common_vendor.o($options.change),
    B: common_vendor.p({
      column: 5,
      highlight: true,
      showBorder: false
    }),
    C: common_vendor.p({
      margin: "6px"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
