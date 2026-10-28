import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { useLang } from "@/lib/i18n";

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
  const { t } = useLang();
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center md:pt-36">
        <h1 className="text-display text-6xl md:text-8xl">{t.megsyTitle}</h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">{t.megsySub}</p>
      </section>
      <section className="mx-auto max-w-6xl px-6">
        <div className="hero-panel aspect-[16/7] rounded-3xl" />
      </section>
      <section className="mx-auto max-w-6xl divide-y divide-border px-6 py-24">
        {t.megsyBody.map((b) => (
          <div key={b.t} className="grid gap-4 py-12 md:grid-cols-3">
            <h2 className="text-2xl font-semibold tracking-tight">{b.t}</h2>
            <p className="text-lg text-muted-foreground md:col-span-2">{b.d}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
