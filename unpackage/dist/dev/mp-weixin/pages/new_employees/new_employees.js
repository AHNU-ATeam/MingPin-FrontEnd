"use strict";
const common_vendor = require("../../common/vendor.js");
const store_employees = require("../../store/employees.js");
if (!Array) {
  const _easycom_up_upload2 = common_vendor.resolveComponent("up-upload");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  (_easycom_up_upload2 + _easycom_up_button2)();
}
const _easycom_up_upload = () => "../../node-modules/uview-plus/components/u-upload/u-upload.js";
const _easycom_up_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_up_upload + _easycom_up_button)();
}
const _sfc_main = {
  __name: "new_employees",
  setup(__props) {
    const store = store_employees.useEmployeeStore();
    const fileList1 = common_vendor.ref([]);
    const name = common_vendor.ref("");
    const position = common_vendor.ref("老师");
    const phone = common_vendor.ref("");
    const gender = common_vendor.ref("男");
    const idCard = common_vendor.ref("");
    const selectedRole = common_vendor.ref("teacher");
    const permissions = common_vendor.ref([
      {
        name: "员工管理",
        enabled: false
      },
      {
        name: "班级管理",
        enabled: false
      },
      {
        name: "学员管理",
        enabled: false
      },
      {
        name: "班级考勤管理",
        enabled: false
      },
      {
        name: "收支账单管理",
        enabled: false
      },
      {
        name: "学情反馈模板管理",
        enabled: false
      },
      {
        name: "招生宝管理",
        enabled: false
      },
      {
        name: "Banner管理",
        enabled: false
      },
      {
        name: "通知公告管理",
        enabled: false
      },
      {
        name: "星级管理",
        enabled: false
      }
    ]);
    const deletePic = (event) => {
      fileList1.value.splice(event.index, 1);
    };
    const afterRead = (event) => {
      let lists = [].concat(event.file);
      let fileListLen = fileList1.value.length;
      lists.map((item) => {
        fileList1.value.push({
          ...item,
          status: "uploading",
          message: "上传中"
        });
      });
      for (let i = 0; i < lists.length; i++) {
        let item = fileList1.value[fileListLen];
        fileList1.value.splice(fileListLen, 1, {
          ...item,
          status: "success",
          message: "",
          url: lists[0].url
        });
        fileListLen++;
      }
    };
    const selectRole = (role) => {
      selectedRole.value = role;
      position.value = role;
      if (role === "executive") {
        position.value = "执行校长";
      } else {
        position.value = "老师";
      }
    };
    const onGenderChange = (event) => {
      gender.value = event.detail.value;
    };
    const onSwitchChange = (index, event) => {
      permissions.value[index].enabled = event.detail.value;
    };
    const save = () => {
      var _a;
      let missingFields = [];
      if (fileList1.value.length === 0)
        missingFields.push("头像");
      if (!name.value)
        missingFields.push("姓名");
      if (!position.value)
        missingFields.push("职位");
      if (!phone.value)
        missingFields.push("手机号");
      if (!gender.value)
        missingFields.push("性别");
      if (!idCard.value)
        missingFields.push("身份证号");
      if (missingFields.length > 0) {
        common_vendor.index.showModal({
          title: "警告",
          content: `请填写以下必填项：${missingFields.join(", ")}`,
          showCancel: false,
          confirmText: "确定"
        });
        return;
      }
      store.addEmployee({
        id: Date.now(),
        avatar: ((_a = fileList1.value[0]) == null ? void 0 : _a.url) || "https://via.placeholder.com/150",
        name: name.value,
        position: position.value,
        phone: phone.value,
        gender: gender.value,
        idCard: idCard.value,
        classes: [],
        authorizations: selectedRole.value === "executive" ? [
          // 执行校长拥有所有权限
          "执行校长拥有该校区全部管理权限。"
        ] : permissions.value.filter((auth) => auth.enabled).map((auth) => auth.name)
        // 老师权限设置
      });
      common_vendor.index.showToast({
        title: "员工已添加",
        icon: "success",
        duration: 2e3
      });
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: fileList1.value.length > 0
      }, fileList1.value.length > 0 ? {
        b: fileList1.value[0].url
      } : {}, {
        c: common_vendor.o(afterRead),
        d: common_vendor.o(deletePic),
        e: common_vendor.p({
          fileList: fileList1.value,
          name: "1",
          multiple: true,
          maxCount: 1,
          width: "7vh",
          height: "7vh"
        }),
        f: name.value,
        g: common_vendor.o(($event) => name.value = $event.detail.value),
        h: gender.value,
        i: common_vendor.o(onGenderChange),
        j: phone.value,
        k: common_vendor.o(($event) => phone.value = $event.detail.value),
        l: idCard.value,
        m: common_vendor.o(($event) => idCard.value = $event.detail.value),
        n: selectedRole.value === "teacher" ? "#FF8D1B" : "#F2F2F2",
        o: selectedRole.value === "teacher" ? "#FFFFFF" : "#888687",
        p: common_vendor.o(($event) => selectRole("teacher")),
        q: selectedRole.value === "executive" ? "#FF8D1B" : "#F2F2F2",
        r: selectedRole.value === "executive" ? "#FFFFFF" : "#888687",
        s: common_vendor.o(($event) => selectRole("executive")),
        t: selectedRole.value === "teacher"
      }, selectedRole.value === "teacher" ? {
        v: common_vendor.f(permissions.value, (auth, index, i0) => {
          return {
            a: common_vendor.t(auth.name),
            b: auth.enabled,
            c: common_vendor.o((event) => onSwitchChange(index, event), index),
            d: index
          };
        })
      } : {}, {
        w: common_vendor.o(save),
        x: common_vendor.p({
          type: "primary",
          text: "保存",
          shape: "circle",
          color: "#FF9933"
        }),
        y: common_vendor.o(save)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9779e4ff"]]);
wx.createPage(MiniProgramPage);
