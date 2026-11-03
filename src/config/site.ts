/**
 * Company-wide settings. Everything on the site (header, footer, contact,
 * quote page, structured data) reads from here.
 */
export const siteConfig = {
  name: { en: 'Nasrallah Trading Est', ar: 'مؤسسة نصر الله التجارية' },
  foundedYear: 1906,
  brands: ['UCHIDA', 'SAKURA'],
  domain: 'nasrallahtrading.com',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://nasrallahtrading.com').replace(/\/$/, ''),
  email: 'info@nasrallahtrading.com',
  phones: [
    { display: '4458 3211', tel: '+97444583211' },
    { display: '4458 3759', tel: '+97444583759' },
  ],
  fax: { display: '4468 4767', tel: '+97444684767' },
  dialCode: '+974',
  // WhatsApp number in international format without "+" (e.g. '97455555555').
  // Leave empty to hide every WhatsApp button on the site.
  whatsapp: '97455623268',
  whatsappDisplay: '5562 3268',
  address: {
    en: 'Qatar, Doha, Salwa Road, Souq Al Ein, Showroom #6',
    ar: 'قطر - الدوحة - طريق سلوى - سوق العين - معرض رقم 6',
  },
  // Short form used where space is tight (header bar, hero).
  addressShort: {
    en: 'Souq Al Ein, Salwa Road, Doha',
    ar: 'سوق العين، طريق سلوى، الدوحة',
  },
  map: {
    lat: 25.2472954,
    lng: 51.4701855,
    link: 'https://maps.app.goo.gl/V6xqScDZdxiD7X5p6',
  },
  hours: {
    days: { en: 'Saturday – Thursday', ar: 'من السبت إلى الخميس' },
    shifts: [
      { label: { en: 'Morning', ar: 'الفترة الصباحية' }, time: { en: '8:00 AM – 12:00 PM', ar: '8:00 ص – 12:00 م' } },
      { label: { en: 'Evening', ar: 'الفترة المسائية' }, time: { en: '4:00 PM – 9:00 PM', ar: '4:00 م – 9:00 م' } },
    ],
    closed: { en: 'Friday: Closed', ar: 'الجمعة: مغلق' },
    compact: { en: 'Sat – Thu · 8 AM – 12 PM · 4 PM – 9 PM', ar: 'السبت – الخميس · 8 – 12 ص · 4 – 9 م' },
  },
} as const

export const telHref = (tel: string) => `tel:${tel}`

/** Returns a wa.me link, or null when no WhatsApp number is configured. */
export const whatsappLink = (text?: string) =>
  siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : null

export const mapEmbedSrc = (locale: string) =>
  `https://maps.google.com/maps?q=${siteConfig.map.lat},${siteConfig.map.lng}&z=17&hl=${locale}&output=embed`
