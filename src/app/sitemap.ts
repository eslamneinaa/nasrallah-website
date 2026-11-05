import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { href, locales } from '@/i18n/config'
import { getArticles } from '@/lib/articles'
import { categoryContent } from '@/lib/category-content'
import { getCatalog } from '@/lib/sanity/api'

export const dynamic = 'force-static'

const staticPaths = ['/', 'about', 'products', 'request-quote', 'contact', 'safe-buying-guide', 'articles', 'privacy-policy']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { products, categories } = await getCatalog()
  const articles = getArticles()
  const paths = [
    ...staticPaths,
    ...categories.filter((c) => categoryContent[c.slug]).map((c) => `categories/${c.slug}`),
    ...products.map((p) => `products/${p.slug}`),
    ...articles.map((a) => `articles/${a.slug}`),
  ]
  const published = new Map(articles.map((a) => [`articles/${a.slug}`, new Date(`${a.date}T00:00:00+03:00`)]))
  const now = new Date()

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: siteConfig.url + href(locale, path),
      lastModified: published.get(path) ?? now,
      changeFrequency: path.startsWith('products/') ? ('weekly' as const) : ('monthly' as const),
      priority: path === '/' ? 1 : path.startsWith('categories') ? 0.9 : path.startsWith('products') ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, siteConfig.url + href(l, path)])),
      },
    })),
  )
}
