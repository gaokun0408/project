Page({
  data:{
    jcff:'',
    zcjg:[
      {
        id:1,
        name:'阴性（-）'
      },
      {
        id: 2,
        name: '弱阳性（±）'
      },
      {
        id: 3,
        name: '阳性（+）'
      },
      {
        id: 4,
        name: '强阳性（++）'
      },
      {
        id: 5,
        name: '颜色不匹配'
      }
    ],
    zcobj:{
      0: '阴性（-）'
    },
    sltp:null
  },
  //选择自测结果
  zcTap:function(e){
    var i = e.currentTarget.dataset.in;
    var obj = this.data.zcobj;
    if (obj[i]){
      delete obj[i];
      this.setData({
        zcobj:obj
      })
    }else{
      obj[i] = e.currentTarget.dataset.na;
      this.setData({
        zcobj: obj
      })
    }
    console.log(obj)
  },

  
  // 检测图片上传
  tpscTap:function(){
    var t = this;
    wx.chooseImage({
      count:1,
      success: function(res) {
        t.setData({
          sltp:res.tempFilePaths
        })
      }
    })
  }
})