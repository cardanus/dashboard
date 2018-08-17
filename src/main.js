import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const store = {
  data: [
    {
      expId: 'word-1',
      name: 'Word choice for button',
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
      ],
      diff: "+0.52%",
      b_allocations: 1023,
      startDate: '10.03.2018',
      endDate: ''
    },
    {
      expId: 'word-2',
      name: 'Word choice for button II',
      status: 'CANCELLED',
      allocRate: 0.6,
      diff: "-0.36%",
      b_allocations: 2033,
      startDate: '05.01.2018',
      endDate: '12.08.2018'
    },
    {
      expId: 'color',
      name: 'Color of button',
      status: 'DISABLED',
      allocRate: 0.5,
      diff: "+0.52%",
      b_allocations: 548,
      startDate: '',
      endDate: ''
    },
    {
      expId: 'alignment',
      name: 'Left or right-aligned text',
      status: 'INTEGRATED',
      allocRate: 0.5,
      diff: "-0.36%",
      b_allocations: 128,
      startDate: '12.11.2017',
      endDate: '23.06.2018'
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
