// pages/i/upgrade/upgrade.js
Page({
  data:{
    // 动态获取数据  
    userimg: '../../../images/people.png', //微信头像
    num: '0.00', //钱数，
    shegong: '社工',
    hy:'公益会员',
    work:'免费申请成为社工',
    name:'小张',
    kh:'NO.123456789',
    sj:'2020-10-10',
    //不变参数
    list:[
      {
        id:1,
        name:'健康卡',
        src:'../../../images/card1.png'
      },
      {
        id: 2,
        name: '保险服务',
        src: '../../../images/baodan.png'
      },
      {
        id: 3,
        name: '早安盒子（二期）',
        src: '../../../images/box.png'
      }
    ],
    hyqyTapArr:[
      '../healthyCard/healthyCard',
      '../Insurance/Insurance'
    ]
  },
  sqTap:function(){
    wx.navigateTo({
      url: '../apply/apply'
    })
  },
  hyqyTap:function(e){
    var a = e.currentTarget.dataset.i;
    wx.navigateTo({
      url: this.data.hyqyTapArr[a]
    })
  }
})