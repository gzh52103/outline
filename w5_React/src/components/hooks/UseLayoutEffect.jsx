import React, { useState, useEffect, useMemo, useCallback, useContext, useReducer,useRef,useLayoutEffect } from 'react'


function UseLayoutEffect(props) {
    console.log('UseLayoutEffect.start')
    const [count, changeCount] = useState(10)
    useEffect(()=>{
        console.log('useEffect')
    },[])
    // useLayoutEffect为useEffect的同步版本，会阻塞页面渲染（在页面渲染前执行）
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
    },[])

    console.log('UseLayoutEffect.end');
    return (
        <div>
            <h4>8.useLayoutEffect</h4>
            <button onClick={() => {
                changeCount(count + 1)
            }}>count:{count}</button>
            
        </div>
    )
}

export default UseLayoutEffect;