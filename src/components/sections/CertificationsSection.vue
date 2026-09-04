<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Award, ExternalLink, BadgeCheck } from '@lucide/vue'
import { useLocalizedData } from '@/data'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const { t } = useI18n()
const { currentCertifications } = useLocalizedData()
</script>

<template>
  <section id="certifications" class="py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        :eyebrow="t('certifications.eyebrow')"
        :title="t('certifications.title')"
        :description="t('certifications.description')"
      />

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="cert in currentCertifications"
          v-reveal
          :key="cert.id"
          class="reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
        >
          <div class="mb-4 flex items-center gap-3">
            <div class="rounded-xl bg-primary-500/10 p-3 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400">
              <Award class="h-6 w-6" />
            </div>
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white">{{ cert.name }}</h3>
              <p class="text-sm font-medium text-primary-600 dark:text-primary-400">{{ cert.issuer }}</p>
            </div>
          </div>

          <p class="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">{{ cert.period }}</p>

          <div v-if="cert.credentialId" class="mt-2 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <BadgeCheck class="h-4 w-4 text-primary-500" />
            <span>{{ cert.credentialId }}</span>
          </div>

          <a
            v-if="cert.credentialUrl"
            :href="cert.credentialUrl"
            target="_blank"
            rel="noopener"
            class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 transition-colors hover:text-primary-600"
          >
            {{ t('certifications.viewCredential') }}
            <ExternalLink class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
