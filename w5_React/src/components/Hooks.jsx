import React,{useState} from 'react';

import UseState from './hooks/UseState'
import UseEffect from './hooks/UseEffect'
import UseMemo from './hooks/UseMemo'

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

            <UseMemo/>
        </div>
    )
}

export default Hooks;