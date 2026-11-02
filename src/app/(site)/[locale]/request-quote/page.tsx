import { Mail, Phone, Printer } from 'lucide-react'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { QuoteForm, QuoteFormWithParams } from '@/components/forms/QuoteForm'
import { WhatsAppIcon } from '@/components/icons'
import { Reveal } from '@/components/motion/Reveal'
import { Khatam } from '@/components/ornaments'
import { PageHero } from '@/components/PageHero'
import { siteConfig, telHref, whatsappLink } from '@/config/site'
import { getDictionary, href } from '@/i18n'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale).quote
  return pageMetadata({ locale, path: 'request-quote', title: dict.metaTitle, description: dict.metaDescription })
}

export default async function RequestQuotePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.quote
  const whatsapp = whatsappLink()
  const item = 'flex items-center gap-3 text-ink-900 transition hover:text-maroon-700'
  const icon = 'h-4 w-4 shrink-0 text-gold-600'

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.quote }]} />

      <section className="bg-khatam-light py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <Reveal className="border border-pearl-300 bg-pearl-50 p-6 shadow-card sm:p-10 lg:col-span-8">
            <h2 className="display mb-10 text-3xl text-maroon-900">{t.formTitle}</h2>
            {/* The fallback renders the same form (without pre-fill) during static generation. */}
            <Suspense fallback={<QuoteForm locale={locale} dict={dict.form} />}>
              <QuoteFormWithParams locale={locale} dict={dict.form} />
            </Suspense>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 lg:col-span-4">
            <div className="relative isolate overflow-hidden bg-maroon-950 p-8 text-pearl-100">
              <div className="bg-khatam pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-3 border border-gold-500/30" aria-hidden="true" />
              <p className="eyebrow text-gold-400">
                <Khatam className="h-3.5 w-3.5" />
                {t.sideTitle}
              </p>
              <ol className="mt-8 space-y-7">
                {t.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-5">
                    <span className="display w-6 shrink-0 text-3xl leading-none text-gold-400">{i + 1}</span>
                    <div>
                      <h3 className="font-medium text-pearl-50">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-pearl-200/65">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-gold-500/40 bg-pearl-50 p-8">
              <h2 className="display text-xl text-maroon-900">{t.preferDirect}</h2>
              <ul className="mt-6 space-y-4">
                {siteConfig.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={telHref(p.tel)} className={item}>
                      <Phone className={icon} strokeWidth={1.5} aria-hidden="true" />
                      <span dir="ltr">
                        {siteConfig.dialCode} {p.display}
                      </span>
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3 text-ink-700">
                  <Printer className={icon} strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    {dict.contact.fax}: <span dir="ltr">{siteConfig.fax.display}</span>
                  </span>
                </li>
                {whatsapp && (
                  <li>
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={item}>
                      <WhatsAppIcon className={icon} />
                      {dict.contact.whatsappCta}
                    </a>
                  </li>
                )}
                <li>
                  <a href={`mailto:${siteConfig.email}`} className={`${item} break-all`}>
                    <Mail className={icon} strokeWidth={1.5} aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
