<template>
	<view class="container">
		<view class="personal_t">
			<text class="personal_title">个人信息</text>
		</view>
		<view class="picture_information">
			<view class="information_image">
				<image :src="avatar" class="information_img" mode="aspectFill"></image>
				<view class="information_nsd">
					<text class="information_name">{{ name }}&nbsp;&nbsp;</text>
					<text class="information_sex">({{ gender }})&nbsp;&nbsp;</text>
					<text class="information_duties">{{ position }}</text>
				</view>
			</view>
		</view>
		<view class="information_phone">
			<text>手机号码</text>
			<text class="information_ph">{{ phone }}</text>
		</view>
		<view class="information_idcard">
			<text>身份证号</text>
			<text class="information_id">{{ idCard }}</text>
		</view>
		<view class="information_shift">
			<text class="info_shift">带班信息</text>
		</view>
		<view class="information_managedclass">
			<!-- 条件渲染，如果 classes 为空则显示“无” -->
			<view v-if="classes.length === 0" class="no_classes">
				<text>无</text>
			</view>
			<view v-else>
				<view v-for="(cls, index) in classes" :key="index" class="information_class">
					<text class="class_grade">&nbsp;&nbsp;{{ cls.grade }}&nbsp;&nbsp;</text>
					<text class="class_type">{{ cls.type }}</text>
					<text class="class_number">{{ cls.number }}人&nbsp;&nbsp;</text>
				</view>
			</view>
		</view>
		<view class="information_authorize">
			<text class="info_authorize">授权</text>
		</view>
		<view class="information_authorizedcategory">
			<view v-for="(auth, index) in authorizations" :key="index" class="info_authorizedcategory">
				<text>{{ auth }}</text>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				avatar: '',
				name: '',
				gender: '',
				position: '',
				phone: '',
				idCard: '',
				classes: [],
				authorizations: [],
			};
		},
		onLoad(options) {
			this.avatar = options.avatar;
			console.log(this.avatar);
			this.name = options.name;
			this.gender = options.gender;
			this.position = options.position;
			this.phone = options.phone;
			this.idCard = options.idCard;
			this.classes = JSON.parse(decodeURIComponent(options.classes));
			this.authorizations = JSON.parse(decodeURIComponent(options.authorizations));

		}
	}
</script>



<style>
	.container {
		background-color: #f5f5f5;
		height: 100vh;

	}

	.personal_title {
		display: block;
		margin-left: 3%;
		font-size: 35rpx;
		color: #000;
		height: 5vh;
		width: 100vw;
		line-height: 5vh;
		font-weight: bold;

	}

	/* picture_information */
	.picture_information {
		background-color: #f2f2f2;
		height: 10vh;
		margin-top: 2vh;
		margin-left: 3%;
	}

	.information_image {
		width: 750rpx;
		height: 9vh;
		position: relative;

	}

	.information_img {
		width: 9vh;
		height: 9vh;
		border-radius: 50%;
	}

	.information_nsd {
		position: absolute;

		left: 10vh;
		top: 0vh;
		margin-top: 4.5vh;
		margin-left: 5%;
		transform: translateY(-50%);
	}

	.information_name {

		font-size: 30rpx;

	}

	.information_sex {

		font-size: 30rpx;
		color: gray;

	}

	.information_duties {

		font-size: 30rpx;
		color: red;
		background-color: #F1BFC3;
	}

	/* information_phone */
	.information_phone,
	.information_idcard {
		height: 5vh;
		width: 94vw;
		margin-top: 2vh;
		margin-left: 3vw;
		border-bottom: #e9e9e9 1px solid;
		box-sizing: border-box;
		font-size: 30rpx;
		position: relative;
		background-color: f2f2f2;
	}

	.information_ph,
	.information_id {
		position: absolute;
		right: 0;
	}

	/* information_shift */
	.information_shift,
	.information_authorize {
		height: 5vh;
		width: 100vw;
		margin-left: 3%;
		font-size: 35rpx;
		background-color: #f5f5f5;
		margin-top: 2vh;
		line-height: 5vh;
	}

	.info_shift,
	.info_authorize {
		font-size: 35rpx;
		font-weight: bold;
	}

	/* information_managedclass */
	.information_managedclass,
	information_authorizedcategory {
		width: 100vw;
		background-color: #f2f2f2;
	}

	.information_class {
		width: 94vw;
		height: 8vh;
		margin-left: 3vw;
		margin-top: 2vh;
		border-radius: 8rpx;
		border: 1px solid #e9e9e9;
		line-height: 8vh;
		position: relative;
		box-sizing: border-box;
	}

	.class_grade,
	.class_number,
	.class_type {
		font-size: 30rpx;
	}

	.class_type {
		color: #0D89C9;
		background-color: #E3F5FF;
	}

	.class_number {
		position: absolute;
		right: 0;
		font-weight: bold;
	}

	/* information_authorizedcategory */
	.info_authorizedcategory {
		width: 94vw;
		height: 5vh;
		margin-left: 3vw;
		margin-top: 2vh;
		border-radius: 8rpx;
		border-bottom: 1px solid #e9e9e9;
		line-height: 5vh;
		position: relative;
		box-sizing: border-box;
		background-color: #F2F2F2;
	}
		/* New style for "无" */
		.no_classes {
			width: 94vw;
			height: 8vh;
			margin-left: 3vw;
			margin-top: 2vh;
			line-height: 8vh;
			text-align: center;
			font-size: 30rpx;
			color: gray;
		}
</style>