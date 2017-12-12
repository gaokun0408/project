// pages/user/memberCore/openMember.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //动态数据
    // userimg: '../../../images/bread.png', //微信头像
    name: '微信昵称',  //微信昵称
    huiyuan: '2020-10-10', //用户类别
    money:'365.00',
    allnum:'1', //总数量
    wximg: '../../../images/weixin.png',
    jtimg: '../../../images/arrow.png',
    qimg: '../../../images/circle.png',

    // 动态获取数据  
    userimg: '../../../images/people.png', //微信头像
    num: '0.00', //钱数，
    shegong: '社工',
    hy: '公益会员',
    work: '免费申请成为社工',
    name: '小张',
    kh: 'NO.123456789',
    sj: '2020-10-10',



    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国'},
    ],
    checkList: [
      { name: 'zc', value: '已阅读并同意组委会章程',checked:'true'},
      { name: 'xy', value: '已阅读并了解会员服务协议', checked: 'true' },
    ]
  },

  // 单选框
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  // 复选框
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  // 单击减号
  jian: function () {
    var all = this.data.allnum;
    var zs = --all;
    if(zs==0){
        all:1
    }else{
      this.setData({
        allnum: zs
      })
    } 
  },

  // 单击减号
 add:function() {
   console.log(this.data.allnum);
   var all = this.data.allnum;
   var zs = ++ all;
   this.setData({
     allnum: zs
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