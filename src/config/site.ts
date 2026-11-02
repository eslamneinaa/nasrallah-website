/**
 * Company-wide settings. Update the TODO values (phone, WhatsApp, address,
 * map) before going live — everything on the site reads from here.
 */
export const siteConfig = {
  name: { en: 'Nasrallah Trading', ar: 'نصر الله للتجارة' },
  domain: 'nasrallahtrading.com',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://nasrallahtrading.com').replace(/\/$/, ''),
  email: 'info@nasrallahtrading.com',
  quoteEmail: 'quotes@nasrallahtrading.com',
  // TODO: replace with the real numbers (international format, no spaces for `tel`/`wa`).
  phone: { display: '+20 100 000 0000', tel: '+201000000000' },
  whatsapp: '201000000000',
  // TODO: replace with the real office address.
  address: {
    en: 'Office 12, Business Tower, Nasr City, Cairo, Egypt',
    ar: 'مكتب 12، برج الأعمال، مدينة نصر، القاهرة، مصر',
  },
  // Free-text query for the embedded Google map (no API key required).
  mapQuery: 'Nasr City, Cairo, Egypt',
  hours: {
    en: 'Sunday – Thursday · 9:00 AM – 6:00 PM',
    ar: 'الأحد – الخميس · 9:00 ص – 6:00 م',
  },
  foundedYear: 2005,
} as const

export const whatsappLink = (text?: string) =>
  `https://wa.me/${siteConfig.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
