import { describe, expect, it } from 'vitest';
import { goodFirmsListing } from '@/lib/company-facts';

describe('GoodFirms evidence', () => {
  it('records fourth list position only for the Egypt cloud category', () => {
    expect(goodFirmsListing.position).toBe(4);
    expect(goodFirmsListing.category).toBe('cloud-computing');
    expect(goodFirmsListing.country).toBe('Egypt');
    expect(goodFirmsListing.isNationalCompanyRank).toBe(false);
  });
});