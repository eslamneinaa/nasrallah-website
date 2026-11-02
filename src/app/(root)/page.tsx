import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name.en} | ${siteConfig.name.ar}`,
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
      <p style={{ fontFamily: 'system-ui, sans-serif', color: '#ece3d7', textAlign: 'center', paddingTop: '40vh' }}>
        <a href="/ar/" style={{ color: '#d2b582' }}>العربية</a> · <a href="/en/" style={{ color: '#d2b582' }}>English</a>
      </p>
    </>
  )
}
