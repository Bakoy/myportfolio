<script setup lang="ts">
import { Briefcase } from '@lucide/vue'
import { experiences } from '@/data/experiences'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section id="experience" class="bg-slate-50 py-20 dark:bg-slate-900">
    <div class="mx-auto max-w-4xl px-4 sm:px-6">
      <SectionTitle
        eyebrow="&lt;pengalaman /&gt;"
        title="Pengalaman Kerja"
        description="Perjalanan karier saya sebagai Web Developer."
      />

      <div class="relative">
        <div class="absolute left-4 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 sm:left-1/2 sm:-translate-x-px"></div>

        <div class="space-y-8">
          <div
            v-for="(exp, i) in experiences"
            :key="exp.id"
            class="reveal relative flex flex-col gap-4 pl-12 sm:flex-row sm:items-start sm:gap-8 sm:pl-0"
            :class="i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'"
          >
            <div
              class="absolute left-4 top-1 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/30 sm:left-1/2"
            >
              <Briefcase class="h-4 w-4" />
            </div>

            <div class="sm:w-1/2" :class="i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'">
              <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
              >
                <span class="font-mono text-xs font-semibold text-primary-500">{{ exp.period }}</span>
                <h3 class="mt-1 text-lg font-bold text-slate-900 dark:text-white">{{ exp.position }}</h3>
                <p class="text-sm font-medium text-primary-600 dark:text-primary-400">{{ exp.company }}</p>
                <p class="mt-3 text-sm text-slate-600 dark:text-slate-400">{{ exp.description }}</p>
                <div class="mt-4 flex flex-wrap gap-2" :class="i % 2 === 0 ? 'sm:justify-end' : ''">
                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="rounded-full bg-primary-500/10 px-2.5 py-0.5 font-mono text-xs text-primary-600 dark:bg-primary-500/20 dark:text-primary-400"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            <div class="hidden sm:block sm:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
