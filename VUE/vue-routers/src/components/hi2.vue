<template>
  <div class="hi">
    <p>hi2</p>
    <button @click="goBack">返回上个页面</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBack () {
      this.$router.push({path: '/abc', query: {name: '0.0'}})
    }
  }
}
</script>

<style>

</style>