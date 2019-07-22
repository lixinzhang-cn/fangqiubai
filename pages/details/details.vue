<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(e) {
			// console.log(e.detailData);
			this.initData(JSON.parse(e.detailData))
		},
		// 监听导航栏按钮点击事件
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				console.log('点击了菜单按钮');
			}
		},
		methods: {
			initData(obj){
				uni.setNavigationBarTitle({
					title:obj.title
				})
			},
			
		}
	}
</script>

<style>

</style>
