<template>
<view class="description">
	<image class="attention" src="../../../static/警告.png" mode="aspectFit"></image>
    <text>以下时间设置，仅用于常年托学员人脸打卡</text>
</view> 
<view class="container">
	<!-- 早时段托管班 --> 
    <view class="time-section">
      <view class="time-title">
		<image class="icon-times" src="../../../static/早上早晨.png" mode="aspectFit"></image>
        <text class="part-time">早时段托管班</text>
      </view>
    <view class="time-details">
		<view class="early">
		  	<text>最早打卡时间</text>
			<text class="one-early-time">05:00</text>
		</view>
		<view class="late">
			<text>最晚打卡时间</text>
			<text class="late-time">09:59</text>
		</view>
    </view>
    </view>
    <!-- 午时段托管班 -->
    <view class="time-section">
      <view class="time-title">
		<image class="icon-times" src="/static/太阳.png" mode="aspectFit"></image>
        <text class="part-time">午时段托管班</text>
      </view>
        <view class="time-details">
      		<view class="early">
      		  	<text>最早打卡时间</text>
				<picker mode="time" value="{{afterTime}}"  @change="onafterTimeChange">
				  <view class="early-time">{{afterTime}}</view>
				</picker>
      			<!-- <text class="early-time">10:00</text> -->
				<image class="arrow" src="/static/箭头.png" mode="aspectFit"/>
      		</view>
      		<view class="late">
      			<text>最晚打卡时间</text>
      			<text class="late-time">13:59</text>
      		</view>
        </view>
    </view>
    <!-- 晚时段托管班 -->
    <view class="time-section">
      <view class="time-title">
		<image class="icon-times" src="/static/晚上.png" mode="aspectFit"></image>
        <text class="part-time">晚时段托管班</text>
      </view>
      <view class="time-details">
      		<view class="early">
      		  	<text>最早打卡时间</text>
				<picker mode="time" value="{{nightTime}}"  @change="onnightTimeChange">
				  <view class="early-time">{{nightTime}}</view>
				</picker>
      			<!-- <text class="early-time">14:00</text> -->
				<image class="arrow" src="/static/箭头.png" mode="aspectFit"/>
      		</view>
      		<view class="late">
      			<text>最晚打卡时间</text>
      			<text class="late-time">23:59</text>
      		</view>
      </view>
    </view>
    <!-- 保存按钮 -->
    <view class="save-button" @click="saveTimeSettings">
      <text>保存</text>
    </view>
</view>
<!--模拟弹窗-->

</template>

<script>
export default {
	data(){
		return{
			afterTime: '10:00',
			nightTime: '14:00'
		}
	},
	methods: {
	  onafterTimeChange(e) {
	    this.afterTime = e.detail.value;
	  },
	  onnightTimeChange(e) {
	    this.nightTime = e.detail.value;
	  },
	  saveSettings() {
	    console.log('Settings saved with:', this);
	    // 实际应用中这里会调用API保存设置
	  }
	}
	
};
</script>

<style>
.description{
	background-color: #fef8e8;
	width: 750rpx;
	height: 60rpx;
	display: flex;
	align-items: center;
}
.arrow{
	width: 15px;
	height: 15px;
	margin-top: 5rpx;
}
.early{
	display: flex;
}
.early,.late{
	font-size: 13px;
	padding: 10px;
}
.one-early-time,.late-time,.early-time{
	margin-left: 380rpx;
}
.early-time{
	color:#f49928;
	cursor: pointer;
}
.attention{
	width:40rpx;
	height: 40rpx;
	margin-right: 20rpx;
	margin-left: 20rpx;
}
.container {
   padding: 20px;
   font-family: sans-serif;
}
.icon-times{
	width: 50rpx;
	height: 50rpx;
	margin-left: 20rpx;
}
.part-time{
	margin-left: 20rpx;
	margin-top: 8rpx;
	font-size: 15px;
	font-weight: bold;
	color: #2e2e2e;
}
.title {
   font-size: 24px;
   font-weight: bold;
   margin-bottom: 10px;
}

.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.time-section {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.time-title {
  margin-bottom: 5px;
  display: flex;
}

.time-details {
  font-size: 16px;
}

.save-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 13px; /* 根据需要调整距离底部的距离 */
  padding: 10px 20px;
  background-color: #ff9934;
  color: white;
  border-radius: 30px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>