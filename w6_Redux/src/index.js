import React from 'react';
import {render} from 'react-dom'
import { HashRouter,BrowserRouter,Redirect,Route } from 'react-router-dom';

import Login from './views/Login'
import App from './App'

// 根据环境自动切换路由类型
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter: HashRouter

render(
    <Router>
        <App/>
    </Router>
    ,
    document.querySelector('#app')
)