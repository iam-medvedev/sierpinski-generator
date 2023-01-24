import { expect, it } from "vitest";
import { createSierpinskiTriangle } from "../triangle";

const results = [
  {
    box: { width: 1000, height: 1000, x: 0, y: 0 },
    points: [
      { x: 500, y: 0 },
      { x: 0, y: 1000 },
      { x: 1000, y: 1000 },
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
  {
    box: { width: 250, height: 250, x: 375, y: 250 },
    points: [
      { x: 375, y: 250 },
      { x: 625, y: 250 },
      { x: 500, y: 500 },
    ],
  },
  {
    box: { width: 250, height: 250, x: 125, y: 750 },
    points: [
      { x: 125, y: 750 },
      { x: 375, y: 750 },
      { x: 250, y: 1000 },
    ],
  },
  {
    box: { width: 250, height: 250, x: 625, y: 750 },
    points: [
      { x: 625, y: 750 },
      { x: 875, y: 750 },
      { x: 750, y: 1000 },
    ],
  },
  {
    box: { width: 125, height: 125, x: 437.5, y: 125 },
    points: [
      { x: 437.5, y: 125 },
      { x: 562.5, y: 125 },
      { x: 500, y: 250 },
    ],
  },
  {
    box: { width: 125, height: 125, x: 312.5, y: 375 },
    points: [
      { x: 312.5, y: 375 },
      { x: 437.5, y: 375 },
      { x: 375, y: 500 },
    ],
  },
  {
    box: { width: 125, height: 125, x: 562.5, y: 375 },
    points: [
      { x: 562.5, y: 375 },
      { x: 687.5, y: 375 },
      { x: 625, y: 500 },
    ],
  },
  {
    box: { width: 125, height: 125, x: 187.5, y: 625 },
    points: [
      { x: 187.5, y: 625 },
      { x: 312.5, y: 625 },
      { x: 250, y: 750 },
    ],
  },
  {
    box: { width: 125, height: 125, x: 62.5, y: 875 },
    points: [
      { x: 62.5, y: 875 },
      { x: 187.5, y: 875 },
      { x: 125, y: 1000 },
    ],
  },
  {
    box: { width: 125, height: 125, x: 312.5, y: 875 },
    points: [
      { x: 312.5, y: 875 },
      { x: 437.5, y: 875 },
      { x: 375, y: 1000 },
    ],
  },
  {
    box: { width: 125, height: 125, x: 687.5, y: 625 },
    points: [
      { x: 687.5, y: 625 },
      { x: 812.5, y: 625 },
      { x: 750, y: 750 },
    ],
  },
  {
    box: { width: 125, height: 125, x: 562.5, y: 875 },
    points: [
      { x: 562.5, y: 875 },
      { x: 687.5, y: 875 },
      { x: 625, y: 1000 },
    ],
  },
  {
    box: { width: 125, height: 125, x: 812.5, y: 875 },
    points: [
      { x: 812.5, y: 875 },
      { x: 937.5, y: 875 },
      { x: 875, y: 1000 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 468.75, y: 62.5 },
    points: [
      { x: 468.75, y: 62.5 },
      { x: 531.25, y: 62.5 },
      { x: 500, y: 125 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 406.25, y: 187.5 },
    points: [
      { x: 406.25, y: 187.5 },
      { x: 468.75, y: 187.5 },
      { x: 437.5, y: 250 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 531.25, y: 187.5 },
    points: [
      { x: 531.25, y: 187.5 },
      { x: 593.75, y: 187.5 },
      { x: 562.5, y: 250 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 343.75, y: 312.5 },
    points: [
      { x: 343.75, y: 312.5 },
      { x: 406.25, y: 312.5 },
      { x: 375, y: 375 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 281.25, y: 437.5 },
    points: [
      { x: 281.25, y: 437.5 },
      { x: 343.75, y: 437.5 },
      { x: 312.5, y: 500 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 406.25, y: 437.5 },
    points: [
      { x: 406.25, y: 437.5 },
      { x: 468.75, y: 437.5 },
      { x: 437.5, y: 500 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 593.75, y: 312.5 },
    points: [
      { x: 593.75, y: 312.5 },
      { x: 656.25, y: 312.5 },
      { x: 625, y: 375 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 531.25, y: 437.5 },
    points: [
      { x: 531.25, y: 437.5 },
      { x: 593.75, y: 437.5 },
      { x: 562.5, y: 500 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 656.25, y: 437.5 },
    points: [
      { x: 656.25, y: 437.5 },
      { x: 718.75, y: 437.5 },
      { x: 687.5, y: 500 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 218.75, y: 562.5 },
    points: [
      { x: 218.75, y: 562.5 },
      { x: 281.25, y: 562.5 },
      { x: 250, y: 625 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 156.25, y: 687.5 },
    points: [
      { x: 156.25, y: 687.5 },
      { x: 218.75, y: 687.5 },
      { x: 187.5, y: 750 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 281.25, y: 687.5 },
    points: [
      { x: 281.25, y: 687.5 },
      { x: 343.75, y: 687.5 },
      { x: 312.5, y: 750 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 93.75, y: 812.5 },
    points: [
      { x: 93.75, y: 812.5 },
      { x: 156.25, y: 812.5 },
      { x: 125, y: 875 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 31.25, y: 937.5 },
    points: [
      { x: 31.25, y: 937.5 },
      { x: 93.75, y: 937.5 },
      { x: 62.5, y: 1000 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 156.25, y: 937.5 },
    points: [
      { x: 156.25, y: 937.5 },
      { x: 218.75, y: 937.5 },
      { x: 187.5, y: 1000 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 343.75, y: 812.5 },
    points: [
      { x: 343.75, y: 812.5 },
      { x: 406.25, y: 812.5 },
      { x: 375, y: 875 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 281.25, y: 937.5 },
    points: [
      { x: 281.25, y: 937.5 },
      { x: 343.75, y: 937.5 },
      { x: 312.5, y: 1000 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 406.25, y: 937.5 },
    points: [
      { x: 406.25, y: 937.5 },
      { x: 468.75, y: 937.5 },
      { x: 437.5, y: 1000 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 718.75, y: 562.5 },
    points: [
      { x: 718.75, y: 562.5 },
      { x: 781.25, y: 562.5 },
      { x: 750, y: 625 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 656.25, y: 687.5 },
    points: [
      { x: 656.25, y: 687.5 },
      { x: 718.75, y: 687.5 },
      { x: 687.5, y: 750 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 781.25, y: 687.5 },
    points: [
      { x: 781.25, y: 687.5 },
      { x: 843.75, y: 687.5 },
      { x: 812.5, y: 750 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 593.75, y: 812.5 },
    points: [
      { x: 593.75, y: 812.5 },
      { x: 656.25, y: 812.5 },
      { x: 625, y: 875 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 531.25, y: 937.5 },
    points: [
      { x: 531.25, y: 937.5 },
      { x: 593.75, y: 937.5 },
      { x: 562.5, y: 1000 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 656.25, y: 937.5 },
    points: [
      { x: 656.25, y: 937.5 },
      { x: 718.75, y: 937.5 },
      { x: 687.5, y: 1000 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 843.75, y: 812.5 },
    points: [
      { x: 843.75, y: 812.5 },
      { x: 906.25, y: 812.5 },
      { x: 875, y: 875 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 781.25, y: 937.5 },
    points: [
      { x: 781.25, y: 937.5 },
      { x: 843.75, y: 937.5 },
      { x: 812.5, y: 1000 },
    ],
  },
  {
    box: { width: 62.5, height: 62.5, x: 906.25, y: 937.5 },
    points: [
      { x: 906.25, y: 937.5 },
      { x: 968.75, y: 937.5 },
      { x: 937.5, y: 1000 },
    ],
  },
];

it("correctly creates sierpinski triangle", () => {
  const size = 1000;

  expect(
    createSierpinskiTriangle({
      size,
      iterations: 0,
    })
  ).toEqual(results.slice(0, 1));

  expect(
    createSierpinskiTriangle({
      size,
      iterations: 1,
    })
  ).toEqual(results.slice(0, 2));

  expect(
    createSierpinskiTriangle({
      size,
      iterations: 2,
    })
  ).toEqual(results.slice(0, 2 + 3));

  expect(
    createSierpinskiTriangle({
      size,
      iterations: 3,
    })
  ).toEqual(results.slice(0, 2 + 3 + 9));

  expect(
    createSierpinskiTriangle({
      size,
      iterations: 4,
    })
  ).toEqual(results.slice(0, 2 + 3 + 9 + 27));
});
