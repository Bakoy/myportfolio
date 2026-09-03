<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ArrowUpRight, FolderGit2 } from '@lucide/vue'
import type { Project } from '@/types'

defineProps<{ project: Project }>()

const { t } = useI18n()
</script>

<template>
  <article
    class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-primary-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
  >
    <div class="relative overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        class="absolute inset-0 flex items-center justify-center gap-4 bg-slate-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
      >
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-primary-500 hover:text-white"
        >
          {{ t('projectCard.demo') }} <ArrowUpRight class="h-4 w-4" />
        </a>
        <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-primary-500 hover:text-white"
        >
          {{ t('projectCard.repository') }} <FolderGit2 class="h-4 w-4" />
        </a>
      </div>
    </div>

    <div class="p-5">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ project.title }}</h3>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ project.description }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-full bg-primary-500/10 px-3 py-1 font-mono text-xs text-primary-600 dark:bg-primary-500/20 dark:text-primary-400"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>
