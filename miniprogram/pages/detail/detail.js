// miniprogram/pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    porduct_info:{},
    is_favorite:false,
  },
  pro_id:'',

  onLoad: function (options) {
    const { pro_id } = options;
    const { baseUrl,openid } = getApp();
    const _this = this;

    _this.pro_id = pro_id;

    // 获取产品信息
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

    // 添加访问历史
    wx.request({
      url: `${baseUrl}/addUserInfo`,
      method: "POST",
      data:{
        openid,
        history_pro_id:pro_id
      },
      success(res){
        console.log(res);
      }
    })

    // 获取收藏信息
    wx.request({
      url: `${baseUrl}/getUserInfo`,
      method: "POST",
      data:{
        openid
      },
      success(res){
        let is_favo = false;
        const { favo_list } = res.data;
        !!favo_list && favo_list.forEach((r,i) => {
          if(r.pro_id === _this.pro_id) is_favo = true;
        })
        if(is_favo){
          _this.setData({
            is_favorite:true
          })
        }
      }
    })
  },

  // 添加收藏
  add_to_favo:function(){
    const { baseUrl,openid } = getApp();
    const _this = this;

    wx.request({
      url: `${baseUrl}/addUserInfo`,
      method: "POST",
      data:{
        openid,
        favo_pro_id:_this.pro_id
      },
      success(res){
        _this.setData({
          is_favorite:true
        })
      }
    })
  },

  // 取消收藏
  remove_favo:function(){
    const { baseUrl,openid } = getApp();
    const _this = this;

    wx.request({
      url: `${baseUrl}/deleteUserInfo`,
      method: "POST",
      data:{
        openid,
        favo_pro_id:_this.pro_id
      },
      success(res){
        _this.setData({
          is_favorite:false
        })
      }
    })
  }
  
})