<template>
  <div class="about mt-4">
    <div class="info ml-5">
      <h3>#{{ experiment.expId }}: {{ experiment.name }}</h3>
      <b>Status:</b> <span v-bind:class="getBadge(experiment.status)">{{ experiment.status }}</span><br/>
      <b>Allocation rate:</b> {{ experiment.allocRate }}<br/>
      ...
    </div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
  import {Chart} from 'highcharts-vue'
  import { store } from '@/main'

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
          },
        }
      },
    computed: {
        experiment: function () {
          return store.data.filter(item => item.expId = this.$route.params.id)[0]
        }
    },
    methods: {
      getBadge: status => {
        const statuses = {
          'ACTIVE': 'success',
          'DISABLED': 'secondary',
          'CANCELLED': 'danger',
          'INTEGRATED': 'primary'
        }
        return `ml-2 badge badge-${statuses[status]}`
      }
    }
  }
</script>

<style scoped>
.info {
  text-align: left;
}
</style>