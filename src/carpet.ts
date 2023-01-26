import type { Box, Point } from './types';
import { validateOptions } from './validate';

type CreateOptions = {
  size: number;
  depth: number;
};

/**
 * Creates array with Sierpiński carpet data
 *
 * https://en.wikipedia.org/wiki/Sierpi%C5%84ski_carpet
 *
 * Example:
 * ```ts
 * const result = createSierpinskiCarpet({
 *   size: 400,
 *   depth: 4
 * })
 * ```
 */
export function createSierpinskiCarpet(options: CreateOptions): Box[] {
  validateOptions(options);

  const boxes: Box[] = [];

  /**
   * Creates boxes in loop
   */
  function create({ depth, size, x, y }: CreateOptions & Point) {
    // Break on last iteration
    if (depth === 0) {
      boxes.push({ width: size, height: size, x, y });
      return;
    }

    const subSize = size / 3;

    // Loop via matrix
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
          continue;
        }

        // Create next box
        create({
          size: subSize,
          depth: depth - 1,
          x: x + i * subSize,
          y: y + j * subSize,
        });
      }
    }
  }

  // Create first box
  create({
    size: options.size,
    depth: options.depth,
    x: 0,
    y: 0,
  });

  return boxes;
}
