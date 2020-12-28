// components/proList/proList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type:String,
      value:''
    },
  },

  data: {
    pro_list:null,
    is_loading:true
  },

  lifetimes: {
    // 生命周期函数
    attached: function () { 
      const _this = this;
      const { baseUrl,openid } = getApp();
      const { type } = _this.data;

      // 收藏产品列表
      wx.request({
        url: `${baseUrl}/`+ (type == 'favo' ? 'getUserFavoList' : 'getUserHistoryList'),
        method: "POST",
        data:{
          openid
        },
        success(res){
          if(res.statusCode == 200){
            _this.setData({
              pro_list:res.data,
              is_loading:false
            })
          }
        }
      })
    },
  },

  methods:{
    // 点击收藏产品
    click_favo_pro: function (params) {
      const {pro_id} =  params.currentTarget.dataset;
      wx.navigateTo({
        url: '/pages/detail/detail?pro_id='+pro_id,
      })
    },
  },
})
