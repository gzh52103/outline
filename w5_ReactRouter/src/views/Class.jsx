import React from 'react';
import {withAuth,withAuthorization} from '../utils/hoc'

@withAuth
class Class extends React.Component{
    // 静态属性（注意：ES6支持静态方法，但不支持静态属性）
    // static contextType = context;
    // constructor(){
    //     super()
    //     this.state = {}
    // }
    state = {
        count:10
    }
    componentDidMount(){
        console.log('Calss.componentDidMount')
    }
    handleClick = ()=>{
        console.log('this',this);
        this.setState({
            count:this.state.count+1
        })
    }

    // show成为原型方法: this.show()
    show(){

    }
    // hello成为静态方法: Class.hello()
    static hello(){

    }
    render(){
        console.log('Class',this);
        return (
            <div>
                Class
                <button onClick={this.handleClick}>箭头函数的使用:{this.state.count}</button>
            </div>
        )
    }
}

// Class.contextType = context

// Class = withAuth(Class)

export default Class