<template>
  <div id="app">
    <!-- <button @click="goBack">&lt;返回</button>
      <button @click="goHome">首页</button>
      <router-link v-for="item in menu" :key="item.path" :to="item.path" exact-active-class="current" tag="div" >{{item.text}}</router-link> -->
    <div class="container">
      <router-view />
    </div>

    <van-tabbar v-model="active" active-color="#58bc58" route v-if="$store.state.tabbarVisibility">
      <van-tabbar-item :icon="item.icon" v-for="item in menu" :key="item.path" :badge="item.path==='/cart' ? cartlen :null" :to="item.path">{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active:0,
      menu: [
        {
          path: "/home",
          text: "首页",
          icon:'wap-home-o'
        },
        
        {
          path: "/discover",
          text: "发现",
          icon:'eye-o'
        },
        {
          path: "/cart",
          text: "购物车",
          icon:'cart-o',
        },
        {
          path: "/mine",
          text: "我的",
          icon:'manager-o'
        },
      ]
    };
  },
  computed:{
    cartlen(){
      return this.$store.state.goodslist.length
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goHome() {
      // this.$router.replace('/home')
      // this.$router.push('/home')
      this.$router.push({
        path: "/home"
      });
    }
  },
  components: {},
  created() {
    console.log("App.$router", this.$router);
  }
};
</script>

<style lang="scss">
#app{
  padding-bottom:50px;
}
.current {
  color: #f00;
  font-weight: bold;
}
.container{
  padding:15px;
}
.price{
  del{
    color:#999;
    &::before{
      content:'￥'
    }
  }
  span{
    @extend del;
    color:#f00;
  }
}
</style>
