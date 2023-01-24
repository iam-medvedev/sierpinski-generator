export type Size = {
  height: number;
  width: number;
};

export type Point = {
  x: number;
  y: number;
};

export type Box = Size & Point;

export type Triangle = {
  box: Box;
  points: [Point, Point, Point];
};
