import {
  safeImageUrl,
  safeSourceUrl,
  type MediaRecord,
  type SiteVisuals,
} from "./mediaTypes";
export type Language = "ar" | "en";

/**
 * Editorial status vocabulary used across records. Presentation reads these
 * values to label provisional content; it never infers approval on its own.
 */
export type EditorialStatus = "final" | "draft";
export type MilestoneStatus = "thematic" | "approved";
export type ProjectKind = "illustrative" | "case-study";

export type FocusArea = {
  number: string;
  title: string;
  label: string;
  description: string;
  outcomes: string[];
};

export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
  /** ISO date or empty while unapproved */
  date: string;
  status: MilestoneStatus;
};

export type Metric = {
  value: string;
  label: string;
  note: string;
};

export type Stage = { title: string; description: string };

export type ExplorerPath = {
  title: string;
  description: string;
  steps: string[];
};

export type LocaleContent = {
  nav: {
    home: string;
    story: string;
    ecosystem: string;
    approach: string;
    timeline: string;
    impact: string;
    insights: string;
    contact: string;
    studio: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    signal: string;
    domains: string[];
    labTitle: string;
    labNote: string;
    selected: string;
    stages: string[];
    focusLabel: string;
    fieldsLabel: string;
    filmLabel: string;
    filmPlay: string;
    filmNote: string;
    scrollHint: string;
  };
  features: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: { title: string; description: string; value: string }[];
  };
  story: {
    overline: string;
    title: string;
    lead: string;
    body: string;
    principles: { title: string; description: string }[];
  };
  ecosystem: {
    overline: string;
    title: string;
    intro: string;
    areaLink: string;
    areas: FocusArea[];
  };
  approach: {
    overline: string;
    title: string;
    accent: string;
    intro: string;
    stagesNote: string;
    stages: Stage[];
    distinctionsTitle: string;
  };
  explorer: {
    overline: string;
    title: string;
    intro: string;
    note: string;
    pathLabel: string;
    stepsLabel: string;
    cta: string;
    paths: ExplorerPath[];
  };
  timeline: {
    overline: string;
    title: string;
    intro: string;
    note: string;
    entries: TimelineEntry[];
  };
  impact: {
    overline: string;
    title: string;
    lead: string;
    note: string;
    metrics: Metric[];
    projectsTitle: string;
    projectsNote: string;
    projects: {
      title: string;
      description: string;
      tag: string;
      kind: ProjectKind;
    }[];
    archiveTitle: string;
    archiveIntro: string;
    archiveLink: string;
  };
  insights: {
    overline: string;
    title: string;
    intro: string;
    readLabel: string;
    statusFinal: string;
    statusDraft: string;
    cards: {
      category: string;
      title: string;
      description: string;
      body: string;
      status: EditorialStatus;
    }[];
  };
  contact: {
    overline: string;
    title: string;
    body: string;
    partnership: string;
    emailLabel: string;
    socialLabel: string;
    studioLabel: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      note: string;
    };
  };
  footer: {
    description: string;
    company: string;
    rights: string;
    placeholder: string;
    studioLink: string;
  };
  studio: {
    eyebrow: string;
    title: string;
    intro: string;
    localOnly: string;
    language: string;
    export: string;
    import: string;
    save: string;
    reset: string;
    raw: string;
    saved: string;
    invalid: string;
    back: string;
  };
};

export type SiteContent = {
  visuals: SiteVisuals;
  media: { items: MediaRecord[] };
  brand: {
    shortName: string;
    legalName: string;
    email: string;
    city: string;
  };
  social: {
    companyX: string;
    companyLinkedIn: string;
    companyInstagram: string;
    companyYoutube: string;
    presidentLinkedIn: string;
    presidentX: string;
  };
  ar: LocaleContent;
  en: LocaleContent;
};

