/**
 * The showroom catalog bundled with the site, built from the company's own
 * product photography (public/products). It is shown while the Sanity dataset
 * has no products; as soon as the first product is published in Sanity (and
 * the site rebuilds), the Sanity catalog replaces it.
 */
import type { PortableTextBlock } from 'next-sanity'
import type { Category, Product, SpecRow } from './types'
import { withDetails } from './product-details'

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

const img = (name: string, width: number, height: number, alt: string, altAr: string) => ({
  url: `/products/${name}.webp`,
  alt,
  altAr,
  width,
  height,
})

const fire: Category = { _id: 'cat-fire', slug: 'fire-resistant-safes', title: { en: 'Fire-Resistant & Cash Safes', ar: 'خزائن النقود والمقاومة للحريق' } }
const filing: Category = { _id: 'cat-filing', slug: 'filing-cabinets', title: { en: 'Filing Cabinets', ar: 'خزائن الملفات' } }
const cupboards: Category = { _id: 'cat-steel', slug: 'steel-cupboards', title: { en: 'Steel & Office Cupboards', ar: 'الخزائن الحديدية والمكتبية' } }
const lockers: Category = { _id: 'cat-lockers', slug: 'steel-lockers', title: { en: 'Steel Lockers', ar: 'اللوكرات الحديدية' } }
const luxury: Category = { _id: 'cat-luxury', slug: 'luxury-safes', title: { en: 'Luxury Safes', ar: 'الخزائن الفاخرة' } }
const interiors: Category = { _id: 'cat-interiors', slug: 'jewellery-watch-interiors', title: { en: 'Jewellery & Watch Interiors', ar: 'تجهيزات المجوهرات والساعات' } }
const deposit: Category = { _id: 'cat-deposit', slug: 'deposit-safes', title: { en: 'Deposit Safes', ar: 'خزائن الإيداع' } }
const keyCabinets: Category = { _id: 'cat-keys', slug: 'key-cabinets', title: { en: 'Key Cabinets', ar: 'خزائن المفاتيح' } }
const cashBoxes: Category = { _id: 'cat-cash-boxes', slug: 'cash-boxes', title: { en: 'Cash Boxes', ar: 'صناديق النقود' } }
const hotel: Category = { _id: 'cat-hotel', slug: 'hotel-safes', title: { en: 'Hotel Safes', ar: 'خزائن الفنادق' } }

export const sampleCategories: Category[] = [fire, deposit, hotel, luxury, interiors, filing, keyCabinets, cashBoxes, cupboards, lockers]

