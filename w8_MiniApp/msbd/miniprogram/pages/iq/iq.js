import request from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iq:{},

    // 测试数据
    price:1000,

    templateData:{a:666,b:888}
  },

  formatAmount(amount){
    console.log('formatAmount',amount)
    return amount.replace(/\B(?=(\d{3})+(?!\d))/g,',')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({iqid}) {
    console.log('iqid',iqid)

    request.get(`/iq/${iqid}`).then(data=>{
      this.setData({
        iq:data.data
      })
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