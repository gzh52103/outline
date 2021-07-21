import { combineReducers } from 'redux'

import userReducer from './user'
import adminReducer from './admin'
import classReducer from './class'

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    class: classReducer
})

export default rootReducer;