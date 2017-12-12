// pages/i/greenChannel/greenChannel.js
Page({
  data:{
    jsq:'社工',
    jsh:'理事',
    gmsl:1
  },
  jian:function(){
    var a = this.data.gmsl;
    if(a!=1){
      this.setData({
        gmsl:--a
      })
    }
  },
  jia: function () {
    var a = this.data.gmsl;
    if (a != 500) {
      this.setData({
        gmsl: ++a
      })
    }
  }
})