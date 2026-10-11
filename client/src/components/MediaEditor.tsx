import { useState } from "react";
import type { MediaRecord } from "@/data/mediaTypes";
import ImageField from "./ImageField";

export default function MediaEditor({
  items,
  onChange,
  isRTL,
}: {
  items: MediaRecord[];
  onChange: (items: MediaRecord[]) => void;
  isRTL: boolean;
}) {
  const [selected, setSelected] = useState(items[0]?.id ?? "");
  const item = items.find(x => x.id === selected);
  const t = (ar: string, en: string) => (isRTL ? ar : en);
  function update(patch: Partial<MediaRecord>) {
    if (item)
      onChange(items.map(x => (x.id === selected ? { ...x, ...patch } : x)));
  }
  function add() {
    const id = `media-${crypto.randomUUID()}`;
    onChange([
      ...items,
      {
        id,
        kind: "photo",
        status: "draft",
        title: { ar: "", en: "" },
        description: { ar: "", en: "" },
        alt: { ar: "", en: "" },
        image: "",
        sourceUrl: "",
        publisher: "",
        date: "",
        category: "",
        rights: "",
      },
    ]);
    setSelected(id);
  }
  return (
    <div className="media-editor">
      <p className="note">
        {t(
          "مكتبة محلية: المسودات لا تظهر في صفحة المكتبة. اعتماد مادة هنا يؤثر على هذا المتصفح فقط بعد تطبيق الحزمة، وليس نشراً للموقع. لا تضف مادة صحفية دون رابط المصدر واسم الناشر والتاريخ، ولا صوراً دون حقوق استخدامها.",
          "Local library: drafts stay out of the library page. Approving an item changes only this browser after applying the package; it does not publish the site. Press items require their source, publisher and date; images require usage rights."
        )}
      </p>
      <div className="field-actions">
        <button
          type="button"
          className="btn btn--ghost btn--sm"
          onClick={add}
          disabled={items.length >= 200}
        >
          {t("إضافة صورة أو خبر", "Add image or press item")}
        </button>
        <a href="/media" className="link link--muted">
          {t("عرض المكتبة", "View library")}
        </a>
      </div>
      <div className="media-editor__layout">
        <div className="record-list">
          {items.map(x => (
            <button
              type="button"
              key={x.id}
              aria-pressed={selected === x.id}
              onClick={() => setSelected(x.id)}
            >
              <span>
                {x.title[isRTL ? "ar" : "en"] || t("مادة جديدة", "New item")}
              </span>
              <small>
                {x.status === "draft"
                  ? t("مسودة", "Draft")
                  : t("معتمد للمعاينة المحلية", "Approved for local preview")}
              </small>
            </button>
          ))}
        </div>
        {item ? (
          <div className="studio-fields" key={item.id}>
            <div className="studio-field">
              <label htmlFor="media-kind">{t("نوع المادة", "Type")}</label>
              <select
                id="media-kind"
                value={item.kind}
                onChange={e =>
                  update({ kind: e.target.value as MediaRecord["kind"] })
                }
              >
                <option value="photo">
                  {t("صورة توثيقية", "Documentary photo")}
                </option>
                <option value="press">
                  {t("تغطية صحفية", "Press coverage")}
                </option>
                <option value="illustration">
                  {t("رسم توضيحي", "Illustration")}
                </option>
              </select>
            </div>
            <div className="studio-field">
              <label htmlFor="media-status">
                {t("الحالة المحلية", "Local status")}
              </label>
              <select
                id="media-status"
                value={item.status}
                onChange={e =>
                  update({ status: e.target.value as MediaRecord["status"] })
                }
              >
                <option value="draft">
                  {t("مسودة مخفية", "Hidden draft")}
                </option>
                <option value="approved">
                  {t("معتمد للعرض المحلي", "Approved for local view")}
                </option>
              </select>
            </div>
            {(["title", "description", "alt"] as const).flatMap(field =>
              (["ar", "en"] as const).map(lang => {
                const labels = {
                  title: t("العنوان", "Title"),
                  description: t("الوصف", "Description"),
                  alt: t("وصف الصورة للوصول", "Accessible image text"),
                };
                return (
                  <div className="studio-field" key={`${field}-${lang}`}>
                    <label htmlFor={`media-${field}-${lang}`}>
                      {labels[field]} · {lang === "ar" ? "العربية" : "English"}
                    </label>
                    <textarea
                      id={`media-${field}-${lang}`}
                      dir={lang === "ar" ? "rtl" : "ltr"}
                      rows={field === "description" ? 3 : 1}
                      value={item[field][lang]}
                      onChange={e =>
                        update({
                          [field]: { ...item[field], [lang]: e.target.value },
                        })
                      }
                    />
                  </div>
                );
              })
            )}

            <div className="studio-field">
              <label htmlFor="media-image">{t("الصورة", "Image")}</label>
              <ImageField
                id="media-image"
                isRTL={isRTL}
                value={item.image}
                onChange={image => update({ image })}
              />
            </div>
            <div className="studio-field">
              <label htmlFor="media-source">
                {t(
                  "رابط الخبر أو المصدر الأصلي",
                  "Press or original source URL"
                )}
              </label>
              <input
                id="media-source"
                type="url"
                dir="ltr"
                placeholder="https://…"
                value={item.sourceUrl}
                onChange={e => update({ sourceUrl: e.target.value })}
              />
            </div>
            <div className="studio-field">
              <label htmlFor="media-publisher">
                {t("الناشر / المصور", "Publisher / photographer")}
              </label>
              <input
                id="media-publisher"
                value={item.publisher}
                onChange={e => update({ publisher: e.target.value })}
              />
            </div>
            <div className="studio-field">
              <label htmlFor="media-date">
                {t("التاريخ الموثق", "Verified date")}
              </label>
              <input
                id="media-date"
                type="date"
                value={item.date}
                onChange={e => update({ date: e.target.value })}
              />
            </div>
            <div className="studio-field">
              <label htmlFor="media-category">{t("التصنيف", "Category")}</label>
              <input
                id="media-category"
                value={item.category}
                onChange={e => update({ category: e.target.value })}
              />
            </div>
            <div className="studio-field">
              <label htmlFor="media-rights">
                {t(
                  "حقوق الاستخدام / إذن صاحب الصورة",
                  "Usage rights / owner permission"
                )}
              </label>
              <textarea
                id="media-rights"
                rows={2}
                value={item.rights}
                onChange={e => update({ rights: e.target.value })}
              />
            </div>
            <button
              type="button"
              className="danger"
              onClick={() => {
                if (
                  window.confirm(
                    t(
                      "إزالة هذه المادة من المسودة المحلية؟ لا يحذف الملف من التخزين.",
                      "Remove this item from the local draft? Its stored file is not deleted."
                    )
                  )
                ) {
                  onChange(items.filter(x => x.id !== selected));
                  setSelected("");
                }
              }}
            >
              {t("إزالة من المسودة", "Remove from draft")}
            </button>
          </div>
        ) : (
          <p className="lead">
            {t(
              "اختر مادة أو أضف صورة وخبراً جديداً.",
              "Select an item or add an image or press link."
            )}
          </p>
        )}
      </div>
    </div>
  );
}
