<template>
  <div>
    <div class="mypiecards">
      <div v-for="item in countiesData" :key="item.country" class="mypiecard">
        {{item.country}}
        <line-chart
          :data="[['cases', item.cases],['deaths', item.deaths],['Today Cases', item.todayCases],['Today Deaths', item.todayDeaths],['recovered', item.recovered],['active', item.active],['critical', item.critical],['casesPerOneMillion', item.casesPerOneMillion]]"
          :donut="true"
          legend="bottom"
          download="item"
        ></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const countiesDataAPI =
  "https://corona.lmao.ninja/countries?sort=%7Bparameter%7D";
export default {
  data() {
    return {
      countiesData: []
    };
  },
  async created() {
    const res = await axios.get(countiesDataAPI);
    this.countiesData = res.data;
  }
};
</script>