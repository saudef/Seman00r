import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "./Reveal";
import { Kicker } from "./ui-kit";

export default function Statement() {
  const { copy, content } = useLanguage();
  return (
    <section
      id="story"
      className="section statement-wrap"
      aria-labelledby="story-title"
    >
      <img
        className="statement__bg"
        src={content.visuals.atmosphere.statement}
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <Reveal className="container statement">
        <Kicker>{copy.story.overline}</Kicker>
        <h2 className="display-2" id="story-title">
          {copy.story.title}
        </h2>
        <p className="lead">{copy.story.lead}</p>
        <div className="statement__glow" aria-hidden="true" />
      </Reveal>
    </section>
  );
}
