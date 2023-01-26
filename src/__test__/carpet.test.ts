import { expect, it } from 'vitest';
import { createSierpinskiCarpet } from '../carpet';

it('correctly creates sierpinski carpet', () => {
  const size = 1000;

  expect(
    createSierpinskiCarpet({
      size,
      depth: 0,
    }).length,
  ).toEqual(1);

  expect(
    createSierpinskiCarpet({
      size,
      depth: 1,
    }).length,
  ).toEqual(8);

  expect(
    createSierpinskiCarpet({
      size,
      depth: 2,
    }).length,
  ).toEqual(64);

  expect(
    createSierpinskiCarpet({
      size,
      depth: 3,
    }).length,
  ).toEqual(512);

  expect(
    createSierpinskiCarpet({
      size,
      depth: 4,
    }).length,
  ).toEqual(4096);

  expect(
    createSierpinskiCarpet({
      size,
      depth: 1,
    }),
  ).toEqual([
    { width: 333.3333333333333, height: 333.3333333333333, x: 0, y: 0 },
    { width: 333.3333333333333, height: 333.3333333333333, x: 0, y: 333.3333333333333 },
    { width: 333.3333333333333, height: 333.3333333333333, x: 0, y: 666.6666666666666 },
    { width: 333.3333333333333, height: 333.3333333333333, x: 333.3333333333333, y: 0 },
    { width: 333.3333333333333, height: 333.3333333333333, x: 333.3333333333333, y: 666.6666666666666 },
    { width: 333.3333333333333, height: 333.3333333333333, x: 666.6666666666666, y: 0 },
    { width: 333.3333333333333, height: 333.3333333333333, x: 666.6666666666666, y: 333.3333333333333 },
    { width: 333.3333333333333, height: 333.3333333333333, x: 666.6666666666666, y: 666.6666666666666 },
  ]);
});
