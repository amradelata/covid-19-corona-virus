<template>
  <div class="container is-fluid">
    <div class="myHead">
      <h1>COVID-19 CORONAVIRUS OUTBREAK</h1>
      <h1 class="ar">تفشي الفيروس التاجي 19 (كرونا)</h1>
      <h2>
        المصدر/Source :
        <a
          href="https://www.worldometers.info/coronavirus/"
          target="plank"
        >worldometers</a>
      </h2>
      <h2>
        BY :
        <a href="https://www.amradelata.com/" target="plank">amradelata</a>
      </h2>
    </div>

    <div class="mycards">
      <div class="mycard">
        <!-- 😷 -->
        <img class="coronavirus" src="./Coronavirus.png" />
        <label>Coronavirus Cases</label>
        <label class="ar">حالات الفيروس التاجي</label>
        <p class="is-size-2">{{this.myallData.cases}}</p>
      </div>
      <div class="mycard">
        <span>💀</span>
        <label>Deaths</label>
        <label class="ar">الوفيات</label>
        <p class="is-size-2 has-text-danger">{{this.myallData.deaths}}</p>
      </div>
      <div class="mycard">
        <!-- 😊 -->
        <img class="recovered" src="./good-decision-48.png" />
        <label>Recovered</label>
        <label class="ar">تعافى</label>
        <p class="is-size-2 has-text-primary">{{this.myallData.recovered}}</p>
      </div>
      <div class="mycard">
        <span>📅</span>
        <label>Last updated</label>
        <label class="ar">آخر تحديث</label>
        <p class="is-size-2">{{this.updated}}</p>
      </div>
      <div class="mycard">
        <img class="coronavirus" src="./Coronavirus.png" />
        <label>Today Cases</label>
        <label class="ar">حالات اليوم</label>
        <p class="is-size-2">{{this.myallData.todayCases}}</p>
      </div>
      <div class="mycard">
        <span>💀</span>
        <label>Today Deaths</label>
        <label class="ar">الوفيات اليوم</label>
        <p class="is-size-2 has-text-danger">{{this.myallData.todayDeaths}}</p>
      </div>
      <div class="mycard">
        <img class="coronavirus" src="./Critical.png" />
        <label>Critical</label>
        <label class="ar">حالات حرجة</label>
        <p class="is-size-2 has-text-danger">{{this.myallData.critical}}</p>
      </div>
      <div class="mycard">
        <span>🧪</span>
        <label>Tests</label>
        <label class="ar">حالات المختبرة</label>
        <p class="is-size-2">{{this.myallData.tests}}</p>
      </div>
    </div>
    <div class="mygif">
      <img src="./mygif.gif" />
    </div>
    <pie-chart
      style="margin: 100px 0"
      :data="chartData"
      :donut="true"
      legend="bottom"
      download="boom"
    ></pie-chart>
  </div>
</template>

<script>
import axios from "axios";
const allData = "https://corona.lmao.ninja/v2/all";
export default {
  data() {
    return {
      myallData: [],
      chartData: [],
      updated: ""
    };
  },
  async created() {
    const res = await axios.get(allData);
    this.myallData = res.data;
    console.log(this.myallData);
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    this.updated = date;

    Chartkick.options = {
      borderWidth: 0,
      height: "400px",
      colors: ["#ecf0f1", "#f14668 ", "#00d1b2 "]
    };
    this.chartData = [
      ["cases", this.myallData.cases],
      ["deaths", this.myallData.deaths],
      ["recovered", this.myallData.recovered]
    ];
  }
};
</script>