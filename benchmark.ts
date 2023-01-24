import b from "benny";
import { createSierpinskiTriangle } from "./src/triangle";

b.suite(
  "Iterations",

  b.add("1", () => createSierpinskiTriangle({ size: 1000, iterations: 1 })),
  b.add("2", () => createSierpinskiTriangle({ size: 1000, iterations: 2 })),
  b.add("3", () => createSierpinskiTriangle({ size: 1000, iterations: 3 })),
  b.add("4", () => createSierpinskiTriangle({ size: 1000, iterations: 4 })),

  b.cycle(),
  b.complete(),

  b.save({ file: "result", folder: ".bench", format: "chart.html" })
);
