import Vue from 'vue'
import Vuex from 'vuex';

// 2. 安装插件
Vue.use(Vuex);

// 3. 实例化仓库
const store = new Vuex.Store({
    // 核心配置
    // store.state.xxx -> store.state.xxx = xxxx;
    state:{
        userInfo:{},    // 用户信息
        goodslist:[
            {
              _id: "6037755f08f65d3a6c243510",
              goods_name:
                "瑞士 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 深海蓝 3441.131.96.56.30 潜水机械男表",
              category: "运动表",
              price: 9900,
              sales_price: 7095,
              installment: 825,
              sales_qty: 315,
              inventory: 651,
              img_url: "/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
              views: 904,
              qty: 2
            },
            {
              _id: "6037755f08f65d3a6c2435113245",
              goods_id: "70662",
              goods_name:
                "瑞士艺术制表大师 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 砾岩黑 3441.131.20.55.30 潜水机",
              category: "运动表",
              price: 9900,
              sales_price: 17095,
              installment: 825,
              sales_qty: 422,
              inventory: 180,
              img_url: "/img/62973840d24947d696882fdec2174492.jpg",
              views: 24,
              qty: 10
            },
            {
                _id: "6037755f08f65d3a6c243511",
                goods_id: "70662",
                goods_name:
                  "瑞士艺术制表大师 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 砾岩黑 3441.131.20.55.30 潜水机",
                category: "运动表",
                price: 9900,
                sales_price: 17095,
                installment: 825,
                sales_qty: 422,
                inventory: 180,
                img_url: "/img/62973840d24947d696882fdec2174492.jpg",
                views: 24,
                qty: 10
              }
          ],   // 购物车商品
        tabbarVisibility:true, // 是否显示Tabbar
    },
    getters:{
        isLogin(){
            return !!userInfo.authorization;
        }
    },

    // 修改state的唯一方式
    // store.commit('showTabbar',true)
    // store.commit('showTabbar',false)
    mutations:{
        showTabbar(state,payload){
            state.tabbarVisibility = payload
        }
    }
});

export default store;