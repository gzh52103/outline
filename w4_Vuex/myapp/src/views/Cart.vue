<template>
  <div class="cart-page">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="编辑"
      left-arrow
      @click-left="$router.back()"
    />
    <van-steps disabled>
      <van-step>购物车</van-step>
      <van-step>下单</van-step>
      <van-step>付款</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <van-card
      v-for="item in goodslist"
      :key="item._id"
      :num="item.qty"
      :price="item.sales_price"
      :title="item.goods_name"
      :thumb="$baseUrl + item.img_url"
      @click-thumb="gotoDetail(item._id)"
    >
      <template #tags>
        <van-tag
          plain
          type="danger"
        >满300减30</van-tag>
        <van-tag
          plain
          type="danger"
        >假一赔十</van-tag>
      </template>
      <template #footer>
        <van-button
          type="danger"
          icon="delete-o"
          size="mini"
          @click="deleteGoods(item._id)"
        ></van-button>
      </template>
      <template #num>
        <!-- <van-field v-model="item.qty" type="digit" label="数量" /> -->
        <van-stepper
          :value="item.qty"
          theme="round"
          button-size="22"
          @change="changeQty($event,item._id)"
        />
      </template>
    </van-card>
    <div style="margin-top:20px;">
      <van-button
        type="danger"
        plain
        size="small"
        @click="clearCart"
      >清空购物车</van-button>

    </div>

    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checkAll">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span>修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkAll: false
    };
  },
  computed: {
    totalPrice() {
      return (
        this.goodslist.reduce(
          (prev, item) => prev + item.sales_price * item.qty,
          0
        ) * 100
      );
    },
    goodslist() {
      return this.$store.state.goodslist;
    }
  },
  methods: {
    onSubmit() {
      console.log("order");
      // this.$router.push('/order')
    },
    gotoDetail(id) {
      this.$router.push("/goods/" + id);
    },
    getData() {
      this.$store.dispatch("getCartlist");
    },
    showTabbar(show = true) {
      this.$store.commit("showTabbar", show);
    },
    changeQty(qty, id) {
      this.$store.dispatch("changeQty", { qty, id });
    },
    clearCart() {
      this.$request
        .delete("/cart/clear", {
          data: {
            userid: this.$store.state.userInfo._id
          }
        })
        .then(({ data }) => {
          if (data.code === 200) {
            this.$store.commit("updateCart", []);
          }
        });
    },
    deleteGoods(id) {
      this.$request
        .delete("/cart", {
          data: {
            userid: this.$store.state.userInfo._id,
            ids: [id]
          }
        })
        .then(({ data }) => {
          if (data.code === 200) {
            const newGoodslist = this.$store.state.goodslist.filter(
              item => item._id !== id
            );
            this.$store.commit("updateCart", newGoodslist);
          }
        });
    }
  },
  created() {
    // this.$store.commit('showTabbar',false);
    this.showTabbar(false);
    this.getData();
  },
  destroyed() {
    this.showTabbar();
    // this.$store.commit('showTabbar',true);
  }
};
</script>
<style scoped>
.cart-page {
  padding-bottom: 30px;
}
</style>
