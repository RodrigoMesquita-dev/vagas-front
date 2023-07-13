<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <h2>Apresente a sua vaga para milhares de profissionais de graça</h2>
            </div>
        </div>

        <div  class="row mt-3">
            <div class="col">
                <label class="form-label">Título da vaga</label>
                <input type="text" class="form-control" v-model="titulo">
                <div class="form-text">Por exemplo: programador javascript e vuejs</div>
            </div>
        </div>

        <div  class="row mt-3">
            <div class="col">
                <label class="form-label">Descricao</label>
                <input type="text" class="form-control" v-model="descricao">
                <div class="form-text">Informe os detalhes da vaga</div>
            </div>
        </div>

        <div  class="row mt-3">
            <div class="col">
                <label class="form-label">Salario</label>
                <input type="number" class="form-control" v-model="salario">
                <div class="form-text">Informe o salario</div>
            </div>

            <div class="col">
                <label class="form-label">Modalidade</label>
                <select class="form-select" v-model="modalidade">
                    <option value="" disabled>--Selecione</option>
                    <option value="1">Home office</option>
                    <option value="2">Presencial</option>
                </select>
                <div class="form-text">Informe onde as atividades serao realizadas</div>
            </div>

            <div class="col">
                <label class="form-label">Tipo</label>
                <select class="form-select" v-model="tipo">
                    <option value="" disabled>--Selecione</option>
                    <option value="1">CLT</option>
                    <option value="2">PJ</option>
                </select>
                <div class="form-text">Informe o tipo de contratação</div>
            </div>
        </div>

        <div  class="row mt-3">
            <div class="col">
                <button type="submit" class="btn btn-primary" @click="salvarVaga()">cadastrar</button>
            </div>
        </div>
        
    </div>
</template>
  
<script>
    export default {
        name: 'PublicarVaga',
        data() {
            return {
                titulo: '',
                descricao: '',
                salario: '',
                modalidade: '',
                tipo: '',
            }
        },
        methods: {
            salvarVaga() {
                let dataAtual = Date.now();
                let dataFormatada = new Date(dataAtual);

                let vagas = JSON.parse(localStorage.getItem('vagas'));
                console.log(vagas);

                if(!vagas) vagas = [];
                
                vagas.push({
                    titulo: this.titulo,
                    descricao: this.descricao,
                    salario: this.salario,
                    modalidade: this.modalidade,
                    tipo: this.tipo,
                    publicacao: dataFormatada.toISOString()
                });
                
                localStorage.setItem('vagas', JSON.stringify(vagas))
            }
        }
    }
</script>

<style>

</style>