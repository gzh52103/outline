import { createStore } from 'redux'

let userInfo = localStorage.getItem('userInfo')
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
    
}

const initState = {
    userInfo,
    role:{}
}

const reducer = function (state, action) {
    console.log('reducer=>', state, action);
    // 实现如何修改State的操作
    switch (action.type) {
        case 'login':
            // state.userInfo = action.user;
            localStorage.setItem('userInfo',JSON.stringify(action.user));
            return {
                ...state,
                userInfo: action.user,
            }
        case 'logout':
            localStorage.removeItem('userInfo');
            return {
                ...state,
                userInfo: {},
            } 
    }
    return state;
}

const store = createStore(reducer, initState);


// console.log('store', store);
// store.subscribe(function () {
//     // 这里的代码在state被修改后执行
//     console.log('state change', store.getState())
// })

// // 获取最新的state
// console.log('state=', store.getState());

// // 修改state
// store.dispatch({ type: 'login', user: { username: 'laoxie', password: 1234, role: 'admin' } })

export default store;