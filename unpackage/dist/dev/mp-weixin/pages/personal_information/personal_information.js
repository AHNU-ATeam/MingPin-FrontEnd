"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      avatar: "",
      name: "",
      gender: "",
      position: "",
      phone: "",
      idCard: "",
      classes: [],
      authorizations: []
    };
  },
  onLoad(options) {
    this.avatar = options.avatar;
    console.log(this.avatar);
    this.name = options.name;
    this.gender = options.gender;
    this.position = options.position;
    this.phone = options.phone;
    this.idCard = options.idCard;
    this.classes = JSON.parse(decodeURIComponent(options.classes));
    this.authorizations = JSON.parse(decodeURIComponent(options.authorizations));
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.avatar,
    b: common_vendor.t($data.name),
    c: common_vendor.t($data.gender),
    d: common_vendor.t($data.position),
    e: common_vendor.t($data.phone),
    f: common_vendor.t($data.idCard),
    g: $data.classes.length === 0
  }, $data.classes.length === 0 ? {} : {
    h: common_vendor.f($data.classes, (cls, index, i0) => {
      return {
        a: common_vendor.t(cls.grade),
        b: common_vendor.t(cls.type),
        c: common_vendor.t(cls.number),
        d: index
      };
    })
  }, {
    i: common_vendor.f($data.authorizations, (auth, index, i0) => {
      return {
        a: common_vendor.t(auth),
        b: index
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
