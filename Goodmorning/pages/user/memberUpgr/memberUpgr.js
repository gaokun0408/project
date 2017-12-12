// pages/i/memberUpgr/memberUpgr.js
Page({
  data:{
    sf:'社工',
    sq:'理事',
    qlyw:'理事权益与义务',
    zjrs:500,
    tmrs:0
  },
  sqlsTap:function(){
    wx.navigateTo({
      url: '../directorAgreem/directorAgreem'
    })
  }
})