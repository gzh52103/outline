import React,{Component,PureComponent} from 'react'

// React.createClass({
    // getDefaultProps(){

    // }
//     getInitialState(){
//         return {

//         }
//     }
// })

class Lifecycle extends PureComponent {
    constructor(props,context){
        super(props);
        console.log('constructor')

        this.state = {
            count:10,
            // idx:this.props.index,
        }
    }

    // 生命周期钩子函数
    UNSAFE_componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')

    }

    // 特殊钩子函数
    // 该函数必须返回一个boolean，一般用于优化性能
    // true：刷新组件
    // false：不刷新
    // shouldComponentUpdate(nextProps,nextState){
    //     // nextProps: 将要更新的props
    //     // this.props: 当前值
    //     // nextState: 将要修改的state
    //     // this.state: 当前值
    //     console.log('shouldComponentUpdate',nextProps,nextState)

    //     // 优化父组件刷新但传入当前组件数据没有发生改变的问题
    //     if(JSON.stringify(nextProps) === JSON.stringify(this.props) && JSON.stringify(nextState)===JSON.stringify(this.state)){
    //         return false;
    //     }

    //     // count值为5的倍数刷新组件，否则不刷新
    //     return nextState.count%5===0
    // }
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps=',nextProps)
    }

    UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate')
    }
    // render()
    componentDidUpdate(prevProps,prevState){
        // this.props: 
        // this.state: 11, prevState: 10
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        console.log('render')
        const {count,goods} = this.state; 
        return (
            <div>
                Lifecycle
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>count:{count}</button>
            </div>
        )
    }
}

export default Lifecycle;