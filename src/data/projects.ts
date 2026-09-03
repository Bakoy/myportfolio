import type { Project } from '@/types'

export const projects: { id: Project[]; en: Project[] } = {
  id: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Platform e-commerce lengkap dengan keranjang belanja, pembayaran online, dan dashboard admin untuk mengelola produk dan pesanan.',
      image: '/images/projects/ecommerce.svg',
      technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'NestJS'],
      category: 'fullstack',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 2,
      title: 'Company Landing Page',
      description:
        'Landing page modern dengan animasi halus, SEO optimal, dan performa cepat untuk perusahaan teknologi.',
      image: '/images/projects/landing.svg',
      technologies: ['React.js', 'Tailwind CSS', 'Next.js'],
      category: 'frontend',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 3,
      title: 'REST API Service',
      description:
        'Backend REST API dengan autentikasi JWT, dokumentasi Swagger, dan arsitektur modular yang scalable.',
      image: '/images/projects/api.svg',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      category: 'backend',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      description:
        'Dashboard admin interaktif dengan grafik real-time, manajemen data, dan fitur export untuk laporan bisnis.',
      image: '/images/projects/dashboard.svg',
      technologies: ['Vue.js', 'Vuex', 'Chart.js', 'Tailwind CSS'],
      category: 'frontend',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 5,
      title: 'Booking System',
      description:
        'Sistem pemesanan online dengan kalender real-time, notifikasi email, dan integrasi pembayaran.',
      image: '/images/projects/booking.svg',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
      category: 'fullstack',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 6,
      title: 'Content Management API',
      description:
        'API manajemen konten dengan role-based access control, caching, dan upload file terintegrasi.',
      image: '/images/projects/cms.svg',
      technologies: ['Node.js', 'NestJS', 'Redis', 'TypeScript'],
      category: 'backend',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
  ],
  en: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A complete e-commerce platform with a shopping cart, online payments, and an admin dashboard to manage products and orders.',
      image: '/images/projects/ecommerce.svg',
      technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'NestJS'],
      category: 'fullstack',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 2,
      title: 'Company Landing Page',
      description:
        'A modern landing page with smooth animations, optimal SEO, and fast performance for a technology company.',
      image: '/images/projects/landing.svg',
      technologies: ['React.js', 'Tailwind CSS', 'Next.js'],
      category: 'frontend',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 3,
      title: 'REST API Service',
      description:
        'Backend REST API with JWT authentication, Swagger documentation, and a scalable modular architecture.',
      image: '/images/projects/api.svg',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      category: 'backend',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      description:
        'An interactive admin dashboard with real-time charts, data management, and export features for business reports.',
      image: '/images/projects/dashboard.svg',
      technologies: ['Vue.js', 'Vuex', 'Chart.js', 'Tailwind CSS'],
      category: 'frontend',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 5,
      title: 'Booking System',
      description:
        'An online booking system with a real-time calendar, email notifications, and payment integration.',
      image: '/images/projects/booking.svg',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
      category: 'fullstack',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
    {
      id: 6,
      title: 'Content Management API',
      description:
        'Content management API with role-based access control, caching, and integrated file upload.',
      image: '/images/projects/cms.svg',
      technologies: ['Node.js', 'NestJS', 'Redis', 'TypeScript'],
      category: 'backend',
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/username/project',
    },
  ],
}
