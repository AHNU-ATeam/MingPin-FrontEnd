<template>
	<view>
		<form action="">
			<view class="fun1">
				<view style="display: flex;">
					<image src="../../static/MenuControl/荤菜.png" mode="scaleToFill" class="image"></image>
					<view class="font">荤菜</view>
				</view>
				<image src="../../static/MenuControl/直线.png" mode="scaleToFill" class="line"></image>
			</view>
			
			<view class="fun1">
				<view style="display: flex;">
					<image src="../../static/MenuControl/素菜.png" mode="scaleToFill" class="image"></image>
					<view class="font">素菜</view>
				</view>
				<image src="../../static/MenuControl/直线.png" mode="scaleToFill" class="line"></image>
			</view>
			
			
			<view class="fun1">
				<view style="display: flex;">
					<image src="../../static/MenuControl/主食.png" mode="scaleToFill" class="image"></image>
					<view class="font">主食</view>
				</view>
				<image src="../../static/MenuControl/直线.png" mode="scaleToFill" class="line"></image>
			</view>
			
			
			<view class="fun1">
				<view style="display: flex;">
					<image src="../../static/MenuControl/西瓜水果.png" mode="scaleToFill" class="image"></image>
					<view class="font">水果</view>
				</view>
				<image src="../../static/MenuControl/直线.png" mode="scaleToFill" class="line"></image>
			</view>
			
			<view class="fun1">
				<view style="display: flex;">
					<image src="../../static/MenuControl/点心.png" mode="scaleToFill" class="image"></image>
					<view class="font">荤菜</view>
				</view>
				<image src="../../static/MenuControl/直线.png" mode="scaleToFill" class="line"></image>
			</view>
			
			
		</form>
		<button class="scroll-btn" bindtap="handleScroll" size="mini">编辑</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		handleScroll: function () {
		    wx.pageScrollTo({
		      scrollTop: 0,
		      duration: 300
		    });
		},
		methods: {
			
		}
	}
</script>

<style>
	.scroll-btn {
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  background-color: #f8f8f8;
	  border: none;
	  color: #333;
	  text-align: center;
	  font-size: 32rpx;
	  width: 200rpx;
	  height: 88rpx;
	  line-height: 44rpx;
	}
	.font{
		margin-top: 20rpx;
		width: 200rpx;
		height: 50rpx;
		font-size: 25rpx;
	}
	.line{
		height: 20rpx;
		width: 700rpx;
	}
	.image{
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
		padding-left: 15rpx;
		padding-top: 15rpx;
	}
	.fun1{
		background-color: #fff;
		width: 708rpx;
		height: 200rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
		border-radius: 15rpx;
	}
</style>
