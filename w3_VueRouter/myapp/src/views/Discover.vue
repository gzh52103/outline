<template>
    <div>
        <van-row
            type="flex"
            justify="space-between"
            style="flex-wrap:nowrap"
        >
            <van-col style="width:100px">
                <van-sidebar
                    v-model="activeKey"
                    @change="changeCategory"
                >
                    <van-sidebar-item
                        v-for="item in categories"
                        :key="item._id"
                        :title="item.text"
                    />
                </van-sidebar>
            </van-col>
            <van-col>
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="loadMore"
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
            </van-col>
        </van-row>

    </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      categories: [],
      loading: false,
      finished: false,
      goodslist: []
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      const {
        data: { data }
      } = await this.$request.get("/category", {
        params: {
          total: false
        }
      });
      console.log("data=", data);
      this.categories = data;

      this.getData(data[this.activeKey])
    },
    async getData(current) {
        const { data } = await this.$request.get("/goods", {
        params: {
          category: current.text
        }
      });
      this.goodslist = data.data.result;
    },
    changeCategory(index) {
      const currentCategory = this.categories[index];
      this.getData(currentCategory)
    },
    loadMore() {},
    goto(id){
        this.$router.push({
            path:'/goods/'+id
        })
    }
  }
};
</script>
