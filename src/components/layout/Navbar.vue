<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Sun, Moon } from '@lucide/vue'
import { socialLinks } from '@/data/socialLinks'
import { useDarkMode } from '@/composables/useDarkMode'
import SocialIcon from '@/components/ui/SocialIcon.vue'

const isOpen = ref(false)
const isScrolled = ref(false)
const { isDark, toggleDarkMode } = useDarkMode()

const navItems = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

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
    :class="isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md dark:bg-slate-950/90' : 'bg-transparent'"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <a href="#home" class="font-mono text-xl font-bold tracking-tight">
        <span class="text-primary-500">&lt;</span>John<span class="text-primary-500">/&gt;</span>
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
          Hire Me
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
