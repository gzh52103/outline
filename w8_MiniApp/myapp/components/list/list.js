// components/list/list.js
// const myBehavior = Behavior({
//   // 公共配置，与组件配置一致
//   data:{
//     qty:1
//   }
// })

import {myBehavior} from '../../behaviors/index'
console.log('myBehavior',myBehavior);

Component({
  /**
   * 组件的属性列表：父组件传入的数据，与Vue的props一致
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据，功能Vue一致
   */
  data: {
    // list:['hello','everyone','yes']
    count:10,
  },

  /**
   * 监听properties与data下的数据变化，与Vue中的watch一致
   */
  observers:{
    count:function(c){
      console.log('count修改',c)
    }
  },

  /**
   * 复用配置，类似于Vue中的mixins
   */
  behaviors:[myBehavior],

  /**
   * 组件的方法列表，与Vue一致
   * 组件中的事件处理函数，必须放在methods中
   */
  methods: {
    changeCount(){
      this.setData({
        count:this.data.count+1
      })
    }
  },

  // 生命周期函数
  // 1. 组件生命周期函数
  lifetimes:{
    created(){
      console.log('list.created',this);
    }
  },

  // 2. 页面生命周期函数
  pageLifetimes:{
    show(){
      // 这里的this指向组件实例
      console.log('list.show',this);
    },
    hide(){
      console.log('list.hide')
    }
  }
})
