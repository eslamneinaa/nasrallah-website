import { articleSources } from './articles-data'
import type { Locale } from './types'

export type ArticleBlock = { h: string } | { p: string } | { ul: string[] }

/** Related link shown under an article: a site page, a product category or another article. */
export type ArticleLink =
  | { page: 'products' | 'safe-buying-guide' | 'contact' | 'request-quote' }
  | { category: string }
  | { article: string }

export type ArticleSource = {
  slug: string
  /** Publish date, YYYY-MM-DD in Qatar time. */
  date: string
  title: Record<Locale, string>
  description: Record<Locale, string>
  keywords: Record<Locale, string>
  body: Record<Locale, ArticleBlock[]>
  /** Product slugs shown as cards under the article. */
  products: string[]
  links: ArticleLink[]
}

/** Today's date in Qatar as YYYY-MM-DD (the site is built ahead of time, so this is the build day). */
export const qatarToday = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Qatar' })

/** Articles whose date has come, newest first. */
export function getArticles() {
  const today = qatarToday()
  return articleSources.filter((a) => a.date <= today).sort((a, b) => b.date.localeCompare(a.date))
}

export const getArticle = (slug: string) => getArticles().find((a) => a.slug === slug)

/** "4 November 2026" / «4 نوفمبر 2026», in Latin digits like the rest of the site. */
export const formatArticleDate = (date: string, locale: Locale) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString(locale === 'ar' ? 'ar-QA-u-nu-latn' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
