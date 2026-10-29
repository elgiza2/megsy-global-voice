import { createFileRoute } from '@tanstack/react-router';
import { BlossomPage } from '@/components/BlossomPage';

const SITE_URL = '/';
const title = 'Hamza — Hamza Hassan Elgzairy, CEO of Megsy LLC | حمزة';
const description = 'Hamza Hassan Elgzairy, CEO of Megsy LLC. Leadership, AI software and a vision for technology built from Egypt. حمزة حسن الجزايري وقيادته لشركة Megsy LLC.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:url', content: '/' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, { property: 'og:image', content: '/hamza-hassan-elgzairy-og.jpg' }, { name: 'twitter:image', content: '/hamza-hassan-elgzairy-og.jpg' }, { property: 'og:image:alt', content: 'Hamza Hassan Elgzairy' }], links: [{ rel: 'canonical', href: '/' }, { rel: 'alternate', hrefLang: 'en', href: '/?lang=en' }, { rel: 'alternate', hrefLang: 'ar', href: '/?lang=ar' }, { rel: 'alternate', hrefLang: 'x-default', href: SITE_URL }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ProfilePage', mainEntity: { '@type': 'Person', '@id': '/#hamza', name: 'Hamza Hassan Elgzairy', alternateName: ['حمزة حسن الجزايري', 'Hamza Elgzairy', 'Hamza'], jobTitle: 'Chief Executive Officer', description: 'Hamza Hassan Elgzairy is an Egyptian technology entrepreneur and the CEO of Megsy LLC, an artificial intelligence software company.', image: '/hamza-hassan-elgzairy.jpg', nationality: { '@type': 'Country', name: 'Egypt' }, worksFor: { '@type': 'Organization', name: 'Megsy LLC', url: 'https://about.megsyai.com/' }, knowsAbout: ['Artificial intelligence', 'Software', 'Technology leadership', 'Entrepreneurship'], knowsLanguage: ['ar', 'en'], url: SITE_URL, sameAs: ['https://www.linkedin.com/in/hamzame', 'https://www.instagram.com/elgiza.offical', 'https://about.megsyai.com/'] } }) }] }),
  component: Home,
});
function Home() { return <BlossomPage />; }
