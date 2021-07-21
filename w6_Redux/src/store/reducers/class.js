const initState = {
    current: null
}

const reducer = function (state=initState, action) {
    switch (action.type) {
        // dispatch({type:'setCurrentClass',classid})
        case 'setCurrentClass':
            return {
                ...state,
                current: action.classid
            }
        default:
            return state;
    }
}

export default reducer