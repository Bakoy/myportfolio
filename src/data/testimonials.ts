import type { Testimonial } from '@/types'

export const testimonials: { id: Testimonial[]; en: Testimonial[] } = {
  id: [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'CEO',
      company: 'PT Teknologi Maju',
      photo: '/images/testimonials/budi.svg',
      quote:
        'Bekerja sama dengan John adalah pengalaman luar biasa. Dia sangat profesional, responsif, dan hasil kerjanya selalu melebihi ekspektasi kami.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Siti Rahma',
      role: 'Product Manager',
      company: 'Startup Inovasi Digital',
      photo: '/images/testimonials/siti.svg',
      quote:
        'Kemampuan teknis John sangat impresif. Dia mampu menerjemahkan kebutuhan bisnis yang kompleks menjadi solusi teknis yang elegan dan mudah digunakan.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Andi Wijaya',
      role: 'Founder',
      company: 'Agency Kreatif',
      photo: '/images/testimonials/andi.svg',
      quote:
        'John adalah salah satu developer terbaik yang pernah bekerja dengan kami. Website yang dia buat selalu cepat, responsif, dan menarik secara visual.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      role: 'Marketing Director',
      company: 'Perusahaan Retail',
      photo: '/images/testimonials/dewi.svg',
      quote:
        'Setelah website kami dibuat ulang oleh John, traffic dan konversi meningkat signifikan. Sangat direkomendasikan untuk kebutuhan digital Anda.',
      rating: 5,
    },
  ],
  en: [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'CEO',
      company: 'PT Teknologi Maju',
      photo: '/images/testimonials/budi.svg',
      quote:
        'Working with John was a fantastic experience. He is very professional, responsive, and his work always exceeded our expectations.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Siti Rahma',
      role: 'Product Manager',
      company: 'Startup Inovasi Digital',
      photo: '/images/testimonials/siti.svg',
      quote:
        'John\'s technical skills are truly impressive. He can translate complex business needs into elegant, easy-to-use technical solutions.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Andi Wijaya',
      role: 'Founder',
      company: 'Agency Kreatif',
      photo: '/images/testimonials/andi.svg',
      quote:
        'John is one of the best developers we have ever worked with. The websites he built are always fast, responsive, and visually appealing.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      role: 'Marketing Director',
      company: 'Perusahaan Retail',
      photo: '/images/testimonials/dewi.svg',
      quote:
        'After John redesigned our website, traffic and conversions increased significantly. Highly recommended for your digital needs.',
      rating: 5,
    },
  ],
}
