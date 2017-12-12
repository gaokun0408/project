// pages/user/zzDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'转账金额',
    mess: '5.00',
    money: '100', //钱数
    list: [ 
      // {
      //   id: 1,
      //   name: '转账金额',
      //   mess: '￥5'
      // },
      {
        id: 2,
        name: '资金去向',
        mess: '农业银行61212204004061211523'
      },
      {
        id: 3,
        name: '收款人',
        mess: '张三'
      },
      {
        id:4,
        name: '状态',
        mess: '已到账'
      },
      {
        id: 5,
        name: '申请时间',
        mess: '2017/12/15 10:10:10'
      },
      {
        id: 6,
        name: '交易单号',
        mess: 'S123456789'
      },
    
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

  }
})