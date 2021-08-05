// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })

    wx.getUserInfo({
      success(res){
        console.log('res=',res);
      }
    })

    wx.getUserProfile({
      desc:'就想获取你的信息',
      success(res){
        console.log('profile.res',res);
      }
    })
  },
  request(){
    console.log(123)
  }
})