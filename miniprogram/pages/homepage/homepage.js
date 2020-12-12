// ************ 首页 ************
// pages/homepage/homepage.js

Page({
  data: {
    modules_data:[],
    show_popup:false,
    curr_popup_content:''
  },

  onLoad: function (options) {
    const { baseUrl } = getApp();
    const _this = this;

    // 请求接口
    wx.request({
      url: `${baseUrl}/homepageModules`,
      method: "POST",
      data:{
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

  // ************ 控制popup 
  show_news_popup : function() {
    this.setData({
      curr_popup_content:'news',
      show_popup:true
    })
  },

  show_favorite_popup : function() {
    this.setData({
      curr_popup_content:'favorite',
      show_popup:true
    })
  },

  show_contact_popup : function() {
    this.setData({
      curr_popup_content:'contact',
      show_popup:true
    })
  },
  onClose:function (params) {
    this.setData({
      show_popup:false,
    })
  },

  // 点击新闻卡片
  click_news_card : function (params) {
    const {news_data} =  params.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?news_data='+JSON.stringify(news_data),
    })
  },

  onShareAppMessage: function () {

  },
})