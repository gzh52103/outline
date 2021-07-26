import React,{useState,useReducer,useContext} from 'react';

import UseState from './hooks/UseState'
import UseReducer from './hooks/UseReducer'
import UseEffect from './hooks/UseEffect'
import UseMemo from './hooks/UseMemo'
import UseCallback from './hooks/UseCallback'
import UseContext from './hooks/UseContext'
import UseRef from './hooks/UseRef'
import UseLayoutEffect from './hooks/UseLayoutEffect'

import {context} from '../store'

function Hooks(){
    const [show,changeShow] = useState(true);
    // const [{goodslist}, dispatch] = useRedux()
    const {state:{goodslist},dispatch} = useContext(context);
    return (
        <div>
            <h2>React Hooks</h2>
            {JSON.stringify(goodslist)}
            {/* <UseState/> */}
            {/* {
                show ?
                <UseEffect/>
                :
                <div>已销毁</div>
            }
            <button onClick={()=>{
                changeShow(!show);
            }}>销毁/重建</button> */}

            {/* <UseMemo/> */}
            {/* <UseCallback/> */}
            {/* <UseContext/> */}
            <UseReducer/>
            {/* <UseRef/> */}
            {/* <UseLayoutEffect/> */}
            <button onClick={()=>{
                dispatch({type:'clear'})
            }}>清空</button>
        </div>
    )
}

export default Hooks;