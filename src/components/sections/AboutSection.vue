<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalizedData } from '@/data'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const { t } = useI18n()
const { currentProfile } = useLocalizedData()

const stats = computed(() => [
  { value: currentProfile.value.stats.years, suffix: '+', label: t('about.stats.years') },
  { value: currentProfile.value.stats.projects, suffix: '+', label: t('about.stats.projects') },
  { value: currentProfile.value.stats.clients, suffix: '+', label: t('about.stats.clients') },
  { value: currentProfile.value.stats.awards, suffix: '+', label: t('about.stats.awards') },
])
</script>

<template>
  <section id="about" class="py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        :eyebrow="t('about.eyebrow')"
        :title="t('about.title')"
        :description="t('about.description')"
      />

      <div class="grid gap-12 md:grid-cols-2">
        <div v-reveal class="reveal">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white">
            {{ t('about.who') }}
          </h3>
          <p class="mt-4 text-slate-600 dark:text-slate-400">
            {{ currentProfile.bio }}
          </p>
          <div class="mt-6 space-y-3">
            <div class="flex items-center gap-3">
              <span class="font-mono text-sm font-semibold text-primary-500">{{ t('about.nameLabel') }}</span>
              <span class="text-slate-700 dark:text-slate-300">{{ currentProfile.name }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-mono text-sm font-semibold text-primary-500">{{ t('about.locationLabel') }}</span>
              <span class="text-slate-700 dark:text-slate-300">{{ currentProfile.location }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-mono text-sm font-semibold text-primary-500">{{ t('about.emailLabel') }}</span>
              <a :href="`mailto:${currentProfile.email}`" class="text-slate-700 hover:text-primary-500 dark:text-slate-300">
                {{ currentProfile.email }}
              </a>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="stat in stats"
            v-reveal
            :key="stat.label"
            class="reveal flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all hover:border-primary-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <span class="text-4xl font-extrabold text-primary-500">
              {{ stat.value }}<span class="text-2xl">{{ stat.suffix }}</span>
            </span>
            <span class="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
