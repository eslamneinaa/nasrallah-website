import type { Locale } from './types'

type FaqItem = { q: string; a: string }

/** A group of sectors and the product categories that serve them. */
type Sector = { title: string; body: string; categories: string[] }

type SupplyCopy = {
  metaTitle: string
  description: string
  heading: string
  subtitle: string
  intro: string[]
  sectorsTitle: string
  sectors: Sector[]
  stepsTitle: string
  steps: string[]
  clientsTitle: string
  cta: string
  faq: FaqItem[]
}

/**
 * The supply page for companies, government bodies and projects («توريد خزائن قطر»).
 * Only what the business states elsewhere on the site: quotations for quantities,
 * more than 1,000 clients, free delivery with the heavy-safe restriction.
 */
export const businessSupply: Record<Locale, SupplyCopy> = {
  ar: {
    metaTitle: 'توريد خزائن ولوكرات للشركات في قطر — عروض أسعار بالكميات',
    description:
      'توريد خزائن في قطر للشركات والوزارات والبنوك والمدارس والفنادق: خزائن مقاومة للحريق وإيداع وفنادق، ولوكرات ودواليب حديد وخزائن ملفات، بعروض أسعار للكميات.',
    heading: 'توريد خزائن ولوكرات للشركات والمشاريع في قطر',
    subtitle: 'عرض سعر واحد لكل ما تحتاجه مؤسستكم من خزائن ولوكرات ودواليب وخزائن ملفات، مع التوصيل داخل قطر.',
    intro: [
      'منذ عام 1906 تورّد مؤسسة نصر الله التجارية الخزائن ووسائل الحفظ الآمن من معرضها في سوق العين على طريق سلوى بالدوحة، ووضع أكثر من 1000 عميل ثقتهم بها، من الوزارات والهيئات الخاصة والبنوك والشركات والأفراد.',
      'نوفّر للمؤسسات خزائن UCHIDA وSAKURA وKUROGANE المقاومة للحريق وخزائن الإيداع والخزائن الفندقية، ودواليب GODREJ الحديدية ولوكراتها وخزائن ملفاتها، وخزائن المفاتيح وصناديق النقود. أخبرونا بما تحتاجونه وبعدد المواقع، ونجهّز عرض سعر بالكميات يشمل كل الأنواع في طلب واحد.',
    ],
    sectorsTitle: 'ماذا يحتاج كل قطاع؟',
    sectors: [
      {
        title: 'الوزارات والجهات الحكومية والبنوك',
        body: 'خزائن مقاومة للحريق للعقود والسجلات والنقد، منها خزائن بارتفاع كامل وخزنة ببابين، وخزائن ملفات وسجلات مقاومة للحريق للأرشيف.',
        categories: ['fire-resistant-safes', 'filing-cabinets'],
      },
      {
        title: 'المحلات والمطاعم ومحطات الوقود والصرافة',
        body: 'خزائن إيداع يودع فيها الموظفون النقود دون فتحها، وخزائن إيداع ليلي لإيراد آخر اليوم، وصناديق نقود للكاشير.',
        categories: ['deposit-safes', 'cash-boxes'],
      },
      {
        title: 'الفنادق والشقق الفندقية والمجمعات السكنية',
        body: 'خزائن فندقية للغرف بقفل رقمي أو مفتاح، وخزائن مفاتيح تُعلّق على الجدار بخطافات مرقّمة لتنظيم مفاتيح الغرف والوحدات.',
        categories: ['hotel-safes', 'key-cabinets'],
      },
      {
        title: 'المدارس والجامعات والمستشفيات والعيادات',
        body: 'لوكرات للطلاب والموظفين من باب واحد إلى ستة أبواب، وخزائن ملفات للسجلات، ودواليب حديد للمكاتب والمستودعات.',
        categories: ['steel-lockers', 'filing-cabinets', 'steel-cupboards'],
      },
      {
        title: 'المصانع والمستودعات ومواقع العمل وسكن العمال',
        body: 'لوكرات حديد للعمال، ودواليب حديد للأدوات والمستلزمات، وخزائن مفاتيح للمعدات والمركبات.',
        categories: ['steel-lockers', 'steel-cupboards', 'key-cabinets'],
      },
      {
        title: 'معارض السيارات وشركات التأجير',
        body: 'خزائن مفاتيح لـ 60 أو 100 مفتاح بخطافات مرقّمة وقفل بمفتاح، وخزائن نقود للإيرادات اليومية.',
        categories: ['key-cabinets', 'fire-resistant-safes'],
      },
    ],
    stepsTitle: 'كيف نجهّز طلبكم؟',
    steps: [
      'أرسلوا لنا عبر نموذج عرض السعر أو واتساب الأنواع والأعداد المطلوبة، وما سيُحفظ في كل منها، وعدد المواقع.',
      'نرشّح لكم الموديلات المناسبة بأوزانها وأبعادها وأسعارها، ونرسل عرض سعر واحدًا يجمع الطلب كله.',
      'التوصيل مجاني داخل قطر، والخزائن التي يزيد وزنها على 50 كجم يخضع توصيلها للتقييد طبقًا للموقع الداخلي للعميل، فأخبرونا بالطوابق والمداخل مسبقًا.',
    ],
    clientsTitle: 'من الجهات التي تثق بنا',
    cta: 'اطلب عرض سعر للكميات',
    faq: [
      {
        q: 'هل تورّدون الخزائن للوزارات والجهات الحكومية؟',
        a: 'نعم. من عملائنا وزارات وهيئات خاصة وبنوك وشركات، ووضع أكثر من 1000 عميل ثقتهم بنا في أنحاء قطر.',
      },
      {
        q: 'هل يمكن توريد أنواع مختلفة في طلب واحد؟',
        a: 'نعم، نجهّز عرض سعر واحدًا يجمع الخزائن واللوكرات والدواليب وخزائن الملفات وخزائن المفاتيح التي تحتاجونها.',
      },
      {
        q: 'هل التوصيل مجاني للطلبات الكبيرة؟',
        a: 'التوصيل مجاني داخل قطر، والخزائن التي يزيد وزنها على 50 كجم يخضع توصيلها للتقييد طبقًا للموقع الداخلي للعميل.',
      },
    ],
  },
  en: {
    metaTitle: 'Safe Supplier in Qatar — Safes and Lockers for Business',
    description:
      'Safe supplier in Qatar for companies, ministries, banks, schools and hotels: fire-resistant, deposit and hotel safes, lockers, cupboards and filing cabinets.',
    heading: 'Safe and Locker Supply for Businesses in Qatar',
    subtitle: 'One quotation for every safe, locker, cupboard and filing cabinet your organisation needs, with delivery within Qatar.',
    intro: [
      'Since 1906 Nasrallah Trading Est has supplied safes and secure storage from its showroom in Souq Al Ein on Salwa Road, Doha, and more than 1,000 clients have put their trust in it, from ministries and private bodies to banks, companies and individuals.',
      'We supply organisations with fire-resistant, deposit and hotel safes from UCHIDA, SAKURA and KUROGANE, GODREJ steel cupboards, lockers and filing cabinets, key cabinets and cash boxes. Tell us what you need and how many sites, and we will prepare one quotation for the whole quantity.',
    ],
    sectorsTitle: 'What each sector needs',
    sectors: [
      {
        title: 'Ministries, government bodies and banks',
        body: 'Fire-resistant safes for contracts, records and cash, including full-height and double-door safes, and fire-resistant filing and records cabinets for archives.',
        categories: ['fire-resistant-safes', 'filing-cabinets'],
      },
      {
        title: 'Shops, restaurants, fuel stations and exchange houses',
        body: 'Deposit safes that staff drop cash into without opening them, night deposit safes for end-of-day takings, and cash boxes for the till.',
        categories: ['deposit-safes', 'cash-boxes'],
      },
      {
        title: 'Hotels, serviced apartments and residential compounds',
        body: 'In-room hotel safes with a digital or key lock, and wall-mounted key cabinets with numbered hooks for room and unit keys.',
        categories: ['hotel-safes', 'key-cabinets'],
      },
      {
        title: 'Schools, universities, hospitals and clinics',
        body: 'Lockers for students and staff with one to six doors, filing cabinets for records, and steel cupboards for offices and stores.',
        categories: ['steel-lockers', 'filing-cabinets', 'steel-cupboards'],
      },
      {
        title: 'Factories, warehouses, work sites and labour accommodation',
        body: 'Steel lockers for workers, steel cupboards for tools and supplies, and key cabinets for equipment and vehicles.',
        categories: ['steel-lockers', 'steel-cupboards', 'key-cabinets'],
      },
      {
        title: 'Car showrooms and rental companies',
        body: 'Key cabinets for 60 or 100 keys with numbered hooks and a key lock, and cash safes for daily takings.',
        categories: ['key-cabinets', 'fire-resistant-safes'],
      },
    ],
    stepsTitle: 'How we prepare your order',
    steps: [
      'Send us, through the quote form or WhatsApp, the types and numbers you need, what each will hold, and how many sites.',
      'We recommend suitable models with their weights, dimensions and prices, and send one quotation covering the whole order.',
      'Delivery within Qatar is free; for safes over 50 kg it is subject to restrictions depending on access at the customer’s site, so tell us about floors and entrances in advance.',
    ],
    clientsTitle: 'Some of the organisations that trust us',
    cta: 'Request a quote for quantities',
    faq: [
      {
        q: 'Do you supply safes to ministries and government bodies?',
        a: 'Yes. Our clients include ministries, private bodies, banks and companies, and more than 1,000 clients across Qatar have put their trust in us.',
      },
      {
        q: 'Can you supply different types in one order?',
        a: 'Yes, we prepare one quotation covering the safes, lockers, cupboards, filing cabinets and key cabinets you need.',
      },
      {
        q: 'Is delivery free for large orders?',
        a: 'Delivery within Qatar is free; for safes over 50 kg it is subject to restrictions depending on access at the customer’s site.',
      },
    ],
  },
}
