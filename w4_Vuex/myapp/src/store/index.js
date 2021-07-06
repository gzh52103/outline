import Vue from 'vue'
import Vuex from 'vuex';
import request from '../utils/request'
import user from './module/user'
import cart from './module/cart'

// 2. 安装插件
Vue.use(Vuex);



// 3. 实例化仓库
const store = new Vuex.Store({
    // 全局状态
    // 核心配置
    // store.state.xxx -> store.state.xxx = xxxx;
    state: {
        tabbarVisibility: true, // 是否显示Tabbar
    },
    getters: {
        testGetter(){
            
        }
    },
    // 修改state的唯一方式
    // store.commit('showTabbar',true)
    // store.commit('showTabbar',false)
    mutations: {
        showTabbar(state, payload) {
            state.tabbarVisibility = payload
        },
    },
    actions: {   
    },
    // vuex模块化
    modules:{
        cart:cart,
        user:user,
    }
});

console.log('store',store);

export default store;