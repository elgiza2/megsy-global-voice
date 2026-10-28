import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { useLang } from "@/lib/i18n";

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
  const { t } = useLang();
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center md:pt-36">
        <p className="text-sm text-muted-foreground">{t.eyebrow}</p>
        <h1 className="text-display mx-auto mt-6 max-w-4xl text-5xl md:text-7xl">{t.heroTitle}</h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.heroSub}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/megsy" className="btn-pill">{t.ctaPrimary}</Link>
          <a href="#contact" className="btn-pill-ghost">{t.ctaSecondary}</a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="hero-panel flex aspect-[16/8] items-end rounded-3xl p-8 md:p-12">
          <div className="text-start">
            <p className="text-sm opacity-70">{t.partnersLabel}</p>
            <div className="mt-3 flex flex-wrap gap-x-10 gap-y-2 text-2xl font-semibold tracking-tight md:text-4xl">
              <span>Google</span><span>Amazon</span><span>Alibaba</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-32 md:grid-cols-2">
        <h2 className="text-display text-4xl md:text-5xl">{t.aboutTitle}</h2>
        <p className="text-xl leading-relaxed text-muted-foreground">{t.aboutBody}</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-border bg-border px-0 md:grid-cols-3">
        {t.principles.map((p) => (
          <div key={p.t} className="bg-background p-10">
            <h3 className="text-lg font-semibold">{p.t}</h3>
            <p className="mt-3 text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
