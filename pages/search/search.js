Page({
  data:{
    // text:"这是一个页面"
    searchTopMovies:{},
    schTopM:true,
    searchM:false,
    searchMovies:{},
  },
  onLoad:function(options){
    var that=this;
    // 获取全局对象的电影top榜
    var searchTop=getApp().searchTop;
    if(searchTop.length-1>0){
      console.log(searchTop);
      that.setData({
      searchTopMovies:searchTop,
      schTopM:true,
    })
    }
    else{
      that.setData({
      schTopM:false,
         })
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})