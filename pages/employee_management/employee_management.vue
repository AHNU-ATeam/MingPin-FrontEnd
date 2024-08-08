<template>
	<view class="container">
		<view>
			<text class="employee_title">共</text>
			<text class="employee_title">{{ employees.length }}</text>
			<text class="employee_title">位员工</text>
			<text class="employee_title">（老兄校区）</text>
		</view>

		<view v-for="employee in employees" :key="employee.id" class="employee_information">
			<view class="information_halfone" @click="go_details(employee)">
				<image :src="employee.avatar" mode="aspectFill" class="employee_img"></image>
				<view class="employee_contact">
					<text class="employee_name">{{ employee.name }}&nbsp;</text>
					<text>&nbsp;</text>
					<text class="employee_duties">{{ employee.position }}</text>
					<view>
						<text class="employee_phone">{{ employee.phone }}</text>
					</view>
				</view>
				<view class="number_shift">
					<text>带班数量：</text>
					<text>{{ employee.classes.length }}</text>
				</view>
			</view>
			<view class="information_halftwo">
				<text class="modify" @click="go_edit(employee)">修改</text>
				<text class="delete" @click="deleteEmployee(employee)">删除</text>
			</view>
		</view>

		<!-- 底部填充 -->
		<view class="bottom_padding"></view>
	</view>
	<view class="add_employees">
		<view class="add_buttom">
			<up-button type="primary" text="+&nbsp;&nbsp;添加员工" shape="circle" color="#FF9933"
				@click="go_newemployees"></up-button>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	import { useEmployeeStore } from '/store/employees.js'; // Adjust path as needed
	const store = useEmployeeStore();
	const employees = ref([]);

	onMounted(() => {
		employees.value = store.employees;
	});

	const deleteEmployee = (employee) => {
		if (employee.classes.length === 0) {
			store.deleteEmployee(employee.id);
			employees.value = store.employees;
		} else {
			uni.showModal({
				title: '注意',
				content: `带班中的${employee.position}不可删除`,
				showCancel: false,
				confirmText: '知道了',
			});
		}
	};

	const go_details = (employee) => {
		uni.navigateTo({
			url: `/pages/personal_information/personal_information?avatar=${employee.avatar}&name=${employee.name}&gender=${employee.gender}&position=${employee.position}&phone=${employee.phone}&idCard=${employee.idCard}&classes=${encodeURIComponent(
	      JSON.stringify(employee.classes)
	    )}&authorizations=${encodeURIComponent(
	      JSON.stringify(employee.authorizations)
	    )}`,
		});
	};

	const go_edit = (employee) => {
		uni.navigateTo({
			url: `/pages/edit_employee/edit_employee?id=${employee.id}`, // Pass employee ID
		});
	};

	const go_newemployees = () => {
		uni.navigateTo({
			url: `/pages/new_employees/new_employees`,
		});
	};
</script>
<style>
	.container {
		width: 94%;
		margin-left: 3%;
		margin-top: 2%;
		background-color: #efefef;
	}

	/* employee_title */
	.employee_title {
		font-size: 35rpx;
	}

	.employee_title:nth-child(2) {
		color: #FF9933;
		padding: 5rpx;
		font-size: 35rpx !important;
	}

	.employee_title:nth-child(4) {
		color: gray;
		padding: 5rpx;
		font-size: 24rpx;
	}

	/* employee_information */
	.information_halfone {
		height: 60%;
		border-bottom: gray 1px dashed;
		box-sizing: border-box;
	}

	.employee_information {
		width: 100%;
		height: 15vh;
		background-color: white;
		margin-top: 2vh;
		border-radius: 10rpx;
		position: relative;
		/* 阴影 */
		box-shadow: 0 0 20rpx #dcdcdc;
	}

	.employee_img {
		height: 80rpx;
		width: 80rpx;
		border-radius: 50%;
		margin-left: 10rpx;
		margin-top: calc((9vh - 80rpx) / 2);
	}

	.employee_contact {
		position: absolute;
		left: 120rpx;
		top: 0rpx;
		height: 80rpx;
		margin-top: calc((9vh - 80rpx) / 2);
	}

	.employee_name {
		display: inline-block;
		font-size: 30rpx;
	}

	.employee_duties {
		display: inline-block;
		color: red;
		background-color: #FDE7E9;
		font-size: 30rpx;
	}

	.employee_phone {
		display: inline-block;
		color: gray;
		font-size: 25rpx;
	}

	.number_shift {
		position: absolute;
		right: 10rpx;
		top: 0rpx;
		font-size: 30rpx;
		margin-top: calc((9vh - 30rpx) / 2);
	}

	/* information_halftwo */
	.information_halftwo {
		height: 40%;
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
	}

	.modify,
	.delete {
		display: inline-block;
		font-size: 30rpx;
		color: #FF9933;
		background-color: white;
		border: 1px solid #FF9933;
		width: 10vh;
		height: 4vh;
		text-align: center;
		line-height: 4vh;
		border-radius: 7rpx;
	}

	.delete {
		position: absolute;
		right: 10rpx;
	}

	.modify {
		position: absolute;
		right: 32rpx;
		margin-right: 10vh;
	}

	/* add_employees */
	.add_employees {
		position: fixed;
		bottom: 2vh;
		right: 20rpx;
	}

	.add_buttom {
		margin-right: 20rpx;
	}

	/* bottom_padding */
	.bottom_padding {
		height: 12vh;
	}
</style>