<template>
  <div id="app">
    <h3>CONSULTA DE CLIENTES</h3>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: rgb(236, 236, 236);
}

h3 {
  padding: 30px;
}

</style>
