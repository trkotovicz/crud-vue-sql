<template>
  <main>

    <h2>NOVO CADASTRO</h2>

    <form class="form-horizontal">

      <label for="name" class="col-sm-2 control-label">
        NOME
        <input
          id="name"
          type="text"
          class="form-control"
          placeholder="nome completo"
          v-model="name"
        />
      </label>

      <label for="email" class="col-sm-2 control-label">
        EMAIL
        <input
          id="email"
          type="email"
          class="form-control"
          placeholder="email"
          v-model="email"
        />
      </label>

      <label for="password" class="col-sm-2 control-label">
        SENHA
        <input
          id="password"
          minLength="8"
          type="password"
          class="form-control"
          placeholder="senha"
          v-model="password"
        />
      </label>

      <a href="/">
        <button class="btn btn-success" type="button" v-on:click="createNewUser()">
          CADASTRAR
        </button>
      </a>


    </form>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { userRegister } from '../services/apiRequests';

export default defineComponent({
  name: 'Register',
  data() { 
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async createNewUser() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      await userRegister(data)
      console.log(data)
    },
  },
})
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

input, button {
  margin: 10px 0px;
  text-align: center;
}

label {
  padding: 8px;
}

button {
  width: 150px;
}

h2 {
  padding: 30px;
}

</style>