import { useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import portrait from "@/assets/hamza-portrait.jpg";
import workspace from "@/assets/hamza-workspace.jpg";
import original from "@/assets/hamza-original.jpg.asset.json";

export function PhotoGallery() {
  const { lang } = useLang();
  const c = getContent(lang);
  const photos = [{ src: portrait, label: c.portrait }, { src: workspace, label: c.workspace }, { src: original.url, label: c.original }];
  const [selected, setSelected] = useState({ src: portrait, label: c.portrait });
  const dialog = useRef<HTMLDialogElement>(null);
  return <section id="pictures" className="section-wrap scroll-mt-24">
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><h2 className="section-title">{c.gallery}</h2><p className="max-w-sm text-muted-foreground">{c.gallerySub}</p></div>
    <div className="grid gap-6 md:grid-cols-[1fr_1.6fr_1fr]">{photos.map(photo => <figure key={photo.src}>
      <Button variant="ghost" className="group relative h-auto w-full overflow-hidden rounded-lg p-0" aria-label={`${c.openPhoto}: ${photo.label}`} onClick={() => { setSelected(photo); dialog.current?.showModal(); }}>
        <img src={photo.src} alt={`${c.name} — ${photo.label}`} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
        <span className="absolute end-3 bottom-3 rounded-full bg-background/90 p-2 text-foreground"><Maximize2 /></span>
      </Button><figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">{photo.label}</figcaption>
    </figure>)}</div><p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">{c.imageNote}</p>
    <dialog ref={dialog} className="photo-dialog rounded-lg bg-background p-4 text-foreground" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="mb-3 flex items-center justify-between gap-4"><p className="text-sm">{selected.label}</p><Button variant="ghost" size="icon" aria-label={c.close} onClick={() => dialog.current?.close()}><X /></Button></div>
      <img src={selected.src} alt={`${c.name} — ${selected.label}`} className="max-h-[75dvh] w-full object-contain" />
    </dialog>
  </section>;
}