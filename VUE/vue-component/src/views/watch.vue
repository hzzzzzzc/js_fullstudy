<template>
  <div class="watch">
    <span style="margin-right:15px">{{temp}}度 </span>
    <span>{{suggest}}</span><br/>
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>
  </div>
</template>

<script>
export default {
    
  data() {
    return {
      temp:27,
      suggest:'一般'
    }
  },
  methods:{
    add() {
      this.temp += 3
    },
    reduce() {
      this.temp -= 3
    }
  },
  watch:{
    temp:function(newVal,oldVal) {
      console.log(newVal,oldVal);
      if(newVal < 15 && newVal >= 0) {
        this.suggest = '冷'
      }else if(newVal < 0) {
        this.suggest = '冻'
      }
    }
  }
}
</script>

<style>

</style>