import { createFileRoute } from '@tanstack/react-router';
import { BlossomPage } from '@/components/BlossomPage';

const SITE_URL = 'https://id-preview--f2e4c7ce-e4c7-46e3-863b-d8166c9f03ec.lovable.app';
const title = 'Hamza — Hamza Hassan Elgzairy, CEO of Megsy AI | حمزة';
const description = 'Meet Hamza Hassan Elgzairy, CEO of Megsy AI. Explore his perspective and Megsy’s AI, creation and customer support products. حمزة حسن الجزايري، الرئيس التنفيذي لشركة Megsy AI.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'profile' }, { property: 'og:image', content: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261021_093215_b7826239-e451-4e15-b42b-d6bcf9497a32.png' }, { name: 'twitter:image', content: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261021_093215_b7826239-e451-4e15-b42b-d6bcf9497a32.png' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/?lang=en` }, { rel: 'alternate', hrefLang: 'ar', href: `${SITE_URL}/?lang=ar` }, { rel: 'alternate', hrefLang: 'x-default', href: SITE_URL }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Hamza Hassan Elgzairy', alternateName: ['حمزة حسن الجزايري', 'Hamza'], jobTitle: 'CEO', worksFor: { '@type': 'Organization', name: 'Megsy AI', url: 'https://www.megsyai.com/' }, knowsLanguage: ['ar', 'en'], url: SITE_URL }) }] }),
  component: Home,
});
function Home() { return <BlossomPage />; }
