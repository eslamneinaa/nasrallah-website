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
  /** Search phrases for the page's keywords and its VideoObject. */
  keywords?: Record<Locale, string>
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
      ar: 'جولة في أقسام المعرض كما هي على الطبيعة: خزائن UCHIDA وSAKURA المقاومة للحريق، وخزائن الإيداع والمكاتب، والخزائن الفاخرة، وخزائن الملفات واللوكرات.',
      en: 'Walk through the showroom as it really is: UCHIDA and SAKURA fire-resistant safes, deposit and office safes, luxury safes, filing cabinets and lockers.',
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
        'الفيديو يختصر زيارة كاملة للمعرض، لكنه لا يغني عن الرؤية على الطبيعة: في المعرض تفتحون الأبواب، وتجرّبون الأقفال الرقمية والبصمة والقفل الدوّار، وتقارنون المقاسات والتشطيبات جنبًا إلى جنب، ويساعدكم فريقنا في اختيار ما يناسب ما ستحفظونه.',
        'أحضروا معكم مقاسات المكان الذي ستوضع فيه الخزنة، وصورة له إن أمكن، ليساعدكم فريقنا في اختيار المقاس والقفل المناسبين، ويخبركم بما يلزم للتوصيل إن كانت الخزنة ثقيلة.',
        'معرضنا في سوق العين على طريق سلوى بالدوحة مفتوح من السبت إلى الخميس، صباحًا ومساءً، والجمعة إجازة. ويمكنكم طلب عرض سعر من الموقع أو على واتساب، والتوصيل مجاني داخل قطر.',
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
        'استعملوا هذا الفيديو لتعرفوا الأقسام قبل الزيارة: الخزائن المقاومة للحريق، والخزائن الفاخرة، وخزائن الإيداع والفنادق، وتجهيزات المجوهرات والساعات، وخزائن الملفات والمفاتيح، والدواليب الحديدية واللوكرات. ولكل قسم صفحته على الموقع بأسعار الموديلات ومواصفاتها.',
        'وإن كنتم لا تعرفون من أين تبدؤون، فابدؤوا بما ستحفظونه: النقود والمستندات تقودكم إلى الخزائن المقاومة للحريق، والمجوهرات إلى خزائن المجوهرات وتجهيزاتها، وملفات العمل إلى خزائن الملفات والدواليب الحديدية، وأغراض الموظفين إلى اللوكرات.',
        'معرضنا في سوق العين على طريق سلوى بالدوحة مفتوح من السبت إلى الخميس، صباحًا ومساءً، والجمعة إجازة. ويمكنكم طلب عرض سعر من الموقع أو على واتساب، والتوصيل مجاني داخل قطر.',
      ],
      en: [
        'The tour starts at the front of the Nasrallah Trading Est showroom in Souq Al Ein on Salwa Road, Doha, then moves through the range section by section: jewellery and watch safes with their lined drawers, jewellery cases, safes with luxury designs, then fire-resistant safes in different sizes, colours and locks.',
        'It goes on to deposit safes and cash boxes, fire-resistant filing cabinets, and steel cabinets, from steel filing cabinets to lockers and cupboards, and ends back at the showroom front. Everything in the video is in the sections of the site below, and you can see it in person at the showroom.',
      ],
    },
    sections: ['jewellery-watch-interiors', 'luxury-safes', 'fire-resistant-safes', 'deposit-safes', 'cash-boxes', 'filing-cabinets', 'steel-cupboards', 'steel-lockers'],
  },
  {
    id: 'uchida-strength-builds',
    url: '/videos/uchida-strength-builds.mp4',
    poster: '/videos/uchida-strength-builds.webp',
    orientation: 'portrait',
    duration: 'PT31S',
    uploadDate: '2026-11-26',
    title: { ar: 'القوة تبني', en: 'Strength Builds' },
    description: {
      ar: 'خزنة UCHIDA مقاومة للحريق لمدة ساعتين موديل BK-172KE: تجوري حديد بقفل رقمي ومفتاح لحفظ النقود والذهب والمستندات في البيت والمكتب في قطر.',
      en: 'The UCHIDA BK-172KE fire-resistant safe, rated for two hours: a steel safe with keypad and key for cash, gold and documents at home or in the office in Qatar.',
    },
    label: {
      ar: 'فيديو: خزنة حديدية قديمة يأكلها الصدأ، ثم خزنة سوداء حديثة تُفتح بلوحة لمس، ثم شرارات وبناء الخزنة طبقة بعد طبقة وتوهّجها كأنها في النار، قبل أن تظهر خزنة UCHIDA بلون البيج بقفل رقمي ومفتاح ومقبض في غرفة جلوس',
      en: 'Video: an old steel safe eaten by rust, a modern black safe opened by touch panel, then sparks, the safe built layer by layer and glowing as if in a fire, before the beige UCHIDA safe with keypad, key and handle appears in a living room',
    },
    link: { path: 'products/uchida-beige-digital-safe', label: { ar: 'تفاصيل الخزنة', en: 'See the safe' } },
    about: {
      ar: [
        '«القوة تبني»: يبدأ الفيديو بخزنة حديدية قديمة يأكلها الصدأ مع الوقت، ثم يد تفتح خزنة سوداء حديثة بلوحة لمس ومقبض. بعدها تتطاير شرارات الحديد المنصهر، ويظهر بناء الخزنة طبقة بعد طبقة، ثم تتوهّج الخزنة كلها كأنها وسط النار، قبل أن تهدأ وتظهر خزنة UCHIDA بلون البيج، ثم حافة بابها عن قرب، ثم في غرفة جلوس.',
        'الخزنة في الفيديو هي خزنة UCHIDA مقاومة للحريق لمدة ساعتين موديل BK-172KE، صنع كوريا، بلون البيج، تُفتح بقفل رقمي بلوحة أرقام وقفل مفتاح ومقبض، وفي داخلها رف ودرج سفلي بقفل. مقاسها الخارجي 58 × 85 × 51.6 سم، ووزنها 144 كجم.',
        'هذه الخزنة لمن يبحث عن خزنة مقاومة للحريق في قطر لحفظ النقود والذهب والمجوهرات والساعات وجوازات السفر والعقود والصكوك والمستندات المهمة، في البيت أو المكتب أو المحل أو الشركة. ويسمّيها الناس في قطر والخليج بأسماء كثيرة: تجوري، تجوري حديد، خزنة حديد، خزنة نقود، خزنة فلوس، خزانة حديدية، خزنة ضد الحريق، خزنة مقاومة للنار، خزنة رقمية، خزنة بيت، خزنة مكتب، وخزنة أوشيدا.',
        'تجدون خزائن UCHIDA المقاومة للحريق، مع خزائن SAKURA وKUROGANE، في معرض مؤسسة نصر الله التجارية في سوق العين على طريق سلوى بالدوحة، الاسم الموثوق في الخزائن منذ عام 1906، والتوصيل مجاني داخل دولة قطر (يخضع للتقييد طبقاً للموقع الداخلي للعميل).',
      ],
      en: [
        '“Strength Builds”: the video opens on an old steel safe eaten by rust over time, then a hand opening a modern black safe with a touch panel and handle. Sparks of molten steel fly, the safe is built layer by layer, then the whole safe glows as if in the heart of a fire, before it cools and the beige UCHIDA safe appears, then its door edge up close, then the safe in a living room.',
        'The safe in the video is the UCHIDA BK-172KE fire-resistant safe, rated for two hours, made in Korea, in beige. It opens with a digital keypad, a key lock and a handle, and inside has a shelf and a lockable bottom drawer. It measures 58 × 85 × 51.6 cm outside and weighs 144 kg.',
        'It is for anyone looking for a fireproof safe in Qatar to keep cash, gold, jewellery, watches, passports, contracts, title deeds and important documents at home, in the office, the shop or the company. People search for it in many ways: fire resistant safe, fireproof safe, fire safe, steel safe, cash safe, money safe, digital safe, home safe, office safe, safe for documents, UCHIDA safe, and in Arabic tajouri.',
        'You will find UCHIDA fire-resistant safes, alongside SAKURA and KUROGANE safes, at the Nasrallah Trading Est showroom in Souq Al Ein on Salwa Road, Doha, a trusted name in safes since 1906, with free delivery within the State of Qatar (subject to restrictions depending on access at the customer’s site).',
      ],
    },
    sections: ['fire-resistant-safes'],
    keywords: {
      ar: 'القوة تبني، خزنة مقاومة للحريق، خزنة ضد الحريق، خزنة مقاومة للنار، تجوري، تجوري حديد، خزنة حديد، خزنة نقود، خزنة فلوس، خزنة رقمية، خزنة بيت، خزنة مكتب، خزنة أوشيدا، UCHIDA، BK-172KE، خزائن في قطر، خزنة الدوحة',
      en: 'Strength Builds, fire resistant safe, fireproof safe, fire safe Qatar, fireproof safe Doha, steel safe, cash safe, money safe, digital safe, home safe, office safe, safe for documents, UCHIDA safe, BK-172KE, safes in Qatar, tajouri',
    },
  },
  {
    id: 'uchida-red-safe-fathers-watch',
    url: '/videos/uchida-red-safe-fathers-watch.mp4',
    poster: '/videos/uchida-red-safe-fathers-watch.webp',
    orientation: 'portrait',
    duration: 'PT46S',
    uploadDate: '2026-11-25',
    title: { ar: 'احفظ ذكرياتك لتتوارثها الأجيال', en: 'Keep your memories to pass down through the generations' },
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
        'الخزنة في هذا الفيديو تجمع الحماية والمظهر: لونها الأحمر يجعلها جزءًا من الغرفة، وأدراجها الجلدية تحفظ الساعات والمجوهرات وما تتوارثه العائلة كلٌّ في مكانه. وتفاصيلها، من مقاومة الحريق إلى الأبعاد، في صفحة المنتج.',
        'وتناسب هذه الخزنة من يريد خزنة صغيرة الحجم بمظهر مميز في غرفة النوم أو غرفة الملابس، لحفظ الساعات والمجوهرات والأوراق المهمة. وإن كنتم تبحثون عن تصاميم أخرى، ففي قسم الخزائن الفاخرة خزائن بتشطيبات خشبية وأبواب مزخرفة ونقشة الرخام. وسعر هذه الخزنة حسب الطلب، فراسلونا على واتساب لمعرفته.',
        'معرضنا في سوق العين على طريق سلوى بالدوحة مفتوح من السبت إلى الخميس، صباحًا ومساءً، والجمعة إجازة. ويمكنكم طلب عرض سعر من الموقع أو على واتساب، والتوصيل مجاني داخل قطر.',
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
    about: {
      ar: [
        'يبدأ الفيديو في ممر فندق مفروش بسجاد أحمر، ثم يقف عند باب غرفة ويدخلها: غرفة نوم واسعة بنافذة كبيرة تطل على أبراج المدينة ليلًا.',
        'داخل خزانة الغرفة تظهر خزنة UCHIDA الفندقية بلون البيج، ثم قفل المفتاح عن قرب، ثم تُفتح الخزنة وبداخلها محفظة وعقد ذهبي وهاتف، ويُغلق بابها من جديد. تفاصيل الخزنة في صفحة المنتج، ويمكنكم مشاهدتها على الطبيعة في معرضنا بسوق العين.',
        'الخزنة الفندقية صغيرة بما يكفي لتوضع داخل خزانة الملابس، وتحفظ جواز السفر والنقود والهاتف والمجوهرات اليومية. وتناسب الفنادق والشقق الفندقية وسكن الموظفين والبيوت، ونجهّز عروض أسعار للكميات لتجهيز مبنى كامل.',
        'وقبل اختيار الخزنة الفندقية قيسوا المكان الذي ستوضع فيه داخل الخزانة أو تحت المكتب، وقارنوه بأبعادها في صفحة المنتج. وفي الفنادق والمباني السكنية يُفضَّل توحيد موديل الخزنة في كل الغرف، ليسهل على الفريق التعامل معها. ولدينا أيضًا خزائن فندقية من SAKURA بقفل رقمي وشاشة لمن يفضّل الرقم السري على المفتاح.',
        'معرضنا في سوق العين على طريق سلوى بالدوحة مفتوح من السبت إلى الخميس، صباحًا ومساءً، والجمعة إجازة. ويمكنكم طلب عرض سعر من الموقع أو على واتساب، والتوصيل مجاني داخل قطر.',
      ],
      en: [
        'The video opens in a hotel corridor laid with red carpet, then stops at a room door and goes in: a large bedroom with a wide window overlooking the city towers at night.',
        'Inside the room’s wardrobe stands the beige UCHIDA hotel safe. Its key lock is shown up close, then the safe opens to show a wallet, a gold necklace and a phone, and its door closes again. The safe’s details are on the product page, and you can see it in person at our showroom in Souq Al Ein.',
      ],
    },
    sections: ['hotel-safes'],
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
    about: {
      ar: [
        'يعرض الفيديو خزنة UCHIDA موديل PB-104 باللون الأسود: تظهر أولًا مغلقة، ثم عن قرب المقبض وقفل المفتاح ولوحة القفل الرقمي، ثم مقطع يكشف آلية القفل من الداخل.',
        'بعدها يُفتح الباب على ثلاثة أرفف ودرج سفلي بقفل، ثم يُغلق من جديد. تفاصيل الخزنة في صفحة المنتج، ويمكنكم مشاهدتها على الطبيعة في معرضنا بسوق العين.',
        'هذه الخزنة من الخزائن الكبيرة المقاومة للحريق، بأرفف حديدية ودرج يُقفل، تناسب البيوت والمكاتب التي تحفظ المستندات والنقود معًا. ولأنها ثقيلة، أخبرونا بالطابق والمدخل قبل الطلب، فتوصيل الخزائن التي يزيد وزنها على 50 كجم يخضع للتقييد طبقًا للموقع الداخلي للعميل.',
        'وقبل الشراء قارنوا الأبعاد الداخلية بما ستحفظونه من ملفات وصناديق، فالأرفف الحديدية تسمح بترتيب المستندات والنقود كلٌّ في رف. ومن يحتاج تجهيزًا للمجوهرات يجد الموديل نفسه بتجهيز داخلي للمجوهرات والساعات. وفي قسم الخزائن المقاومة للحريق جدول مقارنة بين الموديلات بأوزانها وأسعارها.',
        'معرضنا في سوق العين على طريق سلوى بالدوحة مفتوح من السبت إلى الخميس، صباحًا ومساءً، والجمعة إجازة. ويمكنكم طلب عرض سعر من الموقع أو على واتساب.',
      ],
      en: [
        'The video shows the UCHIDA PB-104 safe in black: first closed, then up close its handle, key lock and digital keypad, then a cutaway that reveals the locking mechanism inside.',
        'The door then opens onto three shelves and a lockable bottom drawer, and closes again. The safe’s details are on the product page, and you can see it in person at our showroom in Souq Al Ein.',
      ],
    },
    sections: ['fire-resistant-safes'],
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
    about: {
      ar: [
        'يبدأ الفيديو بشنطة مجوهرات سوداء بملمس جلد التمساح وأقفال ذهبية، تفتح يدٌ أقفالها ثم ترفع غطاءها، فتظهر من الداخل خانات مبطّنة بالمخمل البني.',
        'توضع في الخانات قطعة بعد قطعة: عقدان من الذهب، وأساور، وأقراط، ثم تُغلق الشنطة بأقفالها. تفاصيل الشنطة في صفحة المنتج، ويمكنكم مشاهدتها على الطبيعة في معرضنا بسوق العين.',
        'الشنطة في هذا الفيديو لحمل المجوهرات خارج البيت: في السفر والفنادق والحفلات والأعراس. وهي تصميم خاص من مؤسسة نصر الله التجارية، متوفرة بتشطيب أسود بملمس جلد التمساح أو رمادي فاتح، وتفاصيلها وسعرها في صفحة المنتج.',
        'وقبل السفر رتّبوا الأطقم داخل الشنطة بحسب المناسبة، واكتبوا قائمة بالقطع وراجعوها عند كل انتقال، واحملوا الشنطة معكم ولا تضعوها في الحقائب المشحونة. وعند العودة أعيدوا المجوهرات إلى خزنة البيت، فالشنطة للتنقل وليست بديلًا عن الخزنة. وتجدون نصائح أكثر في مقالنا عن شنط المجوهرات للسفر والأعراس.',
        'معرضنا في سوق العين على طريق سلوى بالدوحة مفتوح من السبت إلى الخميس، صباحًا ومساءً، والجمعة إجازة. ويمكنكم طلب عرض سعر من الموقع أو على واتساب، والتوصيل مجاني داخل قطر.',
      ],
      en: [
        'The video opens on a black crocodile-texture jewellery case with gold-tone clasps. A hand opens the clasps and lifts the lid to show compartments lined in brown velvet.',
        'Piece by piece, two gold necklaces, bangles and earrings go into the compartments, then the case is closed with its clasps. The case’s details are on the product page, and you can see it in person at our showroom in Souq Al Ein.',
      ],
    },
    sections: ['jewellery-watch-interiors'],
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
    about: {
      ar: [
        'يبدأ الفيديو بسيدة ورجل يتجهان إلى خزنة UCHIDA بلون أبيض عاجي، ثم تُفتح بالقفل الرقمي ولوحة الأرقام والمفتاح.',
        'في الداخل أدراج بلون الخشب مبطّنة بالمخمل البيج، تُسحب درجًا بعد درج: عقود على مجسّمات، وأساور، وخواتم وأقراط في خانات صغيرة، ثم درج كامل للساعات، ثم يُغلق باب الخزنة. تفاصيل الخزنة في صفحة المنتج، ويمكنكم مشاهدتها على الطبيعة في معرضنا بسوق العين.',
        'خزنة المجوهرات المجهّزة تحفظ كل قطعة في مكانها، فلا تتلامس القطع ولا تُخدش، وتجدون ما تبحثون عنه بسرعة. ونصمّم التجهيز الداخلي بحسب مقتنيات كل عميل، ولا نبدأ العمل إلا بعد موافقته على التصميم، ولهذا يُسعّر حسب الطلب.',
        'قبل طلب التجهيز الداخلي، اكتبوا قائمة بما تملكونه: عدد العقود والأطقم، والأساور، والخواتم، والأقراط، والساعات، وما تتوقعون إضافته مع السنين. هذه القائمة تحدد عدد الأدراج وتقسيم كل درج، ومقاس الخزنة التي تتسع لها. ويمكنكم مشاهدة أمثلة أخرى من الأدراج والتشطيبات في صفحة «استعرض تشكيلتنا»، أو زيارة المعرض لرؤية الخامات والألوان قبل اعتماد التصميم.',
        'معرضنا في سوق العين على طريق سلوى بالدوحة مفتوح من السبت إلى الخميس، صباحًا ومساءً، والجمعة إجازة. ويمكنكم طلب عرض سعر من الموقع أو على واتساب، والتوصيل مجاني داخل قطر.',
      ],
      en: [
        'The video opens with a woman and a man walking up to an off-white UCHIDA safe, which is opened with its digital keypad and key.',
        'Inside are wood-coloured drawers lined in beige velvet, pulled out one by one: necklaces on busts, bracelets, rings and earrings in small compartments, then a whole drawer of watches, before the safe’s door is closed. The safe’s details are on the product page, and you can see it in person at our showroom in Souq Al Ein.',
      ],
    },
    sections: ['jewellery-watch-interiors'],
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
    about: {
      ar: [
        'يعرض الفيديو خزنة مجوهرات سوداء بابها مفتوح على أدراج بلون البلوط الرمادي ومقابض نحاسية، وأمامها سيدة ورجل يتصفحان الأدراج.',
        'تُسحب الأدراج المبطّنة بالمخمل الأزرق واحدًا بعد الآخر: أساور، وساعات على وسائد، وخواتم وأقراط، وطقم من عقد وأقراط وسوار، ثم تظهر الخزنة مغلقة بقفلها الرقمي. تفاصيل الأدراج في صفحة المنتج، ويمكنكم مشاهدتها على الطبيعة في معرضنا بسوق العين.',
        'الأدراج في هذا الفيديو تُركّب داخل الخزنة لتحوّلها إلى خزانة مجوهرات مرتبة، ويمكن اختيار تقسيم الأدراج بحسب ما تملكونه من عقود وأساور وخواتم وساعات. ونصمّم التجهيز بحسب مقتنيات كل عميل، ويُسعّر حسب الطلب.',
        'قبل طلب التجهيز الداخلي، اكتبوا قائمة بما تملكونه: عدد العقود والأطقم، والأساور، والخواتم، والأقراط، والساعات، وما تتوقعون إضافته مع السنين. هذه القائمة تحدد عدد الأدراج وتقسيم كل درج، ومقاس الخزنة التي تتسع لها. ويمكنكم مشاهدة أمثلة أخرى من الأدراج والتشطيبات في صفحة «استعرض تشكيلتنا»، أو زيارة المعرض لرؤية الخامات والألوان قبل اعتماد التصميم.',
        'معرضنا في سوق العين على طريق سلوى بالدوحة مفتوح من السبت إلى الخميس، صباحًا ومساءً، والجمعة إجازة. ويمكنكم طلب عرض سعر من الموقع أو على واتساب، والتوصيل مجاني داخل قطر.',
      ],
      en: [
        'The video shows a black jewellery safe with its door open on grey-oak drawers with brass handles, as a woman and a man look through them.',
        'The blue velvet drawers are pulled out one after another: bangles, watches on cushions, rings and earrings, and a set of necklace, earrings and bracelet, before the safe is shown closed with its digital lock. The drawers’ details are on the product page, and you can see it in person at our showroom in Souq Al Ein.',
      ],
    },
    sections: ['jewellery-watch-interiors'],
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
    about: {
      ar: [
        'يبدأ الفيديو بسيدة تتجه إلى خزنة UCHIDA سوداء، ثم تفتحها بالمفتاح والرقم السري.',
        'في الداخل أدراج من الجلد الأخضر بمقابض ذهبية، تُسحب واحدًا بعد الآخر: مجسّم عليه عقد وسوار، وساعات، وأساور، وخواتم، ثم تظهر الخزنة كاملة بأدراجها الخضراء ثم مغلقة. تفاصيل خزائن المجوهرات في قسمها على الموقع، ويمكنكم مشاهدتها على الطبيعة في معرضنا بسوق العين.',
        'تُظهر الأدراج في هذا الفيديو كيف يمكن أن يكون التجهيز الداخلي بلون وخامة مختلفين، فلكل عميل ذوقه. ونصمّم التجهيز بحسب المقتنيات والذوق، ولا نبدأ العمل إلا بعد الموافقة على التصميم، ويُسعّر حسب الطلب.',
        'قبل طلب التجهيز الداخلي، اكتبوا قائمة بما تملكونه: عدد العقود والأطقم، والأساور، والخواتم، والأقراط، والساعات، وما تتوقعون إضافته مع السنين. هذه القائمة تحدد عدد الأدراج وتقسيم كل درج، ومقاس الخزنة التي تتسع لها. ويمكنكم مشاهدة أمثلة أخرى من الأدراج والتشطيبات في صفحة «استعرض تشكيلتنا»، أو زيارة المعرض لرؤية الخامات والألوان قبل اعتماد التصميم.',
        'معرضنا في سوق العين على طريق سلوى بالدوحة مفتوح من السبت إلى الخميس، صباحًا ومساءً، والجمعة إجازة. ويمكنكم طلب عرض سعر من الموقع أو على واتساب، والتوصيل مجاني داخل قطر.',
      ],
      en: [
        'The video opens with a woman walking up to a black UCHIDA safe and opening it with its key and code.',
        'Inside are green leather drawers with gold handles, pulled out one after another: a bust with a necklace and bracelet, watches, bangles and rings. The safe is then shown whole with its green drawers, and closed. Jewellery safes are in their section of the site, and you can see it in person at our showroom in Souq Al Ein.',
      ],
    },
    sections: ['jewellery-watch-interiors'],
  },
]
