<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <pesquisar-vaga/>                
            </div>
        </div>

        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <vaga v-bind="vaga" />
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-4">
                <indicador titulo="Vagas Abertas" indicador="100" bg="bg-dark" color="text-white" />
            </div>

            <div class="col-4">
                <indicador titulo="Profissionais Cadastrados" indicador="225" bg="bg-dark" color="text-white" />
            </div>

            <div class="col-4">
                <indicador titulo="Visitantes Online" :indicador="usuariosOnline" bg="bg-light" color="text-dark" />
            </div>
        </div>
    </div>
</template>

<script>
    import Vaga from '../commons/Vaga.vue';
    import Indicador from '../commons/Indicador.vue';
    import PesquisarVaga from '../commons/PesquisarVaga.vue';

    export default {
        name: 'Home',
        components: {
            PesquisarVaga,
            Indicador,
            Vaga,
        },
        data () {
            return {
                usuariosOnline: 0,
                vagas: []
            }
        },
        methods: {
            getUsuariosOnline() {
                this.usuariosOnline = Math.floor(Math.random() * 101);
            }
        },        
        created() {
            setInterval(this.getUsuariosOnline, 5000); // a cada 5 segundo
        },
        activated() {
            this.vagas = JSON.parse(localStorage.getItem('vagas'));
        }
    }
</script>

<style scoped>
    h1 {
        color: blue
    }
</style>