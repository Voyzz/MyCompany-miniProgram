// components/userInfo/userInfo.js
Component({
  properties: {
  },

  data: {
    show_choose:true,
    show_form:false,
    show_contact:false,
    name:'',
    phone:'',
    compony:'',
    location:'',
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

    // 提交表单
    form_submit: function(){
      const { name,phone,compony,location } = this.data;
      this.setData({
        show_choose:false,
        show_form:false,
        show_contact:true,
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
