<template>
  <main>
    <h1>NOVO CADASTRO</h1>
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
      <button className="" type="button">
        CADASTRAR
      </button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Register',
  data() { 
    return {}
  },
  methods: {},
}
</script>

<style>
</style>