<template>
	<view class="ii">
		<van-cell is-link @click="showPopup">展示弹出层</van-cell>
		<van-popup :show="show" @close="show=false"  overlay="true" round position="bottom" :style="{ height: '30%' }" get-container="getContainer">
			<div>sdfsdf</div>
			<div>sdfsdf</div>
			<div>sdfsdf</div>
			<div>sdfsdf</div>
		
		</van-popup>		
   <van-button @click.native="dd">ert</van-button>
	<button @click="chooseImage">选择图片</button>
	  <image :src="imageUrl" />


	</view>
	
</template>

<script>
	// import { createApp } from 'vue';
	// import { Col, Row } from 'vant';
	
	// const app = createApp();
	// app.use(Col);
	// app.use(Row);
 	

	export default {
		data() {
			return {
				imageUrl:'',
				show:false
			};
		},
		
		methods:
		{
		showPopup()
		{
			console.log("jit")
			this.show=true;
			console.log(this.show)
		},
		getContainer()
		{
			 return document.querySelector('.ii');
		},
			async dd()
			{ 
 
				const {data:res}= await uni.$http.get(uni.$http.baseURL+'demo')
				console.log(res)
				  
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
				      }
				    })
				
				
			},
			 uploadImage(imagePath) {
			    wx.uploadFile({
			      url: 'http://127.0.0.1:8025/upload', // 上传图片的接口地址
			      filePath: imagePath, // 图片文件路径
			      name: 'image', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
			      success: (res) => {
					  this.imageUrl=res.data
			        // 上传成功后，将服务器返回的图片地址更新到image标签中
			        // this.setData({
			        //   imageUrl: res.data
			        // });
			      },
			      fail: function (res) {
			        console.log(res);
			      }
			    })
			
			}
		}
	}
</script>

<style lang="scss">

</style>
