import { sendGAEvent } from '@next/third-parties/google'
import { siteConfig } from '@/config/site'

/**
 * Sends a Google Analytics 4 event. Does nothing until a measurement ID is set
 * in siteConfig.googleAnalyticsId. Never pass names, phone numbers or emails.
 */
export function track(name: string, params: Record<string, string | number> = {}) {
  if (!siteConfig.googleAnalyticsId || typeof window === 'undefined') return
  sendGAEvent('event', name, params)
}

/** Which contact action a link starts, or null for ordinary links. */
export function contactEvent(url: string): string | null {
  if (url.startsWith('https://wa.me/') || url.includes('api.whatsapp.com')) return 'whatsapp_click'
  if (url.startsWith('tel:')) return 'phone_click'
  if (url.startsWith('mailto:')) return 'email_click'
  if (url.includes('maps.app.goo.gl') || url.includes('google.com/maps') || url.includes('maps.google.')) return 'map_click'
  return null
}
