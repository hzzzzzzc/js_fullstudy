// let obj = {
//     name: '明国',
//     age: '18',
//     sex: 'man'
// }

// const m = new Map()
// console.log(m)
// m.set(obj, 'content')
// m.delete(obj)
// console.log(m.has(obj))

// const map = new Map([
//     ['name','0.0'],
//     ['age','20']
// ])
// console.log(map.get('name'))

const m = new Map()
const k1 = ['a']
const k2 = ['a']
m.set



















// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      list: [
        { 'num': '全部订单' },
        { 'num': '待付款' },
        { 'num': '待使用' },
        { 'num': '待评价' },
        { 'num': '退款/售后' },
      ],
      idx: 0
    },
    goIndex(e) {
      let index = e.currentTarget.dataset.index;
      // console.log('每个index',index)  },
      this.setData({
        idx: index
      })
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