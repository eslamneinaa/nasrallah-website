import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/Reveal'
import { PageHero } from '@/components/PageHero'
import { getDictionary, href } from '@/i18n'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale).privacy
  return pageMetadata({ locale, path: 'privacy-policy', title: dict.metaTitle, description: dict.metaDescription })
}

export default async function PrivacyPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const t = dict.privacy

  return (
    <>
      <PageHero title={t.title} subtitle={t.updated} crumbs={[{ label: dict.nav.home, href: href(locale) }, { label: t.title }]} />
      <section className="py-16 sm:py-24">
        <Reveal className="container-page max-w-3xl">
          <p className="text-lg leading-relaxed text-navy-700">{t.intro}</p>
          <div className="mt-12 space-y-10">
            {t.sections.map((section, i) => (
              <section key={section.title} className="border-s-2 border-gold-200 ps-6">
                <h2 className="text-xl font-extrabold text-navy-950">
                  <span className="me-2 text-gold-600">{String(i + 1).padStart(2, '0')}</span>
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((p) => (
                    <p key={p} className="leading-relaxed text-navy-600">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  )
}
