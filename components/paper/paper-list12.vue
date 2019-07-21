<template>

	<view class="paper-list u-f-ac animated bounceInLeft fast">
		<image :src="item.paperpic" mode="widthFix" lazy-load></image>
		<view>
			<view class="u-f-ac u-f-jsb">{{item.nickname}}<view>{{item.time}}</view></view>
			<view class="u-f-ac u-f-jsb">{{item.data}}
			<template v-if="item.noreadnum>0">
				<uni-badge :text="item.noreadnum" type="error" />
			</template>
			</view>
		</view>
	</view>

</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue';
	export default {
		components:{
			uniBadge
		},
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style scoped>
.paper-list{
	border-bottom: 1upx solid #EEEEEE;
	padding: 20upx 0;
}
.paper-list>image{
	width: 100upx;
	height:100upx;
	margin-right: 20upx;
	border-radius: 100%;
	/* 禁止被压缩 */
	flex-shrink: 0;
}
.paper-list>view{
	flex: 1;
}
.paper-list>view>view:first-child{
	font-size: 35upx;
}
.paper-list>view>view:first-child>view{
	color: #CBCBCB;
}
.paper-list>view>view:last-child{
	color: #999999;
}
</style>
