import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'
import { useAuthStore } from './stores/authStore'
import PrimeVue from 'primevue/config'
import { MyPreset } from './theme/presets'

const app = createApp(App)

app.use(createPinia())

// Initialize auth right after pinia
const authStore = useAuthStore()
authStore.initializeAuth()

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
    },
  },
})
app.use(router)
app.mount('#app')
