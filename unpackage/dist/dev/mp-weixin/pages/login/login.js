"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      role: "",
      // 存储用户角色
      mobile: "",
      // 存储手机号
      password: "",
      // 存储密码
      agreed: false
      // 存储复选框状态
    };
  },
  computed: {
    // 计算属性用来判断按钮是否应禁用
    isButtonDisabled() {
      return !(this.mobile && this.password && this.agreed);
    }
  },
  methods: {
    showProtocolModal() {
      common_vendor.index.showModal({
        title: "用户协议与隐私协议",
        content: "这里是《用户协议》和《隐私协议》的详细内容",
        showCancel: false,
        confirmText: "确定"
      });
    },
    handleLogin() {
      common_vendor.index.request({
        url: "http://119.45.239.3:8080/login",
        // 替换为你的登录接口地址
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
          // 设置请求头
        },
        data: {
          phone: this.mobile,
          password: this.password
        },
        success: (res) => {
          if (res.data.code === 1) {
            common_vendor.index.showToast({
              title: "登录成功",
              icon: "success"
            });
            switch (this.role) {
              case "校长":
                common_vendor.index.switchTab({
                  url: "/pages/index/index"
                });
                break;
              case "老师":
                common_vendor.index.navigateTo({
                  url: "/pages/tindex/tindex"
                  // 教师界面
                });
                break;
              case "家长":
                common_vendor.index.navigateTo({
                  url: "/pages/sindex/sindex"
                  // 学生界面
                });
                break;
              default:
                common_vendor.index.switchTab({
                  url: "/pages/index/index"
                });
                break;
            }
          } else {
            common_vendor.index.showToast({
              title: res.data.message || "登录失败",
              icon: "none"
            });
          }
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "请求失败，请检查网络",
            icon: "none"
          });
          console.error(err);
        }
      });
    }
  },
  onLoad(options) {
    console.log(options);
    this.role = options.role || "未知角色";
  }
};
if (!Array) {
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  const _easycom_up_checkbox2 = common_vendor.resolveComponent("up-checkbox");
  const _easycom_up_checkbox_group2 = common_vendor.resolveComponent("up-checkbox-group");
  (_easycom_up_input2 + _easycom_up_button2 + _easycom_up_checkbox2 + _easycom_up_checkbox_group2)();
}
const _easycom_up_input = () => "../../node-modules/uview-plus/components/u-input/u-input.js";
const _easycom_up_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_up_checkbox = () => "../../node-modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_up_checkbox_group = () => "../../node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
if (!Math) {
  (_easycom_up_input + _easycom_up_button + _easycom_up_checkbox + _easycom_up_checkbox_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.role),
    b: common_vendor.o(($event) => $data.mobile = $event),
    c: common_vendor.p({
      placeholder: "请输入手机号",
      border: "bottom",
      digit: true,
      clearable: true,
      modelValue: $data.mobile
    }),
    d: common_vendor.o(($event) => $data.password = $event),
    e: common_vendor.p({
      placeholder: "请输入密码",
      border: "bottom",
      password: true,
      clearable: true,
      modelValue: $data.password
    }),
    f: common_vendor.o($options.handleLogin),
    g: common_vendor.p({
      type: "primary",
      text: "登录",
      shape: "circle",
      disabled: $options.isButtonDisabled
    }),
    h: common_vendor.o(($event) => $data.agreed = $event),
    i: common_vendor.p({
      name: "agree",
      usedAlone: true,
      shape: "circle",
      checked: $data.agreed
    }),
    j: common_vendor.o((...args) => $options.showProtocolModal && $options.showProtocolModal(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
