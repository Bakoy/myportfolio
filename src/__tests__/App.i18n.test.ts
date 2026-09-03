import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { createApp } from 'vue'
import { i18n } from '@/i18n'
import App from '@/App.vue'
import { vReveal } from '@/composables/useScrollReveal'

function mountApp() {
  const app = createApp(App)
  app.use(i18n)
  app.directive('reveal', vReveal)
  app.mount('#app')
}

describe('App renders with i18n', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe(): void {}
        unobserve(): void {}
        disconnect(): void {}
      },
    )
    Object.defineProperty(window.navigator, 'language', {
      value: 'en-US',
      configurable: true,
    })
    document.body.innerHTML = '<div id="app"></div>'
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    document.body.innerHTML = ''
  })

  it('renders the app without crashing', async () => {
    mountApp()
    await new Promise((r) => setTimeout(r, 50))

    const html = document.querySelector('#app')!.innerHTML
    expect(html.length).toBeGreaterThan(0)
    expect(document.body.textContent).toContain('John Doe')
  })

  it('renders the email placeholder with a literal @ (regression for Invalid linked format)', async () => {
    mountApp()
    await new Promise((r) => setTimeout(r, 50))

    const input = document.querySelector('#email') as HTMLInputElement
    expect(input).toBeTruthy()
    expect(input.getAttribute('placeholder')).toBe('email@contoh.com')
    expect(input.getAttribute('placeholder')).not.toContain('\\')
  })

  it('switches locale and updates the email placeholder', async () => {
    mountApp()
    await new Promise((r) => setTimeout(r, 50))

    i18n.global.locale.value = 'en'
    await new Promise((r) => setTimeout(r, 50))

    const input = document.querySelector('#email') as HTMLInputElement
    expect(input.getAttribute('placeholder')).toBe('email@example.com')
  })
})
