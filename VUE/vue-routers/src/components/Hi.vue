<template>
  <div class="hello">
    <h1>{{msg}}</h1>
   
    <router-link to="/hi/hi1">a</router-link>
    <span class="" style="display:inline-block;width:50px;"></span>
    <router-link to="/hi/hi2">b</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Hi',
  data() {
    return {
      msg:'Hi,i am wn'
    }
  }
}
</script>

<style>

</style>