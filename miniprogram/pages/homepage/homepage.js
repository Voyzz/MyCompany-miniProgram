// ************ 首页 ************
// pages/homepage/homepage.js

Page({
  data: {
    modules_data:[],
    show_popup:false,
    curr_popup_content:'',
    hot_pro_list:[],
    is_loading:true
  },

  onLoad: function (options) {
    const { baseUrl } = getApp();
    const _this = this;

    // 模块列表
    wx.request({
      url: `${baseUrl}/homepageModules`,
      method: "POST",
      data:{
        onShow:1,
      },
      success(res){
        // console.log(res);
        if(res.statusCode == 200){
          _this.setData({
            modules_data:res.data,
            is_loading:false
          })
        }
      }
    })

    // 热门产品列表
    wx.request({
      url: `${baseUrl}/getProductList`,
      method: "POST",
      data:{
        tags_reg:'热门'
      },
      success(res){
        if(res.statusCode == 200){
          _this.setData({
            hot_pro_list:res.data
          })
        }
      }
    })
  },

  // 跳转详情页
  jump_to_detail: function(data) {
    const { pro_id } = data.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?pro_id=${pro_id}`,
    })
  },

  // 打开新闻popup
  show_news_popup : function() {
    this.setData({
      curr_popup_content:'news',
      show_popup:true
    })
  },

  // 打开收藏popup
  show_favorite_popup : function() {
    const _this = this;

    _this.setData({
      curr_popup_content:'favorite',
      show_popup:true
    })
  },

  // 打开联系人popup
  show_contact_popup : function() {
    this.setData({
      curr_popup_content:'contact',
      show_popup:true
    })
  },

  // 关闭popup
  onClose:function (params) {
    this.setData({
      show_popup:false,
    })
  },

  // 跳转到产品详情
  jump_to_pro_list: function () {
    wx.switchTab({
      url: '/pages/commodity/commodity',
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