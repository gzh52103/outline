<template>
    <div class="home">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-row>
                <van-col 
                span="12" 
                v-for="item in goodslist" 
                :key="item._id" 
                @click="goto(item._id)"
                >
                    <van-image
                        width="100"
                        height="100"
                        :src="'http://120.76.247.5:2003' + item.img_url"
                        />
                    <h4>{{item.goods_name}}</h4>
                    <div class="price"><del>{{item.price}}</del><span>{{item.sales_price}}</span></div>
                </van-col>
            </van-row>
        </van-list>
    </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      finished: false,
      goodslist: []
    };
  },
  methods: {
    onLoad() {},
    goto(id){
        // this.$router.push(path);
        // this.$router.push({
        //     // path:'/goods',
        //     name:'Goods',
        //     query:{id},
        //     params:{a:10,b:20}
        // })
        this.$router.push({
            // 等效于 $router.push('/goods/'+id)
            name:'DGoods',
            params:{id}
        })
    }
  },
  async created() {
    const {
      data: { data: goodslist }
    } = await this.$request.get("/goods", {
      params: {
        total: false
      }
    });
    console.log("goodslist", goodslist);
    this.goodslist = goodslist;
  }
};
</script>
