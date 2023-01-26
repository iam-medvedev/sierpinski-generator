import b from 'benny';
import { createSierpinskiTriangle, createSierpinskiCarpet } from './src/';

b.suite(
  'Triangle',

  b.add('Depth: 1', () => createSierpinskiTriangle({ size: 1000, depth: 1 })),
  b.add('Depth: 2', () => createSierpinskiTriangle({ size: 1000, depth: 2 })),
  b.add('Depth: 3', () => createSierpinskiTriangle({ size: 1000, depth: 3 })),
  b.add('Depth: 4', () => createSierpinskiTriangle({ size: 1000, depth: 4 })),

  b.cycle(),
  b.complete(),

  b.save({ file: 'result', folder: '.bench', format: 'chart.html' }),
);

b.suite(
  'Carpet',

  b.add('Depth: 1', () => createSierpinskiCarpet({ size: 1000, depth: 1 })),
  b.add('Depth: 2', () => createSierpinskiCarpet({ size: 1000, depth: 2 })),
  b.add('Depth: 3', () => createSierpinskiCarpet({ size: 1000, depth: 3 })),
  b.add('Depth: 4', () => createSierpinskiCarpet({ size: 1000, depth: 4 })),

  b.cycle(),
  b.complete(),

  b.save({ file: 'result', folder: '.bench', format: 'chart.html' }),
);
