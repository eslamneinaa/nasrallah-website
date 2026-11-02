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
      className="group flex h-full flex-col border border-pearl-300/80 bg-pearl-50 p-3 transition duration-500 hover:border-gold-500/70 hover:shadow-lift"
    >
      {/* Product photography is shot on white, so it is shown whole rather than cropped. */}
      <div className="relative aspect-square overflow-hidden bg-white">
        {image && (
          <Image
            src={image.url}
            alt={image.alt || name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            placeholder={image.lqip ? 'blur' : 'empty'}
            blurDataURL={image.lqip || undefined}
            className="object-contain p-4 transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
        )}
        <div className="pointer-events-none absolute inset-3 border border-gold-500/0 transition duration-500 group-hover:border-gold-500/40" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col px-3 pt-6 pb-3">
        {category && <p className="eyebrow text-[0.65rem] text-gold-600 rtl:text-[0.85rem]">{category}</p>}
        <h3 className="display mt-2 text-[1.35rem] leading-snug text-maroon-900">{name}</h3>
        {product.shortDesc && <p className="mt-3 line-clamp-2 text-[0.95rem] leading-relaxed text-ink-500">{pick(product.shortDesc, locale)}</p>}
        <span className="mt-auto flex items-center justify-between border-t border-pearl-300/80 pt-4 text-sm text-maroon-800 ltr:text-[0.72rem] ltr:tracking-[0.2em] ltr:uppercase">
          {cta}
          <ArrowUpRight
            className="h-4 w-4 text-gold-600 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
