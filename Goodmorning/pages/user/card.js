// pages/user/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    all:'查看全部', //查看全部
    // isshow:false, //查看全部列表默认不显示
    state:3, //
    list:[{
      id:1,
      state: '3',
      txt: '查看全部',
    },
      {
        id: 2,
        state: '1',
        txt: '已激活',
      },
      {
        id: 3,
        state: '2',
        txt: '未激活',
      },
    ],
    jkList:[{
      id:1,
      state:1,
      name:'张三',
      img:'../../images/card_package_icon.png',
      num:'123456789',
      activation_time: '2017-10-10 10:10:10',
      buy_time:'2017-10-10 10:10:10'
    },
      {
        id: 2,
        state: 2,
        img: '../../images/card_package_icon.png',
        num: '223456789',
        buy_time: '2017-10-10 10:10:10'
      },
      {
        id: 3,
        state: 2,
        img: '../../images/card_package_icon.png',
        num: '323456789',
        buy_time: '2017-10-10 10:10:10'
      },
      {
        id: 4,
        state: 2,
        img: '../../images/card_package_icon.png',
        num: '423456789',
        buy_time: '2017-10-10 10:10:10'
      },
    ],
    price: '365',
    total: '365',
    // input默认是1  
    num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled' 
  },
  
  // 单击查看全部
  change: function (e) {
    var show = !this.data.isshow; //isshow取反
    this.setData({
      isshow: show,
    });
  },

  goList:function(e){
    var show = !this.data.isshow; //isshow取反
    var index = e.currentTarget.dataset.index; //列表的index
    var txt = e.currentTarget.dataset.txt; //列表的txt,就是列表文本
    var state = e.currentTarget.dataset.state; 



    console.log(e.currentTarget)
    this.setData({
        isshow:show,
        litindex:index,
        all:txt,
        state: state
    });
    // 输出现在isshow的值
    console.log(state)
    
  },

  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var total = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      total: total
    });
  },

  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
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