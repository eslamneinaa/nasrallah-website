import type { Locale } from '@/lib/types'
import ar from './dictionaries/ar'
import en, { type Dictionary } from './dictionaries/en'

const dictionaries: Record<Locale, Dictionary> = { ar, en }

export const getDictionary = (locale: Locale) => dictionaries[locale]

/** One message in both languages, the page's own first (WhatsApp pre-fill). */
export const inBothLanguages = (locale: Locale, text: (dict: Dictionary, lang: Locale) => string) =>
  (locale === 'ar' ? (['ar', 'en'] as const) : (['en', 'ar'] as const)).map((l) => text(dictionaries[l], l)).join('\n\n')

export type { Dictionary }
export * from './config'
