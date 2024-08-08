<template>
	<view class="container">
		<!-- 头像上传部分 -->
		<view class="attendance_avatar">
			<view class="attendance_img">
				<text class="attendance_title">考勤头像</text>
				<view class="attendance_upload">
					<up-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
						:maxCount="1" width="7vh" height="7vh">
						<image v-if="fileList1.length > 0" :src="fileList1[0].url" mode="aspectFill"
							style="width: 7vh; height: 7vh; border-radius: 50%;"></image>
						<image v-else src="https://c-ssl.duitang.com/uploads/blog/202207/17/20220717203506_9f80b.jpg"
							mode="aspectFill" style="width: 7vh; height: 7vh; border-radius: 50%;"></image>
					</up-upload>
				</view>
			</view>
			<view class="upload-section">
				<view class="upload-instructions">
					<text>注：用于刷脸签到，请上传员工近距离正面、无遮挡的清晰头像。</text>
				</view>
			</view>
		</view>
		<!-- 表单部分 -->
		<view class="form">
			<form @submit="save">
				<view class="form-item">
					<text class="form-label">姓名<text style="color: red;">*</text></text>
					<input v-model="name" type="text" placeholder="请输入姓名" class="form-input" required />
				</view>
				<view class="form-item">
					<text class="form-label">性别<text style="color: red;">*</text></text>
					<view class="radio-group">
						<up-radio-group v-model="gender" placement="row" @change="groupChange" class="form-input">
							<up-radio :customStyle="{marginBottom: '8px'}" v-for="(item, index) in sex" :key="index"
								:label="item.name" :name="item.name" @change="radioChange" activeColor="#FF9933">
							</up-radio>
						</up-radio-group>
					</view>
				</view>
				<view class="form-item">
					<text class="form-label">手机号<text style="color: red;">*</text></text>
					<input v-model="phone" type="number" placeholder="请输入手机号" class="form-input" required />
				</view>
				<view class="form-item">
					<text class="form-label">身份证号<text style="color: red;">*</text></text>
					<input v-model="idCard" type="text" placeholder="请输入身份证号" class="form-input" />
				</view>
				<view class="form-item">
					<text class="form-label">默认登录密码</text>
					<input type="text" value="123456" class="form-input" disabled />
				</view>
				<view class="from_duties">
					<text>职位</text>
				</view>
				<view class="form_role">
					<text class="fromrole" :style="{
              backgroundColor: selectedRole === 'teacher' ? '#FF8D1B' : '#F2F2F2',
              color: selectedRole === 'teacher' ? '#FFFFFF' : '#888687'
            }" @click="selectRole('teacher')">老师</text>
					<text class="fromrole" :style="{
              backgroundColor: selectedRole === 'executive' ? '#FF8D1B' : '#F2F2F2',
              color: selectedRole === 'executive' ? '#FFFFFF' : '#888687'
            }" @click="selectRole('executive')">执行校长</text>
				</view>
				<view class="limit_setting">
					<text>权限设置</text>
				</view>
				<view class="type_authority" v-if="selectedRole === 'teacher'">
					<label v-for="(auth, index) in permissions" :key="index">
						{{ auth.name }}
						<switch :checked="auth.enabled" @change="(event) => onSwitchChange(index, event)" />
					</label>
				</view>
				<view v-else>
					<label>
						执行校长拥有该校区全部管理权限。
					</label>
				</view>
				<view class="bottom_padding"></view>
				<view class="add_employees">
					<view class="add_buttom">
						<up-button type="primary" text="保存" shape="circle" color="#FF9933" @click="save"></up-button>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		reactive
	} from 'vue';
	import {
		useEmployeeStore
	} from '/store/employees.js'; // Adjust path as needed
	const sex = reactive([{
			name: '男',
			disabled: false,
		},
		{
			name: '女',
			disabled: false,
		}
	]);

	const store = useEmployeeStore();
	const fileList1 = ref([]);
	const name = ref('');
	const position = ref('老师');
	const phone = ref('');
	const idCard = ref('');
	const gender = ref('男'); // This now binds to the radio group directly
	const selectedRole = ref('teacher');
	const classes = ref([]);
	const permissions = ref([{
			name: '员工管理',
			enabled: false
		},
		{
			name: '班级管理',
			enabled: false
		},
		{
			name: '学员管理',
			enabled: false
		},
		{
			name: '班级考勤管理',
			enabled: false
		},
		{
			name: '收支账单管理',
			enabled: false
		},
		{
			name: '学情反馈模板管理',
			enabled: false
		},
		{
			name: '招生宝管理',
			enabled: false
		},
		{
			name: 'Banner管理',
			enabled: false
		},
		{
			name: '通知公告管理',
			enabled: false
		},
		{
			name: '星级管理',
			enabled: false
		},
	]);
	onMounted(() => {
		const pages = getCurrentPages(); // 获取页面栈
		const currentPage = pages[pages.length - 1]; // 当前页面
		const query = currentPage.options; // 获取页面的 query 参数
		const employeeId = query.id;

		if (employeeId) {
			console.log(employeeId);
			const employee = store.getEmployeeById(employeeId);
			console.log(employee);
			if (employee) {
				name.value = employee.name;
				console.log(name.value);
				phone.value = employee.phone;

				idCard.value = employee.idCard;
				gender.value = employee.gender; // 直接设置gender变量的值

				position.value = employee.position;
				fileList1.value = [{
					url: employee.avatar
				}];
				classes.value = employee.classes; // 获取 classes
				console.log(classes);
				if (employee.position === "执行校长") {
					selectedRole.value = "executive";
				} else {
					selectedRole.value = "teacher";
					permissions.value = permissions.value.map((permission) => ({
						...permission,
						enabled: employee.authorizations.includes(permission.name),
					}));
				}
				console.log(permissions);
			}
		}
	});


	const save = () => {
		const employeeId = getCurrentPages().pop().options.id; // 从页面参数中获取 ID
		const updatedEmployee = {
			id: Number(employeeId), // 确保 ID 是数字
			name: name.value,
			phone: phone.value,
			idCard: idCard.value,
			gender: gender.value,
			position: selectedRole.value === 'executive' ? '执行校长' : '老师',

			avatar: fileList1.value[0]?.url || 'https://via.placeholder.com/150',
			classes: classes.value,
			authorizations: selectedRole.value === 'teacher' ? permissions.value.filter(p => p.enabled).map(p => p
				.name) : ["执行校长拥有该校区全部管理权限。"]
		};
		console.log(fileList1.value[0]?.url);

		store.updateEmployee(updatedEmployee);
		uni.navigateBack();
	};

	const selectRole = (role) => {
		selectedRole.value = role;
	};

	const onGenderChange = (event) => {
		gender.value = event.detail.value;
	};

	const onSwitchChange = (index, event) => {
		permissions.value[index].enabled = event.detail.value;
	};

	// 删除图片
	const deletePic = (event) => {
		console.log(event);
		fileList1.value.splice(event.index, 1);
	};

	// 新增图片
	const afterRead = (event) => {
		console.log("event", event);
		let lists = [].concat(event.file);
		let fileListLen = fileList1.value.length;
		console.log("fileListLen", fileListLen);
		lists.map((item) => {
			fileList1.value.push({
				...item,
				status: 'uploading',
				message: '上传中',
			});
		});
		console.log("igegergfffh")
		console.log(fileList1);
		for (let i = 0; i < lists.length; i++) {
			let item = fileList1.value[fileListLen];
			fileList1.value.splice(fileListLen, 1, {
				...item,
				status: 'success',
				message: '',
				url: lists[0].url,
			});
			fileListLen++;
			console.log(fileListLen);
		}
	};
