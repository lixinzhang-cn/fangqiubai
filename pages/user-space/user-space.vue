<template>
	<view>
		<!-- 个人页头部控件 -->
		<user-space :userinfo="userinfo"></user-space>
	</view>
</template>

<script>
	import userSpace from '../../components/user-space/user-space.vue';
	export default {
		components:{
			userSpace
		},
		data() {
			return {
				userinfo:{
					bgimg:1,
					userpic:"../../static/demo/userpic/11.jpg",
					username:"昵称",
					sex:0,
					age:20,
					isguanzhu:false
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user-space-margin{
	margin: 15upx 0;
}

</style>
