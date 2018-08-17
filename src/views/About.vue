<template>
  <div class="about">
    <h1>This is an about page</h1>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
  import {Chart} from 'highcharts-vue'

  export default {
      component: {
        highcharts: Chart
      },
      data() {
        return {
          chartOptions: {
            series: [{
              data: [1,2,3] // sample data
            }]
          }
        }
      }
  }
</script>