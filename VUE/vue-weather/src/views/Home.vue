<template>
  <div class="home">
    <div class="address">
      <div class="nav">
        <span class="change-city">切换城市</span>
        <p class="time">{{localTime}}</p>
      </div>
      <div class="city-info">
        <p class="city-name">{{mapData.city}}</p>
        <p class="city-weather">{{mapData.weather}}</p>
        <h1 class="city-temp">{{mapData.temperature}}°C</h1>
        <p class="weather-detail">
          <span>风力:{{mapData.windPower}}</span> |
          <span>风向:{{mapData.windDirection}}</span> |
          <span>空气湿度:{{mapData.humidity}}</span>
        </p>
      </div>
    </div>
    <div class="future">
      <div class="group">
        明天:
        <span class="tm">白天：多云</span>
        <span class="tm">晚上：大雨</span>
      </div>
      <div class="group">
        后天:
        <span class="tm">白天：多云</span>
        <span class="tm">晚上：大雨</span>
      </div>
    </div>
    <div class="map-container" ref="mapContainer"></div>
  </div>
</template>
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=c4772fbb2cb3ce0900ae36df7c9711f9"></script>
<script>
export default {
  data() {
    return {
      localTime: "",
      mapData: "",
    };
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
  },
  mounted() {
    console.log(this.$refs.mapContainer);
    this.initMap();
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      let _self = this;
      let map = AMap.Map("_self.$refs.mapContainer", {
        resizeEnable: true,
      });
      AMap.plugin("AMap.CitySearch", function () {
        let citySearch = new AMap.CitySearch();
        // console.log(citySearch)
        citySearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            console.log(result);
            _self.getCurrentCityData(result.city);
          }
        });
      });
    },
    getCurrentCityData(cityName) {
      let _self = this;
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
          _self.mapData = data;
        });
      });
    },
  },
};
</script>

<style scoped>
.home {
  padding: 10px;
  height: 100vh;
  box-sizing: border-box;
  background: #838383;
}

.nav {
  display: flex;
  justify-content: space-between;
}

.city-info {
  text-align: center;
  margin: 20px 0;
  line-height: 2;
}

.city-temp {
  font-size: 40px;
}

.future {
  width: 100%;
}

.future .group {
  height: 44px;
  line-height: 44px;
  background-color: #777777;
  border-radius: 4px;
  color: antiquewhite;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0 10px;
}

.future .group .tm {
  margin-right: 20px;
}
</style>
