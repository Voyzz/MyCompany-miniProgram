// miniprogram/pages/introduction/introduction.js
Page({
  data: {
    // 头图
    intro_banner:"http://voyz-image.test.upcdn.net/2020/03/16/731c0dda1de9ab23503562b9fa8b03f2.png",
    // 公司简介
    intro_info:{
      title:"关于我们",
      subtitle:"ABOUT US",
      content:"\v\v\v\v河南中帆东盛新材料技术有限公司（简称中帆东盛）位于河南省新乡市国家与物理化学产业园，主要从事医药中间体、有机和无机高温结合剂等精细化工产品和特种耐火材料的研发和推广销售。\n\v\v\v公司经过近30年的创新发展，以先进独特的工艺、严格的生产过程管理和完善的质量保证体系不断为客户开发功能独特、质量稳定、优质高效的精细产品，产品以过硬的质量、卓越的品质深受市场和消费者青睐。\n\v\v\v我们秉承以“创新求发展、以质量求生存”的指导思想，始终把创新和质量放在首位。以市场为导向，以客户新的需求为动力，追求产品的专业和专一，不断为用户提供稳定的、高效的、独特的定制化的解决方案。积极追求新材料新领域里的新发展，努力为我国新材料事业不断作出积极贡献。\n\v\v\v我公司坚持“合作共享共赢”的发展理念，衷心欢迎广大客户和科研单位就新问题、新需求、新产品、新课题和我公司不断进行深入合作，实现多方共赢，共同发展。"
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