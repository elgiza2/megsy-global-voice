import { createFileRoute } from '@tanstack/react-router';
import { BlossomPage } from '@/components/BlossomPage';
const title = 'Megsy LLC — Company, leadership and vision | Hamza';
const description = 'Meet Megsy LLC, led by Hamza Hassan Elgzairy, and its direction in technology. Megsy AI is its active product. شركة Megsy LLC وقيادة حمزة ورؤيته.';
export const Route = createFileRoute('/megsy')({ head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Megsy LLC', url: 'https://www.megsyai.com/', description: 'Megsy LLC is the company led by Hamza Hassan Elgzairy, with Megsy AI as its currently active product.', sameAs: ['https://www.goodfirms.co/company/megsy'] }) }] }), component: Megsy });
function Megsy() { return <BlossomPage company />; }
