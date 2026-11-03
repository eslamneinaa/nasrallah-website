import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { href, locales } from '@/i18n/config'
import { getCatalog } from '@/lib/sanity/api'

export const dynamic = 'force-static'

const staticPaths = ['/', 'about', 'products', 'request-quote', 'contact', 'safe-buying-guide', 'privacy-policy']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { products } = await getCatalog()
  const paths = [...staticPaths, ...products.map((p) => `products/${p.slug}`)]
  const now = new Date()

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: siteConfig.url + href(locale, path),
      lastModified: now,
      changeFrequency: path.startsWith('products/') ? ('weekly' as const) : ('monthly' as const),
      priority: path === '/' ? 1 : path.startsWith('products') ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, siteConfig.url + href(l, path)])),
      },
    })),
  )
}
