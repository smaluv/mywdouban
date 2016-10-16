Page({
  data:{
    films: [],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //请求豆瓣网络数据
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon',
      header: {
       'Content-Type': 'application/json'
      },
       success: function(res) {
        console.log(res.data)
         console.log(res.data.subjects)
         that.setData({
         films:res.data.subjects,
          })
        }
      })
  },
    //电影跳转事件
  detailmovie(e){
  //获取当前item的下标id 通过currentTarget.id;
  var id=e.currentTarget.id;
  //获取全局对象
  var app=getApp();
  //设置全局的请求访问传递的参数
  app.MovieDetailid=id;
  console.log(id);
  // var aa=this.data.swiperM;
  // console.log(this.data.swiperM);
  // console.log('hahah');
  wx.navigateTo({
    url: '../detailmovie/detailmovie'
  })
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