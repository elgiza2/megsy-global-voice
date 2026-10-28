import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { useLang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Partners } from "@/components/Partners";
import stage from "@/assets/hamza-stage.jpg";
import portrait from "@/assets/hamza-portrait.jpg";
import workspace from "@/assets/hamza-workspace.jpg";

const title = "Hamza Hassan Elgzairy — Founder & CEO of Megsy | حمزة حسن الجزايري";
const description =
  "Hamza Hassan Elgzairy is the founder and CEO of Megsy, a technology company partnering with Google, Amazon and Alibaba. حمزة الجزايري المؤسس والرئيس التنفيذي لشركة Megsy.";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Hamza Hassan Elgzairy",
          alternateName: ["حمزة حسن الجزايري", "Hamza Elgzairy"],
          jobTitle: "Founder & CEO",
          worksFor: { "@type": "Organization", name: "Megsy" },
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, lang } = useLang();
  const c = getContent(lang);
  return (
    <SiteShell>
      <section id="top" className="founder-hero relative isolate flex overflow-hidden text-hero-ink">
        <img src={stage} alt={`${c.name} — ${c.stage}`} className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
        <div className="hero-shade absolute inset-0 -z-10" />
        <div className="mx-auto flex w-full max-w-6xl px-6 md:items-center">
          <div className="hero-copy w-full max-w-lg">
            <p className="text-sm">{t.eyebrow}</p><h1 className="text-display mt-5 text-4xl md:text-6xl">{c.name}</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild className="rounded-full"><Link to="/megsy">{t.ctaPrimary}<ArrowUpRight /></Link></Button><Button asChild variant="outline" className="rounded-full"><a href="#about">{c.about}</a></Button></div>
          </div>
        </div>
      </section><p className="mx-auto max-w-6xl px-6 pt-3 text-xs text-muted-foreground">{c.stage}</p>
      <Partners />
      <section id="about" className="section-wrap grid scroll-mt-16 items-center gap-10 md:grid-cols-2 md:gap-20">
        <figure><img src={portrait} alt={`${c.name} — ${c.portrait}`} className="aspect-[4/5] max-h-[580px] w-full rounded-lg object-cover" loading="lazy" /><figcaption className="mt-3 text-xs text-muted-foreground">{c.portrait}</figcaption></figure>
        <div><p className="text-sm text-muted-foreground">{c.about}</p><h2 className="section-title mt-5">{t.heroTitle}</h2><p className="mt-7 text-lg leading-relaxed">{c.biography}</p><p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.biographyMore}</p></div>
      </section>
      <section className="bg-editorial"><div className="section-wrap"><p className="text-sm text-muted-foreground">{c.philosophy}</p><h2 className="section-title mt-5 max-w-2xl">{c.approach}</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.approachBody}</p><div className="mt-12 grid gap-8 md:grid-cols-3">{t.principles.map((p, index) => <div key={p.t} className="border-t border-border pt-6"><p className="text-xs text-muted-foreground">0{index + 1}</p><h3 className="mt-5 text-xl font-medium">{p.t}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p></div>)}</div></div></section>
      <section className="section-wrap"><div className="mb-10 grid items-end gap-6 md:grid-cols-2"><div><p className="text-sm text-muted-foreground">{c.company} / Megsy</p><h2 className="section-title mt-5">{c.companyTitle}</h2></div><div><p className="leading-relaxed text-muted-foreground">{c.companyIntro}</p><Button asChild variant="link" className="mt-4 px-0"><Link to="/megsy">{t.ctaPrimary}<ArrowUpRight /></Link></Button></div></div><img src={workspace} alt={`${c.name} — ${c.workspace}`} className="aspect-[3/2] w-full rounded-lg object-cover md:aspect-[2/1]" loading="lazy" /><p className="mt-3 text-xs text-muted-foreground">{c.workspace}</p></section>
      <PhotoGallery />
      <section className="section-wrap border-t border-border"><div className="grid gap-10 md:grid-cols-2"><h2 className="section-title">{c.faqTitle}</h2><div>{c.faq.map(item => <details key={item.q} className="border-b border-border py-5"><summary className="text-lg font-medium">{item.q}</summary><p className="mt-4 leading-relaxed text-muted-foreground">{item.a}</p></details>)}</div></div></section>
    </SiteShell>
  );
}
