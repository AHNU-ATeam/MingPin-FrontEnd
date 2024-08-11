<template>
	<view class="icon" @click="openPopup">
		<view>1.如何上传食谱？</view>
		<textarea style="padding-left: 30rpx; height: 50rpx;" placeholder="更新时间:" disabled="true"></textarea>
		<uni-popup ref="popup" type="center">
		    <view class="popup-content">
				<view class="PopClass">
					<view class="">
						帮助内容
					</view>
					<view class="" style="font-size: 25rpx;">
						1.点击食谱管理-添加菜单，选择午餐或晚餐(可单选可多选)，输入菜名(一次可添加多个菜名)点击提交即可。
					</view>
					<view class="" style="font-size: 25rpx;">
						2.默认当天页面，点击午餐或晚餐的添加按钮，选择时间(默认当天，也可重新选择其他时间)，然后选择已列表中的菜名，若列表中没有要加的菜名，可自行再添加相关菜名，添加完后上传食谱图片后，提交即完成食谱上传。若上传其他时间的食谱，按照上述步骤继续操作。
					</view>
				</view>
		    </view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openPopup() {
			    this.$refs.popup.open();
			},
		}
	}
</script>

<style>
	.PopClass{
		line-height: 1.6;
		letter-spacing: 4rpx;
		width: 700rpx;
		height: 500rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}
	.icon{
		
		background-color: #fff;
		width: 700rpx;
		margin-left: 20rpx;
		margin-top: 50rpx;
		height: 100rpx;
	}
</style>
