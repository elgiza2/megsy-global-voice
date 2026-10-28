import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { Button } from "./ui/button";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export function SiteShell({ children }: { children: ReactNode }) {
  const { t, lang, setLang } = useLang();
  const c = getContent(lang);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
          <Link to="/" className="text-sm font-semibold">
            {c.shortName}
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/megsy" className="hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {t.nav.megsy}
            </Link>
            <a href="#contact" className="hover:text-foreground">{t.nav.contact}</a>
            <Button variant="outline" size="sm"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="rounded-full"
              aria-label="Switch language"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </Button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <section id="contact" className="section-wrap scroll-mt-16 border-t border-border text-center">
        <h2 className="text-display mx-auto max-w-3xl text-4xl md:text-6xl">{t.contactTitle}</h2>
        <p className="mt-6 text-lg text-muted-foreground">{t.contactSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">{c.contactTopics.map(topic => <span key={topic}>{topic}</span>)}</div>
        <Button asChild size="lg" className="mt-10 rounded-full"><a href="mailto:hello@megsy.com">hello@megsy.com <ArrowUpRight /></a></Button>
      </section>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground">
          <span>{t.footer}</span>
          <Button asChild variant="ghost" size="sm"><a href="#top">{c.backTop}<ArrowUp /></a></Button>
        </div>
      </footer>
    </div>
  );
}
