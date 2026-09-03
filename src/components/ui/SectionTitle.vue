<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <div v-reveal class="reveal mx-auto mb-12 max-w-2xl text-center">
    <span
      class="mb-3 inline-block rounded-full bg-primary-500/10 px-4 py-1 font-mono text-sm font-semibold text-primary-500 dark:bg-primary-500/20 dark:text-primary-400"
    >
      {{ eyebrow }}
    </span>
    <h2 class="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-slate-600 dark:text-slate-400">
      {{ description }}
    </p>
  </div>
</template>