export const defaultSiteContent: SiteContent = {
  brand: {
    shortName: "سيمانور",
    legalName: "شركة التعليم والتدريب الإلكتروني",
    email: "info@semanoor.com",
    city: "الرياض، المملكة العربية السعودية",
  },
  social: {
    companyX: "https://x.com/SemanoorKSA",
    companyLinkedIn: "",
    companyInstagram: "",
    companyYoutube: "",
    presidentLinkedIn: "",
    presidentX: "",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      story: "الرؤية",
      ecosystem: "محاورنا",
      timeline: "المسيرة",
      impact: "الأثر",
      insights: "الرؤى",
      contact: "تواصل",
      studio: "استوديو المحتوى",
      approach: "نهجنا",
    },
    hero: {
      eyebrow: "سيمانور · مختبر الابتكار وصناعة الشركات",
      title: "نمنح المعرفة ذكاءً،",
      accent: "ونحوّل الابتكار إلى أثر.",
      description:
        "مختبر للابتكار وصناعة الشركات يضع التعليم الإلكتروني الذكي في قلب عمله. أربعة محاور، وستة مجالات للاستكشاف، ومسار واحد: من الفكرة إلى الحل، ومن الحل إلى شركة.",
      primaryCta: "ابدأ شراكة",
      secondaryCta: "استكشف المحاور",
      signal: "حيث يلتقي التعلم الذكي بالابتكار، وتبدأ إمكانات جديدة",
      domains: [
        "التعليم الذكي",
        "التقنية المالية",
        "ريادة الأعمال وصناعة الشركات",
        "الذكاء الاصطناعي",
        "النشر الإلكتروني",
        "الألعاب الإلكترونية",
      ],
      labTitle: "نواة الابتكار",
      labNote: "خريطة تفاعلية للتخصصات المساندة · اختر نقطة لاستكشاف الروابط",
      selected: "مجال الاستكشاف",
      stages: ["استكشاف", "نموذج أولي", "حل", "شركة / أثر"],
      focusLabel: "أربعة محاور · ما نعمل عليه",
      fieldsLabel: "ستة مجالات استكشاف · أين نبحث",
      filmLabel: "الفيديو التعريفي · 30 ثانية",
      filmPlay: "شغّل الفيديو",
      filmNote:
        "يُشغَّل بالصوت عند الطلب. فيديو تعريفي معتمد بالعربية والإنجليزية.",
      scrollHint: "مرّر للأسفل",
    },
    story: {
      overline: "اتجاهنا",
      title: "التعليم الذكي أولاً؛ والابتكار مساحة لبناء المستقبل.",
      lead: "سيمانور هي علامة شركة التعليم والتدريب الإلكتروني: مختبر للابتكار وبناء المشاريع يضع التعليم الإلكتروني الذكي في قلب عمله، ويحوّل المعرفة والتقنية إلى إمكانات قابلة للنمو.",
      body: "نبدأ من حاجة إنسانية واضحة: كيف يصبح التعلم أكثر فاعلية، وكيف تتحول التقنية إلى قدرة مستدامة؟ نصل المحتوى التفاعلي والمنصات والذكاء الاصطناعي بمشاريع تعليمية، ثم نستكشف الأفكار ونختبرها ونطوّرها عبر استوديو بناء المشاريع. وتمتد رؤيتنا من التعليم الذكي إلى مشاريع التعليم التنموية للدول النامية بالتعاون مع الجهات المانحة المحلية والدولية، مروراً بالتربية الرقمية التي تضع الأسرة والناشئة في قلب التحول. نستشرف آفاق الذكاء الفائق بعين مسؤولة، ونبحث أثر التحولات القادمة في التعلم والقدرة البشرية، مع إبقاء الإنسان والحوكمة في قلب رؤيتنا.",
      principles: [
        {
          title: "الإنسان أولاً",
          description:
            "نصمم التقنية لتوسّع قدرة المتعلم والمعلّم والأسرة وصانع القرار على الفهم والمشاركة والعمل، مع احترام السياق والخصوصية والاختيار البشري.",
        },
        {
          title: "تعلم ذكي ذو معنى",
          description:
            "نربط التكيف والبيانات والمحتوى بتجارب تعلم أوضح وأكثر إنصافاً وقابلية للتحسن، بحيث يخدم الذكاء جودة القرار والتجربة التعليمية.",
        },
        {
          title: "استشراف مسؤول",
          description:
            "نقرأ التحولات التقنية بعين نقدية، ونحوّل ما نتعلمه منها إلى خيارات تدعم الإنسان والأثر المستدام، مع إبقاء المخاطر والحوكمة ضمن السؤال منذ البداية.",
        },
      ],
    },
    ecosystem: {
      overline: "منظومة سيمانور",
      title: "أربعة محاور. أفق واحد.",
      intro:
        "التعليم الإلكتروني الذكي أساس المنظومة. وتمتد منه مشاريع التعليم التنموية، وستوديو سيمانور للشركات الناشئة، وجواني؛ أربعة أنشطة متصلة تحوّل المعرفة إلى ابتكار وأثر مستدام.",
      areas: [
        {
          number: "01",
          label: "التعليم والتقنية",
          title: "التعليم الإلكتروني الذكي",
          description:
            "نبني تجارب تعلم تتكيف مع احتياجات المتعلم، ومحتوى تفاعلياً، وأدوات تساعد المؤسسات على تصميم مسارات تعلم أكثر دقة وإنصافاً وفاعلية؛ من فهم السياق إلى تحسين التجربة وقياس التقدم.",
          outcomes: ["تعلم مخصص", "محتوى تفاعلي", "مسارات تعلم قابلة للقياس"],
        },
        {
          number: "02",
          label: "الأثر التنموي",
          title: "مشاريع التعليم التنموية",
          description:
            "نطوّر مشاريع تعليمية تخدم الدول النامية بالتعاون مع الجهات المانحة المحلية والدولية، مع ربط التصميم بالسياق المحلي، وبناء القدرة، والتشغيل، وقياس الأثر بما يحفظ ملاءمة الحل واستدامته.",
          outcomes: [
            "تعاون مع الجهات المانحة",
            "حلول قابلة للتوسع",
            "تمكين المجتمعات",
          ],
        },
        {
          number: "03",
          label: "الابتكار وصناعة المشاريع",
          title: "ستوديو سيمانور للشركات الناشئة",
          description:
            "استوديو لبناء المشاريع والمنتجات عند تقاطع التعليم الإلكتروني وحلول الأعمال والألعاب الإلكترونية والذكاء الاصطناعي والنشر الإلكتروني والتقنية الرقمية؛ نحوّل الفرضيات إلى نماذج أولية قابلة للتعلم والتطوير.",
          outcomes: ["بناء المشاريع", "نماذج أولية", "تطوير منتجات رقمية"],
        },
        {
          number: "04",
          label: "التربية الرقمية",
          title: "محفظة جواني المالية والتربية الرقمية",
          description:
            "محفظة مالية تجمع بين التقنية المالية والتربية الرقمية، موجهة لأولياء الأمور وأبنائهم من سن 6 إلى 24 عاماً. تربط التجربة المالية الرقمية بدور الأسرة وبناء الوعي والمسؤولية عبر مراحل نمو الأبناء.",
          outcomes: [
            "تقنية مالية وتربية رقمية",
            "أولياء الأمور والأبناء",
            "من 6 إلى 24 عاماً",
          ],
        },
      ],
      areaLink: "استكشف هذا المحور",
    },
    timeline: {
      overline: "مسيرة تتجدد بالأثر",
      title: "من التعليم الذكي إلى منظومة تبني المستقبل",
      intro:
        "نروي مسيرة سيمانور عبر أربع محطات دلالية، من جذور التعليم والتقنية إلى منظومة تجمع محاورنا الأربعة وتستند إلى ستة تخصصات. معرفة تتراكم، وتجارب تتطور، وأفق متجدد يصنع قيمة للإنسان.",
      entries: [
        {
          period: "البداية",
          title: "من التعليم والتقنية يبدأ المسار",
          description:
            "ينطلق المسار من الإيمان بأن التعليم الذكي يوسّع قدرة المتعلم والمعلّم والمؤسسة. ومن هذا الأساس تتصل المعرفة بالمحتوى والمنصات والتقنية، مع اهتمام بالتجربة الإنسانية والسياق الذي تُستخدم فيه.",
          date: "",
          status: "thematic",
        },
        {
          period: "التوسع",
          title: "تتسع المنظومة حول حاجات التعلم والتنمية",
          description:
            "اتسع إطار العمل ليشمل مشاريع التعليم التنموية للدول النامية بالتعاون مع المانحين المحليين والدوليين، إلى جانب المحتوى والنشر الإلكتروني والتقنيات التي تدعم الوصول والتجربة. ويظل التصميم ملائماً للسياق، وبناء القدرة، وقياس الأثر، جزءاً من طريقة التفكير.",
          date: "",
          status: "thematic",
        },
        {
          period: "اليوم",
          title: "سيمانور منظومة للابتكار وصناعة المشاريع",
          description:
            "اليوم، تقود سيمانور منظومة من أربعة محاور: التعليم الإلكتروني الذكي، ومشاريع التعليم التنموية، وستوديو سيمانور للشركات الناشئة، ومحفظة جواني للتربية الرقمية. وتساند هذه المحاور ستة تخصصات: التعلم الذكي، والتقنية المالية، وريادة الأعمال وصناعة الشركات، والذكاء الاصطناعي، والنشر الإلكتروني، والألعاب الإلكترونية؛ بما يربط الفكرة بالحل القابل للتطوير مع حوكمة ومسؤولية.",
          date: "",
          status: "thematic",
        },
        {
          period: "المستقبل",
          title: "نستشرف مستقبلاً أذكى وأكثر إنسانية",
          description:
            "يتجه المستقبل نحو تعلم أكثر تكيفاً، ومشاريع تعليمية أكثر ملاءمة للسياق، ومنتجات رقمية تُبنى بالتجربة والحوكمة. نستشرف إمكانات الذكاء الاصطناعي والذكاء الفائق بوصفها أفقاً للتفكير المسؤول، مع إبقاء الإنسان والأسرة والمجتمع في قلب القرار، مع احترام الخصوصية والحوكمة وقيمة المعرفة.",
          date: "",
          status: "thematic",
        },
      ],
      note: "محطات دلالية. ستظهر التواريخ بعد اعتمادها.",
    },
    impact: {
      overline: "من الفكرة إلى الأثر",
      title: "قيمة تُبنى حول الإنسان",
      lead: "نربط التعليم الذكي بالمشاريع التعليمية التنموية وصناعة الحلول، ونصمم كل مسار انطلاقاً من حاجة واضحة وسياق قابل للفهم. يظهر الأثر في تجربة تعلم أكثر ملاءمة، وقدرة محلية أقوى، ومنتجات رقمية تُطوَّر بمسؤولية.",
      note: "ركائز نوعية توضّح كيف نصنع القيمة عبر محاور سيمانور الأربعة وتخصصاتها الستة.",
      metrics: [
        {
          value: "الإنسان",
          label: "تصميم يبدأ من الحاجة",
          note: "نصمم المحتوى والتجربة والتقنية بما يوسّع قدرة المتعلم والمعلّم والأسرة وصانع القرار على الفهم والعمل.",
        },
        {
          value: "الاستدامة",
          label: "حلول ملائمة للسياق",
          note: "نربط التصميم بالسياق المحلي، وبناء القدرة، والتشغيل، والتحسين المستمر حتى تظل الحلول ذات صلة وقابلة للتطور.",
        },
        {
          value: "المعرفة",
          label: "محتوى ومنصات تعمل معاً",
          note: "نصل المحتوى التفاعلي والمنصات والبيانات والتقنيات المساندة في مسارات أوضح للتعلم واتخاذ القرار.",
        },
        {
          value: "الابتكار",
          label: "من الفرضية إلى نموذج قابل للتطوير",
          note: "نختبر الأفكار ونطوّر المنتجات مع مراجعة بشرية وخصوصية وحوكمة واضحة، مع استشراف أثر التحولات التقنية القادمة في الإنسان والمجتمع.",
        },
      ],
      projectsTitle: "أين تصنع الحلول قيمة؟",
      projects: [
        {
          tag: "قدرة تعليمية وتنموية",
          title: "عندما تنطلق الحلول من السياق",
          description:
            "نصمم مجالات لحلول تعليمية تنموية تراعي المجتمع والجهات المعنية، وتربط التنفيذ ببناء القدرة والاستدامة في الدول النامية بالتعاون مع المانحين المحليين والدوليين.",
          kind: "illustrative",
        },
        {
          tag: "تجربة تعلم أذكى",
          title: "عندما يصبح التعلم أكثر ملاءمة",
          description:
            "نساعد على تحويل احتياج المتعلم إلى محتوى تفاعلي ومسار تعلم وأدوات تدعم المعلم، مع تحسين مستمر يستند إلى ما يمكن فهمه وقياسه.",
          kind: "illustrative",
        },
        {
          tag: "ابتكار وصناعة منتجات",
          title: "عندما تتحول الفكرة إلى منتج ذي معنى",
          description:
            "نستخدم الاستكشاف والنمذجة الأولية والاختبار لبناء حلول رقمية في التعليم والتقنية المالية والذكاء الاصطناعي والنشر الإلكتروني والألعاب الإلكترونية، مع إبقاء القرار مسؤولاً وقابلاً للمراجعة.",
          kind: "illustrative",
        },
      ],
      projectsNote: "مسارات توضيحية، وليست دراسات حالة لعملاء محددين.",
      archiveTitle: "الأرشيف التوثيقي",
      archiveIntro: "صور معتمدة للقاءات واتفاقيات من أرشيف سيمانور.",
      archiveLink: "افتح المكتبة الإعلامية",
    },
    insights: {
      overline: "رؤى المعرفة والابتكار",
      title: "حين يتطور التعلم، يتسع المستقبل",
      intro:
        "مقالات تحريرية أصلية تتأمل التعلم الذكي، والتعليم التنموي، وصناعة الحلول الرقمية من زاوية إنسانية وعملية. مساحة للأفكار التي تسبق التصميم، والقرارات التي تجعل التقنية أكثر ملاءمة ومسؤولية.",
      cards: [
        {
          category: "رؤية تحريرية",
          title: "التعليم الإلكتروني الذكي: من المحتوى إلى القرار التعليمي",
          description:
            "لا يبدأ التعلم الذكي من شاشة أكثر لمعاناً، بل من فهم أدق للحظة التي يعيشها المتعلم والمعلم معاً. حين يصبح المحتوى جزءاً من تجربة تستجيب للسياق، تتحول التقنية من مستودع للمعلومات إلى مساحة تساعد على الفهم والعمل.",
          body: "كثيراً ما يُختزل التعليم الإلكتروني في نقل الكتاب إلى شاشة وإضافة قدر من الأتمتة. غير أن قيمته تبدأ قبل اختيار الأداة: ما الذي يحاول المتعلم فهمه؟ أين يتعثر؟ وما الإشارة التي يحتاجها المعلم كي يسانده في الوقت الملائم؟ هذه الأسئلة تعيد المحتوى إلى وظيفته الأساسية؛ أن يقود إلى فهم يمكن استخدامه، لا إلى صفحات أكثر عدداً.\n\nقد تقترح التجربة الذكية خطوة تالية، أو تغيّر ترتيب النشاط، أو تمنح المتعلم فرصة للمحاولة. لكنها مطالبة بالوضوح والإنصاف وإتاحة الوصول. التكيف ليس جمع بيانات بلا غاية، والذكاء ليس قراراً آلياً بعيداً عن السياق. كل توصية تحتاج إلى سبب مفهوم، وكل قياس يحتاج إلى قراءة تربوية.\n\nويظل المعلم مركزياً؛ فإشارات المنصة تصبح ذات معنى حين تساعده على تعديل شرح أو ملاحظة احتياج لم يظهر في الإجابة. يتكامل المحتوى والمنصة والذكاء الاصطناعي حين يخدم كل منها قدرة الإنسان على التعلم. يبدأ التصميم من المتعلم، ويمر بالمعلم، وينتهي بتجربة أوضح قابلة للتحسن المستمر. ويحتاج هذا المسار إلى مراجعة دورية لما يتعلمه النظام وما يقدمه للناس، مع حماية الخصوصية وإتاحة تفسير القرارات. حين تُقاس الجودة بقدرة المتعلم على الفهم والتطبيق، تصبح التقنية وسيلة لتحسين العلاقة التعليمية، لا بديلاً عن المعنى أو المسؤولية. وتبقى الثقة حصيلة قرارات صغيرة متسقة، من صياغة السؤال إلى متابعة الأثر، ومن احترام الاختلاف إلى تحسين التجربة مع الوقت.",
          status: "final",
        },
        {
          category: "أثر تحريري",
          title: "التعليم التنموي: الحل الذي يعرف مكانه",
          description:
            "لا تُقاس ملاءمة الحل التعليمي بقدرته على الانتقال بين البلدان فقط، بل بقدرته على الإصغاء إلى المكان الذي سيعيش فيه. السياق المحلي ليس هامشاً تنفيذياً؛ إنه نقطة البداية التي تحفظ للمعرفة معناها وللأثر استمراره.",
          body: "يبدأ مشروع التعليم التنموي الجيد من سؤال واضح: ما الذي يحتاجه الناس هنا، كما يصفونه هم؟ قد تختلف الإجابة من مجتمع إلى آخر، حتى مع تشابه عناوين مثل الوصول وجودة التدريس والمهارات الرقمية. فاللغة، وسرعة الاتصال، وعادات التعلم، وأدوار الأسرة، وقدرة المؤسسات على التشغيل، تعيد تشكيل الحل قبل وصوله إلى المتعلم.\n\nلا يكفي استيراد نموذج جاهز وقياس استخدامه. التصميم المسؤول يضم أصحاب المصلحة منذ البداية، ويوضح أدوار الجهات المانحة والمنفذين والمؤسسات المحلية، ويمنح فرق المكان قدرة على التكييف والصيانة واتخاذ القرار. وعندما تدخل التقنية في الحل، ينبغي أن تدعم هذا البناء المؤسسي.\n\nالقياس طريقة للتعلم أثناء الطريق: هل وصل الحل إلى الفئة المقصودة؟ هل فُهم؟ هل استطاعت المؤسسة تشغيله؟ قد تقود الإجابة إلى تبسيط أداة أو إعادة كتابة محتوى أو إيقاف مسار لم تثبت ملاءمته.\n\nالأثر المستدام هو بقاء المعرفة والقدرة على التحسين في المكان. وحين يتعاون التصميم مع السياق، يصبح التعليم التنموي ممارسة لبناء الإمكانات، لا مجرد تسليم منتج. وتحتاج الشراكة إلى لغة واضحة حول الموارد والمهام والمخاطر، وإلى قنوات تسمح للناس بالتعبير عن تجربتهم. فالتوسع المسؤول يأتي بعد التعلم المحلي، ويحفظ حق المجتمع في تعديل الحل بما يناسب واقعه، ويترك وراءه مهارة يمكن نقلها إلى مبادرات أخرى. ويظل نجاح الحل مرتبطاً بملكية محلية قادرة على التعلم، وبقرار يوازن بين الطموح والموارد، ويجعل الكرامة والإنصاف جزءاً من كل مرحلة.",
          status: "final",
        },
        {
          category: "ابتكار تحريري",
          title: "من الاستوديو إلى القيمة: كيف تنضج الفكرة الرقمية؟",
          description:
            "لا تحتاج الفكرة الجيدة إلى ضجيج كبير في بدايتها؛ تحتاج إلى مشكلة محددة، ومستخدم يُصغى إليه، وتجربة تسمح بالتعلم قبل التوسع. في الاستوديو، تصبح الفرضية مادة للاختبار، وتصبح القيمة نتيجة لقرارات صغيرة قابلة للمراجعة.",
          body: "تبدأ صناعة الحلول الرقمية بحماس الفكرة، لكن الحماس لا يجيب عن السؤال الأهم: لمن نحل المشكلة، وكيف نعرف أن الحل جعلها أخف أو أوضح؟ تحتاج الفكرة إلى نطاق محدد، ومستخدم معروف، وسلوك نريد فهمه؛ فهذا أوضح من قائمة مزايا لم تُختبر.\n\nالنموذج الأولي أداة للتعلم، وقد يكون مخططاً بسيطاً أو تجربة محتوى أو مساراً تفاعلياً محدوداً. يكشف مبكراً: هل فهم المستخدم الخطوة التالية؟ هل وجد فائدة حقيقية؟ وهل كانت الرحلة سهلة لمن صُممت من أجله؟ كل إجابة تعيد ترتيب الفرضية.\n\nتدخل الخصوصية وإتاحة الوصول والحوكمة في صلب الرحلة. فالحل الذي يطلب بيانات لا يحتاج إليها قد يضعف الثقة. ويضيف الذكاء الاصطناعي إمكانات للمحتوى والإنتاجية والتعلم، مع حاجة إلى مراجعة بشرية وحدود مفهومة ومسؤولية واضحة عن القرار.\n\nالنضج هو التعلم المنظم، وتغيير المسار حين تشير الأدلة إلى ذلك، وربط التقنية بقيمة يلاحظها الناس. يصبح الاستوديو، من هذه الزاوية، مساحة لصناعة الحكم قبل صناعة الشيء. وتساعد هذه الخطوات على التمييز بين الإعجاب الأولي والقيمة الفعلية. فالمستخدم لا يبحث عن تقنية لذاتها، وإنما عن وقت أوضح، أو قرار أفضل، أو تجربة أكثر إنصافاً. وكلما كان التعلم موثقاً، أمكن للفريق أن يبرر خياراته ويعرف متى يمضي ومتى يعيد البناء. وبذلك تقاس الفكرة بقدرتها على خدمة الناس بوضوح، وباستعداد الفريق للاعتراف بما لم ينجح، ثم تحويل الملاحظة إلى معرفة قابلة للعمل.",
          status: "final",
        },
      ],
      readLabel: "اقرأ المقال",
      statusFinal: "نهائي",
      statusDraft: "مسودة",
    },
    contact: {
      overline: "لنصنع الأثر معاً",
      title: "فكرة واضحة. شراكة تصنع الفرق.",
      body: "هل تبحث عن تجربة تعلم أذكى، أو مشروع تعليمي تنموي، أو شريك لبناء منتج وشركة؟ شاركنا التحدي والجهة المستفيدة، ولنستكشف المسار المناسب عبر محاور سيمانور الأربعة.",
      partnership: "للشراكات والاستفسارات",
      emailLabel: "البريد الرسمي",
      socialLabel: "القنوات الاجتماعية",
      studioLabel: "إدارة المحتوى المحلي",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "كيف يمكن أن نصنع أثراً معاً؟",
        send: "فتح مسودة بريد",
        note: "يفتح هذا تطبيق البريد لديك برسالة معبأة مسبقاً. لا يُرسل شيء من هذه الصفحة.",
      },
    },
    footer: {
      description:
        "سيمانور، علامة شركة التعليم والتدريب الإلكتروني. التعليم الذكي أساسنا، والابتكار طريقنا إلى حلول وشركات وأثر إنساني مستدام.",
      company: "سيمانور",
      rights: "جميع الحقوق محفوظة",
      placeholder: "رابط قابل للتحرير",
      studioLink: "استوديو المحتوى (أداة مسودات محلية)",
    },
    studio: {
      eyebrow: "مسودة محلية",
      title: "استوديو محتوى سيمانور",
      intro:
        "حرر النصوص والصور وروابط الأخبار في هذا المتصفح. احتفظ بمسودة، ثم طبّقها في المعاينة المحلية وصدّر JSON للاحتفاظ بها. الربط بالاستضافة وحساب المدير مؤجلان.",
      localOnly:
        "هذه أداة محلية في النسخة الثابتة: لا تحمي كلمة مرور ولا تنشر التغييرات للموقع العام.",
      language: "لغة التحرير",
      export: "تصدير حزمة المحتوى",
      import: "استيراد حزمة JSON",
      save: "تطبيق في المعاينة المحلية",
      reset: "استعادة المحتوى الأولي",
      raw: "محرر المحتوى الكامل JSON",
      saved: "تم حفظ المسودة على هذا الجهاز.",
      invalid: "تعذر قراءة الحزمة؛ تأكد من أنها JSON صالح لبنية سيمانور.",
      back: "العودة إلى الموقع",
    },
    features: {
      eyebrow: "المميزات التي تصنع الفرق",
      title: "ما يميز سيمانور",
      intro:
        "لا تقتصر قيمة سيمانور على مجال واحد؛ بل تظهر في الطريقة التي نصمم بها التعلم، ونصل بها المحتوى والمنصات، ونطوّر بها حلولاً ملائمة للسياق، ونختبر بها المنتجات بمسؤولية.",
      cards: [
        {
          title: "تصميم حول المتعلم",
          description:
            "نبدأ من احتياج المتعلم وسياقه، ثم نصمم تجربة أوضح وأكثر مرونة تدعم المتعلم والمعلم والأسرة وصانع القرار.",
          value: "تجربة تعلم تفهم الإنسان قبل التقنية.",
        },
        {
          title: "تكامل المحتوى والمنصات",
          description:
            "نصل المحتوى التفاعلي والمنصات وأدوات التعلم في مسار متماسك يساعد المؤسسات على تقديم المعرفة ومتابعة التقدم وتحسين التجربة.",
          value: "منظومة مترابطة تجعل المعرفة أسهل وصولاً واستخداماً.",
        },
        {
          title: "تطوير ملائم للسياق",
          description:
            "نربط التصميم بالواقع المحلي واحتياجات المجتمع وقدرة الجهات على التشغيل، لتكون الحلول أكثر صلة وقابلية للتعلم والتطوير والاستدامة.",
          value: "الحل المناسب يبدأ بفهم المكان والناس.",
        },
        {
          title: "تجريب وصناعة منتجات",
          description:
            "نحوّل الأسئلة والفرضيات إلى نماذج أولية قابلة للاختبار، ونتعلم من الاستخدام قبل تطوير منتج أو مشروع يمكن أن ينمو عبر الاستوديو.",
          value: "نختبر الفكرة مبكراً لنصنع قيمة أوضح.",
        },
        {
          title: "ذكاء مسؤول وحوكمة واضحة",
          description:
            "نستخدم الذكاء الاصطناعي بوصفه قدرة تحتاج إلى غاية ومراجعة بشرية وخصوصية ومعايير واضحة، مع قراءة مسؤولة لآفاق الذكاء الفائق بوصفها مجالاً للاستشراف.",
          value: "ابتكار يوازن بين الإمكان والمسؤولية.",
        },
        {
          title: "تمكين الأسرة رقمياً",
          description:
            "نضع الأسرة والناشئة في قلب التربية الرقمية، ونصمم معرفة وأدوات تساعد على بناء علاقة أكثر وعياً وأماناً وتوازناً مع العالم الرقمي.",
          value: "التحول الرقمي يصبح أعمق حين تشارك الأسرة فيه.",
        },
      ],
    },
    approach: {
      overline: "كيف نعمل",
      title: "من الفكرة إلى الحل،",
      accent: "ومن الحل إلى شركة.",
      intro:
        "يبدأ كل مسار من حاجة إنسانية واضحة وسياق يمكن فهمه. نستكشف، ونبني نموذجاً أولياً، ثم نصوغ الحل، ونطوّر ما ينجح إلى شركة أو قدرة باقية.",
      stagesNote:
        "أربع مراحل تصف كيف تدفع سيمانور الأفكار إلى الأمام. هي عدسة للعمل، لا تسلسلاً مضموناً لكل مشروع.",
      stages: [
        {
          title: "استكشاف",
          description:
            "نفهم الحاجة، والفئة المستفيدة، والسياق الذي سيعيش فيه الحل.",
        },
        {
          title: "نموذج أولي",
          description:
            "نحوّل الفرضية إلى شيء قابل للاختبار، ونتعلم من الاستخدام الفعلي قبل التوسع.",
        },
        {
          title: "حل",
          description:
            "نصوغ منتجاً أو برنامجاً يلائم سياقه ويمكن تشغيله وتحسينه.",
        },
        {
          title: "شركة / أثر",
          description: "نطوّر ما ينجح إلى شركة، أو إلى قدرة تبقى حيث تُستخدم.",
        },
      ],
      distinctionsTitle: "ما يميز سيمانور",
    },
    explorer: {
      overline: "مجالات الاستكشاف",
      title: "اختر مجالاً.\nوانظر مساراً يستحق البناء.",
      intro:
        "ستة تخصصات تساند المحاور الأربعة، ويقودها التعليم الذكي. يفتح كل مجال مساراً مقترحاً يمكن أن يتطور بالفهم والتصميم والاختبار.",
      note: "مستكشف منسّق يعمل بقواعد ثابتة. المسارات مقترحات كتبتها سيمانور، وليست مساعداً ذكياً ولا برامج قائمة.",
      pathLabel: "مسار مقترح",
      stepsLabel: "ثلاث خطوات لاستكشافه",
      cta: "لنطوّر الفكرة معاً",
      paths: [
        {
          title: "تجربة تعلم تتكيف مع الإنسان",
          description:
            "مسار مقترح يربط المحتوى التفاعلي باحتياجات المتعلم، ويدعم دور المعلم، ويجعل التقدم أوضح للمراجعة والتحسين ضمن محور التعليم الإلكتروني الذكي.",
          steps: [
            "تحديد الاحتياج التعليمي",
            "تصميم المحتوى والتجربة",
            "اختبار التفاعل والتقدم",
          ],
        },
        {
          title: "وعي مالي في عالم رقمي",
          description:
            "مسار استكشافي لتصميم محتوى وتجارب تعليمية تساعد على فهم المفاهيم والقرارات المالية في السياق الرقمي، مع اختبار الوضوح والمسؤولية؛ وهو مجال للتعلّم والتصميم، وليس خدمة مالية أو استثمارية.",
          steps: [
            "فهم الفئة والسياق",
            "تصميم تجربة توعوية",
            "اختبار الفهم والمسؤولية",
          ],
        },
        {
          title: "من مشكلة حقيقية إلى مشروع",
          description:
            "مسار ستوديو سيمانور للشركات الناشئة لفهم احتياجات المستخدمين، واختبار نماذج أولية، وصياغة قيمة مشروع يمكن تطويرها بعد التعلم من التجربة.",
          steps: ["اكتشاف المشكلة", "اختبار نموذج أولي", "تطوير نموذج القيمة"],
        },
        {
          title: "ذكاء اصطناعي يدعم القرار",
          description:
            "تصور لمسارات عمل في المحتوى والإنتاجية والتعلم، يستخدم الذكاء الاصطناعي كموضوع للتصميم والتجريب مع مراجعة بشرية واهتمام بالخصوصية والحوكمة. ونستشرف آفاق الذكاء الفائق من منظور إنساني ومسؤول.",
          steps: [
            "تحديد المهمة والأثر",
            "اختيار الاستخدام الملائم",
            "تقييم الجودة والحوكمة",
          ],
        },
        {
          title: "معرفة تتجاوز الصفحة",
          description:
            "مسار مقترح لتحويل المحتوى إلى تجربة نشر إلكتروني مترابطة وقابلة للوصول، تجمع بين القراءة والتفاعل والوسائط مع تنظيم واضح للمحتوى وحقوقه.",
          steps: [
            "تنظيم المحتوى والحقوق",
            "بناء تجربة القراءة",
            "اختبار الوصول والتفاعل",
          ],
        },
        {
          title: "لعبة تصنع تجربة ذات معنى",
          description:
            "تصور لألعاب إلكترونية تجمع المتعة والإبداع والتعلم، وتتعلم من اختبار التجربة لتوازن بين جودة التفاعل والقيمة التي يخرج بها اللاعب.",
          steps: [
            "تحديد فكرة اللعب",
            "تطوير نموذج تفاعلي",
            "اختبار المتعة والقيمة",
          ],
        },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      story: "Vision",
      ecosystem: "Focus Areas",
      timeline: "Journey",
      impact: "Impact",
      insights: "Insights",
      contact: "Contact",
      studio: "Content Studio",
      approach: "Approach",
    },
    hero: {
      eyebrow: "Semanoor · Innovation & venture-building lab",
      title: "Bringing intelligence to knowledge.",
      accent: "Turning innovation into impact.",
      description:
        "An innovation and venture-building lab with intelligent e-learning at its core. Four focus areas, six exploration fields, one path: from idea to solution, and from solution to venture.",
      primaryCta: "Start a partnership",
      secondaryCta: "Explore the focus areas",
      signal:
        "Where intelligent learning meets innovation, and new possibilities begin",
      domains: [
        "Intelligent learning",
        "Fintech",
        "Entrepreneurship & venture building",
        "Artificial intelligence",
        "E-publishing",
        "Electronic games",
      ],
      labTitle: "Innovation nucleus",
      labNote:
        "Interactive map of supporting specialties · Select a node to explore the connections",
      selected: "Exploration field",
      stages: ["Explore", "Prototype", "Solution", "Venture / impact"],
      focusLabel: "Four focus areas · what we do",
      fieldsLabel: "Six exploration fields · where we explore",
      filmLabel: "The 30-second introduction",
      filmPlay: "Play the film",
      filmNote:
        "Plays with sound on request. Approved company introduction, available in Arabic and English.",
      scrollHint: "Scroll",
    },
    story: {
      overline: "Our direction",
      title:
        "Intelligent learning first; innovation as a space for building the future.",
      lead: "Semanoor is the brand of E-Learning & Training Company: an innovation and venture-building lab with intelligent e-learning at its core, turning knowledge and technology into possibilities that can grow.",
      body: "We begin with a clear human need: how can learning become more effective, and how can technology become lasting capability? We connect interactive content, platforms and artificial intelligence with education projects, then explore, test and develop ideas through venture building. Our outlook extends from intelligent learning to education development projects for developing countries in collaboration with local and international donors, alongside digital parenting that keeps families and young people at the centre of change. We explore superintelligence as a horizon for responsible foresight, considering how emerging technologies may shape learning and human capability while keeping people and governance central to our outlook.",
      principles: [
        {
          title: "Human first",
          description:
            "We design technology to expand the ability of learners, educators, families and decision makers to understand, participate and act, while respecting context, privacy and human choice.",
        },
        {
          title: "Intelligent learning with meaning",
          description:
            "We connect adaptation, data and content to learning experiences that are clearer, fairer and continuously improvable, so intelligence serves the quality of decisions and learning.",
        },
        {
          title: "Responsible foresight",
          description:
            "We read technological change critically and turn what we learn into choices that support people and lasting impact, keeping risk and governance in the question from the start.",
        },
      ],
    },
    ecosystem: {
      overline: "The Semanoor ecosystem",
      title: "Four focus areas. One horizon.",
      intro:
        "Intelligent e-learning anchors the ecosystem. Education development projects, Semanoor Startup Studio and Jawani extend that foundation: four connected activities turning knowledge into innovation and lasting impact.",
      areas: [
        {
          number: "01",
          label: "Learning & technology",
          title: "Intelligent e-learning",
          description:
            "We shape learning experiences that adapt to learner needs, alongside interactive content and tools that help institutions design more precise, equitable, and effective pathways—from understanding context to improving the experience and measuring progress.",
          outcomes: [
            "Personalized learning",
            "Interactive content",
            "Measurable learning pathways",
          ],
        },
        {
          number: "02",
          label: "Development impact",
          title: "Education development projects",
          description:
            "We develop education projects serving developing countries with local and international donors, connecting design to local context, capacity building, delivery, and impact measurement so that each solution remains relevant and sustainable.",
          outcomes: [
            "Donor collaboration",
            "Scalable solutions",
            "Community enablement",
          ],
        },
        {
          number: "03",
          label: "Innovation & venture building",
          title: "Semanoor Startup Studio",
          description:
            "A studio for building ventures and products at the intersection of e-learning, business solutions, electronic games, artificial intelligence, e-publishing, and digital technology—turning hypotheses into prototypes that can be tested and developed.",
          outcomes: [
            "Venture building",
            "Prototyping",
            "Digital product development",
          ],
        },
        {
          number: "04",
          label: "Digital parenting",
          title: "Jawani financial wallet & digital parenting",
          description:
            "A financial wallet combining fintech and digital parenting for parents and their children aged 6 to 24. It connects digital financial experiences with family involvement, awareness and responsibility across stages of growth.",
          outcomes: [
            "Fintech & digital parenting",
            "Parents & young people",
            "Ages 6 to 24",
          ],
        },
      ],
      areaLink: "Explore this focus area",
    },
    timeline: {
      overline: "A journey renewed by impact",
      title: "From intelligent learning to a future-building ecosystem",
      intro:
        "We trace Semanoor’s journey through four thematic milestones, from roots in education and technology to an ecosystem that brings together our four focus areas and six specialties. Knowledge grows, experiences evolve, and a renewed outlook creates value for people.",
      entries: [
        {
          period: "Beginnings",
          title: "The journey begins with education and technology",
          description:
            "The journey begins with the belief that intelligent learning can expand the capabilities of learners, educators, and institutions. From that foundation, knowledge connects with content, platforms, and technology, with attention to the human experience and the context in which each solution is used.",
          date: "",
          status: "thematic",
        },
        {
          period: "Expansion",
          title: "The ecosystem expands around learning and development needs",
          description:
            "The scope expanded to include education development projects for developing countries in collaboration with local and international donors, alongside content, e-publishing, and technologies that support access and experience. Context-sensitive design, capacity building, and impact measurement remain part of the approach.",
          date: "",
          status: "thematic",
        },
        {
          period: "Today",
          title: "Semanoor as an innovation and venture-building ecosystem",
          description:
            "Today, Semanoor brings together four focus areas: intelligent e-learning, education development projects, Semanoor Startup Studio, and the Jawani digital-parenting portfolio. These areas are supported by six specialties: intelligent learning, fintech, entrepreneurship and venture building, artificial intelligence, e-publishing, and electronic games—connecting ideas with solutions that can evolve through responsible, governed practice.",
          date: "",
          status: "thematic",
        },
        {
          period: "Future",
          title: "Toward a smarter, more human future",
          description:
            "The future points toward more adaptive learning, more context-relevant education projects, and digital products shaped through experimentation and governance. We explore the possibilities of artificial intelligence and superintelligence as a horizon for responsible thinking, keeping people, families, and communities at the heart of decisions, with respect for privacy, governance, and the value of knowledge.",
          date: "",
          status: "thematic",
        },
      ],
      note: "Thematic milestones. Dates will be shown once they are approved.",
    },
    impact: {
      overline: "From idea to impact",
      title: "Value built around people",
      lead: "We connect intelligent learning with education development and solution building, designing each path around a clear need and an understandable context. Value shows up in more relevant learning experiences, stronger local capability, and digital products developed responsibly.",
      note: "Qualitative pillars showing how we create value across Semanoor’s four focus areas and six specialties.",
      metrics: [
        {
          value: "People",
          label: "Design begins with need",
          note: "We shape content, experiences and technology to expand the ability of learners, educators, families and decision makers to understand and act.",
        },
        {
          value: "Sustainability",
          label: "Solutions fit the context",
          note: "We connect design to local context, capacity building, delivery and continuous improvement so solutions remain relevant and able to evolve.",
        },
        {
          value: "Knowledge",
          label: "Content and platforms work together",
          note: "We connect interactive content, platforms, data and supporting technologies into clearer pathways for learning and decision-making.",
        },
        {
          value: "Innovation",
          label: "From hypothesis to an evolving prototype",
          note: "We test ideas and develop products with human review, privacy and clear governance, while exploring the effect of emerging technologies on people and society.",
        },
      ],
      projectsTitle: "Where solutions create value",
      projects: [
        {
          tag: "Education and development capability",
          title: "When solutions start with context",
          description:
            "We shape pathways for education development solutions that consider communities and stakeholders, connecting delivery with capability building and sustainability in developing countries in collaboration with local and international donors.",
          kind: "illustrative",
        },
        {
          tag: "Smarter learning experience",
          title: "When learning becomes more relevant",
          description:
            "We help turn learner needs into interactive content, learning pathways and tools that support educators, with continuous improvement grounded in what can be understood and measured.",
          kind: "illustrative",
        },
        {
          tag: "Innovation and product building",
          title: "When an idea becomes a meaningful product",
          description:
            "We use exploration, prototyping and testing to build digital solutions across education, fintech, artificial intelligence, e-publishing and electronic games, keeping decisions responsible and open to review.",
          kind: "illustrative",
        },
      ],
      projectsNote: "Illustrative pathways, not case studies of named clients.",
      archiveTitle: "Documentary archive",
      archiveIntro:
        "Approved photographs of meetings and agreements from Semanoor’s archive.",
      archiveLink: "Open the media library",
    },
    insights: {
      overline: "Learning & innovation perspectives",
      title: "When learning evolves, the future expands",
      intro:
        "Original editorial articles reflecting on intelligent learning, development education, and the making of digital solutions from a human and practical perspective. A space to consider the questions that come before design and the decisions that make technology more relevant and responsible.",
      cards: [
        {
          category: "Editorial perspective",
          title: "Intelligent e-learning: from content to learning decisions",
          description:
            "Intelligent learning does not begin with a shinier screen. It begins with a clearer understanding of the moment shared by learner and educator. When content becomes part of a context-responsive experience, technology moves from being an information store to becoming a space that supports understanding and action.",
          body: "E-learning is often reduced to moving a textbook onto a screen and adding a layer of automation to make it appear more modern. Yet its real value begins before any tool is selected: What is the learner trying to understand? Where are they struggling? What signal does the educator need in order to support them at the right moment? These questions return content to its essential purpose: leading to usable understanding, not simply producing more pages.\n\nAn intelligent experience may suggest a next step, change the order of an activity, or give a learner room to try without fear. It must still remain clear, fair, and accessible. Adaptation is not data collection without purpose, and intelligence is not an automated decision detached from context. Every recommendation needs an understandable reason, and every measure needs an educational reading rather than reliance on a single number.\n\nThe educator remains central. Platform signals become meaningful when they help an educator ask a better question, adjust an explanation, or notice a need that did not appear in an answer. Content, platforms, and artificial intelligence can therefore work together in a relationship that serves people. Design begins with the learner, passes through the educator, and ends with a clearer experience that can keep improving. This path requires regular review of what a system learns and what it offers people, alongside privacy protection and understandable decisions. When quality is measured through a learner’s ability to understand and apply knowledge, technology strengthens the educational relationship rather than replacing meaning or responsibility. Trust emerges from consistent small decisions: how a question is framed, how impact is followed, how differences are respected and how the experience improves over time.",
          status: "final",
        },
        {
          category: "Editorial impact",
          title: "Development education: a solution that knows its place",
          description:
            "The relevance of an education solution is not measured only by its ability to travel between countries. It is measured by its ability to listen to the place where it will live. Local context is not an implementation footnote; it is the starting point that preserves meaning and lasting impact.",
          body: "A strong development education project begins with a simple yet difficult question: What do people here say they need? The answer can differ from one community to another even when the broad themes are similar, such as access, teaching quality, or digital skills. Language, connectivity, learning habits, family roles, and institutional capacity all reshape a solution before it reaches a learner.\n\nThat is why importing a ready-made model and counting its uses is not enough. Responsible design brings stakeholders in from the beginning, clarifies the roles of donors, implementers, and local institutions, and gives local teams real capacity to adapt, maintain, and decide. When technology forms part of the intervention, it should support this institutional foundation rather than replace it.\n\nMeasurement is not a ceremonial stage at the end of funding. It is a way to learn along the way: Did the solution reach the intended group? Was it understood? Could the institution operate it? What should change before expansion? The answer may call for a simpler tool, rewritten content, or the suspension of a path that has not shown sufficient relevance.\n\nLasting impact does not mean that a project continues in exactly the same form. It means that knowledge and the ability to improve remain in the place. When design works with context, development education becomes a practice of building capability rather than merely delivering a product. Partnership also requires clear language about resources, responsibilities and risks, and channels through which people can describe their experience. Responsible expansion follows local learning, respects a community’s right to adapt a solution and leaves skills that can transfer to other initiatives. Success remains tied to local ownership that can keep learning, and to decisions that balance ambition with resources while making dignity and fairness part of every stage.",
          status: "final",
        },
        {
          category: "Editorial innovation",
          title: "From studio to value: how does a digital idea mature?",
          description:
            "A good idea does not need great noise at the beginning. It needs a defined problem, a user who is listened to, and an experiment that allows learning before expansion. In a studio, a hypothesis becomes something to test, and value emerges from small, reviewable decisions.",
          body: "Digital solution building often begins with the excitement of an idea, yet excitement alone cannot answer the essential question: Whose problem are we solving, and how will we know that the solution made it lighter or clearer? An idea therefore needs a narrower scope until it becomes observable. A defined user, a clear context, and a behavior we want to understand are more useful than a long list of untested features.\n\nA prototype is not an incomplete version of the final product. It is a learning instrument. It may be a simple outline, a content trial, or a limited interactive path. Its role is to reveal confusion early: Did the user understand the next step? Did they find real value? Was the journey easy for the people it was designed to serve? Each answer reshapes the hypothesis and prevents greater investment in an unclear direction.\n\nPrivacy, accessibility, and governance belong at the heart of this journey, not on a final checklist. A solution that is difficult to understand or asks for unnecessary data may create short-term engagement while weakening trust. Artificial intelligence also creates important possibilities for content, productivity, and learning, with a continuing need for human review, clear limits, and accountable decisions.\n\nMaturity is not reaching a product quickly. It is the ability to learn systematically, change course when evidence calls for it, and connect technology to value people can observe. From this perspective, a studio is a place for making judgment before making the thing. These steps help distinguish initial admiration from real value. People are not seeking technology for its own sake; they seek clearer use of time, better decisions or fairer experiences. Documented learning helps teams explain their choices and recognize when to proceed or rebuild. An idea is therefore judged by how clearly it serves people and by the team’s willingness to acknowledge what did not work, turning observation into actionable knowledge.",
          status: "final",
        },
      ],
      readLabel: "Read the article",
      statusFinal: "Final",
      statusDraft: "Draft",
    },
    contact: {
      overline: "Let's create impact together",
      title: "A clear idea. A partnership that makes a difference.",
      body: "Looking for smarter learning, an education development initiative, or a partner to build a product and venture? Share the challenge and the people it should serve. Together, we can explore the right path across our four focus areas.",
      partnership: "For partnerships and enquiries",
      emailLabel: "Official email",
      socialLabel: "Social channels",
      studioLabel: "Local content management",
      form: {
        name: "Name",
        email: "Email",
        message: "How can we create impact together?",
        send: "Open email draft",
        note: "This opens your email app with a prefilled draft. Nothing is sent from this page.",
      },
    },
    footer: {
      description:
        "Semanoor, the brand of E-Learning & Training Company. Intelligent learning is our foundation; innovation is our path to solutions, ventures and lasting human impact.",
      company: "Semanoor",
      rights: "All rights reserved",
      placeholder: "Editable link",
      studioLink: "Content Studio (local draft tool)",
    },
    studio: {
      eyebrow: "Local draft",
      title: "Semanoor Content Studio",
      intro:
        "Edit text, images and news links in this browser. Retain a draft, apply it to the local preview and export JSON for backup. Hosting integration and the administrator account are deferred.",
      localOnly:
        "This static-site tool is local only: it does not secure a password or publish updates to the public website.",
      language: "Editing language",
      export: "Export content package",
      import: "Import JSON package",
      save: "Apply to local preview",
      reset: "Restore initial content",
      raw: "Full JSON content editor",
      saved: "The draft was saved on this device.",
      invalid:
        "The package could not be read. Ensure it is valid JSON for the Semanoor structure.",
      back: "Back to website",
    },
    features: {
      eyebrow: "The difference we bring",
      title: "What sets Semanoor apart",
      intro:
        "Semanoor’s value is not limited to one field; it shows in how we design learning, connect content and platforms, develop context-fit solutions, and test products responsibly.",
      cards: [
        {
          title: "Designed around the learner",
          description:
            "We start with the learner’s needs and context, then design a clearer, more flexible experience that supports learners, educators, families, and decision makers.",
          value:
            "A learning experience that understands people before technology.",
        },
        {
          title: "Connected content and platforms",
          description:
            "We connect interactive content, platforms, and learning tools into a coherent pathway that helps institutions deliver knowledge, follow progress, and improve the experience.",
          value:
            "A connected ecosystem that makes knowledge easier to access and use.",
        },
        {
          title: "Built for context",
          description:
            "We connect design to local realities, community needs, and delivery capacity so solutions remain relevant and can be learned from, developed, and sustained.",
          value: "The right solution begins by understanding place and people.",
        },
        {
          title: "Experimentation and product building",
          description:
            "We turn questions and hypotheses into testable prototypes, learning from use before developing a product or venture that can grow through the studio.",
          value: "We test early to build clearer value.",
        },
        {
          title: "Responsible intelligence and clear governance",
          description:
            "We approach artificial intelligence as a capability that requires purpose, human review, privacy, and clear standards, while treating superintelligence as a field for responsible foresight.",
          value: "Innovation that balances possibility with responsibility.",
        },
        {
          title: "Digitally enabled families",
          description:
            "We place families and young people at the heart of digital parenting, shaping knowledge and tools that support a more informed, safe, and balanced relationship with the digital world.",
          value: "Digital change goes further when families take part in it.",
        },
      ],
    },
    approach: {
      overline: "How we work",
      title: "From idea to solution.",
      accent: "From solution to venture.",
      intro:
        "Every path begins with a clear human need and a context we can understand. We explore, prototype, shape the solution, then grow what works into a venture or lasting capability.",
      stagesNote:
        "Four stages describe how Semanoor moves ideas forward. They are a lens for the work, not a guaranteed sequence for every project.",
      stages: [
        {
          title: "Explore",
          description:
            "Understand the need, the people it serves and the context the solution will live in.",
        },
        {
          title: "Prototype",
          description:
            "Turn the hypothesis into something testable and learn from real use before investing further.",
        },
        {
          title: "Solution",
          description:
            "Shape a product or programme that fits its context and can be operated and improved.",
        },
        {
          title: "Venture / impact",
          description:
            "Grow what works into a venture, or into capability that stays where it is used.",
        },
      ],
      distinctionsTitle: "What sets Semanoor apart",
    },
    explorer: {
      overline: "Exploration fields",
      title: "Pick a field.\nSee a path worth building.",
      intro:
        "Six specialties support the four focus areas, with intelligent learning at the core. Each field opens a proposed path that could develop through understanding, design and testing.",
      note: "A curated, rule-based explorer. The paths are proposals written by Semanoor, not an AI assistant and not active programmes.",
      pathLabel: "Proposed path",
      stepsLabel: "Three steps to explore it",
      cta: "Develop this idea with us",
      paths: [
        {
          title: "Learning that adapts to people",
          description:
            "A proposed path connecting interactive content with learner needs, supporting the educator’s role, and making progress clearer to review and improve within intelligent e-learning.",
          steps: [
            "Define the learning need",
            "Design the content and experience",
            "Test engagement and progress",
          ],
        },
        {
          title: "Financial awareness in a digital world",
          description:
            "An exploratory path for designing educational content and experiences that help people understand financial concepts and decisions in a digital context, with clarity and responsibility tested throughout. A learning and design field, not a financial or investment service.",
          steps: [
            "Understand the audience and context",
            "Design an awareness experience",
            "Test understanding and responsibility",
          ],
        },
        {
          title: "From a real problem to a venture",
          description:
            "A Semanoor Startup Studio path for understanding user needs, testing prototypes, and shaping a venture value proposition that can develop through learning from the experience.",
          steps: [
            "Discover the problem",
            "Test a prototype",
            "Develop the value model",
          ],
        },
        {
          title: "AI that supports better decisions",
          description:
            "A concept for content, productivity and learning workflows that explores artificial intelligence through design and experimentation, with human review and attention to privacy and governance. Superintelligence is explored as a horizon for responsible, human-centred foresight.",
          steps: [
            "Define the task and intended impact",
            "Choose an appropriate use",
            "Evaluate quality and governance",
          ],
        },
        {
          title: "Knowledge beyond the page",
          description:
            "A proposed path for turning content into an accessible, connected e-publishing experience that brings together reading, interaction and media with clear organization of content and rights.",
          steps: [
            "Organize content and rights",
            "Build the reading experience",
            "Test access and engagement",
          ],
        },
        {
          title: "Games with meaningful experiences",
          description:
            "A concept for electronic games combining enjoyment, creativity and learning, using experience testing to balance the quality of interaction with the value players take away.",
          steps: [
            "Define the game concept",
            "Build an interactive prototype",
            "Test enjoyment and value",
          ],
        },
      ],
    },
  },
  visuals: {
    story: {
      image: "/manus-storage/vision_bac7e4dd.webp",
      alt: {
        ar: "رسم توضيحي يربط نواة المعرفة بصناعة المشاريع",
        en: "Conceptual knowledge core connected to venture building",
      },
    },
    focus: [
      {
        image: "/manus-storage/smart-learning_352ab20d.webp",
        alt: {
          ar: "رسم توضيحي لكتاب رقمي وشبكة تعلم ذكية",
          en: "Conceptual digital book and intelligent learning network",
        },
      },
      {
        image: "/manus-storage/development_3624dba3.webp",
        alt: {
          ar: "رسم توضيحي لشبكة وصول تعليمي متصل بالمجتمعات",
          en: "Conceptual education access network connecting communities",
        },
      },
      {
        image: "/manus-storage/startup-studio_99eae169.webp",
        alt: {
          ar: "رسم توضيحي لتحويل الأفكار إلى نماذج ومنتجات",
          en: "Conceptual ideas turning into prototypes and digital ventures",
        },
      },
      {
        image: "/manus-storage/digital-parenting_719e4ad6.webp",
        alt: {
          ar: "رسم توضيحي للأسرة والوعي والتربية الرقمية",
          en: "Conceptual family, awareness and digital parenting",
        },
      },
    ],
    solutions: [
      {
        image: "/manus-storage/smart-learning_352ab20d.webp",
        alt: {
          ar: "رسم توضيحي لكتاب رقمي وشبكة تعلم ذكية",
          en: "Conceptual digital book and intelligent learning network",
        },
      },
      {
        image: "/manus-storage/fintech-literacy_539fa48c.webp",
        alt: {
          ar: "رسم توضيحي للتقنية المالية والوعي بالقرار",
          en: "Conceptual fintech and informed financial decisions",
        },
      },
      {
        image: "/manus-storage/startup-studio_99eae169.webp",
        alt: {
          ar: "رسم توضيحي لتحويل الأفكار إلى نماذج ومنتجات",
          en: "Conceptual ideas turning into prototypes and digital ventures",
        },
      },
      {
        image: "/manus-storage/ai-workflow_1a5baa2b.webp",
        alt: {
          ar: "رسم توضيحي لسير عمل ذكي ومراجعة بشرية",
          en: "Conceptual AI-enabled workflow with human review",
        },
      },
      {
        image: "/manus-storage/digital-publishing_ef0c7827.webp",
        alt: {
          ar: "رسم توضيحي للنشر الإلكتروني والمحتوى المتصل",
          en: "Conceptual e-publishing and connected content",
        },
      },
      {
        image: "/manus-storage/meaningful-games_ebb752b3.webp",
        alt: {
          ar: "رسم توضيحي للألعاب الإلكترونية والمعرفة",
          en: "Conceptual electronic games and learning",
        },
      },
    ],
    projects: [
      {
        image: "/manus-storage/development_3624dba3.webp",
        alt: {
          ar: "رسم توضيحي لشبكة وصول تعليمي متصل بالمجتمعات",
          en: "Conceptual education access network connecting communities",
        },
      },
      {
        image: "/manus-storage/smart-learning_352ab20d.webp",
        alt: {
          ar: "رسم توضيحي لكتاب رقمي وشبكة تعلم ذكية",
          en: "Conceptual digital book and intelligent learning network",
        },
      },
      {
        image: "/manus-storage/startup-studio_99eae169.webp",
        alt: {
          ar: "رسم توضيحي لتحويل الأفكار إلى نماذج ومنتجات",
          en: "Conceptual ideas turning into prototypes and digital ventures",
        },
      },
    ],
    insights: [
      {
        image: "/manus-storage/smart-learning_352ab20d.webp",
        alt: {
          ar: "رسم توضيحي لكتاب رقمي وشبكة تعلم ذكية",
          en: "Conceptual digital book and intelligent learning network",
        },
      },
      {
        image: "/manus-storage/development_3624dba3.webp",
        alt: {
          ar: "رسم توضيحي لشبكة وصول تعليمي متصل بالمجتمعات",
          en: "Conceptual education access network connecting communities",
        },
      },
      {
        image: "/manus-storage/startup-studio_99eae169.webp",
        alt: {
          ar: "رسم توضيحي لتحويل الأفكار إلى نماذج ومنتجات",
          en: "Conceptual ideas turning into prototypes and digital ventures",
        },
      },
    ],
    library: {
      image: "/manus-storage/media-library_a1193a09.webp",
      alt: {
        ar: "رسم توضيحي لأرشيف الصور والتغطيات الصحفية",
        en: "Conceptual image and press-coverage archive",
      },
    },
    atmosphere: {
      hero: {
        desktop: "/site-assets/atmosphere/hero-desktop.webp",
        mobile: "/site-assets/atmosphere/hero-mobile.webp",
        loop: "/site-assets/atmosphere/hero-loop.mp4",
        frames: [
          "/site-assets/atmosphere/hero-loop-1.webp",
          "/site-assets/atmosphere/hero-loop-2.webp",
          "/site-assets/atmosphere/hero-loop-3.webp",
          "/site-assets/atmosphere/hero-loop-4.webp",
          "/site-assets/atmosphere/hero-loop-5.webp",
        ],
        alt: {
          ar: "خلفية جوية مولّدة: ضوء بنفسجي هادئ فوق أفق داكن",
          en: "Generated atmospheric backdrop: calm violet light over a dark horizon",
        },
      },
      statement: "/site-assets/atmosphere/statement.webp",
      approach: "/site-assets/atmosphere/approach.webp",
      journey: "/site-assets/atmosphere/journey.webp",
      contact: "/site-assets/atmosphere/contact.webp",
    },
  },
  media: {
    items: [
      {
        id: "ai-workflow",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "الذكاء الاصطناعي المسؤول",
          en: "Responsible AI",
        },
        description: {
          ar: "رسم توضيحي مولّد للهوية البصرية، وليس صورة توثيقية لمشروع أو خبر.",
          en: "AI-generated conceptual artwork, not a documentary project or press photograph.",
        },
        alt: {
          ar: "رسم توضيحي لسير عمل ذكي ومراجعة بشرية",
          en: "Conceptual AI-enabled workflow with human review",
        },
        image: "/manus-storage/ai-workflow_1a5baa2b.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
      {
        id: "development",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "مشاريع التعليم التنموية",
          en: "Education development projects",
        },
        description: {
          ar: "رسم توضيحي مولّد للهوية البصرية، وليس صورة توثيقية لمشروع أو خبر.",
          en: "AI-generated conceptual artwork, not a documentary project or press photograph.",
        },
        alt: {
          ar: "رسم توضيحي لشبكة وصول تعليمي متصل بالمجتمعات",
          en: "Conceptual education access network connecting communities",
        },
        image: "/manus-storage/development_3624dba3.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
      {
        id: "digital-parenting",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "محفظة جواني والتربية الرقمية",
          en: "Jawani digital parenting",
        },
        description: {
          ar: "رسم توضيحي مولّد للهوية البصرية، وليس صورة توثيقية لمشروع أو خبر.",
          en: "AI-generated conceptual artwork, not a documentary project or press photograph.",
        },
        alt: {
          ar: "رسم توضيحي للأسرة والوعي والتربية الرقمية",
          en: "Conceptual family, awareness and digital parenting",
        },
        image: "/manus-storage/digital-parenting_719e4ad6.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
      {
        id: "digital-publishing",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "النشر الإلكتروني",
          en: "E-publishing",
        },
        description: {
          ar: "رسم توضيحي مولّد للهوية البصرية، وليس صورة توثيقية لمشروع أو خبر.",
          en: "AI-generated conceptual artwork, not a documentary project or press photograph.",
        },
        alt: {
          ar: "رسم توضيحي للنشر الإلكتروني والمحتوى المتصل",
          en: "Conceptual e-publishing and connected content",
        },
        image: "/manus-storage/digital-publishing_ef0c7827.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
      {
        id: "meaningful-games",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "الألعاب الإلكترونية",
          en: "Electronic games",
        },
        description: {
          ar: "رسم توضيحي مولّد للهوية البصرية، وليس صورة توثيقية لمشروع أو خبر.",
          en: "AI-generated conceptual artwork, not a documentary project or press photograph.",
        },
        alt: {
          ar: "رسم توضيحي للألعاب الإلكترونية والمعرفة",
          en: "Conceptual electronic games and learning",
        },
        image: "/manus-storage/meaningful-games_ebb752b3.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
      {
        id: "media-library",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "المكتبة الإعلامية",
          en: "Media Library",
        },
        description: {
          ar: "رسم توضيحي مولّد للهوية البصرية، وليس صورة توثيقية لمشروع أو خبر.",
          en: "AI-generated conceptual artwork, not a documentary project or press photograph.",
        },
        alt: {
          ar: "رسم توضيحي لأرشيف الصور والتغطيات الصحفية",
          en: "Conceptual image and press-coverage archive",
        },
        image: "/manus-storage/media-library_a1193a09.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
      {
        id: "smart-learning",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "التعليم الإلكتروني الذكي",
          en: "Intelligent e-learning",
        },
        description: {
          ar: "رسم توضيحي مولّد للهوية البصرية، وليس صورة توثيقية لمشروع أو خبر.",
          en: "AI-generated conceptual artwork, not a documentary project or press photograph.",
        },
        alt: {
          ar: "رسم توضيحي لكتاب رقمي وشبكة تعلم ذكية",
          en: "Conceptual digital book and intelligent learning network",
        },
        image: "/manus-storage/smart-learning_352ab20d.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
      {
        id: "startup-studio",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "ستوديو سيمانور للشركات الناشئة",
          en: "Semanoor Startup Studio",
        },
        description: {
          ar: "رسم توضيحي مولّد للهوية البصرية، وليس صورة توثيقية لمشروع أو خبر.",
          en: "AI-generated conceptual artwork, not a documentary project or press photograph.",
        },
        alt: {
          ar: "رسم توضيحي لتحويل الأفكار إلى نماذج ومنتجات",
          en: "Conceptual ideas turning into prototypes and digital ventures",
        },
        image: "/manus-storage/startup-studio_99eae169.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
      {
        id: "vision",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "رؤية سيمانور",
          en: "Semanoor vision",
        },
        description: {
          ar: "رسم توضيحي مولّد للهوية البصرية، وليس صورة توثيقية لمشروع أو خبر.",
          en: "AI-generated conceptual artwork, not a documentary project or press photograph.",
        },
        alt: {
          ar: "رسم توضيحي يربط نواة المعرفة بصناعة المشاريع",
          en: "Conceptual knowledge core connected to venture building",
        },
        image: "/manus-storage/vision_bac7e4dd.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
      {
        id: "fintech-literacy",
        kind: "illustration",
        status: "approved",
        title: {
          ar: "التقنية المالية والوعي الرقمي",
          en: "Fintech and digital awareness",
        },
        description: {
          ar: "رسم توضيحي للاستكشاف والوعي المالي، وليس خدمة مالية أو صورة منتج.",
          en: "Conceptual financial-awareness artwork, not a financial service or product screenshot.",
        },
        alt: {
          ar: "رسم توضيحي للتقنية المالية والوعي بالقرار",
          en: "Conceptual fintech and informed financial decisions",
        },
        image: "/manus-storage/fintech-literacy_539fa48c.webp",
        sourceUrl: "",
        publisher: "Nano Banana Pro",
        date: "",
        category: "رسومات الهوية / Brand illustrations",
        rights:
          "مولّد خصيصاً لسيمانور؛ رسم توضيحي غير توثيقي / Created for Semanoor; conceptual illustration, not documentary photography",
      },
    ],
  },
};

