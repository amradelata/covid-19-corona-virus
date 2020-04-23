<template>
  <div class="container is-fluid">
    <div class="myHead">
      <h1>COVID-19 CORONAVIRUS OUTBREAK</h1>
      <h1 class="ar">تفشي الفيروس التاجي 19 (كرونا)</h1>
      <h2>
        المصدر/Source :
        <a
          href="https://www.worldometers.info/coronavirus/"
          target="_blank"
        >worldometers</a>
      </h2>
      <h2>
        BY :
        <a href="https://www.amradelata.com/" target="_blank">amradelata</a>
      </h2>
    </div>

    <div class="mycards">
      <div class="mycard">
        <!-- 😷 -->
        <img class="coronavirus" src="./Coronavirus.png" />
        <label>Coronavirus Cases</label>
        <label class="ar">حالات الفيروس التاجي</label>
        <p class="is-size-2">{{this.allcasesModify}}</p>
      </div>
      <div class="mycard">
        <span>💀</span>
        <label>Deaths</label>
        <label class="ar">وفيات</label>
        <p class="is-size-2 has-text-danger">{{this.alldethModify}}</p>
      </div>
      <div class="mycard">
        <!-- 😊 -->
        <img class="recovered" src="./good-decision-48.png" />
        <label>Recovered</label>
        <label class="ar">تعافى</label>
        <p class="is-size-2 has-text-primary">{{this.allRecoveredModify}}</p>
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
        <p class="is-size-2">{{this.allTodayCasesModify}}</p>
      </div>
      <div class="mycard">
        <span>💀</span>
        <label>Today Deaths</label>
        <label class="ar">وفيات اليوم</label>
        <p class="is-size-2 has-text-danger">{{this.allTodayDeathModify}}</p>
      </div>
      <div class="mycard">
        <img class="coronavirus" src="./Critical.png" />
        <label>Critical</label>
        <label class="ar">حالات حرجة</label>
        <p class="is-size-2 has-text-danger">{{this.allCriticalModify}}</p>
      </div>
      <div class="mycard">
        <span>🧪</span>
        <label>Tests</label>
        <label class="ar">حالات المختبرة</label>
        <p class="is-size-2">{{this.allTestsModify}}</p>
      </div>
    </div>
    <div class="mygif">
      <h1 style="text-align: center;">flatten the curve of coronavirus</h1>

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
      updated: "",
      allcasesModify: "",
      alldethModify: "",
      allRecoveredModify: "",
      allTodayCasesModify: "",
      allTodayDeathModify: "",
      allCriticalModify: "",
      allTestsModify: ""
    };
  },
  async created() {
    const res = await axios.get(allData);
    this.myallData = res.data;
    console.log(this.myallData);
    this.allcasesModify = this.myallData.cases.toLocaleString();

    this.alldethModify = this.myallData.deaths.toLocaleString();

    this.allRecoveredModify = this.myallData.recovered.toLocaleString();

    this.allTodayCasesModify = this.myallData.todayCases.toLocaleString();

    this.allTodayDeathModify = this.myallData.todayDeaths.toLocaleString();

    this.allCriticalModify = this.myallData.critical.toLocaleString();

    this.allTestsModify = this.myallData.tests.toLocaleString();

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