import { useRef, type ChangeEvent } from "react";
import { toast } from "sonner";
import { safeImageUrl } from "@/data/mediaTypes";

export default function ImageField({
  id,
  value,
  onChange,
  isRTL = false,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  isRTL?: boolean;
}) {
  const input = useRef<HTMLInputElement>(null);
  async function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (
      !["image/png", "image/jpeg", "image/webp"].includes(file.type) ||
      file.size > 10_000_000
    ) {
      toast.error(
        isRTL
          ? "اختر PNG أو JPG أو WebP بحجم أقل من 10MB."
          : "Choose PNG, JPG or WebP under 10MB."
      );
      return;
    }
    let bitmap: ImageBitmap | undefined;
    try {
      bitmap = await createImageBitmap(file);
      const scale = Math.min(1, 960 / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(bitmap.width * scale);
      canvas.height = Math.round(bitmap.height * scale);
      canvas
        .getContext("2d")!
        .drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL("image/webp", 0.82);
      if (!safeImageUrl(image, false)) throw new Error("Image too large");
      onChange(image);
      toast.info(
        isRTL
          ? "أُضيفت نسخة محلية خفيفة. لا تُرفع إلى الاستضافة؛ احفظ المسودة وصدّرها للاحتفاظ بها."
          : "A lightweight local copy was added. This is not a hosting upload. Save and export the draft to retain it."
      );
    } catch {
      toast.error(
        isRTL
          ? "تعذر قراءة الصورة أو تجاوزت الحجم المحلي المسموح."
          : "Unable to read this image or it exceeds the local size limit."
      );
    } finally {
      bitmap?.close();
    }
  }
  return (
    <div className="image-field">
      <input
        id={id}
        value={value.startsWith("data:") ? "" : value}
        placeholder={
          value.startsWith("data:")
            ? isRTL
              ? "صورة محلية مرفقة"
              : "Local image attached"
            : "https://…"
        }
        dir="ltr"
        onChange={e => onChange(e.target.value)}
      />
      <div className="field-actions">
        <button
          type="button"
          className="btn btn--ghost btn--sm"
          onClick={() => input.current?.click()}
        >
          {isRTL ? "اختيار صورة محلية" : "Choose local image"}
        </button>
        <button
          type="button"
          className="link link--muted"
          onClick={() => onChange("")}
        >
          {isRTL ? "إفراغ الحقل" : "Clear image"}
        </button>
      </div>
      <input
        ref={input}
        hidden
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={upload}
      />
      {value && safeImageUrl(value, false) && (
        <img src={value} alt={isRTL ? "معاينة الصورة" : "Image preview"} />
      )}
      <small>
        {isRTL
          ? "رابط HTTPS أو صورة محلية؛ لا SVG ولا نشر تلقائي. احتفظ بنسخة JSON خارج المتصفح."
          : "HTTPS URL or local image; no SVG and no automatic publishing. Keep a JSON backup outside your browser."}
      </small>
    </div>
  );
}
