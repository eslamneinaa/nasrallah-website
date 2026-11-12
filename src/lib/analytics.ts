import { siteConfig } from '@/config/site'

type DataLayerWindow = Window & { dataLayer?: unknown[] }

/** The standard gtag() call: queues a command until gtag.js loads and reads the queue. */
export function gtag(..._args: unknown[]) {
  const w = window as DataLayerWindow
  w.dataLayer = w.dataLayer || []
  // gtag.js expects the arguments object itself, not an array.
  // eslint-disable-next-line prefer-rest-params
  w.dataLayer.push(arguments)
}

/**
 * Sends a Google Analytics 4 event. Does nothing until a measurement ID is set
 * in siteConfig.googleAnalyticsId. Never pass names, phone numbers or emails.
 * Events sent before gtag.js has loaded wait in the queue and go out with it.
 */
export function track(name: string, params: Record<string, string | number> = {}) {
  if (!siteConfig.googleAnalyticsId || typeof window === 'undefined') return
  gtag('event', name, params)
}

/** Which contact action a link starts, or null for ordinary links. */
export function contactEvent(url: string): string | null {
  if (url.startsWith('https://wa.me/') || url.includes('api.whatsapp.com')) return 'whatsapp_click'
  if (url.startsWith('tel:')) return 'phone_click'
  if (url.startsWith('mailto:')) return 'email_click'
  if (url.includes('maps.app.goo.gl') || url.includes('google.com/maps') || url.includes('maps.google.')) return 'map_click'
  return null
}
