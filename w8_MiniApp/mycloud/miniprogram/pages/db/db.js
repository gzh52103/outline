// miniprogram/pages/db/db.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  async getUserlist(){
    // 调用云函数
    const {result} = await wx.cloud.callFunction({
      name:'class',
      data:{
        a:10,b:20
      }
    })
    console.log('result',result);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取数据库对象
    const db = wx.cloud.database();

    // 获取集合
    const col = db.collection('class')

    // 数据的CRUD
    col.get().then(res=>{
      console.log('res=',res);
    })
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

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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