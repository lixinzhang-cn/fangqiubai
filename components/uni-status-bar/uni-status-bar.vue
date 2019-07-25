<template>
	<view :style="{ height: statusBarHeight, background:statusBarbg}" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	let statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
	export default {
		name: 'UniStatusBar',
		props:{
			statusBarbg:{
				type:"String",
				default:"",
			}
		},
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		}
	}
</script>

<style>
	.uni-status-bar {
		display: block;
		width: 100%;
		height: 20px;
		height: var(--status-bar-height);
	}
</style>