import React from 'react';
import {render} from 'react-dom'

import App from './App'
import context from './context'


render(
    <context.Provider value={{username:'laoxie',role:'admin'}}>
        <App/>
    </context.Provider>
    ,
    document.querySelector('#app')
)