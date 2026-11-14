/**
 * Search wording for each product, built from its own data so every phrase is
 * true: the names people type (Arabic-letter brand names, تجوري, دولاب حديد…),
 * a plain-language summary of the sheet's figures, the meta description with
 * the price, and extra Product structured data.
 */
import { isHeavy, productDetails } from './product-details'
import { parseQuery, productIndex, search } from './search'
import type { Locale, Product } from './types'

const brandsAr: Record<string, string> = { UCHIDA: 'أوشيدا', SAKURA: 'ساكورا', GODREJ: 'جودريج', KUROGANE: 'كوروجاني' }

/** What people call each kind of product, most common first. */
const kinds: Record<string, Record<Locale, string[]>> = {
  'fire-resistant-safes': { ar: ['تجوري', 'خزنة ضد الحريق', 'خزنة حديد', 'خزنة نقود'], en: ['fireproof safe', 'fire safe', 'steel safe', 'cash safe'] },
  'deposit-safes': { ar: ['خزنة إيداع', 'خزنة كاشير', 'تجوري محلات'], en: ['deposit safe', 'cashier safe', 'drop safe'] },
  'hotel-safes': { ar: ['خزنة فندقية', 'خزنة فندق', 'خزنة صغيرة'], en: ['hotel safe', 'small safe', 'in-room safe'] },
  'luxury-safes': { ar: ['خزنة فاخرة', 'تجوري فخم', 'خزنة ديكور'], en: ['luxury safe', 'designer safe', 'decorative safe'] },
  'jewellery-watch-interiors': { ar: ['خزنة مجوهرات', 'خزنة ذهب', 'خزنة ساعات'], en: ['jewellery safe', 'jewelry safe', 'watch safe'] },
  'filing-cabinets': { ar: ['خزانة ملفات', 'دولاب ملفات', 'خزانة أرشيف'], en: ['filing cabinet', 'file cabinet', 'archive cabinet'] },
  'key-cabinets': { ar: ['خزانة مفاتيح', 'صندوق مفاتيح'], en: ['key cabinet', 'key box'] },
  'cash-boxes': { ar: ['صندوق نقود', 'صندوق كاش', 'درج كاشير'], en: ['cash box', 'cash drawer', 'money box'] },
  'steel-cupboards': { ar: ['دولاب حديد', 'خزانة حديدية', 'كبت حديد'], en: ['steel cupboard', 'metal cabinet', 'office cupboard'] },
  'steel-lockers': { ar: ['لوكر حديد', 'لوكرات موظفين', 'لوكر حديدي'], en: ['steel locker', 'staff locker', 'metal locker'] },
}

const brandOf = (p: Product) => p.specTable.find((r) => r.label.en === 'Brand')?.value.en
const specEn = (p: Product, label: string) => p.specTable.find((r) => r.label.en === label)?.value.en ?? ''

/** Candidate phrases, in order of value; the page keeps the ones that find this product. */
function candidates(p: Product, locale: Locale): string[] {
  const d = productDetails[p.slug] ?? {}
  const brand = brandOf(p)
  const k = kinds[p.category?.slug ?? '']?.[locale] ?? []
  const lock = specEn(p, 'Lock').toLowerCase()
  const ar = locale === 'ar'
  const brandWord = brand ? (ar ? brandsAr[brand] ?? brand : brand) : ''
  const out = [
    brandWord && k[0] && `${k[0]} ${brandWord}`,
    brand && d.model && `${ar ? brandsAr[brand] ?? brand : brand} ${d.model}`,
    d.model && brand && `${brand} ${d.model}`,
    d.fireHours && (ar ? `خزنة ضد الحريق ${d.fireHours === 2 ? 'ساعتين' : 'ساعة'}` : `${d.fireHours === 2 ? '2-hour' : '1-hour'} fire safe`),
    lock.includes('fingerprint') && (ar ? 'خزنة بصمة' : 'fingerprint safe'),
    (lock.includes('keypad') || lock.includes('digital')) && (ar ? 'خزنة رقمية' : 'digital safe'),
    k[1] && `${k[1]} ${ar ? 'في قطر' : 'Qatar'}`,
    k[2] && (ar ? `${k[2]} الدوحة` : `${k[2]} Doha`),
    brandWord && k[1] && `${k[1]} ${brandWord}`,
  ]
  return [...new Set(out.filter((x): x is string => !!x))]
}

/**
 * Up to six "similar searches" for a product page. Each links to the
 * catalogue search, so only phrases that really return this product are kept.
 */
export function similarSearches(p: Product, all: Product[], locale: Locale, max = 6) {
  const index = productIndex(all)
  return candidates(p, locale)
    .filter((q) => search(index, parseQuery(q)).exact.some((x) => x.slug === p.slug))
    .slice(0, max)
}

const countryAr: Record<string, string> = { KOREA: 'كوريا', THAILAND: 'تايلاند', JAPAN: 'اليابان', MALAYSIA: 'ماليزيا', OMAN: 'سلطنة عُمان', DUBAI: 'دبي، الإمارات' }
const countryEn: Record<string, string> = { KOREA: 'Korea', THAILAND: 'Thailand', JAPAN: 'Japan', MALAYSIA: 'Malaysia', OMAN: 'Oman', DUBAI: 'Dubai, UAE' }
const price = (n: number) => new Intl.NumberFormat('en-US').format(n)

