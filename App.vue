<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	/* 引入自定义样式 */
	@import './common/icon.css';
	/* 引入动画库 */
	@import './common/animate.css';
	/* 自定义样式 */
	@import './common/common.css';
</style>
