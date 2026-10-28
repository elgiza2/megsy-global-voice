import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { useLang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { Partners } from "@/components/Partners";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import workspace from "@/assets/hamza-workspace.jpg";
import portrait from "@/assets/hamza-portrait.jpg";

const title = "Megsy — Technology partner of Google, Amazon & Alibaba | ميجسي";
const description =
  "Megsy, led by founder and CEO Hamza Hassan Elgzairy, builds technology products and partnerships with Google, Amazon and Alibaba. شركة Megsy للتقنية.";

export const Route = createFileRoute("/megsy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Megsy",
          founder: { "@type": "Person", name: "Hamza Hassan Elgzairy" },
          description,
        }),
      },
    ],
  }),
  component: Megsy,
});

function Megsy() {
  const { t, lang } = useLang();
  const c = getContent(lang);
  return (
    <SiteShell>
      <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-12 text-center md:pt-24">
        <h1 className="text-display text-6xl md:text-8xl">{t.megsyTitle}</h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">{t.megsySub}</p>
        <Button asChild className="mt-8 rounded-full"><a href="#contact">{t.ctaSecondary}<ArrowUpRight /></a></Button>
      </section>
      <section className="mx-auto max-w-6xl px-6">
        <img src={workspace} alt={`${c.name} — ${c.workspace}`} className="aspect-[3/2] w-full rounded-lg object-cover md:aspect-[2/1]" fetchPriority="high" />
        <p className="mt-3 text-xs text-muted-foreground">{c.workspace}</p>
      </section>
      <section className="section-wrap grid gap-10 md:grid-cols-2"><h2 className="section-title">{c.companyTitle}</h2><div><p className="text-xl leading-relaxed">{c.companyIntro}</p><p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.companyMore}</p></div></section>
      <Partners />
      <section className="bg-editorial"><div className="section-wrap"><p className="text-sm text-muted-foreground">{c.focusLabel}</p><h2 className="section-title mt-5">{c.focusTitle}</h2><div className="mt-12 grid gap-10 md:grid-cols-3">{c.focus.map((item, index) => <div key={item.title} className="border-t border-border pt-6"><p className="text-xs text-muted-foreground">0{index + 1}</p><h3 className="mt-5 text-xl font-medium">{item.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{item.body}</p></div>)}</div></div></section>
      <section className="section-wrap grid items-center gap-10 md:grid-cols-2 md:gap-20"><figure><img src={portrait} alt={`${c.name} — ${c.portrait}`} className="aspect-[4/5] max-h-[520px] w-full rounded-lg object-cover" loading="lazy" /><figcaption className="mt-3 text-xs text-muted-foreground">{c.portrait}</figcaption></figure><div><p className="text-sm text-muted-foreground">{t.eyebrow}</p><h2 className="section-title mt-5">{c.name}</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.biography}</p><Button asChild variant="link" className="mt-6 px-0"><a href="/">{c.about}<ArrowUpRight /></a></Button></div></section>
    </SiteShell>
  );
}
