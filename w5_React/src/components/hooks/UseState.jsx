import React,{useState} from 'react'
import request from '../../utils/request'

function UseState(){
    console.log('UseState.start')
    const [count,changeCount] = useState(10)
    // const [qty,changeQty] = useState({qty:1})
    const [user,changeUser] = useState({});

    // request.post('/login',{username:'laoxie',password:123456}).then(data=>{
    //     console.log('data=',data);
    //     changeUser(data.data);
    // })
    
    console.log('UseState.end');
    return (
        <div>
            <h4>1.useState</h4>
            <button onClick={()=>{
                changeCount(count+1)
            }}>count:{count}</button>
            {/* <button onClick={()=>{
                changeQty({qty:qty.qty+1})
            }}>qty:{qty.qty}</button> */}
            <div>user:{JSON.stringify(user)}</div>
        </div>
    )
}

export default UseState;