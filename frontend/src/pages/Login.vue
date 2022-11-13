<template>
  <main>

    <h1>LOGIN</h1>

    <form>
      <label htmlFor="Login" className="">
        EMAIL
        <input
          className=""
          type="email"
          placeholder="digite seu email"
        />
      </label>

      <label htmlFor="Password" className="">
        SENHA
        <input
          className=""
          minLength="8"
          type="password"
          placeholder="digite sua senha"
        />
      </label>

      <a href="/clients">
        <button className="" type="button">
          LOGIN
        </button>
      </a>

      <a href="/register">
        <button className="" type="button">
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
</style>