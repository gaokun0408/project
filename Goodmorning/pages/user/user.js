

Page({
  data: {
    // 动态获取数据  
    userimg: '../../images/people.png', //微信头像
    name: '微信昵称',  //微信昵称
    huiyuan: '您还不是会员', //用户类别
    num: '0.00', //钱数，
    shegong:'社工',

    //固定数据
    tancpd: false, //弹层
    enterimg: '../../images/arrow.png', 
    abt:'爱补贴',
    axlogo: '../../images/axlogo.png',
    phone:'400-123123',
    hyzx:'会员中心',
    sqcw:'申请成为社工，赚推广佣金看',
    xxtz:'消息通知',
    cjwt:'常见问题',
    txt:'您还不是会员，无法成为社工',
    tip:'成为社工,每推广一名会员获得一百元推广拥金'
    
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 可使用窗口宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 计算主体部分高度,单位为px
        that.setData({
          // second部分高度 = 利用窗口可使用高度 + first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）
          second_height: res.windowHeight + res.windowWidth / 750 * 300
        })
      }
    })
  },

  //点击申请成为社工，打开弹层
  share: function () {
    this.setData({
      tancpd: true
    })
  },

  //单击取消按钮，弹层消失
  cancel: function () {
    this.setData({
      tancpd: false
    });
    wx.navigateTo({
      url: '../user/apply/apply',
    })
  },

  //打开个人信息页面
  goInfo: function () {
    wx.navigateTo({
      url: '../user/info'
    })
  },

  //打开爱补贴页面
  toLove: function () {
    wx.navigateTo({
      url: '../user/love'
    })
  },

  //打开爱补贴说明页面
  toExplain: function () {
    wx.navigateTo({
      url: '../user/explain'
    })
  },

  //打开我的订单页面
  toMemCore: function () {
    wx.navigateTo({
      url: '../user/memberCore/memberCore'
    })
  },

  //打开会员中心页面
  goUpgrade: function () {
    wx.navigateTo({
      url: '../user/upgrade/upgrade'
    })
  },

  //打开会员中心页面
  goMessage: function () {
    wx.navigateTo({
      url: '../user/message'
    })
  },

  //常见问题页面
  goQues: function () {
    wx.navigateTo({
      url: '../user/question'
    })
  },
 


})
