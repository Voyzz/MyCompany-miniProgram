//index.js
const app = getApp()
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({
  data: {
    show_popup:false,
    curr_popup_content:'',
    favo_pro_list:[],
    orderInfo:{
      icon:"/images/icons/market.png",
      title:"我的订单",
      jumpUrl:'',
      orderItemColor:'#9c9c9c',
      orderItemsList:[
        {
          icon:'cash-back-record',
          title:"待支付",
          jumpUrl:'',
          info:""
        },
        {
          icon:'logistics',
          title:"进行中",
          jumpUrl:'',
          info:""
        },
        {
          icon:'completed',
          title:"已完成",
          jumpUrl:'',
          info:""
        },
        {
          icon:'failure',
          title:"已取消",
          jumpUrl:'',
          info:""
        }
      ]
    },
    squareList:[
      {
        icon:"/images/icons/likes.png",
        title:"我的收藏",
        jumpUrl:''
      },
      {
        icon:"/images/icons/history.png",
        title:"浏览历史",
        jumpUrl:''
      },
      {
        icon:"/images/icons/info.png",
        title:"个人信息",
        jumpUrl:''
      },
      {
        icon:"/images/icons/phone.png",
        title:"联系我们",
        jumpUrl:''
      },
      {
        icon:"/images/icons/alert.png",
        title:"行业动态",
        jumpUrl:''
      },
    ]
  },

  onHide: function() {
    this.setData({
      show_popup:false,
      curr_popup_content:'',
      favo_pro_list:[],
    })
  },

  click_icon:function(e){
    switch (e.currentTarget.dataset.type){
      case '我的收藏':
        this.setData({
          show_popup:true,
          curr_popup_content:'favo'
        })
        break
      case '浏览历史':
        this.setData({
          show_popup:true,
          curr_popup_content:'history'
        })
        break
      case '个人信息':
        this.setData({
          show_popup:true,
          curr_popup_content:'info'
        })
        break
      case '联系我们':
        this.setData({
          show_popup:true,
          curr_popup_content:'contact'
        })
        break
      case '行业动态':
        this.setData({
          show_popup:true,
          curr_popup_content:'news'
        })
        break
    }
  },

  // 关闭popup
  onClose:function (params) {
    this.setData({
      show_popup:false,
    })
  },

  // 点击订单
  click_order:function(){
    Dialog.alert({
      title: '支付功能暂未开放',
      message: '敬请期待',
      theme: 'round-button',
    }).then(() => {
    });
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
