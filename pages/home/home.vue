<template>
	<view class="page-container">
	<van-sticky>
		<my-search @click="gotosearch"></my-search>
	</van-sticky>
		
		<banner />
		
			<!-- 标签栏右侧额外内容 -->
			
				<view class="extra-wrapper">
					
					 <text>发现</text>
				</view>
			
	
		<goods-list :activeIndex="activeIndex" />
	</view>
</template>

<script>
	 import {mapState,mapMutations,mapGetters} from 'vuex'
	import banner from '@/components/home/banner'
	import goodsList from '@/components/home/goods-list.vue'
  
	export default {
		data()
		{
			return {
				
			}
		},
		// shared:表示页面 wxss 样式将影响到自定义组件
		options: {
			styleIsolation: 'shared'
		},
		
		
		components: {
			banner,
			goodsList
		},
		onLoad()
		{
			console.log('user'+this.loginstatus);
		},
		data() {
			return {
				tabs: ['618返场', '颜值水杯', '家居日用', '冲调零食'],
				//tabs:['618返场', '颜值水杯', '家居日用', '冲调零食', '生鲜水果', '鞋子服饰', '钻石珠宝', '生活用品'],
				activeIndex: 0, // 标签页当前选择项的下标
				// 标签页滚动吸顶相关
				offsetTop: 0, //粘性定位布局下与顶部的最小距离
				navHeight: 0, //顶部导航高度
				isFixed: false, //标签栏是否滚动吸顶
			}
		},
		computed: {
			...mapState('m_login',['loginstatus']),
			// 固定的标签页的标签栏样式
			wrapStyle() {
				return {
					// 吸顶时给定一个等于导航高度的paddingTop值，用于遮住透明的导航+状态栏区域
					paddingTop: this.isFixed ? this.navHeight + 'px' : 0,
					// 吸顶时背景色为白色，否则为灰色
					background: this.isFixed ? "#FFF" : "#F5F5F5"
				}
			},
		},
		mounted() {
			this.getNavHeight() // 获取导航高度
		},
		// 页面滚动触发事件
		onPageScroll(e) {
			//页面滚动事件
			uni.$emit('onPageScroll', e)
		},
		methods: {
			gotosearch()
			{
				uni.navigateTo({
					url:'/subpack/searchmodel/searchmodel'
				})
			},
			// 获取导航高度
			getNavHeight() {
				let statusBarH = 0,
					navBarH = 0
				// 获取状态栏的高度+导航栏的高度
				
				// #ifdef MP-WEIXIN || APP-PLUS ||  MP-BAIDU
				// 微信小程序、APP获取状态栏高度 
				statusBarH = uni.getSystemInfoSync().statusBarHeight
				// #endif

				// #ifdef MP-WEIXIN || MP-QQ || MP-BAIDU
				// 微信小程序获取胶囊位置信息
				const menuBtnInfo = uni.getMenuButtonBoundingClientRect()
				//navHeight的值为状态栏的高度+导航栏的高度
				if (menuBtnInfo) {
					//导航栏的高度 = (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度)
					navBarH = (menuBtnInfo.bottom - statusBarH) +
						(menuBtnInfo.top - statusBarH)
				}
				// #endif

				//状态栏的高度+导航栏的高度
				this.navHeight = navBarH + statusBarH
			},
			// 滚动时触发，仅在 sticky 模式下生效
			handleScroll(res) {
				this.isFixed = res.isFixed
			},
			touchStart(e) {
				e.stopPropagation()
			},
			fabClick() {
				uni.navigateBack({
					delta: 1
				});
			},
			
		}
	}
</script>
<style lang="less" scoped>
	.extra-wrapper {
		padding: 0 12rpx;
		font-size: 24rpx;
		height: 80rpx;
		display: flex;
		align-items: center;

		.text {
			display: inline-block;
			white-space: nowrap;
		}
	}
</style>
