<template>
	<view class="topic-new">
		<view>最近更新</view>
		<block v-for="(item,index) in topic" :key="index">
			<view class="topic-list u-f" @tap="openTopicDetail">
				<image :src="item.titlepic" mode="widthFix" lazy-load></image>
				<view>
					<view>#{{item.title}}#</view>
					<view>{{item.desc}}</view>
					<view>动态 {{item.totalnum}} 今日 {{item.todaynum}}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			topic:Array,
			index:Number
		},
		methods:{
			openTopicDetail(){
				uni.navigateTo({
					url: '../../pages/topic-detail/topic-detail',
				});
			}
		}
		
	}
</script>

<style scoped>
.topic-new{
	padding: 20upx;
}
.topic-list{
	padding: 10upx 0;
	border-bottom: 1upx solid #EEEEEE;
}
.topic-list image{
	width: 300upx;
	border-radius:10upx;
	margin-right:10upx;
}
.topic-list>view>view{
	color: #a4a4a4;
}
.topic-list>view>view:first-child{
	color:#333333;
	font-size: 32upx;
}
</style>
