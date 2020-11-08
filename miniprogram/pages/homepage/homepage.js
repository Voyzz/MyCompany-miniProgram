// ************ 首页 ************
// pages/homepage/homepage.js

Page({
  data: {
    modules_data:{
      page_info:{
        name:'homepage',
        path:'pages/homepage/homepage'
      },
      modules:[
        // 【头部轮播图】模块
        {
          module_type:'header',
          module_data:{
            config:{
              "indicator_dots":false,
              "autoplay":true,
              "indicator_color":"#fff"
            },
            imgs:[
              "http://voyz-image.test.upcdn.net/2020/03/13/a3906e48b0faa8421f34725376aa82a6.png",
              "http://voyz-image.test.upcdn.net/2020/03/13/5d82f5813f3702ffaee71b89af01a6df.png",
              "http://voyz-image.test.upcdn.net/2020/03/13/9827a02961dba5cbdfc296f10cf08b36.png"
            ],
          }
        },
        // 【搜索框】模块
        {
          module_type:'search',
          module_data:{
            search_value:"",
            placeholder:"  请输入您要搜索的产品",
            search_shape:"round",
            search_background:"#ffffff",
          }
        },
        // 【商品推荐】模块
        {
          module_type:'goods',
          module_data:{
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
            ],
          }
        },
        // 【宣传语】模块
        {
          module_type:'slogan',
          module_data:{
            slogan_title:"- 全方位的专业服务 -",
            slogan_subtitle:"PROFESSIONAL SERVICE",
            slogan_content:"高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。高端品质专业的服务。",
          }
        },
        // 【新闻资讯】模块
        {
          module_type:'news',
          module_data:{
            news_title:"- 行业资讯 -",
            news_subtitle:"NEWS",
            news_list:[
              {
                title:'这是新闻标题1',
                coverImg:"http://voyz-image.test.upcdn.net/2020/03/13/a3906e48b0faa8421f34725376aa82a6.png",
                content:'这是新闻内容这是新闻内容，这是新闻内容这是新闻内容，这是新闻内容这是新闻内容。',
                data:"2020-03-13"
              },
              {
                title:'这是新闻标题2',
                coverImg:"http://voyz-image.test.upcdn.net/2020/03/13/31762353dded834e14ceedfeeda45aad.jpeg",
                content:'这是新闻内容这是新闻内容，这是新闻内容这是新闻内容，这是新闻内容这是新闻内容。',
                data:"2020-03-10"
              },
              {
                title:'这是新闻标题3',
                coverImg:"http://voyz-image.test.upcdn.net/2020/03/13/31762353dded834e14ceedfeeda45aad.jpeg",
                content:'这是新闻内容这是新闻内容，这是新闻内容这是新闻内容，这是新闻内容这是新闻内容。',
                data:"2020-02-13"
              },
              {
                title:'这是新闻标题4',
                coverImg:"http://voyz-image.test.upcdn.net/2020/03/13/31762353dded834e14ceedfeeda45aad.jpeg",
                content:'这是新闻内容这是新闻内容，这是新闻内容这是新闻内容，这是新闻内容这是新闻内容。',
                data:"2020-02-13"
              },
            ],
          }
        },
      ]
    },
  },

  onLoad: function (options) {

  },

  onShareAppMessage: function () {

  },
})