import { Phone } from 'lucide-react'
import Link from 'next/link'
import { siteConfig, telHref } from '@/config/site'
import { href } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Locale } from '@/lib/types'
import { Reveal } from './motion/Reveal'
import { Khatam } from './ornaments'

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary['ctaBand'] }) {
  return (
    <section className="bg-pearl-100 py-24 sm:py-28">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden bg-maroon-900 px-6 py-16 text-center text-pearl-50 sm:px-16 sm:py-20">
          <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-3 border border-gold-500/40 sm:inset-4" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-5 border border-gold-500/15 sm:inset-6" aria-hidden="true" />
          <Khatam className="mx-auto h-8 w-8 text-gold-400" strokeWidth={1} />
          <h2 className="display mt-6 text-3xl sm:text-5xl">{dict.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-pearl-200/75">{dict.subtitle}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={href(locale, 'request-quote')} className="btn-gold">
              {dict.primary}
            </Link>
            <a href={telHref(siteConfig.phones[0].tel)} className="btn-outline-light">
              <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              <span dir="ltr">{siteConfig.phones[0].display}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
