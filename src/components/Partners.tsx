import { useLang } from "@/lib/i18n";
import { getContent } from "@/lib/content";

export function Partners() {
  const { t, lang } = useLang();
  const c = getContent(lang);
  return <section className="section-wrap border-b border-border">
    <div className="grid gap-6 md:grid-cols-2"><h2 className="text-sm font-medium">{t.partnersLabel}</h2><p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{c.partnersBody}</p></div>
    <div className="mt-12 grid gap-8 sm:grid-cols-3">{["Google", "Amazon", "Alibaba"].map((name, index) => <div key={name}><p className="text-3xl font-semibold" dir="ltr">{name}</p><p className="mt-3 text-sm text-muted-foreground">{c.partnerDescriptions[index]}</p></div>)}</div>
  </section>;
}