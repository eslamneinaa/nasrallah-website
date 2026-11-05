import type { Metadata } from 'next'
import { siteConfig, websiteJsonLd } from '@/config/site'
import { getDictionary } from '@/i18n'

const ar = getDictionary('ar')

// Google lists the bare domain with this page's title and reads the site name
// from it, so both carry the full Arabic and English names.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name.ar} | ${siteConfig.name.en} — خزائن في قطر منذ ${siteConfig.foundedYear}`,
  description: ar.meta.description,
  alternates: {
    canonical: '/ar/',
    languages: { ar: '/ar/', en: '/en/', 'x-default': '/ar/' },
  },
}

/**
 * "/" → "/ar/" or "/en/". Uses the visitor's saved choice, then their
 * browser language; Arabic is the default. Works on any static host.
 */
const redirectScript = `(function(){var l;try{l=localStorage.getItem('preferred-locale')}catch(e){}
if(l!=='ar'&&l!=='en'){var n=(navigator.languages||[navigator.language||'']).join(',').toLowerCase();l=/(^|,)ar/.test(n)?'ar':(/(^|,)en/.test(n)?'en':'ar')}
location.replace('/'+l+'/'+location.search+location.hash)})()`

export default function RootPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/ar/" />
      </noscript>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...websiteJsonLd }) }}
      />
      <p style={{ fontFamily: 'system-ui, sans-serif', color: '#ece3d7', textAlign: 'center', paddingTop: '40vh' }}>
        <a href="/ar/" style={{ color: '#d2b582' }}>العربية</a> · <a href="/en/" style={{ color: '#d2b582' }}>English</a>
      </p>
    </>
  )
}
