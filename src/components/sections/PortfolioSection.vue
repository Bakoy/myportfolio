<script setup lang="ts">
import { usePortfolioFilter, type FilterKey } from '@/composables/usePortfolioFilter'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const { filteredProjects, setFilter, activeFilter } = usePortfolioFilter()

const filterLabels: Record<FilterKey, string> = {
  all: 'All',
  frontend: 'Frontend',
  backend: 'Backend',
  fullstack: 'Fullstack',
}
</script>

<template>
  <section id="portfolio" class="py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        eyebrow="&lt;portofolio /&gt;"
        title="Karya & Proyek"
        description="Beberapa proyek yang pernah saya kerjakan. Klik untuk melihat detail lebih lanjut."
      />

      <div class="mb-10 flex flex-wrap justify-center gap-2">
        <button
          v-for="(label, key) in filterLabels"
          :key="key"
          @click="setFilter(key)"
          class="rounded-full px-5 py-2 text-sm font-semibold transition-all"
          :class="
            activeFilter === key
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
              : 'border border-slate-300 text-slate-600 hover:border-primary-500 hover:text-primary-500 dark:border-slate-700 dark:text-slate-300'
          "
        >
          {{ label }}
        </button>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
