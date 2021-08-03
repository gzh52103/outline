// pages/test/test.js

const app = getApp();
console.log('app=',app);

// 注册小程序中的一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 10,
    score:{
      en:100
    },
    // userlist:['吴亦凡','吴签','凡凡'],
    userlist:[{
      id:1,
      username:'jingjing',
      score:[89,130,60]
    },{
      id:2,
      username:'tiantian',
      score:[129,90,66]
    },{
      id:3,
      username:'laoxie',
      score:[100,110,1]
    }],
  },
  gohome(){
    console.log('gohome')
    // 关闭所有非tabbar页面，并跳到目标页面
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  goto(e){
    console.log('goto',e)
    const {url} = e.currentTarget.dataset
    wx.redirectTo({
      url,
    })
  },
  changeCount(e) {
    // this.count++;// vue
    console.log('chagneCount',e)
    this.setData({
      count: this.data.count + 1
    })
  },
  setCount(e){
    console.log('setCount',e)
    this.setData({
      count: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('Test.onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('Test.onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})