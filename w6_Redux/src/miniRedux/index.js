/**
 * 简化版redux
 * @param {Function} reducer 
 * @param {Object} initState?
 * @returns Object
 */
export function createStore(reducer,initState){
    let state = initState;

    let listeners = []

    // 获取最新state
    const getState = function(){
        return state;
    }

    // 修改state
    const dispatch = function(action){
        state = reducer(state,action);

        // redux中会对当前state和之前的state进行对比
        // 有修改才执行listender

        listeners.forEach(listener=>{
            listener(state);
        })

        return action;
    }

    // 监听state修改
    // 订阅发布者模式
    const subscribe = function(fn){
        // 保存fn
        listeners.push(fn);

        // 返回一个函数，用于取消当前监听
        return function unsubscribe(){
            listeners = listeners.filter(item=>item!==fn)
        }
    }

    // 替换reducer
    const replaceReducer = function(newReducer){
        reducer = newReducer;
    }
    return {
        getState,
        dispatch,
        subscribe,
        replaceReducer
    }
}


// 需求驱动开发
// import {createStore} from 'redux'
// const store = createStore(reducer,initState)
// // store = {getState(),dispatch(),subscribe()}
// store.getState();// state
// store.dispatch({})
// store.getState(); //最新的state
// store.subscribe(function(){
//     console.log(666)
// })
// store.subscribe(function(){
//     console.log(777)
// })
// store.subscribe(function(){
//     console.log(888)
// })
// store.dispatch(action)
