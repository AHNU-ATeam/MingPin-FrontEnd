<template>
  <view class="page-container">
    <view class="form-item">
      <text class="label">班级名称 <text class="need-label">*</text></text>
      <input class="select-input" v-model="formData.className"/>
    </view>
    <view class="dashed-line"></view>
    <view class="form-item">
      <text class="label">班级类型 <text class="need-label">*</text></text>
      <view class="select-input" @click="showClassTypePicker">{{ formData.classType}}</view>
    </view>
    <view class="dashed-line"></view>
    <view class="form-item">
      <text class="label">带班老师 <text class="need-label">*</text></text>
      <view class="select-input" @click="selectTeachers">{{ formData.teacherPower}}</view>
    </view>
    <view class="dashed-line"></view>
    <view class="form-item">
      <text class="label">助教</text>
      <view class="select-input" @click="selectAssistants">{{ formData.assistantPower}}</view>
    </view>
    <view class="dashed-line"></view>
    <view class="footer-nav">
      <button @click="submitForm">保存</button>
    </view>
  
    <!-- 班级类型选择器弹窗 -->
    <view v-if="showPicker" class="custom-picker">
      <view class="picker-header">
        <text class="picker-title">请选择班级类型</text>
        <text class="close-picker" @click="hideClassTypePicker"> × </text>
      </view>
      <view class="picker-body">
        <view v-for="(type, index) in pickerOptions.type" :key="index" class="type-group">
          <text class="classtype">{{ type.name }}</text>
          <view class="subtype-options">
            <view v-for="(subtype, subIndex) in type.subtypes" :key="subIndex" @click="selectSubtype(type.name, subtype)" :class="{selected: selectedType === type.name && selectedSubtype === subtype}">
              {{ subtype }}
            </view>
          </view>
        </view>
      </view>
      <button class="picker-button" @click="confirmClassType">确认</button>
    </view>
    <view v-if="showPicker" class="mask" @click="hideClassTypePicker"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        id: null,
        className: '',
        classType: '',
        teacherPower: '',
        assistantPower: '',
        num: ''
      },
      showPicker: false,
      selectedType: '',
      selectedSubtype: '',
      pickerOptions: {
        type: [
          { name: '常年托', subtypes: ['晚托', '午托', '日托'] },
          { name: '周末托', subtypes: ['周末托', '美术托', '新概念'] },
          { name: '假期托', subtypes: ['暑假托', '寒假托'] }
        ]
      }
    };
  },
  onLoad(options) {
    if (options.classItem) {
      const classItem = JSON.parse(options.classItem);
      this.formData = {
        id: classItem.id,
        className: classItem.name,
        classType: classItem.detail,
        teacherPower: classItem.teacher,
        assistantPower: classItem.assistant,
        num: classItem.num
      };
    }
  },
  onShow() {
    let selectedTeacher = getApp().globalData.selectedTeacher;
    if (selectedTeacher) {
      this.formData.teacherPower = selectedTeacher;
      getApp().globalData.selectedTeacher = null;
    }

    let selectedAssistants = getApp().globalData.selectedAssistants;
    if (selectedAssistants) {
      this.formData.assistantPower = selectedAssistants;
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
      uni.navigateTo({
        url: '/pages/selectTeacher/selectTeacher'
      });
    },
    selectAssistants() {
      if (!this.formData.teacherPower) {
        uni.showToast({
          title: '请先选择带班老师',
          icon: 'none'
        });
        return;
      }
      uni.navigateTo({
        url: '/pages/selectAssistant/selectAssistant'
      });
    },
    submitForm() {
      if (!this.formData.className) {
        uni.showToast({
          title: '请填写班级名称',
          icon: 'none'
        });
        return;
      }
      
      if (!this.formData.classType) {
        uni.showToast({
          title: '请选择班级类型',
          icon: 'none'
        });
        return;
      }
      
      if (!this.formData.teacherPower) {
        uni.showToast({
          title: '请选择带班老师',
          icon: 'none'
        });
        return;
      }

      getApp().globalData.updatedClass = {
        id: this.formData.id,
        name: this.formData.className,
        detail: this.formData.classType,
        teacher: this.formData.teacherPower,
        assistant: this.formData.assistantPower ? this.formData.assistantPower : '-',
        num: this.formData.num
      };
      uni.navigateBack();
      console.log(this.formData);
    }
  }
};
</script>





<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}

.form-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.label {
  color: #000;
  font-size: 18px;
}

.need-label {
  color: red;
}

.select-input {
  flex: 1;
  text-align: right;
  padding-right: 10px;
  font-size: 16px;
  color: #999;
}
.dashed-line{
  border-bottom: 1px dashed #b6b6b6 ;
  margin-bottom: 10px;
  width: 100%;
}
.custom-picker {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top: 2px solid white;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  z-index: 1000; /* 确保在最上层 */
}

.picker-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.picker-title {
  flex: 1;
  text-align: center;
}

.close-picker {
	font-size: 26px;
	font-weight: bold;
	margin-right: 20px;
  cursor: pointer;
}

.picker-body {
  max-height: 300px;
  overflow-y: auto;
}

.type-group {
  padding: 10px;
}

.classtype {
  font-weight: bold;
  margin: 5px;
}

.subtype-options {
  display: flex;
  flex-wrap: wrap;
}

.subtype-options view {
  background-color: #ddd;
  padding: 5px 10px;
  margin: 5px;
  border: 5px solid #ddd;
  border-radius: 15px;
  cursor: pointer;
}

.subtype-options view.selected {
  background-color: #FFA500;
  color: white;
  border-color: #FFA500;
}

.footer-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  text-align: center;
}

.footer-nav button {
  margin: 15px;
  background-color: #FFA500;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 0px;
  font-size: 16px;
  font-weight: bold;
}

.picker-button {
  margin: 15px;
  margin-bottom: 25px;
  background-color: #FFA500;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 0px;
  font-size: 16px;
  font-weight: bold;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 600; /* 确保在自定义选择器下层 */
}
</style>
