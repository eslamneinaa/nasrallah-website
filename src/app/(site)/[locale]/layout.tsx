import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../../globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MotionProvider } from '@/components/motion/MotionProvider'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { siteConfig, socialProfiles } from '@/config/site'
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
  // pageMetadata() returns `title: undefined`, so it is spread first and the
  // title (default + template for every child page) set after it.
  return {
    ...pageMetadata({ locale, description: dict.meta.description }),
    metadataBase: new URL(siteConfig.url),
    title: { default: dict.meta.title, template: `%s | ${siteConfig.name[locale]}` },
    applicationName: siteConfig.name[locale],
    formatDetection: { telephone: false },
  }
}

export default async function LocaleLayout({ children, params }: LocaleParams & { children: ReactNode }) {
  const locale = await resolveLocale(params)
  const dict = getDictionary(locale)
  const { categories } = await getCatalog()

  const business = {
    '@type': 'Store',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name.en,
    alternateName: [siteConfig.name.ar, ...siteConfig.alternateNames],
    url: siteConfig.url,
    description: dict.meta.description,
    logo: `${siteConfig.url}/brand/logo.svg`,
    image: `${siteConfig.url}/og.jpg`,
    slogan: getDictionary('en').footer.slogan,
    foundingDate: String(siteConfig.foundedYear),
    brand: siteConfig.brands.map((name) => ({ '@type': 'Brand', name })),
    knowsAbout: ['Safes', 'Cash safes', 'Jewellery safes', 'Fire-resistant safes', 'Filing cabinets', 'Luxury safes', 'Safe opening', 'Steel safes', 'Steel cabinets', 'Steel lockers', 'خزائن', 'خزائن نقود', 'خزائن مجوهرات', 'تجوري', 'خزنة حديدية', 'خزانة حديدية', 'تجوري حديد'],
    areaServed: { '@type': 'Country', name: 'Qatar' },
    sameAs: socialProfiles,
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

  // WebSite gives Google the site name shown in results; Store describes the business.
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name[locale],
        alternateName: siteConfig.name[locale === 'ar' ? 'en' : 'ar'],
        inLanguage: locale,
        publisher: { '@id': `${siteConfig.url}/#business` },
      },
      business,
    ],
  }

  return (
    <html lang={locale} dir={dirOf(locale)} className={fontVariables}>
      <body>
        <MotionProvider>
          <Header locale={locale} nav={dict.nav} />
          <main id="main">{children}</main>
          <Footer locale={locale} dict={dict} categories={categories} />
          <WhatsAppFloat label={dict.common.whatsappFloat} text={dict.common.whatsappText} />
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  )
}
