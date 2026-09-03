import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { useDarkMode } from './composables/useDarkMode'
import { vReveal } from './composables/useScrollReveal'

const app = createApp(App)

app.directive('reveal', vReveal)

const { initDarkMode } = useDarkMode()
initDarkMode()

app.mount('#app')
