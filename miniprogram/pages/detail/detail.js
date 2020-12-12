// miniprogram/pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    porduct_info:{
      pro_id:'pro_111111',
      title:'商品标题',
      substitle:'Production Subtitle',
      is_favorite:false,
      is_top:false,
      extra_flag:false,
      tags_list:[],
      class_list:['热门','液态'],
      cover_img: {
        img_url:'https://img.yzcdn.cn/vant/cat.jpeg',
        is_show:true,
        img_id:'img_11111'
      },
      pro_image_list:[
        {
          pro_id:'pro_111111',
          img_url:'https://img.yzcdn.cn/vant/cat.jpeg',
          is_show:true,
          img_id:'img_11111'
        },
        {
          pro_id:'pro_111111',
          img_url:'https://img.yzcdn.cn/vant/cat.jpeg',
          is_show:true,
          img_id:'img_2222'
        },
        {
          pro_id:'pro_111111',
          img_url:'https://img.yzcdn.cn/vant/cat.jpeg',
          is_show:true,
          img_id:'img_3333'
        }
      ],
      pro_detail_list:[
        {
          pro_id:'pro_111111',
          type:'info',
          name:'产品简介',
          content:"这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介",
          detail_obj:{},
          detail_arr:[]
        },
        {
          pro_id:'pro_111111',
          type:'info',
          name:'产品参数',
          content:"",
          detail_obj:[
            {
              key:'参数1',
              value:'xxxx'
            },
            {
              key:'参数2',
              value:'xxxx'
            },
            {
              key:'参数3',
              value:'xxxx'
            }
          ],
          detail_arr:[]
        },
        {
          pro_id:'pro_111111',
          type:'info',
          name:'主要用途',
          content:"",
          detail_obj:{},
          detail_arr:['用途1','用途2','用途3']
        }
      ],
      price_list:[
        {
          pro_id:'pro_111111',
          date:'2020-12-20',
          price:'10000',
          unit:'吨',
          currency:'¥',
          is_recent:true
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!!options.news_data) {
      console.log(JSON.parse(options.news_data) );
    }
  },

})