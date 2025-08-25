import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).use(router).use(ElementPlus).mount('#app')
