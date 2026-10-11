import { useState } from "react";
import {
  Root as Dialog,
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Title as DialogTitle,
  Description as DialogDescription,
  Close as DialogClose,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Arrow, Button, SectionHead } from "./ui-kit";

export default function Insights() {
  const { copy, content, language, isRTL } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const insights = copy.insights;
  const article = open === null ? null : insights.cards[open];
  return (
    <section id="insights" className="section" aria-labelledby="insights-title">
      <div className="container">
        <SectionHead
          id="insights-title"
          kicker={insights.overline}
          title={insights.title}
          lead={insights.intro}
        />
        <div className="articles">
          {insights.cards.map((card, index) => {
            const visual = content.visuals.insights[index];
            return (
              <button
                type="button"
                className={`article article--${index}`}
                key={card.title}
                onClick={() => setOpen(index)}
              >
                <div className="article__top">
                  <span className="label">{card.category}</span>
                  {card.status === "draft" && (
                    <span className="pill pill--status">
                      {insights.statusDraft}
                    </span>
                  )}
                  <span className="article__go" aria-hidden="true">
                    <Arrow size={18} />
                  </span>
                </div>
                {visual?.image && (
                  <img
                    className="article__image"
                    src={visual.image}
                    alt={visual.alt[language]}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <h3 className="display-4">{card.title}</h3>
                <p className="article__text">{card.description}</p>
                <small className="article__read">{insights.readLabel}</small>
              </button>
            );
          })}
        </div>
      </div>
      <Dialog
        open={open !== null}
        onOpenChange={value => !value && setOpen(null)}
      >
        <DialogPortal>
          <DialogOverlay className="dialog__overlay" />
          <DialogContent className="dialog reader" dir={isRTL ? "rtl" : "ltr"}>
            <DialogClose
              className="dialog__close"
              aria-label={isRTL ? "إغلاق" : "Close"}
            >
              <X size={18} aria-hidden="true" />
            </DialogClose>
            {article && (
              <>
                <span className="label">{article.category}</span>
                <DialogTitle className="display-3">{article.title}</DialogTitle>
                <DialogDescription className="lead">
                  {article.description}
                </DialogDescription>
                <div className="reader__body">{article.body}</div>
                <div>
                  <Button variant="ghost" onClick={() => setOpen(null)}>
                    {isRTL ? "إغلاق" : "Close"}
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </section>
  );
}
