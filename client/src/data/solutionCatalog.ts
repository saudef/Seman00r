import type { Bilingual } from "./productAchievements";

export type SolutionCapability = {
  title: Bilingual;
  description: Bilingual;
  points: Bilingual[];
};
export type SolutionPage = {
  slug: string;
  focusIndex: number;
  title: Bilingual;
  headline: Bilingual;
  intro: Bilingual;
  audience: Bilingual[];
  capabilities: SolutionCapability[];
  availability: Bilingual;
  cooperation: Bilingual[];
};

export const solutionCatalog: SolutionPage[] = [
  {
    slug: "intelligent-learning",
    focusIndex: 0,
    title: { ar: "التعليم الإلكتروني الذكي", en: "Intelligent e-learning" },
    headline: {
      ar: "منصة تتفاعل، وكتاب يفهم، ومجتمع يصنع المعرفة.",
      en: "A platform that engages, a book that understands, a community that creates.",
    },
    intro: {
      ar: "تجمع سيمانور خبرة تتجاوز 30 عاماً في تقنيات التعليم مع إمكانات الذكاء الاصطناعي. منصة سيمانور هي المنتج الرئيسي للشركة، وإلى جانبها الكتاب الذكي المخصص ومحركات إنتاج المحتوى: قدرات تربط التعلم بالممارسة والتخصيص والمشاركة في صناعة المعرفة.",
      en: "Semanoor combines more than 30 years of educational technology experience with the possibilities of AI. Its flagship learning platform, personalized smart book and content production engines connect learning with practice, personalization and participation in creating knowledge.",
    },
    audience: [
      { ar: "الأفراد والمتعلمون", en: "Individuals & learners" },
      { ar: "المدارس والمعلمون", en: "Schools & educators" },
      { ar: "مراكز التدريب", en: "Training centres" },
      { ar: "الدول ووزارات التعليم", en: "Countries & education ministries" },
    ],
    capabilities: [
      {
        title: {
          ar: "منصة سيمانور التعليمية",
          en: "The Semanoor learning platform",
        },
        description: {
          ar: "المنتج الرئيسي للشركة: منصة للتعليم والتدريب تجمع تقنيات ذكية وتفاعلية لخدمة الأفراد والجهات التعليمية والتدريبية.",
          en: "The company’s flagship: a learning and training platform combining intelligent and interactive technologies for individuals, education institutions and training organizations.",
        },
        points: [
          {
            ar: "تجربة تعليم وتدريب تفاعلية",
            en: "Interactive learning & training",
          },
          {
            ar: "محتوى وتقنيات في تجربة مترابطة",
            en: "Content & technology in a connected experience",
          },
          {
            ar: "نطاق يخدم المتعلم والمؤسسة",
            en: "Serving both learners and institutions",
          },
        ],
      },
      {
        title: { ar: "الكتاب الذكي المخصص", en: "The personalized smart book" },
        description: {
          ar: "جعلت سيمانور للكتاب عقلاً تعليمياً وتربوياً: يتعرف إلى احتياجات المتعلم، ويتكيف مع قدراته وإمكاناته، ويتابع مساره ليقدم المعرفة بأسلوب أقرب إليه. يجمع هذا التوجه خبرة التعليم المتراكمة مع الذكاء الاصطناعي؛ ومن أعمال الشركة عرض مفهوم الكتاب الذكي على الجانب السوري.",
          en: "Semanoor gives the book an educational mind: one that recognizes learner needs, adapts to their abilities and follows their learning journey to present knowledge in a more relevant way. This approach combines accumulated education experience with AI; the smart-book concept has also been presented to the Syrian side.",
        },
        points: [
          {
            ar: "شرح يتكيف مع احتياج المتعلم",
            en: "Explanation adapted to learner needs",
          },
          {
            ar: "خبرة تعليمية وتربوية توجه التفاعل",
            en: "Educational expertise guiding interaction",
          },
          {
            ar: "متابعة التعلم لتخصيص التجربة",
            en: "Following learning to personalize the experience",
          },
        ],
      },
      {
        title: { ar: "محركات إنتاج المحتوى", en: "Content production engines" },
        description: {
          ar: "محركات متطورة عززتها سيمانور بالذكاء الاصطناعي في إصدارها الجديد، لتوسيع قدرة المجتمع التعليمي على تطوير المحتوى وتخصيصه لاحتياجات الطلاب وقدراتهم المختلفة. تدعم المشاركة مهارات التعلم والتقنية وصناعة المحتوى المطلوبة للمستقبل.",
          en: "Advanced production engines enhanced with AI in their new edition, expanding the education community’s ability to develop and personalize content for different learner needs and abilities. Participation supports learning, technical and content creation skills for the future.",
        },
        points: [
          {
            ar: "مشاركة المجتمع التعليمي في صناعة المحتوى",
            en: "Education-community participation in content creation",
          },
          {
            ar: "تطوير وتخصيص المحتوى",
            en: "Content development & personalization",
          },
          {
            ar: "تنمية المهارات التقنية والتعليمية",
            en: "Supporting technical & learning skills",
          },
        ],
      },
    ],
    availability: {
      ar: "منصة سيمانور هي المنتج التعليمي الحالي للشركة. للتعرف إلى تجربة المنصة والكتاب الذكي وإصدارات محركات المحتوى المناسبة لك، تواصل مع الفريق؛ تحدد طريقة الوصول والإتاحة بحسب المنتج والإصدار والجهة المستفيدة.",
      en: "The Semanoor platform is the company’s current learning product. Contact the team to discuss the platform, smart book and suitable content-engine editions. Access and availability depend on the product, edition and intended users.",
    },
    cooperation: [
      {
        ar: "شاركنا احتياج التعلم أو التدريب",
        en: "Share your learning or training need",
      },
      {
        ar: "ناقش تجربة المنتج والإصدار المناسب",
        en: "Discuss the suitable product and edition",
      },
      {
        ar: "حدد نطاق الاستخدام مع الفريق",
        en: "Define the scope of use with the team",
      },
    ],
  },
  {
    slug: "education-development",
    focusIndex: 1,
    title: {
      ar: "مشاريع التعليم التنموية",
      en: "Education development projects",
    },
    headline: {
      ar: "تقنية التعليم في خدمة قدرة تبقى في المجتمع.",
      en: "Educational technology serving lasting community capability.",
    },
    intro: {
      ar: "تقدم سيمانور مشاريع تعليمية للدول النامية بالتعاون مع الجهات المانحة المحلية والدولية. يرتبط هذا المحور بقدرات الشركة في المنصات والكتاب الذكي وصناعة المحتوى، وبفهم السياق الذي سيستخدم فيه الحل، حتى تصبح المعرفة قدرة قابلة للنمو.",
      en: "Semanoor develops education projects for developing countries in collaboration with local and international donors. This focus area connects its platform, smart-book and content capabilities with the context in which a solution will be used, helping knowledge become a capability that can grow.",
    },
    audience: [
      { ar: "الدول ووزارات التعليم", en: "Countries & education ministries" },
      {
        ar: "الجهات المانحة المحلية والدولية",
        en: "Local & international donors",
      },
      {
        ar: "المؤسسات التعليمية والتنموية",
        en: "Education & development institutions",
      },
    ],
    capabilities: [
      {
        title: {
          ar: "منصات ومحتوى للمنظومات التعليمية",
          en: "Platforms & content for education systems",
        },
        description: {
          ar: "توظيف قدرات منصة سيمانور وتقنيات إنتاج المحتوى في مشاريع تعليمية تربط المتعلم والمعلم والمؤسسة ضمن سياق المشروع.",
          en: "Applying Semanoor’s platform and content production capabilities to education projects that connect learners, educators and institutions in their project context.",
        },
        points: [
          {
            ar: "قدرات التعليم والتدريب التفاعلي",
            en: "Interactive learning & training capabilities",
          },
          {
            ar: "محتوى يطور بحسب الاحتياج",
            en: "Content developed around needs",
          },
        ],
      },
      {
        title: {
          ar: "التخصيص وتمكين المجتمع التعليمي",
          en: "Personalization & community enablement",
        },
        description: {
          ar: "الاستفادة من الكتاب الذكي ومحركات المحتوى لفتح مسارات تخصيص المعرفة، وتمكين المشاركين من تطوير محتوى يلائم احتياجات الطلاب وقدراتهم.",
          en: "Using smart-book and content engines to explore knowledge personalization and enable participants to develop content for diverse learner needs and abilities.",
        },
        points: [
          {
            ar: "تكييف المحتوى مع المتعلمين",
            en: "Adapting content to learners",
          },
          {
            ar: "المشاركة في تطوير المعرفة والمهارات",
            en: "Participation in developing knowledge & skills",
          },
        ],
      },
      {
        title: {
          ar: "تعاون يبدأ من السياق",
          en: "Collaboration grounded in context",
        },
        description: {
          ar: "مناقشة أهداف التعليم والجهات المستفيدة وأدوار المانحين والمؤسسات المحلية قبل تحديد الحل ونطاق المشروع، مع اهتمام ببناء القدرة والاستدامة.",
          en: "Discussing education goals, beneficiaries and the roles of donors and local institutions before defining a solution and project scope, with attention to capability building and sustainability.",
        },
        points: [
          {
            ar: "فهم الاحتياج والجهات المعنية",
            en: "Understanding needs & stakeholders",
          },
          {
            ar: "تحديد أدوار التعاون ونطاق التنفيذ",
            en: "Defining collaboration roles & delivery scope",
          },
        ],
      },
    ],
    availability: {
      ar: "يمكن بدء مناقشة احتياج مشروع تعليمي مع سيمانور. يحدد نطاق الحل وأدوار الجهات وطريقة الوصول إلى المنتجات وفق كل مشروع؛ ليست الصفحة إعلاناً عن مشروع مكتمل أو عن تمويل مضمون.",
      en: "You can begin a discussion about an education project with Semanoor. Solution scope, stakeholder roles and access to products are defined for each project. This page does not announce a completed deployment or guaranteed funding.",
    },
    cooperation: [
      {
        ar: "حدد المجتمع أو الجهة المستفيدة",
        en: "Identify the community or beneficiaries",
      },
      {
        ar: "شاركنا أهداف المشروع وسياقه",
        en: "Share the project goals and context",
      },
      {
        ar: "ناقش نطاق الحل وأدوار الشركاء",
        en: "Discuss scope and stakeholder roles",
      },
    ],
  },
  {
    slug: "startup-studio",
    focusIndex: 2,
    title: {
      ar: "ستوديو سيمانور للشركات الناشئة ورواد الأعمال",
      en: "Semanoor Studio for Startups & Entrepreneurs",
    },
    headline: {
      ar: "من خبرة التعليم إلى صناعة منتجات وشركات ذات معنى.",
      en: "From educational expertise to products and ventures with purpose.",
    },
    intro: {
      ar: "يجمع ستوديو سيمانور خلاصة تجارب الشركة وتقنياتها ومحركاتها الذكية، ويضعها في خدمة رواد الأعمال وفرق المنتجات. يربط خبرة التعليم وصناعة المحتوى بفرص تطوير حلول في التعليم الذكي والتقنية المالية والألعاب الإلكترونية والنشر الإلكتروني والذكاء الاصطناعي وحلول الأعمال. ويتكامل دوره مع محاور سيمانور: قدرات تعليمية تخدم المنصة والكتاب الذكي، وتقنيات يمكن توظيفها في المشاريع التعليمية التنموية، وخبرة تصل التقنية المالية بالتربية الرقمية في جواني؛ لتتحول المعرفة المتراكمة إلى منتجات تخدم احتياجات الإنسان والمجتمع.",
      en: "Semanoor’s studio brings the company’s accumulated experience, technologies and intelligent engines to entrepreneurs and product teams. It connects education and content creation expertise with opportunities in intelligent learning, fintech, electronic games, e-publishing, AI and business solutions. Its role complements Semanoor’s focus areas: educational capabilities supporting the platform and smart book, technologies that can serve education development projects, and experience connecting fintech with digital parenting in Jawani. Established knowledge becomes a foundation for products serving people and communities.",
    },
    audience: [
      {
        ar: "رواد الأعمال والشركات الناشئة",
        en: "Entrepreneurs & startups",
      },
      {
        ar: "فرق المنتجات وصنّاع المحتوى",
        en: "Product teams & content creators",
      },
      {
        ar: "الجهات التعليمية والتدريبية وأصحاب الاحتياجات الرقمية",
        en: "Education, training & organizations with digital needs",
      },
    ],
    capabilities: [
      {
        title: {
          ar: "محركات سيمانور لبناء المنتجات",
          en: "Semanoor’s engines for building products",
        },
        description: {
          ar: "يوظف الاستوديو محركات إنتاج المحتوى والتفاعل والتخصيص، وخبرة سيمانور في تقنيات التعليم، لبناء حلول تنطلق من مشكلة واضحة. قاعدة تقنية ومعرفية تربط التعليم والنشر والألعاب والذكاء الاصطناعي، وتتيح مناقشة القدرة المناسبة لكل منتج بدلاً من البدء من الصفر.",
          en: "The studio draws on content production, interaction and personalization engines alongside Semanoor’s educational technology expertise to develop solutions around clear problems. This shared technological and knowledge base connects learning, publishing, games and AI, helping teams identify suitable capabilities rather than starting from scratch.",
        },
        points: [
          {
            ar: "تقنيات ومحركات متراكمة تدعم تطوير المنتج",
            en: "Established technologies and engines supporting product development",
          },
          {
            ar: "اختيار القدرة المناسبة للاحتياج",
            en: "Matching capabilities to the need",
          },
        ],
      },
      {
        title: {
          ar: "V Makkah: ممارسة تتجاوز الشرح",
          en: "V Makkah: practice beyond explanation",
        },
        description: {
          ar: "منتج يوظف تقنيات الواقع الافتراضي والواقع المعزز والتفاعل لتدريب زوار المشاعر المقدسة على أداء المناسك. يوضح كيف تمتد تقنيات الألعاب لدى سيمانور إلى تجارب تدريبية تمارس المعرفة بدلاً من الاكتفاء بقراءتها.",
          en: "A product using virtual reality, augmented reality and interaction to train visitors to the holy sites in performing pilgrimage rituals. It illustrates how Semanoor’s game technologies extend into training experiences that put knowledge into practice rather than only presenting it.",
        },
        points: [
          {
            ar: "واقع افتراضي وواقع معزز",
            en: "Virtual & augmented reality",
          },
          {
            ar: "تفاعل في تجربة تدريبية",
            en: "Interaction within a training experience",
          },
        ],
      },
      {
        title: {
          ar: "رواد الأعمال عند تقاطع المعرفة والتقنية",
          en: "Entrepreneurs at the intersection of knowledge and technology",
        },
        description: {
          ar: "يمنح الاستوديو مناقشة الفكرة أساساً من خبرات سيمانور في التعليم الذكي والتقنية المالية والألعاب الإلكترونية والنشر الإلكتروني والذكاء الاصطناعي وحلول الأعمال. ويمتد توظيف تقنيات الألعاب إلى برامج تعليمية وتدريبية وطبية وترفيهية؛ فيُبحث الاستخدام المستهدف والتقنيات الملائمة ونطاق تطوير المنتج مع الفريق.",
          en: "The studio grounds product discussions in Semanoor’s experience across intelligent learning, fintech, electronic games, e-publishing, AI and business solutions. Game technologies also extend into education, training, medical and entertainment applications. The team considers the intended use, suitable technologies and product development scope together.",
        },
        points: [
          {
            ar: "فكرة تنطلق من احتياج واضح",
            en: "Ideas grounded in clear needs",
          },
          {
            ar: "خبرات متعددة في مسار منتج واحد",
            en: "Multiple areas of expertise informing one product",
          },
        ],
      },
    ],
    availability: {
      ar: "ابدأ من الاحتياج أو الفكرة، وتعرّف إلى منتجات الاستوديو وقدراته التقنية، ومنها V Makkah. يحدد فريق سيمانور معك التقنيات المناسبة ونطاق تطوير المنتج ونوع التعاون، وتوضح إتاحة كل منتج بحسب إصداره ومرحلة إطلاقه.",
      en: "Start with a need or idea and explore the studio’s products and technological capabilities, including V Makkah. The Semanoor team works with you to define suitable technologies, product development scope and the form of collaboration. Access to each product is clarified according to its edition and launch stage.",
    },
    cooperation: [
      {
        ar: "شاركنا المشكلة والفئة المستفيدة",
        en: "Share the problem and intended users",
      },
      {
        ar: "ناقش محركات سيمانور والتقنيات الملائمة",
        en: "Discuss suitable Semanoor engines and technologies",
      },
      {
        ar: "حدد نطاق المنتج ونوع التعاون مع الفريق",
        en: "Define the product scope and collaboration with the team",
      },
    ],
  },
  {
    slug: "jawani",
    focusIndex: 3,
    title: {
      ar: "محفظة جواني المالية والتربية الرقمية",
      en: "Jawani financial wallet & digital parenting",
    },
    headline: {
      ar: "تجربة مالية رقمية تنمو مع الأبناء، وتشارك فيها الأسرة.",
      en: "A digital financial experience that grows with young people and includes families.",
    },
    intro: {
      ar: "جواني منتج يجمع بين التقنية المالية والتربية الرقمية، موجه لأولياء الأمور وأبنائهم من سن 6 إلى 24 عاماً. تضع سيمانور دور الأسرة والوعي والمسؤولية في قلب هذا التقاطع بين المال والتقنية والتربية.",
      en: "Jawani brings fintech and digital parenting together for parents and their children aged 6 to 24. Semanoor places family involvement, awareness and responsibility at the centre of this intersection of finance, technology and education.",
    },
    audience: [
      { ar: "أولياء الأمور", en: "Parents & guardians" },
      {
        ar: "الأبناء من 6 إلى 24 عاماً",
        en: "Children & young people aged 6 to 24",
      },
      {
        ar: "الجهات المهتمة بالتربية الرقمية",
        en: "Organizations focused on digital parenting",
      },
    ],
    capabilities: [
      {
        title: {
          ar: "تقاطع المحفظة المالية والتربية",
          en: "Where a financial wallet meets parenting",
        },
        description: {
          ar: "يجمع تعريف جواني بين المحفظة المالية والتربية الرقمية في منتج واحد، بدلاً من التعامل مع التجربة المالية والتعلم الرقمي كمجالين منفصلين.",
          en: "Jawani’s concept brings a financial wallet and digital parenting into one product rather than treating financial experiences and digital learning as separate fields.",
        },
        points: [
          {
            ar: "تقنية مالية في سياق تربوي",
            en: "Fintech in an educational context",
          },
          {
            ar: "وعي ومسؤولية في العالم الرقمي",
            en: "Awareness & responsibility in the digital world",
          },
        ],
      },
      {
        title: {
          ar: "الأسرة جزء من التجربة",
          en: "Families as part of the experience",
        },
        description: {
          ar: "يستهدف المنتج أولياء الأمور والأبناء معاً، بحيث يكون دور الأسرة حاضراً في العلاقة مع العالم المالي الرقمي، لا مجرد نشاط منفصل للابن.",
          en: "The product is designed for parents and young people together, making family involvement part of their relationship with the digital financial world rather than a separate activity for the child.",
        },
        points: [
          {
            ar: "أولياء الأمور والأبناء في تعريف المنتج",
            en: "Parents & children within the product concept",
          },
          {
            ar: "علاقة تربوية أكثر وعياً",
            en: "A more informed parenting relationship",
          },
        ],
      },
      {
        title: {
          ar: "التربية عبر مراحل نمو الأبناء",
          en: "Parenting across stages of growth",
        },
        description: {
          ar: "يمتد الجمهور المستهدف من سن 6 إلى 24 عاماً. يعبّر هذا النطاق عن الفئات التي صُمم المنتج لخدمتها؛ أما شروط الحساب والصلاحيات والخصائص المالية فتحددها مواصفات المنتج وإتاحته.",
          en: "The intended audience ranges from ages 6 to 24. This describes whom the product is designed to serve; account eligibility, permissions and financial functionality are determined by its specifications and availability.",
        },
        points: [
          {
            ar: "نطاق عمري من 6 إلى 24 عاماً",
            en: "An intended age range of 6 to 24",
          },
          {
            ar: "مراعاة اختلاف مراحل النمو",
            en: "Considering different stages of growth",
          },
        ],
      },
    ],
    availability: {
      ar: "للتعرف إلى جواني ومرحلة إتاحتها والخصائص المناسبة للأسرة، تواصل مع الفريق. لا تقدم هذه الصفحة فتح حساب أو تنفيذ عملية مالية؛ الإتاحة وشروط الاستخدام والصلاحيات تعرف من خلال المنتج المعتمد.",
      en: "Contact the team to learn about Jawani, its availability and suitable family features. This page does not open accounts or perform financial transactions; access, terms and permissions are defined by the approved product.",
    },
    cooperation: [
      {
        ar: "تعرّف إلى فكرة المنتج والفئة المستهدفة",
        en: "Explore the product concept & intended users",
      },
      {
        ar: "استوضح الإتاحة والخصائص المعتمدة",
        en: "Ask about availability & approved features",
      },
      {
        ar: "ناقش احتياج الأسرة أو الجهة",
        en: "Discuss your family or organization’s needs",
      },
    ],
  },
];
