"use strict";
const common_vendor = require("../common/vendor.js");
const useEmployeeStore = common_vendor.defineStore("employee", () => {
  const employees = common_vendor.ref([
    {
      id: 1,
      avatar: "https://c-ssl.duitang.com/uploads/blog/202107/19/20210719124452_96273.jpeg",
      name: "王培培",
      position: "执行校长",
      phone: "12345678910",
      gender: "女",
      idCard: "34898765678890000",
      classes: [
        { grade: "名思堂三年级", type: "晚托", number: 3 },
        { grade: "名思堂四年级", type: "晚托", number: 2 }
      ],
      authorizations: [
        "员工管理",
        "班级管理",
        "学院管理",
        "班级考勤管理",
        "通知公告管理",
        "星级管理"
      ]
    },
    {
      id: 2,
      avatar: "https://c-ssl.duitang.com/uploads/blog/202112/03/20211203190323_daea7.jpeg",
      name: "李雷",
      position: "老师",
      phone: "12345678911",
      gender: "女",
      idCard: "34898765678890000",
      classes: [
        { grade: "名思堂三年级", type: "晚托", number: 3 },
        { grade: "名思堂四年级", type: "晚托", number: 22 },
        { grade: "七年级数学二班", type: "暑假托", number: 6 }
      ],
      authorizations: [
        "员工管理",
        "班级管理",
        "学院管理",
        "班级考勤管理",
        "通知公告管理",
        "星级管理"
      ]
    },
    {
      id: 3,
      avatar: "https://c-ssl.duitang.com/uploads/blog/202103/07/20210307132835_9c3d4.thumb.1000_0.jpg",
      name: "韩梅梅",
      position: "老师",
      phone: "12345678912",
      gender: "女",
      idCard: "34898765678890000",
      classes: [],
      authorizations: ["员工管理", "班级管理", "学院管理"]
    },
    {
      id: 4,
      avatar: "https://c-ssl.duitang.com/uploads/blog/202204/11/20220411220140_f3444.jpeg",
      name: "张三",
      position: "老师",
      phone: "12345678913",
      gender: "女",
      idCard: "34898765678890000",
      classes: [
        { grade: "名思堂三年级", type: "晚托", number: 3 },
        { grade: "名思堂四年级", type: "晚托", number: 2 }
      ],
      authorizations: ["员工管理", "班级管理", "学院管理"]
    },
    {
      id: 5,
      avatar: "https://c-ssl.duitang.com/uploads/blog/202304/16/20230416182040_e89e3.jpg",
      name: "李四",
      position: "老师",
      phone: "12345678914",
      gender: "女",
      idCard: "34898765678890000",
      classes: [
        { grade: "名思堂三年级", type: "晚托", number: 3 },
        { grade: "名思堂四年级", type: "晚托", number: 2 }
      ],
      authorizations: ["员工管理", "班级管理", "学院管理"]
    },
    {
      id: 6,
      avatar: "https://imgs.tom.com/gossip/202308/1858606034/THUMBNAIL6AB8CD53909647ED.jpg",
      name: "王五",
      position: "老师",
      phone: "12345678915",
      gender: "女",
      idCard: "34898765678890000",
      classes: [
        { grade: "名思堂三年级", type: "晚托", number: 3 },
        { grade: "名思堂四年级", type: "晚托", number: 2 }
      ],
      authorizations: ["员工管理", "班级管理", "学院管理"]
    },
    {
      id: 7,
      avatar: "https://c-ssl.duitang.com/uploads/blog/202207/17/20220717203506_9f80b.jpg",
      name: "赵六",
      position: "老师",
      phone: "12345678916",
      gender: "男",
      idCard: "34898765678890000",
      classes: [
        { grade: "名思堂三年级", type: "晚托", number: 3 },
        { grade: "名思堂四年级", type: "晚托", number: 2 }
      ],
      authorizations: ["员工管理", "班级管理", "学院管理"]
    }
  ]);
  const addEmployee = (employee) => {
    employees.value.push(employee);
  };
  const deleteEmployee = (employeeId) => {
    employees.value = employees.value.filter((e) => e.id !== employeeId);
    console.log(employees.value);
  };
  const updateEmployee = (updatedEmployee) => {
    const index = employees.value.findIndex((e) => e.id === updatedEmployee.id);
    if (index !== -1) {
      employees.value[index] = updatedEmployee;
    }
  };
  const getEmployeeById = (id) => {
    console.log(employees.value.find((e) => e.id == id));
    return employees.value.find((e) => e.id == id);
  };
  const generateId = () => {
    return employees.value.length > 0 ? Math.max(...employees.value.map((e) => e.id)) + 1 : 1;
  };
  return { employees, addEmployee, deleteEmployee, updateEmployee, getEmployeeById, generateId };
});
exports.useEmployeeStore = useEmployeeStore;
