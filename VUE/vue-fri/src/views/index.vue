<template>
  <div class="index">
    <div class="header">
      <span class="week">第一周</span>
    </div>
    <div class="a">
      <div class="content">

      </div>
      <div class="href" @click="to">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    to() {
      this.$router.push({path: '/item'})
    }
  }
}
</script>

<style lang="stylus" scoped>

.index
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
    background-image url('../assets/images/1-2.png')
    background-size 100% 100%
    height 11.625rem
    width 13.15rem
    position absolute
    top 4.1rem
    left 1rem
  .href
    display block
    height 2.1rem
    width 4.35rem
    position absolute
    top 16.5rem
    left 50%
    margin-left -2.4rem
    background-image url('../assets/images/1-4.png')
    background-repeat no-repeat
    background-size 100% 100%
</style>