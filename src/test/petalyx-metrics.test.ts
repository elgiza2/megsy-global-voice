// @vitest-environment node
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const html = readFileSync('public/petalyx/index.html', 'utf8');
const targets = [...html.matchAll(/data-to="([\d.]+)" data-dec="(\d+)" data-suf="([%+])"/g)]
  .map(match => ({ value: Number(match[1]), decimals: Number(match[2]), suffix: match[3] }));

describe('Requested Petalyx metric targets', () => {
  it('finishes staff time freed at 40%', () => {
    expect(targets[0]).toEqual({ value: 40, decimals: 0, suffix: '%' });
  });
  it('finishes customers at 300+', () => {
    expect(targets[1]).toEqual({ value: 300, decimals: 0, suffix: '+' });
  });
  it('finishes task success at 99.2%', () => {
    expect(targets[2]).toEqual({ value: 99.2, decimals: 1, suffix: '%' });
  });
  it('finishes output reliability at 99.2%', () => {
    expect(targets[3]).toEqual({ value: 99.2, decimals: 1, suffix: '%' });
  });
});