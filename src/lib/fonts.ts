import { Amiri, Bodoni_Moda, IBM_Plex_Sans_Arabic, Jost } from 'next/font/google'

// Preloads are kept to the Arabic files (Arabic is the default locale): every
// preloaded file delays first render on slow phones. Unlisted subsets and the
// Latin faces still load on demand, just without a <link rel="preload">.

/** Arabic display face — classical Naskh for headings and the wordmark. */
export const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

/** Arabic text face. */
export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-ar',
  display: 'swap',
})

/** English display face — high-contrast Didone for headings. */
export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
  preload: false,
})

/** English text face. */
export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
  preload: false,
})

export const fontVariables = `${amiri.variable} ${plexArabic.variable} ${bodoni.variable} ${jost.variable}`
