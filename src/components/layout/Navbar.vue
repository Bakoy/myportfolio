<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Menu, X, Sun, Moon, Globe } from '@lucide/vue'
import { socialLinks } from '@/data/socialLinks'
import { useDarkMode } from '@/composables/useDarkMode'
import { useLocale } from '@/composables/useLocale'
import SocialIcon from '@/components/ui/SocialIcon.vue'
import { useLocalizedData } from '@/data'

const { t } = useI18n()
const { currentLocale, setLocale } = useLocale()

const isOpen = ref(false)
const isLangOpen = ref(false)
const isScrolled = ref(false)
const { isDark, toggleDarkMode } = useDarkMode()

const navItems = computed(() => [
  { label: t('nav.home'), href: '#home' },
  { label: t('nav.about'), href: '#about' },
  { label: t('nav.skills'), href: '#skills' },
  { label: t('nav.portfolio'), href: '#portfolio' },
  { label: t('nav.experience'), href: '#experience' },
  { label: t('nav.testimonials'), href: '#testimonials' },
  { label: t('nav.contact'), href: '#contact' },
])

const languages = [
  { code: 'id', label: 'ID' },
  { code: 'en', label: 'EN' },
]

const currentLangLabel = computed(
  () => languages.find((l) => l.code === currentLocale.value)?.label ?? 'ID',
)

const switchLanguage = (code: 'id' | 'en') => {
  setLocale(code)
  isLangOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const { currentProfile } = useLocalizedData()

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md dark:bg-slate-950/90' : 'bg-transparent'
    "
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <a href="#home" class="font-mono text-xl font-bold tracking-tight">
        <span class="text-primary-500">&lt;</span>{{ currentProfile.nickname
        }}<span class="text-primary-500">/&gt;</span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="flex items-center gap-3">
        <div class="relative">
          <button
            @click="isLangOpen = !isLangOpen"
            class="flex items-center gap-1.5 rounded-full p-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary-400"
            :aria-label="'Language'"
          >
            <Globe class="h-5 w-5" />
            <span class="hidden sm:inline">{{ currentLangLabel }}</span>
          </button>
          <div
            v-if="isLangOpen"
            class="absolute right-0 top-full mt-2 w-24 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="switchLanguage(lang.code as 'id' | 'en')"
              class="block w-full px-4 py-2 text-left text-sm font-semibold transition-colors"
              :class="
                currentLocale === lang.code
                  ? 'bg-primary-500/10 text-primary-500'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
              "
            >
              {{ lang.label }}
            </button>
          </div>
        </div>

        <button
          @click="toggleDarkMode()"
          class="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary-400"
          :aria-label="isDark ? 'Mode terang' : 'Mode gelap'"
        >
          <Sun v-if="isDark" class="h-5 w-5" />
          <Moon v-else class="h-5 w-5" />
        </button>

        <a
          href="#contact"
          class="hidden rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-600 sm:block"
        >
          {{ t('nav.hireMe') }}
        </a>

        <button
          @click="isOpen = !isOpen"
          class="rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          :aria-label="isOpen ? 'Tutup menu' : 'Buka menu'"
        >
          <X v-if="isOpen" class="h-6 w-6" />
          <Menu v-else class="h-6 w-6" />
        </button>
      </div>
    </nav>

    <div
      v-if="isOpen"
      class="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden"
    >
      <div class="flex flex-col gap-4">
        <div class="flex gap-2">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="switchLanguage(lang.code as 'id' | 'en')"
            class="rounded-full px-4 py-1.5 text-sm font-semibold transition-colors"
            :class="
              currentLocale === lang.code
                ? 'bg-primary-500 text-white'
                : 'border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300'
            "
          >
            {{ lang.label }}
          </button>
        </div>
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="isOpen = false"
          class="text-sm font-medium text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400"
        >
          {{ item.label }}
        </a>
        <div class="flex gap-4 pt-2">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener"
            class="text-slate-500 transition-colors hover:text-primary-500 dark:text-slate-400"
            :aria-label="social.name"
          >
            <SocialIcon :name="social.icon" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
