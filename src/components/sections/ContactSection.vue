<script setup lang="ts">
import { Mail, Phone, MapPin } from '@lucide/vue'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/socialLinks'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ContactForm from '@/components/ui/ContactForm.vue'
import SocialIcon from '@/components/ui/SocialIcon.vue'
</script>

<template>
  <section id="contact" class="bg-slate-50 py-20 dark:bg-slate-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        eyebrow="&lt;kontak /&gt;"
        title="Mari Berkolaborasi"
        description="Punya proyek atau pertanyaan? Jangan ragu untuk menghubungi saya."
      />

      <div class="grid gap-10 md:grid-cols-5">
        <div v-reveal class="reveal space-y-6 md:col-span-2">
          <div class="flex items-start gap-4">
            <div class="rounded-xl bg-primary-500/10 p-3 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400">
              <Mail class="h-5 w-5" />
            </div>
            <div>
              <p class="font-semibold text-slate-900 dark:text-white">Email</p>
              <a :href="`mailto:${profile.email}`" class="text-sm text-slate-600 hover:text-primary-500 dark:text-slate-400">
                {{ profile.email }}
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="rounded-xl bg-primary-500/10 p-3 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400">
              <Phone class="h-5 w-5" />
            </div>
            <div>
              <p class="font-semibold text-slate-900 dark:text-white">WhatsApp</p>
              <a :href="`tel:${profile.phone}`" class="text-sm text-slate-600 hover:text-primary-500 dark:text-slate-400">
                {{ profile.phone }}
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="rounded-xl bg-primary-500/10 p-3 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400">
              <MapPin class="h-5 w-5" />
            </div>
            <div>
              <p class="font-semibold text-slate-900 dark:text-white">Lokasi</p>
              <p class="text-sm text-slate-600 dark:text-slate-400">{{ profile.location }}</p>
            </div>
          </div>

          <div class="border-t border-slate-200 pt-6 dark:border-slate-700">
            <p class="mb-4 font-semibold text-slate-900 dark:text-white">Ikuti Saya</p>
            <div class="flex gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener"
                class="rounded-full border border-slate-300 p-2.5 text-slate-600 transition-all hover:border-primary-500 hover:text-primary-500 dark:border-slate-700 dark:text-slate-300"
                :aria-label="social.name"
              >
                <SocialIcon :name="social.icon" class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div v-reveal class="reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>
