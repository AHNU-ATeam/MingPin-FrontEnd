<template>
    <view style="background-color: #fff;">
        <!-- 导航栏 -->
        <view class="navbar">
            <image class="back-button" src="/static/DailyRecipe/返回.png" @tap="goBack"></image>
            <view class="uni-list">
                <view class="uni-list-cell">
                    <view class="uni-list-cell-db">
                        <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
                            <view class="uni-input" style="padding-left: 230rpx;padding-top: 15rpx;color: orange;">
                                {{ date }}
                            </view>
                        </picker>
                    </view>
                </view>
            </view>
        </view>

        <!-- 星期选择 -->
        <view class="day">
            <!-- 左箭头，点击减少日期 -->
            <image src="/static/DailyRecipe/左箭头.png" class="image" @click="changeDate(-1)"></image>

            <!-- 显示星期几 -->
            <view :class="['text_1', { 'select-with-underline': chineseWeekday === 1 }]">周一</view>
            <view :class="['text_1', { 'select-with-underline': chineseWeekday === 2 }]">周二</view>
            <view :class="['text_1', { 'select-with-underline': chineseWeekday === 3 }]">周三</view>
            <view :class="['text_1', { 'select-with-underline': chineseWeekday === 4 }]">周四</view>
            <view :class="['text_1', { 'select-with-underline': chineseWeekday === 5 }]">周五</view>
            <view :class="['text_1', { 'select-with-underline': chineseWeekday === 6 }]">周六</view>
            <view :class="['text_1', { 'select-with-underline': chineseWeekday === 7 }]">周日</view>

            <!-- 右箭头，点击增加日期 -->
            <image src="/static/DailyRecipe/右箭头.png" class="image" @click="changeDate(1)" style="padding-left: 40rpx;"></image>
        </view>

        <!-- 早午晚饭的选择 -->
        <view class="timeday">
            <view :class="['noon', { 'selected': type === 1000 }]" @click="type = 1000">
                <image src="../../static/DailyRecipe/sun太阳.png" mode="aspectFit" class="image_icon"></image>
                <view class="">午</view>
            </view>
            <view :class="['night', { 'selected': type === 2000 }]" @click="type = 2000">
                <image src="../../static/DailyRecipe/月亮-fill.png" mode="aspectFit" class="image_icon"></image>
                <view class="">晚</view>
            </view>
            <view :class="['mon', { 'selected': type === 3000 }]" @click="type = 3000">
                <image src="../../static/DailyRecipe/太阳落山2.png" mode="aspectFit" class="image_icon"></image>
                <view class="">早</view>
            </view>
        </view>

        <!--午饭-->
        <view v-if="type==1000">
            <image src="../../static/DailyRecipe/餐饭.png" mode="scaleToFill" class="image_noon_recipe"></image>
            <button type="primary" size="mini" style="margin-left: 300rpx;" @click="goto('/pages/RecipePublishnoon/RecipePublishnoon')">发布午餐</button>
            <image src="../../static/DailyRecipe/右箭头(2).png" mode="" style="height: 80rpx;width: 80rpx;margin-left: 650rpx;" @click="showCalendar"></image>
            <image @click="goto('/pages/UsingHelp/UsingHelp')" src="../../static/DailyRecipe/使用帮助.png" mode="" style="height: 80rpx;width: 80rpx;margin-left: 650rpx;"></image>
            <view @click="goto('/pages/MenuControl/MenuControl')" style="margin-left: 580rpx;padding-top: 200rpx;color:orange;">菜单管理></view>
            
            <!-- 显示提交的数据 -->
            <view v-if="submittedData">
                <text>星期: {{ submittedData.weekday }}</text>
                <text>午餐: {{ submittedData.breakfast }}</text>
                <text>午点: {{ submittedData.snack }}</text>
            </view>
        </view>

        <!--晚饭-->
        <view v-if="type==2000">
            <image src="../../static/DailyRecipe/餐饭.png" mode="scaleToFill" class="image_noon_recipe"></image>
            <button type="primary" size="mini" style="margin-left: 300rpx;" @click="goto('/pages/RecipePublishdinner/RecipePublishdinner')">发布晚餐</button>
            <image src="../../static/DailyRecipe/右箭头(2).png" mode="" style="height: 80rpx;width: 80rpx;margin-left: 650rpx;" @click="showCalendar"></image>
            <image @click="goto('/pages/UsingHelp/UsingHelp')" src="../../static/DailyRecipe/使用帮助.png" mode="" style="height: 80rpx;width: 80rpx;margin-left: 650rpx;"></image>
            <view @click="goto('/pages/MenuControl/MenuControl')" style="margin-left: 580rpx;padding-top: 200rpx;color:orange;">菜单管理></view>
            
            <!-- 显示提交的数据 -->
            <view v-if="submittedData">
                <text>星期: {{ submittedData.weekday }}</text>
                <text>晚餐: {{ submittedData.breakfast }}</text>
                <text>晚点: {{ submittedData.snack }}</text>
            </view>
        </view>

        <!--早饭-->
        <view v-if="type==3000">
            <image src="../../static/DailyRecipe/餐饭.png" mode="scaleToFill" class="image_noon_recipe"></image>
            <button type="primary" size="mini" style="margin-left: 300rpx;" @click="goto('/pages/RecipePublishmon/RecipePublishmon')">发布早餐</button>
            <image src="../../static/DailyRecipe/右箭头(2).png" mode="" style="height: 80rpx;width: 80rpx;margin-left: 650rpx;" @click="showCalendar"></image>
            <image @click="goto('/pages/UsingHelp/UsingHelp')" src="../../static/DailyRecipe/使用帮助.png" mode="" style="height: 80rpx;width: 80rpx;margin-left: 650rpx;"></image>
            <view @click="goto('/pages/MenuControl/MenuControl')" style="margin-left: 580rpx;padding-top: 200rpx;color:orange;">菜单管理></view>
            
            <!-- 显示提交的数据 -->
            <view v-if="submittedData">
                <text>星期: {{ submittedData.weekday }}</text>
                <text>早餐: {{ submittedData.breakfast }}</text>
                <text>早点: {{ submittedData.snack }}</text>
            </view>
        </view>

        <!-- 日历弹窗 -->
        <uni-popup ref="popup" type="bottom" :mask="true" :show="showCalendarPopup">
            <view>
                <up-calendar 
                    startText="开始"
                    endText="结束"
                    confirmDisabledText="请选择布置餐饮日期"
                    :formatter="formatter"
                    :show="showCalendarPopup" 
                    :mode="calendarMode" 
                    @confirm="confirm"
                    ref="calendar"
                >
                </up-calendar>
            </view>
        </uni-popup>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import { onReady } from '@dcloudio/uni-app';

