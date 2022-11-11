<template>
  <div id="app">
    Qualquer coisa aqui!
    <Login />
    <Register />
    <Clients />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue';
import Clients from './components/Clients.vue';

export default {
  name: 'App',
  components: {
    Login,
    Register,
    Clients,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
