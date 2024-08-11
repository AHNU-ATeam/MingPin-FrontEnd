<template>
	<view>
		<form @reset="formReset" @submit="formSubmit">
			<view class="fun1">
				<view style="padding-top: 30rpx;margin-left: 30rpx; display: flex;">
					<image src="../../static/RecipePublish/闹钟 (1).png" mode="aspectFill" class="image-icon1"></image>
					<text style="padding-left: 40rpx; width: 100rpx;">星期</text>
					<textarea style="padding-left: 10rpx; height: 50rpx;" placeholder="请选择" disabled="true"></textarea>
					<image src="../../static/RecipePublish/箭头.png" mode="" @click="openPopup" style="width: 60rpx;height: 30rpx;padding-top: 10rpx;"></image>
					<uni-popup ref="popup" type="center">
					    <view class="popup-content">
							<view class="PopClass">
								<text style="padding-left: 235rpx; font-size: 40rpx; color: gainsboro;">请选择</text>
								
								<view class="" style="display: flex;">
									<button>取消</button>
									<button type="default" @click="closePopup">确定</button>
								</view>
							</view>
					    </view>
					</uni-popup>
				</view>
				
				
				
				<view style="margin-top: 30rpx;margin-left: 30rpx; display: flex;">
					<image src="../../static/RecipePublish/晚餐.png" mode="aspectFill" class="image-icon2"></image>
					<text style="padding-left: 40rpx; width: 100rpx;">午餐</text>
					<textarea style="padding-left: 10rpx; height: 50rpx;" placeholder="请选择" disabled="true"></textarea>
					<image src="../../static/RecipePublish/箭头.png" mode="" @click="openPopup" style="width: 60rpx;height: 30rpx;padding-top: 10rpx;"></image>
					<uni-popup ref="popup" type="center">
					    <view class="popup-content">
							<view class="PopClass">
								<text style="padding-left: 235rpx; font-size: 40rpx; color: gainsboro;">请选择</text>
								
								<view class="" style="display: flex;">
									<button>取消</button>
									<button type="default" @click="closePopup">确定</button>
								</view>
							</view>
					    </view>
					</uni-popup>
				</view>
				
				
				
				<view style="margin-top: 30rpx;margin-left: 38rpx; display: flex;">
					<text style="padding-left: 80rpx;width: 100rpx;">午点</text>
					<textarea style="padding-left: 10rpx; height: 50rpx;" placeholder="请选择" disabled="true"></textarea>
					<image src="../../static/RecipePublish/箭头.png" mode="" @click="openPopup" style="width: 60rpx;height: 30rpx;padding-top: 10rpx;"></image>
					<uni-popup ref="popup" type="center">
					    <view class="popup-content">
							<view class="PopClass">
								<text style="padding-left: 235rpx; font-size: 40rpx; color: gainsboro;">请选择</text>
								
								<view class="" style="display: flex;">
									<button>取消</button>
									<button type="default" @click="closePopup">确定</button>
								</view>
							</view>
					    </view>
					</uni-popup>
				</view>
			</view>
			
			<view class="fun2">
				<image src="../../static/RecipePublish/远景.png" mode="aspectFill" style="width: 50rpx;height: 50rpx;padding-left: 30rpx;padding-top: 15rpx;"></image>
				<text style="font-size:30rpx;padding-left: 20rpx;margin-top: 25rpx;">午餐图</text>
				<view class="container">
				    <view class="image-upload">
				      <view class="image-box" @click="chooseImage">
				        <image v-if="imageSrc" :src="imageSrc" class="uploaded-image"></image>
				        <view v-else class="image-placeholder">+</view>
				      </view>
				    </view>
				</view>
			</view>
			
			<view class="fun2">
				<text style="font-size:30rpx;padding-left: 100rpx;margin-top: 25rpx;">午点图</text>
				<view class="container">
				    <view class="image-upload">
				      <view class="image-box" @click="chooseImage">
				        <image v-if="imageSrc" :src="imageSrc" class="uploaded-image"></image>
				        <view v-else class="image-placeholder">+</view>
				      </view>
				    </view>
				</view>
			</view>
			
			<!--提交-->
			<view class="uni-btn-v">
				<button form-type="submit">Submit</button>
				<button type="default" form-type="reset">Reset</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			openPopup() {
			    this.$refs.popup.open();
			},
			    // 关闭弹出层
			closePopup() {
			    this.$refs.popup.close();
			},
			chooseImage() {
		      wx.chooseImage({
		        count: 3, // 最多可以选择的图片张数
		        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
		        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		        success: (res) => {
		          const tempFilePaths = res.tempFilePaths;
		          this.imageSrc = tempFilePaths[0];
		        }
		      });
		    }
		}
	}
</script>

<style scoped>
	.container {
	  padding: 20px;
	  display: flex;
	}
	
	.image-upload {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	
	.image-box {
	  width: 150rpx;
	  height: 150rpx;
	  border: 6rpx dashed #ccc;
	  border-radius: 16rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  cursor: pointer;
	}
	
	.image-placeholder {
	  font-size: 36rpx;
	  color: #ccc;
	}
	
	.uploaded-image {
	  width: 100%;
	  height: 100%;
	  border-radius: 8rpx;
	}
	.fun2{
		display: flex;
		height: 200rpx;
		width: 680rpx;
		background-color: #fff;
		margin-top: 20rpx;
		margin-left: 40rpx;
		border-radius: 30rpx;
	}
	.PopClass{
		width: 600rpx;
		height: 300rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}
	.image-icon1{
		width: 70rpx;
		height: 50rpx;
	}
	.image-icon2{
		width: 70rpx;
		height: 50rpx;
	}
	.fun1{
		height: 270rpx;
		width: 680rpx;
		background-color: #fff;
		margin-left: 40rpx;
		border-radius: 30rpx;
	}
</style>
