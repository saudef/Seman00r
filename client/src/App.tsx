import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Route, Router, Switch, useLocation } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ScrollToAnchor from "./components/ScrollToAnchor";
import Home from "./pages/Home";
import ContentStudio from "./components/ContentStudio";
import MediaLibrary from "./pages/MediaLibrary";
import SolutionDetail from "./pages/SolutionDetail";
import { ButtonLink } from "./components/ui-kit";

/**
 * Preview mode (VITE_PREVIEW=1) is used for static hosts that cannot serve the
 * SPA routes or absolute paths, such as a shared artifact page. Routing then
 * lives in memory and home-anchor links are bridged by a click handler.
 */
const PREVIEW = import.meta.env.VITE_PREVIEW === "1";
const previewLocation = PREVIEW ? memoryLocation({ path: "/" }) : null;

function PreviewLinkBridge() {
  const [, navigate] = useLocation();
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.(
        "a[href]"
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href !== "/" && !href.startsWith("/#")) return;
      event.preventDefault();
      navigate("/");
      const id = href.slice(2);
      window.setTimeout(() => {
        const target = id ? document.getElementById(id) : null;
        if (target)
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 60);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);
  return null;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

function MissingPage() {
  const { isRTL } = useLanguage();
  return (
    <main className="container missing">
      <span className="display-1">404</span>
      <h1 className="display-3">
        {isRTL ? "الصفحة غير موجودة" : "Page not found"}
      </h1>
      <ButtonLink href="/">
        {isRTL ? "العودة إلى سيمانور" : "Back to Semanoor"}
      </ButtonLink>
    </main>
  );
}

function Routes() {
  return (
    <>
      {PREVIEW && <PreviewLinkBridge />}
      <Switch>
        <Route path="/">
          <Shell>
            <ScrollToAnchor />
            <main>
              <Home />
            </main>
          </Shell>
        </Route>
        <Route path="/media">
          <Shell>
            <MediaLibrary />
          </Shell>
        </Route>
        <Route path="/solutions/:slug">
          {params => (
            <Shell>
              <SolutionDetail slug={params.slug} />
            </Shell>
          )}
        </Route>
        <Route path="/studio">
          <Shell>
            <ContentStudio />
          </Shell>
        </Route>
        <Route>
          <Shell>
            <MissingPage />
          </Shell>
        </Route>
      </Switch>
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            {previewLocation ? (
              <Router hook={previewLocation.hook}>
                <Routes />
              </Router>
            ) : (
              <Routes />
            )}
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
