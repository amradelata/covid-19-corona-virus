import Vue from 'vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'


Chartkick.configure({language: "de", mapsApiKey: "..."})

Vue.use(Chartkick.use(Chart))
