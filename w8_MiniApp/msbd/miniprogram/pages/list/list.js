import request from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort: '',
    page: 1,
    size: 10,
    datalist: [],
    total: 0,
    title: '面试题列表',
    hasMore: true
  },

  async getData() {
    let { sort, page, size, datalist } = this.data;
    // 显示loading效果
    wx.showNavigationBarLoading();
    const data = await request.get('/iq', { sort, page, size })
    datalist = [...datalist, ...data.data.result]
    this.setData({
      datalist,
      total: data.data.total,
      hasMore: datalist.length < data.data.total
    })

    // 隐藏loading效果
    wx.hideNavigationBarLoading()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({ type }) {
    let { title } = this.data;

    if (type) {
      if (type === 'addtime') {
        title = '最新面试题'
      } else if (type === 'hot') {
        title = '热门面试题'
      }
      this.setData({
        sort: type,
        title
      })

    }
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title
    })




    this.getData();
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
  onPullDownRefresh: async function () {
    console.log('refresh')
    this.setData({
      page:1,
      size:10,
      hasMore:true,
      total:0,
      datalist:[]
    })

    await this.getData();

    wx.showToast({
      title:'刷新成功'
    })

    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const { page, hasMore } = this.data;
    if(hasMore){
      this.setData({
        page: page + 1
      })
      this.getData();

    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})