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

const brand = spec('Brand', 'العلامة التجارية', 'UCHIDA', 'UCHIDA')

const img = (name: string, width: number, height: number, alt: string) => ({ url: `/products/${name}.webp`, alt, width, height })

export const sampleCategories: Category[] = [
  { _id: 'cat-fire', slug: 'fire-resistant-safes', title: { en: 'Fire-Resistant Safes', ar: 'الخزائن المقاومة للحريق' } },
  { _id: 'cat-filing', slug: 'filing-cabinets', title: { en: 'Filing Cabinets', ar: 'خزائن الملفات' } },
  { _id: 'cat-luxury', slug: 'luxury-safes', title: { en: 'Luxury Safes', ar: 'الخزائن الفاخرة' } },
  { _id: 'cat-interiors', slug: 'jewellery-watch-interiors', title: { en: 'Jewellery & Watch Interiors', ar: 'تجهيزات المجوهرات والساعات' } },
]

const [fire, filing, luxury, interiors] = sampleCategories

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
]
