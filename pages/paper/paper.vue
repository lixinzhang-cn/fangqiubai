<template>
	<view class="body">
		<!-- 点击菜单 -->
		<view class="paper-menu-mask" v-show="isshow" @tap="hideLeftMenu">
			<view class="paper-menu" v-show="isshow">
				<view class="u-f-ac" hover-class="paper-menu-item-h" @tap="addFreind">
					<view class="icon iconfont icon-sousuo"></view>添加糗友
				</view>
				<view class="u-f-ac" hover-class="paper-menu-item-h" @tap="clear">
					<view class="icon iconfont icon-qingchu"></view>清除缓存
				</view>
			</view>
		</view>
		
		<!-- 小纸条列表 -->
		<block v-for="(item,index) in list" :key="index">
			<paper-list12 :item="item" :index="index"></paper-list12>
		</block>	
		<!-- 上拉加载 -->
		<load-more :loadtext="loadtext"></load-more>
	</view>
</template>

<script>
	import paperList12 from '../../components/paper/paper-list12.vue';
	import loadMore from "../../components/common/load-more.vue";
	export default {
		components:{
			paperList12,
			loadMore
		},
		data() {
			return {
				isshow:false,
				loadtext:"上拉加载更多",
				list:[
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:12
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:0
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:0
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:12
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:12
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:0
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:0
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:12
					},
				]
			}
		},
		// 监听下拉刷新事件
		onPullDownRefresh() {
			this.getData();
		},
		// 监听触底事件
		onReachBottom() {
			this.loadmore();
		},
		// 监听导航栏按钮点击事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
				uni.navigateTo({
					url: '../paper-friends/paper-friends',
				});
					break;
				case 1:
				this.showLeftMenu();
					break;
			}
		},
		methods: {
			loadmore(){
				if(this.loadtext!="上拉加载更多"){ return; }
				// 修改状态
				this.loadtext="加载中...";
				// 获取数据
				setTimeout(()=> {
					//获取完成
					let obj={
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:12,
						};
					this.list.push(obj);
					this.loadtext="上拉加载更多";
				}, 1000);
			},
			getData(){
				setTimeout(()=> {
					//获取数据
					let arr = [
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称1111",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:12
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称22222",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:0
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称121221",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:0
					},
					{
						paperpic:"../../static/demo/demo5.jpg",
						nickname:"昵称33333",
						time:"13:58",
						data:"我是小字条详情",
						noreadnum:12
					},
				];
					//渲染数据
					this.list=arr;
					//停止刷新
					uni.stopPullDownRefresh();
					
				}, 2000);
			},
			addFreind(){
				console.log("添加糗友");
				this.hideLeftMenu();
			},
			clear(){
				console.log("清除缓存");
				this.hideLeftMenu();
			},
			showLeftMenu(){
				this.isshow=true;
			},
			hideLeftMenu(){
				this.isshow=false;
			},
		}
	}
</script>

<style>
.body{
	padding: 0 20upx;
}
.paper-menu{
	background: #FFFFFF;
	z-index: 2000;
	right:0;
	top:10upx;
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
