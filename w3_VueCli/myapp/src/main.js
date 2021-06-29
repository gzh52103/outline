// 基于webpack的环境
// webpack编译时会把以下代码编译成：import Vue from '../node_modules/vue/dist/vue.runtime.esm.js
import Vue from 'vue'
import App from './App.vue'


// 引入模块对象中所有属性并复制给userModule变量
import * as userModule from './esm/user';

// 引入user模块对象中的default属性
import myuser from './esm/user.js';

// 引入模块对象中的属性
import {username as myname} from './esm/user'

console.log('userModule=',userModule);
console.log('myuser=',myuser);
// console.log('myname=',myname);

const username = 'tiantian';

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  // 渲染函数
  render: function(h){
    // h: createElement() 创建虚拟节点
    return h(App)
  },
}).$mount('#app')



/**
 * Vue的渲染机制
 * 1. 判断是否提供template选项
 * 2. 没有提供template，则使用#app的outerHTML作为template
 * 3. template中的代码会自动编译到render函数中渲染
 * 优先级：render > template > el.outerHTML
 * Vue中的编译器职责：把template中的代码编译到render函数中
 */