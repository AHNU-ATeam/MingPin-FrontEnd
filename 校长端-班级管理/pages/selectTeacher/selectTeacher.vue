<template>
  <view class="select-teacher">
    <radio-group class="radio-group">
      <view v-for="(teacher, index) in teachers" :key="index">
        <view class="radio-item">
          <radio :value="teacher.id" name="teacher" @click="updateSelection(teacher)" />
          <view class="teacher">
            <image :src="teacher.avatar" class="avatar-img" />
            <view class="info">
              <text class="name">{{ teacher.name }}</text>
              <text class="details">{{ teacher.details }}</text>
            </view>
          </view>
        </view>
        <view v-if="index < teachers.length" class="dashed-line"></view>
      </view>
    </radio-group>
    <view class="margin-bottom"></view>
    <view class="footer-nav">
      <button @click="confirmSelection">确认</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedTeacher: null,
      teachers: [
        { id: 1, name: '白宝山', details: '日托班x1、晚托班x2', avatar: '../../static/女老师.png' },
        { id: 2, name: '刘建国', details: '午托班x1', avatar: '../../static/男老师.png' },
        { id: 3, name: '杨晓丽', details: '晚托班x2', avatar: '../../static/女老师.png' }
      ]
    };
  },
  methods: {
    updateSelection(teacher) {
      this.selectedTeacher = teacher;
    },
    confirmSelection() {
      if (this.selectedTeacher) {
        getApp().globalData.selectedTeacher = this.selectedTeacher.name; // 存储老师名称
        getApp().globalData.selectedTeacherId = this.selectedTeacher.id.toString(); // 存储老师ID
        console.log('Selected teacher:', this.selectedTeacher);
        uni.navigateBack();
      } else {
        console.log('No teacher selected.');
      }
    }
  }
};
</script>

<style scoped>
.select-teacher {
  padding: 20px;
}

.radio-group {
  margin-bottom: 20px;
}

.radio-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.radio {
  margin-right: 10px;
}

.teacher {
  display: flex;
  flex-direction: row;
}

.avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.info {
  flex-grow: 1;
  margin-left: 10px;
}

.name, .details {
  padding: 5px;
  display: block;
}

.name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.details {
  font-size: 14px;
  color: #666;
}

.dashed-line {
  border-bottom: 1px dashed #ccc;
  margin: 10px 0;
  width: 100%;
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
</style>
