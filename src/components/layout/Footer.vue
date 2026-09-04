<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowUp } from '@lucide/vue'
import { useLocalizedData } from '@/data'
import { socialLinks } from '@/data/socialLinks'
import SocialIcon from '@/components/ui/SocialIcon.vue'

const { t } = useI18n()
const { currentProfile } = useLocalizedData()

const navItems = computed(() => [
  { label: t('nav.home'), href: '#home' },
  { label: t('nav.about'), href: '#about' },
  { label: t('nav.skills'), href: '#skills' },
  { label: t('nav.portfolio'), href: '#portfolio' },
  { label: t('nav.experience'), href: '#experience' },
  { label: t('nav.testimonials'), href: '#testimonials' },
  { label: t('nav.contact'), href: '#contact' },
])
</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950 pb-8 pt-14">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="flex flex-col items-center gap-8">
        <a href="#home" class="font-mono text-2xl font-bold tracking-tight text-white">
          <span class="text-primary-500">&lt;</span>{{ currentProfile.nickname
          }}<span class="text-primary-500">/&gt;</span>
        </a>

        <nav class="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-sm text-slate-400 transition-colors hover:text-primary-400"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="flex gap-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener"
            class="rounded-full border border-slate-700 p-2.5 text-slate-400 transition-all hover:border-primary-500 hover:text-primary-400"
            :aria-label="social.name"
          >
            <SocialIcon :name="social.icon" class="h-5 w-5" />
          </a>
        </div>

        <div
          class="flex w-full flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row"
        >
          <p class="text-sm text-slate-500">
            © {{ new Date().getFullYear() }} {{ currentProfile.name }}. {{ t('footer.rights') }}.
          </p>
          <a
            href="#home"
            class="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-primary-400"
          >
            {{ t('footer.backToTop') }} <ArrowUp class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
