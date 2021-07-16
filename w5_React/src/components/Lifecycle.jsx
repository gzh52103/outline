import React,{Component} from 'react'

// React.createClass({
    // getDefaultProps(){

    // }
//     getInitialState(){
//         return {

//         }
//     }
// })

class Lifecycle extends Component{
    constructor(props,context){
        super(props);
        console.log('constructor')

        this.state = {
            count:10,
            idx:this.props.index
        }
    }

    // 生命周期钩子函数
    UNSAFE_componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')

    }

    UNSAFE_componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        console.log('render')
        const {count} = this.state; 
        return (
            <div>
                Lifecycle
                <button onClick={()=>{
                    this.setState({
                        count:count+1
                    })
                }}>count:{count}</button>
            </div>
        )
    }
}

export default Lifecycle;