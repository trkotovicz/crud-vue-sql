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
        />
      </label>

      <label for="email" class="col-sm-2 control-label">
        EMAIL
        <input
          id="email"
          type="email"
          class="form-control"
          placeholder="email"
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
        />
      </label>

      <a href="/">
        <button class="btn btn-success" type="button">
          CADASTRAR
        </button>
      </a>


    </form>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Register',
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
  padding: 8px;
}

button {
  width: 150px;
}

h2 {
  padding: 30px;
}

</style>