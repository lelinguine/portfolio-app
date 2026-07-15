import './main.css'

import { inject } from '@vercel/analytics'
inject()

import { createApp } from 'vue'
import App from './main.vue'

const app = createApp(App)

app.mount('#main')
