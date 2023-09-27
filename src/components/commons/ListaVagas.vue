<template>
    <slot :name="titulo" :dadosTitulo="{ titulo: 'Titulo Lista', nVagas: 15 }">
        <p>Título da lista de vagas</p>
    </slot>
    <slot :vagas="vagas">
        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <vaga v-bind="vaga" />
            </div>
        </div>
    </slot>
    <slot :name="rodape" :dadosRodape="{ titulo: 'Rodape Lista', paginacao: { nPaginas: 10, paginaAtual: 1, }}">
        <p>O rodapé da lista de vagas</p>
    </slot>
</template>

<script>
    import Vaga from '@/components/commons/Vaga.vue'

export default {
    name: 'ListaVagas',
    data: () => ({
        vagas: []
    }),
    components: {
        Vaga
    },
    mounted() {
        this.emitter.on('filtrarVagas', vaga => {
            const vagas = JSON.parse(localStorage.getItem('vagas'));
            this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
        });
    },
    activated() {
        this.vagas = JSON.parse(localStorage.getItem('vagas'));
    },
}
</script>

<style>

</style>