<template>

  <main>

    <h1>CLIENTES</h1>

    <div class="clients-container">

      <ClientsCard />

    </div>

  </main>

</template>

<script>
import ClientsCard from './ClientsCard.vue'

export default {
  name: 'Clients',
  components: {
    ClientsCard
  },
  data() { 
    return {}
  },
  methods: {},
}
</script>

<style>
</style>