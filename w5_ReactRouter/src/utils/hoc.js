import React from 'react';
import { Redirect } from 'react-router-dom';
/** 
 * HOC定义方式一：属性代理
 * 获取本地存储数据：用户信息
 * 需求驱动开发
 * 给目标组件传递用户信息
 */
export function withUser(TargetComponent) {
    let user = localStorage.getItem('userInfo');
    try {
        user = JSON.parse(user) || {}
    } catch (err) {
        user = {}
    }
    return function OuterComponent(props) {
        // 注意：编写高阶组件必须传递props，否则会出现无法获取某些参数的问题
        return <TargetComponent {...props} user={user} />
    }
}

/**
 * 获取本地存储任意数据
 * @param {String} key 
 * @returns Function
 * 练习：实现多参数传递
 */
export function withStorage(key){ // userInfo,currentUser,token....
    return function(TargetComponent){
        // 接收完参数后统一处理
        let data = localStorage.getItem(key);
        try {
            data = JSON.parse(data)
        } catch (err) {
            data = data
        }

        const value = {
            [key]:data
        }

        // 函数组件
        return function OuterComponent(props){
            return <TargetComponent {...props} {...value}  />
        }

        // 类组件
        return class OuterComponent extends React.Component{
            render(){
                return <TargetComponent {...this.props} {...value}  />
            }
        }
    }
}

// withStorages('userInfo','currentUser','token')
// withStorages('userInfo')
export function withStorages(...keys){
    return function(TargetComponent){
        // 接收完参数后统一处理
        const values = {}
        keys.forEach(key=>{
            let value = localStorage.getItem(key);
            try {
                value = JSON.parse(value)
            } catch (err) {
                value = value
            }
           values[key] = value;
        })


        // 函数组件
        return function OuterComponent(props){
            return <TargetComponent {...props} {...values}  />
        }

        // 类组件
        return class OuterComponent extends React.Component{
            render(){
                return <TargetComponent {...this.props} {...values}  />
            }
        }
    }
}

export function withAuth(TargetComponent){
    function OuterComponent(props){
        const isLogin = !!props.user._id;
        if(isLogin)
            return <TargetComponent {...props} />
        else
            return <Redirect to="/login" />
    }

    OuterComponent = withUser(OuterComponent)
    return OuterComponent;
}

/**
 * HOC定义方式二：反向继承
 * 只适用于类组件
 */
export function withAuthorization(TargetComponent){
    // 创建并返回一个继承自目标组件的组件
    class OuterComponent extends TargetComponent{
        componentDidMount(){
            console.log('OuterComponent.componentDidMount')
            super.componentDidMount();
        }
        render(){
            console.log('OuterComponent.render',this.props)
            // 根据用户登录状态决定是否允许用户访问当前组件
            const isLogin = !!this.props.user._id;

            if(isLogin){
                return super.render()
            }else{
                return <Redirect to="/login" />
            }
        }
    }
    OuterComponent = withUser(OuterComponent);
    return OuterComponent
}