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
      goodslist: [
        {
          _id: "6037755f08f65d3a6c243510",
          goods_name:
            "瑞士 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 深海蓝 3441.131.96.56.30 潜水机械男表",
          category: "运动表",
          price: 9900,
          sales_price: 7095,
          installment: 825,
          sales_qty: 315,
          inventory: 651,
          img_url: "/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
          views: 904,
          qty: 2
        },
        {
          _id: "6037755f08f65d3a6c243511",
          goods_id: "70662",
          goods_name:
            "瑞士艺术制表大师 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 砾岩黑 3441.131.20.55.30 潜水机",
          category: "运动表",
          price: 9900,
          sales_price: 17095,
          installment: 825,
          sales_qty: 422,
          inventory: 180,
          img_url: "/img/62973840d24947d696882fdec2174492.jpg",
          views: 24,
          qty: 10
        }
      ]
    };
  },
  computed: {
    totalPrice() {
      return this.goodslist.reduce(
        (prev, item) => prev + item.sales_price * item.qty,
        0
      )*100;
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
  }
};
</script>
