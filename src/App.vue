<template>
  <div id="app">
    <div id="header" class="row">
      <div id="title" class="col">
        <h1><a id="home-link" href="/">Cardanus Dashboard</a></h1>
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

  #home-link {
    color: black;
    text-decoration: none;
  }

  #logo {
    width: 100px;
  }

  #header {
    border-bottom: 5px solid #dc1e35;
  }
</style>
