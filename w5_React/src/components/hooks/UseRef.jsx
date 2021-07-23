import React, { useState, useEffect, useMemo, useCallback, useContext, useReducer,useRef } from 'react'

const mySet = new Set();
function UseRef(props) {
    console.log('UseRef.start')
    const [count, changeCount] = useState(10)
    // 组件刷新时createRef每次都会创建一个新的ref
    // const ref = React.createRef();
    // useRef只在初始化时创建ref，组件刷新时从缓存中读取
    const ref = useRef(10);
    // console.log('ref=',ref);
    ref.current = 'laoxie';
    // console.log('ref=',ref);
    mySet.add(ref);
    console.log('mySet=',mySet);

    console.log('UseRef.end');
    return (
        <div>
            <h4 ref={ref}>7.useRef</h4>
            <button onClick={() => {
                changeCount(count + 1)
            }}>count:{count}</button>
            
        </div>
    )
}

export default UseRef;