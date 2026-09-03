import { createI18n } from 'vue-i18n'
import id from './locales/id.json'
import en from './locales/en.json'

export type Locale = 'id' | 'en'

export const defaultLocale: Locale = 'id'

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: {
    id,
    en,
  },
})
