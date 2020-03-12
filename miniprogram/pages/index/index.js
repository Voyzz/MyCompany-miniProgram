//index.js
const app = getApp()

Page({
  data: {
    squareList:[
      {
        icon:"/images/icons/market.png",
        title:"我的订单",
        jumpUrl:''
      },
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
