<template>
  <div class="home">
    <div class="address">
      <div class="nav">
        <p>{{localTime}}</p>
        <span class="change-city">切换城市</span>       
      </div>  
      <div class="city-info">
        <p class="city-name">南昌</p>
        <p class="city-weather">晴</p>
        <h1 class="city-temp">30°C</h1>
        <p class="weahter-detail">
          <span>风力3</span> |
          <span>风向：西北</span>
          <span>空气湿度：75%</span>
        </p>
      </div>
    </div>
    <div class="feature">
      <div class="group">
        明日：
        <span class="tm">白天多云</span>
        <span class="tm">夜间大雨</span>
      </div>
      <div class="group">
         后天：
        <span class="tm">白天多云</span>
        <span class="tm">夜间大雨</span>
      </div>
    </div>
    <div class="map-container" ref="mapContainer"></div>
  </div>
</template>

<script>
export default {
data() {
  return {
    localTime: ''
  }
  
},
created() {
  setInterval(() => {
    this.localTime = this.getLocalTime()
  })
},
mounted() {
  console.log(this.$refs.mapContainer);
  this.initMap()
},

methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString()
    },
    initMap() {
      let _self = this
      let map = new AMap.Map(_self.$refs.mapContainer, {
        resizeEnable: true
      });
      AMap.plugin('AMap.CitySearch', function() {
        let citySearch = new AMap.CitySearch()
        // console.log(citySearch)
        citySearch.getLocalCity(function(status, result){
          if(status == 'complete' && result.info === 'ok'){
            // 获取位置成功
          }
        })
      })
    }

  }
}
</script>

<style scoped>
.nav{
  display: flex;
  justify-content: space-between;
}
.home{
  padding: 10px;
  box-sizing: border-box;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
  color: #fff;
}
.city-info{
  text-align: center;
  margin: 20px 0;
  line-height: 2;
}
.city-temp{
  font-size: 40px;
}
.feature{
  width: 100%;
}
.group{
  height: 44px;
  line-height: 44px;
  background-color: rgba(255,255,255,0.26);
  border-radius: 4px;
  color: #fff;
  margin-bottom: 10px;
  font-size: 16px;
  padding: 0 10px;
}
.tm{
  margin-right: 20px;
}
</style>