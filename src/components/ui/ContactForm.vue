<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Send, LoaderCircle, CheckCircle2 } from '@lucide/vue'
import { useAnalytics } from '@/composables/useAnalytics'

const { t } = useI18n()
const { trackLead } = useAnalytics()

const FORM_ENDPOINT = 'https://formspree.io/f/xzebvzlg'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = ref<Record<string, string>>({})
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

const validate = (): boolean => {
  const newErrors: Record<string, string> = {}

  if (!formData.value.name.trim()) newErrors.name = t('form.validate.nameRequired')
  if (!formData.value.email.trim()) {
    newErrors.email = t('form.validate.emailRequired')
  } else if (!/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(formData.value.email)) {
    newErrors.email = t('form.validate.emailInvalid')
  }
  if (!formData.value.subject.trim()) newErrors.subject = t('form.validate.subjectRequired')
  if (!formData.value.message.trim()) newErrors.message = t('form.validate.messageRequired')
  else if (formData.value.message.trim().length < 10) {
    newErrors.message = t('form.validate.messageTooShort')
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const handleSubmit = async () => {
  if (!validate()) return

  status.value = 'loading'
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(formData.value),
    })

    if (response.ok) {
      status.value = 'success'
      trackLead()
      formData.value = { name: '', email: '', subject: '', message: '' }
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  }
}

const inputClasses = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:bg-slate-800 dark:text-white ${
    hasError ? 'border-red-500 dark:border-red-500' : 'border-slate-300 dark:border-slate-700'
  }`

const labelClasses = 'mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300'
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>
    <div class="grid gap-4 sm:grid-cols-2">
      <div>
        <label for="name" :class="labelClasses">{{ t('form.name') }}</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          :placeholder="t('form.namePlaceholder')"
          :class="inputClasses(!!errors.name)"
        />
        <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
      </div>

      <div>
        <label for="email" :class="labelClasses">{{ t('form.email') }}</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          :placeholder="t('form.emailPlaceholder')"
          :class="inputClasses(!!errors.email)"
        />
        <p v-if="errors.email" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
      </div>
    </div>

    <div>
      <label for="subject" :class="labelClasses">{{ t('form.subject') }}</label>
      <input
        id="subject"
        v-model="formData.subject"
        type="text"
        :placeholder="t('form.subjectPlaceholder')"
        :class="inputClasses(!!errors.subject)"
      />
      <p v-if="errors.subject" class="mt-1 text-xs text-red-500">{{ errors.subject }}</p>
    </div>

    <div>
      <label for="message" :class="labelClasses">{{ t('form.message') }}</label>
      <textarea
        id="message"
        v-model="formData.message"
        rows="5"
        :placeholder="t('form.messagePlaceholder')"
        :class="inputClasses(!!errors.message)"
      ></textarea>
      <p v-if="errors.message" class="mt-1 text-xs text-red-500">{{ errors.message }}</p>
    </div>

    <input
      type="text"
      name="_gotcha"
      class="hidden"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
    />

    <button
      type="submit"
      :disabled="status === 'loading'"
      class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      <LoaderCircle v-if="status === 'loading'" class="h-5 w-5 animate-spin" />
      <Send v-else class="h-5 w-5" />
      {{ status === 'loading' ? t('form.sending') : t('form.send') }}
    </button>

    <div
      v-if="status === 'success'"
      class="flex items-center gap-2 rounded-xl bg-green-500/10 p-4 text-green-700 dark:text-green-400"
    >
      <CheckCircle2 class="h-5 w-5" />
      <span>{{ t('form.success') }}</span>
    </div>

    <div
      v-if="status === 'error'"
      class="rounded-xl bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400"
    >
      {{ t('form.error') }}
    </div>
  </form>
</template>
