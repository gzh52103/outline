const initState = {
    roles:[]
}

const reducer = function (state=initState, action) {
    switch (action.type) {
        // dispatch({type:'setRole',roles})
        case 'setRole':
            return {
                ...state,
                roles:action.roles
            }
        default:
            return state;
    }
}

export default reducer