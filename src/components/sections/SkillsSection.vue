<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Code2, Server, Wrench } from '@lucide/vue'
import { skills } from '@/data/skills'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const { t } = useI18n()

const skillGroups = computed(() => ({
  frontend: skills.filter((s) => s.category === 'frontend'),
  backend: skills.filter((s) => s.category === 'backend'),
  tools: skills.filter((s) => s.category === 'tool'),
}))

const groups = computed(() => [
  {
    key: 'frontend' as const,
    title: t('skills.groups.frontendTitle'),
    icon: Code2,
    description: t('skills.groups.frontendDesc'),
  },
  {
    key: 'backend' as const,
    title: t('skills.groups.backendTitle'),
    icon: Server,
    description: t('skills.groups.backendDesc'),
  },
  {
    key: 'tools' as const,
    title: t('skills.groups.toolsTitle'),
    icon: Wrench,
    description: t('skills.groups.toolsDesc'),
  },
])
</script>

<template>
  <section id="skills" class="bg-slate-50 py-20 dark:bg-slate-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        :eyebrow="t('skills.eyebrow')"
        :title="t('skills.title')"
        :description="t('skills.description')"
      />

      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="group in groups"
          v-reveal
          :key="group.key"
          class="reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
        >
          <div class="mb-6 flex items-center gap-3">
            <div class="rounded-xl bg-primary-500/10 p-3 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400">
              <component :is="group.icon" class="h-6 w-6" />
            </div>
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white">{{ group.title }}</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">{{ group.description }}</p>
            </div>
          </div>

          <div class="space-y-4">
            <div v-for="skill in skillGroups[group.key]" :key="skill.name">
              <div class="mb-1 flex items-center justify-between">
                <span class="font-mono text-sm font-medium text-slate-700 dark:text-slate-300">
                  {{ skill.name }}
                </span>
                <span class="font-mono text-xs text-primary-500">{{ skill.level }}%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-1000"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
