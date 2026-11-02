import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Reveal } from './motion/Reveal'

type Crumb = { label: string; href?: string }

type Props = {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  children?: ReactNode
}

/** Dark banner used at the top of every inner page (sits under the transparent header). */
export function PageHero({ title, subtitle, crumbs, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-16 text-white sm:pt-40 sm:pb-20">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 start-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gold-500/15 blur-3xl rtl:translate-x-1/2" aria-hidden="true" />
      <div className="container-page relative">
        <Reveal>
          {crumbs && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-300">
                {crumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60 rtl:-scale-x-100" aria-hidden="true" />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition hover:text-white">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-gold-400">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="max-w-3xl font-display text-4xl leading-tight font-extrabold text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">{subtitle}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
