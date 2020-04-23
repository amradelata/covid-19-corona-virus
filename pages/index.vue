<template>
  <div>
    <hero />
    <!--  -->
    <div class="container is-fluid">
      <div class="mybuttonDisktop">
        <div class="field has-addons">
          <div class="control" style="width: 100%">
            <input class="input" type="text" placeholder="Find a Country" v-model="search" />
          </div>
          <div class="control">
            <a class="button is-info">Search</a>
          </div>
        </div>
        <!--  -->

        <div>
          <div
            class="searchcard"
            style=" padding: 20px 0"
            v-for="item in myresolts"
            :key="item.country"
          >
            <div class="singleSearchCard">
              <div class="insearchcard">
                <label>Country :</label>
                <span>{{item.country}}</span>
              </div>
              <div class="insearchcard">
                <label>Cases :</label>
                <span>{{item.cases}}</span>
              </div>
              <div class="insearchcard">
                <label>Today Cases :</label>
                <span>{{item.todayCases}}</span>
              </div>
              <div class="insearchcard">
                <label>Deaths :</label>
                <span>{{item.deaths}}</span>
              </div>
              <div class="insearchcard">
                <label>Today Deaths :</label>
                <span>{{item.todayDeaths}}</span>
              </div>
              <div class="insearchcard">
                <label>Recovered :</label>
                <span>{{item.recovered}}</span>
              </div>
              <div class="insearchcard">
                <label>Active :</label>
                <span>{{item.active}}</span>
              </div>
              <div class="insearchcard">
                <label>critical :</label>
                <span>{{item.critical}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="tabs is-toggle mybuttonPhone">
        <ul>
          <li @click="showcounties" ref="btnworld" class="is-active">
            <a>
              <span class="icon is-small">
                <i class="fas fa-globe-africa" aria-hidden="true"></i>
              </span>
              <span>( the world ) العالم</span>
            </a>
          </li>
          <li @click="showstates" ref="btnusa">
            <a>
              <span class="icon is-small">
                <i class="fas fa-flag-usa" aria-hidden="true"></i>
              </span>
              <span>( USA ) الولايات المتحدة الأمريكية</span>
            </a>
          </li>
          <li @click="showpie" ref="btnpie">
            <a>
              <span class="icon is-small">
                <i class="fas fa-chart-pie" aria-hidden="true"></i>
              </span>
              <span>Pie Graph</span>
            </a>
          </li>
          <li @click="showline" ref="btnline">
            <a>
              <span class="icon is-small">
                <i class="fas fa-chart-line" aria-hidden="true"></i>
              </span>
              <span>Line Graph</span>
            </a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div ref="states" style="display: none;">
        <states />
      </div>
      <div ref="counties">
        <counties />
      </div>
      <div ref="piegraph" style="display: none;">
        <pieGraph />
      </div>
      <div ref="linegraph" style="display: none;">
        <linegraph />
      </div>
    </div>
    <myfooter />
  </div>
</template>

<script>
import axios from "axios";
const countiesDataAPI = "https://corona.lmao.ninja/v2/countries";
import hero from "~/components/hero.vue";
import states from "../components/states.vue";
import counties from "../components/counties.vue";
import myfooter from "../components/myfooter.vue";
import pieGraph from "../components/pieGraph.vue";
import linegraph from "../components/linegraph.vue";
export default {
  data() {
    return {
      countiesData: [],
      countiesDataSerach: [],
      search: ""
    };
  },
  components: {
    hero,
    states,
    counties,
    myfooter,
    linegraph,
    pieGraph
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
  },
  methods: {
    showcounties() {
      this.$refs["states"].style.display = "none";
      this.$refs["piegraph"].style.display = "none";
      this.$refs["linegraph"].style.display = "none";
      this.$refs["counties"].style.display = "block";
      //
      this.$refs["btnworld"].classList.add("is-active");
      this.$refs["btnusa"].classList.remove("is-active");
      this.$refs["btnline"].classList.remove("is-active");
      this.$refs["btnpie"].classList.remove("is-active");
    },
    showstates() {
      this.$refs["states"].style.display = "block";
      this.$refs["piegraph"].style.display = "none";
      this.$refs["linegraph"].style.display = "none";
      this.$refs["counties"].style.display = "none";
      //
      this.$refs["btnworld"].classList.remove("is-active");
      this.$refs["btnusa"].classList.add("is-active");
      this.$refs["btnline"].classList.remove("is-active");
      this.$refs["btnpie"].classList.remove("is-active");
    },
    showpie() {
      this.$refs["states"].style.display = "none";
      this.$refs["piegraph"].style.display = "block";
      this.$refs["linegraph"].style.display = "none";
      this.$refs["counties"].style.display = "none";
      //
      this.$refs["btnworld"].classList.remove("is-active");
      this.$refs["btnusa"].classList.remove("is-active");
      this.$refs["btnline"].classList.remove("is-active");
      this.$refs["btnpie"].classList.add("is-active");
    },
    showline() {
      this.$refs["states"].style.display = "none";
      this.$refs["piegraph"].style.display = "none";
      this.$refs["linegraph"].style.display = "block";
      this.$refs["counties"].style.display = "none";
      //
      this.$refs["btnworld"].classList.remove("is-active");
      this.$refs["btnusa"].classList.remove("is-active");
      this.$refs["btnline"].classList.add("is-active");
      this.$refs["btnpie"].classList.remove("is-active");
    }
  },
  computed: {
    myresolts() {
      if (this.search) {
        return this.countiesData.filter(place => {
          return place.country
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      } else {
        console.log("not heare");
      }
    }
  }
};
</script>