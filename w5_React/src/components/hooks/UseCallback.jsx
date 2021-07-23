import React, { useState, useEffect,useMemo,useCallback } from 'react'

const mySet = new Set();

function UseCallback(props) {
    console.log('UseCallback.start')
    const [count, changeCount] = useState(10)
    const [qty, setQty] = useState(1)

    // 传统用法
    // const changeQty = function(){
    //     setQty(qty + 1)
    // }

    // 使用方式一: 不指定依赖
    // 与传统用法一致，每次都创建一个新的函数
    // const changeQty = useCallback(function(){
    //     setQty(qty + 1)
    // })

    // 使用方式二: 空依赖
    // 只在初始化时创建一个函数，组件刷新时从缓存中获取
    // const changeQty = useCallback(function(){
    //     console.log('qty=',qty);
    //     // 为什么qty的值一直为1，是因为这里形成了一个闭包，闭包所在的作用域为这个函数创建时的作用域，创建函数时qty的值为1
    //     setQty(qty + 1)
    // },[])
    
    // 使用方式三: 指定依赖
    // 初始化和依赖有修改时会创建一个函数，否则从缓存中获取
    const changeQty = useCallback(function(){
        console.log('qty=',qty);
        // 为什么qty的值一直为1，是因为这里形成了一个闭包，闭包所在的作用域为这个函数创建时的作用域，创建函数时qty的值为1
        setQty(qty + 1)
    },[qty])

    mySet.add(changeQty);
    console.log('myset',mySet);

    console.log('UseCallback.end');
    return (
        <div>
            <h4>4.useCallback</h4>
            <button onClick={() => {
                changeCount(count + 1)
            }}>count:{count}</button>
            <button onClick={changeQty}>qty:{qty}</button>
            
        </div>
    )
}

export default UseCallback;