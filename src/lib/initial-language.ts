import type { Lang } from './i18n';

export function resolveInitialLanguage(query: string | null, saved: string | null, device: string): Lang {
  if (query === 'ar' || query === 'en') return query;
  if (saved === 'ar' || saved === 'en') return saved;
  return device.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}