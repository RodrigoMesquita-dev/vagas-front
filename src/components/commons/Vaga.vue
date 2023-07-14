<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>{{titulo}}</div>
                    <div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" v-model="favoritada">
                            <label class="form-check-label">Favoritar</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>{{descricao}}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R$ {{salario}} | Modalidade: {{getModalidade}} | Tipo: {{getTipo}} | Publicacao: {{getPublicacao}}</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Vaga',
        // props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao']
        /*Ao invés de usar um array na propriedade props é possível utilizar tbm um objeto., a chave é o nome
        do atributo, e o valor seria o tipo*/
        data: () => ({
            favoritada: false
        }),
        watch: {
            favoritada(valorNovo) {
                this.emitter.emit(valorNovo? 'favoritarVaga':'desfavoritarVaga', this.titulo);
            }
        },
        props: {
            titulo: String,
            descricao: String,
            salario: Number,
            modalidade: String,
            tipo: String,
            publicacao: String,
            },
        computed: {
            getModalidade() {
                switch (this.modalidade) {
                    case '1': return 'Home Office';
                    case '2': return 'Presencial';
                    default: break;
                }
                return '';
            },
            getTipo() {
                switch (this.tipo) {
                    case '1': return 'CLT';
                    case '2': return 'PJ';
                    default: break;
                }
                return '';
            },
            getPublicacao() {
                let dataPublicacao = new Date(this.publicacao);
                return dataPublicacao.toLocaleString('pt-BR');
            }
        }
    }
</script>

<style>

</style>