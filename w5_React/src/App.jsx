import React from 'react';

import request from '@/utils/request';

import Lifecycle from '@@/Lifecycle';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show:true,
            index:10,
            qty:1
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                // index:this.state.index+1,
                qty:this.state.qty+1
            })
        },2000);
    }
    render(){
        console.log('App.render');
        const {show,index,qty} = this.state;
        return (
            <div>
                Hello App
                {
                    show ? 
                    <Lifecycle index={index}/>
                    :
                    <div>Lifecycle被销毁</div>
                }
                <p>qty:{qty}</p>
                <button onClick={()=>{
                    this.setState({
                        show:!show
                    })
                }}>show:{show}</button>
                <button onClick={()=>{
                    this.forceUpdate()
                }}>强制刷新</button>
            </div>
        )
    }
}

export default App;