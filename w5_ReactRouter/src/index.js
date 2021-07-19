import React from 'react';
import {render} from 'react-dom'
import { HashRouter,BrowserRouter,Redirect,Route } from 'react-router-dom';

import Login from './views/Login'
import App from './App'


let userInfo = localStorage.getItem('userInfo')
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}

const isLogin = !!userInfo._id;

// 根据环境自动切换路由类型
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter: HashRouter

render(
    <Router>
        {
            isLogin ?
            <App/>:
            <>
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
            </>
        }
    </Router>
    ,
    document.querySelector('#app')
)