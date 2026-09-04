import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { profile, profileContent } from './profile'
import { projects } from './projects'
import { experiences } from './experiences'
import { testimonials } from './testimonials'
import { certifications } from './certifications'
import { skills } from './skills'
import { socialLinks } from './socialLinks'

export function useLocalizedData() {
  const { currentLocale } = useLocale()

  const currentProfile = computed(() => {
    const content = profileContent[currentLocale.value]
    return { ...profile, ...content }
  })

  const currentProjects = computed(() => projects[currentLocale.value])

  const currentExperiences = computed(() => experiences[currentLocale.value])

  const currentTestimonials = computed(() => testimonials[currentLocale.value])

  const currentCertifications = computed(() => certifications[currentLocale.value])

  return {
    currentProfile,
    currentProjects,
    currentExperiences,
    currentTestimonials,
    currentCertifications,
    skills,
    socialLinks,
  }
}
