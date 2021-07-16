import React from 'react';
import { HashRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'
import Class from './views/Class'
import Student from './views/Student'

import {withUser} from './utils/hoc'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu:[{
                path:'/home',
                text:'首页',
            },{
                path:'/class',
                text:'班级管理',
            },{
                path:'/student',
                text:'学生管理',
            },{
                path:'/login',
                text:'登录',
            }]
        }

        this.goto = this.goto.bind(this);
    }

    goto(path){
        console.log('goto=',path);
        this.props.history.push(path)
    }

    render() {
        
        console.log('App.render.props',this.props);
        const {menu} = this.state;
        return (
            <div>
                Hello App
                <nav>
                    {
                        menu.map(item=>(
                            // <Link key={item.path} to={item.path}>{item.text}</Link>
                            // <NavLink 
                            // activeStyle={{color:'#58bc58'}} 
                            // key={item.path} 
                            // to={item.path}>{item.text}</NavLink>
                            <li key={item.path} onClick={this.goto.bind(this,item.path)}>{item.text}</li>
                        ))
                    }
                </nav>

                <div className="page">
                    {/* new VueRouter({
                        mode:'hash',
                        routes:[
                            {path:'/home',component:Home}
                            {path:'/',redirect:'/login'}
                        ]
                    }) */}
                        <Switch>
                            {/* /home -> Home */}
                            <Route path="/home" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/class" component={Class} />
                            <Route path="/student">
                                <Student />
                            </Route>
                            <Route path="/notfound" component={() => <div>404</div>} />
                            <Redirect from="/" to="/login" exact />
                            <Redirect from="*" to="/notfound" />
                        </Switch>
                </div>
            </div>
        )
    }
}

App = withUser(App);
App = withRouter(App)

export default App;