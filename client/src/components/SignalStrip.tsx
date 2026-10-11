import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { solutionCatalog } from "@/data/solutionCatalog";
import { requestExplore } from "@/lib/motion";

export default function SignalStrip() {
  const { copy } = useLanguage();
  return (
    <section className="signal" aria-label={copy.hero.focusLabel}>
      <div className="container">
        <div className="signal__row">
          <p className="label">{copy.hero.focusLabel}</p>
          <ul className="signal__list">
            {copy.ecosystem.areas.map((area, index) => (
              <li key={area.number}>
                <Link
                  href={`/solutions/${solutionCatalog[index].slug}`}
                  className="signal__item signal__item--area"
                >
                  <i aria-hidden="true" />
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="signal__row">
          <p className="label">{copy.hero.fieldsLabel}</p>
          <ul className="signal__list">
            {copy.hero.domains.map((field, index) => (
              <li key={field}>
                <a
                  href="#solutions"
                  className="signal__item signal__item--field"
                  onClick={() => requestExplore(index)}
                >
                  <i aria-hidden="true" />
                  {field}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
