import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Jawani Pay card, rendered as a live card face so it keeps true bank-card
 * proportions at every size. Uses the supplied artwork fragment (lavender and
 * bee) and the product wordmark only; no card number, expiry or scheme marks
 * are shown because none were supplied.
 */
export default function JawaniCard() {
  const { isRTL } = useLanguage();
  return (
    <div
      className="bankcard"
      role="img"
      aria-label={isRTL ? "بطاقة جواني باي" : "Jawani Pay card"}
    >
      <img
        className="bankcard__art"
        src="/site-assets/jawani-card-art.webp"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <span className="bankcard__brand" dir="ltr">
        Jawani Pay
      </span>
      <span className="bankcard__brand-ar" dir="rtl">
        جواني
      </span>
      <span className="bankcard__chip" aria-hidden="true">
        <svg viewBox="0 0 60 44" width="100%" height="100%">
          <defs>
            <linearGradient id="chipg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f3e7c3" />
              <stop offset="0.5" stopColor="#d9c38a" />
              <stop offset="1" stopColor="#f1e3bd" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="58"
            height="42"
            rx="8"
            fill="url(#chipg)"
            stroke="rgba(90,70,20,0.5)"
          />
          <path
            d="M1 15h18a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6H1M59 15H41a6 6 0 0 0-6 6v2a6 6 0 0 0 6 6h18M20 1v14M40 1v14M20 29v14M40 29v14M25 22h10"
            fill="none"
            stroke="rgba(90,70,20,0.55)"
            strokeWidth="1.4"
          />
        </svg>
      </span>
      <span className="bankcard__nfc" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="100%" height="100%">
          <g fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
            <path d="M8 11a9 9 0 0 1 0 10" />
            <path d="M13 7.5a14 14 0 0 1 0 17" />
            <path d="M18 4a19 19 0 0 1 0 24" />
            <path d="M23 1a24 24 0 0 1 0 30" />
          </g>
        </svg>
      </span>
    </div>
  );
}
