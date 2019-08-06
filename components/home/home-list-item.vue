<template>
	<view class="home-list-item u-f-ac u-f-jsb" 
	hover-class="home-list-hover"
	@tap="clickevent">
		<view class="u-f-ac">
			<view class="icon iconfont"
			:class="['icon-'+item.icon]">
			</view>{{item.name}}
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		methods:{
			clickevent(){
				switch (this.item.clicktype){
					case "navigateTo":
					if(this.item.url){ uni.navigateTo({ url:this.item.url}); }
						break;
					case "switchTab":
					if(this.item.url){ uni.switchTab({url:this.item.url}) }
						break;
					case "clear":
						uni.showModal({
							title: '提示',
							content: '是否要清除缓存？',
							showCancel: false,
							cancelText: '',
							confirmText: '立刻清除',
							success: res => {
								if(res.confirm){
									uni.clearStorage();
									uni.showToast({
										title: '清除缓存成功！'
									});
								}
							},
						});
						break;
				}
			}
		}
	}
</script>

<style scoped>
.home-list-item{
	padding: 20upx;
	border-top: 1upx solid #EEEEEE;
	border-bottom: 1upx solid #EEEEEE;
}
.home-list-item>view:first-child{
	color: #333333;
}
.home-list-item>view:first-child>view{
	margin-right: 10upx;
}
.home-list-item>view:last-child{
	color: #cccccc;
}
.home-list-hover{
	background: #F4F4F4;
}
</style>
