// pages/component/ratingStar/ratingStar.js

const STAR_ON = "/assets/imgs/rating_star_small_on.png";
const STAR_OFF = "/assets/imgs/rating_star_small_off.png";
const STAR_HALF = "/assets/imgs/rating_star_small_half.png";

// Component({
//  /**
//   * 组件的属性列表
//   */
//  properties: {
//   score: {
//     type: Number,
//     observer:function(newVal,oldVal,path){

//     }
//   }
//  },
//  lifetimes:{
//   attached:function(){
//     let score=this.data.score
//     let light = parseInt(score)
//     let half = Math.ceil(score) - light
//     let off = 5 - light -half
//     this.setData({
//       light,
//       half,
//       off
//     })
//   }
//  },
//  /**
//   * 组件的初始数据
//   */
//  data: {
//   light:5,
//   half:0,
//   off:0,
//  },

//  /**
//   * 组件的方法列表
//   */
//  methods: {

//  }
// })



Component({
  /**
   * 组件的属性列表
   */
  properties: {
   score: {
     type: Number,
     observer:function(newVal,oldVal,path){
       let stars = [STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF]
       if(newVal > 0){
         newVal = newVal / 10
         let floor = Math.floor(newVal)
         if(floor != newVal){
           stars[floor] = STAR_HALF
         }
         for(let i=0;i<floor;i++){
           stars[i] = STAR_ON
         }
       }
       this.setData({
         stars
       })
     }
    },
    iconSize:{
      type:String,
      value:"26rpx"
   }
  },
  lifetimes:{
  
  },
  /**
   * 组件的初始数据
   */
  data: {
  
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
 
  }
 })
 