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
      <section className="bg-khatam-light py-16 sm:py-24">
        <Reveal className="container-page max-w-3xl">
          <p className="display text-xl leading-loose text-maroon-900 sm:text-2xl">{t.intro}</p>
          <div className="mt-14 divide-y divide-gold-500/25 border-y border-gold-500/25">
            {t.sections.map((section) => (
              <section key={section.title} className="py-10">
                <h2 className="display text-2xl text-maroon-900">{section.title}</h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((p) => (
                    <p key={p} className="leading-loose text-ink-500">
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
