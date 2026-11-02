import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../../globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MotionProvider } from '@/components/motion/MotionProvider'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { siteConfig } from '@/config/site'
import { dirOf, getDictionary, locales } from '@/i18n'
import { cairo, manrope } from '@/lib/fonts'
import { getCatalog } from '@/lib/sanity/api'
import { pageMetadata, resolveLocale, type LocaleParams } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: '#061227',
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

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name.en,
    alternateName: siteConfig.name.ar,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone.tel,
    foundingDate: String(siteConfig.foundedYear),
    address: { '@type': 'PostalAddress', streetAddress: siteConfig.address.en },
  }

  return (
    <html lang={locale} dir={dirOf(locale)} className={`${cairo.variable} ${manrope.variable}`}>
      <body>
        <MotionProvider>
          <Header locale={locale} nav={dict.nav} />
          <main id="main">{children}</main>
          <Footer locale={locale} dict={dict} categories={categories} />
          <WhatsAppFloat label={dict.common.whatsappFloat} />
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  )
}
