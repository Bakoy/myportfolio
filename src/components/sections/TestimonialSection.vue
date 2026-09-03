<script setup lang="ts">
import { Quote, Star } from '@lucide/vue'
import { testimonials } from '@/data/testimonials'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section id="testimonials" class="py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        eyebrow="&lt;testimoni /&gt;"
        title="Apa Kata Mereka"
        description="Ulasan dan kesan dari klien serta rekan kerja yang pernah berkolaborasi dengan saya."
      />

      <div class="grid gap-6 md:grid-cols-2">
        <figure
          v-for="testimonial in testimonials"
          v-reveal
          :key="testimonial.id"
          class="reveal relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
        >
          <Quote class="absolute right-6 top-6 h-8 w-8 text-primary-500/20" />

          <div class="mb-4 flex gap-1">
            <Star
              v-for="n in 5"
              :key="n"
              class="h-5 w-5"
              :class="n <= testimonial.rating ? 'fill-primary-500 text-primary-500' : 'text-slate-300 dark:text-slate-600'"
            />
          </div>

          <blockquote class="text-slate-600 dark:text-slate-400">
            "{{ testimonial.quote }}"
          </blockquote>

          <figcaption class="mt-6 flex items-center gap-4">
            <img
              :src="testimonial.photo"
              :alt="testimonial.name"
              class="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p class="font-bold text-slate-900 dark:text-white">{{ testimonial.name }}</p>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ testimonial.role }} — {{ testimonial.company }}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
