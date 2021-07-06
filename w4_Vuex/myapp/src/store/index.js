import Vue from 'vue'
import Vuex from 'vuex';
import request from '../utils/request'

// 2. 安装插件
Vue.use(Vuex);

// 读取本地存储数据
let userInfo = localStorage.getItem('userInfo');
try {
    userInfo = JSON.parse(userInfo) || {}
} catch (err) {
    userInfo = {}
}

// 3. 实例化仓库
const store = new Vuex.Store({
    // 核心配置
    // store.state.xxx -> store.state.xxx = xxxx;
    state: {
        userInfo,    // 用户信息
        goodslist: [
            // {
            //   _id: "6037755f08f65d3a6c243510",
            //   goods_name:
            //     "瑞士 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 深海蓝 3441.131.96.56.30 潜水机械男表",
            //   category: "运动表",
            //   price: 9900,
            //   sales_price: 7095,
            //   installment: 825,
            //   sales_qty: 315,
            //   inventory: 651,
            //   img_url: "/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
            //   views: 904,
            //   qty: 2
            // },
            // {
            //   _id: "6037755f08f65d3a6c2435113245",
            //   goods_id: "70662",
            //   goods_name:
            //     "瑞士艺术制表大师 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 砾岩黑 3441.131.20.55.30 潜水机",
            //   category: "运动表",
            //   price: 9900,
            //   sales_price: 17095,
            //   installment: 825,
            //   sales_qty: 422,
            //   inventory: 180,
            //   img_url: "/img/62973840d24947d696882fdec2174492.jpg",
            //   views: 24,
            //   qty: 10
            // },
            // {
            //     _id: "6037755f08f65d3a6c243511",
            //     goods_id: "70662",
            //     goods_name:
            //       "瑞士艺术制表大师 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 砾岩黑 3441.131.20.55.30 潜水机",
            //     category: "运动表",
            //     price: 9900,
            //     sales_price: 17095,
            //     installment: 825,
            //     sales_qty: 422,
            //     inventory: 180,
            //     img_url: "/img/62973840d24947d696882fdec2174492.jpg",
            //     views: 24,
            //     qty: 10
            //   }
        ],   // 购物车商品
        tabbarVisibility: true, // 是否显示Tabbar
    },
    getters: {
        isLogin(state) {
            return !!state.userInfo.authorization;
        }
    },

    // 修改state的唯一方式
    // store.commit('showTabbar',true)
    // store.commit('showTabbar',false)
    mutations: {
        showTabbar(state, payload) {
            state.tabbarVisibility = payload
        },
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

        // 购物车
        updateCart(state, goodslist) {
            state.goodslist = goodslist;
        }
    },

    actions: {
        getCartlist({ state, commit }) {
            // contex是一个与store拥有相同属性和方法的对象
            request.get('/cart', {
                params: {
                    userid: state.userInfo._id
                },
                // headers:{
                //     Authorization:state.userInfo.authorization
                // }
            }).then(({ data }) => {
                // 触发mutations
                commit('updateCart', data.data.goodslist);
            })
        },
        changeQty({ state, commit }, { qty, id }) {
            request.patch('/cart', {
                userid: state.userInfo._id,
                qty,
                id
            }).then(({ data }) => {
                // 触发mutations
                if (data.code === 200) {
                    const newData = state.goodslist.map(item => {
                        if (item._id === id) {
                            item.qty = qty;
                        }
                        return item;
                    })
                    commit('updateCart', newData);
                }
            })
        }
    }
});

export default store;