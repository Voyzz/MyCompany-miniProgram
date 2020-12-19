// miniprogram/pages/introduction/introduction.js
Page({
  data: {
    modules_data:[],
    is_loading:true
  },
  onLoad: function (options) {
    const { baseUrl } = getApp();
    const _this = this;

    wx.request({
      url: `${baseUrl}/introductionModules`,
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
            modules_data:res.data,
            is_loading:false
          })
        }
      }
    })
  },
})