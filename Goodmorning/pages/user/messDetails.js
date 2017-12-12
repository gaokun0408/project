// pages/user/messDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 消息列表 
    messList: [
      {
        id: 1,
       time: '7:00', 
        date: '12月1号',
        message: '消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息息消息消息消息消息消息消息消息'
      },
      {
        id: 2,
        time: '7:00', 
        date: '12月1号',
        message: '消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息'
      }
    ]
  },

  //点击来源名称进入消息详情
  goMess: function () {
    wx.navigateTo({
      url: '../user/messDetails',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})