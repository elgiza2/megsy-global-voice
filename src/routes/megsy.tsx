import { createFileRoute } from '@tanstack/react-router';
import { BlossomPage } from '@/components/BlossomPage';
const title = 'Megsy AI — Unified AI workspace | Hamza';
const description = 'Discover Megsy AI, its unified AI workspace for chat, coding, images and documents. تعرّف على Megsy AI ومساحة العمل الموحّدة للإنشاء بالذكاء الاصطناعي.';
export const Route = createFileRoute('/megsy')({ head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Megsy AI', url: 'https://www.megsyai.com/', description: 'A unified workspace for AI chat, coding, images, documents and automation.', sameAs: ['https://www.goodfirms.co/company/megsy'] }) }] }), component: Megsy });
function Megsy() { return <BlossomPage company />; }
