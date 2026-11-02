import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ContactForm } from '@/components/forms/ContactForm'
import { WhatsAppIcon } from '@/components/icons'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { siteConfig, whatsappLink } from '@/config/site'
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
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&hl=${locale}&z=15&output=embed`
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.mapQuery)}`

  const cards: { icon: ReactNode; label: string; value: ReactNode; href?: string; external?: boolean; accent?: boolean }[] = [
    {
      icon: <Phone className="h-5 w-5" aria-hidden="true" />,
      label: t.phone,
      value: <span dir="ltr">{siteConfig.phone.display}</span>,
      href: `tel:${siteConfig.phone.tel}`,
    },
    {
      icon: <WhatsAppIcon className="h-5 w-5" />,
      label: t.whatsapp,
      value: t.whatsappCta,
      href: whatsappLink(),
      external: true,
      accent: true,
    },
    {
      icon: <Mail className="h-5 w-5" aria-hidden="true" />,
      label: t.email,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: <Clock className="h-5 w-5" aria-hidden="true" />,
      label: t.hours,
      value: siteConfig.hours[locale],
    },
  ]

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.contact }]} />

      <section className="py-14 sm:py-20">
        <div className="container-page">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => {
              const inner = (
                <>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
                      card.accent ? 'bg-[#25d366] text-white' : 'bg-navy-950 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950'
                    }`}
                  >
                    {card.icon}
                  </span>
                  <span className="mt-5 block text-sm font-semibold text-navy-500">{card.label}</span>
                  <span className="mt-1 block font-bold break-words text-navy-950">{card.value}</span>
                </>
              )
              const className =
                'group block h-full rounded-[1.75rem] bg-white p-6 shadow-card ring-1 ring-navy-100 transition duration-500 hover:-translate-y-1 hover:shadow-lift hover:ring-gold-300'
              return (
                <StaggerItem key={card.label}>
                  {card.href ? (
                    <a href={card.href} className={className} {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      {inner}
                    </a>
                  ) : (
                    <div className={className}>{inner}</div>
                  )}
                </StaggerItem>
              )
            })}
          </Stagger>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <Reveal className="rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-navy-100 sm:p-10 lg:col-span-7">
              <h2 className="mb-8 font-display text-2xl font-extrabold text-navy-950">{t.formTitle}</h2>
              <ContactForm locale={locale} dict={dict.form} />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col overflow-hidden rounded-[2rem] bg-navy-950 text-white lg:col-span-5">
              <div className="p-8">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-500 text-navy-950">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-navy-300">{t.address}</h2>
                    <p className="mt-1 font-bold">{siteConfig.address[locale]}</p>
                  </div>
                </div>
                <a href={directions} target="_blank" rel="noopener noreferrer" className="btn-ghost-light mt-6 py-2.5">
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  {t.directions}
                </a>
              </div>
              <iframe
                title={t.mapTitle}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-80 w-full flex-1 border-0 grayscale-[30%]"
                allowFullScreen
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
