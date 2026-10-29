import { createFileRoute } from '@tanstack/react-router';
import { BlossomPage } from '@/components/BlossomPage';

const SITE_URL = '/';
const title = 'Hamza — Hamza Hassan Elgzairy, CEO of Megsy LLC | حمزة';
const description = 'Hamza Hassan Elgzairy, CEO of Megsy LLC. Leadership, AI software and a vision for technology built from Egypt. حمزة حسن الجزايري وقيادته لشركة Megsy LLC.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:url', content: '/' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: '/' }, { rel: 'alternate', hrefLang: 'en', href: '/?lang=en' }, { rel: 'alternate', hrefLang: 'ar', href: '/?lang=ar' }, { rel: 'alternate', hrefLang: 'x-default', href: SITE_URL }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Hamza Hassan Elgzairy', alternateName: ['حمزة حسن الجزايري', 'Hamza'], jobTitle: 'CEO', worksFor: { '@type': 'Organization', name: 'Megsy LLC', url: '/megsy' }, knowsLanguage: ['ar', 'en'], url: SITE_URL }) }] }),
  component: Home,
});
function Home() { return <BlossomPage />; }
