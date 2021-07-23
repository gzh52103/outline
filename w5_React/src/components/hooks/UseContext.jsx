import React, { useState, useEffect,useMemo,useCallback,useContext } from 'react'
import context from '../../context'

function UseContext(props) {
    console.log('UseContext.start')
    const [count, changeCount] = useState(10)
    const [qty, setQty] = useState(1)
    const res = useContext(context);// 返回共享数据
    console.log('res=',res)

    console.log('UseContext.end');
    return (
        <div>
            {/* <context.Consumer>
                {
                    (value)=>{
                        console.log('value=',value);
                    }
                }
            </context.Consumer> */}
            <h4>5.useContext</h4>
            <button onClick={() => {
                changeCount(count + 1)
            }}>count:{count}</button>

            
        </div>
    )
}

export default UseContext;