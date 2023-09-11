<template>
	<view>
		<!-- 输入任意文本 -->
		<van-field v-model="text" label="姓名" placeholder="输入姓名"/>
			<van-field v-model="anonoy"  label="昵称" />
			<van-field v-model="password" type="password" label="密码" placeholder="输入2密码"/>
		<!-- 输入手机号，调起手机号键盘 -->
		<van-field v-model="tel" type="tel" label="手机号" placeholder="输入手机号"/>
		<!-- 允许输入正整数，调起纯数字键盘 -->
		<van-field v-model="email" type="digit" label="邮箱" placeholder="输入邮箱"/>
		<!-- 允许输入数字，调起带符号的纯数字键盘 -->
		<van-cell title="上传头像" :border="false"></van-cell>
	      <van-uploader v-model="fileList" />
		<!-- 输入密码 -->
	
		<view class="register" >
			注册
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.register
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
</style>
