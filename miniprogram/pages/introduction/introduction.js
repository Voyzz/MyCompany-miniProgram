// miniprogram/pages/introduction/introduction.js
Page({
  data: {
    // 头图
    intro_banner:"http://voyz-image.test.upcdn.net/2020/03/16/731c0dda1de9ab23503562b9fa8b03f2.png",
    // 公司简介
    intro_info:{
      title:"关于我们",
      subtitle:"ABOUT US",
      content:"关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们,关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们。"
    },
    // 公司地址
    intro_address:{
      title:"公司地址",
      subtitle:"COMPANY ADDRESS"
    },
    // 地图参数
    map:{
      longitude:"113.8141214800",
      latitude:"35.3262077200",
      scale:"16"
    },
    markers: [{
      id: 0,
      latitude: 35.3262077200,
      longitude: 113.8141214800,
      // width: 50,
      // height: 50,
      label:{
        content:"中帆东盛",
        bgColor:"#fff",
        padding:5,
        borderRadius:5,
        color:"#679fe4"
      }
    }],
  },
  onLoad: function (options) {

  },
})