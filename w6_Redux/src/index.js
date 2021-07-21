import React from 'react';
import {render} from 'react-dom'
import { HashRouter,BrowserRouter,Redirect,Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import Login from './views/Login'
import App from './App'
import store from './store'

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