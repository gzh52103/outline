<template>
    <div class="home">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-row>
                <van-col span="12" v-for="item in goodslist" :key="item._id" @click="goto('/goods/'+item._id)">
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
import axios from "axios";
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
    goto(path){
        this.$router.push(path);
    }
  },
  async created() {
    const {
      data: { data: goodslist }
    } = await axios.get("http://120.76.247.5:2003/api/goods", {
      params: {
        total: false
      }
    });
    console.log("goodslist", goodslist);
    this.goodslist = goodslist;
  }
};
</script>
