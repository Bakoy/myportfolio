<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowRight, Download, MapPin, BadgeCheck } from '@lucide/vue'
import { useLocalizedData } from '@/data'
import { socialLinks } from '@/data/socialLinks'
import SocialIcon from '@/components/ui/SocialIcon.vue'

const { t } = useI18n()
const { currentProfile } = useLocalizedData()

const techStack = computed(() => ['Vue.js', 'React.js', 'Next.js', 'NestJS', 'Tailwind CSS'])
</script>

<template>
  <section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-20">
    <div
      class="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl dark:bg-primary-500/10"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/5"
    ></div>

    <div
      class="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center"
    >
      <div v-reveal class="reveal order-2 text-center md:order-1 md:text-left">
        <p class="mb-2 font-mono text-sm font-medium text-primary-500">
          &lt;{{ t('hero.greeting') }}&gt;
        </p>
        <h1
          class="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl"
        >
          {{ currentProfile.name }}
        </h1>
        <p
          class="mt-2 flex items-center justify-center gap-2 text-2xl font-bold text-primary-500 sm:text-3xl md:justify-start"
        >
          {{ currentProfile.position }}
          <BadgeCheck class="h-7 w-7" />
        </p>
        <p class="mt-4 text-slate-600 dark:text-slate-400">
          {{ currentProfile.tagline }}
        </p>

        <div class="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-start">
          <span
            v-for="(tech, i) in techStack"
            :key="tech"
            class="rounded-full border border-slate-200 px-3 py-1 font-mono text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {{ tech }}<template v-if="i < techStack.length - 1">,</template>
          </span>
        </div>

        <div
          class="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start sm:justify-center"
        >
          <a
            href="#portfolio"
            class="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-600"
          >
            {{ t('hero.viewWork') }}
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all hover:border-primary-500 hover:text-primary-500 dark:border-slate-700 dark:text-slate-300"
          >
            {{ t('hero.contactMe') }}
          </a>
        </div>

        <div class="mt-6 flex items-center justify-center gap-3 md:justify-start">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener"
            class="rounded-full border border-slate-200 p-2.5 text-slate-600 transition-all hover:border-primary-500 hover:text-primary-500 dark:border-slate-700 dark:text-slate-300"
            :aria-label="social.name"
          >
            <SocialIcon :name="social.icon" class="h-5 w-5" />
          </a>
        </div>

        <p
          class="mt-6 flex items-center justify-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 md:justify-start"
        >
          <MapPin class="h-4 w-4" />
          {{ currentProfile.location }}
        </p>
      </div>

      <div v-reveal class="reveal order-1 flex justify-center md:order-2">
        <div class="group relative">
          <div
            class="absolute inset-0 -rotate-6 rounded-3xl bg-primary-500/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-0 group-hover:bg-primary-500/40 dark:bg-primary-500/30"
          ></div>
          <a href="#about">
            <img
              :src="currentProfile.photo"
              :alt="currentProfile.name"
              class="relative h-64 w-64 cursor-pointer rounded-3xl object-cover shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary-500/25 sm:h-80 sm:w-80"
            />
          </a>
          <a
            :href="currentProfile.cvUrl"
            class="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-800 shadow-lg transition-all hover:bg-primary-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            <Download class="h-5 w-5 text-primary-500" />
            {{ t('hero.downloadCv') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
