import React, { useState, useEffect } from 'react'
import request from '../../utils/request'

function UseEffect() {
    console.log('UseEffect.start')
    const [count, changeCount] = useState(10)
    const [username, changeUsername] = useState('laoxie');
    const [password, changePassword] = useState('123456');
    const [user, changeUser] = useState({});

    // 传统用法
    // request.post('/login',{username:'laoxie',password:123456}).then(data=>{
    //     console.log('data=',data);
    //     changeUser(data.data);
    // })

    // 使用方式一：默认用法（等效于componentDidMount+componentDidUpdate）
    // useEffect(function(){
    //     // 初始化和更新时都执行这里的代码
    //     console.log('方式一')
    //     request.post('/login',{username:'laoxie',password:123456}).then(data=>{
    //         changeUser(data.data);
    //     })
    // })

    // 使用方式二：指定依赖（等效于componentDidMount+shouldComponentUpdate）
    // useEffect(function () {
    //     // 初始化和依赖更新时都执行这里的代码
    //     console.log('方式二')
    //     request.post('/login', { username, password }).then(data => {
    //         changeUser(data.data);
    //     })
    // }, [username, password])

    // 使用方式三：指定空依赖（等效于componentDidMount）
    // useEffect(function () {
    //     // 初始化时执行这里的代码
    //     console.log('方式三')
    //     request.post('/login', { username, password }).then(data => {
    //         changeUser(data.data);
    //     })
    // }, []);
    
    // 使用方式四：useEffect返回一个函数（等效于componentWillUnmount）
    useEffect(function () {
        // 初始化时执行这里的代码
        console.log('方式四')
        return function destroyed(){
            // 这里的代码在组件销毁时执行
            console.log('销毁')
        }
    }, []);
    
    console.log('UseEffect.end');
    return (
        <div>
            <h4>2.useEffect</h4>
            <button onClick={() => {
                changeCount(count + 1)
            }}>count:{count}</button>
            <div>user:{JSON.stringify(user)}</div>
            <div>用户名：<input type="text" value={username} onChange={(e) => {
                changeUsername(e.target.value);
            }} /></div>
        </div>
    )
}

export default UseEffect;