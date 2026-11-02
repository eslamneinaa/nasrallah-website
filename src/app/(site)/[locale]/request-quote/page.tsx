import { Mail, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { QuoteForm, QuoteFormWithParams } from '@/components/forms/QuoteForm'
import { WhatsAppIcon } from '@/components/icons'
import { Reveal } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { siteConfig, whatsappLink } from '@/config/site'
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

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: dict.nav.quote }]} />

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <Reveal className="rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-navy-100 sm:p-10 lg:col-span-8">
            <h2 className="mb-8 font-display text-2xl font-extrabold text-navy-950">{t.formTitle}</h2>
            {/* The fallback renders the same form (without pre-fill) during static generation. */}
            <Suspense fallback={<QuoteForm locale={locale} dict={dict.form} />}>
              <QuoteFormWithParams locale={locale} dict={dict.form} />
            </Suspense>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 lg:col-span-4">
            <div className="rounded-[2rem] bg-navy-950 p-8 text-white">
              <h2 className="text-xl font-bold">{t.sideTitle}</h2>
              <ol className="mt-8 space-y-7">
                {t.steps.map((step, i) => (
                  <li key={step.title} className="relative flex gap-4">
                    {i < t.steps.length - 1 && (
                      <span className="absolute start-5 top-11 h-[calc(100%-1rem)] w-px bg-white/15" aria-hidden="true" />
                    )}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 font-bold text-navy-950">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-300">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-[2rem] p-8 ring-1 ring-navy-100">
              <h2 className="font-bold text-navy-950">{t.preferDirect}</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a href={`tel:${siteConfig.phone.tel}`} className="flex items-center gap-3 font-semibold text-navy-800 hover:text-gold-700">
                    <Phone className="h-5 w-5 text-gold-500" aria-hidden="true" />
                    <span dir="ltr">{siteConfig.phone.display}</span>
                  </a>
                </li>
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold text-navy-800 hover:text-gold-700">
                    <WhatsAppIcon className="h-5 w-5 text-[#25d366]" />
                    {dict.contact.whatsappCta}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.quoteEmail}`} className="flex items-center gap-3 font-semibold break-all text-navy-800 hover:text-gold-700">
                    <Mail className="h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                    {siteConfig.quoteEmail}
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
