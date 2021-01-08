// miniprogram/pages/detail.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    porduct_info:{},
    is_favorite:false,
    show_popup:false
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
          let _pro_info = {...res.data[0]};

          // 价格处理
          if(!!_pro_info.price_list && _pro_info.price_list.length>0){
            let _price_list = _pro_info.price_list.map((res,idx) => {
              let _res = {...res}
              if(idx !== _pro_info.price_list.length -1){
                if(parseInt(_res.price) > parseInt(_pro_info.price_list[idx+1].price)){
                  _res.asc = true;
                }else {
                  _res.asc = false;
                }
              }else{
                _res.asc = true;
              }
              return _res
            })
            _pro_info.price_list = _price_list
          }

          _this.setData({
            porduct_info:_pro_info
          })
          console.log(_pro_info)
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
        // console.log(res);
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
        Toast.success('收藏成功');
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
        Toast.success('取消收藏');
      }
    })
  },

  // 打开popup
  detail_contact:function(){
    this.setData({
      show_popup:true
    })
  },

  // 关闭popup
  onClose:function(){
    this.setData({
      show_popup:false
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