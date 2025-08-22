import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import PrimeVue from 'primevue/config'
import { MyPreset } from './theme/presets'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
    },
  },
})
app.use(router)

app.mount('#app')
