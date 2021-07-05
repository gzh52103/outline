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
      userInfo: {}
    };
  },
  computed: {
    isLogin() {
      return !!this.userInfo._id;
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    logout() {
      this.userInfo = {};
      localStorage.removeItem("userInfo");
    }
  },
  created() {
    console.log("Mine.created");

    // 获取用户信息
    let userInfo = localStorage.getItem("userInfo");
    try {
      userInfo = JSON.parse(userInfo) || {};
    } catch {
      userInfo = {};
    }
    this.userInfo = userInfo;
  },
  mounted() {
    console.log("Mine.mounted");
  }
};
</script>
