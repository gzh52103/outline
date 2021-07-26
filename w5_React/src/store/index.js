import React,{useReducer} from 'react'
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

/**
 * 自定义Hook
 */
// export function useRedux(){
//     const [state,dispatch] = useReducer(reducer,initState)

//     return [state,dispatch]
// }
export const context = React.createContext(null);

export function Provider(props){
    const [state,dispatch] = useReducer(reducer,initState)
    return (
        <context.Provider value={{state,dispatch}}>
            {props.children}
        </context.Provider>
    )
}