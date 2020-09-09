<template>
  <div class="tab">
      <router-link tag="div" class="tab-item" to="/recommend">  
      <!-- //让router编译成div而不是a标签 -->
          <span class="tab-link">推荐</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/singer">
          <span class="tab-link">歌手</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/rank">
          <span class="tab-link">排行</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/search">
          <span class="tab-link">搜索</span>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';
.tab
    display flex
    height px2rem(88)
    line-height px2rem(88)
    font-size 14px
    &-item
        flex 1 
        text-align center
        .tab-link
            padding-bottom 5px
            color hsla(0,0,100%,0.5)
        &.active            //实现点击变红。点击router时，会自动增加一个类名，所以直接对这个类名添加样式就行。
            .tab-link
                color #ea2448
                border-bottom 2px solid #ea2448
</style>