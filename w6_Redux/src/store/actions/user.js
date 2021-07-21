
/**
 * Action Creator
    action构造器，一个用于创建action的函数
 */
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_UPDATE = 'USER_UPDATE'

export function login(user){
    return {
        type:USER_LOGIN,
        user
    }
}
export function logout(){
    return {
        type:USER_LOGOUT
    }
}

export function update(user){
    return {
        type:USER_UPDATE,
        user
    }
}

export default {
    login,
    logout,
}