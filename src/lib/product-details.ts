import type { SpecRow } from './types'

/**
 * Figures from the company's sheet "Nasrallah_Product_Updates.xlsx" (14 Nov 2026),
 * one entry per product page, copied as given. Anything the sheet leaves empty is
 * left out here and never shown: no inside dimensions, fire rating, weight or
 * country unless the sheet has them. A missing price shows as "on request".
 * Two typos were corrected with the owner's approval: the glass-door cabinet's
 * width (31.4 → 91.4 cm, as its two-door sister) and the "153.CM" heights.
 */
type Country = 'KOREA' | 'THAILAND' | 'JAPAN' | 'MALAYSIA' | 'OMAN' | 'DUBAI'
type Colour = 'GREY' | 'BLACK' | 'BEIGE' | 'WHITE' | 'RED' | 'OLIVE' | 'DARK GREY'
/** Width × height × depth in cm. */
type Dims = [number, number, number]

export type ProductDetails = {
  model?: string
  /** Qatari riyals. */
  price?: number
  inside?: Dims
  outside?: Dims
  weightKg?: number
  country?: Country
  fireHours?: 1 | 2
  colours?: Colour[]
  /** Facts the sheet gives in its description column (shelves, key capacity…). */
  extra?: SpecRow[]
}

const row = (en: string, ar: string, valueEn: string, valueAr: string): SpecRow => ({ label: { en, ar }, value: { en: valueEn, ar: valueAr } })
const shelves = (n: number, adjustable = false) =>
  row('Shelves', 'الأرفف', adjustable ? `${n} adjustable` : String(n), adjustable ? `${n} أرفف قابلة للتعديل` : `${n} أرفف`)
const hanging = row('Files', 'نوع الملفات', 'Hanging files', 'ملفات معلّقة')
const keys = (n: number, ar: string) => row('Capacity', 'السعة', `${n} keys`, ar)

const safeZ = { model: 'Z/CFP-R', price: 4390, inside: [31.5, 38.6, 32.5], outside: [43.5, 50.6, 46.5], weightKg: 68, country: 'KOREA', fireHours: 1, colours: ['BLACK'] } satisfies ProductDetails
const lockerLC = { outside: [38, 183, 45.7], weightKg: 25, country: 'OMAN', colours: ['BEIGE', 'OLIVE'] } satisfies ProductDetails
const filingUB4 = { outside: [54, 153, 68], weightKg: 320, country: 'KOREA', fireHours: 1 } satisfies ProductDetails

