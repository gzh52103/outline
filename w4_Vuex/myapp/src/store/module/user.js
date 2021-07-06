// 读取本地存储数据
let userInfo = localStorage.getItem('userInfo');
try {
    userInfo = JSON.parse(userInfo) || {}
} catch (err) {
    userInfo = {}
}

export default {
    state: {
        userInfo
    },
    getters: {
        isLogin(state, getter, rootState, rootGetters) {
            return !!state.userInfo.authorization;
        }
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
    actions: {}
}