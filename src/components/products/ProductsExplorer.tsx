'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { PackageSearch, Search, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { fill, href, pick } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Category, Locale, Product } from '@/lib/types'
import { ProductCard } from '../ProductCard'

type Props = {
  locale: Locale
  products: Product[]
  categories: Category[]
  dict: Dictionary['products']
  cardCta: string
}

/** Lower-cases and strips Arabic diacritics / letter variants so search is forgiving. */
const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[̀-ͯ]/g, '')

const haystack = (p: Product) =>
  normalize(
    [
      p.name.en,
      p.name.ar,
      p.shortDesc?.en,
      p.shortDesc?.ar,
      p.category?.title.en,
      p.category?.title.ar,
      ...p.specTable.flatMap((row) => [row.value.en, row.value.ar]),
    ]
      .filter(Boolean)
      .join(' '),
  )

export function ProductsExplorer({ locale, products, categories, dict, cardCta }: Props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  // Support deep links such as /en/products/?category=building-materials
  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get('category')
    if (initial && categories.some((c) => c.slug === initial)) setCategory(initial)
  }, [categories])

  const selectCategory = (slug: string) => {
    setCategory(slug)
    const url = new URL(window.location.href)
    if (slug === 'all') url.searchParams.delete('category')
    else url.searchParams.set('category', slug)
    window.history.replaceState(null, '', url)
  }

  const index = useMemo(() => products.map((p) => ({ product: p, text: haystack(p) })), [products])

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean)
    return index
      .filter(({ product }) => category === 'all' || product.category?.slug === category)
      .filter(({ text }) => terms.every((t) => text.includes(t)))
      .map(({ product }) => product)
  }, [index, query, category])

  const tabs = [{ slug: 'all', label: dict.all }, ...categories.map((c) => ({ slug: c.slug, label: pick(c.title, locale) ?? c.slug }))]
  const filtered = query || category !== 'all'

  return (
    <div>
      <div className="sticky top-18 z-30 -mx-4 mb-10 border-b border-navy-100/70 bg-white/85 px-4 py-4 backdrop-blur-xl sm:mx-0 sm:rounded-3xl sm:border sm:px-5 sm:shadow-card">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="tablist" aria-label={dict.filterLabel} className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] lg:pb-0">
            {tabs.map((tab) => {
              const active = tab.slug === category
              return (
                <button
                  key={tab.slug}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => selectCategory(tab.slug)}
                  className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition ${
                    active ? 'text-white' : 'text-navy-700 hover:bg-navy-50'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="category-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-navy-900"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{tab.label}</span>
                </button>
              )
            })}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={dict.searchPlaceholder}
              aria-label={dict.searchLabel}
              className="field-input rounded-full py-2.5 ps-11 pe-10 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label={dict.clear}
                className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-navy-400 hover:bg-navy-50 hover:text-navy-800"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="mb-6 text-sm font-semibold text-navy-500" aria-live="polite">
        {results.length === 1 ? dict.resultsOne : fill(dict.results, { count: results.length })}
      </p>

      {results.length ? (
        <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {results.map((product, i) => (
              <motion.li
                key={product._id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0, transition: { delay: Math.min(i, 8) * 0.04 } }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
              >
                <ProductCard product={product} locale={locale} cta={cardCta} priority={i < 3} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center rounded-3xl border border-dashed border-navy-200 px-6 py-20 text-center"
        >
          <PackageSearch className="h-12 w-12 text-navy-300" aria-hidden="true" />
          <p className="mt-5 text-xl font-bold text-navy-900">{dict.empty}</p>
          <p className="mt-2 max-w-md text-navy-500">{dict.emptyHint}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {filtered && (
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  selectCategory('all')
                }}
                className="btn-ghost"
              >
                {dict.clear}
              </button>
            )}
            <Link href={`${href(locale, 'request-quote')}${query ? `?product=${encodeURIComponent(query)}` : ''}`} className="btn-gold">
              {dict.sourceCta}
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  )
}
