import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
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

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
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
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
