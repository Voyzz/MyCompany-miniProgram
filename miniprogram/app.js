//app.js
App({
  // 全局变量
  // baseUrl:'http://localhost:3000',
  baseUrl:'https://www.voyz.pro/api',
  openid:'',
  appid:'',
  onLaunch: function () {
    wx.cloud.init({
      traceUser: true,
    })

    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        const { openid,appid } = res.result;
        if(!!openid){
          this.openid = openid;
          this.appid = appid;
        }
      }
    })
  },
})
