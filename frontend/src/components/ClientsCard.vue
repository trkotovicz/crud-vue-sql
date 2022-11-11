<template>

  <main>

    <div class="clients-card">

      tabela de clientes

      <table>

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
          </tr>
        </thead>
      
        <tbody>
          <tr>
            <!-- MAP PARA CADA CLIENTE CADASTRADO NO DB -->
          {
            <th>{ID}</th>
            <th>{NOME}</th>
            <th>{CPF}</th>
            <th>{ENDEREÇO}</th>
            <th>{Nº}</th>
            <th>{COMPLEMENTO}</th>
            <th>{BAIRRO}</th>
            <th>{CEP}</th>
            <th>{CIDADE}</th>
            <th>{ESTADO}</th>
            <th>{EMAIL}</th>
            <th>{FILIAÇÃO}</th>
            <th><button>EDITAR</button></th>
            <th><button>EXCLUIR</button></th>
          }
          </tr>
        </tbody>

      </table>

    </div>

  </main>

</template>

<script>
export default {
  name: 'ClientsCard',
  data() { 
    return {}
  },
  methods: {},
}
</script>

<style>
</style>