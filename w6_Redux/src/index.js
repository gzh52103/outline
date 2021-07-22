import React from 'react';
import {render} from 'react-dom'
import { HashRouter,BrowserRouter,Redirect,Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import Login from './views/Login'
import App from './App'
import store from './store'

// 测试简化版redux
import {createStore} from './miniRedux'
const initState = {
    userInfo:{
        username:'laoxie'
    }
}
const reducer = function(state,action){
    switch(action.type){
        case 'login':
            return {
                ...state,
                userInfo:action.user
            }
        case 'logout':
            return {
                ...state,
                userInfo:{}
            }
        default:
            return state;
    }
}
const miniStore = createStore(reducer,initState);
// 获取
console.log('miniState1=',miniStore.getState())
// 监听
miniStore.subscribe(function(){
    console.log('监听ministate')
})
const unsubscribe = miniStore.subscribe(function(state){
    console.log('再次监听ministate')
})
//修改
const action = miniStore.dispatch({type:'login',user:{username:'tt',authorization:'sjdflasj',role:'vip'}})
console.log('miniState2=',miniStore.getState())

// 取消监听
unsubscribe()

miniStore.dispatch({type:'logout'})
console.log('miniState3=',miniStore.getState())



// 根据环境自动切换路由类型
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter: HashRouter

render(
    // Provider只需要共享store仓库，就能在下面的子组件中获取到state和修改它的方法
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.querySelector('#app')
)