const STORAGE_KEY = "semanoor-content-draft-v1";

/**
 * Keys added after the first content packages were saved. When a stored draft
 * or imported package lacks one of these, the default value is used instead of
 * rejecting the whole package, so older drafts keep working.
 */
const OPTIONAL_KEYS = new Set([
  "features",
  "approach",
  "explorer",
  "atmosphere",
  "frames",
  "note",
  "date",
  "status",
  "kind",
  "areaLink",
  "focusLabel",
  "fieldsLabel",
  "filmLabel",
  "filmPlay",
  "filmNote",
  "scrollHint",
  "projectsNote",
  "archiveTitle",
  "archiveIntro",
  "archiveLink",
  "readLabel",
  "statusFinal",
  "statusDraft",
  "studioLink",
  "body",
]);

export function getSiteContent(): SiteContent {
  if (typeof window === "undefined") return defaultSiteContent;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultSiteContent;
    const parsed = JSON.parse(saved);
    return validateSiteContent({
      ...parsed,
      visuals: parsed.visuals ?? defaultSiteContent.visuals,
      media: parsed.media ?? defaultSiteContent.media,
    });
  } catch {
    return defaultSiteContent;
  }
}

export function saveSiteContent(content: SiteContent) {
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(validateSiteContent(content))
  );
  window.dispatchEvent(new Event("semanoor-content-updated"));
}

