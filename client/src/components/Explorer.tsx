import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { EXPLORE_EVENT } from "@/lib/motion";
import { Arrow, Kicker, Lines, Mono } from "./ui-kit";

export default function Explorer() {
  const { copy, content, language, isRTL } = useLanguage();
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const explorer = copy.explorer;
  const fields = copy.hero.domains;
  const path = explorer.paths[index];
  const visual = content.visuals.solutions[index];
  const Chevron = isRTL ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const onExplore = (event: Event) => {
      const next = (event as CustomEvent<number>).detail;
      if (typeof next === "number" && explorer.paths[next]) setIndex(next);
    };
    window.addEventListener(EXPLORE_EVENT, onExplore);
    return () => window.removeEventListener(EXPLORE_EVENT, onExplore);
  }, [explorer.paths]);

  return (
    <section id="solutions" className="section" aria-labelledby="explore-title">
      <div className="container explore">
        <div className="explore__side">
          <Kicker>{explorer.overline}</Kicker>
          <h2 className="display-2" id="explore-title">
            <Lines text={explorer.title} />
          </h2>
          <p className="lead">{explorer.intro}</p>
          <p className="note">
            <Info size={14} aria-hidden="true" />
            {explorer.note}
          </p>
          <div
            className="explore__tabs"
            role="tablist"
            aria-label={explorer.overline}
          >
            {fields.map((field, i) => (
              <button
                key={field}
                type="button"
                role="tab"
                className="explore__tab"
                aria-pressed={i === index}
                aria-selected={i === index}
                aria-controls="explore-panel"
                onClick={() => setIndex(i)}
              >
                <Mono>0{i + 1}</Mono>
                <span>{field}</span>
                <Chevron size={16} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
        <div
          className="explore__panel"
          id="explore-panel"
          role="tabpanel"
          aria-live="polite"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${language}-${index}`}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                flex: 1,
              }}
            >
              <div className="explore__head">
                {isRTL ? (
                  <span className="label">استكشاف · 0{index + 1}</span>
                ) : (
                  <Mono>EXPLORATION / 0{index + 1}</Mono>
                )}
                <span className="pill pill--status">{explorer.pathLabel}</span>
              </div>
              {visual.image && (
                <div className="frame">
                  <img
                    className="frame__img"
                    src={visual.image}
                    alt={visual.alt[language]}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <p className="label">{fields[index]}</p>
              <h3 className="display-3">{path.title}</h3>
              <p className="body">{path.description}</p>
              <p className="label" style={{ marginTop: 6 }}>
                {explorer.stepsLabel}
              </p>
              <ol className="explore__steps">
                {path.steps.map((step, i) => (
                  <li key={step}>
                    <Mono>0{i + 1}</Mono>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="explore__foot">
                <a href="#contact" className="link">
                  {explorer.cta}
                  <Arrow size={16} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
