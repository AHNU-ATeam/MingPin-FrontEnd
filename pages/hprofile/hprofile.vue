<template>
<view class="all">
  <view class="container">
	<view class="header">
		<text class="avatar-box">
			<image class="avatar" src="/pages/hprofile/头像.png" mode="aspectFill" />
		</text>
		<text class="text-box">
			<view class="row">
				<text class="title">体验账号（校长）</text>
				<image class="arrow" src="/pages/hprofile/箭头 (1).png" mode="aspectFill" />
			</view>
			<view class="sub-title">体验校区（校区码：666888）</view>
		</text>	
	</view>
	<view class="vip">
		<view class="vip-section">
			<image class="vip-pic" src="/pages/hprofile/VIP.png" mode="aspectFill"/>
			<view class="validity">
				<text class="text-validity">有效期至：2024.08.05 15:38</text>
				<view class="circle1">
					<view class="icon1">
						<image class="call" src="/pages/hprofile/电话.png" mode="aspectFill"/>
					</view>
				</view>
				<view class="circle2">
					<view class="icon2">
						<image class="wechat" src="/pages/hprofile/微信.png" mode="aspectFill"/>
					</view>
				</view>
			</view>
			<view class="dashed-line"></view>
		</view>
		<view class="features">
			<text class="text-features">功能全面，轻松经营，高效管理校区</text>
			<button class="renew-button">马上续费</button>
		</view>
	</view>
	</view>
  <view class="tabulation">
    <view class="navigation">
		<view class="every-navi">
			<text class="nav-item" @click="goToPage('班级')">我的班级</text><text class="number">2</text>
			<image class="navi-arrow" src="/pages/hprofile/箭头.png" mode="aspectFill" />
		</view>
		<view class="gray-line"></view>
        <view class="every-navi">
			<text class="nav-item" @click="goToPage('反馈')">我的反馈</text>
			<image class="navi-arrow" src="/pages/hprofile/箭头.png" mode="aspectFill" />
		</view>
		<view class="gray-line"></view>
		<view class="every-navi">
			<text class="nav-item" @click="goToPage('动态')">我的动态</text>
			<image class="navi-arrow" src="/pages/hprofile/箭头.png" mode="aspectFill" />
		</view>
		<view class="gray-line"></view>
		<view class="every-navi">
			<text class="nav-item" @click="goToPage('订单')">我的订单</text>
			<image class="navi-arrow" src="/pages/hprofile/箭头.png" mode="aspectFill" />
		</view>
		<view class="gray-line"></view>
		<view class="every-navi">
			<text class="nav-item" @click="goToPage('设置')">设置</text>
			<image class="navi-arrow" src="/pages/hprofile/箭头.png" mode="aspectFill" />
		</view>
		<view class="gray-line"></view>
    </view>
    <view class="footer">
      <view class="version">版本号：1.0.1</view>
    </view> 
	<view class="button">
		<view class="fcircle">
			<image class="feedback-button" src="/pages/hprofile/问题反馈 (1).png" mode="aspectFill"/>
		</view>
	</view>
  </view>
</view>

</template>

<script>
export default {
  methods: {
  //   goToPage(pageName) {
  //     // 导航到指定页面的函数，需要根据实际页面路径进行调整
  //     wx.navigateTo({
  //       url: `/pages/${pageName}/${pageName}`
  //     });
  //   },
  //   feedback() {
  //     // 打开问题反馈页面或弹出反馈窗口的函数
  //     wx.navigateTo({
  //       url: '/pages/feedback/feedback'
  //     });
  //   }
   }
}
</script>

