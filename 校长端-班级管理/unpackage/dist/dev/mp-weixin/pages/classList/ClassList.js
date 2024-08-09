"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      classes: [
        { id: 1, name: "智多星", detail: "日托", teacher: "星星", assistant: "汪老师", num: 2 },
        { id: 2, name: "明思堂三年级", detail: "晚托", teacher: "汪老师", assistant: "-", num: 1 },
        { id: 3, name: "高一物理", detail: "暑假托", teacher: "张老师", assistant: "-", num: 0 },
        { id: 4, name: "高一数学", detail: "暑假托", teacher: "体验账号", assistant: "-", num: 13 },
        { id: 5, name: "幼小衔接班", detail: "午托", teacher: "向老师", assistant: "-", num: 5 },
        { id: 6, name: "三年级语文", detail: "日托", teacher: "丁教练", assistant: "-", num: 2 }
        // 更多班级
      ]
    };
  },
  onShow() {
    let newClass = getApp().globalData.newClass;
    if (newClass) {
      this.classes.push(newClass);
      getApp().globalData.newClass = null;
    }
    let updatedClass = getApp().globalData.updatedClass;
    if (updatedClass) {
      const classIndex = this.classes.findIndex((item) => item.id === updatedClass.id);
      if (classIndex !== -1) {
        this.classes.splice(classIndex, 1, updatedClass);
      }
      getApp().globalData.updatedClass = null;
    }
  },
  methods: {
    ClassMessage(classItem) {
      common_vendor.index.navigateTo({
        url: `/pages/classMessage/classMessage?classItem=${JSON.stringify(classItem)}`
      });
    },
    editClass(classItem) {
      common_vendor.index.navigateTo({
        url: `/pages/classEdit/classEdit?classItem=${JSON.stringify(classItem)}`
      });
    },
    deleteClass(id) {
      const classToDelete = this.classes.find((item) => item.id === id);
      if (!classToDelete)
        return;
      if (classToDelete.num === 0) {
        common_vendor.index.showModal({
          // title: '确认删除',
          content: `确定删除 ${classToDelete.name}?`,
          success: (res) => {
            if (res.confirm) {
              this.classes = this.classes.filter((item) => item.id !== id);
            }
          }
        });
      } else {
        common_vendor.index.showToast({
          title: "有学员的班级不可删除",
          icon: "none"
        });
      }
    },
    addNewClass() {
      common_vendor.index.navigateTo({
        url: "/pages/addClass/addClass"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.classes.length),
    b: common_vendor.f($data.classes, (classItem, index, i0) => {
      return {
        a: common_vendor.t(classItem.name),
        b: common_vendor.t(classItem.detail),
        c: common_vendor.t(classItem.teacher),
        d: common_vendor.t(classItem.assistant),
        e: common_vendor.t(classItem.num),
        f: common_vendor.o(($event) => $options.editClass(classItem), index),
        g: common_vendor.o(($event) => $options.deleteClass(classItem.id), index),
        h: common_vendor.o(($event) => $options.ClassMessage(classItem), index),
        i: index
      };
    }),
    c: common_vendor.o((...args) => $options.addNewClass && $options.addNewClass(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-87982287"]]);
wx.createPage(MiniProgramPage);
