import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { href, isLocale, locales } from '@/i18n/config'
import type { Locale } from './types'

export type LocaleParams = { params: Promise<{ locale: string }> }

/** Resolves and validates the `[locale]` segment. */
export async function resolveLocale(params: LocaleParams['params']): Promise<Locale> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return locale
}

type PageMeta = {
  locale: Locale
  path?: string
  title?: string
  description?: string
  image?: string
}

// Google cuts titles at about 60 characters and shows the site name above each
// result anyway, so the " | site name" suffix is only added when it still fits,
// falling back to the short name, then to the bare title.
const TITLE_LIMIT = 60

/** Canonical URL, hreflang alternates and Open Graph for a localized page. */
export function pageMetadata({ locale, path = '/', title, description, image = '/og.jpg' }: PageMeta): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [l, href(l, path)]))
  const withName = title ? `${title} | ${siteConfig.name[locale]}` : undefined
  const withShort = title ? `${title} | ${siteConfig.shortName[locale]}` : undefined
  const fits = !!withName && withName.length <= TITLE_LIMIT
  const fitsShort = !fits && !!withShort && withShort.length <= TITLE_LIMIT
  const full = fits ? withName : fitsShort ? withShort : title
  const images = image ? [{ url: image, width: 1200, height: 630, ...(title ? { alt: title } : {}) }] : undefined
  return {
    // A string goes through the layout's "%s | site name" template; `absolute` skips it.
    title: title && (fits ? title : { absolute: full ?? title }),
    description,
    alternates: {
      canonical: href(locale, path),
      languages: { ...languages, 'x-default': href('ar', path) },
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name[locale],
      locale: locale === 'ar' ? 'ar_AR' : 'en_US',
      url: href(locale, path),
      title: full,
      description,
      ...(images ? { images } : {}),
    },
    twitter: { card: image ? 'summary_large_image' : 'summary' },
  }
}
