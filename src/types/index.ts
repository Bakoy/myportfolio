export type ProjectCategory = 'frontend' | 'backend' | 'fullstack'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: ProjectCategory
  demoUrl?: string
  repoUrl?: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tool'
}

export interface Experience {
  id: number
  position: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  photo: string
  quote: string
  rating: number
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
