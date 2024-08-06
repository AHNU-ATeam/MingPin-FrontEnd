<template>
	<view>
		<scroll-view class="container">
			<uni-card is-full :is-shadow="false" >
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
					:interval="interval" :duration="duration">
					<swiper-item>
						<view class="swiper-item "><image src="../../static/swiper/iamge1.jpeg"></image></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item "><image src="../../static/swiper/image2.jpeg"></image></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item "><image src="../../static/swiper/image3.jpeg"></image></view>
					</swiper-item>
				</swiper>
			</uni-card>
    
			<uni-card :is-shadow="false" margin="6px">
				<uni-section title="校区管理" type="line">
					<uni-grid :column="5" :highlight="true" @change="change" :showBorder="false">
						<uni-grid-item v-for="(item, index) in areaManageList" :index="index" :key="index">
							<view class="grid-item-box" style="background-color: #fff;">
								<view :class="item.iconurl"></view>
								<text class="icontext">{{item.text}}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</uni-section>
			</uni-card>
			<uni-card :is-shadow="false" margin="6px">
				<uni-section title="校区信息" type="line">
					<uni-grid :column="3" :highlight="false" :showBorder="false">
						<uni-grid-item v-for="(item, index) in areaInfoList" :index="index" :key="index">
							<view class="grid-item-box school-information"
								style="background-color: #fff; text-align: center;">
								<view class="number" style="font-weight: 700; font-size: 24px;">{{ item.number }}</view>
								<text class="text"
									style="font-weight: 400; font-size: 14px; color: #666;">{{ item.label }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</uni-section>
			</uni-card>

			<uni-card :is-shadow="false" margin="6px">
				<uni-section title="当日学员考勤" type="line"></uni-section>
				<view class="tabs">
					<view v-for="tab in tabs" :key="tab" :class="['tab', { active: activeTab === tab }]"
						@click="selectTab(tab)">
						{{ tab }}
					</view>
				</view>
				<view class="content">
					<view class="circle-container">
						<view class="circle">
							<text class="circle-text">暑假托班</text>
							<text class="circle-number">16人</text>
						</view>
					</view>
					<view class="info">
						<view class="info-item">
							<text class="info-label">签到：</text><text class="info-number green">0人</text>
						</view>
						<view class="info-item">
							<text class="info-label">缺勤：</text><text class="info-number red">16人</text>
						</view>
						<view class="info-item">
							<text class="info-label">请假：</text><text class="info-number">0人</text>
						</view>
					</view>
				</view>
			</uni-card>



			<uni-card :is-shadow="false" margin="6px">
				<uni-section title="当日员工考勤" type="line"></uni-section>
				<view class="card3">
					<view class="card3-left">
						<text class="iconfont icon-yiqiandao signin"></text>
						<text class="attended">已签到：<text class="number">{{attendedpeo}}</text>人</text>
					</view>
					<view class="card3-right">
						<text class="iconfont icon-weiqiandao signin"></text>
						<text class="not-attended">未签到：<text class="number">{{not_attendedpeo}}</text>人</text>
					</view>
				</view>
			</uni-card>


			<uni-card margin="6px">
				<uni-grid :column="5" :highlight="true" @change="change" :showBorder="false">
					<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
						<view class="grid-item-box" style="background-color: #fff;">
							<view :class="item.iconurl"></view>
							<text class="icontext">{{item.text}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</uni-card>



		</scroll-view>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				attendedpeo: 0,
				not_attendedpeo: 12,
				tabs: ['晚托班', '全托班', '午托班', '日托班', '暑假托班'],
				activeTab: '暑假托班',
				areaManageList: [{
						iconurl: 'iconfont icon-jiaoshitongji-01',
						text: '员工信息',
						badge: '0'
					},
					{
						iconurl: 'iconfont icon-banjiguanli-',
						text: '班级管理',
						badge: '1'
					},
					{
						iconurl: 'iconfont icon-yixietubiao-',
						text: '考勤设置',
						badge: '99',
						type: "warning"
					},
					{
						iconurl: 'iconfont icon-renliandaka',
						text: '人脸打卡',
						badge: '2',
						type: "error"
					},
					{
						iconurl: 'iconfont icon-gengduo',
						text: '更多'
					}
				],

				areaInfoList: [{
						number: 13,
						label: '员工'
					},
					{
						number: 22,
						label: '班级'
					},
					{
						number: 59,
						label: '在托学员'
					}
				],

				list: [{
						iconurl: 'iconfont icon-Group-copy',
						text: '带班管理',
						url: ''
					}, {
						iconurl: 'iconfont icon-xueyuanguanli',
						text: '学员管理',
						url: ''
					}, {
						iconurl: 'iconfont icon-banjikaoqin',
						text: '班级考勤',
						url: ''
					}, {
						iconurl: 'iconfont icon-banjixiangce',
						text: '班级相册',
						url: ''
					}, {
						iconurl: 'iconfont icon-banjidongtai',
						text: '班级动态',
						url: ''
					}, {
						iconurl: 'iconfont icon-meirishipu',
						text: '每日食谱',
						url: ''
					}, {
						iconurl: 'iconfont icon-xueqingfankui',
						text: '学情反馈',
						url: ''
					}, {
						iconurl: 'iconfont icon-jifenfafang',
						text: '积分发放',
						url: ''
					}, {
						iconurl: 'iconfont icon-shouzhiguanli',
						text: '收支管理',
						url: ''
					}, {
						iconurl: 'iconfont icon-gengduo1',
						text: '更多',
						url: ''
					},

				]
			}
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				this.list[index].badge && this.list[index].badge++

				uni.showToast({
					title: `点击第${index+1}个宫格`,
					icon: 'none'
				})
			},
			add() {
				if (this.dynamicList.length < 9) {
					this.dynamicList.push({
						url: `/static/c${this.dynamicList.length+1}.png`,
						text: `Grid ${this.dynamicList.length+1}`,
						color: this.dynamicList.length % 2 === 0 ? '#f5f5f5' : "#fff"
					})
				} else {
					uni.showToast({
						title: '最多添加9个',
						icon: 'none'
					});
				}
			},
			del() {
				this.dynamicList.splice(this.dynamicList.length - 1, 1)
			},
			selectTab(tab) {
			      this.activeTab = tab;
			    }
		}
	}
