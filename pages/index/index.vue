<template>
	<view class="background-color">
		<!--轮播图-->
		<view class="swiper">
			<swiper circular="true" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000" indicator-active-color="#f3514f">
				<swiper-item>
					<img src="../../static/banner1.png" alt="" class="image">
				</swiper-item>
				<swiper-item>
					<img src="../../static/banner2.png" alt="" class="image">
				</swiper-item>
				<swiper-item>
					<img src="../../static/banner3.jpg" alt="" class="image">
				</swiper-item>
			</swiper>
		</view>
		<!--功能1-->
		<view class="function_1 rounded-border">
			
			<view class="">
				<!--男孩版本-->
				<view class="" v-if="sex==1">
					<img src="../../static/头像 男孩.png" alt="" class="head">
					<text class="text_1">{{Sname}}</text>
					<img src="../../static/20积分.png" alt="" class="score">
					<text class="text_3">{{score}}</text>
					<text class="text_2">切换孩子</text>
					<image src="../../static/切换.png" mode="" class="change"></image>
				</view>
				
				<!--女孩版本-->
				<view class="" v-else>
					<img src="../../static/头像 女孩.png" alt="" class="head">
					<text class="text_1">{{Sname}}</text>
					<img src="../../static/20积分.png" alt="" class="score">
					<text class="text_3">{{score}}</text>
					<text class="text_2">切换孩子</text>
					<image src="../../static/切换.png" mode="" class="change"></image>
				</view>	
			</view>
			
			
			<view class="line"></view>
			
			
			<view class="font_1 border1">
				<navigator url="../CheckWork/CheckWork" hover-class="navigator-hover" class="navigation" open-type="navigate">
					<image src="../../static/考勤统计.png" mode="" class="image-icon font_2">考勤统计</image>
				</navigator>
				<navigator url="../Leave/Leave" hover-class="navigator-hover" class="navigation" open-type="navigate">
					<image src="../../static/请假.png" mode="" class="image-icon font_2">请假申请</image>
				</navigator>
				<navigator url="../SharePhoto/SharePhoto" hover-class="navigator-hover" class="navigation" open-type="navigate">
					<image src="../../static/共享图库.png" mode="" class="image-icon font_2">共享图库</image>
				</navigator>
				<navigator url="../GrowUp/GroupUp" hover-class="navigator-hover" class="navigation" open-type="navigate">
					<image src="../../static/成长相册.png" mode="" class="image-icon font_2">成长相册</image>
				</navigator>
				<navigator url="../PunchClock/PunchClock" hover-class="navigator-hover" class="navigation" open-type="navigate">
					<image src="../../static/打卡记录-copy.png" mode="" class="image-icon font_2">打卡记录</image>
				</navigator>
				<navigator url="../HobbyCheck/HobbyCheck" hover-class="navigator-hover" class="navigation" open-type="navigate">
					<image src="../../static/评价管理.png" mode="" class="image-icon font_2">习惯测评</image>
				</navigator>
			</view>
		</view>
		<!--功能2-->
		<view class="function_2 rounded-border">
			<text @click="type=1000" class="round1">美好瞬间</text>
			<text @click="type=2000" class="round2">每日食谱</text>
			<text @click="type=3000" class="round3">学情反馈</text>
			<!--美好瞬间-->
			<view class="" v-if="type==1000">
				<view class="" v-if="NumberBeaut==0">
					<image src="../../static/暂无数据.png" mode=""></image>
				</view>
				<view class="" v-else>
					
				</view>
			</view>
			<!--每日食谱-->
			<view class="" v-else-if="type==2000">
				<view class="" v-if="NumberMenu==0">
					<image src="../../static/暂无数据.png" mode=""></image>
				</view>
				<view class="" v-else>
					
				</view>
			</view>
			<!--学情反馈-->
			<view class="" v-if="type==3000">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Sname: "乐乐",
				type:1000,
				NumberBeaut:0,
				NumberMenu:0,
				sex:1,
				score:0
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.font_2{
		font-size: 23rpx;
		text-align: center;
	}
	.line{
		border-bottom: 1rpx solid #8f8f94;
		margin: 10rpx auto;
		width: 95%;
	}
	.round1{
		font-size: 35rpx;
		position: absolute;
		bottom: 305rpx;
		left: 30rpx;
		font-weight: 800;
	}
	.round2{
		font-size: 35rpx;
		position: absolute;
		bottom: 305rpx;
		left: 200rpx;
		font-weight: 800;
	}
	.round3{
		font-size: 35rpx;
		position: absolute;
		bottom: 305rpx;
		left: 360rpx;
		font-weight: 800;
	}
	.change{
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		bottom: 700rpx;
		right: 20rpx;
	}
	.score{
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		bottom: 695rpx;
		left: 230rpx;
	}
	.text_2{
		position: absolute;
		bottom: 705rpx;
		right: 75rpx;
	}
	.text_3{
		position: absolute;
		bottom: 700rpx;
		left: 285rpx;
	}
	.text_1{
		position: absolute;
		bottom: 700rpx;
		left: 150rpx;
	}
	.head{
		padding-top: 15rpx;
		padding-left: 15rpx;
		width: 100rpx;
		height: 100rpx;
	}
	
	.navigation{
		display: inline;
	}
	.border1{
		margin-top: -10rpx;
	}
	.background-color{
		height: 100%;
		width: 100%;
		background-color: #efefef;
	}
	
	.rounded-border{
		border: 1px;
		border-radius: 10px;
	}
	
	.font_1{
		font-weight: bold;
		padding-top: -10rpx;
		font-size: 20rpx;
	}
	.image-icon{
		width: 90rpx;
		height: 70rpx;
		padding: 30rpx;
	}
	
	.function_1{
		width: 720rpx;
		height: 400rpx;
		background-color: #fff;
		margin-left: 15rpx;
		margin-bottom: 20rpx;
	}
	
	.function_2{
		width: 720rpx;
		height: 550rpx;
		background-color: #fff;
		margin-left: 15rpx;
		margin-bottom: 20rpx;
	}
	
	.swiper{
		margin-bottom: 20rpx;
	}
	.swiper-item{
		padding: 0rpx,30rpx,0rpx,30rpx;
	}
	.image{
		height: 100%;
		width: 100%;
	}
	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
