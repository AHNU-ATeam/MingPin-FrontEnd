<template>
  <view class="app-container">
    <swiper class="top-swiper" circular autoplay interval="3000">
      <swiper-item><view class="swiper-page">第一页</view></swiper-item>
      <swiper-item><view class="swiper-page">第二页</view></swiper-item>
      <swiper-item><view class="swiper-page">第三页</view></swiper-item>
      <swiper-item><view class="swiper-page">第四页</view></swiper-item>
    </swiper>
    <view class="content-area">
      <view class="card-grid">
        <view class="card">
          <image src="../../static/学员管理.png" class="icon"></image>
          <text class="label">学员管理</text>
        </view>
        <view class="card">
          <image src="../../static/人脸打卡.png" class="icon"></image>
          <text class="label">人脸打卡</text>
        </view>
        <view class="card">
          <image src="../../static/班级考勤.png" class="icon"></image>
          <text class="label">班级考勤</text>
        </view>
        <view class="card">
          <image src="../../static/班级相册.png" class="icon"></image>
          <text class="label">班级相册</text>
        </view>
		<view class="card">
		  <image src="../../static/班级动态.png" class="icon"></image>
		  <text class="label">班级动态</text>
		</view>
		<view class="card">
		  <image src="../../static/每日食谱.png" class="icon"></image>
		  <text class="label">每日食谱</text>
		</view>
		<view class="card">
		  <image src="../../static/学情反馈.png" class="icon"></image>
		  <text class="label">学情反馈</text>
		</view>
		<view class="card">
		  <image src="../../static/积分.png" class="icon"></image>
		  <text class="label">积分发放</text>
		</view>
		<view class="card">
		  <image src="../../static/交易中心_收支管理.png" class="icon"></image>
		  <text class="label">收支管理</text>
		</view>
		<view class="card">
		  <image src="../../static/更多.png" class="icon"></image>
		  <text class="label">更多</text>
		</view>
      </view>
    </view>
    <swiper class="mid-swiper">
      <swiper-item><image class=swiper-img src="../../static/中间滚动图片.jpg"></image></swiper-item>
    </swiper>
	<view class="class_manage">
		<view class="class_managefont">带班管理</view>
		<view class="stats-container">
			<view class="grade-num">
				<view class="grade-label">高一数学</view>
				<view class="stats-count">13</view>
				<view class="stats-countlabel">人</view>
			</view>
			<view class="stats-label">带班老师：体验账号</view>
		</view>

	</view>
	<view class="class_news">
	    <view class="class_font">班级动态</view>
	    <view class="image-container">
	        <image class="imag" src="../../static/no班级动态.jpg"></image>
	    </view>
	</view>
  </view>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* 允许在垂直方向上滚动 */ 
}
.top-swiper {
  width: 100vw;
  height: 20vh; 
  border-bottom: 5px solid #f0f0f0; /* 添加底部边框 */
}
.swiper-page {
  width: 100%;
  height: 100%;
  background: lightblue;
}

.mid-swiper{
	width: 100vw;
	height: 12vh;
	align-items: center;
	justify-content: center;
	background: #f0f0f0;
	border-bottom: 12px solid #f0f0f0; /* 添加底部边框 */
}
.swiper-img {
	width: 100%;
	height: 100%;
	border-radius: 30rpx;
}

.content-area {
  display: flex;
  justify-content: center;
  padding: 10px;
  border-bottom: 12px solid #f0f0f0; /* 添加底部边框 */
}
.card-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 30px;
  height: 30px;
}
.label {
  margin-top: 5px;
  font-size: 12px; /* 文本大小调整 */
}


.class_manage{
	width: 100vw;
	height: 20vh;
	border-bottom: 12px solid #f0f0f0;
}
.class_managefont{
	justify-content: start;
	font-size:20px ;
	font-weight:bold;
	padding: 10px;
}
.stats-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0px 10px; /* 提供一些内边距 */ 
  border: 8rpx solid #f0f0f0;
  margin: 10rpx;
  width: 40%;
  height: auto;
}

.grade-num{
	display: flex;
	flex-direction: row;
	justify-content: space-between;  /* 左右两端对齐 */
	align-items: center;  /* 垂直居中 */
}
.stats-count {
	justify-content: flex-end; /* 使内容靠右对齐 */ 
	padding: 5px 0px 5px 50px;
  color: #FFA500;
  font-size: 20px; 
  font-weight: bold;
}
.stats-countlabel {
	justify-content: flex-end; /* 使内容靠右对齐 */
	color: #FFA500;
	font-size: 12px; 
	font-weight: bold; 
}
.stats-label {
  color: #bfbfbf;
  font-size: 13px; /* 正常的字号 */
  padding: 5px 0px;
}
.grade-label{
	color: balck;
	font-size: 15px; /* 正常的字号 */
	font-weight: bold; /* 粗体字 */
}

.class_news {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    width: 100vw;
    height: 60vh; 
}

.class_font {
    align-self: flex-start; 
    margin-top: 10px; 
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
}

.image-container {
    display: flex;
    width: 100%; 
    justify-content: center; 
    align-items: center; 
    height: 100%;  
}

.imag {
    max-width: 100%; 
    max-height: 100%;
}
</style>
