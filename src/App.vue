<template>
  <div>
    <h1>Componente App</h1>
    <topo-padrao/>
    <conteudo/>
  </div>
</template>

<script>
import Conteudo from './components/layouts/Conteudo.vue'
import TopoPadrao from './components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao: TopoPadrao
  }
}
</script>
<style scoped>
h1 {
  color: rebeccapurple
}
</style>
