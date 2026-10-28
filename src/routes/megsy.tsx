import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteShell } from '@/components/SiteShell';
import { CompanySections } from '@/components/CompanySections';
import { useLang } from '@/lib/i18n';
import { getContent } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Sparkles, ArrowDown } from 'lucide-react';
import technology from '@/assets/technology-study.jpg';
const title = 'Megsy AI — AI workspace, creation & customer support | Hamza';
const description = 'Discover Megsy AI, a Cairo-based AI platform, its creation workspace and Megsy Bot customer support product. تعرّف على Megsy AI ومنصاتها للإنشاء وخدمة العملاء.';
export const Route = createFileRoute('/megsy')({ head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Megsy AI', url: 'https://www.megsyai.com/', description: 'An AI platform for production, development and content creation, listed on EgyptInnovate.', location: { '@type': 'Place', name: 'Cairo, Egypt' }, sameAs: ['https://egyptinnovate.com/en/entities/profile/megsyai'] }) }] }), component: Megsy });
function Megsy() {
  const { lang } = useLang(); const c = getContent(lang);
  return <SiteShell>
    <section id="top" className="company-hero"><div className="page-width"><p className="eyebrow">{c.location} / {c.productLabel}</p><h1 className="company-hero-title" dir="ltr"><Sparkles aria-hidden="true" />Megsy AI</h1><p className="mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground">{c.companyHeroBody}</p><Button asChild size="lg" className="mt-8"><a href="#products">{c.productTitle}<ArrowDown /></a></Button></div></section>
    <div className="company-visual"><img src={technology} alt="" width={1920} height={1024} fetchPriority="high" /></div>
    <section className="page-width section-space about-layout"><h2 className="editorial-title whitespace-pre-line">{c.companyTitle}</h2><div><p className="text-xl leading-relaxed">{c.companyIntro}</p><p className="mt-5 leading-relaxed text-muted-foreground">{c.companyMore}</p></div></section>
    <CompanySections />
    <section className="page-width section-space border-t border-border about-layout"><div><p className="eyebrow">{c.founderLabel}</p><h2 className="editorial-title mt-6 whitespace-pre-line">{c.founderTitle}</h2></div><div><p className="text-xl leading-relaxed">{c.founderBody}</p><Button asChild variant="link" className="mt-6 px-0"><Link to="/">{c.personalSite}<ArrowUpRight /></Link></Button></div></section>
  </SiteShell>;
}
