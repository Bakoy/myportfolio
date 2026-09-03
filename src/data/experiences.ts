import type { Experience } from '@/types'

export const experiences: { id: Experience[]; en: Experience[] } = {
  id: [
    {
      id: 1,
      position: 'Senior Web Developer',
      company: 'PT Teknologi Maju',
      period: '2023 — Sekarang',
      description:
        'Memimpin tim pengembangan frontend, merancang arsitektur aplikasi, dan memastikan kualitas kode serta pengalaman pengguna yang optimal.',
      technologies: ['Vue.js', 'TypeScript', 'NestJS', 'Tailwind CSS'],
    },
    {
      id: 2,
      position: 'Web Developer',
      company: 'Startup Inovasi Digital',
      period: '2021 — 2023',
      description:
        'Mengembangkan dan memelihara aplikasi web untuk berbagai klien, dari landing page hingga aplikasi SaaS dengan fokus pada performa dan aksesibilitas.',
      technologies: ['React.js', 'Next.js', 'Express.js', 'SQL'],
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'Agency Kreatif',
      period: '2019 — 2021',
      description:
        'Membangun website responsif untuk berbagai bisnis lokal dan mengimplementasikan desain dari Figma menjadi kode dengan kualitas tinggi.',
      technologies: ['JavaScript', 'Vue.js', 'Sass', 'Bootstrap'],
    },
    {
      id: 4,
      position: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2018 — 2019',
      description:
        'Mengerjakan proyek website untuk klien individu dan UMKM, mulai dari website profil bisnis hingga toko online sederhana.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    },
  ],
  en: [
    {
      id: 1,
      position: 'Senior Web Developer',
      company: 'PT Teknologi Maju',
      period: '2023 — Present',
      description:
        'Leading the frontend development team, designing application architecture, and ensuring code quality and optimal user experience.',
      technologies: ['Vue.js', 'TypeScript', 'NestJS', 'Tailwind CSS'],
    },
    {
      id: 2,
      position: 'Web Developer',
      company: 'Startup Inovasi Digital',
      period: '2021 — 2023',
      description:
        'Developed and maintained web applications for various clients, from landing pages to SaaS applications, focusing on performance and accessibility.',
      technologies: ['React.js', 'Next.js', 'Express.js', 'SQL'],
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'Agency Kreatif',
      period: '2019 — 2021',
      description:
        'Built responsive websites for various local businesses and implemented Figma designs into high-quality code.',
      technologies: ['JavaScript', 'Vue.js', 'Sass', 'Bootstrap'],
    },
    {
      id: 4,
      position: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2018 — 2019',
      description:
        'Worked on website projects for individual clients and SMEs, from business profile websites to simple online stores.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    },
  ],
}
