<template>
    <div>
        <h1>Conteudo</h1>
        <!--Renderizar de modo dinâmico, home e publicar vaga-->
        <button @click="conteudo = 'home'" >Home</button>
        <button @click="conteudo = 'publicar-vaga'" >Publicar Vaga</button>
        <keep-alive>
            <component :is="conteudo"/>
        </keep-alive>
    </div>
</template>

<script>
    import Home from '../views/Home.vue'
    import PublicarVaga from '../views/PublicarVaga.vue'
    
    export default {
        name: 'Conteudo',
        components: {
            Home,
            PublicarVaga,
        },
        data: () => ({
            conteudo: 'home',
        }),
    }
</script>

<style scoped>
    .teste1 {
        background: blue;
        color: white;
    }
</style>
