// ************ 首页 ************
// pages/homepage/homepage.js

Page({
  data: {
    // 【轮播图】参数
    swiper_params:{
      "indicator_dots":false,
      "autoplay":true,
      "indicator_color":"#fff"
    },
    swiper_imgs:[
      "http://voyz-image.test.upcdn.net/2020/03/13/a3906e48b0faa8421f34725376aa82a6.png",
      "http://voyz-image.test.upcdn.net/2020/03/13/5d82f5813f3702ffaee71b89af01a6df.png",
      "http://voyz-image.test.upcdn.net/2020/03/13/9827a02961dba5cbdfc296f10cf08b36.png"
    ],
    // 【搜索框】参数
    search_value:"",
    placeholder:"  请输入您要搜索的产品",
    search_shape:"round",
    search_background:"#ffffff",
    // 【宣传语】参数
    slogan_title:"- 全方位的专业服务 -",
    slogan_subtitle:"PROFESSIONAL SERVICE",
    slogan_content:"高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。",
    // 【新闻资讯】参数
    news_title:"- 行业资讯 -",
    news_subtitle:"NEWS",
    // 【商品推荐】参数
    tag_list:["全部","类别1","类别2","类别3"],
    card_list:[
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"磷酸二氢铝",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/13/31762353dded834e14ceedfeeda45aad.jpeg'
      },
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"苯酚",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/13/31762353dded834e14ceedfeeda45aad.jpeg'
      },
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"磷酸二氢铝",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/13/31762353dded834e14ceedfeeda45aad.jpeg'
      },
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"磷酸二氢铝",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/13/31762353dded834e14ceedfeeda45aad.jpeg'
      },
      {
        num:"2",
        price:"2",
        desc:'描述信息',
        title:"磷酸二氢铝",
        thumb:'http://voyz-image.test.upcdn.net/2020/03/13/31762353dded834e14ceedfeeda45aad.jpeg'
      }
    ]
  },

  onLoad: function (options) {

  },

  onShareAppMessage: function () {

  },
})