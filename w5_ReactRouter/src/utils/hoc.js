import React from 'react';

/** 
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