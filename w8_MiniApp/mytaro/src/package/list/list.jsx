import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'

import './list.scss'


@inject('store')
@observer
class Index extends Component {
  state = {
    iqlist:[]
  }
  componentWillMount () { }

  componentDidMount () { 

    Taro.request({
      url:'https://api.qfh5.cn/api/iq',
      // success(){}
    }).then(({data})=>{
      console.log('res=',data); 
      this.setState({
        iqlist:data.data.result
      })
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  render () {
    const {iqlist} = this.state;
    console.log('iqlist=',iqlist,this.state);
    const { counterStore: { counter } } = this.props.store
    return (
      <View className='index'>
        List
        {
          iqlist.map(item=>{
            return <View>{item.question}</View>
          })
        }
        
      </View>
    )
  }
}

export default Index
