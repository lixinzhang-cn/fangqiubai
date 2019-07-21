<template>
	<view>
		搜索页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
			console.log(e.text)
		},
		//监听导航栏文本框用软键盘输入的搜索按钮点击事件
		onNavigationBarSearchInputConfirmed(e) {
			console.log(e.text)
		}
	}
</script>

<style>

</style>
