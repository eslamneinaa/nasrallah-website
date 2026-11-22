import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { href, locales } from '@/i18n/config'
import { getArticles } from '@/lib/articles'
import { categoryContent, collections } from '@/lib/category-content'
import { categoryLastmod, pageLastmod, productLastmod } from '@/lib/lastmod'
import { getCatalog } from '@/lib/sanity/api'
import { durationSeconds, showcaseVideos } from '@/lib/videos'

export const dynamic = 'force-static'

const staticPaths = ['/', 'about', 'products', 'videos', 'request-quote', 'contact', 'safe-buying-guide', 'articles', 'privacy-policy']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { products, categories } = await getCatalog()
  const articles = getArticles()
  const paths = [
    ...staticPaths,
    ...categories.filter((c) => categoryContent[c.slug]).map((c) => `categories/${c.slug}`),
    ...Object.keys(collections).map((slug) => `categories/${slug}`),
    ...products.map((p) => `products/${p.slug}`),
    ...articles.map((a) => `articles/${a.slug}`),
    ...showcaseVideos.map((v) => `videos/${v.id}`),
  ]
  const published = new Map<string, Date>([
    ...articles.map((a) => [`articles/${a.slug}`, new Date(`${a.date}T00:00:00+03:00`)] as const),
    ...showcaseVideos.map((v) => [`videos/${v.id}`, new Date(`${v.uploadDate}T00:00:00+03:00`)] as const),
  ])
  // Each video's own page carries its video sitemap entry.
  const videoOf = new Map(showcaseVideos.map((v) => [`videos/${v.id}`, v]))
  // The real last change of each page (see lib/lastmod): articles by their date,
  // products and categories by their own data, the rest by their page file.
  const lastModified = (path: string) =>
    published.get(path) ??
    (path.startsWith('products/')
      ? productLastmod(path.slice(9))
      : path.startsWith('categories/')
        ? categoryLastmod(path.slice(11))
        : pageLastmod(path))

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: siteConfig.url + href(locale, path),
      lastModified: lastModified(path),
      changeFrequency: path.startsWith('products/') ? ('weekly' as const) : ('monthly' as const),
      priority: path === '/' ? 1 : path.startsWith('categories') ? 0.9 : path.startsWith('products') ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, siteConfig.url + href(l, path)])),
      },
      ...(videoOf.has(path)
        ? (({ title, description, poster, url, duration, uploadDate }) => ({
            videos: [
              {
                title: title[locale],
                description: description[locale],
                thumbnail_loc: siteConfig.url + poster,
                content_loc: siteConfig.url + url,
                duration: durationSeconds(duration),
                publication_date: uploadDate,
              },
            ],
          }))(videoOf.get(path)!)
        : {}),
    })),
  )
}
