// ************ 首页 ************
// pages/homepage/homepage.js

Page({
  data: {
    modules_data:[],
    show_popup:false,
    curr_popup_content:'',
    hot_pro_list:[],
    favo_pro_list:[],
    is_loading:true
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
        // console.log(res);
        if(res.statusCode == 200){
          _this.setData({
            modules_data:res.data
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
            hot_pro_list:res.data,
            is_loading:false
          })
          // console.log(res.data)
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

  // ************ 控制popup ************
  // 打开新闻popup
  show_news_popup : function() {
    this.setData({
      curr_popup_content:'news',
      show_popup:true
    })
  },

  // 打开收藏popup
  show_favorite_popup : function() {
    const { baseUrl } = getApp();
    const _this = this;

    // 收藏产品列表
    wx.request({
      url: `${baseUrl}/getProductList`,
      method: "POST",
      data:{
        tags_reg:'热门'
      },
      success(res){
        if(res.statusCode == 200){
          _this.setData({
            favo_pro_list:res.data,
            curr_popup_content:'favorite',
            show_popup:true
          })
          console.log(res.data)
        }
      }
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

  jump_to_pro_list: function () {
    wx.switchTab({
      url: '/pages/commodity/commodity',
    })
  },

  // 点击新闻卡片
  click_news_card : function (params) {
    const {news_data} =  params.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?news_data='+JSON.stringify(news_data),
    })
  },

  // 点击收藏产品
  click_favo_pro: function (params) {
    const {pro_id} =  params.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?pro_id='+pro_id,
    })
  },

  // 拨打电话
  phone_call: function() {
    wx.makePhoneCall({
      phoneNumber: '18217501371',
    })
  },

  // 邮件
  copy_email: function() {
    const title = '邮箱地址'
    const content = '18217501371@163.com'
    wx.showModal({
      title: title,
      content: content,
      cancelText: '取消',
      confirmText: '复制',
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击复制')
          wx.setClipboardData({
            data: content,
            success: (res) => {
              wx.showToast({
                title: '已复制邮箱地址',
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
    })
  },

  onShareAppMessage: function () {
    return {
      path: 'pages/homepage/homepage' ,
      imageUrl:'https://lg-7pc5j6x4-1257302752.cos.ap-shanghai.myqcloud.com/logo.jpg',
      success: function (res) {
        console.log('转发成功')
      },
      fail: function (res) {
        console.log('转发失败')
      }
    }
  },
})