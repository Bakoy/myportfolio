import './assets/main.css'

import { createApp } from 'vue'
import { createGtag } from 'vue-gtag'

import App from './App.vue'
import { i18n } from './i18n'
import { useDarkMode } from './composables/useDarkMode'
import { useLocale } from './composables/useLocale'
import { vReveal } from './composables/useScrollReveal'
import { gtagId } from './composables/useAnalytics'

const app = createApp(App)

app.use(i18n)
app.directive('reveal', vReveal)

// Only load gtag.js when a real VITE_GTAG_ID is configured (see .env.example).
// gtag sends the initial page_view on its own; the app has no router, so there
// is nothing else to track pageview-wise.
if (gtagId) {
  app.use(
    createGtag({
      tagId: gtagId,
      resource: { preconnect: true, defer: true },
    }),
  )
}

const { initDarkMode } = useDarkMode()
initDarkMode()

const { initLocale } = useLocale()
initLocale()

app.mount('#app')
