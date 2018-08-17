<template>
  <div class="about mt-4">
    <div class="row">
      <div class="col">
        <div class="info ml-5">
          <h3>#{{ experiment.expId }}: {{ experiment.name }}</h3>
          <b>Allocation rate:</b> {{ experiment.allocRate }}<br/>
        </div>
      </div>
      <div class="col">
        <div class="dropdown float-right mr-4">
          <b class="mr-2">Status: </b>
          <button v-bind:class="getStatusButton(experiment.status)" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ experiment.status }}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a id="active" class="dropdown-item" href="#">Active</a>
            <a id="disabled" class="dropdown-item" href="#">Disabled</a>
            <a id="cancelled" class="dropdown-item" href="#">Cancelled</a>
            <a id="integrated" class="dropdown-item" href="#">Integrated</a>
          </div>
        </div>
      </div>
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
          return store.data.filter(item => item.expId === this.$route.params.id)[0]
        }
    },
    methods: {
      getStatusButton: status => {
        const statuses = {
          'ACTIVE': 'success',
          'DISABLED': 'secondary',
          'CANCELLED': 'danger',
          'INTEGRATED': 'primary'
        }
        return `btn btn-${statuses[status]} dropdown-toggle`
      }
    }
  }
</script>

<style scoped>
  .info {
    text-align: left;
  }
</style>