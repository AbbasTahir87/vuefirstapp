import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 
const app = createApp(App).use(router)

app.use(router)

app.mount('#outer-wrapper')
    