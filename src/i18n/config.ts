import type { Locale, Localized } from '@/lib/types'

export const locales: Locale[] = ['ar', 'en']
export const defaultLocale: Locale = 'ar'

export const isLocale = (value: string): value is Locale => (locales as string[]).includes(value)

export const dirOf = (locale: Locale) => (locale === 'ar' ? 'rtl' : 'ltr')

export const otherLocale = (locale: Locale): Locale => (locale === 'ar' ? 'en' : 'ar')

/** Pick the value for `locale`, falling back to the other language. */
export function pick<T>(value: Localized<T> | null | undefined, locale: Locale): T | undefined {
  if (!value) return undefined
  return value[locale] ?? value[otherLocale(locale)]
}

/** Build a locale-prefixed internal path: href('en', '/products') -> '/en/products/' */
export function href(locale: Locale, path = '/') {
  const clean = path.replace(/^\/+|\/+$/g, '')
  return clean ? `/${locale}/${clean}/` : `/${locale}/`
}

/** Replace `{placeholders}` in a dictionary string. */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''))
}
