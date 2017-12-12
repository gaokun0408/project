// pages/i/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 1,
        img: '../../../images/man.png',
        name: '姓名：',
        value: '张三'
      },
      {
        id: 2,
        img: '../../../images/phone.png',
        name: '联系电话：',
        value: '15912341234'
      },
      {
        id: 3,
        img: '../../../images/vip.png',
        name: '身份证号：',
        value: '13118199411145022'
      },
       {
        id: 4,
        img: '../../../images/wh.png',
        name: '申请原因：',
        value: ''
      }
    ]
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
  
  },

  //单击提交申请按钮，返回个人中心页面
  toUser:function(){
      wx.switchTab({
        url: '../../user/user',
      })
  }
})