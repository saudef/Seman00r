import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Arrow } from "./ui-kit";

export default function SiteFooter() {
  const { isRTL, copy, content } = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="brand__tile">
              <img src="/assets/logo.png" alt={content.brand.shortName} />
            </span>
            <p>{copy.footer.description}</p>
          </div>
          <div className="footer__col">
            <span className="label">{isRTL ? "استكشف" : "Explore"}</span>
            <a href="/#story">{copy.nav.story}</a>
            <a href="/#ecosystem">{copy.nav.ecosystem}</a>
            <a href="/#approach">{copy.nav.approach}</a>
            <a href="/#timeline">{copy.nav.timeline}</a>
            <a href="/#insights">{copy.nav.insights}</a>
            <Link href="/media">
              {isRTL ? "المكتبة الإعلامية" : "Media library"}
            </Link>
          </div>
          <div className="footer__col">
            <span className="label">{copy.contact.emailLabel}</span>
            <a href={`mailto:${content.brand.email}`}>
              <span dir="ltr">{content.brand.email}</span>
            </a>
            <p>{isRTL ? content.brand.city : "Riyadh, Saudi Arabia"}</p>
            {content.social.companyX && (
              <a
                href={content.social.companyX}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span dir="ltr">X · @SemanoorKSA</span>
              </a>
            )}
            <Link href="/studio" className="muted">
              {copy.footer.studioLink}
            </Link>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()}{" "}
            {isRTL ? content.brand.legalName : "E-Learning & Training Company"}{" "}
            · {copy.footer.rights}
          </p>
          <a href="#home" className="link link--muted">
            {isRTL ? "إلى الأعلى" : "Back to top"}
            <Arrow size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
