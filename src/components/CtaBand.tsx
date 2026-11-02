import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { href } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Locale } from '@/lib/types'
import { Reveal } from './motion/Reveal'

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary['ctaBand'] }) {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -top-24 -end-24 h-72 w-72 rounded-full bg-white/20 blur-2xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -start-24 h-72 w-72 rounded-full bg-navy-950/10 blur-2xl" aria-hidden="true" />
          <h2 className="relative font-display text-3xl font-extrabold text-navy-950 sm:text-5xl">{dict.title}</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-lg text-navy-900/80">{dict.subtitle}</p>
          <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={href(locale, 'request-quote')} className="btn-navy px-8 py-4 text-base">
              {dict.primary}
              <ArrowUpRight className="h-5 w-5 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
            <Link href={href(locale, 'contact')} className="btn border border-navy-950/20 px-8 py-4 text-base text-navy-950 hover:bg-navy-950/5">
              {dict.secondary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
