//index.js
const app = getApp()
const db = wx.cloud.database();
// mongodb(js) collection 
const productsCollection = 
  db.collection('products');
Page({
  data:{
    products: []
  },

  gotoDetail(event) {
    productsCollection.doc(event.currentTarget.dataset.id)
  },
  onLoad(){
    productsCollection
    .get()
    .then(res=>{
      // console.log(res)
      this.setData({
        products: res.data
      })
    })
  }
})
