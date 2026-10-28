import { createFileRoute } from '@tanstack/react-router';

const title = 'Petalyx — Benchmark all AI staff';
const description = 'Benchmark the impact of all your AI staff.';
const poster = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261021_093215_b7826239-e451-4e15-b42b-d6bcf9497a32.png';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: poster },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: poster },
    ],
  }),
  component: Petalyx,
});

function Petalyx() {
  return <iframe src="/petalyx/index.html" title="Petalyx — Benchmark all AI staff" className="fixed inset-0 h-dvh w-full border-0 bg-background" />;
}
