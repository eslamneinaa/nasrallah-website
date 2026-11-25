import type { Locale } from './types'

export type ShowcaseVideoItem = {
  id: string
  url: string
  poster: string
  /** Landscape films run full width; portrait clips sit three to a row. */
  orientation: 'landscape' | 'portrait'
  /** ISO 8601, for VideoObject. */
  duration: string
  uploadDate: string
  title: Record<Locale, string>
  description: Record<Locale, string>
  /** Accessible description of what the clip shows (music only, no speech). */
  label: Record<Locale, string>
  /** Where to go next: a product or category path, without the locale. */
  link: { path: string; label: Record<Locale, string> }
  /** Optional paragraphs on the video's own page, describing only what the video shows. */
  about?: Record<Locale, string[]>
  /** Category slugs the video shows, linked under those paragraphs. */
  sections?: string[]
}

/** ISO 8601 duration (PT1M18S) in seconds, for the video sitemap. */
export const durationSeconds = (iso: string) => {
  const [, m = '0', s = '0'] = iso.match(/^PT(?:(\d+)M)?(?:(\d+)S)?$/) ?? []
  return Number(m) * 60 + Number(s)
}

/** Every showroom video, newest and widest first. Source files live in /video (not in git). */
export const showcaseVideos: ShowcaseVideoItem[] = [
  {
    id: 'showroom-tour',
    url: '/videos/nasrallah-showroom-tour.mp4',
    poster: '/videos/nasrallah-showroom-tour.webp',
    orientation: 'landscape',
    duration: 'PT1M18S',
    uploadDate: '2026-11-14',
    title: { ar: 'جولة داخل معرضنا في سوق العين', en: 'Inside our showroom at Souq Al Ein' },
    description: {
      ar: 'تجوّلوا بين أقسام المعرض كما هي على الطبيعة: الخزائن المقاومة للحريق من UCHIDA وSAKURA، وخزائن الإيداع والمكاتب، والخزائن الفاخرة، وخزائن الملفات، والكبائن المعدنية واللوكرات.',
      en: 'Walk through the showroom as it really is: UCHIDA and SAKURA fire-resistant safes, deposit and office safes, luxury safes, filing cabinets, steel cabinets and lockers.',
    },
    label: {
      ar: 'فيديو: جولة داخل معرض مؤسسة نصر الله التجارية بين أقسام الخزائن المقاومة للحريق وخزائن الإيداع والخزائن الفاخرة وخزائن الملفات والكبائن المعدنية واللوكرات',
      en: 'Video: a walk through the Nasrallah Trading Est showroom, past fire-resistant, deposit, luxury and filing safes, steel cabinets and lockers',
    },
    link: { path: 'contact', label: { ar: 'موقع المعرض وساعات العمل', en: 'Showroom location and hours' } },
    about: {
      ar: [
        'تبدأ الجولة من واجهة معرض مؤسسة نصر الله التجارية في سوق العين على طريق سلوى بالدوحة، ثم تدخل المعرض بين صفوف الخزائن كما هي على الطبيعة. أول ما تمرّ عليه قسم الخزائن المقاومة للحريق بأحجام وألوان وأقفال مختلفة، ثم خزائن الإيداع والمكاتب، والخزائن بتصاميم فاخرة.',
        'بعدها تعرض خزائن الملفات المقاومة للحريق، وخزائن الملفات المعدنية، والكبائن المعدنية واللوكرات، ومنها كبائن بأبواب زجاجية، ثم تعود إلى واجهة المعرض. كل ما يظهر في الفيديو تجدونه في أقسام الموقع أدناه، ويمكنكم زيارة المعرض لمشاهدته على الطبيعة.',
      ],
      en: [
        'The tour starts at the front of the Nasrallah Trading Est showroom in Souq Al Ein on Salwa Road, Doha, then goes inside among the rows of safes as they really are. First comes the fire-resistant safe section, in different sizes, colours and locks, then deposit and office safes, and safes with luxury designs.',
        'It goes on to fire-resistant filing cabinets, steel filing cabinets, and steel cabinets and lockers, including glass-door cabinets, then returns to the showroom front. Everything in the video is in the sections of the site below, and you can visit the showroom to see it in person.',
      ],
    },
    sections: ['fire-resistant-safes', 'deposit-safes', 'luxury-safes', 'filing-cabinets', 'steel-cupboards', 'steel-lockers'],
  },
  {
    id: 'collection-tour',
    url: '/videos/nasrallah-collection-tour.mp4',
    poster: '/videos/nasrallah-collection-tour.webp',
    orientation: 'landscape',
    duration: 'PT2M11S',
    uploadDate: '2026-11-12',
    title: { ar: 'تشكيلتنا كلها في جولة واحدة', en: 'Our whole range in one tour' },
    description: {
      ar: 'من خزائن المجوهرات والساعات وشنط السفر، إلى الخزائن الفاخرة والمقاومة للحريق وخزائن الإيداع وخزائن الملفات والكبائن المعدنية.',
      en: 'From jewellery and watch safes and travel cases to luxury and fire-resistant safes, deposit safes, filing cabinets and steel cupboards.',
    },
    label: {
      ar: 'فيديو: جولة في تشكيلة مؤسسة نصر الله التجارية، من واجهة المعرض إلى خزائن المجوهرات والساعات وشنطها، والخزائن الفاخرة والمقاومة للحريق، وخزائن الإيداع والملفات، والكبائن المعدنية',
      en: 'Video: a tour of the Nasrallah Trading Est range, from the showroom front to jewellery and watch safes and cases, luxury and fire-resistant safes, deposit and filing safes, and steel cupboards',
    },
    link: { path: 'products', label: { ar: 'تصفّح كل المنتجات', en: 'Browse all products' } },
    about: {
      ar: [
        'تبدأ الجولة من واجهة معرض مؤسسة نصر الله التجارية في سوق العين على طريق سلوى بالدوحة، ثم تمرّ على أقسام التشكيلة قسمًا بعد قسم: خزائن المجوهرات والساعات بأدراجها المبطّنة، وشنط المجوهرات، والخزائن بتصاميم فاخرة، ثم الخزائن المقاومة للحريق بأحجام وألوان وأقفال مختلفة.',
        'بعدها تعرض خزائن الإيداع وصناديق النقود، وخزائن الملفات المقاومة للحريق، والكبائن المعدنية من خزائن ملفات حديدية ولوكرات ودواليب، وتنتهي عند واجهة المعرض. كل ما يظهر في الفيديو تجدونه في أقسام الموقع أدناه، ويمكنكم مشاهدته على الطبيعة في المعرض.',
      ],
      en: [
        'The tour starts at the front of the Nasrallah Trading Est showroom in Souq Al Ein on Salwa Road, Doha, then moves through the range section by section: jewellery and watch safes with their lined drawers, jewellery cases, safes with luxury designs, then fire-resistant safes in different sizes, colours and locks.',
        'It goes on to deposit safes and cash boxes, fire-resistant filing cabinets, and steel cabinets, from steel filing cabinets to lockers and cupboards, and ends back at the showroom front. Everything in the video is in the sections of the site below, and you can see it in person at the showroom.',
      ],
    },
    sections: ['jewellery-watch-interiors', 'luxury-safes', 'fire-resistant-safes', 'deposit-safes', 'cash-boxes', 'filing-cabinets', 'steel-cupboards', 'steel-lockers'],
  },
  {
    id: 'uchida-red-safe-fathers-watch',
    url: '/videos/uchida-red-safe-fathers-watch.mp4',
    poster: '/videos/uchida-red-safe-fathers-watch.webp',
    orientation: 'portrait',
    duration: 'PT46S',
    uploadDate: '2026-11-25',
    title: { ar: 'ساعة الأب في خزنة UCHIDA الحمراء', en: 'A father’s watch in the red UCHIDA safe' },
    description: {
      ar: 'خزنة UCHIDA لدى نصر الله، احفظ ذكرياتك لتتوارثها الأجيال.',
      en: 'An UCHIDA safe at Nasrallah: keep your memories to pass down through the generations.',
    },
    label: {
      ar: 'فيديو: صقر في الصحراء وأب يضع ساعة في يد ابنه عند الغروب، ثم بعد سنوات يضع الابن الساعة وصورتهما في خزنة UCHIDA الحمراء بقفل رقمي ومقبض دائري ويغلقها',
      en: 'Video: a falcon in the desert and a father placing a watch in his son’s hand at sunset, then years later the son puts the watch and their photo in the red UCHIDA safe with a digital keypad and round handle, and closes it',
    },
    link: { path: 'products/uchida-red-safe-with-leather-drawers', label: { ar: 'تفاصيل الخزنة', en: 'See the safe' } },
    about: {
      ar: [
        'يبدأ الفيديو في الصحراء عند الغروب: صقر على وكره، وأب يجلس مع ابنه على السجاد أمام موقد الجمر ودلّة القهوة، ثم يضع الأب في يد ابنه ساعة، وتظهر صورة تجمعهما في تلك اللحظة.',
        'بعد سنوات، في غرفة تطل على المدينة ليلًا، يمسك الابن الصورة والساعة نفسها، ثم يضعهما في خزنة UCHIDA الحمراء بقفل رقمي ومقبض دائري ويغلق بابها. تفاصيل الخزنة في صفحة المنتج، ويمكنكم مشاهدتها على الطبيعة في معرضنا بسوق العين.',
      ],
      en: [
        'The video opens in the desert at sunset: a falcon on its perch, and a father sitting with his son on a rug by the coal burner and coffee pot. The father places a watch in his son’s hand, and a photo of the two of them captures the moment.',
        'Years later, in a room overlooking the city at night, the son holds the same photo and watch, then puts them in the red UCHIDA safe with a digital keypad and round handle, and closes its door. The safe’s details are on the product page, and you can see it in person at our showroom in Souq Al Ein.',
      ],
    },
    sections: ['luxury-safes'],
  },
  {
    id: 'uchida-key-hotel-safe',
    url: '/videos/uchida-key-hotel-safe.mp4',
    poster: '/videos/uchida-key-hotel-safe.webp',
    orientation: 'portrait',
    duration: 'PT30S',
    uploadDate: '2026-11-22',
    title: { ar: 'خزنة UCHIDA الفندقية في غرفة الفندق', en: 'UCHIDA hotel safe in a hotel room' },
    description: {
      ar: 'خزنة فندقية مقاومة للحريق بقفل مفتاح، تدخل في خزانة الغرفة وتتسع للمحفظة والهاتف والمجوهرات.',
      en: 'A fire-resistant hotel safe with a key lock that fits in the room’s wardrobe and holds a wallet, a phone and jewellery.',
    },
    label: {
      ar: 'فيديو: ممر فندق وغرفة تطل على المدينة ليلًا، ثم خزنة UCHIDA الفندقية بلون البيج داخل خزانة الغرفة، وقفل المفتاح عن قرب، ثم تُفتح وبداخلها محفظة وعقد ذهبي وهاتف',
      en: 'Video: a hotel corridor and a room overlooking the city at night, then the beige UCHIDA hotel safe in the room’s wardrobe, its key lock up close, and the safe opened to show a wallet, a gold necklace and a phone',
    },
    link: { path: 'products/uchida-key-hotel-safe', label: { ar: 'تفاصيل الخزنة', en: 'See the safe' } },
  },
  {
    id: 'uchida-pb-104-black',
    url: '/videos/uchida-pb-104-black-safe.mp4',
    poster: '/videos/uchida-pb-104-black-safe.webp',
    orientation: 'portrait',
    duration: 'PT30S',
    uploadDate: '2026-11-21',
    title: { ar: 'خزنة UCHIDA موديل PB-104 باللون الأسود', en: 'Black UCHIDA PB-104 safe' },
    description: {
      ar: 'خزنة مقاومة للحريق لمدة ساعتين بقفل رقمي ومفتاح، ونظرة داخل آلية القفل، ثم ثلاثة أرفف حديدية ودرج سفلي بقفل.',
      en: 'A two-hour fire-resistant safe with keypad and key, a look inside the locking mechanism, then three steel shelves and a lockable bottom drawer.',
    },
    label: {
      ar: 'فيديو: خزنة UCHIDA موديل PB-104 باللون الأسود، بقفل رقمي ومقبض وقفل مفتاح، ونظرة داخل آلية القفل، ثم تُفتح على ثلاثة أرفف ودرج سفلي بقفل',
      en: 'Video: the black UCHIDA PB-104 safe, with its keypad, handle and key lock, a look inside the locking mechanism, then the door opening onto three shelves and a lockable bottom drawer',
    },
    link: { path: 'products/uchida-black-safe-with-steel-shelves', label: { ar: 'تفاصيل الخزنة', en: 'See the safe' } },
  },
  {
    id: 'travel-jewellery-case',
    url: '/videos/travel-jewellery-case.mp4',
    poster: '/videos/travel-jewellery-case.webp',
    orientation: 'portrait',
    duration: 'PT30S',
    uploadDate: '2026-11-17',
    title: { ar: 'شنطة مجوهرات للسفر', en: 'Travel jewellery case' },
    description: {
      ar: 'شنطة سوداء بملمس جلد التمساح وأقفال ذهبية، مقسّمة من الداخل بخانات مبطّنة بالمخمل للعقود والأساور والأقراط والخواتم.',
      en: 'A black crocodile-texture case with gold-tone clasps, divided inside into velvet-lined compartments for necklaces, bangles, earrings and rings.',
    },
    label: {
      ar: 'فيديو: فتح شنطة مجوهرات سوداء بملمس جلد التمساح وأقفال ذهبية، ثم وضع عقدين من الذهب وأساور وأقراط في خاناتها المبطّنة بالمخمل البني',
      en: 'Video: a black crocodile-texture jewellery case with gold-tone clasps opened, then two gold necklaces, bangles and earrings placed in its brown velvet compartments',
    },
    link: { path: 'products/travel-jewellery-cases', label: { ar: 'تفاصيل الشنطة', en: 'See the case' } },
  },
  {
    id: 'uchida-jewellery-safe',
    url: '/videos/uchida-jewellery-safe.mp4',
    poster: '/videos/uchida-jewellery-safe.webp',
    orientation: 'portrait',
    duration: 'PT30S',
    uploadDate: '2026-11-12',
    title: { ar: 'خزنة UCHIDA للمجوهرات والساعات', en: 'UCHIDA jewellery and watch safe' },
    description: {
      ar: 'تُفتح بالقفل الرقمي، ثم تُسحب أدراجها المبطّنة بالمخمل البيج للعقود والخواتم والأقراط والساعات.',
      en: 'Opened by keypad, then its beige velvet drawers pull out for necklaces, rings, earrings and watches.',
    },
    label: {
      ar: 'فيديو: فتح خزنة UCHIDA البيضاء العاجية بالقفل الرقمي، ثم سحب أدراجها المبطّنة بالمخمل البيج وفيها عقود وأساور وخواتم وأقراط وساعات',
      en: 'Video: the off-white UCHIDA safe opened by keypad, then its beige velvet drawers pulled out to show necklaces, bracelets, rings, earrings and watches',
    },
    link: { path: 'products/uchida-fire-resistant-jewellery-and-watch-safe', label: { ar: 'تفاصيل الخزنة', en: 'See the safe' } },
  },
  {
    id: 'jewellery-safe-oak',
    url: '/videos/jewellery-safe-oak.mp4',
    poster: '/videos/jewellery-safe-oak.webp',
    orientation: 'portrait',
    duration: 'PT31S',
    uploadDate: '2026-11-03',
    title: { ar: 'أدراج من خشب البلوط للمجوهرات', en: 'Oak drawers for jewellery' },
    description: {
      ar: 'أدراج بلون البلوط الرمادي بمقابض نحاسية، مبطّنة بالمخمل الأزرق للأساور والساعات والخواتم.',
      en: 'Grey-oak drawers with brass handles, lined in blue velvet for bangles, watches and rings.',
    },
    label: {
      ar: 'فيديو: خزنة مجوهرات بأدراج من خشب البلوط الرمادي في معرضنا، مبطّنة بالمخمل الأزرق وتحمل الأساور والساعات والخواتم وطقمًا من الألماس',
      en: 'Video: a grey-oak jewellery safe in our showroom, its blue velvet drawers holding bangles, watches, rings and a diamond set',
    },
    link: { path: 'products/wood-and-brass-drawer-interior', label: { ar: 'تفاصيل الأدراج', en: 'See the drawers' } },
  },
  {
    id: 'jewellery-safe-green',
    url: '/videos/jewellery-safe-green.mp4',
    poster: '/videos/jewellery-safe-green.webp',
    orientation: 'portrait',
    duration: 'PT33S',
    uploadDate: '2026-11-03',
    title: { ar: 'أدراج جلدية خضراء للمجوهرات', en: 'Green leather jewellery drawers' },
    description: {
      ar: 'خزنة UCHIDA تُفتح بالمفتاح والرقم السري، وبداخلها أدراج من الجلد الأخضر للعقود والساعات والأساور والخواتم.',
      en: 'An UCHIDA safe opened with key and code, revealing green leather drawers for necklaces, watches, bangles and rings.',
    },
    label: {
      ar: 'فيديو: خزنة UCHIDA تُفتح بالمفتاح والرقم السري، وبداخلها أدراج من الجلد الأخضر تضم مجسّم عقد وساعات وأساور وخواتم',
      en: 'Video: an UCHIDA safe opened with key and code, revealing green leather drawers with a necklace bust, watches, bangles and rings',
    },
    link: { path: 'categories/jewellery-watch-interiors', label: { ar: 'خزائن المجوهرات والساعات', en: 'Jewellery and watch safes' } },
  },
]
