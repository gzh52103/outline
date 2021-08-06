// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  upload(){
    console.log('upload')

    // 选取相册中的文件，并传到存储空间
    wx.chooseImage({
      count:1,
      success(res){
        console.log('res',res);

        const filePath = res.tempFilePaths[0]
        let fileName = filePath.match(/[\w\-]+\.[a-z]+$/)
        if(fileName){
          fileName = fileName[0]
        }else{
          fileName = 'test'
        }


        wx.cloud.uploadFile({
          cloudPath: 'users/'+fileName, // 上传至云端的路径
          filePath, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log('succes=',res.fileID)
            wx.showToast({
              title: '文件上传成功',
            })
          },
          fail:function(err){
            console.error(err)
          }
        })
      }
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