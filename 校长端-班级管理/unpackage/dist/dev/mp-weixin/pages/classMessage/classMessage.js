"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      classData: {
        name: "",
        detail: "",
        teacher: "",
        assistant: "",
        num: 0
      },
      students: []
    };
  },
  onLoad(options) {
    if (options.classItem) {
      const classItem = JSON.parse(options.classItem);
      this.classData = {
        name: classItem.name,
        detail: classItem.detail,
        teacher: classItem.teacher,
        assistant: classItem.assistant,
        num: classItem.num
      };
      this.students = [
        {
          name: "星二",
          type: "日托",
          expiry: "2024-08-31",
          avatar: "../../static/男学生.png"
        },
        {
          name: "星一",
          type: "日托",
          expiry: "2024-08-31",
          avatar: "../../static/女学生.png"
        }
      ];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.classData.name),
    b: common_vendor.t($data.classData.detail),
    c: common_vendor.t($data.classData.teacher),
    d: common_vendor.t($data.classData.num),
    e: common_vendor.t($data.classData.assistant),
    f: common_vendor.f($data.students, (student, index, i0) => {
      return {
        a: student.avatar,
        b: common_vendor.t(student.name),
        c: common_vendor.t(student.type),
        d: common_vendor.t(student.expiry),
        e: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-113df214"]]);
wx.createPage(MiniProgramPage);
