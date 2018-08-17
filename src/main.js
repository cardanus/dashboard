import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const store = {
  data: [
    {
      expId: 1,
      name: 'Word choice',
      status: 'ACTIVE',
      allocRate: 0.2,
      earnings: [
        {
          name: 'default',
          data: [22, 16, 18, 11, 7, 14, 9, 7, 4, 6]
        },
        {
          name: 'experiment',
          data: [4, 3, 8, 15, 12, 14, 17, 22, 20, 25]
        }
      ]
    },
    {
      expId: 2,
      name: 'Color',
      status: 'DISABLED',
      allocRate: 0.5
    },
    {
      expId: 3,
      name: 'Word choice II',
      status: 'CANCELLED',
      allocRate: 0.6
    },
    {
      expId: 4,
      name: 'Alignment',
      status: 'INTEGRATED',
      allocRate: 0.5
    },
  ]
}

export { store, router };

new Vue({
  router,
  data: store,
  render: h => h(App)
}).$mount('#app')

Vue.use(HighchartsVue);
