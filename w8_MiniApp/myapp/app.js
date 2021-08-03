// app.js

// 调用App() 表示注册一个小程序
App({
  onLaunch(options) {
    console.log('App.onLaunch',options)
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(options){
    console.log('App.onShow',options)
  },
  onHide(){
    console.log('App.onHide')
  },

  // 用户自定义全局方法/数据
  request(){

  },
  globalData: {
    userInfo: null
  }
})
