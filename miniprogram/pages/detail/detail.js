// miniprogram/pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    porduct_info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { pro_id } = options;
    const { baseUrl } = getApp();
    const _this = this;

    // 请求接口
    wx.request({
      url: `${baseUrl}/getProductList`,
      method: "POST",
      data:{
        pro_id
      },
      success(res){
        if(res.statusCode == 200){
          _this.setData({
            porduct_info:res.data[0]
          })
          console.log(res.data[0])
        }
      }
    })
  },

})