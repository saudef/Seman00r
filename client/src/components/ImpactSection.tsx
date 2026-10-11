import { Link } from "wouter";
import { Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { productAchievements } from "@/data/productAchievements";
import { Arrow, Mono, SectionHead } from "./ui-kit";

export default function ImpactSection() {
  const { copy, content, language } = useLanguage();
  const impact = copy.impact;
  return (
    <section
      id="impact"
      className="section band--paper"
      aria-labelledby="impact-title"
    >
      <div className="container">
        <SectionHead
          id="impact-title"
          kicker={impact.overline}
          title={impact.title}
          lead={impact.lead}
        />
        <p className="note" style={{ marginBottom: 28 }}>
          <Info size={14} aria-hidden="true" />
          {impact.note}
        </p>
        <div className="pillars">
          {impact.metrics.map((item, index) => (
            <div className="pillar" key={item.label}>
              <Mono>0{index + 1}</Mono>
              <span className="display-3">{item.value}</span>
              <strong>{item.label}</strong>
              <p>{item.note}</p>
            </div>
          ))}
        </div>

        <h3
          className="display-3"
          style={{ marginTop: "clamp(48px, 6vw, 80px)" }}
        >
          {language === "ar"
            ? "إنجازات تبني عليها سيمانور المستقبل"
            : "Achievements shaping Semanoor’s future"}
        </h3>
        <div
          className="highlights"
          data-product-achievements
          style={{ marginTop: 28 }}
        >
          {productAchievements.map((product, index) => {
            const visual = content.visuals.projects[product.visualIndex];
            return (
              <article
                className="highlight"
                key={product.id}
                data-product-achievement={product.id}
              >
                <div className="highlight__art" aria-hidden="true">
                  {visual.image && (
                    <img
                      src={visual.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <Mono>0{index + 1}</Mono>
                </div>
                <div className="highlight__body">
                  <span className="label">{product.tag[language]}</span>
                  <h4 className="display-4">{product.title[language]}</h4>
                  <p>{product.description[language]}</p>
                  <p className="highlight__value">{product.value[language]}</p>
                  <Link
                    href={`/solutions/${product.solution}`}
                    className="link"
                  >
                    {language === "ar"
                      ? "تعرّف إلى المنتج"
                      : "Discover the product"}
                    <Arrow size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
