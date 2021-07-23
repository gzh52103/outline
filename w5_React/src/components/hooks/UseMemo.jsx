import React, { useState, useEffect,useMemo } from 'react'
import request from '../../utils/request'

const data = [
    {id:1,name:'goods1',price:10,qty:1},
    {id:2,name:'goods2',price:19,qty:2},
    {id:3,name:'goods3',price:59,qty:1},
    {id:4,name:'goods4',price:299,qty:10},
]

function UseMemo() {
    console.log('UseMemo.start')
    const [count, changeCount] = useState(10)
    const [goodslist,changeGoodslist] = useState(data)

    // 传统用法
    // const totalPrice = goodslist.reduce((prev,item)=>{
    //     console.log(666)
    //     return prev+item.price*item.qty
    // },0)

    // 使用方式一：没有依赖（初始化与组件刷新时都会重新计算）
    // const totalPrice = useMemo(function(){
    //     console.log('计算总价')
    //     return goodslist.reduce((prev,item)=>{
    //         return prev+item.price*item.qty
    //     },0)
    // })

    // 使用方式二：空依赖（只在初始化时计算，组件刷新时都是从缓存中读取）
    // const totalPrice = useMemo(function(){
    //     console.log('计算总价')
    //     return goodslist.reduce((prev,item)=>{
    //         return prev+item.price*item.qty
    //     },0)
    // },[])
    
    // 使用方式三：指定依赖（初始化与依赖发生改变时计算，否则从缓存中读取）
    const totalPrice = useMemo(function(){
        console.log('计算总价')
        return goodslist.reduce((prev,item)=>{
            return prev+item.price*item.qty
        },0)
    },[goodslist])
    

    console.log('UseMemo.end');
    return (
        <div>
            <h4>3.useMemo</h4>
            <button onClick={() => {
                changeCount(count + 1)
            }}>count:{count}</button>
            <p>总价：{totalPrice}</p>
            <button onClick={()=>{
                const newlist = [{id:100,name:'goods100',price:100,qty:5},...goodslist]
                changeGoodslist(newlist)
            }}>添加商品</button>
        </div>
    )
}

export default UseMemo;