<template>
  <div>
    <div class="mypiecards">
      <div v-for="item in countiesData" :key="item.country" class="mypiecard">
        <h2 style="text-align: center; padding: 35px 0">{{item.country}}</h2>
        <pie-chart
          :data="[['cases', item.cases],['Today Cases', item.todayCases],['Deaths', item.deaths],['Today Deaths', item.todayDeaths],['recovered', item.recovered],['active', item.active],['critical', item.critical],['casesPerOneMillion', item.casesPerOneMillion]]"
          :donut="true"
          legend="bottom"
          download="boom"
        ></pie-chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const countiesDataAPI = "https://corona.lmao.ninja/v2/countries";
export default {
  data() {
    return {
      countiesData: []
    };
  },
  async created() {
    const res = await axios.get(countiesDataAPI);
    this.countiesData = res.data;
    Chartkick.options = {
      borderWidth: 0,
      height: "400px",
      colors: [
        "#00a8ff",
        "#ff9f43",
        "#ee5253",
        "#ee5253",
        "#44bd32",
        "#341f97",
        "#576574",
        "#01a3a4"
      ]
    };
  }
};
</script>