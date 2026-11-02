import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ContactForm } from '@/components/forms/ContactForm'
import { Reveal } from '@/components/motion/Reveal'
import { Khatam } from '@/components/ornaments'
import { PageHero } from '@/components/PageHero'
import { mapEmbedSrc, siteConfig, telHref, whatsappLink } from '@/config/site'
import { getDictionary, href } from '@/i18n'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale).contact
  return pageMetadata({ locale, path: 'contact', title: dict.metaTitle, description: dict.metaDescription })
}

export default async function ContactPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.contact
  const whatsapp = whatsappLink()
  const linkClass = 'transition hover:text-gold-300'

  const rows: { label: string; value: ReactNode }[] = [
    {
      label: t.phone,
      value: (
        <span className="flex flex-wrap gap-x-5 gap-y-1">
          {siteConfig.phones.map((p) => (
            <a key={p.tel} href={telHref(p.tel)} className={linkClass}>
              <span dir="ltr">
                {siteConfig.dialCode} {p.display}
              </span>
            </a>
          ))}
        </span>
      ),
    },
    {
      label: t.fax,
      value: (
        <span dir="ltr">
          {siteConfig.dialCode} {siteConfig.fax.display}
        </span>
      ),
    },
    {
      label: t.email,
      value: (
        <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-words`}>
          {siteConfig.email}
        </a>
      ),
    },
    ...(whatsapp
      ? [
          {
            label: t.whatsapp,
            value: (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <span dir="ltr">
                  {siteConfig.dialCode} {siteConfig.whatsappDisplay}
                </span>
              </a>
            ),
          },
        ]
      : []),
    { label: t.address, value: <address className="not-italic">{siteConfig.address[locale]}</address> },
    {
      label: t.hours,
      value: (
        <span className="block">
          {siteConfig.hours.days[locale]}
          {siteConfig.hours.shifts.map((s) => (
            <span key={s.label.en} className="mt-1 block text-pearl-200/70">
              {s.label[locale]}: <span className="whitespace-nowrap tabular-nums">{s.time[locale]}</span>
            </span>
          ))}
          <span className="mt-1 block text-pearl-200/50">{siteConfig.hours.closed[locale]}</span>
        </span>
      ),
    },
  ]

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.contact }]} />

      <section className="bg-khatam-light py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <Reveal className="relative isolate overflow-hidden bg-maroon-950 p-8 text-pearl-100 sm:p-10 lg:col-span-5">
            <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-3 border border-gold-500/30" aria-hidden="true" />
            <p className="eyebrow text-gold-400">
              <Khatam className="h-3.5 w-3.5" />
              {t.directoryTitle}
            </p>
            <dl className="mt-8 divide-y divide-gold-500/20 border-y border-gold-500/20">
              {rows.map((row) => (
                <div key={row.label} className="grid gap-1.5 py-5">
                  <dt className="text-sm text-gold-400">{row.label}</dt>
                  <dd className="min-w-0 leading-relaxed">{row.value}</dd>
                </div>
              ))}
            </dl>
            <a href={siteConfig.map.link} target="_blank" rel="noopener noreferrer" className="btn-outline-light mt-8 w-full">
              {t.directions}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={0.1} className="border border-pearl-300 bg-pearl-50 p-6 shadow-card sm:p-10 lg:col-span-7">
            <h2 className="display text-3xl text-maroon-900">{t.formTitle}</h2>
            <p className="mt-3 mb-10 text-ink-500">{t.formSubtitle}</p>
            <ContactForm locale={locale} dict={dict.form} />
          </Reveal>
        </div>

        <div className="container-page mt-16">
          <Reveal className="relative p-3">
            <div className="pointer-events-none absolute inset-0 border border-gold-500/45" aria-hidden="true" />
            <iframe
              title={t.mapTitle}
              src={mapEmbedSrc(locale)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[26rem] w-full border-0 sepia-[.25]"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
