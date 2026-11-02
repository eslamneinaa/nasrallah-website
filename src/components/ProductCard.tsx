import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { href, pick } from '@/i18n/config'
import type { Locale, Product } from '@/lib/types'

type Props = { product: Product; locale: Locale; cta: string; priority?: boolean }

/** Shared by server pages and the client-side product explorer. */
export function ProductCard({ product, locale, cta, priority }: Props) {
  const name = pick(product.name, locale) ?? ''
  const image = product.images[0]
  const category = pick(product.category?.title, locale)

  return (
    <Link
      href={href(locale, `products/${product.slug}`)}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/70 transition duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-gold-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
        {image && (
          <Image
            src={image.url}
            alt={image.alt || name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            placeholder={image.lqip ? 'blur' : 'empty'}
            blurDataURL={image.lqip || undefined}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        {category && (
          <span className="absolute start-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy-800 backdrop-blur">
            {category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg leading-snug font-bold text-navy-950 transition group-hover:text-gold-700">{name}</h3>
        {product.shortDesc && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy-600">{pick(product.shortDesc, locale)}</p>
        )}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-navy-900">
          {cta}
          <ArrowUpRight
            className="h-4 w-4 text-gold-600 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
