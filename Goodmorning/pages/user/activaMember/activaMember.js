// pages/i/activaMember/activaMember.js
Page({
  data:{
    jhqh:false
  },
  jhTap:function(){
    this.setData({
      jhqh:false
    })
  },
  wsTap: function () {
    wx.navigateTo({
      url: '../activaComplete/activaComplete'
    })
  }
})