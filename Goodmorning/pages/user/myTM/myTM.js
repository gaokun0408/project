// pages/i/myTM/myTM.js
Page({
  data:{
    // 动态数据
    sf:'社工',
    sdate:'2017-11-09', //开始日期
    ldate: '2017-12-11', //结束日期
    xzcy:0,
    xzhy:0,
    show:false, //日期列表是否显示

    // 固定数据
    jtimg:'../../../images/arrow.png',
    
    list:[
      {
        id:1,
        name:'团队总数',
        value:99
      },
      {
        id: 2,
        name: '团队会员总数',
        value: 55
      },
      {
        id: 3,
        name: '团队社工总数',
        value: 22
      }
    ],
    // 日期列表
    dateList: [
      {
        id: 1,
        ksdate: '2017-11-09',
        jsdate: '2017-11-30'
      },
      {
        id: 2,
        ksdate: '2017-11-30',
        jsdate: '2017-12-30'
      },
      {
        id: 3,
        ksdate: '2017-11-13',
        jsdate: '2017-12-11'
      },
      {
        id: 4,
        ksdate: '2017-11-13',
        jsdate: '2017-12-11'
      }
    ]
  },
  listTap:function(){
    wx.navigateTo({
      url: '../allMembers/allMembers'
    })
  },

  //单击日期
  goShow: function (e) {
    var show = this.data.show;
    var isshow = !show;
    // var ks= e.currentTarget.dataset.ks;
    // console.log(ks);
    this.setData({
       show:isshow
    })
    console.log(isshow);
  }
})