</script>
<style lang="scss">
	@import url('@/static/iconfontstyle.css');

	.container {
		overflow: hidden;
		margin-bottom: 100px;
	}

	.swiper {
		height: 100px;
	}

	.swiper-item {
		display: block;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}

	.card3 {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	.card3-left,
	.card3-right {
		margin-top: -15px;
		padding: 10px;
		background-color: aliceblue;
		display: flex;
		align-items: center;
	}

	.attended .number {
		font-size: 20px;
		font-weight: bold;
		color: green;
	}

	.not-attended .number {
		font-size: 20px;
		font-weight: bold;
		color: red;
	}

	.signin {
		font-size: 18px;
		margin-right: 10px;
	}

	.image {
		width: 25px;
		height: 25px;
	}

	.icontext {
		font-size: 10px;
		border-radius: 2px;
		color: black;

	}


	.example-body {
		/* #ifndef APP-NVUE */
		// display: block;
		/* #endif */
	}


	.grid-item-box {
		height: 50px;
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
.tabs {
  display: flex;
  justify-content: space-around;
 
}

.tab {
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
  font-size: 10px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;  /* Center horizontally */
  align-items: center;      /* Center vertically */
  text-align: center;       /* Center text inside */
  height: 100%;             /* Make sure it takes the full height */
  background-color: gainsboro;
}

.tab.active {
  background-color: orange;
}

	.content {
		display: flex;
		align-items: center;
	}

	.circle-container {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle {
	  width: 100px;  /* Smaller width */
	  height: 100px; /* Smaller height */
	  border-radius: 50%;
	  border: 8px solid #f66; /* Smaller border */
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  position: relative;
	}
	
	.circle::before {
	  content: '';
	  width: 100%;
	  height: 100%;
	  border-radius: 50%;
	  border: 8px solid #f99; /* Smaller border */
	  position: absolute;
	  top: -8px; /* Adjust according to new border size */
	  left: -8px; /* Adjust according to new border size */
	  z-index: -1;
	}

	.circle-text {
		font-size: 14px;
		color: #333;
	}

	.circle-number {
		font-size: 24px;
		color: #f33;
	}

	.info {
		flex: 1;
		padding-left: 20px;
	}

	.info-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.info-label {
		width: 50px;
		color: #333;
	}

	.info-number {
		font-weight: bold;
	}

	.green {
		color: green;
	}

	.red {
		color: red;
	}





	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}



	/* #endif */
</style>