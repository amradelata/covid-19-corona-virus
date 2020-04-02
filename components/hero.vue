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
    </div>

    <div class="mycards">
      <div class="mycard">
        <!-- 😷 -->
        <img class="coronavirus" src="./Coronavirus.png" />
        <label>Coronavirus Cases</label>
        <label class="ar">حالات الفيروس التاجي</label>
        <p class="is-size-2">{{cases}}</p>
      </div>
      <div class="mycard">
        💀
        <label>Deaths</label>
        <label class="ar">الوفيات</label>
        <p class="is-size-2 has-text-danger">{{deaths}}</p>
      </div>
      <div class="mycard">
        <!-- 😊 -->
        <img class="recovered" src="./good-decision-48.png" />
        <label>Recovered</label>
        <label class="ar">تعافى</label>
        <p class="is-size-2 has-text-primary">{{recovered}}</p>
      </div>
      <div class="mycard">
        📅
        <label>Last updated</label>
        <label class="ar">آخر تحديث</label>
        <p class="is-size-2">{{updated}}</p>
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
export default {
  data() {
    return {
      allData: [],
      cases: "",
      deaths: "",
      recovered: "",
      updated: "",
      chartData: []
    };
  },
  async created() {
    // total number
    let covid = require("novelcovid");
    this.allData = await covid.all();
    this.cases = this.allData.cases;
    this.deaths = this.allData.deaths;
    this.recovered = this.allData.recovered;
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
      ["cases", this.cases],
      ["deaths", this.deaths],
      ["recovered", this.recovered]
    ];
  }
};
</script>