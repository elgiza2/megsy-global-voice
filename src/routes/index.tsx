import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteShell } from '@/components/SiteShell';
import { CompanySections } from '@/components/CompanySections';
import { useLang } from '@/lib/i18n';
import { getContent } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import technology from '@/assets/technology-study.jpg';

const SITE_URL = 'https://id-preview--f2e4c7ce-e4c7-46e3-863b-d8166c9f03ec.lovable.app';
const title = 'Hamza — Hamza Hassan Elgzairy, CEO of Megsy AI | حمزة';
const description = 'Meet Hamza Hassan Elgzairy, CEO of Megsy AI. Explore his perspective and Megsy’s AI, creation and customer support products. حمزة حسن الجزايري، الرئيس التنفيذي لشركة Megsy AI.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'profile' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/?lang=en` }, { rel: 'alternate', hrefLang: 'ar', href: `${SITE_URL}/?lang=ar` }, { rel: 'alternate', hrefLang: 'x-default', href: SITE_URL }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Hamza Hassan Elgzairy', alternateName: ['حمزة حسن الجزايري', 'Hamza'], jobTitle: 'CEO', worksFor: { '@type': 'Organization', name: 'Megsy AI', url: 'https://www.megsyai.com/' }, knowsLanguage: ['ar', 'en'], url: SITE_URL }) }] }),
  component: Home,
});
function Home() {
  const { lang } = useLang(); const c = getContent(lang);
  return <SiteShell>
    <section id="top" className="hamza-hero">
      <img src={technology} alt="" width={1920} height={1024} fetchPriority="high" className="technology-image" />
      <div className="page-width hero-inner"><p className="eyebrow flex items-center gap-2"><span className="status-dot" />{c.role}</p><h1 className="hero-name" dir="ltr">Hamza.</h1><h2 className="hero-statement whitespace-pre-line">{c.heroLine}</h2><p className="hero-description">{c.heroBody}</p><Button asChild size="lg" className="mt-7"><Link to="/megsy">{c.discover}<ArrowUpRight /></Link></Button></div>
      <div className="page-width hero-bottom"><span>{c.name}</span><a href="#about" className="inline-flex items-center gap-3">{c.scroll}<ArrowDown size={15} /></a></div>
    </section>
    <section id="about" className="page-width section-space scroll-mt-24"><div className="about-layout"><div><p className="eyebrow">{c.aboutLabel}</p><h2 className="editorial-title mt-6 whitespace-pre-line">{c.aboutTitle}</h2></div><div className="about-copy"><p className="text-xl leading-relaxed md:text-2xl">{c.biography}</p><p className="mt-6 leading-relaxed text-muted-foreground">{c.biographyMore}</p><p className="signature" dir="ltr">Hamza</p></div></div>
      <div className="principles-grid">{c.principles.map((p, i) => <article key={p.title}><span className="eyebrow">0{i + 1}</span><h3 className="mt-5 text-xl font-medium">{p.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p></article>)}</div>
    </section>
    <section className="company-band"><div className="page-width section-space"><div className="about-layout"><div><p className="eyebrow">{c.companyLabel}</p><h2 className="editorial-title mt-6 whitespace-pre-line">{c.companyTitle}</h2></div><div><p className="text-xl leading-relaxed">{c.companyIntro}</p><p className="mt-5 leading-relaxed text-muted-foreground">{c.companyMore}</p><Button asChild variant="link" className="mt-5 px-0"><Link to="/megsy">{c.discover}<ArrowUpRight /></Link></Button></div></div><div className="megsy-wordmark" dir="ltr"><Sparkles aria-hidden="true" /><span>Megsy AI</span><ArrowUpRight aria-hidden="true" /></div></div></section>
    <CompanySections />
  </SiteShell>;
}
