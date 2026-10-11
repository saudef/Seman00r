import type { Language } from "./siteContent";

export type Bilingual = Record<Language, string>;
export type ProductAchievement = {
  id: string;
  solution: string;
  visualIndex: number;
  tag: Bilingual;
  title: Bilingual;
  description: Bilingual;
  value: Bilingual;
};

// Editorial source: company information supplied and approved by the user on 10 October 2026.
// Availability, comparative rankings, contract outcomes and licensing are not inferred.
export const productAchievements: ProductAchievement[] = [
  {
    id: "semanoor-platform",
    solution: "intelligent-learning",
    visualIndex: 0,
    tag: { ar: "المنتج الرئيسي للشركة", en: "Our flagship product" },
    title: {
      ar: "منصة سيمانور التعليمية",
      en: "The Semanoor learning platform",
    },
    description: {
      ar: "منصة تعليم وتدريب تجمع تقنيات ذكية وتفاعلية، وتخدم الأفراد والمدارس ومراكز التدريب، وتمتد إلى احتياجات الدول ووزارات التعليم. تجسّد المنصة خبرة سيمانور في وصل المحتوى بالتجربة التعليمية وتمكين المجتمع التعليمي من المشاركة في تطوير المعرفة.",
      en: "A learning and training platform combining intelligent and interactive technologies for individuals, schools and training centres, extending to the needs of countries and education ministries. It brings Semanoor’s experience in connecting content with learning experiences into a platform that enables the education community to participate in developing knowledge.",
    },
    value: {
      ar: "خبرة تتجاوز 30 عاماً في تقنيات التعليم، تتجدد بالذكاء الاصطناعي.",
      en: "More than 30 years of educational technology experience, renewed through AI.",
    },
  },
  {
    id: "jawani-wallet",
    solution: "jawani",
    visualIndex: 1,
    tag: {
      ar: "التقنية المالية والتربية الرقمية",
      en: "Fintech & digital parenting",
    },
    title: { ar: "محفظة جواني المالية", en: "The Jawani financial wallet" },
    description: {
      ar: "تجمع جواني بين التقنية المالية والتربية الرقمية في منتج موجّه لأولياء الأمور وأبنائهم من سن 6 إلى 24 عاماً. تضع الأسرة في قلب التجربة، وتصل التعامل مع العالم المالي الرقمي ببناء الوعي والمسؤولية عبر مراحل نمو الأبناء.",
      en: "Jawani brings fintech and digital parenting together in a product designed for parents and their children aged 6 to 24. It places families at the centre of the experience, connecting the digital financial world with awareness and responsibility as young people grow.",
    },
    value: {
      ar: "محفظة تربط التجربة المالية بدور الأسرة والتربية الرقمية.",
      en: "A wallet connecting financial experiences with families and digital parenting.",
    },
  },
  {
    id: "semanoor-startup-studio",
    solution: "startup-studio",
    visualIndex: 2,
    tag: {
      ar: "خبرة ومحركات لصناعة المنتجات",
      en: "Experience & engines for product building",
    },
    title: {
      ar: "ستوديو سيمانور للشركات الناشئة",
      en: "Semanoor Startup Studio",
    },
    description: {
      ar: "يجمع الاستوديو خلاصة تجارب سيمانور وتقنياتها ومحركاتها الذكية، ويوظفها في التعليم الذكي والتقنية المالية والألعاب الإلكترونية والنشر الإلكتروني والذكاء الاصطناعي وحلول الأعمال. قدرة متراكمة تتحول إلى منتجات وتجارب تخدم احتياجات حقيقية.",
      en: "The studio brings together Semanoor’s accumulated experience, technologies and intelligent engines across learning, fintech, electronic games, e-publishing, AI and business solutions. It turns established capabilities into products and experiences that address real needs.",
    },
    value: {
      ar: "تقنيات التعليم وصناعة المحتوى والألعاب، في منظومة لبناء حلول جديدة.",
      en: "Learning, content creation and game technologies brought together to build new solutions.",
    },
  },
];
