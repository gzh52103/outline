import {useState} from 'react';
// 用于获取本地存储数据的hook
export function useStorage(key){
    let value = localStorage.getItem(key);
    try{
        value = JSON.parse(value)
    }catch(err){
        value = value;
    }

    const [state,setState] = useState(value)

    const setValue = function(newValue){
        localStorage.setItem(key,newValue);

        setState(newValue)
    }

    return [state,setValue]
}

function Test(){
    const [token,setToken] = useStorage('token')

    setToken('abc123')
    return (
        <div>
            {token}
        </div>
    )
}