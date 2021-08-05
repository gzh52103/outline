// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: null,
    longitude:null,
    markers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      // altitude: 'altitude',
      type:'gcj02',
      success:(res)=>{
        console.log('res=',res);
        const {longitude,latitude} = res;
        this.setData({
          longitude,
          latitude,
          markers:[{
            longitude,
            latitude,
            title:'千锋广州',
            // iconPath:'../../assets/pos.png',
            // callout:{
            //   content:'qianfeng guangzhou',
            //   color:'#f00'
            // },
            label:{
              content:'广州千锋H5',
              color:'#58bc58'
            }
          }]
        })
      }
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