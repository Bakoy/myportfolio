import { ref, watchEffect } from 'vue'

const isDark = ref<boolean>(false)

export function useDarkMode() {
  const initDarkMode = () => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDark.value = true
    }
    applyTheme()
  }

  const applyTheme = () => {
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  watchEffect(() => {
    document.documentElement.classList.toggle('dark', isDark.value)
  })

  return { isDark, toggleDarkMode, initDarkMode }
}
