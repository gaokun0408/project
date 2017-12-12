// pages/user/btDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btList: [
      {
        id: 1,
        bt: '补贴来源', //显示未读消息数目
      },
      {
        id: 2,
        bt: '补贴金额(元)', //显示未读消息数目
      },
      {
        id: 3,
        bt: '补贴项目', //显示未读消息数目
      },

      ],

    // 详情列表
    xqList: [
      {
        id: 1,
        img:'../../images/people.png',
        name:'张三',
        money:'100',
        date:'2017-11-09',
        time:'10:10:10',
        txt:'直接推广补贴'
      },
      {
        id: 2,
        img: '../../images/people.png',
        name: '张三',
        money: '100',
        date: '2017-11-09',
        time: '10:10:10',
        txt: '直接推广补贴'
      },
      {
        id: 3,
        img: '../../images/people.png',
        name: '张三',
        money: '100',
        date: '2017-11-09',
        time: '10:10:10',
        txt: '直接推广补贴'
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