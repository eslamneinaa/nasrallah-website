/**
 * The showroom catalog bundled with the site, built from the company's own
 * product photography (public/products). It is shown while the Sanity dataset
 * has no products; as soon as the first product is published in Sanity (and
 * the site rebuilds), the Sanity catalog replaces it.
 */
import type { PortableTextBlock } from 'next-sanity'
import type { Category, Product, SpecRow } from './types'

const para = (text: string, key: string): PortableTextBlock => ({
  _type: 'block',
  _key: key,
  style: 'normal',
  markDefs: [],
  children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
})

const showroomNote = {
  en: 'Visit our showroom in Souq Al Ein, Salwa Road, to see it in person, or request a quotation and our team will advise on the size and configuration that suit you.',
  ar: 'تفضلوا بزيارة معرضنا في سوق العين على طريق سلوى للمعاينة، أو اطلبوا عرض سعر ليرشدكم فريقنا إلى المقاس والتجهيز الأنسب لكم.',
}

/** One lead paragraph per language, followed by the shared showroom note. */
const desc = (en: string, ar: string) => ({
  en: [para(en, 'en0'), para(showroomNote.en, 'en1')],
  ar: [para(ar, 'ar0'), para(showroomNote.ar, 'ar1')],
})

const spec = (label_en: string, label_ar: string, value_en: string, value_ar: string): SpecRow => ({
  label: { en: label_en, ar: label_ar },
  value: { en: value_en, ar: value_ar },
})

const brandSpec = (name: string) => spec('Brand', 'العلامة التجارية', name, name)
const brand = brandSpec('UCHIDA')
const steel = spec('Material', 'الخامة', 'Steel', 'حديد (صلب)')

const img = (name: string, width: number, height: number, alt: string) => ({ url: `/products/${name}.webp`, alt, width, height })

const fire: Category = { _id: 'cat-fire', slug: 'fire-resistant-safes', title: { en: 'Fire-Resistant & Cash Safes', ar: 'خزائن النقود والمقاومة للحريق' } }
const filing: Category = { _id: 'cat-filing', slug: 'filing-cabinets', title: { en: 'Filing Cabinets', ar: 'خزائن الملفات' } }
const cupboards: Category = { _id: 'cat-steel', slug: 'steel-cupboards', title: { en: 'Steel & Office Cupboards', ar: 'الخزائن الحديدية والمكتبية' } }
const lockers: Category = { _id: 'cat-lockers', slug: 'steel-lockers', title: { en: 'Steel Lockers', ar: 'اللوكرات الحديدية' } }
const luxury: Category = { _id: 'cat-luxury', slug: 'luxury-safes', title: { en: 'Luxury Safes', ar: 'الخزائن الفاخرة' } }
const interiors: Category = { _id: 'cat-interiors', slug: 'jewellery-watch-interiors', title: { en: 'Jewellery & Watch Interiors', ar: 'تجهيزات المجوهرات والساعات' } }

export const sampleCategories: Category[] = [fire, filing, cupboards, lockers, luxury, interiors]

