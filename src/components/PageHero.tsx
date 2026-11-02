import Link from 'next/link'
import type { ReactNode } from 'react'
import { Diamond, KhatamLattice, OrnamentRule } from './ornaments'

type Crumb = { label: string; href?: string }

type Props = {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  children?: ReactNode
}

/** Maroon banner used at the top of every inner page (sits under the transparent header). */
export function PageHero({ title, subtitle, crumbs, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-maroon-900 pt-36 pb-16 text-pearl-50 sm:pb-20 lg:pt-48">
      <KhatamLattice className="[mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgb(138_21_56/0.55),transparent_60%)]" aria-hidden="true" />
      <div className="container-page text-center">
        {/* CSS entrance (not <Reveal>) so the title paints before hydration. */}
        <div className="animate-rise">
          {crumbs && (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center justify-center gap-3 text-sm text-pearl-200/70">
                {crumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {i > 0 && <Diamond className="h-1 w-1 bg-gold-500/70" />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition hover:text-gold-300">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-gold-300">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="display mx-auto max-w-4xl text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">{title}</h1>
          <OrnamentRule className="mt-7" />
          {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pearl-200/75">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
