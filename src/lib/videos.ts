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
