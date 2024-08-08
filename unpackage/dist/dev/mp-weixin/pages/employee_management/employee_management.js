"use strict";
const common_vendor = require("../../common/vendor.js");
const store_employees = require("../../store/employees.js");
if (!Array) {
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  _easycom_up_button2();
}
const _easycom_up_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  _easycom_up_button();
}
const _sfc_main = {
  __name: "employee_management",
  setup(__props) {
    const store = store_employees.useEmployeeStore();
    const employees = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      employees.value = store.employees;
    });
    const deleteEmployee = (employee) => {
      if (employee.classes.length === 0) {
        store.deleteEmployee(employee.id);
        employees.value = store.employees;
      } else {
        common_vendor.index.showModal({
          title: "注意",
          content: `带班中的${employee.position}不可删除`,
          showCancel: false,
          confirmText: "知道了"
        });
      }
    };
    const go_details = (employee) => {
      common_vendor.index.navigateTo({
        url: `/pages/personal_information/personal_information?avatar=${employee.avatar}&name=${employee.name}&gender=${employee.gender}&position=${employee.position}&phone=${employee.phone}&idCard=${employee.idCard}&classes=${encodeURIComponent(
          JSON.stringify(employee.classes)
        )}&authorizations=${encodeURIComponent(
          JSON.stringify(employee.authorizations)
        )}`
      });
    };
    const go_edit = (employee) => {
      common_vendor.index.navigateTo({
        url: `/pages/edit_employee/edit_employee?id=${employee.id}`
        // Pass employee ID
      });
    };
    const go_newemployees = () => {
      common_vendor.index.navigateTo({
        url: `/pages/new_employees/new_employees`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(employees.value.length),
        b: common_vendor.f(employees.value, (employee, k0, i0) => {
          return {
            a: employee.avatar,
            b: common_vendor.t(employee.name),
            c: common_vendor.t(employee.position),
            d: common_vendor.t(employee.phone),
            e: common_vendor.t(employee.classes.length),
            f: common_vendor.o(($event) => go_details(employee), employee.id),
            g: common_vendor.o(($event) => go_edit(employee), employee.id),
            h: common_vendor.o(($event) => deleteEmployee(employee), employee.id),
            i: employee.id
          };
        }),
        c: common_vendor.o(go_newemployees),
        d: common_vendor.p({
          type: "primary",
          text: "+  添加员工",
          shape: "circle",
          color: "#FF9933"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
