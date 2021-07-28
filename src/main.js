import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import Particles from "particles.vue3";
import VueParticlesBg from "particles-bg-vue";
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);

app.use(Particles, VueParticlesBg).mount('#app')

app.AOS = new AOS.init({ disable: "phone" });
