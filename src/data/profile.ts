export const profile = {
  name: 'Dany Rahmansyah',
  nickname: 'Dany',
  position: 'Web Developer',
  location: 'Bandung, Indonesia',
  email: 'danyrahmansyah01@gmail.com',
  phone: '+62 813-1242-0622',
  photo: '/images/foto.png',
  cvUrl: '/cv.pdf',
  stats: {
    years: 8,
    projects: 12,
    clients: 12,
    awards: 1,
  },
}

export const profileContent: { id: ProfileContent; en: ProfileContent } = {
  id: {
    tagline:
      'Saya membangun aplikasi web modern, cepat, dan responsif yang membantu bisnis tumbuh di era digital.',
    bio: 'Saya adalah seorang Web Developer dengan passion dalam membangun aplikasi web yang bersih, efisien, dan user-friendly. Dengan pengalaman lebih dari 5 tahun di industri teknologi, saya telah mengerjakan berbagai proyek mulai dari landing page hingga aplikasi bisnis kompleks. Saya selalu berusaha untuk terus belajar teknologi terbaru dan memberikan solusi terbaik untuk setiap klien.',
  },
  en: {
    tagline:
      'I build modern, fast, and responsive web applications that help businesses grow in the digital era.',
    bio: 'I am a Web Developer passionate about building clean, efficient, and user-friendly web applications. With more than 5 years of experience in the technology industry, I have worked on various projects from landing pages to complex business applications. I always strive to keep learning the latest technologies and provide the best solutions for every client.',
  },
}

export interface ProfileContent {
  tagline: string
  bio: string
}
