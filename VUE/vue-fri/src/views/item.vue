<template>
  <div class="item">
    <div class="header">
      <span class="week">题目{{list[ques].num}}</span>
    </div>
    <div class="a">
      <div class="content">
        <div class="item-content-list">
          <div class="list">
            <div class="head_title">
              题目{{list[ques].num}}
            </div>
    <ul class="ul">
      <li class="li" @click="selected">
        <span class="title {select? 'selected': ''}" ref="a">A</span>
        <span class="detail">{{list[ques].a.info}}</span>
      </li>
      <li class="li" @click="selected">
        <span class="title {select? 'selected': ''}" ref="b">B</span>
        <span class="detail">{{list[ques].b.info}}</span>
      </li>
      <li class="li" @click="selected">
        <span class="title {select? 'selected': ''}" ref="c">C</span>
        <span class="detail">{{list[ques].c.info}}</span>
      </li>
      <li class="li" :class="{}" @click="selected">
        <span class="title {select? 'selected': ''}" ref="d">D</span>
        <span class="detail">{{list[ques].d.info}}</span>
      </li>
    </ul>
  </div>
        </div>
      </div>
      <div class="href" @click="to" ref="href">
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  methods:{
    to() {
      if(this.ques < 3){
        this.ques++
      }else if(this.ques == 3) {
        this.$refs.href.style.url = '../assets/images/3-1.png'
        this.ques++
      }else {
        this.$router.push({path: '/score'}) 
      }
      
    },
    selected() {
      this.$refs.select = !this.$refs.select
    }
  },
  data() {
    return {
      select: false,
      ques: 0,
      list: [
        {
          num: '一',
          a: {
            info: "0.0",
          },
          b: {
            info: "0.0",
          },
          c: {
            info: "..0.0.0",
          },
          d: {
            value: true,
            info: "对的",
          },
        },
        {num: '二',
          a: {
            info: "0.0",
          },
          b: {
            info: "0.0",
          },
          c: {
            info: "..0.0.0",
          },
          d: {
            value: true,
            info: "对的",
          },},
        {num: '三',
          a: {
            info: "0.0",
          },
          b: {
            info: "0.0",
          },
          c: {
            info: "..0.0.0",
          },
          d: {
            value: true,
            info: "对的",
          },},
        {num: '四',
          a: {
            info: "0.0",
          },
          b: {
            info: "0.0",
          },
          c: {
            info: "..0.0.0",
          },
          d: {
            value: true,
            info: "对的",
          },},
        {num: '五',
          a: {
            info: "0.0",
          },
          b: {
            info: "0.0",
          },
          c: {
            info: "..0.0.0",
          },
          d: {
            value: true,
            info: "对的",
          },},
      ],
    };
  },
}
</script>

<style lang="stylus" scoped>

.item
  background-image url('../assets/images/1-1.jpg')
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index -10
  zoom  1
  background-repeat no-repeat
  background-size 100% 100%
.header
  position absolute
  height 7.35rem
  width 3.25rem
  top -1.3rem
  right 1.6rem
  background-image url('../assets/images/WechatIMG2.png')
  background-size 100% 100%
  background-repeat no-repeat
  .week
    position absolute
    left .48rem
    bottom 1.1rem
    height .7rem
    width 2.5rem
    color #a57c50
    font-size .6rem
    font-weight 600
    text-align center
.a
  .content
    background-image url('../assets/images/2-1.png')
    background-size 100% 100%
    height 11.625rem
    width 13.15rem
    position absolute
    top 4.1rem
    left 1rem
    .item-content-list
      position absolute
      height 7rem
      width 8rem
      top 2.4rem
      left 3em
  .href
    display block
    height 2.1rem
    width 4.35rem
    position absolute
    top 16.5rem
    left 50%
    margin-left -2.4rem
    background-image url('../assets/images/2-2.png')
    background-repeat no-repeat
    background-size 100% 100%
.title
  height: .725rem;
  width: .725rem;
  border: 1px solid #fff;
  border-radius: 50%;
  line-height: .725rem;
  text-align: center;
  margin-right: .3rem;
  font-size: .5rem;
  font-family: Arial;
.detail
  display: inline-block;
  font-size: .6rem;
  color: #fff;
  vertical-align: middle;
</style>