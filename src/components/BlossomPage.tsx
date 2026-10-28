import { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useLang } from '@/lib/i18n';
import { getContent } from '@/lib/content';
import template from './blossom/landscape.html?raw';
import conferencePhoto from '@/assets/hamza-conference-reference.jpg';
import meetingPhoto from '@/assets/hamza-meeting-reference.jpg';

const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
export function BlossomPage({ company = false }: { company?: boolean }) {
  const { lang, setLang } = useLang();
  const navigate = useNavigate();
  const frame = useRef<HTMLIFrameElement>(null);
  const html = useMemo(() => {
    const c = getContent(lang);
    const ar = lang === 'ar';
    const values: Record<string, string> = {
      heroName: company ? 'Megsy AI' : 'Hamza', heroRole: company ? c.companyHeroBody : c.role,
      heroBody: company ? c.companyIntro : c.heroBody, discover: company ? c.personalSite : c.discover,
      language: ar ? 'EN' : 'عربي', aboutLabel: company ? c.companyLabel : c.aboutLabel,
      aboutTitle: (company ? c.companyTitle : c.aboutTitle).replace(/\n/g, ' '),
      biography: company ? c.companyMore : c.biography + ' ' + c.biographyMore,
      roleLabel: ar ? 'القيادة' : 'Leadership', companyLabel: c.nav.company,
      locationLabel: ar ? 'المقر' : 'Based in', location: c.location,
      focusLabel: ar ? 'المجال' : 'Focus', productLabel: c.productLabel, productTitle: c.productTitle,
      contactLabel: c.contactLabel, contactTitle: c.contactTitle.replace(/\n/g, ' '), contactBody: c.contactBody,
      contactButton: c.contactButton, aboutLink: c.aboutLink, sourcesLabel: c.sourcesLabel,
      contactLink: c.nav.contact, footerHome: company ? c.personalSite : c.name,
      identityLabel: ar ? 'الرئيس التنفيذي' : 'CEO',
      heroPhoto: company ? meetingPhoto : conferencePhoto, heroPhotoAlt: company ? c.meetingCaption : c.conferenceCaption,
      conferencePhoto, meetingPhoto,
      galleryLabel: c.galleryLabel, galleryTitle: c.galleryTitle, conferenceCaption: c.conferenceCaption,
      meetingCaption: c.meetingCaption, photoNote: c.photoNote, closePhoto: ar ? 'إغلاق الصورة' : 'Close photo',
      sourceNote: c.sourceNote, availability: c.availability,
      listingNote: c.listingNote, listingUrl: c.listingUrl,
    };
    c.sources.forEach((source, index) => { values[`sourceName${index}`] = source.name; values[`sourceUrl${index}`] = source.url; });
    c.products.forEach((p, index) => {
      values[`productTitle${index}`] = p.title; values[`productBody${index}`] = p.body;
      values[`productUrl${index}`] = p.url; values[`productDomain${index}`] = p.domain;
      values[`stepLabel${index}`] = `${index + 1}: ${p.title}`;
    });
    let result = template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => escapeHtml(values[key] ?? ''));
    result = result.replace('<html lang="en">', `<html lang="${lang}" dir="${ar ? 'rtl' : 'ltr'}">`);
    result = result.replace('</head>', '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&amp;display=swap"></head>');
    if (company) result = result.replace('href="/megsy" target="_top"', 'href="/" target="_top"').replace('data-nav="company"', 'data-nav="home"');
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
