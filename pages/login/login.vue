<template>
	<view>
		<!-- <uni-status-bar statusBarbg="#FFE933"></uni-status-bar> -->
		<!-- 关闭按钮 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<!-- 引入背景图 -->
		<image class="loginhead" src="../../static/common/loginhead.png" lazy-load mode="widthFix"></image>
		<view class="body">
			<template v-if="!isverificationcodelogin">
				<input type="text" v-model="username"
				class="uni-input common-input"
				placeholder="昵称/手机号/邮箱" />
				
				<view class="login-input-box">
					<input type="text" v-model="password"
					class="uni-input common-input forget-input"
					placeholder="请输入密码" />
					<view class="forget u-f-ajc login-font-color">忘记密码</view>
				</view>
			</template>
			
			<template v-else>
				<view class="login-input-box">
					<view class="phone u-f-ajc">+86</view>
					<input type="text" v-model="phone"
					class="uni-input common-input phone-input"
					placeholder="手机号" />
				</view>
				
				<view class="login-input-box">
					<input type="text" v-model="verificationcode"
					class="uni-input common-input forget-input"
					placeholder="请输入验证码" />
					<view class="forget u-f-ajc login-font-color yanzhengma" @tap="getverificationcode">
						<view class="u-f-ajc">{{codetime?codetime+' s':'获取验证码'}}</view>
					</view>
				</view>
			</template>
			
			<view>
				<button class="user-set-btn" 
				:loading="loading" :class="{'user-set-btn-disable':disabled}" 
				type="primary" @tap="submit" :disabled="disabled">登录</button>
			</view>
		</view>
		
		<!-- 登陆状态切换 -->
		<view class="login-status u-f-ajc login-padding login-font-color" @tap="verificationCodeLogin">
			{{isverificationcodelogin?'账号密码登陆':'验证码登录'}}<view class="icon iconfont icon-jinru login-font-color"></view>
		</view>
		<!-- 第三方登陆 -->
		<view class="other-login-title u-f-ajc login-padding login-font-color">第三方登陆</view>
		<other-login></other-login>
		<!-- 协议 -->
		<view class="login-rule u-f-ajc login-padding login-font-color">
			注册即代表您同意<view>《XXX协议》</view>
		</view>
	</view>
</template>

<script>
	//import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue';
	import otherLogin from '../../components/home/other-login.vue';
	export default {
		components:{
			//uniStatusBar,
			otherLogin
		},
		data() {
			return {
				disabled:true,
				loading:false,
				isverificationcodelogin:false,
				username:'',
				password:'',
				phone:'',
				verificationcode:'',
				codetime:0,
			}
		},
		watch:{
			username(val){
				this.onloginbuttonchange();
			},
			password(val){
				this.onloginbuttonchange();
			},
			phone(val){
				this.onloginbuttonchange();
			},
			verificationcode(val){
				this.onloginbuttonchange();
			},
			isverificationcodelogin(val){
				this.onloginbuttonchange();
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			submit(){
				
			},
			verificationCodeLogin(){
				this.isverificationcodelogin=!this.isverificationcodelogin;
			},
			onloginbuttonchange(){
				if((this.isverificationcodelogin && this.phone && this.verificationcode) || 
				(!this.isverificationcodelogin && this.username && this.password)){
					console.log('22222222222222222222');
					this.disabled=false;
					return;
				}
				this.disabled=true;
			},
			getverificationcode(){
				if(this.codetime>0){
					return;
				}
				this.codetime=10;
				let time = setInterval(()=>{
					this.codetime--;
					if(this.codetime<1){
						clearInterval(time);
					}
				},1000);
				
			}
		}
	}
</script>

<style>
@import "../../common/form.css";
.login-padding{ padding: 20upx 0; }
.login-font-color{ color: #BBBBBB; }
.loginhead{
	width: 100%;
}
.icon-guanbi{
	position: fixed;
	top:60upx;
	left: 30upx;
	color: #332F0A;
	font-size: 40upx;
	font-weight: bold;
}
.login-input-box{
	position: relative;
}
.login-input-box .forget-input{
	padding-right: 150upx;
}
.login-input-box .forget,.login-input-box .phone{
	position: absolute;
	top: 0;
	height: 100%;
	z-index: 100;
}
.login-input-box .forget{
	width: 150upx;
	right: 0;
}
.login-input-box .phone{
	width:100upx;
	left: 0;
	font-weight: bold;
}
.login-input-box .phone-input{
	padding-left: 100upx;
}
.other-login-title{
	position: relative;
}
.other-login-title:before,.other-login-title:after{
	content: "";
	height:1upx;
	width:100upx;
	background: #BBBBBB;
	position: absolute;
	top: 50%;
}
.other-login-title:before{
	left: 25%;
}
.other-login-title:after{
	right: 25%;
}
.yanzhengma view{
	width:150upx;
	background: #EEEEEE;
	border-radius: 10upx;
	padding: 10upx 0;
	font-size: 25upx;
}
</style>
