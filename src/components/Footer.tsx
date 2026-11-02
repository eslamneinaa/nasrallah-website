import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { siteConfig, whatsappLink } from '@/config/site'
import { href, pick } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import type { Category, Locale } from '@/lib/types'
import { WhatsAppIcon } from './icons'
import { Logo } from './Logo'

type Props = { locale: Locale; dict: Dictionary; categories: Category[] }

export function Footer({ locale, dict, categories }: Props) {
  const year = new Date().getFullYear()
  const explore = [
    { href: href(locale), label: dict.nav.home },
    { href: href(locale, 'about'), label: dict.nav.about },
    { href: href(locale, 'products'), label: dict.nav.products },
    { href: href(locale, 'request-quote'), label: dict.nav.quote },
    { href: href(locale, 'contact'), label: dict.nav.contact },
  ]

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 end-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />

      <div className="container-page relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo locale={locale} tone="light" />
          <p className="mt-6 max-w-sm leading-relaxed text-navy-200">{dict.footer.tagline}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-[#25d366] hover:ring-[#25d366]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {dict.contact.whatsappCta}
          </a>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold text-gold-400">{dict.footer.explore}</h2>
          <ul className="mt-5 space-y-3">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy-200 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold text-gold-400">{dict.footer.categories}</h2>
          <ul className="mt-5 space-y-3">
            {categories.slice(0, 6).map((category) => (
              <li key={category._id}>
                <Link
                  href={`${href(locale, 'products')}?category=${category.slug}`}
                  className="text-navy-200 transition hover:text-white"
                >
                  {pick(category.title, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-4">
          <h2 className="text-sm font-bold text-gold-400">{dict.footer.contact}</h2>
          <ul className="mt-5 space-y-4 text-navy-200">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
              <span>{siteConfig.address[locale]}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
              <a href={`tel:${siteConfig.phone.tel}`} dir="ltr" className="transition hover:text-white">
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
              <span>{siteConfig.hours[locale]}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-sm text-navy-300 sm:flex-row">
          <p>
            © {year} {siteConfig.name[locale]}. {dict.footer.rights}
          </p>
          <Link href={href(locale, 'privacy-policy')} className="transition hover:text-white">
            {dict.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
