// pages/user/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //固定数据
    enterimg: '../../images/arrow.png',
    infonbtn:'同步会员卡会员信息',
    
    // 信息列表
    infoList: [{
      id: 1,
      img: '../../images/man.png',
      info: '姓名：',
      status:'未填写'
    },
    {
      id: 2,
      img: '../../images/phone.png',
      info: '手机号：',
      status: '未填写'
    },

    {
      id: 3,
      img: '../../images/vip.png',
      info: '会员卡号：',
      status: '未绑定'
    },
    {
      id: 4,
      img: '../../images/idcard.png',
      info: '身份证号：',
      status: '未填写'
    },
    {
      id: 5,
      img: '../../images/area.png',
      info: '收货地址：',
      status: '未填写'
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