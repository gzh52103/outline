import request from '@/utils/request'

export default {
    // 启动独立命名空间
    namespaced:true,
    state: {
        goodslist: [],   // 购物车商品
    },
    getters: {
        testGetter(state, getter, rootState, rootGetters) {
            // 只有启用了namespaced后，getter与rootGetters才有区别
            console.log('state&getter=', state, getter);
            console.log('rootState&rootGetter=', rootState, rootGetters);
            return 'test';
        }
    },
    mutations: {
        updateCart(state, goodslist) {
            state.goodslist = goodslist;
        }
    },
    actions: {
        getCartlist(context) {console.log('context=',context);
            const { state, commit,rootState } = context;
            // contex是一个与store拥有相同属性和方法的对象
            request.get('/cart', {
                params: {
                    userid: rootState.user.userInfo._id
                },
                // headers:{
                //     Authorization:state.userInfo.authorization
                // }
            }).then(({ data }) => {
                // 触发mutations
                commit('updateCart', data.data.goodslist);
            })
        },
        changeQty({ state, commit,rootState:{user} }, { qty, id }) {
            request.patch('/cart', {
                userid: user.userInfo._id,
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
}