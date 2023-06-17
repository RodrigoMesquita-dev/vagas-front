<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <pesquisar-vaga/>                
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
                <indicador titulo="Visitantes Online" indicador="25" bg="bg-light" color="text-dark" />
            </div>
        </div>
    </div>
</template>

<script>
    import Indicador from '../commons/Indicador.vue';
    import PesquisarVaga from '../commons/PesquisarVaga.vue';

    export default {
        name: 'Home',
        components: {
            PesquisarVaga,
            Indicador,
        },
        
        unmounted() {
            console.log('desmontado')
        }
    }
</script>

<style scoped>
    h1 {
        color: blue
    }
</style>