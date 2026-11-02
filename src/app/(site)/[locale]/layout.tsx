import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../../globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MotionProvider } from '@/components/motion/MotionProvider'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { siteConfig } from '@/config/site'
import { dirOf, getDictionary, locales } from '@/i18n'
import { fontVariables } from '@/lib/fonts'
import { getCatalog } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: '#1f060e',
  width: 'device-width',
  initialScale: 1,
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: dict.meta.title, template: `%s | ${siteConfig.name[locale]}` },
    description: dict.meta.description,
    applicationName: siteConfig.name[locale],
    formatDetection: { telephone: false },
    ...pageMetadata({ locale, description: dict.meta.description }),
  }
}

export default async function LocaleLayout({ children, params }: LocaleParams & { children: ReactNode }) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const { categories } = await getCatalog()

  const business = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: siteConfig.name.en,
    alternateName: siteConfig.name.ar,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phones.map((p) => p.tel),
    faxNumber: siteConfig.fax.tel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Salwa Road, Souq Al Ein, Showroom #6',
      addressLocality: 'Doha',
      addressCountry: 'QA',
    },
    geo: { '@type': 'GeoCoordinates', latitude: siteConfig.map.lat, longitude: siteConfig.map.lng },
    hasMap: siteConfig.map.link,
    openingHoursSpecification: [
      { opens: '08:00', closes: '12:00' },
      { opens: '16:00', closes: '21:00' },
    ].map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      ...slot,
    })),
  }

  return (
    <html lang={locale} dir={dirOf(locale)} className={fontVariables}>
      <body>
        <MotionProvider>
          <Header locale={locale} nav={dict.nav} />
          <main id="main">{children}</main>
          <Footer locale={locale} dict={dict} categories={categories} />
          <WhatsAppFloat label={dict.common.whatsappFloat} />
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      </body>
    </html>
  )
}
