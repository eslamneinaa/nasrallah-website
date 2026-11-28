/**
 * The words people type when they look for what we sell, in Arabic and English.
 * They feed each page's keywords meta tag and, on category pages, a visible
 * "also searched as" line. Only names for products we really carry.
 */
import type { Locale } from './types'

type Terms = Record<Locale, string[]>

/** The shop itself: added after each page's own terms, on every page. */
export const siteTerms: Terms = {
  ar: [
    'بيع خزائن في قطر',
    'محل خزائن في الدوحة',
    'تجوري قطر',
    'خزنة حديد',
    'خزائن وتجوري',
    'مؤسسة نصر الله التجارية',
    'سوق العين طريق سلوى',
  ],
  en: [
    'safes for sale in Qatar',
    'safe shop Doha',
    'buy a safe in Qatar',
    'safes Doha',
    'Nasrallah Trading',
    'Souq Al Ein Salwa Road',
  ],
}

/** What people call each category, most searched first. Keys are category (or collection) slugs. */
export const categoryTerms: Record<string, Terms> = {
  'fire-resistant-safes': {
    ar: ['تجوري', 'تجوري حديد', 'خزنة حديد', 'خزنة ضد الحريق', 'خزنة مقاومة للنار', 'خزنة نقود', 'خزنة فلوس', 'خزنة رقمية', 'خزنة بالبصمة', 'خزنة بمفتاح', 'خزينة', 'قاصة', 'خزنة مستندات', 'خزنة كبيرة'],
    en: ['safe', 'fireproof safe', 'fire resistant safe', 'fire safe', 'money safe', 'cash safe', 'steel safe', 'digital safe', 'fingerprint safe', 'biometric safe', 'safe box', 'strong box', 'document safe', 'tijori'],
  },
  'deposit-safes': {
    ar: ['خزنة إيداع', 'خزنة إيداع ليلي', 'خزنة كاشير', 'تجوري محلات', 'خزنة للمحلات', 'خزنة مطاعم', 'خزنة محطات الوقود', 'خزنة بفتحة إيداع'],
    en: ['deposit safe', 'drop safe', 'night deposit safe', 'cash drop safe', 'cashier safe', 'shop safe', 'restaurant safe', 'retail safe'],
  },
  'hotel-safes': {
    ar: ['خزنة فندقية', 'خزنة فندق', 'خزنة غرف الفنادق', 'صندوق أمانات', 'خزنة صغيرة', 'خزنة دولاب', 'خزنة شقق فندقية', 'خزنة سكن موظفين'],
    en: ['hotel safe', 'in-room safe', 'hotel room safe', 'small safe', 'mini safe', 'wardrobe safe', 'apartment safe', 'guest room safe'],
  },
  'luxury-safes': {
    ar: ['خزنة فاخرة', 'تجوري فخم', 'خزنة ديكور', 'خزنة خشب', 'خزنة ملونة', 'خزنة دوار ساعات', 'خزنة للفلل', 'خزنة بتصميم فاخر'],
    en: ['luxury safe', 'designer safe', 'decorative safe', 'wooden safe', 'coloured safe', 'watch winder safe', 'villa safe', 'premium safe'],
  },
  'jewellery-watch-interiors': {
    ar: ['خزنة مجوهرات', 'خزنة ذهب', 'خزنة ساعات', 'تجوري مجوهرات', 'أدراج مجوهرات', 'أدراج مخمل', 'شنطة مجوهرات', 'شنطة مجوهرات للسفر', 'منظم مجوهرات', 'خزنة ألماس'],
    en: ['jewellery safe', 'jewelry safe', 'gold safe', 'watch safe', 'jewellery drawers', 'velvet jewellery drawers', 'jewellery case', 'travel jewellery case', 'jewelry box', 'jewellery organiser'],
  },
  'filing-cabinets': {
    ar: ['خزانة ملفات', 'دولاب ملفات', 'خزانة أرشيف', 'خزانة ملفات حديد', 'خزانة ملفات ضد الحريق', 'كبت ملفات', 'خزانة أدراج', 'خزانة مستندات'],
    en: ['filing cabinet', 'file cabinet', 'fireproof filing cabinet', 'steel filing cabinet', 'archive cabinet', 'document cabinet', 'drawer cabinet', 'office file storage'],
  },
  'key-cabinets': {
    ar: ['خزانة مفاتيح', 'صندوق مفاتيح', 'علبة مفاتيح', 'خزانة مفاتيح حائط', 'دولاب مفاتيح', 'خزانة مفاتيح للفنادق'],
    en: ['key cabinet', 'key box', 'key safe', 'key storage cabinet', 'wall key cabinet', 'key locker'],
  },
  'cash-boxes': {
    ar: ['صندوق نقود', 'صندوق كاش', 'صندوق فلوس', 'درج كاشير', 'درج نقود', 'صندوق نقود بقفل'],
    en: ['cash box', 'cash drawer', 'money box', 'petty cash box', 'cashier drawer', 'lockable cash box'],
  },
  'steel-cupboards': {
    ar: ['دولاب حديد', 'خزانة حديدية', 'كبت حديد', 'دولاب مكتب حديد', 'دولاب جودريج', 'خزانة حديد بأرفف', 'دولاب معدني'],
    en: ['steel cupboard', 'metal cabinet', 'steel cabinet', 'office cupboard', 'GODREJ almirah', 'steel almirah', 'metal cupboard with shelves'],
  },
  'steel-lockers': {
    ar: ['لوكر حديد', 'لوكرات حديد', 'لوكرات موظفين', 'لوكرات مدارس', 'لوكرات أندية', 'خزائن موظفين', 'لوكر جودريج'],
    en: ['steel locker', 'metal locker', 'staff locker', 'employee locker', 'school locker', 'gym locker', 'changing room locker'],
  },
  'home-safes': {
    ar: ['خزنة منزلية', 'تجوري للبيت', 'خزنة بيت', 'خزنة صغيرة للبيت', 'خزنة دولاب', 'خزنة غرفة النوم', 'خزنة ذهب للبيت', 'خزنة فلوس للبيت'],
    en: ['home safe', 'house safe', 'safe for home', 'small home safe', 'bedroom safe', 'wardrobe safe', 'home jewellery safe', 'home cash safe'],
  },
}

