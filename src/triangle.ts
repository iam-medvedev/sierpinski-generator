import type { CreateOptions, Triangle } from './types';
import { validateOptions } from './validate';

type LoopOptions = {
  x: number;
  y: number;
  size: number;
  depth: number;
};

/**
 * Creates array with Sierpiński triangle data
 *
 * https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle
 *
 * Example:
 * ```ts
 * const result = createSierpinskiTriangle({
 *   size: 400,
 *   depth: 4
 * })
 * ```
 */
export function createSierpinskiTriangle(options: CreateOptions): Triangle[] {
  validateOptions(options);

  const triangles: Triangle[] = [];

  /**
   * Creates triangles in loop
   */
  function createTriangle({ x, y, size, depth }: LoopOptions) {
    // Break on last iteration
    if (depth === 0) {
      triangles.push({
        box: {
          width: size,
          height: size,
          x,
          y,
        },
        points: [
          { x, y },
          { x: x + size, y },
          { x: x + size / 2, y: y + size },
        ],
      });
      return;
    }

    const newSize = size / 2;
    const nextDepth = depth - 1;

    // Create top left triangle
    createTriangle({
      x,
      y,
      size: newSize,
      depth: nextDepth,
    });

    // Create top right triangle
    createTriangle({
      x: x + newSize,
      y,
      size: newSize,
      depth: nextDepth,
    });

    // Create bottom triangle
    createTriangle({
      x: x + newSize / 2,
      y: y + newSize,
      size: newSize,
      depth: nextDepth,
    });
  }

  // Create first triangle
  createTriangle({
    x: 0,
    y: 0,
    size: options.size,
    depth: options.depth,
  });

  return triangles;
}
