import type { Box, Triangle } from "./types";

type CreateOptions = {
  size: number;
  iterations: number;
};

type LoopOptions = {
  currentIteration: number;
  totalIterations: number;
  previousBoxes: Box[];
  newPoints?: Triangle[];
};

type FindTrianglesResult = {
  top: Box;
  left: Box;
  right: Box;
};

/**
 * Creates triangle from box
 *
 * The top can be at the top of box or upside down
 */
function createTriangle(box: Box, reversed: boolean): Triangle {
  return {
    box,
    points: reversed
      ? [
          { x: box.x, y: box.y },
          { x: box.x + box.width, y: box.y },
          { x: box.x + box.width / 2, y: box.y + box.height },
        ]
      : [
          { x: box.x + box.width / 2, y: box.y },
          { x: box.x, y: box.y + box.height },
          { x: box.x + box.width, y: box.y + box.height },
        ],
  };
}

/**
 * Returns top/left/right box for new triangles
 */
function findTrianglesInBox(box: Box): FindTrianglesResult {
  const halfWidth = box.width / 2;
  const halfHeight = box.height / 2;
  const quarterWidth = box.width / 4;

  return {
    top: {
      width: halfWidth,
      height: halfHeight,
      x: box.x + quarterWidth,
      y: box.y - halfHeight,
    },
    left: {
      width: halfWidth,
      height: halfHeight,
      x: box.x - quarterWidth,
      y: box.y + halfHeight,
    },
    right: {
      width: halfWidth,
      height: halfHeight,
      x: box.x + quarterWidth * 3,
      y: box.y + halfHeight,
    },
  };
}

/**
 * Creating triangles in loop
 */
function loop({
  currentIteration,
  totalIterations,
  previousBoxes,
  newPoints = [],
}: LoopOptions): Triangle[] {
  if (currentIteration >= totalIterations) {
    return newPoints;
  }

  const newBoxes: Box[] = [];
  for (let index = 0; index < previousBoxes.length; index++) {
    const box = previousBoxes[index];

    // Find top, left, right boxes
    const {
      top: topBox,
      left: leftBox,
      right: rightBox,
    } = findTrianglesInBox(box);

    // Save this boxes for next usage
    newBoxes.push(topBox, leftBox, rightBox);

    // Create triangles for boxes
    newPoints.push(
      createTriangle(topBox, true),
      createTriangle(leftBox, true),
      createTriangle(rightBox, true)
    );
  }

  return loop({
    currentIteration: currentIteration + 1,
    totalIterations,
    previousBoxes: newBoxes,
    newPoints,
  });
}

/**
 * Creates array with Sierpiński triangle data
 *
 * https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle
 *
 * Example:
 * ```ts
 * const result = createSierpinskiTriangle({
 *   size: 400,
 *   iterations: 4
 * })
 * ```
 */
export function createSierpinskiTriangle(options: CreateOptions) {
  const triangles: Triangle[] = [];

  // Create first triangle
  const firstTriangle = createTriangle(
    {
      width: options.size,
      height: options.size,
      x: 0,
      y: 0,
    },
    false
  );
  triangles.push(firstTriangle);

  if (options.iterations === 0) {
    return triangles;
  }

  // Create second triangle
  const mainBox: Box = {
    width: options.size / 2,
    height: options.size / 2,
    x: options.size / 4,
    y: options.size / 2,
  };
  const secondTriangle = createTriangle(mainBox, true);
  triangles.push(secondTriangle);

  if (options.iterations === 1) {
    return triangles;
  }

  // Start a cycle with triangles generation
  const result = loop({
    currentIteration: 1,
    totalIterations: options.iterations,
    previousBoxes: [mainBox],
  });

  return triangles.concat(result);
}
