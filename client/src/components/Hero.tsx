import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ButtonLink } from "./ui-kit";

export default function Hero() {
  const { copy, content, language, isRTL } = useLanguage();
  const reduced = useReducedMotion();
  const atmosphere = content.visuals.atmosphere.hero;
  const [loopFailed, setLoopFailed] = useState(false);
  const [loopReady, setLoopReady] = useState(false);
  useEffect(() => {
    if (!atmosphere.loop || reduced) return;
    let cancelled = false;
    fetch(atmosphere.loop, { method: "HEAD" })
      .then(response => {
        if (!cancelled)
          setLoopReady(
            response.ok &&
              (response.headers.get("content-type") ?? "").startsWith("video")
          );
      })
      .catch(() => {
        if (!cancelled) setLoopReady(false);
      });
    return () => {
      cancelled = true;
    };
  }, [atmosphere.loop, reduced]);
  const showLoop = !reduced && loopReady && !loopFailed;
  const [framesReady, setFramesReady] = useState(false);
  useEffect(() => {
    if (reduced || !atmosphere.frames.length) return;
    let timer = 0;
    const arm = () => {
      timer = window.setTimeout(() => setFramesReady(true), 400);
    };
    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", arm);
    };
  }, [reduced, atmosphere.frames.length]);
  const hero = copy.hero;
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <picture>
          <source media="(max-width: 640px)" srcSet={atmosphere.mobile} />
          <img
            src={atmosphere.desktop}
            alt=""
            {...({ fetchpriority: "high" } as Record<string, string>)}
            decoding="async"
          />
        </picture>
        {!reduced && !showLoop && (
          <>
            <div
              className="hero__drift"
              style={{ backgroundImage: `url(${atmosphere.desktop})` }}
            />
            <div
              className="hero__drift hero__drift--b"
              style={{ backgroundImage: `url(${atmosphere.desktop})` }}
            />
          </>
        )}
        {showLoop && (
          <video
            src={atmosphere.loop}
            poster={atmosphere.desktop}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            onError={() => setLoopFailed(true)}
            tabIndex={-1}
          />
        )}
      </div>
      <motion.div
        className="container hero__content"
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label">
          <span className="label__dot" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 className="display-1" id="hero-title">
          <span>{hero.title}</span>
          <em>{hero.accent}</em>
        </h1>
        <p className="lead">{hero.description}</p>
        <div className="hero__actions">
          <ButtonLink href="#contact">{hero.primaryCta}</ButtonLink>
          <ButtonLink href="#ecosystem" variant="ghost">
            {hero.secondaryCta}
          </ButtonLink>
        </div>
      </motion.div>
      <div className="hero__foot">
        <a
          href="#film"
          className="hero__scroll"
          aria-label={
            language === "ar"
              ? "انتقل إلى الفيديو التعريفي"
              : "Scroll to the introduction film"
          }
        >
          <span>{hero.scrollHint}</span>
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
      <span className="sr-only">
        {isRTL ? atmosphere.alt.ar : atmosphere.alt.en}
      </span>
    </section>
  );
}
