import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Partners } from "@/components/Partners";
import { useLang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import keynote from "@/assets/hamza-keynote.jpg";
import portrait from "@/assets/hamza-editorial.jpg";
import officeWide from "@/assets/hamza-office-wide.jpg";

const SITE_URL = "https://id-preview--f2e4c7ce-e4c7-46e3-863b-d8166c9f03ec.lovable.app";
const title = "Hamza Hassan Elgzairy — Founder & CEO of Megsy | حمزة حسن الجزايري";
const description =
  "The official website of Hamza Hassan Elgzairy, founder and CEO of Megsy — a technology company partnering with Google, Amazon and Alibaba. الموقع الرسمي لحمزة حسن الجزايري، المؤسس والرئيس التنفيذي لشركة Megsy، شركة تقنية تشارك Google وAmazon وAlibaba.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hamza Hassan Elgzairy",
  alternateName: ["حمزة حسن الجزايري", "Hamza Elgzairy", "Elgzairy"],
  jobTitle: "Founder & CEO",
  worksFor: { "@type": "Organization", name: "Megsy" },
  description: "Founder and CEO of Megsy, a technology company partnering with Google, Amazon and Alibaba.",
  knowsLanguage: ["ar", "en"],
  url: SITE_URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Hamza Hassan Elgzairy?",
      acceptedAnswer: { "@type": "Answer", text: "Hamza Hassan Elgzairy is the founder and CEO of Megsy." },
    },
    {
      "@type": "Question",
      name: "What is Megsy?",
      acceptedAnswer: { "@type": "Answer", text: "Megsy is a technology company led by Hamza Hassan Elgzairy." },
    },
    {
      "@type": "Question",
      name: "Who are Megsy's partners?",
      acceptedAnswer: { "@type": "Answer", text: "Megsy's partners include Google, Amazon and Alibaba." },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/?lang=en` },
      { rel: "alternate", hrefLang: "ar", href: `${SITE_URL}/?lang=ar` },
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(personSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useLang();
  const c = getContent(lang);
  return (
    <SiteShell>
      <section id="top" className="founder-hero">
        <img src={keynote} alt={`${c.name} — ${c.stage}`} fetchPriority="high" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy relative z-10 mx-auto w-full max-w-6xl px-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-muted-foreground">{t.eyebrow}</p>
            <h1 className="text-display mt-4 text-4xl md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">{t.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full"><Link to="/megsy">{t.ctaPrimary}<ArrowUpRight /></Link></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full"><a href="#contact">{t.ctaSecondary}</a></Button>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <section className="section-wrap grid items-center gap-10 md:grid-cols-2 md:gap-20">
        <figure>
          <img src={portrait} alt={`${c.name} — ${c.portrait}`} className="aspect-[4/5] max-h-[520px] w-full rounded-lg object-cover" loading="lazy" />
          <figcaption className="mt-3 text-xs text-muted-foreground">{c.portrait}</figcaption>
        </figure>
        <div>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.biography}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{c.biographyMore}</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {t.principles.map(principle => (
              <div key={principle.t} className="border-t border-border pt-5">
                <h3 className="text-sm font-medium">{principle.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-editorial">
        <div className="section-wrap grid gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-sm text-muted-foreground">{c.visionLabel}</p>
            <h2 className="section-title mt-5">{c.visionTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.visionBody}</p>
          </div>
          <div className="md:pt-16">
            <h3 className="text-lg font-medium">{c.approach}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{c.approachBody}</p>
          </div>
        </div>
      </section>

      <section className="section-wrap grid gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-sm text-muted-foreground">{c.company}</p>
          <h2 className="section-title mt-5">{c.companyTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.companyIntro}</p>
          <Button asChild variant="link" className="mt-6 px-0"><Link to="/megsy">{c.about ? t.ctaPrimary : t.ctaPrimary}<ArrowUpRight /></Link></Button>
        </div>
        <figure>
          <img src={officeWide} alt={`${c.name} — ${c.workspace}`} className="aspect-[16/10] w-full rounded-lg object-cover" loading="lazy" />
          <figcaption className="mt-3 text-xs text-muted-foreground">{c.workspace}</figcaption>
        </figure>
      </section>

      <PhotoGallery />

      <section className="section-wrap max-w-3xl">
        <h2 className="section-title">{c.faqTitle}</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {c.faq.map(item => (
            <details key={item.q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 text-lg font-medium marker:content-none">{item.q}<span className="text-muted-foreground transition-transform group-open:rotate-45">+</span></summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
