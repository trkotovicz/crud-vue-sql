<template>
  <main>
    <h1>NOVO CADASTRO</h1>
    <form>

      <label htmlFor="Login" class="">
        NOME
        <input
          class=""
          type="text"
          placeholder="nome completo"
        />
      </label>

      <label htmlFor="Login" class="">
        EMAIL
        <input
          class=""
          type="email"
          placeholder="email"
        />
      </label>

      <label htmlFor="Password" class="">
        SENHA
        <input
          class=""
          minLength="8"
          type="password"
          placeholder="senha"
        />
      </label>

      <a href="/">
        <button class="" type="button">
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

<style>
</style>