export const productDetails: Record<string, ProductDetails> = {
  'uchida-full-height-fire-resistant-safe': { model: 'UBO-335E', price: 14600, inside: [53, 114.5, 46], outside: [70, 138.5, 63], weightKg: 335, country: 'KOREA', fireHours: 2, colours: ['GREY', 'BLACK'] },
  'uchida-white-safe-with-steel-shelves': { model: 'PB-103', price: 15600, inside: [57.4, 104.9, 46], outside: [75, 130, 69.2], weightKg: 375, country: 'THAILAND', fireHours: 2, colours: ['BEIGE', 'WHITE', 'BLACK'] },
  // Safes with drawers and drawer interiors: price on request (owner, 14 Nov 2026).
  'uchida-red-safe-with-leather-drawers': { model: 'ZC-50', inside: [31.5, 38.6, 32.5], outside: [43.5, 52.9, 46.5], weightKg: 62, country: 'KOREA', fireHours: 1, colours: ['WHITE', 'BLACK', 'RED'] },
  'uchida-designer-fire-resistant-safe': safeZ,
  'watch-winder-safe': { model: 'ZC-50', inside: [31.5, 38.6, 32.5], outside: [43.5, 52.9, 46.5], weightKg: 62, country: 'KOREA', fireHours: 1, colours: ['WHITE', 'BLACK', 'RED'] },
  'marble-interior-jewellery-safe': { model: 'PB-105', inside: [57.4, 149.9, 46], outside: [75, 175, 69.2], weightKg: 493, country: 'THAILAND', fireHours: 2, colours: ['BEIGE', 'WHITE', 'BLACK'] },
  'uchida-fire-resistant-jewellery-and-watch-safe': { model: 'PB-104', inside: [57.4, 119.7, 46], outside: [75, 144.8, 63.2], weightKg: 407, country: 'THAILAND', fireHours: 2, colours: ['BEIGE', 'WHITE', 'BLACK'] },
  // Drawer interiors: no sheet figures, price on request.
  'jewellery-display-drawers': {},
  'watch-drawers': {},
  'wood-and-brass-drawer-interior': {},
  'travel-jewellery-cases': { price: 2700, country: 'DUBAI' },
  'sakura-multi-lock-safe': { model: 'EFI703', price: 18650, inside: [57.4, 104.3, 46], outside: [75, 130, 63.2], weightKg: 375, country: 'THAILAND', fireHours: 2, colours: ['BEIGE'] },
  'sakura-fingerprint-safe': { model: 'ONS-FE', price: 4794, inside: [24, 48.5, 32], outside: [33, 60.3, 51.1], weightKg: 67, country: 'THAILAND', fireHours: 1, colours: ['BEIGE', 'BLACK'] },
  'godrej-two-door-steel-cupboard': { model: 'FHC4', price: 925, outside: [91.4, 183, 46.3], weightKg: 45, country: 'OMAN', colours: ['BEIGE', 'GREY', 'WHITE'], extra: [shelves(4, true)] },
  'godrej-two-door-steel-cupboard-with-handle': { model: 'FHC FSB HP1 HL HHR', price: 1490, outside: [75.5, 198, 50], weightKg: 60, country: 'OMAN', colours: ['BEIGE'] },
  'godrej-panelled-steel-cupboard': {},
  'godrej-single-door-steel-cupboard': { model: 'LC1ES4', price: 690, outside: [60, 183, 45.7], weightKg: 30, country: 'OMAN', colours: ['BEIGE', 'GREY', 'OLIVE'], extra: [shelves(4)] },
  'godrej-glass-door-steel-cabinet': { model: 'FHC4 FG SWD', price: 1300, outside: [91.4, 183, 46.3], weightKg: 65, country: 'OMAN', colours: ['WHITE'] },
  'godrej-wood-and-glass-storage-cabinet': {},
  'godrej-two-tier-steel-locker': { ...lockerLC, model: 'LC2', price: 610 },
  'godrej-four-tier-steel-locker': { ...lockerLC, model: 'LC4', price: 650 },
  'godrej-three-door-steel-locker': { ...lockerLC, model: 'LC3', price: 585 },
  'godrej-six-door-steel-locker': { ...lockerLC, model: 'LC6', price: 749 },
  'godrej-single-steel-locker': { ...lockerLC, model: 'LC1', price: 540 },
  'godrej-two-drawer-filing-cabinet': { model: 'VFC2', price: 590, outside: [41.5, 71, 62], weightKg: 23, country: 'OMAN', colours: ['BEIGE', 'GREY', 'WHITE'], extra: [hanging] },
  'godrej-three-drawer-filing-cabinet': { model: 'VFC3', price: 725, outside: [41.5, 101, 62], weightKg: 28, country: 'OMAN', colours: ['BEIGE', 'GREY', 'WHITE'], extra: [hanging] },
  'godrej-five-drawer-filing-cabinet': { model: 'VFC5', price: 960, outside: [41.5, 162.5, 62], weightKg: 38, country: 'OMAN', colours: ['GREY', 'BLACK'], extra: [hanging] },
  'uchida-fingerprint-safe': { model: 'ZE-SS', price: 2250, inside: [33.7, 23.7, 24.2], outside: [43.3, 35.6, 37.2], weightKg: 33, country: 'KOREA', fireHours: 1, colours: ['WHITE', 'BLACK'] },
  'uchida-black-digital-safe': { model: 'BK-265KE', price: 9950, inside: [49.3, 99.3, 41.9], outside: [64, 122, 60], weightKg: 245, country: 'KOREA', fireHours: 2, colours: ['BEIGE', 'BLACK'] },
  'uchida-compact-digital-safe': { model: 'HS-23KE', price: 1390, inside: [32.9, 14.4, 22.4], outside: [44.4, 24.9, 35.2], weightKg: 29, country: 'KOREA', fireHours: 1, colours: ['BEIGE', 'BLACK'] },
  'uchida-double-door-safe': { model: 'E-526', price: 27450, inside: [88.6, 135, 44], outside: [104, 157, 68.7], weightKg: 550, country: 'THAILAND', fireHours: 2, colours: ['BEIGE'] },
  'kurogane-wing-safe': {},
  'kurogane-compact-wing-safe': { model: 'SK-12', price: 1836, inside: [35.4, 21.4, 26.7], outside: [48.4, 37.2, 43.3], weightKg: 55, country: 'JAPAN', fireHours: 1, colours: ['BEIGE'] },
  'uchida-deposit-safe': { model: 'PB-ND15', price: 3990, inside: [32.5, 42.3, 33.5], outside: [46.5, 90.1, 51.2], weightKg: 136, country: 'THAILAND', fireHours: 2, colours: ['BEIGE'] },
  // "NO FIRE" in the sheet: no fire rating is shown.
  'uchida-night-deposit-safe': { model: 'UFLC-360E', price: 3360, outside: [45.1, 77, 42], weightKg: 47, country: 'KOREA', colours: ['BEIGE'] },
  'sakura-digital-hotel-safe': { model: 'UBHS-16', price: 1390, inside: [36.6, 29.6, 22.5], outside: [37, 30, 30], weightKg: 16, country: 'KOREA', colours: ['BEIGE'] },
  'sakura-compact-digital-hotel-safe': { model: 'UBHS-14', price: 1290, inside: [36, 25.6, 22.5], outside: [37, 26, 30], weightKg: 14, country: 'KOREA', colours: ['BEIGE'] },
  'uchida-key-hotel-safe': { model: 'HS-23K1', price: 1150, inside: [32.9, 14.4, 22.4], outside: [44.4, 24.3, 35.2], weightKg: 23, country: 'KOREA', fireHours: 1, colours: ['BLACK', 'BEIGE'] },
  'sakura-floral-safe': { model: 'UDS-65BE', price: 1350, inside: [32, 41.2, 31], outside: [43.5, 53, 44.4], weightKg: 63, country: 'KOREA', fireHours: 1, colours: ['BLACK'] },
  'uchida-fire-resistant-records-cabinet': { model: 'UMB4-4K', price: 7099, outside: [51.5, 154.9, 75.5], weightKg: 400, country: 'MALAYSIA', fireHours: 2, colours: ['BEIGE'] },
  'sakura-fire-resistant-filing-cabinet': { ...filingUB4, model: 'UB4-4DLK', price: 6800, colours: ['BLACK'] },
  'sakura-four-drawer-filing-cabinet': { ...filingUB4, model: 'UB4-4K2K', price: 6000, colours: ['WHITE', 'BLACK'] },
  'uchida-key-cabinet': { price: 525, outside: [35, 40, 7], weightKg: 3.4, country: 'KOREA', colours: ['GREY'], extra: [keys(60, '60 مفتاحًا')] },
  'uchida-tall-key-cabinet': { price: 688, outside: [35, 65, 7], weightKg: 5.2, country: 'KOREA', colours: ['GREY'], extra: [keys(100, '100 مفتاح')] },
  'bsm-auto-cash-box': { model: 'UC-305', price: 670, outside: [33, 15, 39], weightKg: 5, country: 'KOREA', colours: ['DARK GREY'] },
  'bsm-digital-auto-cash-box': { model: 'UNC-350D', price: 725, outside: [35, 15, 51], weightKg: 4.9, country: 'KOREA', colours: ['GREY'] },
  'bsm-portable-cash-box': { model: 'C-302', price: 590, outside: [36.5, 15.5, 25.2], weightKg: 3.9, country: 'KOREA', colours: ['GREY'] },
}

