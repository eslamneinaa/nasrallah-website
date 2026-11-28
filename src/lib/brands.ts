import type { Locale, Product } from './types'

type FaqItem = { q: string; a: string }

export type BrandPage = {
  slug: string
  /** The brand as written on its products' "Brand" spec row. */
  name: string
  /** How people write it in Arabic letters. */
  arabicName: string
  heading: Record<Locale, string>
  metaTitle: Record<Locale, string>
  description: Record<Locale, string>
  intro: Record<Locale, string[]>
  faq: Record<Locale, FaqItem[]>
}

/**
 * A page per brand, for searches such as «خزائن أوشيدا قطر» or "godrej almirah qatar".
 * Facts only from the site's own data: brand history as in the home page's brand
 * cards, countries of manufacture, ratings and prices from the company sheet.
 */
export const brandPages: BrandPage[] = [
  {
    slug: 'uchida',
    name: 'UCHIDA',
    arabicName: 'أوشيدا',
    heading: { ar: 'خزائن أوشيدا UCHIDA في قطر', en: 'UCHIDA Safes in Qatar' },
    metaTitle: { ar: 'خزائن أوشيدا UCHIDA في قطر — موديلات وأسعار', en: 'UCHIDA Safes in Qatar — Models and Prices' },
    description: {
      ar: 'خزائن أوشيدا UCHIDA في قطر: خزائن مقاومة للحريق بالبصمة والأرقام، وخزائن إيداع وفنادق وملفات ومفاتيح وصناديق نقود، بأسعار معلنة وتوصيل مجاني.',
      en: 'UCHIDA safes in Qatar: fire-resistant safes with fingerprint and keypad locks, deposit, hotel, filing and key safes and cash boxes, with listed prices.',
    },
    intro: {
      ar: [
        'UCHIDA أوسع تشكيلة لدينا: خزائن مقاومة للحريق بأقفال رقمية وبالبصمة، وخزائن إيداع، وخزائن فندقية بمفتاح، وخزائن ملفات مقاومة للحريق، وخزائن مفاتيح، وصناديق نقود، وتصاميم فاخرة بتشطيبات خشبية وألوان لافتة.',
        'يبحث عنها كثيرون في قطر باسم «أوشيدا» أو «اوتشيدا»، وكلها العلامة نفسها. ويختلف بلد الصنع من موديل لآخر، كوريا أو تايلاند أو ماليزيا، وهو مكتوب في صفحة كل موديل مع مقاومته للحريق ووزنه وأبعاده وسعره.',
        'شاهدوا خزائن UCHIDA وجرّبوا أقفالها في معرضنا بسوق العين على طريق سلوى في الدوحة، أو اطلبوا عرض سعر من الموقع أو واتساب.',
      ],
      en: [
        'UCHIDA is our widest range: fire-resistant safes with digital and fingerprint locks, deposit safes, key-lock hotel safes, fire-resistant filing cabinets, key cabinets, cash boxes and luxury designs in wood finishes and striking colours.',
        'The country of manufacture varies by model, Korea, Thailand or Malaysia, and is shown on each model’s page together with its fire rating, weight, dimensions and price.',
        'See UCHIDA safes and try their locks at our showroom in Souq Al Ein on Salwa Road, Doha, or ask for a quotation through the site or on WhatsApp.',
      ],
    },
    faq: {
      ar: [
        { q: 'هل خزائن أوشيدا يابانية؟', a: 'بلد الصنع يختلف حسب الموديل في خزائن UCHIDA لدينا: كوريا أو تايلاند أو ماليزيا، وهو مكتوب في صفحة كل موديل. أما الخزائن اليابانية الصنع لدينا فهي من KUROGANE.' },
        { q: 'كم سعر خزنة أوشيدا؟', a: 'من 1,150 ريال قطري للخزنة الفندقية الصغيرة موديل HS-23K1 إلى 27,450 ريال للخزنة ذات البابين موديل E-526، وبعض الخزائن المجهّزة للمجوهرات سعرها حسب الطلب. والسعر معلن في صفحة كل موديل.' },
        { q: 'أين أشتري خزنة أوشيدا في قطر؟', a: 'من معرض مؤسسة نصر الله التجارية في سوق العين على طريق سلوى بالدوحة، أو اطلبوها من الموقع أو واتساب. التوصيل مجاني داخل قطر، والخزائن التي يزيد وزنها على 50 كجم يخضع توصيلها للتقييد طبقًا للموقع الداخلي للعميل.' },
      ],
      en: [
        { q: 'Are UCHIDA safes Japanese?', a: 'The country of manufacture of our UCHIDA safes depends on the model: Korea, Thailand or Malaysia, as shown on each model’s page. Our Japanese-made safes are from KUROGANE.' },
        { q: 'How much is an UCHIDA safe?', a: 'From QAR 1,150 for the small HS-23K1 hotel safe to QAR 27,450 for the E-526 double-door safe; some jewellery-fitted safes are priced on request. Each model’s page shows its price.' },
        { q: 'Where can I buy an UCHIDA safe in Qatar?', a: 'At the Nasrallah Trading Est showroom in Souq Al Ein on Salwa Road, Doha, or through the site or WhatsApp. Delivery within Qatar is free; for safes over 50 kg it is subject to restrictions depending on access at the customer’s site.' },
      ],
    },
  },
  {
    slug: 'sakura',
    name: 'SAKURA',
    arabicName: 'ساكورا',
    heading: { ar: 'خزائن ساكورا SAKURA في قطر', en: 'SAKURA Safes in Qatar' },
    metaTitle: { ar: 'خزائن ساكورا SAKURA في قطر — بصمة وفنادق وملفات', en: 'SAKURA Safes in Qatar — Fingerprint, Hotel and Filing' },
    description: {
      ar: 'خزائن ساكورا SAKURA في قطر: خزائن بالبصمة والأرقام مقاومة للحريق، وخزائن فندقية رقمية، وخزنة بباب مزخرف، وخزائن ملفات مقاومة للحريق، بأسعار معلنة.',
      en: 'SAKURA safes in Qatar: fire-resistant fingerprint and keypad safes, digital hotel safes, a floral-door safe and fire-resistant filing cabinets, with listed prices.',
    },
    intro: {
      ar: [
        'خزائن SAKURA بأقفال حديثة بالبصمة والأرقام، وخزائن فندقية رقمية بشاشة حاصلة على شهادة CE، وتصاميم مميّزة مثل الباب المزخرف بالزهور، وخزائن ملفات مقاومة للحريق، للمنازل والمكاتب والمؤسسات.',
        'من خزائن SAKURA لدينا الخزنة متعددة الأقفال موديل EFI703 التي تجمع البصمة ولوحة الأرقام والمفتاح بتصنيف حريق ساعتين، وخزنة البصمة موديل ONS-FE. وبلد الصنع كوريا أو تايلاند حسب الموديل، ومكتوب في صفحة كل منتج.',
        'زورونا في معرضنا بسوق العين على طريق سلوى في الدوحة لتجربة أقفالها، والتوصيل مجاني داخل قطر.',
      ],
      en: [
        'SAKURA safes bring modern fingerprint and keypad locks, CE-approved digital hotel safes with a display, distinctive designs such as the floral door, and fire-resistant filing cabinets, for homes, offices and institutions.',
        'Our SAKURA range includes the EFI703 multi-lock safe, combining fingerprint, keypad and key with a 2-hour fire rating, and the ONS-FE fingerprint safe. Each is made in Korea or Thailand depending on the model, as shown on its page.',
        'Visit our showroom in Souq Al Ein on Salwa Road, Doha, to try the locks; delivery within Qatar is free.',
      ],
    },
    faq: {
      ar: [
        { q: 'من وكيل خزائن ساكورا في قطر؟', a: 'نبيع خزائن SAKURA في معرض مؤسسة نصر الله التجارية بسوق العين على طريق سلوى بالدوحة، بأسعار معلنة في صفحة كل موديل وتوصيل مجاني داخل قطر.' },
        { q: 'هل خزائن ساكورا مقاومة للحريق؟', a: 'أغلبها نعم: موديل EFI703 لمدة ساعتين، وموديل ONS-FE وUDS-65BE وخزانتا الملفات UB4-4DLK وUB4-4K2K لمدة ساعة. أما الخزائن الفندقية UBHS-16 وUBHS-14 فغير مصنّفة لمقاومة الحريق.' },
      ],
      en: [
        { q: 'Who sells SAKURA safes in Qatar?', a: 'Nasrallah Trading Est sells SAKURA safes at its showroom in Souq Al Ein on Salwa Road, Doha, with prices listed on each model’s page and free delivery within Qatar.' },
        { q: 'Are SAKURA safes fire-resistant?', a: 'Most are: the EFI703 for two hours, and the ONS-FE, UDS-65BE and the UB4-4DLK and UB4-4K2K filing cabinets for one hour. The UBHS-16 and UBHS-14 hotel safes are not fire rated.' },
      ],
    },
  },
  {
    slug: 'godrej',
    name: 'GODREJ',
    arabicName: 'جودريج',
    heading: { ar: 'خزائن ودواليب جودريج GODREJ في قطر', en: 'GODREJ Cupboards, Lockers and Almirahs in Qatar' },
    metaTitle: { ar: 'دواليب ولوكرات جودريج GODREJ في قطر — الأسعار', en: 'GODREJ Almirah and Lockers in Qatar — Prices' },
    description: {
      ar: 'دواليب حديد ولوكرات وخزائن ملفات جودريج GODREJ في قطر: بباب واحد أو بابين أو بأبواب زجاجية، ولوكرات من باب إلى ستة أبواب، بأسعار معلنة.',
      en: 'GODREJ steel almirahs, cupboards, lockers and filing cabinets in Qatar: one, two or glass doors, lockers with one to six doors, all with listed prices.',
    },
    intro: {
      ar: [
        'GODREJ اسم تثق به الهند في الخزائن منذ عام 1902، من شركة Godrej & Boyce في مومباي. ونوفّر منه في قطر الدواليب الحديدية واللوكرات وخزائن الملفات للمكاتب والمدارس والمؤسسات، وبلد الصنع المذكور في صفحات موديلات GODREJ لدينا هو سلطنة عُمان.',
        'الدواليب بباب واحد أو بابين أو بأبواب زجاجية، واللوكرات من باب واحد إلى ستة أبواب بالمقاس الخارجي نفسه، وخزائن الملفات بدرجين وثلاثة وخمسة أدراج. وللكميات نجهّز عرض سعر شاملًا مع التوصيل.',
      ],
      en: [
        'GODREJ is a name India has trusted for safes since 1902, from Godrej & Boyce of Mumbai. In Qatar we carry its steel almirahs and cupboards, lockers and filing cabinets for offices, schools and institutions; the GODREJ models whose pages list a country of manufacture are made in Oman.',
        'Cupboards come with one door, two doors or glass doors, lockers with one to six doors in the same outside size, and filing cabinets with two, three or five drawers. For quantities we prepare a full quotation with delivery.',
      ],
    },
    faq: {
      ar: [
        { q: 'هل تبيعون خزن نقود من GODREJ؟', a: 'من GODREJ نوفّر الدواليب الحديدية واللوكرات وخزائن الملفات. أما خزائن النقود والخزائن المقاومة للحريق فمن UCHIDA وSAKURA وKUROGANE.' },
        { q: 'كم سعر دولاب جودريج؟', a: 'الدواليب الحديدية من 690 ريال قطري للباب الواحد موديل LC1ES4 إلى 1,490 ريال للبابين بمقبض، واللوكرات من 540 إلى 749 ريال، وخزائن الملفات من 590 إلى 960 ريال.' },
      ],
      en: [
        { q: 'Do you sell GODREJ cash safes?', a: 'From GODREJ we carry steel almirahs and cupboards, lockers and filing cabinets. Our cash safes and fire-resistant safes are from UCHIDA, SAKURA and KUROGANE.' },
        { q: 'How much is a GODREJ almirah?', a: 'Steel almirahs run from QAR 690 for the single-door LC1ES4 to QAR 1,490 for the double-door model with a handle, lockers from QAR 540 to QAR 749, and filing cabinets from QAR 590 to QAR 960.' },
      ],
    },
  },
  {
    slug: 'kurogane',
    name: 'KUROGANE',
    arabicName: 'كوروجاني',
    heading: { ar: 'خزائن كوروجاني KUROGANE اليابانية في قطر', en: 'KUROGANE Japanese Safes in Qatar' },
    metaTitle: { ar: 'خزائن كوروجاني KUROGANE اليابانية في قطر', en: 'KUROGANE Japanese Safes in Qatar — Wing Safe' },
    description: {
      ar: 'خزائن كوروجاني KUROGANE اليابانية في قطر: خزائن Wing Safe المقاومة للحريق، صناعة يابانية، بقفل رقمي دوّار ومفتاح، من معرض نصر الله في سوق العين.',
      en: 'KUROGANE Japanese safes in Qatar: fire-resistant Wing Safes made in Japan, with a combination dial and key, from our showroom in Souq Al Ein, Doha.',
    },
    intro: {
      ar: [
        'خزائن Wing Safe المقاومة للحريق، صناعة يابانية من شركة Kurogane Kosakusho التي تأسست في أوساكا عام 1927، بقفل رقمي دوّار ومفتاح لحماية السجلات والمقتنيات من الحريق والسرقة.',
        'لمن يبحث عن خزنة يابانية الصنع في قطر: لدينا خزنة Wing Safe السوداء على قاعدة مرتفعة، والخزنة الصغيرة موديل SK-12 بلون بيج وتصنيف حريق ساعة. والقفل الدوّار ميكانيكي لا يحتاج إلى بطارية.',
      ],
      en: [
        'Fire-resistant Wing Safes made in Japan by Kurogane Kosakusho, founded in Osaka in 1927, with a combination dial and a key to protect records and valuables from fire and theft.',
        'For anyone looking for a Japanese-made safe in Qatar: the black Wing Safe on raised feet, and the compact beige SK-12 with a 1-hour fire rating. The combination dial is mechanical and needs no battery.',
      ],
    },
    faq: {
      ar: [
        { q: 'هل خزائن كوروجاني يابانية الصنع؟', a: 'نعم، خزائن KUROGANE لدينا صناعة يابانية من شركة Kurogane Kosakusho التي تأسست في أوساكا عام 1927.' },
        { q: 'ما القفل في خزائن كوروجاني؟', a: 'قفل رقمي دوّار ميكانيكي مع قفل بمفتاح، فلا تحتاج الخزنة إلى بطارية.' },
      ],
      en: [
        { q: 'Are KUROGANE safes made in Japan?', a: 'Yes, our KUROGANE safes are made in Japan by Kurogane Kosakusho, founded in Osaka in 1927.' },
        { q: 'What lock do KUROGANE safes use?', a: 'A mechanical combination dial with a key lock, so the safe needs no battery.' },
      ],
    },
  },
]

const brandOfProduct = (p: Product) => p.specTable.find((r) => r.label.en === 'Brand')?.value.en

/** The brand page a product belongs to, if any. */
export const brandPageOf = (p: Product) => brandPages.find((b) => b.name === brandOfProduct(p))

export const brandProducts = (brand: BrandPage, products: Product[]) => products.filter((p) => brandOfProduct(p) === brand.name)
