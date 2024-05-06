import { expect, test } from "vitest";
import flattenArray from "./index";

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

test("flattenArray - should flatten arrays correctly", () => {
  testArrays.forEach((arr, index) => {
    const result = flattenArray(arr);
    expect(result).toEqual(expectedResults[index]);
  });
});

test("flattenArray - should return an empty array for an empty input array", () => {
  const result = flattenArray([]);
  expect(result).toEqual([]);
});

test("flattenArray - should return an array with a single element for an input array with a single element", () => {
  const result = flattenArray([1]);
  expect(result).toEqual([1]);
});

test("flattenArray - should return the input array unchanged if it is already flat", () => {
  const inputArray = [1, 2, 3, 4, 5];
  const result = flattenArray(inputArray);
  expect(result).toEqual(inputArray);
});
