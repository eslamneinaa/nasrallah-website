import type { Locale } from '@/lib/types'
import ar from './dictionaries/ar'
import en, { type Dictionary } from './dictionaries/en'

const dictionaries: Record<Locale, Dictionary> = { ar, en }

export const getDictionary = (locale: Locale) => dictionaries[locale]

export type { Dictionary }
export * from './config'
