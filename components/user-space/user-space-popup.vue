<template>
	<!-- 点击菜单 -->
	<view class="paper-menu-mask" v-show="isshow" @tap="hideLeftMenu">
		<view class="paper-menu" v-show="isshow">
			<view class="u-f-ac" hover-class="paper-menu-item-h" @tap="pullblacklist">
				<view class="icon iconfont icon-sousuo"></view>拉黑
			</view>
			<view class="u-f-ac" hover-class="paper-menu-item-h" @tap="guanzhu">
				<view class="icon iconfont icon-qingchu"></view>关注
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			isshow:Boolean
		},
		methods:{
			hideLeftMenu(){
				this.$emit('hide');
			},
			pullblacklist(){
				this.$emit('pullblacklist');
			},
			guanzhu(){
				this.$emit('guanzhu');
			}
		}
	}
</script>

<style scoped>
.paper-menu{
	background: #FFFFFF;
	z-index: 2000;
	right:0;
	top:110upx;
	width:55%;
	position: fixed;
	box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
}
.paper-menu>view{
	padding:20upx;
	font-size: 35upx;
}
.paper-menu>view>view{
	margin-right: 10upx;
	font-weight: bold;
}
.paper-menu-item-h{
	background: #EEEEEE;
}
.paper-menu-mask{
	position: fixed;
	z-index: 1999;
	top:0;
	right: 0;
	left: 0;
	bottom: 0;
}
</style>
