<template>
  <div class="home mt-4">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Experiment ID</th>
          <th>Status</th>
          <th>Allocation Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in store.data" :key="item.expId">
          <td>{{ item.expId }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.allocRate * 10 }}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { store } from '@/main'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      store,
    };
  },
}
</script>
