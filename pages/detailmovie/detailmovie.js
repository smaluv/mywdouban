var app=getApp()
Page({
  data:{
	// text:"这是一个页面"
  movie:[],
  },
  onLoad:function(options){
	// 页面初始化 options为页面跳转所带来的参数
	var movieid=getApp().MovieDetailid;
	console.log(movieid);
  var that =this;
	//请求豆瓣网络数据
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + movieid,
      header: {
       'Content-Type': 'application/json'
      },
       success: function(res) {
         console.log(res.data)
         that.setData({
         movie:res.data,
          })
        }
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