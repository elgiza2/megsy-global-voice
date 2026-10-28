import { afterEach, describe, expect, it } from 'vitest';
import template from '@/components/blossom/landscape.html?raw';

afterEach(() => { document.body.replaceChildren(); });

describe('Landscape counters', () => {
  it('preserves non-numeric company facts during animation', () => {
    document.body.innerHTML = '<div class="card"><b>CEO</b><b>Megsy AI</b><b>Hamza</b><b>AI</b></div>';
    const counter = template.match(/const setCounters=p=>([^\n]+);/);
    if (!counter) throw new Error('Counter implementation missing');
    const animate = new Function('document', 'p', counter[1]);
    animate(document, 0);
    animate(document, 1);
    expect([...document.querySelectorAll('b')].map(el => el.textContent)).toEqual(['CEO', 'Megsy AI', 'Hamza', 'AI']);
  });
});