/** Pages that are not a category, keyed by their path. */
export const pageTerms: Record<string, Terms> = {
  home: {
    ar: ['خزائن', 'تجوري', 'خزنة', 'خزائن ضد الحريق', 'خزنة مجوهرات', 'خزنة نقود', 'دولاب حديد', 'لوكرات حديد', 'خزائن ملفات', 'خزنة فندقية', 'خزنة منزلية', 'خزائن UCHIDA أوشيدا', 'خزائن SAKURA ساكورا', 'GODREJ جودريج', 'KUROGANE كوروجاني'],
    en: ['safes', 'safe', 'fireproof safe', 'jewellery safe', 'cash safe', 'steel cupboard', 'steel lockers', 'filing cabinets', 'hotel safe', 'home safe', 'UCHIDA safe', 'SAKURA safe', 'GODREJ', 'KUROGANE safe'],
  },
  products: {
    ar: ['أسعار الخزائن في قطر', 'كل أنواع الخزائن', 'تجوري', 'خزنة مجوهرات', 'خزنة فندقية', 'خزنة إيداع', 'دولاب حديد', 'لوكر حديد', 'خزانة ملفات', 'صندوق نقود', 'خزانة مفاتيح'],
    en: ['safe prices Qatar', 'all types of safes', 'safe', 'jewellery safe', 'hotel safe', 'deposit safe', 'steel cupboard', 'steel locker', 'filing cabinet', 'cash box', 'key cabinet'],
  },
  videos: {
    ar: ['فيديو خزائن', 'فيديوهات تجوري', 'خزنة مجوهرات فيديو', 'خزنة UCHIDA فيديو', 'جولة معرض خزائن الدوحة'],
    en: ['safe videos', 'safe video Qatar', 'jewellery safe video', 'UCHIDA safe video', 'safe showroom tour Doha'],
  },
  articles: {
    ar: ['مقالات عن الخزائن', 'نصائح شراء خزنة', 'كيف أختار خزنة', 'أنواع الخزائن', 'أسعار الخزائن'],
    en: ['safe buying tips', 'how to choose a safe', 'types of safes', 'safe prices', 'safe articles'],
  },
  about: {
    ar: ['نصر الله للخزائن', 'تاريخ مؤسسة نصر الله', 'خزائن منذ 1906', 'خزائن UCHIDA في قطر', 'شركة خزائن في الدوحة'],
    en: ['Nasrallah safes', 'safe company Qatar', 'safes since 1906', 'UCHIDA safes Qatar', 'safe dealer Doha'],
  },
  contact: {
    ar: ['عنوان محل خزائن', 'رقم محل خزائن في الدوحة', 'معرض خزائن سوق العين', 'خزائن طريق سلوى', 'خزائن قريبة مني'],
    en: ['safe shop near me', 'safe store Doha address', 'Souq Al Ein safes', 'Salwa Road safe shop', 'safe shop phone Qatar'],
  },
  'request-quote': {
    ar: ['عرض سعر خزنة', 'سعر خزنة', 'أسعار التجوري', 'عرض سعر خزائن للشركات', 'عرض سعر لوكرات'],
    en: ['safe quote', 'safe price', 'safe quotation Qatar', 'bulk safes quote', 'locker quotation'],
  },
  'safe-buying-guide': {
    ar: ['دليل شراء خزنة', 'كيف أختار خزنة', 'أفضل خزنة', 'أنواع أقفال الخزائن', 'خزنة ضد الحريق ولا عادية'],
    en: ['safe buying guide', 'how to choose a safe', 'best safe', 'safe lock types', 'fireproof vs regular safe'],
  },
}

