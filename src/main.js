import { Vue, createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueParticles from 'vue-particles'

createApp(App).mount('#app')

Vue.use(VueParticles)
