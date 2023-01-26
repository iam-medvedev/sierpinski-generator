import { expect, it } from 'vitest';
import { createSierpinskiTriangle } from '../triangle';

it('correctly creates sierpinski triangle', () => {
  const size = 1000;

  expect(
    createSierpinskiTriangle({
      size,
      depth: 0,
    }).length,
  ).toEqual(1);

  expect(
    createSierpinskiTriangle({
      size,
      depth: 1,
    }).length,
  ).toEqual(3);

  expect(
    createSierpinskiTriangle({
      size,
      depth: 2,
    }).length,
  ).toEqual(9);

  expect(
    createSierpinskiTriangle({
      size,
      depth: 3,
    }).length,
  ).toEqual(27);

  expect(
    createSierpinskiTriangle({
      size,
      depth: 4,
    }).length,
  ).toEqual(81);

  expect(
    createSierpinskiTriangle({
      size,
      depth: 1,
    }),
  ).toEqual([
    {
      box: { width: 500, height: 500, x: 0, y: 0 },
      points: [
        { x: 0, y: 0 },
        { x: 500, y: 0 },
        { x: 250, y: 500 },
      ],
    },
    {
      box: { width: 500, height: 500, x: 500, y: 0 },
      points: [
        { x: 500, y: 0 },
        { x: 1000, y: 0 },
        { x: 750, y: 500 },
      ],
    },
    {
      box: { width: 500, height: 500, x: 250, y: 500 },
      points: [
        { x: 250, y: 500 },
        { x: 750, y: 500 },
        { x: 500, y: 1000 },
      ],
    },
  ]);
});
