<template>
  <main>

    <h2>LOGIN</h2>

    <form class="form-horizontal">
      <label for="email" class="col-sm-2 control-label">
        EMAIL
        <input
          id="email"
          type="email"
          class="form-control"
          placeholder="digite seu email"
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
          placeholder="digite sua senha"
          v-model="password"
        />
      </label>

      <a href="/clients">
        <button class="btn btn-success" type="button" v-on:click="requestLogin()">
          LOGIN
        </button>
      </a>

      <a href="/register">
        <button class="btn btn-primary" type="button">
          CADASTRAR
        </button>
      </a>

    </form>

  </main>
  
</template>

<script>
import { defineComponent } from 'vue';
import { login } from '../services/apiRequests';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async requestLogin() {
      const data = {
        email: this.email,
        password: this.password
      }
      
      await login(data)
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
  padding: 9px;
}

button {
  width: 150px;
}

h2 {
  padding: 35px;
}

</style>