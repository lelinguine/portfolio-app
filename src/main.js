import './main.css'

import { inject } from '@vercel/analytics'
inject()

import { createApp } from 'vue'
import App from './main.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#main')
