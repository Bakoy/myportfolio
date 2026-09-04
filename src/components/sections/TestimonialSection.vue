<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Hourglass } from '@lucide/vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const { t } = useI18n()
</script>

<template>
  <section id="testimonials" class="py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        :eyebrow="t('testimonials.eyebrow')"
        :title="t('testimonials.title')"
        :description="t('testimonials.description')"
      />

      <div v-reveal class="reveal">
        <div
          class="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-800"
        >
          <div class="rounded-full bg-primary-500/10 p-4 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400">
            <Hourglass class="h-10 w-10" />
          </div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white">
            {{ t('testimonials.comingSoonTitle') }}
          </h3>
          <p class="max-w-md text-slate-600 dark:text-slate-400">
            {{ t('testimonials.comingSoonDesc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
