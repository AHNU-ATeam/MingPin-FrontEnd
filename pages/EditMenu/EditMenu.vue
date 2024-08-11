<template>
	<view>
		<view>
			<input v-model="newDishType" placeholder="输入菜品名称" />
			<input v-model="newDishImage" placeholder="输入菜品图片路径" />
			<button @click="addDish">添加菜品</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newDishType: '',
				newDishImage: ''
			};
		},
		methods: {
			addDish() {
				if (this.newDishType && this.newDishImage) {
					const newDish = {
						type: this.newDishType,
						image: this.newDishImage
					};
					getApp().globalData.dishes.push(newDish);
					uni.showToast({
						title: '菜品添加成功',
						icon: 'success'
					});
					uni.navigateBack();  // 返回到上一个页面
				} else {
					uni.showToast({
						title: '请填写完整信息',
						icon: 'none'
					});
				}
			}
		}
	};
</script>