const countries: Record<Country, [string, string]> = {
  KOREA: ['Korea', 'كوريا'],
  THAILAND: ['Thailand', 'تايلاند'],
  JAPAN: ['Japan', 'اليابان'],
  MALAYSIA: ['Malaysia', 'ماليزيا'],
  OMAN: ['Oman', 'سلطنة عُمان'],
  DUBAI: ['Dubai, UAE', 'دبي، الإمارات'],
}
const colours: Record<Colour, [string, string]> = {
  GREY: ['Grey', 'رمادي'],
  BLACK: ['Black', 'أسود'],
  BEIGE: ['Beige', 'بيج'],
  WHITE: ['White', 'أبيض'],
  RED: ['Red', 'أحمر'],
  OLIVE: ['Olive', 'زيتي'],
  'DARK GREY': ['Dark grey', 'رمادي داكن'],
}
const n = (v: number) => String(v)
const dims = ([w, h, d]: Dims): [string, string] => [
  `W ${n(w)} × H ${n(h)} × D ${n(d)} cm`,
  `العرض ${n(w)} × الارتفاع ${n(h)} × العمق ${n(d)} سم`,
]

/** Over 50 kg, delivery depends on access at the customer's site (stairs, doors, lifts). */
export const HEAVY_KG = 50
export const isHeavy = (slug: string) => (productDetails[slug]?.weightKg ?? 0) > HEAVY_KG

