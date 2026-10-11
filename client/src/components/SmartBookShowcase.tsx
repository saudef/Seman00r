import { Link } from "wouter";
import {
  BookOpen,
  BrainCircuit,
  GitBranch,
  History,
  Info,
  Layers3,
} from "lucide-react";
import type { Language } from "@/data/siteContent";
import { Arrow, Kicker, Lines, Mono } from "./ui-kit";

/* Approved concept copy (draft 15). Presentation is static; there is no live demo. */
const stages = [
  {
    Icon: BrainCircuit,
    title: { ar: "يتعرف إلى المتعلم", en: "Gets to know the learner" },
    short: {
      ar: "من تفاعله وإجاباته يبدأ فهم احتياجه.",
      en: "Understanding needs begins with interaction and responses.",
    },
    description: {
      ar: "يستفيد عقل الكتاب من تفاعل المتعلم وإجاباته لبناء فهم لاحتياجه الحالي. تصبح المعرفة أقرب إلى الطالب حين ينطلق التعليم مما يفهمه وما يحتاج إلى توضيحه.",
      en: "The book’s educational mind uses the learner’s interactions and responses to understand their current needs. Knowledge becomes more relevant when teaching begins with what the learner understands and what needs clarification.",
    },
  },
  {
    Icon: GitBranch,
    title: { ar: "يكيّف طريقة التعليم", en: "Adapts the way it teaches" },
    short: {
      ar: "يكيّف الشرح والأمثلة مع قدراته واحتياجه.",
      en: "Adapts explanations and examples to abilities and needs.",
    },
    description: {
      ar: "يكيّف الشرح والأمثلة مع قدرات المتعلم وإمكاناته، ليقدم المعرفة بأسلوب أقرب إليه. ينتقل الكتاب من محتوى يقرأه الجميع بالطريقة نفسها إلى خبير تعليمي وتربوي يراعي اختلاف المتعلمين.",
      en: "Explanations and examples adapt to the learner’s abilities, presenting knowledge in a more relevant way. The book moves beyond content everyone reads identically toward an educational guide that recognizes differences between learners.",
    },
  },
  {
    Icon: History,
    title: { ar: "يتابع الرحلة", en: "Follows the learning journey" },
    short: {
      ar: "يتابع تقدمه ويوجه الخطوة التالية.",
      en: "Follows progress and guides the next step.",
    },
    description: {
      ar: "يتابع مسار التعلم ويستفيد مما تعلمه عن الطالب لتوجيه الخطوة التالية. لا تبدأ العلاقة مع المحتوى من الصفر في كل مرة؛ بل تتطور التجربة مع الفهم والتفاعل والتقدم.",
      en: "It follows the learning journey and uses what it has learned about the student to guide the next step. The relationship with content develops through understanding, interaction and progress rather than starting from scratch each time.",
    },
  },
  {
    Icon: Layers3,
    title: { ar: "يمكّن صناعة المعرفة", en: "Enables knowledge creation" },
    short: {
      ar: "محركات سيمانور تمكّن المعلمين والمتعلمين من تطوير المحتوى وتخصيصه.",
      en: "Semanoor’s engines enable educators and learners to develop and personalize content.",
    },
    description: {
      ar: "تتكامل الفكرة مع محركات سيمانور لإنتاج المحتوى، المعززة بالذكاء الاصطناعي في إصدارها الجديد. يشارك المجتمع التعليمي في تطوير المعرفة وتخصيصها للطلاب، وتنمية مهارات التعلم والتقنية وصناعة المحتوى.",
      en: "The concept connects with Semanoor’s content production engines, enhanced with AI in their new edition. The education community participates in developing and personalizing knowledge while building learning, technical and content creation skills.",
    },
  },
];

type Props = { language: Language; image: string; compact?: boolean };

