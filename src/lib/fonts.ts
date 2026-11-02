import { Amiri, Bodoni_Moda, IBM_Plex_Sans_Arabic, Jost } from 'next/font/google'

/** Arabic display face — classical Naskh for headings and the wordmark. */
export const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

/** Arabic text face. */
export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-plex-ar',
  display: 'swap',
})

/** English display face — high-contrast Didone for headings. */
export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
})

/** English text face. */
export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const fontVariables = `${amiri.variable} ${plexArabic.variable} ${bodoni.variable} ${jost.variable}`
