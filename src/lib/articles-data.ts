// Blog articles, Arabic and English. Each one goes live with the first build
// on or after its date (Qatar time); scheduled builds run from GitHub Actions
// (.github/workflows/publish-articles.yml).
import type { ArticleSource } from './articles'

export const articleSources: ArticleSource[] = [
  {
    slug: 'choosing-a-home-safe',
    date: '2026-11-04',
    title: {
      ar: 'كيف تختارون خزنة البيت المناسبة؟ 6 أسئلة قبل الشراء',
      en: 'How to Choose the Right Home Safe: 6 Questions Before You Buy',
    },
    description: {
      ar: 'قبل شراء خزنة أو تجوري للبيت في قطر: ماذا ستحفظون، وما المقاس والقفل المناسبان، وأين تضعونها، وهل تحتاج إلى تثبيت. دليل مختصر من مؤسسة نصر الله التجارية.',
      en: 'Before buying a home safe in Qatar: what you will keep in it, the right size and lock, where it goes and whether to anchor it. A short guide from Nasrallah Trading Est.',
    },
    keywords: {
      ar: 'خزنة للبيت، تجوري للبيت في قطر، أفضل خزنة منزلية، خزنة حفظ أمانات',
      en: 'home safe Qatar, safe for the house, best home safe, safe for valuables',
    },
    body: {
      ar: [
        {
          p: 'الخزنة المنزلية تبقى معكم سنوات طويلة، ولهذا يستحق اختيارها بضع دقائق من التفكير قبل زيارة المعرض. من خبرتنا في بيع الخزائن في قطر منذ عام 1906، هذه هي الأسئلة الستة التي نطرحها على كل عميل قبل أن نرشّح له خزنة.',
        },
        { h: '1. ماذا ستحفظون في الخزنة؟' },
        {
          p: 'هذا السؤال يحدد نوع الخزنة قبل مقاسها. النقود والذهب تحتاج إلى خزنة حديدية بقفل قوي. أما جوازات السفر والعقود والصكوك فتحتاج قبل كل شيء إلى خزنة مقاومة للحريق، لأن الورق يتلف بالحرارة قبل أن تصله النار. وإن كانت مجوهرات وساعات فاختاروا خزنة يمكن تجهيزها من الداخل بأدراج مبطّنة.',
        },
        { h: '2. كم المساحة التي تحتاجونها اليوم وبعد خمس سنوات؟' },
        {
          p: 'الخطأ الأكثر شيوعًا شراء خزنة على قدر الحاجة الحالية تمامًا، ثم امتلاؤها بعد عام. ضعوا ما تريدون حفظه على طاولة وقيسوا المساحة التي يشغلها، ثم اختاروا خزنة أكبر منها قليلًا.',
        },
        { h: '3. من سيفتح الخزنة؟' },
        {
          p: 'إن كان شخص واحد يفتحها فقفل البصمة هو الأسرع والأسهل. وإن كان أكثر من فرد في البيت يحتاج إليها فالقفل الرقمي مناسب، ويمكن الجمع بين الاثنين كما في خزائن SAKURA التي تجمع البصمة ولوحة الأرقام. واحرصوا دائمًا على وجود مفتاح احتياطي يُحفظ بعيدًا عن الخزنة.',
        },
        { h: '4. أين ستضعونها؟' },
        {
          p: 'حدّدوا المكان قبل الشراء: داخل خزانة الملابس، أو في غرفة النوم، أو في مكتب البيت. قيسوا المكان والأبواب والممرات التي ستمرّ منها الخزنة عند التوصيل، فالخزائن الحديدية ثقيلة بطبيعتها.',
        },
        { h: '5. هل تحتاجون إلى تثبيتها؟' },
        {
          p: 'الخزنة الصغيرة يمكن حملها كاملة، ولهذا ننصح بتثبيتها في الأرض أو الجدار متى كان ذلك ممكنًا، أو وضعها داخل خزانة غرفة الملابس في مكان غير ظاهر.',
        },
        { h: '6. ما الميزانية المناسبة؟' },
        {
          p: 'يختلف السعر بحسب المقاس ومقاومة الحريق ونوع القفل والتشطيب. لا تجعلوا السعر وحده معيار الاختيار: الخزنة الرخيصة التي لا تصمد أمام الحريق أو العبث قد تكلّفكم أكثر بكثير مما وفّرتموه.',
        },
        { h: 'الخطوة التالية' },
        {
          p: 'أرسلوا لنا إجاباتكم عن هذه الأسئلة على واتساب، وسنرشّح لكم خزنتين أو ثلاثًا تناسب ما تحفظونه وميزانيتكم.',
        },
      ],
      en: [
        {
          p: 'A home safe stays with you for many years, so choosing one deserves a few minutes of thought before you visit the showroom. From our experience selling safes in Qatar since 1906, these are the six questions we ask every customer before recommending a safe.',
        },
        { h: '1. What will you keep in the safe?' },
        {
          p: 'This question decides the type of safe before its size. Cash and gold need a steel safe with a strong lock. Passports, contracts and title deeds need a fire-resistant safe above all, because paper is damaged by heat long before the flames reach it. For jewellery and watches, choose a safe that can be fitted inside with lined drawers.',
        },
        { h: '2. How much space do you need today, and in five years?' },
        {
          p: 'The most common mistake is buying a safe that fits exactly what you have now, then filling it within a year. Lay what you want to store on a table, measure the space it takes, and choose a safe a little larger than that.',
        },
        { h: '3. Who will open the safe?' },
        {
          p: 'If one person opens it, a fingerprint lock is the quickest and easiest. If several family members need it, a digital keypad suits better, and you can have both, as with SAKURA safes that combine fingerprint and keypad. Always make sure there is a backup key kept well away from the safe.',
        },
        { h: '4. Where will it go?' },
        {
          p: 'Decide on the spot before you buy: inside a wardrobe, in the bedroom or in a home office. Measure the space, the doors and the corridors the safe will pass through on delivery, because steel safes are heavy by nature.',
        },
        { h: '5. Do you need to anchor it?' },
        {
          p: 'A small safe can be carried away whole, so we recommend anchoring it to the floor or wall wherever possible, or placing it out of sight inside a dressing-room wardrobe.',
        },
        { h: '6. What is the right budget?' },
        {
          p: 'The price depends on the size, fire resistance, type of lock and finish. Do not let price alone decide: a cheap safe that fails against fire or tampering can cost you far more than you saved.',
        },
        { h: 'The next step' },
        {
          p: 'Send us your answers to these questions on WhatsApp, and we will recommend two or three safes that suit what you keep and your budget.',
        },
      ],
    },
    products: ['sakura-multi-lock-safe', 'sakura-ons-fe-fingerprint-safe', 'uchida-ubo-145e-fire-resistant-safe'],
    links: [{ page: 'safe-buying-guide' }, { category: 'fire-resistant-safes' }],
  },
  {
    slug: 'fingerprint-vs-keypad-vs-key-safe-lock',
    date: '2026-11-08',
    title: {
      ar: 'قفل البصمة أم الأرقام أم المفتاح: أيّها أفضل لخزنتكم؟',
      en: 'Fingerprint, Keypad or Key: Which Lock Is Best for Your Safe?',
    },
    description: {
      ar: 'مقارنة بين أقفال الخزائن: البصمة، والقفل الرقمي، والمفتاح الميكانيكي، ومتى تختارون الجمع بينها. نصائح من مؤسسة نصر الله التجارية لبيع الخزائن في قطر.',
      en: 'Safe locks compared: fingerprint, digital keypad and mechanical key, and when to combine them. Advice from Nasrallah Trading Est, safe sellers in Qatar.',
    },
    keywords: {
      ar: 'خزنة بالبصمة، خزنة بقفل رقمي، تجوري بصمة في قطر، أقفال الخزائن',
      en: 'fingerprint safe, digital keypad safe, fingerprint safe Qatar, safe locks',
    },
    body: {
      ar: [
        {
          p: 'القفل هو الجزء الذي تتعاملون معه كل يوم في الخزنة، وهو أيضًا أول ما يسأل عنه عملاؤنا. لكل نوع من الأقفال مزاياه، والاختيار الصحيح يعتمد على من يستخدم الخزنة وكم مرة يفتحها.',
        },
        { h: 'قفل البصمة' },
        {
          p: 'يفتح الخزنة بلمسة إصبع، فلا رقم تتذكرونه ولا مفتاح تحملونه. هو الأنسب لمن يفتح الخزنة كثيرًا، ولمن يريد أن يعرف أن أحدًا غيره لا يستطيع فتحها. وتتيح بعض الموديلات حفظ ما يصل إلى 10 بصمات مختلفة.',
        },
        { h: 'القفل الرقمي (لوحة الأرقام)' },
        {
          p: 'يفتح برقم سري تختارونه وتستطيعون تغييره متى شئتم. هو الأنسب للخزائن التي يستخدمها أكثر من شخص، كخزائن المحلات والمكاتب. احرصوا على اختيار رقم لا يرتبط بتاريخ ميلاد أو رقم هاتف، وغيّروه إذا عرفه شخص لم يعد يحتاج إليه.',
        },
        { h: 'المفتاح الميكانيكي' },
        {
          p: 'أبسط الأقفال وأكثرها اعتمادية، ولا يحتاج إلى بطارية. والأقفال في خزائننا من النوع الذي يصعب تقليد مفاتيحه، إذ يحتاج نسخها إلى أجهزة مخصّصة. وتتوفر في بعض الموديلات مفاتيح ماستر تفتح الخزنة دون القفل الرقمي، فيمكن استخدام أكثر من طريقة للفتح بحسب مستوى الصلاحية الممنوحة لكل مستخدم.',
        },
        { h: 'لماذا تجمع الخزائن الحديثة أكثر من قفل؟' },
        {
          p: 'لأن كل قفل يغطي نقطة ضعف الآخر: البصمة سريعة، والرقم مناسب لأكثر من مستخدم، والمفتاح يفتح الخزنة إذا نفدت البطارية. ولهذا تجمع خزنة SAKURA متعددة الأقفال بين البصمة ولوحة الأرقام والمفتاح في لوحة تحكم واحدة، وتجمع خزنة SAKURA ONS-FE البصمة والأرقام في مقبض عمودي واحد.',
        },
        { h: 'نصيحة أخيرة' },
        {
          p: 'لا تحفظوا المفتاح الاحتياطي داخل الخزنة نفسها ولا بجوارها، وغيّروا بطاريات القفل الإلكتروني بانتظام قبل أن تضعف تمامًا.',
        },
      ],
      en: [
        {
          p: 'The lock is the part of the safe you deal with every day, and it is the first thing our customers ask about. Each type of lock has its strengths, and the right choice depends on who uses the safe and how often they open it.',
        },
        { h: 'Fingerprint lock' },
        {
          p: 'It opens the safe with the touch of a finger: no code to remember and no key to carry. It suits people who open the safe often and who want to know that nobody else can open it. Some models can store up to 10 different fingerprints.',
        },
        { h: 'Digital keypad' },
        {
          p: 'It opens with a code you choose and can change whenever you like. It suits safes used by more than one person, such as safes in shops and offices. Choose a code that is not a birthday or a phone number, and change it if someone who no longer needs it knows it.',
        },
        { h: 'Mechanical key' },
        {
          p: 'The simplest and most dependable lock, and it needs no battery. The locks in our safes are of a type whose keys are hard to copy, as copying them needs specialised equipment. Some models also come with master keys that open the safe without the digital lock, so you can use more than one way of opening it depending on the access each user is given.',
        },
        { h: 'Why do modern safes combine more than one lock?' },
        {
          p: 'Because each lock covers the other’s weak point: the fingerprint is fast, the code suits several users, and the key opens the safe if the battery runs out. That is why the SAKURA Multi-Lock Safe brings a fingerprint scanner, a keypad and a key together on one control panel, and the SAKURA ONS-FE combines fingerprint and keypad in one vertical handle.',
        },
        { h: 'A final tip' },
        {
          p: 'Never keep the backup key inside the safe or next to it, and change the electronic lock’s batteries regularly before they run completely flat.',
        },
      ],
    },
    products: ['sakura-ons-fe-fingerprint-safe', 'sakura-multi-lock-safe', 'uchida-ubo-145e-fire-resistant-safe'],
    links: [{ article: 'choosing-a-home-safe' }],
  },
  {
    slug: 'fire-resistant-safe-for-documents',
    date: '2026-11-12',
    title: {
      ar: 'الخزنة المقاومة للحريق: كيف تحمي مستنداتكم ووثائقكم المهمة؟',
      en: 'Fire-Resistant Safes: How to Protect Your Important Documents',
    },
    description: {
      ar: 'لماذا تحتاج المستندات والوثائق والعقود إلى خزنة مقاومة للحريق، وكيف تختارونها، وما الذي يُحفظ فيها. دليل من مؤسسة نصر الله التجارية في قطر.',
      en: 'Why documents, papers and contracts need a fire-resistant safe, how to choose one, and what to keep in it. A guide from Nasrallah Trading Est in Qatar.',
    },
    keywords: {
      ar: 'خزنة مقاومة للحريق في قطر، خزنة حفظ مستندات، خزنة حفظ وثائق، تجوري ضد الحريق',
      en: 'fire-resistant safe Qatar, document safe, safe for papers, fireproof safe',
    },
    body: {
      ar: [
        {
          p: 'يظن كثيرون أن أي خزنة حديدية تحمي ما بداخلها من الحريق، والحقيقة غير ذلك. الحديد يوصل الحرارة، والورق يبدأ بالتلف عند درجات حرارة أقل بكثير من حرارة الحريق نفسه. ولهذا صُنعت الخزائن المقاومة للحريق بجدران عازلة تُبقي الحرارة في الداخل منخفضة لمدة محددة.',
        },
        { h: 'ما الذي تحفظونه في خزنة مقاومة للحريق؟' },
        {
          ul: [
            'جوازات السفر والبطاقات الشخصية وشهادات الميلاد.',
            'العقود وصكوك الملكية والوكالات.',
            'الشهادات الدراسية والمستندات الرسمية.',
            'النقد والشيكات.',
            'السجلات والملفات المهمة في الشركات.',
          ],
        },
        { h: 'كيف تختارون الخزنة المقاومة للحريق؟' },
        {
          p: 'اسألوا أولًا عن مدة مقاومة الحريق التي اختُبرت عليها الخزنة، فهي الرقم الأهم، وقد اختُبرت خزائننا لمقاومة الحريق في معامل مخصّصة. ثم اختاروا المقاس بحسب كمية الأوراق، وتذكروا أن المستندات تتراكم مع الوقت.',
        },
        { h: 'للشركات والجهات الحكومية' },
        {
          p: 'الأرشيف الكبير يحتاج إلى أكثر من خزنة واحدة. توفّر خزائن UCHIDA بارتفاعها الكامل مساحة واسعة للسجلات والنقد، بقفل رقمي مع مفتاح احتياطي وثلاث مفصلات متينة. وللملفات اليومية يمكن الجمع بينها وبين خزائن الملفات ذات الأدراج.',
        },
        { h: 'نصائح لحفظ المستندات داخل الخزنة' },
        {
          ul: [
            'ضعوا المستندات في ملفات أو أكياس محكمة لحمايتها من الرطوبة.',
            'احتفظوا بنسخة رقمية من كل مستند مهم في مكان آخر.',
            'لا تملؤوا الخزنة حتى آخرها، واتركوا مساحة لما سيأتي.',
          ],
        },
      ],
      en: [
        {
          p: 'Many people assume any steel safe protects its contents from fire, but that is not so. Steel conducts heat, and paper starts to be damaged at temperatures far lower than the fire itself. That is why fire-resistant safes are built with insulated walls that keep the inside cool for a set period.',
        },
        { h: 'What to keep in a fire-resistant safe' },
        {
          ul: [
            'Passports, ID cards and birth certificates.',
            'Contracts, title deeds and powers of attorney.',
            'Academic certificates and official documents.',
            'Cash and cheques.',
            'Important company records and files.',
          ],
        },
        { h: 'How to choose a fire-resistant safe' },
        {
          p: 'First ask how long the safe was tested to resist fire, as that is the most important figure; our safes have been fire-tested in specialised laboratories. Then choose the size by the amount of paper you have, remembering that documents pile up over time.',
        },
        { h: 'For companies and government bodies' },
        {
          p: 'A large archive needs more than one safe. Full-height UCHIDA safes give generous space for records and cash, with a digital lock, a backup key and three heavy-duty hinges. For everyday files, you can pair them with drawer filing cabinets.',
        },
        { h: 'Tips for storing documents in a safe' },
        {
          ul: [
            'Put documents in sealed folders or bags to protect them from humidity.',
            'Keep a digital copy of every important document somewhere else.',
            'Do not fill the safe to the top; leave room for what is to come.',
          ],
        },
      ],
    },
    products: ['uchida-ubo-145e-fire-resistant-safe', 'uchida-fluted-safe', 'uchida-walnut-finish-safe'],
    links: [{ category: 'fire-resistant-safes' }, { category: 'filing-cabinets' }],
  },
  {
    slug: 'opening-a-locked-safe-in-qatar',
    date: '2026-11-16',
    title: {
      ar: 'نسيتم الرقم السري أو ضاع مفتاح الخزنة؟ هكذا تُفتح الخزنة المقفولة في قطر',
      en: 'Forgot the Code or Lost the Key? How a Locked Safe Is Opened in Qatar',
    },
    description: {
      ar: 'ماذا تفعلون إذا نسيتم الرقم السري لخزنتكم أو ضاع المفتاح؟ خدمة فتح الخزائن المقفولة في قطر بعد استيفاء اشتراطات وزارة الداخلية، من مؤسسة نصر الله التجارية.',
      en: 'What to do if you forget your safe’s code or lose its key. Locked-safe opening in Qatar once the Ministry of Interior’s requirements are met, from Nasrallah Trading Est.',
    },
    keywords: {
      ar: 'فتح خزنة مقفولة في قطر، فتح تجوري، نسيت رقم الخزنة، فني خزائن قطر',
      en: 'open locked safe Qatar, safe opening service, forgot safe code, safe technician Qatar',
    },
    body: {
      ar: [
        {
          p: 'يحدث هذا أكثر مما تتوقعون: رقم سري تغيّر ولم يُكتب، أو مفتاح ضاع أثناء الانتقال من بيت إلى آخر، أو خزنة قديمة ورثتها العائلة ولا أحد يعرف طريقة فتحها. الخبر الجيد أن الخزنة المقفولة يمكن فتحها، والمهم أن يتم ذلك بالطريقة الصحيحة.',
        },
        { h: 'قبل أن تتصلوا بنا' },
        {
          ul: [
            'جرّبوا المفتاح الاحتياطي إن كانت الخزنة تعمل بقفل إلكتروني مع مفتاح.',
            'غيّروا بطاريات القفل الإلكتروني، فكثير من الخزائن «المقفولة» بطارياتها فارغة فقط.',
            'ابحثوا عن فاتورة الشراء أو أي ورقة جاءت مع الخزنة.',
          ],
        },
        { h: 'لماذا تُطلب اشتراطات وزارة الداخلية؟' },
        {
          p: 'لأن فتح خزنة شخص آخر أمر حساس. لهذا لا نفتح أي خزنة مقفولة إلا بعد استيفاء الاشتراطات المطلوبة من وزارة الداخلية، حمايةً لكم ولممتلكاتكم، وحتى لا تُفتح خزنة إلا لمن تصرّح لهم وزارة الداخلية.',
        },
        { p: 'توجّهوا إلى مركز الشرطة التابع لمحل إقامتكم لاستخراج أمر فتح الخزنة، ثم تابعوا الإجراءات معنا.' },
        { h: 'كيف تتم الخدمة؟' },
        {
          p: 'بعد استصدار أمر فتح الخزنة من الجهة المختصة، نحدّد موعد الفتح بحضور المختصين، ويتولّى فريقنا الفني تنفيذ الخدمة.',
        },
        { h: 'كيف تتجنبون المشكلة مستقبلًا؟' },
        {
          ul: [
            'احفظوا المفتاح الاحتياطي في مكان آمن بعيدًا عن الخزنة.',
            'اكتبوا الرقم السري واحفظوه في مكان لا يعرفه غيركم.',
            'غيّروا البطاريات بانتظام.',
          ],
        },
        { p: 'لطلب خدمة فتح خزنة مقفولة، تواصلوا معنا على واتساب 5562 3268 أو على الهاتف 4458 3211.' },
      ],
      en: [
        {
          p: 'It happens more often than you would think: a code that was changed and never written down, a key lost while moving house, or an old family safe that nobody knows how to open. The good news is that a locked safe can be opened; what matters is that it is done the right way.',
        },
        { h: 'Before you call us' },
        {
          ul: [
            'Try the backup key if the safe has an electronic lock with a key.',
            'Change the electronic lock’s batteries; many “locked” safes simply have flat batteries.',
            'Look for the purchase invoice or any paperwork that came with the safe.',
          ],
        },
        { h: 'Why are there Ministry of Interior requirements?' },
        {
          p: 'Because opening someone’s safe is a sensitive matter. That is why we never open a locked safe until the Ministry of Interior’s requirements are met, to protect you and your property and to make sure a safe is opened only for those the Ministry of Interior authorises.',
        },
        {
          p: 'Go to the police station for the area you live in to obtain an order to open the safe, then follow the procedure with us.',
        },
        { h: 'How does the service work?' },
        {
          p: 'Once the competent authority has issued the order to open the safe, we set an appointment for the opening in the presence of the officials, and our technical team carries out the work.',
        },
        { h: 'How to avoid the problem in future' },
        {
          ul: [
            'Keep the backup key in a safe place well away from the safe.',
            'Write down the code and keep it where nobody else knows.',
            'Change the batteries regularly.',
          ],
        },
        { p: 'To request locked-safe opening, contact us on WhatsApp at 5562 3268 or by phone at 4458 3211.' },
      ],
    },
    products: [],
    links: [{ page: 'contact' }, { article: 'safe-placement-and-care' }],
  },
  {
    slug: 'jewellery-and-watch-safes',
    date: '2026-11-20',
    title: {
      ar: 'خزائن المجوهرات والساعات: كيف تحفظون مقتنياتكم دون خدش؟',
      en: 'Jewellery and Watch Safes: How to Keep Your Pieces Free of Scratches',
    },
    description: {
      ar: 'كيف تختارون خزنة المجوهرات والساعات وتجهيزها من الداخل بأدراج مخملية ومجسّمات للعقود ووسائد للساعات. خزائن المجوهرات في قطر من مؤسسة نصر الله التجارية.',
      en: 'How to choose a jewellery and watch safe and fit it inside with velvet drawers, necklace busts and watch cushions. Jewellery safes in Qatar from Nasrallah Trading Est.',
    },
    keywords: {
      ar: 'خزنة مجوهرات في قطر، خزنة ذهب، خزنة ساعات، تجوري مجوهرات',
      en: 'jewellery safe Qatar, gold safe, watch safe, jewellery storage',
    },
    body: {
      ar: [
        {
          p: 'المجوهرات والساعات الثمينة تحتاج إلى أكثر من الحماية من السرقة. القطع التي تُرمى معًا في درج واحد تتلامس وتُخدش، والسلاسل تتشابك، والساعات الأوتوماتيكية تتوقف إن تُركت دون حركة. ولهذا لا تكتمل خزنة المجوهرات إلا بتجهيز داخلي مدروس.',
        },
        { h: 'ما الذي يميّز خزنة المجوهرات؟' },
        {
          ul: [
            'أدراج مبطّنة بالمخمل تمنع الخدش.',
            'مجسّمات للعقود والسلاسل حتى لا تتشابك.',
            'بكرات للخواتم وحوامل للأقراط.',
            'وسائد للساعات تحفظ شكل السوار.',
            'تشطيبات خشبية ومقابض نحاسية تليق بما بداخلها.',
          ],
        },
        { h: 'كيف تخطّطون التجهيز الداخلي؟' },
        {
          p: 'ابدؤوا بعدّ القطع: كم عقدًا، وكم خاتمًا، وكم ساعة؟ ثم فكّروا في القطع التي تلبسونها يوميًا والتي تُحفظ للمناسبات. الأولى تُوضع في الأدراج العليا سهلة الوصول، والثانية في الأدراج السفلى. ثم نجمع طلباتكم ونصمّم التجهيز الداخلي خصيصًا لكم، ولا نبدأ العمل إلا بعد موافقتكم على التصميم.',
        },
        { h: 'الساعات تحتاج عناية خاصة' },
        {
          p: 'خصّصوا لكل ساعة وسادة مستقلة، وأبعدوا الساعات عن المغناطيس والرطوبة. وتتوفر لدينا دوّارات الساعات الأوتوماتيكية (Watch Winders) التي تُبقي ساعاتكم في حركة مستمرة حتى لا تتوقف.',
        },
        { h: 'القفل المناسب لخزنة المجوهرات' },
        {
          p: 'لأن خزنة المجوهرات تُفتح كثيرًا قبل المناسبات، يكون قفل البصمة أو القفل الرقمي الأنسب لها، مع مفتاح احتياطي محفوظ في مكان آخر.',
        },
        { p: 'شاهدوا نماذج من تجهيزات المجوهرات والساعات على موقعنا، أو زورونا في المعرض لتلمسوا الخامات بأنفسكم.' },
      ],
      en: [
        {
          p: 'Fine jewellery and watches need more than protection from theft. Pieces thrown together in one drawer touch and scratch, chains tangle, and automatic watches stop when left without movement. That is why a jewellery safe is only complete with a well-planned interior.',
        },
        { h: 'What makes a jewellery safe different?' },
        {
          ul: [
            'Velvet-lined drawers that prevent scratches.',
            'Busts for necklaces and chains so they do not tangle.',
            'Ring rolls and earring holders.',
            'Watch cushions that keep the strap’s shape.',
            'Wood finishes and brass handles worthy of what is inside.',
          ],
        },
        { h: 'How to plan the interior' },
        {
          p: 'Start by counting your pieces: how many necklaces, rings and watches? Then think about which pieces you wear every day and which are kept for occasions. The first go in the easy-to-reach upper drawers, the second in the lower ones. We then gather your requirements and design the interior especially for you, and we only start work once you have approved the design.',
        },
        { h: 'Watches need special care' },
        {
          p: 'Give each watch its own cushion, and keep watches away from magnets and humidity. We also offer watch winders that keep your automatic watches moving so they never stop.',
        },
        { h: 'The right lock for a jewellery safe' },
        {
          p: 'Because a jewellery safe is opened often before occasions, a fingerprint or digital lock suits it best, with a backup key kept elsewhere.',
        },
        {
          p: 'See examples of our jewellery and watch interiors on our website, or visit the showroom to feel the materials for yourself.',
        },
      ],
    },
    products: ['jewellery-display-drawers', 'watch-drawers', 'wood-and-brass-drawer-interior'],
    links: [{ category: 'jewellery-watch-interiors' }],
  },
  {
    slug: 'cash-safe-for-shops-and-offices',
    date: '2026-11-24',
    title: {
      ar: 'خزنة النقود للمحلات والشركات: دليل أصحاب الأعمال في قطر',
      en: 'Cash Safes for Shops and Companies: A Guide for Business Owners in Qatar',
    },
    description: {
      ar: 'كيف يختار أصحاب المحلات والشركات في قطر خزنة النقود المناسبة: المقاس، والقفل، ومقاومة الحريق، والتثبيت، ومن يملك الرقم السري. من مؤسسة نصر الله التجارية.',
      en: 'How shop and company owners in Qatar choose the right cash safe: size, lock, fire resistance, anchoring and who holds the code. From Nasrallah Trading Est.',
    },
    keywords: {
      ar: 'خزنة نقود في قطر، خزنة كاش للمحل، خزنة للشركات، تجوري للمحلات',
      en: 'cash safe Qatar, safe for shops, safe for companies, business safe',
    },
    body: {
      ar: [
        {
          p: 'في المحل أو الشركة، الخزنة جزء من نظام العمل اليومي: تُفتح في الصباح وتُغلق في المساء، ويستخدمها أكثر من موظف، وتحفظ الإيراد والشيكات والمستندات. ولهذا تختلف طريقة اختيارها عن خزنة البيت.',
        },
        { h: 'المقاس: لا تشتروا على قدر اليوم' },
        {
          p: 'احسبوا ما تحفظونه في أكثر الأيام ازدحامًا، لا في اليوم العادي، وأضيفوا إليه الشيكات والمستندات ودفاتر الحسابات.',
        },
        { h: 'القفل: من يفتح الخزنة؟' },
        {
          p: 'القفل الرقمي مناسب لأنه يسمح بتغيير الرقم السري عند تغيّر الموظفين، دون الحاجة إلى تغيير القفل. ويضيف قفل البصمة طبقة أخرى من التحكم في من يفتح الخزنة. احتفظوا بالمفتاح الاحتياطي لدى صاحب العمل فقط.',
        },
        { h: 'مقاومة الحريق' },
        {
          p: 'إن كانت الخزنة ستحفظ مستندات وشيكات إلى جانب النقد، فاختاروا خزنة مقاومة للحريق، مثل خزائن UCHIDA بأقفالها الرقمية ومفاتيحها الاحتياطية.',
        },
        { h: 'التثبيت والمكان' },
        { p: 'ضعوا الخزنة بعيدًا عن نظر الزبائن، ويُفضّل تثبيتها في الأرض أو الجدار حتى لا يمكن حملها.' },
        { h: 'للشركات والمؤسسات الكبيرة' },
        {
          p: 'نتعامل مع الوزارات والبنوك والشركات، ووضع أكثر من 1000 عميل ثقتهم بنا. أخبرونا بعدد الفروع وما يُحفظ في كل منها، ونجهّز لكم عرض سعر يشمل كل الخزائن المطلوبة مع التوصيل المجاني.',
        },
      ],
      en: [
        {
          p: 'In a shop or company, the safe is part of the daily routine: opened in the morning and closed in the evening, used by more than one employee, and holding the takings, cheques and documents. That is why choosing one differs from choosing a home safe.',
        },
        { h: 'Size: do not buy for today alone' },
        {
          p: 'Work out what you keep on your busiest days, not on an ordinary day, and add cheques, documents and account books.',
        },
        { h: 'Lock: who opens the safe?' },
        {
          p: 'A digital keypad suits because the code can be changed when staff change, without replacing the lock. A fingerprint lock adds another layer of control over who opens the safe. Keep the backup key with the business owner only.',
        },
        { h: 'Fire resistance' },
        {
          p: 'If the safe will hold documents and cheques as well as cash, choose a fire-resistant safe, such as UCHIDA safes with their digital locks and backup keys.',
        },
        { h: 'Anchoring and placement' },
        {
          p: 'Place the safe out of customers’ sight, and ideally anchor it to the floor or wall so it cannot be carried away.',
        },
        { h: 'For large companies and institutions' },
        {
          p: 'We work with ministries, banks and companies, and more than 1,000 clients have placed their trust in us. Tell us how many branches you have and what is kept at each, and we will prepare a quotation covering every safe you need, with free delivery.',
        },
      ],
    },
    products: ['uchida-ubo-145e-fire-resistant-safe', 'sakura-multi-lock-safe', 'sakura-ons-fe-fingerprint-safe'],
    links: [{ category: 'fire-resistant-safes' }, { page: 'request-quote' }],
  },
  {
    slug: 'uchida-sakura-godrej-compared',
    date: '2026-11-28',
    title: {
      ar: 'أي علامة خزائن تناسبكم: UCHIDA أم SAKURA أم GODREJ؟',
      en: 'Which Safe Brand Suits You: UCHIDA, SAKURA or GODREJ?',
    },
    description: {
      ar: 'تعرّفوا على العلامات التجارية للخزائن في مؤسسة نصر الله التجارية: UCHIDA للخزائن المقاومة للحريق وخزائن الملفات، وSAKURA لأقفال البصمة، وGODREJ للخزائن الحديدية واللوكرات.',
      en: 'Get to know the safe brands at Nasrallah Trading Est: UCHIDA for fire-resistant safes and filing cabinets, SAKURA for fingerprint locks, and GODREJ for steel cupboards and lockers.',
    },
    keywords: {
      ar: 'خزائن UCHIDA، خزائن SAKURA، خزائن GODREJ في قطر، أفضل ماركة خزائن',
      en: 'UCHIDA safes, SAKURA safes, GODREJ Qatar, best safe brand',
    },
    body: {
      ar: [
        {
          p: 'يسألنا كثير من العملاء: أي ماركة أفضل؟ والإجابة الصادقة: لكل علامة مجال تتميّز فيه. في مؤسسة نصر الله التجارية نوفّر ثلاث علامات أصلية، وهذا ما نرشّح كل واحدة منها له.',
        },
        { h: 'UCHIDA: الخزائن المقاومة للحريق وخزائن الملفات' },
        {
          p: 'علامة UCHIDA هي الأساس في الخزائن المقاومة للحريق لدينا: خزائن بارتفاع كامل مثل UBO-145E بقفل رقمي مع مفتاح احتياطي، وخزائن بتصاميم فاخرة كالواجهة المضلّعة وتشطيب خشب الجوز، إلى جانب خزائن ملفات بأربعة أدراج.',
        },
        { h: 'SAKURA: أقفال البصمة والأرقام الحديثة' },
        {
          p: 'تتميّز خزائن SAKURA بأقفالها الحديثة: خزنة متعددة الأقفال تجمع البصمة ولوحة الأرقام والمفتاح، وخزنة ONS-FE السوداء التي تجمع البصمة والأرقام في مقبض عمودي. مناسبة للبيوت والمكاتب لمن يريد فتحًا سريعًا وآمنًا.',
        },
        { h: 'GODREJ: الخزائن الحديدية واللوكرات وخزائن الملفات' },
        {
          p: 'علامة GODREJ هي خيارنا للمكاتب والمدارس والمؤسسات: خزائن حديدية بباب واحد أو بابين أو بأبواب زجاجية، ولوكرات حديدية من باب واحد إلى ستة أبواب، وخزائن ملفات بدرجين أو ثلاثة أو خمسة أدراج.',
        },
        { h: 'كيف تختارون؟' },
        {
          ul: [
            'لحفظ المستندات والنقد من الحريق: UCHIDA.',
            'لفتح سريع بالبصمة في البيت أو المكتب: SAKURA.',
            'لتجهيز مكتب أو مدرسة أو غرفة موظفين: GODREJ.',
          ],
        },
        { p: 'وفي المعرض تجدون العلامات الثلاث جنبًا إلى جنب، فتقارنون بأنفسكم قبل الشراء.' },
      ],
      en: [
        {
          p: 'Many customers ask us which brand is best. The honest answer: each brand has a field where it excels. At Nasrallah Trading Est we carry three genuine brands, and this is what we recommend each one for.',
        },
        { h: 'UCHIDA: fire-resistant safes and filing cabinets' },
        {
          p: 'UCHIDA is the backbone of our fire-resistant safes: full-height safes such as the UBO-145E with a digital lock and backup key, luxury designs such as the fluted front and walnut finish, and four-drawer filing cabinets.',
        },
        { h: 'SAKURA: modern fingerprint and keypad locks' },
        {
          p: 'SAKURA safes stand out for their modern locks: a multi-lock safe combining fingerprint, keypad and key, and the black ONS-FE that puts fingerprint and keypad into one vertical handle. They suit homes and offices where quick, secure opening matters.',
        },
        { h: 'GODREJ: steel cupboards, lockers and filing cabinets' },
        {
          p: 'GODREJ is our choice for offices, schools and institutions: steel cupboards with one door, two doors or glass doors, steel lockers from one to six doors, and filing cabinets with two, three or five drawers.',
        },
        { h: 'How to choose' },
        {
          ul: [
            'To protect documents and cash from fire: UCHIDA.',
            'For quick fingerprint opening at home or in the office: SAKURA.',
            'To equip an office, school or staff room: GODREJ.',
          ],
        },
        {
          p: 'In the showroom you will find all three brands side by side, so you can compare for yourself before you buy.',
        },
      ],
    },
    products: [
      'uchida-ubo-145e-fire-resistant-safe',
      'sakura-ons-fe-fingerprint-safe',
      'godrej-two-door-steel-cupboard',
      'godrej-six-door-steel-locker',
    ],
    links: [{ page: 'products' }],
  },
  {
    slug: 'filing-cabinets-for-offices',
    date: '2026-12-02',
    title: {
      ar: 'خزائن الملفات للمكاتب والجهات الحكومية: كم درجًا تحتاجون؟',
      en: 'Filing Cabinets for Offices and Government Bodies: How Many Drawers Do You Need?',
    },
    description: {
      ar: 'كيف تختارون خزانة الملفات المناسبة لمكتبكم أو أرشيف شركتكم في قطر: عدد الأدراج، والمساحة، والقفل، والفرق بين خزانة الملفات والخزنة المقاومة للحريق.',
      en: 'How to choose the right filing cabinet for your office or company archive in Qatar: number of drawers, space, lock, and how a filing cabinet differs from a fire-resistant safe.',
    },
    keywords: {
      ar: 'خزانة ملفات في قطر، خزائن أرشيف، خزانة ملفات حديد، خزائن حفظ ملفات للمكاتب',
      en: 'filing cabinet Qatar, archive cabinets, steel filing cabinet, office file storage',
    },
    body: {
      ar: [
        {
          p: 'الملفات في المكاتب تتكاثر بسرعة، وخزانة الملفات الصحيحة توفّر الوقت كل يوم: كل ملف في مكانه، والأدراج تنزلق بسهولة، والقفل يحفظ ما لا ينبغي أن يطّلع عليه الجميع.',
        },
        { h: 'كم درجًا تحتاجون؟' },
        {
          ul: [
            'درجان: لمكتب موظف واحد، وتوضع غالبًا بجوار المكتب أو تحته.',
            'ثلاثة أدراج: للمكاتب الصغيرة والأقسام التي تتعامل مع ملفات يومية.',
            'أربعة أو خمسة أدراج: للأرشيف والأقسام الإدارية والجهات الحكومية.',
          ],
        },
        { p: 'قاعدة بسيطة: احسبوا عدد الملفات الحالية وأضيفوا إليها ما يُتوقع خلال ثلاث سنوات.' },
        { h: 'خزانة ملفات أم خزنة مقاومة للحريق؟' },
        {
          p: 'خزانة الملفات مصمّمة للتنظيم والوصول اليومي، أما الخزنة المقاومة للحريق فمصمّمة لحماية ما لا يمكن تعويضه. كثير من المؤسسات تجمع بين الاثنين: خزائن ملفات للعمل اليومي، وخزنة مقاومة للحريق للعقود والصكوك والمستندات الأصلية.',
        },
        { h: 'ما لدينا من خزائن الملفات' },
        {
          p: 'نوفّر خزانة ملفات UCHIDA بأربعة أدراج، وخزائن ملفات GODREJ الحديدية بدرجين وثلاثة وخمسة أدراج، لتختاروا ما يناسب المساحة وحجم الأرشيف.',
        },
        { h: 'للطلبات الكبيرة' },
        {
          p: 'إن كنتم تجهّزون مكتبًا جديدًا أو أرشيفًا كاملًا، أرسلوا لنا عدد الموظفين وحجم الأرشيف التقريبي، ونجهّز لكم عرض سعر شاملًا مع التوصيل المجاني.',
        },
      ],
      en: [
        {
          p: 'Files in an office multiply quickly, and the right filing cabinet saves time every day: every file in its place, drawers that glide easily, and a lock that keeps private what not everyone should see.',
        },
        { h: 'How many drawers do you need?' },
        {
          ul: [
            'Two drawers: for one person’s desk, usually placed beside or under it.',
            'Three drawers: for small offices and departments handling files every day.',
            'Four or five drawers: for archives, administrative departments and government bodies.',
          ],
        },
        { p: 'A simple rule: count your current files and add what you expect over the next three years.' },
        { h: 'Filing cabinet or fire-resistant safe?' },
        {
          p: 'A filing cabinet is designed for organisation and daily access, while a fire-resistant safe is designed to protect what cannot be replaced. Many institutions combine the two: filing cabinets for daily work, and a fire-resistant safe for contracts, deeds and original documents.',
        },
        { h: 'Our filing cabinets' },
        {
          p: 'We offer the UCHIDA four-drawer filing cabinet, and GODREJ steel filing cabinets with two, three and five drawers, so you can choose what suits your space and the size of your archive.',
        },
        { h: 'For large orders' },
        {
          p: 'If you are fitting out a new office or a whole archive, send us the number of staff and the approximate size of the archive, and we will prepare a full quotation with free delivery.',
        },
      ],
    },
    products: [
      'uchida-four-drawer-filing-cabinet',
      'godrej-two-drawer-filing-cabinet',
      'godrej-three-drawer-filing-cabinet',
      'godrej-five-drawer-filing-cabinet',
    ],
    links: [{ category: 'filing-cabinets' }, { article: 'fire-resistant-safe-for-documents' }],
  },
  {
    slug: 'steel-lockers-for-staff-and-schools',
    date: '2026-12-06',
    title: {
      ar: 'اللوكرات الحديدية للموظفين والمدارس والأندية: كيف تختارون عدد الأبواب؟',
      en: 'Steel Lockers for Staff, Schools and Clubs: How Many Doors Do You Need?',
    },
    description: {
      ar: 'دليل اختيار اللوكرات الحديدية في قطر للشركات والمدارس والأندية والمصانع: من باب واحد إلى ستة أبواب، وكيف تحسبون العدد المطلوب. لوكرات GODREJ من مؤسسة نصر الله التجارية.',
      en: 'A guide to choosing steel lockers in Qatar for companies, schools, clubs and factories: from one to six doors, and how to work out how many you need. GODREJ lockers from Nasrallah Trading Est.',
    },
    keywords: {
      ar: 'لوكرات حديد في قطر، لوكر موظفين، لوكرات مدارس، خزائن حديدية للموظفين',
      en: 'steel lockers Qatar, staff lockers, school lockers, employee lockers',
    },
    body: {
      ar: [
        {
          p: 'اللوكر الحديدي يمنح كل موظف أو طالب مكانًا خاصًا بقفل لحفظ أغراضه الشخصية. ويقلّل ذلك الفوضى في أماكن العمل، ويحفظ المتعلقات، ويعطي كل شخص شعورًا بالخصوصية.',
        },
        { h: 'كم بابًا في العمود الواحد؟' },
        {
          ul: [
            'باب واحد: مساحة كاملة لشخص واحد، مناسب لتعليق الملابس وزيّ العمل.',
            'بابان (طابقان): لشخصين في نفس المساحة، مع مكان معقول للملابس.',
            'ثلاثة أو أربعة أبواب: للأغراض الشخصية والحقائب الصغيرة.',
            'ستة أبواب: أكبر عدد من الخانات في أقل مساحة، للهواتف والمحافظ والأغراض الصغيرة.',
          ],
        },
        { h: 'كيف تحسبون العدد المطلوب؟' },
        {
          p: 'ابدؤوا بعدد الأشخاص في أكثر الورديات ازدحامًا، ثم قرّروا ما يحتاج كل شخص إلى حفظه. مثال: 30 موظفًا يحتاجون إلى حفظ هواتفهم وحقائبهم فقط، يكفيهم خمسة أعمدة بستة أبواب. أما إن احتاجوا إلى تعليق زيّ العمل فالأنسب لوكرات بباب أو بابين.',
        },
        { h: 'الألوان' },
        { p: 'نوفّر لوكرات GODREJ بألوان منها الأسود والبيج والأبيض العاجي.' },
        { h: 'لمن تناسب اللوكرات؟' },
        {
          p: 'الشركات والمصانع ومواقع العمل، والمدارس والجامعات، والأندية الرياضية وصالات الألعاب، والمستشفيات وغرف الموظفين.',
        },
        { p: 'أرسلوا لنا عدد الأشخاص ونوع الاستخدام، ونرشّح لكم التوزيع المناسب مع عرض سعر.' },
      ],
      en: [
        {
          p: 'A steel locker gives every employee or student a private, lockable place for their belongings. It cuts clutter in the workplace, keeps belongings safe, and gives everyone a sense of privacy.',
        },
        { h: 'How many doors per column?' },
        {
          ul: [
            'One door: a full-height space for one person, suited to hanging clothes and uniforms.',
            'Two doors (two tiers): for two people in the same footprint, with reasonable room for clothes.',
            'Three or four doors: for personal items and small bags.',
            'Six doors: the most compartments in the least space, for phones, wallets and small items.',
          ],
        },
        { h: 'How to work out how many you need' },
        {
          p: 'Start with the number of people on your busiest shift, then decide what each person needs to store. For example, 30 employees who only need to store their phones and bags are well served by five six-door columns. If they need to hang uniforms, lockers with one or two doors suit better.',
        },
        { h: 'Colours' },
        { p: 'We offer GODREJ lockers in colours including black, beige and off-white.' },
        { h: 'Who are lockers for?' },
        {
          p: 'Companies, factories and work sites; schools and universities; sports clubs and gyms; hospitals and staff rooms.',
        },
        {
          p: 'Send us the number of people and the type of use, and we will recommend the right layout with a quotation.',
        },
      ],
    },
    products: ['godrej-single-steel-locker', 'godrej-two-tier-steel-locker', 'godrej-six-door-steel-locker'],
    links: [{ category: 'steel-lockers' }, { page: 'request-quote' }],
  },
  {
    slug: 'safe-placement-and-care',
    date: '2026-12-10',
    title: {
      ar: 'أين تضعون الخزنة في البيت؟ ونصائح للعناية بها لسنوات طويلة',
      en: 'Where Should You Put Your Safe at Home? And How to Care for It for Years',
    },
    description: {
      ar: 'أفضل أماكن وضع الخزنة في البيت، وأخطاء شائعة يجب تجنّبها، ونصائح للعناية بالخزنة وأقفالها الإلكترونية. من خبرة مؤسسة نصر الله التجارية في قطر منذ 1906.',
      en: 'The best places for a safe at home, common mistakes to avoid, and tips for caring for the safe and its electronic lock. From the experience of Nasrallah Trading Est in Qatar since 1906.',
    },
    keywords: {
      ar: 'أين أضع الخزنة، تثبيت الخزنة، صيانة الخزنة، بطارية الخزنة الإلكترونية',
      en: 'where to put a safe, anchoring a safe, safe maintenance, electronic safe battery',
    },
    body: {
      ar: [
        {
          p: 'شراء خزنة جيدة نصف الطريق، والنصف الآخر هو المكان الذي تضعونها فيه وطريقة العناية بها. هذه خلاصة ما نقوله لعملائنا عند كل توصيل.',
        },
        { h: 'أماكن مناسبة للخزنة' },
        {
          ul: [
            'داخل خزانة الملابس: مخفية عن النظر وسهلة الوصول.',
            'في غرفة النوم الرئيسية أو مكتب البيت، بعيدًا عن غرف الضيوف.',
            'في زاوية يمكن فيها تثبيت الخزنة في الأرض أو الجدار.',
          ],
        },
        { h: 'أخطاء شائعة' },
        {
          ul: [
            'وضع الخزنة في مجلس الضيوف أو مكان ظاهر للزوار والعمال.',
            'وضعها في مكان رطب، فالرطوبة تضرّ المستندات والقفل الإلكتروني.',
            'ترك المفتاح الاحتياطي فوق الخزنة أو في درج بجوارها.',
            'كتابة الرقم السري على ورقة ملصقة بالخزنة.',
          ],
        },
        { h: 'العناية بالقفل الإلكتروني' },
        {
          p: 'غيّروا البطاريات بانتظام، ولا تنتظروا حتى تضعف تمامًا، واتّبعوا إرشادات الشركة المصنّعة بحسب نوع البطارية. ونظّفوا قارئ البصمة بقطعة قماش ناعمة جافة.',
        },
        { h: 'العناية بالخزنة نفسها' },
        {
          p: 'امسحوا الخزنة من الغبار بقماش ناعم، وتجنّبوا المنظفات القوية على التشطيبات الخشبية والنحاسية. وإن لاحظتم أن الباب أصبح ثقيلًا أو أن القفل لا يستجيب كالمعتاد، تواصلوا معنا قبل أن تتفاقم المشكلة.',
        },
        { h: 'هل تحتاجون إلى نصيحة؟' },
        { p: 'أرسلوا لنا صورة المكان الذي تفكّرون فيه على واتساب، ونخبركم بالمقاس المناسب له.' },
      ],
      en: [
        {
          p: 'Buying a good safe is half the job; the other half is where you put it and how you look after it. Here is what we tell our customers at every delivery.',
        },
        { h: 'Good places for a safe' },
        {
          ul: [
            'Inside a wardrobe: out of sight and easy to reach.',
            'In the main bedroom or a home office, away from guest rooms.',
            'In a corner where the safe can be anchored to the floor or wall.',
          ],
        },
        { h: 'Common mistakes' },
        {
          ul: [
            'Putting the safe in the majlis or anywhere visible to visitors and workers.',
            'Placing it somewhere damp: humidity harms documents and the electronic lock.',
            'Leaving the backup key on top of the safe or in a drawer next to it.',
            'Writing the code on a note stuck to the safe.',
          ],
        },
        { h: 'Caring for the electronic lock' },
        {
          p: 'Change the batteries regularly and do not wait until they run completely flat, following the manufacturer’s instructions for the type of battery. Clean the fingerprint reader with a soft, dry cloth.',
        },
        { h: 'Caring for the safe itself' },
        {
          p: 'Dust the safe with a soft cloth and avoid harsh cleaners on wood and brass finishes. If you notice the door has become heavy or the lock does not respond as usual, contact us before the problem grows.',
        },
        { h: 'Need advice?' },
        { p: 'Send us a photo of the spot you have in mind on WhatsApp, and we will tell you the right size for it.' },
      ],
    },
    products: [],
    links: [{ page: 'safe-buying-guide' }, { article: 'opening-a-locked-safe-in-qatar' }],
  },
  {
    slug: 'upper-floor-safe-delivery',
    date: '2026-12-14',
    title: {
      ar: 'توصيل الخزنة إلى الطوابق العليا: ما الذي يجب التأكد منه قبل الشراء؟',
      en: 'Delivering a Safe to an Upper Floor: What to Check Before You Buy',
    },
    description: {
      ar: 'تخطّطون لوضع خزنة في شقة أو مكتب في طابق علوي؟ نوصل الخزائن إلى الطوابق العليا في الأماكن المناسبة. هذه النقاط تأكدوا منها قبل الشراء لتجنّب أي عوائق أثناء التوصيل.',
      en: 'Planning a safe for an apartment or office on an upper floor? Where suitable, we deliver safes to upper floors. Check these points before buying to avoid obstacles on delivery day.',
    },
    keywords: {
      ar: 'توصيل خزنة في قطر، توصيل تجوري للطابق العلوي، نقل خزنة ثقيلة، توصيل خزائن مجاني',
      en: 'safe delivery Qatar, upper floor safe delivery, moving a heavy safe, free safe delivery',
    },
    body: {
      ar: [
        {
          p: 'الخزنة الجيدة ثقيلة بطبيعتها، فجدرانها الحديدية وعزلها ضد الحريق هما ما يحميان ما بداخلها. ولهذا فإن وصولها إلى شقة أو مكتب في طابق علوي يحتاج إلى تخطيط بسيط قبل الشراء، لا بعده.',
        },
        {
          p: 'في مؤسسة نصر الله التجارية التوصيل مجاني، وفي الأماكن المناسبة نوصل الخزنة إلى الطوابق العليا. لكننا نطلب دائمًا التأكد من إمكانية التوصيل قبل الشراء، حتى لا تواجهوا أي عوائق يوم التوصيل.',
        },
        { h: 'ما الذي نتأكد منه معكم قبل الشراء؟' },
        {
          ul: [
            'المصعد: هل يوجد مصعد؟ وما مقاس بابه ومقصورته، وما الحمولة القصوى المكتوبة عليه؟',
            'الدرج: إن لم يكن هناك مصعد مناسب، فما عرض الدرج، وكم عدد الطوابق، وهل فيه منعطفات ضيقة؟',
            'الأبواب والممرات: عرض باب العمارة وباب الشقة أو المكتب والممر المؤدي إلى مكان الخزنة.',
            'مكان الخزنة نفسه: هل الأرضية مناسبة لوزن الخزنة؟ وهل المساحة كافية لفتح بابها بالكامل؟',
            'إدارة المبنى: بعض الأبراج والمجمعات تشترط موعدًا مسبقًا أو تصريحًا لاستخدام مصعد الخدمة.',
            'الوصول إلى المبنى: هل يمكن لسيارة التوصيل الوقوف قريبًا من المدخل؟',
          ],
        },
        { h: 'أسهل طريقة: أرسلوا لنا صورًا ومقاسات' },
        {
          p: 'قبل أن تختاروا الخزنة، أرسلوا لنا على واتساب صورًا للمدخل والمصعد أو الدرج والمكان الذي ستوضع فيه الخزنة، مع المقاسات التقريبية. نراجعها ونخبركم إن كان التوصيل ممكنًا، ونرشّح لكم المقاس الذي يصل بسهولة ويناسب المكان.',
        },
        { h: 'لماذا نصرّ على التأكد مسبقًا؟' },
        {
          p: 'لأن اكتشاف أن الخزنة أكبر من المصعد أو أثقل من حمولته يوم التوصيل يعني تأخيرًا وإزعاجًا لكم. أما التأكد قبل الشراء فيجعل يوم التوصيل سهلًا: تصل الخزنة إلى مكانها وتبدؤون استخدامها في اليوم نفسه.',
        },
        {
          p: 'ولمن يفضّل خزنة أكبر في مكان صعب الوصول إليه، نقترح أحيانًا مقاسًا أصغر قليلًا يمرّ بسهولة، أو خزنتين بدل خزنة واحدة كبيرة.',
        },
      ],
      en: [
        {
          p: 'A good safe is heavy by nature: its steel walls and fire insulation are what protect its contents. That is why getting it into an apartment or office on an upper floor needs a little planning before you buy, not after.',
        },
        {
          p: 'At Nasrallah Trading Est delivery is free, and where the location is suitable we deliver the safe to upper floors. But we always ask to confirm that delivery is possible before purchase, so you do not run into any obstacles on delivery day.',
        },
        { h: 'What we check with you before purchase' },
        {
          ul: [
            'The lift: is there one? What are the sizes of its door and car, and what maximum load is written on it?',
            'The stairs: if there is no suitable lift, how wide are the stairs, how many floors, and are there tight turns?',
            'Doors and corridors: the width of the building entrance, the apartment or office door, and the corridor to where the safe will stand.',
            'The spot itself: is the floor suitable for the safe’s weight, and is there room to open its door fully?',
            'Building management: some towers and compounds require an appointment or a permit to use the service lift.',
            'Access to the building: can the delivery vehicle park near the entrance?',
          ],
        },
        { h: 'The easiest way: send us photos and measurements' },
        {
          p: 'Before choosing your safe, send us on WhatsApp photos of the entrance, the lift or stairs and the spot where the safe will go, with approximate measurements. We will review them, tell you whether delivery is possible, and recommend a size that gets there easily and suits the space.',
        },
        { h: 'Why do we insist on checking first?' },
        {
          p: 'Because finding out on delivery day that the safe is bigger than the lift or heavier than its load limit means delay and inconvenience for you. Checking before purchase makes delivery day easy: the safe reaches its place and you start using it the same day.',
        },
        {
          p: 'For customers who want a large safe in a hard-to-reach spot, we sometimes suggest a slightly smaller size that passes easily, or two safes instead of one large one.',
        },
      ],
    },
    products: [],
    links: [{ page: 'contact' }, { article: 'choosing-a-home-safe' }, { category: 'fire-resistant-safes' }],
  },
  {
    slug: 'lost-all-safe-keys',
    date: '2026-12-18',
    title: {
      ar: 'فقدتم كل مفاتيح الخزنة؟ هكذا نساعدكم عبر الشركة المصنّعة',
      en: 'Lost All Your Safe Keys? How We Help Through the Manufacturer',
    },
    description: {
      ar: 'ضاعت كل مفاتيح خزنتكم، الأصلية والاحتياطية؟ في بعض الحالات تساعدكم مؤسسة نصر الله التجارية بالتواصل مع الشركة المصنّعة لمعرفة إن كان هناك حل. ما الذي تجهّزونه، وكيف تتجنّبون المشكلة.',
      en: 'Lost every key to your safe, the original and the spare? In some cases Nasrallah Trading Est can help by contacting the manufacturer to see whether there is a solution. What to prepare, and how to avoid it.',
    },
    keywords: {
      ar: 'فقدت مفتاح الخزنة، ضياع مفاتيح التجوري، مفتاح بديل للخزنة في قطر، فتح خزنة بدون مفتاح',
      en: 'lost safe key, lost safe keys Qatar, replacement safe key, open safe without key',
    },
    body: {
      ar: [
        {
          p: 'ضياع مفتاح واحد مشكلة يحلّها المفتاح الاحتياطي. أما ضياع كل المفاتيح، الأصلية والاحتياطية معًا، فهو الموقف الذي يقلق أصحاب الخزائن أكثر من غيره، خاصة إذا كانت الخزنة تعمل بالمفتاح فقط، أو كانت الخزنة مغلقة والمفتاح الاحتياطي في داخلها.',
        },
        { h: 'كيف نساعدكم؟' },
        {
          p: 'في بعض الحالات نستطيع مساعدتكم بالتواصل مع الشركة المصنّعة للخزنة، لمعرفة إن كان هناك حل مناسب لموديل خزنتكم. يختلف الحل من شركة إلى أخرى ومن موديل إلى آخر، ولهذا نبحث كل حالة على حدة ونخبركم بما هو ممكن قبل أي خطوة.',
        },
        { h: 'ما الذي تجهّزونه قبل التواصل معنا؟' },
        {
          ul: [
            'اسم العلامة التجارية للخزنة وموديلها إن كان مكتوبًا عليها.',
            'أي رقم أو ملصق موجود على الخزنة أو على بابها.',
            'فاتورة الشراء إن كانت متوفرة، خاصة إن كانت الخزنة من معرضنا.',
            'صورًا واضحة للخزنة من الأمام ولمكان القفل.',
          ],
        },
        { h: 'وإن لم يكن هناك حل من الشركة المصنّعة؟' },
        {
          p: 'إن كانت الخزنة مقفولة ولم يتوفر حل من الشركة المصنّعة، يمكن فتحها عبر خدمة فتح الخزائن المقفولة بعد استيفاء اشتراطات وزارة الداخلية: تستخرجون أمر فتح الخزنة من مركز الشرطة التابع لمحل إقامتكم، ثم نحدّد موعد الفتح بحضور المختصين.',
        },
        { h: 'كيف تتجنّبون الموقف من البداية؟' },
        {
          ul: [
            'لا تحفظوا المفتاح الاحتياطي داخل الخزنة نفسها.',
            'احفظوا المفتاح الاحتياطي في مكان آمن آخر يعرفه شخص تثقون به.',
            'اكتبوا موديل الخزنة واحتفظوا بفاتورة الشراء مع أوراقكم المهمة.',
            'إن ضاع مفتاح واحد، تواصلوا معنا فورًا ولا تنتظروا ضياع الآخر.',
          ],
        },
        { p: 'للمساعدة في حالة فقدان مفاتيح الخزنة، تواصلوا معنا على واتساب 5562 3268 أو على الهاتف 4458 3211.' },
      ],
      en: [
        {
          p: 'Losing one key is a problem the spare key solves. Losing every key, the original and the spare together, is the situation safe owners dread most, especially when the safe works by key only, or when it is locked with the spare key inside.',
        },
        { h: 'How we help' },
        {
          p: 'In some cases we can help by contacting the safe’s manufacturer to find out whether there is a suitable solution for your model. The solution varies from one manufacturer and model to another, so we look into each case individually and tell you what is possible before taking any step.',
        },
        { h: 'What to prepare before contacting us' },
        {
          ul: [
            'The safe’s brand and model, if written on it.',
            'Any number or label on the safe or its door.',
            'The purchase invoice if you have it, especially if the safe came from our showroom.',
            'Clear photos of the front of the safe and of the lock.',
          ],
        },
        { h: 'And if the manufacturer has no solution?' },
        {
          p: 'If the safe is locked and the manufacturer has no solution, it can be opened through our locked-safe opening service once the Ministry of Interior’s requirements are met: you obtain an order to open the safe from the police station for your area, and we then set an appointment for the opening in the presence of the officials.',
        },
        { h: 'How to avoid this in the first place' },
        {
          ul: [
            'Never keep the spare key inside the safe itself.',
            'Keep the spare key in another safe place known to someone you trust.',
            'Note the safe’s model and keep the purchase invoice with your important papers.',
            'If one key goes missing, contact us straight away rather than waiting for the other to go too.',
          ],
        },
        { p: 'For help after losing your safe keys, contact us on WhatsApp at 5562 3268 or by phone at 4458 3211.' },
      ],
    },
    products: [],
    links: [{ article: 'opening-a-locked-safe-in-qatar' }, { page: 'contact' }],
  },
]
