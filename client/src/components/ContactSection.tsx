import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Arrow, Button, Kicker } from "./ui-kit";

export default function ContactSection() {
  const { copy, content, isRTL } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const contact = copy.contact;
  const channels: [string, string][] = [
    ["X", content.social.companyX],
    ["LinkedIn", content.social.companyLinkedIn],
    ["Instagram", content.social.companyInstagram],
    ["YouTube", content.social.companyYoutube],
  ];
  function submit(event: FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(
      `${isRTL ? "استفسار شراكة" : "Partnership enquiry"} — ${form.name}`
    );
    const body = encodeURIComponent(
      `${form.name}\n${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${content.brand.email}?subject=${subject}&body=${body}`;
    toast.info(
      isRTL
        ? "يفتح تطبيق البريد؛ لن تُرسل الرسالة إلا بعد إرسالها منه."
        : "Your email app opens. Send the message there to complete the enquiry."
    );
  }
  return (
    <section
      id="contact"
      className="section band--deep statement-wrap"
      aria-labelledby="contact-title"
    >
      <img
        className="statement__bg"
        src={content.visuals.atmosphere.contact}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="container contact">
        <div className="contact__copy">
          <Kicker dot>{contact.overline}</Kicker>
          <h2 className="display-2" id="contact-title">
            {contact.title}
          </h2>
          <p className="lead">{contact.body}</p>
          <a className="contact__email" href={`mailto:${content.brand.email}`}>
            <span>{content.brand.email}</span>
            <Arrow size={26} />
          </a>
          <div>
            <p className="label" style={{ marginBottom: 12 }}>
              {contact.socialLabel}
            </p>
            <div className="contact__links">
              {channels.map(([label, url]) =>
                url ? (
                  <a
                    key={label}
                    className="pill"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                    <Arrow size={12} />
                  </a>
                ) : null
              )}
            </div>
          </div>
          {(content.social.presidentLinkedIn || content.social.presidentX) && (
            <div>
              <p className="label" style={{ marginBottom: 12 }}>
                {isRTL
                  ? "عماد الدغيثر · رئيس الشركة"
                  : "Emad Aldoghaither · Company President"}
              </p>
              <div className="contact__links">
                {content.social.presidentLinkedIn && (
                  <a
                    className="pill"
                    href={content.social.presidentLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                    <Arrow size={12} />
                  </a>
                )}
                {content.social.presidentX && (
                  <a
                    className="pill"
                    href={content.social.presidentX}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X
                    <Arrow size={12} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
        <form
          className="form"
          onSubmit={submit}
          aria-label={contact.partnership}
        >
          <p className="label">{contact.partnership}</p>
          <div className="field">
            <label htmlFor="contact-name">{contact.form.name}</label>
            <input
              id="contact-name"
              required
              maxLength={160}
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              autoComplete="name"
            />
          </div>
          <div className="field">
            <label htmlFor="contact-email">{contact.form.email}</label>
            <input
              id="contact-email"
              required
              type="email"
              dir="ltr"
              maxLength={320}
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              autoComplete="email"
            />
          </div>
          <div className="field">
            <label htmlFor="contact-message">{contact.form.message}</label>
            <textarea
              id="contact-message"
              required
              rows={5}
              maxLength={4000}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <Button type="submit">
            {contact.form.send}
            <Mail size={17} aria-hidden="true" />
          </Button>
          <p className="form__note">{contact.form.note}</p>
        </form>
      </div>
    </section>
  );
}