export const sampleProducts: Product[] = [
  {
    _id: 'p1',
    slug: 'uchida-ubo-145e-fire-resistant-safe',
    name: { en: 'UCHIDA UBO-145E Fire-Resistant Safe', ar: 'خزنة UCHIDA المقاومة للحريق UBO-145E' },
    category: fire,
    shortDesc: {
      en: 'A full-height UCHIDA safe with an electronic keypad, key override and three heavy-duty hinges, for offices, banks and institutions.',
      ar: 'خزنة UCHIDA بارتفاع كامل، بقفل إلكتروني رقمي مع مفتاح احتياطي وثلاث مفصلات متينة، للمكاتب والبنوك والمؤسسات.',
    },
    fullDesc: desc(
      'The UBO-145E is a full-height UCHIDA safe built to protect cash, records and valuables against fire and unauthorised access. Its electronic keypad is backed by a mechanical key, and the door is carried on three heavy-duty external hinges.',
      'خزنة UBO-145E من UCHIDA بارتفاع كامل، صُمّمت لحماية النقد والسجلات والمقتنيات الثمينة من الحريق والوصول غير المصرّح به. يعمل قفلها الإلكتروني الرقمي مع مفتاح ميكانيكي احتياطي، ويُحمل بابها على ثلاث مفصلات خارجية متينة.',
    ),
    images: [img('uchida-digital-safe', 1086, 1448, 'UCHIDA UBO-145E fire-resistant safe in light grey with an electronic keypad')],
    specTable: [
      brand,
      spec('Model', 'الطراز', 'UBO-145E', 'UBO-145E'),
      spec('Lock', 'القفل', 'Electronic keypad with key override', 'قفل إلكتروني رقمي مع مفتاح احتياطي'),
      spec('Hinges', 'المفصلات', '3 heavy-duty external hinges', '3 مفصلات خارجية متينة'),
      spec('Finish', 'اللون', 'Light grey', 'رمادي فاتح'),
    ],
    isFeatured: true,
    order: 1,
  },
  {
    _id: 'p2',
    slug: 'uchida-four-drawer-filing-cabinet',
    name: { en: 'UCHIDA Four-Drawer Filing Cabinet', ar: 'خزانة ملفات UCHIDA بأربعة أدراج' },
    category: filing,
    shortDesc: {
      en: 'Four individually locking drawers in a black steel body, for the secure storage of files and documents.',
      ar: 'أربعة أدراج بأقفال مستقلة في هيكل فولاذي أسود، لحفظ الملفات والمستندات بأمان.',
    },
    fullDesc: desc(
      'A four-drawer UCHIDA filing cabinet for ministries, banks and companies that keep important records on paper. Each drawer has its own key lock and a label holder, so files stay organised and protected.',
      'خزانة ملفات من UCHIDA بأربعة أدراج، للوزارات والبنوك والشركات التي تحتفظ بسجلاتها الورقية المهمة. لكل درج قفل مستقل بمفتاح وحامل لبطاقة التعريف، لتبقى الملفات منظّمة ومحمية.',
    ),
    images: [img('uchida-filing-cabinet', 1024, 1536, 'UCHIDA four-drawer filing cabinet in black steel')],
    specTable: [
      brand,
      spec('Drawers', 'الأدراج', '4, each with its own key lock', '4 أدراج، لكل منها قفل مستقل'),
      spec('Finish', 'اللون', 'Black textured steel', 'فولاذ أسود محبّب'),
      spec('For', 'الاستخدام', 'Files and documents', 'الملفات والمستندات'),
    ],
    isFeatured: true,
    order: 2,
  },
  {
    _id: 'p3',
    slug: 'uchida-fluted-safe',
    name: { en: 'UCHIDA Fluted Safe', ar: 'خزنة UCHIDA ذات الواجهة المضلّعة' },
    category: luxury,
    shortDesc: {
      en: 'A contemporary charcoal safe with a fluted front and the Nasrallah brass plate, made for the home or the executive office.',
      ar: 'خزنة عصرية بلون فحمي وواجهة مضلّعة تحمل لوحة نصر الله النحاسية، تليق بالمنزل ومكاتب الإدارة العليا.',
    },
    fullDesc: desc(
      'Security does not have to look industrial. This UCHIDA safe pairs a fluted charcoal front with the Nasrallah brass plate, so it sits as comfortably in a majlis or an executive office as it does in a dressing room.',
      'الأمان لا يعني مظهرًا صناعيًا. تجمع هذه الخزنة من UCHIDA بين واجهة مضلّعة بلون فحمي ولوحة نصر الله النحاسية، فتنسجم في المجلس ومكتب الإدارة وغرفة الملابس على حدّ سواء.',
    ),
    images: [img('uchida-fluted-safe', 1254, 1254, 'UCHIDA safe with a fluted charcoal front and a brass Nasrallah plate')],
    specTable: [
      brand,
      spec('Front', 'الواجهة', 'Fluted charcoal panel', 'واجهة مضلّعة بلون فحمي'),
      spec('Detail', 'التفاصيل', 'Nasrallah brass plate', 'لوحة نصر الله النحاسية'),
    ],
    isFeatured: true,
    order: 3,
  },
  {
    _id: 'p4',
    slug: 'uchida-walnut-finish-safe',
    name: { en: 'UCHIDA Walnut-Finish Safe', ar: 'خزنة UCHIDA بلمسة خشب الجوز' },
    category: luxury,
    shortDesc: {
      en: 'A black steel safe with a rich walnut-grain door, for homes and offices where the safe is part of the décor.',
      ar: 'خزنة بهيكل فولاذي أسود وباب بنقشة خشب الجوز، للمنازل والمكاتب التي تكون فيها الخزنة جزءًا من الديكور.',
    },
    fullDesc: desc(
      'Finished in a warm walnut grain and framed in black steel, this UCHIDA safe brings the look of fine furniture to serious protection. The door carries the UCHIDA and Nasrallah plates.',
      'بباب بنقشة خشب الجوز الدافئة وإطار من الفولاذ الأسود، تمنح هذه الخزنة من UCHIDA الحماية الجادة مظهر الأثاث الراقي، ويحمل بابها لوحتي UCHIDA ونصر الله.',
    ),
    images: [img('uchida-walnut-safe', 1254, 1254, 'UCHIDA safe with a walnut wood-grain door and black steel frame')],
    specTable: [
      brand,
      spec('Door', 'الباب', 'Walnut wood grain', 'نقشة خشب الجوز'),
      spec('Frame', 'الإطار', 'Black steel', 'فولاذ أسود'),
    ],
    isFeatured: true,
    order: 4,
  },
  {
    _id: 'p5',
    slug: 'jewellery-display-drawers',
    name: { en: 'Jewellery Display Drawers', ar: 'أدراج عرض المجوهرات' },
    category: interiors,
    shortDesc: {
      en: 'Velvet-lined drawers with a necklace bust, bangle stand and ring rolls, so every piece has its place.',
      ar: 'أدراج مبطّنة بالمخمل مع مجسّم للعقود وحامل للأساور وبكرات للخواتم، ليكون لكل قطعة مكانها.',
    },
    fullDesc: desc(
      'Fine jewellery deserves more than a box. These drawers are lined in deep blue velvet and fitted with a necklace bust, a bangle stand, ring rolls and compartments for earrings, keeping each piece protected, separated and easy to see.',
      'المجوهرات الثمينة تستحق أكثر من علبة. هذه الأدراج مبطّنة بمخمل أزرق داكن ومجهّزة بمجسّم للعقود وحامل للأساور وبكرات للخواتم وخانات للأقراط، لتبقى كل قطعة محمية ومنفصلة وسهلة الرؤية.',
    ),
    images: [
      img('interior-necklace', 1341, 1173, 'Jewellery drawer with a velvet necklace bust and bangle stand'),
      img('interior-rings', 1348, 1167, 'Ring drawer with velvet ring rolls and earring compartments'),
    ],
    video: {
      url: '/videos/jewellery-safe-green.mp4',
      poster: '/videos/jewellery-safe-green.webp',
      label: {
        en: 'Video: an UCHIDA safe opened with key and code, revealing green leather drawers with a necklace bust, watches, bangles and rings',
        ar: 'فيديو: خزنة UCHIDA تُفتح بالمفتاح والرقم السري، وبداخلها أدراج من الجلد الأخضر تضم مجسّم عقد وساعات وأساور وخواتم',
      },
    },
    specTable: [
      spec('Lining', 'البطانة', 'Blue velvet', 'مخمل أزرق'),
      spec('Fittings', 'التجهيزات', 'Necklace bust, bangle stand, ring rolls, earring compartments', 'مجسّم عقود، حامل أساور، بكرات خواتم، خانات أقراط'),
      spec('Front', 'الواجهة', 'Wood-grain finish', 'نقشة خشبية'),
    ],
    isFeatured: true,
    order: 5,
  },
  {
    _id: 'p6',
    slug: 'watch-drawers',
    name: { en: 'Watch Drawers', ar: 'أدراج الساعات' },
    category: interiors,
    shortDesc: {
      en: 'Velvet watch rolls and cushions in fitted drawers, keeping a collection protected and on display.',
      ar: 'بكرات ووسائد مخملية للساعات في أدراج مجهّزة، تحفظ مجموعتكم وتعرضها بأناقة.',
    },
    fullDesc: desc(
      'Built for collectors, these drawers hold each watch on its own velvet roll or cushion, in blue or black lining, behind wood-finish fronts with brass handles.',
      'صُمّمت لهواة اقتناء الساعات، إذ تحمل كل ساعة على بكرة أو وسادة مخملية خاصة بها، ببطانة زرقاء أو سوداء، خلف واجهات بنقشة خشبية ومقابض نحاسية.',
    ),
    images: [
      img('interior-watch-rolls', 1127, 1396, 'Watch drawer with nine blue velvet rolls and brass handles'),
      img('interior-watch-pillows', 1086, 1448, 'Beech drawer with black velvet watch cushions'),
    ],
    specTable: [
      spec('Holders', 'الحوامل', 'Velvet rolls or cushions', 'بكرات أو وسائد مخملية'),
      spec('Lining', 'البطانة', 'Blue or black velvet', 'مخمل أزرق أو أسود'),
      spec('Handles', 'المقابض', 'Brass', 'نحاس'),
    ],
    isFeatured: true,
    order: 6,
  },
  {
    _id: 'p7',
    slug: 'wood-and-brass-drawer-interior',
    name: { en: 'Wood & Brass Drawer Interior', ar: 'تجهيز داخلي بأدراج خشبية ومقابض نحاسية' },
    category: interiors,
    shortDesc: {
      en: 'Fitted drawer stacks in oak or beech with brushed-brass handles, turning the inside of a safe into an organised vault.',
      ar: 'أدراج مجهّزة من خشب البلوط أو الزان بمقابض نحاسية مصقولة، تحوّل داخل الخزنة إلى خزينة منظّمة.',
    },
    fullDesc: desc(
      'Inside the door, the safe becomes furniture. Our fitted interiors stack wood-finish drawers with brushed-brass handles on smooth full-extension runners, with velvet-lined trays and a lockable lower compartment available.',
      'خلف الباب تتحوّل الخزنة إلى قطعة أثاث. تضمّ تجهيزاتنا الداخلية أدراجًا بلمسة خشبية ومقابض نحاسية مصقولة تنزلق بسلاسة على مجارٍ ممتدة بالكامل، مع صوانٍ مبطّنة بالمخمل ودرج سفلي بقفل عند الطلب.',
    ),
    images: [
      img('interior-oak-drawers', 1120, 1404, 'Seven oak drawers with brass handles inside a black safe'),
      img('interior-beech-velvet', 1086, 1448, 'Beech drawer with black velvet dividers on full-extension runners'),
    ],
    video: {
      url: '/videos/jewellery-safe-oak.mp4',
      poster: '/videos/jewellery-safe-oak.webp',
      label: {
        en: 'Video: grey-oak drawers with brass handles opening to blue velvet trays of bangles, watches, rings and a diamond set',
        ar: 'فيديو: أدراج من خشب البلوط الرمادي بمقابض نحاسية تنفتح على صوانٍ من المخمل الأزرق بها أساور وساعات وخواتم وطقم ألماس',
      },
    },
    specTable: [
      spec('Finish', 'التشطيب', 'Oak or beech wood grain', 'نقشة خشب البلوط أو الزان'),
      spec('Handles', 'المقابض', 'Brushed brass', 'نحاس مصقول'),
      spec('Runners', 'المجاري', 'Full-extension ball-bearing slides', 'مجارٍ كروية ممتدة بالكامل'),
      spec('Lining', 'البطانة', 'Black or blue velvet', 'مخمل أسود أو أزرق'),
    ],
    isFeatured: false,
    order: 7,
  },
  {
    _id: 'p8',
    slug: 'sakura-multi-lock-safe',
    name: { en: 'SAKURA Multi-Lock Safe', ar: 'خزنة SAKURA متعددة الأقفال' },
    category: fire,
    shortDesc: {
      en: 'A SAKURA steel safe combining a fingerprint scanner, a digital keypad and a key lock, for cash and valuables at home or in the office.',
      ar: 'خزنة حديدية من SAKURA تجمع بين قارئ بصمة ولوحة أرقام وقفل بمفتاح، لحفظ النقود والمقتنيات الثمينة في البيت أو المكتب.',
    },
    fullDesc: desc(
      'The SAKURA Multi-Lock Safe brings three ways of locking together on one control panel: a fingerprint scanner, a digital keypad and a mechanical key. Its heavy door hangs on two external hinges, and the safe stands on a raised base.',
      'تجمع خزنة SAKURA متعددة الأقفال ثلاث وسائل للقفل في لوحة تحكم واحدة: قارئ بصمة، ولوحة أرقام رقمية، ومفتاح ميكانيكي. ويُحمل بابها المتين على مفصلتين خارجيتين، وتقف الخزنة على قاعدة مرتفعة.',
    ),
    images: [
      img('sakura-multi-lock-safe', 1086, 1448, 'Grey SAKURA multi-lock steel safe with a fingerprint and keypad panel'),
      img('sakura-multi-lock-safe-lock', 1536, 1024, 'Close-up of the fingerprint scanner, keypad and key lock'),
    ],
    specTable: [
      brandSpec('SAKURA'),
      spec('Lock', 'القفل', 'Fingerprint scanner, digital keypad and key', 'قارئ بصمة ولوحة أرقام ومفتاح'),
      spec('Hinges', 'المفصلات', 'Two external hinges', 'مفصلتان خارجيتان'),
      spec('Finish', 'اللون', 'Grey', 'رمادي'),
    ],
    isFeatured: false,
    order: 8,
  },
  {
    _id: 'p24',
    slug: 'sakura-ons-fe-fingerprint-safe',
    name: { en: 'SAKURA ONS-FE Fingerprint Safe', ar: 'خزنة SAKURA بالبصمة ONS-FE' },
    category: fire,
    shortDesc: {
      en: 'A black SAKURA steel safe with a vertical handle that combines a digital keypad and a fingerprint scanner.',
      ar: 'خزنة حديدية سوداء من SAKURA بمقبض عمودي يجمع بين لوحة أرقام رقمية وقارئ بصمة.',
    },
    fullDesc: desc(
      'The ONS-FE puts a digital keypad and a fingerprint scanner into one vertical handle on a clean black door, so the safe opens quickly for the people you trust and stays shut for everyone else.',
      'تجمع خزنة ONS-FE لوحة أرقام رقمية وقارئ بصمة في مقبض عمودي واحد على باب أسود أنيق، فتُفتح بسرعة لمن تثقون بهم وتبقى مغلقة أمام غيرهم.',
    ),
    images: [img('sakura-ons-fe-safe', 1086, 1448, 'Black SAKURA ONS-FE steel safe with a vertical keypad and fingerprint handle')],
    specTable: [
      brandSpec('SAKURA'),
      spec('Model', 'الطراز', 'ONS-FE', 'ONS-FE'),
      spec('Lock', 'القفل', 'Digital keypad and fingerprint scanner', 'لوحة أرقام رقمية وقارئ بصمة'),
      spec('Finish', 'اللون', 'Black', 'أسود'),
    ],
    isFeatured: false,
    order: 9,
  },
  {
    _id: 'p9',
    slug: 'godrej-two-door-steel-cupboard',
    name: { en: 'GODREJ Two-Door Steel Cupboard', ar: 'خزانة حديدية ببابين GODREJ' },
    category: cupboards,
    shortDesc: {
      en: 'A full-height two-door steel cupboard with a recessed lock, for files, stationery and records in offices and homes.',
      ar: 'خزانة حديدية بارتفاع كامل وبابين وقفل غاطس، لحفظ الملفات والقرطاسية والسجلات في المكاتب والبيوت.',
    },
    fullDesc: desc(
      'This GODREJ steel cupboard pairs two full-height doors with a flush, recessed lock, keeping the front clean and the contents secure. Available in white and beige.',
      'تجمع هذه الخزانة الحديدية من GODREJ بين بابين بارتفاع كامل وقفل غاطس مستوٍ مع الواجهة، لواجهة أنيقة ومحتويات آمنة. متوفرة باللونين الأبيض والبيج.',
    ),
    images: [
      img('godrej-two-door-cupboard-white', 1024, 1536, 'White two-door GODREJ steel cupboard with a recessed lock'),
      img('godrej-two-door-cupboard-beige', 1024, 1536, 'Beige two-door GODREJ steel cupboard with a white frame'),
    ],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'Two, full height', 'بابان بارتفاع كامل'),
      spec('Lock', 'القفل', 'Recessed lock', 'قفل غاطس'),
      spec('Colours', 'الألوان', 'White, beige', 'أبيض، بيج'),
    ],
    isFeatured: false,
    order: 10,
  },
  {
    _id: 'p10',
    slug: 'godrej-two-door-steel-cupboard-with-handle',
    name: { en: 'GODREJ Two-Door Steel Cupboard with Handle', ar: 'خزانة حديدية ببابين ومقبض GODREJ' },
    category: cupboards,
    shortDesc: {
      en: 'A tall two-door steel cupboard in warm beige with a chrome handle, for orderly storage in offices.',
      ar: 'خزانة حديدية طويلة ببابين بلون بيج دافئ ومقبض كروم، لتخزين منظّم في المكاتب.',
    },
    fullDesc: desc(
      'Two full-height steel doors open on a chrome handle, giving easy everyday access to files, supplies and equipment.',
      'بابان حديديان بارتفاع كامل يُفتحان بمقبض من الكروم، لوصول يومي سهل إلى الملفات والمستلزمات والأدوات.',
    ),
    images: [img('godrej-two-door-cupboard-handle-beige', 1024, 1536, 'Beige two-door GODREJ steel cupboard with a chrome handle')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'Two, full height', 'بابان بارتفاع كامل'),
      spec('Handle', 'المقبض', 'Chrome', 'كروم'),
      spec('Colour', 'اللون', 'Beige', 'بيج'),
    ],
    isFeatured: false,
    order: 11,
  },
  {
    _id: 'p11',
    slug: 'godrej-panelled-steel-cupboard',
    name: { en: 'GODREJ Panelled Steel Cupboard', ar: 'خزانة حديدية بأبواب مزخرفة GODREJ' },
    category: cupboards,
    shortDesc: {
      en: 'A light-grey two-door steel cupboard with raised panel doors and a recessed lock.',
      ar: 'خزانة حديدية رمادية فاتحة ببابين ذوي ألواح بارزة وقفل غاطس.',
    },
    fullDesc: desc(
      'Raised panels give the doors of this GODREJ steel cupboard extra stiffness and a tailored look, with a recessed lock set between them.',
      'تمنح الألواح البارزة بابَي هذه الخزانة الحديدية من GODREJ متانة إضافية ومظهرًا أنيقًا، مع قفل غاطس بينهما.',
    ),
    images: [img('godrej-panelled-cupboard-grey', 1024, 1536, 'Light-grey GODREJ steel cupboard with two panelled doors')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'Two, panelled', 'بابان بألواح بارزة'),
      spec('Lock', 'القفل', 'Recessed lock', 'قفل غاطس'),
      spec('Colour', 'اللون', 'Light grey', 'رمادي فاتح'),
    ],
    isFeatured: false,
    order: 12,
  },
  {
    _id: 'p12',
    slug: 'godrej-single-door-steel-cupboard',
    name: { en: 'GODREJ Single-Door Steel Cupboard', ar: 'خزانة حديدية بباب واحد GODREJ' },
    category: cupboards,
    shortDesc: {
      en: 'A slim full-height steel cupboard with one door and a recessed lock, for tight spaces.',
      ar: 'خزانة حديدية نحيفة بارتفاع كامل وباب واحد وقفل غاطس، للمساحات الضيقة.',
    },
    fullDesc: desc(
      'Where floor space is short, this single-door GODREJ steel cupboard gives full-height lockable storage. Available in grey and beige.',
      'حين تضيق المساحة، توفّر هذه الخزانة الحديدية من GODREJ بباب واحد تخزينًا بارتفاع كامل بقفل. متوفرة باللونين الرمادي والبيج.',
    ),
    images: [
      img('godrej-single-door-cupboard-grey', 1024, 1536, 'Grey single-door GODREJ steel cupboard'),
      img('godrej-single-door-cupboard-beige', 1024, 1536, 'Beige single-door GODREJ steel cupboard'),
    ],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'One, full height', 'باب واحد بارتفاع كامل'),
      spec('Lock', 'القفل', 'Recessed lock', 'قفل غاطس'),
      spec('Colours', 'الألوان', 'Grey, beige', 'رمادي، بيج'),
    ],
    isFeatured: false,
    order: 13,
  },
  {
    _id: 'p13',
    slug: 'godrej-glass-door-steel-cabinet',
    name: { en: 'GODREJ Glass-Door Steel Cabinet', ar: 'خزانة حديدية بأبواب زجاجية GODREJ' },
    category: cupboards,
    shortDesc: {
      en: 'A white steel cabinet with two glass doors and shelves, so files and books stay visible and protected.',
      ar: 'خزانة حديدية بيضاء ببابين زجاجيين ورفوف، لتبقى الملفات والكتب ظاهرة ومحمية.',
    },
    fullDesc: desc(
      'Glass-panelled doors set in a white steel frame show what is on the shelves while keeping dust out, with a lock between the doors.',
      'أبواب بألواح زجاجية في إطار حديدي أبيض تُظهر ما على الرفوف وتحميه من الغبار، مع قفل بين البابين.',
    ),
    images: [img('godrej-glass-door-cabinet', 1024, 1536, 'White GODREJ steel cabinet with two glass doors and shelves')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'Two, glass panelled', 'بابان بألواح زجاجية'),
      spec('Interior', 'الداخل', 'Shelves', 'رفوف'),
      spec('Colour', 'اللون', 'White', 'أبيض'),
    ],
    isFeatured: false,
    order: 14,
  },
  {
    _id: 'p14',
    slug: 'godrej-wood-and-glass-storage-cabinet',
    name: { en: 'GODREJ Wood & Glass Storage Cabinet', ar: 'خزانة مكتبية خشبية بواجهة زجاجية GODREJ' },
    category: cupboards,
    shortDesc: {
      en: 'An office storage cabinet in honey oak, with glass doors above and two closed doors below.',
      ar: 'خزانة تخزين مكتبية بلون خشب البلوط العسلي، بأبواب زجاجية في الأعلى وبابين مغلقين في الأسفل.',
    },
    fullDesc: desc(
      'Display what you want to show behind the upper glass doors and keep the rest out of sight below. The honey-oak finish and chrome handles suit managers’ offices and meeting rooms.',
      'اعرضوا ما تريدون إظهاره خلف الأبواب الزجاجية العلوية، واحفظوا الباقي بعيدًا عن الأنظار في الأسفل. يناسب لون البلوط العسلي والمقابض الكروم مكاتب المديرين وغرف الاجتماعات.',
    ),
    images: [img('godrej-wood-glass-cabinet', 1024, 1536, 'Honey-oak GODREJ storage cabinet with glass doors above and wooden doors below')],
    specTable: [
      brandSpec('GODREJ'),
      spec('Finish', 'التشطيب', 'Honey oak', 'خشب بلوط عسلي'),
      spec('Doors', 'الأبواب', 'Two glass doors above, two wooden doors below', 'بابان زجاجيان في الأعلى وبابان خشبيان في الأسفل'),
      spec('Handles', 'المقابض', 'Chrome', 'كروم'),
    ],
    isFeatured: false,
    order: 15,
  },
  {
    _id: 'p15',
    slug: 'godrej-two-tier-steel-locker',
    name: { en: 'GODREJ Two-Tier Steel Locker', ar: 'لوكر حديدي بطابقين GODREJ' },
    category: lockers,
    shortDesc: {
      en: 'A two-door steel locker with ventilation louvres, for staff changing rooms, schools and gyms.',
      ar: 'لوكر حديدي ببابين وفتحات تهوية، لغرف تبديل الموظفين والمدارس والنوادي الرياضية.',
    },
    fullDesc: desc(
      'Two lockable compartments stacked in one column, each with ventilation louvres, in charcoal doors on a cream frame.',
      'خانتان بقفل في عمود واحد، لكل منهما فتحات تهوية، بأبواب فحمية اللون على إطار كريمي.',
    ),
    images: [img('godrej-two-tier-locker', 1024, 1536, 'Two-tier GODREJ steel locker with charcoal doors and a cream frame')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'Two, each with its own lock', 'خانتان، لكل منهما قفل'),
      spec('Ventilation', 'التهوية', 'Louvred doors', 'فتحات تهوية في الأبواب'),
      spec('Colours', 'الألوان', 'Charcoal doors, cream frame', 'أبواب فحمية، إطار كريمي'),
    ],
    isFeatured: false,
    order: 16,
  },
  {
    _id: 'p16',
    slug: 'godrej-four-tier-steel-locker',
    name: { en: 'GODREJ Four-Tier Steel Locker', ar: 'لوكر حديدي بأربعة أبواب GODREJ' },
    category: lockers,
    shortDesc: {
      en: 'A four-door steel locker with ventilation louvres, giving four people their own space in one column.',
      ar: 'لوكر حديدي بأربعة أبواب وفتحات تهوية، يمنح أربعة أشخاص خانة خاصة لكل منهم في عمود واحد.',
    },
    fullDesc: desc(
      'Four lockable compartments in a single column make the most of floor space in changing rooms and staff areas.',
      'أربع خانات بقفل في عمود واحد تستفيد من المساحة إلى أقصى حد في غرف التبديل ومناطق الموظفين.',
    ),
    images: [img('godrej-four-tier-locker', 1024, 1536, 'Four-tier GODREJ steel locker with charcoal doors and a cream frame')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'Four, each with its own lock', 'أربع خانات، لكل منها قفل'),
      spec('Ventilation', 'التهوية', 'Louvred doors', 'فتحات تهوية في الأبواب'),
      spec('Colours', 'الألوان', 'Charcoal doors, cream frame', 'أبواب فحمية، إطار كريمي'),
    ],
    isFeatured: false,
    order: 17,
  },
  {
    _id: 'p17',
    slug: 'godrej-three-door-steel-locker',
    name: { en: 'GODREJ Three-Door Steel Locker', ar: 'لوكر حديدي بثلاثة أبواب GODREJ' },
    category: lockers,
    shortDesc: {
      en: 'A cream three-door steel locker with ventilation louvres and a key lock on every door.',
      ar: 'لوكر حديدي كريمي بثلاثة أبواب وفتحات تهوية وقفل بمفتاح لكل باب.',
    },
    fullDesc: desc(
      'Three generous compartments, each behind its own louvred door with a key lock, for offices, schools and clinics.',
      'ثلاث خانات واسعة، لكل منها باب بفتحات تهوية وقفل بمفتاح، للمكاتب والمدارس والعيادات.',
    ),
    images: [img('godrej-three-door-locker', 1024, 1536, 'Cream three-door GODREJ steel locker')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'Three', 'ثلاث خانات'),
      spec('Lock', 'القفل', 'Key lock on each door', 'قفل بمفتاح لكل باب'),
      spec('Colour', 'اللون', 'Cream', 'كريمي'),
    ],
    isFeatured: false,
    order: 18,
  },
  {
    _id: 'p18',
    slug: 'godrej-six-door-steel-locker',
    name: { en: 'GODREJ Six-Door Steel Locker', ar: 'لوكر حديدي بستة أبواب GODREJ' },
    category: lockers,
    shortDesc: {
      en: 'A six-door steel locker column in beige or off-white, for keeping personal belongings apart in busy workplaces.',
      ar: 'عمود لوكر حديدي بستة أبواب باللون البيج أو الأبيض العاجي، لفصل المتعلقات الشخصية في أماكن العمل المزدحمة.',
    },
    fullDesc: desc(
      'Six compartments, each behind its own door with a pull handle, fit in the footprint of a single cupboard.',
      'ست خانات، لكل منها باب بمقبض، في مساحة خزانة واحدة.',
    ),
    images: [
      img('godrej-six-door-locker', 1024, 1536, 'Beige six-door GODREJ steel locker column'),
      img('godrej-six-door-locker-off-white', 1024, 1536, 'Off-white six-door GODREJ steel locker column'),
    ],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'Six', 'ست خانات'),
      spec('Colours', 'الألوان', 'Beige, off-white', 'بيج، أبيض عاجي'),
    ],
    isFeatured: false,
    order: 19,
  },
  {
    _id: 'p19',
    slug: 'godrej-single-steel-locker',
    name: { en: 'GODREJ Single Steel Locker', ar: 'لوكر حديدي بباب واحد GODREJ' },
    category: lockers,
    shortDesc: {
      en: 'A full-height single steel locker with a louvred charcoal door on a cream frame.',
      ar: 'لوكر حديدي بباب واحد بارتفاع كامل، بباب فحمي بفتحات تهوية على إطار كريمي.',
    },
    fullDesc: desc(
      'One tall compartment with room for clothes and bags, ventilated through louvres at the top of the door.',
      'خانة واحدة طويلة تتسع للملابس والحقائب، مع فتحات تهوية أعلى الباب.',
    ),
    images: [img('godrej-single-locker', 1024, 1536, 'Single GODREJ steel locker with a louvred charcoal door')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'One, full height', 'خانة واحدة بارتفاع كامل'),
      spec('Ventilation', 'التهوية', 'Louvred door', 'فتحات تهوية في الباب'),
      spec('Colours', 'الألوان', 'Charcoal door, cream frame', 'باب فحمي، إطار كريمي'),
    ],
    isFeatured: false,
    order: 20,
  },
  {
    _id: 'p21',
    slug: 'godrej-two-drawer-filing-cabinet',
    name: { en: 'GODREJ Two-Drawer Filing Cabinet', ar: 'خزانة ملفات بدرجين GODREJ' },
    category: filing,
    shortDesc: {
      en: 'A low two-drawer steel filing cabinet with a lock, for hanging files beside a desk.',
      ar: 'خزانة ملفات حديدية منخفضة بدرجين وقفل، للملفات المعلّقة بجانب المكتب.',
    },
    fullDesc: desc(
      'Two deep drawers in cream sit in a light-grey steel frame, with a lock at the top to secure both.',
      'درجان عميقان باللون الكريمي في إطار حديدي رمادي فاتح، مع قفل في الأعلى يؤمّن الدرجين معًا.',
    ),
    images: [img('godrej-two-drawer-filing-cabinet', 1162, 1354, 'Two-drawer GODREJ steel filing cabinet with cream drawers')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Drawers', 'الأدراج', 'Two', 'درجان'),
      spec('Lock', 'القفل', 'Top lock', 'قفل علوي'),
      spec('Colours', 'الألوان', 'Cream drawers, light-grey frame', 'أدراج كريمية، إطار رمادي فاتح'),
    ],
    isFeatured: false,
    order: 22,
  },
  {
    _id: 'p22',
    slug: 'godrej-three-drawer-filing-cabinet',
    name: { en: 'GODREJ Three-Drawer Filing Cabinet', ar: 'خزانة ملفات بثلاثة أدراج GODREJ' },
    category: filing,
    shortDesc: {
      en: 'A three-drawer steel filing cabinet with a lock, for department files and records.',
      ar: 'خزانة ملفات حديدية بثلاثة أدراج وقفل، لملفات الأقسام والسجلات.',
    },
    fullDesc: desc(
      'Three full-width drawers in cream, set in a light-grey steel frame and secured by a lock at the top.',
      'ثلاثة أدراج بعرض كامل باللون الكريمي في إطار حديدي رمادي فاتح، يؤمّنها قفل في الأعلى.',
    ),
    images: [img('godrej-three-drawer-filing-cabinet', 1024, 1536, 'Three-drawer GODREJ steel filing cabinet with cream drawers')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Drawers', 'الأدراج', 'Three', 'ثلاثة أدراج'),
      spec('Lock', 'القفل', 'Top lock', 'قفل علوي'),
      spec('Colours', 'الألوان', 'Cream drawers, light-grey frame', 'أدراج كريمية، إطار رمادي فاتح'),
    ],
    isFeatured: false,
    order: 23,
  },
  {
    _id: 'p23',
    slug: 'godrej-five-drawer-filing-cabinet',
    name: { en: 'GODREJ Five-Drawer Filing Cabinet', ar: 'خزانة ملفات بخمسة أدراج GODREJ' },
    category: filing,
    shortDesc: {
      en: 'A tall five-drawer steel filing cabinet with a lock, in grey or black, for large archives.',
      ar: 'خزانة ملفات حديدية طويلة بخمسة أدراج وقفل، باللون الرمادي أو الأسود، للأرشيف الكبير.',
    },
    fullDesc: desc(
      'Five drawers in one tall steel cabinet hold a department’s archive in the footprint of a single cupboard, secured by a lock at the top.',
      'خمسة أدراج في خزانة حديدية واحدة طويلة تستوعب أرشيف قسم كامل في مساحة خزانة واحدة، ويؤمّنها قفل في الأعلى.',
    ),
    images: [
      img('godrej-five-drawer-filing-cabinet-grey', 1024, 1536, 'Light-grey five-drawer GODREJ steel filing cabinet'),
      img('godrej-five-drawer-filing-cabinet-black', 1024, 1536, 'Black five-drawer GODREJ steel filing cabinet'),
    ],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Drawers', 'الأدراج', 'Five', 'خمسة أدراج'),
      spec('Lock', 'القفل', 'Top lock', 'قفل علوي'),
      spec('Colours', 'الألوان', 'Light grey, black', 'رمادي فاتح، أسود'),
    ],
    isFeatured: false,
    order: 24,
  },
]
