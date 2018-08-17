<template>
  <div class="home mt-4">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Experiment ID</th>
          <th>Description</th>
          <th>Status</th>
          <th>Allocation Rate</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
          <tr class="item-row" v-for="item in store.data" :key="item.expId" v-on:click="clickList(item)">
            <td>{{ item.expId }}</td>
            <td>{{ item.name }}</td>
            <td><span v-bind:class="getBadge(item.status)">{{ item.status }}</span></td>
            <td>{{ item.allocRate * 100 }}%</td>
            <td>{{ item.startDate }}</td>
            <td>{{ item.endDate }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { store, router } from '@/main'

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
  methods: {
    clickList: item => {
      const expId = item.expId
      router.push({ name: 'experiment', params: { id: expId }})
    },
    getBadge: status => {
      const statuses = {
        'ACTIVE': 'success',
        'DISABLED': 'secondary',
        'CANCELLED': 'danger',
        'INTEGRATED': 'primary'
      }
      return `badge badge-${statuses[status]}`
    }
  }
}
</script>

<style scoped>
  .item-row:hover {
    cursor: pointer;
  }
</style>