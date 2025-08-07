import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router/router.ts'

const app = createApp(App)

const redirect = sessionStorage.redirect
if (redirect) {
  sessionStorage.removeItem('redirect')
  router.replace(redirect)
}

app.use(router)
app.mount('#app')
