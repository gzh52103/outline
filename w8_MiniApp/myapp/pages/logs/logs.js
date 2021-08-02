// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },

  // 下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新')
  },

  // 上拉操作（滚动加载）
  onReachBottom(){
    console.log('滚动加载')
  }
})
