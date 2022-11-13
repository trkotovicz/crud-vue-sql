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
        />
      </label>

      <a href="/clients">
        <button class="btn btn-success" type="button">
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

export default defineComponent({
  name: 'Login',
  data() {
    return {}
  },
  methods: {},
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