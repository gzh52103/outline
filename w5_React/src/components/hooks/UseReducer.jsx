import React, { useState, useEffect, useMemo, useCallback, useContext, useReducer } from 'react'

const initState = {
    goodslist: [
        { id: 1, name: "goods1", price: 98, qty: 2 },
        { id: 2, name: "goods2", price: 198, qty: 2 },
        { id: 3, name: "goods3", price: 998, qty: 1 },
    ]
}
const reducer = function (state, action) {
    switch (action.type) {
        // 添加到购物车: {type:'add',goods:{}}
        case 'add':
            return {
                ...state,
                goodslist: [action.goods, ...state.goodslist]
            };
        // 删除购物车商品：{type:'remove',id:1}
        case 'remove':
            return {
                ...state,
                goodslist: state.goodslist.filter(item => item.id !== action.id)
            };
        // 修改商品数量：{type:'change',id:1,qty:3}
        case 'change':
            return {
                ...state,
                goodslist: state.goodslist.map(item => {
                    if (item.id === action.id) {
                        item.qty = action.qty;
                    }
                    return item;
                })
            }
        // 清空购物车：{type:'clear'}
        case 'clear':
            return {
                ...state,
                goodslist:[]
            }
        default:
            throw new Error('action type error');
    }
}

function UseReducer(props) {
    console.log('UseReducer.start')
    const [count, changeCount] = useState(10)
    // const [goodslist,setGoodslist] = useState([{},{}])
    // useReducer用法类似与redux.createStore
    const [{goodslist}, dispatch] = useReducer(reducer, initState)

    // 计算总价
    const totalPrice = useMemo(()=>{
        console.log('计算总价')
        return goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
    },[goodslist])

    // 清空购物车
    const clearCart = useCallback(function(){
        dispatch({type:'clear'})
    },[])

    // 删除购物车商品
    const removeCart = useCallback(function(id){
        // 返回一个事件处理函数
        return function handle(){
            dispatch({type:'remove',id})
        }
    },[])

    // 修改商品数量
    const changeQty = useCallback(function(id){
        return function(e){
            const qty = e.target.value;
            dispatch({type:'change',id,qty})
        }
    },[])

    console.log('UseReducer.end');
    return (
        <div>
            <h4>6.useReduce</h4>
            <button onClick={() => {
                changeCount(count + 1)
            }}>count:{count}</button>
            <table style={{width:'100%'}}>
                <thead>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>商品信息</td>
                        <td>操作</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        goodslist.map(item=>(
                            <tr key={item.id}>
                                <td><input type="checkbox"/></td>
                                <td>
                                    <h4>{item.name}</h4>
                                    <p>{item.price} &times; <input type="number" value={item.qty} onChange={changeQty(item.id)} /></p>
                                </td>
                                <td>
                                    <button onClick={removeCart(item.id)}>删除</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        <div>
            <button onClick={clearCart}>清空购物车</button>
            <span>总计：{totalPrice.toFixed(2)}</span>
        </div>
        </div>
    )
}

export default UseReducer;