/** The delivery row: free within Qatar, with the access condition for heavy products (owner's wording). */
export const deliveryText = (slug: string): [string, string] =>
  isHeavy(slug)
    ? ["Free within the State of Qatar (subject to restrictions depending on access at the customer's site)", 'مجاني داخل دولة قطر (يخضع للتقييد طبقاً للموقع الداخلي للعميل)']
    : ['Free within Qatar', 'مجاني داخل قطر']

/** Spec-table labels the sheet replaces (colour and origin rows written before it). */
const replaced = (d: ProductDetails) => [...(d.colours ? ['Finish', 'Colour', 'Colours'] : []), ...(d.country ? ['Made in'] : [])]

/** Model first (after the brand), the product's own rows, then the sheet's figures. */
export function withDetails(slug: string, specTable: SpecRow[]): { specTable: SpecRow[]; price?: number } {
  const d = productDetails[slug]
  if (!d) return { specTable }
  const drop = replaced(d)
  const own = specTable.filter((r) => !drop.includes(r.label.en ?? ''))
  const brandRows = own.filter((r) => r.label.en === 'Brand')
  const rest = own.filter((r) => r.label.en !== 'Brand')
  const rows: SpecRow[] = [
    ...brandRows,
    ...(d.model ? [row('Model', 'الموديل', d.model, d.model)] : []),
    ...rest,
    ...(d.extra ?? []),
    ...(d.fireHours ? [row('Fire rating', 'مقاومة الحريق', d.fireHours === 2 ? '2 hours' : '1 hour', d.fireHours === 2 ? 'ساعتان' : 'ساعة واحدة')] : []),
    ...(d.outside ? [row('Outside dimensions', 'الأبعاد الخارجية', ...dims(d.outside))] : []),
    ...(d.inside ? [row('Inside dimensions', 'الأبعاد الداخلية', ...dims(d.inside))] : []),
    ...(d.weightKg ? [row('Weight', 'الوزن', `${n(d.weightKg)} kg`, `${n(d.weightKg)} كجم`)] : []),
    ...(d.country ? [row('Made in', 'بلد الصنع', ...countries[d.country])] : []),
    ...(d.colours ? [row('Colours available', 'الألوان المتوفرة', d.colours.map((c) => colours[c][0]).join(', '), d.colours.map((c) => colours[c][1]).join('، '))] : []),
    row('Delivery', 'التوصيل', ...deliveryText(slug)),
  ]
  return { specTable: rows, price: d.price }
}