export function resetSiteContent() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("semanoor-content-updated"));
}

// Content packages must match the entire known shape. Values are rendered as
// plain React text, never HTML; links are restricted to https URLs.
export function validateSiteContent(value: unknown): SiteContent {
  const walk = (item: unknown, template: unknown, path: string): unknown => {
    if (typeof template === "string") {
      if (
        typeof item !== "string" ||
        item.length >
          (path.endsWith(".image") ||
          /\.(desktop|mobile|loop|statement|approach|journey|contact)$/.test(
            path
          )
            ? 1_500_000
            : 20000)
      )
        throw new Error(`Invalid string: ${path}`);
      return item;
    }
    if (Array.isArray(template)) {
      if (path === "content.media.items") {
        if (!Array.isArray(item) || item.length > 200)
          throw new Error("Invalid media size");
        return item.map((entry, index) =>
          walk(entry, defaultSiteContent.media.items[0], `${path}.${index}`)
        );
      }
      if (path.endsWith(".hero.frames")) {
        if (!Array.isArray(item) || item.length > 12)
          throw new Error("Invalid frames");
        return item.map((entry, index) => walk(entry, "", `${path}.${index}`));
      }
      if (!Array.isArray(item) || item.length !== template.length)
        throw new Error(`Invalid array: ${path}`);
      return item.map((entry, index) =>
        walk(entry, template[index], `${path}.${index}`)
      );
    }
    if (!item || typeof item !== "object" || Array.isArray(item))
      throw new Error(`Invalid object: ${path}`);
    return Object.fromEntries(
      Object.entries(template as Record<string, unknown>).map(
        ([key, example]) => [
          key,
          walk(
            (item as Record<string, unknown>)[key] ??
              (OPTIONAL_KEYS.has(key) ? example : undefined),
            example,
            `${path}.${key}`
          ),
        ]
      )
    );
  };
  const content = walk(value, defaultSiteContent, "content") as SiteContent;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.brand.email))
    throw new Error("Invalid email");
  for (const url of Object.values(content.social)) {
    if (url && (new URL(url).protocol !== "https:" || url.length > 2048))
      throw new Error("Unsafe social URL");
  }
  const imageEntries = [
    content.visuals.story,
    content.visuals.library,
    ...content.visuals.focus,
    ...content.visuals.solutions,
    ...content.visuals.projects,
    ...content.visuals.insights,
  ];
  for (const entry of imageEntries)
    if (!safeImageUrl(entry.image)) throw new Error("Unsafe image URL");
  const atmosphere = content.visuals.atmosphere;
  for (const url of [
    ...atmosphere.hero.frames,
    atmosphere.hero.desktop,
    atmosphere.hero.mobile,
    atmosphere.hero.loop,
    atmosphere.statement,
    atmosphere.approach,
    atmosphere.journey,
    atmosphere.contact,
  ])
    if (!safeImageUrl(url)) throw new Error("Unsafe atmosphere URL");
  for (const locale of [content.ar, content.en]) {
    for (const entry of locale.timeline.entries) {
      if (!["thematic", "approved"].includes(entry.status))
        throw new Error("Invalid milestone status");
      if (
        entry.date &&
        (!/^\d{4}-\d{2}-\d{2}$/.test(entry.date) ||
          new Date(entry.date + "T00:00:00Z").toISOString().slice(0, 10) !==
            entry.date)
      )
        throw new Error("Invalid milestone date");
    }
    for (const card of locale.insights.cards)
      if (!["final", "draft"].includes(card.status))
        throw new Error("Invalid article status");
    for (const project of locale.impact.projects)
      if (!["illustrative", "case-study"].includes(project.kind))
        throw new Error("Invalid project kind");
  }
  const ids = new Set<string>();
  for (const item of content.media.items) {
    if (!/^[a-zA-Z0-9_-]{1,100}$/.test(item.id) || ids.has(item.id))
      throw new Error("Invalid media ID");
    ids.add(item.id);
    if (
      !["illustration", "photo", "press"].includes(item.kind) ||
      !["draft", "approved"].includes(item.status)
    )
      throw new Error("Invalid media status");
    if (!safeImageUrl(item.image) || !safeSourceUrl(item.sourceUrl))
      throw new Error("Unsafe media URL");
    if (
      item.date &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(item.date) ||
        new Date(item.date + "T00:00:00Z").toISOString().slice(0, 10) !==
          item.date)
    )
      throw new Error("Invalid date");
    if (
      item.status === "approved" &&
      (!item.title.ar.trim() || !item.title.en.trim() || !item.rights.trim())
    )
      throw new Error("Approved media needs titles and rights");
    if (
      item.status === "approved" &&
      item.kind === "press" &&
      (!item.sourceUrl || !item.publisher.trim() || !item.date)
    )
      throw new Error("Press coverage needs source, publisher and date");
    if (
      item.status === "approved" &&
      item.image &&
      (!item.alt.ar.trim() || !item.alt.en.trim())
    )
      throw new Error("Approved images need accessible bilingual descriptions");
    if (item.status === "approved" && item.kind !== "press" && !item.image)
      throw new Error("Approved image missing");
  }
  return content;
}
