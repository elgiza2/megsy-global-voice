import { describe, expect, it } from 'vitest';
import { goodFirmsListing, companyProducts } from '@/lib/company-facts';

describe('GoodFirms evidence', () => {
  it('keeps only Megsy AI active and customer support paused', () => {
    expect(companyProducts.filter(product => product.status === 'active').map(product => product.name)).toEqual(['Megsy AI']);
    expect(companyProducts.find(product => product.name === 'Customer support')?.status).toBe('paused');
  });
  it('records fourth list position only for the Egypt cloud category', () => {
    expect(goodFirmsListing.position).toBe(4);
    expect(goodFirmsListing.category).toBe('cloud-computing');
    expect(goodFirmsListing.country).toBe('Egypt');
    expect(goodFirmsListing.isNationalCompanyRank).toBe(false);
  });
});