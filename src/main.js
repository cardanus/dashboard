import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const store = {
  data: [
    {
      expId: 1,
      status: 'ACTIVE',
      allocRate: 0.2
    },
    {
      expId: 2,
      status: 'DISABLED',
      allocRate: 0.5
    }
  ]
}

export { store, router };

new Vue({
  router,
  data: store,
  render: h => h(App)
}).$mount('#app')

Vue.use(HighchartsVue);
