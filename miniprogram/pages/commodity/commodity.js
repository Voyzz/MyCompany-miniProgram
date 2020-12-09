// miniprogram/pages/commodity/commodity.js
Page({
  data: {
    search_value:'',
    activeKey:0
  },

  onLoad: function (options) {
    // 头部渐变画布
    // this.canvasHeader();
  },

  canvasHeader: () => {
    const _canvas = wx.createCanvasContext('commodity_header');

    const grd = _canvas.createLinearGradient(0,0,0,150);
    grd.addColorStop(0,'#679fe4');
    grd.addColorStop(1,'#FFFFFF');

    _canvas.setFillStyle(grd);
    _canvas.fillRect(0,0,750,150);
    _canvas.draw();
  }

  
})