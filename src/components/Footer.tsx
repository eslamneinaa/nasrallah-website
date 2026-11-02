import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { siteConfig, telHref, whatsappLink } from '@/config/site'
import { href, pick } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Category, Locale } from '@/lib/types'
import { Logo } from './Logo'
import { OrnamentRule } from './ornaments'

type Props = { locale: Locale; dict: Dictionary; categories: Category[] }

export function Footer({ locale, dict, categories }: Props) {
  const year = new Date().getFullYear()
  const c = dict.contact
  const whatsapp = whatsappLink()
  const explore = [
    { href: href(locale), label: dict.nav.home },
    { href: href(locale, 'about'), label: dict.nav.about },
    { href: href(locale, 'products'), label: dict.nav.products },
    { href: href(locale, 'request-quote'), label: dict.nav.quote },
    { href: href(locale, 'contact'), label: dict.nav.contact },
  ]
  const heading = 'eyebrow text-gold-400'
  const link = 'text-pearl-200/75 transition hover:text-gold-300'

  return (
    <footer className="relative overflow-hidden bg-maroon-950 text-pearl-100">
      <div className="bg-khatam pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />

      <div className="container-page relative">
        <div className="flex flex-col items-center border-b border-gold-500/20 py-16 text-center">
          <Logo locale={locale} tone="light" />
          <p className="mt-6 max-w-xl leading-relaxed text-pearl-200/70">{dict.footer.tagline}</p>
          <OrnamentRule className="mt-8" width="w-20" />
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <h2 className={heading}>{dict.footer.explore}</h2>
            <ul className="mt-6 space-y-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className={heading}>{dict.footer.categories}</h2>
            <ul className="mt-6 space-y-3">
              {categories.slice(0, 6).map((category) => (
                <li key={category._id}>
                  <Link href={`${href(locale, 'products')}?category=${category.slug}`} className={link}>
                    {pick(category.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className={heading}>{dict.footer.contact}</h2>
            <dl className="mt-6 space-y-4 text-pearl-200/75">
              <div>
                <dt className="text-xs text-gold-500/90">{c.phone}</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3">
                  {siteConfig.phones.map((p) => (
                    <a key={p.tel} href={telHref(p.tel)} dir="ltr" className={link}>
                      {p.display}
                    </a>
                  ))}
                </dd>
              </div>
              {whatsapp && (
                <div>
                  <dt className="text-xs text-gold-500/90">{c.whatsapp}</dt>
                  <dd className="mt-1">
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
                      <span dir="ltr">{siteConfig.whatsappDisplay}</span>
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-xs text-gold-500/90">{c.fax}</dt>
                <dd className="mt-1">
                  <span dir="ltr">{siteConfig.fax.display}</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-gold-500/90">{c.email}</dt>
                <dd className="mt-1">
                  <a href={`mailto:${siteConfig.email}`} className={link}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-4">
            <h2 className={heading}>{dict.footer.visit}</h2>
            <address className="mt-6 leading-relaxed text-pearl-200/75 not-italic">{siteConfig.address[locale]}</address>
            <div className="mt-5 border-s border-gold-500/40 ps-4 text-sm text-pearl-200/75">
              <p className="text-pearl-100">{siteConfig.hours.days[locale]}</p>
              {siteConfig.hours.shifts.map((s) => (
                <p key={s.label.en} className="mt-1">
                  {s.label[locale]}: <span className="whitespace-nowrap tabular-nums">{s.time[locale]}</span>
                </p>
              ))}
              <p className="mt-1 text-pearl-200/50">{siteConfig.hours.closed[locale]}</p>
            </div>
            <a
              href={siteConfig.map.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-gold-300 transition hover:text-gold-200"
            >
              {c.directions}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-gold-500/20">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-sm text-pearl-200/55 sm:flex-row">
          <p>
            © {year} {siteConfig.name[locale]}. {dict.footer.rights}
          </p>
          <Link href={href(locale, 'privacy-policy')} className="transition hover:text-gold-300">
            {dict.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
