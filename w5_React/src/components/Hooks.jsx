import React,{useState} from 'react';

import UseState from './hooks/UseState'
import UseReducer from './hooks/UseReducer'
import UseEffect from './hooks/UseEffect'
import UseMemo from './hooks/UseMemo'
import UseCallback from './hooks/UseCallback'
import UseContext from './hooks/UseContext'
import UseRef from './hooks/UseRef'
import UseLayoutEffect from './hooks/UseLayoutEffect'

function Hooks(){
    const [show,changeShow] = useState(true);
    return (
        <div>
            <h2>React Hooks</h2>
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
            {/* <UseReducer/> */}
            {/* <UseRef/> */}
            <UseLayoutEffect/>
        </div>
    )
}

export default Hooks;