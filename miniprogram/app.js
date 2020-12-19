//app.js
App({
  // 全局变量
  // baseUrl:'http://localhost:3030',
  baseUrl:'https://www.voyz.pro/api',

  onLaunch: function () {
    let userInfo = {};

    wx.cloud.init({
      traceUser: true,
    })
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        userInfo = {...res.result}
      }
    })

    this.globalData = {
      ...userInfo
    }
  },
})
