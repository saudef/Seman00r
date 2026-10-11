import { approvedHeroVideos } from "@/data/approvedMedia";
import type { MediaRecord } from "@/data/mediaTypes";

// Library-only records. Existing studio data and hero playback are unchanged.
export type LibraryMediaRecord = Omit<MediaRecord, "kind"> & {
  kind: MediaRecord["kind"] | "video";
  video?: string;
};
const photo = (
  id: string,
  image: string,
  ar: string,
  en: string,
  descriptionAr: string,
  descriptionEn: string,
  sourceUrl = ""
): LibraryMediaRecord => ({
  id,
  kind: "photo",
  status: "approved",
  title: { ar, en },
  description: { ar: descriptionAr, en: descriptionEn },
  alt: { ar, en },
  image,
  sourceUrl,
  publisher: "Semanoor",
  date: "",
  category: "Semanoor documentary archive",
  rights: "",
});

export const suppliedLibraryPhotos: LibraryMediaRecord[] = [
  photo(
    "supplied-meeting-al-sharaa",
    "/manus-storage/meeting-ahmed-al-sharaa_75600ba8.jpg",
    "لقاء عماد الدغيثر مع الرئيس أحمد الشرع",
    "Emad Aldoghaither meeting President Ahmed al-Sharaa",
    "صورة من لقاء عماد الدغيثر مع الرئيس أحمد الشرع، من أرشيف سيمانور.",
    "A photograph of Emad Aldoghaither meeting President Ahmed al-Sharaa, from Semanoor’s archive.",
    "https://x.com/EmadAldoghaithr/status/2020491902722748504"
  ),
  photo(
    "supplied-meeting-mohammed-bin-rashid",
    "/manus-storage/meeting-mohammed-bin-rashid_7fbfd6f5.png",
    "لقاء مع الشيخ محمد بن راشد آل مكتوم",
    "Meeting with Sheikh Mohammed bin Rashid Al Maktoum",
    "لقطة توثيقية من لقاء مع الشيخ محمد بن راشد آل مكتوم وعرض محتوى إلكتروني.",
    "An archival photograph of a meeting with Sheikh Mohammed bin Rashid Al Maktoum and a digital content presentation."
  ),
  photo(
    "supplied-national-training-signing",
    "/manus-storage/national-training-agreement-signing_997622ca.jpg",
    "توقيع اتفاقية تطوير المنصة الوطنية للتدريب والتأهيل المهني والفني والتقني",
    "Signing the agreement to develop the national platform for vocational, technical and professional training",
    "مراسم توقيع الاتفاقية بين وزارة الاقتصاد والصناعة السورية وشركة التعليم والتدريب الإلكتروني — سيمانور.",
    "The agreement-signing ceremony between Syria’s Ministry of Economy and Industry and the E-Learning & Training Company — Semanoor.",
    "https://x.com/EmadAldoghaithr/status/2020491902722748504"
  ),
  photo(
    "supplied-alrowad-signing",
    "/manus-storage/alrowad-schools-agreement_91f9d300.png",
    "توقيع اتفاقية مع جامعة الأمير مساعد بن عبدالرحمن",
    "Agreement signing with Prince Musaed bin Abdulrahman University",
    "صورة توثيقية لمراسم توقيع مع الجامعة الإلكترونية سابقاً، جامعة الأمير مساعد بن عبدالرحمن حالياً.",
    "An archival photograph of an agreement-signing ceremony with the former Electronic University, now Prince Musaed bin Abdulrahman University."
  ),
  photo(
    "supplied-meeting-sultan-bin-salman",
    "/manus-storage/meeting-sultan-bin-salman_88293bf7.png",
    "لقاء مع الأمير سلطان بن سلمان",
    "Meeting with Prince Sultan bin Salman",
    "صورة من أرشيف لقاءات سيمانور مع الأمير سلطان بن سلمان، يظهر فيها عرض على جهاز حاسب.",
    "A photograph from Semanoor’s archive of a meeting with Prince Sultan bin Salman, featuring a computer demonstration."
  ),
  photo(
    "supplied-ataa-signing",
    "/manus-storage/ataa-education-agreement_0dbe2d13.png",
    "توقيع مذكرة مع مجموعة عطاء التعليمية",
    "Memorandum signing with Ataa Educational Group",
    "لقطة من مراسم توقيع مذكرة بين سيمانور ومجموعة عطاء التعليمية في سياق مشروع المدرسة الافتراضية.",
    "A photograph of a memorandum-signing ceremony between Semanoor and Ataa Educational Group in the context of the virtual school project.",
    "https://x.com/EmadAldoghaithr/status/1761694877211865102"
  ),
  photo(
    "supplied-national-training-group",
    "/manus-storage/national-training-agreement-group_191b52d6.png",
    "مراسم تبادل وثائق اتفاقية المنصة الوطنية",
    "National platform agreement document exchange",
    "صورة جماعية من مراسم تبادل الوثائق الخاصة باتفاقية تطوير المنصة الوطنية للتدريب والتأهيل.",
    "A group photograph from the document exchange for the national training and qualification platform agreement."
  ),
  photo(
    "supplied-semanoor-elaph-alliance",
    "/manus-storage/semanoor-elaph-alliance_0754aefc.png",
    "تحالف سيمانور وإيلاف",
    "Semanoor–Elaph alliance",
    "صورة توثيقية للتحالف الاستراتيجي بين سيمانور وإيلاف لتطوير منتجات إعلامية وثقافية في الإعلام الجديد والذكاء الاصطناعي.",
    "An archival photograph of the strategic alliance between Semanoor and Elaph to develop media and cultural products in new media and artificial intelligence."
  ),
];

export function suppliedLibraryVideo(
  language: "ar" | "en"
): LibraryMediaRecord {
  const video = approvedHeroVideos[language];
  return {
    id: "supplied-semanoor-introduction",
    kind: "video",
    status: "approved",
    title: { ar: "فيديو سيمانور التعريفي", en: "Semanoor introduction video" },
    description: {
      ar: "تعرف إلى سيمانور، مختبر الابتكار وصناعة الشركات، في عرض تعريفي مدته 30 ثانية.",
      en: "Discover Semanoor, the innovation and venture-building lab, in a 30-second introduction.",
    },
    alt: {
      ar: "غلاف فيديو سيمانور العربي",
      en: "Cover of the English Semanoor video",
    },
    image: video.poster,
    video: video.src,
    sourceUrl: "",
    publisher: "Semanoor",
    date: "",
    category: "Semanoor introduction",
    rights: "",
  };
}
