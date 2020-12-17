// miniprogram/pages/commodity/commodity.js
Page({
  data: {
    tags_list:[],
    class_list:[],
    pro_list:[],
    currClass:'全部',
    currSideIndex:0,
    currProNum:''
  },

  onLoad: function (options) {
    this.fetch_pro_list({
      is_basic:true
    },true)
  },

  // 请求接口
  fetch_pro_list:function(params,init){
    const { baseUrl } = getApp();
    const _this = this;

    _this.setData({ currProNum:'' })

    // 请求接口
    wx.request({
      url: `${baseUrl}/getProductList`,
      method: "POST",
      data:params,
      success(res){
        if(res.statusCode == 200){
          const {data} = res;
          let _tags_list = [],_class_list=[];

          console.log(data);
          if(init){
            data.forEach((item,idx) => {
              _tags_list = _tags_list.concat(item.tags_list);
              _class_list = _class_list.concat(item.class_list);
            })
  
            _this.setData({
              tags_list:Array.from(new Set(_tags_list)),
              class_list:Array.from(new Set(_class_list)),
            })
          }

          let top_list = [],untop_list=[],_data;
          data.forEach((pro,idx) => {
            if(pro.is_top) top_list.push(pro);
            else untop_list.push(pro);
          })
          _data = top_list.concat(untop_list);

          _this.setData({
            pro_list:_data,
            currProNum:_data.length
          })
        }
      }
    })
  },

  // 搜索
  on_input: function(e){
    if(!!e.detail.value){
      this.fetch_pro_list({
        title_reg:e.detail.value,
        class_reg:this.data.currClass
      },false)
    }else{
      this.fetch_pro_list({
        class_reg:this.data.currClass
      },false)
    }
    
  },

  // 跳转详情页
  jump_to_detail: function(data) {
    const { pro_id } = data.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?pro_id=${pro_id}`,
    })
  },

  // 导航切换
  onSideBarChange: function(val) {
    const _this = this;
    const { detail:side_idx } = val;
    


    _this.setData({
      currClass:_this.data.class_list[side_idx-1]
    });

    _this.setData({
      currSideIndex:side_idx
    });

    console.log(this.data.currSideIndex === 0);

    if(side_idx === 0){
      _this.fetch_pro_list({},false)
    }else{
      _this.fetch_pro_list({
        class_reg:_this.data.class_list[side_idx-1]
      },false)
    }
  },
  
})