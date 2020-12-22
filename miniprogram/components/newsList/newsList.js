// components/newsList/newsList.js
Component({
  properties: {

  },

  data: {
    news_list:[]
  },

  lifetimes: {
    // 生命周期函数
    attached: function () { 
      const _this = this;
      const { baseUrl } = getApp();

      // 模块列表
      wx.request({
        url: `${baseUrl}/homepageModules`,
        method: "POST",
        data:{
          onShow:1,
        },
        success(res){
          console.log(res);
          !!res.data && res.data.forEach((r) => {
            if(r.module_type === 'news'){
              _this.setData({
                news_list:r.module_data.news_list
              })
            }
          })
        }
      })
    },
  },

  methods: {
    // 点击新闻卡片
    click_news_card : function (params) {
      const {news_data} =  params.currentTarget.dataset;
      wx.navigateTo({
        url: '/pages/news_detail/news_detail?news_data='+JSON.stringify(news_data),
      })
    },
  }
})
