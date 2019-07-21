<template>
	<view>
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="back" @click-left="back" 
		@click-right="publish">
			<view class="u-f-ajc yinsi-pos" @tap="changeYinsi">
				{{yinsi}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="说一句话吧~" />
		</view>
		<!-- 上传图片 -->
		<upload-images @uploud="uploud"></upload-images>
		<!-- 弹出框 -->
		<!-- 弹出公告 -->
		<uni-popup :show="showpopup" position="middle" mode="fixed" 
		@hidePopup="hidePopup">
			<view class="gonggao">
				<view class="u-f-ajc">
					<image src="../../static/common/addinput.png" mode="widthFix"></image>
				</view>
				<view>1.涉及黄色，政治，广告及骚扰信息</view>
				<view>2.涉及黄色，政治，广告及骚扰信息</view>
				<view>3.涉及黄色，政治，广告及骚扰信息</view>
				<view>4.涉及黄色，政治，广告及骚扰信息</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	
	let yinsiArr = ['所有人可见', '仅自己可见'];
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	import uploadImages from '../../components/common/upload-images.vue';
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	export default {
		components:{
			uniNavBar,
			uploadImages,
			uniPopup
		},
		data() {
			return {
				showpopup:true,
				yinsi:"所有人可见",
				text:"",
				
			}
		},
		// 导航栏返回按钮点击触发事件
		onBackPress() {
			return false;
		},
		methods: {
			//发布页返回按钮
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			//发布页发布按钮
			publish(){
				console.log("发布===========")
			},
			//发布页选择隐私
			changeYinsi(){
				uni.showActionSheet({
					itemList: yinsiArr,
					success: (res)=> {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						this.yinsi = yinsiArr[res.tapIndex]
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			uploud(arr){
				this.imglist=arr;
				console.log(this.imglist)
			},
			hidePopup(){
				this.showpopup=false;
			}
			
		}
	}
</script>

<style>
.yinsi-pos{
	margin-top:20upx;
}
.uni-textarea{
	border: 1upx solid #EEEEEE;
}
.gonggao{
	width: 500upx;
}
.gonggao image{
	width: 75%;
	margin-bottom: 20upx;
}
.gonggao button{
	margin-top: 20upx;
	background: #FFE934;
	color: #171606;
}
</style>