<style>
.all{
	 padding-bottom: 100rpx;
}
.container {
	height: 350rpx;
	width: 750rpx;
    padding: 20px;
	background: linear-gradient(to right, #ff9935, #f8a758);
	display: flex;
	flex-direction: column;
	border-radius: 10px;
   /* align-items: center; */
}

.header {
  margin-top: 3px;
  display: flex;
 /* align-items: center; */
}
.avatar{
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%; /* 边框半径为50%，创建圆形边框 */
	margin-right: 10px; /* 头像和文本之间的间距 */
	overflow: hidden;
}
.arrow{
	width: 30rpx;
	height: 30rpx;
	margin-top: 2px;
}
.text-box{
	margin-top: 5px;
}
.row{
	display: flex;
}
.title {
  font-size: 16px;
  font-weight: 600;
  color: #2d1403;
}

.sub-title {
  font-size: 14px;
  color: #883803;
  margin-top: 5px;
}

.vip{
	width:690rpx;
	height: 230rpx;
    background: linear-gradient(to right, #3d3439, #4f4a50);
	border-radius: 5px;
	margin-top: 20rpx;
	margin-bottom: 20rpx;
	align-items: center;
}
.vip-pic{
	width: 60rpx;
	height: 40rpx;
	margin-left: 10px;
	margin-top: 10px;
}

.vip-status {
  font-size: 20px;
  color: #ff0000;
}
.circle1 {
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  background-color: #fdf3e1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 200rpx;
}
.circle2{
	width: 50rpx;
	height: 50rpx;
	border-radius: 50%;
	background-color: #fdf3e1;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 30rpx;
}
.call{
	width: 40rpx;
	height: 40rpx;
	margin: left 1rpx;
	text-align: center;
}
.wechat{
	width: 40rpx;
	height: 40rpx;
	margin-left: 1rpx;
	text-align: center;
}
.validity {
  font-size: 13px;
  color: #a07d6f;
  margin-left: 10px;
  display: flex;
}
.text-validity{
	margin-top: 5px;
}
.dashed-line {
  border-bottom: 1px dashed #a07d6f;
  margin: 10px auto;
  width: 95%; /* 虚线的宽度 */
}
.features {
  margin-bottom: 20px;
  text-align: center;
  display: flex;
}

.renew-button {
	width: 180rpx;
	height: 60rpx;
    background-color:#ff9f40;
    color: white;
    border: none;
    border-radius: 30px;
    margin-bottom: 20px;
    font-size: 15px;
    padding: 0 0;
    align-items: center;
    justify-content: center;
}
.text-features{
	font-size: 14px;
	font-family: sans-serif;
	color: #a07d6f;
	margin-left: 8rpx;
	font-weight: bold;
	margin-top: 5rpx;
}
.tabulation{
	width: 750rpx;
	height: 100%;
	background-color: white;
	border-radius: 20px;
}
.navigation {
	background-color: white;
	border-radius: 20%;
	flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
	margin-top: 20px;
}
.feedback-button{
	width: 80rpx;
	height: 80rpx;
}
.every-navi{
	display: flex;
}
.nav-item {
  width: 750rpx;
  height: 45rpx;
  background-color: white;
  margin-top: 20px;
  border-radius: 5px;
  margin-left: 20px;
  font-size: 18px;
  white-space: nowrap;
  cursor: pointer;
}
.number{
	margin-right: 40rpx;
	margin-top: 10rpx;
}
.navi-arrow{
	width: 35rpx;
	height: 35rpx;
	margin-top: 5px;
	margin-bottom: 5px;
}
.fcircle{
	width: 90rpx;
	height: 90rpx;
	border-radius: 50%;
	background-color: #ff9f40;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 600rpx;
}
.gray-line{
	width: 100%; 
	height: 8px;
	background-color: #f6f6f6; /* 直线的颜色 */
	margin: 10px 0;
}
.footer {
  width: 100%;
  text-align: center; 
  margin-top: 0; 
}

.version {
  display: inline-block; 
  text-align: center; 
  margin: 10px 0; 
  color: gray;
  font-size: 14px;
}
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 98rpx; /* 底部导航栏高度 */
    background-color: white;
    border-top: 3px solid #f6f6f6;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer; /* 鼠标悬停时显示指针手势 */
  }
  
  .icon-home,
  .icon-contact,
  .icon-profile {
    width: 25px;
    height: 25px;
    margin-bottom: 5px;
  }
  
  .text-home,
  .text-contact,
  .text-profile {
    font-size: 14px;
    color: #666;
  }
</style>