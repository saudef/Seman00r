import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { solutionCatalog } from "@/data/solutionCatalog";
import Reveal from "./Reveal";
import JawaniCard from "./JawaniCard";
import { Arrow, Mono, SectionHead } from "./ui-kit";

export const FOCUS_PALETTE = ["violet", "iris", "sky", "orchid"] as const;
const SPANS = [7, 5, 5, 7] as const;

export default function FocusModules() {
  const { copy, content, language, isRTL } = useLanguage();
  const visuals = content.visuals.focus;
  return (
    <section id="ecosystem" className="section" aria-labelledby="focus-title">
      <div className="container">
        <SectionHead
          id="focus-title"
          kicker={copy.ecosystem.overline}
          title={copy.ecosystem.title}
          lead={copy.ecosystem.intro}
        />
        <div className="modules">
          {copy.ecosystem.areas.map((area, index) => {
            const isJawani = index === 3;
            const image = isJawani ? "card" : visuals[index].image;
            const alt = isJawani ? "" : visuals[index].alt[language];
            return (
              <Reveal
                as="article"
                key={area.number}
                className={`module module--${FOCUS_PALETTE[index]} module--span-${SPANS[index]}`}
                delay={index * 0.06}
                aria-labelledby={`focus-${index}`}
              >
                <div className="module__top">
                  <Mono>{area.number}</Mono>
                  <p className="label">{area.label}</p>
                </div>
                {image && (
                  <div
                    className={`module__art ${isJawani ? "module__art--card" : ""}`}
                  >
                    {isJawani ? (
                      <JawaniCard />
                    ) : (
                      <img
                        src={image}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                )}
                <h3 className="display-3 module__title" id={`focus-${index}`}>
                  {area.title}
                </h3>
                <p className="module__desc">{area.description}</p>
                <ul className="module__chips">
                  {area.outcomes.map(outcome => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <div className="module__foot">
                  <Link
                    href={`/solutions/${solutionCatalog[index].slug}`}
                    className="link"
                  >
                    {copy.ecosystem.areaLink}
                    <Arrow size={16} />
                  </Link>
                  {isRTL ? (
                    <span className="label">محور</span>
                  ) : (
                    <Mono>FOCUS AREA</Mono>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
