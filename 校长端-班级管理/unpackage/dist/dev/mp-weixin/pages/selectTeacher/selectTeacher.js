"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      selectedTeacher: null,
      teachers: [
        { id: 1, name: "白宝山", details: "日托班x1、晚托班x2", avatar: "../../static/女老师.png" },
        { id: 2, name: "刘建国", details: "午托班x1", avatar: "../../static/男老师.png" },
        { id: 3, name: "杨晓丽", details: "晚托班x2", avatar: "../../static/女老师.png" }
      ]
    };
  },
  methods: {
    updateSelection(teacher) {
      this.selectedTeacher = teacher;
    },
    confirmSelection() {
      if (this.selectedTeacher) {
        getApp().globalData.selectedTeacher = this.selectedTeacher.name;
        getApp().globalData.selectedTeacherId = this.selectedTeacher.id.toString();
        console.log("Selected teacher:", this.selectedTeacher);
        common_vendor.index.navigateBack();
      } else {
        console.log("No teacher selected.");
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.teachers, (teacher, index, i0) => {
      return common_vendor.e({
        a: teacher.id,
        b: common_vendor.o(($event) => $options.updateSelection(teacher), index),
        c: teacher.avatar,
        d: common_vendor.t(teacher.name),
        e: common_vendor.t(teacher.details),
        f: index < $data.teachers.length
      }, index < $data.teachers.length ? {} : {}, {
        g: index
      });
    }),
    b: common_vendor.o((...args) => $options.confirmSelection && $options.confirmSelection(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ab643ed5"]]);
wx.createPage(MiniProgramPage);
