<template>
  <div class="search-box">
    <i class="iconfont">&#xe649;</i>
    <input type="text" ref="query" class="box" :placeholder="placeholder" v-model="query">
    <i class="iconfont icon-dismiss" v-show="query" @click="clear">&#xe6a4;</i>
  </div>
</template>

<script>
import { debounce } from "@/common/js/util"
export default {
props: {
  placeholder: {
    type: String,
    default: '搜索歌曲、歌手'
  }
},
data() {
  return {
    query:''
  }
},
methods: {
  clear() {
    this.query = ""
  },
  blur() {
    this.$refs.query.blur() //此blur是input自带的失去聚焦的方法
  },
  setQuery(query) {
    this.query = query
  }
},
// watch: {
//   query(newQuery,oldQuery) {
//     console.log(newQuery,oldQuery);
//   }
// },
  created() {//防抖函数，节流函数
    this.$watch('query', debounce((newQuery) => {

      this.$emit('query',newQuery)//抛给父组件query事件
      
    },300))
  },
}
</script>

<style lang="stylus" scope>
@import '../assets/css/function.styl';
.search-box
  display flex
  align-items center
  width 100%
  padding 0 px2rem(8)
  box-sizing border-box
  height px2rem(74)
  background #00ffcc
  border-radius 6px
  .iconfont
    font-size 20px
    color #6b6a6a
  .box
    flex 1
    margin 0 5px
    line-height px2rem(36)
    background #00ffcc
    color #0099ff
    font-size 14px
    outline 0
  .icon-dismiss
    font-size 20px
    margin-right px2rem(10)
</style>