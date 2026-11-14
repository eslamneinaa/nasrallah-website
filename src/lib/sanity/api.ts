import { cache } from 'react'
import { sampleCategories, sampleProducts } from '@/lib/sample-data'
import type { Catalog, ClientLogo, Product } from '@/lib/types'
import { client } from './client'
import { CATEGORIES_QUERY, CLIENT_LOGOS_QUERY, PRODUCTS_QUERY } from './queries'

async function safeFetch<T>(query: string, label: string): Promise<T | null> {
  try {
    return await client.fetch<T>(query)
  } catch (error) {
    console.warn(`[sanity] Could not fetch ${label}:`, (error as Error).message)
    return null
  }
}

/**
 * During `next build` every page needs the same catalog, so the first
 * request is shared across all pages of a build worker. In `next dev` the
 * data is re-fetched per request so Studio edits show up on refresh.
 */
const memo = new Map<string, Promise<unknown>>()
function buildOnce<T>(key: string, load: () => Promise<T>): Promise<T> {
  if (process.env.NODE_ENV !== 'production') return load()
  if (!memo.has(key)) memo.set(key, load())
  return memo.get(key) as Promise<T>
}

/**
 * Products + categories. Falls back to the bundled demo catalog while the
 * dataset is empty (or unreachable) so builds always succeed.
 */
export const getCatalog = cache(() => buildOnce('catalog', loadCatalog))

async function loadCatalog(): Promise<Catalog> {
  const [products, categories] = await Promise.all([
    safeFetch<Product[]>(PRODUCTS_QUERY, 'products'),
    safeFetch<Catalog['categories']>(CATEGORIES_QUERY, 'categories'),
  ])

  if (!products?.length) {
    console.warn('[sanity] No products published yet — using the bundled showroom catalog (src/lib/sample-data.ts).')
    return { products: sampleProducts, categories: sampleCategories, isSample: true }
  }

  // Only list categories that actually contain products.
  const used = new Set(products.map((p) => p.category?.slug).filter(Boolean))
  return {
    products,
    categories: (categories ?? []).filter((c) => used.has(c.slug)),
    isSample: false,
  }
}

export async function getProduct(slug: string) {
  const { products } = await getCatalog()
  return products.find((p) => p.slug === slug) ?? null
}

export async function getFeaturedProducts(limit = 6) {
  const { products } = await getCatalog()
  const featured = products.filter((p) => p.isFeatured)
  return (featured.length ? featured : products).slice(0, limit)
}

/**
 * The products that follow this one in its category, wrapping round to the
 * start, so every product is linked from its neighbours' pages (taking the
 * first few each time would leave the rest of the category unlinked). Short
 * categories are topped up the same way from the rest of the catalogue.
 */
export async function getRelatedProducts(product: Product, limit = 4) {
  const { products } = await getCatalog()
  const after = <T,>(list: T[], index: number) => [...list.slice(index + 1), ...list.slice(0, Math.max(index, 0))]
  const sameCategory = products.filter((p) => p.category?.slug === product.category?.slug)
  const siblings = after(sameCategory, sameCategory.findIndex((p) => p.slug === product.slug))
  const rest = after(products, products.findIndex((p) => p.slug === product.slug)).filter((p) => !sameCategory.includes(p))
  return [...siblings, ...rest].slice(0, limit)
}

/** Client logos published in Sanity (none are bundled). */
export const getClientLogos = cache(() =>
  buildOnce('clients', async (): Promise<ClientLogo[]> => (await safeFetch<ClientLogo[]>(CLIENT_LOGOS_QUERY, 'client logos')) ?? []),
)
