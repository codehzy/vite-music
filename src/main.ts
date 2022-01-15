import { createApp } from 'vue'
import App from './App'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router).use(createPinia()).mount('#app')
