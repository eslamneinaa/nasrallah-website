import { href } from '@/i18n/config'
import type { Locale } from './types'

type CategoryCopy = {
  /** Page heading, phrased the way people search ("… in Qatar"). */
  heading: string
  metaTitle: string
  description: string
  intro: string[]
}

/** Landing-page copy for each product category, keyed by category slug. */
export const categoryContent: Record<string, Record<Locale, CategoryCopy>> = {
  'fire-resistant-safes': {
    ar: {
      heading: 'خزائن نقود وخزائن مقاومة للحريق في قطر',
      metaTitle: 'خزائن نقود وخزائن مقاومة للحريق في قطر — تجوري حديد بالبصمة والأرقام',
      description:
        'خزائن نقود وخزائن حديدية مقاومة للحريق في قطر من UCHIDA وSAKURA وKUROGANE: أقفال بالبصمة والأرقام والمفتاح، بمقاسات للبيت والمحل والمؤسسة، مع توصيل مجاني.',
      intro: [
        'لحفظ النقود والمستندات والمقتنيات الثمينة من السرقة والحريق معًا. نوفّر خزائن حديدية بأقفال رقمية وبالبصمة ومفاتيح احتياطية، من الخزنة الصغيرة التي توضع في خزانة الملابس إلى الخزائن ببابين للبنوك والمؤسسات.',
        'من علامات UCHIDA وSAKURA، ومن KUROGANE اليابانية بخزائن Wing Safe ذات القفل الرقمي الدوّار. زورونا في معرضنا بسوق العين لتجربة الأقفال بأنفسكم، والتوصيل مجاني.',
      ],
    },
    en: {
      heading: 'Cash Safes and Fire-Resistant Safes in Qatar',
      metaTitle: 'Cash Safes & Fire-Resistant Safes in Qatar — Fingerprint, Keypad & Key',
      description:
        'Cash safes and fire-resistant steel safes in Qatar from UCHIDA, SAKURA and KUROGANE: fingerprint, keypad and key locks, sized for homes, shops and institutions, with free delivery.',
      intro: [
        'For keeping cash, documents and valuables safe from both theft and fire. We carry steel safes with digital and fingerprint locks and backup keys, from compact safes that fit in a wardrobe to double-door safes for banks and institutions.',
        'Choose from UCHIDA and SAKURA, and from KUROGANE of Japan with its Wing Safe range and combination dials. Visit our Souq Al Ein showroom to try the locks yourself; delivery is free.',
      ],
    },
  },
  'deposit-safes': {
    ar: {
      heading: 'خزائن الإيداع والإيداع الليلي في قطر',
      metaTitle: 'خزائن إيداع وإيداع ليلي في قطر للمحلات والمطاعم ومحطات الوقود',
      description:
        'خزائن إيداع UCHIDA في قطر: يودع الموظفون النقود عبر درج علوي دون فتح الخزنة، وتبقى الخزنة مقفلة بالرقم السري والمفتاح. للمحلات والمطاعم والفروع، مع توصيل مجاني.',
      intro: [
        'في المحلات والمطاعم ومحطات الوقود تُستلم النقود طوال اليوم، ولا ينبغي أن يعرف كل موظف الرقم السري. خزنة الإيداع تحل ذلك: تُودع النقود والأظرف عبر درج علوي، وتسقط داخل الخزنة المقفلة التي لا يفتحها إلا صاحب العمل.',
        'نوفّر خزائن إيداع من UCHIDA بأقفال رقمية ومفاتيح، منها خزنة الإيداع الليلي بدرج يُسحب للخارج لإيداع إيراد آخر اليوم.',
      ],
    },
    en: {
      heading: 'Deposit and Night Deposit Safes in Qatar',
      metaTitle: 'Deposit & Night Deposit Safes in Qatar for Shops, Restaurants and Fuel Stations',
      description:
        'UCHIDA deposit safes in Qatar: staff drop cash through a top drawer without opening the safe, which stays locked by code and key. For shops, restaurants and branches, with free delivery.',
      intro: [
        'Shops, restaurants and fuel stations take cash all day, and not every member of staff should know the code. A deposit safe solves that: cash and envelopes go in through a top drawer and drop into the locked body of the safe, which only the owner opens.',
        'We carry UCHIDA deposit safes with digital locks and keys, including a night deposit safe with a pull-out drawer for end-of-day takings.',
      ],
    },
  },
  'hotel-safes': {
    ar: {
      heading: 'خزائن الفنادق في قطر',
      metaTitle: 'خزائن فندقية في قطر — خزنة غرف الفنادق والشقق الفندقية بقفل رقمي أو مفتاح',
      description:
        'خزائن فندقية في قطر من SAKURA وUCHIDA لغرف الفنادق والشقق الفندقية وسكن الموظفين: بقفل رقمي بشاشة أو بمفتاح، بحجم يناسب خزانة الملابس، مع توصيل مجاني وعروض أسعار للكميات.',
      intro: [
        'خزنة الغرفة من أول ما يبحث عنه النزيل: مكان صغير آمن لجواز السفر والنقود والهاتف والمجوهرات. نوفّر خزائن فندقية صغيرة توضع داخل خزانة الملابس أو أسفل المكتب، بقفل رقمي بشاشة من SAKURA حاصل على شهادة CE، أو بقفل مفتاح بسيط من UCHIDA بلون أسود أو عاجي.',
        'وتناسب أيضًا الشقق الفندقية والمجمعات السكنية وسكن الموظفين، والبيوت لمن يريد خزنة صغيرة. نجهّز عروض أسعار للكميات لتجهيز فندق أو مبنى كامل، والتوصيل مجاني داخل قطر.',
      ],
    },
    en: {
      heading: 'Hotel Safes in Qatar',
      metaTitle: 'Hotel Safes in Qatar — In-Room Safes for Hotels and Serviced Apartments, Digital or Key',
      description:
        'Hotel safes in Qatar from SAKURA and UCHIDA for hotel rooms, serviced apartments and staff housing: a digital lock with a display or a key lock, sized for a wardrobe, with free delivery and quotations for quantities.',
      intro: [
        'An in-room safe is one of the first things guests look for: a small, secure place for passports, cash, phones and jewellery. We carry compact hotel safes that sit inside a wardrobe or under a desk, with a CE-approved SAKURA digital lock and display, or a simple UCHIDA key lock in black or ivory.',
        'They also suit serviced apartments, residential compounds, staff housing and homes that need a small safe. We prepare quotations for quantities to equip a whole hotel or building, and delivery is free across Qatar.',
      ],
    },
  },
  'luxury-safes': {
    ar: {
      heading: 'الخزائن الفاخرة في قطر',
      metaTitle: 'خزائن وتجوري فاخر في قطر — تصاميم خشبية وملونة وخزائن مجوهرات ودوّار ساعات',
      description:
        'خزائن وتجوري فاخر في قطر بتصاميم تليق بالبيت والمجلس ومكاتب الإدارة: تشطيبات خشب الجوز والواجهات المضلّعة والمزخرفة، وخزائن مجوهرات بنقشة الرخام، وخزائن بدوّار ساعات مدمج.',
      intro: [
        'خزائن صُمّمت لتبقى ظاهرة: تشطيبات خشب الجوز، وواجهات مضلّعة، وأبواب مزخرفة بالزهور من SAKURA، وخزنة UCHIDA الحمراء بأدراج جلدية. حماية جادة بمظهر قطعة أثاث راقية.',
        'ومنها خزائن المجوهرات بتجهيز داخلي بنقشة الرخام، وخزائن بدوّار ساعات مدمج يُبقي الساعات الأوتوماتيكية تعمل وهي في أمان.',
      ],
    },
    en: {
      heading: 'Luxury Safes in Qatar',
      metaTitle: 'Luxury Safes in Qatar — Wood, Colour and Watch Winder Safes',
      description:
        'Luxury safes in Qatar designed for homes, majlis and executive offices: walnut finishes, fluted and floral fronts, marble-finish jewellery safes and safes with built-in watch winders.',
      intro: [
        'Safes made to be seen: walnut finishes, fluted fronts, SAKURA floral doors and the red UCHIDA safe with leather drawers. Serious protection that looks like fine furniture.',
        'The range includes jewellery safes with marble-finish interiors and safes with a built-in watch winder that keeps automatic watches running while they are locked away.',
      ],
    },
  },
  'jewellery-watch-interiors': {
    ar: {
      heading: 'تجهيزات خزائن المجوهرات والساعات وشنط المجوهرات',
      metaTitle: 'خزائن مجوهرات في قطر — أدراج مخملية وأدراج ساعات وشنط مجوهرات للسفر',
      description:
        'خزائن مجوهرات في قطر بتجهيز داخلي حسب الطلب: أدراج مبطّنة بالمخمل للعقود والخواتم، وأدراج للساعات، وشنط مجوهرات مقسّمة للسفر والأعراس بتصميم خاص من مؤسسة نصر الله التجارية.',
      intro: [
        'المجوهرات تحتاج إلى أكثر من الحماية: أدراج مبطّنة بالمخمل، ومجسّمات للعقود، وبكرات للخواتم، ووسائد للساعات، حتى لا تتلامس القطع أو تُخدش. نصمّم التجهيز الداخلي لكل عميل بحسب مقتنياته، ولا نبدأ العمل إلا بعد موافقته على التصميم.',
        'ولحمل المجوهرات خارج البيت نقدّم شنط مجوهرات مقسّمة من الداخل للسفر والفنادق والحفلات والأعراس، بتصميم خاص لا تجدونه في مكان آخر في قطر.',
      ],
    },
    en: {
      heading: 'Jewellery and Watch Safe Interiors and Travel Cases',
      metaTitle: 'Jewellery Safes in Qatar — Velvet Drawers, Watch Drawers & Travel Cases',
      description:
        'Jewellery safes in Qatar with made-to-order interiors: velvet-lined drawers for necklaces and rings, watch drawers, and divided travel jewellery cases for trips and weddings, designed by Nasrallah Trading Est.',
      intro: [
        'Jewellery needs more than protection: velvet-lined drawers, necklace busts, ring rolls and watch cushions keep pieces from touching or scratching. We design each interior around the owner’s collection and start work only once the design is approved.',
        'For taking jewellery out of the house, our travel cases are divided inside for trips, hotels, parties and weddings, a design of our own you will not find anywhere else in Qatar.',
      ],
    },
  },
  'filing-cabinets': {
    ar: {
      heading: 'خزائن الملفات وخزائن السجلات المقاومة للحريق في قطر',
      metaTitle: 'خزائن ملفات في قطر — خزائن أرشيف حديد ومقاومة للحريق بأدراج',
      description:
        'خزائن ملفات وأرشيف في قطر من UCHIDA وSAKURA وGODREJ: بدرجين أو ثلاثة أو أربعة أو خمسة أدراج، منها خزائن سجلات مقاومة للحريق، للمكاتب والشركات والجهات الحكومية.',
      intro: [
        'لحفظ الملفات والعقود والسجلات بترتيب وأمان. نوفّر خزائن ملفات حديدية من GODREJ بدرجين وثلاثة وخمسة أدراج للعمل اليومي، وخزائن سجلات مقاومة للحريق من UCHIDA وSAKURA للمستندات الأصلية التي لا يمكن تعويضها.',
        'أقفال بمفتاح لكل درج أو بلوحة أرقام رقمية، بألوان تناسب أي مكتب. ونجهّز عروض أسعار شاملة لتجهيز الأرشيف الكامل مع التوصيل المجاني.',
      ],
    },
    en: {
      heading: 'Filing Cabinets and Fire-Resistant Records Cabinets in Qatar',
      metaTitle: 'Filing Cabinets in Qatar — Steel and Fire-Resistant Archive Cabinets',
      description:
        'Filing and archive cabinets in Qatar from UCHIDA, SAKURA and GODREJ: two, three, four or five drawers, including fire-resistant records cabinets, for offices, companies and government bodies.',
      intro: [
        'For keeping files, contracts and records organised and secure. We carry GODREJ steel filing cabinets with two, three and five drawers for everyday work, and fire-resistant records cabinets from UCHIDA and SAKURA for originals that cannot be replaced.',
        'Choose a key lock on every drawer or a digital keypad, in finishes that suit any office. We prepare full quotations for equipping a whole archive, with free delivery.',
      ],
    },
  },
  'key-cabinets': {
    ar: {
      heading: 'خزائن المفاتيح في قطر',
      metaTitle: 'خزائن مفاتيح في قطر — خزائن مفاتيح للفنادق والشركات والمجمعات',
      description:
        'خزائن مفاتيح UCHIDA في قطر تُعلّق على الجدار، بخطافات مرقّمة وميداليات ملوّنة وقفل بمفتاح، للفنادق والمجمعات السكنية والشركات ومعارض السيارات.',
      intro: [
        'حين تكثر المفاتيح يصبح ترتيبها ضرورة: خزانة المفاتيح تمنح كل مفتاح خطافًا مرقّمًا، وتُقفل بمفتاح حتى لا يصل إليها إلا المسؤول.',
        'نوفّر خزائن مفاتيح UCHIDA بخطافات مرقّمة وميداليات صفراء وزرقاء لتصنيف المفاتيح حسب المبنى أو الطابق أو السيارة، مناسبة للفنادق والمجمعات السكنية والشركات ومعارض السيارات وفرق الصيانة.',
      ],
    },
    en: {
      heading: 'Key Cabinets in Qatar',
      metaTitle: 'Key Cabinets in Qatar — Key Cabinets for Hotels, Companies and Compounds',
      description:
        'UCHIDA wall-mounted key cabinets in Qatar with numbered hooks, colour-coded tags and a key lock, for hotels, residential compounds, companies and car showrooms.',
      intro: [
        'When keys multiply, order becomes essential: a key cabinet gives every key a numbered hook and locks so only the person in charge can reach them.',
        'We carry UCHIDA key cabinets with numbered hooks and yellow and blue tags to sort keys by building, floor or vehicle, ideal for hotels, compounds, companies, car showrooms and maintenance teams.',
      ],
    },
  },
  'cash-boxes': {
    ar: {
      heading: 'صناديق النقود في قطر',
      metaTitle: 'صناديق نقود في قطر — صندوق كاش للمحلات والكاشير بقفل رقمي',
      description:
        'صناديق نقود BSM في قطر للمحلات والكاشير: بأقفال رقمية دوّارة أو بلوحة أرقام، ودرج نقود أمامي، ومنها صندوق محمول بمقبض لنقل النقود.',
      intro: [
        'لحفظ نقود اليوم عند الكاونتر أو نقلها بأمان. صناديق النقود أصغر من الخزنة وأسرع في الاستخدام، وتُقفل بأقفال رقمية دوّارة أو بلوحة أرقام مع مفتاح احتياطي.',
        'نوفّر صناديق BSM بدرج أمامي للكاشير، وصندوقًا رقميًا يُفتح درجه بزر، وصندوقًا محمولًا بمقبض لنقل النقود بين المحل والمكتب والبنك.',
      ],
    },
    en: {
      heading: 'Cash Boxes in Qatar',
      metaTitle: 'Cash Boxes in Qatar — Cashier Cash Boxes with Combination and Digital Locks',
      description:
        'BSM cash boxes in Qatar for shops and cashiers: combination dials or a digital keypad, a front cash drawer, and a portable box with a carry handle for moving cash.',
      intro: [
        'For keeping the day’s cash at the counter or moving it safely. Cash boxes are smaller and quicker to use than a safe, locked by combination dials or a keypad with a backup key.',
        'We carry BSM cash boxes with a front cashier drawer, a digital box whose drawer opens at the push of a button, and a portable box with a handle for carrying cash between the shop, the office and the bank.',
      ],
    },
  },
  'steel-cupboards': {
    ar: {
      heading: 'الخزائن الحديدية والمكتبية في قطر',
      metaTitle: 'خزائن حديدية ودواليب مكتبية في قطر — خزانة حديد GODREJ',
      description:
        'خزائن حديدية ودواليب مكتبية من GODREJ في قطر: بباب واحد أو بابين أو بأبواب زجاجية، لحفظ الملفات والأدوات في المكاتب والمدارس والمؤسسات، مع توصيل مجاني.',
      intro: [
        'الخزانة الحديدية أساس كل مكتب منظّم: تحفظ الملفات والأدوات والمستلزمات خلف باب متين يُقفل. نوفّرها من GODREJ، الاسم الذي يصنع الخزائن في الهند منذ عام 1902.',
        'بباب واحد أو بابين، وبأبواب زجاجية لعرض المحتوى، وخزانة مكتبية خشبية بواجهة زجاجية، بألوان الرمادي والبيج والأبيض.',
      ],
    },
    en: {
      heading: 'Steel and Office Cupboards in Qatar',
      metaTitle: 'Steel Cupboards and Office Cabinets in Qatar — GODREJ',
      description:
        'GODREJ steel cupboards and office cabinets in Qatar: one door, two doors or glass doors, for files and supplies in offices, schools and institutions, with free delivery.',
      intro: [
        'A steel cupboard is the backbone of an organised office: files, tools and supplies behind a sturdy locking door. We carry them from GODREJ, a name that has made safes in India since 1902.',
        'Choose one or two doors, glass doors to display the contents, or a wooden office cabinet with a glass front, in grey, beige and white.',
      ],
    },
  },
  'steel-lockers': {
    ar: {
      heading: 'اللوكرات الحديدية في قطر',
      metaTitle: 'لوكرات حديد في قطر — لوكرات موظفين ومدارس وأندية GODREJ',
      description:
        'لوكرات حديدية من GODREJ في قطر: من باب واحد إلى ستة أبواب في العمود، للموظفين والمدارس والأندية والمصانع، بألوان الأسود والبيج والأبيض العاجي، مع توصيل مجاني.',
      intro: [
        'اللوكر يمنح كل موظف أو طالب مكانًا خاصًا بقفل لحفظ أغراضه. نوفّر لوكرات GODREJ الحديدية من باب واحد لتعليق الملابس وزيّ العمل إلى ستة أبواب للهواتف والمحافظ.',
        'أخبرونا بعدد الأشخاص وما يحتاج كل منهم إلى حفظه، ونرشّح لكم التوزيع المناسب مع عرض سعر شامل.',
      ],
    },
    en: {
      heading: 'Steel Lockers in Qatar',
      metaTitle: 'Steel Lockers in Qatar — Staff, School and Club Lockers by GODREJ',
      description:
        'GODREJ steel lockers in Qatar: one to six doors per column, for staff, schools, clubs and factories, in black, beige and off-white, with free delivery.',
      intro: [
        'A locker gives every employee or student a private, lockable place for their belongings. We carry GODREJ steel lockers from a single door for hanging uniforms to six doors for phones and wallets.',
        'Tell us how many people need lockers and what each needs to store, and we will recommend the right layout with a full quotation.',
      ],
    },
  },
  'home-safes': {
    ar: {
      heading: 'خزائن منزلية في قطر',
      metaTitle: 'خزنة منزلية في قطر — خزائن منزلية صغيرة وخزائن نقود ومجوهرات للبيت',
      description:
        'خزائن منزلية في قطر: خزنة منزلية صغيرة لخزانة الملابس، وخزائن نقود منزلية بالبصمة والأرقام، وخزائن مجوهرات للبيت، من UCHIDA وSAKURA وKUROGANE، مع توصيل مجاني.',
      intro: [
        'الخزنة المنزلية تحفظ النقود والذهب وجوازات السفر والعقود في مكان واحد آمن داخل البيت. جمعنا هنا الخزائن التي تناسب البيوت: خزائن صغيرة توضع داخل خزانة الملابس، وخزائن نقود بالبصمة والأرقام والمفتاح، وخزائن للمجوهرات والساعات بتجهيز داخلي.',
        'لاختيار المقاس والقفل المناسبين اقرؤوا دليلنا «كيف تختارون خزنة البيت المناسبة»، أو زورونا في معرضنا بسوق العين لتجربة الأقفال بأنفسكم. التوصيل مجاني داخل قطر.',
      ],
    },
    en: {
      heading: 'Home Safes in Qatar',
      metaTitle: 'Home Safes in Qatar — Small Home Safes, Cash and Jewellery Safes for the House',
      description:
        'Home safes in Qatar: small safes for a wardrobe, cash safes with fingerprint and keypad locks, and jewellery safes for the house, from UCHIDA, SAKURA and KUROGANE, with free delivery.',
      intro: [
        'A home safe keeps cash, gold, passports and contracts together in one secure place at home. Here are the safes that suit a house: compact safes that fit inside a wardrobe, cash safes with fingerprint, keypad and key locks, and jewellery and watch safes with fitted interiors.',
        'To choose the right size and lock, read our guide on choosing a home safe, or visit our Souq Al Ein showroom to try the locks yourself. Delivery is free across Qatar.',
      ],
    },
  },
}

/** Landing pages that gather products from several categories, keyed like categoryContent. */
export const collections: Record<string, { label: Record<Locale, string>; products: string[]; article?: string }> = {
  'home-safes': {
    label: { ar: 'الخزائن المنزلية', en: 'Home Safes' },
    article: 'choosing-a-home-safe',
    products: [
      'uchida-compact-digital-safe',
      'sakura-compact-digital-hotel-safe',
      'uchida-fingerprint-safe',
      'sakura-fingerprint-safe',
      'sakura-multi-lock-safe',
      'kurogane-compact-wing-safe',
      'uchida-black-digital-safe',
      'uchida-white-safe-with-wooden-shelves',
      'sakura-floral-safe',
      'uchida-red-safe-with-leather-drawers',
      'marble-interior-jewellery-safe',
      'watch-winder-safe',
    ],
  },
}

/** A category's landing page, or the filtered catalogue for a category without one. */
export const categoryHref = (locale: Locale, slug: string) =>
  categoryContent[slug] ? href(locale, `categories/${slug}`) : `${href(locale, 'products')}?category=${slug}`
