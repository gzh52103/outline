<template>
    <div>
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
            <!-- <template #footer>
                <van-button type="danger" icon="delete-o" size="mini"></van-button>
            </template> -->
            <template #num>
                <!-- <van-field v-model="item.qty" type="digit" label="数量" /> -->
                <van-stepper
                    v-model="item.qty"
                    theme="round"
                    button-size="22"
                />
            </template>
        </van-card>
        <!-- <van-row style="margin-top:20px;">
            <van-col span="12">
                <van-button
                    type="danger"
                    plain
                    size="small"
                >清空购物车</van-button>
            </van-col>
            <van-col
                span="12"
                style="text-align:right"
            >
                <span
                    class="price"
                    style="vertical-align:middle;margin-right:5px;"
                ><span>{{totalPrice}}</span></span>
                <van-button
                    type="danger"
                    size="small"
                >去下单</van-button>
            </van-col>
        </van-row> -->
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
      checkAll: false,
    };
  },
  computed: {
    totalPrice() {
      return this.goodslist.reduce(
        (prev, item) => prev + item.sales_price * item.qty,
        0
      )*100;
    },
    goodslist(){
      return this.$store.state.goodslist;
    }
  },
  methods: {
    onSubmit() {
        console.log('order')
        // this.$router.push('/order')
    },
    gotoDetail(id){
        this.$router.push('/goods/'+id)
    }
  },
  created(){
    this.$store.commit('showTabbar',false);
  },
  destroyed(){
    this.$store.commit('showTabbar',true);
  }
};
</script>
