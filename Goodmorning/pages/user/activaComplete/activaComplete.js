// pages/i/activaComplete/activaComplete.js
Page({
  data:{
    kh:'NO.123456789',
    sj:'2017-10-10 10:10:10',
    //不变参数
    list:[
      {
        id:1,
        name:'姓名：',
        xg:'不可修改'
      },
      {
        id: 2,
        name: '手机号：',
        xg: '可修改'
      },
      {
        id: 3,
        name: '身份证号：',
        xg: '不可修改'
      },
      {
        id: 4,
        name: '收货地址：',
        xg: '不可修改'
      }
    ],
    sm:'说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明'
  },
  bcTap:function(){
    wx.navigateTo({
      url: ''
    })
  }
})