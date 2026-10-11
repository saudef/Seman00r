import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { suppliedLibraryPhotos } from "@/data/librarySuppliedMedia";
import { TextLink } from "./ui-kit";

function Archive() {
  const { language, isRTL, copy } = useLanguage();
  const [viewportRef, api] = useEmblaCarousel({
    align: "start",
    direction: isRTL ? "rtl" : "ltr",
    containScroll: "trimSnaps",
    loop: false,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const Previous = isRTL ? ChevronRight : ChevronLeft;
  const Next = isRTL ? ChevronLeft : ChevronRight;
  const sync = useCallback(() => {
    if (!api) return;
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, [api]);
  useEffect(() => {
    if (!api) return;
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => {
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api, sync]);
  useEffect(() => {
    api?.reInit({ direction: isRTL ? "rtl" : "ltr" });
  }, [api, isRTL]);
  function navigate(next: boolean, keyboard = false) {
    const instant =
      keyboard || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (next) api?.scrollNext(instant);
    else api?.scrollPrev(instant);
  }
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    navigate(
      isRTL ? event.key === "ArrowLeft" : event.key === "ArrowRight",
      true
    );
  }
  return (
    <div className="archive" id="media-library">
      <div className="archive__head">
        <div>
          <h2
            className="display-3"
            id="archive-title"
            style={{ marginBottom: 12 }}
          >
            {copy.impact.archiveTitle}
          </h2>
          <p className="body">{copy.impact.archiveIntro}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <TextLink href="/media" internal>
            {copy.impact.archiveLink}
          </TextLink>
          <div className="archive__controls">
            <button
              type="button"
              className="archive__btn"
              onClick={() => navigate(false)}
              disabled={!canPrev}
              aria-label={isRTL ? "الصور السابقة" : "Previous photographs"}
              aria-controls="documentary-photo-track"
              data-photo-prev
            >
              <Previous size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="archive__btn"
              onClick={() => navigate(true)}
              disabled={!canNext}
              aria-label={isRTL ? "الصور التالية" : "Next photographs"}
              aria-controls="documentary-photo-track"
              data-photo-next
            >
              <Next size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="archive__carousel">
        <div
          className="archive__viewport"
          ref={viewportRef}
          role="region"
          aria-roledescription={isRTL ? "شريط صور" : "carousel"}
          aria-label={
            isRTL
              ? "صور لقاءات واتفاقيات سيمانور"
              : "Semanoor meetings and agreements photographs"
          }
          tabIndex={0}
          onKeyDown={onKeyDown}
          data-photo-strip
        >
          <div id="documentary-photo-track" className="archive__track">
            {suppliedLibraryPhotos.map((photo, index) => (
              <div
                className="archive__slide"
                key={photo.id}
                role="group"
                aria-label={`${index + 1} / ${suppliedLibraryPhotos.length}`}
                data-documentary-photo={photo.id}
              >
                <figure>
                  <img
                    src={photo.image}
                    alt={photo.alt[language]}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <figcaption>{photo.title[language]}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArchiveSection() {
  return (
    <section
      id="archive"
      className="section section--tight band--line-top"
      aria-labelledby="archive-title"
    >
      <div className="container">
        <Archive />
      </div>
    </section>
  );
}
