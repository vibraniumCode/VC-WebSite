import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/main.css'
import VueGtag from 'vue-gtag'

createApp(App)
  .use(router)
  .use(VueGtag, {
    config: { id: 'G-VELQV1YDTW' }
  }, router)
  .mount('#app')