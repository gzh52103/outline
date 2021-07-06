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
    <!-- <button @click="count=10">count:{{count}},{{qty}}</button> -->
    <!-- 同类热门商品 -->
    <h4>同类热门商品</h4>
    <van-row class="hostList">
      <van-col
        span="12"
        v-for="item in hotList"
        :key="item._id"
        @click="gotoDetail(item._id)"
      >
        <van-image
          width="100"
          height="100"
          :src="$baseUrl + item.img_url"
        />
        <h4>{{item.goods_name}}</h4>
        <div class="price"><del>{{item.price}}</del><span>{{item.sales_price}}</span></div>
        <p>销量：{{item.sales_qty}}</p>
      </van-col>
    </van-row>

    <van-goods-action>
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="cartlen"
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
      count: 10,
      data: {},
      // 同类热门商品
      hotList: []
    };
  },
  computed: {
    cartlen() {
      return this.$store.state.cart.goodslist.length;
    }
    // qty(){
    //   console.log('computed=',this.count);
    //   return this.count;
    // }
  },
  watch: {
    // '$route.params.id':function(val){
    //   // 当实例下的data属性发生改变时，自动执行这里的代码
    //   // console.log('$route被修改=',newVal,oldVal)
    //   this.getData();
    // },
    // hotList(){
    // },
    // count(newVal,oldVal){
    //   console.log('watch=',newVal,oldVal);
    // }
  },
  methods: {
    add2cart() {
      console.log("add2cart");
      const { _id, goods_name, img_url, price, sales_price } = this.data;
      const { goodslist } = this.$store.state.cart;
      const { userInfo } = this.$store.state.user;
      const hasItem = goodslist.find(item => item._id === _id);
      if (hasItem) {
        // 已存在购物车：数量+1
        this.$store.dispatch("cart/changeQty", {
          id: _id,
          qty: hasItem.qty + 1
        });
      } else {
        const goods = {
          _id,
          goods_name,
          img_url,
          price,
          sales_price,
          qty: 1
        };
        this.$request
          .post("/cart", {
            goods,
            userid: userInfo._id
          })
          .then(({ data }) => {
            if (data.code === 200) {
              // 重新从服务器获取一份购物车数据
              // this.$store.dispatch('getCartlist')

              // 本地操作：直接修改vuex中的数据
              const newGoodslist = [goods, ...goodslist];
              this.$store.commit("cart/updateCart", newGoodslist);
            }
          });
      }
    },
    buyNow() {
      console.log("buy now");
      this.add2cart();
      this.$router.push("/cart");
    },
    gotoCart() {
      this.$router.push("/cart");
    },
    gotoDetail(id) {
      // this.$router.push('/goods/'+id);
      this.$router.push({
        name: "DGoods",
        params: { id }
      });
    },
    goBack() {
      this.$router.back();
    },

    async getData(id) {
      console.log("Goods", this);
      id = id || this.$route.params.id;
      // const { id } = this.$route.query;

      const {
        data: { data }
      } = await this.$request.get("/goods/" + id);
      console.log("data", data);
      this.data = data;
    },

    // 获取相关商品
    async getHotlist() {
      const {
        data: { data }
      } = await this.$request.get("/goods", {
        params: {
          category: this.data.category,
          sort: "sales_qty",
          total: false
        }
      });
      console.log("hotList", data);
      this.hotList = data;
    },
    showTabbar(show = true) {
      this.$store.commit("showTabbar", show);
    }
  },
  created() {
    console.log("created");
    this.getData();
    this.getHotlist();
  },
  mounted() {
    // document.querySelector(".van-tabbar").style.display = "none";
    // this.$store.commit('showTabbar',false);
    this.showTabbar(false);
  },
  destroyed() {
    // document.querySelector(".van-tabbar").style.display = "flex";
    // this.$store.commit('showTabbar',true);
    this.showTabbar();
  },

  // 路由守卫：监听路由变化
  beforeRouteUpdate(to, from, next) {
    // to：目标路由信息对象$route
    // from: 当前路由信息对象$route
    // 注意：进入该路由守卫时，页面并没有跳转成功，所以通过this.$route.prams.id获取到的是之前的值
    console.log("to,from", to, from, next);
    this.getData(to.params.id);

    next();
  }
};
</script>
<style lang="scss" scoped>
// scoped: 让当前style中的样式只在当前组件生效
// 原理：给当前组件所有标签添加data-v-[hash]属性，然后利用css属性选择器实现局部样式效果
h1 {
  font-size: 20px;
}

.hostList h4 {
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  max-height: 60px;
}
</style>

