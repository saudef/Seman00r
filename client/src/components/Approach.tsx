import { Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "./Reveal";
import { Kicker, Mono } from "./ui-kit";

export default function Approach() {
  const { copy, content } = useLanguage();
  const approach = copy.approach;
  return (
    <section
      id="approach"
      className="section band--deep approach-wrap"
      aria-labelledby="approach-title"
    >
      <img
        className="approach__bg"
        src={content.visuals.atmosphere.approach}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="container">
        <Reveal className="section-head section-head--top">
          <div>
            <Kicker>{approach.overline}</Kicker>
            <h2 className="display-2" id="approach-title">
              {approach.title} <em>{approach.accent}</em>
            </h2>
          </div>
          <div>
            <p className="lead">{approach.intro}</p>
            <p className="body" style={{ marginTop: 18 }}>
              {copy.story.body}
            </p>
          </div>
        </Reveal>

        <div className="path" role="list" aria-label={approach.overline}>
          <ol className="path__nodes">
            {approach.stages.map((stage, index) => (
              <li className="path__node" key={stage.title} role="listitem">
                <span className="path__dot" aria-hidden="true" />
                <Mono>0{index + 1}</Mono>
                <strong>{stage.title}</strong>
                <span>{stage.description}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className="note" style={{ marginTop: 32 }}>
          <Info size={14} aria-hidden="true" />
          {approach.stagesNote}
        </p>

        <div className="principles">
          {copy.story.principles.map((principle, index) => (
            <div className="principle" key={principle.title}>
              <Mono>0{index + 1}</Mono>
              <h3 className="display-4">{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>

        <h3
          className="display-3"
          style={{ marginTop: "clamp(48px, 6vw, 80px)" }}
        >
          {approach.distinctionsTitle}
        </h3>
        <ul className="distinctions">
          {copy.features.cards.map((card, index) => (
            <li className="distinction" key={card.title}>
              <Mono>0{index + 1}</Mono>
              <div>
                <strong>{card.title}</strong>
                <span>{card.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
