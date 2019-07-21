<template>
	<view class="common-list u-f animated fadeInLeft fast">
		<!-- 左侧图标 -->
		<view class="common-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<!-- 右侧内容 -->
		<view class="common-list-r">
			<!-- 第一行 -->
			<view class="u-f-ac u-f-jsb">
				<view class="u-f-ac">
					{{item.username}}
					<!-- 用户性别 图标 -->
					<user-sex-age :age="item.age" :sex="item.sex"></user-sex-age>
				</view>
				<view v-if="!isguanzhu" class="icon iconfont icon-zengjia"
				@tap="changeguanzhu">关注</view>
			</view>
			<!-- 第二行 -->
			<view>
				{{item.title}}
			</view>
			<!-- 第三行 -->
			<view class="u-f-ajc">
				<!-- 图标 -->
				<image v-if="item.titlepic" :src="item.titlepic" mode="widthFix" 
				lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="common-list-play icon iconfont icon-bofang"></view>
					<view class="common-list-playinfo">
						{{item.video.looknum}} 次播放 {{item.video.long}}
					</view>
				</template>
				<!-- 分享 -->
				<view v-if="item.share" class="common-list-share u-f-ac">
					<image :src="item.share.titlepic"></image>
					{{item.share.title}}
				</view>
			</view>
			<!-- 第四行 -->
			<view class="u-f-ac u-f-jsb">
				<view>{{item.path}}</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan1">{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import userSexAge from './user-sex-age.vue';
	export default {
		components:{
			userSexAge
		},
		props:{
			item:Object,
			index:Number
		},
		data(){
			return {
				isguanzhu:this.item.isguanzhu
			}
		},
		methods:{
			changeguanzhu(){
				this.isguanzhu=true;
				uni.showToast({
					title: '关注成功'
				});
			}
		}
	}
</script>

<style scoped>
/* 动态内容部分 开始 */
.common-list{
	padding: 20upx;
}
.common-list-l{
	flex-shrink: 0;
}
.common-list-l>image{
	width:90upx;
	height: 90upx;
	border-radius: 100%;
}
.common-list-r{
	flex: 1;
	margin-left: 15upx;
	border-bottom: 1upx solid #EEEEEE;
	padding-bottom: 10upx;
}
.common-list-r>view:nth-child(3)>image{
	width: 100%;
	border-radius: 10upx;
}
.common-list-r>view:nth-child(1)>view:first-child{
	color: #999999;
	font-size: 32upx;
}
.common-list-r>view:nth-child(1)>view:last-child{
	background: #EEEEEE;
	padding: 0 10upx;
	font-size: 26upx;
	border-radius: 10upx;
}
.common-list-r>view:nth-child(2){
	font-size: 32upx;
	padding: 12upx 0;
}
.common-list-r>view:nth-child(3){
	position: relative;
}
.common-list-r>view:nth-child(4)>view{
	color: #AAAAAA;
}
.common-list-r>view:nth-child(4)>view:nth-child(2)>view{
	margin-left: 10upx;
	padding-left: 5upx;
}
.common-list-play,.common-list-playinfo{
	color:#FFFFFF;
	position: absolute;
}
.common-list-play{
	font-size: 130upx;
}
.common-list-playinfo{
	right: 10upx;
	bottom: 10upx;
	background: rgba(12, 12, 12, 0.67);
	padding: 0 15upx;
	border-radius: 20upx;
}
.common-list-share{
	width: 100%;
	background: #EEEEEE;
}
.common-list-share>image{
	border-radius: 10upx;
	width: 200upx;
	height: 150upx;
	margin-right: 10upx;
}
/* 动态内容部分 结束 */	
</style>
