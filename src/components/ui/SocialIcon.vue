<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { MessageCircle, Mail } from '@lucide/vue'
import GithubIcon from './GithubIcon.vue'
import LinkedinIcon from './LinkedinIcon.vue'

const props = defineProps<{ name: string }>()

const attrs = useAttrs()

const iconComponent = computed(() => {
  switch (props.name) {
    case 'github':
      return GithubIcon
    case 'linkedin':
      return LinkedinIcon
    case 'message-circle':
      return MessageCircle
    case 'mail':
      return Mail
    default:
      return MessageCircle
  }
})
</script>

<template>
  <component :is="iconComponent" v-bind="attrs" />
</template>