</script>
<style scoped>
	.container {
		padding-top: 20px;
		background-color: #f5f5f5;
	}

	.attendance_avatar {
		padding: 20rpx;
		border-radius: 10rpx;
		width: 750rpx;
		height: 15vh;
		border-bottom: #e8e8e8 1px solid;
		box-sizing: border-box;
		background-color: #ffffff;
	}

	.attendance_img {
		width: 100%;
		height: 60%;
		position: relative;
		box-sizing: border-box;
	}

	.attendance_title {
		display: inline-block;
		height: 100%;
		font-size: 30rpx;
		position: absolute;
		left: 3%;
		line-height: 9vh;
	}

	.attendance_upload {
		position: absolute;
		right: 7%;
		top: 50%;
		margin-top: -3.5vh;
		box-sizing: border-box;
	}

	.upload-section {
		padding: 0 !important;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.upload-instructions {
		padding: 0 !important;
		display: block;
		width: 94%;
		height: 3vh;
		margin-top: 3%;
		margin-left: 3%;
		color: #dba364;
		font-size: 20rpx;
		background-color: #fff1e6;
		border-radius: 10rpx;
		line-height: 3vh;
	}

	/* form */
	.form {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10px;
	}

	.radio-group {
		flex: 1;
		text-align: right;
		margin-left: 10px;
	}

	.form-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
		border-bottom: 1px solid #e8e8e8;
		position: relative;
		width: 100%;
	}

	.form-label {
		font-size: 16px;
	}

	.form-input {
		flex: 1;
		text-align: right;
		margin-left: 10px;
	}

	.from_duties {
		height: 5vh;
		line-height: 5vh;
	}

	.from_duties text {
		font-size: 32rpx;
		font-weight: bold;
	}

	button[type='primary'] {
		display: block;
		width: 100%;
		padding: 10px;
		background-color: #ff9900;
		color: #fff;
		text-align: center;
		border: none;
		border-radius: 5px;
	}

	.form_role {
		margin-top: 2%;
		background-color: white;
		width: 100%;
		height: 8vh;
	}

	.fromrole {
		display: inline-block;
		width: 22%;
		height: 6vh;
		line-height: 6vh;
		text-align: center;
		margin-top: 1vh;
		margin-right: 6%;
		border-radius: 5rpx;
		color: white;
		cursor: pointer;
	}

	.limit_setting {
		margin-top: 2%;
		height: 5vh;
		line-height: 5vh;
	}

	.limit_setting text {
		font-size: 32rpx;
		color: #ababab;
	}

	label {
		width: 100%;
		height: 8vh;
		line-height: 8vh;
		border-bottom: 1px solid #efefef;
		display: block;
		position: relative;
	}

	switch {
		position: absolute;
		right: 0;
		top: 0;
	}

	.add_employees {
		width: 100%;
		height: 10vh;
		background-color: white;
		position: fixed;
		bottom: 0;
	}

	.add_buttom {
		width: 650rpx;
		height: 8vh;
		margin-top: 1vh;
		margin-left: 50rpx;
	}

	.bottom_padding {
		height: 12vh;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	label {
		font-size: 16px;
	}

	input,
	select,
	button {
		padding: 10px;
		font-size: 14px;
	}

	button {
		background-color: #ff9933;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	.radio-group {
		position: absolute;
		right: 0;
	}
</style>
