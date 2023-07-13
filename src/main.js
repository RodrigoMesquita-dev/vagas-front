import { createApp } from 'vue'
import App from './App.vue'

// importamos o pacote
import mitt from 'mitt'

// criamos a instância do pacote mitt
const emitter = mitt()

// iniciamos a instância do vue
const app = createApp(App)

// atribuimos a instância do pacote mitt a uma propriedade global
app.config.globalProperties.emitter = emitter

// montamos a instancia do vue com o elemento html de id app
app.mount('#app')

