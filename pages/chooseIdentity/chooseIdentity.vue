<template>
	<view class="container">
		<view class="title">
			<text class="title_one">欢迎来到名品伴学</text>
			<text class="title_two">请选择你的身份</text>
		</view>
		<view class="box_log">
			<view class="box_parent box_button" @click="navigateToLog('家长')">
				<view class="box_title">
					<text class="box_title_one">我是家长</text>
					<text class="box_title_two">Parent</text>
				</view>
				<text class="iconfont icon-jiachang"></text>
			</view>
			<view class="box_teacher box_button" @click="navigateToLog('老师')">
				<view class="box_title">
					<text class="box_title_one">我是老师</text>
					<text class="box_title_two">Teacher</text>
				</view>
				<text class="iconfont icon-jiaoshizhongxin"></text>
			</view>
			<view class="box_headmaster box_button" @click="navigateToLog('校长')">
				<view class="box_title">
					<text class="box_title_one">我是校长</text>
					<text class="box_title_two">Headmaster</text>
				</view>
				<text class="iconfont icon-xiaochangbangonghui"></text>
			</view>
		</view>
	</view>
</template>

<script setup>
	const navigateToLog = (role) => {
		console.log(role);
		uni.navigateTo({
			url: `/pages/login/login?role=${role}`
		});
	};
</script>

<style scoped>
	/* 保持现有样式不变 */
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		height: 100vh;
	}

	.title {
		margin-top: 16vh;
		text-align: center;
		height: 16vh;
	}

	.title_one,
	.title_two {
		display: block;
		width: 100%;
	}

	.title_one {
		font-size: 42rpx;
		font-weight: bold;
		letter-spacing: 5rpx;
	}

	.title_two {
		margin-top: 20rpx;
	}

	.box_log {
		width: 100%;
		height: 80vh;
	}

	.box_button {
		width: 80%;
		height: 20%;
		background-color: #aaaaff;
		border-radius: 15rpx;
		margin-top: 35rpx;
		margin-left: 10%;
		position: relative;
	}

	.box_title {
		width: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		left: 5%;
	}

	.box_title_one {
		font-size: 30rpx;
		font-weight: bold;
		letter-spacing: 5rpx;
	}

	.box_title_two {
		color: #cccccc;
	}

	.box_parent {
		background-color: #d3f2f8;
	}

	.box_teacher {
		background-color: #ffecd0;
	}

	.box_headmaster {
		background-color: #d3d3ff;
	}

	@font-face {
		font-family: "iconfont";
		src: url('//at.alicdn.com/t/c/font_4643088_d4fc30sw4tq.woff2?t=1722785516196') format('woff2'),
			url('//at.alicdn.com/t/c/font_4643088_d4fc30sw4tq.woff?t=1722785516196') format('woff'),
			url('//at.alicdn.com/t/c/font_4643088_d4fc30sw4tq.ttf?t=1722785516196') format('truetype');
	}

	.iconfont {
		display: inline-block;
		font-family: "iconfont" !important;
		font-size: 10vh;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 7%;
	}

	.icon-jiaoshizhongxin:before {
		content: "\e67b";
		color: #fad393;
	}

	.icon-jiachang:before {
		content: "\e614";
		color: #6fcce3;
	}

	.icon-xiaochangbangonghui:before {
		content: "\e778";
		color: #aa55ff;
	}
</style>