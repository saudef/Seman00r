import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import SignalStrip from "@/components/SignalStrip";
import FilmModule from "@/components/FilmModule";
import Statement from "@/components/Statement";
import FocusModules from "@/components/FocusModules";
import SmartBookShowcase from "@/components/SmartBookShowcase";
import Approach from "@/components/Approach";
import Explorer from "@/components/Explorer";
import Journey from "@/components/Journey";
import ImpactSection from "@/components/ImpactSection";
import Insights from "@/components/Insights";
import ArchiveSection from "@/components/ArchiveSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const { language, content } = useLanguage();
  return (
    <>
      <Hero />
      <SignalStrip />
      <FilmModule />
      <Statement />
      <FocusModules />
      <SmartBookShowcase
        language={language}
        image={content.visuals.focus[0].image}
        compact
      />
      <Approach />
      <Explorer />
      <Journey />
      <ImpactSection />
      <Insights />
      <ArchiveSection />
      <ContactSection />
    </>
  );
}
