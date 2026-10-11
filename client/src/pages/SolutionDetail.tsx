import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { solutionCatalog } from "@/data/solutionCatalog";
import SmartBookShowcase from "@/components/SmartBookShowcase";
import { FOCUS_PALETTE } from "@/components/FocusModules";
import {
  Arrow,
  ButtonLink,
  Kicker,
  Mono,
  SectionHead,
} from "@/components/ui-kit";

export default function SolutionDetail({ slug }: { slug: string }) {
  const { language, content, isRTL } = useLanguage();
  const Back = isRTL ? ChevronRight : ChevronLeft;
  const page = solutionCatalog.find(item => item.slug === slug);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);
  if (!page)
    return (
      <main className="container missing">
        <h1 className="display-3">
          {isRTL ? "الحل غير موجود" : "Solution not found"}
        </h1>
        <ButtonLink href="/#ecosystem" variant="ghost">
          {isRTL ? "العودة إلى المحاور" : "Back to focus areas"}
        </ButtonLink>
      </main>
    );
  const visual = content.visuals.focus[page.focusIndex];
  const area = content[language].ecosystem.areas[page.focusIndex];
  const tone = FOCUS_PALETTE[page.focusIndex];
  return (
    <main data-solution-page={slug}>
      <section
        className={`detail-hero module--${tone}`}
        aria-labelledby="solution-title"
      >
        <div className="container">
          <Link
            href="/#ecosystem"
            className="link link--inherit"
            style={{ marginBottom: 36 }}
          >
            <Back size={16} aria-hidden="true" />
            {isRTL
              ? "العودة إلى محاور سيمانور"
              : "Back to Semanoor’s focus areas"}
          </Link>
          <div className="detail-hero__grid">
            <div className="detail-hero__copy">
              <div
                className="module__top"
                style={{ justifyContent: "flex-start", gap: 14 }}
              >
                <Mono>{area.number}</Mono>
                <p className="label" style={{ color: "inherit", opacity: 0.8 }}>
                  {page.title[language]}
                </p>
              </div>
              <h1
                className="display-1"
                id="solution-title"
                style={{ fontSize: "clamp(38px, 4.8vw, 66px)" }}
              >
                {page.headline[language]}
              </h1>
              <p className="lead" style={{ color: "inherit", opacity: 0.85 }}>
                {page.intro[language]}
              </p>
              <ul
                className="chips"
                aria-label={isRTL ? "الفئات المستفيدة" : "Intended audiences"}
              >
                {page.audience.map(item => (
                  <li key={item[language]}>{item[language]}</li>
                ))}
              </ul>
              <div>
                <ButtonLink
                  href="/#contact"
                  variant={tone === "violet" ? "primary" : "dark"}
                >
                  {isRTL ? "ناقش احتياجك" : "Discuss your needs"}
                </ButtonLink>
              </div>
            </div>
            <figure className="frame" style={{ margin: 0 }}>
              {visual.image && (
                <img
                  className="frame__img"
                  src={visual.image}
                  alt={visual.alt[language]}
                  decoding="async"
                />
              )}
              <figcaption className="frame__cap">
                <span>{visual.alt[language]}</span>
                {isRTL ? (
                  <span className="label">رسم توضيحي</span>
                ) : (
                  <Mono>ILLUSTRATION</Mono>
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {slug === "intelligent-learning" && (
        <SmartBookShowcase
          language={language}
          image={content.visuals.focus[0].image}
        />
      )}

      <section className="section" aria-labelledby="capabilities-title">
        <div className="container">
          <SectionHead
            id="capabilities-title"
            kicker={isRTL ? "منتجات وقدرات" : "Products & capabilities"}
            title={
              isRTL
                ? "ما تقدمه سيمانور في هذا المحور"
                : "What Semanoor brings to this focus area"
            }
          />
          <div className="cards-3">
            {page.capabilities.map((item, index) => (
              <article
                className="card"
                key={item.title[language]}
                data-capability
              >
                <Mono>0{index + 1}</Mono>
                <h3 className="display-4">{item.title[language]}</h3>
                <p>{item.description[language]}</p>
                <ul>
                  {item.points.map(point => (
                    <li key={point[language]}>{point[language]}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section band--deep band--line-top"
        aria-labelledby="access-title"
      >
        <div className="container">
          <div className="access">
            <div>
              <Kicker>{isRTL ? "الخطوة التالية" : "Your next step"}</Kicker>
              <h2 className="display-2" id="access-title">
                {isRTL
                  ? "تعرّف إلى الإتاحة المناسبة لاحتياجك"
                  : "Explore access that fits your needs"}
              </h2>
              <p className="note" style={{ marginTop: 24 }}>
                <Info size={14} aria-hidden="true" />
                {page.availability[language]}
              </p>
            </div>
            <div>
              <ol className="access__steps">
                {page.cooperation.map((step, index) => (
                  <li key={step[language]}>
                    <Mono>0{index + 1}</Mono>
                    <span>{step[language]}</span>
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: 28 }}>
                <ButtonLink href="/#contact">
                  {isRTL
                    ? "تواصل مع فريق سيمانور"
                    : "Contact the Semanoor team"}
                </ButtonLink>
              </div>
            </div>
          </div>
          <nav
            className="related"
            aria-label={
              isRTL ? "محاور سيمانور الأخرى" : "Other Semanoor focus areas"
            }
          >
            {solutionCatalog
              .filter(item => item.slug !== slug)
              .map(item => (
                <Link
                  key={item.slug}
                  href={`/solutions/${item.slug}`}
                  className="pill"
                >
                  {item.title[language]}
                  <Arrow size={12} />
                </Link>
              ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
