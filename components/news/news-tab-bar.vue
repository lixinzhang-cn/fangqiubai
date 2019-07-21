<template>
	<view>
		<uni-nav-bar :statusBar="true" 	@click-right="openpubwin">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="uni-tab-bar1 u-f-ajc">
				<block v-for="(item,index) in tabList" :key="index">
					<view class="u-f-ajc" :class="{'active':tabIndex==index}"
					@tap="changeTab(index)">{{item}}
					<view v-if="tabIndex==index" class="uni-tab-bar1-line"></view></view>
				</block>
				
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right u-f-ajc">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components:{
			uniNavBar
		},
		props:{
			tabList:Array,
			tabIndex:Number
		},
		methods:{
			openpubwin(){
				// 打开发布页面
				uni.navigateTo({
					url: '../add-input/add-input',
				});
			},
			changeTab(index){
				this.$emit('change-tab',index);
			}
		}
	}
</script>

<style scoped>
.nav-left,.nav-right{

}
.nav-left>view,.nav-right>view{
	font-size: 40upx;
}
.nav-left{
	margin-left: 16upx;
}
.nav-left>view{
	color: #FF9619;
}
.uni-tab-bar1{
	width:100%;
	margin-left: -20upx;
	position: relative;
}
.uni-tab-bar1>view{
	font-size: 32upx;
	padding: 0 15upx;
	font-weight: bold;
	color: #969696;
}
.active{
	color: #171606!important;
}
.uni-tab-bar1-line{
	border-bottom: 5upx solid #FEDE33;
	border-top: 5upx solid #FEDE33;
	width:70upx;
	border-radius:50upx;
	position: absolute;
	bottom:6upx;
}
</style>
