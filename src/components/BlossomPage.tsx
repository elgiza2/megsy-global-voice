import { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useLang } from '@/lib/i18n';
import { getContent } from '@/lib/content';
import template from './blossom/landscape.html?raw';
import deskPhoto from '@/assets/hamza-desk.jpg';
import stagePhoto from '@/assets/hamza-stage.jpg';
import teamPhoto from '@/assets/hamza-team.jpg';
import windowPhoto from '@/assets/hamza-window.jpg';
import skyPainting from '@/assets/sky-painting.jpg';

const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export function BlossomPage({ company = false }: { company?: boolean }) {
  const { lang, setLang } = useLang();
  const navigate = useNavigate();
  const frame = useRef<HTMLIFrameElement>(null);
  const html = useMemo(() => {
    const c = getContent(lang);
    const ar = lang === 'ar';
    const values: Record<string, string> = {
      language: ar ? 'English' : 'العربية',
      menuAbout: c.menuAbout, menuWork: c.menuWork, menuPhotos: c.menuPhotos, menuFaq: c.menuFaq,
      companyLabel: company ? c.personalSite : c.nav.company,
      heroEyebrow: company ? (ar ? 'مساحة عمل بالذكاء الاصطناعي' : 'AI workspace') : c.role,
      heroName: company ? 'Megsy AI' : 'Hamza',
      heroBody: company ? c.companyIntro : c.heroBody,
      discover: company ? c.personalSite : c.discover,
      skyPainting,
      heroPhoto: company ? teamPhoto : deskPhoto,
      heroPhotoAlt: company ? (c.photoCaptions[2] ?? '') : (c.photoCaptions[3] ?? ''),
      aboutLabel: c.aboutLabel, biography: c.biography, biographyMore: c.biographyMore,
      roleLabel: ar ? 'المنصب' : 'Role', identityLabel: ar ? 'الرئيس التنفيذي' : 'CEO',
      companyFactLabel: ar ? 'الشركة' : 'Company',
      focusLabel: ar ? 'المجال' : 'Focus', focusValue: ar ? 'الذكاء الاصطناعي' : 'Artificial intelligence',
      companySectionLabel: c.companySectionLabel, companySectionTitle: c.companySectionTitle,
      companySectionBody: c.companySectionBody, companySectionMore: c.companySectionMore,
      contactButton: c.contactButton,
      sidePhoto: company ? deskPhoto : teamPhoto, sidePhotoAlt: company ? (c.photoCaptions[3] ?? '') : (c.photoCaptions[2] ?? ''),
      approachLabel: c.approachLabel, approachTitle: c.approachTitle, approachBody: c.approachBody,
      galleryLabel: c.galleryLabel, galleryTitle: c.galleryTitle, photoNote: c.photoNote,
      stagePhoto, windowPhoto, teamPhoto, deskPhoto,
      faqLabel: c.faqLabel, faqTitle: c.faqTitle,
      sourcesLabel: c.sourcesLabel, availability: c.availability, listingNote: c.listingNote, listingUrl: c.listingUrl,
      contactEyebrow: c.contactEyebrow, contactHeading: c.contactHeading, contactText: c.contactText,
      footerHome: company ? c.personalSite : c.nav.company,
      closePhoto: ar ? 'إغلاق' : 'Close',
    };
    c.photoCaptions.forEach((caption, index) => { values[`caption${index}`] = caption; });
    c.faqs.forEach((item, index) => { values[`faqQuestion${index}`] = item.question; values[`faqAnswer${index}`] = item.answer; });
    c.sources.forEach((source, index) => { values[`sourceName${index}`] = source.name; values[`sourceUrl${index}`] = source.url; });
    c.products.forEach((p, index) => { values[`productTitle${index}`] = p.title; values[`productBody${index}`] = p.body; });
    let result = template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => escapeHtml(values[key] ?? ''));
    result = result.replace('<html lang="en">', `<html lang="${lang}" dir="${ar ? 'rtl' : 'ltr'}">`);
    result = result.replace('</head>', '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&amp;display=swap"></head>');
    if (company) result = result.replaceAll('href="/megsy" target="_top"', 'href="/" target="_top"').replaceAll('data-nav="company"', 'data-nav="home"');
    return result;
  }, [lang, company]);
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.source !== frame.current?.contentWindow) return;
      // srcdoc reports an opaque origin in some browsers; only the owned frame may send messages.
      if (event.origin !== window.location.origin && event.origin !== 'null') return;
      if (event.data?.type === 'hamza-language') setLang(lang === 'ar' ? 'en' : 'ar');
      if (event.data?.type === 'hamza-navigation') void navigate({ to: event.data.page === 'company' ? '/megsy' : '/' });
    };
    window.addEventListener('message', listener);
    return () => window.removeEventListener('message', listener);
  }, [lang, setLang, navigate]);
  return <iframe key={`${lang}-${company}`} ref={frame} title={company ? 'Megsy AI' : 'Hamza'} srcDoc={html} className="block h-dvh w-full border-0" />;
}
