import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useLang } from "@/lib/i18n";

export function SiteShell({ children }: { children: ReactNode }) {
  const { t, lang, setLang } = useLang();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="text-[15px] font-semibold tracking-tight">
            Hamza Elgzairy
          </Link>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/megsy" className="hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {t.nav.megsy}
            </Link>
            <a href="#contact" className="hover:text-foreground">{t.nav.contact}</a>
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="rounded-full border border-border px-3 py-1 text-xs text-foreground hover:bg-secondary"
              aria-label="Switch language"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <section id="contact" className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h2 className="text-display mx-auto max-w-3xl text-4xl md:text-6xl">{t.contactTitle}</h2>
        <p className="mt-6 text-lg text-muted-foreground">{t.contactSub}</p>
        <a href="mailto:hello@megsy.com" className="btn-pill mt-10">hello@megsy.com</a>
      </section>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-8 text-sm text-muted-foreground">
          <span>{t.footer}</span>
          <span>Hamza Hassan Elgzairy</span>
        </div>
      </footer>
    </div>
  );
}
