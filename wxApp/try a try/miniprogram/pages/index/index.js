//index.js
const app = getApp()
const db = wx.cloud.database();
// mongodb(js) collection 
const productsCollection = 
  db.collection('products');
Page({
  uploadAvatar() {
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // console.log(res.tempFilePaths)
        for(let filePath of res.tempFilePaths) {
          let currentFileName = Math.floor(Math.random() * 1000000).tostring() + 'png'
          wx.cloud.uploadFile({
            cloudPath: currentFileName,
            filePath,
            success: res => {
              console.log(res)
            }
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
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
