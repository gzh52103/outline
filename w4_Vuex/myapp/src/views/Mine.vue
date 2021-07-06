<template>
    <div>
        <div v-if="isLogin">
            {{userInfo.username}}
            <van-button
                type="primary"
                plain
                @click="logout"
            >退出登录</van-button>
        </div>
        <div v-else>
            <h6>你还未登录，请先登录</h6>
            <van-button
                type="primary"
                plain
                @click="goto('/login')"
            >去登录</van-button>
        </div>
    </div>
</template>
<script>
export default {
  name: "Mine",
  data() {
    return {
      
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    userInfo(){
      return this.$store.state.userInfo;
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    logout() {
      this.$store.commit('logout');
    }
  },
  created() {
    console.log("Mine.created");

    
  },
  mounted() {
    console.log("Mine.mounted");
  }
};
</script>
