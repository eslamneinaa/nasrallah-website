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
        'عند المقارنة انظروا إلى تصنيف الحريق لكل موديل، ساعة (60 دقيقة) أو ساعتين (120 دقيقة)، فهو المدة التي تحمي فيها الطبقة العازلة الورق والمستندات والذهب والكاش من الحرارة. واسألوا عن الوزن والأبعاد الداخلية والخارجية وبلد الصنع، وجرّبوا القفل والمقبض بأنفسكم في المعرض قبل الشراء.',
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
        {
          q: 'هل الخزنة المقاومة للحريق فعلًا ما تحترق؟',
          a: 'تحمي الخزنة ما بداخلها من حرارة الحريق للمدة التي صُنّفت لها، ساعة أو ساعتين حسب الموديل، وهذه المدة مذكورة في صفحة كل خزنة. لكنها ليست حماية بلا حدود، وكلما طالت مدة التصنيف زاد هامش الأمان.',
        },
        {
          q: 'خزنة ساعة ولا ساعتين ضد الحريق، أيهم أحتاج؟',
          a: 'لحفظ الجوازات والنقود والذهب في البيت يختار كثيرون تصنيف ساعة. أما الأرشيف المهم والعقود الأصلية في المكاتب والشركات فالأنسب لها تصنيف ساعتين. والفرق بينهما في الوزن والسعر، فقارنوا الموديلات في جدول المقارنة بهذه الصفحة.',
        },
        {
          q: 'من يبيع خزنة مقاومة للحريق ساعتين في الدوحة؟',
          a: 'نوفّرها في معرضنا بسوق العين، ومنها: UCHIDA موديل BK-172KE وBK-265KE وUBO-335E وPB-103 وPB-104 وE-526، وSAKURA موديل EFI703. كلها مقاومة للحريق لمدة ساعتين، ومقاساتها وأسعارها في جدول المقارنة بهذه الصفحة.',
        },
        {
          q: 'هل الخزنة المقاومة للحريق تحمي الفلاشات والهارد ديسك؟',
          a: 'الفلاشات والأقراص الصلبة تتأثر بالحرارة أسرع بكثير من الورق، ومدة مقاومة الحريق المذكورة للخزنة لا تعني بالضرورة أنها تحميها. احتفظوا بنسخة احتياطية في مكان آخر، واسألونا قبل الاعتماد على الخزنة لحفظ وسائط رقمية مهمة.',
        },
        {
          q: 'كم سعر خزنة ضد الحريق في قطر؟',
          a: 'أسعار الخزائن المقاومة للحريق معلنة في صفحة كل خزنة وفي جدول المقارنة بهذه الصفحة، من الخزنة الصغيرة بتصنيف ساعة إلى الخزنة ذات البابين بتصنيف ساعتين. ولمعرفة ما الذي يحدد السعر اقرؤوا مقالنا عن أسعار الخزائن في قطر.',
        },
      ],
    },
    en: {
      title: 'How to choose a cash safe or a fire-resistant safe',
      body: [
        'These safes suit homes, shops, offices, banks and government bodies in Doha and across Qatar. Start with what you will keep: cash and gold need a sturdy steel safe with a reliable lock, while contracts and original documents need a fire-resistant safe that protects against both fire and theft.',
        'Then choose the size, a little larger than you need today, and the lock: fingerprint for quick access, a code for safes shared by several people, and a combination dial or key for those who prefer a mechanical lock. Fire resistance differs from model to model, so ask us for each model’s rating before you buy rather than relying on its look or name.',
        'When comparing, look at each model’s fire rating, 1 hour (60 minutes) or 2 hours (120 minutes): the time its insulation keeps paper, documents, gold and cash from the heat. Ask about the weight, inside and outside dimensions and country of manufacture, and try the lock and handle yourself at the showroom before you buy.',
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
        {
          q: 'Does a fire-resistant safe really survive a fire?',
          a: 'It protects its contents from the heat of a fire for the time it is rated for, one or two hours depending on the model, as shown on each safe’s page. It is not unlimited protection; the longer the rating, the wider the safety margin.',
        },
        {
          q: 'Do I need a 1-hour or 2-hour fire-rated safe?',
          a: 'For passports, cash and gold at home many people choose a 1-hour rating. Important archives and original contracts in offices and companies are better served by 2 hours. The difference is in weight and price, so compare the models in the table on this page.',
        },
        {
          q: 'Who sells a 2-hour fire-rated safe in Doha?',
          a: 'We do, at our Souq Al Ein showroom: UCHIDA models BK-172KE, BK-265KE, UBO-335E, PB-103, PB-104 and E-526, and SAKURA model EFI703, all rated for two hours. Their sizes and prices are in the comparison table on this page.',
        },
        {
          q: 'Will a fireproof safe protect USB drives and hard disks?',
          a: 'USB drives and hard disks are damaged by heat far sooner than paper, so a safe’s fire rating does not necessarily cover them. Keep a backup somewhere else, and ask us before relying on a safe for important digital media.',
        },
        {
          q: 'How much does a fireproof safe cost in Qatar?',
          a: 'Prices for our fire-resistant safes are listed on each safe’s page and in the comparison table on this page, from a compact 1-hour safe to a 2-hour double-door safe. Our article on safe prices in Qatar explains what drives the price.',
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
        'خزنة الإيداع تجمع بين الدرج العلوي والإيداع دون فتح الخزنة: يودع الكاشير إيراد نهاية الدوام، ويبقى فتحها للمدير وحده، فتقلّ صلاحيات الموظفين على النقد. وهي مناسبة للمطاعم ومحطات الوقود والفروع، ومنها خزنة إيداع ليلي بدرج يُسحب للخارج.',
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
        {
          q: 'من يورد خزائن الإيداع للمطاعم في قطر؟',
          a: 'نوفّر خزائن الإيداع من UCHIDA للمطاعم والمحلات ومحطات الوقود، منها خزنة الإيداع موديل PB-ND15 المقاومة للحريق لمدة ساعتين، وخزنة الإيداع الليلي موديل UFLC-360E. ولعدة فروع نجهّز عرض سعر واحدًا بالكميات.',
        },
        {
          q: 'كيف تشتغل خزنة الإيداع؟',
          a: 'يضع الموظف النقود أو الظرف في الدرج العلوي ويغلقه، فتسقط داخل جسم الخزنة المقفل دون أن يفتحها. ولا يفتح الخزنة نفسها إلا من يملك الرقم السري والمفتاح، وهو عادةً صاحب العمل أو المدير.',
        },
      ],
    },
    en: {
      title: 'Who a deposit safe suits, and how to choose one',
      body: [
        'A deposit safe is made for shops, supermarkets, restaurants, cafés, fuel stations and branches that take cash all day in Doha and across Qatar. The cashier drops cash through the top drawer without knowing the code, and only the owner or manager opens the safe.',
        'When choosing, think about the daily takings, the size of envelopes or bundles, and how many people may open the safe. A standard deposit safe suits frequent drops through the day; the night deposit safe, with its pull-out drawer, suits end-of-day takings. UCHIDA deposit safes lock with both a code and a key.',
        'A deposit safe pairs a top drawer with drop-in deposits that never open the safe: the cashier drops the end-of-shift takings and only the manager opens it, which limits staff access to cash. It suits restaurants, petrol stations and branches, and there is a night deposit model with a pull-out drawer.',
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
        {
          q: 'Who supplies deposit safes to restaurants in Qatar?',
          a: 'We supply UCHIDA deposit safes to restaurants, shops and fuel stations, including the PB-ND15 deposit safe with a 2-hour fire rating and the UFLC-360E night deposit safe. For several branches we prepare one quotation for the whole quantity.',
        },
        {
          q: 'How does a deposit safe work?',
          a: 'Staff put cash or an envelope in the top drawer and close it, and it drops into the locked body of the safe without the safe being opened. Only the person with the code and key, usually the owner or manager, opens the safe itself.',
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
        'في غرف الفنادق والشقق الفندقية يضع النزيل رمزه الخاص في الخزائن الرقمية ذات الشاشة، وتتسع الخزنة للجواز والنقود والهاتف والمجوهرات. وقبل الطلب قارنوا الأبعاد الداخلية بما سيُحفظ فيها، ونجهّز عروض أسعار للكميات.',
      ],
      faq: [
        {
          q: 'هل يستطيع النزيل اختيار رقمه السري بنفسه؟',
          a: 'نعم، في الخزائن الرقمية من SAKURA يضع النزيل رقمًا سريًا خاصًا به عند استخدام الخزنة.',
        },
        {
          q: 'أحتاج عرض سعر لخزائن غرف فندق في قطر',
          a: 'نعم، نجهّز عروض أسعار للكميات لتجهيز فندق أو مبنى سكني كامل، مع توصيل مجاني داخل قطر.',
        },
        {
          q: 'هل تصلح الخزنة الفندقية للبيت؟',
          a: 'نعم، حجمها الصغير يجعلها مناسبة لخزانة الملابس في البيت لحفظ الجوازات والنقود والمجوهرات اليومية.',
        },
        {
          q: 'هل خزنة الفندق تتسع لابتوب؟',
          a: 'المقاسات الداخلية لخزنة SAKURA موديل UBHS-16 هي 36.6 × 29.6 × 22.5 سم، ولموديل UBHS-14 هي 36 × 25.6 × 22.5 سم. قارنوها بمقاس اللابتوب قبل الطلب، أو أحضروه إلى المعرض لتجربته.',
        },
      ],
    },
    en: {
      title: 'How to choose the right hotel safe',
      body: [
        'Hotel safes are made for hotels, serviced apartments, residential compounds and staff housing in Qatar, and also suit homes that need a small safe. What matters is that it fits a passport, a phone and a small laptop, and that it fits inside a wardrobe or under a desk.',
        'Choose the lock by how the rooms are run: a SAKURA digital lock with display lets every guest set their own code, while an UCHIDA key lock is simple and suits staff housing. To equip a whole hotel or building, send us the number of rooms for a quantity quotation.',
        'In hotel guest rooms and serviced apartments, guests set their own code on the digital safes with a display, and the safe takes a passport, cash, a phone and jewellery. Compare the inside dimensions with what will go in before ordering; we quote for bulk quantities.',
      ],
      faq: [
        {
          q: 'Can guests set their own code?',
          a: 'Yes. On SAKURA digital safes each guest sets a personal code when using the safe.',
        },
        {
          q: 'I need a quotation for hotel room safes in Qatar',
          a: 'Yes. We quote for quantities to equip a whole hotel or residential building, with free delivery across Qatar.',
        },
        {
          q: 'Can a hotel safe be used at home?',
          a: 'Yes. Its compact size suits a home wardrobe for passports, cash and everyday jewellery.',
        },
        {
          q: 'Does the hotel safe fit a laptop?',
          a: 'The SAKURA UBHS-16 measures 36.6 × 29.6 × 22.5 cm inside, and the UBHS-14 36 × 25.6 × 22.5 cm. Compare these with your laptop before ordering, or bring it to the showroom to try.',
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
        'تشطيبات خشب الجوز ونقشة الرخام والواجهات المضلّعة والمزخرفة والألوان تجعل الخزنة جزءًا من التصميم الداخلي للمجلس أو الفيلا أو المكتب التنفيذي، بدل أن تُخفى في ركن.',
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
        {
          q: 'أبي خزنة فخمة تناسب المجلس، وش عندكم؟',
          a: 'خزائن بتشطيبات خشب الجوز، وواجهات مضلّعة، وأبواب بنقشة الرخام، وخزنة SAKURA بباب مزخرف بالزهور، وخزنة UCHIDA الحمراء بأدراج جلدية. زورونا في المعرض لتختاروا التشطيب الذي يناسب المجلس.',
        },
        {
          q: 'هل فيه خزائن بألوان غير الأسود؟',
          a: 'نعم: خزنة UCHIDA الحمراء موديل ZC-50، وخزنة دوّار الساعات البيضاء، وخزنة UCHIDA البيضاء موديل PB-103، وخزنة UCHIDA البيج موديل BK-172KE، وخزنة SAKURA بالباب المزخرف بالزهور.',
        },
      ],
    },
    en: {
      title: 'Who luxury safes are for, and how to choose one',
      body: [
        'Luxury safes are for those who want a safe on show in the home, majlis, dressing room or executive office: a fine piece of furniture rather than a safe hidden in a corner. Start with the finish that suits the room: walnut, black or white marble effect, a fluted front, or SAKURA’s floral doors.',
        'Then think about the inside: leather or velvet drawers for jewellery, a winder for automatic watches, or shelves for cash and documents. Lock options include a fingerprint reader and a touch keypad. Visit the showroom to see the finishes in person.',
        'Walnut finishes, marble effects, fluted and floral fronts and colours make the safe part of the interior design of a majlis, a villa or an executive office, instead of something hidden in a corner.',
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
        {
          q: 'Do you have a luxury safe that suits a majlis?',
          a: 'Safes in walnut finishes, with fluted fronts or marble-effect doors, the SAKURA safe with a floral door, and the red UCHIDA safe with leather drawers. Visit the showroom to choose the finish that suits your majlis.',
        },
        {
          q: 'Do you have safes in colours other than black?',
          a: 'Yes: the red UCHIDA ZC-50, the white watch winder safe, the white UCHIDA PB-103, the beige UCHIDA BK-172KE and the SAKURA safe with a floral door.',
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
        'ويُصمَّم التجهيز الداخلي حسب الطلب: أدراج مبطّنة بالمخمل، ومجسّمات للعقود، وبكرات للخواتم، ووسائد للساعات، بتشطيبات خشبية مثل البلوط الرمادي ومقابض نحاسية، وهو مناسب لحفظ شبكة العروس وأطقم الذهب والألماس.',
      ],
      faq: [
        {
          q: 'هل تقدرون تجهزون أدراج الخزنة حسب مجوهراتي؟',
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
        {
          q: 'أين أجد خزنة مجوهرات بأدراج مبطنة بالمخمل في قطر؟',
          a: 'في معرضنا بسوق العين على طريق سلوى في الدوحة. نجهّز خزائن المجوهرات بأدراج مبطّنة بالمخمل للعقود والأساور والخواتم والساعات، ويمكنكم مشاهدة أمثلة منها بالفيديو على صفحة «استعرض تشكيلتنا».',
        },
        {
          q: 'أبي خزنة لشبكة العروس، وش الأنسب؟',
          a: 'خزنة مجوهرات مقاومة للحريق بأدراج مبطّنة، بمقاس يتسع للشبكة وما يُضاف إليها مع السنين: مثل خزنة UCHIDA الحمراء موديل ZC-50 بأدراج جلدية، أو خزنة UCHIDA موديل PB-104 للمجوهرات والساعات لمن يريد مساحة أكبر. أخبرونا بعدد الأطقم لنقترح المقاس والتجهيز.',
        },
        {
          q: 'وش أهدي زوجتي هدية فخمة تدوم؟',
          a: 'خزنة مجوهرات بتجهيز داخلي يُصمَّم حسب مجوهراتها هدية تبقى معها سنوات وتحفظ كل قطعة في مكانها. وللهدية الأصغر شنطة مجوهرات للسفر مقسّمة من الداخل بسعر 2,700 ريال قطري.',
        },
      ],
    },
    en: {
      title: 'How to choose a jewellery and watch safe',
      body: [
        'A jewellery safe is for anyone with gold, diamonds and fine watches who wants to keep them at home, arranged so pieces never touch or scratch. Start by counting what you will keep: how many necklaces and sets, rings and pairs of earrings, and watches. That decides the drawers you need.',
        'Then choose the safe around them: a size that takes the drawers with room for future pieces, a lock that suits you (code, fingerprint or key), and fire resistance if you want to keep documents in it too. For jewellery away from home, choose a divided travel case.',
        'Interiors are made to order: velvet drawers, necklace busts, ring rolls and watch pillows, in wood finishes such as grey oak with brass handles, suited to a bride’s jewellery and sets of gold and diamonds.',
      ],
      faq: [
        {
          q: 'Can you customise the safe drawers for my jewellery?',
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
        {
          q: 'Where can I find a jewellery safe with velvet-lined drawers in Qatar?',
          a: 'At our showroom in Souq Al Ein on Salwa Road, Doha. We fit jewellery safes with velvet-lined drawers for necklaces, bangles, rings and watches, and you can see examples on video on our “Explore our collection” page.',
        },
        {
          q: 'Which safe is best for a bride’s jewellery set?',
          a: 'A fire-resistant jewellery safe with lined drawers, sized for the set and for what is added over the years: such as the red UCHIDA ZC-50 with leather drawers, or the UCHIDA PB-104 jewellery and watch safe for more space. Tell us how many sets you have and we will suggest the size and fit-out.',
        },
        {
          q: 'What lasting luxury gift can I give my wife?',
          a: 'A jewellery safe with an interior designed around her collection is a gift that stays with her for years and keeps every piece in its place. For a smaller gift, a travel jewellery case with fitted compartments costs QAR 2,700.',
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
        'تُناسب خزائن الملفات المكاتب والشركات والجهات الحكومية لحفظ الملفات والسجلات والأرشيف في أدراج تُقفل: بقفل علوي في خزائن GODREJ، وبمفتاح لكل درج أو لوحة أرقام في الخزائن المقاومة للحريق لما لا يمكن تعويضه.',
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
        {
          q: 'أريد خزانة ملفات حديد 4 أدراج بقفل',
          a: 'لدينا ثلاث خزائن بأربعة أدراج، وكلها مقاومة للحريق: UCHIDA موديل UMB4-4K بقفلين علويين ومفتاح لكل درج وتصنيف ساعتين، وSAKURA موديل UB4-4DLK بقفل رقمي، وSAKURA موديل UB4-4K2K، وكلتاهما بتصنيف ساعة. أما خزائن GODREJ الحديدية فبدرجين وثلاثة وخمسة أدراج.',
        },
        {
          q: 'من يورد خزائن ملفات مقاومة للحريق للشركات؟',
          a: 'نوفّر خزائن الملفات والسجلات المقاومة للحريق من UCHIDA وSAKURA في معرضنا بسوق العين، ونجهّز عروض أسعار بالكميات لتجهيز أرشيف كامل.',
        },
        {
          q: 'الفرق بين خزانة الملفات العادية والمقاومة للحريق؟',
          a: 'الخزانة المقاومة للحريق فيها عزل يحمي الورق من الحرارة، ولذلك هي أثقل وأغلى بكثير: خزائن GODREJ العادية بين 23 و38 كجم، أما خزائن الملفات المقاومة للحريق فبين 320 و400 كجم. والأسعار في جدول المقارنة بهذه الصفحة.',
        },
      ],
    },
    en: {
      title: 'How to choose the right filing cabinet',
      body: [
        'Filing cabinets serve offices, companies, schools, clinics and government bodies in Qatar, and each kind of paperwork has a cabinet to match. Everyday files are well served by a GODREJ steel filing cabinet with as many drawers as your archive needs, while contracts and original records that cannot be replaced belong in a fire-resistant records cabinet from UCHIDA or SAKURA.',
        'When choosing, estimate the archive you have now and the one you expect, check the size of the files you use, and pick the lock: a key on every drawer or a digital keypad for the whole cabinet. We prepare full quotations for equipping a whole archive.',
        'Filing cabinets suit offices, companies and government bodies for files, records and archives in locking drawers: a top lock on GODREJ cabinets, and a key per drawer or a keypad on the fire-resistant cabinets for what cannot be replaced.',
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
        {
          q: 'I want a lockable 4-drawer steel filing cabinet',
          a: 'We have three 4-drawer cabinets, all fire-resistant: the UCHIDA UMB4-4K with two top locks and a key per drawer, rated 2 hours, and the SAKURA UB4-4DLK with a digital keypad and SAKURA UB4-4K2K, both rated 1 hour. Our GODREJ steel filing cabinets come with two, three or five drawers.',
        },
        {
          q: 'Who supplies fire-resistant filing cabinets for companies?',
          a: 'We supply UCHIDA and SAKURA fire-resistant filing and records cabinets from our Souq Al Ein showroom, and quote for quantities to equip a whole archive.',
        },
        {
          q: 'What is the difference between a standard and a fire-resistant filing cabinet?',
          a: 'A fire-resistant cabinet is insulated to protect paper from heat, which makes it much heavier and dearer: our standard GODREJ cabinets weigh 23 to 38 kg, the fire-resistant ones 320 to 400 kg. Prices are in the comparison table on this page.',
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
        'بخطافات مرقّمة وميداليات ملوّنة، تُعلّق على الجدار في الفنادق ومعارض السيارات وشركات التأجير والمجمعات السكنية.',
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
        {
          q: 'أين أجد خزانة مفاتيح لشركة تأجير سيارات؟',
          a: 'في معرضنا بسوق العين: خزانة مفاتيح UCHIDA لـ 60 مفتاحًا وأخرى لـ 100 مفتاح، تُعلّقان على الجدار بخطافات مرقّمة وقفل بمفتاح. اختاروا الحجم حسب عدد السيارات، ويمكن تعليق أكثر من خزانة جنبًا إلى جنب.',
        },
      ],
    },
    en: {
      title: 'Who a key cabinet is for, and how to choose one',
      body: [
        'Key cabinets serve hotels, residential compounds, companies, car showrooms and maintenance teams in Qatar: any place handling many keys that need order and accountability.',
        'Choose the size for today’s keys with room to grow: a compact cabinet suits one office or building, and a tall one suits hotels and compounds. Use the coloured tags to sort keys by building, floor or vehicle, and the numbered hooks to log every key in a register. The cabinet locks with a key, so only the person in charge can open it.',
        'With numbered hooks and colour tags, they are wall mounted in hotels, car showrooms, rental companies and residential compounds.',
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
        {
          q: 'Where can I buy a key cabinet for a car rental company?',
          a: 'At our Souq Al Ein showroom: UCHIDA key cabinets for 60 and for 100 keys, wall-mounted with numbered hooks and a key lock. Choose the size by the number of cars; several cabinets can hang side by side.',
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
        'بقفل دوّار أو لوحة أرقام، وبدرج أمامي أو مقبض للحمل، تناسب الكاشير ونقل النقود بين المحل والمكتب والبنك.',
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
          a: 'نعم، صندوق UCHIDA المحمول بمقبض وقفلين دوّارين لنقل النقود بين المحل والمكتب والبنك.',
        },
        {
          q: 'أين أشتري صندوق نقود صغير بقفل؟',
          a: 'من معرضنا بسوق العين: صندوق UCHIDA المحمول موديل C-302 بمقبض، وموديل UC-305 بقفلين دوّارين، وموديل UNC-350D الرقمي بدرج. أسعارها من 590 إلى 725 ريال قطري مع توصيل مجاني.',
        },
      ],
    },
    en: {
      title: 'When to choose a cash box instead of a safe',
      body: [
        'A cash box serves shops, cashiers, restaurants, showrooms and co-operatives in Qatar: for keeping the day’s cash at the counter, or moving it between the shop, the office and the bank. It is smaller and quicker to use than a safe, but it does not replace one for keeping large sums for long.',
        'Pick the lock that suits how you work: combination dials need no battery, while a keypad is quicker for frequent opening. Choose a box with a front drawer if it stays on the counter, and the portable box with a handle if you carry cash around.',
        'With a combination dial or a keypad, a front drawer or a carrying handle, they suit the cashier and carrying cash between the shop, the office and the bank.',
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
          a: 'Yes, the portable UCHIDA cash box with a handle and two combination dials, for carrying cash between the shop, the office and the bank.',
        },
        {
          q: 'Where can I buy a small lockable cash box?',
          a: 'At our Souq Al Ein showroom: the portable UCHIDA C-302 with a handle, the UC-305 with two combination dials, and the digital UNC-350D with a drawer. Prices run from QAR 590 to QAR 725, with free delivery.',
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
        'تتوفر بباب واحد أو بابين أو بأبواب زجاجية، وبعض موديلات GODREJ بقفل غاطس، بألوان الرمادي والبيج والأبيض، للمكتب والمستودع والمدرسة.',
      ],
      faq: [
        {
          q: 'ما الفرق بين دولاب حديد وخزنة أمان؟',
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
        {
          q: 'أبي دواليب حديد بابين للمكتب',
          a: 'لدينا خزانة GODREJ ببابين موديل FHC4 بارتفاع 183 سم، وأخرى ببابين ومقبض موديل FHC FSB HP1 HL HHR بارتفاع 198 سم، وموديل FHC4 FG SWD بأبواب زجاجية. وللكميات نجهّز عرض سعر شاملًا.',
        },
        {
          q: 'أين أشتري دولاب جودريج في قطر؟',
          a: 'من معرضنا في سوق العين على طريق سلوى بالدوحة: دواليب GODREJ الحديدية بباب واحد أو بابين أو بأبواب زجاجية، صناعة سلطنة عُمان.',
        },
      ],
    },
    en: {
      title: 'How to choose the right steel cupboard',
      body: [
        'Steel cupboards serve offices, schools, hospitals, stores and government bodies in Qatar, keeping files, tools and supplies behind a sturdy locking door. They are not safes: they organise and store, but they are not meant for cash or valuables.',
        'Choose the number of doors for the space you have: one door for corridors and narrow corners, two doors for more capacity. Choose glass doors if you want to see the contents, and the wooden cabinet with a glass front for management offices. They come in grey, beige and white to suit the room.',
        'Choose a single door, double doors or glass doors, some GODREJ models with a recessed lock, in grey, beige and white, for the office, the store room and the school. Many customers know a GODREJ steel cupboard as an almirah.',
      ],
      faq: [
        {
          q: 'What is the difference between a steel cupboard and a security safe?',
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
        {
          q: 'I need double-door steel office cupboards',
          a: 'We have the GODREJ FHC4 double-door cupboard, 183 cm high, the FHC FSB HP1 HL HHR with doors and a handle, 198 cm high, and the FHC4 FG SWD with glass doors. For quantities we prepare a full quotation.',
        },
        {
          q: 'Where can I buy a Godrej almirah in Qatar?',
          a: 'At our showroom in Souq Al Ein on Salwa Road, Doha: GODREJ steel almirahs with one door, two doors or glass doors, made in Oman.',
        },
      ],
    },
  },

  'steel-lockers': {
    ar: {
      title: 'كيف تختارون اللوكر الحديد المناسب؟',
      body: [
        'اللوكرات الحديدية لغرف الموظفين والمدارس والأندية الرياضية والمصانع والمستشفيات في قطر، لتمنح كل شخص مكانًا خاصًا بقفل لأغراضه.',
        'يحدّد الاختيار ما سيُحفظ في كل خانة: الباب الواحد أو اللوكر بطابقين يناسب تعليق الملابس وزيّ العمل، واللوكر بأربعة أو ستة أبواب يناسب الحقائب الصغيرة والهواتف والمحافظ. احسبوا عدد الأشخاص، ثم وزّعوا الأعمدة حسب المساحة المتاحة، واختاروا اللون الذي يناسب المكان من البيج والزيتي.',
        'تناسب الموظفين والمدارس والنوادي والمصانع وسكن العمال، من باب واحد إلى ستة أبواب، بلونَي البيج والزيتي. وفي الأماكن الرطبة اهتموا بتهوية المكان وبعدم ترك أغراض مبللة داخل الخانات حتى لا يصدأ الحديد.',
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
        {
          q: 'من يبيع لوكرات حديد للمدارس والموظفين؟',
          a: 'نوفّر لوكرات GODREJ الحديدية في معرضنا بسوق العين: LC1 بباب واحد، وLC2 بخانتين، وLC3 بثلاثة أبواب، وLC4 بأربع خانات، وLC6 بستة أبواب، ونجهّز عروض أسعار بالكميات للمدارس والشركات.',
        },
        {
          q: 'كم باب في عمود اللوكر؟',
          a: 'من باب واحد إلى ستة: باب واحد (LC1)، أو خانتان (LC2)، أو ثلاثة أبواب (LC3)، أو أربع خانات (LC4)، أو ستة أبواب (LC6). وكلها بالمقاس الخارجي نفسه: 38 × 183 × 45.7 سم.',
        },
      ],
    },
    en: {
      title: 'How to choose the right steel locker',
      body: [
        'Steel lockers serve staff rooms, schools, sports clubs, factories and hospitals in Qatar, giving each person a private, lockable place for their things.',
        'The choice depends on what each compartment will hold: a single door or two-tier locker suits hanging clothes and uniforms, while four or six doors suit small bags, phones and wallets. Count the people, plan the columns for the space you have, and pick the colour that suits the room: beige or olive.',
        'They suit staff, schools, gyms, factories and labour accommodation, with one to six doors, in beige and olive. In humid places keep the room ventilated and never leave wet things inside, so the steel does not rust.',
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
        {
          q: 'Who sells steel lockers for schools and staff in Qatar?',
          a: 'We supply GODREJ steel lockers from our Souq Al Ein showroom: LC1 with one door, LC2 with two tiers, LC3 with three doors, LC4 with four tiers and LC6 with six doors, and we quote for quantities for schools and companies.',
        },
        {
          q: 'How many doors can one locker column have?',
          a: 'One to six: one door (LC1), two tiers (LC2), three doors (LC3), four tiers (LC4) or six doors (LC6). All share the same outside size: 38 × 183 × 45.7 cm.',
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
        'في البيت تُوضع الخزنة غالبًا في غرفة النوم أو داخل الدولاب وخزانة الملابس، لحفظ جوازات السفر والذهب والساعات والصكوك في مكان بعيد عن الأنظار، وتزداد أهميتها قبل سفر العائلة الطويل. وننصح بتثبيت الخزنة الصغيرة متى كان ذلك ممكنًا.',
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
        {
          q: 'أريد خزنة للبيت أحفظ فيها الذهب والجوازات، ماذا أشتري؟',
          a: 'خزنة صغيرة مقاومة للحريق تكفي غالبًا للذهب والجوازات والعقود: مثل UCHIDA موديل ZE-SS بالبصمة، أو SAKURA موديل ONS-FE بالبصمة والأرقام، أو UCHIDA موديل HS-23KE بقفل رقمي ومفتاح، وكلها مقاومة للحريق لمدة ساعة. ولمن يحتاج مساحة أكبر هناك خزائن بتصنيف ساعتين.',
        },
        {
          q: 'هل فيه خزنة صغيرة تدخل في الدولاب؟',
          a: 'نعم. خزنة UCHIDA موديل HS-23KE أبعادها الخارجية 44.4 × 24.9 × 35.2 سم (عرض × ارتفاع × عمق)، وخزنة SAKURA موديل UBHS-14 أبعادها 37 × 26 × 30 سم. قيسوا الدولاب من الداخل وقارنوه بهذه الأبعاد قبل الطلب.',
        },
      ],
    },
    en: {
      title: 'How to choose the right home safe',
      body: [
        'A home safe is for any household in Doha and across Qatar that keeps cash, gold, passports or contracts at home. Start with where it will go: a wardrobe needs a compact safe, while a dressing room or majlis may take a larger one.',
        'Then choose a lock everyone at home finds easy: fingerprint is quickest, a code suits several people, and a backup key protects you if the code is forgotten. If you will keep original documents, choose a fire-resistant safe; if jewellery comes first, choose a safe with velvet-lined drawers.',
        'At home the safe usually goes in the bedroom, inside a wardrobe or closet, keeping passports, gold, watches and deeds out of sight, and it matters most before the family’s long trips. We advise anchoring a small safe wherever possible.',
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
        {
          q: 'Which home safe should I buy for gold and passports?',
          a: 'A compact fire-resistant safe is usually enough for gold, passports and contracts: such as the UCHIDA ZE-SS with a fingerprint lock, the SAKURA ONS-FE with fingerprint and keypad, or the UCHIDA HS-23KE with a keypad and key, all rated for one hour. For more space there are safes rated for two hours.',
        },
        {
          q: 'Is there a small safe that fits inside a wardrobe?',
          a: 'Yes. The UCHIDA HS-23KE measures 44.4 × 24.9 × 35.2 cm outside (W × H × D), and the SAKURA UBHS-14 37 × 26 × 30 cm. Measure the inside of your wardrobe and compare before ordering.',
        },
      ],
    },
  },
}

/**
 * Products named and linked in each category page's intro text, so the most
 * relevant ones get a contextual link besides the product grid.
 */
export const categoryHighlights: Record<string, string[]> = {
  'fire-resistant-safes': ['uchida-full-height-fire-resistant-safe', 'sakura-multi-lock-safe', 'uchida-fingerprint-safe', 'kurogane-wing-safe'],
  'deposit-safes': ['uchida-deposit-safe', 'uchida-night-deposit-safe'],
  'hotel-safes': ['sakura-digital-hotel-safe', 'sakura-compact-digital-hotel-safe', 'uchida-key-hotel-safe'],
  'luxury-safes': ['uchida-designer-fire-resistant-safe', 'watch-winder-safe', 'sakura-floral-safe'],
  'jewellery-watch-interiors': ['uchida-fire-resistant-jewellery-and-watch-safe', 'jewellery-display-drawers', 'watch-drawers', 'travel-jewellery-cases'],
  'filing-cabinets': ['uchida-fire-resistant-records-cabinet', 'sakura-fire-resistant-filing-cabinet', 'godrej-five-drawer-filing-cabinet'],
  'key-cabinets': ['uchida-key-cabinet', 'uchida-tall-key-cabinet'],
  'cash-boxes': ['bsm-digital-auto-cash-box', 'bsm-portable-cash-box', 'bsm-auto-cash-box'],
  'steel-cupboards': ['godrej-two-door-steel-cupboard', 'godrej-single-door-steel-cupboard', 'godrej-glass-door-steel-cabinet'],
  'steel-lockers': ['godrej-single-steel-locker', 'godrej-two-tier-steel-locker', 'godrej-six-door-steel-locker'],
  'home-safes': ['uchida-compact-digital-safe', 'uchida-fingerprint-safe', 'sakura-multi-lock-safe', 'uchida-fire-resistant-jewellery-and-watch-safe'],
}

/** Eight products across categories for the home page's "popular products" block. */
export const popularProducts = [
  'uchida-fingerprint-safe',
  'uchida-fire-resistant-jewellery-and-watch-safe',
  'uchida-deposit-safe',
  'sakura-digital-hotel-safe',
  'travel-jewellery-cases',
  'godrej-two-door-steel-cupboard',
  'godrej-six-door-steel-locker',
  'bsm-digital-auto-cash-box',
]
