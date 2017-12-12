Page({
  data:{
    mytj:'您还没有进行过体检',
    jytj:'建议体检'
  },

  //开始体验
  kstjTap:function(){
    wx.navigateTo({
      url: 'startCheck/startCheck'
    })
  },

  //查询检测结果
  jctjTap: function () {
    wx.navigateTo({
      url: 'startRecord/startRecord'
    })
  }
})