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
      en: 'Before buying a home safe in Qatar: what you will keep in it, the right size and lock, where it goes and whether to anchor it.',
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
    products: ['sakura-multi-lock-safe', 'sakura-fingerprint-safe', 'uchida-full-height-fire-resistant-safe'],
    links: [{ category: 'home-safes' }, { page: 'safe-buying-guide' }, { category: 'fire-resistant-safes' }],
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
          p: 'لأن كل قفل يغطي نقطة ضعف الآخر: البصمة سريعة، والرقم مناسب لأكثر من مستخدم، والمفتاح يفتح الخزنة إذا نفدت البطارية. ولهذا تجمع خزنة SAKURA متعددة الأقفال بين البصمة ولوحة الأرقام والمفتاح في لوحة تحكم واحدة، وتجمع خزنة SAKURA السوداء البصمة والأرقام في مقبض عمودي واحد.',
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
          p: 'Because each lock covers the other’s weak point: the fingerprint is fast, the code suits several users, and the key opens the safe if the battery runs out. That is why the SAKURA Multi-Lock Safe brings a fingerprint scanner, a keypad and a key together on one control panel, and the black SAKURA fingerprint safe combines fingerprint and keypad in one vertical handle.',
        },
        { h: 'A final tip' },
        {
          p: 'Never keep the backup key inside the safe or next to it, and change the electronic lock’s batteries regularly before they run completely flat.',
        },
      ],
    },
    products: ['sakura-fingerprint-safe', 'sakura-multi-lock-safe', 'uchida-full-height-fire-resistant-safe'],
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
    products: ['uchida-full-height-fire-resistant-safe', 'uchida-fluted-safe', 'uchida-walnut-finish-safe'],
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
    products: ['uchida-full-height-fire-resistant-safe', 'sakura-multi-lock-safe', 'sakura-fingerprint-safe'],
    links: [{ category: 'fire-resistant-safes' }, { page: 'request-quote' }],
  },
  {
    slug: 'uchida-sakura-godrej-compared',
    date: '2026-11-28',
    title: {
      ar: 'أي علامة خزائن تناسبكم: UCHIDA أم SAKURA أم GODREJ أم KUROGANE؟',
      en: 'Which Safe Brand Suits You: UCHIDA, SAKURA, GODREJ or KUROGANE?',
    },
    description: {
      ar: 'تعرّفوا على العلامات التجارية للخزائن في مؤسسة نصر الله التجارية: UCHIDA للخزائن المقاومة للحريق والإيداع، وSAKURA للأقفال الحديثة والتصاميم اللافتة، وGODREJ الهندية منذ 1902، وKUROGANE اليابانية.',
      en: 'Get to know the safe brands at Nasrallah Trading Est: UCHIDA for fire-resistant and deposit safes, SAKURA for modern locks and striking designs, GODREJ of India since 1902, and KUROGANE of Japan.',
    },
    keywords: {
      ar: 'خزائن UCHIDA، خزائن SAKURA، خزائن GODREJ في قطر، خزائن KUROGANE اليابانية، أفضل ماركة خزائن',
      en: 'UCHIDA safes, SAKURA safes, GODREJ Qatar, KUROGANE Japanese safes, best safe brand',
    },
    body: {
      ar: [
        {
          p: 'يسألنا كثير من العملاء: أي ماركة أفضل؟ والإجابة الصادقة: لكل علامة مجال تتميّز فيه. في مؤسسة نصر الله التجارية نوفّر أربع علامات أصلية، وهذا ما نرشّح كل واحدة منها له.',
        },
        { h: 'UCHIDA: أوسع تشكيلة لدينا' },
        {
          p: 'علامة UCHIDA هي الأساس في تشكيلتنا: خزائن مقاومة للحريق بارتفاع كامل، وخزائن ببابين للمؤسسات، وخزائن صغيرة بقفل رقمي، وخزائن بالبصمة. ومنها أيضًا خزائن الإيداع التي يودع فيها الموظفون النقود دون فتح الخزنة، وخزائن سجلات مقاومة للحريق، وخزائن المفاتيح، وتصاميم فاخرة بواجهة مضلّعة أو بتشطيب خشب الجوز أو باللون الأحمر.',
        },
        { h: 'SAKURA: أقفال حديثة وتصاميم لافتة' },
        {
          p: 'تتميّز خزائن SAKURA بأقفالها الحديثة: خزنة متعددة الأقفال تجمع البصمة ولوحة الأرقام والمفتاح، وخزنة سوداء تجمع البصمة والأرقام في مقبض عمودي. ولمن يريد خزنة تكون جزءًا من الديكور، تأتي خزنة SAKURA بباب مزخرف بالزهور على خلفية سوداء أو مرآة فضية. وتقدّم SAKURA أيضًا خزائن ملفات مقاومة للحريق بأربعة أدراج.',
        },
        { h: 'GODREJ: خبرة هندية منذ عام 1902' },
        {
          p: 'بدأت شركة Godrej & Boyce في مومباي بصناعة الأقفال عام 1897، ثم صنعت أولى خزائنها عام 1902، ومنذ ذلك الحين صار اسمها من أشهر أسماء الخزائن في الهند. ولدينا من GODREJ ما تحتاج إليه المكاتب والمدارس والمؤسسات: خزائن حديدية بباب واحد أو بابين أو بأبواب زجاجية، ولوكرات من باب واحد إلى ستة أبواب، وخزائن ملفات بدرجين أو ثلاثة أو خمسة أدراج.',
        },
        { h: 'KUROGANE: صناعة يابانية' },
        {
          p: 'KUROGANE علامة شركة Kurogane Kosakusho اليابانية، التي تأسست في أوساكا عام 1927 وتعمل في صناعة الأثاث المكتبي ومعدات المباني. ومن إنتاجها خزائن Wing Safe المصنوعة في اليابان، بقفل رقمي دوّار وقفل بمفتاح، لحماية السجلات المهمة والمقتنيات الثمينة من الحريق والسرقة.',
        },
        { h: 'كيف تختارون؟' },
        {
          ul: [
            'لحفظ المستندات والنقد من الحريق، أو لخزائن الإيداع والمفاتيح: UCHIDA.',
            'لفتح سريع بالبصمة أو لخزنة بتصميم لافت: SAKURA.',
            'لتجهيز مكتب أو مدرسة أو غرفة موظفين: GODREJ.',
            'لمن يفضّل الصناعة اليابانية والقفل الرقمي الدوّار الكلاسيكي: KUROGANE.',
          ],
        },
        { p: 'وفي المعرض تجدون العلامات الأربع جنبًا إلى جنب، فتقارنون بأنفسكم قبل الشراء.' },
      ],
      en: [
        {
          p: 'Many customers ask us which brand is best. The honest answer: each brand has a field where it excels. At Nasrallah Trading Est we carry four genuine brands, and this is what we recommend each one for.',
        },
        { h: 'UCHIDA: our widest range' },
        {
          p: 'UCHIDA is the backbone of our range: full-height fire-resistant safes, double-door safes for institutions, compact digital safes and fingerprint safes. It also covers deposit safes that let staff drop cash without opening the safe, fire-resistant records cabinets, key cabinets, and luxury designs with a fluted front, a walnut finish or a bold red body.',
        },
        { h: 'SAKURA: modern locks and eye-catching designs' },
        {
          p: 'SAKURA safes stand out for their modern locks: a multi-lock safe combining fingerprint, keypad and key, and a black safe that puts fingerprint and keypad into one vertical handle. For a safe that is part of the décor, the SAKURA floral safe has a floral door on black or on a silver mirror finish. SAKURA also makes fire-resistant four-drawer filing cabinets.',
        },
        { h: 'GODREJ: Indian expertise since 1902' },
        {
          p: 'Godrej & Boyce of Mumbai began making locks in 1897 and built its first safes in 1902, and its name has been one of the best known in Indian safes ever since. From GODREJ we carry what offices, schools and institutions need: steel cupboards with one door, two doors or glass doors, lockers from one to six doors, and filing cabinets with two, three or five drawers.',
        },
        { h: 'KUROGANE: made in Japan' },
        {
          p: 'KUROGANE is the brand of Kurogane Kosakusho, a Japanese company founded in Osaka in 1927 that makes office furniture and building equipment. Its Wing Safe range is made in Japan, with a combination dial and a key lock, to protect important records and valuables against fire and theft.',
        },
        { h: 'How to choose' },
        {
          ul: [
            'To protect documents and cash from fire, or for deposit safes and key cabinets: UCHIDA.',
            'For quick fingerprint opening or a safe with a striking design: SAKURA.',
            'To equip an office, school or staff room: GODREJ.',
            'If you prefer Japanese manufacture and a classic combination dial: KUROGANE.',
          ],
        },
        {
          p: 'In the showroom you will find all four brands side by side, so you can compare for yourself before you buy.',
        },
      ],
    },
    products: [
      'uchida-full-height-fire-resistant-safe',
      'sakura-floral-safe',
      'godrej-two-door-steel-cupboard',
      'kurogane-wing-safe',
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
  {
    slug: 'travel-jewellery-cases-for-weddings-and-travel',
    date: '2026-12-22',
    title: {
      ar: 'شنط المجوهرات للسفر والأعراس: كيف تحملون مجوهراتكم بأمان خارج البيت؟',
      en: 'Travel Jewellery Cases: How to Carry Your Jewellery Safely to Weddings and Abroad',
    },
    description: {
      ar: 'كيف تحملون مجوهراتكم وساعاتكم بأمان في السفر والفنادق والحفلات والأعراس؟ شنط المجوهرات المقسّمة من الداخل من مؤسسة نصر الله التجارية، تصميم خاص لا تجدونه في مكان آخر في قطر.',
      en: 'How to carry your jewellery and watches safely when travelling, in hotels, to parties and to weddings, with the divided travel jewellery cases from Nasrallah Trading Est, a special design you will not find anywhere else in Qatar.',
    },
    keywords: {
      ar: 'شنطة مجوهرات للسفر، حقيبة مجوهرات، شنطة ذهب للأعراس، حفظ المجوهرات في الفندق',
      en: 'travel jewellery case, jewellery case Qatar, wedding jewellery case, jewellery storage for travel',
    },
    body: {
      ar: [
        {
          p: 'الخزنة تحمي مجوهراتكم في البيت، لكن ماذا عن الأيام التي تخرج فيها المجوهرات معكم؟ السفر، والإقامة في فندق، وحفلات الأعراس والمناسبات، كلها مواقف تُحمل فيها أثمن القطع في علب متفرقة أو أكياس صغيرة، فتتلامس وتُخدش وتتشابك، ويسهل أن تضيع قطعة دون أن تنتبهوا.',
        },
        { h: 'لماذا لا تكفي علبة المجوهرات العادية؟' },
        {
          ul: [
            'العلب الصغيرة المتفرقة يصعب تتبّعها، وتضيع بسهولة بين الأغراض.',
            'الأكياس القماشية لا تفصل القطع، فتتشابك السلاسل وتُخدش الأحجار.',
            'الساعات تحتاج إلى وسائد تحفظ شكل السوار، لا إلى درج مزدحم.',
          ],
        },
        { h: 'ما الذي يميّز شنط المجوهرات لدينا؟' },
        {
          p: 'صمّمت مؤسسة نصر الله التجارية شنطًا مقسّمة من الداخل تحمل طقمًا كاملًا في مكان واحد، وهي تصميم خاص لا تجدونه في مكان آخر في قطر:',
        },
        {
          ul: [
            'خانات مخصّصة للعقود والأساور والخواتم والأقراط.',
            'وسائد للساعات تحفظ كل ساعة في مكانها.',
            'بطانة ناعمة تمنع تلامس القطع.',
            'أقفال ذهبية محكمة ومقبض متين للحمل.',
            'تشطيب أسود بملمس جلد التمساح، أو لون رمادي فاتح.',
          ],
        },
        { h: 'متى تحتاجون إليها؟' },
        {
          ul: [
            'السفر: تبقى المجوهرات معكم في مكان واحد بدل أن تتوزع بين الحقائب.',
            'الفنادق: ترتيب واضح يخبركم فورًا إن كانت قطعة ناقصة.',
            'الحفلات والأعراس: تحمل العروس وأهلها أطقم الذهب والألماس إلى قاعة الحفل وصالون التجميل في شنطة واحدة مرتّبة.',
            'الهدايا: شنطة مجوهرات مرتّبة هدية تليق بالعروس أو بمن يحب المجوهرات.',
          ],
        },
        { h: 'نصائح لحمل المجوهرات خارج البيت' },
        {
          ul: [
            'احملوا شنطة المجوهرات معكم في حقيبة اليد، ولا تضعوها في الحقائب المشحونة.',
            'في الفندق، احفظوها في خزنة الغرفة أو خزنة الاستقبال حين تخرجون.',
            'صوّروا الأطقم قبل السفر، ليسهل التأكد من وجود كل قطعة عند العودة.',
            'أعيدوا كل قطعة إلى خانتها فور خلعها.',
          ],
        },
        { p: 'شاهدوا شنط المجوهرات في معرضنا، أو اسألونا عنها على واتساب.' },
      ],
      en: [
        {
          p: 'A safe protects your jewellery at home, but what about the days your jewellery goes out with you? Travelling, staying in a hotel, weddings and celebrations are all times when the most precious pieces are carried in assorted boxes or small pouches, where they touch, scratch and tangle, and a piece can go missing without you noticing.',
        },
        { h: 'Why is an ordinary jewellery box not enough?' },
        {
          ul: [
            'Small separate boxes are hard to keep track of and easily lost among your things.',
            'Fabric pouches do not keep pieces apart, so chains tangle and stones get scratched.',
            'Watches need cushions that keep the strap’s shape, not a crowded drawer.',
          ],
        },
        { h: 'What makes our jewellery cases different?' },
        {
          p: 'Nasrallah Trading Est designed cases divided inside to carry a whole set in one place, a special design you will not find anywhere else in Qatar:',
        },
        {
          ul: [
            'Dedicated compartments for necklaces, bangles, rings and earrings.',
            'Watch cushions that hold each watch in its place.',
            'Soft linings that keep pieces from touching.',
            'Secure gold-tone clasps and a sturdy carry handle.',
            'A black crocodile-texture finish, or light grey.',
          ],
        },
        { h: 'When do you need one?' },
        {
          ul: [
            'Travelling: your jewellery stays together in one place instead of spread across bags.',
            'Hotels: a clear layout tells you at once if a piece is missing.',
            'Parties and weddings: the bride and her family carry their gold and diamond sets to the wedding hall and the salon in one tidy case.',
            'Gifts: a well-arranged jewellery case is a gift worthy of a bride or anyone who loves jewellery.',
          ],
        },
        { h: 'Tips for carrying jewellery away from home' },
        {
          ul: [
            'Keep the jewellery case with you in your hand luggage, never in checked bags.',
            'At the hotel, lock it in the room safe or the front-desk safe when you go out.',
            'Photograph your sets before you travel, so it is easy to check every piece on your return.',
            'Put each piece back in its compartment as soon as you take it off.',
          ],
        },
        { p: 'See the jewellery cases in our showroom, or ask us about them on WhatsApp.' },
      ],
    },
    products: [
      'travel-jewellery-cases',
      'jewellery-display-drawers',
      'watch-winder-safe',
      'marble-interior-jewellery-safe',
    ],
    links: [{ category: 'jewellery-watch-interiors' }, { article: 'jewellery-and-watch-safes' }],
  },
  {
    slug: 'hotel-safes-for-rooms-and-serviced-apartments',
    date: '2027-01-01',
    title: {
      ar: 'خزائن الفنادق: كيف تجهّزون غرف الفندق والشقق الفندقية بالخزنة المناسبة؟',
      en: 'Hotel Safes: How to Equip Hotel Rooms and Serviced Apartments with the Right Safe',
    },
    description: {
      ar: 'دليل اختيار خزائن الغرف للفنادق والشقق الفندقية وسكن الموظفين في قطر: القفل الرقمي أم المفتاح، والمقاس، ومكان التركيب، وتجهيز مبنى كامل بالكميات.',
      en: 'A guide to in-room safes for hotels, serviced apartments and staff housing in Qatar: digital or key lock, size, where to fit them, and equipping a whole building.',
    },
    keywords: {
      ar: 'خزائن فندقية، خزنة فندق، خزنة غرف الفنادق، خزائن الشقق الفندقية في قطر',
      en: 'hotel safes Qatar, in-room safe, hotel room safe, serviced apartment safe',
    },
    body: {
      ar: [
        {
          p: 'خزنة الغرفة من أول ما يبحث عنه النزيل بعد أن يضع حقيبته: مكان صغير آمن لجواز السفر والنقود والهاتف والمجوهرات. وغيابها، أو صعوبة استخدامها، من الأشياء التي يذكرها النزلاء في تقييماتهم. لهذا يستحق اختيار خزائن الغرف تفكيرًا مسبقًا قبل تجهيز الفندق أو المبنى.',
        },
        {
          h: 'قفل رقمي أم قفل بمفتاح؟',
        },
        {
          p: 'في الفنادق يفضَّل غالبًا القفل الرقمي: يضبط النزيل رقمه الخاص عند الوصول، فلا يحتاج الفندق إلى تسليم مفاتيح واستلامها. خزائن SAKURA الفندقية لدينا تأتي بلوحة أرقام وشاشة ومقبض دوّار، والقفل حاصل على شهادة CE.',
        },
        {
          p: 'أما القفل بالمفتاح فمناسب لسكن الموظفين والشقق المؤجرة لمدد طويلة، حيث يستلم الساكن المفتاح مع مفتاح الشقة. خزائن UCHIDA الفندقية بالمفتاح بسيطة يُعتمد عليها، وتتوفر بلونين: الأسود والعاجي.',
        },
        {
          h: 'المقاس ومكان التركيب',
        },
        {
          ul: [
            'قيسوا الرف أو الدرج داخل خزانة الملابس قبل الطلب، واتركوا مسافة لفتح الباب بالكامل.',
            'اختاروا مقاسًا يتسع لجهاز لابتوب صغير إن كان نزلاؤكم من رجال الأعمال.',
            'ثبّتوا الخزنة في الرف أو الجدار حتى لا يمكن حملها.',
            'ضعوها على ارتفاع مريح يرى فيه النزيل لوحة الأرقام دون أن ينحني كثيرًا.',
          ],
        },
        {
          h: 'لون الخزنة وأثاث الغرفة',
        },
        {
          p: 'الخزنة جزء من الغرفة التي يراها النزيل كل يوم. اللون العاجي ينسجم مع الخزائن الخشبية الفاتحة، والأسود مع الأثاث الداكن، والفضي مع التصاميم العصرية.',
        },
        {
          h: 'تجهيز فندق أو مبنى كامل',
        },
        {
          p: 'أرسلوا لنا عدد الغرف ومقاس الرف المخصص للخزنة، ونجهّز لكم عرض سعر للكميات مع التوصيل المجاني داخل قطر. ويمكنكم زيارة معرضنا في سوق العين على طريق سلوى لتجربة القفل قبل الطلب.',
        },
      ],
      en: [
        {
          p: 'The in-room safe is one of the first things guests look for after putting down their bags: a small, secure place for passports, cash, phones and jewellery. A missing or awkward safe is the kind of detail guests mention in reviews, so choosing room safes deserves some thought before you equip a hotel or a building.',
        },
        {
          h: 'Digital lock or key lock?',
        },
        {
          p: 'Hotels usually prefer a digital lock: guests set their own code on arrival, so the hotel never has to hand out and collect keys. Our SAKURA hotel safes have a keypad, a display and a turning knob, and the lock carries CE approval.',
        },
        {
          p: 'A key lock suits staff housing and long-let apartments, where residents receive the safe key with the flat key. Our key-locked UCHIDA hotel safes are simple and dependable, in black or ivory.',
        },
        {
          h: 'Size and placement',
        },
        {
          ul: [
            'Measure the shelf or drawer inside the wardrobe before ordering, and leave room for the door to open fully.',
            'Choose a size that takes a small laptop if many of your guests travel on business.',
            'Anchor the safe to the shelf or wall so it cannot be carried off.',
            'Fit it at a comfortable height where guests can see the keypad without bending low.',
          ],
        },
        {
          h: 'Colour and furniture',
        },
        {
          p: 'The safe is part of a room guests see every day. Ivory blends with light wooden wardrobes, black with dark furniture, and silver with modern interiors.',
        },
        {
          h: 'Equipping a whole hotel or building',
        },
        {
          p: 'Send us the number of rooms and the size of the shelf set aside for the safe, and we will prepare a quotation for the quantity, with free delivery across Qatar. You are also welcome at our Souq Al Ein showroom on Salwa Road to try the locks before you order.',
        },
      ],
    },
    products: [
      'sakura-digital-hotel-safe',
      'sakura-compact-digital-hotel-safe',
      'uchida-black-hotel-safe',
      'uchida-ivory-hotel-safe',
    ],
    links: [
      {
        category: 'hotel-safes',
      },
      {
        category: 'key-cabinets',
      },
      {
        page: 'request-quote',
      },
    ],
  },
  {
    slug: 'how-a-deposit-safe-works',
    date: '2027-01-11',
    title: {
      ar: 'خزنة الإيداع: كيف تحمون إيراد اليوم دون أن يعرف الموظفون الرقم السري؟',
      en: 'Deposit Safes: How to Protect the Day’s Takings Without Sharing the Code',
    },
    description: {
      ar: 'كيف تعمل خزنة الإيداع والإيداع الليلي، ولماذا تناسب المحلات والمطاعم ومحطات الوقود والفروع في قطر، وكيف تنظّمون الإيداع بين الورديات.',
      en: 'How deposit and night deposit safes work, why they suit shops, restaurants, fuel stations and branches in Qatar, and how to organise drops between shifts.',
    },
    keywords: {
      ar: 'خزنة إيداع، خزنة إيداع ليلي، خزنة للمطاعم، خزنة لمحطات الوقود في قطر',
      en: 'deposit safe Qatar, night deposit safe, drop safe, safe for restaurants',
    },
    body: {
      ar: [
        {
          p: 'في كثير من المحلات يستلم الكاشير النقود طوال اليوم، ثم تبقى في الدرج حتى يأتي صاحب العمل أو المدير. وكلما زاد المبلغ في الدرج زاد الخطر. والحل التقليدي، إعطاء الرقم السري للخزنة لكل موظف، يخلق مشكلة أكبر. هنا تأتي خزنة الإيداع.',
        },
        {
          h: 'كيف تعمل؟',
        },
        {
          p: 'لخزنة الإيداع جزءان: درج إيداع في الأعلى يستطيع الموظف فتحه ووضع النقود أو الظرف فيه، وجسم الخزنة المقفل في الأسفل. عند إغلاق الدرج تسقط النقود إلى الداخل، ولا يمكن إخراجها من الدرج نفسه. أما الباب الرئيسي فلا يفتحه إلا صاحب الرقم السري أو المفتاح.',
        },
        {
          h: 'لمن تناسب؟',
        },
        {
          ul: [
            'المطاعم والمقاهي التي تعمل بورديات متتالية.',
            'محطات الوقود والسوبرماركت والبقالات.',
            'الصيدليات والمحلات التي تفتح إلى ساعات متأخرة.',
            'فروع الشركات التي تجمع النقود يوميًا قبل إيداعها في البنك.',
          ],
        },
        {
          h: 'نصائح لتنظيم الإيداع',
        },
        {
          ul: [
            'حدّدوا مبلغًا أقصى في درج الكاشير، وما زاد عنه يُودع فورًا.',
            'ضعوا كل إيداع في ظرف مكتوب عليه التاريخ والوردية والمبلغ واسم الموظف.',
            'ثبّتوا الخزنة في الأرض أو داخل خزانة حتى لا يمكن حملها.',
            'اجعلوا الرقم السري للباب الرئيسي عند شخص أو شخصين فقط، وغيّروه عند تغيّر الموظفين المسؤولين.',
          ],
        },
        {
          h: 'خزائن الإيداع لدينا',
        },
        {
          p: 'نوفّر خزائن إيداع من UCHIDA، منها خزنة بدرج إيداع علوي وقفل بمفتاح، وخزنة الإيداع الليلي بدرج يُسحب للخارج ولوحة أرقام رقمية ومفتاح على الباب الرئيسي. أخبرونا بطبيعة عملكم وعدد الورديات، ونرشّح لكم الأنسب.',
        },
      ],
      en: [
        {
          p: 'In many shops the cashier takes cash all day, and it stays in the till until the owner or manager arrives. The more money in the till, the bigger the risk. The usual workaround, giving every employee the safe code, creates a bigger problem. This is what a deposit safe is for.',
        },
        {
          h: 'How does it work?',
        },
        {
          p: 'A deposit safe has two parts: a drop drawer on top that staff can open to put in cash or an envelope, and the locked body of the safe below. When the drawer closes, the cash falls inside and cannot be taken back out through the drawer. The main door opens only for whoever holds the code or the key.',
        },
        {
          h: 'Who is it for?',
        },
        {
          ul: [
            'Restaurants and cafés that run back-to-back shifts.',
            'Fuel stations, supermarkets and grocery stores.',
            'Pharmacies and shops that open late.',
            'Company branches that collect cash daily before banking it.',
          ],
        },
        {
          h: 'Tips for organising deposits',
        },
        {
          ul: [
            'Set a maximum amount for the till, and drop anything above it straight away.',
            'Put each drop in an envelope marked with the date, shift, amount and employee’s name.',
            'Anchor the safe to the floor or inside a cabinet so it cannot be carried off.',
            'Keep the main door code with one or two people only, and change it when the people in charge change.',
          ],
        },
        {
          h: 'Our deposit safes',
        },
        {
          p: 'We carry UCHIDA deposit safes, including one with a top drop drawer and a key lock, and a night deposit safe with a pull-out drawer and a digital keypad and key on the main door. Tell us about your business and how many shifts you run, and we will recommend the right one.',
        },
      ],
    },
    products: ['uchida-deposit-safe', 'uchida-night-deposit-safe', 'bsm-auto-cash-box'],
    links: [
      {
        category: 'deposit-safes',
      },
      {
        article: 'cash-safe-for-shops-and-offices',
      },
      {
        category: 'cash-boxes',
      },
    ],
  },
  {
    slug: 'organising-keys-with-a-key-cabinet',
    date: '2027-01-21',
    title: {
      ar: 'خزانة المفاتيح: كيف تنظّمون مفاتيح المبنى أو الفندق أو معرض السيارات؟',
      en: 'Key Cabinets: How to Organise the Keys of a Building, Hotel or Car Showroom',
    },
    description: {
      ar: 'كيف تختارون خزانة المفاتيح المناسبة لعدد مفاتيحكم، وكيف ترقّمونها وتصنّفونها بالألوان، ومن يحتفظ بمفتاح الخزانة، مع نصائح لتسجيل استلام المفاتيح.',
      en: 'How to choose a key cabinet for the number of keys you hold, number and colour-code them, decide who keeps the cabinet key, and log who takes which key.',
    },
    keywords: {
      ar: 'خزانة مفاتيح، صندوق مفاتيح، خزانة مفاتيح للفنادق، تنظيم المفاتيح في قطر',
      en: 'key cabinet Qatar, key box, key cabinet for hotels, key management',
    },
    body: {
      ar: [
        {
          p: 'في المجمعات السكنية والفنادق والشركات ومعارض السيارات، تتراكم المفاتيح بسرعة: مفاتيح الشقق والمكاتب والمخازن والسيارات وغرف الكهرباء. وحين تكون معلّقة على لوحة مفتوحة أو في درج، يضيع الوقت في البحث عنها، ويصعب معرفة من أخذ مفتاحًا ولم يُعده.',
        },
        {
          h: 'ما الذي تقدمه خزانة المفاتيح؟',
        },
        {
          p: 'خزانة المفاتيح تمنح كل مفتاح خطافًا مرقّمًا في مكان ثابت، وتُقفل بمفتاح حتى لا يصل إليها إلا المسؤول. فيعرف المسؤول بنظرة واحدة أي خطاف فارغ، وبالتالي أي مفتاح خارج الخزانة.',
        },
        {
          h: 'كم خطافًا تحتاجون؟',
        },
        {
          p: 'عدّوا المفاتيح الموجودة اليوم وأضيفوا ما يقارب الربع للتوسع المستقبلي. لدينا خزانة UCHIDA صغيرة بمقبض للحمل، وخزانة UCHIDA طويلة ونحيفة بصفوف أكثر من الخطافات للأماكن التي تكثر فيها المفاتيح.',
        },
        {
          h: 'نظام بسيط للترقيم والألوان',
        },
        {
          ul: [
            'خصّصوا لونًا لكل فئة: الأصفر للشقق مثلًا والأزرق للمكاتب أو السيارات.',
            'اكتبوا على الميدالية رقم الخطاف فقط، لا رقم الشقة أو اسم المكان، حتى لا يفيد المفتاح من يجده.',
            'احتفظوا بقائمة تربط رقم الخطاف بالمكان، في مكان منفصل عن الخزانة.',
            'علّقوا المفاتيح الاحتياطية في صف خاص بها.',
          ],
        },
        {
          h: 'سجل الاستلام والتسليم',
        },
        {
          p: 'أضيفوا دفترًا بسيطًا بجوار الخزانة: التاريخ، ورقم المفتاح، واسم من استلمه، ووقت إعادته. هذه العادة الصغيرة توفّر الكثير من المشاكل، خصوصًا مع فرق الصيانة والمقاولين.',
        },
        {
          h: 'زورونا',
        },
        {
          p: 'تفضلوا بزيارة معرضنا في سوق العين على طريق سلوى لمعاينة خزائن المفاتيح، أو أرسلوا لنا عدد مفاتيحكم على واتساب ونرشّح لكم المقاس المناسب.',
        },
      ],
      en: [
        {
          p: 'In residential compounds, hotels, companies and car showrooms, keys pile up quickly: flats, offices, stores, cars and plant rooms. Hung on an open board or tossed in a drawer, they waste time to find, and it is hard to tell who took a key and never brought it back.',
        },
        {
          h: 'What does a key cabinet give you?',
        },
        {
          p: 'A key cabinet gives every key a numbered hook in a fixed place, and locks so only the person in charge can reach them. One glance shows which hook is empty, and so which key is out.',
        },
        {
          h: 'How many hooks do you need?',
        },
        {
          p: 'Count the keys you hold today and add about a quarter for growth. We have a compact UCHIDA cabinet with a carry handle, and a tall, slim UCHIDA cabinet with more rows of hooks for places with a lot of keys.',
        },
        {
          h: 'A simple numbering and colour system',
        },
        {
          ul: [
            'Give each group a colour: yellow for flats, say, and blue for offices or cars.',
            'Write only the hook number on the tag, never the flat number or place, so a lost key is useless to whoever finds it.',
            'Keep a list linking hook numbers to places, stored away from the cabinet.',
            'Hang spare keys on a row of their own.',
          ],
        },
        {
          h: 'Log who takes each key',
        },
        {
          p: 'Keep a simple book beside the cabinet: the date, the key number, who took it and when it came back. This small habit saves a lot of trouble, especially with maintenance teams and contractors.',
        },
        {
          h: 'Visit us',
        },
        {
          p: 'Come to our Souq Al Ein showroom on Salwa Road to see the key cabinets, or send us the number of keys you hold on WhatsApp and we will recommend the right size.',
        },
      ],
    },
    products: ['uchida-key-cabinet', 'uchida-tall-key-cabinet'],
    links: [
      {
        category: 'key-cabinets',
      },
      {
        category: 'hotel-safes',
      },
      {
        page: 'contact',
      },
    ],
  },
  {
    slug: 'cash-box-or-safe',
    date: '2027-01-31',
    title: {
      ar: 'صندوق النقود أم الخزنة؟ ما الفرق ومتى تحتاجون كلًّا منهما',
      en: 'Cash Box or Safe? The Difference, and When You Need Each',
    },
    description: {
      ar: 'الفرق بين صندوق النقود والخزنة الحديدية في الحماية والاستخدام اليومي، ومتى يكفي صندوق النقود للمحل، ومتى تحتاجون إلى خزنة، ولماذا يجمع كثيرون بينهما.',
      en: 'How a cash box and a steel safe differ in protection and daily use, when a cash box is enough for a shop, when you need a safe, and why many businesses use both.',
    },
    keywords: {
      ar: 'صندوق نقود، صندوق كاش، الفرق بين صندوق النقود والخزنة، خزنة للمحل',
      en: 'cash box Qatar, cash box vs safe, shop safe, cashier cash box',
    },
    body: {
      ar: [
        {
          p: 'كثيرًا ما يسألنا أصحاب المحلات: هل يكفيني صندوق نقود أم أحتاج إلى خزنة؟ والجواب أن لكل منهما وظيفة مختلفة، وفي أغلب الأعمال يكمّل أحدهما الآخر.',
        },
        {
          h: 'صندوق النقود: للاستخدام خلال اليوم',
        },
        {
          p: 'صندوق النقود أصغر وأخف وأسرع في الفتح والإغلاق. يُستخدم عند الكاونتر لحفظ نقود اليوم وترتيبها، أو لنقل النقود بين المحل والمكتب والبنك. يُقفل بأقفال رقمية دوّارة أو بلوحة أرقام مع مفتاح، لكنه ليس مصممًا ليبقى فيه مبلغ كبير طوال الليل.',
        },
        {
          h: 'الخزنة: للحفظ الطويل',
        },
        {
          p: 'الخزنة الحديدية أثقل وأمتن، وكثير منها مقاوم للحريق، وتُثبّت في الأرض أو الجدار. هي المكان الذي تبقى فيه النقود بعد الإغلاق، ومعها الشيكات والعقود والأختام.',
        },
        {
          h: 'مقارنة سريعة',
        },
        {
          ul: [
            'الوزن: صندوق النقود يُحمل باليد، والخزنة تبقى في مكانها.',
            'الاستخدام: الصندوق يُفتح مرات كثيرة في اليوم، والخزنة مرات قليلة.',
            'المبلغ: الصندوق لنقود التشغيل اليومية، والخزنة لما يزيد عنها.',
            'الحريق: الصندوق لا يُعتمد عليه في الحريق، وكثير من الخزائن مصممة لذلك.',
          ],
        },
        {
          h: 'الحل الذي نراه في أغلب المحلات',
        },
        {
          p: 'صندوق نقود عند الكاونتر لنقود اليوم، وخزنة أو خزنة إيداع في المكتب الخلفي لما يزيد عن حد معيّن ولإيراد آخر اليوم. هكذا يبقى العمل سريعًا عند الكاشير، والمبالغ الكبيرة في مكان آمن.',
        },
        {
          h: 'ماذا نوفّر؟',
        },
        {
          p: 'صناديق نقود BSM بدرج أمامي للكاشير، وصندوق رقمي يُفتح درجه بزر، وصندوق محمول بمقبض، إلى جانب خزائن النقود وخزائن الإيداع. أخبرونا بحجم عملكم ونرشّح لكم المزيج المناسب.',
        },
      ],
      en: [
        {
          p: 'Shop owners often ask us whether a cash box is enough or whether they need a safe. The answer is that each does a different job, and in most businesses one complements the other.',
        },
        {
          h: 'The cash box: for use during the day',
        },
        {
          p: 'A cash box is smaller, lighter and quicker to open and close. It sits at the counter to hold and sort the day’s cash, or carries cash between the shop, the office and the bank. It locks with combination dials or a keypad and key, but it is not built to hold a large sum overnight.',
        },
        {
          h: 'The safe: for keeping',
        },
        {
          p: 'A steel safe is heavier and stronger, many are fire-resistant, and it is anchored to the floor or wall. It is where cash stays after closing, along with cheques, contracts and company stamps.',
        },
        {
          h: 'A quick comparison',
        },
        {
          ul: [
            'Weight: a cash box is carried by hand; a safe stays put.',
            'Use: the box opens many times a day; the safe a few times.',
            'Amount: the box holds working cash; the safe holds anything above that.',
            'Fire: a cash box cannot be relied on in a fire; many safes are built for it.',
          ],
        },
        {
          h: 'What we see in most shops',
        },
        {
          p: 'A cash box at the counter for the day’s cash, and a safe or deposit safe in the back office for anything over a set amount and for the end-of-day takings. The till stays quick, and large sums stay secure.',
        },
        {
          h: 'What we carry',
        },
        {
          p: 'BSM cash boxes with a front cashier drawer, a digital box whose drawer opens at the push of a button, and a portable box with a handle, alongside cash safes and deposit safes. Tell us how your business runs and we will recommend the right mix.',
        },
      ],
    },
    products: ['bsm-auto-cash-box', 'bsm-digital-auto-cash-box', 'bsm-portable-cash-box', 'uchida-deposit-safe'],
    links: [
      {
        category: 'cash-boxes',
      },
      {
        category: 'deposit-safes',
      },
      {
        category: 'fire-resistant-safes',
      },
    ],
  },
  {
    slug: 'watch-winder-safe-for-automatic-watches',
    date: '2027-02-10',
    title: {
      ar: 'دوّار الساعات داخل الخزنة: هل تحتاجه ساعتكم الأوتوماتيكية؟',
      en: 'A Watch Winder Inside Your Safe: Does Your Automatic Watch Need One?',
    },
    description: {
      ar: 'لماذا تتوقف الساعة الأوتوماتيكية عند تركها، وما فائدة دوّار الساعات، ولماذا يجمعه كثير من هواة الساعات مع الخزنة في قطعة واحدة.',
      en: 'Why an automatic watch stops when it is left unworn, what a watch winder does, and why many collectors combine it with a safe.',
    },
    keywords: {
      ar: 'دوار ساعات، خزنة ساعات، خزنة بدوار ساعات، حفظ الساعات الأوتوماتيكية',
      en: 'watch winder safe, watch safe Qatar, automatic watch winder, watch storage',
    },
    body: {
      ar: [
        {
          p: 'الساعة الأوتوماتيكية تتعبأ من حركة المعصم أثناء ارتدائها. وحين تُترك في الدرج يومين أو ثلاثة تقريبًا، بحسب الساعة، تتوقف. فإذا عاد صاحبها لارتدائها احتاج إلى ضبط الوقت والتاريخ من جديد، وهو أمر مزعج مع الساعات ذات التقويم أو أطوار القمر.',
        },
        {
          h: 'ما وظيفة دوّار الساعات؟',
        },
        {
          p: 'دوّار الساعات قاعدة تحمل الساعة وتديرها ببطء بين حين وآخر، كأنها على المعصم، فتبقى معبّأة وجاهزة للارتداء في أي وقت. وهو مفيد خصوصًا لمن يملك أكثر من ساعة أوتوماتيكية ويبدّل بينها.',
        },
        {
          h: 'لماذا داخل الخزنة؟',
        },
        {
          p: 'الساعات الفاخرة من أغلى ما يُحفظ في البيت، ووضع الدوّار على رف مكشوف يعني أنها خارج الخزنة طوال الوقت. الخزنة المجهزة بدوّار تجمع الأمرين: الساعات تبقى معبّأة، ومقفلة في الوقت نفسه.',
        },
        {
          h: 'ما الذي تبحثون عنه؟',
        },
        {
          ul: [
            'عدد الساعات التي تريدون إبقاءها معبّأة، والمساحة للساعات الأخرى.',
            'إطار ووسائد تحمل الساعة بثبات دون أن تضغط على السوار.',
            'مساحة إضافية للأوراق والعلب والمجوهرات، مثل درج مبطّن.',
            'قفل سهل الاستخدام، لأنكم ستفتحون الخزنة كثيرًا.',
          ],
        },
        {
          h: 'خزنة دوّار الساعات لدينا',
        },
        {
          p: 'لدينا خزنة بيضاء مجهزة بدوّار لأربع ساعات في إطار خشبي، مع درج جلدي في الأعلى. ويمكن أيضًا تجهيز خزائن أخرى بأدراج للساعات مبطّنة بالمخمل. زورونا في معرضنا بسوق العين لمعاينتها.',
        },
      ],
      en: [
        {
          p: 'An automatic watch winds itself from the movement of the wrist. Left in a drawer for roughly two or three days, depending on the watch, it stops. When its owner picks it up again, the time and date need setting from scratch, which is tiresome on watches with a calendar or moon phase.',
        },
        {
          h: 'What does a watch winder do?',
        },
        {
          p: 'A watch winder holds the watch and turns it slowly from time to time, as if it were on the wrist, so it stays wound and ready to wear. It is especially useful for anyone with several automatic watches who wears them in turn.',
        },
        {
          h: 'Why inside the safe?',
        },
        {
          p: 'Fine watches are among the most valuable things kept at home, and a winder on an open shelf means they spend all their time outside the safe. A safe fitted with a winder does both jobs: the watches stay wound and locked away.',
        },
        {
          h: 'What to look for',
        },
        {
          ul: [
            'How many watches you want kept wound, and room for the rest.',
            'A frame and cushions that hold each watch firmly without straining the strap.',
            'Extra space for papers, boxes and jewellery, such as a lined drawer.',
            'An easy lock, because you will open the safe often.',
          ],
        },
        {
          h: 'Our watch winder safe',
        },
        {
          p: 'We have a white safe fitted with a four-watch winder in a wooden frame, with a leather drawer above. Other safes can also be fitted with velvet-lined watch drawers. Visit our Souq Al Ein showroom to see them.',
        },
      ],
    },
    products: ['watch-winder-safe', 'watch-drawers', 'uchida-red-safe-with-leather-drawers'],
    links: [
      {
        category: 'jewellery-watch-interiors',
      },
      {
        category: 'luxury-safes',
      },
      {
        article: 'jewellery-and-watch-safes',
      },
    ],
  },
  {
    slug: 'keeping-gold-and-cash-safe-in-ramadan-and-eid',
    date: '2027-02-20',
    title: {
      ar: 'في رمضان والعيد: كيف تحفظون الذهب والنقود والعيديات في البيت بأمان؟',
      en: 'Ramadan and Eid: Keeping Gold, Cash and Eid Gifts Safe at Home',
    },
    description: {
      ar: 'في رمضان والعيد تكثر الزيارات والنقود والذهب في البيت. نصائح عملية لحفظ المجوهرات والعيديات والزكاة في مكان آمن خلال المناسبات.',
      en: 'Ramadan and Eid bring more visitors, cash and gold into the house. Practical tips for keeping jewellery, Eid money and zakat secure through the season.',
    },
    keywords: {
      ar: 'حفظ الذهب في البيت، خزنة للعيد، حفظ النقود في رمضان، خزنة مجوهرات منزلية',
      en: 'keep gold safe at home, home safe Eid, Ramadan cash safety, jewellery safe',
    },
    body: {
      ar: [
        {
          p: 'في رمضان والعيد يمتلئ البيت بالضيوف والعمال والزيارات، وتزيد النقود الموجودة فيه: عيديات الأطفال، ومبالغ الزكاة والصدقات قبل توزيعها، وذهب العيد الذي يُخرج من مكانه للمناسبات. وهذا بالضبط الوقت الذي يحتاج فيه البيت إلى ترتيب أفضل لما يُحفظ فيه.',
        },
        {
          h: 'اجمعوا الأشياء الثمينة في مكان واحد',
        },
        {
          p: 'الذهب الموزّع بين الأدراج والحقائب يصعب تتبّعه، ولا تعرفون إن نقص منه شيء إلا بعد وقت. ضعوا المجوهرات والنقود في خزنة واحدة، ورتّبوها بحيث تعرفون بنظرة ما في الداخل.',
        },
        {
          h: 'افصلوا نقود الزكاة والعيديات',
        },
        {
          ul: [
            'ضعوا كل مبلغ في ظرف مكتوب عليه الغرض والمبلغ: زكاة، صدقة، عيديات.',
            'احتفظوا بالأظرف في الخزنة حتى يوم التوزيع.',
            'سجّلوا ما وُزّع حتى لا يختلط الحساب.',
          ],
        },
        {
          h: 'بعد المناسبة، أعيدوا الذهب فورًا',
        },
        {
          p: 'أكثر ما يضيع من الذهب يضيع بعد المناسبات: قطعة تُخلع على عجل وتُترك على طاولة. اجعلوا إعادة المجوهرات إلى الخزنة عادة في نهاية كل زيارة أو حفلة.',
        },
        {
          h: 'الخزنة نفسها',
        },
        {
          ul: [
            'ضعوها في مكان لا يدخله الضيوف، كغرفة النوم أو غرفة الملابس.',
            'ثبّتوها في الأرض أو الجدار إن كانت صغيرة.',
            'لا تشاركوا الرقم السري مع العاملين في البيت.',
            'إن كنتم ستسافرون في إجازة العيد، تأكدوا من إغلاقها جيدًا قبل الخروج.',
          ],
        },
        {
          h: 'تحتاجون إلى خزنة قبل العيد؟',
        },
        {
          p: 'اطّلعوا على الخزائن المنزلية وخزائن المجوهرات لدينا، أو تواصلوا معنا على واتساب. التوصيل مجاني داخل قطر. وكل عام وأنتم بخير.',
        },
      ],
      en: [
        {
          p: 'Ramadan and Eid fill the house with guests, helpers and visits, and with more cash than usual: children’s Eid money, zakat and charity set aside before it is given, and Eid gold taken out for occasions. This is exactly when a household needs to organise its valuables better.',
        },
        {
          h: 'Keep valuables in one place',
        },
        {
          p: 'Gold spread across drawers and handbags is hard to keep track of, and you may not notice a missing piece for some time. Keep jewellery and cash together in one safe, arranged so you can see what is inside at a glance.',
        },
        {
          h: 'Separate zakat and Eid money',
        },
        {
          ul: [
            'Put each sum in an envelope marked with its purpose and amount: zakat, charity, Eid gifts.',
            'Keep the envelopes in the safe until the day they are given.',
            'Note what has been given so the accounts stay clear.',
          ],
        },
        {
          h: 'After each occasion, put the gold back',
        },
        {
          p: 'Most lost gold goes missing after an occasion: a piece taken off in a hurry and left on a table. Make returning jewellery to the safe a habit at the end of every visit or party.',
        },
        {
          h: 'The safe itself',
        },
        {
          ul: [
            'Place it where guests do not go, such as the bedroom or dressing room.',
            'Anchor it to the floor or wall if it is small.',
            'Do not share the code with household staff.',
            'If you travel over the Eid holiday, make sure it is locked before you leave.',
          ],
        },
        {
          h: 'Need a safe before Eid?',
        },
        {
          p: 'Browse our home safes and jewellery safes, or message us on WhatsApp. Delivery is free across Qatar. Eid Mubarak in advance.',
        },
      ],
    },
    products: ['sakura-fingerprint-safe', 'marble-interior-jewellery-safe', 'uchida-compact-digital-safe'],
    links: [
      {
        category: 'home-safes',
      },
      {
        category: 'luxury-safes',
      },
      {
        article: 'jewellery-and-watch-safes',
      },
    ],
  },
  {
    slug: 'safes-for-charities-and-donation-cash',
    date: '2027-03-02',
    title: {
      ar: 'حفظ التبرعات في الجمعيات والمساجد والمراكز: خزنة الإيداع وصندوق النقود',
      en: 'Keeping Donations Safe at Charities, Mosques and Centres: Deposit Safes and Cash Boxes',
    },
    description: {
      ar: 'كيف تحفظ الجمعيات والمساجد والمراكز المجتمعية التبرعات النقدية بأمان وشفافية: خزنة الإيداع، وصندوق النقود المحمول، ونظام بسيط للعدّ والتسجيل.',
      en: 'How charities, mosques and community centres can keep cash donations secure and transparent: deposit safes, portable cash boxes and a simple counting routine.',
    },
    keywords: {
      ar: 'خزنة تبرعات، حفظ التبرعات، خزنة إيداع للجمعيات، صندوق نقود للمساجد',
      en: 'donation safe, charity cash safe, deposit safe for mosques, cash box for donations',
    },
    body: {
      ar: [
        {
          p: 'في رمضان خصوصًا، تستقبل الجمعيات والمساجد والمراكز المجتمعية تبرعات نقدية كثيرة، يجمعها متطوعون مختلفون في أوقات مختلفة. والأمانة هنا مضاعفة: حماية المال، وحماية سمعة القائمين عليه.',
        },
        {
          h: 'خزنة الإيداع: يودع الجميع ولا يفتح إلا المسؤول',
        },
        {
          p: 'خزنة الإيداع تحل المشكلة الأساسية: يستطيع أي متطوع إيداع الظرف عبر الدرج العلوي، لكن لا أحد يستطيع إخراج المال إلا من يملك الرقم السري أو المفتاح. فلا يحتاج المسؤول إلى توزيع الرقم السري على الجميع.',
        },
        {
          h: 'صندوق النقود المحمول للفعاليات',
        },
        {
          p: 'في الإفطارات الجماعية والمعارض الخيرية والأسواق، يكون صندوق النقود المحمول بمقبض وأقفال رقمية أنسب، ثم تُنقل محتوياته إلى الخزنة في نهاية اليوم.',
        },
        {
          h: 'نظام بسيط للشفافية',
        },
        {
          ul: [
            'يُعدّ المال بحضور شخصين على الأقل.',
            'يوضع كل مبلغ في ظرف مكتوب عليه التاريخ والمصدر والمبلغ وتوقيع من عدّه.',
            'تُسجّل الأظرف في دفتر قبل إيداعها.',
            'تُفتح الخزنة في أوقات محددة، ويُودع المال في البنك بانتظام.',
            'يُغيَّر الرقم السري عند تغيّر المسؤولين.',
          ],
        },
        {
          h: 'مكان الخزنة',
        },
        {
          p: 'ضعوا الخزنة في مكتب يُقفل، لا في ممر أو مدخل، وثبّتوها في الأرض أو الجدار. وإن كانت تُحفظ معها سجلات أو مستندات مهمة، ففكّروا في خزنة مقاومة للحريق.',
        },
        {
          h: 'نساعدكم في الاختيار',
        },
        {
          p: 'أخبرونا بطبيعة نشاطكم وحجم التبرعات المتوقعة، ونرشّح لكم خزنة الإيداع أو صندوق النقود المناسب، مع التوصيل المجاني داخل قطر.',
        },
      ],
      en: [
        {
          p: 'In Ramadan especially, charities, mosques and community centres receive a great deal of cash, collected by different volunteers at different times. The trust involved is double: protecting the money, and protecting the reputation of the people who look after it.',
        },
        {
          h: 'A deposit safe: everyone drops, only the person in charge opens',
        },
        {
          p: 'A deposit safe solves the core problem: any volunteer can drop an envelope through the top drawer, but nobody can take money out without the code or key. The person in charge never has to share the code.',
        },
        {
          h: 'A portable cash box for events',
        },
        {
          p: 'At community iftars, charity fairs and markets, a portable cash box with a handle and combination locks is more practical, and its contents go into the safe at the end of the day.',
        },
        {
          h: 'A simple routine for transparency',
        },
        {
          ul: [
            'Count money with at least two people present.',
            'Put each sum in an envelope marked with the date, source, amount and the counter’s signature.',
            'Record envelopes in a book before they go in the safe.',
            'Open the safe at set times, and bank the money regularly.',
            'Change the code when the people in charge change.',
          ],
        },
        {
          h: 'Where to put the safe',
        },
        {
          p: 'Place it in a lockable office, not a corridor or entrance, and anchor it to the floor or wall. If important records are kept with it, consider a fire-resistant safe.',
        },
        {
          h: 'We can help you choose',
        },
        {
          p: 'Tell us about your organisation and the donations you expect, and we will recommend the right deposit safe or cash box, with free delivery across Qatar.',
        },
      ],
    },
    products: ['uchida-deposit-safe', 'uchida-night-deposit-safe', 'bsm-portable-cash-box'],
    links: [
      {
        category: 'deposit-safes',
      },
      {
        category: 'cash-boxes',
      },
      {
        article: 'how-a-deposit-safe-works',
      },
    ],
  },
  {
    slug: 'tajouri-khazna-or-khazina-safe-names',
    date: '2027-03-12',
    title: {
      ar: 'تجوري أم خزنة أم خزينة؟ أسماء الخزائن في قطر والخليج وما يقصده كل اسم',
      en: 'Tajouri, Khazna or Khazina? What Safes Are Called in Qatar and the Gulf',
    },
    description: {
      ar: 'تجوري، خزنة، خزينة، خزانة حديدية، صندوق أمانات: ماذا يعني كل اسم، وما الذي يقصده الناس في قطر والخليج عند البحث عن خزنة.',
      en: 'Tajouri, khazna, khazina, steel cupboard, safe deposit box: what each name means, and what people in Qatar and the Gulf usually mean when they look for a safe.',
    },
    keywords: {
      ar: 'تجوري، خزنة، خزينة، تجوري حديد، الفرق بين التجوري والخزنة',
      en: 'tajouri meaning, khazna, safe in Arabic, tajouri Qatar',
    },
    body: {
      ar: [
        {
          p: 'يصلنا الطلب نفسه بكلمات مختلفة: «أبغى تجوري»، «عندكم خزنة صغيرة؟»، «أبحث عن خزينة للمحل». وكلها صحيحة. لكن معرفة ما يقصده كل اسم تساعدكم على البحث وعلى شرح ما تحتاجونه.',
        },
        {
          h: 'تجوري',
        },
        {
          p: 'الاسم الشائع في قطر والخليج للخزنة الحديدية التي تُحفظ فيها النقود والذهب والمستندات. ويقصد به الناس غالبًا الخزنة الثقيلة ذات الباب السميك والقفل الرقمي أو المفتاح.',
        },
        {
          h: 'خزنة وخزينة',
        },
        {
          p: '«خزنة» هي الكلمة العربية الفصيحة الأكثر استخدامًا في الكتابة والإعلانات. و«خزينة» تُستخدم في بعض البلدان بالمعنى نفسه، وتُستخدم أيضًا بمعنى الخزانة المالية للدولة أو الشركة.',
        },
        {
          h: 'خزانة حديدية',
        },
        {
          p: 'قد تعني الخزنة نفسها، لكنها تُستخدم كثيرًا للدولاب الحديدي المكتبي الذي يُقفل، لحفظ الملفات والأدوات. وهو أقل حماية من الخزنة لكنه أوسع بكثير.',
        },
        {
          h: 'أسماء أخرى',
        },
        {
          ul: [
            'خزنة مقاومة للحريق: مصممة لحماية ما في داخلها من الحرارة.',
            'خزنة إيداع: يُودع فيها المال عبر درج دون فتح الخزنة.',
            'صندوق نقود أو صندوق كاش: صندوق صغير للكاشير أو لنقل النقود.',
            'صندوق أمانات: يُقصد به غالبًا صندوق يُستأجر في البنك.',
            'خزنة فندقية: خزنة صغيرة لغرف الفنادق.',
          ],
        },
        {
          h: 'كيف تطلبون ما تحتاجونه؟',
        },
        {
          p: 'لا يهم الاسم بقدر ما يهم ما ستحفظونه وأين. أخبرونا بذلك، وسنعرف إن كنتم تحتاجون إلى تجوري للبيت، أو خزنة إيداع للمحل، أو خزانة حديدية للمكتب.',
        },
      ],
      en: [
        {
          p: 'The same request reaches us in different words: “I want a tajouri”, “Do you have a small khazna?”, “I’m looking for a khazina for the shop.” All of them are right, but knowing what each name means helps you search and explain what you need.',
        },
        {
          h: 'Tajouri',
        },
        {
          p: 'The everyday word in Qatar and the Gulf for a steel safe that holds cash, gold and documents. People usually mean a heavy safe with a thick door and a digital or key lock.',
        },
        {
          h: 'Khazna and khazina',
        },
        {
          p: '“Khazna” is the standard Arabic word, the one most used in writing and advertising. “Khazina” means the same in some countries, and is also used for a state’s or company’s treasury.',
        },
        {
          h: 'Steel cupboard',
        },
        {
          p: 'The Arabic “khizana hadidiya” can mean a safe, but often means a lockable steel office cupboard for files and supplies. It protects less than a safe but holds far more.',
        },
        {
          h: 'Other names',
        },
        {
          ul: [
            'Fire-resistant safe: built to protect its contents from heat.',
            'Deposit safe: cash goes in through a drawer without opening the safe.',
            'Cash box: a small box for the cashier or for carrying cash.',
            'Safe deposit box: usually a box rented at a bank.',
            'Hotel safe: a small safe for hotel rooms.',
          ],
        },
        {
          h: 'How to ask for what you need',
        },
        {
          p: 'The name matters less than what you will keep and where. Tell us that, and we will know whether you need a tajouri for the house, a deposit safe for the shop or a steel cupboard for the office.',
        },
      ],
    },
    products: ['uchida-full-height-fire-resistant-safe', 'uchida-deposit-safe', 'godrej-two-door-steel-cupboard'],
    links: [
      {
        page: 'products',
      },
      {
        page: 'safe-buying-guide',
      },
      {
        category: 'steel-cupboards',
      },
    ],
  },
  {
    slug: 'how-to-judge-a-safe-before-buying',
    date: '2027-03-22',
    title: {
      ar: 'كيف تحكمون على جودة الخزنة قبل الشراء؟ 7 أشياء تفحصونها بأنفسكم',
      en: 'How to Judge a Safe Before You Buy: 7 Things to Check Yourself',
    },
    description: {
      ar: 'سبعة أشياء تفحصونها بأنفسكم في المعرض قبل شراء خزنة: الباب والمفصلات والمسامير والقفل والوزن والتشطيب وخدمة ما بعد البيع.',
      en: 'Seven things to check in the showroom before buying a safe: the door, hinges, bolts, lock, weight, finish and after-sales service.',
    },
    keywords: {
      ar: 'جودة الخزنة، كيف أختار خزنة جيدة، خزنة أصلية، نصائح شراء خزنة في قطر',
      en: 'safe quality, how to choose a good safe, safe buying tips Qatar',
    },
    body: {
      ar: [
        {
          p: 'تتشابه الخزائن في الصور، لكن الفرق يظهر حين تقفون أمامها وتفتحون بابها. هذه سبعة أشياء ننصح كل عميل بفحصها بنفسه في المعرض قبل أن يقرر.',
        },
        {
          h: '1. الباب وطريقة إغلاقه',
        },
        {
          p: 'افتحوا الباب وأغلقوه أكثر من مرة. الباب الجيد يتحرك بسلاسة ويُغلق بإحكام دون فراغات ظاهرة حوله، ولا يهتز عند تحريك المقبض.',
        },
        {
          h: '2. المفصلات',
        },
        {
          p: 'المفصلات الخارجية المتينة تسمح بفتح الباب بزاوية واسعة وتحمل وزنه سنوات. انظروا إلى حجمها وطريقة تثبيتها.',
        },
        {
          h: '3. مسامير الإغلاق',
        },
        {
          p: 'حين يُغلق القفل تخرج مسامير من الباب إلى جسم الخزنة. اسألوا البائع أن يريكم إياها والباب مفتوح، وكم جانبًا من الباب تُقفل.',
        },
        {
          h: '4. القفل',
        },
        {
          p: 'جرّبوا القفل بأنفسكم: سهولة إدخال الرقم، ووضوح الشاشة، واستجابة قارئ البصمة. واسألوا عن المفتاح الاحتياطي، وعما يحدث إن نفدت البطارية.',
        },
        {
          h: '5. الوزن',
        },
        {
          p: 'الوزن مؤشر على سماكة الحديد ومواد العزل. خزنتان بالمقاس نفسه وفارق كبير في الوزن ليستا متساويتين في الحماية.',
        },
        {
          h: '6. التشطيب من الداخل والخارج',
        },
        {
          p: 'الطلاء المتساوي والحواف النظيفة والتجهيز الداخلي المرتب علامات على عناية المصنع. افتحوا الأدراج والرفوف وتأكدوا من ثباتها.',
        },
        {
          h: '7. من سيخدمكم بعد البيع؟',
        },
        {
          p: 'الخزنة تبقى سنوات، وقد تحتاجون يومًا إلى مساعدة في القفل أو المفتاح. اشتروا من جهة معروفة تستطيع التواصل مع الشركة المصنّعة عند الحاجة. وهذا ما نفعله في مؤسسة نصر الله التجارية منذ عام 1906.',
        },
        {
          h: 'تعالوا وجرّبوا',
        },
        {
          p: 'معرضنا في سوق العين على طريق سلوى مفتوح لتجربة كل ما سبق بأيديكم قبل الشراء.',
        },
      ],
      en: [
        {
          p: 'Safes look alike in photos, but the difference shows when you stand in front of one and open its door. These are seven things we encourage every customer to check for themselves in the showroom before deciding.',
        },
        {
          h: '1. The door and how it closes',
        },
        {
          p: 'Open and close the door several times. A good door moves smoothly and shuts firmly with no visible gaps around it, and does not rattle when you turn the handle.',
        },
        {
          h: '2. The hinges',
        },
        {
          p: 'Sturdy external hinges let the door open wide and carry its weight for years. Look at their size and how they are fixed.',
        },
        {
          h: '3. The locking bolts',
        },
        {
          p: 'When the lock closes, bolts move from the door into the body of the safe. Ask to see them with the door open, and how many sides of the door they lock.',
        },
        {
          h: '4. The lock',
        },
        {
          p: 'Try the lock yourself: how easily the code goes in, how clear the display is, how quickly the fingerprint reader responds. Ask about the backup key and what happens if the battery runs out.',
        },
        {
          h: '5. The weight',
        },
        {
          p: 'Weight reflects the thickness of the steel and the insulation. Two safes of the same size with a big difference in weight do not protect equally.',
        },
        {
          h: '6. The finish, inside and out',
        },
        {
          p: 'Even paint, clean edges and a neat interior show the care the maker took. Open the drawers and shelves and check they are solid.',
        },
        {
          h: '7. Who will look after you afterwards?',
        },
        {
          p: 'A safe lasts for years, and one day you may need help with a lock or a key. Buy from an established seller who can reach the manufacturer when needed. That is what Nasrallah Trading Est has done since 1906.',
        },
        {
          h: 'Come and try',
        },
        {
          p: 'Our Souq Al Ein showroom on Salwa Road is open for you to check all of this with your own hands before you buy.',
        },
      ],
    },
    products: ['kurogane-wing-safe', 'uchida-double-door-safe', 'uchida-full-height-fire-resistant-safe'],
    links: [
      {
        page: 'safe-buying-guide',
      },
      {
        article: 'uchida-sakura-godrej-compared',
      },
      {
        page: 'contact',
      },
    ],
  },
  {
    slug: 'digital-safe-lock-battery',
    date: '2027-04-01',
    title: {
      ar: 'بطارية القفل الرقمي في الخزنة: متى تغيّرونها وماذا تفعلون إن نفدت؟',
      en: 'The Battery in a Digital Safe Lock: When to Change It, and What to Do If It Runs Out',
    },
    description: {
      ar: 'علامات ضعف بطارية القفل الرقمي أو قفل البصمة في الخزنة، ومتى تغيّرونها، وماذا تفعلون إن نفدت والخزنة مقفلة، ولماذا يجب حفظ المفتاح الاحتياطي خارجها.',
      en: 'Signs that a digital or fingerprint safe lock is running low, when to replace the batteries, what to do if they die with the safe locked, and why the backup key belongs outside it.',
    },
    keywords: {
      ar: 'بطارية الخزنة، تغيير بطارية الخزنة، الخزنة لا تفتح، قفل رقمي الخزنة',
      en: "safe battery, change safe battery, safe won't open, digital safe lock",
    },
    body: {
      ar: [
        {
          p: 'الأقفال الرقمية وأقفال البصمة تعمل ببطاريات، وهذا أمر يعرفه الجميع وينساه الجميع. ثم يأتي يوم لا تستجيب فيه الخزنة، وغالبًا في وقت تحتاجون فيه ما بداخلها.',
        },
        {
          h: 'علامات ضعف البطارية',
        },
        {
          ul: [
            'صوت تنبيه مختلف أو ضوء تحذير عند إدخال الرقم، بحسب الموديل.',
            'بطء في استجابة لوحة الأرقام أو الشاشة.',
            'قارئ البصمة يحتاج إلى أكثر من محاولة.',
            'المقبض أو المحرك يتحرك ببطء عند الفتح.',
          ],
        },
        {
          h: 'متى تغيّرونها؟',
        },
        {
          p: 'لا تنتظروا حتى تنفد. اجعلوا تغيير البطاريات عادة سنوية في موعد ثابت تتذكرونه، وغيّروها فور ظهور أي علامة تحذير. استخدموا بطاريات جديدة جيدة من النوع الذي يحدده دليل الخزنة، وغيّروها كلها معًا.',
        },
        {
          h: 'إن نفدت والخزنة مقفلة',
        },
        {
          p: 'تختلف الحلول بحسب الموديل: بعض الخزائن فيها نقطة توصيل خارجية لبطارية مؤقتة تشغّل القفل لفتحه، وأغلبها فيها قفل مفتاح احتياطي خلف غطاء صغير. لهذا يجب أن يكون المفتاح الاحتياطي محفوظًا خارج الخزنة دائمًا، في مكان آمن تعرفونه.',
        },
        {
          h: 'أخطاء شائعة',
        },
        {
          ul: [
            'حفظ المفتاح الاحتياطي داخل الخزنة نفسها.',
            'ترك بطاريات قديمة داخل القفل حتى تتسرب.',
            'محاولة فتح الغطاء أو القفل بالقوة، مما قد يتلفه.',
            'الخلط بين بطاريات جديدة وقديمة.',
          ],
        },
        {
          h: 'إن لم يُفتح القفل',
        },
        {
          p: 'إن جرّبتم البطاريات الجديدة والمفتاح الاحتياطي ولم تُفتح الخزنة، فلا تحاولوا كسرها. تواصلوا معنا: نقدّم خدمة فتح الخزائن المقفولة بعد استيفاء اشتراطات وزارة الداخلية، ونتواصل مع الشركة المصنّعة عند الحاجة.',
        },
      ],
      en: [
        {
          p: 'Digital and fingerprint locks run on batteries, something everyone knows and everyone forgets. Then comes the day the safe will not respond, usually just when you need what is inside.',
        },
        {
          h: 'Signs the battery is low',
        },
        {
          ul: [
            'A different beep or a warning light when you enter the code, depending on the model.',
            'A slow keypad or display.',
            'A fingerprint reader that needs several attempts.',
            'A handle or motor that moves sluggishly when opening.',
          ],
        },
        {
          h: 'When to change it',
        },
        {
          p: 'Do not wait until it dies. Make changing the batteries a yearly habit on a fixed date you will remember, and change them as soon as any warning appears. Use good new batteries of the type the safe’s manual specifies, and replace them all together.',
        },
        {
          h: 'If it dies with the safe locked',
        },
        {
          p: 'The answer depends on the model: some safes have an external contact for a temporary battery that powers the lock long enough to open it, and most have a backup key lock behind a small cover. That is why the backup key must always be kept outside the safe, somewhere secure that you know.',
        },
        {
          h: 'Common mistakes',
        },
        {
          ul: [
            'Keeping the backup key inside the safe itself.',
            'Leaving old batteries in the lock until they leak.',
            'Forcing the cover or the lock, which can damage it.',
            'Mixing new and old batteries.',
          ],
        },
        {
          h: 'If the lock still will not open',
        },
        {
          p: 'If fresh batteries and the backup key do not open the safe, do not try to break it. Contact us: we offer a locked-safe opening service once the Ministry of Interior’s requirements are met, and we contact the manufacturer when needed.',
        },
      ],
    },
    products: ['sakura-fingerprint-safe', 'uchida-fingerprint-safe', 'sakura-multi-lock-safe'],
    links: [
      {
        article: 'opening-a-locked-safe-in-qatar',
      },
      {
        article: 'fingerprint-vs-keypad-vs-key-safe-lock',
      },
      {
        page: 'contact',
      },
    ],
  },
  {
    slug: 'bank-safe-deposit-box-or-home-safe',
    date: '2027-04-11',
    title: {
      ar: 'صندوق الأمانات في البنك أم خزنة في البيت؟ مقارنة تساعدكم على القرار',
      en: 'A Bank Safe Deposit Box or a Safe at Home? A Comparison to Help You Decide',
    },
    description: {
      ar: 'مقارنة بين استئجار صندوق أمانات في البنك وشراء خزنة للبيت في قطر: سهولة الوصول، والتكلفة على المدى الطويل، والحماية من الحريق، ومتى يناسب كلٌّ منهما.',
      en: 'Renting a bank safe deposit box versus owning a home safe in Qatar: access, long-term cost, fire protection, and when each makes sense.',
    },
    keywords: {
      ar: 'صندوق أمانات البنك، خزنة البيت أم البنك، حفظ الذهب في البنك، خزنة منزلية',
      en: 'bank safe deposit box Qatar, home safe or bank, store gold at the bank, home safe',
    },
    body: {
      ar: [
        {
          p: 'حين يكثر الذهب والمستندات المهمة في البيت، يتردد السؤال: هل أستأجر صندوق أمانات في البنك، أم أشتري خزنة للبيت؟ لكل خيار مزاياه، والإجابة تعتمد على ما تحفظونه وكم مرة تحتاجون إليه.',
        },
        {
          h: 'صندوق الأمانات في البنك',
        },
        {
          ul: [
            'الميزة: يُحفظ داخل مبنى البنك المحمي.',
            'القيد: لا تصلون إليه إلا في أوقات عمل البنك، وليس في الإجازات أو في منتصف الليل.',
            'التكلفة: إيجار يتكرر كل عام، يختلف من بنك إلى آخر.',
            'التأمين: اسألوا البنك بوضوح عما يغطيه وما لا يغطيه، ولا تفترضوا أن المحتويات مؤمَّنة تلقائيًا.',
          ],
        },
        {
          h: 'الخزنة في البيت',
        },
        {
          ul: [
            'الميزة: ما تحفظونه في متناولكم في أي وقت، صباحًا أو ليلًا أو في يوم عطلة.',
            'التكلفة: تُدفع مرة واحدة، وتبقى الخزنة سنوات طويلة.',
            'الحماية: تختارون الخزنة المقاومة للحريق والقفل الذي يناسبكم، وتثبّتونها في الأرض أو الجدار.',
            'المسؤولية: مكان الخزنة وسرية الرقم عليكم أنتم.',
          ],
        },
        {
          h: 'متى يناسب كلٌّ منهما؟',
        },
        {
          p: 'صندوق البنك مناسب لما لا تحتاجونه إلا نادرًا: صكوك قديمة، أو مجوهرات موروثة لا تُلبس. أما الخزنة في البيت فمناسبة لما تستخدمونه باستمرار: ذهب المناسبات، والنقود، وجوازات السفر، والعقود التي تُطلب بين حين وآخر.',
        },
        {
          h: 'كثيرون يجمعون بينهما',
        },
        {
          p: 'الحل الذي يختاره كثير من العائلات: خزنة في البيت للاستخدام اليومي والمناسبات، وصندوق في البنك لما يُحفظ سنوات دون أن يُلمس. وفي الحالتين احتفظوا بنسخ مصوّرة من المستندات المهمة في مكان منفصل.',
        },
        {
          h: 'اختاروا خزنة البيت المناسبة',
        },
        {
          p: 'اطّلعوا على خزائننا المنزلية والمقاومة للحريق، أو زورونا في معرضنا بسوق العين لتجربتها. التوصيل مجاني داخل قطر.',
        },
      ],
      en: [
        {
          p: 'When the gold and important papers at home build up, the question comes up: should you rent a safe deposit box at the bank, or buy a safe for the house? Each has its strengths, and the answer depends on what you keep and how often you need it.',
        },
        {
          h: 'A bank safe deposit box',
        },
        {
          ul: [
            'Strength: it sits inside a protected bank building.',
            'Limit: you can reach it only during banking hours, not on holidays or late at night.',
            'Cost: a yearly rent that varies from bank to bank.',
            'Insurance: ask the bank clearly what is and is not covered, and do not assume the contents are insured automatically.',
          ],
        },
        {
          h: 'A safe at home',
        },
        {
          ul: [
            'Strength: what you keep is within reach at any time, morning, night or holiday.',
            'Cost: paid once, and the safe lasts for many years.',
            'Protection: you choose a fire-resistant safe and the lock that suits you, and anchor it to the floor or wall.',
            'Responsibility: where it stands and who knows the code are up to you.',
          ],
        },
        {
          h: 'When does each make sense?',
        },
        {
          p: 'A bank box suits things you rarely need: old title deeds, or heirloom jewellery that is never worn. A home safe suits what you use often: gold for occasions, cash, passports and contracts that are asked for from time to time.',
        },
        {
          h: 'Many people use both',
        },
        {
          p: 'Many families choose a safe at home for everyday use and occasions, and a bank box for things kept for years untouched. Either way, keep copies of important documents somewhere separate.',
        },
        {
          h: 'Choose the right home safe',
        },
        {
          p: 'Browse our home and fire-resistant safes, or visit our Souq Al Ein showroom to try them. Delivery is free across Qatar.',
        },
      ],
    },
    products: ['uchida-full-height-fire-resistant-safe', 'sakura-fingerprint-safe', 'kurogane-compact-wing-safe'],
    links: [
      {
        category: 'home-safes',
      },
      {
        category: 'fire-resistant-safes',
      },
      {
        article: 'choosing-a-home-safe',
      },
    ],
  },
  {
    slug: 'luxury-safes-as-furniture',
    date: '2027-04-21',
    title: {
      ar: 'الخزائن الفاخرة: حين تصبح الخزنة قطعة أثاث في البيت أو المكتب',
      en: 'Luxury Safes: When the Safe Becomes a Piece of Furniture',
    },
    description: {
      ar: 'خزائن فاخرة بواجهات خشبية ومحزّزة وملوّنة ومزخرفة، تُعرض في غرفة الملابس أو المجلس أو مكتب الإدارة بدل إخفائها. كيف تختارون التصميم المناسب لمكانه.',
      en: 'Luxury safes with wood-grain, fluted, coloured and floral fronts, made to be seen in a dressing room, majlis or executive office rather than hidden. How to match the design to the room.',
    },
    keywords: {
      ar: 'خزائن فاخرة، تجوري فاخر، خزنة ديكور، خزنة خشبية، خزنة ملونة في قطر',
      en: 'luxury safe Qatar, designer safe, decorative safe, wood finish safe',
    },
    body: {
      ar: [
        {
          p: 'اعتاد الناس إخفاء الخزنة في زاوية أو داخل خزانة. لكن في غرف الملابس الكبيرة ومكاتب الإدارة والمجالس، صار كثيرون يختارون خزنة تُرى: قطعة بتصميم يليق بالمكان، لا صندوقًا رماديًا يُخفى.',
        },
        {
          h: 'ما الذي يجعل الخزنة فاخرة؟',
        },
        {
          p: 'الحماية في الخزنة الفاخرة هي نفسها في أي خزنة جيدة: حديد متين وقفل موثوق. الفرق في الواجهة والتشطيب والتجهيز الداخلي، بحيث تنسجم مع الأثاث وتكون متعة عند فتحها.',
        },
        {
          h: 'تصاميم تناسب أماكن مختلفة',
        },
        {
          ul: [
            'الواجهة بلون خشب الجوز: لمكاتب الإدارة والمكتبات المنزلية ذات الأثاث الخشبي الداكن.',
            'الواجهة المحزّزة بلون الفحم: للتصاميم العصرية البسيطة.',
            'الأحمر الجريء: لغرفة ملابس تريدون أن تكون الخزنة فيها نقطة جذب.',
            'الواجهة المزخرفة بالزهور بالأسود أو الفضي المرآة: لمن يحب التفاصيل اللافتة.',
            'الأبيض مع رفوف خشبية: لغرف الملابس الفاتحة.',
          ],
        },
        {
          h: 'الداخل لا يقل أهمية',
        },
        {
          p: 'الخزنة الفاخرة تُجهّز من الداخل بحسب ما ستحفظونه: أدراج مبطّنة بالمخمل للمجوهرات، أو أدراج جلدية، أو دوّار للساعات، أو رفوف خشبية للمستندات والعلب.',
        },
        {
          h: 'قبل أن تختاروا',
        },
        {
          ul: [
            'صوّروا المكان الذي ستوضع فيه الخزنة وأحضروا الصورة معكم إلى المعرض.',
            'قيسوا العرض والعمق والارتفاع، ومساحة فتح الباب.',
            'فكّروا في الإضاءة: الواجهات اللامعة تظهر أجمل تحت ضوء مباشر.',
          ],
        },
        {
          h: 'شاهدوها بأنفسكم',
        },
        {
          p: 'الألوان والتشطيبات تظهر في الحقيقة أجمل مما في الصور. زورونا في معرضنا بسوق العين على طريق سلوى لمعاينة خزائننا الفاخرة.',
        },
      ],
      en: [
        {
          p: 'People used to hide the safe in a corner or inside a cupboard. In large dressing rooms, executive offices and majlis rooms, more and more choose a safe that is meant to be seen: a piece designed to suit the room, not a grey box tucked away.',
        },
        {
          h: 'What makes a safe a luxury safe?',
        },
        {
          p: 'The protection in a luxury safe is the same as in any good safe: solid steel and a dependable lock. The difference is the front, the finish and the interior, so it sits well with the furniture and is a pleasure to open.',
        },
        {
          h: 'Designs for different rooms',
        },
        {
          ul: [
            'A walnut-grain front: for executive offices and home libraries with dark wood furniture.',
            'A charcoal fluted front: for clean, contemporary interiors.',
            'Bold red: for a dressing room where the safe should be the centrepiece.',
            'A floral front in black or silver mirror: for those who love striking detail.',
            'White with wooden shelves: for light dressing rooms.',
          ],
        },
        {
          h: 'The inside matters as much',
        },
        {
          p: 'A luxury safe is fitted inside for what you will keep: velvet-lined jewellery drawers, leather drawers, a watch winder, or wooden shelves for papers and boxes.',
        },
        {
          h: 'Before you choose',
        },
        {
          ul: [
            'Photograph the spot where the safe will go and bring the photo to the showroom.',
            'Measure the width, depth and height, and the space for the door to swing.',
            'Think about lighting: glossy fronts look their best under direct light.',
          ],
        },
        {
          h: 'See them for yourself',
        },
        {
          p: 'Colours and finishes look better in person than in photos. Visit our Souq Al Ein showroom on Salwa Road to see our luxury safes.',
        },
      ],
    },
    products: [
      'uchida-walnut-finish-safe',
      'uchida-fluted-safe',
      'uchida-red-safe-with-leather-drawers',
      'sakura-floral-safe',
    ],
    links: [
      {
        category: 'luxury-safes',
      },
      {
        category: 'jewellery-watch-interiors',
      },
      {
        page: 'contact',
      },
    ],
  },
  {
    slug: 'fitting-out-the-inside-of-a-safe',
    date: '2027-05-01',
    title: {
      ar: 'التجهيز الداخلي للخزنة: أدراج المخمل والخشب والجلد وكيف تختارونها',
      en: 'Fitting Out the Inside of a Safe: Velvet, Wood and Leather Drawers, and How to Choose',
    },
    description: {
      ar: 'كيف يحوّل التجهيز الداخلي الخزنة إلى مكان مرتّب للمجوهرات والساعات والمستندات: أدراج المخمل، ورولات الخواتم، وحوامل العقود، وأدراج الخشب والنحاس.',
      en: 'How a fitted interior turns a safe into an organised home for jewellery, watches and papers: velvet drawers, ring rolls, necklace busts, and wood-and-brass drawer stacks.',
    },
    keywords: {
      ar: 'تجهيز داخلي للخزنة، أدراج مجوهرات، أدراج مخمل، تنظيم المجوهرات داخل الخزنة',
      en: 'safe interior fittings, jewellery drawers, velvet drawers, organise jewellery in a safe',
    },
    body: {
      ar: [
        {
          p: 'خزنة بلا تجهيز داخلي تنتهي غالبًا إلى أكياس وعلب مكدّسة فوق بعضها: تبحثون عن قطعة فتُخرجون كل شيء، وتتشابك السلاسل وتُخدش الأحجار. التجهيز الداخلي يحل ذلك، ويجعل فتح الخزنة متعة.',
        },
        {
          h: 'ابدؤوا بما ستحفظونه',
        },
        {
          p: 'قبل اختيار الأدراج اكتبوا قائمة: كم عقدًا وطقمًا، وكم خاتمًا وأسورة، وكم ساعة، وهل هناك مستندات وعلب أصلية. هذه القائمة تحدد عدد الأدراج ونوعها.',
        },
        {
          h: 'أنواع التجهيز',
        },
        {
          ul: [
            'أدراج مبطّنة بالمخمل مع حامل للعقود، وحامل للأساور، ورولات للخواتم.',
            'أدراج للساعات بوسائد مخملية تحفظ شكل السوار.',
            'أدراج من خشب البلوط أو الزان بمقابض نحاسية، لمظهر فاخر ومرتّب.',
            'أدراج مبطّنة بجلد بملمس جلد التمساح.',
            'لوحة للأقراط خلف الباب، ورفوف لعرض الأطقم.',
          ],
        },
        {
          h: 'نصائح عند التصميم',
        },
        {
          ul: [
            'اجعلوا الأدراج الضحلة للخواتم والأقراط، والأعمق للأطقم والأساور.',
            'خصّصوا مكانًا للمستندات بعيدًا عن المجوهرات.',
            'اتركوا درجًا فارغًا للقطع التي ستضيفونها لاحقًا.',
            'اختاروا لون بطانة يُظهر الذهب أو الألماس بوضوح.',
          ],
        },
        {
          h: 'خزنة جديدة أم تجهيز لخزنة موجودة؟',
        },
        {
          p: 'يمكن اختيار خزنة مجهزة من البداية، كخزنة المجوهرات بتجهيز داخلي بلون الرخام، أو السؤال عن تجهيز خزنة تملكونها بحسب مقاساتها. أرسلوا لنا صورة الخزنة من الداخل ومقاساتها.',
        },
        {
          h: 'زورونا',
        },
        {
          p: 'شاهدوا الأدراج والتجهيزات بأنفسكم في معرضنا بسوق العين على طريق سلوى.',
        },
      ],
      en: [
        {
          p: 'A safe with no interior fittings usually ends up as a stack of pouches and boxes: you look for one piece and take everything out, chains tangle and stones get scratched. A fitted interior solves this, and makes opening the safe a pleasure.',
        },
        {
          h: 'Start with what you will keep',
        },
        {
          p: 'Before choosing drawers, make a list: how many necklaces and sets, how many rings and bangles, how many watches, and whether there are documents and original boxes. That list decides how many drawers you need and of what kind.',
        },
        {
          h: 'Types of fittings',
        },
        {
          ul: [
            'Velvet-lined drawers with a necklace bust, a bangle stand and ring rolls.',
            'Watch drawers with velvet cushions that keep the strap’s shape.',
            'Drawer stacks in oak or beech with brass handles, for a fine, orderly look.',
            'Drawers lined in crocodile-texture leather.',
            'An earring board inside the door, and shelves to display sets.',
          ],
        },
        {
          h: 'Design tips',
        },
        {
          ul: [
            'Use shallow drawers for rings and earrings, deeper ones for sets and bangles.',
            'Keep a place for documents away from the jewellery.',
            'Leave one drawer empty for pieces you will add later.',
            'Choose a lining colour that shows off gold or diamonds clearly.',
          ],
        },
        {
          h: 'A new safe, or fittings for one you own?',
        },
        {
          p: 'You can choose a safe that comes fitted, such as our jewellery safe with a marble-finish interior, or ask about fitting out a safe you already own to its measurements. Send us a photo of its interior and its dimensions.',
        },
        {
          h: 'Visit us',
        },
        {
          p: 'See the drawers and fittings for yourself at our Souq Al Ein showroom on Salwa Road.',
        },
      ],
    },
    products: [
      'jewellery-display-drawers',
      'wood-and-brass-drawer-interior',
      'marble-interior-jewellery-safe',
      'watch-drawers',
    ],
    links: [
      {
        category: 'jewellery-watch-interiors',
      },
      {
        category: 'luxury-safes',
      },
      {
        article: 'jewellery-and-watch-safes',
      },
    ],
  },
  {
    slug: 'a-safe-for-bridal-gold',
    date: '2027-05-11',
    title: {
      ar: 'خزنة لذهب العروس: كيف تحفظون الشبكة وأطقم الزفاف في البيت الجديد؟',
      en: 'A Safe for Bridal Gold: Keeping Wedding Sets Safe in Your New Home',
    },
    description: {
      ar: 'نصائح للعروسين في قطر لحفظ الشبكة وأطقم الذهب والألماس في البيت الجديد: اختيار الخزنة ومكانها وتجهيزها، وحمل الأطقم يوم الزفاف.',
      en: 'Tips for newlyweds in Qatar on keeping bridal gold and diamond sets safe in a new home: choosing the safe, where to put it, how to fit it, and carrying sets on the wedding day.',
    },
    keywords: {
      ar: 'خزنة ذهب العروس، خزنة للعروسين، حفظ الشبكة، خزنة مجوهرات للبيت الجديد',
      en: 'bridal jewellery safe, safe for newlyweds, wedding gold storage, jewellery safe Qatar',
    },
    body: {
      ar: [
        {
          p: 'الشبكة وأطقم الزفاف من أغلى ما تملكه العروس، قيمةً وذكرى. ومع الانتقال إلى بيت جديد، يكون الوقت مناسبًا لاختيار مكان يليق بها من اليوم الأول، بدل العلب المتفرقة في الأدراج.',
        },
        {
          h: 'اختاروا الخزنة مع تجهيز البيت',
        },
        {
          p: 'أسهل وقت لتركيب الخزنة هو أثناء تجهيز البيت: قبل امتلاء غرفة الملابس، وحين يمكن تحديد مكانها وتثبيتها بسهولة. أضيفوها إلى قائمة التجهيز مع الأثاث.',
        },
        {
          h: 'المقاس: فكّروا في السنوات القادمة',
        },
        {
          p: 'الذهب يزيد مع المناسبات والهدايا عامًا بعد عام. اختاروا خزنة أكبر قليلًا مما تحتاجونه اليوم، بأدراج تتسع لأطقم إضافية.',
        },
        {
          h: 'التجهيز المناسب للأطقم',
        },
        {
          ul: [
            'حوامل للعقود تحفظها دون أن تلتف أو تنثني.',
            'أدراج مبطّنة بالمخمل بأقسام للأساور والخواتم والأقراط.',
            'مكان للعلب الأصلية والفواتير وشهادات الألماس.',
            'قفل بالبصمة لسهولة الفتح، مع مفتاح احتياطي محفوظ خارج الخزنة.',
          ],
        },
        {
          h: 'يوم الزفاف والمناسبات',
        },
        {
          p: 'تحتاج العروس إلى نقل أطقمها إلى الصالون وقاعة الزفاف ثم إعادتها. شنط المجوهرات المقسّمة من الداخل تحمل الأطقم مرتبة في مكان واحد، وتُعاد إلى الخزنة كاملة بعد الحفل.',
        },
        {
          h: 'هدية للعروسين',
        },
        {
          p: 'الخزنة المجهزة بأدراج المجوهرات، أو شنطة المجوهرات للسفر، هدية عملية تبقى سنوات. زورونا في معرضنا بسوق العين لاختيارها، والتوصيل مجاني داخل قطر.',
        },
      ],
      en: [
        {
          p: 'Bridal gold and wedding sets are among a bride’s most precious possessions, in value and in memory. Moving into a new home is the right moment to give them a proper place from day one, instead of boxes scattered across drawers.',
        },
        {
          h: 'Choose the safe while you furnish',
        },
        {
          p: 'The easiest time to install a safe is while the house is being furnished: before the dressing room fills up, when its spot can be chosen and it can be anchored easily. Put it on the list with the furniture.',
        },
        {
          h: 'Size: think about the years ahead',
        },
        {
          p: 'Gold grows with every occasion and gift. Choose a safe a little larger than you need today, with drawers that will take more sets.',
        },
        {
          h: 'Fittings for sets',
        },
        {
          ul: [
            'Necklace holders that keep pieces from twisting or bending.',
            'Velvet-lined drawers divided for bangles, rings and earrings.',
            'Space for original boxes, receipts and diamond certificates.',
            'A fingerprint lock for easy opening, with a backup key kept outside the safe.',
          ],
        },
        {
          h: 'The wedding day and other occasions',
        },
        {
          p: 'A bride needs to take her sets to the salon and the wedding hall and bring them back. Jewellery cases divided inside carry the sets neatly in one place, and go back into the safe complete after the party.',
        },
        {
          h: 'A gift for the couple',
        },
        {
          p: 'A safe fitted with jewellery drawers, or a travel jewellery case, is a practical gift that lasts for years. Visit our Souq Al Ein showroom to choose one; delivery is free across Qatar.',
        },
      ],
    },
    products: [
      'marble-interior-jewellery-safe',
      'travel-jewellery-cases',
      'sakura-fingerprint-safe',
      'jewellery-display-drawers',
    ],
    links: [
      {
        category: 'jewellery-watch-interiors',
      },
      {
        article: 'travel-jewellery-cases-for-weddings-and-travel',
      },
      {
        category: 'home-safes',
      },
    ],
  },
  {
    slug: 'setting-up-a-new-office',
    date: '2027-05-21',
    title: {
      ar: 'تجهيز مكتب جديد في قطر: الخزنة والدواليب الحديدية وخزائن الملفات واللوكرات',
      en: 'Setting Up a New Office in Qatar: Safes, Steel Cupboards, Filing Cabinets and Lockers',
    },
    description: {
      ar: 'قائمة عملية لتجهيز مكتب أو فرع جديد بوسائل الحفظ: خزنة للنقود والأختام، وخزائن ملفات، ودواليب حديدية، ولوكرات للموظفين، وخزانة مفاتيح.',
      en: 'A practical checklist for equipping a new office or branch with storage: a safe for cash and stamps, filing cabinets, steel cupboards, staff lockers and a key cabinet.',
    },
    keywords: {
      ar: 'تجهيز مكتب، أثاث مكتبي حديد، خزائن مكتبية، دواليب حديد للمكاتب في قطر',
      en: 'office setup Qatar, office storage, steel office furniture, office safes',
    },
    body: {
      ar: [
        {
          p: 'عند افتتاح مكتب أو فرع جديد ينشغل الجميع بالمكاتب والكراسي والأجهزة، وتُترك وسائل الحفظ إلى النهاية. ثم تتكدس الملفات في الصناديق، وتبقى الأختام في الأدراج. هذه قائمة تساعدكم على التخطيط لها من البداية.',
        },
        {
          h: '1. خزنة للنقود والأختام والمستندات المهمة',
        },
        {
          p: 'كل مكتب يحتاج إلى خزنة واحدة على الأقل: للنقود النثرية، وأختام الشركة، والشيكات، والعقود الأصلية، والسجل التجاري. اختاروها مقاومة للحريق إن كانت ستحفظ مستندات.',
        },
        {
          h: '2. خزائن الملفات',
        },
        {
          p: 'قدّروا عدد الملفات النشطة وملفات الأرشيف. خزانة بدرجين بجوار كل مكتب، وخزائن بأربعة أو خمسة أدراج للأقسام والأرشيف، وخزانة ملفات مقاومة للحريق للسجلات التي لا يمكن تعويضها.',
        },
        {
          h: '3. الدواليب الحديدية',
        },
        {
          p: 'للأدوات المكتبية والمطبوعات والملفات الكبيرة. بباب واحد أو بابين، أو بأبواب زجاجية لما تريدون عرضه.',
        },
        {
          h: '4. لوكرات الموظفين',
        },
        {
          p: 'مكان خاص بقفل لكل موظف يحفظ فيه حقيبته وهاتفه. اختاروا عدد الأبواب بحسب عدد الموظفين وما يحتاجون إلى حفظه.',
        },
        {
          h: '5. خزانة المفاتيح',
        },
        {
          p: 'لمفاتيح الغرف والمخازن والسيارات والخزائن نفسها، في مكان واحد مرقّم ومقفل.',
        },
        {
          h: 'قبل الطلب',
        },
        {
          ul: [
            'ارسموا مخططًا بسيطًا للمكتب وحدّدوا مكان كل قطعة.',
            'قيسوا الأبواب والمصاعد، خصوصًا إن كان المكتب في طابق علوي.',
            'اسألوا عن عرض سعر شامل لكل القطع معًا.',
          ],
        },
        {
          h: 'عرض سعر واحد لكل ما تحتاجونه',
        },
        {
          p: 'نوفّر كل ما سبق من UCHIDA وSAKURA وGODREJ وKUROGANE. أرسلوا لنا القائمة أو مخطط المكتب، ونجهّز لكم عرض سعر شاملًا مع التوصيل المجاني داخل قطر.',
        },
      ],
      en: [
        {
          p: 'When a new office or branch opens, everyone is busy with desks, chairs and equipment, and storage is left until last. Then files pile up in boxes and company stamps sit in desk drawers. This checklist helps you plan storage from the start.',
        },
        {
          h: '1. A safe for cash, stamps and key documents',
        },
        {
          p: 'Every office needs at least one safe: for petty cash, company stamps, cheques, original contracts and the commercial registration. Choose a fire-resistant one if it will hold documents.',
        },
        {
          h: '2. Filing cabinets',
        },
        {
          p: 'Estimate your active files and your archive. A two-drawer cabinet beside each desk, four- or five-drawer cabinets for departments and the archive, and a fire-resistant filing cabinet for records that cannot be replaced.',
        },
        {
          h: '3. Steel cupboards',
        },
        {
          p: 'For office supplies, printed material and bulky files. One or two doors, or glass doors for anything you want on display.',
        },
        {
          h: '4. Staff lockers',
        },
        {
          p: 'A private, lockable place for each employee’s bag and phone. Choose the number of doors by headcount and what people need to store.',
        },
        {
          h: '5. A key cabinet',
        },
        {
          p: 'For the keys to rooms, stores, cars and the safes themselves, in one numbered, locked place.',
        },
        {
          h: 'Before you order',
        },
        {
          ul: [
            'Sketch a simple floor plan and mark where each piece goes.',
            'Measure doors and lifts, especially for an office on an upper floor.',
            'Ask for one quotation covering everything together.',
          ],
        },
        {
          h: 'One quotation for everything you need',
        },
        {
          p: 'We supply all of the above from UCHIDA, SAKURA, GODREJ and KUROGANE. Send us your list or floor plan, and we will prepare a full quotation with free delivery across Qatar.',
        },
      ],
    },
    products: [
      'uchida-double-door-safe',
      'godrej-four-tier-steel-locker',
      'godrej-three-drawer-filing-cabinet',
      'godrej-two-door-steel-cupboard',
    ],
    links: [
      {
        category: 'steel-cupboards',
      },
      {
        category: 'filing-cabinets',
      },
      {
        category: 'steel-lockers',
      },
      {
        page: 'request-quote',
      },
    ],
  },
  {
    slug: 'who-holds-the-company-safe-code',
    date: '2027-05-31',
    title: {
      ar: 'من يحمل الرقم السري لخزنة الشركة؟ قواعد بسيطة لإدارة الخزائن في العمل',
      en: 'Who Holds the Company Safe Code? Simple Rules for Managing Safes at Work',
    },
    description: {
      ar: 'قواعد عملية للشركات والمحلات في قطر: من يعرف الرقم السري للخزنة، ومتى يُغيَّر، وأين يُحفظ المفتاح الاحتياطي، وماذا تفعلون عند مغادرة موظف.',
      en: 'Practical rules for companies and shops in Qatar: who knows the safe code, when to change it, where the backup key goes, and what to do when an employee leaves.',
    },
    keywords: {
      ar: 'الرقم السري للخزنة، تغيير رقم الخزنة، خزنة الشركة، إدارة الخزائن في العمل',
      en: 'safe code management, change safe code, company safe, office safe security',
    },
    body: {
      ar: [
        {
          p: 'أقوى خزنة لا تحمي شيئًا إن كان رقمها السري معروفًا لكل من مرّ على المكتب. ومع تغيّر الموظفين والمديرين تتسع دائرة من يعرف الرقم دون أن ينتبه أحد. هذه قواعد بسيطة نراها تنجح في الشركات والمحلات.',
        },
        {
          h: '1. أقل عدد ممكن',
        },
        {
          p: 'حدّدوا بالاسم من يعرف الرقم السري: شخص واحد أو اثنان على الأكثر. وإن احتاج آخرون إلى إيداع المال فقط، فخزنة الإيداع تسمح لهم بذلك دون معرفة الرقم.',
        },
        {
          h: '2. غيّروا الرقم في هذه الحالات',
        },
        {
          ul: [
            'عند مغادرة أي موظف كان يعرف الرقم أو انتقاله إلى قسم آخر.',
            'إذا شككتم أن أحدًا رأى الرقم أثناء إدخاله.',
            'بعد أعمال صيانة أو تركيب حضرها أشخاص من خارج الشركة.',
            'مرة كل فترة ثابتة حتى لو لم يحدث شيء.',
          ],
        },
        {
          h: '3. اختاروا رقمًا لا يُخمَّن',
        },
        {
          p: 'تجنّبوا تاريخ تأسيس الشركة، وأرقام الهاتف، والتسلسلات مثل 1234. ولا تكتبوا الرقم على ورقة داخل الدرج أو تحت لوحة المفاتيح.',
        },
        {
          h: '4. المفتاح الاحتياطي',
        },
        {
          p: 'احفظوه خارج الخزنة وخارج المكتب إن أمكن، مع صاحب الشركة أو في خزنة أخرى. واكتبوا من يحمله.',
        },
        {
          h: '5. البصمة للأشخاص المحددين',
        },
        {
          p: 'في الخزائن التي تقبل البصمة، سجّلوا بصمات الأشخاص المخوّلين فقط، واحذفوا بصمة من يغادر فورًا.',
        },
        {
          h: '6. سجل بسيط',
        },
        {
          p: 'دفتر بجوار الخزنة يُكتب فيه من فتحها ومتى ولماذا، يكفي لإيضاح أي خلاف لاحقًا.',
        },
        {
          h: 'نساعدكم',
        },
        {
          p: 'إن احتجتم إلى مساعدة في تغيير الرقم السري لخزنة اشتريتموها منا، أو إلى خزنة بقفل يناسب طريقة عملكم، تواصلوا معنا.',
        },
      ],
      en: [
        {
          p: 'The strongest safe protects nothing if its code is known to everyone who has passed through the office. As staff and managers change, the circle of people who know the code grows without anyone noticing. These simple rules work well in the companies and shops we serve.',
        },
        {
          h: '1. As few people as possible',
        },
        {
          p: 'Name the people who know the code: one, or two at most. If others only need to drop cash, a deposit safe lets them do it without the code.',
        },
        {
          h: '2. Change the code when',
        },
        {
          ul: [
            'Anyone who knew it leaves or moves to another department.',
            'You suspect someone saw it being entered.',
            'Maintenance or installation work took place with outsiders present.',
            'A fixed interval has passed, even if nothing happened.',
          ],
        },
        {
          h: '3. Choose a code nobody can guess',
        },
        {
          p: 'Avoid the company’s founding date, phone numbers and sequences like 1234. Never write the code on a note in a drawer or under the keyboard.',
        },
        {
          h: '4. The backup key',
        },
        {
          p: 'Keep it outside the safe, and outside the office if possible, with the owner or in another safe. Record who holds it.',
        },
        {
          h: '5. Fingerprints for named people only',
        },
        {
          p: 'On safes that take fingerprints, enrol only authorised people, and delete anyone who leaves straight away.',
        },
        {
          h: '6. A simple log',
        },
        {
          p: 'A book beside the safe recording who opened it, when and why is enough to settle any question later.',
        },
        {
          h: 'We can help',
        },
        {
          p: 'If you need help changing the code on a safe you bought from us, or a safe with a lock that suits how you work, get in touch.',
        },
      ],
    },
    products: ['uchida-full-height-fire-resistant-safe', 'uchida-deposit-safe', 'sakura-multi-lock-safe'],
    links: [
      {
        article: 'cash-safe-for-shops-and-offices',
      },
      {
        category: 'deposit-safes',
      },
      {
        page: 'contact',
      },
    ],
  },
  {
    slug: 'securing-valuables-before-summer-travel',
    date: '2027-06-10',
    title: {
      ar: 'قبل السفر في إجازة الصيف: كيف تؤمّنون مقتنيات البيت الثمينة؟',
      en: 'Before the Summer Holiday: How to Secure Your Valuables at Home',
    },
    description: {
      ar: 'قائمة مراجعة قبل السفر الطويل في الصيف: حفظ الذهب والنقود والمستندات في الخزنة، والمفتاح الاحتياطي، والبطاريات، وما تأخذونه معكم في السفر.',
      en: 'A checklist before a long summer trip: putting gold, cash and documents in the safe, the backup key, the batteries, and what to take with you.',
    },
    keywords: {
      ar: 'تأمين البيت قبل السفر، خزنة البيت في الإجازة، حفظ الذهب أثناء السفر، نصائح السفر في الصيف',
      en: 'secure home before travel, home safe while away, protect valuables on holiday',
    },
    body: {
      ar: [
        {
          p: 'مع بداية الصيف تسافر عائلات كثيرة في قطر لأسابيع طويلة، ويبقى البيت فارغًا. وقبل إغلاق الباب والانطلاق إلى المطار، تستحق المقتنيات الثمينة نصف ساعة من الترتيب.',
        },
        {
          h: 'ما يبقى في البيت يدخل الخزنة',
        },
        {
          ul: [
            'الذهب والمجوهرات التي لن تأخذوها معكم.',
            'النقود الزائدة عن حاجة السفر.',
            'العقود والصكوك والشهادات وجوازات السفر غير المستخدمة.',
            'الساعات الثمينة والأجهزة الصغيرة الغالية.',
          ],
        },
        {
          h: 'تحقّقوا من الخزنة نفسها',
        },
        {
          ul: [
            'غيّروا بطاريات القفل الرقمي قبل السفر حتى لا تنفد في غيابكم.',
            'تأكدوا أن المفتاح الاحتياطي ليس داخل الخزنة.',
            'أغلقوا الخزنة وتأكدوا من القفل بمحاولة فتحها مرة أخرى.',
          ],
        },
        {
          h: 'ما تأخذونه معكم',
        },
        {
          p: 'احملوا المجوهرات التي ستلبسونها في السفر في حقيبة اليد، لا في الحقائب المشحونة. وشنطة المجوهرات المقسّمة من الداخل تحفظها مرتبة، وتسهّل عليكم معرفة إن نقصت قطعة. وفي الفندق استخدموا خزنة الغرفة.',
        },
        {
          h: 'نسخ المستندات',
        },
        {
          p: 'احتفظوا بصور من جوازات السفر والهويات في هاتفكم أو بريدكم، ونسخة ورقية في مكان منفصل، تحسّبًا لضياع الأصل.',
        },
        {
          h: 'إن لم تكن لديكم خزنة بعد',
        },
        {
          p: 'اختاروا خزنة منزلية قبل موعد السفر بوقت كافٍ لتوصيلها وتثبيتها. التوصيل مجاني داخل قطر، ومعرضنا في سوق العين يستقبلكم لاختيارها.',
        },
      ],
      en: [
        {
          p: 'As summer begins, many families in Qatar travel for weeks at a time and the house stands empty. Before you lock the door and head to the airport, your valuables deserve half an hour of attention.',
        },
        {
          h: 'What stays at home goes in the safe',
        },
        {
          ul: [
            'Gold and jewellery you are not taking with you.',
            'Cash beyond what you need for the trip.',
            'Contracts, title deeds, certificates and passports you are not using.',
            'Fine watches and small, expensive devices.',
          ],
        },
        {
          h: 'Check the safe itself',
        },
        {
          ul: [
            'Change the digital lock’s batteries before you go so they do not die while you are away.',
            'Make sure the backup key is not inside the safe.',
            'Lock the safe and test it by trying to open it again.',
          ],
        },
        {
          h: 'What you take with you',
        },
        {
          p: 'Carry the jewellery you will wear on the trip in your hand luggage, never in checked bags. A jewellery case divided inside keeps it in order and shows at once if a piece is missing. At the hotel, use the room safe.',
        },
        {
          h: 'Copies of documents',
        },
        {
          p: 'Keep photos of passports and IDs on your phone or in your email, and a paper copy somewhere separate, in case the originals are lost.',
        },
        {
          h: 'If you do not have a safe yet',
        },
        {
          p: 'Choose a home safe early enough before you travel for it to be delivered and anchored. Delivery is free across Qatar, and our Souq Al Ein showroom is ready to help you choose.',
        },
      ],
    },
    products: ['travel-jewellery-cases', 'uchida-compact-digital-safe', 'sakura-fingerprint-safe'],
    links: [
      {
        category: 'home-safes',
      },
      {
        article: 'travel-jewellery-cases-for-weddings-and-travel',
      },
      {
        article: 'digital-safe-lock-battery',
      },
    ],
  },
  {
    slug: 'storing-exam-papers-and-school-records',
    date: '2027-06-20',
    title: {
      ar: 'حفظ أوراق الامتحانات وسجلات الطلاب في المدارس والجامعات',
      en: 'Storing Exam Papers and Student Records in Schools and Universities',
    },
    description: {
      ar: 'كيف تحفظ المدارس والجامعات ومراكز التدريب في قطر أوراق الامتحانات والشهادات وملفات الطلاب: خزائن الملفات المقاومة للحريق، والخزائن، ولوكرات الطلاب.',
      en: 'How schools, universities and training centres in Qatar can store exam papers, certificates and student files: fire-resistant filing cabinets, safes and student lockers.',
    },
    keywords: {
      ar: 'خزائن المدارس، حفظ أوراق الامتحانات، خزانة ملفات مقاومة للحريق، لوكرات مدارس في قطر',
      en: 'school safes Qatar, exam paper storage, fire-resistant filing cabinet, school lockers',
    },
    body: {
      ar: [
        {
          p: 'في موسم الامتحانات تصبح أوراق الأسئلة أثمن ما في المدرسة: تسرّب ورقة واحدة قد يلغي امتحانًا كاملًا. وطوال العام تحتفظ المدارس والجامعات بسجلات وشهادات لا يمكن تعويضها إن ضاعت أو احترقت.',
        },
        {
          h: 'أوراق الامتحانات قبل يوم الامتحان',
        },
        {
          ul: [
            'احفظوها في خزنة مقفلة لا في خزانة مكتب عادية.',
            'حدّدوا شخصين فقط يحملان الرقم السري أو المفتاح.',
            'سجّلوا كل فتح للخزنة: من فتحها ومتى.',
            'غيّروا الرقم السري قبل كل موسم امتحانات.',
          ],
        },
        {
          h: 'السجلات والشهادات',
        },
        {
          p: 'ملفات الطلاب ونتائجهم ونسخ الشهادات تُحفظ سنوات طويلة. خزائن الملفات المقاومة للحريق تحمي الورق من الحرارة، وتُقفل بمفتاح لكل درج، فيصل كل قسم إلى ملفاته فقط.',
        },
        {
          h: 'ملفات الإدارة اليومية',
        },
        {
          p: 'للملفات المستخدمة يوميًا، خزائن الملفات الحديدية العادية بدرجين إلى خمسة أدراج، مع قفل، توزّع على المكاتب والأقسام.',
        },
        {
          h: 'لوكرات الطلاب والمعلمين',
        },
        {
          p: 'لوكرات حديدية من باب واحد إلى ستة أبواب في العمود، يحفظ فيها الطلاب كتبهم وأغراضهم، والمعلمون أوراقهم وأجهزتهم.',
        },
        {
          h: 'عرض سعر للمدرسة كاملة',
        },
        {
          p: 'أرسلوا لنا عدد الطلاب والأقسام وحجم الأرشيف، ونجهّز لكم عرض سعر شاملًا للخزائن وخزائن الملفات واللوكرات، مع التوصيل المجاني داخل قطر.',
        },
      ],
      en: [
        {
          p: 'In exam season, question papers become the most valuable thing in a school: a single leaked paper can cancel a whole exam. All year round, schools and universities also keep records and certificates that cannot be replaced if they are lost or burnt.',
        },
        {
          h: 'Exam papers before exam day',
        },
        {
          ul: [
            'Keep them in a locked safe, not an ordinary office cupboard.',
            'Give the code or key to two people only.',
            'Log every opening of the safe: who and when.',
            'Change the code before every exam season.',
          ],
        },
        {
          h: 'Records and certificates',
        },
        {
          p: 'Student files, results and copies of certificates are kept for many years. Fire-resistant filing cabinets protect paper from heat, and lock with a key on every drawer, so each department reaches only its own files.',
        },
        {
          h: 'Day-to-day administration files',
        },
        {
          p: 'For files used every day, standard steel filing cabinets with two to five lockable drawers, spread across offices and departments.',
        },
        {
          h: 'Lockers for students and teachers',
        },
        {
          p: 'Steel lockers from one to six doors per column, where students keep books and belongings, and teachers their papers and devices.',
        },
        {
          h: 'A quotation for the whole school',
        },
        {
          p: 'Send us the number of students and departments and the size of your archive, and we will prepare a full quotation for safes, filing cabinets and lockers, with free delivery across Qatar.',
        },
      ],
    },
    products: [
      'uchida-fire-resistant-records-cabinet',
      'sakura-fire-resistant-filing-cabinet',
      'godrej-six-door-steel-locker',
    ],
    links: [
      {
        category: 'filing-cabinets',
      },
      {
        category: 'steel-lockers',
      },
      {
        article: 'filing-cabinets-for-offices',
      },
    ],
  },
  {
    slug: 'choosing-the-right-safe-size',
    date: '2027-06-30',
    title: {
      ar: 'ما مقاس الخزنة المناسب لكم؟ طريقة عملية لتقدير المساحة قبل الشراء',
      en: 'What Size Safe Do You Need? A Practical Way to Work It Out Before You Buy',
    },
    description: {
      ar: 'طريقة بسيطة لتقدير مقاس الخزنة المناسب للبيت أو المكتب: جمع ما ستحفظونه وقياسه، وترك مساحة للمستقبل، وقياس مكان الخزنة وطريق توصيلها.',
      en: 'A simple way to work out the right safe size for a home or office: gather and measure what you will keep, allow room to grow, and measure the spot and the delivery route.',
    },
    keywords: {
      ar: 'مقاس الخزنة، حجم الخزنة المناسب، خزنة صغيرة أم كبيرة، اختيار حجم التجوري',
      en: 'safe size guide, what size safe, small or large safe, choose safe size',
    },
    body: {
      ar: [
        {
          p: '«أي مقاس أحتاج؟» من أكثر الأسئلة التي تصلنا. والجواب لا يُعرف بالتخمين، بل بخطوات بسيطة تقومون بها في البيت أو المكتب قبل زيارة المعرض.',
        },
        {
          h: 'الخطوة 1: اجمعوا ما ستحفظونه',
        },
        {
          p: 'ضعوا على طاولة كل ما تنوون حفظه: علب المجوهرات، والنقود، وملفات المستندات، وجوازات السفر، والساعات. ولا تنسوا الأشياء التي تبقى عادة خارج الخزنة لأنها لا تتسع لها.',
        },
        {
          h: 'الخطوة 2: قيسوا المساحة',
        },
        {
          p: 'رتّبوها كما سترتّبونها داخل الخزنة، وقيسوا العرض والعمق والارتفاع. انتبهوا لملفات A4 والعلب الأصلية للساعات، فهي تحدد العمق والارتفاع الأدنى.',
        },
        {
          h: 'الخطوة 3: أضيفوا مساحة للمستقبل',
        },
        {
          p: 'ما تملكونه اليوم سيزيد. ننصح بخزنة أكبر بمقدار واضح مما قستموه، فتغيير الخزنة بعد عامين أكلف بكثير من اختيار مقاس أكبر قليلًا الآن.',
        },
        {
          h: 'الخطوة 4: قيسوا المكان',
        },
        {
          ul: [
            'عرض المكان وعمقه وارتفاعه، داخل خزانة الملابس أو في الغرفة.',
            'المساحة اللازمة لفتح الباب بالكامل.',
            'قدرة الأرضية على تحمّل الوزن، خصوصًا للخزائن الكبيرة.',
          ],
        },
        {
          h: 'الخطوة 5: قيسوا الطريق',
        },
        {
          p: 'الأبواب والممرات والدرج والمصعد التي ستمرّ منها الخزنة. وإن كان البيت أو المكتب في طابق علوي، أخبرونا قبل الشراء لنتأكد من إمكانية التوصيل.',
        },
        {
          h: 'أرسلوا لنا القياسات',
        },
        {
          p: 'أرسلوا لنا ما قستموه وصورة المكان على واتساب، ونرشّح لكم المقاس المناسب من الخزائن المتوفرة.',
        },
      ],
      en: [
        {
          p: '“What size do I need?” is one of the questions we hear most. The answer does not come from guessing, but from a few simple steps you can take at home or in the office before visiting the showroom.',
        },
        {
          h: 'Step 1: Gather what you will keep',
        },
        {
          p: 'Put everything you plan to store on a table: jewellery boxes, cash, document folders, passports, watches. Include the things that usually stay outside the safe because they do not fit.',
        },
        {
          h: 'Step 2: Measure it',
        },
        {
          p: 'Arrange it as you would inside the safe, and measure the width, depth and height. Watch out for A4 folders and original watch boxes, which set the minimum depth and height.',
        },
        {
          h: 'Step 3: Add room for the future',
        },
        {
          p: 'What you own today will grow. We recommend a safe clearly larger than what you measured: replacing a safe in two years costs far more than choosing a slightly larger one now.',
        },
        {
          h: 'Step 4: Measure the spot',
        },
        {
          ul: [
            'The width, depth and height of the space, in a wardrobe or the room.',
            'The space needed for the door to open fully.',
            'Whether the floor can take the weight, especially for large safes.',
          ],
        },
        {
          h: 'Step 5: Measure the route',
        },
        {
          p: 'The doors, corridors, stairs and lift the safe will pass through. If the home or office is on an upper floor, tell us before you buy so we can confirm delivery is possible.',
        },
        {
          h: 'Send us the measurements',
        },
        {
          p: 'Send us your measurements and a photo of the spot on WhatsApp, and we will recommend the right size from the safes we carry.',
        },
      ],
    },
    products: ['uchida-compact-digital-safe', 'uchida-black-digital-safe', 'uchida-full-height-fire-resistant-safe'],
    links: [
      {
        category: 'home-safes',
      },
      {
        article: 'upper-floor-safe-delivery',
      },
      {
        article: 'choosing-a-home-safe',
      },
    ],
  },
]
