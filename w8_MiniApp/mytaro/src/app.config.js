export default {
  pages: [
    'pages/index/index',
    // 'pages/mine/mine',
    // 'pages/list/list',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },

  // 分包
  // 主包与分包之间，或分包与分包之间不能同目录
  subPackages:[
    {
      "root": "package",
      "pages": [
        "list/list",
        "mine/mine"
      ]
    },
    // {
    //   "root": "package",
    //   "pages": [
    //     "mine/mine"
    //   ]
    // }
  ]
}
