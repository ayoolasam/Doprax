import 'maz-ui/styles'
import './assets/main.css'
import router from './router/router'
import {createPinia} from 'pinia'
import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router);
app.mount('#app');

