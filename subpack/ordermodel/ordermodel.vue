<template>
	<view>
		<view class="orderhead" style="color: white;padding-top: 20px;">
		<view>
			<view style="font-weight: 800;margin-bottom: 5px;">订单信息</view>
			<view>消费订单:<text>0</text> 总消费: ￥<text>0.00</text> </view>
		</view>
		</view>
		<view class="orderall">
			<van-tabs :active="active" color="#00e1ff" style="width: 100%;">
				<van-tab title="全部" >
					<van-empty description="描述文字" v-show="allflag"/>
					<block v-for="index in 2" :key="index">
						<view v-show="!allflag" class="ordercard">
						<van-cell :border="false" title="单元格" value="内容" />
						<van-card
						  num="2"
						  price="2.00"
						  desc="描述信息"
						  title="商品标题"
						  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
						>
						  <template #tags>
						    <van-tag plain type="danger">假一陪十</van-tag>
						    <van-tag plain type="danger">七天无理由退款</van-tag>
						  </template>
						
						  <template #footer>
							  <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" style="font-size:xx-small; margin-bottom: 20px;">
							    技术是开发它的人的共同灵魂。
							  </van-notice-bar>
							<van-button round size="small" style="margin-right: 5px;">查看物流</van-button>
						    <van-button color="#ff1c4d" plain round size="small">确认收获</van-button>
						  </template>
						</van-card>
						
					    </view>
					</block>
					
				</van-tab>
				
			  <van-tab title="待发货">
				  <van-empty description="描述文字" />
				 
				</van-tab>
			  <van-tab title="待收获"><van-empty description="描述文字" />
				  </van-tab></van-tab>
			  <van-tab title="待评价"><van-empty description="描述文字" />
				  </van-tab></van-tab>
			  <van-tab title="已完成"><van-empty description="描述文字" />
				  </van-tab></van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 active: 0,
				 allflag:false
			};
		},
		onLoad(options)
		{
			
			this.active=parseInt(options.actived);
		
		}
	}
</script>

<style lang="scss">
.orderhead
{
	width: 100%;
	height: 100px;
	background-image: url(../../static/350.jpg); 
}
.ordercard
{
	width: 90%;
	height: 250px;
	background-color: #f8ffef;
	margin: 5px auto;
	border-radius: 8px;
}
.orderall
{   width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
