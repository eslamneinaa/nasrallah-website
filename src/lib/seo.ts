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

/** Canonical URL, hreflang alternates and Open Graph for a localized page. */
export function pageMetadata({ locale, path = '/', title, description, image }: PageMeta): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [l, href(l, path)]))
  return {
    title,
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
      title: title ? `${title} | ${siteConfig.name[locale]}` : undefined,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: { card: image ? 'summary_large_image' : 'summary' },
  }
}
