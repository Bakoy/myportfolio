# Dokumentasi Teknis — Personal Portfolio Website

Proyek ini adalah website portfolio pribadi **one-page** untuk menampilkan profil, keahlian, pengalaman, dan karya seorang Web Developer.

---

## Daftar Isi

1. [Ringkasan Teknologi](#1-ringkasan-teknologi)
2. [Struktur Direktori](#2-struktur-direktori)
3. [Alur Aplikasi (Application Entry)](#3-alur-aplikasi-application-entry)
4. [Struktur Komponen](#4-struktur-komponen)
5. [Composables & Custom Directive](#5-composables--custom-directive)
6. [Struktur Data (Data-Driven)](#6-struktur-data-srcdatadata-driven-content)
7. [Tailwind CSS v4 (Kunci Konfigurasi)](#7-tailwind-css-v4-kunci-konfigurasi)
8. [Gotcha: Animasi Scroll-Reveal](#8-gotcha-animasi-scroll-reveal-penting)
9. [Sisi Ikon: Brand Icons](#9-sisi-ikon-brand-icons-githublinkedin)
10. [Form Kontak (Formspree)](#10-form-kontak-formspree)
11. [API Form Kontak (Formspree)](#101-api-form-kontak-formspree)
12. [Instalasi & Setup](#11-instalasi--setup-langkah-demi-langkah)
13. [Perintah (Scripts)](#12-perintah-scripts)
14. [Konfigurasi Lainnya](#13-konfigurasi-lainnya)
15. [Deployment](#14-deployment)
16. [Placeholder untuk Deployment Nyata](#15-placeholder-yang-perlu-diganti-untuk-deployment-nyata)

---

## 1. Ringkasan Teknologi

| Komponen | Teknologi | Versi |
|----------|-----------|-------|
| Framework | Vue.js | ^3.5.40 |
| Build Tool | Vite | ^8.1.5 |
| Bahasa | TypeScript | ~6.0.0 |
| Styling | Tailwind CSS (v4) | ^4.3.3 |
| Icon | @lucide/vue | ^1.39.0 |
| Testing | Vitest (jsdom) | ^4.1.10 |
| Linting | oxlint + ESLint + Prettier | — |
| State (tidak dipakai) | Pinia | ^4.0.2 |
| Routing (tidak dipakai) | Vue Router | ^5.2.0 |

> **Catatan:** `pinia` dan `vue-router` terpasang sebagai dependensi scaffold default namun **tidak digunakan** dalam aplikasi. Aplikasi ini one-page dan tidak memerlukan keduanya.

### Persyaratan Node
`engines` mengharuskan Node `^22.18.0 || >=24.12.0`.

---

## 2. Struktur Direktori

```
my-portfolio/
├── public/                          # Aset statis (disalin mentah ke build)
│   ├── cv.pdf                       # CV (placeholder)
│   ├── favicon.svg
│   └── images/
│       ├── profile.svg              # Foto profil placeholder
│       ├── projects/                # 6 gambar proyek (.svg)
│       └── testimonials/            # 4 foto testimoni (.svg)
├── src/
│   ├── assets/main.css              # Tailwind v4 + tema + dark mode + animasi
│   ├── components/
│   │   ├── layout/                  # Navbar, Footer
│   │   ├── sections/                # 7 section halaman
│   │   └── ui/                      # Komponen UI reusable
│   ├── composables/                 # Vue composables & custom directive
│   ├── data/                        # Semua konten (data-driven)
│   ├── types/index.ts               # TypeScript interfaces
│   ├── App.vue                      # Komposisi root (montase semua section)
│   └── main.ts                      # Entry point (register directive + dark mode)
├── index.html
├── vite.config.ts
├── vitest.config.ts
├── eslint.config.ts
├── tsconfig.*.json
└── package.json
```

---

## 3. Alur Aplikasi (Application Entry)

1. **`index.html`** — Dokumen HTML root. Memuat font (Inter + JetBrains Mono via Google Fonts), meta SEO/Open Graph, dan `#app` mount point.
2. **`src/main.ts`** — Entry point:
   - Import CSS global (`assets/main.css`)
   - `createApp(App)`
   - Mendaftarkan directive global `v-reveal` (`app.directive('reveal', vReveal)`)
   - Memanggil `initDarkMode()` untuk membaca preferensi tema dari localStorage/O.S. sebelum mount
   - `app.mount('#app')`
3. **`src/App.vue`** — Menyusun layout: `<Navbar /> <main> 7 section </main> <Footer />`.

Aplikasi **tidak menggunakan router**: navigasi memakai anchor (`#home`, `#about`, dst.) dengan `scroll-behavior: smooth`.

---

## 4. Struktur Komponen

### 4.1 Layout (`src/components/layout/`)

| Komponen | Deskripsi |
|----------|-----------|
| `Navbar.vue` | Header sticky. Menu desktop + mobile (hamburger), toggle dark mode, CTA "Hire Me". Menambah efek `background blur` saat halaman di-scroll (`isScrolled`). |
| `Footer.vue` | Navigasi cepat, sosial media, copyright, tombol "Kembali ke atas". |

### 4.2 Section (`src/components/sections/`) — urutan di halaman

| Komponen | `id` anchor | Deskripsi |
|----------|-------------|-----------|
| `HeroSection.vue` | `#home` | Nama, jabatan, tech stack chips, CTA (Lihat Karya / Hubungi Saya), sosial media, foto + tombol Download CV. |
| `AboutSection.vue` | `#about` | Bio, info kontak singkat, kartu statistik (tahun, proyek, klien, penghargaan). |
| `SkillsSection.vue` | `#skills` | 3 grup (Frontend, Backend, Tools) dengan progress bar. |
| `PortfolioSection.vue` | `#portfolio` | Grid proyek + filter kategori. |
| `ExperienceSection.vue` | `#experience` | Timeline kerja vertikal (zig-zag desktop, rata kiri mobile). |
| `TestimonialSection.vue` | `#testimonials` | Kartu testimoni dengan rating bintang. |
| `ContactSection.vue` | `#contact` | Info kontak (email, WhatsApp, lokasi) + form kontak. |

### 4.3 UI reusable (`src/components/ui/`)

| Komponen | Deskripsi |
|----------|-----------|
| `SectionTitle.vue` | Judul section dengan eyebrow (label), title, dan deskripsi opsional. Diterima via props. |
| `ProjectCard.vue` | Kartu proyek: gambar, judul, deskripsi, tech chips, link Demo/Repository (hover overlay). |
| `ContactForm.vue` | Form kontak dengan validasi + integrasi Formspree + honeypot anti-spam. |
| `SocialIcon.vue` | Memetakan string ikon (dari `socialLinks.ts`) ke komponen ikon. |
| `GithubIcon.vue` / `LinkedinIcon.vue` | SVG brand icons kustom (TIDAK tersedia di @lucide/vue). |

---

## 5. Composables & Custom Directive

### `src/composables/useDarkMode.ts`
- **State:** `isDark` (module-level `ref`, dibagi antar komponen).
- **`initDarkMode()`** — membaca `localStorage['theme']`; jika kosong, fallback ke `prefers-color-scheme` O.S.
- **`toggleDarkMode()`** — toggle nilai, simpan ke localStorage (`'dark'`/`'light'`), terapkan kelas `dark` pada `<html>`.
- **`watchEffect`** — memastikan kelas `dark` selalu sinkron dengan state.

### `src/composables/useScrollReveal.ts` (custom directive `v-reveal`)
- Berbasis `IntersectionObserver`.
- `mounted`: menambahkan class `reveal`, lalu observer menambahkan `reveal-visible` saat elemen masuk viewport (threshold `0.1`, delay opsional).
- `unmounted`: membersihkan observer (disimpan di `WeakMap`).
- **Penting** (lihat gotcha di §8): elemen memerlukan **keduanya** `class="reveal"` DAN `v-reveal`.

### `src/composables/usePortfolioFilter.ts`
- State `activeFilter: 'all' | 'frontend' | 'backend' | 'fullstack'`.
- `filteredProjects` — `computed` yang menyaring `projects` sesuai filter aktif.
- `setFilter(key)` — mengubah filter aktif.

---

## 6. Struktur Data (`src/data/`) — Data-Driven Content

Semua konten dipisahkan dari komponen. Berikut lokasi data:

| File | Isi |
|------|-----|
| `profile.ts` | `name`, `position`, `tagline`, `bio`, `location`, `email`, `phone`, `photo`, `cvUrl`, `stats` (years/projects/clients/awards). |
| `projects.ts` | Array `Project[]` (6 dummy proyek berisi `category`, `technologies`, `demoUrl`, `repoUrl`). |
| `skills.ts` | Array `Skill[]` (`name`, `level` 0–100, `category`: frontend/backend/tool). |
| `experiences.ts` | Array `Experience[]` (timeline kerja, urut terbaru ke terlama). |
| `testimonials.ts` | Array `Testimonial[]` (`rating` 1–5, `photo`, `quote`). |
| `socialLinks.ts` | Array `SocialLink[]` — `icon` string memetakan ke `SocialIcon.vue`. |

> **Cara mengubah konten:** cukup edit file di `src/data/*.ts` dan ganti aset di `public/` — tidak perlu menyentuh komponen.

---

## 7. Tailwind CSS v4 (Kunci Konfigurasi)

Tidak ada `tailwind.config.js` — konfigurasi **CSS-first** sepenuhnya di `src/assets/main.css`:

- `@import 'tailwindcss'` — memuat framework.
- `@custom-variant dark (&:where(.dark, .dark *))` — mengaktifkan **dark mode berbasis class** (`.dark` di `<html>`).
- `@theme` — mendefinisikan:
  - Font: `--font-sans` (Inter), `--font-mono` (JetBrains Mono).
  - Palet kustom **orange** `primary-50` … `primary-900` → dipakai sebagai `bg-primary-500`, `text-primary-400`, dst.
- `@layer base` — stlye `body`, `::selection`, smooth scroll.
- `.reveal` / `.reveal-visible` — animasi scroll-reveal (lihat §8).

> **Menambah shade warna:** tambahkan variabel di blok `@theme` pada `main.css`, bukan lewat config file.

---

## 8. Gotcha: Animasi Scroll-Reveal (Penting)

Untuk memunculkan elemen saat di-scroll, elemen **WAJIB** memiliki **keduanya**:

1. `class="reveal"` **DAN**
2. directive `v-reveal`

Class `.reveal` menetapkan `opacity: 0`. Jika directive `v-reveal` tidak ada, `IntersectionObserver` tidak pernah mejalankan `reveal-visible`, sehingga elemen **tetap tidak terlihat secara permanen** di halaman.

`v-reveal` didaftarkan global di `src/main.ts`, jadi tersedia di semua komponen tanpa import tambahan.

---

## 9. Sisi Ikon: Brand Icons (GitHub/LinkedIn)

`@lucide/vue` **tidak menyertakan** brand icons (GitHub, LinkedIn — sudah dihapus dari Lucide). Karena itu:

- `src/components/ui/GithubIcon.vue` dan `LinkedinIcon.vue` menyediakan SVG brand icons kustom.
- `SocialIcon.vue` menerima string `name` dan memetakan ke komponen yang sesuai, meneruskan `class` untuk ukuran via `$attrs`.

Contoh mapping di `socialLinks.ts`: `github` → `GithubIcon`, `linkedin` → `LinkedinIcon`, `message-circle` → `MessageCircle`, `mail` → `Mail`.

---

## 10. Form Kontak (Formspree)

`src/components/ui/ContactForm.vue`:
- Validasi manual (nama/email/subjek/pesan wajib, format email valid, pesan ≥ 10 karakter).
- Honeypot anti-spam: input tersembunyi `_gotcha` dikirim sebagai bagian dari payload.
- `POST` JSON ke `FORM_ENDPOINT`.
- Status: `idle` → `loading` → `success` / `error`.

**⚠️ Placeholder:** `FORM_ENDPOINT` masih dummy (`https://formspree.io/f/your-form-id`). Form akan melaporkan error sampai diganti dengan Formspree ID asli.

---

## 10.1. API Form Kontak (Formspree)

### Endpoint
```
POST https://formspree.io/f/{form-id}
Content-Type: application/json
Accept: application/json
```

### Request Body (JSON)
`ContactForm.vue` mengirim payload berikut (`formData`):

| Field | Tipe | Validasi | Keterangan |
|-------|------|----------|------------|
| `name` | `string` | wajib, non-kosong | Nama pengirim |
| `email` | `string` | wajib + format email valid | Email pengirim |
| `subject` | `string` | wajib, non-kosong | Subjek pesan |
| `message` | `string` | wajib, ≥ 10 karakter | Isi pesan |
| `_gotcha` | `string` | — | Honeypot anti-spam (input tersembunyi, harus kosong) |

**Contoh request:**
```json
{
  "name": "Budi",
  "email": "budi@example.com",
  "subject": "Penawaran Proyek",
  "message": "Halo, saya ingin bekerja sama membuat website perusahaan.",
  "_gotcha": ""
}
```

### Response Handling
| Kondisi | Aksi |
|---------|------|
| `200 OK` | `status = 'success'`, form di-reset, tampilkan pesan sukses |
| selain 200 | `status = 'error'`, tampilkan pesan gagal |
| network/error | `status = 'error'` (via `catch`) |

### State Machine (`status`)
`'idle'` → `'loading'` (submit diproses) → `'success'` *atau* `'error'`.

### Cara Setup Formspree
1. Daftar di [formspree.io](https://formspree.io).
2. Buat form baru → dapatkan ID (format `mxxxxxx` atau `your-form-id`).
3. Ganti placeholder di `src/components/ui/ContactForm.vue`:
   ```ts
   const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'
   ```
   menjadi:
   ```ts
   const FORM_ENDPOINT = 'https://formspree.io/f/mxxxxxx' // ID asli Anda
   ```
4. (Opsional) Atur alamat email tujuan notifikasi di dashboard Formspree.

---

## 11. Instalasi & Setup (Langkah-demi-Langkah)

### Prasyarat
- **Node.js** `^22.18.0 || >=24.12.0` (cek: `node --version`)
- **npm** (bundle dengan Node)

### Langkah Instalasi
```bash
# 1. Masuk ke direktori proyek
cd my-portfolio

# 2. Install dependensi
npm install

# 3. Jalankan dev server (http://localhost:5173)
npm run dev
```

> Jika terjadi error dependency (mis. `ERESOLVE` pada `oxlint`), sejajarkan versi `oxlint` dan `eslint-plugin-oxlint` di `package.json` (keduanya `~1.73.0`), lalu ulangi `npm install`.

### Alur Kerja Pengembangan
```bash
npm run dev      # mulai dev server
npm run lint     # periksa kualitas kode (sebelum commit)
npm run build    # verifikasi type-check + build
npm run preview  # pratinjau hasil build production (dist/)
```

### Persiapan Deployment (Checklist)
1. **Ganti placeholder konten** — edit `src/data/*.ts` dan aset `public/` (lihat §15).
2. **Set Formspree ID asli** di `ContactForm.vue`.
3. **Buat build production**:
   ```bash
   npm run build
   ```
4. **Deploy folder `dist/`** ke hosting statis (Vercel/Netlify) atau server lokal.

---

## 12. Perintah (Scripts)

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Menjalankan dev server Vite. |
| `npm run build` | Menjalankan `type-check` (vue-tsc) **dan** `vite build` secara paralel → hasil di `dist/`. |
| `npm run build-only` | Hanya `vite build` (tanpa type-check). |
| `npm run preview` | Preview hasil build production. |
| `npm run type-check` | `vue-tsc --build` (type checking saja). |
| `npm run lint` | `oxlint` lalu `eslint`, keduanya dengan `--fix`. |
| `npm run format` | `prettier --write` pada `src/`. |
| `npm run test:unit` | Vitest (jsdom). Saat ini tidak ada file spec. |

### Urutan verifikasi yang disarankan
1. `npm run lint`
2. `npm run build` (mencakup type-check)

---

## 13. Konfigurasi Lainnya

- **Alias:** `@/*` → `src/*` (didefinisikan di `vite.config.ts` dan `tsconfig.app.json`). Gunakan import `@/` secara konsisten.
- **`tsconfig.app.json`** menyalakan `noUncheckedIndexedAccess` (akses array/objek mengembalikan `T | undefined`).
- **ESLint** `eslint.config.ts` mengizinkan hanya `Navbar` dan `Footer` sebagai nama komponen satu-kata (`vue/multi-word-component-names` ignores list). Menambahkan komponen satu kata baru akan **gagal lint**.
- **Git:** repo belum di-inisialisasi (belum ada `.git`).

---

## 14. Deployment

Deployment belum dikonfigurasi aktif. Untuk pratinjau produksi lokal:

```bash
npm run build
npm run preview
```

Rekomendasi (dari PRD): statis site → deploy ke Vercel/Netlify, atau render `dist/` dari server lokal.

---

## 15. Placeholder yang Perlu Diganti untuk Deployment Nyata

| Item | Lokasi | Keterangan |
|------|--------|------------|
| Formspree ID | `src/components/ui/ContactForm.vue` | `your-form-id` → ID Formspree asli. |
| CV | `public/cv.pdf` | File PDF placeholder. |
| Foto profil | `public/images/profile.svg` | Ganti dengan foto asli (jpg/png). |
| Gambar proyek | `public/images/projects/*.svg` | 6 placeholder SVG. |
| Foto testimoni | `public/images/testimonials/*.svg` | 4 placeholder SVG. |
| Konten dummy | `src/data/*.ts` | Ganti dengan data asli user. |