const show = ref(true);
const mode = ref('range');

const confirm = (e) => {
  console.log(e);
};

const formatter = (day) => {
  const d = new Date();
  let month = d.getMonth() + 1;
  const date = d.getDate();
  if (day.month == month && day.day == date + 3) {
    day.bottomInfo = '有优惠';
    day.dot = true;
  }
  return day;
};

const onReady = () => {
  // 如果需要兼容微信小程序的话，需要用此写法
  $refs.calendar.setFormatter(formatter);
};
export default {
    setup() {
        const type = ref(1000);
        const date = ref(getFormattedDate(new Date()));
        const selectedDate = ref(date.value);
        const chineseWeekday = ref(getChineseWeekday(date.value));
        const startDate = ref(date.value);
        const endDate = ref(getFormattedDate(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000))); // two weeks later
        const submittedData = ref(null);
        const showCalendarPopup = ref(false);

        function getFormattedDate(date) {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        function getChineseWeekday(dateStr) {
            const date = new Date(dateStr);
            const weekday = date.getDay(); // 0 (Sunday) to 6 (Saturday)
            return weekday === 0 ? 7 : weekday; // Adjust to make Sunday 7
        }

        function bindDateChange(event) {
            date.value = event.target.value;
            chineseWeekday.value = getChineseWeekday(date.value);
        }

        function changeDate(offset) {
            const newDate = new Date(date.value);
            newDate.setDate(newDate.getDate() + offset);
            date.value = getFormattedDate(newDate);
            chineseWeekday.value = getChineseWeekday(date.value);
        }

        function showCalendar() {
            showCalendarPopup.value = true;
        }

        function confirm(selectedDates) {
            // Here, selectedDates will have both start and end if in range mode
            if (calendarMode.value === 'range') {
                const [start, end] = selectedDates;
                submittedData.value = { start, end };
            } else {
                submittedData.value = { start: selectedDates[0] };
            }
            showCalendarPopup.value = false;
        }

        function goto(page) {
            uni.navigateTo({
                url: page
            });
        }

        return {
            type,
            date,
            selectedDate,
            chineseWeekday,
            startDate,
            endDate,
            submittedData,
            showCalendarPopup,
            bindDateChange,
            changeDate,
            showCalendar,
            confirm,
            goto
        };
    }
};
</script>

<style scoped>
	.title{
		color: $u-primary;
		text-align: center;
		padding: 20rpx 0 0 0;
	}
	.confirm-button {
		width: 100%;
		background-color: orange;
		color: white;
		padding: 10px;
		text-align: center;
		border-radius: 10px;
		margin-top: 20px;
	}

    .timeday > view {
        padding: 10px;
        margin: 5px;
    }
    .selected{
        border: 2px solid orange;
        border-radius: 10px;
        padding: 5px;
        background-color: #fff5e1;
    }
    .select-with-underline {
        text-decoration: underline;
        color: orange;
    }
    .text_1 {
        padding-left: 40rpx;
        font-size: 25rpx;
    }
    .image_mon_recipe {
        height: 300rpx;
        width: 450rpx;
        margin-top: 200rpx;
        margin-left: 170rpx;
    }
    .image_noon_recipe {
        height: 300rpx;
        width: 450rpx;
        margin-top: 200rpx;
        margin-left: 170rpx;
    }
    .mon, .noon, .night {
        display: flex;
        margin-left: 40rpx;
    }
    .image_icon {
        height: 40rpx;
        width: 60rpx;
    }
    .timeday {
        display: flex;
        margin-top: 25px;
    }
    .image {
        width: 50rpx;
        height: 50rpx;
    }
    .day {
        display: flex;
    }
    .navbar {
        display: flex;
        align-items: center;
        background-color: #fff;
        height: 180rpx;
    }
    .back-button {
        width: 24px;
        height: 24px;
    }
    .calendar-container {
        padding: 20px;
    }
    .calendar-view {
        background-color: #f8f8f8;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    .confirm-button {
        width: 100%;
        background-color: orange;
        color: white;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
    }
</style>
