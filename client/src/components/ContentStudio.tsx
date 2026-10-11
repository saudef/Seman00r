import { useRef, useState, type ChangeEvent } from "react";
import {
  ArrowRight,
  Check,
  Download,
  FileJson,
  LayoutTemplate,
  Save,
  Upload,
} from "lucide-react";
import { toast } from "sonner";
import ImageField from "./ImageField";
import MediaEditor from "./MediaEditor";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  defaultSiteContent,
  getSiteContent,
  resetSiteContent,
  saveSiteContent,
  validateSiteContent,
  type Language,
  type SiteContent,
} from "@/data/siteContent";

function Fields({
  value,
  path,
  update,
  isRTL = false,
}: {
  value: unknown;
  path: string[];
  update: (path: string[], text: string) => void;
  isRTL?: boolean;
}) {
  if (typeof value === "string") {
    const id = `edit-${path.join("-")}`;
    return (
      <div className="studio-field">
        <label htmlFor={id}>{path.slice(-2).join(" / ")}</label>
        {path.at(-1) === "image" ? (
          <ImageField
            id={id}
            value={value}
            onChange={text => update(path, text)}
            isRTL={isRTL}
          />
        ) : value.length > 100 ||
          ["description", "body", "lead", "intro", "note"].includes(
            path.at(-1) ?? ""
          ) ? (
          <textarea
            id={id}
            value={value}
            rows={3}
            onChange={e => update(path, e.target.value)}
          />
        ) : (
          <input
            id={id}
            value={value}
            onChange={e => update(path, e.target.value)}
          />
        )}
      </div>
    );
  }
  if (Array.isArray(value))
    return (
      <div className="studio-array">
        {value.map((item, index) => (
          <div className="studio-item" key={index}>
            <span className="studio-item-index">{index + 1}</span>
            <Fields
              value={item}
              path={[...path, String(index)]}
              update={update}
              isRTL={isRTL}
            />
          </div>
        ))}
      </div>
    );
  if (value && typeof value === "object")
    return (
      <div className="studio-fields">
        {Object.entries(value).map(([key, item]) => (
          <Fields
            key={key}
            value={item}
            path={[...path, key]}
            update={update}
            isRTL={isRTL}
          />
        ))}
      </div>
    );
  return null;
}

