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

import request from '../utils/request'

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
    path: '/',
    redirect: '/home'
  },
  {
    path: '/mine',
    component: Mine,
    beforeEnter(to, from, next) {
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
    component: Cart,
    meta: {
      requiresAuth: true,
    }
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
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/notfound'
  }
  ],

  // 记录滚动条位置
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log('savedPosition=',savedPosition);
    return !savedPosition ? {x:0,y:0} : new Promise((resove)=>{
      setTimeout(()=>{
        savedPosition.behavior = 'smooth';
        resove(savedPosition)
      },1000)
    })
  }
})

console.log('$router', router);

// 全局路由守卫
router.beforeEach(function (to, from, next) {
  console.log('beforeEach',to);

  // 判断目标路由是否需要登录权限才可访问
  if(to.meta.requiresAuth){
    let userInfo = localStorage.getItem('userInfo');
      try{
          userInfo = JSON.parse(userInfo)
      }catch{
          userInfo = null
      }
      if(userInfo){
        // 获取到用户信息后，还需要校验用户信息是否被篡改或是否过期
        // 校验token
        request.get('/user/verify',{
          headers:{
            Authorization:userInfo.authorization
          }
        }).then(({data})=>{
          // 根据token校验结果来决定是否让用户继续访问
          if(data.code === 400){
            // 清空用户信息
            localStorage.removeItem('userInfo');
            
            router.push({
              path:'/login',
              query:{
                target:to.fullPath
              }
            })
          }
        })
        // 如果有用户信息，不管是否过期或被篡改，先放行
        next();
      }else{
        // router.push('/login')
        router.push({
          path:'/login',
          query:{
            target:to.fullPath
          }
        })
      }
  }else{

    next();
  }
})
router.afterEach(function (to, from) {
  console.log('afterEach')
})
router.beforeResolve(function (to, from, next) {
  console.log('beforeResolve')
  next();
})
export default router;