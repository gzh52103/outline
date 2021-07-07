import Vue from 'vue'
import Vuex from 'vuex';
import request from '../utils/request'

import router from '../router'
import authRoute from '../router/auth'

// import user from './module/user'
// import cart from './module/cart'

// 2. 安装插件
Vue.use(Vuex);

// 3. 实例化仓库
const store = new Vuex.Store({
    state: {
        userInfo:{}
    },
    getters: {
    },
    mutations: {
        login(state, userInfo) {
            state.userInfo = userInfo;

            // 写入本地存储
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
        },
        logout(state) {
            state.userInfo = {}
            // 删除本地存储数据
            localStorage.removeItem('userInfo');
        },
    },
    actions: {
        async login(context,payload){
            const { data } = await request.post("/login", payload);
            context.commit('login',data.data);

            // 动态添加路由
            if(data.code === 200){
                router.addRoutes(authRoute);
            }

            return data;
        }
    },
    // vuex模块化
    // modules:{
    //     goods:goods,
    //     user:user,
    // }
});

console.log('store',store);

export default store;