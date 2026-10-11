import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getSiteContent,
  type Language,
  type LocaleContent,
  type SiteContent,
} from "@/data/siteContent";

type LanguageContextType = {
  language: Language;
  isRTL: boolean;
  copy: LocaleContent;
  content: SiteContent;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const META = {
  ar: {
    title: "سيمانور | مختبر الابتكار وصناعة الشركات",
    description:
      "سيمانور، علامة شركة التعليم والتدريب الإلكتروني: مختبر للابتكار وصناعة الشركات يضع التعليم الإلكتروني الذكي في قلب عمله، ويمتد إلى مشاريع التعليم التنموية وستوديو سيمانور للشركات الناشئة ومحفظة جواني.",
  },
  en: {
    title: "Semanoor | Innovation & venture-building lab",
    description:
      "Semanoor, the brand of E-Learning & Training Company: an innovation and venture-building lab with intelligent e-learning at its core, extending to education development projects, Semanoor Startup Studio and the Jawani wallet.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("semanoor-language") === "en" ? "en" : "ar";
    } catch {
      return "ar";
    }
  });
  const [content, setContent] = useState(getSiteContent);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    document.title = META[language].title;
    const setMeta = (selector: string, value: string) => {
      const node = document.head.querySelector<HTMLMetaElement>(selector);
      if (node) node.content = value;
    };
    setMeta('meta[name="description"]', META[language].description);
    setMeta('meta[property="og:title"]', META[language].title);
    setMeta('meta[property="og:description"]', META[language].description);
    setMeta(
      'meta[property="og:locale"]',
      language === "ar" ? "ar_SA" : "en_US"
    );
    try {
      localStorage.setItem("semanoor-language", language);
    } catch {
      /* storage may be unavailable */
    }
  }, [language]);

  useEffect(() => {
    const reload = () => setContent(getSiteContent());
    window.addEventListener("semanoor-content-updated", reload);
    window.addEventListener("storage", reload);
    return () => {
      window.removeEventListener("semanoor-content-updated", reload);
      window.removeEventListener("storage", reload);
    };
  }, []);

  const value = useMemo<LanguageContextType>(() => {
    const copy = content[language];
    const t = (key: string): string => {
      const resolved = key
        .split(".")
        .reduce<unknown>(
          (current, segment) =>
            current && typeof current === "object"
              ? (current as Record<string, unknown>)[segment]
              : undefined,
          copy
        );
      return typeof resolved === "string" ? resolved : key;
    };
    return {
      language,
      isRTL: language === "ar",
      copy,
      content,
      setLanguage,
      toggleLanguage: () =>
        setLanguage(current => (current === "ar" ? "en" : "ar")),
      t,
    };
  }, [language, content]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
