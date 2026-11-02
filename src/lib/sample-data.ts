/**
 * Demo catalog shown ONLY while the Sanity dataset has no products, so the
 * site can be previewed and deployed before content is entered. As soon as
 * the first product is published in Sanity (and the site rebuilds), this
 * file is no longer used.
 */
import type { PortableTextBlock } from 'next-sanity'
import type { Category, ClientLogo, Product, SpecRow } from './types'

const para = (text: string, key: string): PortableTextBlock => ({
  _type: 'block',
  _key: key,
  style: 'normal',
  markDefs: [],
  children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
})

const desc = (en: string[], ar: string[]) => ({
  en: en.map((t, i) => para(t, `en${i}`)),
  ar: ar.map((t, i) => para(t, `ar${i}`)),
})

const spec = (label_en: string, label_ar: string, value_en: string, value_ar: string): SpecRow => ({
  label: { en: label_en, ar: label_ar },
  value: { en: value_en, ar: value_ar },
})

const img = (name: string, alt: string) => ({ url: `/samples/${name}.svg`, alt, width: 1200, height: 900 })

export const sampleCategories: Category[] = [
  { _id: 'cat-industrial', slug: 'industrial-equipment', title: { en: 'Industrial Equipment', ar: 'المعدات الصناعية' } },
  { _id: 'cat-building', slug: 'building-materials', title: { en: 'Building Materials', ar: 'مواد البناء' } },
  { _id: 'cat-electrical', slug: 'electrical-supplies', title: { en: 'Electrical Supplies', ar: 'المستلزمات الكهربائية' } },
  { _id: 'cat-safety', slug: 'safety-equipment', title: { en: 'Safety Equipment', ar: 'معدات السلامة' } },
]

const [industrial, building, electrical, safety] = sampleCategories

const commonDesc = desc(
  [
    'Sourced from certified manufacturers and inspected by our quality team before dispatch. Every shipment is delivered with full documentation, including certificates of origin and conformity.',
    'Our technical team can help you select the right specification for your application and arrange scheduled deliveries for large projects.',
  ],
  [
    'يتم توريده من مصنعين معتمدين ويخضع لفحص فريق الجودة لدينا قبل الشحن. تُسلَّم كل شحنة مع كامل المستندات، بما في ذلك شهادات المنشأ والمطابقة.',
    'يساعدك فريقنا الفني في اختيار المواصفات المناسبة لتطبيقك، ويمكننا ترتيب توريدات مجدولة للمشروعات الكبرى.',
  ],
)

