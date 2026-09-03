import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { i18n } from './i18n'
import { useDarkMode } from './composables/useDarkMode'
import { useLocale } from './composables/useLocale'
import { vReveal } from './composables/useScrollReveal'

const app = createApp(App)

app.use(i18n)
app.directive('reveal', vReveal)

const { initDarkMode } = useDarkMode()
initDarkMode()

const { initLocale } = useLocale()
initLocale()

app.mount('#app')
