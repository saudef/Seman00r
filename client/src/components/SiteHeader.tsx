import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Globe2, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Arrow, ButtonLink } from "./ui-kit";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { language, isRTL, copy, content, toggleLanguage } = useLanguage();
  const [location] = useLocation();
  const nav = copy.nav;
  const links: [string, string][] = [
    ["story", nav.story],
    ["ecosystem", nav.ecosystem],
    ["approach", nav.approach],
    ["timeline", nav.timeline],
    ["impact", nav.impact],
    ["insights", nav.insights],
  ];

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location, language]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`hdr ${solid || location !== "/" ? "hdr--solid" : ""} ${open ? "hdr--open" : ""}`}
    >
      <div className="container hdr__inner">
        <Link
          href="/"
          className="brand"
          aria-label={isRTL ? "سيمانور · الرئيسية" : "Semanoor home"}
        >
          <span className="brand__tile">
            <img src="/assets/logo.png" alt={content.brand.shortName} />
          </span>
          <span className="brand__text" aria-hidden="true">
            <strong>{content.brand.shortName}</strong>
            <span>
              {isRTL
                ? content.brand.legalName
                : "E-Learning & Training Company"}
            </span>
          </span>
        </Link>
        <nav
          className="hdr__nav"
          aria-label={isRTL ? "التنقل الرئيسي" : "Main navigation"}
        >
          {links.map(([id, text]) => (
            <a key={id} href={`/#${id}`}>
              {text}
            </a>
          ))}
        </nav>
        <div className="hdr__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label={isRTL ? "Switch to English" : "التبديل إلى العربية"}
            lang={isRTL ? "en" : "ar"}
          >
            <Globe2 size={15} aria-hidden="true" />
            <span>{isRTL ? "English" : "عربي"}</span>
          </button>
          <ButtonLink href="/#contact" size="sm" className="hdr__cta">
            {nav.contact}
          </ButtonLink>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen(value => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={
              isRTL
                ? open
                  ? "إغلاق القائمة"
                  : "القائمة"
                : open
                  ? "Close menu"
                  : "Menu"
            }
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="hdr__sheet container" id="mobile-nav">
          <nav aria-label={isRTL ? "قائمة الجوال" : "Mobile navigation"}>
            {links.map(([id, text]) => (
              <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
                {text}
                <Arrow size={18} />
              </a>
            ))}
            <Link href="/media" onClick={() => setOpen(false)}>
              {isRTL ? "المكتبة الإعلامية" : "Media library"}
              <Arrow size={18} />
            </Link>
          </nav>
          <ButtonLink href="/#contact" block onClick={() => setOpen(false)}>
            {nav.contact}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
