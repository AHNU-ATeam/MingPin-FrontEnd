<template>
  <view class="container">
	  <view class="locate">
	  	<text class="locate-check">定位打卡</text>
		<view class="locate-button">
			<switch color="#f49928" style="transform:scale(0.7)"/>
		</view>
		<text class="locate-text">去添加打卡地点</text>
		<image class="arrow" src="../../../static/箭头.png" mode="aspectFit"></image>
	  </view>
    <view class="clock-in-info">
      <text class="location">卓瑞托管(利昌路店)</text>
      <text class="address">山东省潍坊市潍城区利昌路与福寿西街交叉口东南340米</text>
      <text class="range">允许打卡范围：400米</text>
    </view>
    <view class="clock-in-options">
      <view class="clock-in-times">
        <text>一天几次上下班</text>
        <radio-group class="choice" @change="onTimesChange">
          <label>
            <radio color="#f49928" value="1" checked="true"/> 1次
          </label>
          <label>
            <radio color="#f49928" value="2"/> 2次
          </label>
        </radio-group>
      </view>
	  <view class="workpart">
      <view class="work-time">
		  <view class="square"></view>
		<text class="textwork">上班</text>
		<view class="time-onwork">
			<picker mode="time" value="{{workStartTime}}" @change="onWorkStartTimeChange">
				<view>{{workStartTime}}</view>
			</picker>
			<!-- <image class="arrow" src="/static/箭头.png" mode="aspectFit"/> -->
		</view>	
		<text class="time-onwork-text">上班时间</text>
		<view class="time-check">
			<view class="time-onwork-early">
				<picker mode="time" value="{{workEarliestTime}}" @change="onWorkEarliestTimeChange">
					<view>{{workEarliestTime}}</view>
				</picker>
			</view>
			<view class="time-onwork-late">
				<picker mode="time" value="{{workLatestTime}}" @change="onWorkLatestTimeChange">
					<view>{{workLatestTime}}</view>
				</picker>
				<!-- <image class="arrow" src="/static/箭头.png" mode="aspectFit"/> -->
			</view>
		</view>
		<text class="time-onwork-early-text">最早打卡时间</text>
		<text class="time-onwork-late-text">最晚打卡时间</text>
      </view>
      <view class="off-work-time">
		<view class="gray-line"></view>
		<view class="square"></view>
		<text class="textwork">下班</text>
		<view class="time-onwork">
			<picker mode="time" value="{{offWorkEndTime}}"  @change="onOffWorkEndTimeChange">
				<view>{{offWorkEndTime}}</view>
			</picker>
			<!-- <image class="arrow" src="/static/箭头.png" mode="aspectFit"/> -->
		</view>
		<text class="time-onwork-text">下班时间</text> 
		<view class="time-check">
			<view class="time-onwork-early">
				<picker mode="time" value="{{offWorkEarliestTime}}" @change="onOffWorkEarliestTimeChange">
					<view>{{offWorkEarliestTime}}</view>
				</picker>
			</view>
		<!-- <image class="arrow" src="/static/箭头.png" mode="aspectFit"/> -->
			<view class="time-onwork-late">
				<picker mode="time" value="{{offWorkLatestTime}}" @change="onOffWorkLatestTimeChange()">
				  <view>{{offWorkLatestTime}}</view>
				</picker>
			</view>
		<!-- <image class="arrow" src="/static/箭头.png" mode="aspectFit"/> -->
		</view>
		<text class="time-onwork-early-text">最早打卡时间</text>
		<text class="time-onwork-late-text">最晚打卡时间</text>
      </view>
	</view>
    </view>
    <view class="action-buttons">
      <text>保存</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      workStartTime: '10:00',
      workEarliestTime: '09:00',
	  workLatestTime: '10:10',
      offWorkEndTime: '20:30',
	  offWorkEarliestTime: '19:29',
      offWorkLatestTime: '21:30'
    };
  },
  methods: {
    onTimesChange(e) {
      console.log('times changed', e.detail.value);
    },
    onWorkStartTimeChange(e) {
      this.workStartTime = e.detail.value;
    },
    onWorkEarliestTimeChange(e) {
      this.workEarliestTime = e.detail.value;
    },
	onWorkLatestTimeChange(e) {
	  this.workLatestTime = e.detail.value;
	},
    onOffWorkEndTimeChange(e) {
      this.offWorkEndTime = e.detail.value;
    },
	onOffWorkEarliestTimeChange(e) {
	  this.offWorkEarliestTime = e.detail.value;
	},
    onOffWorkLatestTimeChange(e) {
      this.offWorkLatestTime = e.detail.value;
    },
    saveSettings() {
      console.log('Settings saved with:', this);
      // 实际应用中这里会调用API保存设置
    }
  }
};
</script>

<style>
.container {
	padding: 20rpx;
	width: 750rpx;
	height: 1300rpx;
    background-color: #f2f2f2;
}
.square{
	width: 5px;
	height: 15px;
	background-color: #ff9934;
}
.gray-line{
	width: 90%; 
	height: 1px;
	background-color: #f2f2f2; /* 直线的颜色 */
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
}
.time-onwork{
	display: flex;
	align-items: center;
	margin-left: 300rpx;
}
.time-onwork-text{
	margin-left: 290rpx;
	font-size: 13px;
	color: darkgray;
}
.time-check{
	display: flex;
}
.time-onwork-early,.time-onwork-late{
	display: flex;
	margin-top: 10px;
}
.time-onwork-early{
	margin-left: 80rpx;
}
.time-onwork-late{
	margin-left: 400rpx;
}
.time-onwork-early-text{
	margin-left: 30rpx;
	font-size: 13px;
	color: darkgray;
}
.time-onwork-late-text{
	margin-left: 350rpx;
	font-size: 13px;
	color: darkgray;
}
.arrow{
	width: 15px;
	height: 15px;
}
.locate{
	display: flex;
	background-color: white;
	width: 710rpx;
	height: 80rpx;
	align-items: center;
	border-radius: 5px;
}
.locate-check,.locate-text{
	padding: 10rpx;
}
.locate-text{
	margin-left: auto;
}
.header {
  font-size: 24px;
  font-weight: bold;
}
.choice{
	margin-left: auto;
}
.clock-in-info {
  width: 710rpx;
  height: 230rpx;
  display: grid;
  background-color: white;
  margin-top: 20rpx;
  border-radius: 5px;
}
.clock-in-times{
	display: flex;
	width: 680rpx;
	height: 80rpx;
	background-color: white;
	border-radius: 5px;
	margin-top: 10px;
	align-items: center;
	padding-inline: 10px;
}
.location{
	font-size: 16px;
	font-weight: bold;
	padding: 10px;
	margin-left: 10px;
}
.address,.range{
	font-size: 17px;
	color: grey;
	margin-left: 15px;
}
.workpart{
	width: 710rpx;
	height: 530rpx;
	background-color: white;
	border-radius: 5px;
	margin-top: 10px;
}

.action-buttons {
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