<template>
	<view class="usermodel">
		<view class="userbaseinfo" style="width: 90%">
			<van-cell value="头像" is-link @click.native="chooseImage">
				
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
			    <span class="custom-title">头像</span>
			    
			  </template>
			</van-cell>
			  
			<van-cell-group style="width: 100%;">
			  <van-field v-model="value" label="昵称" placeholder="xxxxxxx" />
			  <van-field v-model="value" label="电话号码" placeholder="xxxxxxxxx" />
			</van-cell-group>
			<van-cell value="内容" is-link>
			  xxxxxxx
			  <template #title >
			    <span class="custom-title" >设置</span>
			    
			  </template>
			</van-cell>
			<van-cell is-link @click="showPopup">展示弹出层</van-cell>
			<van-popup :show="show" @close="show=false" round position="bottom" :style="{ height:'30px'}" >
				<view style="height: 300px;"></view>
			</van-popup>
		</view>
		<view class="loginout">
			保存修改
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				imageUrl:'',
				show: false,
				 // show,
				 // showPopup
			};
		},
		
		methods:
		{
			  
			 showPopup() {
			      this.show = true;
			    },
			chooseImage()
			{
				wx.chooseImage({
				      count: 1, // 可选择的图片数量
				      sizeType: ['compressed'], // 压缩图片
				      sourceType: ['album', 'camera'], // 来源：相册或相机
				      success:  (res)=> {
				        // 将选择的图片上传到服务器
				        this.uploadImage(res.tempFilePaths[0]);
						console.log(res.tempFilePaths[0]);
				      }
				    })
				
				
			},
			 uploadImage(imagePath) {
			    wx.uploadFile({
			      url: 'http://127.0.0.1:8025/upload', // 上传图片的接口地址
			      filePath: imagePath, // 图片文件路径
			      name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
			      success: (res) => {
			        // 上传成功后，将服务器返回的图片地址更新到image标签中
			        this.imageUrl=res.data
			      },
			      fail: function (res) {
			        console.log(res);
			      }
			    })
			
			}
		},
		
	}
</script>

<style lang="scss">
.custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
  .usermodel
  {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  background: #f0f0f0;
	  display: flex;
	  flex-direction: column;
	 align-items: center;
	 
	  
  }
  .userbaseinfo
  {
	  border-radius: 20px;
	  margin-top: 10px;
	  overflow: hidden;
  }
  .loginout
  {
	  width: 90%;
	  height: 40px;
	  background: #ff4059;
	  border-radius: 30px;
	  margin-top: 10px;
	  line-height: 40px;
	 text-align: center;
	  color: white;
  }
</style>