export default function ContentStudio() {
  const { language, content } = useLanguage();
  const copy = content[language].studio;
  const isRTL = language === "ar";
  const [draft, setDraft] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem("semanoor-editor-draft-v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        return validateSiteContent({
          ...parsed,
          visuals: parsed.visuals ?? defaultSiteContent.visuals,
          media: parsed.media ?? defaultSiteContent.media,
        });
      }
    } catch {
      /* preserve malformed backups for user recovery, use active content */
    }
    return structuredClone(getSiteContent());
  });
  const [editLanguage, setEditLanguage] = useState<Language>(language);
  const [section, setSection] = useState("hero");
  const [mode, setMode] = useState<"fields" | "json">("fields");
  const [raw, setRaw] = useState(() => JSON.stringify(draft, null, 2));
  const [dirty, setDirty] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const sections = [
    "hero",
    "story",
    "ecosystem",
    "approach",
    "explorer",
    "timeline",
    "impact",
    "insights",
    "contact",
    "footer",
    "brand",
    "social",
    "visuals",
    "media",
  ];
  const labels: Record<string, string> = isRTL
    ? {
        hero: "الواجهة الرئيسية والمجالات",
        story: "الرؤية والمبادئ",
        ecosystem: "المحاور الأربعة",
        approach: "النهج والمراحل",
        explorer: "مستكشف المجالات",
        timeline: "المسيرة",
        impact: "الأثر والمشاريع",
        insights: "الأخبار والرؤى",
        contact: "التواصل",
        footer: "التذييل",
        brand: "بيانات الشركة",
        social: "روابط السوشال ميديا",
        visuals: "صور الأقسام وأوصافها",
        media: "مكتبة الصور والأخبار",
      }
    : {
        hero: "Hero & fields",
        story: "Vision & principles",
        ecosystem: "Four focus areas",
        approach: "Approach & stages",
        explorer: "Field explorer",
        timeline: "Journey",
        impact: "Impact & projects",
        insights: "News & insights",
        contact: "Contact",
        footer: "Footer",
        brand: "Company details",
        social: "Social links",
        visuals: "Section images & descriptions",
        media: "Images & press library",
      };
  function update(path: string[], text: string) {
    setDraft(current => {
      const next = structuredClone(current);
      let target: any = next;
      for (const key of path.slice(0, -1)) target = target[key];
      target[path.at(-1)!] = text;
      return next;
    });
    setDirty(true);
  }
  function retainDraft() {
    try {
      localStorage.setItem(
        "semanoor-editor-draft-v2",
        JSON.stringify(currentPackage())
      );
      toast.success(
        isRTL
          ? "حُفظت مسودة المحرر محلياً دون تطبيقها على المعاينة."
          : "Editor draft retained locally without applying it to the preview."
      );
    } catch {
      toast.error(
        isRTL
          ? "تعذر حفظ المسودة؛ تحقق من الحقول ومساحة المتصفح ثم صدّر JSON."
          : "Unable to retain draft. Check fields and browser storage, then export JSON."
      );
    }
  }
  function updateMedia(items: SiteContent["media"]["items"]) {
    setDraft(current => ({ ...current, media: { items } }));
    setDirty(true);
  }
  function currentPackage() {
    return validateSiteContent(mode === "json" ? JSON.parse(raw) : draft);
  }
  function save() {
    try {
      const next = currentPackage();
      saveSiteContent(next);
      try {
        localStorage.setItem("semanoor-editor-draft-v2", JSON.stringify(next));
      } catch {
        /* active content is retained; export remains available */
      }
      setDraft(next);
      setRaw(JSON.stringify(next, null, 2));
      setDirty(false);
      toast.success(copy.saved);
    } catch {
      toast.error(copy.invalid);
    }
  }
  function exportPackage() {
    try {
      const next = currentPackage();
      const url = URL.createObjectURL(
        new Blob([JSON.stringify(next, null, 2)], { type: "application/json" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = "semanoor-content.json";
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      toast.error(copy.invalid);
    }
  }
  async function importPackage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 20_000_000) throw new Error("Too large");
      const parsed = JSON.parse(await file.text());
      const next = validateSiteContent({
        ...parsed,
        visuals: parsed.visuals ?? defaultSiteContent.visuals,
        media: parsed.media ?? defaultSiteContent.media,
      });
      setDraft(next);
      setRaw(JSON.stringify(next, null, 2));
      setDirty(true);
      toast.info(
        isRTL
          ? "استُوردت الحزمة كمسودة. اضغط حفظ محلي لتطبيقها."
          : "Imported as a draft. Save locally to apply it."
      );
    } catch {
      toast.error(copy.invalid);
    }
    event.target.value = "";
  }
  function reset() {
    if (
      !window.confirm(
        isRTL
          ? "استعادة المحتوى الأولي وحذف المسودة المحلية؟"
          : "Restore the initial content and remove the local draft?"
      )
    )
      return;
    resetSiteContent();
    localStorage.removeItem("semanoor-editor-draft-v2");
    setDraft(structuredClone(defaultSiteContent));
    setRaw(JSON.stringify(defaultSiteContent, null, 2));
    setDirty(false);
    toast.success(
      isRTL ? "استُعيد المحتوى الأولي" : "Initial content restored"
    );
  }
  const path = ["brand", "social", "visuals", "media"].includes(section)
    ? [section]
    : [editLanguage, section];
  const value = path.reduce<unknown>(
    (current, key) => (current as Record<string, unknown>)[key],
    draft
  );
  return (
    <main className="studio">
      <div className="container">
        <div className="studio__head">
          <div>
            <p className="label">{copy.eyebrow}</p>
            <h1 className="display-2" style={{ marginTop: 14 }}>
              {copy.title}
            </h1>
            <p className="lead">{copy.intro}</p>
          </div>
          <a href="/" className="link link--muted">
            {copy.back}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="studio__warning">
          <FileJson size={21} />
          <div>
            <strong>{copy.localOnly}</strong>
            <p>
              {isRTL
                ? "المحرر متاح للمعاينة المحلية فقط، وليس حساب مدير آمناً. النصوص والصور والأخبار محفوظة في هذا المتصفح. الربط بالاستضافة لحساب مدير واحد مؤجل، ولا يوجد نشر أو رفع ملفات إلى الموقع العام."
                : "This is a local preview editor, not a secured administrator account. Text, images and press links are retained in this browser. Hosting integration for one administrator is deferred; nothing is published or uploaded to the public site."}
            </p>
          </div>
        </div>
        <div className="studio__toolbar">
          <div className="studio__group">
            <span>{copy.language}</span>
            <button
              className="tab"
              aria-pressed={editLanguage === "ar"}
              onClick={() => setEditLanguage("ar")}
            >
              العربية
            </button>
            <button
              className="tab"
              aria-pressed={editLanguage === "en"}
              onClick={() => setEditLanguage("en")}
            >
              English
            </button>
          </div>
          <div className="studio__group">
            <button
              className="tab"
              onClick={() => {
                if (mode !== "json") setRaw(JSON.stringify(draft, null, 2));
                setMode("json");
              }}
              aria-pressed={mode === "json"}
            >
              <FileJson size={17} />
              JSON
            </button>
            <button
              onClick={() => {
                try {
                  if (mode === "json")
                    setDraft(validateSiteContent(JSON.parse(raw)));
                  setMode("fields");
                } catch {
                  toast.error(copy.invalid);
                }
              }}
              aria-pressed={mode === "fields"}
              className="tab"
            >
              <LayoutTemplate size={17} />
              {isRTL ? "حقول" : "Fields"}
            </button>
            <button
              className="btn btn--ghost btn--sm"
              onClick={() => fileInput.current?.click()}
            >
              <Upload size={17} />
              {copy.import}
            </button>
            <button className="btn btn--ghost btn--sm" onClick={exportPackage}>
              <Download size={17} />
              {copy.export}
            </button>
            <button className="btn btn--ghost btn--sm" onClick={retainDraft}>
              <Save size={17} />
              {isRTL ? "حفظ مسودة فقط" : "Retain draft only"}
            </button>
            <button className="btn btn--primary btn--sm" onClick={save}>
              <Save size={17} />
              {copy.save}
            </button>
          </div>
        </div>
        <input
          hidden
          ref={fileInput}
          type="file"
          accept=".json,application/json"
          onChange={importPackage}
        />
        <div className="studio__layout">
          <aside className="studio__side">
            {sections.map(key => (
              <button
                key={key}
                className={key === section ? "is-active" : ""}
                onClick={() => {
                  setSection(key);
                  if (mode === "json") {
                    try {
                      setDraft(validateSiteContent(JSON.parse(raw)));
                      setMode("fields");
                    } catch {
                      toast.error(copy.invalid);
                    }
                  }
                }}
              >
                {labels[key]}
              </button>
            ))}
            <div className="studio__status">
              <Check size={16} />
              {dirty
                ? isRTL
                  ? "مسودة غير محفوظة"
                  : "Unsaved draft"
                : isRTL
                  ? "المحتوى المحلي جاهز"
                  : "Local content ready"}
            </div>
            <button className="studio__reset" onClick={reset}>
              {copy.reset}
            </button>
          </aside>
          <section
            className="studio__editor"
            dir={
              section === "social" || section === "brand"
                ? undefined
                : editLanguage === "ar"
                  ? "rtl"
                  : "ltr"
            }
          >
            <h2 className="display-4">
              {mode === "json" ? copy.raw : labels[section]}
            </h2>
            {mode === "json" ? (
              <textarea
                className="json-editor"
                dir="ltr"
                aria-label={copy.raw}
                value={raw}
                onChange={e => {
                  setRaw(e.target.value);
                  setDirty(true);
                }}
                spellCheck={false}
              />
            ) : section === "media" ? (
              <MediaEditor
                items={draft.media.items}
                onChange={updateMedia}
                isRTL={isRTL}
              />
            ) : (
              <Fields value={value} path={path} update={update} isRTL={isRTL} />
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
