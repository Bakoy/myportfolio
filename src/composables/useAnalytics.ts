import { event } from 'vue-gtag'

/**
 * A real GA4 measurement ID looks like `G-XXXXXXXXXX`. The `.env.example`
 * placeholder is all X's, so treat it as "not configured" instead of sending
 * traffic to Google with an invalid ID.
 */
const RAW_GTAG_ID = import.meta.env.VITE_GTAG_ID?.trim() ?? ''
const IS_PLACEHOLDER = /^G-X+$/i.test(RAW_GTAG_ID)

export const gtagId =
  /^G-[A-Z0-9]{4,}$/i.test(RAW_GTAG_ID) && !IS_PLACEHOLDER ? RAW_GTAG_ID : ''

export const isAnalyticsEnabled = gtagId.length > 0

type EventParams = Parameters<typeof event>[1]

/**
 * Thin wrapper around vue-gtag so every component can fire events without
 * caring whether analytics is configured. All calls are no-ops when
 * `VITE_GTAG_ID` is empty/placeholder.
 */
export function useAnalytics() {
  const trackEvent = (name: string, params?: EventParams) => {
    if (!isAnalyticsEnabled) return
    event(name, params)
  }

  const trackLead = () => trackEvent('generate_lead', { method: 'form' })

  const trackCvDownload = (fileUrl?: string) =>
    trackEvent('file_download', { file_name: 'cv.pdf', link_url: fileUrl })

  const trackSocialClick = (platform: string) =>
    trackEvent('select_content', { content_type: 'social', item_id: platform })

  const trackLanguageChange = (language: string) =>
    trackEvent('language_change', { language })

  return {
    isAnalyticsEnabled,
    trackEvent,
    trackLead,
    trackCvDownload,
    trackSocialClick,
    trackLanguageChange,
  }
}
