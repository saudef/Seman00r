import { useState } from "react";
import { Play } from "lucide-react";
import { approvedHeroVideos } from "@/data/approvedMedia";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mono } from "./ui-kit";

export default function FilmModule() {
  const { language, isRTL, copy } = useLanguage();
  const media = approvedHeroVideos[language];
  const [playing, setPlaying] = useState(false);
  return (
    <section
      id="film"
      className="section section--tight"
      aria-labelledby="film-title"
    >
      <div className="container">
        <div
          className="film__frame"
          data-approved-video={media.approvedVersion}
          key={language}
        >
          {playing ? (
            <video
              src={media.src}
              poster={media.poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={media.label}
            >
              {isRTL
                ? "متصفحك لا يدعم عرض الفيديو."
                : "Your browser does not support video playback."}
            </video>
          ) : (
            <>
              <img
                src={media.poster}
                alt={media.label}
                loading="lazy"
                decoding="async"
              />
              <button
                type="button"
                className="film__play"
                onClick={() => setPlaying(true)}
                aria-label={`${copy.hero.filmPlay} · ${media.label}`}
              >
                <span>
                  <Play size={18} aria-hidden="true" />
                  {copy.hero.filmPlay}
                </span>
              </button>
            </>
          )}
        </div>
        <div className="film__meta">
          <p className="label" id="film-title">
            <Mono>SEMANOOR / 30s</Mono>
            <span aria-hidden="true">·</span>
            {copy.hero.filmLabel}
          </p>
          <p>{copy.hero.filmNote}</p>
        </div>
      </div>
    </section>
  );
}
