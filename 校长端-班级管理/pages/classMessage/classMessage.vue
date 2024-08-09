<template>
  <view class="page-container">
    <view class="class-info-card">
      <view class="class-header">
        <text class="class-name">{{ classData.name }}</text>
        <text class="class-type">({{ classData.detail }})</text>
      </view>
      <view class="class-details">
        <view class="class-details-1">
          <text>带班老师：{{ classData.teacher }}</text>
          <text>班级人数：{{ classData.num }}人</text>
        </view>
        <text>助教：{{ classData.assistant }}</text>
      </view>
    </view>

    <view class="student-list">
      <text class="student-list-title">学员名单</text>
      <view class="dashed-line"></view>
      <view v-for="(student, index) in students" :key="index" class="student-item">
        <image class="student-avatar" :src="student.avatar" />
        <view class="student-info">
          <text class="student-name">{{ student.name }}</text>
          <text class="student-type">{{ student.type }}</text>
        </view>
        <text class="student-expiry">{{ student.expiry }}到期</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      classData: {
        name: '',
        detail: '',
        teacher: '',
        assistant: '',
        num: 0
      },
      students: []
    };
  },
  onLoad(options) {
    if (options.classItem) {
      const classItem = JSON.parse(options.classItem);
      this.classData = {
        name: classItem.name,
        detail: classItem.detail,
        teacher: classItem.teacher,
        assistant: classItem.assistant,
        num: classItem.num
      };

      this.students = [
        {
          name: '星一',
          type: '日托',
          expiry: '2024-08-31',
          avatar: '../../static/男学生.png'
        },
        {
          name: '星二',
          type: '日托',
          expiry: '2024-08-31',
          avatar: '../../static/女学生.png'
        }
      ];
    }
  }
};
</script>

<style scoped>
.page-container {
  height: 100vh;
  padding: 20px;
  background-color: #f0f0f0;
}

.class-info-card {
  background-color: #FFA500;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.class-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.class-name {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.class-type {
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
}

.class-details {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 8px;
  color: #fff;
}

.class-details-1 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.student-list {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
}

.student-list-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 5px solid #FFA500;
}

.dashed-line {
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
  margin-top: 20px;
  width: 100%;
}

.student-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.student-item:last-child {
  border-bottom: none;
}

.student-avatar {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
}

.student-info {
  flex: 1;
}

.student-name {
  font-size: 16px;
  font-weight: bold;
}

.student-type {
  background-color: #def3ff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 5px;
  color: #1dabf6;
  margin-left: 10px;
}

.student-expiry {
  font-size: 14px;
  color: #999;
}
</style>
