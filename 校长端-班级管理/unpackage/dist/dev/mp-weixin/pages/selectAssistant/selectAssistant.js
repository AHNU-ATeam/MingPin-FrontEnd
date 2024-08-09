"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      selectedAssistants: [],
      selectedTeacherId: "",
      // 存储选择的老师ID
      assistants: [
        { id: 1, name: "白宝山", details: "日托班x1、晚托班x2", avatar: "../../static/女老师.png" },
        { id: 2, name: "刘建国", details: "午托班x1", avatar: "../../static/男老师.png" },
        { id: 3, name: "杨晓丽", details: "晚托班x2", avatar: "../../static/女老师.png" }
      ]
    };
  },
  mounted() {
    this.selectedTeacherId = getApp().globalData.selectedTeacherId;
  },
  methods: {
    updateSelection(e) {
      this.selectedAssistants = e.detail.value;
    },
    handleAssistantClick(assistantId) {
      if (assistantId.toString() === this.selectedTeacherId) {
        common_vendor.index.showToast({
          title: "教师和助教不能为同一人",
          icon: "none"
        });
      }
    },
    confirmSelection() {
      if (this.selectedAssistants.length > 0) {
        const selectedNames = this.selectedAssistants.map((id) => {
          const assistant = this.assistants.find((assistant2) => assistant2.id.toString() === id);
          return assistant ? assistant.name : "";
        }).join(", ");
        getApp().globalData.selectedAssistants = selectedNames;
        console.log("Selected assistants:", selectedNames);
        common_vendor.index.navigateBack();
      } else {
        console.log("No assistants selected.");
        common_vendor.index.navigateBack();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.assistants, (assistant, index, i0) => {
      return common_vendor.e({
        a: assistant.id.toString(),
        b: assistant.id.toString() === $data.selectedTeacherId,
        c: $data.selectedAssistants.includes(assistant.id.toString()),
        d: assistant.avatar,
        e: common_vendor.t(assistant.name),
        f: common_vendor.t(assistant.details),
        g: common_vendor.o(($event) => $options.handleAssistantClick(assistant.id), index),
        h: index < $data.assistants.length - 1
      }, index < $data.assistants.length - 1 ? {} : {}, {
        i: index
      });
    }),
    b: common_vendor.o((...args) => $options.updateSelection && $options.updateSelection(...args)),
    c: common_vendor.o((...args) => $options.confirmSelection && $options.confirmSelection(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-385d4a57"]]);
wx.createPage(MiniProgramPage);
