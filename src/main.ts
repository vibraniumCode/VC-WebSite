
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'   // ← importás el router
import './assets/main.css'

createApp(App)
  .use(router)                        // ← lo instalás
  .mount('#app')