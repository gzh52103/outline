// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0,
    menu:[{
      "pagePath":"/pages/index/index",
      "text":"首页",
      "iconPath":"/img/home.png",
      "selectedIconPath":"/img/home_active.png",
      // "selectedIconPath":"https://img2.baidu.com/it/u=3337194467,672949329&fm=26&fmt=auto&gp=0.jpg"
      // dot: true,
      badge:'new',
    },{
      "pagePath":"/pages/mine/mine",
      "text":"我的",
      "iconPath":"/img/mine.png",
      "selectedIconPath":"/img/mine_active.png"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e){
      const {index,item} = e.detail
      console.log('tabChange',index,item)

      wx.switchTab({
        url: item.pagePath,
      })
    }
  }
})
