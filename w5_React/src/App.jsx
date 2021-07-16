import React from 'react';

import request from '@/utils/request';

import Lifecycle from '@@/Lifecycle';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show:true
        }
    }
    render(){
        const {show} = this.state;
        return (
            <div>
                Hello App
                {
                    show ? 
                    <Lifecycle index="10"/>
                    :
                    <div>Lifecycle被销毁</div>
                }
                <button onClick={()=>{
                    this.setState({
                        show:!show
                    })
                }}>show:{show}</button>
            </div>
        )
    }
}

export default App;