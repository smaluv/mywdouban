Page({
  data:{
    // text:"这是一个页面"
    searchTopMovies:{},
    schTopM:true,
    searchM:false,
    searchMovies:{},
    searchtitle:'请输入您要搜索的电影',
    nothingM:false
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
      nothingM:false
         })
    }
  },
  searchMov(e){
    var that =this;
    var searchTi=e.detail.value;
    console.log(searchTi);
    wx.request({
        url: 'https://api.douban.com/v2/movie/search?',
        data: {
           q: searchTi ,
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
          console.log(res.data);
          if(res.data.subjects.length){
            that.setData({
              searchMovies:res.data.subjects,
              searchM:true,
              schTopM:false,
              nothingM:false
            })
          }else{
            that.setData({
              searchM:false,
              schTopM:false,
              nothingM:true
            })
          }
        }
      })
  }
  ,
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