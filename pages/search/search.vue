<template>
	<view>
		<template v-if="list.length>0">
			<block v-for="(item,index) in list">
				<index-list :item="item" :index="index"></index-list>
			</block>
			<!-- 上拉加载  -->
			<load-more :loadtext="loadtext"></load-more>
		</template>
		<template v-else-if="issearch && list.length<1">
			<no-thing></no-thing>
		</template>
	</view>
</template>

<script>
	import indexList from '../../components/index/index-list.vue';
	import noThing from '../../components/common/no-thing.vue';
	import loadMore from "../../components/common/load-more.vue";
	export default {
		components:{
			indexList,
			noThing,
			loadMore
		},
		data() {
			return {
				issearch:false,
				loadtext:"上拉加载更多",
				list:[],
				searchText:""
			}
		},
		// 监听页面触底事件
		onReachBottom() {
			this.loadmore();
		},
		// 监听下拉刷新事件
		onPullDownRefresh() {
			this.getData();
			uni.stopPullDownRefresh();
		},
		methods: {
			getData(){
				// 后台请求传参 this.searchText
				uni.showLoading();
				setTimeout(()=> {
					let arr=[
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"昵称",
							isguanzhu:false,
							title:"我是标题",
							type:"img", // img:图文,video:视频
							titlepic:"../../static/demo/datapic/11.jpg",
							infonum:{
								index:0,//0:没有操作，1:顶,2:踩；
								dingnum:11,
								cainum:11,
							},
							commentnum:10,
							sharenum:10,
						},
						{
							userpic:"../../static/demo/userpic/12.jpg",
							username:"昵称",
							isguanzhu:true,
							title:"我是标题",
							type:"video", // img:图文,video:视频
							titlepic:"../../static/demo/datapic/11.jpg",
							playnum:"20w",
							long:"2:47",
							infonum:{
								index:1,//0:没有操作，1:顶,2:踩；
								dingnum:11,
								cainum:11,
							},
							commentnum:10,
							sharenum:10,
						}
					];
					this.list=arr;
					uni.hideLoading();
					this.issearch=true;
				}, 1000);
			},
			// 上拉加载
			loadmore(){
				if(this.loadtext!="上拉加载更多"){ return; }
				// 修改状态
				this.loadtext="加载中...";
				// 获取数据
				setTimeout(()=> {
					//获取完成
					let obj={
						userpic:"../../static/demo/userpic/12.jpg",
						username:"昵称",
						isguanzhu:false,
						title:"我是标题",
						type:"img", // img:图文,video:视频
						titlepic:"../../static/demo/datapic/11.jpg",
						infonum:{
							index:0,//0:没有操作，1:顶,2:踩；
							dingnum:11,
							cainum:11,
						},
						commentnum:10,
						sharenum:10,
					};
					this.list.push(obj);
					this.loadtext="上拉加载更多";
				}, 1000);
				// this.loadtext="没有更多数据了";
			},
		},
		//监听原生标题导航按钮点击事件
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				uni.navigateBack({
					delta: 1
				});
			}
		},
		//监听导航栏输入框文本变化
		onNavigationBarSearchInputChanged(e) {
			console.log(e.text);
			if(e.text){
				this.searchText=e.text;
				this.getData()
			}
			
		},
		//监听导航栏文本框用软键盘输入的搜索按钮点击事件
		onNavigationBarSearchInputConfirmed(e) {
			console.log(e.text)
			if(e.text){
				this.getData()
			}
		}
	}
</script>

<style>

</style>
