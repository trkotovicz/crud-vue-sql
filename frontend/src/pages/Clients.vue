<template>

  <header>

    <form class="form-horizontal">
      <label class="col-sm-2 control-label">
        NOME
        <input type="text" placeholder="NOME" class="form-control"/>
      </label>
      <label class="col-sm-2 control-label">
        CPF
        <input type="number" placeholder="CPF" class="form-control"/>
      </label>
      <label class="col-sm-2 control-label">
        EMAIL
        <input type="text" placeholder="EMAIL" class="form-control"/>
      </label>
      <label class="col-sm-2 control-label">
        FILIAÇÃO
        <input type="text" placeholder="FILIAÇÃO" class="form-control"/>
      </label>

      <label class="col-sm-2 control-label">
        CEP
        <input type="number" placeholder="CEP" class="form-control" v-model="cep" @keyup="getCep()"/>
      </label>
      
    </form>

    <div v-if="response !== null" class="form-group">

    <span class="form-horizontal">
      <label class="col-sm-2 control-label">
        ENDEREÇO
        <input type="text" placeholder="ENDEREÇO" class="form-control" v-model="response.logradouro"/>
      </label>
      <label class="col-sm-2 control-label">
        Nº
        <input type="number" placeholder="Nº" class="form-control"/>
      </label>
      <label class="col-sm-2 control-label">
        COMPLEMENTO
        <input type="text" placeholder="COMPLEMENTO" class="form-control"/>
      </label>
      <label class="col-sm-2 control-label">
        BAIRRO
        <input type="text" placeholder="BAIRRO" class="form-control" v-model="response.bairro"/>
      </label>
      <label class="col-sm-2 control-label">
        CIDADE
        <input type="text" placeholder="CIDADE" class="form-control" v-model="response.localidade"/>
      </label>
      <label class="col-sm-2 control-label">
        ESTADO
        <input type="text" placeholder="ESTADO" class="form-control" v-model="response.uf"/>
      </label>
    </span>
    </div>

    <button class="btn btn-success">FINALIZAR</button>

  </header>

  <main>

    <h2>CLIENTES</h2>
    <div class="clients-container">
      <ClientsCard />
    </div>

  </main>

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import ClientsCard from '../components/ClientsCard.vue'

export default defineComponent({
  name: 'Clients',
  components: {
    ClientsCard
  },
  data() {
    return {
      cep : '',
      response : null,
      messageCep: null
    }
	},
	methods : {
		getCep() {
      const url = `https://viacep.com.br/ws/${ this.cep }/json/`
      axios.get(url)
        .then( response => {
          const data = response.data
          if (!data.erro) {
            this.response = data
          } else {
            alert('Cep não encontrado')
          }
        })
        .catch( error => console.log(error) )
		},
	},
  watch: {
    cep: function(newCep, cep) {
      if (newCep.length === 8) this.getCep()
      else this.response = null
    }
  }
});
</script>

<style scoped>

form {
  display: flex;
  flex-flow:wrap;
  justify-content: space-evenly;
  justify-items: baseline;
  align-items: center;
  align-content: center;
}

span {
  display: flex;
  flex-flow: wrap;
  justify-content:space-evenly;
  justify-items:baseline;
  align-items: center;
  align-content: center;
}

input {
  text-align: center;
  height: 32px;
  margin: 2px 2px;
}

label {
  display: flex;
  flex-direction: row;
  margin: 2px 5px;
  width: 300px;
}

button {
  height: 35px;
}

h2 {
  padding: 30px;
}

</style>