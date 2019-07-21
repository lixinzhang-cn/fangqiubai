<template>
	<view>
		<!-- 底部聊天组件 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
	import userChatBottom from '../../components/user-chat/user-chat-bottom.vue';
	export default {
		components:{
			userChatBottom
		},
		data() {
			return {
				
			}
		},
		methods: {
			submit(data){
				console.log('您输入的内容：'+data)
			},
		}
	}
</script>

<style>

</style>
