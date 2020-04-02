<template>
  <div>
    <div class="table-container">
      <table class="table is-fullwidth is-bordered">
        <tr>
          <td class="tableHead">Country (البلد)</td>
          <td class="tableHead">Cases (الحالات)</td>
          <td class="tableHead">Today Cases (حلات اليوم)</td>
          <td class="tableHead">Deaths (وفيات)</td>
          <td class="tableHead">Today Deaths(وفيات يوم)</td>
          <td class="tableHead">Recovered (تعافى)</td>
          <td class="tableHead">Active (نشيط)</td>
          <td class="tableHead">critical (حريج)</td>
          <td class="tableHead">casesPerOneMillion(حالات لكل مليون)</td>
        </tr>
      </table>
      <table
        class="table is-bordered is-fullwidth"
        v-for="item in countiesData"
        :key="item.country"
      >
        <tr>
          <td>{{item.country}}</td>
          <td>{{item.cases}}</td>
          <td>{{item.todayCases}}</td>
          <td class="has-text-danger">{{item.deaths}}</td>
          <td class="has-text-danger">{{item.todayDeaths}}</td>
          <td class="has-text-primary">{{item.recovered}}</td>
          <td>{{item.active}}</td>
          <td>{{item.critical}}</td>
          <td>{{item.casesPerOneMillion}}</td>
        </tr>
      </table>
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
    // console.log(this.countiesData);
  }
};
</script>