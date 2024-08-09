<template>
    <view class="welcome_title">
        欢迎登录名品伴学（{{role}}）
    </view>
    <view class="input_field">
        <up-input placeholder="请输入手机号" border="bottom" digit clearable v-model="mobile"></up-input>
    </view>
    <view class="input_field">
        <up-input placeholder="请输入密码" border="bottom" password clearable v-model="password"></up-input>
    </view>
    <view class="forget_password">
        <text class="text">忘记密码</text>
    </view>
    <view class="upbutton">
        <up-button type="primary" text="登录" shape="circle" :disabled="isButtonDisabled" @click="handleLogin"></up-button>
    </view>
    <view class="read_protocol">
        <label class="label_protocol">
            <up-checkbox-group>
                <up-checkbox name="agree" usedAlone v-model:checked="agreed" shape="circle"></up-checkbox>
            </up-checkbox-group>
            <text class="protocol">我已阅读并同意</text>
            <text class="protocol protocol_two" @click="showProtocolModal">《用户协议》和《隐私协议》</text>
        </label>
    </view>
</template>

<script>
export default {
    data() {
        return {
            role: '',       // 存储用户角色
            mobile: '',     // 存储手机号
            password: '',   // 存储密码
            agreed: false   // 存储复选框状态
        };
    },
    computed: {
        // 计算属性用来判断按钮是否应禁用
        isButtonDisabled() {
            return !(this.mobile && this.password && this.agreed);
        }
    },
    methods: {
        showProtocolModal() {
            uni.showModal({
                title: '用户协议与隐私协议',
                content: "这里是《用户协议》和《隐私协议》的详细内容",
                showCancel: false,
                confirmText: '确定'
            });
        },
        handleLogin() {
            // const mobileRegex = /^1[3-9]\d{9}$/;
            // if (!mobileRegex.test(this.mobile)) {
            //     uni.showToast({
            //         title: '请输入正确的手机号',
            //         icon: 'none'
            //     });
            //     return;
            // }

            // 执行登录逻辑
            uni.request({
                url: 'http://119.45.239.3:8080/login', // 替换为你的登录接口地址
                method: 'POST',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 设置请求头
                },
                data: {
                    phone: this.mobile,
                    password: this.password
                },
                success: (res) => {
                    if (res.data.code === 1) {
                        uni.showToast({
                            title: '登录成功',
                            icon: 'success'
                        });
                        
                        // 登录成功后跳转页面
                        switch (this.role) {
                            case '校长':
                                uni.switchTab({
                                    url: '/pages/index/index'
                                });
                                break;
                            case '老师':
                                uni.navigateTo({
                                    url: '/pages/tindex/tindex' // 教师界面
                                });
                                break;
                            case '家长':
                                uni.navigateTo({
                                    url: '/pages/sindex/sindex' // 学生界面
                                });
                                break;
                            default:
                                uni.switchTab({
                                    url: '/pages/index/index'
                                });
                                break;
                        }
                    } else {
                        uni.showToast({
                            title: res.data.message || '登录失败',
                            icon: 'none'
                        });
                    }
                },
                fail: (err) => {
                    uni.showToast({
                        title: '请求失败，请检查网络',
                        icon: 'none'
                    });
                    console.error(err);
                }
            });
        }
    },
    onLoad(options) {
        console.log(options);
        // 在这里接收 navigateTo 跳转时传递的参数
        this.role = options.role || '未知角色';
    }
};
</script>

<style scoped>
.welcome_title {
    font-size: 35rpx;
    font-weight: bold;
    margin-top: 15%;
    margin-left: 2%;
}

.input_field {
    width: 90% !important;
    margin-top: 5%;
    margin-left: 5%;
    text-align: right;
}

.input_field:nth-of-type(2) {
    margin-top: 5% !important;
}

.text {
    color: #ededef;
}

.upbutton {
    width: 90% !important;
    margin-top: 5%;
    margin-left: 5%;
}

/* forget_password */
.forget_password {
    width: 90% !important;
    margin-top: 5%;
    margin-left: 5%;
    display: flex; /* 设置flex布局 */
    justify-content: flex-end; /* 水平居右 */
}

/* read_protocol */
.read_protocol {
    width: 86% !important;
    margin-top: 5%;
    margin-left: 7%;
    display: flex; /* 设置flex布局 */
    justify-content: center; /* 水平居中 */
}

.label_protocol {
    display: flex; /* 使label内部的元素也使用flex布局 */
    align-items: center; /* 垂直居中复选框和文本 */
}

.uni-checkbox-input {
    border-radius: 50% !important;
}

.protocol {
    font-size: 1.8%;
}

.protocol_two {
    color: #3c9cff;
}
</style>
