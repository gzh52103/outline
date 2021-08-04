import request from '../../utils/request'

// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data: {
    newlist:[],
    hotlist:[]
  },
  // 事件处理函数
  bindViewTap(e:any) {
    console.log(e);
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  async onLoad() {


    // 发起ajax请求
    // const xhr = new XMLHttpRequest();
    // fetch()
    // localStorage.getIitem()
    // wx.request({
    //   url:'http://120.76.247.5:2001/api/iq',
    //   data:{
    //     size:10,
    //     total:false
    //   },
    //   success(res){
    //     console.log('res=',res);
    //   }
    // })

    // // app.request();
    // request.get('/iq').then(data=>{
    //   console.log('data=',data);
    // })

   request.get('/iq',{total:false}).then(data=>{
     console.log('await data',data);
     this.setData({
       newlist:(data as any).data
     })

   })
    request.get('/iq',{total:false,sort:'hot'}).then(data=>{
      this.setData({
        hotlist:(data as any).data
      })

    })

  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  gotoDetail(e){
    const {iqid} = e.currentTarget.dataset
    wx.navigateTo({
      url:'/pages/iq/iq?iqid='+iqid
    })
  }
})
