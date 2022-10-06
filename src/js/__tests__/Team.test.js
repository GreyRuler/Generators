import { expect, test } from '@jest/globals';
import canIterator from '../canIterator';

test('', () => {
  expect(canIterator(new Map())).toBe(true);
  expect(canIterator(new Set())).toBe(true);
  expect(canIterator(null)).toBe(false);
  expect(canIterator(10)).toBe(false);
  expect(canIterator('new Map()')).toBe(true);
});
