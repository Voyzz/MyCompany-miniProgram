// ************ 首页 ************
// pages/homepage/homepage.js

Page({
  data: {
    // 【轮播图】参数
    swiper_params:{
      "indicator_dots":true,
      "autoplay":true
    },
    swiper_imgs:[
      "http://voyz-image.test.upcdn.net/2020/03/06/9d7eaadc1f959d2360d1d4d50105eaae.jpg",
      "http://voyz-image.test.upcdn.net/2020/03/06/9d7eaadc1f959d2360d1d4d50105eaae.jpg",
      "http://voyz-image.test.upcdn.net/2020/03/06/9d7eaadc1f959d2360d1d4d50105eaae.jpg"
    ],
    // 【搜索框】参数
    search_value:"",
    placeholder:"  请输入您要搜索的产品",
    search_shape:"round",
    search_background:"#ffffff00",
    // 【商品推荐】参数
    tag_list:["全部","类别1","类别2","类别3"],
    card_list:[
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"标题",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/06/9d7eaadc1f959d2360d1d4d50105eaae.jpg'
      },
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"标题",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/06/9d7eaadc1f959d2360d1d4d50105eaae.jpg'
      },
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"标题",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/06/9d7eaadc1f959d2360d1d4d50105eaae.jpg'
      },
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"标题",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/06/9d7eaadc1f959d2360d1d4d50105eaae.jpg'
      },
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"标题",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/06/9d7eaadc1f959d2360d1d4d50105eaae.jpg'
      }
    ]
  },

  onLoad: function (options) {

  },

  onShareAppMessage: function () {

  },
})