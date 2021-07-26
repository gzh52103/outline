import React from 'react';
import {render} from 'react-dom'

import App from './App'
import context from './context'
import {Provider} from './store'


render(
    // <context.Provider value={{username:'laoxie',role:'admin'}}>
        <Provider>
            <App/>
        </Provider>
    // </context.Provider>
    ,
    document.querySelector('#app')
)