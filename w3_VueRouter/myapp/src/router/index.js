import Vue from 'vue';

// 1. 安装引入
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'

// VueRouter的使用
// 2. 使用插件
Vue.use(VueRouter);

// 3. 实例化路由并配置路由参数
const router = new VueRouter({
  // 路由配置信息
  routes:[{
    // 当浏览器地址为/home时，渲染Home组件的内容
    path:'/home',
    component:Home
  },{
    path:'/mine',
    component:Mine
  },{
    path:'/login',
    component:Login
  },{
    path:'/reg',
    component:Reg
  }]
})

export default router;