import { expect, test } from "vitest";
import { flat } from "./index";

// Testovacie dáta
const testArrays = [
  [1, 2, 3, [4, 5]],
  [1, [2, [3, [4, 5]]]],
  [],
  [1, 2, [3, 4], 5, [6, [7, 8], 9]],
  [[[[1]]]],
];

// Očakávané výsledky pre testovacie dáta
const expectedResults = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1],
];

test("flat - should flatten arrays correctly", () => {
  testArrays.forEach((arr, index) => {
    const result = flat(arr);
    expect(result).toEqual(expectedResults[index]);
  });
});

test("flat - should return an empty array for an empty input array", () => {
  const result = flat([]);
  expect(result).toEqual([]);
});

test("flat - should return an array with a single element for an input array with a single element", () => {
  const result = flat([1]);
  expect(result).toEqual([1]);
});

test("flat - should return the input array unchanged if it is already flat", () => {
  const inputArray = [1, 2, 3, 4, 5];
  const result = flat(inputArray);
  expect(result).toEqual(inputArray);
});
