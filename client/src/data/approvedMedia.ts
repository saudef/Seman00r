export const approvedHeroVideos = {
  ar: {
    approvedVersion: "4031408b",
    src: "/manus-storage/semanoor-30s-ar-v9_4286e484.mp4",
    poster: "/manus-storage/semanoor-ar-v9_6b555ed3.jpg",
    label: "فيديو تعريفي بسيمانور باللغة العربية",
    sha256: "613dc6d007e340af10866582f2c80c607b4cf9c9c272c1bad0bd2dc77c465e5c",
  },
  en: {
    approvedVersion: "32966e6a",
    src: "/manus-storage/semanoor-30s-en-v1_6f73ac2d.mp4",
    poster: "/manus-storage/semanoor-en-v1_2feba368.jpg",
    label: "Semanoor company introduction in English",
    sha256: "3ff6a817023cb937c4e738fcb52196813c881be64f5f4545619115d54bac2c61",
  },
} as const;

// The source lists these logos. It does not establish dates, contract values,
// or an ongoing relationship. Empty names are intentionally left unresolved.
export const clientLogos = [
  {
    position: 1,
    src: "/manus-storage/client-01_eaed7095.png",
    nameAr: "",
    nameEn: "",
    needsNameReview: true,
  },
  {
    position: 2,
    src: "/manus-storage/client-02_c5284cd1.png",
    nameAr: "دار عقل للنشر والدراسات والترجمة",
    nameEn: "Akl Publishing, Studies and Translation",
    needsNameReview: false,
  },
  {
    position: 3,
    src: "/manus-storage/client-03_2adff3a5.png",
    nameAr: "جامعة الملك سعود",
    nameEn: "King Saud University",
    needsNameReview: false,
  },
  {
    position: 4,
    src: "/manus-storage/client-04_ae47ad69.png",
    nameAr: "مدارس فقيه",
    nameEn: "Fakieh Schools",
    needsNameReview: false,
  },
  {
    position: 5,
    src: "/manus-storage/client-05_29e22088.png",
    nameAr: "مدارس عبدالرحمن فقيه للبنات",
    nameEn: "Abdulrahman Fakieh Schools for Girls",
    needsNameReview: false,
  },
  {
    position: 6,
    src: "/manus-storage/client-06_9632abd4.png",
    nameAr: "مكتبة الملك عبدالعزيز العامة",
    nameEn: "King Abdulaziz Public Library",
    needsNameReview: false,
  },
  {
    position: 7,
    src: "/manus-storage/client-07_64f2e534.png",
    nameAr: "العبيكان للنشر",
    nameEn: "Obeikan Publishing",
    needsNameReview: false,
  },
  {
    position: 8,
    src: "/manus-storage/client-08_31ea92fa.png",
    nameAr: "الكنزي",
    nameEn: "Alkanzy",
    needsNameReview: false,
  },
  {
    position: 9,
    src: "/manus-storage/client-09_c2ee576e.png",
    nameAr: "",
    nameEn: "",
    needsNameReview: true,
  },
  {
    position: 10,
    src: "/manus-storage/client-10_44c772e0.png",
    nameAr: "",
    nameEn: "",
    needsNameReview: true,
  },
  {
    position: 11,
    src: "/manus-storage/client-11_d6a2d4d2.png",
    nameAr: "",
    nameEn: "",
    needsNameReview: true,
  },
  {
    position: 12,
    src: "/manus-storage/client-12_e31b08db.png",
    nameAr: "دار ابن الجوزي للنشر والتوزيع",
    nameEn: "Dar Ibn Al-Jawzi Publishing and Distribution",
    needsNameReview: false,
  },
].map(client => ({
  ...client,
  source: `https://app.semanoor.com/assets/images/clientlogo/${client.position}.png`,
  sourcePage: "https://app.semanoor.com/index.html",
}));
