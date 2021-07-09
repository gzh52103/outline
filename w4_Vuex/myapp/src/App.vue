<template>
  <div id="app">
    <!-- <button @click="goBack">&lt;返回</button>
      <button @click="goHome">首页</button>
      <router-link v-for="item in menu" :key="item.path" :to="item.path" exact-active-class="current" tag="div" >{{item.text}}</router-link> -->
    <div class="container">
      <!-- transition与keep-alive同时使用时，transition要在最外层，否则keep-alive会失效 -->
      <transition :name="transitionName">
        <keep-alive include="Discover,Cart">
          <router-view />
        </keep-alive>
      </transition>
    </div>

    <van-tabbar
      v-model="active"
      active-color="#58bc58"
      route
      v-if="$store.state.tabbarVisibility"
    >
      <van-tabbar-item
        :icon="item.icon"
        v-for="item in menu"
        :key="item.path"
        :badge="item.path==='/cart' ? cartlen :null"
        :to="item.path"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
// const result = mapState(['tabbarVisibility']);console.log('result=',result);
export default {
  name: "App",
  inject:['username'],
  data() {
    return {
      transitionName: "slide-right",
      active: 0,
      menu: [
        {
          path: "/home",
          text: "首页",
          icon: "wap-home-o"
        },

        {
          path: "/discover",
          text: "发现",
          icon: "eye-o"
        },
        {
          path: "/cart",
          text: "购物车",
          icon: "cart-o"
        },
        {
          path: "/mine",
          text: "我的",
          icon: "manager-o"
        }
      ]
    };
  },
  computed: {
    cartlen() {
      return this.$store.state.cart.goodslist.length;
    }
    // ...mapState(['tabbarVisibility'])
    // ...mapState({
    //   'visibility':'tabbarVisibility',
    //   'carLength':function(state){
    //     return state.cart.goodslist.length;
    //   }
    // })
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length; // /home->/discover
      const fromDepth = from.path.split("/").length; // /discover -> /goods/123
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
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
    console.log("App", this);
    console.log('App.created.username=',this.username);
  }
};
</script>

<style lang="scss">
#app {
  padding-bottom: 50px;
}
.current {
  color: #f00;
  font-weight: bold;
}
.container {
  padding: 15px;
}
.price {
  del {
    color: #999;
    &::before {
      content: "￥";
    }
  }
  span {
    @extend del;
    color: #f00;
  }
}
.slide-right-enter {
  transform: translateX(100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}
.slide-right-enter-active {
  transition: transform 0.5s ease-out;
}

.slide-left-enter {
  transform: translateX(-100%);
}
.slide-left-enter-to {
  transform: translateX(0);
}
.slide-left-enter-active {
  transition: transform 0.5s ease-out;
}
</style>
