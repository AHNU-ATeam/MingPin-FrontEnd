"use strict";
const common_vendor = require("../../common/vendor.js");
const store_employees = require("../../store/employees.js");
if (!Array) {
  const _easycom_up_upload2 = common_vendor.resolveComponent("up-upload");
  const _easycom_up_radio2 = common_vendor.resolveComponent("up-radio");
  const _easycom_up_radio_group2 = common_vendor.resolveComponent("up-radio-group");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  (_easycom_up_upload2 + _easycom_up_radio2 + _easycom_up_radio_group2 + _easycom_up_button2)();
}
const _easycom_up_upload = () => "../../node-modules/uview-plus/components/u-upload/u-upload.js";
const _easycom_up_radio = () => "../../node-modules/uview-plus/components/u-radio/u-radio.js";
const _easycom_up_radio_group = () => "../../node-modules/uview-plus/components/u-radio-group/u-radio-group.js";
const _easycom_up_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_up_upload + _easycom_up_radio + _easycom_up_radio_group + _easycom_up_button)();
}
const _sfc_main = {
  __name: "edit_employee",
  setup(__props) {
    const sex = common_vendor.reactive([
      {
        name: "男",
        disabled: false
      },
      {
        name: "女",
        disabled: false
      }
    ]);
    const store = store_employees.useEmployeeStore();
    const fileList1 = common_vendor.ref([]);
    const name = common_vendor.ref("");
    const position = common_vendor.ref("老师");
    const phone = common_vendor.ref("");
    const idCard = common_vendor.ref("");
    const gender = common_vendor.ref("男");
    const selectedRole = common_vendor.ref("teacher");
    const classes = common_vendor.ref([]);
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
    common_vendor.onMounted(() => {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const query = currentPage.options;
      const employeeId = query.id;
      if (employeeId) {
        console.log(employeeId);
        const employee = store.getEmployeeById(employeeId);
        console.log(employee);
        if (employee) {
          name.value = employee.name;
          console.log(name.value);
          phone.value = employee.phone;
          idCard.value = employee.idCard;
          gender.value = employee.gender;
          position.value = employee.position;
          fileList1.value = [{
            url: employee.avatar
          }];
          classes.value = employee.classes;
          console.log(classes);
          if (employee.position === "执行校长") {
            selectedRole.value = "executive";
          } else {
            selectedRole.value = "teacher";
            permissions.value = permissions.value.map((permission) => ({
              ...permission,
              enabled: employee.authorizations.includes(permission.name)
            }));
          }
          console.log(permissions);
        }
      }
    });
    const save = () => {
      var _a, _b;
      const employeeId = getCurrentPages().pop().options.id;
      const updatedEmployee = {
        id: Number(employeeId),
        // 确保 ID 是数字
        name: name.value,
        phone: phone.value,
        idCard: idCard.value,
        gender: gender.value,
        position: selectedRole.value === "executive" ? "执行校长" : "老师",
        avatar: ((_a = fileList1.value[0]) == null ? void 0 : _a.url) || "https://via.placeholder.com/150",
        classes: classes.value,
        authorizations: selectedRole.value === "teacher" ? permissions.value.filter((p) => p.enabled).map((p) => p.name) : ["执行校长拥有该校区全部管理权限。"]
      };
      console.log((_b = fileList1.value[0]) == null ? void 0 : _b.url);
      store.updateEmployee(updatedEmployee);
      common_vendor.index.navigateBack();
    };
    const selectRole = (role) => {
      selectedRole.value = role;
    };
    const onSwitchChange = (index, event) => {
      permissions.value[index].enabled = event.detail.value;
    };
    const deletePic = (event) => {
      console.log(event);
      fileList1.value.splice(event.index, 1);
    };
    const afterRead = (event) => {
      console.log("event", event);
      let lists = [].concat(event.file);
      let fileListLen = fileList1.value.length;
      console.log("fileListLen", fileListLen);
      lists.map((item) => {
        fileList1.value.push({
          ...item,
          status: "uploading",
          message: "上传中"
        });
      });
      console.log("igegergfffh");
      console.log(fileList1);
      for (let i = 0; i < lists.length; i++) {
        let item = fileList1.value[fileListLen];
        fileList1.value.splice(fileListLen, 1, {
          ...item,
          status: "success",
          message: "",
          url: lists[0].url
        });
        fileListLen++;
        console.log(fileListLen);
      }
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
        h: common_vendor.f(sex, (item, index, i0) => {
          return {
            a: index,
            b: common_vendor.o(_ctx.radioChange, index),
            c: "4925220f-2-" + i0 + ",4925220f-1",
            d: common_vendor.p({
              customStyle: {
                marginBottom: "8px"
              },
              label: item.name,
              name: item.name,
              activeColor: "#FF9933"
            })
          };
        }),
        i: common_vendor.o(_ctx.groupChange),
        j: common_vendor.o(($event) => gender.value = $event),
        k: common_vendor.p({
          placement: "row",
          modelValue: gender.value
        }),
        l: phone.value,
        m: common_vendor.o(($event) => phone.value = $event.detail.value),
        n: idCard.value,
        o: common_vendor.o(($event) => idCard.value = $event.detail.value),
        p: selectedRole.value === "teacher" ? "#FF8D1B" : "#F2F2F2",
        q: selectedRole.value === "teacher" ? "#FFFFFF" : "#888687",
        r: common_vendor.o(($event) => selectRole("teacher")),
        s: selectedRole.value === "executive" ? "#FF8D1B" : "#F2F2F2",
        t: selectedRole.value === "executive" ? "#FFFFFF" : "#888687",
        v: common_vendor.o(($event) => selectRole("executive")),
        w: selectedRole.value === "teacher"
      }, selectedRole.value === "teacher" ? {
        x: common_vendor.f(permissions.value, (auth, index, i0) => {
          return {
            a: common_vendor.t(auth.name),
            b: auth.enabled,
            c: common_vendor.o((event) => onSwitchChange(index, event), index),
            d: index
          };
        })
      } : {}, {
        y: common_vendor.o(save),
        z: common_vendor.p({
          type: "primary",
          text: "保存",
          shape: "circle",
          color: "#FF9933"
        }),
        A: common_vendor.o(save)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4925220f"]]);
wx.createPage(MiniProgramPage);
