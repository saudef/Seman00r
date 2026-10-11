import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { solutionCatalog } from "@/data/solutionCatalog";
import { fieldIcons } from "@/data/fieldIcons";
import { requestExplore } from "@/lib/motion";
import { Arrow, Mono } from "./ui-kit";

export default function SignalStrip() {
  const { copy, content } = useLanguage();
  return (
    <section className="signal" aria-label={copy.hero.focusLabel}>
      <div className="container">
        <div className="signal__group">
          <div className="signal__head">
            <p className="label">{copy.hero.focusLabel}</p>
            <a href="#ecosystem" className="link link--muted">
              {copy.hero.secondaryCta}
              <Arrow size={14} />
            </a>
          </div>
          <ul className="signal__areas">
            {copy.ecosystem.areas.map((area, index) => {
              const visual = content.visuals.focus[index];
              return (
                <li key={area.number}>
                  <Link
                    href={`/solutions/${solutionCatalog[index].slug}`}
                    className="signal__area"
                  >
                    <span className="signal__thumb" aria-hidden="true">
                      {visual?.image && (
                        <img src={visual.image} alt="" decoding="async" />
                      )}
                    </span>
                    <span className="signal__text">
                      <Mono>{area.number}</Mono>
                      <strong>{area.title}</strong>
                    </span>
                    <span className="signal__arrow" aria-hidden="true">
                      <Arrow size={16} />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="signal__group">
          <div className="signal__head">
            <p className="label">{copy.hero.fieldsLabel}</p>
          </div>
          <ul className="signal__fields">
            {copy.hero.domains.map((field, index) => (
              <li key={field}>
                <a
                  href="#solutions"
                  className="signal__field"
                  onClick={() => requestExplore(index)}
                >
                  <span className="signal__icon" aria-hidden="true">
                    <img src={fieldIcons[index]} alt="" decoding="async" />
                  </span>
                  <span>{field}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