export const sampleProducts: Product[] = [
  {
    _id: 'p1',
    slug: 'industrial-centrifugal-pump',
    name: { en: 'Industrial Centrifugal Pump', ar: 'مضخة طرد مركزي صناعية' },
    category: industrial,
    shortDesc: {
      en: 'High-efficiency end-suction pump for water supply, HVAC and process applications.',
      ar: 'مضخة عالية الكفاءة لتطبيقات إمداد المياه والتكييف والعمليات الصناعية.',
    },
    fullDesc: commonDesc,
    images: [img('industrial', 'Industrial centrifugal pump'), img('detail-a', 'Pump detail'), img('detail-b', 'Pump nameplate')],
    specTable: [
      spec('Flow rate', 'معدل التدفق', 'Up to 250 m³/h', 'حتى 250 م³/ساعة'),
      spec('Head', 'الضاغط', 'Up to 90 m', 'حتى 90 م'),
      spec('Motor power', 'قدرة المحرك', '5.5 – 75 kW', '5.5 – 75 كيلوواط'),
      spec('Casing material', 'مادة الغلاف', 'Cast iron / Stainless steel', 'حديد زهر / صلب مقاوم للصدأ'),
      spec('Standard', 'المعيار', 'ISO 2858', 'ISO 2858'),
    ],
    isFeatured: true,
    order: 1,
  },
  {
    _id: 'p2',
    slug: 'ductile-iron-gate-valve',
    name: { en: 'Ductile Iron Gate Valve', ar: 'محبس بوابة من الحديد المرن' },
    category: industrial,
    shortDesc: {
      en: 'Resilient-seated gate valves for potable water and wastewater networks.',
      ar: 'محابس بوابة بمقعد مرن لشبكات مياه الشرب والصرف الصحي.',
    },
    fullDesc: commonDesc,
    images: [img('detail-a', 'Gate valve'), img('industrial', 'Valve installation')],
    specTable: [
      spec('Size range', 'نطاق المقاسات', 'DN50 – DN600', 'DN50 – DN600'),
      spec('Pressure rating', 'تصنيف الضغط', 'PN10 / PN16', 'PN10 / PN16'),
      spec('Body', 'الجسم', 'Ductile iron GGG50', 'حديد مرن GGG50'),
      spec('Coating', 'الطلاء', 'Fusion-bonded epoxy', 'إيبوكسي مدمج حرارياً'),
    ],
    isFeatured: true,
    order: 2,
  },
  {
    _id: 'p3',
    slug: 'seamless-steel-pipes',
    name: { en: 'Seamless Steel Pipes', ar: 'مواسير صلب غير ملحومة' },
    category: building,
    shortDesc: {
      en: 'API 5L and ASTM A106 seamless pipes for structural and pressure applications.',
      ar: 'مواسير غير ملحومة وفق API 5L و ASTM A106 للتطبيقات الإنشائية وتطبيقات الضغط.',
    },
    fullDesc: commonDesc,
    images: [img('building', 'Seamless steel pipes'), img('detail-b', 'Pipe ends')],
    specTable: [
      spec('Outside diameter', 'القطر الخارجي', '21.3 – 610 mm', '21.3 – 610 مم'),
      spec('Wall thickness', 'سمك الجدار', 'SCH 10 – XXS', 'SCH 10 – XXS'),
      spec('Grade', 'الدرجة', 'API 5L Gr.B / X42 – X70', 'API 5L Gr.B / X42 – X70'),
      spec('Length', 'الطول', '6 m / 12 m', '6 م / 12 م'),
    ],
    isFeatured: true,
    order: 3,
  },
  {
    _id: 'p4',
    slug: 'portland-cement-42-5',
    name: { en: 'Portland Cement 42.5N', ar: 'أسمنت بورتلاندي 42.5N' },
    category: building,
    shortDesc: {
      en: 'General-purpose CEM I cement in 50 kg bags or bulk for ready-mix and precast.',
      ar: 'أسمنت CEM I متعدد الاستخدامات في أكياس 50 كجم أو سائب للخرسانة الجاهزة والمسبقة الصب.',
    },
    fullDesc: commonDesc,
    images: [img('building', 'Cement bags'), img('detail-a', 'Cement texture')],
    specTable: [
      spec('Strength class', 'فئة المقاومة', '42.5 N', '42.5 N'),
      spec('Standard', 'المعيار', 'EN 197-1', 'EN 197-1'),
      spec('Packaging', 'التعبئة', '50 kg bags / Bulk', 'أكياس 50 كجم / سائب'),
    ],
    isFeatured: false,
    order: 4,
  },
  {
    _id: 'p5',
    slug: 'xlpe-power-cable',
    name: { en: 'XLPE Insulated Power Cable', ar: 'كابل قوى معزول XLPE' },
    category: electrical,
    shortDesc: {
      en: 'Low and medium-voltage copper and aluminium cables for distribution networks.',
      ar: 'كابلات نحاس وألومنيوم للجهد المنخفض والمتوسط لشبكات التوزيع.',
    },
    fullDesc: commonDesc,
    images: [img('electrical', 'XLPE power cable'), img('detail-b', 'Cable cross-section')],
    specTable: [
      spec('Voltage', 'الجهد', '0.6/1 kV – 18/30 kV', '0.6/1 ك.ف – 18/30 ك.ف'),
      spec('Conductor', 'الموصل', 'Copper / Aluminium', 'نحاس / ألومنيوم'),
      spec('Cores', 'عدد الأقطاب', '1 – 4 + E', '1 – 4 + أرضي'),
      spec('Standard', 'المعيار', 'IEC 60502', 'IEC 60502'),
    ],
    isFeatured: true,
    order: 5,
  },
  {
    _id: 'p6',
    slug: 'main-distribution-board',
    name: { en: 'Main Distribution Board', ar: 'لوحة توزيع رئيسية' },
    category: electrical,
    shortDesc: {
      en: 'Type-tested LV switchboards built to project specifications.',
      ar: 'لوحات جهد منخفض مختبرة النوع ومصنّعة وفق مواصفات المشروع.',
    },
    fullDesc: commonDesc,
    images: [img('electrical', 'Distribution board'), img('detail-a', 'Breakers')],
    specTable: [
      spec('Rated current', 'التيار المقنن', 'Up to 4000 A', 'حتى 4000 أمبير'),
      spec('Short-circuit rating', 'تحمل القصر', '50 kA / 1 s', '50 ك.أ / 1 ث'),
      spec('Protection', 'درجة الحماية', 'IP42 – IP54', 'IP42 – IP54'),
      spec('Standard', 'المعيار', 'IEC 61439', 'IEC 61439'),
    ],
    isFeatured: true,
    order: 6,
  },
  {
    _id: 'p7',
    slug: 'industrial-safety-helmet',
    name: { en: 'Industrial Safety Helmet', ar: 'خوذة سلامة صناعية' },
    category: safety,
    shortDesc: {
      en: 'Vented HDPE helmets with 6-point ratchet suspension, available in site colours.',
      ar: 'خوذ HDPE مهوّاة بنظام تعليق سداسي النقاط، متوفرة بألوان المواقع.',
    },
    fullDesc: commonDesc,
    images: [img('safety', 'Safety helmet'), img('detail-b', 'Helmet suspension')],
    specTable: [
      spec('Shell', 'الغلاف', 'HDPE, UV-stabilised', 'HDPE مقاوم للأشعة فوق البنفسجية'),
      spec('Suspension', 'نظام التعليق', '6-point ratchet', 'سداسي النقاط بمقبض'),
      spec('Standard', 'المعيار', 'EN 397', 'EN 397'),
    ],
    isFeatured: true,
    order: 7,
  },
  {
    _id: 'p8',
    slug: 'high-visibility-workwear',
    name: { en: 'High-Visibility Workwear', ar: 'ملابس عمل عالية الوضوح' },
    category: safety,
    shortDesc: {
      en: 'Class 2 and Class 3 reflective vests, jackets and coveralls.',
      ar: 'سترات وجاكيتات وأفرولات عاكسة من الفئة 2 والفئة 3.',
    },
    fullDesc: commonDesc,
    images: [img('safety', 'High-visibility vest'), img('detail-a', 'Reflective tape')],
    specTable: [
      spec('Class', 'الفئة', 'Class 2 / Class 3', 'الفئة 2 / الفئة 3'),
      spec('Sizes', 'المقاسات', 'S – 4XL', 'S – 4XL'),
      spec('Standard', 'المعيار', 'EN ISO 20471', 'EN ISO 20471'),
    ],
    isFeatured: false,
    order: 8,
  },
]

export const sampleClients: ClientLogo[] = [
  'Delta Construction',
  'Nile Industries',
  'Horizon Energy',
  'Atlas Engineering',
  'Pyramid Contracting',
  'Gulf Petro Services',
  'Cedar Facilities',
  'Orion Logistics',
].map((name, i) => ({ _id: `c${i}`, name }))
