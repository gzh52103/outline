import {USER_LOGIN,USER_LOGOUT,USER_UPDATE} from '../actions/user'

let userInfo = localStorage.getItem('userInfo')
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}

const initState = {
    userInfo
}


const reducer = function (state=initState, action) {
    // 实现如何修改State的操作
    switch (action.type) {
        case USER_LOGIN:
            // state.userInfo = action.user;
            localStorage.setItem('userInfo',JSON.stringify(action.user));
            return {
                ...state,
                userInfo: action.user,
            }
        case USER_LOGOUT:
            localStorage.removeItem('userInfo');
            return {
                ...state,
                userInfo: {},
            }
        
        // dispatch({type:'update',user:{avatar,authorization}})
        case USER_UPDATE:
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    ...action.user,
                },
            }
    }
    return state;
}

export default reducer;