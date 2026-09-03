import { ref, computed } from 'vue'
import { i18n, type Locale } from '@/i18n'

const currentLocale = ref<Locale>(i18n.global.locale.value as Locale)

function detectBrowserLocale(): Locale {
  const lang = navigator.language?.toLowerCase() ?? ''
  return lang.startsWith('id') ? 'id' : 'en'
}

export function useLocale() {
  const initLocale = () => {
    const saved = localStorage.getItem('locale') as Locale | null
    const locale: Locale =
      saved === 'id' || saved === 'en' ? saved : detectBrowserLocale()
    setLocale(locale)
  }

  const setLocale = (locale: Locale) => {
    currentLocale.value = locale
    i18n.global.locale.value = locale
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
    applyMeta()
  }

  const toggleLocale = () => {
    setLocale(currentLocale.value === 'id' ? 'en' : 'id')
  }

  const isId = computed(() => currentLocale.value === 'id')

  const applyMeta = () => {
    const t = i18n.global.t
    document.title = t('meta.title')
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', t('meta.description'))
    }
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', t('meta.title'))
    }
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', t('meta.ogDescription'))
    }
  }

  return { currentLocale, isId, setLocale, toggleLocale, initLocale }
}
