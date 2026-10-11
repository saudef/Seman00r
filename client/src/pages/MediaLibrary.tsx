import { useState } from "react";
import { Newspaper, Search, X } from "lucide-react";
import {
  Root as Dialog,
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Title as DialogTitle,
  Description as DialogDescription,
  Close as DialogClose,
} from "@radix-ui/react-dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { safeImageUrl, safeSourceUrl } from "@/data/mediaTypes";
import {
  suppliedLibraryPhotos,
  suppliedLibraryVideo,
  type LibraryMediaRecord,
} from "@/data/librarySuppliedMedia";
import { Kicker, TextLink } from "@/components/ui-kit";

export default function MediaLibrary() {
  const { content, language, isRTL } = useLanguage();
  const t = (ar: string, en: string) => (isRTL ? ar : en);
  const [filter, setFilter] = useState<LibraryMediaRecord["kind"] | "all">(
    "all"
  );
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const approved: LibraryMediaRecord[] = [
    ...content.media.items.filter(x => x.status === "approved"),
    ...suppliedLibraryPhotos,
    suppliedLibraryVideo(language),
  ];
  const items = approved.filter(
    x =>
      (filter === "all" || x.kind === filter) &&
      `${x.title[language]} ${x.description[language]} ${x.category} ${x.publisher}`
        .toLowerCase()
        .includes(query.toLowerCase())
  );
  const item = approved.find(x => x.id === selected);
  const names = {
    all: t("الكل", "All"),
    photo: t("الصور التوثيقية", "Documentary photos"),
    press: t("التغطيات الصحفية", "Press coverage"),
    illustration: t("الرسومات التوضيحية", "Illustrations"),
    video: t("الفيديوهات", "Videos"),
  };
  return (
    <main className="library-head section">
      <div className="container">
        <TextLink href="/#impact" muted>
          {t("العودة إلى سيمانور", "Back to Semanoor")}
        </TextLink>
        <div className="section-head" style={{ marginTop: 28 }}>
          <div>
            <Kicker>
              {t("أرشيف المعرفة والإعلام", "Knowledge & media archive")}
            </Kicker>
            <h1 className="display-2">
              {t("المكتبة الإعلامية", "Media Library")}
            </h1>
          </div>
          <p className="lead">
            {t(
              "استكشف الصور والفيديوهات والرسومات حسب الموضوع، واطّلع على تفاصيل كل مادة ومصدرها.",
              "Explore photos, videos and illustrations by topic, with details and sources for each item."
            )}
          </p>
        </div>
        <div className="toolbar">
          <div
            className="tabs"
            role="group"
            aria-label={t("تصنيف المواد", "Filter media")}
          >
            {(["all", "photo", "press", "illustration", "video"] as const)
              .filter(
                kind =>
                  kind === "all" || approved.some(entry => entry.kind === kind)
              )
              .map(kind => (
                <button
                  type="button"
                  key={kind}
                  className="tab"
                  aria-pressed={filter === kind}
                  onClick={() => setFilter(kind)}
                >
                  {names[kind]}
                </button>
              ))}
          </div>
          <label className="search">
            <Search size={16} aria-hidden="true" />
            <input
              aria-label={t("بحث في المكتبة", "Search library")}
              placeholder={t("ابحث بعنوان أو مصدر…", "Search title or source…")}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </label>
        </div>
        <div className="media-grid">
          {items.map(x => (
            <article key={x.id} className="media-card" data-media-kind={x.kind}>
              <button
                className="media-card__open"
                type="button"
                onClick={() => setSelected(x.id)}
              >
                {x.image && safeImageUrl(x.image, false) ? (
                  <img
                    src={x.image}
                    alt={x.alt[language] || x.title[language]}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="media-card__ph">
                    <Newspaper size={36} aria-hidden="true" />
                  </div>
                )}
                <div className="media-card__body">
                  <span className="label">{names[x.kind]}</span>
                  <h2 className="display-4">{x.title[language]}</h2>
                  <p>{x.description[language]}</p>
                </div>
              </button>
              <div className="media-card__foot">
                {x.date ? (
                  <time dateTime={x.date}>{x.date}</time>
                ) : (
                  <span>{x.publisher}</span>
                )}
                {x.sourceUrl && safeSourceUrl(x.sourceUrl) && (
                  <TextLink
                    href={x.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    muted
                  >
                    {t("المصدر الأصلي", "Original source")}
                  </TextLink>
                )}
              </div>
            </article>
          ))}
        </div>
        {!items.length && (
          <div className="empty">
            <h2 className="display-4">
              {t("لا توجد نتائج مطابقة", "No matching results")}
            </h2>
            <p>
              {t(
                "جرّب كلمة أخرى أو تصنيفاً مختلفاً.",
                "Try another keyword or category."
              )}
            </p>
          </div>
        )}
      </div>
      <Dialog open={!!item} onOpenChange={open => !open && setSelected(null)}>
        <DialogPortal>
          <DialogOverlay className="dialog__overlay" />
          <DialogContent className="dialog reader" dir={isRTL ? "rtl" : "ltr"}>
            <DialogClose
              className="dialog__close"
              aria-label={t("إغلاق", "Close")}
            >
              <X size={18} aria-hidden="true" />
            </DialogClose>
            {item && (
              <>
                <span className="label">{names[item.kind]}</span>
                <DialogTitle className="display-3">
                  {item.title[language]}
                </DialogTitle>
                <DialogDescription className="body">
                  {item.description[language]}
                </DialogDescription>
                {item.kind === "video" && item.video ? (
                  <video
                    key={`${item.id}-${language}`}
                    src={item.video}
                    poster={item.image}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={item.title[language]}
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      background: "#000",
                    }}
                  >
                    {t(
                      "متصفحك لا يدعم عرض الفيديو.",
                      "Your browser does not support video playback."
                    )}
                  </video>
                ) : (
                  item.image && (
                    <img
                      className="frame__img frame__img--contain"
                      src={item.image}
                      alt={item.alt[language] || item.title[language]}
                      style={{ maxHeight: 420, width: "100%" }}
                    />
                  )
                )}
                <p className="muted" style={{ fontSize: 13, margin: 0 }}>
                  {names[item.kind]} · {item.publisher}
                  {item.date && ` · ${item.date}`}
                </p>
                {item.rights && (
                  <p className="muted" style={{ fontSize: 13, margin: 0 }}>
                    {item.rights}
                  </p>
                )}
                {item.sourceUrl && (
                  <TextLink
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("زيارة المصدر", "Visit source")}
                  </TextLink>
                )}
              </>
            )}
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </main>
  );
}
