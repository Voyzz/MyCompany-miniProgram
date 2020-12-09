//app.js
App({
  // 全局变量
  // baseUrl:'http://localhost:3030',
  baseUrl:'https://www.voyz.pro/api',

  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    // wx.getUserInfo(res=>{
    //   console.log(res)
    // })

    this.globalData = {}
  }
})
