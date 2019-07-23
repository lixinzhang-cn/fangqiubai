<template>
	<view class="home-info u-f-ac">
		<image :src="homeinfo.userpic" lazy-load></image>
		<view class="u-f1">
			<view>{{homeinfo.username}}</view>
			<view>总访客 {{homeinfo.totalnum}} 今日 {{homeinfo.todaynum}}</view>
		</view>
		<view class="u-f-ajc icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		props:{
			homeinfo:Object
		}
	}
</script>

<style scoped>
.home-info{
	padding: 20upx;
}
.home-info>image{
	width: 100upx;
	height:100upx;
	border-radius: 100%;
	margin-right: 15upx;
	flex-shrink: 0;
}
.home-info>view:first-of-type>view:first-child{
	font-size: 32upx;
}
.home-info>view:first-of-type>view:last-child{
	color:#BBBBBB;
}
</style>
