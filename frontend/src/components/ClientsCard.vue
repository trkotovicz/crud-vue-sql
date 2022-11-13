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
          <tr>
            <!-- MAP PARA CADA CLIENTE CADASTRADO NO DB -->
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
            <th><button class="btn btn-warning btn-sm">EDITAR</button></th>
            <th><button class="btn btn-danger btn-sm">EXCLUIR</button></th>
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