export default function SmartBookShowcase({
  language,
  image,
  compact = false,
}: Props) {
  const isRTL = language === "ar";
  const t = (ar: string, en: string) => (isRTL ? ar : en);
  return (
    <section
      id={compact ? "smart-book-overview" : "smart-book"}
      className="section band--deep band--line-top band--line-bottom"
      data-smart-book={compact ? "compact" : "full"}
      aria-labelledby={
        compact ? "smart-book-overview-title" : "smart-book-title"
      }
    >
      <div className="container">
        <div className="editorial">
          <div className="editorial__copy">
            <Kicker>
              <BookOpen size={14} aria-hidden="true" />
              {t("الكتاب الذكي المخصص", "The personalized smart book")}
            </Kicker>
            <h2
              className="display-2"
              id={compact ? "smart-book-overview-title" : "smart-book-title"}
            >
              <Lines
                text={t(
                  "جعلنا للكتاب عقلاً…\nليصبح خبيراً يرافق المتعلم.",
                  "A book with a mind.\nAn expert that grows with the learner."
                )}
              />
            </h2>
            <p className="lead">
              {compact
                ? t(
                    "كتاب له عقل تعليمي وتربوي يفهم احتياج المتعلم، ويكيّف الشرح مع قدراته، ويتابع تقدمه. وتتكامل معه محركات سيمانور لتمكين المجتمع التعليمي من تطوير المحتوى وتخصيصه؛ معرفة أقرب إلى الطالب، ومشاركة أوسع في صناعتها.",
                    "A book with an educational mind that understands learner needs, adapts explanations to their abilities and follows their progress. Semanoor’s content engines complement this approach, enabling the education community to develop and personalize content: knowledge that is more relevant to each learner, with broader participation in its creation."
                  )
                : t(
                    "خلاصة خبرة سيمانور في تقنيات التعليم ومعالجة تحديات التعلم الإلكتروني، تتصل بإمكانات الذكاء الاصطناعي. عقل تعليمي وتربوي يجعل علاقة الطالب بالكتاب أكثر تخصيصاً، ويربط المعرفة بالفهم والممارسة والتقدم.",
                    "Semanoor’s accumulated experience in educational technology and addressing e-learning challenges meets the possibilities of AI. An educational mind makes the learner’s relationship with the book more personal, connecting knowledge with understanding, practice and progress."
                  )}
            </p>
            <p className="note">
              <Info size={14} aria-hidden="true" />
              {t(
                "عرض مفاهيمي ثابت لفكرة الكتاب الذكي، وليس تجربة حية.",
                "A static concept presentation of the smart book, not a live demo."
              )}
            </p>
            {compact && (
              <Link href="/solutions/intelligent-learning" className="link">
                {t("تعرّف إلى الكتاب الذكي", "Discover the smart book")}
                <Arrow size={16} />
              </Link>
            )}
          </div>
          <figure className="frame editorial__art">
            {image && (
              <img
                className="frame__img frame__img--contain"
                src={image}
                alt={t(
                  "رسم توضيحي معتمد للكتاب الذكي وشبكة المعرفة",
                  "Approved conceptual artwork of a smart book and connected knowledge"
                )}
                loading="lazy"
                decoding="async"
              />
            )}
            <figcaption className="frame__cap">
              <span>
                {t(
                  "من كتاب يحمل المعرفة إلى خبير يرافق التعلم",
                  "From a book holding knowledge to an expert guiding learning"
                )}
              </span>
              <Mono>CONCEPT</Mono>
            </figcaption>
          </figure>
        </div>
        <ol
          className="steps"
          aria-label={t(
            "مراحل فكرة الكتاب الذكي",
            "The four stages of the smart-book concept"
          )}
        >
          {stages.map(({ Icon, title, short, description }, index) => (
            <li className="step" key={index} data-smart-book-stage>
              <Mono>0{index + 1}</Mono>
              <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              <h3 className="display-4">{title[language]}</h3>
              <p>{compact ? short[language] : description[language]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
