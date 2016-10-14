//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    datetime:'',
    films: [],
    swiperM:['https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2380677316.jpg',
    'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2383975252.jpg'],
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this   //设置全局，供内部方法使用
    //获取当前时间
    this.setData({
      datetime:util.formatTime(new Date())
    })

    //请求豆瓣网络数据
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {
         city: '南昌' ,
         start: 0,
         count:30
      },
      header: {
       'Content-Type': 'application/json'
      },
       success: function(res) {
        console.log(res.data)
         console.log(res.data.subjects[1].images.large)
         var swpimg=new Array();
         for(var i=0;i<4;i++){
          swpimg[i]=res.data.subjects[i].images.large;
          console.log(res.data.subjects[i].images.large);
         }
         that.setData({
            swiperM:swpimg,
          })
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
    var aa=this.data.swiperM;
    console.log(this.data.swiperM);
    console.log('hahah');
    wx.navigateTo({
      url: '../detailmovie/detailmovie'
    })
    }
  })
