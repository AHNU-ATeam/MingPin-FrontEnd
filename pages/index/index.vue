<template>
  <view class="container">
    <!-- 学员考勤时间设置 -->
    <view class="time-setting" v-for="(timeSlot, index) in timeSlots" :key="index">
      <text>{{ timeSlot.label }}</text>
      <text class="time">{{ timeSlot.time }}</text>
      <image class="arrow" src="../../static/箭头.png" @click="showPicker(index)"/>
    </view>

    <!-- 时间选择弹出窗口 -->
    <view class="time-picker-modal" v-show="showPickerIndex !== -1">
      <view class="time-picker-header">
        <text @click="hidePicker">取消</text>
        <text class="confirm" @click="confirmTime">确认</text>
      </view>
      <picker mode="time" :value="selectedTime" @change="onTimeChange">
        <view class="picker-content">
          选择时间: {{ selectedTime }}
        </view>
      </picker>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      timeSlots: [
        { label: '最早打卡时间', time: '10:00' },
        { label: '最早打卡时间', time: '14:00' },
      ],
      showPickerIndex: -1,
      selectedTime: '',
    };
  },
  methods: {
    showPicker(index) {
      this.showPickerIndex = index;
      this.selectedTime = this.timeSlots[index].time; // 这里需要根据实际情况来设定初始值
    },
    hidePicker() {
      this.showPickerIndex = -1;
      this.selectedTime = '';
    },
    onTimeChange(e) {
      this.selectedTime = e.target.value;
    },
    confirmTime() {
      if (this.showPickerIndex !== -1) {
        const selectedHourMinute = this.selectedTime.split(':');
        const hours = parseInt(selectedHourMinute[0], 10);
        const minutes = parseInt(selectedHourMinute[1], 10);
        // 这里需要根据实际的时间设置逻辑来赋值
        this.timeSlots[this.showPickerIndex].time = this.selectedTime;
        this.hidePicker();
      }
    },
  },
};
</script>

<style>
/* 请根据实际路径调整图片路径 */
.arrow {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.time-setting {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.time {
  margin: 0 10px;
}

.time-picker-modal {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.time-picker-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
}

.picker-content {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.confirm {
  color: #1E90FF;
}
</style>