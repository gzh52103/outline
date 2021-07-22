import { createStore,applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk';

// 未模块化的代码
// let userInfo = localStorage.getItem('userInfo')
// try{
//     userInfo = JSON.parse(userInfo) || {}
// }catch(err){
//     userInfo = {}
// }
// const initState = {
//     userInfo,
//     role:{}
// }

// const reducer = function (state, action) {
//     console.log('reducer=>', state, action);
//     // 实现如何修改State的操作
//     switch (action.type) {
//         case 'login':
//             // state.userInfo = action.user;
//             localStorage.setItem('userInfo',JSON.stringify(action.user));
//             return {
//                 ...state,
//                 userInfo: action.user,
//             }
//         case 'logout':
//             localStorage.removeItem('userInfo');
//             return {
//                 ...state,
//                 userInfo: {},
//             } 
//     }
//     return state;
// }
// const store = createStore(reducer, initState);


// 模块化reducer后的代码
// const store = createStore(reducer);

// 使用中间件
const enhancer = applyMiddleware(thunk.withExtraArgument(100))
const store = createStore(reducer,enhancer);


console.log('store=', store);
// store.subscribe(function () {
//     // 这里的代码在state被修改后执行
//     console.log('state change', store.getState())
// })

// // 获取最新的state
// console.log('state=', store.getState());

// // 修改state
// store.dispatch({ type: 'login', user: { username: 'laoxie', password: 1234, role: 'admin' } })

export default store;