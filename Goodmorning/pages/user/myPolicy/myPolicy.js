// pages/i/myPolicy/myPolicy.js
Page({
  data:{
    list:[
      {
        id:1,
        img:'../../../images/bao.png',
        bxmc:'保险名称',
        bxqx:'2017-10-10至2018-10-09'
      }
    ]
  },
  bdTap:function(){
    wx.navigateTo({
      url: '../policyDetails/policyDetails'
    })
  }
})