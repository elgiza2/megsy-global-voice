import { createFileRoute } from '@tanstack/react-router';
import { BlossomPage } from '@/components/BlossomPage';

const SITE_URL = 'https://id-preview--f2e4c7ce-e4c7-46e3-863b-d8166c9f03ec.lovable.app';
const title = 'Hamza — Hamza Hassan Elgzairy, CEO of Megsy LLC | حمزة';
const description = 'Meet Hamza Hassan Elgzairy, CEO of Megsy LLC. Explore his perspective on leadership, the vision for Megsy LLC and the company behind Megsy AI. حمزة حسن الجزايري ورؤيته لشركة Megsy LLC.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'profile' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/?lang=en` }, { rel: 'alternate', hrefLang: 'ar', href: `${SITE_URL}/?lang=ar` }, { rel: 'alternate', hrefLang: 'x-default', href: SITE_URL }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Hamza Hassan Elgzairy', alternateName: ['حمزة حسن الجزايري', 'Hamza'], jobTitle: 'CEO', worksFor: { '@type': 'Organization', name: 'Megsy LLC', url: 'https://www.megsyai.com/' }, knowsLanguage: ['ar', 'en'], url: SITE_URL }) }] }),
  component: Home,
});
function Home() { return <BlossomPage />; }
