import { CalendarClock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mono, SectionHead } from "./ui-kit";

export default function Journey() {
  const { copy, content, language } = useLanguage();
  const timeline = copy.timeline;
  return (
    <section
      id="timeline"
      className="section statement-wrap"
      aria-labelledby="journey-title"
    >
      <img
        className="statement__bg"
        src={content.visuals.atmosphere.journey}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="container">
        <SectionHead
          id="journey-title"
          kicker={timeline.overline}
          title={timeline.title}
          lead={timeline.intro}
        />
        <p className="note" style={{ marginBottom: 28 }}>
          <CalendarClock size={14} aria-hidden="true" />
          {timeline.note}
        </p>
        <ol className="journey">
          {timeline.entries.map((entry, index) => (
            <li className="journey__item" key={`${entry.period}-${index}`}>
              <div className="journey__period">
                <Mono>0{index + 1}</Mono>
                <span>{entry.period}</span>
              </div>
              {entry.status === "approved" && entry.date && (
                <time dateTime={entry.date}>
                  {new Intl.DateTimeFormat(
                    language === "ar" ? "ar-SA" : "en-GB",
                    {
                      year: "numeric",
                      month: "long",
                    }
                  ).format(new Date(entry.date + "T00:00:00Z"))}
                </time>
              )}
              <h3 className="display-4">{entry.title}</h3>
              <p>{entry.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
