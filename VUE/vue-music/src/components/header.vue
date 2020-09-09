<template>
  <div class="header">
    <div class="header-icon" @click="menuShow">
      <!-- 当组件中出现多个插槽时要设置name -->
      <slot name="left-icon"></slot>
    </div>
    <div class="header-cont">
      <slot name="content"></slot>     
    </div>
    <div class="header-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
// import {mapActions} from 'vuex'  //使用dispatch时，不需要引入
export default {
  methods:{
    // ...mapActions(['setShowSidebar']),
    menuShow(){
      this.$store.dispatch('setShowSidebar',true) //使用dispatch来使用Actions的方法，第二个参数为传参
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';
.header
  height px2rem(88)
  line-height px2rem(88)
  display flex
  align-items center
  text-align center
  justify-content space-between
  font-size px2rem(30)
  &-icon
    flex 0 0 px2rem(88)
    margin-top px2rem(6)
    .iconfont
      font-size px2rem(48)
</style>