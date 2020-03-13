//index.js
const app = getApp()

Page({
  data: {
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
          info:"9"
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
          info:"2"
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
        title:"最新动态",
        jumpUrl:''
      },
    ]
  },

  onLoad: function() {
    
  }

})
