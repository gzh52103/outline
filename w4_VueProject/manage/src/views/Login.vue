<template>
  <div class="login-page">
    <h1>用户登录</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input
          v-model="ruleForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="验证码"
        prop="vcode"
      >
        <el-input
          v-model="ruleForm.vcode"
        >
          <template v-slot:append>
            <div v-html="vcodeSvg"></div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm:{
        username:'',
        password:'',
        mdl:true,
        vcode:''
      },
      vcodeSvg:'',
      rules: {
        username: [{ required: true, message: "请填写用户名" }],
        password: [{ required: true, message: "请填写密码" }],
        vcode: [{ required: true, message: "请填写验证码" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            
            // const {username,password,mdl} = this.ruleForm
            // const { data } = await this.$request.post("/login", {
            //   username,
            //   password,
            //   mdl
            // });

            const data = await this.$store.dispatch('login',this.ruleForm)
            console.log('loginData',data);
            if (data.code === 200) {
              // 保存用户信息到本地
              // this.$store.commit('login',data.data);
              
              const { target = "/manage" } = this.$route.query;
              this.$router.replace(target);
            } else if (data.code === 400) {
              this.$message({
                type:'success',
                message:"验证码不正确",
              });
            } else {
              this.$message({
                type:'error',
                message:"用户名或密码错误",
              });
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      
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
.login-page{
  width:500px;margin: auto;
}
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

