import { createApp } from 'vue'
import App from './App.vue'
import Quasar from 'quasar/src/vue-plugin.js';
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {},
})

myApp.mount('#app')
