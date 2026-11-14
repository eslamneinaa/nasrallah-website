import type { Locale } from './types'

type Faq = { q: string; a: string }
type Guide = { idealFor: string[]; faq: Faq }

/**
 * "Ideal for" use cases and one product-specific FAQ per product, keyed by slug.
 * Drawn only from each product's own specs and description: no dimensions,
 * weights or fire ratings (those wait for real data). A second FAQ on how to
 * order is added on the page itself (dict.product.orderFaq).
 */
export const productGuides: Record<string, Record<Locale, Guide>> = {
  // ── Cash & fire-resistant safes ────────────────────────────────────────
  'uchida-full-height-fire-resistant-safe': {
    ar: {
      idealFor: ['المؤسسات والشركات التي تحفظ المستندات الأصلية والنقود في خزنة واحدة', 'مكاتب الإدارة والحسابات التي تحتاج سعة بارتفاع كامل', 'البيوت التي تريد خزنة رئيسية للعقود والذهب والنقود'],
      faq: { q: 'هل تناسب هذه الخزنة حفظ المستندات والنقود معًا؟', a: 'نعم، صُمّمت لحماية ما بداخلها من الحريق والسرقة، وارتفاعها الكامل يتسع للملفات والنقود معًا. وتصنيف مقاومتها للحريق ساعتان.' },
    },
    en: {
      idealFor: ['Institutions and companies keeping original documents and cash in one safe', 'Management and accounts offices that need full-height capacity', 'Homes that want one main safe for contracts, gold and cash'],
      faq: { q: 'Can this safe hold documents and cash together?', a: 'Yes. It is designed to protect its contents from fire and theft, and its full height takes files and cash together. Its fire rating is 2 hours.' },
    },
  },
  'uchida-white-safe-with-steel-shelves': {
    ar: {
      idealFor: ['غرف الملابس والبيوت ذات الأثاث الفاتح', 'من يريد أرففًا لترتيب الملفات والنقود والعلب', 'المكاتب الصغيرة التي تفضّل خزنة بيضاء'],
      faq: { q: 'كيف تُرتّب الخزنة من الداخل؟', a: 'بثلاثة أرفف حديدية للملفات والنقود والعلب، ودرج سفلي للمقتنيات الصغيرة.' },
    },
    en: {
      idealFor: ['Dressing rooms and homes with light furniture', 'Anyone who wants shelves to organise files, cash and boxes', 'Small offices that prefer a white safe'],
      faq: { q: 'How is the inside arranged?', a: 'Three steel shelves for files, cash and boxes, with a drawer below for smaller valuables.' },
    },
  },
  'uchida-fingerprint-safe': {
    ar: {
      idealFor: ['من يريد فتح الخزنة بسرعة دون تذكّر رقم سري', 'البيوت التي يستخدم الخزنة فيها شخص أو شخصان', 'المكاتب الخاصة لحفظ النقود والأوراق المهمة'],
      faq: { q: 'هل يمكن فتح الخزنة بدون البصمة؟', a: 'نعم، فيها لوحة أرقام تعمل باللمس إلى جانب قارئ البصمة.' },
    },
    en: {
      idealFor: ['Anyone who wants quick access without remembering a code', 'Homes where one or two people use the safe', 'Private offices keeping cash and important papers'],
      faq: { q: 'Can the safe be opened without a fingerprint?', a: 'Yes. It has a touch keypad alongside the fingerprint reader.' },
    },
  },
  'uchida-black-digital-safe': {
    ar: {
      idealFor: ['المكاتب والمحلات التي تحتاج خزنة طويلة بقفل رقمي', 'من يريد قفلًا رقميًا مع قفل مفتاح', 'البيوت التي تحفظ النقود والمستندات في مكان واحد'],
      faq: { q: 'هل تعتمد الخزنة على القفل الرقمي وحده؟', a: 'لا، فيها قفل بمفتاح إلى جانب لوحة الأرقام، ومقبض ذراع من الكروم. اسألونا عن طريقة الفتح عند نفاد البطارية لهذا الطراز.' },
    },
    en: {
      idealFor: ['Offices and shops that need a tall safe with a digital lock', 'Anyone who wants a digital lock backed by a key lock', 'Homes keeping cash and documents in one place'],
      faq: { q: 'Does the safe rely on the digital lock alone?', a: 'No. It has a key lock alongside the keypad, and a chrome lever handle. Ask us how this model opens if the battery runs out.' },
    },
  },
  'uchida-compact-digital-safe': {
    ar: {
      idealFor: ['خزانة الملابس في البيت', 'الشقق وغرف النوم ذات المساحة المحدودة', 'حفظ الجوازات والنقود والمجوهرات اليومية'],
      faq: { q: 'أين توضع هذه الخزنة؟', a: 'حجمها الصغير يناسب داخل خزانة الملابس أو أسفل المكتب أو على رف.' },
    },
    en: {
      idealFor: ['A wardrobe at home', 'Apartments and bedrooms with little space', 'Passports, cash and everyday jewellery'],
      faq: { q: 'Where does this safe go?', a: 'Its compact size fits inside a wardrobe, under a desk or on a shelf.' },
    },
  },
  'uchida-double-door-safe': {
    ar: {
      idealFor: ['البنوك والمؤسسات والجهات الحكومية', 'الشركات التي تحفظ كميات كبيرة من النقود والمستندات', 'من يفضّل قفلًا ميكانيكيًا بقرص أرقام سري ومفتاح'],
      faq: { q: 'لماذا أختار خزنة ببابين؟', a: 'البابان يمنحان فتحة أوسع وسعة داخلية أكبر، فتسهل رؤية المحتوى وترتيبه في الخزائن الكبيرة.' },
    },
    en: {
      idealFor: ['Banks, institutions and government bodies', 'Companies keeping large amounts of cash and documents', 'Anyone who prefers a mechanical combination dial and key'],
      faq: { q: 'Why choose a double-door safe?', a: 'Two doors give a wider opening and more room inside, so the contents of a large safe are easier to see and organise.' },
    },
  },
  'sakura-multi-lock-safe': {
    ar: {
      idealFor: ['من يريد أكثر من طريقة للفتح: البصمة والرقم والمفتاح', 'البيوت والمكاتب التي يتشارك فيها أكثر من شخص الخزنة', 'حفظ النقود والذهب والمستندات'],
      faq: { q: 'ما معنى خزنة متعددة الأقفال؟', a: 'أنها تجمع قارئ البصمة ولوحة الأرقام والمفتاح في خزنة واحدة. اسألونا في المعرض عن طريقة ضبط الأقفال لهذا الطراز.' },
    },
    en: {
      idealFor: ['Anyone who wants several ways to open: fingerprint, code and key', 'Homes and offices where several people share the safe', 'Cash, gold and documents'],
      faq: { q: 'What does multi-lock mean?', a: 'It combines a fingerprint scanner, a keypad and a key in one safe. Ask us at the showroom how the locks are set up on this model.' },
    },
  },
  'sakura-fingerprint-safe': {
    ar: {
      idealFor: ['البيوت التي تريد فتحًا سريعًا بالبصمة', 'غرف النوم والمكاتب الخاصة', 'حفظ النقود والمجوهرات والمستندات الشخصية'],
      faq: { q: 'هل يمكن فتحها بالرقم السري؟', a: 'نعم، فيها لوحة أرقام عمودية إلى جانب قارئ البصمة.' },
    },
    en: {
      idealFor: ['Homes that want quick fingerprint access', 'Bedrooms and private offices', 'Cash, jewellery and personal documents'],
      faq: { q: 'Can it be opened with a code?', a: 'Yes. It has a vertical keypad alongside the fingerprint scanner.' },
    },
  },
  'kurogane-wing-safe': {
    ar: {
      idealFor: ['من يفضّل قفلًا ميكانيكيًا بقرص أرقام دوّار ومفتاح', 'المكاتب والمحلات التي تريد خزنة يابانية الصنع', 'حفظ النقود والمستندات المهمة'],
      faq: { q: 'هل يحتاج قفلها إلى بطارية؟', a: 'قفلها بقرص أرقام دوّار ومفتاح، وهو قفل ميكانيكي.' },
    },
    en: {
      idealFor: ['Anyone who prefers a mechanical combination dial and key', 'Offices and shops that want a Japanese-made safe', 'Cash and important documents'],
      faq: { q: 'Does its lock need a battery?', a: 'It locks with a combination dial and a key, which is a mechanical lock.' },
    },
  },
  'kurogane-compact-wing-safe': {
    ar: {
      idealFor: ['البيوت والمكاتب ذات المساحة المحدودة', 'من يريد خزنة يابانية الصنع بحجم صغير', 'حفظ النقود والجوازات والمستندات الشخصية'],
      faq: { q: 'ما الفرق بينها وبين خزنة KUROGANE Wing؟', a: 'هي النسخة الأصغر، بلون بيج، وبالقفل نفسه: قرص أرقام دوّار ومفتاح.' },
    },
    en: {
      idealFor: ['Homes and offices with little space', 'Anyone who wants a compact Japanese-made safe', 'Cash, passports and personal documents'],
      faq: { q: 'How does it differ from the KUROGANE Wing Safe?', a: 'It is the smaller version, in beige, with the same lock: a combination dial and a key.' },
    },
  },

  // ── Deposit safes ──────────────────────────────────────────────────────
  'uchida-deposit-safe': {
    ar: {
      idealFor: ['المحلات والسوبرماركت والمطاعم', 'الكافيهات والفروع التي يستلم فيها الكاشير النقود طوال اليوم', 'أصحاب العمل الذين لا يريدون مشاركة الرقم السري مع الموظفين'],
      faq: { q: 'هل لدرج الإيداع قفل خاص؟', a: 'نعم، درج الإيداع العلوي له مفتاح خاص به، والخزنة نفسها تُقفل بالرقم السري والمفتاح.' },
    },
    en: {
      idealFor: ['Shops, supermarkets and restaurants', 'Cafés and branches where the cashier takes cash all day', 'Owners who do not want to share the code with staff'],
      faq: { q: 'Does the deposit drawer have its own lock?', a: 'Yes. The top deposit drawer has its own key, and the safe itself locks with a code and a key.' },
    },
  },
  'uchida-night-deposit-safe': {
    ar: {
      idealFor: ['إيداع إيراد آخر اليوم في المحلات والمطاعم', 'محطات الوقود والفروع التي تعمل حتى ساعات متأخرة', 'المؤسسات التي تجمع الأظرف من أكثر من موظف'],
      faq: { q: 'كيف يعمل درج الإيداع؟', a: 'يُسحب الدرج العلوي وتوضع فيه النقود أو الأظرف، فتسقط داخل الخزنة المقفلة دون فتح بابها.' },
    },
    en: {
      idealFor: ['End-of-day takings in shops and restaurants', 'Fuel stations and branches open late', 'Businesses collecting envelopes from several staff'],
      faq: { q: 'How does the deposit drawer work?', a: 'The top drawer pulls out to take cash or envelopes, which drop into the locked safe without opening its door.' },
    },
  },

  // ── Hotel safes ────────────────────────────────────────────────────────
  'sakura-digital-hotel-safe': {
    ar: {
      idealFor: ['غرف الفنادق والشقق الفندقية', 'البيوت التي تريد خزنة صغيرة برقم سري', 'سكن الموظفين والمجمعات السكنية'],
      faq: { q: 'هل قفلها معتمد؟', a: 'نعم، قفلها الرقمي بشاشة حاصل على شهادة CE.' },
    },
    en: {
      idealFor: ['Hotel rooms and serviced apartments', 'Homes that want a small safe with a code', 'Staff housing and residential compounds'],
      faq: { q: 'Is its lock certified?', a: 'Yes. Its digital lock with display is CE approved.' },
    },
  },
  'sakura-compact-digital-hotel-safe': {
    ar: {
      idealFor: ['الغرف ذات خزائن الملابس الصغيرة', 'حفظ الجوازات والهواتف والنقود', 'الشقق الفندقية وسكن الموظفين'],
      faq: { q: 'ما الفرق بينها وبين خزنة SAKURA الفندقية الرقمية؟', a: 'هي النسخة الأصغر، بالقفل الرقمي نفسه بشاشة والحاصل على شهادة CE.' },
    },
    en: {
      idealFor: ['Rooms with small wardrobes', 'Passports, phones and cash', 'Serviced apartments and staff housing'],
      faq: { q: 'How does it differ from the SAKURA Digital Hotel Safe?', a: 'It is the smaller version, with the same CE-approved digital lock and display.' },
    },
  },
  'uchida-black-hotel-safe': {
    ar: {
      idealFor: ['سكن الموظفين والعمال', 'الغرف التي تفضّل قفلًا بسيطًا بالمفتاح', 'المكاتب التي تحتاج خزنة صغيرة منخفضة'],
      faq: { q: 'لماذا أختار خزنة فندقية بمفتاح؟', a: 'القفل بالمفتاح بسيط ولا يحتاج إلى بطارية أو برمجة، ويناسب الأماكن التي تُسلَّم فيها المفاتيح للنزلاء أو الموظفين.' },
    },
    en: {
      idealFor: ['Staff and worker housing', 'Rooms that prefer a simple key lock', 'Offices that need a small, low safe'],
      faq: { q: 'Why choose a key-lock hotel safe?', a: 'A key lock is simple and needs no battery or programming, which suits places where keys are handed to guests or staff.' },
    },
  },
  'uchida-ivory-hotel-safe': {
    ar: {
      idealFor: ['الغرف والفنادق ذات الأثاث الفاتح', 'سكن الموظفين والشقق المفروشة', 'من يريد خزنة صغيرة بقفل مفتاح بسيط'],
      faq: { q: 'هل تختلف عن الخزنة الفندقية السوداء؟', a: 'هي الطراز نفسه HS-23K1 بقفل مفتاح ومفصلتين خارجيتين، باللون البيج.' },
    },
    en: {
      idealFor: ['Rooms and hotels with light furniture', 'Staff housing and furnished apartments', 'Anyone who wants a small safe with a simple key lock'],
      faq: { q: 'Is it different from the black hotel safe?', a: 'It is the same model, HS-23K1, with a key lock and two external hinges, in beige.' },
    },
  },

  // ── Luxury safes ───────────────────────────────────────────────────────
  'uchida-red-safe-with-leather-drawers': {
    ar: {
      idealFor: ['غرف الملابس التي تريد خزنة بلون لافت', 'حفظ المجوهرات والساعات في أدراج جلدية', 'من يريد خزنة تكون قطعة ديكور'],
      faq: { q: 'ماذا يوجد داخل الخزنة؟', a: 'أربعة أدراج جلدية بملمس جلد التمساح لترتيب المجوهرات والساعات والمقتنيات الصغيرة.' },
    },
    en: {
      idealFor: ['Dressing rooms that want a striking safe', 'Jewellery and watches kept in leather drawers', 'Anyone who wants a safe that doubles as décor'],
      faq: { q: 'What is inside the safe?', a: 'Four crocodile-texture leather drawers for jewellery, watches and small valuables.' },
    },
  },
  'uchida-fluted-safe': {
    ar: {
      idealFor: ['المجالس ومكاتب الإدارة العليا', 'غرف الملابس الحديثة', 'من يريد خزنة عصرية لا تبدو صناعية'],
      faq: { q: 'ما لون الخزنة؟', a: 'واجهة مضلّعة بلون فحمي مع لوحة نصر الله النحاسية، ولها نسخة مضلّعة بلونين كريمي وكحلي.' },
    },
    en: {
      idealFor: ['Majlis and executive offices', 'Modern dressing rooms', 'Anyone who wants a contemporary safe that does not look industrial'],
      faq: { q: 'What colour is it?', a: 'A fluted charcoal front with the Nasrallah brass plate. There is also a two-tone cream and navy fluted version.' },
    },
  },
  'uchida-walnut-finish-safe': {
    ar: {
      idealFor: ['المكاتب والمجالس ذات الأثاث الخشبي', 'من يريد خزنة تشبه قطعة أثاث', 'البيوت ذات الطابع الكلاسيكي'],
      faq: { q: 'هل الباب من الخشب؟', a: 'الباب بنقشة خشب الجوز في إطار من الفولاذ الأسود، فيجمع مظهر الخشب ومتانة الحديد.' },
    },
    en: {
      idealFor: ['Offices and majlis with wooden furniture', 'Anyone who wants a safe that looks like furniture', 'Homes with a classic style'],
      faq: { q: 'Is the door wooden?', a: 'The door has a walnut wood grain in a black steel frame, combining the look of wood with the strength of steel.' },
    },
  },
  'uchida-black-and-gold-marble-safe': {
    ar: {
      idealFor: ['المجالس وغرف الاستقبال ذات الديكور الفاخر', 'من يريد خزنة تلفت النظر', 'من يفضّل الفتح السريع بالبصمة'],
      faq: { q: 'ما شكل الباب؟', a: 'بنقشة الرخام الأسود بعروق ذهبية وبيضاء، في إطار من الفولاذ الفحمي. اسألونا عن تفاصيل خامة التشطيب.' },
    },
    en: {
      idealFor: ['Majlis and reception rooms with luxurious décor', 'Anyone who wants a safe that stands out', 'Those who prefer quick fingerprint access'],
      faq: { q: 'What does the door look like?', a: 'Black marble effect with gold and white veins, in a charcoal steel frame. Ask us for details of the finish material.' },
    },
  },
  'uchida-white-marble-safe': {
    ar: {
      idealFor: ['غرف الملابس والمجالس الفاتحة', 'الديكور الهادئ بالأبيض والرمادي', 'من يريد الفتح بالبصمة أو الرقم السري'],
      faq: { q: 'ما الفرق بينها وبين خزنة الرخام الأسود والذهبي؟', a: 'الخزنة نفسها بالقفل ذاته، والفرق في الباب: رخام أبيض بعروق رمادية في إطار أسود.' },
    },
    en: {
      idealFor: ['Light dressing rooms and majlis', 'Calm décor in white and grey', 'Anyone who wants fingerprint or code access'],
      faq: { q: 'How does it differ from the black and gold marble safe?', a: 'Same safe and lock; the difference is the door: white marble effect with grey veins in a black frame.' },
    },
  },
  'uchida-cream-and-navy-fluted-safe': {
    ar: {
      idealFor: ['البيوت ذات الديكور العصري الملوّن', 'غرف الملابس والمجالس الحديثة', 'من يحب الواجهة المضلّعة بلونين'],
      faq: { q: 'ما الفرق بينها وبين خزنة UCHIDA المضلّعة؟', a: 'التصميم المضلّع نفسه بلونين: كريمي في الأعلى وكحلي في الأسفل، مع قارئ بصمة ولوحة أرقام باللمس.' },
    },
    en: {
      idealFor: ['Homes with modern, colourful décor', 'Modern dressing rooms and majlis', 'Anyone who likes a two-tone fluted front'],
      faq: { q: 'How does it differ from the UCHIDA Fluted Safe?', a: 'The same fluted design in two tones, cream above and navy below, with a fingerprint reader and touch keypad.' },
    },
  },
  'sakura-floral-safe': {
    ar: {
      idealFor: ['من يريد خزنة مزخرفة تكون جزءًا من الديكور', 'غرف الملابس والمجالس', 'حفظ المجوهرات والنقود في البيت'],
      faq: { q: 'ما التشطيبات المتوفرة؟', a: 'باب أسود مزخرف بالزهور، أو باب فضي عاكس مزخرف بالزهور.' },
    },
    en: {
      idealFor: ['Anyone who wants a decorated safe that is part of the décor', 'Dressing rooms and majlis', 'Jewellery and cash at home'],
      faq: { q: 'Which finishes are available?', a: 'A black floral door or a silver mirror floral door.' },
    },
  },
  'watch-winder-safe': {
    ar: {
      idealFor: ['هواة الساعات الأوتوماتيكية', 'من يريد أن تبقى ساعاته تعمل وهي في الخزنة', 'غرف الملابس الفاخرة'],
      faq: { q: 'كم ساعة يتسع الدوّار؟', a: 'يتسع الدوّار لأربع ساعات، وفوقه درج جلدي لساعات أو مقتنيات أخرى.' },
    },
    en: {
      idealFor: ['Automatic watch collectors', 'Anyone who wants watches kept running while locked away', 'Luxury dressing rooms'],
      faq: { q: 'How many watches does the winder hold?', a: 'Four, with a leather drawer above the winder for other watches or valuables.' },
    },
  },
  'marble-interior-jewellery-safe': {
    ar: {
      idealFor: ['من يملك مجموعة كبيرة من العقود والأطقم', 'غرف الملابس التي تريد عرض المجوهرات عند فتح الخزنة', 'من يريد لوحة خاصة للأقراط'],
      faq: { q: 'ماذا يوجد على الوجه الداخلي للباب؟', a: 'لوحة للأقراط، إلى جانب مجسّمات العقود والرفوف والأدراج داخل الخزنة.' },
    },
    en: {
      idealFor: ['Owners of large collections of necklaces and sets', 'Dressing rooms that want jewellery on display when the safe opens', 'Anyone who wants a dedicated earring board'],
      faq: { q: 'What is on the inside of the door?', a: 'An earring board, alongside the necklace busts, shelves and drawers inside the safe.' },
    },
  },

  // ── Jewellery & watch interiors ────────────────────────────────────────
  'uchida-fire-resistant-jewellery-and-watch-safe': {
    ar: {
      idealFor: ['من يحفظ المجوهرات والساعات والمستندات في خزنة واحدة', 'غرف الملابس والبيوت ذات الأثاث الفاتح', 'من يريد درجًا مخمليًا مرتّبًا لكل نوع من القطع'],
      faq: { q: 'هل يمكن تغيير توزيع الأدراج؟', a: 'نعم، يُرتَّب توزيع الأدراج والأرفف بحسب مقتنيات كل عميل.' },
    },
    en: {
      idealFor: ['Anyone keeping jewellery, watches and documents in one safe', 'Dressing rooms and homes with light furniture', 'Anyone who wants a velvet drawer for each kind of piece'],
      faq: { q: 'Can the drawer layout be changed?', a: 'Yes. The drawers and shelves are arranged to suit each owner’s collection.' },
    },
  },
  'jewellery-display-drawers': {
    ar: {
      idealFor: ['تجهيز الخزنة بأدراج مخصّصة للمجوهرات', 'من يريد فصل العقود والأساور والخواتم عن بعضها', 'غرف الملابس الفاخرة'],
      faq: { q: 'ما لون البطانة؟', a: 'مخمل أزرق داكن، مع مجسّم للعقود وحامل للأساور وبكرات للخواتم وخانات للأقراط.' },
    },
    en: {
      idealFor: ['Fitting a safe with dedicated jewellery drawers', 'Keeping necklaces, bangles and rings apart', 'Luxury dressing rooms'],
      faq: { q: 'What colour is the lining?', a: 'Deep blue velvet, with a necklace bust, a bangle stand, ring rolls and earring compartments.' },
    },
  },
  'watch-drawers': {
    ar: {
      idealFor: ['هواة جمع الساعات', 'تجهيز الخزنة بأدراج مخصّصة للساعات', 'من يريد فصل الساعات عن المجوهرات'],
      faq: { q: 'ما الفرق بين البكرات والوسائد؟', a: 'كلاهما يحمل الساعة ويمنع احتكاكها بغيرها، ونجهّز الدرج بالنوع الذي تفضّلونه، ببطانة مخمل أزرق أو أسود.' },
    },
    en: {
      idealFor: ['Watch collectors', 'Fitting a safe with dedicated watch drawers', 'Keeping watches apart from jewellery'],
      faq: { q: 'Rolls or cushions: what is the difference?', a: 'Both hold a watch and keep it from rubbing against others; we fit the drawer with whichever you prefer, lined in blue or black velvet.' },
    },
  },
  'wood-and-brass-drawer-interior': {
    ar: {
      idealFor: ['من يريد أدراجًا خشبية بمقابض نحاسية داخل الخزنة', 'تجهيز داخلي يطابق أثاث غرفة الملابس', 'من يريد أدراجًا تُسحب بالكامل لرؤية كل المحتوى'],
      faq: { q: 'ما أنواع الخشب المتاحة؟', a: 'نقشة خشب البلوط أو الزان، مع مقابض نحاسية مطفية وبطانة مخمل أسود أو أزرق.' },
    },
    en: {
      idealFor: ['Anyone who wants wooden drawers with brass handles inside the safe', 'An interior that matches the dressing room furniture', 'Drawers that pull out fully to show everything'],
      faq: { q: 'Which woods are available?', a: 'Oak or beech wood grain, with brushed brass handles and black or blue velvet lining.' },
    },
  },
  'travel-jewellery-cases': {
    ar: {
      idealFor: ['السفر والإقامة في الفنادق', 'الحفلات والأعراس', 'حمل العقود والأساور والخواتم والأقراط والساعات معًا'],
      faq: { q: 'ما الألوان المتوفرة؟', a: 'أسود بملمس جلد التمساح، ورمادي فاتح.' },
    },
    en: {
      idealFor: ['Travel and hotel stays', 'Parties and weddings', 'Carrying necklaces, bangles, rings, earrings and watches together'],
      faq: { q: 'Which colours are available?', a: 'Black crocodile texture and light grey.' },
    },
  },

  // ── Filing cabinets ────────────────────────────────────────────────────
  'uchida-four-drawer-filing-cabinet': {
    ar: {
      idealFor: ['الوزارات والبنوك والشركات', 'أرشيف الملفات الورقية اليومية', 'الأقسام التي تريد قفلًا مستقلًا لكل درج'],
      faq: { q: 'هل لكل درج مفتاح؟', a: 'نعم، لكل درج من الأدراج الأربعة قفل مستقل بمفتاح وحامل لبطاقة التعريف.' },
    },
    en: {
      idealFor: ['Ministries, banks and companies', 'Everyday paper files', 'Departments that want a separate lock on every drawer'],
      faq: { q: 'Does every drawer have a key?', a: 'Yes. Each of the four drawers has its own key lock and a label holder.' },
    },
  },
  'uchida-fire-resistant-records-cabinet': {
    ar: {
      idealFor: ['حفظ السجلات والعقود الأصلية', 'الجهات الحكومية والشركات والعيادات', 'الأرشيف الذي يجب حمايته من الحريق'],
      faq: { q: 'لماذا أختار خزانة سجلات مقاومة للحريق؟', a: 'لأن المستندات الأصلية يصعب تعويضها إذا احترقت، وتصنيف مقاومة هذه الخزانة للحريق ساعتان.' },
    },
    en: {
      idealFor: ['Original records and contracts', 'Government bodies, companies and clinics', 'Archives that must be protected from fire'],
      faq: { q: 'Why choose a fire-resistant records cabinet?', a: 'Because originals are hard to replace once burnt, and this cabinet is rated for 2 hours of fire.' },
    },
  },
  'sakura-fire-resistant-filing-cabinet': {
    ar: {
      idealFor: ['المكاتب التي تحفظ مستندات أصلية', 'من يفضّل قفلًا رقميًا للخزانة كلها', 'الأرشيف المالي والقانوني'],
      faq: { q: 'ما الفرق بينها وبين خزانة SAKURA ذات الأربعة أدراج؟', a: 'كلتاهما مقاومة للحريق لمدة ساعة واحدة: هذه تُقفل بلوحة أرقام رقمية، والأخرى لكل درج فيها قفل مفتاح.' },
    },
    en: {
      idealFor: ['Offices keeping original documents', 'Anyone who prefers one digital lock for the whole cabinet', 'Financial and legal archives'],
      faq: { q: 'How does it differ from the SAKURA Four-Drawer Filing Cabinet?', a: 'Both are rated for 1 hour of fire: this one locks with a digital keypad, the other has a key lock on each drawer.' },
    },
  },
  'sakura-four-drawer-filing-cabinet': {
    ar: {
      idealFor: ['المكاتب والأقسام الإدارية', 'ملفات الموظفين والعملاء اليومية', 'من يريد قفلًا لكل درج'],
      faq: { q: 'هل يمكن قفل كل درج وحده؟', a: 'نعم، لكل درج من الأدراج الأربعة قفل مفتاح خاص به.' },
    },
    en: {
      idealFor: ['Offices and administrative departments', 'Everyday staff and client files', 'Anyone who wants a lock on every drawer'],
      faq: { q: 'Can each drawer be locked separately?', a: 'Yes. Each of the four drawers has its own key lock.' },
    },
  },
  'godrej-two-drawer-filing-cabinet': {
    ar: {
      idealFor: ['المكاتب الصغيرة ومكاتب الاستقبال', 'وضعها بجانب المكتب لملفات العمل اليومية', 'العيادات والمدارس'],
      faq: { q: 'كيف تُقفل؟', a: 'بقفل علوي، وتتسع لملفات معلّقة.' },
    },
    en: {
      idealFor: ['Small offices and reception desks', 'Beside a desk for everyday files', 'Clinics and schools'],
      faq: { q: 'How does it lock?', a: 'With a top lock, and it takes hanging files.' },
    },
  },
  'godrej-three-drawer-filing-cabinet': {
    ar: {
      idealFor: ['المكاتب المتوسطة والأقسام الإدارية', 'المدارس والعيادات', 'من يحتاج سعة أكبر من خزانة الدرجين'],
      faq: { q: 'ما الفرق بينها وبين خزانة الدرجين؟', a: 'درج إضافي لسعة أكبر، بالقفل العلوي نفسه وللملفات المعلّقة أيضًا.' },
    },
    en: {
      idealFor: ['Mid-sized offices and administrative departments', 'Schools and clinics', 'Anyone who needs more room than the two-drawer cabinet'],
      faq: { q: 'How does it differ from the two-drawer cabinet?', a: 'One more drawer for more room, with the same top lock, also for hanging files.' },
    },
  },
  'godrej-five-drawer-filing-cabinet': {
    ar: {
      idealFor: ['الأرشيف الكبير في الشركات والجهات الحكومية', 'الأقسام التي تحفظ ملفات كثيرة في مساحة أرضية صغيرة', 'المكتبات والمستودعات'],
      faq: { q: 'ما الألوان المتوفرة؟', a: 'رمادي أو أسود.' },
    },
    en: {
      idealFor: ['Large archives in companies and government bodies', 'Departments storing many files on a small footprint', 'Libraries and stores'],
      faq: { q: 'Which colours are available?', a: 'Grey or black.' },
    },
  },

  // ── Key cabinets ───────────────────────────────────────────────────────
  'uchida-key-cabinet': {
    ar: {
      idealFor: ['المكاتب والمباني الصغيرة', 'مكاتب الاستقبال في المجمعات السكنية', 'فرق الصيانة'],
      faq: { q: 'أين توجد الخطافات؟', a: 'داخل الخزانة وعلى بابها، وكلها مرقّمة.' },
    },
    en: {
      idealFor: ['Offices and small buildings', 'Reception desks in residential compounds', 'Maintenance teams'],
      faq: { q: 'Where are the hooks?', a: 'Inside the cabinet and on its door, all numbered.' },
    },
  },
  'uchida-tall-key-cabinet': {
    ar: {
      idealFor: ['الفنادق والمجمعات السكنية الكبيرة', 'معارض السيارات وشركات التأجير', 'الشركات التي تدير مفاتيح كثيرة'],
      faq: { q: 'ما الفرق بينها وبين خزانة المفاتيح الصغيرة؟', a: 'هي النسخة الأطول، تتسع لـ 100 مفتاح بدل 60، بخطافات مرقّمة وتُعلّق على الجدار بقفل مفتاح.' },
    },
    en: {
      idealFor: ['Hotels and large residential compounds', 'Car showrooms and rental companies', 'Companies managing many keys'],
      faq: { q: 'How does it differ from the compact key cabinet?', a: 'It is the taller version, holding 100 keys instead of 60, with numbered hooks, wall-mounted with a key lock.' },
    },
  },

  // ── Cash boxes ─────────────────────────────────────────────────────────
  'bsm-auto-cash-box': {
    ar: {
      idealFor: ['الكاشير في المحلات', 'المحلات التي تريد قفلًا لا يعتمد على لوحة أرقام', 'حفظ نقود اليوم عند الكاونتر'],
      faq: { q: 'كيف يُقفل الصندوق؟', a: 'بقرصين للأرقام السرية ومفتاح.' },
    },
    en: {
      idealFor: ['Shop cashiers', 'Shops that want a lock without a keypad', 'The day’s cash at the counter'],
      faq: { q: 'How does the box lock?', a: 'With two combination dials and a key.' },
    },
  },
  'bsm-digital-auto-cash-box': {
    ar: {
      idealFor: ['الكاشير الذي يفتح الصندوق مرات كثيرة في اليوم', 'المطاعم والكافيهات', 'من يفضّل لوحة الأرقام على الأقراص الدوّارة'],
      faq: { q: 'كيف يُفتح الدرج؟', a: 'يُقفل الصندوق بلوحة أرقام ومفتاح، ويُفتح درجه بضغطة زر.' },
    },
    en: {
      idealFor: ['Cashiers who open the box many times a day', 'Restaurants and cafés', 'Anyone who prefers a keypad to dials'],
      faq: { q: 'How does the drawer open?', a: 'The box locks with a keypad and a key, and its drawer opens at the push of a button.' },
    },
  },
  'bsm-portable-cash-box': {
    ar: {
      idealFor: ['نقل النقود بين المحل والمكتب والبنك', 'المعارض والفعاليات', 'الجمعيات والأنشطة التي تجمع النقود خارج المكتب'],
      faq: { q: 'هل يُحمل باليد؟', a: 'نعم، بمقبض علوي، ويُقفل بقرصين للأرقام السرية ومفتاح.' },
    },
    en: {
      idealFor: ['Carrying cash between the shop, the office and the bank', 'Exhibitions and events', 'Co-operatives and activities collecting cash away from the office'],
      faq: { q: 'Can it be carried by hand?', a: 'Yes, by its top handle. It locks with two combination dials and a key.' },
    },
  },

  // ── Steel cupboards ────────────────────────────────────────────────────
  'godrej-two-door-steel-cupboard': {
    ar: {
      idealFor: ['المكاتب والمدارس والمستشفيات', 'حفظ الملفات والأدوات والمستلزمات', 'المستودعات وغرف الأرشيف'],
      faq: { q: 'ما الألوان المتوفرة؟', a: 'بيج أو رمادي أو أبيض، ببابين بارتفاع كامل وقفل غائر و4 أرفف قابلة للتعديل.' },
    },
    en: {
      idealFor: ['Offices, schools and hospitals', 'Files, tools and supplies', 'Stores and archive rooms'],
      faq: { q: 'Which colours are available?', a: 'Beige, grey or white, with two full-height doors, a recessed lock and 4 adjustable shelves.' },
    },
  },
  'godrej-two-door-steel-cupboard-with-handle': {
    ar: {
      idealFor: ['المكاتب التي تفتح الدولاب كثيرًا خلال اليوم', 'غرف الموظفين والمستودعات', 'حفظ الملفات والمستلزمات'],
      faq: { q: 'ما الذي يميّزه؟', a: 'مقبض من الكروم يسهّل الفتح، ببابين بارتفاع كامل وباللون البيج.' },
    },
    en: {
      idealFor: ['Offices that open the cupboard often through the day', 'Staff rooms and stores', 'Files and supplies'],
      faq: { q: 'What sets it apart?', a: 'A chrome handle that makes it easy to open, with two full-height doors, in beige.' },
    },
  },
  'godrej-panelled-steel-cupboard': {
    ar: {
      idealFor: ['المكاتب التي تريد دولابًا بمظهر أنيق', 'غرف الاجتماعات والإدارة', 'حفظ الملفات والمستلزمات'],
      faq: { q: 'ما شكل الأبواب؟', a: 'بابان بألواح بارزة تمنح الدولاب مظهرًا أقرب إلى الأثاث، باللون الرمادي الفاتح وقفل غائر.' },
    },
    en: {
      idealFor: ['Offices that want a smarter-looking cupboard', 'Meeting rooms and management offices', 'Files and supplies'],
      faq: { q: 'What are the doors like?', a: 'Two panelled doors that give it a more furniture-like look, in light grey with a recessed lock.' },
    },
  },
  'godrej-single-door-steel-cupboard': {
    ar: {
      idealFor: ['الممرات والزوايا الضيقة', 'المكاتب الصغيرة والعيادات', 'حفظ أدوات النظافة والمستلزمات'],
      faq: { q: 'لماذا أختار دولابًا بباب واحد؟', a: 'لأنه يحتاج مساحة أقل لفتح الباب ويناسب الأماكن الضيقة، بالبيج أو الرمادي أو الزيتي.' },
    },
    en: {
      idealFor: ['Corridors and narrow corners', 'Small offices and clinics', 'Cleaning tools and supplies'],
      faq: { q: 'Why choose a single-door cupboard?', a: 'It needs less room for the door to open and suits tight spaces; in beige, grey or olive.' },
    },
  },
  'godrej-glass-door-steel-cabinet': {
    ar: {
      idealFor: ['عرض الملفات والكتب في المكاتب', 'المكتبات والمدارس', 'العيادات والمختبرات'],
      faq: { q: 'لماذا الأبواب الزجاجية؟', a: 'لرؤية المحتوى دون فتح الباب، مع أرفف داخلية وهيكل حديدي أبيض.' },
    },
    en: {
      idealFor: ['Displaying files and books in offices', 'Libraries and schools', 'Clinics and laboratories'],
      faq: { q: 'Why glass doors?', a: 'To see the contents without opening the door, with shelves inside a white steel body.' },
    },
  },
  'godrej-wood-and-glass-storage-cabinet': {
    ar: {
      idealFor: ['مكاتب الإدارة', 'غرف الاجتماعات', 'من يريد عرض الملفات في الأعلى وإخفاء المستلزمات في الأسفل'],
      faq: { q: 'كيف تُقسّم الخزانة؟', a: 'بابان زجاجيان في الأعلى للعرض، وبابان خشبيان في الأسفل للتخزين، بلون خشب البلوط العسلي ومقابض من الكروم.' },
    },
    en: {
      idealFor: ['Management offices', 'Meeting rooms', 'Displaying files above while hiding supplies below'],
      faq: { q: 'How is the cabinet divided?', a: 'Two glass doors above for display and two wooden doors below for storage, in honey oak with chrome handles.' },
    },
  },

  // ── Steel lockers ──────────────────────────────────────────────────────
  'godrej-two-tier-steel-locker': {
    ar: {
      idealFor: ['غرف تبديل الملابس في المصانع والشركات', 'الأندية الرياضية', 'مكان لشخصين في عمود واحد'],
      faq: { q: 'هل لكل خانة قفل؟', a: 'نعم، لكل خانة من الخانتين قفل خاص بها، وأبوابها بفتحات تهوية.' },
    },
    en: {
      idealFor: ['Changing rooms in factories and companies', 'Sports clubs', 'Room for two people in one column'],
      faq: { q: 'Does each compartment lock?', a: 'Yes. Each of the two compartments has its own lock, and the doors are louvred for ventilation.' },
    },
  },
  'godrej-four-tier-steel-locker': {
    ar: {
      idealFor: ['المدارس وغرف الموظفين', 'حفظ الحقائب الصغيرة والهواتف', 'الأماكن التي تحتاج خانات كثيرة في مساحة صغيرة'],
      faq: { q: 'كم شخصًا يستخدم هذا اللوكر؟', a: 'أربعة أشخاص، لكل منهم خانة بقفل خاص وباب بفتحات تهوية.' },
    },
    en: {
      idealFor: ['Schools and staff rooms', 'Small bags and phones', 'Places that need many compartments in little space'],
      faq: { q: 'How many people can use it?', a: 'Four, each with a compartment that has its own lock and a louvred door.' },
    },
  },
  'godrej-three-door-steel-locker': {
    ar: {
      idealFor: ['غرف الموظفين', 'العيادات والمكاتب الصغيرة', 'حفظ الحقائب والأغراض الشخصية'],
      faq: { q: 'هل لكل باب قفل؟', a: 'نعم، لكل باب من الأبواب الثلاثة قفل مفتاح.' },
    },
    en: {
      idealFor: ['Staff rooms', 'Clinics and small offices', 'Bags and personal belongings'],
      faq: { q: 'Does every door lock?', a: 'Yes. Each of the three doors has a key lock.' },
    },
  },
  'godrej-six-door-steel-locker': {
    ar: {
      idealFor: ['المدارس والأندية', 'حفظ الهواتف والمحافظ والأغراض الصغيرة', 'غرف الموظفين ذات الأعداد الكبيرة'],
      faq: { q: 'ما الألوان المتوفرة؟', a: 'بيج أو زيتي.' },
    },
    en: {
      idealFor: ['Schools and clubs', 'Phones, wallets and small items', 'Staff rooms for large teams'],
      faq: { q: 'Which colours are available?', a: 'Beige or olive.' },
    },
  },
  'godrej-single-steel-locker': {
    ar: {
      idealFor: ['تعليق الملابس وزيّ العمل', 'غرف تبديل الملابس في المصانع والمستشفيات', 'الموظف الذي يحتاج لوكرًا خاصًا بطول كامل'],
      faq: { q: 'لماذا الباب بفتحات تهوية؟', a: 'لتهوية الملابس وزيّ العمل المحفوظة داخل اللوكر.' },
    },
    en: {
      idealFor: ['Hanging clothes and uniforms', 'Changing rooms in factories and hospitals', 'Anyone who needs a full-height locker of their own'],
      faq: { q: 'Why a louvred door?', a: 'To air the clothes and uniforms kept inside.' },
    },
  },
}
