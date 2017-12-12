// pages/i/Insurance/Insurance.js
Page({
  data:{
    list:[
      {
        id: 1,
        src: '../../../images/policy-pic1.png',
        spr:true,
        bx:'保险名称',
        bxgs:'保险公司名称',
        jg:'免费'
      },
      {
        id: 2,
        src: '../../../images/policy-pic2.png',
        spr:false,
        bx: '保险名称',
        bxgs: '保险公司名称',
        jg: 'x.xx元起'
      }    
    ]
  },
  wdbdTap:function(){
    wx.navigateTo({
      url: '../myPolicy/myPolicy'
    })
  }
})