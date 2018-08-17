<template>
  <div class="home mt-4">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Experiment ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Allocation Rate</th>
        </tr>
      </thead>
      <tbody>
          <tr class="item-row" v-for="item in store.data" :key="item.expId" v-on:click="clickList(item)">
            <td>{{ item.expId }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.allocRate * 100 }}%</td>
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
      router.push({ name: 'about', params: { id: expId }})
    }
  }
}
</script>

<style scoped>
  .item-row:hover {
    cursor: pointer;
  }
</style>