// miniprogram/pages/commodity/commodity.js
Page({
  data: {
    tags_list:[],
    class_list:[],
    levelClassList:null,
    pro_list:[],
    currClass:'全部',
    currSideIndex:0,
    currProNum:'',
    is_loading:true,
    search_value:'',
    show_popup:false,
    activeNames: [],
  },

  onLoad: function (options) {
    this.fetch_pro_list({
      // is_basic:true
    },true)
  },

  onHide: function(){
    // this.click_reset();
    this.setData({
      show_popup:false
    })
  },

  // 切换折叠面板
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
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

            // 一二级标签分类
            let levelClassList = []
            const hashMap = new Map();
            Array.from(new Set(_class_list)).map((r,i) => {
              const _arr = r.split("-");
              if(_arr.length < 2) _arr.push("");

              if(hashMap.has(_arr[0])){
                const _preArr = hashMap.get(_arr[0]);
                const _newArr = _preArr.concat(_arr[1]);
                hashMap.set(_arr[0],_newArr)
              }else{
                hashMap.set(_arr[0],[_arr[1]])
              }
            })
            hashMap.forEach((v,k)=>{
              let _obj = {}
              _obj['class1'] = k
              _obj['class2'] = v
              levelClassList.push(_obj)
            })
            console.log(levelClassList);
  
            _this.setData({
              tags_list:Array.from(new Set(_tags_list)),
              class_list:Array.from(new Set(_class_list)),
              levelClassList
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
            currProNum:_data.length,
            is_loading:false
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

  // 重置搜索词
  click_reset : function() {
    this.setData({
      search_value:'',
      currSideIndex:0
    });
    this.fetch_pro_list({
      // is_basic:true,
    },true)
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

    if(side_idx === 0){
      _this.fetch_pro_list({},false)
    }else{
      _this.fetch_pro_list({
        class_reg:_this.data.class_list[side_idx-1]
      },false)
    }
  },

  // 打开popup
  open_favo:function (params) {
    this.setData({
      show_popup:true,
    })
  },
  // 关闭popup
  onClose:function (params) {
    this.setData({
      show_popup:false,
    })
  },
  
})