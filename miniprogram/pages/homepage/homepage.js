// ************ 首页 ************
// pages/homepage/homepage.js

Page({
  data: {
    modules_data:[]
  },

  onLoad: function (options) {
    const { baseUrl } = getApp();
    const _this = this;

    wx.request({
      url: `${baseUrl}/homepageModules`,
      method: "POST",
      data:{
        // moduleType:'header',
        // pType:'update',
        // moduleData:JSON.stringify(_data),
        // position:5,
        onShow:1,
      },
      success(res){
        console.log(res);
        if(res.statusCode == 200){
          _this.setData({
            modules_data:res.data
          })
        }
      }
    })
  },

  onShareAppMessage: function () {

  },
})