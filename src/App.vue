<template>
  <div id="app">
    <div class="row">
      <div id="title" class="col">
        <h1>Cardanus Dashboard</h1>
      </div>
      <div class="col">
        <img id="logo" alt="Islandsbanki logo" src="../public/ISB-logo.svg" class="float-right m-4">
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  #logo {
    width: 100px;
  }
</style>
