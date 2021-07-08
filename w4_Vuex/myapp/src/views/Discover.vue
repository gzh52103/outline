<template>
    <div class="goodslist">
        <van-row
            type="flex"
            justify="space-between"
            style="flex-wrap:nowrap"
            gutter="10"
        >
            <van-col style="width:100px;margin-left:-15px">
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
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="loadMore"
                    offset="50"
                >
                    <van-row gutter="10">
                        <van-col
                            span="12"
                            v-for="(item,idx) in goodslist"
                            :key="item._id+idx"
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
                </van-pull-refresh>
            </van-col>
        </van-row>

    </div>
</template>
<script>
export default {
  name:'Discover',
  data() {
    return {
      activeKey: 0,
      categories: [],
      loading: false,
      finished: false,
      goodslist: [],
      page: 1,
      refreshing:false,
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

      this.getData(data[this.activeKey]);
    },
    async getData(current) {
      if (current === undefined) {
        current = this.categories[this.activeKey];
      }
      this.loading = true;
      const { data } = await this.$request.get("/goods", {
        params: {
          category: current.text,
          page: this.page
        }
      });
      this.goodslist.push(...data.data.result);
      this.loading = false;
      this.refreshing = false;
      this.finished = this.goodslist.length >= data.data.total;
    },
    changeCategory(index) {
      const currentCategory = this.categories[index];
      this.goodslist = [];
      this.getData(currentCategory);
    },
    loadMore() {
      console.log("loadMore");
      if(this.categories.length>0){
          this.getData();
          this.page++;

      }
    },
    goto(id) {
      this.$router.push({
        path: "/goods/" + id
      });
    },
    onRefresh(){
        // 重置数据状态
        this.finished = false;
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.goodslist = [];
        this.page = 1;

        this.loadMore();
    }
  }
};
</script>
<style scoped>
.goodslist h4 {
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  max-height: 60px;
}
</style>
