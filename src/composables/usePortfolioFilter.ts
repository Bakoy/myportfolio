import { ref, computed } from 'vue'
import { projects } from '@/data/projects'
import type { Project, ProjectCategory } from '@/types'

export type FilterKey = 'all' | ProjectCategory

const activeFilter = ref<FilterKey>('all')

function usePortfolioFilter() {
  const filteredProjects = computed<Project[]>(() => {
    if (activeFilter.value === 'all') return projects
    return projects.filter((p) => p.category === activeFilter.value)
  })

  const setFilter = (key: FilterKey) => {
    activeFilter.value = key
  }

  return {
    projects,
    filteredProjects,
    setFilter,
    activeFilter,
  }
}

export { usePortfolioFilter }
