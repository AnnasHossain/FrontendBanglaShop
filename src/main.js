import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/styles/global.css' // Globale CSS-Datei

createApp(App).use(router).mount('#app')
