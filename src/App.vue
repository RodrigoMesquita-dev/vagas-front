<template>
  <div>
    <!--aqui é capturado o evento emitido no componente topo padrão-->
    <!-- <topo-padrao @enviarMensagem="receberMensagem($event)" /> -->
    <topo-padrao @navegar="navegar($event)" />
    <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{alerta.titulo}}</h5>
      </template>
      <p>
        {{alerta.descricao}}
      </p>
    </alerta>
    <vaga-favorita class="divVagasFavoritas"/>
    <conteudo :conteudo="componente" />
  </div>
</template>

<script>
import Alerta from './components/commons/Alerta.vue';
import VagaFavorita from './components/commons/VagaFavorita.vue';
import Conteudo from './components/layouts/Conteudo.vue'
import TopoPadrao from './components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    componente: 'Home',
    exibirAlerta:false,
    alertaMsg: '', 
    alerta: { titulo: '', descricao: '', tipo: ''},
  }),
  mounted() {
    this.emitter.on('alerta', (msg) => {
       this.exibirAlerta = true;
       setTimeout(() => this.exibirAlerta = false, 4000)
       this.alertaMsg = msg;
       this.alera =  msg;
    })
  },
  components: {
    Conteudo,
    TopoPadrao: TopoPadrao,
    VagaFavorita,
    Alerta
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
