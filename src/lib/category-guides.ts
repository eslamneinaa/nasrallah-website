import type { Locale } from './types'

export type CategoryGuide = {
  /** Heading of the "who it is for / how to choose" block. */
  title: string
  body: string[]
  /** Shown on the page and marked up as FAQPage. */
  faq: { q: string; a: string }[]
}

/**
 * Buying advice and FAQs for each category landing page, keyed like categoryContent.
 * Only facts the business has confirmed: no ratings, sizes or test figures.
 */
export const categoryGuides: Record<string, Record<Locale, CategoryGuide>> = {
  'fire-resistant-safes': {
    ar: {
      title: 'كيف تختارون خزنة نقود أو خزنة مقاومة للحريق؟',
      body: [
        'تناسب هذه الخزائن البيوت والمحلات والمكاتب والبنوك والجهات الحكومية في الدوحة وكل مناطق قطر، ولكل منها اختيار مختلف. ابدؤوا بما ستحفظونه: النقود والذهب تحتاج خزنة حديدية متينة بقفل موثوق، والعقود والمستندات الأصلية تحتاج خزنة مقاومة للحريق تحميها من النار والسرقة معًا.',
        'بعدها اختاروا المقاس، ودائمًا أكبر قليلًا مما تحتاجون اليوم، ثم القفل: البصمة للفتح السريع، والرقم السري لمن يتشارك الخزنة، والقفل الدوّار والمفتاح لمن يفضّل القفل الميكانيكي. أما مقاومة الحريق فتختلف من طراز لآخر، فاسألونا عن تصنيف كل طراز قبل الشراء، ولا تعتمدوا على الشكل أو الاسم وحده.',
      ],
      faq: [
        {
          q: 'ما الفرق بين خزنة النقود والخزنة المقاومة للحريق؟',
          a: 'خزنة النقود مصمّمة أساسًا لمقاومة السرقة، أما الخزنة المقاومة للحريق فمصمّمة لتحمي ما بداخلها من الحرارة أيضًا. ولمن يحفظ مستندات أصلية مع النقود، الأنسب خزنة تجمع الحمايتين.',
        },
        {
          q: 'ماذا لو نسيت الرقم السري للخزنة؟',
          a: 'كثير من خزائننا تأتي بمفتاح احتياطي مع القفل الرقمي. وإذا أُغلقت الخزنة نقدّم خدمة فتح الخزائن المقفلة بعد استيفاء متطلبات وزارة الداخلية.',
        },
        {
          q: 'هل التوصيل مجاني لكل قطر؟',
          a: 'نعم، التوصيل مجاني إلى الدوحة والريان والوكرة ولوسيل والخور وأم صلال وباقي مناطق قطر.',
        },
      ],
    },
    en: {
      title: 'How to choose a cash safe or a fire-resistant safe',
      body: [
        'These safes suit homes, shops, offices, banks and government bodies in Doha and across Qatar. Start with what you will keep: cash and gold need a sturdy steel safe with a reliable lock, while contracts and original documents need a fire-resistant safe that protects against both fire and theft.',
        'Then choose the size, a little larger than you need today, and the lock: fingerprint for quick access, a code for safes shared by several people, and a combination dial or key for those who prefer a mechanical lock. Fire resistance differs from model to model, so ask us for each model’s rating before you buy rather than relying on its look or name.',
      ],
      faq: [
        {
          q: 'What is the difference between a cash safe and a fire-resistant safe?',
          a: 'A cash safe is designed mainly to resist theft, while a fire-resistant safe is also designed to protect its contents from heat. If you keep original documents as well as cash, choose a safe that offers both.',
        },
        {
          q: 'What if I forget the code?',
          a: 'Many of our safes come with a backup key alongside the digital lock. If a safe is locked, we offer a safe-opening service once the Ministry of Interior’s requirements are met.',
        },
        {
          q: 'Is delivery free across Qatar?',
          a: 'Yes, delivery is free to Doha and everywhere else in Qatar.',
        },
      ],
    },
  },

  'deposit-safes': {
    ar: {
      title: 'لمن تناسب خزنة الإيداع وكيف تختارونها؟',
      body: [
        'خزنة الإيداع مصمّمة للمحلات والسوبرماركت والمطاعم والكافيهات ومحطات الوقود والفروع التي تستلم النقود طوال اليوم في الدوحة وقطر. يودع الكاشير أو الموظف النقود عبر الدرج العلوي دون أن يعرف الرقم السري، ويفتح صاحب العمل أو المدير الخزنة وحده.',
        'عند الاختيار فكّروا في حجم الإيداع اليومي وحجم الأظرف أو رزم النقود، وفي عدد الأشخاص المسموح لهم بفتح الخزنة. خزنة الإيداع العادية تناسب الإيداع المتكرر خلال اليوم، وخزنة الإيداع الليلي بدرجها المسحوب تناسب إيداع إيراد آخر اليوم. وتُقفل خزائن UCHIDA للإيداع بالرقم السري وبالمفتاح.',
      ],
      faq: [
        {
          q: 'هل يستطيع الموظف إخراج النقود بعد إيداعها؟',
          a: 'لا. تسقط النقود من درج الإيداع إلى داخل الخزنة المقفلة، ولا تُخرج إلا بفتح الباب بالرقم السري والمفتاح.',
        },
        {
          q: 'ما الفرق بين خزنة الإيداع وخزنة الإيداع الليلي؟',
          a: 'كلاهما يستقبل النقود دون فتح الخزنة، والإيداع الليلي مزوّد بدرج يُسحب للخارج لإيداع إيراد آخر اليوم بسهولة.',
        },
        {
          q: 'هل تتوفر عروض أسعار لعدة فروع؟',
          a: 'نعم، أرسلوا لنا عدد الفروع والطراز المطلوب ونجهّز عرض سعر شاملًا مع توصيل مجاني داخل قطر.',
        },
      ],
    },
    en: {
      title: 'Who a deposit safe suits, and how to choose one',
      body: [
        'A deposit safe is made for shops, supermarkets, restaurants, cafés, fuel stations and branches that take cash all day in Doha and across Qatar. The cashier drops cash through the top drawer without knowing the code, and only the owner or manager opens the safe.',
        'When choosing, think about the daily takings, the size of envelopes or bundles, and how many people may open the safe. A standard deposit safe suits frequent drops through the day; the night deposit safe, with its pull-out drawer, suits end-of-day takings. UCHIDA deposit safes lock with both a code and a key.',
      ],
      faq: [
        {
          q: 'Can staff take cash out after depositing it?',
          a: 'No. Cash drops from the deposit drawer into the locked body of the safe and only comes out when the door is opened with the code and key.',
        },
        {
          q: 'What is the difference between a deposit safe and a night deposit safe?',
          a: 'Both take cash without opening the safe; the night deposit safe has a pull-out drawer that makes end-of-day deposits easy.',
        },
        {
          q: 'Can you quote for several branches?',
          a: 'Yes. Send us the number of branches and the model you need, and we will prepare a full quotation with free delivery across Qatar.',
        },
      ],
    },
  },

  'hotel-safes': {
    ar: {
      title: 'كيف تختارون خزنة الفندق المناسبة؟',
      body: [
        'خزائن الفنادق موجّهة للفنادق والشقق الفندقية والمجمعات السكنية وسكن الموظفين في قطر، وتناسب أيضًا البيت لمن يريد خزنة صغيرة. المهم أن تتسع لجواز السفر والهاتف والحاسوب الصغير، وأن تُركّب داخل خزانة الملابس أو أسفل المكتب.',
        'اختاروا نوع القفل حسب طريقة إدارة الغرف: القفل الرقمي بشاشة من SAKURA يتيح لكل نزيل اختيار رقمه السري، والقفل بالمفتاح من UCHIDA بسيط ويناسب سكن الموظفين. ولتجهيز فندق أو مبنى كامل أرسلوا عدد الغرف لنجهّز عرض سعر للكمية.',
      ],
      faq: [
        {
          q: 'هل يستطيع النزيل اختيار رقمه السري بنفسه؟',
          a: 'نعم، في الخزائن الرقمية من SAKURA يضع النزيل رقمًا سريًا خاصًا به عند استخدام الخزنة.',
        },
        {
          q: 'هل توفرون خزائن فندقية بكميات كبيرة؟',
          a: 'نعم، نجهّز عروض أسعار للكميات لتجهيز فندق أو مبنى سكني كامل، مع توصيل مجاني داخل قطر.',
        },
        {
          q: 'هل تصلح الخزنة الفندقية للبيت؟',
          a: 'نعم، حجمها الصغير يجعلها مناسبة لخزانة الملابس في البيت لحفظ الجوازات والنقود والمجوهرات اليومية.',
        },
      ],
    },
    en: {
      title: 'How to choose the right hotel safe',
      body: [
        'Hotel safes are made for hotels, serviced apartments, residential compounds and staff housing in Qatar, and also suit homes that need a small safe. What matters is that it fits a passport, a phone and a small laptop, and that it fits inside a wardrobe or under a desk.',
        'Choose the lock by how the rooms are run: a SAKURA digital lock with display lets every guest set their own code, while an UCHIDA key lock is simple and suits staff housing. To equip a whole hotel or building, send us the number of rooms for a quantity quotation.',
      ],
      faq: [
        {
          q: 'Can guests set their own code?',
          a: 'Yes. On SAKURA digital safes each guest sets a personal code when using the safe.',
        },
        {
          q: 'Do you supply hotel safes in large quantities?',
          a: 'Yes. We quote for quantities to equip a whole hotel or residential building, with free delivery across Qatar.',
        },
        {
          q: 'Can a hotel safe be used at home?',
          a: 'Yes. Its compact size suits a home wardrobe for passports, cash and everyday jewellery.',
        },
      ],
    },
  },

  'luxury-safes': {
    ar: {
      title: 'لمن الخزائن الفاخرة وكيف تختارونها؟',
      body: [
        'الخزائن الفاخرة لمن يريد خزنة تبقى ظاهرة في البيت أو المجلس أو غرفة الملابس أو مكتب الإدارة العليا، فتكون قطعة أثاث راقية لا خزنة مخفية في زاوية. ابدؤوا باختيار التشطيب الذي يناسب المكان: خشب الجوز، أو نقشة الرخام الأسود أو الأبيض، أو الواجهة المضلّعة، أو أبواب SAKURA المزخرفة بالزهور.',
        'ثم فكّروا فيما ستحفظونه في الداخل: أدراج جلدية أو مخملية للمجوهرات، أو دوّار للساعات الأوتوماتيكية، أو أرفف للنقود والمستندات. ومن الأقفال المتاحة قارئ البصمة ولوحة الأرقام التي تعمل باللمس. زورونا في المعرض لرؤية التشطيبات على الطبيعة.',
      ],
      faq: [
        {
          q: 'هل الخزائن الفاخرة متينة مثل الخزائن العادية؟',
          a: 'نعم، التشطيب الفاخر يكون على الواجهة والهيكل حديدي. واسألونا عن مواصفات الحماية لكل طراز قبل الشراء.',
        },
        {
          q: 'هل يمكن تجهيز الخزنة الفاخرة من الداخل للمجوهرات؟',
          a: 'نعم، نصمّم التجهيز الداخلي بأدراج مبطّنة بالمخمل ومجسّمات للعقود ووسائد للساعات بحسب مقتنياتكم.',
        },
        {
          q: 'هل أستطيع رؤية التشطيبات قبل الشراء؟',
          a: 'نعم، الألوان والتشطيبات تبدو أجمل على الطبيعة، فزورونا في معرضنا بسوق العين على طريق سلوى في الدوحة.',
        },
      ],
    },
    en: {
      title: 'Who luxury safes are for, and how to choose one',
      body: [
        'Luxury safes are for those who want a safe on show in the home, majlis, dressing room or executive office: a fine piece of furniture rather than a safe hidden in a corner. Start with the finish that suits the room: walnut, black or white marble effect, a fluted front, or SAKURA’s floral doors.',
        'Then think about the inside: leather or velvet drawers for jewellery, a winder for automatic watches, or shelves for cash and documents. Lock options include a fingerprint reader and a touch keypad. Visit the showroom to see the finishes in person.',
      ],
      faq: [
        {
          q: 'Are luxury safes as sturdy as ordinary safes?',
          a: 'Yes. The decorative finish is on the front and the body is steel. Ask us for the protection details of each model before you buy.',
        },
        {
          q: 'Can a luxury safe be fitted inside for jewellery?',
          a: 'Yes. We design interiors with velvet-lined drawers, necklace busts and watch cushions around your collection.',
        },
        {
          q: 'Can I see the finishes before buying?',
          a: 'Yes. Colours and finishes look better in person, so visit our showroom at Souq Al Ein on Salwa Road, Doha.',
        },
      ],
    },
  },

  'jewellery-watch-interiors': {
    ar: {
      title: 'كيف تختارون خزنة المجوهرات والساعات؟',
      body: [
        'خزنة المجوهرات لمن يملك ذهبًا وألماسًا وساعات ثمينة ويريد حفظها في البيت بترتيب يمنع تلامس القطع وخدشها. ابدؤوا بعدّ ما ستحفظونه: كم عقدًا وطقمًا، وكم خاتمًا وزوج أقراط، وكم ساعة. هذا ما يحدّد عدد الأدراج وتوزيعها.',
        'اختاروا بعدها الخزنة الخارجية: حجمًا يتسع للأدراج مع مساحة إضافية لما ستضيفونه لاحقًا، وقفلًا يناسبكم بالرقم السري أو البصمة أو المفتاح، ومقاومة للحريق إن أردتم حماية المستندات معها. ولحمل المجوهرات خارج البيت اختاروا شنطة مجوهرات مقسّمة للسفر.',
      ],
      faq: [
        {
          q: 'هل يمكن تصميم الأدراج حسب مجوهراتي؟',
          a: 'نعم، نصمّم التجهيز الداخلي لكل عميل بحسب مقتنياته، ولا نبدأ العمل إلا بعد موافقته على التصميم.',
        },
        {
          q: 'من أين أشتري خزنة مجوهرات في قطر؟',
          a: 'من معرضنا في سوق العين على طريق سلوى بالدوحة، أو عبر واتساب وطلب عرض سعر من الموقع، والتوصيل مجاني لكل قطر.',
        },
        {
          q: 'هل لديكم شنط مجوهرات للسفر؟',
          a: 'نعم، شنط مقسّمة من الداخل بخانات للعقود والأساور والخواتم والأقراط ووسائد للساعات، للسفر والفنادق والأعراس.',
        },
      ],
    },
    en: {
      title: 'How to choose a jewellery and watch safe',
      body: [
        'A jewellery safe is for anyone with gold, diamonds and fine watches who wants to keep them at home, arranged so pieces never touch or scratch. Start by counting what you will keep: how many necklaces and sets, rings and pairs of earrings, and watches. That decides the drawers you need.',
        'Then choose the safe around them: a size that takes the drawers with room for future pieces, a lock that suits you (code, fingerprint or key), and fire resistance if you want to keep documents in it too. For jewellery away from home, choose a divided travel case.',
      ],
      faq: [
        {
          q: 'Can the drawers be designed around my jewellery?',
          a: 'Yes. We design each interior around the owner’s collection and start work only once the design is approved.',
        },
        {
          q: 'Where can I buy a jewellery safe in Qatar?',
          a: 'At our showroom in Souq Al Ein on Salwa Road, Doha, or on WhatsApp, with free delivery anywhere in Qatar.',
        },
        {
          q: 'Do you have travel jewellery cases?',
          a: 'Yes, divided cases with compartments for necklaces, bangles, rings, earrings and watches, for travel and weddings.',
        },
      ],
    },
  },

  'filing-cabinets': {
    ar: {
      title: 'كيف تختارون خزانة الملفات المناسبة؟',
      body: [
        'خزائن الملفات للمكاتب والشركات والمدارس والعيادات والجهات الحكومية في قطر، ولكل نوع من الأوراق خزانة تناسبه. ملفات العمل اليومي تكفيها خزانة ملفات حديدية من GODREJ بعدد الأدراج الذي يناسب الأرشيف، أما العقود والسجلات الأصلية التي لا يمكن تعويضها فالأنسب لها خزانة سجلات مقاومة للحريق من UCHIDA أو SAKURA.',
        'عند الاختيار احسبوا حجم الأرشيف الحالي والمتوقع، وتأكدوا من مقاس الملفات المستخدمة لديكم، واختاروا القفل: مفتاح لكل درج، أو لوحة أرقام رقمية للخزانة كلها. ولتجهيز أرشيف كامل نجهّز عرض سعر شاملًا.',
      ],
      faq: [
        {
          q: 'متى أحتاج خزانة ملفات مقاومة للحريق؟',
          a: 'حين تحفظون مستندات أصلية يصعب تعويضها مثل العقود والسجلات الرسمية. واسألونا عن تصنيف الحريق لكل طراز قبل الشراء.',
        },
        {
          q: 'هل لكل درج قفل مستقل؟',
          a: 'في عدد من الطرازات نعم، ومنها خزائن بقفل مفتاح لكل درج، وأخرى بلوحة أرقام رقمية.',
        },
        {
          q: 'هل توفرون خزائن ملفات بكميات للمكاتب؟',
          a: 'نعم، أخبرونا بعدد الخزائن وعدد الأدراج المطلوب ونجهّز عرض سعر مع توصيل مجاني داخل قطر.',
        },
      ],
    },
    en: {
      title: 'How to choose the right filing cabinet',
      body: [
        'Filing cabinets serve offices, companies, schools, clinics and government bodies in Qatar, and each kind of paperwork has a cabinet to match. Everyday files are well served by a GODREJ steel filing cabinet with as many drawers as your archive needs, while contracts and original records that cannot be replaced belong in a fire-resistant records cabinet from UCHIDA or SAKURA.',
        'When choosing, estimate the archive you have now and the one you expect, check the size of the files you use, and pick the lock: a key on every drawer or a digital keypad for the whole cabinet. We prepare full quotations for equipping a whole archive.',
      ],
      faq: [
        {
          q: 'When do I need a fire-resistant filing cabinet?',
          a: 'When you keep originals that are hard to replace, such as contracts and official records. Ask us for each model’s fire rating before you buy.',
        },
        {
          q: 'Does every drawer have its own lock?',
          a: 'On several models, yes: some have a key lock on every drawer, others a digital keypad.',
        },
        {
          q: 'Do you supply filing cabinets in quantity for offices?',
          a: 'Yes. Tell us how many cabinets and drawers you need and we will prepare a quotation with free delivery across Qatar.',
        },
      ],
    },
  },

  'key-cabinets': {
    ar: {
      title: 'لمن خزانة المفاتيح وكيف تختارونها؟',
      body: [
        'خزانة المفاتيح للفنادق والمجمعات السكنية والشركات ومعارض السيارات وفرق الصيانة في قطر، وكل جهة تتعامل مع مفاتيح كثيرة يحتاج الوصول إليها إلى ترتيب ومسؤولية.',
        'اختاروا الحجم حسب عدد المفاتيح اليوم مع مساحة للزيادة: الخزانة الصغيرة تناسب مكتبًا أو مبنى واحدًا، والخزانة الطويلة تناسب الفنادق والمجمعات. واستفيدوا من الميداليات الملوّنة لتقسيم المفاتيح حسب المبنى أو الطابق أو السيارة، ومن الخطافات المرقّمة لتسجيل كل مفتاح في دفتر أو جدول. وتُقفل الخزانة بمفتاح ليبقى الوصول إليها للمسؤول وحده.',
      ],
      faq: [
        {
          q: 'كيف تُثبَّت خزانة المفاتيح؟',
          a: 'خزائن المفاتيح من UCHIDA تُعلّق على الجدار في مكتب الاستقبال أو غرفة الأمن.',
        },
        {
          q: 'هل تأتي مع ميداليات للمفاتيح؟',
          a: 'نعم، بخطافات مرقّمة وميداليات صفراء وزرقاء لتصنيف المفاتيح.',
        },
        {
          q: 'أي حجم يناسب فندقًا أو مجمعًا سكنيًا؟',
          a: 'الخزانة الطويلة عادةً، وأخبرونا بعدد المفاتيح لنرشّح لكم الحجم أو العدد المناسب.',
        },
      ],
    },
    en: {
      title: 'Who a key cabinet is for, and how to choose one',
      body: [
        'Key cabinets serve hotels, residential compounds, companies, car showrooms and maintenance teams in Qatar: any place handling many keys that need order and accountability.',
        'Choose the size for today’s keys with room to grow: a compact cabinet suits one office or building, and a tall one suits hotels and compounds. Use the coloured tags to sort keys by building, floor or vehicle, and the numbered hooks to log every key in a register. The cabinet locks with a key, so only the person in charge can open it.',
      ],
      faq: [
        {
          q: 'How is a key cabinet installed?',
          a: 'UCHIDA key cabinets mount on the wall, at reception or in the security room.',
        },
        {
          q: 'Does it come with key tags?',
          a: 'Yes, with numbered hooks and yellow and blue tags for sorting keys.',
        },
        {
          q: 'Which size suits a hotel or compound?',
          a: 'Usually the tall cabinet. Tell us how many keys you manage and we will recommend the right size or number of cabinets.',
        },
      ],
    },
  },

  'cash-boxes': {
    ar: {
      title: 'متى تختارون صندوق النقود بدل الخزنة؟',
      body: [
        'صندوق النقود للمحلات والكاشير والمطاعم والمعارض والجمعيات في قطر: لحفظ نقود اليوم عند الكاونتر، أو لنقلها بين المحل والمكتب والبنك. هو أصغر من الخزنة وأسرع في الاستخدام، لكنه لا يغني عنها لحفظ مبالغ كبيرة لفترة طويلة.',
        'اختاروا القفل الذي يناسب طريقة العمل: الأقفال الدوّارة لا تحتاج بطارية، ولوحة الأرقام أسرع في الفتح المتكرر. واختاروا الصندوق بدرج أمامي إن كان سيبقى على الكاونتر، والصندوق المحمول بمقبض إن كنتم ستنقلون النقود.',
      ],
      faq: [
        {
          q: 'هل يغني صندوق النقود عن الخزنة؟',
          a: 'لا، هو للاستخدام اليومي والنقل. أما المبالغ الكبيرة فمكانها خزنة حديدية أو خزنة إيداع.',
        },
        {
          q: 'ما الفرق بين القفل الدوّار والرقمي؟',
          a: 'القفل الدوّار ميكانيكي لا يحتاج بطارية، والرقمي يُفتح بلوحة أرقام وأسرع في الاستخدام المتكرر.',
        },
        {
          q: 'هل يوجد صندوق لنقل النقود؟',
          a: 'نعم، صندوق BSM المحمول بمقبض وقفلين دوّارين لنقل النقود بين المحل والمكتب والبنك.',
        },
      ],
    },
    en: {
      title: 'When to choose a cash box instead of a safe',
      body: [
        'A cash box serves shops, cashiers, restaurants, showrooms and co-operatives in Qatar: for keeping the day’s cash at the counter, or moving it between the shop, the office and the bank. It is smaller and quicker to use than a safe, but it does not replace one for keeping large sums for long.',
        'Pick the lock that suits how you work: combination dials need no battery, while a keypad is quicker for frequent opening. Choose a box with a front drawer if it stays on the counter, and the portable box with a handle if you carry cash around.',
      ],
      faq: [
        {
          q: 'Can a cash box replace a safe?',
          a: 'No. It is for daily use and carrying cash; large sums belong in a steel safe or a deposit safe.',
        },
        {
          q: 'What is the difference between a dial lock and a digital lock?',
          a: 'A dial lock is mechanical and needs no battery; a digital lock opens with a keypad and is quicker for frequent use.',
        },
        {
          q: 'Is there a box for carrying cash?',
          a: 'Yes, the portable BSM cash box with a handle and two combination dials, for carrying cash between the shop, the office and the bank.',
        },
      ],
    },
  },

  'steel-cupboards': {
    ar: {
      title: 'كيف تختارون الخزانة الحديدية (الدولاب الحديد) المناسبة؟',
      body: [
        'الخزائن الحديدية أو الدواليب الحديد للمكاتب والمدارس والمستشفيات والمستودعات والجهات الحكومية في قطر، لحفظ الملفات والأدوات والمستلزمات خلف باب متين يُقفل. وهي غير الخزنة: تنظّم وتحفظ، لكنها ليست للنقود والمقتنيات الثمينة.',
        'اختاروا عدد الأبواب حسب المساحة المتاحة: الباب الواحد للممرات والزوايا الضيقة، والبابان للسعة الأكبر. واختاروا الأبواب الزجاجية إن أردتم رؤية المحتوى، والخزانة الخشبية بواجهة زجاجية لمكاتب الإدارة. وتتوفر بألوان الرمادي والبيج والأبيض لتناسب المكان.',
      ],
      faq: [
        {
          q: 'ما الفرق بين الخزانة الحديدية والخزنة؟',
          a: 'الخزانة الحديدية لتنظيم الملفات والأدوات وتُقفل بقفل عادي، أما الخزنة فمصمّمة لحماية النقود والمقتنيات الثمينة من السرقة أو الحريق.',
        },
        {
          q: 'من أي علامة الخزائن الحديدية لديكم؟',
          a: 'من GODREJ، الاسم الذي يصنع الخزائن في الهند منذ عام 1902.',
        },
        {
          q: 'هل توفرون دواليب حديد بكميات للمكاتب والمدارس؟',
          a: 'نعم، أرسلوا لنا العدد والنوع المطلوب ونجهّز عرض سعر مع توصيل مجاني داخل قطر.',
        },
      ],
    },
    en: {
      title: 'How to choose the right steel cupboard',
      body: [
        'Steel cupboards serve offices, schools, hospitals, stores and government bodies in Qatar, keeping files, tools and supplies behind a sturdy locking door. They are not safes: they organise and store, but they are not meant for cash or valuables.',
        'Choose the number of doors for the space you have: one door for corridors and narrow corners, two doors for more capacity. Choose glass doors if you want to see the contents, and the wooden cabinet with a glass front for management offices. They come in grey, beige and white to suit the room.',
      ],
      faq: [
        {
          q: 'What is the difference between a steel cupboard and a safe?',
          a: 'A steel cupboard organises files and tools behind an ordinary lock; a safe is designed to protect cash and valuables from theft or fire.',
        },
        {
          q: 'Which brand are your steel cupboards?',
          a: 'GODREJ, a name that has made safes in India since 1902.',
        },
        {
          q: 'Do you supply steel cupboards in quantity for offices and schools?',
          a: 'Yes. Send us the number and type you need and we will prepare a quotation with free delivery across Qatar.',
        },
      ],
    },
  },

  'steel-lockers': {
    ar: {
      title: 'كيف تختارون اللوكر الحديد المناسب؟',
      body: [
        'اللوكرات الحديدية لغرف الموظفين والمدارس والأندية الرياضية والمصانع والمستشفيات في قطر، لتمنح كل شخص مكانًا خاصًا بقفل لأغراضه.',
        'يحدّد الاختيار ما سيُحفظ في كل خانة: الباب الواحد أو اللوكر بطابقين يناسب تعليق الملابس وزيّ العمل، واللوكر بأربعة أو ستة أبواب يناسب الحقائب الصغيرة والهواتف والمحافظ. احسبوا عدد الأشخاص، ثم وزّعوا الأعمدة حسب المساحة المتاحة، واختاروا اللون الذي يناسب المكان من الأسود والبيج والأبيض العاجي.',
      ],
      faq: [
        {
          q: 'كم بابًا أحتاج في اللوكر؟',
          a: 'بابًا لكل شخص. وللملابس الطويلة اختاروا الباب الواحد أو الطابقين، وللأغراض الصغيرة أربعة أو ستة أبواب في العمود.',
        },
        {
          q: 'هل تناسب اللوكرات المدارس والأندية؟',
          a: 'نعم، لوكرات GODREJ الحديدية مناسبة للمدارس والأندية وغرف تبديل الملابس في المصانع والشركات.',
        },
        {
          q: 'هل تساعدوننا في توزيع اللوكرات؟',
          a: 'نعم، أخبرونا بعدد الأشخاص وما يحتاج كل منهم إلى حفظه، ونرشّح لكم التوزيع المناسب مع عرض سعر شامل.',
        },
      ],
    },
    en: {
      title: 'How to choose the right steel locker',
      body: [
        'Steel lockers serve staff rooms, schools, sports clubs, factories and hospitals in Qatar, giving each person a private, lockable place for their things.',
        'The choice depends on what each compartment will hold: a single door or two-tier locker suits hanging clothes and uniforms, while four or six doors suit small bags, phones and wallets. Count the people, plan the columns for the space you have, and pick the colour that suits the room: black, beige or off-white.',
      ],
      faq: [
        {
          q: 'How many doors do I need?',
          a: 'One per person. For long clothes choose a single door or two tiers; for small items, four or six doors per column.',
        },
        {
          q: 'Do the lockers suit schools and clubs?',
          a: 'Yes. GODREJ steel lockers suit schools, clubs and changing rooms in factories and companies.',
        },
        {
          q: 'Can you help us plan the lockers?',
          a: 'Yes. Tell us how many people need lockers and what each needs to store, and we will recommend the right layout with a full quotation.',
        },
      ],
    },
  },

  'home-safes': {
    ar: {
      title: 'كيف تختارون خزنة البيت المناسبة؟',
      body: [
        'الخزنة المنزلية لكل أسرة في الدوحة وقطر تحفظ نقودًا أو ذهبًا أو جوازات سفر أو عقودًا في البيت. ابدؤوا بمكان الخزنة: خزانة الملابس تحتاج خزنة صغيرة، وغرفة الملابس أو المجلس قد تتسع لخزنة أكبر أو خزنة فاخرة ظاهرة.',
        'ثم اختاروا القفل الذي يستخدمه كل أفراد البيت بسهولة: البصمة أسرع، والرقم السري يناسب أكثر من شخص، والمفتاح الاحتياطي يحميكم إن نُسي الرقم. وإن كنتم ستحفظون مستندات أصلية فاختاروا خزنة مقاومة للحريق، وإن كانت المجوهرات هي الأهم فاختاروا خزنة بأدراج مبطّنة بالمخمل.',
      ],
      faq: [
        {
          q: 'ما أفضل خزنة للبيت؟',
          a: 'لا توجد خزنة واحدة أفضل للجميع: الأفضل هي التي تتسع لما ستحفظونه وتناسب مكانها وقفلها مريح لكم. زورونا لتجربة الأقفال بأنفسكم.',
        },
        {
          q: 'هل الخزائن المنزلية الصغيرة آمنة؟',
          a: 'نعم إذا كانت حديدية بقفل موثوق. واسألونا عن تثبيت الخزنة في الأرض أو الجدار حسب الطراز.',
        },
        {
          q: 'هل التوصيل مجاني داخل قطر؟',
          a: 'نعم، التوصيل مجاني إلى الدوحة والريان والوكرة ولوسيل والخور وأم صلال وباقي مناطق قطر.',
        },
      ],
    },
    en: {
      title: 'How to choose the right home safe',
      body: [
        'A home safe is for any household in Doha and across Qatar that keeps cash, gold, passports or contracts at home. Start with where it will go: a wardrobe needs a compact safe, while a dressing room or majlis may take a larger one.',
        'Then choose a lock everyone at home finds easy: fingerprint is quickest, a code suits several people, and a backup key protects you if the code is forgotten. If you will keep original documents, choose a fire-resistant safe; if jewellery comes first, choose a safe with velvet-lined drawers.',
      ],
      faq: [
        {
          q: 'What is the best safe for a home?',
          a: 'There is no single best safe for everyone: the best one holds what you will keep, fits its place and has a lock you find easy.',
        },
        {
          q: 'Are small home safes secure?',
          a: 'Yes, if they are steel with a reliable lock. Ask us about anchoring the safe to the floor or wall for each model.',
        },
        {
          q: 'Is delivery free within Qatar?',
          a: 'Yes, delivery is free to Doha and everywhere else in Qatar.',
        },
      ],
    },
  },
}
