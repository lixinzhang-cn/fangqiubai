<template>
	<view>
		<!-- 个人页头部控件 -->
		<user-space :userinfo="userinfo"></user-space>
		<!-- 统计 -->
		<view class="user-space-data">
			<home-data :homedata="spaceData"></home-data>
		</view>
		<view style="background: #F4F4F4;height: 20upx;"></view>
		<!-- tab导航 -->
		<swiper-tab-head 
		:tabBars="tabBars" 
		:tabIndex="tabIndex"
		@tabtap="tabtap"
		tabBarBottom="border-bottom:0;"
		tabBarItemWidth="width:33.33%;">
		</swiper-tab-head>
		
		<block v-for="(item,index) in topiclist" :key="index">
			<template v-if="index==0 && tabIndex==0">
				<!-- 主页 -->
				<user-space-userinfo :userinfo="userinfo"></user-space-userinfo>
			</template>
			<template v-else-if="tabIndex==index">
				<block v-for="(list,listindex) in item.list" :key="listindex">
					<common-list :item="list" :index="listindex"></common-list>
				</block>
				<!-- 上拉加载 -->
				<load-more :loadtext="item.loadtext"></load-more>
			</template>
		</block>
		
		<!-- 操作菜单 -->
		<user-space-popup :isshow="show"
		@hide="changeshow"
		@pullblacklist="pullblacklist"
		@guanzhu="guanzhu"></user-space-popup>
	</view>
</template>

<script>
	import userSpace from '../../components/user-space/user-space.vue';
	import homeData from '../../components/home/home-data.vue';
	import swiperTabHead from '../../components/index/swiper-tab-head.vue';
	import userSpaceUserinfo from '../../components/user-space/user-space-userinfo.vue';
	import commonList from '../../components/common/common-list.vue';
	import loadMore from "../../components/common/load-more.vue";
	import userSpacePopup from '../../components/user-space/user-space-popup.vue';
	export default {
		components:{
			userSpace,
			homeData,
			swiperTabHead,
			userSpaceUserinfo,
			commonList,
			loadMore,
			userSpacePopup
		},
		data() {
			return {
				show:false,
				userinfo:{
					bgimg:1,
					userpic:"../../static/demo/userpic/11.jpg",
					username:"昵称",
					sex:0,
					age:20,
					isguanzhu:false,
					regtime:"2019-04-12",
					id:1231,
					birthday:"1988-06-23",
					job:"IT",
					path:"河南洛阳",
					qg:"已婚"
				},
				spaceData:[
					{ name:"获赞", num:"10k" },
					{ name:"关注", num:11 },
					{ name:"粉丝", num:12 },
				],
				tabIndex:0,
				tabBars:[
					{ name:"主页",id:"zhuye" },
					{ name:"糗事",id:"qiushi" },
					{ name:"动态",id:"dongtai" },
				],
				topiclist:[
					{},
					{
						loadtext:"上拉加载更多",
						list:[
							// 文字
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:0, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"",
								video:false,
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
							// 图文
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:1, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"../../static/demo/datapic/13.jpg",
								video:false,
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
							// 视频
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:1, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"../../static/demo/datapic/13.jpg",
								video:{
									looknum:"20w",
									long:"2:47"
								},
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
							
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							// 文字
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:0, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"",
								video:false,
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
							// 图文
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:1, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"../../static/demo/datapic/13.jpg",
								video:false,
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
							// 视频
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:1, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"../../static/demo/datapic/13.jpg",
								video:{
									looknum:"20w",
									long:"2:47"
								},
								share:false,
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
							// 分享
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哈哈",
								sex:0, //0 男 1 女
								age:25,
								isguanzhu:false,
								title:"我是标题",
								titlepic:"",
								video:false,
								share:{
									title:"我是分享的标题",
									titlepic:"../../static/demo/datapic/14.jpg"
								},
								path:"深圳 龙岗",
								sharenum:20,
								commentnum:30,
								goodnum:20
							},
						]
					}
				],
			}
		},
		//监听页面触底事件 
		onReachBottom() {
			// 上拉加载
			this.loadmore();
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				this.changeshow();
			}
		},
		methods: {
			// 显示隐藏操作菜单
			changeshow(){
				this.show=!this.show;
			},
			pullblacklist(){
				console.log("拉黑");
				this.changeshow();
			},
			guanzhu(){
				console.log("关注");
				this.changeshow();
			},
			// tabbar点击事件
			tabtap(index){
				this.tabIndex=index;
			},
			loadmore(){
				if(this.topiclist[this.tabIndex].loadtext!="上拉加载更多"){ return; }
				// 修改状态
				this.topiclist[this.tabIndex].loadtext="加载中...";
				// 获取数据
				setTimeout(()=> {
					//获取完成
					let obj={userpic:"../../static/demo/userpic/12.jpg",
							username:"哈哈",
							sex:1, //0 男 1 女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titlepic:"../../static/demo/datapic/13.jpg",
							video:false,
							share:false,
							path:"深圳 龙岗",
							sharenum:20,
							commentnum:30,
							goodnum:20};
					this.topiclist[this.tabIndex].list.push(obj);
					this.topiclist[this.tabIndex].loadtext="上拉加载更多";
				}, 1000);
				// this.topiclist[this.tabIndex].loadtext="没有更多数据了";
			},
		}
	}
</script>

<style>
.user-space-margin{
	margin: 15upx 0;
}
.user-space-data{
	background: #FFFFFF;
	margin-top:-15upx;
	border-top-left-radius: 10upx;
	border-top-right-radius: 10upx;
	position: relative;
	z-index: 10;
}

</style>
