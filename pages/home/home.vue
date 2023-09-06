<template>
	<view>
				
   <van-button @click.native="dd">ert</van-button>
	

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
				
			};
		},
		methods:
		{
			async dd()
			{ 
 
				const {data:res}= await uni.$http.get(uni.$http.baseURL+'demo')
				console.log(res)
				  
			}
		}
	}
</script>

<style lang="scss">

</style>
