<template>
	<view>
		<!-- 自定义导航栏 -->
		<news-tab-bar 
		:tabList="tabList" 
		:tabIndex="tabIndex" 
		:border="false"
		@change-tab="changeTab">
		</news-tab-bar>
		
		<view class="uni-tab-bar">
		<swiper class="swiper-box" 
		:style="{height:swiperheight+'px'}" 
		:current="tabIndex"
		@change="tabChange">
		<!-- 关注 -->
			<swiper-item> 
				<scroll-view scroll-y class="list" @scrolltolower="loadmore()">
					<block v-for="(item,index) in newslist.list"  :key="index">
						<common-list :item="item" :index="index"></common-list>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadtext="newslist.loadtext"></load-more>
				</scroll-view>
			</swiper-item>
			<!-- 话题 -->
			<swiper-item> 
				<scroll-view scroll-y class="list">
					<!-- 搜索款 -->
					<view class="search-style">
						<input class="uni-input" placeholder-class="icon iconfont icon-sousuo topic-style" placeholder="搜索内容" />
					</view>
					<!-- 轮播图 -->
					<swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
						<block v-for="(item,index) in topic.swiper" :key="index">
							<swiper-item>
								<image :src="item.src"></image>
							</swiper-item>
						</block>
						
					</swiper>
					<!-- 热门分类 -->
					<topic-nav :nav="topic.nav"></topic-nav>
					<!-- 最近更新 -->
					<topic-news :topic="topic.list"></topic-news>
				</scroll-view>
			</swiper-item>
		</swiper>
		</view>
		
	</view>
</template>

<script>
	import newsTabBar from '../../components/news/news-tab-bar.vue';
	import commonList from '../../components/common/common-list.vue';
	import loadMore from "../../components/common/load-more.vue";
	import topicNav from '../../components/common/topic-nav.vue';
	import topicNews from '../../components/news/topic-news.vue';
	export default {
		components:{
			loadMore,
			newsTabBar,
			commonList,
			topicNav,
			topicNews
		},
		data() {
			return {
				swiperheight:500,
				tabIndex:0,
				tabList:["关注","话题"],
				newslist:{
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
				},
				topic:{
					swiper:[
						{"src":"../../static/demo/datapic/16.jpg"},
						{"src":"../../static/demo/datapic/16.jpg"},
						{"src":"../../static/demo/datapic/16.jpg"}
					],
					nav:[
						{name:"最新"},
						{name:"游戏"},
						{name:"打卡"},
						{name:"情感"},
						{name:"故事"},
						{name:"喜爱"}
					],
					list:[
						{
							titlepic:"../../static/demo/datapic/21.jpg",
							title:"话题名称",
							desc:"我是话题标题",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/demo/datapic/21.jpg",
							title:"话题名称",
							desc:"我是话题标题",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/demo/datapic/21.jpg",
							title:"话题名称",
							desc:"我是话题标题",
							totalnum:50,
							todaynum:10
						}
					]
				},
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res)=> {
					let height=res.windowHeight-uni.upx2px(100)
					this.swiperheight=height;
					console.log('===='+height);
				}
			});
		},
		methods: {
			changeTab(index){
				this.tabIndex=index;
			},
			// 滑动事件
			tabChange(e){
				this.tabIndex=e.detail.current;
			},
			// 上拉加载
			loadmore(){
				console.log(1)
				if(this.newslist.loadtext!="上拉加载更多"){ return; }
				console.log(2)
				// 修改状态
				this.newslist.loadtext="加载中...";
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
					this.newslist.list.push(obj);
					this.newslist.loadtext="上拉加载更多";
				}, 1000);
				// this.newslist.loadtext="没有更多数据了";
			}
		}
	}
</script>

<style>
.search-style{
	padding: 20upx;
}
.search-style>input{
	background: #F4F4F4;
	border-radius: 10upx;
}
.topic-style{
	font-size: 27upx;
	display: flex;
	justify-content: center;
}
.topic-swiper{
	padding: 0 20upx 20upx 20upx;
}
.topic-swiper image{
	width:100%;
	height:95%;
	border-radius: 20upx;
}

</style>

