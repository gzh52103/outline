<template>
    <div>
        <h1>用户登录</h1>
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                :rules="rules.username"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                :rules="rules.password"
            />
            <van-field
                v-model="vcode"
                name="vcode"
                label="验证码"
                :rules="rules.vcode"
            >
                <template #extra>
                    <div
                        class="vcode"
                        v-html="vcodeSvg"
                        @click="getVcode"
                    ></div>
                </template>
            </van-field>
            <van-field
                name="checkbox"
            >
                <template #input>
                    <van-checkbox v-model="mdl" shape="square"> 下次免登录</van-checkbox>
                </template>
            </van-field>
            <div style="margin: 16px;">
                <van-button
                    block
                    type="primary"
                    native-type="submit"
                >登录</van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      vcode: "",
      vcodeSvg: "",
      mdl:true,
      rules: {
        username: [{ required: true, message: "请填写用户名" }],
        password: [{ required: true, message: "请填写密码" }],
        vcode: [{ required: true, message: "请填写验证码" }]
      }
    };
  },
  methods: {
    async onSubmit() {
      const { data } = await this.$request.post("/login", {
        username: this.username,
        password: this.password,
        vcode: this.vcode
      });
      if (data.code === 200) {
        this.$router.push("/mine");
      } else if (data.code === 400) {
        this.$toast("验证码不正确");
      } else {
        this.$toast("用户名或密码错误");
      }
    },
    async getVcode() {
      const { data } = await this.$request.get("/vcode/picture");
      this.vcodeSvg = data.data;
    }
  },
  created() {
    this.getVcode();
  }
};
</script>
<style lang='scss'>
.vcode {
  width: 111px;
  height: 40px;
  overflow: hidden;
  svg {
    height: 40px;
    transform: translateX(-20px);
  }
}
</style>
<style scoped>
</style>

