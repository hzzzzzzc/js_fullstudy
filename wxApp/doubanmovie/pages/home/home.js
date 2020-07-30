// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allMovies:[
      {
        title: "院线热映",
        url: "/v2/movie/in_theaters",
        movies: []
      },
      {
        title: "新片榜",
        url: "/v2/movie/new_movies",
        movies: []
      },
      {
        title: "口碑榜",
        url: "/v2/movie/weekly",
        movies: []
      },
      {
        title: "北美票房榜",
        url: "/v2/movie/us_box",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      },
    ]
 
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getCity((city)=>{
     this.loadData(0,{city: city,apikey:'0df993c66c0c636e29ecbb5344252a4a'})//第一个city是douban规定的需要传给douban的，第二个是传进来的
   })
  },
 
  loadData(idx, params) {
    console.log(params)
    let obj = this.data.allMovies[idx]
    let url = wx.db.url(obj.url)
    wx.request({
      url: url,
      data: params,
      header: {'content-type': 'json'},
      success: (res) => {
        console.log(res)
        let movies = res.data.subjects
        // let obj = this.data.allMovies[idx]
        obj.movies = []
        for (let index = 0; index < movies.length; index++) {
          let element = movies[index]
          let movie = element.subject || element
          // 格式化星星
          this.updateMovie(movie)
          obj.movies.push(movie)
        }
        this.setData(this.data)
      }
    })
  },
  updateMovie(movie) {
    if (!movie.rating.stars) {
        return
    }
    movie.numberStars = parseInt(movie.rating.stars)
  },
 
  getCity(succeed){
   wx.getLocation({
     success: (res)=>{
       console.log(res);
       //往百度地图传当前的地理位置，然后它会返回给我信息
       wx.request({
         url: 'https://api.map.baidu.com/reverse_geocoding/v3',
         data: {
           ak: 'y1ugevOQhro0TxLW9XNVW9yAoaUE4FCq',
           output: 'json',
           coordtype: 'wgs84ll',
           location: `${res.latitude},${res.longitude}`
         }, 
         success:(res) => {
           console.log(res);
           let city = res.data.result.addressComponent.city
           succeed && succeed(city) //??
         }         
       })
     },
     fail: ()=>{
       console.log('获取城市失败');
     },
     complete: ()=>{}
   });
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