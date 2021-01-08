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

  onShareAppMessage: function () {
    return {
      path: 'pages/homepage/homepage' ,
      imageUrl:'https://lg-7pc5j6x4-1257302752.cos.ap-shanghai.myqcloud.com/logo3.jpg',
      success: function (res) {
        console.log('转发成功')
      },
      fail: function (res) {
        console.log('转发失败')
      }
    }
  },
})