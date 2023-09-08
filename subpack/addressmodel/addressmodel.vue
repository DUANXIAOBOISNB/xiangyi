<template>
	<view>
		<view class="address-info-box"  @click="chooseAddress">
		    <view class="row1">
		      <view class="row1-left">
		        <view class="username">收货人：<text>段晓波</text></view>
		      </view>
		      <view class="row1-right">
		        <view class="phone">电话：<text>15949687262</text></view>
		        <uni-icons type="arrowright" size="16"></uni-icons>
		      </view>
		    </view>
		    <view class="row2">
		      <view class="row2-left">收货地址：</view>
		      <view class="row2-right">{{addstr}}</view>
		    </view>
		  </view>
		  <button @click="chooseAddress">点击</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addstr:"ddf"
			};
		},
		methods:
		{
			
			chooseAddress()
			{
				const that=this
				
				wx.getLocation({
				    type: "wgs84",
				    success(res) {
				        wx.chooseLocation({
				            latitude: res.latitude,
				            longitude: res.longitude,
				            success: function(data){
								console.log(data)
						that.addstr=data.address;
						
					    }
				        })
				    }
					
				})
				 
			},
		}
	}
</script>

<style lang="scss">
.address-info-box {
  font-size: 12px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;
border-bottom:1px solid #c00000;
  // 第一行
  .row1 {
    display: flex;
    justify-content: space-between;

    .row1-right {
      display: flex;
      align-items: center;

      .phone {
        margin-right: 5px;
      }
    }
  }

  // 第二行
  .row2 {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .row2-left {
      white-space: nowrap;
    }
  }
}
</style>
