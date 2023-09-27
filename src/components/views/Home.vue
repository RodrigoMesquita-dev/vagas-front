<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <pesquisar-vaga/>                
            </div>
        </div>
        
        <lista-vagas></lista-vagas>
            
        <!--
            <lista-vagas>
                <template v-slot:titulo="slotProps">
                    {{ slotProps }}
                </template>
    
                <template v-slot:default="slotProps">
                    {{ slotProps }}
                </template>
    
                <template v-slot:rodape="slotProps">
                    {{ slotProps }}
                </template>
            </lista-vagas>
            <lista-vagas v-slot:default="slotProps">
                <div class="row mt-5" v-for="(vaga, index) in slotProps.vagas" :key="index">
                    <h4>{{ vaga.titulo }}</h4>
                    <p> {{ vaga.descricao }} </p>
                    <hr>
                </div>
            </lista-vagas>
            <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
                <div class="col">
                    <vaga v-bind="vaga" />
                </div>
            </div>
        -->

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
    import Indicador from '../commons/Indicador.vue';
    import ListaVagas from '../commons/ListaVagas.vue';
    import PesquisarVaga from '../commons/PesquisarVaga.vue';

    export default {
        name: 'Home',
        components: {
            PesquisarVaga,
            Indicador,
            ListaVagas,
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
        }
    }
</script>

<style scoped>
    h1 {
        color: blue
    }
</style>