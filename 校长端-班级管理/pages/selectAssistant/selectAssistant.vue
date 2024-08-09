<template>
  <view class="select-assistant">
    <checkbox-group class="checkbox-group" @change="updateSelection">
      <view v-for="(assistant, index) in assistants" :key="index">
        <view class="checkbox-item" @click="handleAssistantClick(assistant.id)">
          <checkbox :value="assistant.id.toString()" 
                    :disabled="assistant.id.toString() === selectedTeacherId"
                    :checked="selectedAssistants.includes(assistant.id.toString())" />
          <view class="assistant">
            <image :src="assistant.avatar" class="avatar-img" />
            <view class="info">
              <text class="name">{{ assistant.name }}</text>
              <text class="details">{{ assistant.details }}</text>
            </view>
          </view>
        </view>
        <view v-if="index < assistants.length - 1" class="dashed-line"></view>
      </view>
    </checkbox-group>
    <view class="margin-bottom"></view><!-- 防导航栏遮挡 -->
    <view class="footer-nav">
      <button @click="confirmSelection">确认</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedAssistants: [],
      selectedTeacherId: '', // 存储选择的老师ID
      assistants: [
        { id: 1, name: '白宝山', details: '日托班x1、晚托班x2', avatar: '../../static/女老师.png' },
        { id: 2, name: '刘建国', details: '午托班x1', avatar: '../../static/男老师.png' },
        { id: 3, name: '杨晓丽', details: '晚托班x2', avatar: '../../static/女老师.png' }
      ]
    };
  },
  mounted() {
    this.selectedTeacherId = getApp().globalData.selectedTeacherId; // 获取全局变量中存储的老师ID
  },
  methods: {
    updateSelection(e) {
      this.selectedAssistants = e.detail.value;
    },
    handleAssistantClick(assistantId) {
      if (assistantId.toString() === this.selectedTeacherId) {
        uni.showToast({
          title: '教师和助教不能为同一人',
          icon: 'none'
        });
      }
    },
    confirmSelection() {
      if (this.selectedAssistants.length > 0) {
        const selectedNames = this.selectedAssistants.map(id => {
          const assistant = this.assistants.find(assistant => assistant.id.toString() === id);
          return assistant ? assistant.name : '';
        }).join(', ');
        getApp().globalData.selectedAssistants = selectedNames;
        console.log('Selected assistants:', selectedNames);
        uni.navigateBack();
      } else {
        console.log('No assistants selected.');
        uni.navigateBack();
      }
    }
  }
};
</script>


<style scoped>
.select-assistant {
  padding: 20px;
}

.checkbox-group {
  margin-bottom: 20px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.checkbox {
  margin-right: 10px;
}

.assistant {
  display: flex;
  flex-direction: row;
}

.avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.info {
  flex-grow: 1;
  margin-left: 10px;
}

.name, .details {
  padding: 5px;
  display: block;
}

.name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.details {
  font-size: 14px;
  color: #666;
}

.dashed-line {
  border-bottom: 1px dashed #ccc;
  margin: 10px 0;
  width: 100%;
}

.footer-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  text-align: center;
}

.footer-nav button {
  margin: 15px;
  background-color: #FFA500;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 0px;
  font-size: 16px;
  font-weight: bold;
}
</style>
