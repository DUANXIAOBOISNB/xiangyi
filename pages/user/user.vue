<template>
	<view>
		<view class="user-head" >
			
			
			<view style="width: 100%;padding: 20px;" @click="usermodel">
				<van-image  style="margin-left: 20px;"
			  round
			  width="50"
			  height="50"
			  lazy-load
			  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
			/><text>点击登录</text>
			</view>
			
			<view class="orderdata">
				<view><text>0</text><text>余额</text></view>
				<view><text>0</text><text>余额</text></view>
				<view><text>0</text><text>余额</text></view>
				<view><text>0</text><text>余额</text></view>
			</view>
			<view class="order">
				<view style="margin: 5px;" @click="orderAll">
					<text style="">订单系统</text>
					<text style="">查看全部></text>
				</view>
				<van-grid :border="false" >
				  <van-grid-item icon="photo-o" text="待付款" />
				  <van-grid-item icon="photo-o" text="代发货" />
				  <van-grid-item icon="photo-o" text="待收货" />
				  <van-grid-item icon="photo-o" text="售后" />
				</van-grid>
			</view>
			<view class="swapper">
				<swiper :indicator-dots="true" :autoplay="true" :interval="1000"  :circular="true" style="height: 100px;border-radius: 8px;overflow: hidden;">
					<swiper-item >
						<navigator class="swiper-item" >
							
							<image src="../../static/350.jpg"></image>
						</navigator>
					</swiper-item>
					<swiper-item >
						<navigator class="swiper-item" >
							
							<image src="../../static/350.jpg"></image>
						</navigator>
					</swiper-item>
					<swiper-item >
						<navigator class="swiper-item" >
							
							<image src="../../static/350.jpg"></image>
						</navigator>
					</swiper-item>
				</swiper>
							
			</view>
			<view class="myservice">
				<view style="margin: 5px;" @click="orderAll">
					<text style="">我的服务</text>
					
				</view>
				<van-grid :border="false">
				  <van-grid-item icon="photo-o" text="地址信息" />
				  <van-grid-item icon="photo-o" text="我的收藏" />
				  <van-grid-item icon="photo-o" text="足迹" />
				  <van-grid-item icon="photo-o" text="优惠券" />
				  <van-grid-item icon="photo-o" text="联系我们" />
				  <van-grid-item icon="photo-o" text="我的名片" />
			
				</van-grid>
			</view>
				
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			usermodel()
			{
				uni.navigateTo({
					url:'/subpack/usermodel/usermodel'
				})
			},
			orderAll()
			{
				console.log("sef")
			}
		}
	}
</script>

<style lang="scss">
.user-head{
	
	display: flex;
	flex-direction:column ;
	align-items: center;
	height: 200px;
	background-image: url(../../static/350.jpg); /* 设置背景图片 */
	  background-size: cover; /* 图片铺满整个视图 */
	  background-position: center center; /* 图片居中对齐 */
}
.orderdata
{
	display: flex;
	flex: row;
	justify-content:space-around ;
	margin-top: 20px;
	width: 80%;
}
.orderdata view
{
	display: flex;
	align-items: center;
}
.order{
	height: 100%;
	width: 80%;
	margin-top: 20px;
	padding:0 20px;
	background-color: white;
	border-radius: 8px;
	
}
.order>view
{
	display: flex;
	justify-content: space-between;
}
.swapper
{
	margin-top: 10px;
	width: 80%;


	border-radius: 8px;
	
}
.myservice
{
	height: 100%;
	width: 80%;
}
</style>
