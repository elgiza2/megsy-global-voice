import { ArrowUpRight, Code2, MessageSquare, Sparkles } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { getContent } from '@/lib/content';
import { Button } from '@/components/ui/button';

export function CompanySections() {
  const { lang } = useLang();
  const c = getContent(lang);
  return <>
    <section className="page-width section-space" id="products">
      <div className="section-heading"><div><p className="eyebrow">{c.productLabel}</p><h2 className="editorial-title mt-5">{c.productTitle}</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{c.productSub}</p></div>
      <div className="product-grid">
        {c.products.map((p, index) => <article key={p.url} className="product-item group">
          <div className={`product-art product-art-${index}`} aria-hidden="true"><span className="product-mark">{p.symbol === 'spark' ? <Sparkles /> : p.symbol === 'code' ? <Code2 /> : <MessageSquare />}</span><span className="product-art-name" dir="ltr">{p.name === 'Megsy Studio' ? 'Megsy Create' : p.name}</span></div>
          <div className="flex items-center justify-between gap-3 pt-6"><p className="eyebrow">{p.tag}</p><span className="text-xs text-muted-foreground">0{index + 1}</span></div>
          <h3 className="mt-4 text-2xl font-medium">{p.title}</h3><p className="mt-3 min-h-20 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          <Button asChild variant="link" className="mt-4 px-0"><a href={p.url} target="_blank" rel="noopener noreferrer"><span dir="ltr">{p.domain}</span><ArrowUpRight /></a></Button>
        </article>)}
      </div>
    </section>
    <section className="page-width sources-section"><p className="eyebrow">{c.sourcesLabel}</p><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{c.sourceNote}</p><div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">{c.sources.map(s => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs underline decoration-border underline-offset-4 hover:decoration-foreground">{s.name}<ArrowUpRight size={13} /></a>)}</div></section>
  </>;
}