const catalogue: Product[] = [
  {
    _id: 'p1',
    slug: 'uchida-full-height-fire-resistant-safe',
    name: { en: 'SAKURA Full-Height Fire-Resistant Safe, Model UBO-335E', ar: 'خزنة SAKURA مقاومة للحريق بارتفاع كامل موديل UBO-335E' },
    category: fire,
    shortDesc: {
      en: 'A full-height SAKURA safe with an electronic keypad, key override and three heavy-duty hinges, for offices, banks and institutions.',
      ar: 'خزنة SAKURA بارتفاع كامل، بقفل إلكتروني رقمي مع مفتاح احتياطي وثلاث مفصلات متينة، للمكاتب والبنوك والمؤسسات.',
    },
    fullDesc: desc(
      'This full-height SAKURA safe is built to protect cash, records and valuables against fire and unauthorised access. Its electronic keypad is backed by a mechanical key, and the door is carried on three heavy-duty external hinges.',
      'خزنة من SAKURA بارتفاع كامل، صُمّمت لحماية النقد والسجلات والمقتنيات الثمينة من الحريق والوصول غير المصرّح به. يعمل قفلها الإلكتروني الرقمي مع مفتاح ميكانيكي احتياطي، ويُحمل بابها على ثلاث مفصلات خارجية متينة.',
    ),
    images: [
      img('uchida-digital-safe', 1086, 1448, 'Full-height SAKURA fire-resistant safe in light grey with an electronic keypad', 'خزنة SAKURA مقاومة للحريق بارتفاع كامل بلون رمادي فاتح وقفل رقمي إلكتروني'),
    ],
    specTable: [
      brandSpec('SAKURA'),
      spec('Lock', 'القفل', 'Electronic keypad with key override', 'قفل إلكتروني رقمي مع مفتاح احتياطي'),
      spec('Hinges', 'المفصلات', '3 heavy-duty external hinges', '3 مفصلات خارجية متينة'),
      spec('Finish', 'اللون', 'Light grey', 'رمادي فاتح'),
    ],
    isFeatured: true,
    order: 1,
  },
  {
    _id: 'p25',
    slug: 'uchida-white-safe-with-steel-shelves',
    name: { en: 'UCHIDA Fire-Resistant Safe with Steel Shelves, Model PB-103', ar: 'خزنة UCHIDA مقاومة للحريق بأرفف حديدية موديل PB-103' },
    category: fire,
    shortDesc: {
      en: 'A white UCHIDA steel safe with a digital keypad, opening onto three steel shelves and a drawer below.',
      ar: 'خزنة UCHIDA حديدية بيضاء بقفل رقمي، تنفتح على ثلاثة أرفف حديدية ودرج سفلي.',
    },
    fullDesc: desc(
      'Clean white steel inside and out: this UCHIDA safe opens with a digital keypad and handle onto three steel shelves for files, cash and boxes, with a drawer below for smaller valuables. Its heavy door is carried on external hinges.',
      'فولاذ أبيض أنيق من الخارج والداخل: تُفتح هذه الخزنة من UCHIDA بقفل رقمي ومقبض على ثلاثة أرفف حديدية للملفات والنقود والعلب، ودرج سفلي للمقتنيات الصغيرة، ويُحمل بابها المتين على مفصلات خارجية.',
    ),
    images: [
      img('uchida-white-safe', 1086, 1448, 'White UCHIDA steel safe with a digital keypad and handle', 'خزنة UCHIDA فولاذية بيضاء بقفل رقمي ومقبض'),
      img('uchida-white-safe-open', 1312, 1199, 'The white UCHIDA safe open, with three steel shelves and a drawer', 'خزنة UCHIDA البيضاء مفتوحة، بثلاثة أرفف حديدية ودرج'),
    ],
    specTable: [
      brand,
      spec('Lock', 'القفل', 'Digital keypad with handle', 'قفل رقمي بلوحة أرقام ومقبض'),
      spec('Interior', 'التجهيز الداخلي', 'Three steel shelves and a drawer', 'ثلاثة أرفف حديدية ودرج'),
      spec('Finish', 'اللون', 'White', 'أبيض'),
    ],
    isFeatured: false,
    order: 2,
  },
  {
    _id: 'p26',
    slug: 'uchida-red-safe-with-leather-drawers',
    name: { en: 'UCHIDA Fire-Resistant Safe with Leather Drawers, Model ZC-50', ar: 'خزنة UCHIDA مقاومة للحريق بأدراج جلدية موديل ZC-50' },
    category: luxury,
    shortDesc: {
      en: 'A bold red UCHIDA safe with a digital keypad and round handle, fitted inside with four drawers in crocodile-texture leather.',
      ar: 'خزنة UCHIDA بلون أحمر لافت، بقفل رقمي ومقبض دائري، ومجهّزة من الداخل بأربعة أدراج من الجلد بملمس جلد التمساح.',
    },
    fullDesc: desc(
      'A safe that makes a statement: deep red steel, a digital keypad beside a round chrome handle, and inside, four drawers in brown crocodile-texture leather for jewellery, watches and keepsakes.',
      'خزنة تلفت الأنظار: فولاذ بلون أحمر عميق، وقفل رقمي بجوار مقبض دائري لامع، وفي الداخل أربعة أدراج من الجلد البني بملمس جلد التمساح للمجوهرات والساعات والمقتنيات العزيزة.',
    ),
    images: [
      img('uchida-red-safe-front', 1145, 1373, 'Red UCHIDA safe with a digital keypad and round chrome handle', 'خزنة UCHIDA حمراء بقفل رقمي ومقبض دائري من الكروم'),
      img('uchida-red-safe-drawers', 1312, 1199, 'The red UCHIDA safe open, with four crocodile-texture leather drawers', 'خزنة UCHIDA الحمراء مفتوحة، بأربعة أدراج جلدية بملمس جلد التمساح'),
    ],
    specTable: [
      brand,
      spec('Lock', 'القفل', 'Digital keypad with round handle', 'قفل رقمي بلوحة أرقام ومقبض دائري'),
      spec('Interior', 'التجهيز الداخلي', 'Four crocodile-texture leather drawers', 'أربعة أدراج جلدية بملمس جلد التمساح'),
      spec('Finish', 'اللون', 'Red', 'أحمر'),
    ],
    isFeatured: false,
    order: 13,
  },

  {
    _id: 'p3',
    slug: 'uchida-designer-fire-resistant-safe',
    name: { en: 'UCHIDA Designer Fire-Resistant Safe, Model Z/CFP-R', ar: 'خزنة UCHIDA فاخرة مقاومة للحريق بتصاميم متعددة موديل Z/CFP-R' },
    category: luxury,
    shortDesc: {
      en: 'One UCHIDA fire-resistant safe, model Z/CFP-R, in five door designs: walnut grain, black and gold marble, white marble, charcoal fluted, and cream and navy fluted.',
      ar: 'خزنة UCHIDA مقاومة للحريق موديل Z/CFP-R بخمسة تصاميم للباب: نقشة خشب الجوز، والرخام الأسود والذهبي، والرخام الأبيض، والواجهة المضلّعة الفحمية، والمضلّعة بلونين كريمي وكحلي.',
    },
    fullDesc: desc(
      'Security that looks like furniture. The same UCHIDA fire-resistant safe comes with a choice of door: a warm walnut grain in a black steel frame; black marble effect veined in gold and white; white marble effect with soft grey veins; a fluted charcoal front; or a two-tone fluted front, cream above and navy below. Each has a fingerprint reader and a touch keypad in the panel above the door. Choose the design that suits your majlis, dressing room or executive office.',
      'أمان بمظهر قطعة أثاث. خزنة UCHIDA نفسها المقاومة للحريق، مع اختيار تصميم الباب: نقشة خشب الجوز الدافئة في إطار من الفولاذ الأسود، أو نقشة الرخام الأسود بعروق ذهبية وبيضاء، أو الرخام الأبيض بعروق رمادية ناعمة، أو الواجهة المضلّعة بلون فحمي، أو المضلّعة بلونين: كريمي في الأعلى وكحلي في الأسفل. ولكل تصميم قارئ بصمة ولوحة أرقام تعمل باللمس أعلى الباب. اختاروا التصميم الذي يناسب مجلسكم أو غرفة الملابس أو مكتب الإدارة.',
    ),
    images: [
      img('uchida-black-gold-marble-safe', 1176, 1338, 'UCHIDA safe with a black and gold marble-effect door, fingerprint reader and touch keypad', 'خزنة UCHIDA بباب بنقشة الرخام الأسود والذهبي، مع قارئ بصمة ولوحة أرقام باللمس'),
      img('uchida-walnut-safe', 1254, 1254, 'UCHIDA safe with a walnut wood-grain door and black steel frame', 'خزنة UCHIDA بباب بنقشة خشب الجوز وإطار من الفولاذ الأسود'),
      img('uchida-white-marble-safe', 1122, 1402, 'UCHIDA safe with a white marble-effect door, fingerprint reader and touch keypad', 'خزنة UCHIDA بباب بنقشة الرخام الأبيض، مع قارئ بصمة ولوحة أرقام باللمس'),
      img('uchida-fluted-safe', 1254, 1254, 'UCHIDA safe with a fluted charcoal front', 'خزنة UCHIDA بواجهة مضلّعة بلون فحمي'),
      img('uchida-two-tone-fluted-safe', 1254, 1254, 'UCHIDA safe with a cream and navy fluted front, fingerprint reader and touch keypad', 'خزنة UCHIDA بواجهة مضلّعة بلونين كريمي وكحلي، مع قارئ بصمة ولوحة أرقام باللمس'),
    ],
    specTable: [
      brand,
      spec('Lock', 'القفل', 'Fingerprint reader and touch keypad', 'قارئ بصمة ولوحة أرقام باللمس'),
      spec('Door designs', 'تصاميم الباب', 'Walnut grain, black & gold marble, white marble, charcoal fluted, cream & navy fluted', 'نقشة خشب الجوز، رخام أسود وذهبي، رخام أبيض، مضلّعة فحمي، مضلّعة كريمي وكحلي'),
    ],
    isFeatured: true,
    order: 14,
  },





  {
    _id: 'p27',
    slug: 'watch-winder-safe',
    name: { en: 'Fire-Resistant Safe with Watch Winder, Model ZC-50', ar: 'خزنة مقاومة للحريق بدوّار ساعات موديل ZC-50' },
    category: luxury,
    shortDesc: {
      en: 'A white safe fitted with a four-watch winder in a wooden frame, keeping automatic watches wound and secure, with a leather drawer above.',
      ar: 'خزنة بيضاء مجهّزة بدوّار لأربع ساعات في إطار خشبي، يُبقي الساعات الأوتوماتيكية تعمل وهي في أمان، مع درج جلدي في الأعلى.',
    },
    fullDesc: desc(
      'Automatic watches stop when they sit still. This safe keeps four of them turning on a built-in watch winder, set in a wooden frame with leather trim and softly lit rotors, so they are wound, protected and ready to wear. A leather drawer above holds straps and smaller pieces.',
      'الساعات الأوتوماتيكية تتوقف إذا تُركت دون حركة. تُبقي هذه الخزنة أربع ساعات في دوران مستمر على دوّار ساعات (Watch Winder) مدمج في إطار خشبي بلمسات جلدية وبكرات مضيئة، فتبقى الساعات تعمل ومحمية وجاهزة للبس، ويضم الدرج الجلدي العلوي الأحزمة والقطع الصغيرة.',
    ),
    images: [
      img('watch-winder-safe', 1086, 1448, 'White safe with a four-watch winder lit in blue inside a wooden frame', 'خزنة بيضاء بدوّار لأربع ساعات مضاء بالأزرق داخل إطار خشبي'),
      img('watch-winder-safe-detail', 1086, 1448, 'The watch winder inside the white safe, holding automatic watches', 'دوّار الساعات داخل الخزنة البيضاء وعليه ساعات أوتوماتيكية'),
    ],
    specTable: [
      spec('Watch winder', 'دوّار الساعات', 'Four watches', 'أربع ساعات'),
      spec('Frame', 'الإطار', 'Wood with leather trim', 'خشب بلمسات جلدية'),
      spec('Extras', 'إضافات', 'Leather drawer above the winder', 'درج جلدي فوق الدوّار'),
      spec('Finish', 'اللون', 'White', 'أبيض'),
    ],
    isFeatured: false,
    order: 17,
  },
  {
    _id: 'p28',
    slug: 'marble-interior-jewellery-safe',
    name: { en: 'Fire-Resistant Jewellery Safe with Marble-Finish Interior, Model PB-105', ar: 'خزنة مجوهرات مقاومة للحريق بتجهيز داخلي بنقشة الرخام موديل PB-105' },
    category: luxury,
    shortDesc: {
      en: 'A black steel safe with a white marble-finish interior: necklace busts, display shelves, drawers and an earring board inside the door.',
      ar: 'خزنة فولاذية سوداء بتجهيز داخلي أبيض بنقشة الرخام: مجسّمات للعقود، ورفوف عرض، وأدراج، ولوحة للأقراط على الوجه الداخلي للباب.',
    },
    fullDesc: desc(
      'Open the black steel door and the whole collection is on display: necklace busts on marble-finish shelves, a column of drawers with brass handles for rings and bracelets, and an earring board on the inside of the door, so every piece is protected and in view.',
      'افتحوا الباب الفولاذي الأسود لتظهر المجموعة كلها أمامكم: مجسّمات العقود على رفوف بنقشة الرخام، وعمود من الأدراج بمقابض نحاسية للخواتم والأساور، ولوحة للأقراط على الوجه الداخلي للباب، فتبقى كل قطعة محمية وأمام أعينكم.',
    ),
    images: [
      img('marble-jewellery-safe', 1086, 1448, 'Black jewellery safe open, with a white marble-finish interior, necklace busts and drawers', 'خزنة مجوهرات سوداء مفتوحة، بتجهيز داخلي أبيض بنقشة الرخام ومجسّمات للعقود وأدراج'),
    ],
    specTable: [
      spec('Exterior', 'الهيكل', 'Black steel', 'فولاذ أسود'),
      spec('Interior', 'التجهيز الداخلي', 'White marble finish', 'أبيض بنقشة الرخام'),
      spec('Fittings', 'التجهيزات', 'Necklace busts, display shelves, drawers, earring board on the door', 'مجسّمات عقود، رفوف عرض، أدراج، لوحة أقراط على الباب'),
    ],
    isFeatured: false,
    order: 18,
  },
  {
    _id: 'p51',
    slug: 'uchida-fire-resistant-jewellery-and-watch-safe',
    name: { en: 'UCHIDA Fire-Resistant Jewellery & Watch Safe, Model PB-104', ar: 'خزنة مجوهرات وساعات UCHIDA مقاومة للحريق موديل PB-104' },
    category: interiors,
    shortDesc: {
      en: 'An off-white UCHIDA fire-resistant safe with a keypad and key, fitted with oak-finish, velvet-lined drawers for necklaces, rings, earrings and watches.',
      ar: 'خزنة UCHIDA مقاومة للحريق بلون أبيض عاجي، بقفل رقمي ومفتاح، ومجهّزة من الداخل بأدراج بلون خشب السنديان مبطّنة بمخمل بيج للعقود والخواتم والأقراط والساعات.',
    },
    fullDesc: desc(
      'A fire-resistant UCHIDA safe outside, a jewellery box inside. Behind the off-white steel door, opened by a digital keypad with display and a key, sit oak-finish drawers with brushed brass handles and beige velvet linings: one with necklace busts and bracelet stands, one with ring rolls and cushioned compartments for earrings, one with watch cushions and rolls. Open wooden shelves hold boxes and documents, and a steel drawer with its own key lock sits at the bottom. The drawers and shelves are arranged to suit each owner’s collection.',
      'من الخارج خزنة UCHIDA مقاومة للحريق، ومن الداخل صندوق مجوهرات. خلف الباب الفولاذي الأبيض العاجي، الذي يُفتح بقفل رقمي بشاشة وبمفتاح، أدراج بلون خشب السنديان بمقابض نحاسية مطفية وبطانة من المخمل البيج: درج بمجسّمات للعقود وحوامل للأساور، ودرج ببكرات للخواتم وخانات مبطّنة للأقراط، ودرج بوسائد وبكرات للساعات. وتحمل الأرفف الخشبية المفتوحة العلب والمستندات، وفي الأسفل درج فولاذي بقفل مفتاح خاص به. ويُرتَّب توزيع الأدراج والأرفف بحسب مقتنيات كل عميل.',
    ),
    images: [
      img('uchida-jewellery-safe-open', 1086, 1448, 'Off-white UCHIDA safe open, with four oak-finish drawers, three wooden shelves and a steel drawer below', 'خزنة UCHIDA بيضاء عاجية مفتوحة، بأربعة أدراج بلون خشب السنديان وثلاثة أرفف خشبية ودرج فولاذي في الأسفل'),
      img('uchida-jewellery-safe-front', 1086, 1448, 'Off-white UCHIDA fire-resistant safe closed, with a digital keypad, key lock and handle', 'خزنة UCHIDA بيضاء عاجية مقاومة للحريق مغلقة، بقفل رقمي وقفل مفتاح ومقبض'),
      img('uchida-jewellery-safe-necklaces', 1086, 1448, 'Oak-finish drawer lined in beige velvet with two necklace busts and bracelet stands', 'درج بلون خشب السنديان مبطّن بالمخمل البيج، فيه مجسّمان للعقود وحوامل للأساور'),
      img('uchida-jewellery-safe-necklace-drawer', 1086, 1448, 'Necklace drawer pulled out below a wooden drawer, with shelves and a steel drawer beneath', 'درج العقود مسحوب أسفل درج خشبي، وتحته أرفف ودرج فولاذي'),
      img('uchida-jewellery-safe-rings', 1086, 1448, 'Beige velvet drawer with ring rolls and eight cushioned compartments for earrings', 'درج من المخمل البيج ببكرات للخواتم وثماني خانات مبطّنة للأقراط'),
      img('uchida-jewellery-safe-watches', 1086, 1448, 'Beige velvet watch drawer with watch cushions and watch rolls', 'درج ساعات من المخمل البيج بوسائد وبكرات للساعات'),
    ],
    video: {
      url: '/videos/uchida-jewellery-safe.mp4',
      poster: '/videos/uchida-jewellery-safe.webp',
      label: {
        en: 'Video: the off-white UCHIDA safe opened by keypad, then its beige velvet drawers pulled out to show necklaces, bracelets, rings, earrings and watches',
        ar: 'فيديو: فتح خزنة UCHIDA البيضاء العاجية بالقفل الرقمي، ثم سحب أدراجها المبطّنة بالمخمل البيج وفيها عقود وأساور وخواتم وأقراط وساعات',
      },
    },
    specTable: [
      brand,
      spec('Protection', 'الحماية', 'Fire-resistant', 'مقاومة للحريق'),
      spec('Lock', 'القفل', 'Digital keypad with display, and key', 'قفل رقمي بشاشة ولوحة أرقام، ومفتاح'),
      spec('Interior', 'التجهيز الداخلي', 'Oak-finish drawers with brass handles, wooden shelves and a lockable steel drawer', 'أدراج بلون خشب السنديان بمقابض نحاسية، وأرفف خشبية، ودرج فولاذي بقفل'),
      spec('Fittings', 'التجهيزات', 'Necklace busts, bracelet stands, ring rolls, earring compartments, watch cushions and rolls', 'مجسّمات عقود، حوامل أساور، بكرات خواتم، خانات أقراط، وسائد وبكرات ساعات'),
      spec('Lining', 'البطانة', 'Beige velvet', 'مخمل بيج'),
      spec('Finish', 'اللون', 'Off-white', 'أبيض عاجي'),
    ],
    isFeatured: false,
    order: 18.5,
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
      img('interior-necklace', 1341, 1173, 'Jewellery drawer with a velvet necklace bust and bangle stand', 'درج مجوهرات بمجسّم عقد مخملي وحامل للأساور'),
      img('interior-rings', 1348, 1167, 'Ring drawer with velvet ring rolls and earring compartments', 'درج خواتم ببكرات مخملية وخانات للأقراط'),
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
    order: 19,
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
      img('interior-watch-rolls', 1127, 1396, 'Watch drawer with nine blue velvet rolls and brass handles', 'درج ساعات بتسع بكرات من المخمل الأزرق ومقابض نحاسية'),
      img('interior-watch-pillows', 1086, 1448, 'Beech drawer with black velvet watch cushions', 'درج من خشب الزان بوسائد ساعات من المخمل الأسود'),
    ],
    specTable: [
      spec('Holders', 'الحوامل', 'Velvet rolls or cushions', 'بكرات أو وسائد مخملية'),
      spec('Lining', 'البطانة', 'Blue or black velvet', 'مخمل أزرق أو أسود'),
      spec('Handles', 'المقابض', 'Brass', 'نحاس'),
    ],
    isFeatured: true,
    order: 20,
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
      img('interior-oak-drawers', 1120, 1404, 'Seven oak drawers with brass handles inside a black safe', 'سبعة أدراج من خشب البلوط بمقابض نحاسية داخل خزنة سوداء'),
      img('interior-beech-velvet', 1086, 1448, 'Beech drawer with black velvet dividers on full-extension runners', 'درج من خشب الزان بفواصل من المخمل الأسود على مجارٍ تُسحب بالكامل'),
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
    order: 21,
  },
  {
    _id: 'p29',
    slug: 'travel-jewellery-cases',
    name: { en: 'Travel Jewellery Cases', ar: 'شنط المجوهرات للسفر' },
    seoTitle: {
      en: 'Travel Jewellery Case in Qatar — For Weddings and Hotels',
      ar: 'شنطة مجوهرات للسفر في قطر — شنط مقسّمة للأعراس والفنادق',
    },
    category: interiors,
    shortDesc: {
      en: 'A travel jewellery case divided inside to carry jewellery and watches safely when travelling, in hotels and to weddings, with free delivery in Qatar.',
      ar: 'شنطة مجوهرات للسفر مقسّمة من الداخل لحمل المجوهرات والساعات بأمان في السفر والفنادق والحفلات والأعراس، مع توصيل مجاني داخل قطر.',
    },
    fullDesc: desc(
      'A special design from Nasrallah Trading Est that you will not find anywhere else in Qatar. Each case carries a whole set safely: compartments for necklaces, bangles, rings and earrings, cushions for watches, and soft linings that keep pieces from touching, closed with secure gold-tone clasps. Available in a black crocodile-texture finish and in light grey.',
      'تصميم خاص من مؤسسة نصر الله التجارية لا تجدونه في مكان آخر في قطر. تحمل كل شنطة طقمًا كاملًا بأمان: خانات للعقود والأساور والخواتم والأقراط، ووسائد للساعات، وبطانة ناعمة تمنع تلامس القطع، مع أقفال ذهبية محكمة. متوفرة بتشطيب أسود بملمس جلد التمساح وباللون الرمادي الفاتح.',
    ),
    images: [
      img('travel-jewellery-case-black', 1448, 1086, 'Open black crocodile-texture travel case with compartments holding a necklace, bangles and earrings', 'شنطة مجوهرات للسفر سوداء بملمس جلد التمساح مفتوحة، بخانات فيها عقد وأساور وأقراط'),
      img('travel-jewellery-case-grey', 1086, 1448, 'Open light-grey travel case with watch cushions and ring drawers', 'شنطة مجوهرات للسفر رمادية فاتحة مفتوحة، بوسائد للساعات وأدراج للخواتم'),
    ],
    specTable: [
      spec('Use', 'الاستخدام', 'Travel, hotels, parties and weddings', 'السفر والفنادق والحفلات والأعراس'),
      spec('Compartments', 'الخانات', 'Necklaces, bangles, rings, earrings and watches', 'العقود والأساور والخواتم والأقراط والساعات'),
      spec('Finishes', 'التشطيبات', 'Black crocodile texture, light grey', 'أسود بملمس جلد التمساح، رمادي فاتح'),
    ],
    isFeatured: false,
    order: 22,
  },
  {
    _id: 'p8',
    slug: 'sakura-multi-lock-safe',
    name: { en: 'SAKURA Fire-Resistant Multi-Lock Safe, Model EFI703', ar: 'خزنة SAKURA مقاومة للحريق متعددة الأقفال موديل EFI703' },
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
      img('sakura-multi-lock-safe', 1086, 1448, 'Grey SAKURA multi-lock steel safe with a fingerprint and keypad panel', 'خزنة SAKURA فولاذية رمادية متعددة الأقفال بلوحة بصمة وأرقام'),
      img('sakura-multi-lock-safe-lock', 1536, 1024, 'Close-up of the fingerprint scanner, keypad and key lock', 'صورة قريبة لقارئ البصمة ولوحة الأرقام وقفل المفتاح'),
    ],
    specTable: [
      brandSpec('SAKURA'),
      spec('Lock', 'القفل', 'Fingerprint scanner, digital keypad and key', 'قارئ بصمة ولوحة أرقام ومفتاح'),
      spec('Hinges', 'المفصلات', 'Two external hinges', 'مفصلتان خارجيتان'),
      spec('Finish', 'اللون', 'Grey', 'رمادي'),
    ],
    isFeatured: false,
    order: 7,
  },
  {
    _id: 'p24',
    slug: 'sakura-fingerprint-safe',
    name: { en: 'SAKURA Fire-Resistant Fingerprint Safe, Model ONS-FE', ar: 'خزنة SAKURA مقاومة للحريق بالبصمة موديل ONS-FE' },
    category: fire,
    shortDesc: {
      en: 'A black SAKURA steel safe with a vertical handle that combines a digital keypad and a fingerprint scanner.',
      ar: 'خزنة حديدية سوداء من SAKURA بمقبض عمودي يجمع بين لوحة أرقام رقمية وقارئ بصمة.',
    },
    fullDesc: desc(
      'This SAKURA safe puts a digital keypad and a fingerprint scanner into one vertical handle on a clean black door, so it opens quickly for the people you trust and stays shut for everyone else.',
      'تجمع هذه الخزنة من SAKURA لوحة أرقام رقمية وقارئ بصمة في مقبض عمودي واحد على باب أسود أنيق، فتُفتح بسرعة لمن تثقون بهم وتبقى مغلقة أمام غيرهم.',
    ),
    images: [
      img('sakura-fingerprint-safe-black', 1086, 1448, 'Black SAKURA steel safe with a vertical keypad and fingerprint handle', 'خزنة SAKURA فولاذية سوداء بلوحة أرقام عمودية ومقبض بالبصمة'),
    ],
    specTable: [
      brandSpec('SAKURA'),
      spec('Lock', 'القفل', 'Digital keypad and fingerprint scanner', 'لوحة أرقام رقمية وقارئ بصمة'),
      spec('Finish', 'اللون', 'Black', 'أسود'),
    ],
    isFeatured: false,
    order: 8,
  },
  {
    _id: 'p9',
    slug: 'godrej-two-door-steel-cupboard',
    name: { en: 'GODREJ Two-Door Steel Cupboard, Model FHC4', ar: 'خزانة حديدية GODREJ ببابين موديل FHC4' },
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
      img('godrej-two-door-cupboard-white', 1024, 1536, 'White two-door GODREJ steel cupboard with a recessed lock', 'دولاب حديدي GODREJ أبيض ببابين وقفل غائر'),
      img('godrej-two-door-cupboard-beige', 1024, 1536, 'Beige two-door GODREJ steel cupboard with a white frame', 'دولاب حديدي GODREJ بيج ببابين وإطار أبيض'),
    ],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'Two, full height', 'بابان بارتفاع كامل'),
      spec('Lock', 'القفل', 'Recessed lock', 'قفل غاطس'),
      spec('Colours', 'الألوان', 'White, beige', 'أبيض، بيج'),
    ],
    isFeatured: false,
    order: 35,
  },
  {
    _id: 'p10',
    slug: 'godrej-two-door-steel-cupboard-with-handle',
    name: { en: 'GODREJ Two-Door Steel Cupboard with Handle, Model FHC FSB HP1 HL HHR', ar: 'خزانة حديدية GODREJ ببابين ومقبض موديل FHC FSB HP1 HL HHR' },
    category: cupboards,
    shortDesc: {
      en: 'A tall two-door steel cupboard in warm beige with a chrome handle, for orderly storage in offices.',
      ar: 'خزانة حديدية طويلة ببابين بلون بيج دافئ ومقبض كروم، لتخزين منظّم في المكاتب.',
    },
    fullDesc: desc(
      'Two full-height steel doors open on a chrome handle, giving easy everyday access to files, supplies and equipment.',
      'بابان حديديان بارتفاع كامل يُفتحان بمقبض من الكروم، لوصول يومي سهل إلى الملفات والمستلزمات والأدوات.',
    ),
    images: [img('godrej-two-door-cupboard-handle-beige', 1024, 1536, 'Beige two-door GODREJ steel cupboard with a chrome handle', 'دولاب حديدي GODREJ بيج ببابين ومقبض من الكروم')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'Two, full height', 'بابان بارتفاع كامل'),
      spec('Handle', 'المقبض', 'Chrome', 'كروم'),
      spec('Colour', 'اللون', 'Beige', 'بيج'),
    ],
    isFeatured: false,
    order: 36,
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
    images: [img('godrej-panelled-cupboard-grey', 1024, 1536, 'Light-grey GODREJ steel cupboard with two panelled doors', 'دولاب حديدي GODREJ رمادي فاتح ببابين مقسّمين بألواح')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'Two, panelled', 'بابان بألواح بارزة'),
      spec('Lock', 'القفل', 'Recessed lock', 'قفل غاطس'),
      spec('Colour', 'اللون', 'Light grey', 'رمادي فاتح'),
    ],
    isFeatured: false,
    order: 37,
  },
  {
    _id: 'p12',
    slug: 'godrej-single-door-steel-cupboard',
    name: { en: 'GODREJ Single-Door Steel Cupboard, Model LC1ES4', ar: 'خزانة حديدية GODREJ بباب واحد موديل LC1ES4' },
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
      img('godrej-single-door-cupboard-grey', 1024, 1536, 'Grey single-door GODREJ steel cupboard', 'دولاب حديدي GODREJ رمادي بباب واحد'),
      img('godrej-single-door-cupboard-beige', 1024, 1536, 'Beige single-door GODREJ steel cupboard', 'دولاب حديدي GODREJ بيج بباب واحد'),
    ],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'One, full height', 'باب واحد بارتفاع كامل'),
      spec('Lock', 'القفل', 'Recessed lock', 'قفل غاطس'),
      spec('Colours', 'الألوان', 'Grey, beige', 'رمادي، بيج'),
    ],
    isFeatured: false,
    order: 38,
  },
  {
    _id: 'p13',
    slug: 'godrej-glass-door-steel-cabinet',
    name: { en: 'GODREJ Glass-Door Steel Cabinet, Model FHC4 FG SWD', ar: 'خزانة حديدية GODREJ بأبواب زجاجية موديل FHC4 FG SWD' },
    category: cupboards,
    shortDesc: {
      en: 'A white steel cabinet with two glass doors and shelves, so files and books stay visible and protected.',
      ar: 'خزانة حديدية بيضاء ببابين زجاجيين ورفوف، لتبقى الملفات والكتب ظاهرة ومحمية.',
    },
    fullDesc: desc(
      'Glass-panelled doors set in a white steel frame show what is on the shelves while keeping dust out, with a lock between the doors.',
      'أبواب بألواح زجاجية في إطار حديدي أبيض تُظهر ما على الرفوف وتحميه من الغبار، مع قفل بين البابين.',
    ),
    images: [img('godrej-glass-door-cabinet', 1024, 1536, 'White GODREJ steel cabinet with two glass doors and shelves', 'خزانة حديدية GODREJ بيضاء ببابين زجاجيين وأرفف')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Doors', 'الأبواب', 'Two, glass panelled', 'بابان بألواح زجاجية'),
      spec('Interior', 'الداخل', 'Shelves', 'رفوف'),
      spec('Colour', 'اللون', 'White', 'أبيض'),
    ],
    isFeatured: false,
    order: 39,
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
    images: [img('godrej-wood-glass-cabinet', 1024, 1536, 'Honey-oak GODREJ storage cabinet with glass doors above and wooden doors below', 'خزانة تخزين GODREJ بلون خشب البلوط العسلي، بأبواب زجاجية في الأعلى وأبواب خشبية في الأسفل')],
    specTable: [
      brandSpec('GODREJ'),
      spec('Finish', 'التشطيب', 'Honey oak', 'خشب بلوط عسلي'),
      spec('Doors', 'الأبواب', 'Two glass doors above, two wooden doors below', 'بابان زجاجيان في الأعلى وبابان خشبيان في الأسفل'),
      spec('Handles', 'المقابض', 'Chrome', 'كروم'),
    ],
    isFeatured: false,
    order: 40,
  },
  {
    _id: 'p15',
    slug: 'godrej-two-tier-steel-locker',
    name: { en: 'GODREJ Two-Tier Steel Locker, Model LC2', ar: 'لوكر حديدي GODREJ بخانتين موديل LC2' },
    category: lockers,
    shortDesc: {
      en: 'A two-door steel locker with ventilation louvres, for staff changing rooms, schools and gyms.',
      ar: 'لوكر حديدي ببابين وفتحات تهوية، لغرف تبديل الموظفين والمدارس والنوادي الرياضية.',
    },
    fullDesc: desc(
      'Two lockable compartments stacked in one column, each with ventilation louvres, in charcoal doors on a cream frame.',
      'خانتان بقفل في عمود واحد، لكل منهما فتحات تهوية، بأبواب فحمية اللون على إطار كريمي.',
    ),
    images: [img('godrej-two-tier-locker', 1024, 1536, 'Two-tier GODREJ steel locker with charcoal doors and a cream frame', 'لوكر حديدي GODREJ بطابقين بأبواب فحمية وإطار كريمي')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'Two, each with its own lock', 'خانتان، لكل منهما قفل'),
      spec('Ventilation', 'التهوية', 'Louvred doors', 'فتحات تهوية في الأبواب'),
      spec('Colours', 'الألوان', 'Charcoal doors, cream frame', 'أبواب فحمية، إطار كريمي'),
    ],
    isFeatured: false,
    order: 41,
  },
  {
    _id: 'p16',
    slug: 'godrej-four-tier-steel-locker',
    name: { en: 'GODREJ Four-Tier Steel Locker, Model LC4', ar: 'لوكر حديدي GODREJ بأربع خانات موديل LC4' },
    category: lockers,
    shortDesc: {
      en: 'A four-door steel locker with ventilation louvres, giving four people their own space in one column.',
      ar: 'لوكر حديدي بأربعة أبواب وفتحات تهوية، يمنح أربعة أشخاص خانة خاصة لكل منهم في عمود واحد.',
    },
    fullDesc: desc(
      'Four lockable compartments in a single column make the most of floor space in changing rooms and staff areas.',
      'أربع خانات بقفل في عمود واحد تستفيد من المساحة إلى أقصى حد في غرف التبديل ومناطق الموظفين.',
    ),
    images: [img('godrej-four-tier-locker', 1024, 1536, 'Four-tier GODREJ steel locker with charcoal doors and a cream frame', 'لوكر حديدي GODREJ بأربعة طوابق بأبواب فحمية وإطار كريمي')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'Four, each with its own lock', 'أربع خانات، لكل منها قفل'),
      spec('Ventilation', 'التهوية', 'Louvred doors', 'فتحات تهوية في الأبواب'),
      spec('Colours', 'الألوان', 'Charcoal doors, cream frame', 'أبواب فحمية، إطار كريمي'),
    ],
    isFeatured: false,
    order: 42,
  },
  {
    _id: 'p17',
    slug: 'godrej-three-door-steel-locker',
    name: { en: 'GODREJ Three-Door Steel Locker, Model LC3', ar: 'لوكر حديدي GODREJ بثلاثة أبواب موديل LC3' },
    category: lockers,
    shortDesc: {
      en: 'A cream three-door steel locker with ventilation louvres and a key lock on every door.',
      ar: 'لوكر حديدي كريمي بثلاثة أبواب وفتحات تهوية وقفل بمفتاح لكل باب.',
    },
    fullDesc: desc(
      'Three generous compartments, each behind its own louvred door with a key lock, for offices, schools and clinics.',
      'ثلاث خانات واسعة، لكل منها باب بفتحات تهوية وقفل بمفتاح، للمكاتب والمدارس والعيادات.',
    ),
    images: [img('godrej-three-door-locker', 1024, 1536, 'Cream three-door GODREJ steel locker', 'لوكر حديدي GODREJ كريمي بثلاثة أبواب')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'Three', 'ثلاث خانات'),
      spec('Lock', 'القفل', 'Key lock on each door', 'قفل بمفتاح لكل باب'),
      spec('Colour', 'اللون', 'Cream', 'كريمي'),
    ],
    isFeatured: false,
    order: 43,
  },
  {
    _id: 'p18',
    slug: 'godrej-six-door-steel-locker',
    name: { en: 'GODREJ Six-Door Steel Locker, Model LC6', ar: 'لوكر حديدي GODREJ بستة أبواب موديل LC6' },
    category: lockers,
    shortDesc: {
      en: 'A six-door steel locker column in beige or olive, for keeping personal belongings apart in busy workplaces.',
      ar: 'عمود لوكر حديدي بستة أبواب باللون البيج أو الزيتي، لفصل المتعلقات الشخصية في أماكن العمل المزدحمة.',
    },
    fullDesc: desc(
      'Six compartments, each behind its own door with a pull handle, fit in the footprint of a single cupboard.',
      'ست خانات، لكل منها باب بمقبض، في مساحة خزانة واحدة.',
    ),
    images: [
      img('godrej-six-door-locker', 1024, 1536, 'Beige six-door GODREJ steel locker column', 'عمود لوكر حديدي GODREJ بيج بستة أبواب'),
      img('godrej-six-door-locker-off-white', 1024, 1536, 'Off-white six-door GODREJ steel locker column', 'عمود لوكر حديدي GODREJ أبيض عاجي بستة أبواب'),
    ],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'Six', 'ست خانات'),
      spec('Colours', 'الألوان', 'Beige, off-white', 'بيج، أبيض عاجي'),
    ],
    isFeatured: false,
    order: 44,
  },
  {
    _id: 'p19',
    slug: 'godrej-single-steel-locker',
    name: { en: 'GODREJ Single-Door Steel Locker, Model LC1', ar: 'لوكر حديدي GODREJ بباب واحد موديل LC1' },
    category: lockers,
    shortDesc: {
      en: 'A full-height single steel locker with a louvred door, in beige or olive.',
      ar: 'لوكر حديدي بباب واحد بارتفاع كامل وبفتحات تهوية، باللون البيج أو الزيتي.',
    },
    fullDesc: desc(
      'One tall compartment with room for clothes and bags, ventilated through louvres at the top of the door.',
      'خانة واحدة طويلة تتسع للملابس والحقائب، مع فتحات تهوية أعلى الباب.',
    ),
    images: [img('godrej-single-locker', 1024, 1536, 'Single GODREJ steel locker with a louvred charcoal door', 'لوكر حديدي GODREJ فردي بباب فحمي بفتحات تهوية')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Compartments', 'الخانات', 'One, full height', 'خانة واحدة بارتفاع كامل'),
      spec('Ventilation', 'التهوية', 'Louvred door', 'فتحات تهوية في الباب'),
      spec('Colours', 'الألوان', 'Charcoal door, cream frame', 'باب فحمي، إطار كريمي'),
    ],
    isFeatured: false,
    order: 45,
  },
  {
    _id: 'p21',
    slug: 'godrej-two-drawer-filing-cabinet',
    name: { en: 'GODREJ Two-Drawer Steel Filing Cabinet, Model VFC2', ar: 'خزانة ملفات حديدية GODREJ بدرجين موديل VFC2' },
    category: filing,
    shortDesc: {
      en: 'A low two-drawer steel filing cabinet with a lock, for hanging files beside a desk.',
      ar: 'خزانة ملفات حديدية منخفضة بدرجين وقفل، للملفات المعلّقة بجانب المكتب.',
    },
    fullDesc: desc(
      'Two deep drawers in cream sit in a light-grey steel frame, with a lock at the top to secure both.',
      'درجان عميقان باللون الكريمي في إطار حديدي رمادي فاتح، مع قفل في الأعلى يؤمّن الدرجين معًا.',
    ),
    images: [img('godrej-two-drawer-filing-cabinet', 1162, 1354, 'Two-drawer GODREJ steel filing cabinet with cream drawers', 'خزانة ملفات حديدية GODREJ بدرجين بلون كريمي')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Drawers', 'الأدراج', 'Two', 'درجان'),
      spec('Lock', 'القفل', 'Top lock', 'قفل علوي'),
      spec('Colours', 'الألوان', 'Cream drawers, light-grey frame', 'أدراج كريمية، إطار رمادي فاتح'),
    ],
    isFeatured: false,
    order: 27,
  },
  {
    _id: 'p22',
    slug: 'godrej-three-drawer-filing-cabinet',
    name: { en: 'GODREJ Three-Drawer Steel Filing Cabinet, Model VFC3', ar: 'خزانة ملفات حديدية GODREJ بثلاثة أدراج موديل VFC3' },
    category: filing,
    shortDesc: {
      en: 'A three-drawer steel filing cabinet with a lock, for department files and records.',
      ar: 'خزانة ملفات حديدية بثلاثة أدراج وقفل، لملفات الأقسام والسجلات.',
    },
    fullDesc: desc(
      'Three full-width drawers in cream, set in a light-grey steel frame and secured by a lock at the top.',
      'ثلاثة أدراج بعرض كامل باللون الكريمي في إطار حديدي رمادي فاتح، يؤمّنها قفل في الأعلى.',
    ),
    images: [img('godrej-three-drawer-filing-cabinet', 1024, 1536, 'Three-drawer GODREJ steel filing cabinet with cream drawers', 'خزانة ملفات حديدية GODREJ بثلاثة أدراج بلون كريمي')],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Drawers', 'الأدراج', 'Three', 'ثلاثة أدراج'),
      spec('Lock', 'القفل', 'Top lock', 'قفل علوي'),
      spec('Colours', 'الألوان', 'Cream drawers, light-grey frame', 'أدراج كريمية، إطار رمادي فاتح'),
    ],
    isFeatured: false,
    order: 28,
  },
  {
    _id: 'p23',
    slug: 'godrej-five-drawer-filing-cabinet',
    name: { en: 'GODREJ Five-Drawer Steel Filing Cabinet, Model VFC5', ar: 'خزانة ملفات حديدية GODREJ بخمسة أدراج موديل VFC5' },
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
      img('godrej-five-drawer-filing-cabinet-grey', 1024, 1536, 'Light-grey five-drawer GODREJ steel filing cabinet', 'خزانة ملفات حديدية GODREJ رمادية فاتحة بخمسة أدراج'),
      img('godrej-five-drawer-filing-cabinet-black', 1024, 1536, 'Black five-drawer GODREJ steel filing cabinet', 'خزانة ملفات حديدية GODREJ سوداء بخمسة أدراج'),
    ],
    specTable: [
      brandSpec('GODREJ'),
      steel,
      spec('Drawers', 'الأدراج', 'Five', 'خمسة أدراج'),
      spec('Lock', 'القفل', 'Top lock', 'قفل علوي'),
      spec('Colours', 'الألوان', 'Light grey, black', 'رمادي فاتح، أسود'),
    ],
    isFeatured: false,
    order: 29,
  },
  {
    _id: 'p30',
    slug: 'uchida-fingerprint-safe',
    name: { en: 'UCHIDA Fire-Resistant Fingerprint Safe, Model ZE-SS', ar: 'خزنة UCHIDA مقاومة للحريق بالبصمة موديل ZE-SS' },
    category: fire,
    shortDesc: {
      en: 'A black UCHIDA steel safe with a fingerprint reader and touch keypad beside a turning knob, for the home or office.',
      ar: 'خزنة UCHIDA حديدية سوداء بقارئ بصمة ولوحة أرقام باللمس بجوار مقبض دوّار، للبيت أو المكتب.',
    },
    fullDesc: desc(
      'A clean black door with a modern lock panel: a fingerprint reader and a touch keypad sit beside a solid turning knob, so the safe opens in a moment for the people you choose. Heavy external hinges carry the door.',
      'باب أسود أنيق بلوحة قفل عصرية: قارئ بصمة ولوحة أرقام باللمس بجوار مقبض دوّار متين، فتُفتح الخزنة في لحظة لمن تختارونهم، ويُحمل الباب على مفصلات خارجية متينة.',
    ),
    images: [
      img('uchida-fingerprint-safe', 1448, 1086, 'Black UCHIDA safe with a fingerprint reader and touch keypad', 'خزنة UCHIDA سوداء بقارئ بصمة ولوحة أرقام باللمس'),
    ],
    specTable: [
      brand,
      spec('Lock', 'القفل', 'Fingerprint reader and touch keypad', 'قارئ بصمة ولوحة أرقام باللمس'),
      spec('Finish', 'اللون', 'Black', 'أسود'),
    ],
    isFeatured: false,
    order: 3,
  },
  {
    _id: 'p45',
    slug: 'uchida-black-digital-safe',
    name: { en: 'UCHIDA Fire-Resistant Digital Safe, Model BK-265KE', ar: 'خزنة UCHIDA مقاومة للحريق بقفل رقمي موديل BK-265KE' },
    category: fire,
    shortDesc: {
      en: 'A tall black UCHIDA steel safe with a digital keypad, a key lock and a chrome lever handle, on three external hinges.',
      ar: 'خزنة UCHIDA حديدية سوداء طويلة، بلوحة أرقام رقمية وقفل بمفتاح ومقبض معدني لامع، على ثلاث مفصلات خارجية.',
    },
    fullDesc: desc(
      'A tall, plain black safe for the office or the home: a digital keypad and a key lock sit beside a chrome lever handle on one panel, and the heavy door swings on three external hinges, with room inside for cash, files and valuables.',
      'خزنة سوداء طويلة بتصميم بسيط للمكتب أو البيت: لوحة أرقام رقمية وقفل بمفتاح بجوار مقبض معدني لامع على لوحة واحدة، ويدور بابها المتين على ثلاث مفصلات خارجية، مع مساحة داخلية للنقود والملفات والمقتنيات الثمينة.',
    ),
    images: [
      img('uchida-black-digital-safe', 1086, 1448, 'Tall black UCHIDA safe with a digital keypad, key lock and chrome lever handle', 'خزنة UCHIDA سوداء طويلة بقفل رقمي وقفل مفتاح ومقبض ذراع من الكروم'),
    ],
    specTable: [
      brand,
      spec('Lock', 'القفل', 'Digital keypad, key and lever handle', 'لوحة أرقام رقمية ومفتاح ومقبض'),
      spec('Hinges', 'المفصلات', 'Three external hinges', 'ثلاث مفصلات خارجية'),
      spec('Finish', 'اللون', 'Black', 'أسود'),
    ],
    isFeatured: false,
    order: 4,
  },
  {
    _id: 'p31',
    slug: 'uchida-compact-digital-safe',
    name: { en: 'UCHIDA Compact Fire-Resistant Digital Safe, Model HS-23KE', ar: 'خزنة UCHIDA صغيرة مقاومة للحريق بقفل رقمي موديل HS-23KE' },
    category: fire,
    shortDesc: {
      en: 'A compact black UCHIDA safe with a round digital keypad and a key lock, sized for a wardrobe, a desk or a shop counter.',
      ar: 'خزنة UCHIDA سوداء صغيرة بلوحة أرقام دائرية وقفل بمفتاح، بحجم يناسب خزانة الملابس أو المكتب أو كاونتر المحل.',
    },
    fullDesc: desc(
      'Small enough to fit where larger safes cannot, this UCHIDA safe pairs a round digital keypad with a key lock on a brushed silver panel, for cash, passports and jewellery kept close at hand.',
      'صغيرة بما يكفي لتوضع حيث لا تتسع الخزائن الكبيرة، تجمع هذه الخزنة من UCHIDA لوحة أرقام دائرية وقفلًا بمفتاح على لوحة فضية، لحفظ النقود وجوازات السفر والمجوهرات في متناول اليد.',
    ),
    images: [
      img('uchida-compact-safe', 1536, 1024, 'Compact black UCHIDA safe with a round digital keypad and a key lock', 'خزنة UCHIDA سوداء صغيرة بلوحة أرقام دائرية وقفل مفتاح'),
    ],
    specTable: [
      brand,
      spec('Lock', 'القفل', 'Digital keypad and key', 'لوحة أرقام رقمية ومفتاح'),
      spec('Size', 'الحجم', 'Compact', 'صغير'),
      spec('Finish', 'اللون', 'Black', 'أسود'),
    ],
    isFeatured: false,
    order: 5,
  },
  {
    _id: 'p32',
    slug: 'uchida-double-door-safe',
    name: { en: 'UCHIDA Fire-Resistant Double-Door Safe, Model E-526', ar: 'خزنة UCHIDA مقاومة للحريق ببابين موديل E-526' },
    category: fire,
    shortDesc: {
      en: 'A large beige UCHIDA safe with two doors, a combination dial and a key lock, for offices, banks and institutions with a lot to protect.',
      ar: 'خزنة UCHIDA كبيرة باللون البيج ببابين، بقفل رقمي دوّار وقفل بمفتاح، للمكاتب والبنوك والمؤسسات التي تحفظ الكثير.',
    },
    fullDesc: desc(
      'When one door is not enough: this full-size UCHIDA safe opens wide on two doors, each on its own external hinges, with a combination dial and a key lock on a chrome bar. Room for ledgers, files, cash boxes and archives in one place.',
      'حين لا يكفي باب واحد: تنفتح هذه الخزنة الكبيرة من UCHIDA على بابين، لكل منهما مفصلاته الخارجية، بقفل رقمي دوّار وقفل بمفتاح على شريط معدني لامع، فتتسع للدفاتر والملفات وصناديق النقود والأرشيف في مكان واحد.',
    ),
    images: [
      img('uchida-double-door-safe', 1086, 1448, 'Large grey UCHIDA safe with two doors, a combination dial and a key lock', 'خزنة UCHIDA رمادية كبيرة ببابين وقرص أرقام سري وقفل مفتاح'),
    ],
    specTable: [
      brand,
      spec('Doors', 'الأبواب', 'Two', 'بابان'),
      spec('Lock', 'القفل', 'Combination dial and key', 'قفل رقمي دوّار ومفتاح'),
      spec('Finish', 'اللون', 'Grey', 'رمادي'),
    ],
    isFeatured: false,
    order: 6,
  },
  {
    _id: 'p33',
    slug: 'kurogane-wing-safe',
    name: { en: 'KUROGANE Wing Safe', ar: 'خزنة KUROGANE Wing Safe' },
    category: fire,
    shortDesc: {
      en: 'A black Japanese-made KUROGANE Wing Safe with a combination dial, a key lock and a lever handle, standing on raised feet.',
      ar: 'خزنة KUROGANE Wing Safe سوداء صناعة يابانية، بقفل رقمي دوّار وقفل بمفتاح ومقبض، تقف على قاعدة مرتفعة.',
    },
    fullDesc: desc(
      'Made in Japan by Kurogane Kosakusho, an Osaka company founded in 1927, the Wing Safe is built to protect important records and valuables against fire and theft. A combination dial and a key lock work together on a brushed steel panel, with a lever handle and heavy external hinges.',
      'صُنعت في اليابان لدى شركة Kurogane Kosakusho التي تأسست في أوساكا عام 1927، وصُمّمت خزنة Wing Safe لحماية السجلات المهمة والمقتنيات الثمينة من الحريق والسرقة. يعمل فيها القفل الرقمي الدوّار مع القفل بالمفتاح على لوحة من الفولاذ المصقول، مع مقبض ومفصلات خارجية متينة.',
    ),
    images: [
      img('kurogane-wing-safe-black', 1086, 1448, 'Black KUROGANE Wing Safe with a combination dial, key lock and lever handle', 'خزنة KUROGANE Wing سوداء بقرص أرقام سري وقفل مفتاح ومقبض ذراع'),
    ],
    specTable: [
      brandSpec('KUROGANE'),
      spec('Made in', 'بلد الصنع', 'Japan', 'اليابان'),
      spec('Lock', 'القفل', 'Combination dial and key', 'قفل رقمي دوّار ومفتاح'),
      spec('Finish', 'اللون', 'Black', 'أسود'),
    ],
    isFeatured: false,
    order: 9,
  },
  {
    _id: 'p34',
    slug: 'kurogane-compact-wing-safe',
    name: { en: 'KUROGANE Compact Fire-Resistant Wing Safe, Model SK-12', ar: 'خزنة KUROGANE Wing صغيرة مقاومة للحريق موديل SK-12' },
    category: fire,
    shortDesc: {
      en: 'A compact beige KUROGANE Wing Safe, made in Japan, with a combination dial and a key lock.',
      ar: 'خزنة KUROGANE Wing Safe صغيرة بلون بيج، صناعة يابانية، بقفل رقمي دوّار وقفل بمفتاح.',
    },
    fullDesc: desc(
      'This compact Wing Safe brings Japanese construction to a small size: a combination dial and a key lock on a steel panel, in a soft beige finish that sits quietly in a home or office.',
      'تقدّم هذه الخزنة صناعة Wing Safe اليابانية في حجم صغير: قفل رقمي دوّار وقفل بمفتاح على لوحة فولاذية، بلون بيج هادئ ينسجم في البيت أو المكتب.',
    ),
    images: [
      img('kurogane-wing-safe-beige', 1448, 1086, 'Compact beige KUROGANE Wing Safe with a combination dial and key lock', 'خزنة KUROGANE Wing صغيرة بيج بقرص أرقام سري وقفل مفتاح'),
    ],
    specTable: [
      brandSpec('KUROGANE'),
      spec('Made in', 'بلد الصنع', 'Japan', 'اليابان'),
      spec('Lock', 'القفل', 'Combination dial and key', 'قفل رقمي دوّار ومفتاح'),
      spec('Finish', 'اللون', 'Beige', 'بيج'),
    ],
    isFeatured: false,
    order: 10,
  },
  {
    _id: 'p35',
    slug: 'uchida-deposit-safe',
    name: { en: 'UCHIDA Fire-Resistant Deposit Safe, Model PB-ND15', ar: 'خزنة إيداع UCHIDA مقاومة للحريق موديل PB-ND15' },
    category: deposit,
    shortDesc: {
      en: 'A beige UCHIDA FIRESAFE deposit safe: staff drop cash into the top drawer, and only the key holder opens the safe below.',
      ar: 'خزنة إيداع UCHIDA FIRESAFE باللون البيج: يودع الموظفون النقود في الدرج العلوي، ولا يفتح الخزنة السفلية إلا من يملك المفتاح والرقم.',
    },
    fullDesc: desc(
      'Made for shops, restaurants and petrol stations that take cash all day. The top drawer, with its own key, lets takings be deposited without opening the main door, while the safe below is locked by a digital keypad and a key. Nobody on shift needs the code.',
      'صُمّمت للمحلات والمطاعم ومحطات الوقود التي تستلم النقود طوال اليوم. يتيح الدرج العلوي، بمفتاحه الخاص، إيداع الإيراد دون فتح الباب الرئيسي، بينما تُقفل الخزنة السفلية بلوحة أرقام رقمية ومفتاح، فلا يحتاج موظف الوردية إلى الرقم السري.',
    ),
    images: [
      img('uchida-deposit-safe-green', 1086, 1448, 'Grey-green UCHIDA deposit safe with a top deposit drawer and a digital keypad', 'خزنة إيداع UCHIDA رمادية مخضرّة بدرج إيداع علوي وقفل رقمي'),
      img('uchida-deposit-safe-green-keys', 1086, 1448, 'The UCHIDA deposit safe with its keys in the lock', 'خزنة الإيداع UCHIDA ومفاتيحها في القفل'),
    ],
    specTable: [
      brand,
      spec('Deposit', 'الإيداع', 'Top drawer with its own key', 'درج علوي بمفتاح مستقل'),
      spec('Lock', 'القفل', 'Digital keypad and key', 'لوحة أرقام رقمية ومفتاح'),
      spec('Finish', 'اللون', 'Grey-green', 'رمادي مخضر'),
    ],
    isFeatured: false,
    order: 11,
  },
  {
    _id: 'p36',
    slug: 'uchida-night-deposit-safe',
    name: { en: 'UCHIDA Night Deposit Safe, Model UFLC-360E', ar: 'خزنة إيداع ليلي UCHIDA موديل UFLC-360E' },
    category: deposit,
    shortDesc: {
      en: 'A cream UCHIDA deposit safe with a pull-out drop drawer on top and a digital keypad, key and handle on the main door.',
      ar: 'خزنة إيداع UCHIDA بلون كريمي، بدرج إيداع علوي يُسحب للخارج، ولوحة أرقام رقمية ومفتاح ومقبض على الباب الرئيسي.',
    },
    fullDesc: desc(
      'Cash goes in, but not out: envelopes and takings are dropped through the top drawer at the end of a shift and fall into the locked body of the safe, which opens only with the digital code and the key. Ideal for end-of-day cash in shops, offices and branches.',
      'النقود تدخل ولا تخرج: تُودع الأظرف والإيرادات عبر الدرج العلوي في نهاية الوردية فتسقط داخل جسم الخزنة المقفل، الذي لا يُفتح إلا بالرقم السري والمفتاح. مثالية لإيداع نقود آخر اليوم في المحلات والمكاتب والفروع.',
    ),
    images: [
      img('uchida-deposit-safe-cream', 1086, 1448, 'Cream UCHIDA night deposit safe with a top drop drawer and a digital keypad', 'خزنة إيداع ليلي UCHIDA كريمية بدرج إيداع علوي وقفل رقمي'),
    ],
    specTable: [
      brand,
      spec('Deposit', 'الإيداع', 'Pull-out drop drawer', 'درج إيداع يُسحب للخارج'),
      spec('Lock', 'القفل', 'Digital keypad and key', 'لوحة أرقام رقمية ومفتاح'),
      spec('Finish', 'اللون', 'Cream', 'كريمي'),
    ],
    isFeatured: false,
    order: 12,
  },
  {
    _id: 'p47',
    slug: 'sakura-digital-hotel-safe',
    name: { en: 'SAKURA Digital Hotel Safe, Model UBHS-16', ar: 'خزنة فندقية SAKURA بقفل رقمي موديل UBHS-16' },
    category: hotel,
    shortDesc: {
      en: 'A beige SAKURA hotel safe with a CE-approved digital keypad, a display screen and a turning knob, for hotel rooms, serviced apartments and homes.',
      ar: 'خزنة فندقية SAKURA باللون البيج، بقفل رقمي حاصل على شهادة CE مع شاشة ولوحة أرقام ومقبض دوّار، لغرف الفنادق والشقق الفندقية والبيوت.',
    },
    fullDesc: desc(
      'The safe guests expect to find in the wardrobe: a digital keypad with a display screen and a turning knob, so passports, cash, phones and jewellery stay locked while they are out. The lock carries CE approval, and the textured steel body is sized to sit inside a wardrobe or under a desk.',
      'الخزنة التي يتوقع النزيل أن يجدها في خزانة الملابس: لوحة أرقام رقمية مع شاشة ومقبض دوّار، فتبقى جوازات السفر والنقود والهواتف والمجوهرات مقفلة أثناء خروجه. القفل حاصل على شهادة CE، وجسم الخزنة الحديدي المحبّب بحجم يناسب خزانة الملابس أو أسفل المكتب.',
    ),
    images: [
      img(
        'sakura-hotel-safe',
        1448,
        1086,
        'Light-silver SAKURA hotel safe with a digital keypad, display and turning knob',
        'خزنة فندقية SAKURA بلون فضي فاتح بقفل رقمي وشاشة ومقبض دوّار',
      ),
    ],
    specTable: [
      brandSpec('SAKURA'),
      spec('Lock', 'القفل', 'Digital keypad with display (CE approved)', 'لوحة أرقام رقمية بشاشة (شهادة CE)'),
      spec('Use', 'الاستخدام', 'Hotel rooms, serviced apartments and homes', 'غرف الفنادق والشقق الفندقية والبيوت'),
      spec('Finish', 'اللون', 'Light silver', 'فضي فاتح'),
    ],
    isFeatured: false,
    order: 12.1,
  },
  {
    _id: 'p48',
    slug: 'sakura-compact-digital-hotel-safe',
    name: { en: 'SAKURA Compact Digital Hotel Safe, Model UBHS-14', ar: 'خزنة فندقية SAKURA صغيرة بقفل رقمي موديل UBHS-14' },
    category: hotel,
    shortDesc: {
      en: 'A compact beige SAKURA hotel safe with a CE-approved digital keypad, a display screen and a turning knob, for a wardrobe shelf or a bedside cabinet.',
      ar: 'خزنة فندقية SAKURA صغيرة باللون البيج، بقفل رقمي حاصل على شهادة CE مع شاشة ولوحة أرقام ومقبض دوّار، لرف خزانة الملابس أو الكومودينو.',
    },
    fullDesc: desc(
      'The smaller of our SAKURA hotel safes, for rooms where space is tight: the same digital keypad with a display screen and a turning knob in a lower, wider body that fits on a wardrobe shelf or in a bedside cabinet. A practical choice for hotel rooms, staff housing and homes.',
      'الأصغر بين خزائن SAKURA الفندقية لدينا، للغرف ضيّقة المساحة: لوحة الأرقام الرقمية نفسها مع الشاشة والمقبض الدوّار، في جسم أقل ارتفاعًا يناسب رف خزانة الملابس أو الكومودينو. خيار عملي لغرف الفنادق وسكن الموظفين والبيوت.',
    ),
    images: [
      img(
        'sakura-hotel-safe-compact',
        1448,
        1086,
        'Compact silver SAKURA hotel safe with a digital keypad, display and turning knob',
        'خزنة فندقية SAKURA فضية صغيرة بقفل رقمي وشاشة ومقبض دوّار',
      ),
    ],
    specTable: [
      brandSpec('SAKURA'),
      spec('Lock', 'القفل', 'Digital keypad with display (CE approved)', 'لوحة أرقام رقمية بشاشة (شهادة CE)'),
      spec('Size', 'الحجم', 'Compact', 'صغير'),
      spec('Finish', 'اللون', 'Silver', 'فضي'),
    ],
    isFeatured: false,
    order: 12.2,
  },
  {
    _id: 'p49',
    slug: 'uchida-key-hotel-safe',
    name: { en: 'UCHIDA Fire-Resistant Key Hotel Safe, Model HS-23K1', ar: 'خزنة فندقية UCHIDA مقاومة للحريق بقفل مفتاح موديل HS-23K1' },
    category: hotel,
    shortDesc: {
      en: 'A low, wide UCHIDA hotel safe, model HS-23K1, with a chrome key lock and two external hinges, in black or beige, for hotel rooms, wardrobes and desks.',
      ar: 'خزنة فندقية UCHIDA منخفضة وعريضة موديل HS-23K1، بقفل مفتاح معدني لامع ومفصلتين خارجيتين، باللون الأسود أو البيج، لغرف الفنادق وخزائن الملابس والمكاتب.',
    },
    fullDesc: desc(
      'No code to forget: this UCHIDA safe locks with a key, set in a chrome keyhole on a brushed silver handle plate. Its low, wide body slides into a wardrobe or under a desk, and the door swings on two sturdy external hinges. Choose black, or beige to blend with light wardrobes and hotel furniture.',
      'بلا رقم سري يُنسى: تُقفل هذه الخزنة من UCHIDA بمفتاح في قفل معدني لامع على لوحة مقبض فضية. جسمها المنخفض العريض يدخل في خزانة الملابس أو أسفل المكتب، ويدور بابها على مفصلتين خارجيتين متينتين. اختاروا الأسود، أو البيج لينسجم مع خزائن الملابس والأثاث الفندقي الفاتح.',
    ),
    images: [
      img('uchida-hotel-safe-black', 1448, 1086, 'Low black UCHIDA hotel safe with a chrome key lock and two external hinges', 'خزنة فندقية UCHIDA سوداء منخفضة بقفل مفتاح من الكروم ومفصلتين خارجيتين'),
      img('uchida-hotel-safe-ivory', 1586, 992, 'Low ivory UCHIDA hotel safe with a chrome key lock and two external hinges', 'خزنة فندقية UCHIDA عاجية منخفضة بقفل مفتاح من الكروم ومفصلتين خارجيتين'),
    ],
    specTable: [
      brand,
      spec('Lock', 'القفل', 'Key', 'مفتاح'),
      spec('Hinges', 'المفصلات', 'Two external hinges', 'مفصلتان خارجيتان'),
    ],
    isFeatured: false,
    order: 30,
  },


  {
    _id: 'p37',
    slug: 'sakura-floral-safe',
    name: { en: 'SAKURA Fire-Resistant Floral Safe, Model UDS-65BE', ar: 'خزنة SAKURA مقاومة للحريق بباب مزخرف موديل UDS-65BE' },
    category: luxury,
    shortDesc: {
      en: 'A SAKURA safe with a floral door, in black or silver mirror, with a wheel handle and a digital lock panel.',
      ar: 'خزنة SAKURA بباب مزخرف بالزهور، باللون الأسود أو بواجهة مرآة فضية، بمقبض دائري ولوحة قفل رقمية.',
    },
    fullDesc: desc(
      'A safe that looks like a piece of décor: its door is printed with tall blossoms on black or on a silver mirror finish, set in a cream frame, with a three-spoke wheel handle and a digital lock panel. Made for bedrooms and dressing rooms where the safe stays in view.',
      'خزنة تبدو قطعة من الديكور: بابها مزيّن بزهور طويلة على خلفية سوداء أو على واجهة مرآة فضية، في إطار كريمي، مع مقبض دائري بثلاثة أذرع ولوحة قفل رقمية. صُمّمت لغرف النوم وغرف الملابس التي تبقى فيها الخزنة ظاهرة.',
    ),
    images: [
      img('sakura-floral-safe-black', 1174, 1339, 'SAKURA safe with a black floral door and a wheel handle', 'خزنة SAKURA بباب أسود مزخرف بالزهور ومقبض دائري'),
      img('sakura-floral-safe-silver', 1086, 1448, 'SAKURA safe with a silver mirror floral door', 'خزنة SAKURA بباب فضي عاكس مزخرف بالزهور'),
    ],
    specTable: [
      brandSpec('SAKURA'),
      spec('Lock', 'القفل', 'Digital lock with wheel handle', 'قفل رقمي ومقبض دائري'),
      spec('Finishes', 'التشطيبات', 'Black floral, silver mirror floral', 'أسود بالزهور، مرآة فضية بالزهور'),
    ],
    isFeatured: false,
    order: 16,
  },
  {
    _id: 'p38',
    slug: 'uchida-fire-resistant-records-cabinet',
    name: { en: 'UCHIDA Fire-Resistant Four-Drawer Records Cabinet, Model UMB4-4K', ar: 'خزانة سجلات UCHIDA مقاومة للحريق بأربعة أدراج موديل UMB4-4K' },
    category: filing,
    shortDesc: {
      en: 'A cream UCHIDA four-drawer records cabinet built to resist fire, with two key locks on top and a key lock on every drawer.',
      ar: 'خزانة سجلات UCHIDA بأربعة أدراج بلون كريمي، مقاومة للحريق، بقفلين بمفتاح في الأعلى وقفل بمفتاح لكل درج.',
    },
    fullDesc: desc(
      'For files that cannot be replaced: four deep drawers inside a fire-resistant body, locked by two keys at the top and a separate key on each drawer, so departments can share one cabinet and still keep their files apart.',
      'للملفات التي لا يمكن تعويضها: أربعة أدراج عميقة داخل هيكل مقاوم للحريق، تُقفل بمفتاحين في الأعلى ومفتاح مستقل لكل درج، فتتشارك الأقسام خزانة واحدة وتبقى ملفات كل قسم منفصلة.',
    ),
    images: [
      img('uchida-records-cabinet-cream', 1024, 1536, 'Cream UCHIDA fire-resistant four-drawer records cabinet with key locks', 'خزانة سجلات UCHIDA كريمية مقاومة للحريق بأربعة أدراج وأقفال بمفاتيح'),
    ],
    specTable: [
      brand,
      spec('Drawers', 'الأدراج', 'Four', 'أربعة'),
      spec('Lock', 'القفل', 'Two top locks and a key per drawer', 'قفلان علويان ومفتاح لكل درج'),
      spec('Finish', 'اللون', 'Cream', 'كريمي'),
    ],
    isFeatured: false,
    order: 24,
  },
  {
    _id: 'p39',
    slug: 'sakura-fire-resistant-filing-cabinet',
    name: { en: 'SAKURA Fire-Resistant Four-Drawer Filing Cabinet with Digital Lock, Model UB4-4DLK', ar: 'خزانة ملفات SAKURA مقاومة للحريق بأربعة أدراج وقفل رقمي موديل UB4-4DLK' },
    category: filing,
    shortDesc: {
      en: 'A black SAKURA four-drawer filing cabinet, fire-resistant, with a digital keypad lock at the top.',
      ar: 'خزانة ملفات SAKURA سوداء بأربعة أدراج، مقاومة للحريق، بقفل رقمي بلوحة أرقام في الأعلى.',
    },
    fullDesc: desc(
      'Four full-depth drawers for contracts, deeds and records, protected by a fire-resistant body and locked with a digital keypad, so there is no key to lose.',
      'أربعة أدراج عميقة للعقود والصكوك والسجلات، يحميها هيكل مقاوم للحريق وتُقفل بلوحة أرقام رقمية، فلا مفتاح يضيع.',
    ),
    images: [
      img('sakura-filing-cabinet-black', 1024, 1536, 'Black SAKURA fire-resistant four-drawer filing cabinet with a digital keypad', 'خزانة ملفات SAKURA سوداء مقاومة للحريق بأربعة أدراج وقفل رقمي'),
    ],
    specTable: [
      brandSpec('SAKURA'),
      spec('Drawers', 'الأدراج', 'Four', 'أربعة'),
      spec('Lock', 'القفل', 'Digital keypad', 'لوحة أرقام رقمية'),
      spec('Finish', 'اللون', 'Black', 'أسود'),
    ],
    isFeatured: false,
    order: 25,
  },
  {
    _id: 'p40',
    slug: 'sakura-four-drawer-filing-cabinet',
    name: { en: 'SAKURA Fire-Resistant Four-Drawer Filing Cabinet, Model UB4-4K2K', ar: 'خزانة ملفات SAKURA مقاومة للحريق بأربعة أدراج موديل UB4-4K2K' },
    category: filing,
    shortDesc: {
      en: 'A SAKURA fire-resistant filing cabinet, model UB4-4K2K, with four drawers that each lock with their own key, in white or black.',
      ar: 'خزانة ملفات SAKURA مقاومة للحريق موديل UB4-4K2K، بأربعة أدراج لكل منها قفل بمفتاح، باللون الأبيض أو الأسود.',
    },
    fullDesc: desc(
      'For ministries, banks, companies and clinics that keep important records on paper. Four deep drawers each have their own key lock and a label holder, so files stay organised, and the body is fire-resistant. Shown here in black and in a light finish.',
      'للوزارات والبنوك والشركات والعيادات التي تحتفظ بسجلاتها الورقية المهمة. أربعة أدراج عميقة لكل منها قفل مستقل بمفتاح وحامل لبطاقة التعريف، لتبقى الملفات منظّمة، وهيكلها مقاوم للحريق. تظهر هنا باللون الأسود وبلون فاتح.',
    ),
    images: [
      img('uchida-filing-cabinet', 1024, 1536, 'SAKURA four-drawer filing cabinet in black steel', 'خزانة ملفات SAKURA بأربعة أدراج من الفولاذ الأسود'),
      img('sakura-filing-cabinet-white', 1024, 1536, 'Light-grey SAKURA four-drawer filing cabinet with a key lock on each drawer', 'خزانة ملفات SAKURA رمادية فاتحة بأربعة أدراج وقفل مفتاح لكل درج'),
    ],
    specTable: [
      brandSpec('SAKURA'),
      spec('Drawers', 'الأدراج', 'Four, each with its own key lock', 'أربعة، لكل منها قفل بمفتاح'),
      spec('Detail', 'التفاصيل', 'A label holder on each drawer', 'حامل لبطاقة التعريف على كل درج'),
      spec('For', 'الاستخدام', 'Files and documents', 'الملفات والمستندات'),
    ],
    isFeatured: true,
    order: 23,
  },

  {
    _id: 'p41',
    slug: 'uchida-key-cabinet',
    name: { en: 'UCHIDA Key Cabinet for 60 Keys', ar: 'خزانة مفاتيح UCHIDA لـ 60 مفتاحًا' },
    category: keyCabinets,
    shortDesc: {
      en: 'A compact grey wall-mounted UCHIDA key cabinet with a carry handle, numbered hooks and colour-coded tags, closed with a key lock.',
      ar: 'خزانة مفاتيح UCHIDA رمادية صغيرة تُعلّق على الجدار، بمقبض للحمل وخطافات مرقّمة وميداليات ملوّنة، تُقفل بمفتاح.',
    },
    fullDesc: desc(
      'Every key in its numbered place: rows of numbered hooks inside the cabinet and on its door, with yellow and blue tags to sort keys by building, floor or vehicle. Ideal for hotels, compounds, companies, car showrooms and maintenance teams.',
      'لكل مفتاح مكانه المرقّم: صفوف من الخطافات المرقّمة داخل الخزانة وعلى بابها، مع ميداليات صفراء وزرقاء لتصنيف المفاتيح حسب المبنى أو الطابق أو السيارة. مثالية للفنادق والمجمعات السكنية والشركات ومعارض السيارات وفرق الصيانة.',
    ),
    images: [
      img('uchida-key-cabinet-grey', 1086, 1448, 'Compact grey UCHIDA wall key cabinet, closed', 'خزانة مفاتيح UCHIDA جدارية رمادية صغيرة، مغلقة'),
      img('uchida-key-cabinet-grey-open', 1086, 1448, 'The UCHIDA key cabinet open, with numbered hooks and yellow and blue key tags', 'خزانة مفاتيح UCHIDA مفتوحة، بخطافات مرقّمة وبطاقات مفاتيح صفراء وزرقاء'),
    ],
    specTable: [
      brand,
      spec('Hooks', 'الخطافات', 'Numbered, inside the cabinet and on its door', 'مرقّمة، داخل الخزانة وعلى بابها'),
      spec('Mounting', 'التركيب', 'Wall-mounted', 'يُعلّق على الجدار'),
      spec('Lock', 'القفل', 'Key', 'مفتاح'),
      spec('Finish', 'اللون', 'Grey', 'رمادي'),
    ],
    isFeatured: false,
    order: 30,
  },
  {
    _id: 'p46',
    slug: 'uchida-tall-key-cabinet',
    name: { en: 'UCHIDA Key Cabinet for 100 Keys', ar: 'خزانة مفاتيح UCHIDA لـ 100 مفتاح' },
    category: keyCabinets,
    shortDesc: {
      en: 'A tall, slim grey wall-mounted UCHIDA key cabinet with more rows of numbered hooks and colour-coded tags, closed with a key lock.',
      ar: 'خزانة مفاتيح UCHIDA رمادية طويلة ونحيفة تُعلّق على الجدار، بصفوف أكثر من الخطافات المرقّمة والميداليات الملوّنة، تُقفل بمفتاح.',
    },
    fullDesc: desc(
      'For places with a lot of keys: this tall UCHIDA cabinet holds more rows of numbered hooks inside and on its door, with yellow and blue tags to sort keys by building, floor or vehicle, in a slim body that takes little wall space. Ideal for hotels, large compounds, companies and car showrooms.',
      'للأماكن التي تكثر فيها المفاتيح: تضم هذه الخزانة الطويلة من UCHIDA صفوفًا أكثر من الخطافات المرقّمة داخلها وعلى بابها، مع ميداليات صفراء وزرقاء لتصنيف المفاتيح حسب المبنى أو الطابق أو السيارة، في هيكل نحيف لا يشغل مساحة كبيرة من الجدار. مثالية للفنادق والمجمعات السكنية الكبيرة والشركات ومعارض السيارات.',
    ),
    images: [
      img('uchida-key-cabinet-tall', 1086, 1448, 'Tall slim grey UCHIDA wall key cabinet, closed', 'خزانة مفاتيح UCHIDA جدارية رمادية طويلة ونحيفة، مغلقة'),
      img('uchida-key-cabinet-tall-open', 1219, 1290, 'The tall UCHIDA key cabinet open, with rows of numbered hooks and yellow and blue key tags', 'خزانة مفاتيح UCHIDA الطويلة مفتوحة، بصفوف من الخطافات المرقّمة وبطاقات مفاتيح صفراء وزرقاء'),
    ],
    specTable: [
      brand,
      spec('Hooks', 'الخطافات', 'Numbered, inside the cabinet and on its door', 'مرقّمة، داخل الخزانة وعلى بابها'),
      spec('Mounting', 'التركيب', 'Wall-mounted', 'يُعلّق على الجدار'),
      spec('Lock', 'القفل', 'Key', 'مفتاح'),
      spec('Finish', 'اللون', 'Grey', 'رمادي'),
    ],
    isFeatured: false,
    order: 31,
  },
  {
    _id: 'p42',
    slug: 'bsm-auto-cash-box',
    name: { en: 'UCHIDA Cash Box with Combination Dials, Model UC-305', ar: 'صندوق نقود UCHIDA بقفلين دوّارين موديل UC-305' },
    category: cashBoxes,
    shortDesc: {
      en: 'A dark grey UCHIDA auto cash box with two combination dials, a key lock and a front cash drawer, for shop counters and cashiers.',
      ar: 'صندوق نقود UCHIDA بلون رمادي داكن، بقفلين رقميين دوّارين وقفل بمفتاح ودرج نقود أمامي، لكاونترات المحلات والكاشير.',
    },
    fullDesc: desc(
      'This cash box keeps the day’s cash at the counter but out of reach: its front drawer opens only after both combination dials and the key are set, and it can sit under the counter or inside a cabinet.',
      'يُبقي هذا الصندوق نقود اليوم عند الكاونتر وبعيدة عن متناول الآخرين: لا يُفتح درجه الأمامي إلا بعد ضبط القفلين الدوّارين والمفتاح، ويمكن وضعه تحت الكاونتر أو داخل خزانة.',
    ),
    images: [
      img('bsm-auto-cash-box-dials', 1536, 1024, 'Dark grey UCHIDA auto cash box with two combination dials and a key lock', 'صندوق نقود UCHIDA أوتوماتيكي رمادي داكن بقرصين للأرقام السرية وقفل مفتاح'),
    ],
    specTable: [
      brandSpec('UCHIDA'),
      spec('Lock', 'القفل', 'Two combination dials and key', 'قفلان رقميان دوّاران ومفتاح'),
      spec('Finish', 'اللون', 'Dark grey', 'رمادي داكن'),
    ],
    isFeatured: false,
    order: 32,
  },
  {
    _id: 'p43',
    slug: 'bsm-digital-auto-cash-box',
    name: { en: 'UCHIDA Digital Cash Drawer, Model UNC-350D', ar: 'صندوق نقود UCHIDA رقمي بدرج موديل UNC-350D' },
    category: cashBoxes,
    shortDesc: {
      en: 'A light-grey UCHIDA auto cash box with a digital keypad, a key lock and a push-button drawer.',
      ar: 'صندوق نقود UCHIDA بلون رمادي فاتح، بلوحة أرقام رقمية وقفل بمفتاح ودرج يُفتح بزر.',
    },
    fullDesc: desc(
      'Enter the code and the drawer opens at the push of a button. The digital keypad is backed by a key lock, and the slim front drawer keeps notes flat and tidy through the working day.',
      'أدخلوا الرقم السري فيُفتح الدرج بضغطة زر. تعمل لوحة الأرقام الرقمية مع قفل احتياطي بمفتاح، ويحفظ الدرج الأمامي النحيف الأوراق النقدية مرتّبة طوال يوم العمل.',
    ),
    images: [
      img('bsm-auto-cash-box-digital', 1200, 1310, 'Light-grey UCHIDA digital auto cash box with a keypad and push-button drawer', 'صندوق نقود UCHIDA أوتوماتيكي رقمي رمادي فاتح بلوحة أرقام ودرج يُفتح بزر'),
    ],
    specTable: [
      brandSpec('UCHIDA'),
      spec('Lock', 'القفل', 'Digital keypad and key', 'لوحة أرقام رقمية ومفتاح'),
      spec('Opening', 'طريقة الفتح', 'Push-button drawer', 'درج يُفتح بزر'),
      spec('Finish', 'اللون', 'Light grey', 'رمادي فاتح'),
    ],
    isFeatured: false,
    order: 33,
  },
  {
    _id: 'p44',
    slug: 'bsm-portable-cash-box',
    name: { en: 'UCHIDA Portable Cash Box, Model C-302', ar: 'صندوق نقود UCHIDA محمول موديل C-302' },
    category: cashBoxes,
    shortDesc: {
      en: 'A portable light-grey UCHIDA cash box with a carry handle, two combination dials and a key lock.',
      ar: 'صندوق نقود UCHIDA محمول بلون رمادي فاتح، بمقبض للحمل وقفلين رقميين دوّارين وقفل بمفتاح.',
    },
    fullDesc: desc(
      'Built to be carried: this cash box has a handle on top and closes with two combination dials and a key, for moving cash between the counter, the office and the bank, or for events and markets.',
      'صُمّم ليُحمل: لهذا الصندوق مقبض علوي ويُقفل بقفلين رقميين دوّارين ومفتاح، لنقل النقود بين الكاونتر والمكتب والبنك، أو للمعارض والفعاليات.',
    ),
    images: [
      img('bsm-portable-cash-box', 1448, 1086, 'Portable light-grey UCHIDA cash box with a handle and two combination dials', 'صندوق نقود UCHIDA محمول رمادي فاتح بمقبض وقرصين للأرقام السرية'),
    ],
    specTable: [
      brandSpec('UCHIDA'),
      spec('Lock', 'القفل', 'Two combination dials and key', 'قفلان رقميان دوّاران ومفتاح'),
      spec('Carrying', 'الحمل', 'Top handle', 'مقبض علوي'),
    ],
    isFeatured: false,
    order: 34,
  },
]

/** The catalogue with the company sheet's model, price, dimensions and other figures merged in. */
export const sampleProducts: Product[] = catalogue.map((p) => ({ ...p, ...withDetails(p.slug, p.specTable) }))
