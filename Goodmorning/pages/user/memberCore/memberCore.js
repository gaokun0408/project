Page({
  data:{
    
  },
  ljTap:function(){
    wx.navigateTo({
      url: '../memberPower/memberPower'
    })
  },
  yBtnTap: function () {
    wx.navigateTo({
      url: '../activaMember/activaMember'
    })
  },
  nBtnTap: function () {
    wx.navigateTo({
      url: '../memberPower/memberPower'
    })
  },
  
  //点击没有会员卡,在线开通会员
  goOpen:function(){
    wx.navigateTo({
      url: '../memberCore/openMember'
    })
  }
})