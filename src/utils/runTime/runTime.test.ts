import { test } from "vitest";
import { runTime } from "./index";

test("runTime handles different function arguments", () => {
  const addNumbers = (a: number, b: number) => a * b;

  const tests: number[] = [];

  [10, 150, 1030, 10700, 190000, 1005000].map((number1) => {
    [10, 100, 1000, 10000, 100000, 1000000].map((number2) => {
      const time1 = runTime(addNumbers, number2, [number1, number2]);
      const time2 = runTime(addNumbers, number2, [number1, number2]);

      tests.push(Number(time1));
      tests.push(Number(time2));
    });
  });
  const sum = tests.reduce((acc, curr) => acc + curr, 0);
  const average = sum / tests.length;
  console.log(average);
});
