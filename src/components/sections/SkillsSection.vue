<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { skills } from '@/data/skills'
import { skillIcons } from '@/data/skillIcons'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const { t } = useI18n()

const MIN_SIZE = 48
const MAX_SIZE = 96
const MIN_LEVEL = 70
const MAX_LEVEL = 95

function seededRand(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0
  }
  return () => {
    h = (Math.imul(h, 1664525) + 1013904223) | 0
    return ((h >>> 0) % 1000) / 1000
  }
}

const allSkills = computed(() =>
  skills.map((skill) => {
    const icon = skillIcons[skill.icon]
    const clamped = Math.min(Math.max(skill.level, MIN_LEVEL), MAX_LEVEL)
    const size =
      ((clamped - MIN_LEVEL) / (MAX_LEVEL - MIN_LEVEL)) * (MAX_SIZE - MIN_SIZE) + MIN_SIZE
    const rnd = seededRand(skill.name + ':float')
    return {
      ...skill,
      size: Math.round(size),
      icon,
      duration: `${(2.6 + rnd() * 2.6).toFixed(2)}s`,
      delay: `${(rnd() * 2).toFixed(2)}s`,
      floatDist: `${(10 + rnd() * 5).toFixed(1)}px`,
    }
  }),
)
</script>

<template>
  <section id="skills" class="bg-slate-50 py-20 dark:bg-slate-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        :eyebrow="t('skills.eyebrow')"
        :title="t('skills.title')"
        :description="t('skills.description')"
      />

      <div class="flex flex-wrap items-center justify-center gap-10 sm:gap-12">
        <div
          v-for="skill in allSkills"
          v-reveal
          :key="skill.name"
          class="reveal group flex flex-col items-center gap-2"
        >
          <div
            class="float-anim flex flex-col items-center gap-2"
            :style="{
              animationDuration: skill.duration,
              animationDelay: skill.delay,
              '--float-dist': skill.floatDist,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              :width="skill.size"
              :height="skill.size"
              class="fill-slate-400 transition-all duration-300 ease-out group-hover:scale-125 group-hover:fill-primary-500 group-hover:drop-shadow-lg dark:fill-slate-500"
            >
              <path :d="skill.icon?.path || ''" />
            </svg>
            <span
              class="font-mono text-sm font-medium text-slate-500 transition-colors group-hover:text-primary-500 dark:text-slate-400"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.float-anim {
  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.group:hover .float-anim {
  animation-play-state: paused;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(calc(-1 * var(--float-dist)));
  }
}
</style>
