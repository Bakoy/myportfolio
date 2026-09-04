import type { Experience } from '@/types'

export const experiences: { id: Experience[]; en: Experience[] } = {
  id: [
    {
      id: 1,
      position: 'Software Engineer',
      company: 'BTS.id - PT Intersolusi Teknologi Asia',
      period: 'Agu 2026 - Saat ini · 2 bln',
      description: 'Lead in project BCA HRIS',
      technologies: ['Leadership', 'Delegates'],
    },
    {
      id: 2,
      position: 'Developer',
      company: 'BTS.id - PT Intersolusi Teknologi Asia',
      period: 'Sep 2023 - Agu 2026 · 3 thn',
      description: `Bertanggung jawab dalam pengembangan berbagai proyek:
    - BCA (HRIS): Frontend dengan VueJs 3, Arco design, TailwindCSS
    - Biofarma (Knowledge Learning Management System): Frontend dengan VueJs 3, primeVue, TailwindCSS
    - BCA (Gista Asset management): Frontend dengan VueJS 2, Vuex, TailwindCSS
    - ITM (Proxy Site app): Backend dengan NestJS, MS SQL Server
    - Maintenance POS: Frontend Vue JS 3 & TailwindCSS, Backend Nest.JS, TypeOrm, PostgreSQL`,
      technologies: [
        'NestJS',
        'Vue.js',
        'TailwindCSS',
        'TypeOrm',
        'PostgreSQL',
        'MS SQL Server',
        'Vuex',
      ],
    },
    {
      id: 3,
      position: 'Web Programmer',
      company: 'PT Nuansa Cerah Informasi',
      period: 'Nov 2021 - Des 2023 · 2 thn 2 bln',
      description: `Bertanggung jawab dalam pengembangan berbagai proyek:
    
    - Develop Hos (Hospital Online Service):
      Technology: Next.js, TailwindCSS, Knex.js, MySQL, PostgreSQL, MsSql, Nodemailer
    
    - Develop Modul CSSD (Frontend):
      Technology: Create React App (CRA), TailwindCSS`,
      technologies: [
        'Next.js',
        'TailwindCSS',
        'Knex.js',
        'MySQL',
        'PostgreSQL',
        'MsSql',
        'Nodemailer',
        'Create React App',
        'React.js',
        'Node.js',
        'Laravel',
        'REST APIs',
        'RESTful WebServices',
        'HTML',
        'JavaScript',
        'CSS',
      ],
    },
    {
      id: 4,
      position: 'Finance Staff',
      company: 'Ganesha Operation',
      period: 'Okt 2018 - Nov 2021 · 3 thn 2 bln',
      description: `Bertanggung jawab dalam pengembangan dan pengelolaan sistem informasi keuangan:
    
    - Develop Information Mail System (SiSurat):
      Technology: Codeigniter V3, MySQL, Bootstrap`,
      technologies: [
        'CodeIgniter',
        'PHP',
        'MySQL',
        'Bootstrap',
        'HTML',
        'JavaScript',
        'CSS',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Microsoft Word',
        'Internal Audit',
        'Financial Audits',
        'Accounting',
        'Data Analysis',
        'Team Leadership',
        'Leadership',
        'Pengembangan Web',
      ],
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
