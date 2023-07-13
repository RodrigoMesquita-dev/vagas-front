<template>
  <div>
    <!--aqui é capturado o evento emitido no componente topo padrão-->
    <!-- <topo-padrao @enviarMensagem="receberMensagem($event)" /> -->
    <topo-padrao @navegar="navegar($event)" />
    <vaga-favorita class="divVagasFavoritas"/>
    <conteudo :conteudo="componente" />
  </div>
</template>

<script>
import VagaFavorita from './components/commons/VagaFavorita.vue';
import Conteudo from './components/layouts/Conteudo.vue'
import TopoPadrao from './components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    componente: 'Home'
  }),
  components: {
    Conteudo,
    TopoPadrao: TopoPadrao,
    VagaFavorita
  },
  methods: {
    navegar(section) {
      this.componente = section;
    }
  }
}
</script>
<style scoped>
.divVagasFavoritas {
  position: absolute;
  z-index: 1;
  top: 70px;
  right: 10px;
}
</style>
