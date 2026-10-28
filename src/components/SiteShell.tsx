import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { useLang } from '@/lib/i18n';
import { getContent } from '@/lib/content';
import { Button } from './ui/button';
import { ArrowUpRight, ArrowUp, Globe2 } from 'lucide-react';

export function SiteShell({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLang();
  const c = getContent(lang);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="site-header"><nav className="page-width flex h-20 items-center justify-between gap-3" aria-label={lang === 'ar' ? 'القائمة الرئيسية' : 'Main navigation'}>
      <Link to="/" className="brand" dir="ltr">Hamza<span className="brand-dot" aria-hidden="true" /></Link>
      <div className="flex items-center gap-2 sm:gap-5"><Button asChild variant="ghost" className="hidden sm:inline-flex"><Link to="/" hash="about">{c.nav.about}</Link></Button><Button asChild variant="ghost" className="px-2 sm:px-3"><Link to="/megsy">{c.nav.company}</Link></Button><Button asChild variant="ghost" className="hidden sm:inline-flex"><a href="#contact">{c.nav.contact}</a></Button><Button variant="ghost" size="sm" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}><Globe2 /><span>{lang === 'ar' ? 'EN' : 'عربي'}</span></Button></div>
    </nav></header>
    <main>{children}</main>
    <section id="contact" className="contact-band"><div className="page-width section-space"><p className="eyebrow">{c.contactLabel}</p><div className="contact-layout"><h2 className="editorial-title whitespace-pre-line">{c.contactTitle}</h2><div><p className="text-muted-foreground">{c.contactBody}</p><Button asChild size="lg" className="mt-7"><a href="mailto:support@megsyai.com">{c.contactButton}<ArrowUpRight /></a></Button><p className="mt-4 text-xs text-muted-foreground" dir="ltr">support@megsyai.com</p></div></div></div></section>
    <footer className="page-width"><div className="footer-top"><Link to="/" className="brand" dir="ltr">Hamza<span className="brand-dot" /></Link><Button asChild variant="ghost" size="sm"><a href="#top">{c.backTop}<ArrowUp /></a></Button></div><div className="flex flex-wrap justify-between gap-4 border-t border-border py-6 text-xs text-muted-foreground"><span>© 2026 Hamza.</span><span>{c.footer}</span></div></footer>
  </div>;
}
