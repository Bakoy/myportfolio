<script setup lang="ts">
import { profile } from '@/data/profile'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const stats = [
  { value: profile.stats.years, suffix: '+', label: 'Tahun Pengalaman' },
  { value: profile.stats.projects, suffix: '+', label: 'Proyek Selesai' },
  { value: profile.stats.clients, suffix: '+', label: 'Klien' },
  { value: profile.stats.awards, suffix: '+', label: 'Penghargaan' },
]
</script>

<template>
  <section id="about" class="py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        eyebrow="&lt;tentang /&gt;"
        title="Tentang Saya"
        description="Kenalan lebih dekat dengan saya dan perjalanan karier saya sebagai Web Developer."
      />

      <div class="grid gap-12 md:grid-cols-2">
        <div v-reveal class="reveal">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white">
            Siapakah saya?
          </h3>
          <p class="mt-4 text-slate-600 dark:text-slate-400">
            {{ profile.bio }}
          </p>
          <div class="mt-6 space-y-3">
            <div class="flex items-center gap-3">
              <span class="font-mono text-sm font-semibold text-primary-500">Nama:</span>
              <span class="text-slate-700 dark:text-slate-300">{{ profile.name }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-mono text-sm font-semibold text-primary-500">Lokasi:</span>
              <span class="text-slate-700 dark:text-slate-300">{{ profile.location }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-mono text-sm font-semibold text-primary-500">Email:</span>
              <a :href="`mailto:${profile.email}`" class="text-slate-700 hover:text-primary-500 dark:text-slate-300">
                {{ profile.email }}
              </a>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="reveal flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all hover:border-primary-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <span class="text-4xl font-extrabold text-primary-500">
              {{ stat.value }}<span class="text-2xl">{{ stat.suffix }}</span>
            </span>
            <span class="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
