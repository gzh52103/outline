// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },

  openAuth(){
    wx.openSetting({
      withSubscriptions: true,
    })
  },

  getUserProfile(){
    wx.getUserProfile({
      desc:'就想获取你的信息',
      success(res){
        console.log('profile.res',res);
      }
    })
  },

  takePhoto() {
    // 创建摄像头对象
    const ctx = wx.createCameraContext()

    // 拍照
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })

        // 把图片存入相册（需要用户授权）
        wx.saveImageToPhotosAlbum({
          filePath: res.tempImagePath,
          success(){
            wx.showToast({
              title: '存入相册成功',
              icon:'none'
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      withSubscriptions: true,
      success(res){
        console.log('res=',res);

        if(!res.authSetting['scope.camera']){
          wx.authorize({
            scope:'scope.camera',
            success(){

            }
          })
        }

        if(!res.authSetting['scope.writePhotosAlbum']){
          wx.authorize({
            scope:'scope.writePhotosAlbum',
            success(){
              
            }
          })

          
        }
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