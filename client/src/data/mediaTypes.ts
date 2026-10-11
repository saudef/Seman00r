export type MediaKind = "illustration" | "photo" | "press";
export type MediaStatus = "draft" | "approved";
export type MediaRecord = {
  id: string;
  kind: MediaKind;
  status: MediaStatus;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  alt: { ar: string; en: string };
  image: string;
  sourceUrl: string;
  publisher: string;
  date: string;
  category: string;
  rights: string;
};
export type Visual = { image: string; alt: { ar: string; en: string } };
export type SiteVisuals = {
  story: Visual;
  focus: Visual[];
  solutions: Visual[];
  projects: Visual[];
  insights: Visual[];
  library: Visual;
  /** Generated conceptual backdrops (no people, products or places). */
  atmosphere: {
    hero: {
      desktop: string;
      mobile: string;
      loop: string;
      /** Still frames extracted from the loop, crossfaded when the video file is absent. */
      frames: string[];
      alt: { ar: string; en: string };
    };
    statement: string;
    approach: string;
    journey: string;
    contact: string;
  };
};
export function safeImageUrl(value: string, allowEmpty = true): boolean {
  if (!value) return allowEmpty;
  if (/^\.?\/(manus-storage|site-assets|assets)\/[a-zA-Z0-9_./-]+$/.test(value))
    return !value.includes("..");
  if (/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(value))
    return value.length <= 1_500_000;
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      value.length <= 4096
    );
  } catch {
    return false;
  }
}
export function safeSourceUrl(value: string): boolean {
  if (!value) return true;
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      value.length <= 4096
    );
  } catch {
    return false;
  }
}