/** Popular searches on the home page, each leading to the category that answers it. */
export const homeSearches: { slug: string; term: Record<Locale, string> }[] = [
  { slug: 'fire-resistant-safes', term: { ar: 'تجوري في قطر', en: 'Safes in Qatar' } },
  { slug: 'fire-resistant-safes', term: { ar: 'خزنة ضد الحريق', en: 'Fireproof safe' } },
  { slug: 'home-safes', term: { ar: 'خزنة منزلية', en: 'Home safe' } },
  { slug: 'jewellery-watch-interiors', term: { ar: 'خزنة مجوهرات وذهب', en: 'Jewellery and gold safe' } },
  { slug: 'hotel-safes', term: { ar: 'خزنة فندقية', en: 'Hotel safe' } },
  { slug: 'deposit-safes', term: { ar: 'خزنة إيداع للمحلات', en: 'Deposit safe for shops' } },
  { slug: 'luxury-safes', term: { ar: 'خزنة فاخرة', en: 'Luxury safe' } },
  { slug: 'steel-cupboards', term: { ar: 'دولاب حديد', en: 'Steel cupboard' } },
  { slug: 'steel-lockers', term: { ar: 'لوكرات حديد', en: 'Steel lockers' } },
  { slug: 'filing-cabinets', term: { ar: 'خزانة ملفات', en: 'Filing cabinet' } },
  { slug: 'cash-boxes', term: { ar: 'صندوق نقود', en: 'Cash box' } },
  { slug: 'key-cabinets', term: { ar: 'خزانة مفاتيح', en: 'Key cabinet' } },
]

/** A page's own terms followed by the shop's, without repeats. */
export const withSiteTerms = (locale: Locale, own: string[] = []) => [...new Set([...own, ...siteTerms[locale]])]
