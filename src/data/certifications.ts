import type { Certification } from '@/types'

export const certifications: { id: Certification[]; en: Certification[] } = {
  id: [
    {
      id: 1,
      name: 'Nama Sertifikasi',
      issuer: 'Penerbit',
      period: '2024',
      credentialId: 'CR-0000',
      credentialUrl: 'https://example.com/credential',
    },
  ],
  en: [
    {
      id: 1,
      name: 'Certification Name',
      issuer: 'Issuer',
      period: '2024',
      credentialId: 'CR-0000',
      credentialUrl: 'https://example.com/credential',
    },
  ],
}
