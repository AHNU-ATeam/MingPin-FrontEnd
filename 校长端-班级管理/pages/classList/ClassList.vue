<template>
  <view>
    <view class="class-list">
      <view class="class-totalnum">
        共<text class="class-count">{{ classes.length }}</text>个班级
      </view>
      <view v-for="(classItem, index) in classes" :key="index" class="class-item">
        <view class="class-info" @click="ClassMessage(classItem)">
          <view class="class-name">
            <text class="name-text">{{ classItem.name }}</text>
            <view class="detail-text">{{ classItem.detail }}</view>
          </view>
          <view class="class-teacher">
            <view class="text">带班老师：{{classItem.teacher}}</view>
            <view class="ass-text">助教：{{classItem.assistant}}</view>
          </view>
          <view class="dashed-line"></view>
          <view class="class-num">
            班级人数：<text class="num-text">{{ classItem.num }}</text>
            <view class="button-container">
              <button class="modify-button" @click.stop="editClass(classItem)">修改</button>
              <button class="delete-button" @click.stop="deleteClass(classItem.id)">删除</button>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="margin-bottom"></view><!-- 防导航栏遮挡 -->
    <!-- 底部导航栏 -->
    <view class="footer-nav">
      <button @click="addNewClass">+ 添加班级</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        { id: 1, name: '智多星', detail: '日托', teacher: '星星', assistant: '汪老师', num: 2 },
        { id: 2, name: '明思堂三年级', detail: '晚托', teacher: '汪老师', assistant: '-', num: 1 },
        { id: 3, name: '高一物理', detail: '暑假托', teacher: '张老师', assistant: '-', num: 0 },
        { id: 4, name: '高一数学', detail: '暑假托', teacher: '体验账号', assistant: '-', num: 13 },
        { id: 5, name: '幼小衔接班', detail: '午托', teacher: '向老师', assistant: '-', num: 5 },
        { id: 6, name: '三年级语文', detail: '日托', teacher: '丁教练', assistant: '-', num: 2 }
        // 更多班级
      ]
    };
  },
  onShow() {
    let newClass = getApp().globalData.newClass;
    if (newClass) {
      this.classes.push(newClass);
      getApp().globalData.newClass = null;
    }

    let updatedClass = getApp().globalData.updatedClass;
    if (updatedClass) {
      const classIndex = this.classes.findIndex(item => item.id === updatedClass.id);
      if (classIndex !== -1) {
        this.classes.splice(classIndex, 1, updatedClass);
      }
      getApp().globalData.updatedClass = null;
    }
  },
  methods: {
    ClassMessage(classItem) {
      uni.navigateTo({
        url: `/pages/classMessage/classMessage?classItem=${JSON.stringify(classItem)}`
      });
    },
    editClass(classItem) {
      // 跳转到班级编辑页面，并传递班级信息
      uni.navigateTo({
        url: `/pages/classEdit/classEdit?classItem=${JSON.stringify(classItem)}`
      });
    },
    deleteClass(id) {
      // 找到班级
      const classToDelete = this.classes.find(item => item.id === id);
      if (!classToDelete) return;  // 如果找不到班级，直接返回

      if (classToDelete.num === 0) {
        uni.showModal({
          // title: '确认删除',
          content: `确定删除 ${classToDelete.name}?`,
          success: (res) => {
            if (res.confirm) {
              // 确认删除
              this.classes = this.classes.filter(item => item.id !== id);
            }
          }
        });
      } else {
        // 班级有学员，提示不能删除
        uni.showToast({
          title: '有学员的班级不可删除',
          icon: 'none'
        });
      }
    },
    addNewClass() {
      uni.navigateTo({
        url: '/pages/addClass/addClass'
      });
    }
  }
};
</script>




<style lang="scss" scoped>
.class-list {
  display: flex;
  flex-direction: column;
  padding: 16px 10px;
  background: #f0f0f0;
}
.class-totalnum {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}

.class-count {
  color: #FFA500;
  font-size: 16px;
  font-weight: bold;
}

.class-item {
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.class-info {
  display: flex;
  flex-direction: column;
}
.class-name{
	display: flex;
	flex-direction: row;
}
.name-text{
	font-size: 17px;
	font-weight: bold;
}
.detail-text{
	background-color:#fcf2de;
	font-size: 14px;
	color: #FFA500;
	margin-left: 5px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
}
.class-teacher{
	display: flex;
	flex-direction: row;
	align-items: center;
	color: #8a8a8a;
	font-size:14px;
	padding: 10px 0px 3px 0px;
}
.text{
	color: #8a8a8a;
	font-size:14px;
	width: 50vw;
}
.ass-text{
	color: #8a8a8a;
	font-size:14px;
	// margin-left: 30vw;
	width: 50vw;
}
.dashed-line{
	border-bottom:1px dashed #b6b6b6 ;
	margin: 10px auto;
	width: 100%;
}
.class-num {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #8a8a8a;
  font-size: 14px;
}

.num-text {
  font-size: 14px;
  color: #FFA500;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
}

.modify-button, .delete-button {
  background-color: transparent;
  color: #FFA500;               
  border: 1px solid #FFA500;
  border-radius: 5px;
  padding: 0px 15px;
  font-size: 14px;
  font-weight: bold;
}

.delete-button {
  margin-left: 10px;
}

.margin-bottom{
	background-color:#f0f0f0 ;
	height: 16vh;
}

.footer-nav {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #f0f0f0;
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
