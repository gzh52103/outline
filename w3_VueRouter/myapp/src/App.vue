<template>
  <div id="app">
      <router-link v-for="item in menu" :key="item.path" :to="item.path" active-class="current">{{item.text}}</router-link>
      <div>
        <router-view/>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      menu:[
        {
          path:'/home',
          text:'首页'
        },
        {
          path:'/mine',
          text:'我的'
        },
        {
          path:'/login',
          text:'登录'
        },
        {
          path:'/reg',
          text:'注册'
        },
      ]
    }
  },
  components: {
  }
}
</script>

<style>
.current{color:#f00;font-weight: bold}
</style>
