import { describe, expect, it } from 'vitest';
import { resolveInitialLanguage } from '@/lib/initial-language';

describe('Language-specific search links', () => {
  it('opens Arabic search links in Arabic even with an English preference', () => {
    expect(resolveInitialLanguage('ar', 'en', 'en-US')).toBe('ar');
  });
  it('opens English search links in English even with an Arabic preference', () => {
    expect(resolveInitialLanguage('en', 'ar', 'ar-EG')).toBe('en');
  });
  it('uses the device language when there is no explicit or saved preference', () => {
    expect(resolveInitialLanguage(null, null, 'ar-EG')).toBe('ar');
    expect(resolveInitialLanguage(null, null, 'en-US')).toBe('en');
  });
});