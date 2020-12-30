//app.js
import config from './config.js';
const {baseUrl} = config

App({
  // 全局变量
  baseUrl,
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