/** The sheet's figures as one readable paragraph (only what the sheet gives). */
export function specSummary(p: Product, locale: Locale): string | null {
  const d = productDetails[p.slug]
  if (!d || !(d.model || d.outside)) return null
  const brand = brandOf(p)
  const colours = p.specTable.find((r) => r.label.en === 'Colours available')?.value[locale]
  const [w, h, dep] = d.outside ?? []
  if (locale === 'ar') {
    const opening = `${p.name.ar}${brand && brandsAr[brand] ? ` (${brandsAr[brand]})` : ''}`
    const parts = [
      d.fireHours && `مقاومة للحريق لمدة ${d.fireHours === 2 ? 'ساعتين' : 'ساعة واحدة'}`,
      d.outside && `الأبعاد الخارجية ${w} × ${h} × ${dep} سم (عرض × ارتفاع × عمق)`,
      d.inside && `الأبعاد الداخلية ${d.inside.join(' × ')} سم`,
      d.weightKg && `الوزن ${d.weightKg} كجم`,
      d.country && `صنع في ${countryAr[d.country]}`,
      colours && `متوفرة باللون ${colours.split('، ').join(' أو ')}`,
    ].filter(Boolean)
    return `${opening}: ${parts.join('، ')}. ${d.price ? `السعر ${price(d.price)} ريال قطري` : 'السعر حسب الطلب'}، والتوصيل مجاني داخل دولة قطر${isHeavy(p.slug) ? ' (يخضع للتقييد طبقاً للموقع الداخلي للعميل)' : ''}.`
  }
  const opening = p.name.en
  const parts = [
    d.fireHours && `fire rating ${d.fireHours === 2 ? '2 hours' : '1 hour'}`,
    d.outside && `outside ${w} × ${h} × ${dep} cm (W × H × D)`,
    d.inside && `inside ${d.inside.join(' × ')} cm`,
    d.weightKg && `weight ${d.weightKg} kg`,
    d.country && `made in ${countryEn[d.country]}`,
    colours && `in ${colours.toLowerCase().split(', ').join(' or ')}`,
  ].filter(Boolean)
  return `${opening}: ${parts.join(', ')}. ${d.price ? `Price: QAR ${price(d.price)}` : 'Price on request'}, with free delivery within Qatar${isHeavy(p.slug) ? ", subject to restrictions depending on access at the customer's site" : ''}.`
}

/** Meta description that leads with what searchers compare: price, fire rating, origin (≤ 160 characters). */
export function productMetaDescription(p: Product, locale: Locale): string | undefined {
  const d = productDetails[p.slug] ?? {}
  const ar = locale === 'ar'
  const short = p.shortDesc?.[locale]
  const name = p.name[locale] ?? ''
  const delivery = isHeavy(p.slug)
    ? ar ? 'توصيل مجاني في قطر حسب موقع العميل.' : 'free delivery in Qatar, subject to site access.'
    : ar ? 'توصيل مجاني في قطر.' : 'free delivery in Qatar.'
  const priceText = d.price
    ? ar ? `السعر ${price(d.price)} ريال قطري، ${delivery}` : `QAR ${price(d.price)}, ${delivery}`
    : ar ? `السعر حسب الطلب، ${delivery}` : `Price on request, ${delivery}`
  const facts = [
    d.fireHours && (ar ? `مقاومة للحريق ${d.fireHours === 2 ? 'ساعتين' : 'ساعة'}` : `${d.fireHours}-hour fire rating`),
    d.country && (ar ? `صنع في ${countryAr[d.country]}` : `made in ${countryEn[d.country]}`),
  ].filter(Boolean).join(ar ? '، ' : ', ')
  const factsText = ar ? facts : facts.charAt(0).toUpperCase() + facts.slice(1)
  const options = [
    short && `${short} ${priceText}`,
    `${name}. ${priceText}${factsText ? ` ${factsText}.` : ''}`,
    `${name}. ${priceText}`,
    short,
  ]
  return options.find((o): o is string => !!o && o.length <= 160) ?? short
}

const cm = (v: number) => ({ '@type': 'QuantitativeValue', value: v, unitCode: 'CMT' })

/** Extra Product properties from the sheet, plus the names people search by. */
export function productSchemaExtras(p: Product, locale: Locale) {
  const d = productDetails[p.slug] ?? {}
  const brand = brandOf(p)
  const colours = p.specTable.find((r) => r.label.en === 'Colours available')?.value[locale]
  const k = kinds[p.category?.slug ?? '']?.[locale] ?? []
  return {
    ...(d.model ? { model: d.model, mpn: d.model } : {}),
    ...(colours ? { color: colours } : {}),
    ...(d.country ? { countryOfOrigin: countryEn[d.country] } : {}),
    ...(d.weightKg ? { weight: { '@type': 'QuantitativeValue', value: d.weightKg, unitCode: 'KGM' } } : {}),
    ...(d.outside ? { width: cm(d.outside[0]), height: cm(d.outside[1]), depth: cm(d.outside[2]) } : {}),
    ...(d.fireHours ? { additionalProperty: [{ '@type': 'PropertyValue', name: locale === 'ar' ? 'مقاومة الحريق' : 'Fire rating', value: d.fireHours, unitText: locale === 'ar' ? 'ساعة' : 'hours' }] } : {}),
    ...(brand && brandsAr[brand] && d.model ? { alternateName: [`${k[0] ?? ''} ${brandsAr[brand]} ${d.model}`.trim(), `${brand} ${d.model}`] } : {}),
    keywords: [...k, brand, brand && brandsAr[brand], d.model].filter(Boolean).join(', '),
  }
}
