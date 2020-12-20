//app.js
App({
  // 全局变量
  // baseUrl:'http://localhost:3030',
  baseUrl:'https://www.voyz.pro/api',
  globalData:{
  },

  onLaunch: function () {
    wx.cloud.init({
      traceUser: true,
    })
  },
})
