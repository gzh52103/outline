<template>
	<view class="content">
		我的
        <view>用户名：{{username}}</view>
        <view @click="changeQty" class="qty">qty:{{qty}}</view>
	</view>
</template>

<script>
    const app = getApp();
    console.log('app',app)
	export default {
		data() {
			return {
				username:'laoxie',
                qty:1
			}
		},
        // 小程序生命周期函数
		onLoad() {

		},
        created(){
            console.log('created')
        },
        mounted(){
            console.log('mounted')
        },
		methods: {
            changeQty(){
                this.qty++;
            }
		}
	}
</script>

<style>
	.qty{color:#f00;height:30rpx;}
</style>
