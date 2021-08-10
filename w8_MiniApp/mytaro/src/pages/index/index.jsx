import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'
import { AtButton,AtSteps } from 'taro-ui'

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

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

  goto = (url)=>{
    Taro.navigateTo({
      url
    })
  }

  render () {
    const { counterStore: { counter } } = this.props.store
    const items = [
      { 'title': '步骤一', 'desc': '这里是额外的信息，最多两行' },
      { 'title': '步骤二', 'desc': '这里是额外的信息，最多两行' },
      { 'title': '步骤三', 'desc': '这里是额外的信息，最多两行' }
    ]
    return (
      <View className='container'>
        <Button type="primary" onClick={this.increment}>+</Button>
        <Button type="default" onClick={this.decrement}>-</Button>
        <Button type="warn" onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>

        <Button type="default" onClick={this.goto.bind(this,'/package/mine/mine')}>我的</Button>

        <AtButton type="primary">凹凸按钮</AtButton>

      <AtSteps
        items={items}
        // current={this.state.current}
        // onChange={this.onChange.bind(this)}
      />
      </View>
    )
  }
}

export default Index
