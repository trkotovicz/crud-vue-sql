<template>

  <main>

    <div class="clients-card">

      <table class="table table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>CPF</th>
            <th>ENDEREÇO</th>
            <th>Nº</th>
            <th>COMPLEMENTO</th>
            <th>BAIRRO</th>
            <th>CEP</th>
            <th>CIDADE</th>
            <th>ESTADO</th>
            <th>EMAIL</th>
            <th>FILIAÇÃO</th>
            <th>✏️</th>
            <th>❌</th>
          </tr>
        </thead>
      
        <tbody>
          <tr v-for="client in clients" :key="client.id">

            <th>{{client.id}}</th>
            <th>{{client.name}}</th>
            <th>{{client.cpf}}</th>
            <th>{{client.address}}</th>
            <th>{{client.addressNumber}}</th>
            <th>{{client.addressComplement}}</th>
            <th>{{client.district}}</th>
            <th>{{client.zip}}</th>
            <th>{{client.city}}</th>
            <th>{{client.state}}</th>
            <th>{{client.email}}</th>
            <th>{{client.kinship}}</th>
            <th><button class="btn btn-warning btn-sm" v-on:click="editClient(client.id, client)">EDITAR</button></th>
            <th><button class="btn btn-danger btn-sm" v-on:click="excludeClient(client.id)">EXCLUIR</button></th>
          </tr>
        </tbody>

      </table>

    </div>

  </main>

</template>

<script>
import { defineComponent } from 'vue';
import { getAllClients, updateClient, deleteClient } from '../services/apiRequests';

export default defineComponent({
  name: 'ClientsCard',
  data() { 
    return {
      clients: [
        {
          id: 1,
          name: 'Homer Jay Simpson',
          cpf: '79645300600',
          address: 'Evergreen Terrace',
          addressNumber: 632,
          district: 'Liberty Heights',
          zip: 97403123,
          city: 'Springfield',
          state: 'Oregon',
          kinship: 'Abraham Jedediah Simpson II',
          email: 'homer@familysimpson.com',
        },
        {
          id: 2,
          name: 'Lisa Marie Simpson',
          cpf: '38202483824',
          address: 'Evergreen Terrace',
          addressNumber: 632,
          district: 'Liberty Heights',
          zip: 97403123,
          city: 'Springfield',
          state: 'Oregon',
          kinship: 'Marjorie Jacqueline Bouvier Simpson',
          email: 'lisa@familysimpson.com',
        },
        {
          id: 3,
          name: 'Marjorie Jacqueline Bouvier Simpson',
          cpf: '6600035469',
          address: 'Evergreen Terrace',
          addressNumber: 632,
          district: 'Liberty Heights',
          zip: 97403123,
          city: 'Springfield',
          state: 'Oregon',
          kinship: 'Jackie Bouvier',
          email: 'marge@familysimpson.com',
        },
        {
          id: 4,
          name: 'Bartholomew J. Bouvier Simpson',
          cpf: '42838420283',
          address: 'Evergreen Terrace',
          addressNumber: 632,
          district: 'Liberty Heights',
          zip: 97403123,
          city: 'Springfield',
          state: 'Oregon',
          kinship: 'Marjorie Jacqueline Bouvier Simpson',
          email: 'bart@@familysimpson.com',
        },
      ],
    }
  },
  methods: {
    async getClients() {
      const data = await getAllClients()
      this.clients = data;
    },
    async excludeClient(id) {
      await deleteClient(id)
    },
    async editClient(id, body) {
      await updateClient(id, body)
    }
  },
  watch: {
    // clients: function(newClients, oldClients) {
    //   if (newClients) this.getClients()
    //   if (oldClients) this.getClients()
    // }
  },
  // mounted() {
    // this.getClients()
  // }
})
</script>

<style>
</style>