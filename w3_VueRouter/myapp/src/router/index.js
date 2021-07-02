import Vue from 'vue';

// 1. 安装引入
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
import Cart from '../views/Cart.vue'
import Discover from '../views/Discover.vue'
import Goods from '../views/Goods.vue'
import NotFound from '../views/NotFound.vue'

// VueRouter的使用
// 2. 使用插件
Vue.use(VueRouter);

// 3. 实例化路由并配置路由参数
const router = new VueRouter({
  // 路由配置信息
  routes: [{
    // 当浏览器地址为/home时，渲染Home组件的内容
    path: '/home',
    component: Home
  }, 
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/mine',
    component: Mine,
    beforeEnter(to,from,next){
      console.log('Mine.beforeEnter')
      next();
    }
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/reg',
    component: Reg
  }, {
    path: '/discover',
    component: Discover
  }, {
    path: '/cart',
    component: Cart
  }, {
    path: '/goods/:id', // goods/123 -> goods/456
    name: 'DGoods',
    component: Goods,
    // 给子组件传递固定数据（props父传子）
    // props:{username:'laoxie'},
    // props:function(route){
    //   // route: $route当前路由信息
    //   return {username:'laoxie'}
    // },
    // props: true,// 等效于props(route){return route.params}
  },
    {
      path:'/notfound',
      name:'NotFound', 
      component:NotFound
    },
    {
      path:'*',
      redirect:'/notfound'
    }
  ]
})

// 全局路由守卫
router.beforeEach(function(to,from,next){
  console.log('beforeEach')
  next();
})
router.afterEach(function(to,from){
  console.log('afterEach')
})
router.beforeResolve(function(to,from,next){
  console.log('beforeResolve')
  next();
})
export default router;