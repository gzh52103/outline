<template>
    <div>
      <van-nav-bar
        title="商品详情"
        left-text="返回"
        right-text="关注"
        left-arrow
        @click-left="goBack"
      />
        <img :src="$baseUrl + data.img_url" />
        <h1>{{data.goods_name}}</h1>
        <div class="price"><del>{{data.price}}</del><span>{{data.sales_price}}</span></div>
        <van-goods-action>
            <van-goods-action-icon
                icon="chat-o"
                text="客服"
            />
            <van-goods-action-icon
                icon="cart-o"
                text="购物车"
                @click="gotoCart"
            />
            <van-goods-action-button
                type="warning"
                text="加入购物车"
                @click="add2cart"
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="buyNow"
            />
        </van-goods-action>
    </div>
</template>
<script>
export default {
    // props:['username'],
  data() {
    return {
      data: {}
    };
  },
  methods: {
    add2cart() {
      console.log("add2cart");
    },
    buyNow() {
      console.log("buy now");
    },
    gotoCart() {
      this.$router.push("/cart");
    },
    goBack(){
      this.$router.back();
    }
  },
  async created() {
    console.log("Goods", this);
    const { id } = this.$route.params;
    // const { id } = this.$route.query;

    const {
      data: { data }
    } = await this.$request.get("/goods/" + id);
    console.log("data", data);
    this.data = data;
  },
  mounted(){
      document.querySelector('.van-tabbar').style.display = 'none';
  },
  destroyed(){
       document.querySelector('.van-tabbar').style.display = 'flex';
  }
};
</script>
<style lang="scss" scoped>
// scoped: 让当前style中的样式只在当前组件生效
// 原理：给当前组件所有标签添加data-v-[hash]属性，然后利用css属性选择器实现局部样式效果
h1 {
  font-size: 20px;
}
</style>

