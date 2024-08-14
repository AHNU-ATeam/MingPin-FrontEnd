<template>
  <view class="container">
    <view class="attendance-time">
      <view class="students-slots">
		<view class="time-type" @click="navigateToStudent">
		  	<text>学员考勤时间</text>
			<image class="arrow" src="../../static/箭头.png"></image>
		</view>
        <view class="slot morning">
		  <image class="icon-times" src="/static/早上早晨.png" mode="aspectFit"></image>
          <text class="slot-name">早</text>
		  <text class="slot-time-one">打卡时段 </text>
          <text class="time">05:00－09:59</text>
        </view>
        <view class="slot noon">
			<image class="icon-times" src="/static/太阳.png" mode="aspectFit"></image>
          <text class="slot-name">午</text>
		  <text class="slot-time-one">打卡时段 </text>
          <text class="time">10:00－13:59</text>
        </view>
        <view class="slot evening">
			<image class="icon-times" src="/static/晚上.png" mode="aspectFit"></image>
          <text class="slot-name">晚</text>
		  <text class="slot-time-one">打卡时段</text>
          <text class="time">14:00－23:59</text>
        </view>
      </view>
      <view class="clerk-slots">
		<view class="time-type" @click="navigateToEmployee">
		    <text>员工考勤时间</text>
		  	<image class="arrow" src="../../static/箭头.png"></image>
		</view>
		<view class="clock-box">
			<image class="clock" src="../../static/闹钟.png" mode="aspectFill"></image>
			<view class="clerk-time">
				<view class="slot work-start">
				  <text class="slot-event">上班</text>
				  <text class="slot-actual-time">10:00</text>
				  <text class="slot-time-two">打卡时段 </text>
				  <text class="time">09:00 －10:10</text>
				</view>
				<view class="slot work-end">
				  <text class="slot-event">下班</text>
				  <text class="slot-actual-time">20:30</text>
				  <text class="slot-time-two">打卡时段 </text>
				  <text class="time">19:29 －21:30</text>
				</view>
			</view>
		</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
methods: {
    // 定义点击学员考勤时间跳转的方法
    navigateToStudent() {
      // 替换下面的路径为您希望跳转到的学员考勤时间页面路径
      uni.navigateTo({
        url: '/pages/Attendance/student/student', 
        success: function () {
          console.log('学员考勤时间页面跳转成功');
        },
        fail: function (err) {
          console.error('学员考勤时间页面跳转失败', err);
        }
      });
    },
    // 定义点击员工考勤时间跳转的方法
    navigateToEmployee() {
      // 替换下面的路径为您希望跳转到的员工考勤时间页面路径
      uni.navigateTo({
        url: '/pages/Attendance/employee/employee', 
        success: function () {
          console.log('员工考勤时间页面跳转成功');
        },
        fail: function (err) {
          console.error('员工考勤时间页面跳转失败', err);
        }
      });
    }
  }
};
</script>

<style>
.container {
  font-family: sans-serif;
}

.attendance-time {
  margin-bottom: 20px;
}

.time-type {
  margin-top: 10px;
  margin-bottom: 10rpx;
  margin-left: 20rpx;
  display: flex;
}

.students-slots,.clerk-slots{
  display: flex;
  flex-direction: column;
}
.students-slots{
	width: 710rpx;
	height: 285rpx;
	border-radius: 10px;
	background-color: #fff; /* 盒子的背景颜色 */
	  box-shadow: 
	    10px 10px 15px rgba(0,0,0,0.03), /* 右下 */
	    -10px -10px 15px rgba(0,0,0,0.03), /* 左上 */
	    10px -10px 15px rgba(0,0,0,0.03), /* 右上 */
	    -10px 10px 15px rgba(0,0,0,0.03); /* 左下 */
	margin: auto;
}
.clerk-slots{
	width: 710rpx;
	height: 255rpx;
	background-color: #fff;
	border-radius: 5px;
	box-shadow:
	    10px 10px 15px rgba(0,0,0,0.03), /* 右下 */
	    -10px -10px 15px rgba(0,0,0,0.03), /* 左上 */
	    10px -10px 15px rgba(0,0,0,0.03), /* 右上 */
	    -10px 10px 15px rgba(0,0,0,0.03); /* 左下 */
	margin: auto;
	margin-top: 20rpx;
}
.slot {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.work-start,.work-end{
	margin-left: 20rpx;
}
.slot-name,
.slot-event {
  font-weight: bold;
  font-size: 14px;
  margin-left: 20rpx;
  margin-top: 10rpx;
}
.slot-time-one{
  margin-left: 100rpx;
  margin-top: 5rpx;
}
.slot-time-two{
	margin-left: 80rpx;
	margin-top: 5rpx;
	margin-right: 30px;
}
.time{
	margin-right: 30px;
	font-size: 14px;
	color: #f49928;
	margin-top: 8rpx;
}
.clock{
	width: 50rpx;
	height: 50rpx;
	margin-left: 20rpx;
	margin-top: 5rpx;
}

.clock-box{
	display: flex;
	margin-top: 20rpx;
}

.arrow{
	width: 30rpx;
	height: 30rpx;
	margin-top: 3px;
	margin-left: auto;
}
.icon-times{
	width: 50rpx;
	height: 50rpx;
	margin-left: 20rpx;
}
.slot-actual-time{
	margin-left: 10rpx;
	margin-top: 11rpx;
	font-weight: bold;
	font-size: 14px;
}
</style>