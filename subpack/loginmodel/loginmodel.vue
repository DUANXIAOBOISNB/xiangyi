<template>
	<view>
		<van-cell-group>
		  <van-field
		    v-model="username"
		    
		    required
		    label="用户名"
		    placeholder="请输入用户名"
			error-message=' '
		  />
		  <van-field
		 
		    v-model="phone"
		    required
		    label="手机号"
		    placeholder="请输入手机号"
		    error-message=" "
		  />
		</van-cell-group>
		<view class="login">
			登录
		</view>
		<view class="register" @click="toregister">
			注册
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toregister()
			{
				uni.navigateTo({
					url:'/subpack/register/register'
				})
			}
		}
	}
</script>

<style lang="scss">
.login,.register
{
	width: 90%;
	 height: 40px;
	 background: #ff4059;
	 border-radius: 30px;
	 margin-top: 10px;
	 margin: auto;
	 line-height: 40px;
	text-align: center;
	 color: white;
}
.register
{
	margin-top: 10px;
	background: #00ffff;
}
</style>
