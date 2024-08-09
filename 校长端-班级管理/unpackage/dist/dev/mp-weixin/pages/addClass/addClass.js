"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        id: null,
        className: "",
        classType: "",
        teacherPower: "",
        assistantPower: "",
        num: 0
      },
      showPicker: false,
      selectedType: "",
      selectedSubtype: "",
      pickerOptions: {
        type: [
          { name: "常年托", subtypes: ["晚托", "午托", "日托"] },
          { name: "周末托", subtypes: ["周末托", "美术托", "新概念"] },
          { name: "假期托", subtypes: ["暑假托", "寒假托"] }
        ]
      }
    };
  },
  onShow() {
    let selectedTeacher = getApp().globalData.selectedTeacher;
    if (selectedTeacher) {
      this.formData.teacherPower = selectedTeacher;
      console.log("Updated teacher info: ", this.formData.teacherPower);
      getApp().globalData.selectedTeacher = null;
    }
    let selectedAssistants = getApp().globalData.selectedAssistants;
    if (selectedAssistants) {
      this.formData.assistantPower = selectedAssistants;
      console.log("Updated assistant info: ", this.formData.assistantPower);
      getApp().globalData.selectedAssistants = null;
    }
  },
  methods: {
    showClassTypePicker() {
      this.showPicker = true;
    },
    hideClassTypePicker() {
      this.showPicker = false;
    },
    selectSubtype(type, subtype) {
      this.selectedType = type;
      this.selectedSubtype = subtype;
    },
    confirmClassType() {
      if (this.selectedType && this.selectedSubtype) {
        this.formData.classType = `${this.selectedSubtype}`;
      }
      this.hideClassTypePicker();
    },
    selectTeachers() {
      common_vendor.index.navigateTo({
        url: "/pages/selectTeacher/selectTeacher"
      });
    },
    selectAssistants() {
      if (!this.formData.teacherPower) {
        common_vendor.index.showToast({
          title: "请先选择带班老师",
          icon: "none"
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/selectAssistant/selectAssistant"
      });
    },
    submitForm() {
      if (!this.formData.className) {
        common_vendor.index.showToast({
          title: "请填写班级名称",
          icon: "none"
        });
        return;
      }
      if (!this.formData.classType) {
        common_vendor.index.showToast({
          title: "请选择班级类型",
          icon: "none"
        });
        return;
      }
      if (!this.formData.teacherPower) {
        common_vendor.index.showToast({
          title: "请选择带班老师",
          icon: "none"
        });
        return;
      }
      getApp().globalData.newClass = {
        id: (/* @__PURE__ */ new Date()).getTime(),
        // 简单生成一个唯一ID
        name: this.formData.className,
        detail: this.formData.classType,
        teacher: this.formData.teacherPower,
        assistant: this.formData.assistantPower ? this.formData.assistantPower : "-",
        num: this.formData.num
      };
      common_vendor.index.navigateBack();
      console.log(this.formData);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.formData.className,
    b: common_vendor.o(($event) => $data.formData.className = $event.detail.value),
    c: common_vendor.t($data.formData.classType || "请选择班级类型 >"),
    d: common_vendor.o((...args) => $options.showClassTypePicker && $options.showClassTypePicker(...args)),
    e: common_vendor.t($data.formData.teacherPower || "请选择带班老师 >"),
    f: common_vendor.o((...args) => $options.selectTeachers && $options.selectTeachers(...args)),
    g: common_vendor.t($data.formData.assistantPower || "请选择助教 >"),
    h: common_vendor.o((...args) => $options.selectAssistants && $options.selectAssistants(...args)),
    i: common_vendor.o((...args) => $options.submitForm && $options.submitForm(...args)),
    j: $data.showPicker
  }, $data.showPicker ? {
    k: common_vendor.o((...args) => $options.hideClassTypePicker && $options.hideClassTypePicker(...args)),
    l: common_vendor.f($data.pickerOptions.type, (type, index, i0) => {
      return {
        a: common_vendor.t(type.name),
        b: common_vendor.f(type.subtypes, (subtype, subIndex, i1) => {
          return {
            a: common_vendor.t(subtype),
            b: subIndex,
            c: common_vendor.o(($event) => $options.selectSubtype(type.name, subtype), subIndex),
            d: $data.selectedType === type.name && $data.selectedSubtype === subtype ? 1 : ""
          };
        }),
        c: index
      };
    }),
    m: common_vendor.o((...args) => $options.confirmClassType && $options.confirmClassType(...args))
  } : {}, {
    n: $data.showPicker
  }, $data.showPicker ? {
    o: common_vendor.o((...args) => $options.hideClassTypePicker && $options.hideClassTypePicker(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-52d258b4"]]);
wx.createPage(MiniProgramPage);
