<template>

  <main>

    <h1>CLIENTES</h1>

    <div class="clients-container">

      <ClientsCard />

    </div>

  </main>

</template>

<script>
import { defineComponent } from 'vue'
import ClientsCard from '../components/ClientsCard.vue'

export default defineComponent({
  name: 'Clients',
  components: {
    ClientsCard
  },
  data() { 
    return {}
  },
  methods: {},
})
</script>

<style>
</style>