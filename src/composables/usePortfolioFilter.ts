import { ref, computed } from 'vue'
import { useLocalizedData } from '@/data'
import type { Project, ProjectCategory } from '@/types'

export type FilterKey = 'all' | ProjectCategory

const activeFilter = ref<FilterKey>('all')

function usePortfolioFilter() {
  const { currentProjects } = useLocalizedData()

  const filteredProjects = computed<Project[]>(() => {
    if (activeFilter.value === 'all') return currentProjects.value
    return currentProjects.value.filter((p) => p.category === activeFilter.value)
  })

  const setFilter = (key: FilterKey) => {
    activeFilter.value = key
  }

  return {
    filteredProjects,
    setFilter,
    activeFilter,
  }
}

export { usePortfolioFilter }
