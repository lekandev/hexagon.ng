import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import Particles from "particles.vue3";
import VueParticlesBg from "particles-bg-vue";

createApp(App).use(Particles, VueParticlesBg).mount('#app')
