// components/userInfo/userInfo.js
Component({
  properties: {
    show_choose:{
      type:Boolean,
      value:true
    },
    show_form:{
      type:Boolean,
      value:false
    },
    show_contact:{
      type:Boolean,
      value:false
    },
    type:{
      type:String,
      value:'contact'
    },
  },

  data: {
    name:'',
    phone:'',
    compony:'',
    location:'',
  },

  lifetimes: {
    // 生命周期函数
    attached: function () { 
      const _this = this;
      const { baseUrl,openid } = getApp();

       // 获取用户信息
      wx.request({
        url: `${baseUrl}/getUserInfo`,
        method: "POST",
        data:{
          openid
        },
        success(res){
          const { name,phone,compony,location } = res.data;
          if(!!name && !!phone && _this.data.type == 'contact'){
            _this.setData({
              show_choose:false,
              show_form:false,
              show_contact:true
            })
          }else if( _this.data.type == 'info'){
            _this.setData({
              show_choose:false,
              show_form:true,
              show_contact:false,
              name,phone,compony,location
            })
          }

        }
      })
    },
  },

  methods: {
    // 跳过记录
    choose_no: function(){
      this.setData({
        show_choose:false,
        show_contact:true
      })
    },

    // 确认记录
    choose_yes: function(){
      this.setData({
        show_choose:false,
        show_form:true
      })
    },

    // 表单变量
    form_name:function(e){
      this.setData({
        name:e.detail
      })
    },
    form_phone:function(e){
      this.setData({
        phone:e.detail
      })
    },
    form_compony:function(e){
      this.setData({
        compony:e.detail
      })
    },
    form_location:function(e){
      this.setData({
        location:e.detail
      })
    },

    // 跳过表单
    form_back: function() {
      this.setData({
        show_choose:false,
        show_form:false,
        show_contact:true,
      })
    },

    // 用户信息录入
    form_submit: function(){
      const { name,phone,compony,location } = this.data;
      const { baseUrl,openid,appid } = getApp();

      if(!!openid){
        this.setData({
          show_choose:false,
          show_form:false,
          show_contact:true,
        })

        wx.request({
          url: `${baseUrl}/addUserInfo`,
          method: "POST",
          data:{
            openid,
            appid,
            name,
            phone,
            compony,
            location
          },
          success(res){
            console.log(res);
          }
        })
      }
    },

    // 更新用户信息
    form_update:function(){
      const { name,phone,compony,location } = this.data;
      const { baseUrl,openid,appid } = getApp();

      wx.request({
        url: `${baseUrl}/updateUserInfo`,
        method: "POST",
        data:{
          openid,
          appid,
          name,
          phone,
          compony,
          location
        },
        success(res){
          console.log(res);
        }
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
  }
})
