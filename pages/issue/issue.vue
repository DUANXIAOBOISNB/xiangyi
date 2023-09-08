<template>
	<view>
		<van-cell-group>
		  <van-field v-model="value" label="文本" placeholder="请输入用户名" />
		  <van-field
		    v-model="message"
		    rows="2"
		    autosize
		    label="留言"
		    type="textarea"
		    maxlength="50"
		    placeholder="请输入留言"
		    show-word-limit
		  />
		  <van-cell title="单元格" value="内容"  :border="false" :size="small"/>
      <van-uploader :file-list="fileList" :deletable="true"/>
	  <van-cell title="单元格" icon="location-o"  :value="address" @click="selectadd"/>
	  <van-popup :show="show" @close="show=false" round position="bottom" :style="{ height:'30px'}" >
	  	<view >
			<van-cell title="获取当前位置" is-link @click="getlocaladd"/>
			<van-cell title="自定义地址" is-link @click="getadd"/>
		</view>
	  </van-popup>
		</van-cell-group>
		<view style="display: flex;">
			  <van-field v-model="value" label="文本" placeholder="出售价"  title-width="2.2em"/>
			  <van-field v-model="value" label="文本" placeholder="原价"   title-width="2.2em"/>
		</view>
	<view>
		<view>
			<van-row>
			  <van-col span="10">  <van-cell title="单元格" value="内容"  :border="false" :size="small"/></van-col>
			  <van-col span="4" offset="8">
				<van-button type="primary" size="mini">默认按钮</van-button>
			  </van-col>
			 
			</van-row>
			<van-row>
			  <van-col span="10">  <van-cell title="单元格" value="内容"  :size="small"/></van-col>
			  <van-col span="4" offset="8">
				<van-button type="primary" size="mini">默认按钮</van-button>
			  </van-col>
			 </van-row>
			 
			
		</view>
		<view>
			  <van-cell title="单元格" value="内容"  :border="false" :size="small"/>
			  <view>
				  <van-radio-group
				    :value="radio"
				    bind:change="onChange"
				    direction="horizontal"
				  >
				    <van-radio name="1">单选框 1</van-radio>
				    <van-radio name="2">单选框 2</van-radio>
				  </van-radio-group>
			  </view>
		</view>
		<view class="upload">
			保存修改
		</view>
		
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList: [
				        { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }
				        // Uploader 根据文件后缀来判断是否为图片文件
				        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
				        
				      ],
					  address:"",
					  show:false,
					  test:"zdfsd",
					  radio :''
			};
		},
		methods:
		{
			selectadd()
			{
				this.show=true
			},
			getlocaladd()
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
						that.address=data.address;
						
					    }
				        })
				    }
					
				})
			},
			getadd()
			{
				
			},
			onChange()
			{
				
			},
			
		}
	}
</script>

<style lang="scss">
.upload
{
	width: 90%;
	 height: 40px;
	 background: #ff4059;
	 border-radius: 30px;
	 margin-top: 20px;
	 line-height: 40px;
	text-align: center;
	 color: white;
	 margin: auto;
}
</style>
